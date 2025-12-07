#!/bin/bash
# Setup persistent Cloudflare Tunnel with a named tunnel
# This creates a tunnel with a persistent URL that doesn't change on reboot

set -e

echo "=== Persistent Cloudflare Tunnel Setup ==="
echo ""
echo "This will create a named tunnel with a persistent URL."
echo "You'll need to login to Cloudflare (free account)."
echo ""

export PATH="$HOME/.local/bin:$PATH"

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
    echo "Installing cloudflared..."
    
    ARCH=$(uname -m)
    if [ "$ARCH" = "x86_64" ]; then
        ARCH="amd64"
    elif [ "$ARCH" = "aarch64" ]; then
        ARCH="arm64"
    else
        echo "⚠️  Unsupported architecture: $ARCH"
        exit 1
    fi
    
    wget "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-${ARCH}" -O /tmp/cloudflared
    chmod +x /tmp/cloudflared
    mkdir -p ~/.local/bin
    mv /tmp/cloudflared ~/.local/bin/cloudflared
    
    echo "✅ cloudflared installed"
fi

TUNNEL_NAME="chaldean-supabase"
CONFIG_DIR="$HOME/.cloudflared"
CONFIG_FILE="$CONFIG_DIR/config.yml"

echo ""
echo "Step 1: Login to Cloudflare"
echo "This will open a browser for authentication..."
cloudflared tunnel login

echo ""
echo "Step 2: Creating named tunnel '$TUNNEL_NAME'..."
if cloudflared tunnel list 2>/dev/null | grep -q "$TUNNEL_NAME"; then
    echo "⚠️  Tunnel '$TUNNEL_NAME' already exists. Using existing tunnel."
else
    cloudflared tunnel create "$TUNNEL_NAME"
    echo "✅ Tunnel created"
fi

echo ""
echo "Step 3: Configuring tunnel..."
mkdir -p "$CONFIG_DIR"

# Create or update config file
cat > "$CONFIG_FILE" <<EOF
tunnel: $TUNNEL_NAME
credentials-file: $CONFIG_DIR/${TUNNEL_NAME}.json

ingress:
  - hostname: chaldean-supabase.trycloudflare.com
    service: http://localhost:54321
  - service: http_status:404
EOF

echo "✅ Configuration saved to $CONFIG_FILE"

echo ""
echo "Step 4: Creating DNS route (this may require manual setup)..."
echo "Attempting to create route..."
cloudflared tunnel route dns "$TUNNEL_NAME" chaldean-supabase.trycloudflare.com 2>&1 || {
    echo "⚠️  Could not create DNS route automatically."
    echo "   For a persistent URL, you can:"
    echo "   1. Use a custom domain (recommended for production)"
    echo "   2. Or use the quick tunnel URL (changes on restart)"
    echo ""
    echo "   To use a custom domain:"
    echo "   - Add a CNAME record in Cloudflare DNS pointing to:"
    cloudflared tunnel info "$TUNNEL_NAME" 2>/dev/null | grep -i "id\|name" || echo "   - Get tunnel ID with: cloudflared tunnel list"
}

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the tunnel manually:"
echo "  cloudflared tunnel run $TUNNEL_NAME"
echo ""
echo "To get the tunnel URL:"
echo "  cloudflared tunnel info $TUNNEL_NAME"
echo ""
echo "The tunnel will be started automatically via systemd service."


