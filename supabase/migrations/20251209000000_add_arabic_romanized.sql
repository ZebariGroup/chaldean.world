ALTER TABLE english_arabic_dictionary
ADD COLUMN IF NOT EXISTS arabic_romanized TEXT;

-- Initialize with existing phonetic data for now, assuming phonetic was used as romanization
UPDATE english_arabic_dictionary
SET arabic_romanized = arabic_phonetic
WHERE arabic_romanized IS NULL;

