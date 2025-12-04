import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Icon */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/assyrian-star.svg" 
              alt="Assyrian Star" 
              className="w-24 h-24 md:w-32 md:h-32 mx-auto hover:scale-105 transition-transform duration-300" 
              style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))' }} 
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Chaldean World
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            Reconnect with your heritage. Master the Chaldean language through our modern, interactive learning platform designed for everyone.
          </p>

          {/* Value Proposition Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-blue-900/30 border border-blue-800 rounded-full text-sm text-blue-200">
              🌱 Beginner Friendly
            </span>
            <span className="px-4 py-2 bg-purple-900/30 border border-purple-800 rounded-full text-sm text-purple-200">
              🎮 Gamified Learning
            </span>
            <span className="px-4 py-2 bg-indigo-900/30 border border-indigo-800 rounded-full text-sm text-indigo-200">
              📱 Mobile Ready
            </span>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/60 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-lg font-bold mb-2 text-blue-100">Structured Lessons</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Follow a carefully crafted curriculum that takes you from basic alphabet to complex conversation.
              </p>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/60 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-lg font-bold mb-2 text-purple-100">Smart Practice</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our spaced-repetition system ensures you review words at the perfect time to maximize retention.
              </p>
            </div>
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/60 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h3 className="text-lg font-bold mb-2 text-indigo-100">Track Progress</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Earn points, maintain streaks, and unlock achievements as you master new language skills.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/auth?mode=signup"
              className="group relative bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative flex items-center justify-center gap-2">
                Start Learning Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              to="/auth?mode=signin"
              className="bg-gray-800/80 hover:bg-gray-700 border border-gray-600 text-gray-100 font-bold py-4 px-8 rounded-xl text-lg transition-all active:scale-95 w-full sm:w-auto backdrop-blur-sm"
            >
              I already have an account
            </Link>
          </div>

          {/* Additional Info */}
          <p className="text-gray-500 text-sm">
            Join 1,000+ learners preserving the Chaldean language
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Chaldean World.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
