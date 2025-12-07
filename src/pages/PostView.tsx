import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  is_pinned: boolean;
  is_locked: boolean;
  view_count: number;
  user_id: string;
  category_id: string;
  user_profiles: {
    display_name: string;
    username: string;
    avatar_url: string | null;
  };
  forum_categories: {
    name: string;
    icon: string;
  };
}

interface Comment {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  parent_comment_id: string | null;
  user_profiles: {
    display_name: string;
    username: string;
    avatar_url: string | null;
  };
  like_count: number;
  is_liked: boolean;
}

export default function PostView() {
  const { postId } = useParams<{ postId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (postId) {
      loadPost();
      loadComments();
      incrementViewCount();
    }
  }, [postId]);

  useEffect(() => {
    if (post && user) {
      checkIfLiked();
    }
  }, [post, user]);

  const loadPost = async () => {
    try {
      const { data: postData, error: postError } = await supabase
        .from('forum_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (postError) throw postError;

      // Get user profile
      const { data: userProfile } = await supabase
        .from('user_profiles')
        .select('display_name, username, avatar_url')
        .eq('id', postData.user_id)
        .single();

      // Get category
      const { data: category } = await supabase
        .from('forum_categories')
        .select('name, icon')
        .eq('id', postData.category_id)
        .single();

      const data = {
        ...postData,
        user_profiles: userProfile || { display_name: 'Unknown', username: 'unknown', avatar_url: null },
        forum_categories: category || { name: 'Unknown', icon: '💭' }
      };

      setPost(data);

      // Get like count
      const { count } = await supabase
        .from('forum_likes')
        .select('*', { count: 'exact', head: true })
        .eq('post_id', postId);
      
      setLikeCount(count || 0);
    } catch (error) {
      console.error('Error loading post:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadComments = async () => {
    try {
      const { data: commentsData, error: commentsError } = await supabase
        .from('forum_comments')
        .select('*')
        .eq('post_id', postId)
        .eq('is_deleted', false)
        .order('created_at', { ascending: true });

      if (commentsError) throw commentsError;

      // Get user profiles for all comments
      const userIds = [...new Set((commentsData || []).map(c => c.user_id))];
      const { data: userProfiles } = await supabase
        .from('user_profiles')
        .select('id, display_name, username, avatar_url')
        .in('id', userIds);

      // Get like counts and user likes for each comment
      const commentIds = (commentsData || []).map(c => c.id);
      const { data: likes } = await supabase
        .from('forum_likes')
        .select('comment_id, user_id')
        .in('comment_id', commentIds);

      const commentsWithLikes = (commentsData || []).map(comment => {
        const commentLikes = likes?.filter(l => l.comment_id === comment.id) || [];
        const userProfile = userProfiles?.find(u => u.id === comment.user_id) || {
          display_name: 'Unknown',
          username: 'unknown',
          avatar_url: null
        };
        return {
          ...comment,
          user_profiles: userProfile,
          like_count: commentLikes.length,
          is_liked: user ? commentLikes.some(l => l.user_id === user.id) : false
        };
      });

      setComments(commentsWithLikes);
    } catch (error) {
      console.error('Error loading comments:', error);
    }
  };

  const incrementViewCount = async () => {
    try {
      await supabase.rpc('increment_post_views', { post_id: postId });
    } catch (error) {
      // Create the function if it doesn't exist
      console.log('View count increment skipped');
    }
  };

  const checkIfLiked = async () => {
    if (!user || !postId) return;
    
    try {
      const { data } = await supabase
        .from('forum_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_id', user.id)
        .maybeSingle();
      
      setIsLiked(!!data);
    } catch (error) {
      console.error('Error checking like status:', error);
    }
  };

  const toggleLike = async () => {
    if (!user) return;

    try {
      if (isLiked) {
        await supabase
          .from('forum_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id);
        setLikeCount(prev => prev - 1);
        setIsLiked(false);
      } else {
        await supabase
          .from('forum_likes')
          .insert({ post_id: postId, user_id: user.id });
        setLikeCount(prev => prev + 1);
        setIsLiked(true);
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const toggleCommentLike = async (commentId: string, currentlyLiked: boolean) => {
    if (!user) return;

    try {
      if (currentlyLiked) {
        await supabase
          .from('forum_likes')
          .delete()
          .eq('comment_id', commentId)
          .eq('user_id', user.id);
      } else {
        await supabase
          .from('forum_likes')
          .insert({ comment_id: commentId, user_id: user.id });
      }
      loadComments(); // Reload to update counts
    } catch (error) {
      console.error('Error toggling comment like:', error);
    }
  };

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !commentText.trim() || submitting) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('forum_comments')
        .insert({
          post_id: postId,
          user_id: user.id,
          content: commentText.trim(),
          parent_comment_id: replyingTo
        });

      if (error) throw error;

      setCommentText('');
      setReplyingTo(null);
      await loadComments();
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const deletePost = async () => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('forum_posts')
        .update({ is_deleted: true })
        .eq('id', postId);

      if (error) throw error;
      navigate('/forum');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post.');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getReplyingToComment = () => {
    return comments.find(c => c.id === replyingTo);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-400">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-4">Post not found</p>
          <Link to="/forum" className="text-blue-400 hover:text-blue-300">
            ← Back to Forum
          </Link>
        </div>
      </div>
    );
  }

  const topLevelComments = comments.filter(c => !c.parent_comment_id);
  const getReplies = (commentId: string) => comments.filter(c => c.parent_comment_id === commentId);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
          <Link to="/forum" className="hover:text-blue-400 transition-colors">
            Forum
          </Link>
          <span>›</span>
          <span className="flex items-center gap-1">
            <span>{post.forum_categories.icon}</span>
            <span>{post.forum_categories.name}</span>
          </span>
        </div>

        {/* Post Content */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-6">
          {/* Post Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              {post.user_profiles?.display_name?.[0]?.toUpperCase() || '?'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-white">{post.user_profiles?.display_name}</h2>
                <span className="text-gray-500">@{post.user_profiles?.username}</span>
                {post.is_pinned && (
                  <span className="px-2 py-0.5 bg-yellow-600/20 text-yellow-400 text-xs rounded font-semibold">
                    PINNED
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400">{formatDate(post.created_at)}</p>
            </div>
            {user && user.id === post.user_id && (
              <button
                onClick={deletePost}
                className="px-3 py-1 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors"
              >
                Delete
              </button>
            )}
          </div>

          {/* Post Title */}
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none mb-4">
            <p className="text-gray-300 whitespace-pre-wrap">{post.content}</p>
          </div>

          {/* Post Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
            <button
              onClick={toggleLike}
              disabled={!user}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isLiked
                  ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              } ${!user ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <svg className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-semibold">{likeCount}</span>
            </button>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{comments.length} {comments.length === 1 ? 'comment' : 'comments'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{post.view_count} views</span>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        {user && !post.is_locked && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">
              {replyingTo ? `Reply to ${getReplyingToComment()?.user_profiles.display_name}` : 'Add a Comment'}
            </h3>
            {replyingTo && (
              <div className="mb-4 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Replying to:</span>
                  <button
                    onClick={() => setReplyingTo(null)}
                    className="text-xs text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-sm text-gray-300">{getReplyingToComment()?.content}</p>
              </div>
            )}
            <form onSubmit={submitComment}>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write your comment..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 resize-none"
                disabled={submitting}
              />
              <div className="mt-3 flex justify-end">
                <button
                  type="submit"
                  disabled={!commentText.trim() || submitting}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
                >
                  {submitting ? 'Posting...' : 'Post Comment'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Comments List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">
            Comments ({comments.length})
          </h3>
          
          {topLevelComments.map(comment => (
            <div key={comment.id} className="bg-gray-800 rounded-lg border border-gray-700 p-4">
              {/* Comment Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {comment.user_profiles?.display_name?.[0]?.toUpperCase() || '?'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{comment.user_profiles?.display_name}</span>
                    <span className="text-gray-500 text-sm">@{comment.user_profiles?.username}</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">{formatDate(comment.created_at)}</span>
                  </div>
                </div>
              </div>

              {/* Comment Content */}
              <p className="text-gray-300 mb-3 ml-13 whitespace-pre-wrap">{comment.content}</p>

              {/* Comment Actions */}
              <div className="flex items-center gap-4 ml-13">
                <button
                  onClick={() => toggleCommentLike(comment.id, comment.is_liked)}
                  disabled={!user}
                  className={`flex items-center gap-1 text-sm ${
                    comment.is_liked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                  } transition-colors ${!user ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <svg className={`w-4 h-4 ${comment.is_liked ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{comment.like_count}</span>
                </button>
                {user && !post.is_locked && (
                  <button
                    onClick={() => setReplyingTo(comment.id)}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Reply
                  </button>
                )}
              </div>

              {/* Nested Replies */}
              {getReplies(comment.id).map(reply => (
                <div key={reply.id} className="mt-4 ml-13 pl-4 border-l-2 border-gray-700">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {reply.user_profiles?.display_name?.[0]?.toUpperCase() || '?'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm">{reply.user_profiles?.display_name}</span>
                        <span className="text-gray-500 text-xs">@{reply.user_profiles?.username}</span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-gray-500 text-xs">{formatDate(reply.created_at)}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-2 ml-11 whitespace-pre-wrap">{reply.content}</p>
                  <div className="flex items-center gap-4 ml-11">
                    <button
                      onClick={() => toggleCommentLike(reply.id, reply.is_liked)}
                      disabled={!user}
                      className={`flex items-center gap-1 text-xs ${
                        reply.is_liked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                      } transition-colors ${!user ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <svg className={`w-3 h-3 ${reply.is_liked ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{reply.like_count}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

