
CREATE OR REPLACE FUNCTION transliterate_arabic(input_text TEXT) RETURNS TEXT AS $$
DECLARE
    result TEXT;
BEGIN
    result := input_text;
    result := REPLACE(result, 'ا', 'a');
    result := REPLACE(result, 'أ', 'a');
    result := REPLACE(result, 'إ', 'e');
    result := REPLACE(result, 'آ', 'a');
    result := REPLACE(result, 'ء', 'a');
    result := REPLACE(result, 'ب', 'b');
    result := REPLACE(result, 'ت', 't');
    result := REPLACE(result, 'ث', 'th');
    result := REPLACE(result, 'ج', 'j');
    result := REPLACE(result, 'ح', 'h');
    result := REPLACE(result, 'خ', 'kh');
    result := REPLACE(result, 'د', 'd');
    result := REPLACE(result, 'ذ', 'dh');
    result := REPLACE(result, 'ر', 'r');
    result := REPLACE(result, 'ز', 'z');
    result := REPLACE(result, 'س', 's');
    result := REPLACE(result, 'ش', 'sh');
    result := REPLACE(result, 'ص', 's');
    result := REPLACE(result, 'ض', 'd');
    result := REPLACE(result, 'ط', 't');
    result := REPLACE(result, 'ظ', 'z');
    result := REPLACE(result, 'ع', '''a');
    result := REPLACE(result, 'غ', 'gh');
    result := REPLACE(result, 'ف', 'f');
    result := REPLACE(result, 'ق', 'q');
    result := REPLACE(result, 'ك', 'k');
    result := REPLACE(result, 'ل', 'l');
    result := REPLACE(result, 'م', 'm');
    result := REPLACE(result, 'ن', 'n');
    result := REPLACE(result, 'ه', 'h');
    result := REPLACE(result, 'و', 'w');
    result := REPLACE(result, 'ي', 'y');
    result := REPLACE(result, 'ى', 'a');
    result := REPLACE(result, 'ة', 'ah');
    result := REPLACE(result, 'ئ', '''');
    result := REPLACE(result, 'ؤ', 'u');

    RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Update dictionary
UPDATE dictionary 
SET arabic_phonetic = transliterate_arabic(arabic)
WHERE arabic IS NOT NULL AND (arabic_phonetic IS NULL OR arabic_phonetic = '');

-- Update english_arabic_dictionary too just in case
UPDATE english_arabic_dictionary
SET arabic_phonetic = transliterate_arabic(arabic)
WHERE arabic_phonetic IS NULL OR arabic_phonetic = '';

