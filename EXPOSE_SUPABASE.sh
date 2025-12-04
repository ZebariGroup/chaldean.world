#!/bin/bash
# Script to expose Supabase API using ngrok

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "ngrok not found. Installing..."
    wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz -O /tmp/ngrok.tgz
    tar -xzf /tmp/ngrok.tgz -C ~/.local/bin/
    rm /tmp/ngrok.tgz
fi

echo "Starting ngrok tunnel to Supabase API (port 54321)..."
echo "Press Ctrl+C to stop"
echo ""
echo "Your Supabase URL will be shown below. Use the HTTPS URL for Vercel environment variables."
echo ""

ngrok http 54321

