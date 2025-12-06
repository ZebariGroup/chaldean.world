import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get('mode');
  const [isSignUp, setIsSignUp] = useState(mode === 'signup');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState(''); // Removed for simpler UX
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const { signIn, signUp, signInAsGuest, resetPassword, user, isGuest } = useAuth();

  // Redirect to home if already authenticated or in guest mode
  useEffect(() => {
    if (user || isGuest) {
      navigate('/');
    }
  }, [user, isGuest, navigate]);

  // Update isSignUp when URL changes
  useEffect(() => {
    if (mode === 'signup') {
      setIsSignUp(true);
    } else if (mode === 'signin') {
      setIsSignUp(false);
    }
  }, [mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (isForgotPassword) {
      // Handle password reset
      setLoading(true);
      try {
        const { error } = await resetPassword(email);
        if (error) {
          setError(error.message);
        } else {
          setEmailSent(true);
          setMessage(`Password reset email sent to ${email}. Check your inbox and click the link to reset your password.`);
        }
      } catch (err) {
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
      return;
    }

    if (isSignUp) {
      // if (password !== confirmPassword) {
      //   setError('Passwords do not match');
      //   return;
      // }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
    }

    setLoading(true);

    try {
      if (isSignUp) {
        const { error, data } = await signUp(email, password);
        if (error) {
          setError(error.message);
        } else {
          // Check if email confirmation is required
          if (data?.user && !data?.session) {
            // User created but needs email confirmation
            setEmailSent(true);
            setMessage(`Confirmation email sent to ${email}. Please check your inbox and click the confirmation link.`);
          } else if (data?.session) {
            // User is already confirmed (shouldn't happen with enable_confirmations=true, but handle it)
            setMessage('Account created successfully! Redirecting...');
          }
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        }
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 my-auto">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Chaldean World</h1>
          <p className="text-gray-400">
            {isForgotPassword ? 'Reset your password' : isSignUp ? 'Create your account' : 'Sign in to continue'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {message && (
            <div className={`${emailSent ? 'bg-blue-900/50 border-blue-700' : 'bg-green-900/50 border-green-700'} border text-${emailSent ? 'blue' : 'green'}-200 px-4 py-3 rounded`}>
              <div className="flex items-start gap-2">
                {emailSent && (
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                <div>
                  <p className="font-semibold mb-1">{emailSent ? 'Check Your Email' : 'Success'}</p>
                  <p>{message}</p>
                  {emailSent && (
                    <p className="text-sm mt-2 opacity-90">
                      Didn't receive the email? Check your spam folder or{' '}
                      <button
                        type="button"
                        onClick={async () => {
                          setLoading(true);
                          try {
                            const { error } = await signUp(email, password);
                            if (error) {
                              setError(error.message);
                            } else {
                              setMessage(`Confirmation email resent to ${email}.`);
                            }
                          } catch (err) {
                            setError('Failed to resend email');
                          } finally {
                            setLoading(false);
                          }
                        }}
                        className="underline hover:no-underline"
                      >
                        resend
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          {!isForgotPassword && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          )}

          {/* {isSignUp && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          )} */}

          {!isForgotPassword && !isSignUp && (
            <div className="text-right">
              <button
                type="button"
                onClick={() => {
                  setIsForgotPassword(true);
                  setError(null);
                  setMessage(null);
                }}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            {loading ? 'Loading...' : isForgotPassword ? 'Send Reset Link' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="mt-4 md:mt-6 space-y-3">
          <div className="text-center">
            {isForgotPassword ? (
              <button
                onClick={() => {
                  setIsForgotPassword(false);
                  setError(null);
                  setMessage(null);
                  setEmailSent(false);
                }}
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Back to sign in
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError(null);
                  setMessage(null);
                }}
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </button>
            )}
          </div>
          
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
          
          <button
            onClick={() => {
              signInAsGuest();
            }}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors border border-gray-600"
          >
            Continue as Guest
          </button>
          <p className="text-xs text-gray-500 text-center">
            Try the app without an account. Your progress will be saved locally.
          </p>
        </div>
      </div>
    </div>
  );
}

