import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Report {
  id: string;
  reason: string;
  status: string;
  created_at: string;
  reporter_id: string;
  post_id: string | null;
  comment_id: string | null;
  forum_posts?: {
    title: string;
    content: string;
  };
  forum_comments?: {
    content: string;
  };
}

export default function ForumAdmin() {
  const { user } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdmin();
  }, [user]);

  useEffect(() => {
    if (isAdmin) {
      loadReports();
    }
  }, [isAdmin]);

  const checkAdmin = async () => {
    if (!user?.email) {
      setIsAdmin(false);
      return;
    }
    const { data } = await supabase
      .from('admin_users')
      .select('email')
      .eq('email', user.email)
      .maybeSingle();
    setIsAdmin(!!data);
    setLoading(false);
  };

  const loadReports = async () => {
    try {
      const { data: reportsData, error: reportsError } = await supabase
        .from('forum_reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (reportsError) throw reportsError;

      // Get related posts
      const postIds = reportsData?.filter(r => r.post_id).map(r => r.post_id) || [];
      const { data: posts } = postIds.length > 0 ? await supabase
        .from('forum_posts')
        .select('id, title, content')
        .in('id', postIds) : { data: [] };

      // Get related comments
      const commentIds = reportsData?.filter(r => r.comment_id).map(r => r.comment_id) || [];
      const { data: comments } = commentIds.length > 0 ? await supabase
        .from('forum_comments')
        .select('id, content')
        .in('id', commentIds) : { data: [] };

      // Combine data
      const reportsWithData = (reportsData || []).map(report => {
        const post = posts?.find(p => p.id === report.post_id);
        const comment = comments?.find(c => c.id === report.comment_id);
        return {
          ...report,
          forum_posts: post || undefined,
          forum_comments: comment || undefined
        };
      });

      setReports(reportsWithData);
    } catch (error) {
      console.error('Error loading reports:', error);
    }
  };

  const updateReportStatus = async (reportId: string, status: string) => {
    try {
      const { error } = await supabase
        .from('forum_reports')
        .update({ 
          status,
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString()
        })
        .eq('id', reportId);

      if (error) throw error;
      loadReports();
    } catch (error) {
      console.error('Error updating report:', error);
    }
  };

  const deletePost = async (postId: string) => {
    if (!confirm('Delete this post?')) return;
    
    try {
      const { error } = await supabase
        .from('forum_posts')
        .update({ is_deleted: true })
        .eq('id', postId);

      if (error) throw error;
      loadReports();
      alert('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const deleteComment = async (commentId: string) => {
    if (!confirm('Delete this comment?')) return;
    
    try {
      const { error } = await supabase
        .from('forum_comments')
        .update({ is_deleted: true })
        .eq('id', commentId);

      if (error) throw error;
      loadReports();
      alert('Comment deleted successfully');
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-400 mb-4">You don't have permission to access this page.</p>
          <Link to="/forum" className="text-blue-400 hover:text-blue-300">
            ← Back to Forum
          </Link>
        </div>
      </div>
    );
  }

  const pendingReports = reports.filter(r => r.status === 'pending');
  const reviewedReports = reports.filter(r => r.status !== 'pending');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <Link to="/forum" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
            ← Back to Forum
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
            Forum Moderation
          </h1>
          <p className="text-gray-400">
            Manage reported posts and comments
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="text-3xl font-bold text-yellow-400">{pendingReports.length}</div>
            <div className="text-sm text-gray-400">Pending Reports</div>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="text-3xl font-bold text-green-400">{reviewedReports.length}</div>
            <div className="text-sm text-gray-400">Reviewed Reports</div>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className="text-3xl font-bold text-blue-400">{reports.length}</div>
            <div className="text-sm text-gray-400">Total Reports</div>
          </div>
        </div>

        {/* Pending Reports */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pending Reports</h2>
          {pendingReports.length === 0 ? (
            <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-8 text-center">
              <p className="text-gray-400">No pending reports</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingReports.map(report => (
                <div key={report.id} className="bg-gray-800 rounded-lg border border-yellow-700 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded font-semibold">
                        PENDING
                      </span>
                      <span className="text-sm text-gray-400">
                        {new Date(report.created_at).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-300 mb-1">Reason:</div>
                    <div className="text-white">{report.reason}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-300 mb-1">
                      {report.post_id ? 'Reported Post:' : 'Reported Comment:'}
                    </div>
                    <div className="bg-gray-900 rounded p-3 border border-gray-700">
                      {report.post_id && report.forum_posts && (
                        <>
                          <div className="font-semibold mb-2">{report.forum_posts.title}</div>
                          <p className="text-gray-400 text-sm line-clamp-3">{report.forum_posts.content}</p>
                        </>
                      )}
                      {report.comment_id && report.forum_comments && (
                        <p className="text-gray-400 text-sm">{report.forum_comments.content}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {report.post_id && (
                      <Link
                        to={`/forum/post/${report.post_id}`}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors"
                      >
                        View Post
                      </Link>
                    )}
                    <button
                      onClick={() => updateReportStatus(report.id, 'resolved')}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm transition-colors"
                    >
                      Mark Resolved
                    </button>
                    <button
                      onClick={() => updateReportStatus(report.id, 'dismissed')}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-sm transition-colors"
                    >
                      Dismiss
                    </button>
                    {report.post_id && (
                      <button
                        onClick={() => deletePost(report.post_id!)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm transition-colors"
                      >
                        Delete Post
                      </button>
                    )}
                    {report.comment_id && (
                      <button
                        onClick={() => deleteComment(report.comment_id!)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm transition-colors"
                      >
                        Delete Comment
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reviewed Reports */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Reviewed Reports</h2>
          {reviewedReports.length === 0 ? (
            <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-8 text-center">
              <p className="text-gray-400">No reviewed reports</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviewedReports.map(report => (
                <div key={report.id} className="bg-gray-800 rounded-lg border border-gray-700 p-4 opacity-75">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded font-semibold ${
                        report.status === 'resolved' 
                          ? 'bg-green-600/20 text-green-400'
                          : 'bg-gray-600/20 text-gray-400'
                      }`}>
                        {report.status.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-400">
                        {new Date(report.created_at).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <strong>Reason:</strong> {report.reason}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

