#!/bin/bash
# Remove the problematic trigger and let the app handle user_progress creation

cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"

echo "=== Fixing Signup (Removing Trigger) ==="
echo ""

# Check Docker permissions
if ! [ -w /var/run/docker.sock ]; then
    echo "Fixing Docker permissions..."
    sudo chmod 666 /var/run/docker.sock
fi

# Get DB Container Name
DB_CONTAINER=$(docker ps --format "{{.Names}}" 2>/dev/null | grep "supabase_db" | head -1)

if [ -z "$DB_CONTAINER" ]; then
    echo "❌ Database container not found. Is Supabase running?"
    echo "Run: supabase start"
    exit 1
fi

echo "Found database: $DB_CONTAINER"
echo ""

# Remove the trigger
echo "Removing problematic trigger..."
docker exec -i "$DB_CONTAINER" psql -U postgres -d postgres << 'EOF'
-- Remove the problematic trigger that causes 500 errors
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.create_user_progress() CASCADE;

-- Ensure user_progress table exists with correct structure
CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    points INTEGER DEFAULT 0 NOT NULL,
    level INTEGER DEFAULT 1 NOT NULL,
    current_streak INTEGER DEFAULT 0 NOT NULL,
    longest_streak INTEGER DEFAULT 0 NOT NULL,
    streak_freeze_used BOOLEAN DEFAULT false NOT NULL,
    last_login DATE,
    total_study_time INTEGER DEFAULT 0 NOT NULL,
    last_study_date DATE,
    daily_progress INTEGER DEFAULT 0 NOT NULL,
    preferences JSONB DEFAULT '{"dailyGoal": 3, "notificationsEnabled": false, "darkMode": true, "audioEnabled": true, "learningGoal": "general"}'::jsonb NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable RLS
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies
DROP POLICY IF EXISTS "Users can view own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON public.user_progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON public.user_progress;

CREATE POLICY "Users can view own progress" ON public.user_progress FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own progress" ON public.user_progress FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own progress" ON public.user_progress FOR INSERT WITH CHECK (auth.uid() = id);

-- Grant permissions
GRANT ALL ON public.user_progress TO authenticated;
GRANT ALL ON public.user_progress TO anon;

SELECT 'Done! Trigger removed, user_progress will be created by the app on first login.' as status;
EOF

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Fixed! Signup should work now."
    echo ""
    echo "The app will create user_progress automatically when users first log in."
else
    echo ""
    echo "❌ Failed to apply fix"
    exit 1
fi





