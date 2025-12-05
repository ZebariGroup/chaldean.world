-- Seed initial admin user (requested)
INSERT INTO admin_users (email)
VALUES ('mzebari@yahoo.com')
ON CONFLICT (email) DO NOTHING;

