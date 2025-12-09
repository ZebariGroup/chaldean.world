-- English-Arabic Dictionary Table
-- This serves as the base dictionary for auto-translation
CREATE TABLE IF NOT EXISTS english_arabic_dictionary (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  english TEXT NOT NULL,
  arabic TEXT NOT NULL,
  arabic_phonetic TEXT,
  part_of_speech TEXT, -- noun, verb, adjective, etc.
  context TEXT, -- additional context or usage notes
  frequency_rank INTEGER, -- how common the word is (lower = more common)
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_english_arabic_english ON english_arabic_dictionary(english);
CREATE INDEX IF NOT EXISTS idx_english_arabic_arabic ON english_arabic_dictionary(arabic);
CREATE INDEX IF NOT EXISTS idx_english_arabic_frequency ON english_arabic_dictionary(frequency_rank);

-- Full text search index for English
CREATE INDEX IF NOT EXISTS idx_english_arabic_english_fts ON english_arabic_dictionary USING gin(to_tsvector('english', english));

-- Auto-update timestamp trigger
DROP TRIGGER IF EXISTS update_english_arabic_updated_at ON english_arabic_dictionary;
CREATE TRIGGER update_english_arabic_updated_at
  BEFORE UPDATE ON english_arabic_dictionary
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS Policies
ALTER TABLE english_arabic_dictionary ENABLE ROW LEVEL SECURITY;

-- Everyone can read
DROP POLICY IF EXISTS "Everyone can view English-Arabic dictionary" ON english_arabic_dictionary;
CREATE POLICY "Everyone can view English-Arabic dictionary"
  ON english_arabic_dictionary FOR SELECT
  USING (true);

-- Only admins can modify
DROP POLICY IF EXISTS "Admins can insert English-Arabic words" ON english_arabic_dictionary;
CREATE POLICY "Admins can insert English-Arabic words"
  ON english_arabic_dictionary FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
    )
  );

DROP POLICY IF EXISTS "Admins can update English-Arabic words" ON english_arabic_dictionary;
CREATE POLICY "Admins can update English-Arabic words"
  ON english_arabic_dictionary FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
    )
  );

DROP POLICY IF EXISTS "Admins can delete English-Arabic words" ON english_arabic_dictionary;
CREATE POLICY "Admins can delete English-Arabic words"
  ON english_arabic_dictionary FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = (SELECT email FROM auth.users WHERE id = auth.uid())
    )
  );

-- Function to auto-translate English to Arabic
DROP FUNCTION IF EXISTS translate_english_to_arabic(TEXT);
CREATE OR REPLACE FUNCTION translate_english_to_arabic(input_text TEXT)
RETURNS TABLE (
  english TEXT,
  arabic TEXT,
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

-- Function to suggest Chaldean words based on Arabic
DROP FUNCTION IF EXISTS suggest_chaldean_from_arabic(TEXT);
CREATE OR REPLACE FUNCTION suggest_chaldean_from_arabic(arabic_text TEXT)
RETURNS TABLE (
  word TEXT,
  translation TEXT,
  phonetic TEXT,
  script TEXT,
  similarity_score DOUBLE PRECISION
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    d.word,
    d.translation,
    d.phonetic,
    d.script,
    CASE 
      WHEN d.arabic = arabic_text THEN 1.0::DOUBLE PRECISION
      WHEN d.arabic LIKE '%' || arabic_text || '%' THEN 0.7::DOUBLE PRECISION
      WHEN d.arabic_phonetic LIKE '%' || arabic_text || '%' THEN 0.5::DOUBLE PRECISION
      ELSE 0.3::DOUBLE PRECISION
    END as similarity_score
  FROM dictionary d
  WHERE d.arabic IS NOT NULL 
    AND d.arabic != ''
    AND (
      d.arabic = arabic_text
      OR d.arabic LIKE '%' || arabic_text || '%'
      OR d.arabic_phonetic LIKE '%' || arabic_text || '%'
    )
  ORDER BY similarity_score DESC
  LIMIT 10;
END;
$$;

-- Grant execute permissions
GRANT EXECUTE ON FUNCTION translate_english_to_arabic(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION translate_english_to_arabic(TEXT) TO anon;
GRANT EXECUTE ON FUNCTION suggest_chaldean_from_arabic(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION suggest_chaldean_from_arabic(TEXT) TO anon;

-- Insert some common English-Arabic word pairs to get started
-- These are the most frequently used words
INSERT INTO english_arabic_dictionary (english, arabic, arabic_phonetic, part_of_speech, frequency_rank) VALUES
-- Pronouns
('I', 'أنا', 'ana', 'pronoun', 1),
('you', 'أنت', 'anta/anti', 'pronoun', 2),
('he', 'هو', 'huwa', 'pronoun', 3),
('she', 'هي', 'hiya', 'pronoun', 4),
('we', 'نحن', 'nahnu', 'pronoun', 5),
('they', 'هم', 'hum', 'pronoun', 6),

-- Common verbs
('be', 'يكون', 'yakun', 'verb', 7),
('have', 'يملك', 'yamluk', 'verb', 8),
('do', 'يفعل', 'yaf''al', 'verb', 9),
('say', 'يقول', 'yaqul', 'verb', 10),
('go', 'يذهب', 'yathhabu', 'verb', 11),
('get', 'يحصل', 'yahsulu', 'verb', 12),
('make', 'يصنع', 'yasna''u', 'verb', 13),
('know', 'يعرف', 'ya''rifu', 'verb', 14),
('think', 'يفكر', 'yufakkiru', 'verb', 15),
('take', 'يأخذ', 'ya''khuthu', 'verb', 16),
('see', 'يرى', 'yara', 'verb', 17),
('come', 'يأتي', 'ya''ti', 'verb', 18),
('want', 'يريد', 'yuridu', 'verb', 19),
('look', 'ينظر', 'yanthuru', 'verb', 20),
('use', 'يستخدم', 'yastakhdimu', 'verb', 21),
('find', 'يجد', 'yajidu', 'verb', 22),
('give', 'يعطي', 'yu''ti', 'verb', 23),
('tell', 'يخبر', 'yukhbiru', 'verb', 24),
('work', 'يعمل', 'ya''malu', 'verb', 25),
('call', 'يتصل', 'yattasilu', 'verb', 26),

-- Common nouns
('time', 'وقت', 'waqt', 'noun', 27),
('person', 'شخص', 'shakhs', 'noun', 28),
('year', 'سنة', 'sana', 'noun', 29),
('way', 'طريق', 'tariq', 'noun', 30),
('day', 'يوم', 'yawm', 'noun', 31),
('thing', 'شيء', 'shay''', 'noun', 32),
('man', 'رجل', 'rajul', 'noun', 33),
('woman', 'امرأة', 'imra''a', 'noun', 34),
('life', 'حياة', 'hayah', 'noun', 35),
('child', 'طفل', 'tifl', 'noun', 36),
('world', 'عالم', '''alam', 'noun', 37),
('hand', 'يد', 'yad', 'noun', 38),
('part', 'جزء', 'juz''', 'noun', 39),
('place', 'مكان', 'makan', 'noun', 40),
('case', 'حالة', 'halah', 'noun', 41),
('week', 'أسبوع', 'usbu''', 'noun', 42),
('company', 'شركة', 'sharikah', 'noun', 43),
('system', 'نظام', 'nitham', 'noun', 44),
('program', 'برنامج', 'barnamij', 'noun', 45),
('question', 'سؤال', 'su''al', 'noun', 46),
('government', 'حكومة', 'hukumah', 'noun', 47),
('number', 'رقم', 'raqm', 'noun', 48),
('night', 'ليل', 'layl', 'noun', 49),
('point', 'نقطة', 'nuqtah', 'noun', 50),

-- Common adjectives
('good', 'جيد', 'jayyid', 'adjective', 51),
('new', 'جديد', 'jadid', 'adjective', 52),
('first', 'أول', 'awwal', 'adjective', 53),
('last', 'آخر', 'akhir', 'adjective', 54),
('long', 'طويل', 'tawil', 'adjective', 55),
('great', 'عظيم', '''athim', 'adjective', 56),
('little', 'صغير', 'saghir', 'adjective', 57),
('own', 'خاص', 'khass', 'adjective', 58),
('other', 'آخر', 'akhar', 'adjective', 59),
('old', 'قديم', 'qadim', 'adjective', 60),
('right', 'صحيح', 'sahih', 'adjective', 61),
('big', 'كبير', 'kabir', 'adjective', 62),
('high', 'عالي', '''ali', 'adjective', 63),
('different', 'مختلف', 'mukhtalif', 'adjective', 64),
('small', 'صغير', 'saghir', 'adjective', 65),
('large', 'كبير', 'kabir', 'adjective', 66),
('next', 'التالي', 'at-tali', 'adjective', 67),
('early', 'مبكر', 'mubakkir', 'adjective', 68),
('young', 'شاب', 'shabb', 'adjective', 69),
('important', 'مهم', 'muhimm', 'adjective', 70),

-- Greetings and common phrases
('hello', 'مرحبا', 'marhaba', 'interjection', 71),
('goodbye', 'وداعا', 'wada''an', 'interjection', 72),
('please', 'من فضلك', 'min fadlak', 'interjection', 73),
('thank you', 'شكرا', 'shukran', 'interjection', 74),
('yes', 'نعم', 'na''am', 'interjection', 75),
('no', 'لا', 'la', 'interjection', 76),
('sorry', 'آسف', 'asif', 'interjection', 77),
('excuse me', 'عفوا', '''afwan', 'interjection', 78),

-- Prepositions
('in', 'في', 'fi', 'preposition', 79),
('on', 'على', '''ala', 'preposition', 80),
('at', 'في', 'fi', 'preposition', 81),
('to', 'إلى', 'ila', 'preposition', 82),
('from', 'من', 'min', 'preposition', 83),
('with', 'مع', 'ma''a', 'preposition', 84),
('for', 'لـ', 'li', 'preposition', 85),
('about', 'عن', '''an', 'preposition', 86),
('after', 'بعد', 'ba''d', 'preposition', 87),
('before', 'قبل', 'qabl', 'preposition', 88),
('between', 'بين', 'bayna', 'preposition', 89),
('through', 'خلال', 'khilal', 'preposition', 90),
('during', 'أثناء', 'athna''', 'preposition', 91),
('under', 'تحت', 'taht', 'preposition', 92),
('over', 'فوق', 'fawq', 'preposition', 93),

-- Common concepts
('love', 'حب', 'hubb', 'noun', 94),
('peace', 'سلام', 'salam', 'noun', 95),
('war', 'حرب', 'harb', 'noun', 96),
('friend', 'صديق', 'sadiq', 'noun', 97),
('family', 'عائلة', '''a''ilah', 'noun', 98),
('home', 'بيت', 'bayt', 'noun', 99),
('house', 'منزل', 'manzil', 'noun', 100)

ON CONFLICT DO NOTHING;

-- Add comment to table
COMMENT ON TABLE english_arabic_dictionary IS 'Base English-Arabic dictionary for auto-translation and building Chaldean vocabulary';

