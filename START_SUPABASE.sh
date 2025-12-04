#!/bin/bash
# Script to start Supabase with proper permissions

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

# Check if user is in docker group
if groups | grep -q docker; then
    echo "Starting Supabase..."
    supabase start
else
    echo "User not in docker group. Trying with sudo..."
    echo "To fix permanently, run: sudo usermod -aG docker $USER && newgrp docker"
    sudo supabase start
fi

echo ""
echo "=== Supabase Status ==="
supabase status

echo ""
echo "Save the API URL and anon key above for Vercel environment variables!"

