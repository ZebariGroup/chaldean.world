# Email Confirmation Setup Guide

This guide explains how to configure real email sending for email confirmation in your Supabase setup.

## Configuration

### 1. Update `supabase/config.toml`

The SMTP configuration is already enabled in `config.toml`. You need to:

1. **Choose an SMTP provider** (examples below)
2. **Set environment variables** for your SMTP credentials
3. **Update the SMTP settings** in `config.toml`

### 2. SMTP Provider Options

#### Option A: SendGrid (Recommended for Production)

1. Sign up at https://sendgrid.com
2. Create an API key
3. Set environment variable:
   ```bash
   export SENDGRID_API_KEY="your-api-key-here"
   ```
4. The config is already set up for SendGrid

#### Option B: Gmail

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Set environment variable:
   ```bash
   export GMAIL_APP_PASSWORD="your-app-password-here"
   ```
4. Update `config.toml`:
   ```toml
   [auth.email.smtp]
   enabled = true
   host = "smtp.gmail.com"
   port = 587
   user = "your-email@gmail.com"
   pass = "env(GMAIL_APP_PASSWORD)"
   ```

#### Option C: Mailgun

1. Sign up at https://mailgun.com
2. Get your SMTP credentials from the dashboard
3. Set environment variables:
   ```bash
   export MAILGUN_SMTP_USER="your-smtp-user"
   export MAILGUN_SMTP_PASS="your-smtp-password"
   ```
4. Update `config.toml`:
   ```toml
   [auth.email.smtp]
   enabled = true
   host = "smtp.mailgun.org"
   port = 587
   user = "env(MAILGUN_SMTP_USER)"
   pass = "env(MAILGUN_SMTP_PASS)"
   ```

### 3. Update Site URL

Make sure `site_url` in `config.toml` matches your actual domain:

```toml
[auth]
site_url = "https://your-domain.com"
```

### 4. Restart Supabase

After updating the config:

```bash
supabase stop
supabase start
```

## Testing

1. Sign up a new user
2. Check the email inbox (and spam folder)
3. Click the confirmation link
4. You should be redirected to the confirmation page and then logged in

## Local Development

For local development, you can:
- Use Inbucket (already configured) - emails appear at http://localhost:54324
- Or configure real SMTP for testing

## Troubleshooting

- **Emails not sending**: Check SMTP credentials and firewall/port restrictions
- **Emails going to spam**: Configure SPF/DKIM records for your domain
- **Confirmation link not working**: Check `additional_redirect_urls` in config.toml includes your domain





