#!/bin/bash
# Script to set Vercel environment variables

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Vercel Environment Variables Setup ==="
echo ""

# Get Supabase status
echo "Getting Supabase credentials..."
SUPABASE_STATUS=$(sudo $HOME/.local/bin/supabase status 2>/dev/null)

if [ $? -ne 0 ]; then
    echo "⚠️  Could not get Supabase status. Make sure Supabase is running."
    echo "Run: ./START_SUPABASE.sh"
    exit 1
fi

# Extract API URL and anon key
API_URL=$(echo "$SUPABASE_STATUS" | grep "API URL" | awk '{print $3}' | head -1)
ANON_KEY=$(echo "$SUPABASE_STATUS" | grep "anon key" | awk '{print $3}' | head -1)

if [ -z "$API_URL" ] || [ -z "$ANON_KEY" ]; then
    echo "⚠️  Could not extract credentials from Supabase status."
    echo "Please run 'supabase status' manually and note the values."
    exit 1
fi

echo "Found Supabase credentials:"
echo "  API URL: $API_URL"
echo "  Anon Key: ${ANON_KEY:0:20}..."
echo ""

# Check if ngrok is running
NGROK_URL=$(curl -s http://localhost:4040/api/tunnels 2>/dev/null | grep -o '"public_url":"https://[^"]*"' | head -1 | cut -d'"' -f4)

if [ -n "$NGROK_URL" ]; then
    echo "✅ Found ngrok tunnel: $NGROK_URL"
    echo ""
    echo "Using ngrok URL for Vercel (exposed to internet)"
    EXPOSED_URL="$NGROK_URL"
else
    echo "⚠️  ngrok not running. Using local API URL."
    echo "   Note: This will only work for local development."
    echo "   For Vercel, you need to expose Supabase first:"
    echo "   ./EXPOSE_SUPABASE.sh"
    echo ""
    EXPOSED_URL="$API_URL"
fi

echo ""
echo "=== Setting Vercel Environment Variables ==="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if logged in
if ! vercel whoami &>/dev/null; then
    echo "⚠️  Not logged into Vercel. Please login:"
    echo "  vercel login"
    echo ""
    echo "Then run this script again."
    exit 1
fi

echo "Setting environment variables in Vercel..."
echo ""

# Set environment variables
vercel env add VITE_SUPABASE_URL production <<< "$EXPOSED_URL" 2>&1
vercel env add VITE_SUPABASE_URL preview <<< "$EXPOSED_URL" 2>&1
vercel env add VITE_SUPABASE_URL development <<< "$API_URL" 2>&1

vercel env add VITE_SUPABASE_ANON_KEY production <<< "$ANON_KEY" 2>&1
vercel env add VITE_SUPABASE_ANON_KEY preview <<< "$ANON_KEY" 2>&1
vercel env add VITE_SUPABASE_ANON_KEY development <<< "$ANON_KEY" 2>&1

echo ""
echo "✅ Environment variables set!"
echo ""
echo "To verify, run:"
echo "  vercel env ls"
echo ""
echo "To redeploy with new env vars:"
echo "  vercel --prod"

