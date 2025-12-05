#!/bin/bash
# Restart Supabase and ensure migrations are applied

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Restarting Supabase ==="
echo ""

# Stop Supabase
echo "Stopping Supabase..."
supabase stop 2>/dev/null || sudo ~/.local/bin/supabase stop 2>/dev/null || echo "Already stopped"

sleep 2

# Start Supabase (this automatically applies migrations)
echo "Starting Supabase with migrations..."
if groups | grep -q docker; then
    supabase start
else
    echo "⚠️  Running with sudo (user not in docker group)"
    sudo ~/.local/bin/supabase start
fi

echo ""
echo "✅ Supabase restarted"
echo ""
echo "Getting status..."
if groups | grep -q docker; then
    supabase status
else
    sudo ~/.local/bin/supabase status
fi


