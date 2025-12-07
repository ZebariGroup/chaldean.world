# Port Forwarding Setup Guide

## Why Port Forwarding?
Port forwarding gives you a stable connection that:
- Never changes URL
- Works after reboots
- Doesn't require any external services
- Is faster (direct connection)

## Your Configuration
- **Public IP**: 108.202.235.64
- **Local IP**: 192.168.2.125
- **Port to Forward**: 54321
- **Service**: Supabase

## Setup Steps

### Step 1: Access Your Router
1. Open browser and go to your router admin page (usually one of):
   - http://192.168.2.1
   - http://192.168.1.1
   - http://192.168.0.1
   - http://10.0.0.1

2. Login with router admin credentials

### Step 2: Find Port Forwarding Settings
Look for one of these menu items:
- "Port Forwarding"
- "Virtual Server"
- "NAT Forwarding"
- "Applications & Gaming"
- "Advanced" → "Port Forwarding"

### Step 3: Create Port Forward Rule
Add a new rule with these settings:

```
Service Name: Supabase
External Port: 54321
Internal IP: 192.168.2.125
Internal Port: 54321
Protocol: TCP (or Both TCP/UDP)
Status: Enabled
```

**Example configurations for popular routers:**

#### TP-Link Router:
```
Service Type: TCP
External Port: 54321
Internal Port: 54321
IP Address: 192.168.2.125
```

#### Netgear Router:
```
Service Name: Supabase
Server IP Address: 192.168.2.125
External Port: 54321
Internal Port: 54321
```

#### Linksys Router:
```
Application Name: Supabase
External Port: 54321
Internal Port: 54321
To IP Address: 192.168.2.125
Protocol: TCP
Enabled: Yes
```

### Step 4: Save and Apply
1. Click "Save" or "Apply"
2. Router may need to reboot

### Step 5: Test the Connection
From another network (or use your phone's cellular data):

```bash
curl http://108.202.235.64:54321
```

You should see a response from Supabase.

## Update Vercel Environment Variables

Once port forwarding is working, update Vercel:

1. Go to: https://vercel.com/zebarigroup/chaldean-world/settings/environment-variables

2. Update/Add:
   ```
   VITE_SUPABASE_URL=http://108.202.235.64:54321
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
   ```

3. Redeploy the app

## Security Considerations

### ⚠️ Important:
Your Supabase instance will be publicly accessible. Consider:

1. **Firewall Rules**: Use your router's firewall to restrict access if needed
2. **HTTPS**: For production, use a reverse proxy with SSL (nginx/Caddy)
3. **Authentication**: Supabase has built-in auth, but ensure RLS policies are set

### Optional: Dynamic DNS (If Your IP Changes)

If your ISP changes your IP occasionally, use a Dynamic DNS service:

**Free Options:**
- No-IP (https://www.noip.com)
- DuckDNS (https://www.duckdns.org)
- Dynu (https://www.dynu.com)

**Setup:**
1. Create free account
2. Choose a hostname (e.g., chaldean-world.ddns.net)
3. Install their update client on your PC
4. Use the hostname instead of IP in Vercel

## Troubleshooting

### Port forwarding not working?

1. **Check if port is open**:
   ```bash
   # From your PC
   sudo netstat -tlnp | grep 54321
   ```

2. **Verify Supabase is listening on all interfaces**:
   ```bash
   supabase status
   # Should show port 54321
   ```

3. **Check firewall**:
   ```bash
   sudo ufw status
   # If active, allow port:
   sudo ufw allow 54321/tcp
   ```

4. **Test from external network**:
   - Use your phone (turn off WiFi, use cellular)
   - Visit: http://108.202.235.64:54321

### Still not working?

Some ISPs block inbound connections. Check if your ISP:
- Provides a public IP (not CGNAT)
- Allows port forwarding
- Contact ISP support if needed

## Alternative: Cloudflare Tunnel with Custom Domain

If port forwarding doesn't work or you want HTTPS, use Cloudflare Tunnel with a custom domain:

1. Register a free domain at Freenom or use your own
2. Add domain to Cloudflare (free plan)
3. Create persistent tunnel pointing to your domain
4. This gives you: https://api.yourdomain.com (permanent URL)

Let me know if you need help with this option!

