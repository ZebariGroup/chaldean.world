import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

export default function Onboarding() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If user already has a name, redirect to home
  useEffect(() => {
    const checkName = async () => {
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', user.id)
          .single();
        
        if (data?.full_name) {
          navigate('/');
        }
      } else {
        // Guest mode - check local storage
        const guestName = localStorage.getItem('guestName');
        if (guestName) {
          navigate('/');
        }
      }
    };
    checkName();
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setError(null);

    try {
      if (user) {
        // Save to Supabase profile
        const { error: updateError } = await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            full_name: name.trim(),
            updated_at: new Date().toISOString(),
          });

        if (updateError) throw updateError;
        
        // Also update auth metadata for faster access
        await supabase.auth.updateUser({
          data: { full_name: name.trim() }
        });
      } else {
        // Save to local storage for guest
        localStorage.setItem('guestName', name.trim());
      }
      
      navigate('/');
    } catch (err: any) {
      console.error('Error saving profile:', err);
      setError(err.message || 'Failed to save profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Chaldean World" 
              className="h-20 w-auto object-contain" 
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome!</h1>
          <p className="text-gray-400">Let's get to know you better.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              What should we call you?
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="Your name"
              required
              autoFocus
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !name.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : 'Get Started →'}
          </button>
        </form>
      </div>
    </div>
  );
}

