ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS fluency_english TEXT CHECK (fluency_english IN ('Native', 'Fluent', 'Advanced', 'Intermediate', 'Beginner', 'None')),
ADD COLUMN IF NOT EXISTS fluency_arabic TEXT CHECK (fluency_arabic IN ('Native', 'Fluent', 'Advanced', 'Intermediate', 'Beginner', 'None')),
ADD COLUMN IF NOT EXISTS fluency_sureth TEXT CHECK (fluency_sureth IN ('Native', 'Fluent', 'Advanced', 'Intermediate', 'Beginner', 'None'));

-- Migrate existing language_level to fluency_sureth if applicable, or just leave it for now
-- (Assuming language_level was primarily for Sureth learning level given the context of the app)
UPDATE user_profiles 
SET fluency_sureth = language_level 
WHERE language_level IN ('Native', 'Fluent', 'Advanced', 'Intermediate', 'Beginner', 'None')
AND fluency_sureth IS NULL;

