import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export default function CreatePost() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadCategories();
    // Set initial category from location state if available
    if (location.state?.categoryId) {
      setSelectedCategory(location.state.categoryId);
    }
  }, [location.state]);

  const loadCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('forum_categories')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
      
      // If no category selected yet and we have categories, select the first one
      if (!selectedCategory && data && data.length > 0 && !location.state?.categoryId) {
        setSelectedCategory(data[0].id);
      }
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('You must be logged in to create a post');
      return;
    }

    if (!selectedCategory) {
      setError('Please select a category');
      return;
    }

    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }

    if (!content.trim()) {
      setError('Please enter some content');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('forum_posts')
        .insert({
          category_id: selectedCategory,
          user_id: user.id,
          title: title.trim(),
          content: content.trim()
        })
        .select()
        .single();

      if (error) throw error;

      // Navigate to the new post
      navigate(`/forum/post/${data.id}`);
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Failed to create post. Please try again.');
      setSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to create a post</h1>
          <Link to="/auth" className="text-blue-400 hover:text-blue-300">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <Link to="/forum" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Forum
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
            Create New Post
          </h1>
          <p className="text-gray-400">
            Share your thoughts, questions, or knowledge with the community
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-400">
              {error}
            </div>
          )}

          {/* Category Selection */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold mb-2">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              disabled={submitting}
            >
              <option value="">Select a category...</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
            {selectedCategory && (
              <p className="mt-2 text-sm text-gray-400">
                {categories.find(c => c.id === selectedCategory)?.description}
              </p>
            )}
          </div>

          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a descriptive title for your post..."
              maxLength={200}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              disabled={submitting}
            />
            <div className="mt-1 text-right text-xs text-gray-500">
              {title.length}/200
            </div>
          </div>

          {/* Content Input */}
          <div>
            <label htmlFor="content" className="block text-sm font-semibold mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here... You can ask questions, share knowledge, or start a discussion."
              rows={12}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 resize-none"
              disabled={submitting}
            />
            <div className="mt-1 text-right text-xs text-gray-500">
              {content.length} characters
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-2">Community Guidelines</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Be respectful and courteous to all members</li>
              <li>• Stay on topic and choose the appropriate category</li>
              <li>• Use clear and descriptive titles</li>
              <li>• Search before posting to avoid duplicates</li>
              <li>• No spam, advertising, or off-topic content</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={submitting || !selectedCategory || !title.trim() || !content.trim()}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Post...
                </span>
              ) : (
                'Create Post'
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate('/forum')}
              disabled={submitting}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Preview Section */}
        {(title || content) && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
              {content && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 whitespace-pre-wrap">{content}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

