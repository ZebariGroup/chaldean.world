#!/bin/bash
# Setup SendGrid API key for Supabase email sending

cd "$(dirname "$0")"

echo "=== SendGrid Setup ==="
echo ""
echo "This script will help you configure SendGrid for email sending."
echo ""

# Check if API key already exists
if [ -f .env ] && grep -q "SENDGRID_API_KEY" .env; then
    echo "⚠️  SENDGRID_API_KEY already found in .env file"
    read -p "Do you want to update it? (y/N): " update
    if [ "$update" != "y" ] && [ "$update" != "Y" ]; then
        echo "Keeping existing configuration."
        exit 0
    fi
fi

echo "To get your SendGrid API key:"
echo "1. Sign up at https://sendgrid.com (free tier available)"
echo "2. Go to Settings > API Keys"
echo "3. Click 'Create API Key'"
echo "4. Name it (e.g., 'Supabase Email')"
echo "5. Select 'Full Access' or 'Restricted Access' with 'Mail Send' permission"
echo "6. Copy the API key (you'll only see it once!)"
echo ""

read -p "Enter your SendGrid API key: " api_key

if [ -z "$api_key" ]; then
    echo "❌ API key cannot be empty"
    exit 1
fi

# Validate API key format (SendGrid API keys start with SG.)
if [[ ! "$api_key" =~ ^SG\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$ ]]; then
    echo "⚠️  Warning: API key format doesn't look like a SendGrid key (should start with SG.)"
    read -p "Continue anyway? (y/N): " continue_anyway
    if [ "$continue_anyway" != "y" ] && [ "$continue_anyway" != "Y" ]; then
        exit 1
    fi
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    touch .env
    echo "# Environment variables for Supabase" >> .env
fi

# Remove existing SENDGRID_API_KEY if present
sed -i '/^SENDGRID_API_KEY=/d' .env 2>/dev/null || sed -i '' '/^SENDGRID_API_KEY=/d' .env 2>/dev/null

# Add new API key
echo "SENDGRID_API_KEY=$api_key" >> .env

echo ""
echo "✅ SendGrid API key saved to .env file"
echo ""

# Check if Supabase is running
if command -v supabase >/dev/null 2>&1; then
    export PATH="$HOME/.local/bin:$PATH"
    
    # Check if Supabase is running
    if supabase status >/dev/null 2>&1; then
        echo "⚠️  Supabase is currently running."
        echo "You need to restart Supabase for the changes to take effect:"
        echo ""
        echo "  supabase stop"
        echo "  supabase start"
        echo ""
        read -p "Restart Supabase now? (y/N): " restart
        if [ "$restart" = "y" ] || [ "$restart" = "Y" ]; then
            echo "Stopping Supabase..."
            supabase stop
            echo "Starting Supabase..."
            supabase start
            echo ""
            echo "✅ Supabase restarted with SendGrid configuration"
        fi
    else
        echo "ℹ️  Supabase is not running. Start it with: supabase start"
    fi
else
    echo "ℹ️  Supabase CLI not found. Make sure to restart Supabase after setting the environment variable."
fi

echo ""
echo "=== Next Steps ==="
echo ""
echo "1. Make sure .env file is loaded when starting Supabase"
echo "2. Test email sending by signing up a new user"
echo "3. Check your email inbox (and spam folder)"
echo ""
echo "To verify SendGrid is working:"
echo "  - Sign up a new user"
echo "  - Check the email inbox"
echo "  - Click the confirmation link"
echo ""





