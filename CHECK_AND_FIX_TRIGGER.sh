#!/bin/bash
# Check and fix the auth trigger via CLI

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Checking Auth Trigger ==="
echo ""

# Check if user is in docker group
USE_SUDO=""
if ! groups | grep -q docker; then
    echo "⚠️  User not in docker group, will use sudo"
    USE_SUDO="sudo"
fi

# Find database container
if [ -n "$USE_SUDO" ]; then
    DB_CONTAINER=$(sudo docker ps --format "{{.Names}}" 2>/dev/null | grep "supabase_db" | head -1)
else
    DB_CONTAINER=$(docker ps --format "{{.Names}}" 2>/dev/null | grep "supabase_db" | head -1)
fi

if [ -z "$DB_CONTAINER" ]; then
    echo "❌ Supabase database container not found."
    echo "Please start Supabase first: ./START_SUPABASE.sh"
    exit 1
fi

echo "Found database container: $DB_CONTAINER"
echo ""

# Check if trigger function exists
echo "Checking if trigger function exists..."
if [ -n "$USE_SUDO" ]; then
    FUNCTION_EXISTS=$(sudo docker exec "$DB_CONTAINER" psql -U postgres -d postgres -tAc "SELECT EXISTS(SELECT 1 FROM pg_proc WHERE proname = 'create_user_progress');" 2>/dev/null)
else
    FUNCTION_EXISTS=$(docker exec "$DB_CONTAINER" psql -U postgres -d postgres -tAc "SELECT EXISTS(SELECT 1 FROM pg_proc WHERE proname = 'create_user_progress');" 2>/dev/null)
fi

if [ "$FUNCTION_EXISTS" = "t" ]; then
    echo "✅ Trigger function exists"
else
    echo "❌ Trigger function NOT found"
fi

# Check if trigger exists
echo "Checking if trigger exists..."
if [ -n "$USE_SUDO" ]; then
    TRIGGER_EXISTS=$(sudo docker exec "$DB_CONTAINER" psql -U postgres -d postgres -tAc "SELECT EXISTS(SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created');" 2>/dev/null)
else
    TRIGGER_EXISTS=$(docker exec "$DB_CONTAINER" psql -U postgres -d postgres -tAc "SELECT EXISTS(SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created');" 2>/dev/null)
fi

if [ "$TRIGGER_EXISTS" = "t" ]; then
    echo "✅ Trigger exists"
else
    echo "❌ Trigger NOT found"
fi

# Check if user_progress table exists
echo "Checking if user_progress table exists..."
if [ -n "$USE_SUDO" ]; then
    TABLE_EXISTS=$(sudo docker exec "$DB_CONTAINER" psql -U postgres -d postgres -tAc "SELECT EXISTS(SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'user_progress');" 2>/dev/null)
else
    TABLE_EXISTS=$(docker exec "$DB_CONTAINER" psql -U postgres -d postgres -tAc "SELECT EXISTS(SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'user_progress');" 2>/dev/null)
fi

if [ "$TABLE_EXISTS" = "t" ]; then
    echo "✅ user_progress table exists"
else
    echo "❌ user_progress table NOT found - migrations may not be applied"
fi

echo ""

# If trigger or function is missing, fix it
if [ "$FUNCTION_EXISTS" != "t" ] || [ "$TRIGGER_EXISTS" != "t" ]; then
    echo "=== Fixing Trigger ==="
    echo ""
    
    SQL=$(cat <<'EOF'
-- Function to create user_progress entry when user signs up
CREATE OR REPLACE FUNCTION create_user_progress()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_progress (id)
  VALUES (NEW.id)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION create_user_progress();
EOF
)

    if [ -n "$USE_SUDO" ]; then
        echo "$SQL" | sudo docker exec -i "$DB_CONTAINER" psql -U postgres -d postgres 2>&1
    else
        echo "$SQL" | docker exec -i "$DB_CONTAINER" psql -U postgres -d postgres 2>&1
    fi
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Trigger fixed successfully!"
    else
        echo ""
        echo "❌ Failed to fix trigger"
        exit 1
    fi
else
    echo "✅ Everything looks good - trigger is properly configured"
fi

echo ""
echo "=== Verification ==="
echo ""

# Verify trigger is working
if [ -n "$USE_SUDO" ]; then
    VERIFY=$(sudo docker exec "$DB_CONTAINER" psql -U postgres -d postgres -tAc "SELECT tgname FROM pg_trigger WHERE tgname = 'on_auth_user_created';" 2>/dev/null)
else
    VERIFY=$(docker exec "$DB_CONTAINER" psql -U postgres -d postgres -tAc "SELECT tgname FROM pg_trigger WHERE tgname = 'on_auth_user_created';" 2>/dev/null)
fi

if [ -n "$VERIFY" ]; then
    echo "✅ Trigger verified: $VERIFY"
else
    echo "❌ Trigger verification failed"
fi

echo ""
echo "Done!"





