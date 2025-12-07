#!/bin/bash
# Get current Cloudflare tunnel URL from logs

TUNNEL_URL=$(journalctl --user -u cloudflare-tunnel.service -n 200 --no-pager 2>/dev/null | grep -oP 'https://[a-zA-Z0-9-]+\.trycloudflare\.com' | tail -1)

if [ -z "$TUNNEL_URL" ]; then
    echo "⚠️  Could not find tunnel URL. Is the tunnel running?"
    echo "   Check: systemctl --user status cloudflare-tunnel.service"
    exit 1
fi

echo "$TUNNEL_URL"


