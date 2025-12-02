import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lessonsData } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

type LessonPhase = 'intro' | 'learning' | 'quiz' | 'completed';

export default function LessonRunner() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, addPoints } = useProgress();
  
  const lesson = lessonsData.find(l => l.id === Number(lessonId));
  
  const [phase, setPhase] = useState<LessonPhase>('intro');
  
  // Learning Phase State
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Quiz Phase State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  if (!lesson) {
    return <div className="text-center py-12">Lesson not found</div>;
  }

  // --- Intro View ---
  if (phase === 'intro') {
    return (
      <div className="h-full flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">{lesson.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12">{lesson.description}</p>
          <div className="bg-gray-800 p-4 md:p-6 rounded-lg inline-block mb-8 md:mb-12">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Vocabulary to Learn</p>
            <p className="text-2xl font-bold text-blue-400">{lesson.vocabulary.length} Words</p>
          </div>
          <div>
            <button
              onClick={() => setPhase('learning')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-base md:text-lg transition-transform transform hover:scale-105 shadow-lg"
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Learning / Flashcard View ---
  if (phase === 'learning') {
    const currentCard = lesson.vocabulary[currentCardIndex];
    const progressPercentage = ((currentCardIndex + 1) / lesson.vocabulary.length) * 100;

    const handleNextCard = () => {
      setIsCardFlipped(false);
      if (currentCardIndex < lesson.vocabulary.length - 1) {
        setTimeout(() => setCurrentCardIndex(prev => prev + 1), 150); // Small delay for flip reset
      } else {
        setPhase('quiz');
      }
    };

    return (
      <div className="h-full flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          {/* Progress Bar for Flashcards */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4 md:mb-8">
            <div 
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="mb-4 md:mb-6 flex justify-between items-center text-sm text-gray-400">
            <span>Card {currentCardIndex + 1} of {lesson.vocabulary.length}</span>
            <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded text-xs">Flashcards</span>
          </div>

          {/* Card */}
          <div 
            className="relative h-80 md:h-96 w-full cursor-pointer perspective-1000 group"
            onClick={() => setIsCardFlipped(!isCardFlipped)}
          >
          <div className={`
            w-full h-full transition-all duration-500 preserve-3d relative
            ${isCardFlipped ? 'rotate-y-180' : ''}
          `}>
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-gray-800 rounded-2xl border-2 border-gray-700 flex flex-col items-center justify-center p-6 md:p-8 shadow-2xl hover:border-blue-500 transition-colors">
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-3 md:mb-4">Chaldean</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-center font-serif">{currentCard.script}</h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-center text-gray-300">{currentCard.word}</h3>
              <p className="text-gray-500 mt-2 md:mt-4 text-xs md:text-sm">Tap to flip</p>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-2xl border-2 border-blue-500/50 flex flex-col items-center justify-center p-6 md:p-8 shadow-2xl">
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-2">English</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center text-blue-400">{currentCard.translation}</h3>
              
              <div className="w-full h-px bg-gray-700 my-3 md:my-4"></div>
              
              <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-2">Pronunciation</span>
              <p className="text-lg md:text-xl italic text-gray-300">{currentCard.phonetic}</p>
            </div>
          </div>
        </div>

          {/* Controls */}
          <div className="mt-4 md:mt-8 flex justify-center">
            <button
              onClick={(e) => { e.stopPropagation(); handleNextCard(); }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 md:px-12 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              {currentCardIndex < lesson.vocabulary.length - 1 ? 'Next Card' : 'Start Quiz'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Quiz View ---
  if (phase === 'quiz') {
    const currentQuestion = lesson.content[currentQuestionIndex];
    const progressPercentage = ((currentQuestionIndex + 1) / lesson.content.length) * 100;

    const handleCheck = () => {
      if (!selectedOption) return;
      const correct = selectedOption.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
      setIsCorrect(correct);
    };

    const handleNextQuestion = () => {
      if (currentQuestionIndex < lesson.content.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        finishLesson();
      }
    };

    const finishLesson = () => {
      completeLesson(lesson.id);
      addPoints(lesson.xpReward);
      setPhase('completed');
    };

    return (
      <div className="h-full flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4 md:mb-8">
            <div 
              className="bg-green-500 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="bg-gray-800 p-4 md:p-8 rounded-xl border border-gray-700 shadow-xl flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base md:text-xl text-gray-400">Question {currentQuestionIndex + 1} of {lesson.content.length}</h3>
            <span className="bg-green-900 text-green-200 px-2 py-1 rounded text-xs">Quiz Mode</span>
          </div>
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">{currentQuestion.question}</h2>
            
            {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
              <div className="grid gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => !isCorrect && setSelectedOption(option)}
                    disabled={isCorrect !== null}
                    className={`
                      p-4 rounded-lg border-2 text-left transition-all
                      ${selectedOption === option 
                        ? isCorrect === null 
                          ? 'border-blue-500 bg-blue-500/10' 
                          : isCorrect 
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-red-500 bg-red-500/10'
                        : 'border-gray-600 hover:border-gray-500 bg-gray-700/50'
                      }
                      ${isCorrect !== null && option === currentQuestion.correctAnswer ? 'border-green-500 bg-green-500/10' : ''}
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'translation' && (
              <div>
                <input
                  type="text"
                  value={selectedOption || ''}
                  onChange={(e) => !isCorrect && setSelectedOption(e.target.value)}
                  disabled={isCorrect !== null}
                  placeholder="Type your answer..."
                  className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-blue-500 outline-none"
                />
              </div>
            )}
          </div>

          <div className="mt-4 md:mt-8 pt-4 md:pt-6 border-t border-gray-700">
            {isCorrect === null ? (
              <button
                onClick={handleCheck}
                disabled={!selectedOption}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Check Answer
              </button>
            ) : (
              <div className={`flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                <span className="font-bold text-base md:text-lg text-center md:text-left">
                  {isCorrect ? 'Correct! 🎉' : `Incorrect. The answer is: ${currentQuestion.correctAnswer}`}
                </span>
                <button
                  onClick={handleNextQuestion}
                  className={`
                    font-bold py-3 px-8 rounded-lg text-white transition-colors w-full md:w-auto
                    ${isCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
                  `}
                >
                  {currentQuestionIndex < lesson.content.length - 1 ? 'Next' : 'Finish'}
                </button>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    );
  }

  // --- Completed View ---
  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        <div className="mb-6 md:mb-8 text-5xl md:text-6xl">🎉</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Lesson Completed!</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
          You earned <span className="text-yellow-400 font-bold">{lesson.xpReward} XP</span>
        </p>
        <button
          onClick={() => navigate('/lessons')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
        >
          Back to Lessons
        </button>
      </div>
    </div>
  );
}
