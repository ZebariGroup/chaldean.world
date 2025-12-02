import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { dictionaryData } from '../data/dictionary';
import { useMemo } from 'react';

export default function Home() {
  const { currentStreak } = useProgress();

  const wordOfTheDay = useMemo(() => {
    // Generate a random word based on the date so it's consistent for the day
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % dictionaryData.length;
    return dictionaryData[index];
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-4">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block animate-bounce mb-4 text-6xl">👋</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Chaldean World</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          The best way to learn the Chaldean language. Interactive lessons, flashcards, and a comprehensive dictionary—all in one place.
        </p>
        
        {/* Streak Badge */}
        <div className="inline-flex items-center bg-gray-800/80 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
          <span className="text-2xl mr-2">🔥</span>
          <span className="text-orange-400 font-bold text-lg">{currentStreak} Day Streak</span>
        </div>
      </div>
      
      {/* Word of the Day Card */}
      <div className="w-full max-w-md bg-gray-800 rounded-2xl border border-gray-700 p-8 mb-12 shadow-xl hover:border-blue-500 transition-all transform hover:-translate-y-1 cursor-default">
        <div className="text-center">
          <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">Word of the Day</p>
          <h2 className="text-4xl font-bold text-white mb-2">{wordOfTheDay.word}</h2>
          <p className="text-gray-400 italic mb-6">{wordOfTheDay.phonetic}</p>
          <div className="h-px w-16 bg-gray-700 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-200 font-medium">{wordOfTheDay.translation}</p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="grid gap-4 md:grid-cols-2 w-full max-w-lg">
        <Link to="/lessons" className="group relative bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
          <div className="text-lg">Start Learning</div>
          <div className="text-blue-200 text-sm font-normal mt-1">Interactive Lessons & Quizzes</div>
        </Link>
        <Link to="/dictionary" className="group bg-gray-700 hover:bg-gray-600 text-white text-center font-bold py-4 px-6 rounded-xl transition-all shadow-lg">
          <div className="text-lg">Dictionary</div>
          <div className="text-gray-400 text-sm font-normal mt-1">Browse {dictionaryData.length}+ Words</div>
        </Link>
      </div>

    </div>
  );
}
