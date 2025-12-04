# Deployment Guide

Deploy Chaldean World to Vercel with self-hosted Supabase.

## Prerequisites

- Supabase running locally (see [SETUP.md](./SETUP.md))
- GitHub repository pushed
- Vercel account

## Step 1: Expose Supabase to Internet

Vercel needs to access your self-hosted Supabase. Choose one method:

### Option A: ngrok (Quickest for Testing)

```bash
# Install from https://ngrok.com/download
ngrok http 54321
```

Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`)

**Note**: Free ngrok URLs change on restart. For production, use Option B or C.

### Option B: Cloudflare Tunnel (Free, Permanent)

```bash
# Install cloudflared from https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
cloudflared tunnel --url http://localhost:54321
```

### Option C: Port Forwarding (Most Permanent)

1. Configure router to forward port 54321 to your PC (192.168.2.125:54321)
2. Use your public IP or domain
3. **Security**: Use a reverse proxy (nginx/Caddy) with SSL

## Step 2: Get Supabase Credentials

```bash
supabase status
```

Save:
- **API URL** - Your exposed URL (from Step 1)
- **Anon Key** - The anon/public key shown

## Step 3: Deploy to Vercel

### Via Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import `ZebariGroup/chaldean.world`
4. Add Environment Variables:
   ```
   VITE_SUPABASE_URL=https://your-exposed-url.ngrok.io
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
5. Click "Deploy"

### Via CLI

```bash
npm install -g vercel
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
vercel login
vercel
```

Add environment variables when prompted.

## Step 4: Update Auth Redirect URLs

Edit `supabase/config.toml`:

```toml
[auth]
additional_redirect_urls = [
  "https://127.0.0.1:3000",
  "https://chaldean-world.vercel.app",
  "https://chaldean-world-*.vercel.app"
]
```

Restart Supabase:
```bash
supabase stop
supabase start
```

## Step 5: Push Code to GitHub

If you haven't already:

```bash
# Configure git
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Push (choose authentication method)
git push origin main
```

**GitHub Authentication Options:**

1. **GitHub CLI** (Easiest):
   ```bash
   sudo apt install gh
   gh auth login
   git push origin main
   ```

2. **Personal Access Token**:
   - Go to https://github.com/settings/tokens
   - Generate token with `repo` scope
   - Use token as password when pushing

3. **SSH Key**:
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com"
   cat ~/.ssh/id_ed25519.pub
   # Add to https://github.com/settings/keys
   git remote set-url origin git@github.com:ZebariGroup/chaldean.world.git
   git push origin main
   ```

## Post-Deployment Checklist

- [ ] Environment variables set in Vercel
- [ ] Supabase exposed and accessible
- [ ] Auth redirect URLs updated
- [ ] Test authentication flow (sign up/sign in)
- [ ] Verify data persists in Supabase
- [ ] Test all features
- [ ] Check browser console for errors

## Keeping Supabase Running

### Screen Session

```bash
screen -S supabase
./START_SUPABASE.sh
# Press Ctrl+A then D to detach
```

### Systemd Service

See [SELF_HOSTED_SETUP.md](./SELF_HOSTED_SETUP.md) for systemd service setup.

## Security Considerations

- Use HTTPS for exposed Supabase (via tunnel or reverse proxy)
- Keep Service Role Key secret (never in frontend)
- Row Level Security (RLS) is enabled ✅
- Consider rate limiting at network level
- Regular database backups: `supabase db dump -f backup.sql`

## Troubleshooting

- **Vercel can't reach Supabase**: Verify tunnel is running and URL is correct
- **Auth redirect fails**: Check `additional_redirect_urls` in config.toml
- **CORS errors**: Verify Supabase API URL in Vercel env vars
