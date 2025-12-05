-- Moderation for community pronunciations

-- Admin allowlist (no seed rows added here)
CREATE TABLE IF NOT EXISTS admin_users (
  email TEXT PRIMARY KEY
);

-- Helper to check admin status based on auth JWT email
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM admin_users
    WHERE lower(email) = lower(auth.jwt()->>'email')
  );
$$;

-- Add moderation fields
ALTER TABLE word_pronunciations
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  ADD COLUMN IF NOT EXISTS reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMPTZ;

-- Replace old policies with moderated flow
DROP POLICY IF EXISTS "Anyone can read word pronunciations" ON word_pronunciations;
DROP POLICY IF EXISTS "Authenticated users can add pronunciations" ON word_pronunciations;
DROP POLICY IF EXISTS "Users can update their pronunciations" ON word_pronunciations;
DROP POLICY IF EXISTS "Users can delete their pronunciations" ON word_pronunciations;

-- Public can only read approved items
CREATE POLICY "Public can read approved pronunciations"
  ON word_pronunciations
  FOR SELECT
  USING (status = 'approved');

-- Admins can read everything
CREATE POLICY "Admins can read all pronunciations"
  ON word_pronunciations
  FOR SELECT
  USING (is_admin());

-- Authenticated users can submit, always pending and tied to themselves
CREATE POLICY "Authenticated users can add pending pronunciations"
  ON word_pronunciations
  FOR INSERT
  WITH CHECK (
    auth.role() = 'authenticated'
    AND status = 'pending'
    AND user_id = auth.uid()
  );

-- Admins moderate (approve/reject) and can edit metadata
CREATE POLICY "Admins can moderate pronunciations"
  ON word_pronunciations
  FOR UPDATE
  USING (is_admin());

-- Admins can delete pronunciations
CREATE POLICY "Admins can delete pronunciations"
  ON word_pronunciations
  FOR DELETE
  USING (is_admin());

-- Storage: allow admins to manage pronunciation audio in addition to existing rules
DROP POLICY IF EXISTS "Admins can manage pronunciation audio" ON storage.objects;
CREATE POLICY "Admins can manage pronunciation audio"
  ON storage.objects
  FOR ALL
  USING (bucket_id = 'pronunciations' AND is_admin());

