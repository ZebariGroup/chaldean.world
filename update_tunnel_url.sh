#!/bin/bash
# Extract Cloudflare tunnel URL from systemd logs and update Vercel

set -e

echo "=== Updating Tunnel URL ==="
echo ""

# Wait a moment for tunnel to start
sleep 3

# Extract URL from journal logs
TUNNEL_URL=$(journalctl --user -u cloudflare-tunnel.service -n 100 --no-pager | grep -oP 'https://[a-zA-Z0-9-]+\.trycloudflare\.com' | tail -1)

if [ -z "$TUNNEL_URL" ]; then
    echo "⚠️  Could not find tunnel URL in logs."
    echo "   Make sure cloudflare-tunnel.service is running."
    echo ""
    echo "   Check status: systemctl --user status cloudflare-tunnel.service"
    echo "   View logs: journalctl --user -u cloudflare-tunnel.service -f"
    exit 1
fi

echo "Found tunnel URL: $TUNNEL_URL"
echo ""

# Check if vercel CLI is available (try npx first, then direct)
VERCEL_CMD="vercel"
if ! command -v vercel &> /dev/null; then
    if command -v npx &> /dev/null; then
        VERCEL_CMD="npx vercel"
    else
        echo "⚠️  Vercel CLI not found. Install with: npm install -g vercel"
        echo ""
        echo "Manual update:"
        echo "  1. Go to https://vercel.com/dashboard"
        echo "  2. Settings → Environment Variables"
        echo "  3. Update VITE_SUPABASE_URL to: $TUNNEL_URL"
        exit 0
    fi
fi

# Check if logged in
if ! $VERCEL_CMD whoami &>/dev/null; then
    echo "⚠️  Not logged into Vercel. Please login:"
    echo "  $VERCEL_CMD login"
    exit 1
fi

echo "Updating Vercel environment variables..."
echo ""

# Update Vercel env vars
$VERCEL_CMD env rm VITE_SUPABASE_URL production --yes 2>/dev/null || true
$VERCEL_CMD env rm VITE_SUPABASE_URL preview --yes 2>/dev/null || true

echo "$TUNNEL_URL" | $VERCEL_CMD env add VITE_SUPABASE_URL production
echo "$TUNNEL_URL" | $VERCEL_CMD env add VITE_SUPABASE_URL preview

echo ""
echo "✅ Vercel environment variables updated!"
echo ""
echo "⚠️  IMPORTANT: This URL will change on each restart."
echo "   For production, consider:"
echo "   1. Using a custom domain with Cloudflare"
echo "   2. Or running this script after each restart"
echo ""
echo "To redeploy Vercel: vercel --prod"


