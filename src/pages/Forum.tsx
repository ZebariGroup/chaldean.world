import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  display_order: number;
}

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  is_pinned: boolean;
  view_count: number;
  user_id: string;
  user_profiles: {
    display_name: string;
    username: string;
    fluency_english?: string;
    fluency_arabic?: string;
    fluency_sureth?: string;
    hometown?: string;
  };
  comment_count: number;
  like_count: number;
}

export default function Forum() {
  const { user } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      loadPosts(selectedCategory);
    }
  }, [selectedCategory]);

  const loadCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('forum_categories')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
      
      // Auto-select first category
      if (data && data.length > 0 && !selectedCategory) {
        setSelectedCategory(data[0].id);
      }
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadPosts = async (categoryId: string) => {
    try {
      setLoading(true);
      
      // Load posts with user info and counts
      const { data: postsData, error: postsError } = await supabase
        .from('forum_posts')
        .select(`
          id,
          title,
          content,
          created_at,
          is_pinned,
          view_count,
          user_id
        `)
        .eq('category_id', categoryId)
        .eq('is_deleted', false)
        .order('is_pinned', { ascending: false })
        .order('created_at', { ascending: false });

      if (postsError) throw postsError;

      // Get user profiles for all posts
      const userIds = [...new Set((postsData || []).map(p => p.user_id))];
      const { data: userProfiles } = await supabase
        .from('user_profiles')
        .select('id, display_name, username, fluency_sureth, hometown')
        .in('id', userIds);

      // Get comment counts
      const postIds = (postsData || []).map(p => p.id);
      const { data: commentCounts } = await supabase
        .from('forum_comments')
        .select('post_id')
        .in('post_id', postIds)
        .eq('is_deleted', false);

      // Get like counts
      const { data: likeCounts } = await supabase
        .from('forum_likes')
        .select('post_id')
        .in('post_id', postIds);

      // Combine data
      const postsWithCounts = (postsData || []).map(post => {
        const commentCount = commentCounts?.filter(c => c.post_id === post.id).length || 0;
        const likeCount = likeCounts?.filter(l => l.post_id === post.id).length || 0;
        const userProfile = userProfiles?.find(u => u.id === post.user_id) || {
          display_name: 'Unknown',
          username: 'unknown'
        };
        return { 
          ...post, 
          user_profiles: userProfile,
          comment_count: commentCount, 
          like_count: likeCount 
        };
      });

      setPosts(postsWithCounts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post =>
    searchQuery === '' ||
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
            Community Forum
          </h1>
          <p className="text-gray-400">
            Connect with fellow Chaldean learners and share knowledge
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all
                  ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }
                `}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Create Post */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
            />
          </div>
          {user && (
            <Link
              to="/forum/new"
              state={{ categoryId: selectedCategory, categoryName: selectedCategoryData?.name }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap text-center"
            >
              + New Post
            </Link>
          )}
        </div>

        {/* Category Description */}
        {selectedCategoryData && (
          <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedCategoryData.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-white">{selectedCategoryData.name}</h2>
                <p className="text-gray-400 text-sm">{selectedCategoryData.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Posts List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-400">Loading posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-gray-800/30 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-lg mb-2">No posts yet in this category</p>
            {user && (
              <p className="text-gray-500">Be the first to start a discussion!</p>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                to={`/forum/post/${post.id}`}
                className="block bg-gray-800 hover:bg-gray-750 rounded-lg border border-gray-700 hover:border-gray-600 transition-all p-4 group"
              >
                <div className="flex items-start gap-4">
                  {/* Post Icon/Avatar */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {post.user_profiles?.display_name?.[0]?.toUpperCase() || '?'}
                  </div>

                  {/* Post Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      {post.is_pinned && (
                        <span className="flex-shrink-0 px-2 py-0.5 bg-yellow-600/20 text-yellow-400 text-xs rounded font-semibold">
                          PINNED
                        </span>
                      )}
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {post.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 mb-2">
                      {post.content.substring(0, 150)}...
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-2">
                        <span className="text-blue-400">@{post.user_profiles?.username || 'unknown'}</span>
                        {post.user_profiles?.fluency_sureth && (
                          <span className={`px-1.5 py-0.5 rounded text-[10px] border ${
                            post.user_profiles.fluency_sureth === 'Native' ? 'border-purple-500/50 text-purple-400' :
                            post.user_profiles.fluency_sureth === 'Fluent' || post.user_profiles.fluency_sureth === 'Advanced' ? 'border-green-500/50 text-green-400' :
                            'border-blue-500/50 text-blue-400'
                          }`}>
                            {post.user_profiles.fluency_sureth}
                          </span>
                        )}
                        {post.user_profiles?.hometown && (
                          <span className="text-gray-400 flex items-center gap-1" title="Hometown">
                            📍 {post.user_profiles.hometown}
                          </span>
                        )}
                      </span>
                      <span>•</span>
                      <span>{formatDate(post.created_at)}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        {post.comment_count}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {post.like_count}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {post.view_count}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

