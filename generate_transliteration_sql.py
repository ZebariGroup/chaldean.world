def generate_sql():
    mapping = {
        'ا': 'a', 'أ': 'a', 'إ': 'e', 'آ': 'a', 'ء': 'a',
        'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'h', 'خ': 'kh',
        'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh',
        'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': "''a", 'غ': 'gh',
        'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
        'ه': 'h', 'و': 'w', 'ي': 'y', 'ى': 'a', 'ة': 'ah', 'ئ': "''", 'ؤ': "u"
    }
    
    sql = """
CREATE OR REPLACE FUNCTION transliterate_arabic(input_text TEXT) RETURNS TEXT AS $$
DECLARE
    result TEXT;
BEGIN
    result := input_text;
"""
    for ar, en in mapping.items():
        sql += f"    result := REPLACE(result, '{ar}', '{en}');\n"
        
    sql += """
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
"""
    print(sql)

if __name__ == "__main__":
    generate_sql()

