#!/bin/bash
# Start Cloudflare Tunnel and capture the URL
# This script runs the tunnel and outputs the URL to a file

set -e

export PATH="$HOME/.local/bin:$PATH"

TUNNEL_LOG="$HOME/.cloudflared/tunnel-url.txt"
mkdir -p "$HOME/.cloudflared"

echo "Starting Cloudflare Tunnel..."
echo "URL will be saved to: $TUNNEL_LOG"
echo ""

# Start tunnel and capture URL
cloudflared tunnel --url http://108.202.235.64:54321 2>&1 | tee >(
    while IFS= read -r line; do
        # Look for the URL pattern
        if [[ $line =~ https://[a-zA-Z0-9-]+\.trycloudflare\.com ]]; then
            URL="${BASH_REMATCH[0]}"
            echo "$URL" > "$TUNNEL_LOG"
            echo ""
            echo "✅ Tunnel URL captured: $URL"
            echo "   Saved to: $TUNNEL_LOG"
            echo ""
            echo "⚠️  IMPORTANT: This URL changes on each restart!"
            echo "   For production, use a custom domain or named tunnel."
        fi
        echo "$line"
    done
)

