import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

export default function Layout() {
  const { points } = useProgress();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => `
    transition-colors px-3 py-2 rounded-md text-sm font-medium
    ${isActive(path) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
  `;

  return (
    <div className="h-[100dvh] bg-gray-900 text-white flex flex-col font-sans overflow-hidden">
      <nav className="bg-gray-800 border-b border-gray-700 flex-shrink-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Chaldean World
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className={linkClass('/')}>Home</Link>
                <Link to="/lessons" className={linkClass('/lessons')}>Lessons</Link>
                <Link to="/practice" className={linkClass('/practice')}>Practice</Link>
                <Link to="/dictionary" className={linkClass('/dictionary')}>Dictionary</Link>
              </div>
            </div>

            {/* Points Display & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-700 px-3 py-1 rounded-full border border-yellow-500/50 flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <span className="font-bold text-yellow-100">{points} XP</span>
              </div>

              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/')}`}>Home</Link>
              <Link to="/lessons" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/lessons')}`}>Lessons</Link>
              <Link to="/practice" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/practice')}`}>Practice</Link>
              <Link to="/dictionary" onClick={() => setIsMenuOpen(false)} className={`block ${linkClass('/dictionary')}`}>Dictionary</Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 w-full mx-auto py-6 overflow-y-auto overflow-x-hidden scroll-smooth">
        <Outlet />
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 p-6 text-center text-gray-500 text-sm flex-shrink-0">
        <p>&copy; {new Date().getFullYear()} Chaldean World. Open Source on GitHub.</p>
      </footer>
    </div>
  );
}

