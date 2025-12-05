# Set Vercel Environment Variables

Since your Vercel account is connected to GitHub, the easiest way is through the Vercel dashboard.

## Step 1: Get Supabase Credentials

Run this to get your Supabase info:
```bash
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
export PATH="$HOME/.local/bin:$PATH"
sudo $HOME/.local/bin/supabase status
```

Save:
- **API URL** (e.g., `http://localhost:54321`)
- **anon key** (the long JWT token)

## Step 2: Expose Supabase (if not done)

Start ngrok to expose Supabase:
```bash
./EXPOSE_SUPABASE.sh
```

Copy the **HTTPS URL** it shows (e.g., `https://abc123.ngrok.io`)

## Step 3: Set Environment Variables in Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click on your project: **chaldean-world** (or import it if not there)
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

### For Production:
- **Name**: `VITE_SUPABASE_URL`
- **Value**: Your ngrok HTTPS URL (e.g., `https://abc123.ngrok.io`)
- **Environment**: Production, Preview, Development (select all)

- **Name**: `VITE_SUPABASE_ANON_KEY`  
- **Value**: Your anon key from `supabase status`
- **Environment**: Production, Preview, Development (select all)

5. Click **Save**

## Step 4: Redeploy

After setting variables, Vercel will auto-redeploy, or you can:
- Go to **Deployments** tab
- Click **⋯** on latest deployment → **Redeploy**

## Alternative: Using Vercel CLI

If you prefer CLI:

```bash
# Install Vercel CLI locally
npm install vercel --save-dev

# Login
npx vercel login

# Set environment variables
npx vercel env add VITE_SUPABASE_URL production
# Paste your ngrok URL when prompted

npx vercel env add VITE_SUPABASE_ANON_KEY production  
# Paste your anon key when prompted

# Repeat for 'preview' and 'development' environments

# Redeploy
npx vercel --prod
```

## Quick Reference

Your local network IP: **192.168.2.125**

- Local Supabase API: `http://localhost:54321` or `http://192.168.2.125:54321`
- Exposed URL: Use ngrok HTTPS URL for Vercel
- Anon Key: Get from `supabase status`


