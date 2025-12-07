-- Create dictionary table
CREATE TABLE IF NOT EXISTS dictionary (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  word TEXT NOT NULL,
  translation TEXT NOT NULL,
  phonetic TEXT NOT NULL,
  script TEXT NOT NULL,
  categories TEXT[] NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(word, script)
);

-- Enable RLS
ALTER TABLE dictionary ENABLE ROW LEVEL SECURITY;

-- Everyone can read dictionary
CREATE POLICY "Anyone can read dictionary"
  ON dictionary
  FOR SELECT
  USING (true);

-- Only admins can insert/update/delete
CREATE POLICY "Admins can insert dictionary entries"
  ON dictionary
  FOR INSERT
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update dictionary entries"
  ON dictionary
  FOR UPDATE
  USING (is_admin());

CREATE POLICY "Admins can delete dictionary entries"
  ON dictionary
  FOR DELETE
  USING (is_admin());

-- Add indexes for better search performance
CREATE INDEX idx_dictionary_word ON dictionary(word);
CREATE INDEX idx_dictionary_translation ON dictionary(translation);
CREATE INDEX idx_dictionary_categories ON dictionary USING GIN(categories);

-- Trigger to auto-update updated_at
CREATE TRIGGER update_dictionary_updated_at
  BEFORE UPDATE ON dictionary
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

