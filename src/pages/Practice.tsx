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

export default function Practice() {
  const { addPoints } = useProgress();
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const initializeGame = () => {
    // Select 6 random pairs
    const shuffledDictionary = [...dictionaryData].sort(() => 0.5 - Math.random());
    const selectedWords = shuffledDictionary.slice(0, 6);

    const gameCards: Card[] = [];
    selectedWords.forEach((entry, index) => {
      // Card 1: Chaldean Word + Script
      gameCards.push({
        id: `${entry.word}-word-${index}`,
        content: entry.word,
        script: entry.script,
        type: 'word',
        pairId: entry.word,
        isFlipped: false,
        isMatched: false,
      });
      // Card 2: English Translation
      gameCards.push({
        id: `${entry.word}-translation-${index}`,
        content: entry.translation,
        type: 'translation',
        pairId: entry.word, // Pair by the unique word key
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards
    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setFlippedCards([]);
    setIsProcessing(false);
    setMoves(0);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

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
    if (cards.length > 0 && cards.every(c => c.isMatched) && !gameWon) {
      setGameWon(true);
      addPoints(50); // Reward for winning
    }
  }, [cards, addPoints, gameWon]);

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
                onClick={initializeGame}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl md:rounded-xl transition-all active:scale-95 shadow-lg"
              >
                🎯 Play Again
              </button>
              <button 
                onClick={() => window.location.href = '#/lessons'}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-2xl md:rounded-xl transition-all active:scale-95"
              >
                📚 Back to Lessons
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
