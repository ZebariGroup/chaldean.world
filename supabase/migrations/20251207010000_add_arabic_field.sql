-- Add arabic translation field to dictionary
ALTER TABLE dictionary
  ADD COLUMN IF NOT EXISTS arabic TEXT NOT NULL DEFAULT '';

-- Update the constraint to include arabic in the unique key
ALTER TABLE dictionary
  DROP CONSTRAINT IF EXISTS dictionary_word_script_key;

-- Create index on arabic for search
CREATE INDEX IF NOT EXISTS idx_dictionary_arabic ON dictionary(arabic);

