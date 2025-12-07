-- Fix Trigger and User Progress Table

-- 1. Create the table if it doesn't exist (with all columns)
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

-- 2. Enable RLS
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- 3. Create policies (drop existing ones first to avoid conflicts)
DROP POLICY IF EXISTS "Users can view own progress" ON public.user_progress;
CREATE POLICY "Users can view own progress" ON public.user_progress FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own progress" ON public.user_progress;
CREATE POLICY "Users can update own progress" ON public.user_progress FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own progress" ON public.user_progress;
CREATE POLICY "Users can insert own progress" ON public.user_progress FOR INSERT WITH CHECK (auth.uid() = id);

-- 4. Grant permissions to service_role and postgres (crucial for triggers)
GRANT ALL ON public.user_progress TO postgres;
GRANT ALL ON public.user_progress TO service_role;
GRANT ALL ON public.user_progress TO authenticated;
GRANT ALL ON public.user_progress TO anon;

-- 5. Create the trigger function (SECURITY DEFINER is key)
CREATE OR REPLACE FUNCTION public.create_user_progress()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_progress (id)
    VALUES (NEW.id)
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        -- Log error but allow user creation to succeed if insertion fails
        RAISE WARNING 'Failed to create user_progress for user %: %', NEW.id, SQLERRM;
        RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Re-create the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.create_user_progress();





