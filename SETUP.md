# Setup Guide

Quick guide to get Chaldean World running with self-hosted Supabase.

## Prerequisites

- Node.js 18+ (v20+ recommended)
- Docker
- Supabase CLI installed

## Step 1: Fix Docker Permissions (One-time)

```bash
sudo usermod -aG docker $USER
newgrp docker
# OR log out and back in
```

## Step 2: Start Supabase

```bash
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
./START_SUPABASE.sh
```

Or manually:
```bash
export PATH="$HOME/.local/bin:$PATH"
supabase start
```

After it starts, get your credentials:
```bash
supabase status
```

**Save the API URL and anon key!** You'll need these for Vercel.

## Step 3: Install Dependencies & Run

```bash
npm install
npm run dev
```

The app will connect to your local Supabase instance automatically.

## Step 4: Push to GitHub

```bash
# Install GitHub CLI
sudo apt install gh
gh auth login

# Push changes
git push origin main
```

Or use a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Generate token with `repo` scope
3. `git push origin main` (use token as password)

## Step 5: Expose Supabase for Vercel

**Option A: ngrok (Quickest)**
```bash
# Install from https://ngrok.com/download
ngrok http 54321
# Copy the HTTPS URL
```

**Option B: Cloudflare Tunnel (Free, Permanent)**
```bash
cloudflared tunnel --url http://localhost:54321
```

## Step 6: Deploy to Vercel

1. Go to https://vercel.com
2. Import `ZebariGroup/chaldean.world`
3. Add Environment Variables:
   - `VITE_SUPABASE_URL` = Your exposed URL (from ngrok/cloudflare)
   - `VITE_SUPABASE_ANON_KEY` = From `supabase status`
4. Deploy!

## Step 7: Update Auth Redirects

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

## Network Access

Your local IP: **192.168.2.125**

For devices on your local network:
- API: `http://192.168.2.125:54321`
- Studio: `http://192.168.2.125:54323`

## Troubleshooting

- **Docker permission denied**: Run `newgrp docker` or log out/in
- **Port already in use**: `supabase stop` then `supabase start`
- **Can't connect from network**: `sudo ufw allow 54321/tcp`

## Detailed Guides

- [SELF_HOSTED_SETUP.md](./SELF_HOSTED_SETUP.md) - Comprehensive self-hosting guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment instructions

