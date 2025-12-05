#!/bin/bash
# Reset database and apply all migrations via CLI

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Resetting Database and Applying Migrations ==="
echo ""
echo "⚠️  WARNING: This will delete all existing data!"
echo ""

# Check if user is in docker group
USE_SUDO=""
if ! groups | grep -q docker; then
    echo "⚠️  User not in docker group, will use sudo"
    USE_SUDO="sudo"
fi

# Reset database (applies all migrations)
echo "Resetting database..."
if [ -n "$USE_SUDO" ]; then
    sudo ~/.local/bin/supabase db reset --local --yes
else
    supabase db reset --local --yes
fi

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Database reset and migrations applied!"
    echo ""
    echo "Verifying trigger..."
    ./CHECK_AND_FIX_TRIGGER.sh
else
    echo ""
    echo "❌ Failed to reset database"
    exit 1
fi


