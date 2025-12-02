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
        }, 500);
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
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.isMatched)) {
      setGameWon(true);
      addPoints(50); // Reward for winning
    }
  }, [cards, addPoints]);

  return (
    <div className="w-full h-full max-w-4xl mx-auto px-4 md:px-0 flex flex-col">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h1 className="text-2xl font-bold">Matching Practice</h1>
        <div className="bg-gray-800 px-4 py-1 rounded-lg border border-gray-700">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Moves: </span>
          <span className="font-bold text-white">{moves}</span>
        </div>
      </div>

      {gameWon ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center py-12 animate-fade-in bg-gray-800 rounded-2xl border border-gray-700 p-8 w-full max-w-md">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Excellent!</h2>
            <p className="text-gray-300 mb-8">You matched all pairs in {moves} moves.</p>
            <button 
              onClick={initializeGame}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-grow grid grid-cols-3 md:grid-cols-4 gap-3 pb-2 min-h-0">
          {cards.map(card => (
            <div 
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                relative cursor-pointer perspective-1000 group w-full h-full
                ${card.isMatched ? 'opacity-50 cursor-default' : ''}
              `}
            >
              <div className={`
                w-full h-full transition-all duration-500 preserve-3d relative
                ${card.isFlipped ? 'rotate-y-180' : ''}
              `}>
                {/* Front (Hidden State - Logo/Pattern) */}
                <div className="absolute w-full h-full backface-hidden bg-gray-700 rounded-xl border-2 border-gray-600 flex items-center justify-center hover:border-blue-500 transition-colors">
                  <span className="text-2xl opacity-20">?</span>
                </div>

                {/* Back (Revealed State - Content) */}
                <div className={`
                  absolute w-full h-full backface-hidden rotate-y-180 rounded-xl border-2 flex flex-col items-center justify-center p-2 text-center shadow-xl overflow-hidden
                  ${card.isMatched 
                    ? 'bg-green-900/30 border-green-500/50' 
                    : 'bg-gray-800 border-blue-500'
                  }
                `}>
                  {card.script && (
                    <div className="text-xl md:text-2xl font-bold mb-1 font-serif truncate w-full">{card.script}</div>
                  )}
                  <div className={`${card.type === 'word' ? 'text-blue-400 font-bold' : 'text-gray-200'} text-sm md:text-base truncate w-full whitespace-normal`}>
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
