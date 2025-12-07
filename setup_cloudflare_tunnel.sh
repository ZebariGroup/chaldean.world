#!/bin/bash
# Setup Cloudflare Tunnel (free alternative to ngrok)

echo "=== Cloudflare Tunnel Setup ==="
echo ""
echo "Cloudflare Tunnel is free and doesn't require authentication for basic use."
echo ""

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
    echo "Installing cloudflared..."
    
    # Detect architecture
    ARCH=$(uname -m)
    if [ "$ARCH" = "x86_64" ]; then
        ARCH="amd64"
    elif [ "$ARCH" = "aarch64" ]; then
        ARCH="arm64"
    else
        echo "⚠️  Unsupported architecture: $ARCH"
        exit 1
    fi
    
    # Download cloudflared
    wget "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-${ARCH}" -O /tmp/cloudflared
    chmod +x /tmp/cloudflared
    mv /tmp/cloudflared ~/.local/bin/cloudflared
    
    echo "✅ cloudflared installed"
else
    echo "✅ cloudflared already installed"
fi

export PATH="$HOME/.local/bin:$PATH"

echo ""
echo "Starting Cloudflare Tunnel..."
echo "This will expose Supabase on port 54321"
echo "Press Ctrl+C to stop"
echo ""
echo "Your Supabase URL will be shown below. Use it for Vercel environment variables."
echo ""

cloudflared tunnel --url http://108.202.235.64:54321




