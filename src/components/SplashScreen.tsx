import { useState, useEffect } from 'react';

interface WordPair {
  english: string;
  chaldean: string;
  script: string;
}

const wordPairs: WordPair[] = [
  { english: "Hello", chaldean: "Shlama", script: "ܫܠܡܐ" },
  { english: "Peace", chaldean: "Shlama", script: "ܫܠܡܐ" },
  { english: "Love", chaldean: "Khuba", script: "ܚܘܒܐ" },
  { english: "Welcome", chaldean: "Bshina", script: "ܒܫܝܢܐ" },
  { english: "Thank you", chaldean: "Tawdi", script: "ܬܘܕܝ" },
  { english: "Family", chaldean: "Sharwatha", script: "ܫܪܒܬܐ" },
  { english: "Friend", chaldean: "Khwab", script: "ܚܒܪܐ" },
  { english: "Water", chaldean: "Mya", script: "ܡܝܐ" },
  { english: "Sun", chaldean: "Shamsha", script: "ܫܡܫܐ" },
  { english: "Heart", chaldean: "Libba", script: "ܠܒܐ" },
];

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Word cycling animation
    const wordInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentWordIndex(prev => (prev + 1) % wordPairs.length);
        setIsTransitioning(false);
      }, 300);
    }, 1500);

    // Complete splash after 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const currentWord = wordPairs[currentWordIndex];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Assyrian Star Logo with pulse animation */}
        <div className="mb-8 animate-pulse-slow">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto p-4">
            <img 
              src="/assyrian-star.svg" 
              alt="Assyrian Star" 
              className="w-full h-full animate-spin-slow"
              style={{ filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.8))' }}
            />
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
          Chaldean World
        </h1>

        {/* Word Transition Animation */}
        <div className="mb-8 min-h-[200px] flex items-center justify-center">
          <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="space-y-4">
              {/* English word fading out */}
              <div className={`text-2xl md:text-3xl font-semibold transition-all duration-500 ${isTransitioning ? 'opacity-100' : 'opacity-30'}`}>
                <span className="text-gray-400">{currentWord.english}</span>
              </div>

              {/* Arrow/Transform indicator */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                <svg 
                  className={`w-8 h-8 text-blue-400 transition-transform duration-500 ${isTransitioning ? 'rotate-180' : 'rotate-0'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>

              {/* Chaldean word appearing */}
              <div className="space-y-2">
                <div className={`text-5xl md:text-6xl font-bold font-serif transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                  <span className="text-blue-300 drop-shadow-lg">{currentWord.script}</span>
                </div>
                <div className={`text-2xl md:text-3xl font-bold transition-all duration-500 delay-100 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-purple-300">{currentWord.chaldean}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Progress Bar */}
        <div className="max-w-xs mx-auto">
          <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full transition-all duration-300 animate-gradient"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-3">Loading your language journey...</p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

