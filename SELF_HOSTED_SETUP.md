# Self-Hosted Supabase Setup Guide

You're hosting Supabase on your local PC! This guide will help you set it up for network access and Vercel deployment.

## Your Network IP
Your local IP address: **192.168.2.125**

## Step 1: Start Supabase Locally

```bash
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
export PATH="$HOME/.local/bin:$PATH"
supabase start
```

This will start Supabase on:
- API: `http://localhost:54321` (or `http://192.168.2.125:54321` on your network)
- Studio: `http://localhost:54323`
- Database: `localhost:54322`

## Step 2: Get Your Supabase Credentials

After starting, run:
```bash
supabase status
```

This will show you:
- API URL
- Anon Key (public key)
- Service Role Key (keep secret!)

Save these values - you'll need them.

## Step 3: Configure App for Local Network

Update `src/lib/supabase.ts` to use your network IP:

```typescript
// For local development on same machine
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://localhost:54321';

// For network access (other devices on your network)
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'http://192.168.2.125:54321';
```

## Step 4: Expose Supabase to Internet (for Vercel)

Since Vercel needs to access your self-hosted Supabase, you have several options:

### Option A: ngrok (Easiest for Testing)

```bash
# Install ngrok
# Download from https://ngrok.com/download

# Expose Supabase API
ngrok http 54321

# This gives you a public URL like: https://abc123.ngrok.io
# Use this URL + port 54321 in Vercel environment variables
```

**Note**: Free ngrok URLs change on restart. For production, use a paid plan or Option B.

### Option B: Cloudflare Tunnel (Free, Permanent)

```bash
# Install cloudflared
# Download from https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/

# Create tunnel
cloudflared tunnel create chaldean-supabase

# Run tunnel
cloudflared tunnel --url http://localhost:54321
```

### Option C: Port Forwarding (Most Permanent)

1. Configure your router to forward port 54321 to `192.168.2.125:54321`
2. Use your public IP (find it at https://whatismyipaddress.com/)
3. Update DNS to point a domain to your IP (optional but recommended)
4. Use `http://your-domain.com:54321` or `http://your-ip:54321` in Vercel

**Security Warning**: Exposing Supabase directly to the internet requires:
- Strong firewall rules
- Rate limiting
- Consider using a reverse proxy (nginx, Caddy) with SSL

## Step 5: Vercel Environment Variables

In Vercel dashboard, set:

```
VITE_SUPABASE_URL=http://your-exposed-url:54321
VITE_SUPABASE_ANON_KEY=your-anon-key-from-supabase-status
```

**For ngrok example:**
```
VITE_SUPABASE_URL=https://abc123.ngrok.io
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Step 6: Update Auth Redirect URLs

Edit `supabase/config.toml` and add your Vercel URL to `additional_redirect_urls`:

```toml
[auth]
additional_redirect_urls = [
  "https://127.0.0.1:3000",
  "https://chaldean-world.vercel.app",
  "https://chaldean-world-*.vercel.app"
]
```

Then restart Supabase:
```bash
supabase stop
supabase start
```

## Step 7: Run Migrations

Make sure your database schema is up to date:

```bash
supabase db reset  # This runs all migrations
```

Or if you've made changes:
```bash
supabase migration new your_migration_name
# Edit the migration file, then:
supabase db reset
```

## Keeping Supabase Running

### Option 1: Systemd Service (Recommended)

Create `/etc/systemd/system/supabase-chaldean.service`:

```ini
[Unit]
Description=Supabase for Chaldean World
After=docker.service
Requires=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/supabase/Documents/SupabaseCursor/chaldean.world
ExecStart=/usr/local/bin/supabase start
ExecStop=/usr/local/bin/supabase stop
User=supabase
Environment="PATH=/home/supabase/.local/bin:/usr/local/bin:/usr/bin:/bin"

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl enable supabase-chaldean
sudo systemctl start supabase-chaldean
```

### Option 2: Screen/Tmux Session

```bash
screen -S supabase
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
export PATH="$HOME/.local/bin:$PATH"
supabase start
# Press Ctrl+A then D to detach
```

### Option 3: Docker Compose (Advanced)

You can run Supabase via Docker Compose directly for more control.

## Troubleshooting

### Supabase won't start
```bash
# Check Docker is running
sudo systemctl status docker

# Check ports are available
netstat -tulpn | grep -E '54321|54322|54323'

# View logs
supabase logs
```

### Can't connect from network
- Check firewall: `sudo ufw status`
- Allow ports: `sudo ufw allow 54321/tcp`
- Verify Supabase is bound to 0.0.0.0 (check Docker containers)

### Vercel can't reach Supabase
- Verify your tunnel/port forward is working: `curl http://your-exposed-url:54321/rest/v1/`
- Check CORS settings in Supabase
- Verify environment variables in Vercel are set correctly

## Security Considerations

1. **Use Row Level Security (RLS)**: Already enabled in migrations ✅
2. **Don't expose Service Role Key**: Never put this in frontend code
3. **Rate Limiting**: Consider adding rate limiting at network level
4. **SSL/TLS**: Use HTTPS for production (via reverse proxy or tunnel)
5. **Firewall**: Only expose necessary ports
6. **Backups**: Regularly backup your database:
   ```bash
   supabase db dump -f backup.sql
   ```

## Local Development

For local development, use:
```bash
VITE_SUPABASE_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
```

This is already set as default in `src/lib/supabase.ts`.





