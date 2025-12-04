#!/bin/bash
# Script to start Supabase with proper permissions

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"
SUPABASE_CMD="$HOME/.local/bin/supabase"

# Check if user is in docker group
if groups | grep -q docker; then
    echo "Starting Supabase..."
    $SUPABASE_CMD start
else
    echo "⚠️  User not in docker group."
    echo ""
    echo "To fix permanently, run:"
    echo "  sudo usermod -aG docker $USER"
    echo "  newgrp docker"
    echo ""
    echo "Then run this script again."
    echo ""
    echo "Alternatively, you can start Supabase manually with:"
    echo "  export PATH=\"\$HOME/.local/bin:\$PATH\""
    echo "  supabase start"
    exit 1
fi

echo ""
echo "=== Supabase Status ==="
$SUPABASE_CMD status

echo ""
echo "✅ Save the API URL and anon key above for Vercel environment variables!"

