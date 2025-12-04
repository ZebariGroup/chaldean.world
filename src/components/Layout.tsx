import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import PWAInstallPrompt from './PWAInstallPrompt';
import OfflineIndicator from './OfflineIndicator';
import UpdateNotification from './UpdateNotification';

export default function Layout() {
  const { points, level, getWordsToReview } = useProgress();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const wordsToReview = getWordsToReview().length;

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => `
    transition-colors px-3 py-2 rounded-md text-sm font-medium
    ${isActive(path) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
  `;
  
  const bottomNavClass = (path: string) => `
    flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl transition-all min-w-[60px]
    ${isActive(path) 
      ? 'text-blue-400 bg-blue-500/10' 
      : 'text-gray-400 active:bg-gray-700/50'
    }
  `;

  return (
    <div className="h-[100dvh] bg-gray-900 text-white flex flex-col font-sans overflow-hidden safe-area">
      <OfflineIndicator />
      <UpdateNotification />
      
      {/* Top Navigation Bar */}
      <nav className="bg-gradient-to-b from-gray-800 to-gray-800/95 border-b border-gray-700 flex-shrink-0 z-20 backdrop-blur-sm pt-safe">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <img src="/assyrian-star.svg" alt="Assyrian Star" className="w-full h-full object-contain" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }} />
                </div>
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Chaldean World
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <Link to="/" className={linkClass('/')}>🏠 Home</Link>
                <Link to="/lessons" className={linkClass('/lessons')}>📚 Lessons</Link>
                <Link to="/practice" className={linkClass('/practice')}>🎯 Practice</Link>
                <Link to="/dictionary" className={linkClass('/dictionary')}>📖 Dictionary</Link>
                <Link to="/translator" className={linkClass('/translator')}>💬 Translator</Link>
                <Link to="/review" className={linkClass('/review') + ' relative'}>
                  🔄 Review
                  {wordsToReview > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {wordsToReview}
                    </span>
                  )}
                </Link>
                <Link to="/settings" className={linkClass('/settings')}>⚙️</Link>
              </div>
            </div>

            {/* Points Display */}
            <div className="flex items-center gap-3">
              {user && (
                <>
                  <div className="hidden md:flex bg-gradient-to-br from-blue-600/20 to-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/50 items-center gap-2 shadow-lg">
                    <span className="text-blue-400 text-sm font-bold">LVL</span>
                    <span className="font-bold text-blue-100 text-sm">{level}</span>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/50 flex items-center gap-2 shadow-lg">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="font-bold text-yellow-100 text-sm md:text-base">{points}</span>
                  </div>
                </>
              )}
              {user && (
                <button
                  onClick={() => signOut()}
                  className="hidden md:block text-gray-300 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                  title="Sign out"
                >
                  Sign Out
                </button>
              )}

              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="bg-gray-700/50 inline-flex items-center justify-center p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide down */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-gray-800/95 backdrop-blur-sm" id="mobile-menu">
            <div className="px-3 py-3 space-y-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/')} text-base py-3`}>
                🏠 Home
              </Link>
              <Link to="/lessons" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/lessons')} text-base py-3`}>
                📚 Lessons
              </Link>
              <Link to="/practice" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/practice')} text-base py-3`}>
                🎯 Practice
              </Link>
              <Link to="/dictionary" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/dictionary')} text-base py-3`}>
                📖 Dictionary
              </Link>
              <Link to="/review" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/review')} text-base py-3 relative`}>
                🔄 Review
                {wordsToReview > 0 && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {wordsToReview}
                  </span>
                )}
              </Link>
              <Link to="/settings" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/settings')} text-base py-3`}>
                ⚙️ Settings
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 w-full mx-auto md:py-6 overflow-y-auto overflow-x-hidden scroll-smooth pb-safe-bottom md:pb-0">
        <Outlet />
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-lg border-t border-gray-700 z-30 pb-safe">
        <div className="grid grid-cols-5 px-1 py-1">
          <Link to="/" className={bottomNavClass('/')} onClick={() => setIsMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </Link>
          
          <Link to="/lessons" className={bottomNavClass('/lessons')} onClick={() => setIsMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs font-medium">Lessons</span>
          </Link>
          
          <Link to="/dictionary" className={bottomNavClass('/dictionary')} onClick={() => setIsMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <span className="text-xs font-medium">Dict</span>
          </Link>
          
          <Link to="/translator" className={bottomNavClass('/translator')} onClick={() => setIsMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className="text-xs font-medium">Translate</span>
          </Link>
          
          <Link to="/review" className={bottomNavClass('/review') + ' relative'} onClick={() => setIsMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-xs font-medium">Review</span>
            {wordsToReview > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {wordsToReview}
              </span>
            )}
          </Link>
        </div>
      </nav>

      <footer className="hidden md:block bg-gray-800 border-t border-gray-700 p-4 md:p-6 text-center text-gray-500 text-xs md:text-sm flex-shrink-0">
        <p>&copy; {new Date().getFullYear()} Chaldean World. Open Source on GitHub.</p>
      </footer>
      
      <PWAInstallPrompt />
    </div>
  );
}

