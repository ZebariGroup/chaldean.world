import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function EmailConfirmation() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const confirmEmail = async () => {
      // Check if user is already authenticated (Supabase may have auto-confirmed)
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setStatus('success');
        setMessage('Email confirmed successfully! Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 2000);
        return;
      }

      // Try to get token from URL hash (Supabase redirects with hash fragments)
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const token = hashParams.get('token') || searchParams.get('token');
      const type = hashParams.get('type') || searchParams.get('type');

      if (!token) {
        // Listen for auth state changes (Supabase may auto-confirm)
        let confirmed = false;
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_IN' && session && !confirmed) {
            confirmed = true;
            setStatus('success');
            setMessage('Email confirmed successfully! Redirecting...');
            setTimeout(() => {
              navigate('/');
            }, 2000);
            subscription.unsubscribe();
          }
        });

        // Wait a bit for auto-confirmation
        setTimeout(() => {
          subscription.unsubscribe();
          if (!confirmed) {
            setStatus('error');
            setMessage('Invalid confirmation link. Please try signing up again.');
          }
        }, 5000);

        return;
      }

      try {
        // Verify the email confirmation token manually
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: type === 'recovery' ? 'recovery' : 'email',
        });

        if (error) {
          setStatus('error');
          setMessage(error.message || 'Failed to confirm email. The link may have expired.');
        } else {
          setStatus('success');
          setMessage('Email confirmed successfully! Redirecting...');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } catch (err) {
        setStatus('error');
        setMessage('An unexpected error occurred while confirming your email.');
      }
    };

    confirmEmail();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
        <div className="text-center">
          {status === 'loading' && (
            <>
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Confirming Your Email
              </h1>
              <p className="text-gray-400">Please wait while we verify your email address...</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Email Confirmed!
              </h1>
              <p className="text-gray-300 mb-6">{message}</p>
              <Link
                to="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Go to Home
              </Link>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Confirmation Failed
              </h1>
              <p className="text-gray-300 mb-6">{message}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/auth?mode=signup"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Sign Up Again
                </Link>
                <Link
                  to="/auth?mode=signin"
                  className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

