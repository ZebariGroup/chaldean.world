# SendGrid Setup Guide

## Quick Setup

Run the setup script:
```bash
./SETUP_SENDGRID.sh
```

## Manual Setup

### Step 1: Create SendGrid Account

1. Go to https://sendgrid.com
2. Click "Start for Free"
3. Sign up with your email
4. Verify your email address
5. Complete the account setup

### Step 2: Create API Key

1. Log in to SendGrid dashboard
2. Go to **Settings** → **API Keys** (or https://app.sendgrid.com/settings/api_keys)
3. Click **"Create API Key"**
4. Name it: `Supabase Email` (or any name you prefer)
5. Select permissions:
   - **Full Access** (easiest, for development)
   - OR **Restricted Access** → Enable only "Mail Send" permission (more secure)
6. Click **"Create & View"**
7. **IMPORTANT**: Copy the API key immediately (format: `SG.xxxxxxxxxxxxx.xxxxxxxxxxxxx`)
   - You won't be able to see it again!

### Step 3: Configure Environment Variable

#### Option A: Using the Setup Script (Recommended)
```bash
./SETUP_SENDGRID.sh
```

#### Option B: Manual Setup

1. Create/edit `.env` file in project root:
   ```bash
   echo "SENDGRID_API_KEY=SG.your-api-key-here" >> .env
   ```

2. Or export it in your shell:
   ```bash
   export SENDGRID_API_KEY="SG.your-api-key-here"
   ```

### Step 4: Verify Configuration

The `supabase/config.toml` is already configured for SendGrid:
```toml
[auth.email.smtp]
enabled = true
host = "smtp.sendgrid.net"
port = 587
user = "apikey"
pass = "env(SENDGRID_API_KEY)"
```

### Step 5: Restart Supabase

```bash
supabase stop
supabase start
```

### Step 6: Test Email Sending

1. Sign up a new user in your app
2. Check the email inbox (and spam folder)
3. Click the confirmation link
4. You should be redirected and logged in

## Troubleshooting

### Emails Not Sending

1. **Check API key format**: Should start with `SG.`
2. **Verify API key permissions**: Must have "Mail Send" permission
3. **Check environment variable**: Make sure `SENDGRID_API_KEY` is set
4. **Check Supabase logs**: `supabase logs`

### Emails Going to Spam

1. **Verify sender email** in SendGrid:
   - Go to Settings → Sender Authentication
   - Verify a sender email or domain
2. **Check SPF/DKIM records** (for production)
3. **Use a verified domain** (recommended for production)

### Rate Limits

SendGrid Free Tier:
- 100 emails/day
- Can upgrade for more

Current config allows 100 emails/hour (adjust in `config.toml` if needed).

## Production Setup

For production, you should:

1. **Verify your domain** in SendGrid:
   - Settings → Sender Authentication → Domain Authentication
   - Add DNS records to your domain
   - This improves deliverability

2. **Update sender email** in `config.toml`:
   ```toml
   admin_email = "noreply@yourdomain.com"
   sender_name = "Your App Name"
   ```

3. **Update site_url** in `config.toml`:
   ```toml
   site_url = "https://yourdomain.com"
   ```

## Security Notes

- **Never commit** `.env` file to git (it's in `.gitignore`)
- **Never share** your API key publicly
- Use **Restricted Access** API keys in production
- Rotate API keys periodically

## Alternative: Gmail SMTP

If you prefer Gmail instead:

1. Enable 2FA on Gmail
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Update `config.toml`:
   ```toml
   host = "smtp.gmail.com"
   user = "your-email@gmail.com"
   pass = "env(GMAIL_APP_PASSWORD)"
   ```
4. Set `GMAIL_APP_PASSWORD` environment variable





