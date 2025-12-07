# Cloudflare Tunnel Setup for Production

## Problem
The quick tunnel (`cloudflared tunnel --url`) creates a random URL that changes on each restart, breaking your frontend connection.

## Solution Options

### Option 1: Named Tunnel with Custom Domain (Recommended for Production)

This gives you a **permanent URL** that never changes.

1. **Login to Cloudflare**:
```bash
cloudflared tunnel login
```

2. **Create a named tunnel**:
```bash
cloudflared tunnel create chaldean-supabase
```

3. **Configure tunnel**:
```bash
mkdir -p ~/.cloudflared
cat > ~/.cloudflared/config.yml <<EOF
tunnel: chaldean-supabase
credentials-file: ~/.cloudflared/chaldean-supabase.json

ingress:
  - hostname: supabase.yourdomain.com
    service: http://localhost:54321
  - service: http_status:404
EOF
```

4. **Add DNS record in Cloudflare**:
   - Go to Cloudflare Dashboard → Your Domain → DNS
   - Add CNAME: `supabase` → `[TUNNEL-ID].cfargotunnel.com`
   - Get tunnel ID: `cloudflared tunnel list`

5. **Update systemd service** to use named tunnel:
```bash
# Edit ~/.config/systemd/user/cloudflare-tunnel.service
# Change ExecStart to:
ExecStart=/home/supabase/.local/bin/cloudflared tunnel run chaldean-supabase
```

6. **Update Vercel** with permanent URL:
```
VITE_SUPABASE_URL=https://supabase.yourdomain.com
```

### Option 2: Auto-Update Script (Quick Fix)

Use the provided script to automatically update Vercel when tunnel restarts:

```bash
# After tunnel starts, run:
./update_tunnel_url.sh
```

This extracts the URL from logs and updates Vercel automatically.

### Option 3: Use Your Own Domain with Port Forwarding

1. Configure router to forward port 54321
2. Point DNS to your public IP
3. Use reverse proxy (nginx/Caddy) for SSL
4. Use permanent URL: `https://supabase.yourdomain.com`

## Current Setup

The systemd service is configured to:
- Start automatically on boot
- Restart on failure
- Run the quick tunnel (URL changes on restart)

## To Get Current Tunnel URL

```bash
# View logs
journalctl --user -u cloudflare-tunnel.service -f

# Extract URL
journalctl --user -u cloudflare-tunnel.service -n 100 | grep -oP 'https://[a-zA-Z0-9-]+\.trycloudflare\.com' | tail -1
```

## Enable Auto-Start

The tunnel service is already enabled. To verify:

```bash
systemctl --user status cloudflare-tunnel.service
systemctl --user enable cloudflare-tunnel.service
```

## Important Notes

- **Quick tunnel URLs change on restart** - Not suitable for production
- **Custom domain is required** for a permanent URL
- **Update Vercel env vars** after each tunnel restart (if using quick tunnel)
- Consider using a **custom domain** for production stability


