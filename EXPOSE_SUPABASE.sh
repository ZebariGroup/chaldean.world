#!/bin/bash
# Script to expose Supabase API using ngrok or Cloudflare Tunnel

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

# Check if ngrok is authenticated
if ngrok config check &>/dev/null; then
    echo "Starting ngrok tunnel to Supabase API (port 54321)..."
    echo "Press Ctrl+C to stop"
    echo ""
    echo "Your Supabase URL will be shown below. Use the HTTPS URL for Vercel environment variables."
    echo ""
    ngrok http 54321
else
    echo "⚠️  ngrok not authenticated."
    echo ""
    echo "Options:"
    echo "1. Authenticate ngrok (free account required):"
    echo "   ./setup_ngrok.sh"
    echo ""
    echo "2. Use Cloudflare Tunnel (free, no account needed):"
    echo "   ./setup_cloudflare_tunnel.sh"
    echo ""
    echo "Choose option (1 or 2):"
    read -r choice
    
    if [ "$choice" = "1" ]; then
        ./setup_ngrok.sh
        echo ""
        echo "Now starting ngrok..."
        ngrok http 54321
    elif [ "$choice" = "2" ]; then
        ./setup_cloudflare_tunnel.sh
    else
        echo "Invalid choice. Exiting."
        exit 1
    fi
fi
