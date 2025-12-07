#!/bin/bash
# Manual fix for auth trigger - run this if FIX_AUTH_TRIGGER.sh doesn't work

cd "$(dirname "$0")"

echo "=== Manual Auth Trigger Fix ==="
echo ""
echo "This will create the trigger function and trigger manually."
echo ""

# Find database container
DB_CONTAINER=$(docker ps --format "{{.Names}}" 2>&1 | grep "supabase_db" | head -1)

if [ -z "$DB_CONTAINER" ]; then
    echo "❌ Could not find Supabase database container."
    echo ""
    echo "Available containers:"
    docker ps --format "{{.Names}}" 2>&1 | head -10
    echo ""
    echo "Please run: ./START_SUPABASE.sh"
    exit 1
fi

echo "Found database container: $DB_CONTAINER"
echo ""

# SQL commands
cat <<'SQL' | docker exec -i "$DB_CONTAINER" psql -U postgres -d postgres

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

-- Verify it was created
SELECT 'Trigger function exists:' as status, proname 
FROM pg_proc 
WHERE proname = 'create_user_progress';

SELECT 'Trigger exists:' as status, tgname 
FROM pg_trigger 
WHERE tgname = 'on_auth_user_created';

SQL

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Trigger created successfully!"
    echo ""
    echo "Testing signup..."
    TEST_EMAIL="test$(date +%s)@test.com"
    RESPONSE=$(curl -s -X POST http://localhost:54321/auth/v1/signup \
      -H "Content-Type: application/json" \
      -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0" \
      -d "{\"email\":\"$TEST_EMAIL\",\"password\":\"test123456\"}")
    
    if echo "$RESPONSE" | grep -q "error"; then
        echo "❌ Signup still failing: $RESPONSE"
        echo ""
        echo "Check Supabase logs:"
        echo "  docker logs supabase_auth_chaldean.world"
    else
        echo "✅ Signup works! Response: $RESPONSE"
    fi
else
    echo ""
    echo "❌ Failed to create trigger. Check Docker permissions."
    echo "You may need to run: sudo usermod -aG docker \$USER"
    echo "Then log out and back in."
fi





