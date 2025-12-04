# Supabase Integration Setup

## What's Been Done

### 1. ✅ Database Schema Created
- Migration file: `supabase/migrations/20241204000000_initial_schema.sql`
- Tables created:
  - `user_progress` - Main user progress tracking
  - `completed_lessons` - Track completed lessons
  - `words_learned` - Track learned words
  - `word_reviews` - Spaced repetition data (SM-2 algorithm)
  - `favorite_words` - User favorites
  - `incorrect_answers` - Track mistakes for review
  - `badges` - Achievement badges
- Row Level Security (RLS) policies enabled
- Auto-create user_progress on signup trigger

### 2. ✅ Supabase Client Setup
- Installed `@supabase/supabase-js`
- Created `src/lib/supabase.ts` with client configuration
- Defaults to local Supabase instance (localhost:54321)

### 3. ✅ Authentication Components
- `src/context/AuthContext.tsx` - Auth state management
- `src/components/Auth.tsx` - Login/SignUp form
- `src/components/ProtectedRoute.tsx` - Route protection (created but not yet used)
- Updated `App.tsx` to include AuthProvider
- Added sign-out button to Layout and Settings

### 4. ⚠️ ProgressContext Migration (IN PROGRESS)
- Currently uses localStorage
- Needs to be migrated to use Supabase database
- This is the main remaining task

## Next Steps

### 1. Start Supabase Locally
```bash
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
export PATH="$HOME/.local/bin:$PATH"
supabase start
```

### 2. Run Migrations
After starting Supabase, migrations should run automatically. Verify with:
```bash
supabase db reset  # This will run all migrations
```

### 3. Migrate ProgressContext to Supabase
The `ProgressContext` needs to be updated to:
- Load progress from Supabase on mount
- Save progress to Supabase instead of localStorage
- Sync all operations (addPoints, completeLesson, etc.) to database
- Handle offline/online sync

### 4. Environment Variables
Create `.env.local` file (if not exists):
```
VITE_SUPABASE_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
```

### 5. Test Authentication Flow
1. Start the dev server: `npm run dev`
2. Navigate to `/#/auth`
3. Sign up with email/password
4. Verify user_progress is created automatically
5. Test sign in/sign out

## Database Schema Overview

### user_progress
- `id` (UUID, FK to auth.users)
- `points`, `level`, `current_streak`, `longest_streak`
- `preferences` (JSONB)
- `total_study_time`, `daily_progress`

### completed_lessons
- `user_id`, `lesson_id`, `completed_at`

### word_reviews
- Spaced repetition data with SM-2 algorithm fields
- `ease_factor`, `interval_days`, `repetitions`
- `next_review` timestamp for scheduling

## Notes

- Authentication is currently optional (users can use app without signing in)
- To make auth required, wrap routes with `<ProtectedRoute>`
- Local Supabase uses default anon key (safe for local dev only)
- For production, update environment variables with your Supabase project credentials

