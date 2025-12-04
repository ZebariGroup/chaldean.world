#!/bin/bash
# Quick script to expose Supabase and show the URL

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Quick Supabase Exposure ==="
echo ""
echo "Starting Cloudflare Tunnel (no account needed)..."
echo ""
echo "Your Supabase URL will appear below. Copy it for Vercel!"
echo "Press Ctrl+C to stop"
echo ""

cloudflared tunnel --url http://localhost:54321 2>&1 | tee /tmp/cloudflare_url.log

