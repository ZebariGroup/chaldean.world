-- Remove the problematic trigger
-- User_progress will be created by the app on first login instead

-- Drop the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Drop the function
DROP FUNCTION IF EXISTS public.create_user_progress();

-- Verify
SELECT 'Trigger removed' as status;





