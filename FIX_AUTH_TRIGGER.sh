#!/bin/bash
# Fix the auth trigger that creates user_progress entries

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Fixing Auth Trigger ==="
echo ""
echo "This script will manually apply the trigger that creates user_progress entries."
echo ""

# Get database connection info
DB_URL=$(sudo ~/.local/bin/supabase status 2>/dev/null | grep "DB URL" | awk '{print $3}')

if [ -z "$DB_URL" ]; then
    echo "❌ Could not get database URL. Is Supabase running?"
    echo "Run: ./START_SUPABASE.sh"
    exit 1
fi

echo "Database URL: $DB_URL"
echo ""

# SQL to create the trigger function and trigger
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

echo "Applying trigger..."
echo ""
echo "Note: You may need to enter your sudo password for database access."
echo ""

# Try without sudo first, then with sudo if needed
if echo "$SQL" | psql "$DB_URL" 2>&1; then
    SUCCESS=true
else
    echo "Trying with sudo..."
    echo "$SQL" | sudo -u postgres psql -h localhost -p 54322 -U postgres -d postgres 2>&1
    SUCCESS=$?
fi

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Trigger created successfully!"
    echo ""
    echo "Testing signup..."
    TEST_EMAIL="test$(date +%s)@test.com"
    curl -s -X POST http://localhost:54321/auth/v1/signup \
      -H "Content-Type: application/json" \
      -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0" \
      -d "{\"email\":\"$TEST_EMAIL\",\"password\":\"test123456\"}" | grep -q "error" && echo "❌ Signup still failing" || echo "✅ Signup works!"
else
    echo ""
    echo "❌ Failed to create trigger. Check the error above."
    exit 1
fi

