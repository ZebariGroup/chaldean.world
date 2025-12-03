import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { dictionaryData } from '../data/dictionary';
import { useMemo } from 'react';

export default function Home() {
  const { 
    currentStreak, 
    level,
    wordsLearned, 
    getWordsToReview,
    dailyProgress,
    preferences,
  } = useProgress();
  
  const wordsToReview = getWordsToReview().length;

  const wordOfTheDay = useMemo(() => {
    // Generate a random word based on the date so it's consistent for the day
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % dictionaryData.length;
    return dictionaryData[index];
  }, []);

  return (
    <div className="w-full px-4 py-4 md:py-6">
      
      {/* Hero Section - More compact on mobile */}
      <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
        <div className="inline-block mb-3">
          <img src="/assyrian-star.png" alt="Assyrian Star" className="w-16 h-16 md:w-24 md:h-24 mx-auto" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
          Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Chaldean World</span>
        </h1>
        <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
          Learn Chaldean through interactive lessons, flashcards, and comprehensive dictionary.
        </p>
        
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-6">
          <div className="inline-flex items-center bg-gray-800/80 border border-orange-500/30 rounded-full px-4 md:px-6 py-2">
            <span className="text-xl md:text-2xl mr-2">🔥</span>
            <span className="text-orange-400 font-bold text-base md:text-lg">{currentStreak} Day Streak</span>
          </div>
          <div className="inline-flex items-center bg-gray-800/80 border border-blue-500/30 rounded-full px-4 md:px-6 py-2">
            <span className="text-xl md:text-2xl mr-2">⭐</span>
            <span className="text-blue-400 font-bold text-base md:text-lg">Level {level}</span>
          </div>
          <div className="inline-flex items-center bg-gray-800/80 border border-purple-500/30 rounded-full px-4 md:px-6 py-2">
            <span className="text-xl md:text-2xl mr-2">📚</span>
            <span className="text-purple-400 font-bold text-base md:text-lg">{wordsLearned.length} Words</span>
          </div>
        </div>
        
        {/* Daily Progress */}
        <div className="max-w-md mx-auto mb-4">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Daily Goal</span>
            <span>{dailyProgress} / {preferences.dailyGoal} lessons</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-full transition-all duration-500"
              style={{ width: `${Math.min((dailyProgress / preferences.dailyGoal) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Review Notification */}
      {wordsToReview > 0 && (
        <Link 
          to="/review"
          className="block w-full max-w-md mx-auto bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-2xl p-4 mb-6 border-2 border-orange-500/50 transition-all active:scale-95"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              <div>
                <div className="font-bold text-lg">Time to Review!</div>
                <div className="text-sm text-orange-200">{wordsToReview} words ready</div>
              </div>
            </div>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      )}
      
      {/* Word of the Day Card - Optimized for mobile */}
      <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-2xl border border-gray-700 p-6 md:p-8 mb-6 md:mb-8 shadow-xl hover:border-blue-500 transition-all">
        <div className="text-center">
          <p className="text-blue-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-3 md:mb-4">Word of the Day</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">{wordOfTheDay.script}</h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-2">{wordOfTheDay.word}</h3>
          <p className="text-gray-400 italic text-sm md:text-base mb-4 md:mb-6">{wordOfTheDay.phonetic}</p>
          <div className="h-px w-16 bg-gray-700 mx-auto mb-4 md:mb-6"></div>
          <p className="text-xl md:text-2xl text-blue-400 font-medium">{wordOfTheDay.translation}</p>
        </div>
      </div>
      
      {/* Action Buttons - Full width on mobile like Duolingo */}
      <div className="grid gap-3 md:gap-4 md:grid-cols-2 w-full max-w-lg mx-auto">
        <Link to="/lessons" className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center font-bold py-5 md:py-4 px-6 rounded-2xl md:rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95">
          <div className="text-xl md:text-lg">🎓 Start Learning</div>
          <div className="text-blue-200 text-sm font-normal mt-1">Interactive Lessons</div>
        </Link>
        <Link to="/translator" className="group bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white text-center font-bold py-5 md:py-4 px-6 rounded-2xl md:rounded-xl transition-all shadow-lg active:scale-95">
          <div className="text-xl md:text-lg">💬 Translator</div>
          <div className="text-cyan-200 text-sm font-normal mt-1">English to Chaldean</div>
        </Link>
        <Link to="/dictionary" className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-center font-bold py-5 md:py-4 px-6 rounded-2xl md:rounded-xl transition-all shadow-lg active:scale-95">
          <div className="text-xl md:text-lg">📖 Dictionary</div>
          <div className="text-purple-200 text-sm font-normal mt-1">{dictionaryData.length}+ Words</div>
        </Link>
        <Link to="/practice" className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-center font-bold py-5 md:py-4 px-6 rounded-2xl md:rounded-xl transition-all shadow-lg active:scale-95">
          <div className="text-xl md:text-lg">🎯 Practice Game</div>
          <div className="text-green-200 text-sm font-normal mt-1">Match words & meanings</div>
        </Link>
      </div>

    </div>
  );
}
