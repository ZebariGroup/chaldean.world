#!/bin/bash
# Setup ngrok authentication

echo "=== ngrok Authentication Setup ==="
echo ""
echo "ngrok requires a free account to use."
echo ""
echo "Steps:"
echo "1. Sign up at: https://dashboard.ngrok.com/signup"
echo "2. Get your authtoken from: https://dashboard.ngrok.com/get-started/your-authtoken"
echo ""
echo "Enter your ngrok authtoken:"
read -r AUTHTOKEN

if [ -z "$AUTHTOKEN" ]; then
    echo "⚠️  No authtoken provided. Exiting."
    exit 1
fi

export PATH="$HOME/.local/bin:$PATH"
ngrok config add-authtoken "$AUTHTOKEN"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ngrok authenticated successfully!"
    echo ""
    echo "Now you can run:"
    echo "  ./EXPOSE_SUPABASE.sh"
else
    echo ""
    echo "❌ Failed to authenticate ngrok"
    exit 1
fi


