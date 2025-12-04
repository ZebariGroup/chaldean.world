# Quick Start - Self-Hosted Supabase

## 1. Fix Docker Permissions (One-time)

```bash
sudo usermod -aG docker $USER
# Log out and back in, or run:
newgrp docker
```

## 2. Start Supabase

```bash
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
export PATH="$HOME/.local/bin:$PATH"
supabase start
```

Wait for it to start, then run:
```bash
supabase status
```

Save the **API URL** and **anon key** - you'll need these!

## 3. Expose to Internet (for Vercel)

### Quick Option: ngrok (Free, but URL changes)

```bash
# Install ngrok from https://ngrok.com/download
ngrok http 54321
```

Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`) - this is your `VITE_SUPABASE_URL`

## 4. Update Vercel Environment Variables

In Vercel dashboard → Your Project → Settings → Environment Variables:

```
VITE_SUPABASE_URL=https://your-ngrok-url.ngrok.io  (or your exposed URL)
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (from supabase status)
```

## 5. Update Auth Redirect URLs

Edit `supabase/config.toml`:
```toml
[auth]
additional_redirect_urls = [
  "https://127.0.0.1:3000",
  "https://chaldean-world.vercel.app",
  "https://chaldean-world-*.vercel.app"
]
```

Then restart:
```bash
supabase stop
supabase start
```

## 6. Deploy to Vercel

```bash
# Configure git (if not done)
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Commit and push
git add .
git commit -m "Add Supabase self-hosted setup"
git push origin main
```

Vercel will auto-deploy. Make sure environment variables are set!

## Your Local Network IP: 192.168.2.125

For devices on your local network, use:
- API: `http://192.168.2.125:54321`
- Studio: `http://192.168.2.125:54323`

## Keep Supabase Running

Use a screen session:
```bash
screen -S supabase
supabase start
# Press Ctrl+A then D to detach
```

Or create a systemd service (see SELF_HOSTED_SETUP.md)

## Troubleshooting

- **Docker permission denied**: Run `newgrp docker` or log out/in
- **Port already in use**: Stop other Supabase instances: `supabase stop`
- **Can't connect from network**: Check firewall: `sudo ufw allow 54321/tcp`

