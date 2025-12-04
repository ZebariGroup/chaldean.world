# Push to GitHub

Your changes are committed locally. To push to GitHub, you need to authenticate.

## Option 1: GitHub CLI (Easiest)

```bash
# Install GitHub CLI if not installed
# Ubuntu/Debian:
sudo apt install gh

# Authenticate
gh auth login

# Push
git push origin main
```

## Option 2: Personal Access Token

1. Go to https://github.com/settings/tokens
2. Generate new token (classic) with `repo` scope
3. Use token as password when pushing:

```bash
git push origin main
# Username: your-github-username
# Password: paste-your-token-here
```

## Option 3: SSH Key

```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to GitHub
cat ~/.ssh/id_ed25519.pub
# Copy output and add to https://github.com/settings/keys

# Change remote to SSH
git remote set-url origin git@github.com:ZebariGroup/chaldean.world.git

# Push
git push origin main
```

## Option 4: Configure Git Credential Helper

```bash
git config --global credential.helper store
git push origin main
# Enter username and password/token once, it will be saved
```

