# Community Forum Setup Guide

This guide explains how to set up and use the new community forum feature in Chaldean World.

## Overview

The forum allows Chaldeans to:
- Discuss the language, culture, and traditions
- Ask and answer questions about learning Chaldean
- Request translation help
- Share resources and materials
- Organize community events

## Database Setup

### Apply Migrations

Run the following migrations in order:

```bash
cd /home/supabase/Documents/SupabaseCursor/chaldean.world
./APPLY_MIGRATIONS.sh
```

Or manually apply the migrations:

```bash
supabase db reset
```

The forum uses these new tables:
- `forum_categories` - Forum categories (Language Learning, Culture & History, etc.)
- `forum_posts` - User posts within categories
- `forum_comments` - Comments on posts (supports nested replies)
- `forum_likes` - Likes on posts and comments
- `forum_reports` - Moderation reports for inappropriate content
- `user_profiles` - Extended user information (username, display name, bio, avatar)

### Default Categories

The migration automatically creates these categories:
1. 📚 Language Learning - Tips, resources, and learning discussions
2. 🏛️ Culture & History - Chaldean culture, traditions, and history
3. 💬 Translation Help - Get help translating words and phrases
4. 💭 General Discussion - General community chat
5. 📖 Resources & Materials - Share learning resources
6. 🎉 Events & Meetups - Organize community events

## Features

### For Users

#### Browsing Posts
- Navigate to the Forum from the main navigation menu
- Browse posts by category
- Search posts by title or content
- View post details including comments, likes, and view count

#### Creating Posts
1. Click "New Post" button in the forum
2. Select a category
3. Enter a title (max 200 characters)
4. Write your content
5. Preview your post before submitting
6. Click "Create Post"

#### Commenting
- View all comments on a post
- Reply to specific comments (nested replies supported)
- Like posts and comments
- Edit or delete your own comments

#### Engagement
- Like posts and comments
- Reply to comments
- View user profiles

### For Admins

#### Category Management
- Create new categories
- Edit category names, descriptions, icons
- Reorder categories (display_order field)
- Delete categories (will cascade delete all posts)

#### Post Moderation
- Pin important posts
- Lock posts to prevent new comments
- Soft-delete inappropriate posts (is_deleted flag)
- View and manage reported content

#### User Management
- View user profiles and activity
- Review reports from users
- Take action on reported content

## API Examples

### Creating a Post

```typescript
const { data, error } = await supabase
  .from('forum_posts')
  .insert({
    category_id: 'category-uuid',
    user_id: user.id,
    title: 'My Post Title',
    content: 'Post content here...'
  })
  .select()
  .single();
```

### Loading Posts for a Category

```typescript
const { data, error } = await supabase
  .from('forum_posts')
  .select(`
    id,
    title,
    content,
    created_at,
    is_pinned,
    view_count,
    user_profiles (
      display_name,
      username
    )
  `)
  .eq('category_id', categoryId)
  .eq('is_deleted', false)
  .order('is_pinned', { ascending: false })
  .order('created_at', { ascending: false });
```

### Adding a Comment

```typescript
const { error } = await supabase
  .from('forum_comments')
  .insert({
    post_id: postId,
    user_id: user.id,
    content: commentText,
    parent_comment_id: replyingToId || null
  });
```

### Liking a Post

```typescript
// Add like
await supabase
  .from('forum_likes')
  .insert({ post_id: postId, user_id: user.id });

// Remove like
await supabase
  .from('forum_likes')
  .delete()
  .eq('post_id', postId)
  .eq('user_id', user.id);
```

### Reporting Content

```typescript
const { error } = await supabase
  .from('forum_reports')
  .insert({
    reporter_id: user.id,
    post_id: postId, // or comment_id for comments
    reason: 'Spam content',
    status: 'pending'
  });
```

## Security

### Row Level Security (RLS)

All forum tables have RLS enabled with these policies:

**Categories:**
- Everyone can read
- Only admins can create/update/delete

**Posts:**
- Everyone can read non-deleted posts
- Authenticated users can create posts
- Users can update/delete their own posts
- Admins can update/delete any post

**Comments:**
- Everyone can read non-deleted comments
- Authenticated users can create comments
- Users can update/delete their own comments
- Admins can update/delete any comment

**Likes:**
- Everyone can view like counts
- Authenticated users can add/remove their own likes

**Reports:**
- Users can view their own reports
- Admins can view all reports
- Users can create reports
- Only admins can update report status

**User Profiles:**
- Everyone can view profiles
- Users can create/update their own profile

## Navigation

The forum is accessible from:
- Desktop: Top navigation bar (💭 Forum)
- Mobile: Hamburger menu (💭 Community Forum)

## Routes

- `/forum` - Main forum page with category listing
- `/forum/post/:postId` - Individual post view with comments
- `/forum/new` - Create new post form

## Customization

### Adding New Categories

```sql
INSERT INTO forum_categories (name, description, icon, display_order)
VALUES ('New Category', 'Category description', '🎨', 7);
```

### Pinning a Post

```sql
UPDATE forum_posts
SET is_pinned = true
WHERE id = 'post-uuid';
```

### Locking a Post

```sql
UPDATE forum_posts
SET is_locked = true
WHERE id = 'post-uuid';
```

## Future Enhancements

Potential features to add:
- User reputation system
- Tags for posts
- Advanced search and filtering
- Image uploads in posts
- Markdown support for rich text
- Email notifications for replies
- User mentions (@username)
- Post bookmarking/saving
- Thread subscription
- Moderator roles and permissions
- Post editing history
- Best answer marking for questions

## Troubleshooting

### Posts not showing up
- Check RLS policies are enabled
- Verify user is authenticated
- Check `is_deleted` flag is false

### Comments not loading
- Verify post_id exists
- Check user has permission to view
- Check comment count queries

### Like counts incorrect
- Ensure unique constraint on likes (user_id, post_id)
- Reload comments after like action

### View count not incrementing
- Ensure `increment_post_views` function exists
- Check function permissions (SECURITY DEFINER)

## Support

For issues or questions, contact the development team or open an issue in the repository.

