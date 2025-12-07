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

type GameMode = 'match' | 'quiz' | 'listening' | 'flashcard' | 'speed' | null;

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
  
  // Flashcard state
  const [flashcardWords, setFlashcardWords] = useState<typeof dictionaryData>([]);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [flashcardsComplete, setFlashcardsComplete] = useState(false);
  
  // Speed round state
  const [speedWords, setSpeedWords] = useState<typeof dictionaryData>([]);
  const [speedIndex, setSpeedIndex] = useState(0);
  const [speedScore, setSpeedScore] = useState(0);
  const [speedTimeLeft, setSpeedTimeLeft] = useState(60);
  const [speedGameActive, setSpeedGameActive] = useState(false);
  const [speedPointsAwarded, setSpeedPointsAwarded] = useState(false);

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

  const initializeListeningGame = () => {
    const shuffled = [...dictionaryData].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuizWords(shuffled);
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setShowQuizResult(false);
    setGameMode('listening');
  };

  const initializeFlashcardGame = () => {
    const shuffled = [...dictionaryData].sort(() => 0.5 - Math.random()).slice(0, 20);
    setFlashcardWords(shuffled);
    setCurrentFlashcardIndex(0);
    setShowFlashcardAnswer(false);
    setFlashcardsComplete(false);
    setGameMode('flashcard');
  };

  const initializeSpeedGame = () => {
    const shuffled = [...dictionaryData].sort(() => 0.5 - Math.random());
    setSpeedWords(shuffled);
    setSpeedIndex(0);
    setSpeedScore(0);
    setSpeedTimeLeft(60);
    setSpeedGameActive(true);
    setSpeedPointsAwarded(false);
    setSelectedAnswer(null);
    setGameMode('speed');
  };

  const speakWord = (text: string) => {
    if (!preferences.audioEnabled) return;
    
    import('../utils/speech').then(({ speak }) => {
      speak(text, { rate: 0.85 });
    });
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

  // Speed round timer effect
  useEffect(() => {
    if (gameMode === 'speed' && speedGameActive && speedTimeLeft > 0) {
      const timer = setTimeout(() => {
        setSpeedTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (gameMode === 'speed' && speedTimeLeft === 0 && speedGameActive && !speedPointsAwarded) {
      setSpeedGameActive(false);
      setSpeedPointsAwarded(true);
      addPoints(speedScore * 5);
    }
  }, [gameMode, speedTimeLeft, speedGameActive, speedScore, speedPointsAwarded, addPoints]);

  // Mode selection
  if (!gameMode) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Practice Games</h1>
            <p className="text-gray-400">Choose a game mode to practice</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={initializeMatchGame}
              className="p-6 rounded-2xl border-2 bg-gradient-to-br from-blue-900/30 to-gray-800 border-blue-500/50 hover:border-blue-500 active:scale-95 transition-all"
            >
              <div className="text-5xl mb-3">🎯</div>
              <h2 className="text-xl font-bold mb-2">Match Pairs</h2>
              <p className="text-gray-400 text-sm">Memory game - match words</p>
            </button>

            <button
              onClick={initializeQuizGame}
              className="p-6 rounded-2xl border-2 bg-gradient-to-br from-purple-900/30 to-gray-800 border-purple-500/50 hover:border-purple-500 active:scale-95 transition-all"
            >
              <div className="text-5xl mb-3">❓</div>
              <h2 className="text-xl font-bold mb-2">Quick Quiz</h2>
              <p className="text-gray-400 text-sm">Multiple choice quiz</p>
            </button>

            <button
              onClick={initializeListeningGame}
              className="p-6 rounded-2xl border-2 bg-gradient-to-br from-green-900/30 to-gray-800 border-green-500/50 hover:border-green-500 active:scale-95 transition-all"
            >
              <div className="text-5xl mb-3">🎧</div>
              <h2 className="text-xl font-bold mb-2">Listening Quiz</h2>
              <p className="text-gray-400 text-sm">Listen and choose</p>
            </button>

            <button
              onClick={initializeFlashcardGame}
              className="p-6 rounded-2xl border-2 bg-gradient-to-br from-orange-900/30 to-gray-800 border-orange-500/50 hover:border-orange-500 active:scale-95 transition-all"
            >
              <div className="text-5xl mb-3">🃏</div>
              <h2 className="text-xl font-bold mb-2">Flashcards</h2>
              <p className="text-gray-400 text-sm">Review vocabulary cards</p>
            </button>

            <button
              onClick={initializeSpeedGame}
              className="p-6 rounded-2xl border-2 bg-gradient-to-br from-red-900/30 to-gray-800 border-red-500/50 hover:border-red-500 active:scale-95 transition-all"
            >
              <div className="text-5xl mb-3">⚡</div>
              <h2 className="text-xl font-bold mb-2">Speed Round</h2>
              <p className="text-gray-400 text-sm">60 seconds challenge</p>
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
        <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
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

  // Listening Quiz Mode
  if (gameMode === 'listening') {
    if (currentQuizIndex >= quizWords.length) {
      return (
        <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md text-center bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl p-8 border-2 border-green-500/30">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Listening Complete!</h2>
            <p className="text-gray-300 mb-2">Your Score</p>
            <p className="text-5xl font-bold text-green-400 mb-8">{quizScore} / {quizWords.length}</p>
            
            <div className="space-y-3">
              <button
                onClick={initializeListeningGame}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
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

    const handleListeningAnswer = (answer: string) => {
      setSelectedAnswer(answer);
      setShowQuizResult(true);
      if (answer === currentWord.translation) {
        setQuizScore(prev => prev + 1);
        addPoints(10);
      }
    };

    const nextListeningQuestion = () => {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowQuizResult(false);
    };

    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6">
        <div className="w-full max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">🎧 Listening Quiz</h2>
              <div className="bg-gray-800 px-4 py-2 rounded-full border-2 border-gray-700">
                <span className="text-gray-400 text-sm">Score: </span>
                <span className="font-bold text-green-400">{quizScore}/{quizWords.length}</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-full transition-all duration-300"
                style={{ width: `${((currentQuizIndex + 1) / quizWords.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-3xl border-2 border-gray-700 p-8 mb-6">
            <div className="text-center mb-8">
              <p className="text-sm text-green-400 font-semibold uppercase tracking-wider mb-6">
                Listen and choose the correct translation
              </p>
              
              <button
                onClick={() => speakWord(currentWord.word)}
                className="mx-auto bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-8 rounded-full transition-all active:scale-95 shadow-xl mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              </button>
              <p className="text-gray-400 text-sm">Tap to play audio</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => !showQuizResult && handleListeningAnswer(option)}
                  disabled={showQuizResult}
                  className={`
                    p-4 rounded-xl border-2 transition-all font-semibold text-lg
                    ${showQuizResult
                      ? option === currentWord.translation
                        ? 'bg-green-600/20 border-green-500 text-white'
                        : option === selectedAnswer
                          ? 'bg-red-600/20 border-red-500 text-white'
                          : 'bg-gray-700/50 border-gray-600 text-gray-400'
                      : 'bg-gray-700 border-gray-600 hover:border-green-500 hover:bg-green-600/10 active:scale-95'
                    }
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showQuizResult && (
            <button
              onClick={nextListeningQuestion}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
            >
              {currentQuizIndex < quizWords.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    );
  }

  // Flashcard Mode
  if (gameMode === 'flashcard') {
    if (flashcardsComplete) {
      return (
        <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md text-center bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl p-8 border-2 border-orange-500/30">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Review Complete!</h2>
            <p className="text-gray-300 mb-2">You reviewed</p>
            <p className="text-5xl font-bold text-orange-400 mb-8">{flashcardWords.length} words</p>
            
            <div className="space-y-3">
              <button
                onClick={initializeFlashcardGame}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
              >
                New Set
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

    const currentCard = flashcardWords[currentFlashcardIndex];

    const nextCard = () => {
      if (currentFlashcardIndex < flashcardWords.length - 1) {
        setCurrentFlashcardIndex(prev => prev + 1);
        setShowFlashcardAnswer(false);
      } else {
        setFlashcardsComplete(true);
        addPoints(20);
      }
    };

    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6">
        <div className="w-full max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">🃏 Flashcards</h2>
              <div className="bg-gray-800 px-4 py-2 rounded-full border-2 border-gray-700">
                <span className="font-bold text-orange-400">{currentFlashcardIndex + 1}</span>
                <span className="text-gray-400"> / {flashcardWords.length}</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-full transition-all duration-300"
                style={{ width: `${((currentFlashcardIndex + 1) / flashcardWords.length) * 100}%` }}
              />
            </div>
          </div>

          <div 
            onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
            className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-3xl border-2 border-gray-700 p-12 mb-6 min-h-[400px] flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition-all active:scale-98"
          >
            {!showFlashcardAnswer ? (
              <div className="text-center">
                <p className="text-sm text-orange-400 font-semibold uppercase tracking-wider mb-6">
                  Chaldean Word
                </p>
                <div className="text-6xl md:text-7xl font-bold mb-4 font-serif">{currentCard.script}</div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{currentCard.word}</div>
                <div className="text-xl text-gray-400 italic">"{currentCard.phonetic}"</div>
                
                {preferences.audioEnabled && (
                  <button
                    onClick={(e) => { e.stopPropagation(); speakWord(currentCard.word); }}
                    className="mt-8 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  </button>
                )}
                
                <p className="text-gray-500 text-sm mt-8">Tap to reveal translation</p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-sm text-green-400 font-semibold uppercase tracking-wider mb-6">
                  Translation
                </p>
                <div className="text-5xl md:text-6xl font-bold text-green-400 mb-4">{currentCard.translation}</div>
                <div className="flex gap-2 justify-center flex-wrap">
                  {currentCard.categories.map(cat => (
                    <div key={cat} className="text-sm text-gray-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full inline-block">
                      {cat}
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-8">Tap for next card</p>
              </div>
            )}
          </div>

          <button
            onClick={nextCard}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
          >
            {currentFlashcardIndex < flashcardWords.length - 1 ? 'Next Card →' : 'Finish Review'}
          </button>
        </div>
      </div>
    );
  }

  // Speed Round Mode
  if (gameMode === 'speed') {
    if (!speedGameActive && speedTimeLeft === 0) {
      return (
        <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md text-center bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl p-8 border-2 border-red-500/30">
            <div className="text-6xl mb-6">⏰</div>
            <h2 className="text-3xl font-bold mb-4">Time's Up!</h2>
            <p className="text-gray-300 mb-2">Your Score</p>
            <p className="text-6xl font-bold text-red-400 mb-4">{speedScore}</p>
            <p className="text-gray-400 text-sm mb-8">Correct answers in 60 seconds</p>
            
            <div className="space-y-3">
              <button
                onClick={initializeSpeedGame}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
              >
                Try Again
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

    const currentWord = speedWords[speedIndex];
    const options = [
      currentWord.translation,
      ...dictionaryData
        .filter(w => w.translation !== currentWord.translation)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.translation)
    ].sort(() => 0.5 - Math.random());

    const handleSpeedAnswer = (answer: string) => {
      if (answer === currentWord.translation) {
        setSpeedScore(prev => prev + 1);
      }
      // Move to next question immediately
      setSpeedIndex(prev => (prev + 1) % speedWords.length);
    };

    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6">
        <div className="w-full max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">⚡ Speed Round</h2>
              <div className="flex gap-4">
                <div className="bg-gray-800 px-4 py-2 rounded-full border-2 border-gray-700">
                  <span className="text-gray-400 text-sm">Score: </span>
                  <span className="font-bold text-red-400">{speedScore}</span>
                </div>
                <div className={`px-4 py-2 rounded-full border-2 ${speedTimeLeft <= 10 ? 'bg-red-600/20 border-red-500 animate-pulse' : 'bg-gray-800 border-gray-700'}`}>
                  <span className="text-gray-400 text-sm">Time: </span>
                  <span className={`font-bold ${speedTimeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>{speedTimeLeft}s</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-3xl border-2 border-gray-700 p-8">
            <div className="text-center mb-8">
              <p className="text-sm text-red-400 font-semibold uppercase tracking-wider mb-4">
                Translate quickly!
              </p>
              <div className="text-5xl md:text-6xl font-bold mb-3 font-serif">{currentWord.script}</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{currentWord.word}</div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSpeedAnswer(option)}
                  className="p-4 rounded-xl border-2 bg-gray-700 border-gray-600 hover:border-red-500 hover:bg-red-600/10 active:scale-95 transition-all font-semibold"
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
  if (gameMode === 'match') {
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
                  relative cursor-pointer perspective-1000 group w-full h-full min-h-[110px] md:min-h-[130px]
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
                    absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl md:rounded-xl border-2 flex flex-col items-center justify-center p-1.5 sm:p-2 text-center shadow-xl overflow-hidden
                    ${card.isMatched 
                      ? 'bg-gradient-to-br from-green-900/40 to-green-800/20 border-green-500/50' 
                      : 'bg-gradient-to-br from-gray-800 to-gray-800/80 border-blue-500'
                    }
                  `}>
                    {card.script && (
                      <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-0.5 sm:mb-1 font-serif break-words w-full px-1 line-clamp-2">{card.script}</div>
                    )}
                    <div className={`${card.type === 'word' ? 'text-blue-400 font-bold' : 'text-gray-200'} text-[10px] sm:text-xs md:text-sm lg:text-base break-words w-full px-1 leading-tight line-clamp-3`}>
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

  // Default: return null if no game mode matches
  return null;
}
