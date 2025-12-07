-- Update dictionary table with phonetics
UPDATE dictionary
SET arabic_phonetic = ead.arabic_phonetic
FROM english_arabic_dictionary ead
WHERE LOWER(dictionary.translation) = LOWER(ead.english)
  AND (dictionary.arabic_phonetic IS NULL OR dictionary.arabic_phonetic = '');

