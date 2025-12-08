DROP FUNCTION IF EXISTS translate_english_to_arabic(TEXT);

-- Update the function to include arabic_romanized in the output
CREATE OR REPLACE FUNCTION translate_english_to_arabic(input_text TEXT)
RETURNS TABLE (
  english TEXT,
  arabic TEXT,
  arabic_romanized TEXT,
  arabic_phonetic TEXT,
  confidence DOUBLE PRECISION
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ead.english,
    ead.arabic,
    ead.arabic_romanized,
    ead.arabic_phonetic,
    CASE 
      WHEN LOWER(ead.english) = LOWER(input_text) THEN 1.0::DOUBLE PRECISION
      WHEN LOWER(ead.english) LIKE LOWER(input_text) || '%' THEN 0.8::DOUBLE PRECISION
      ELSE 0.5::DOUBLE PRECISION
    END as confidence
  FROM english_arabic_dictionary ead
  WHERE LOWER(ead.english) = LOWER(input_text)
     OR LOWER(ead.english) LIKE LOWER(input_text) || '%'
  ORDER BY 
    CASE 
      WHEN LOWER(ead.english) = LOWER(input_text) THEN 0
      ELSE 1
    END,
    ead.frequency_rank ASC NULLS LAST
  LIMIT 10;
END;
$$;

GRANT EXECUTE ON FUNCTION translate_english_to_arabic(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION translate_english_to_arabic(TEXT) TO anon;
