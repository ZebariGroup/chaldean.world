-- Add arabic phonetic pronunciation field
ALTER TABLE dictionary
  ADD COLUMN IF NOT EXISTS arabic_phonetic TEXT NOT NULL DEFAULT '';

-- Create index for search
CREATE INDEX IF NOT EXISTS idx_dictionary_arabic_phonetic ON dictionary(arabic_phonetic);

