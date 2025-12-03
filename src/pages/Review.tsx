import { useState, useMemo } from 'react';
import { useProgress } from '../context/ProgressContext';
import { dictionaryData } from '../data/dictionary';
import { Link } from 'react-router-dom';

export default function Review() {
  const { 
    getWordsToReview, 
    updateWordReview,
    incorrectAnswers,
    clearIncorrectAnswers,
    preferences,
  } = useProgress();

  const [reviewMode, setReviewMode] = useState<'srs' | 'incorrect' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [reviewComplete, setReviewComplete] = useState(false);

  const wordsToReview = useMemo(() => {
    if (reviewMode === 'srs') {
      const wordIds = getWordsToReview();
      return wordIds.map(id => {
        // Try matching with category format first (new format)
        let word = dictionaryData.find(w => `${w.word}-${w.category}` === id);
        // If not found, try matching just the word (for backward compatibility with old "word-vocab" format)
        if (!word) {
          const wordOnly = id.replace(/-vocab$/, '').replace(/-\w+$/, '');
          word = dictionaryData.find(w => w.word === wordOnly);
        }
        return word ? { word, originalId: id } : null;
      }).filter(Boolean) as Array<{ word: typeof dictionaryData[0], originalId: string }>;
    } else if (reviewMode === 'incorrect') {
      // Get unique words from incorrect answers
      const uniqueWords = new Set(incorrectAnswers.map(a => a.question));
      return Array.from(uniqueWords).map(q => {
        // Try to find the word in dictionary by matching question text
        const word = dictionaryData.find(w => 
          q.includes(w.word) || q.includes(w.translation)
        );
        return word ? { word, originalId: `${word.word}-${word.category}` } : null;
      }).filter(Boolean) as Array<{ word: typeof dictionaryData[0], originalId: string }>;
    }
    return [];
  }, [reviewMode, getWordsToReview, incorrectAnswers]);

  const currentWordEntry = wordsToReview[currentIndex];
  const currentWord = currentWordEntry?.word;

  const handleQuality = (quality: number) => {
    if (currentWordEntry && reviewMode === 'srs' && currentWord) {
      // Always use the correct format: word-category
      // This ensures consistency going forward
      const correctId = `${currentWord.word}-${currentWord.category}`;
      updateWordReview(correctId, quality);
    }

    if (currentIndex < wordsToReview.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    } else {
      setReviewComplete(true);
    }
  };

  const speakWord = (text: string) => {
    if (!preferences.audioEnabled) return;
    
    import('../utils/speech').then(({ speak }) => {
      speak(text, { rate: 0.85 });
    });
  };

  const resetReview = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setReviewComplete(false);
    setReviewMode(null);
  };

  if (!reviewMode) {
    const srsCount = getWordsToReview().length;
    const incorrectCount = new Set(incorrectAnswers.map(a => a.question)).size;

    return (
      <div className="w-full h-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Review Mode</h1>
            <p className="text-gray-400">Practice words you've learned and review mistakes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Spaced Repetition */}
            <button
              onClick={() => setReviewMode('srs')}
              disabled={srsCount === 0}
              className={`
                p-8 rounded-2xl border-2 transition-all
                ${srsCount > 0 
                  ? 'bg-gradient-to-br from-blue-900/30 to-gray-800 border-blue-500/50 hover:border-blue-500 active:scale-95' 
                  : 'bg-gray-800/50 border-gray-700 opacity-50 cursor-not-allowed'
                }
              `}
            >
              <div className="text-5xl mb-4">🔄</div>
              <h2 className="text-xl font-bold mb-2">Spaced Repetition</h2>
              <p className="text-gray-400 text-sm mb-4">Review words based on memory science</p>
              <div className="text-3xl font-bold text-blue-400">
                {srsCount} {srsCount === 1 ? 'word' : 'words'}
              </div>
              <p className="text-xs text-gray-500 mt-1">due for review</p>
            </button>

            {/* Incorrect Answers */}
            <button
              onClick={() => setReviewMode('incorrect')}
              disabled={incorrectCount === 0}
              className={`
                p-8 rounded-2xl border-2 transition-all
                ${incorrectCount > 0 
                  ? 'bg-gradient-to-br from-orange-900/30 to-gray-800 border-orange-500/50 hover:border-orange-500 active:scale-95' 
                  : 'bg-gray-800/50 border-gray-700 opacity-50 cursor-not-allowed'
                }
              `}
            >
              <div className="text-5xl mb-4">❌</div>
              <h2 className="text-xl font-bold mb-2">Mistake Review</h2>
              <p className="text-gray-400 text-sm mb-4">Practice words you got wrong</p>
              <div className="text-3xl font-bold text-orange-400">
                {incorrectCount} {incorrectCount === 1 ? 'word' : 'words'}
              </div>
              <p className="text-xs text-gray-500 mt-1">to practice</p>
            </button>
          </div>

          {incorrectCount > 0 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  if (confirm('Clear all incorrect answers history?')) {
                    clearIncorrectAnswers();
                  }
                }}
                className="text-sm text-gray-400 hover:text-gray-300 underline"
              >
                Clear mistake history
              </button>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link to="/lessons" className="text-blue-400 hover:text-blue-300 underline">
              ← Back to Lessons
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (reviewComplete) {
    return (
      <div className="w-full h-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center">
        <div className="w-full max-w-md text-center bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl p-8 border-2 border-green-500/30">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Review Complete!</h2>
          <p className="text-gray-300 mb-2">You reviewed</p>
          <p className="text-4xl font-bold text-green-400 mb-8">{wordsToReview.length} words</p>
          
          <div className="space-y-3">
            <button
              onClick={resetReview}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
            >
              Review More
            </button>
            <Link
              to="/lessons"
              className="block w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
            >
              Back to Lessons
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!currentWord) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-gray-400">No words to review right now</p>
          <button
            onClick={resetReview}
            className="mt-4 text-blue-400 hover:text-blue-300 underline"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">
              {currentIndex + 1} / {wordsToReview.length}
            </span>
            <span className="text-sm text-gray-400">
              {reviewMode === 'srs' ? '🔄 Spaced Repetition' : '❌ Mistake Review'}
            </span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / wordsToReview.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-3xl border-2 border-gray-700 p-8 md:p-12 min-h-[400px] flex flex-col">
          {!showAnswer ? (
            // Question
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <p className="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-6">
                What does this mean?
              </p>
              
              <div className="mb-6">
                <h2 className="text-6xl md:text-7xl font-bold mb-4 font-serif">{currentWord.script}</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400">{currentWord.word}</h3>
              </div>

              {preferences.audioEnabled && (
                <button
                  onClick={() => speakWord(currentWord.word)}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                  <span>Listen</span>
                </button>
              )}

              <button
                onClick={() => setShowAnswer(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
              >
                Show Answer
              </button>
            </div>
          ) : (
            // Answer
            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center text-center mb-8">
                <p className="text-sm text-green-400 font-semibold uppercase tracking-wider mb-4">
                  Translation
                </p>
                
                <div className="mb-4">
                  <h2 className="text-5xl md:text-6xl font-bold mb-3 font-serif">{currentWord.script}</h2>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">{currentWord.word}</h3>
                </div>

                <div className="w-20 h-px bg-gray-700 my-4"></div>

                <div>
                  <p className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{currentWord.translation}</p>
                  <p className="text-xl text-gray-400 italic">"{currentWord.phonetic}"</p>
                </div>
              </div>

              {/* Quality Buttons */}
              {reviewMode === 'srs' ? (
                <div>
                  <p className="text-sm text-gray-400 text-center mb-3">How well did you remember?</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleQuality(1)}
                      className="bg-red-600/20 hover:bg-red-600/30 border-2 border-red-500/50 text-white font-bold py-3 px-4 rounded-xl transition-all active:scale-95"
                    >
                      😞 Again
                    </button>
                    <button
                      onClick={() => handleQuality(3)}
                      className="bg-yellow-600/20 hover:bg-yellow-600/30 border-2 border-yellow-500/50 text-white font-bold py-3 px-4 rounded-xl transition-all active:scale-95"
                    >
                      🤔 Hard
                    </button>
                    <button
                      onClick={() => handleQuality(4)}
                      className="bg-blue-600/20 hover:bg-blue-600/30 border-2 border-blue-500/50 text-white font-bold py-3 px-4 rounded-xl transition-all active:scale-95"
                    >
                      😊 Good
                    </button>
                    <button
                      onClick={() => handleQuality(5)}
                      className="bg-green-600/20 hover:bg-green-600/30 border-2 border-green-500/50 text-white font-bold py-3 px-4 rounded-xl transition-all active:scale-95"
                    >
                      🎉 Easy
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleQuality(0)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
                >
                  Next Word →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

