# Production Migration Steps for Forum Feature

## Deployment Status

✅ **Code deployed to GitHub**: Commit `4e62bbb`
✅ **Frontend deployed to Vercel**: Production build successful
✅ **Local database migrations applied**: Forum tables created locally

## ⚠️ IMPORTANT: Production Database Migration Required

The forum feature requires database migrations to be applied to your **production Supabase instance**.

### Migration Files to Apply

1. `supabase/migrations/20251207030000_forum_tables.sql` - Creates forum tables, policies, and categories
2. `supabase/migrations/20251207040000_forum_functions.sql` - Creates helper functions

### Option 1: Apply via Supabase Dashboard (Recommended)

1. Log in to your Supabase project dashboard at https://supabase.com
2. Navigate to **SQL Editor**
3. Create a new query
4. Copy and paste the contents of `supabase/migrations/20251207030000_forum_tables.sql`
5. Run the query
6. Create another new query
7. Copy and paste the contents of `supabase/migrations/20251207040000_forum_functions.sql`
8. Run the query
9. Verify tables were created: Go to **Table Editor** and look for `forum_*` tables

### Option 2: Apply via Supabase CLI

If you have the Supabase CLI configured for production:

```bash
# Link to your production project
supabase link --project-ref YOUR_PROJECT_REF

# Apply migrations
supabase db push
```

### Option 3: Apply via psql (Direct Connection)

If you have direct database access:

```bash
# Get your production database connection string from Supabase dashboard
# Settings > Database > Connection string (URI mode)

psql "postgresql://postgres:[YOUR-PASSWORD]@[YOUR-HOST]:5432/postgres" \
  -f supabase/migrations/20251207030000_forum_tables.sql

psql "postgresql://postgres:[YOUR-PASSWORD]@[YOUR-HOST]:5432/postgres" \
  -f supabase/migrations/20251207040000_forum_functions.sql
```

### Verification Steps

After applying migrations, verify in Supabase dashboard:

1. **Table Editor**: Check for these tables:
   - forum_categories (should have 6 default categories)
   - forum_posts
   - forum_comments
   - forum_likes
   - forum_reports
   - user_profiles

2. **SQL Editor**: Run this query to verify categories:
```sql
SELECT name, icon, description FROM forum_categories ORDER BY display_order;
```

Expected output: 6 categories (Language Learning, Culture & History, Translation Help, General Discussion, Resources & Materials, Events & Meetups)

3. **Authentication > Policies**: Verify RLS policies are enabled on all forum tables

4. **Database > Functions**: Verify `increment_post_views` function exists

### What Happens if Migrations Are Not Applied?

If you try to access the forum without applying migrations:
- Forum page will show errors or empty state
- Users won't be able to create posts
- Database queries will fail with "table does not exist" errors

### Testing After Migration

1. Visit your production site: https://chaldean-world-iqwae0c6z-matthews-projects-cc2fa68f.vercel.app
2. Log in with a user account
3. Click "Forum" in the navigation
4. Verify categories load
5. Try creating a test post
6. Test commenting and likes
7. Verify admin moderation (if you're an admin)

### Rollback (If Needed)

If you need to remove the forum tables:

```sql
-- Drop tables in reverse order (handles foreign keys)
DROP TABLE IF EXISTS forum_reports CASCADE;
DROP TABLE IF EXISTS forum_likes CASCADE;
DROP TABLE IF EXISTS forum_comments CASCADE;
DROP TABLE IF EXISTS forum_posts CASCADE;
DROP TABLE IF EXISTS forum_categories CASCADE;
DROP TABLE IF EXISTS user_profiles CASCADE;
DROP FUNCTION IF EXISTS increment_post_views(UUID);
DROP FUNCTION IF EXISTS create_user_profile();
```

### Support

For migration issues:
1. Check Supabase logs in dashboard
2. Verify RLS policies are correct
3. Check table permissions
4. Review migration SQL files for syntax errors

### Post-Migration Checklist

- [ ] Tables created successfully
- [ ] 6 default categories exist
- [ ] RLS policies enabled on all tables
- [ ] Functions created (increment_post_views, create_user_profile)
- [ ] User profiles auto-create on signup
- [ ] Forum accessible from navigation
- [ ] Can create posts
- [ ] Can comment on posts
- [ ] Can like posts and comments
- [ ] Admin moderation works (if applicable)

## Current Deployment URLs

- **Production**: https://chaldean-world-iqwae0c6z-matthews-projects-cc2fa68f.vercel.app
- **GitHub**: https://github.com/ZebariGroup/chaldean.world
- **Local Dev**: http://localhost:5173/

## Next Steps After Migration

1. Apply the migrations to production Supabase
2. Test the forum on production
3. Create an initial welcome post in each category
4. Monitor for any errors in Supabase logs
5. Announce the new forum feature to users!

---

**Note**: The local Supabase instance already has these migrations applied and is working correctly. Only production needs updating.

