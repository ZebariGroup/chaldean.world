#!/bin/bash
# Force apply migrations to fix database schema

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Applying Database Migrations ==="
echo ""
echo "This will reset the database and apply all migrations."
echo "⚠️  WARNING: This will delete all existing data!"
echo ""
read -p "Continue? (y/N): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "Cancelled."
    exit 0
fi

echo ""
echo "Stopping Supabase..."
if groups | grep -q docker; then
    supabase stop 2>/dev/null || true
else
    sudo ~/.local/bin/supabase stop 2>/dev/null || true
fi

sleep 2

echo "Starting Supabase (this applies migrations)..."
if groups | grep -q docker; then
    supabase start
else
    echo "⚠️  Running with sudo (user not in docker group)"
    sudo ~/.local/bin/supabase start
fi

echo ""
echo "✅ Migrations applied!"
echo ""
echo "Verifying trigger exists..."
DB_URL=$(sudo ~/.local/bin/supabase status 2>/dev/null | grep "DB URL" | awk '{print $3}')

if [ -n "$DB_URL" ]; then
    if echo "SELECT proname FROM pg_proc WHERE proname = 'create_user_progress';" | psql "$DB_URL" 2>/dev/null | grep -q "create_user_progress"; then
        echo "✅ Trigger function exists"
    else
        echo "⚠️  Trigger function not found - run ./FIX_AUTH_TRIGGER.sh"
    fi
fi

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
    echo "Try running: ./FIX_AUTH_TRIGGER.sh"
else
    echo "✅ Signup works!"
fi





