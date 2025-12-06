-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

-- Completed lessons tracking
CREATE TABLE IF NOT EXISTS completed_lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, lesson_id)
);

-- Words learned tracking
CREATE TABLE IF NOT EXISTS words_learned (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  word_id TEXT NOT NULL,
  learned_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, word_id)
);

-- Word reviews for spaced repetition (SM-2 algorithm)
CREATE TABLE IF NOT EXISTS word_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  word_id TEXT NOT NULL,
  last_reviewed TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  next_review TIMESTAMPTZ NOT NULL,
  ease_factor DECIMAL(5,2) DEFAULT 2.5 NOT NULL,
  interval_days INTEGER DEFAULT 1 NOT NULL,
  repetitions INTEGER DEFAULT 0 NOT NULL,
  correct_count INTEGER DEFAULT 0 NOT NULL,
  incorrect_count INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, word_id)
);

-- Favorite words
CREATE TABLE IF NOT EXISTS favorite_words (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  word_id TEXT NOT NULL,
  added_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, word_id)
);

-- Incorrect answers for review
CREATE TABLE IF NOT EXISTS incorrect_answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lesson_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  question TEXT NOT NULL,
  user_answer TEXT NOT NULL,
  correct_answer TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Badges/achievements
CREATE TABLE IF NOT EXISTS badges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  badge_id TEXT NOT NULL,
  earned_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, badge_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_completed_lessons_user_id ON completed_lessons(user_id);
CREATE INDEX IF NOT EXISTS idx_completed_lessons_lesson_id ON completed_lessons(lesson_id);
CREATE INDEX IF NOT EXISTS idx_words_learned_user_id ON words_learned(user_id);
CREATE INDEX IF NOT EXISTS idx_word_reviews_user_id ON word_reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_word_reviews_next_review ON word_reviews(next_review);
CREATE INDEX IF NOT EXISTS idx_favorite_words_user_id ON favorite_words(user_id);
CREATE INDEX IF NOT EXISTS idx_incorrect_answers_user_id ON incorrect_answers(user_id);
CREATE INDEX IF NOT EXISTS idx_badges_user_id ON badges(user_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON user_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_word_reviews_updated_at
  BEFORE UPDATE ON word_reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE words_learned ENABLE ROW LEVEL SECURITY;
ALTER TABLE word_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorite_words ENABLE ROW LEVEL SECURITY;
ALTER TABLE incorrect_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only access their own data
CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own completed lessons"
  ON completed_lessons FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own completed lessons"
  ON completed_lessons FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own completed lessons"
  ON completed_lessons FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own words learned"
  ON words_learned FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own words learned"
  ON words_learned FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own words learned"
  ON words_learned FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own word reviews"
  ON word_reviews FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own word reviews"
  ON word_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own word reviews"
  ON word_reviews FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own word reviews"
  ON word_reviews FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own favorite words"
  ON favorite_words FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own favorite words"
  ON favorite_words FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own favorite words"
  ON favorite_words FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own incorrect answers"
  ON incorrect_answers FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own incorrect answers"
  ON incorrect_answers FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own incorrect answers"
  ON incorrect_answers FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own badges"
  ON badges FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own badges"
  ON badges FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Function to create user_progress entry when user signs up
CREATE OR REPLACE FUNCTION create_user_progress()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_progress (id)
  VALUES (NEW.id)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- Trigger to auto-create user_progress on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION create_user_progress();

