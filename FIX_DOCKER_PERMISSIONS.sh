#!/bin/bash
# Script to fix Docker permissions

echo "Adding user to docker group..."
sudo usermod -aG docker $USER

echo ""
echo "✅ User added to docker group!"
echo ""
echo "⚠️  IMPORTANT: You need to log out and back in for changes to take effect."
echo ""
echo "OR run this command to apply changes immediately:"
echo "  newgrp docker"
echo ""
echo "Then verify with:"
echo "  groups | grep docker"
echo ""
echo "After that, you can run:"
echo "  ./START_SUPABASE.sh"

