#!/bin/bash
# Start Supabase and fix the auth trigger

cd "$(dirname "$0")"

# Set path to include local bin
export PATH="$HOME/.local/bin:$PATH"

echo "=== Supabase Setup & Fix ==="
echo ""

# 1. Fix Docker Permissions (Temporary for this session)
echo "Checking Docker permissions..."
if ! [ -w /var/run/docker.sock ]; then
    echo "⚠️  Need to fix Docker socket permissions."
    echo "Requesting sudo access to run: chmod 666 /var/run/docker.sock"
    if sudo chmod 666 /var/run/docker.sock; then
        echo "✅ Docker permissions fixed"
    else
        echo "❌ Failed to fix Docker permissions. Please run manually:"
        echo "   sudo chmod 666 /var/run/docker.sock"
        exit 1
    fi
fi

echo ""

# 2. Start Supabase
echo "Starting Supabase..."
if supabase start; then
    echo "✅ Supabase started"
else
    echo "❌ Failed to start Supabase"
    # Try to get status just in case it's already running but returned non-zero
    supabase status >/dev/null 2>&1
    if [ $? -ne 0 ]; then
        exit 1
    fi
fi

echo ""
echo "Waiting for services..."
sleep 5

# 3. Fix Auth Trigger
echo "=== Fixing Auth Trigger ==="
echo ""

# Get DB Container Name
DB_CONTAINER=$(docker ps --format "{{.Names}}" | grep "supabase_db" | head -1)

if [ -z "$DB_CONTAINER" ]; then
    echo "❌ Database container not found"
    exit 1
fi

echo "Found database: $DB_CONTAINER"

# Check and Fix Trigger
echo "Applying trigger fix..."

SQL=$(cat <<'EOF'
-- User progress table (extends auth.users)
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  points INTEGER DEFAULT 0 NOT NULL,
  level INTEGER DEFAULT 1 NOT NULL,
  current_streak INTEGER DEFAULT 0 NOT NULL,
  longest_streak INTEGER DEFAULT 0 NOT NULL,
  streak_freeze_used BOOLEAN DEFAULT false NOT NULL,
  last_login DATE,
  total_study_time INTEGER DEFAULT 0 NOT NULL, -- in minutes
  last_study_date DATE,
  daily_progress INTEGER DEFAULT 0 NOT NULL,
  preferences JSONB DEFAULT '{
    "dailyGoal": 3,
    "notificationsEnabled": false,
    "darkMode": true,
    "audioEnabled": true,
    "learningGoal": "general"
  }'::jsonb NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Function to create user_progress entry when user signs up
CREATE OR REPLACE FUNCTION create_user_progress()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_progress (id)
  VALUES (NEW.id)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION create_user_progress();
EOF
)

echo "$SQL" | docker exec -i "$DB_CONTAINER" psql -U postgres -d postgres 2>&1

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Trigger fixed successfully!"
else
    echo "❌ Failed to fix trigger"
    exit 1
fi

echo ""
echo "=== Status ==="
supabase status

echo ""
echo "Ready! You can now create accounts."
