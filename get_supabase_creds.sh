#!/bin/bash
# Get Supabase credentials for Vercel setup

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Supabase Credentials ==="
echo ""

# Try to get status
if sudo $HOME/.local/bin/supabase status 2>/dev/null | grep -q "API URL"; then
    sudo $HOME/.local/bin/supabase status | grep -E "API URL|anon key" | head -2
    echo ""
    echo "Copy these values for Vercel environment variables"
else
    echo "⚠️  Could not get Supabase status."
    echo "Make sure Supabase is running: ./START_SUPABASE.sh"
fi

