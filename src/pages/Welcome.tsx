import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Icon */}
          <div className="mb-8">
            <img 
              src="/assyrian-star.svg" 
              alt="Assyrian Star" 
              className="w-24 h-24 md:w-32 md:h-32 mx-auto" 
              style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))' }} 
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text">
              Chaldean World
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Master the Chaldean language through interactive lessons, practice games, and a comprehensive dictionary.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-lg font-bold mb-2">Interactive Lessons</h3>
              <p className="text-gray-400 text-sm">Learn vocabulary and grammar step by step</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-2">Practice Games</h3>
              <p className="text-gray-400 text-sm">Reinforce learning with fun exercises</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="text-lg font-bold mb-2">Full Dictionary</h3>
              <p className="text-gray-400 text-sm">Explore 500+ words with translations</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/auth?mode=signup"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95 w-full sm:w-auto"
            >
              Get Started Free
            </Link>
            <Link
              to="/auth?mode=signin"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all active:scale-95 w-full sm:w-auto"
            >
              Sign In
            </Link>
          </div>

          {/* Additional Info */}
          <p className="text-gray-500 text-sm mt-8">
            No credit card required • Free forever • Start learning in minutes
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Chaldean World. Preserving our language for future generations.</p>
      </footer>
    </div>
  );
}

