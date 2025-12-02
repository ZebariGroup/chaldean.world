import { useState, useEffect } from 'react';
import { dictionaryData } from '../data/dictionary';
import { useProgress } from '../context/ProgressContext';

interface Card {
  id: string;
  content: string;
  type: 'word' | 'translation';
  pairId: string;
  isFlipped: boolean;
  isMatched: boolean;
  script?: string; // Optional script for word cards
}

type GameMode = 'match' | 'quiz' | null;

export default function Practice() {
  const { addPoints, preferences } = useProgress();
  const [gameMode, setGameMode] = useState<GameMode>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  
  // Quiz mode state
  const [quizWords, setQuizWords] = useState<typeof dictionaryData>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const initializeMatchGame = () => {
    const shuffledDictionary = [...dictionaryData].sort(() => 0.5 - Math.random());
    const selectedWords = shuffledDictionary.slice(0, 6);

    const gameCards: Card[] = [];
    selectedWords.forEach((entry, index) => {
      gameCards.push({
        id: `${entry.word}-word-${index}`,
        content: entry.word,
        script: entry.script,
        type: 'word',
        pairId: entry.word,
        isFlipped: false,
        isMatched: false,
      });
      gameCards.push({
        id: `${entry.word}-translation-${index}`,
        content: entry.translation,
        type: 'translation',
        pairId: entry.word,
        isFlipped: false,
        isMatched: false,
      });
    });

    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setFlippedCards([]);
    setIsProcessing(false);
    setMoves(0);
    setGameWon(false);
    setGameMode('match');
  };

  const initializeQuizGame = () => {
    const shuffled = [...dictionaryData].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuizWords(shuffled);
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setShowQuizResult(false);
    setGameMode('quiz');
  };

  const speakWord = (text: string) => {
    if (!preferences.audioEnabled || !window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const handleCardClick = (id: string) => {
    if (isProcessing || flippedCards.includes(id) || cards.find(c => c.id === id)?.isMatched) return;

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);
    
    // Update card state to visually flip
    setCards(prev => prev.map(c => c.id === id ? { ...c, isFlipped: true } : c));

    if (newFlipped.length === 2) {
      setIsProcessing(true);
      setMoves(prev => prev + 1);
      
      const [firstId, secondId] = newFlipped;
      const card1 = cards.find(c => c.id === firstId);
      const card2 = cards.find(c => c.id === secondId);

      if (card1 && card2 && card1.pairId === card2.pairId) {
        // Match!
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.id === firstId || c.id === secondId 
              ? { ...c, isMatched: true, isFlipped: true } 
              : c
          ));
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.id === firstId || c.id === secondId 
              ? { ...c, isFlipped: false } 
              : c
          ));
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1500);
      }
    }
  };

  useEffect(() => {
    if (gameMode === 'match' && cards.length > 0 && cards.every(c => c.isMatched) && !gameWon) {
      setGameWon(true);
      addPoints(50);
    }
  }, [cards, addPoints, gameWon, gameMode]);

  // Mode selection
  if (!gameMode) {
    return (
      <div className="w-full h-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Practice Games</h1>
            <p className="text-gray-400">Choose a game mode to practice</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={initializeMatchGame}
              className="p-8 rounded-2xl border-2 bg-gradient-to-br from-blue-900/30 to-gray-800 border-blue-500/50 hover:border-blue-500 active:scale-95 transition-all"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-xl font-bold mb-2">Match Pairs</h2>
              <p className="text-gray-400 text-sm">Memory game - match words with translations</p>
            </button>

            <button
              onClick={initializeQuizGame}
              className="p-8 rounded-2xl border-2 bg-gradient-to-br from-purple-900/30 to-gray-800 border-purple-500/50 hover:border-purple-500 active:scale-95 transition-all"
            >
              <div className="text-5xl mb-4">❓</div>
              <h2 className="text-xl font-bold mb-2">Quick Quiz</h2>
              <p className="text-gray-400 text-sm">Multiple choice quiz - test your knowledge</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Mode
  if (gameMode === 'quiz') {
    if (currentQuizIndex >= quizWords.length) {
      return (
        <div className="w-full h-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center">
          <div className="w-full max-w-md text-center bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl p-8 border-2 border-purple-500/30">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-gray-300 mb-2">Your Score</p>
            <p className="text-5xl font-bold text-purple-400 mb-8">{quizScore} / {quizWords.length}</p>
            
            <div className="space-y-3">
              <button
                onClick={initializeQuizGame}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
              >
                Play Again
              </button>
              <button
                onClick={() => setGameMode(null)}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
              >
                Choose Mode
              </button>
            </div>
          </div>
        </div>
      );
    }

    const currentWord = quizWords[currentQuizIndex];
    const options = [
      currentWord.translation,
      ...dictionaryData
        .filter(w => w.translation !== currentWord.translation)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.translation)
    ].sort(() => 0.5 - Math.random());

    const handleQuizAnswer = (answer: string) => {
      setSelectedAnswer(answer);
      setShowQuizResult(true);
      
      if (answer === currentWord.translation) {
        setQuizScore(quizScore + 1);
        addPoints(10);
      }

      setTimeout(() => {
        setCurrentQuizIndex(currentQuizIndex + 1);
        setSelectedAnswer(null);
        setShowQuizResult(false);
      }, 1500);
    };

    return (
      <div className="w-full h-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Question {currentQuizIndex + 1} / {quizWords.length}</span>
              <span className="text-sm text-purple-400 font-bold">Score: {quizScore}</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-full transition-all duration-300"
                style={{ width: `${((currentQuizIndex + 1) / quizWords.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-3xl border-2 border-gray-700 p-8">
            <div className="text-center mb-8">
              <p className="text-sm text-purple-400 font-semibold uppercase tracking-wider mb-4">
                What does this mean?
              </p>
              <h2 className="text-5xl md:text-6xl font-bold mb-3 font-serif">{currentWord.script}</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400">{currentWord.word}</h3>
              
              {preferences.audioEnabled && (
                <button
                  onClick={() => speakWord(currentWord.word)}
                  className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mx-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                  <span>Listen</span>
                </button>
              )}
            </div>

            <div className="grid gap-3">
              {options.map(option => (
                <button
                  key={option}
                  onClick={() => !showQuizResult && handleQuizAnswer(option)}
                  disabled={showQuizResult}
                  className={`p-4 rounded-2xl border-2 text-left transition-all font-medium active:scale-95 ${
                    showQuizResult
                      ? option === currentWord.translation
                        ? 'border-green-500 bg-green-500/20'
                        : option === selectedAnswer
                          ? 'border-red-500 bg-red-500/20'
                          : 'border-gray-600 bg-gray-700/50 opacity-50'
                      : 'border-gray-600 bg-gray-700/50 hover:border-gray-500 hover:bg-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Match Game Mode
  return (
    <div className="w-full h-full max-w-4xl mx-auto px-4 py-4 md:py-0 flex flex-col">
      <div className="flex justify-between items-center mb-4 md:mb-6 flex-shrink-0">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Match the Pairs</h1>
          <p className="text-xs md:text-sm text-gray-400">Find matching word pairs</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 px-4 py-2 rounded-2xl md:rounded-xl border-2 border-gray-700">
          <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Moves: </span>
          <span className="font-bold text-white text-lg md:text-xl">{moves}</span>
        </div>
      </div>

      {gameWon ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center py-12 animate-fade-in bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl md:rounded-2xl border-2 border-green-500/30 p-8 w-full max-w-md shadow-2xl">
            <div className="text-6xl md:text-7xl mb-6">🎉</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Perfect Match!</h2>
            <p className="text-gray-300 mb-2">All pairs found in</p>
            <p className="text-yellow-400 font-bold text-3xl mb-6">{moves} moves</p>
            <div className="space-y-3">
              <button 
                onClick={initializeMatchGame}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl md:rounded-xl transition-all active:scale-95 shadow-lg"
              >
                🎯 Play Again
              </button>
              <button 
                onClick={() => setGameMode(null)}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-2xl md:rounded-xl transition-all active:scale-95"
              >
                🎮 Choose Mode
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow grid grid-cols-3 md:grid-cols-4 gap-2.5 md:gap-3 pb-2 min-h-0">
          {cards.map(card => (
            <div 
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                relative cursor-pointer perspective-1000 group w-full h-full min-h-[100px] md:min-h-[120px]
                ${card.isMatched ? 'opacity-60 cursor-default' : ''}
              `}
            >
              <div className={`
                w-full h-full transition-all duration-500 preserve-3d relative
                ${card.isFlipped ? 'rotate-y-180' : ''}
              `}>
                {/* Front (Hidden State) */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-700 to-gray-700/80 rounded-2xl md:rounded-xl border-2 border-gray-600 flex items-center justify-center active:border-blue-500 md:hover:border-blue-500 transition-all shadow-lg active:scale-95">
                  <span className="text-3xl md:text-4xl opacity-30">?</span>
                </div>

                {/* Back (Revealed State) */}
                <div className={`
                  absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl md:rounded-xl border-2 flex flex-col items-center justify-center p-2 text-center shadow-xl overflow-hidden
                  ${card.isMatched 
                    ? 'bg-gradient-to-br from-green-900/40 to-green-800/20 border-green-500/50' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-800/80 border-blue-500'
                  }
                `}>
                  {card.script && (
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 font-serif truncate w-full px-1">{card.script}</div>
                  )}
                  <div className={`${card.type === 'word' ? 'text-blue-400 font-bold' : 'text-gray-200'} text-xs md:text-sm lg:text-base truncate w-full whitespace-normal px-1 leading-tight`}>
                    {card.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
