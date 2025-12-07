-- Community pronunciations for dictionary words

-- Table to store user-submitted pronunciations tied to dictionary words
CREATE TABLE IF NOT EXISTS word_pronunciations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  word_key TEXT NOT NULL,
  word TEXT NOT NULL,
  translation TEXT,
  phonetic TEXT,
  script TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  audio_path TEXT NOT NULL,
  duration_seconds DECIMAL(8,2),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_word_pronunciations_word_key ON word_pronunciations(word_key);

ALTER TABLE word_pronunciations ENABLE ROW LEVEL SECURITY;

-- Anyone can listen to pronunciations
CREATE POLICY "Anyone can read word pronunciations"
  ON word_pronunciations
  FOR SELECT
  USING (true);

-- Only authenticated users can add new pronunciations
CREATE POLICY "Authenticated users can add pronunciations"
  ON word_pronunciations
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Owners can update or delete their own pronunciations
CREATE POLICY "Users can update their pronunciations"
  ON word_pronunciations
  FOR UPDATE
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete their pronunciations"
  ON word_pronunciations
  FOR DELETE
  USING (user_id = auth.uid());

-- Public bucket for pronunciation audio
INSERT INTO storage.buckets (id, name, public)
VALUES ('pronunciations', 'pronunciations', true)
ON CONFLICT (id) DO NOTHING;

-- Storage access policies
CREATE POLICY "Public can read pronunciation audio"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'pronunciations');

CREATE POLICY "Authenticated users can upload pronunciation audio"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'pronunciations' AND auth.role() = 'authenticated');

CREATE POLICY "Owners can update pronunciation audio"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'pronunciations' AND owner = auth.uid());

CREATE POLICY "Owners can delete pronunciation audio"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'pronunciations' AND owner = auth.uid());




