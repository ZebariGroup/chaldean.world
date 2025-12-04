#!/bin/bash
# Interactive script to set Vercel environment variables

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Vercel Environment Variables Setup ==="
echo ""

# Check if vercel is available
if ! command -v npx &> /dev/null; then
    echo "⚠️  npx not found. Make sure Node.js is installed."
    exit 1
fi

# Check if logged into Vercel
if ! npx vercel whoami &>/dev/null 2>&1; then
    echo "⚠️  Not logged into Vercel."
    echo ""
    echo "Please login first:"
    echo "  npx vercel login"
    echo ""
    echo "Then run this script again."
    exit 1
fi

echo "✅ Logged into Vercel as: $(npx vercel whoami)"
echo ""

# Get Supabase URL
echo "Step 1: Get Supabase URL"
echo "Is ngrok running? (y/n)"
read -r ngrok_running

if [ "$ngrok_running" = "y" ] || [ "$ngrok_running" = "Y" ]; then
    NGROK_URL=$(curl -s http://localhost:4040/api/tunnels 2>/dev/null | grep -o '"public_url":"https://[^"]*"' | head -1 | cut -d'"' -f4)
    if [ -n "$NGROK_URL" ]; then
        SUPABASE_URL="$NGROK_URL"
        echo "✅ Found ngrok URL: $SUPABASE_URL"
    else
        echo "⚠️  Could not get ngrok URL. Please enter it manually:"
        read -r SUPABASE_URL
    fi
else
    echo "Enter your Supabase URL (e.g., https://your-domain.com or ngrok URL):"
    read -r SUPABASE_URL
fi

echo ""
echo "Step 2: Get Supabase Anon Key"
echo "Run this command to get your anon key:"
echo "  sudo $HOME/.local/bin/supabase status | grep 'anon key'"
echo ""
echo "Enter your anon key:"
read -r ANON_KEY

echo ""
echo "=== Setting Environment Variables ==="
echo ""

# Set for production
echo "Setting VITE_SUPABASE_URL for production..."
echo "$SUPABASE_URL" | npx vercel env add VITE_SUPABASE_URL production

echo "Setting VITE_SUPABASE_URL for preview..."
echo "$SUPABASE_URL" | npx vercel env add VITE_SUPABASE_URL preview

echo "Setting VITE_SUPABASE_URL for development..."
echo "$SUPABASE_URL" | npx vercel env add VITE_SUPABASE_URL development

echo ""
echo "Setting VITE_SUPABASE_ANON_KEY for production..."
echo "$ANON_KEY" | npx vercel env add VITE_SUPABASE_ANON_KEY production

echo "Setting VITE_SUPABASE_ANON_KEY for preview..."
echo "$ANON_KEY" | npx vercel env add VITE_SUPABASE_ANON_KEY preview

echo "Setting VITE_SUPABASE_ANON_KEY for development..."
echo "$ANON_KEY" | npx vercel env add VITE_SUPABASE_ANON_KEY development

echo ""
echo "✅ Environment variables set!"
echo ""
echo "To verify:"
echo "  npx vercel env ls"
echo ""
echo "To redeploy:"
echo "  npx vercel --prod"

