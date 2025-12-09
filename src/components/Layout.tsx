import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import PWAInstallPrompt from './PWAInstallPrompt';
import OfflineIndicator from './OfflineIndicator';
import UpdateNotification from './UpdateNotification';
import { IconHome, IconLessons, IconPractice, IconDictionary, IconTranslator, IconForum, IconReview, IconSettings, IconAdmin, IconMenu, IconClose, IconStar } from './icons/ChaldeanIcons';

export default function Layout() {
  const { points, level, getWordsToReview } = useProgress();
  const { user, signOut, isGuest } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const wordsToReview = getWordsToReview().length;

  useEffect(() => {
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
    };
    checkAdmin();
  }, [user]);

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
                <div className="h-10 md:h-12 flex items-center justify-center">
                  <img src="/logo.png" alt="Chaldean World" className="h-full w-auto object-contain" />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <Link to="/" className={`${linkClass('/')} flex items-center gap-1`}>
                  <IconHome className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link to="/lessons" className={`${linkClass('/lessons')} flex items-center gap-1`}>
                  <IconLessons className="w-4 h-4" />
                  <span>Lessons</span>
                </Link>
                <Link to="/practice" className={`${linkClass('/practice')} flex items-center gap-1`}>
                  <IconPractice className="w-4 h-4" />
                  <span>Practice</span>
                </Link>
                <Link to="/dictionary" className={`${linkClass('/dictionary')} flex items-center gap-1`}>
                  <IconDictionary className="w-4 h-4" />
                  <span>Dictionary</span>
                </Link>
                <Link to="/translator" className={`${linkClass('/translator')} flex items-center gap-1`}>
                  <IconTranslator className="w-4 h-4" />
                  <span>Translator</span>
                </Link>
                <Link to="/forum" className={`${linkClass('/forum')} flex items-center gap-1`}>
                  <IconForum className="w-4 h-4" />
                  <span>Forum</span>
                </Link>
                <Link to="/review" className={`${linkClass('/review')} relative flex items-center gap-1`}>
                  <IconReview className="w-4 h-4" />
                  <span>Review</span>
                  {wordsToReview > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {wordsToReview}
                    </span>
                  )}
                </Link>
                {isAdmin && (
                  <Link to="/admin" className={`${linkClass('/admin')} flex items-center gap-1`}>
                    <IconAdmin className="w-4 h-4" />
                    <span>Admin</span>
                  </Link>
                )}
                <Link to="/settings" className={linkClass('/settings')}>
                  <IconSettings className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Points Display */}
            <div className="flex items-center gap-3">
              {(user || isGuest) && (
                <>
                  <div className="hidden md:flex bg-gradient-to-br from-blue-600/20 to-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/50 items-center gap-2 shadow-lg">
                    <span className="text-blue-400 text-sm font-bold">LVL</span>
                    <span className="font-bold text-blue-100 text-sm">{level}</span>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/50 flex items-center gap-2 shadow-lg">
                    <IconStar className="w-4 h-4 text-yellow-400" filled />
                    <span className="font-bold text-yellow-100 text-sm md:text-base">{points}</span>
                  </div>
                </>
              )}
              {isGuest && (
                <span className="hidden md:block text-xs text-gray-400 px-2 py-1 bg-gray-700/50 rounded">
                  Guest
                </span>
              )}
              {(user || isGuest) && (
                <button
                  onClick={() => signOut()}
                  className="hidden md:block text-gray-300 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                  title={isGuest ? "Exit guest mode" : "Sign out"}
                >
                  {isGuest ? "Exit Guest" : "Sign Out"}
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
                    <IconMenu className="block h-6 w-6" />
                  ) : (
                    <IconClose className="block h-6 w-6" />
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
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/')} text-base py-3 flex items-center gap-2`}>
                <IconHome className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link to="/lessons" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/lessons')} text-base py-3 flex items-center gap-2`}>
                <IconLessons className="w-5 h-5" />
                <span>Lessons</span>
              </Link>
              <Link to="/practice" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/practice')} text-base py-3 flex items-center gap-2`}>
                <IconPractice className="w-5 h-5" />
                <span>Practice</span>
              </Link>
              <Link to="/dictionary" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/dictionary')} text-base py-3 flex items-center gap-2`}>
                <IconDictionary className="w-5 h-5" />
                <span>Dictionary</span>
              </Link>
              <Link to="/forum" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/forum')} text-base py-3 flex items-center gap-2`}>
                <IconForum className="w-5 h-5" />
                <span>Community Forum</span>
              </Link>
              <Link to="/review" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/review')} text-base py-3 relative flex items-center gap-2`}>
                <IconReview className="w-5 h-5" />
                <span>Review</span>
                {wordsToReview > 0 && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {wordsToReview}
                  </span>
                )}
              </Link>
              {isAdmin && (
                <Link to="/admin" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/admin')} text-base py-3 flex items-center gap-2`}>
                  <IconAdmin className="w-5 h-5" />
                  <span>Admin Dashboard</span>
                </Link>
              )}
              <Link to="/settings" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/settings')} text-base py-3 flex items-center gap-2`}>
                <IconSettings className="w-5 h-5" />
                <span>Settings</span>
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
            <IconHome className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          
          <Link to="/lessons" className={bottomNavClass('/lessons')} onClick={() => setIsMenuOpen(false)}>
            <IconLessons className="w-6 h-6" />
            <span className="text-xs font-medium">Lessons</span>
          </Link>
          
          <Link to="/dictionary" className={bottomNavClass('/dictionary')} onClick={() => setIsMenuOpen(false)}>
            <IconDictionary className="w-6 h-6" />
            <span className="text-xs font-medium">Dict</span>
          </Link>
          
          <Link to="/translator" className={bottomNavClass('/translator')} onClick={() => setIsMenuOpen(false)}>
            <IconTranslator className="w-6 h-6" />
            <span className="text-xs font-medium">Translate</span>
          </Link>
          
          <Link to="/review" className={bottomNavClass('/review') + ' relative'} onClick={() => setIsMenuOpen(false)}>
            <IconReview className="w-6 h-6" />
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

