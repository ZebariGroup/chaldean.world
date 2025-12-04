# Deployment Guide - Self-Hosted Supabase

**IMPORTANT**: You're self-hosting Supabase on your PC! See `SELF_HOSTED_SETUP.md` for detailed instructions.

## Quick Start

1. Start Supabase: `supabase start`
2. Expose to internet (ngrok/cloudflare tunnel/port forwarding)
3. Set Vercel env vars with your exposed URL
4. Deploy!

## Git Configuration (Required First)

Before pushing to GitHub, configure git:

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

Or for this repository only:
```bash
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

## Push to GitHub

```bash
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
git add .
git commit -m "Add Supabase integration: authentication and database persistence"
git push origin main
```

## Vercel Deployment

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `ZebariGroup/chaldean.world`
4. Configure environment variables:
   - `VITE_SUPABASE_URL` - Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Your Supabase anon key
5. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
vercel login
vercel
```

Follow the prompts and add environment variables when asked.

## Environment Variables for Production

You'll need to set these in Vercel:

1. **VITE_SUPABASE_URL**: Your Supabase project URL
   - Format: `https://your-project.supabase.co`
   - Find it in: Supabase Dashboard → Settings → API → Project URL

2. **VITE_SUPABASE_ANON_KEY**: Your Supabase anon/public key
   - Find it in: Supabase Dashboard → Settings → API → Project API keys → `anon` `public`

## Supabase Production Setup

1. Create a new Supabase project at https://supabase.com
2. Run migrations on production database:
   ```bash
   # Link to your production project
   supabase link --project-ref your-project-ref
   
   # Push migrations
   supabase db push
   ```
3. Or manually run the migration SQL from `supabase/migrations/20241204000000_initial_schema.sql` in the Supabase SQL Editor

## Post-Deployment Checklist

- [ ] Verify environment variables are set in Vercel
- [ ] Test authentication flow (sign up/sign in)
- [ ] Verify data persists in Supabase
- [ ] Test all features (lessons, practice, dictionary, etc.)
- [ ] Check browser console for errors
- [ ] Verify RLS policies are working correctly

## Local Development

For local development with Supabase:

```bash
# Start Supabase locally
export PATH="$HOME/.local/bin:$PATH"
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
supabase start

# Start dev server
npm run dev
```

The app will use local Supabase instance automatically (defaults in `src/lib/supabase.ts`).

