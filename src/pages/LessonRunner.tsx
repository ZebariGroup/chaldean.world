import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lessonsData } from '../data/lessons';
import { dictionaryData } from '../data/dictionary';
import { useProgress } from '../context/ProgressContext';

type LessonPhase = 'intro' | 'learning' | 'quiz' | 'completed';

export default function LessonRunner() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, addPoints, addWordToReview, addIncorrectAnswer, addStudyTime } = useProgress();
  
  const lesson = lessonsData.find(l => l.id === Number(lessonId));
  
  const [phase, setPhase] = useState<LessonPhase>('intro');
  
  // Learning Phase State
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Quiz Phase State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [startTime] = useState(Date.now());

  if (!lesson) {
    return <div className="text-center py-12">Lesson not found</div>;
  }

  // Add words to review system when learning
  useEffect(() => {
    if (phase === 'learning') {
      lesson.vocabulary.forEach(word => {
        // Find the word in dictionary to get its category for proper ID format
        const dictEntry = dictionaryData.find(d => d.word === word.word);
        if (dictEntry) {
          addWordToReview(`${word.word}-${dictEntry.categories.join('-')}`);
        }
      });
    }
  }, [phase, lesson, addWordToReview]);

  // --- Intro View ---
  if (phase === 'intro') {
    return (
      <div className="h-full flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center animate-fade-in">
          <div className="text-5xl md:text-6xl mb-4 md:mb-6">{lesson.icon || "📚"}</div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">{lesson.title}</h1>
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">{lesson.description}</p>
          <div className="bg-gradient-to-br from-gray-800 to-gray-800/50 p-5 md:p-6 rounded-2xl inline-block mb-6 md:mb-8 border border-gray-700">
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-2">You'll Learn</p>
            <p className="text-2xl md:text-3xl font-bold text-blue-400">{lesson.vocabulary.length} Words</p>
          </div>
          <div>
            <button
              onClick={() => setPhase('learning')}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 md:py-4 px-8 md:px-12 rounded-2xl md:rounded-full text-lg transition-transform active:scale-95 md:hover:scale-105 shadow-lg"
            >
              Start Learning →
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
          <div className="w-full bg-gray-700/50 rounded-full h-3 mb-4 md:mb-6 shadow-inner">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 shadow-sm" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="mb-4 md:mb-6 flex justify-between items-center text-xs md:text-sm">
            <span className="font-medium text-gray-300">Card {currentCardIndex + 1} of {lesson.vocabulary.length}</span>
            <span className="bg-blue-900/50 text-blue-200 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-700/50">Flashcards</span>
          </div>

          {/* Card */}
          <div 
            className="relative min-h-[380px] max-h-[480px] h-[50vh] md:h-96 w-full cursor-pointer perspective-1000 group"
            onClick={() => setIsCardFlipped(!isCardFlipped)}
          >
          <div className={`
            w-full h-full transition-all duration-500 preserve-3d relative
            ${isCardFlipped ? 'rotate-y-180' : ''}
          `}>
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-3xl md:rounded-2xl border-2 border-gray-700 flex flex-col items-center justify-center p-4 md:p-8 shadow-2xl active:border-blue-500 md:hover:border-blue-500 transition-colors overflow-hidden">
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3 bg-blue-500/10 px-3 py-1.5 rounded-full flex-shrink-0">Chaldean</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 md:mb-4 text-center font-serif break-words max-w-full">{currentCard.script}</h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-center text-gray-300 break-words max-w-full">{currentCard.word}</h3>
              <div className="mt-auto pt-3 flex-shrink-0">
                <p className="text-gray-500 text-xs sm:text-sm bg-gray-700/50 px-3 py-1.5 rounded-full">👆 Tap to see meaning</p>
              </div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-900/30 to-gray-800 rounded-3xl md:rounded-2xl border-2 border-blue-500/50 flex flex-col items-center justify-center p-4 md:p-8 shadow-2xl overflow-hidden">
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2 bg-blue-500/10 px-3 py-1.5 rounded-full flex-shrink-0">English</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center text-blue-400 break-words max-w-full">{currentCard.translation}</h3>
              
              <div className="w-16 h-px bg-gray-700 my-2 md:my-4 flex-shrink-0"></div>
              
              <span className="text-xs text-gray-400 uppercase tracking-wider mb-1 flex-shrink-0">Pronunciation</span>
              <p className="text-lg sm:text-xl md:text-2xl italic text-gray-300 font-medium break-words max-w-full text-center">{currentCard.phonetic}</p>
            </div>
          </div>
        </div>

          {/* Controls */}
          <div className="mt-5 md:mt-8 flex justify-center">
            <button
              onClick={(e) => { e.stopPropagation(); handleNextCard(); }}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 md:px-12 rounded-2xl md:rounded-full shadow-lg transition-transform active:scale-95 md:hover:scale-105"
            >
              {currentCardIndex < lesson.vocabulary.length - 1 ? 'Next Card →' : 'Start Quiz 🎯'}
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
      
      // Track incorrect answers
      if (!correct) {
        addIncorrectAnswer({
          lessonId: lesson.id,
          questionId: currentQuestion.id,
          timestamp: new Date().toISOString(),
          question: currentQuestion.question,
          userAnswer: selectedOption,
          correctAnswer: currentQuestion.correctAnswer,
        });
      }
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
      
      // Track study time
      const studyTime = Math.round((Date.now() - startTime) / 60000); // minutes
      addStudyTime(studyTime);
      
      setPhase('completed');
    };

    return (
      <div className="h-full flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          {/* Progress Bar */}
          <div className="w-full bg-gray-700/50 rounded-full h-3 mb-4 md:mb-6 shadow-inner">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 shadow-sm" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 p-5 md:p-8 rounded-3xl md:rounded-xl border-2 border-gray-700 shadow-xl flex flex-col">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h3 className="text-sm md:text-lg font-medium text-gray-300">Question {currentQuestionIndex + 1} of {lesson.content.length}</h3>
            <span className="bg-green-900/50 text-green-200 px-3 py-1.5 rounded-full text-xs font-medium border border-green-700/50">Quiz</span>
          </div>
          
          <div>
            <h2 className="text-lg md:text-2xl font-bold mb-5 md:mb-8 leading-snug">{currentQuestion.question}</h2>
            
            {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => !isCorrect && setSelectedOption(option)}
                    disabled={isCorrect !== null}
                    className={`
                      p-4 md:p-5 rounded-2xl md:rounded-xl border-2 text-left transition-all font-medium active:scale-95
                      ${selectedOption === option 
                        ? isCorrect === null 
                          ? 'border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/20' 
                          : isCorrect 
                            ? 'border-green-500 bg-green-500/20 shadow-lg shadow-green-500/20'
                            : 'border-red-500 bg-red-500/20 shadow-lg shadow-red-500/20'
                        : 'border-gray-600 md:hover:border-gray-500 bg-gray-700/50 md:hover:bg-gray-700'
                      }
                      ${isCorrect !== null && option === currentQuestion.correctAnswer ? 'border-green-500 bg-green-500/20' : ''}
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
                  className="w-full p-4 md:p-5 rounded-2xl md:rounded-xl bg-gray-700/50 border-2 border-gray-600 text-white text-lg focus:border-blue-500 focus:bg-gray-700 outline-none transition-all"
                />
              </div>
            )}
          </div>

          <div className="mt-5 md:mt-8 pt-5 md:pt-6 border-t border-gray-700">
            {isCorrect === null ? (
              <button
                onClick={handleCheck}
                disabled={!selectedOption}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl md:rounded-xl transition-all active:scale-95 shadow-lg"
              >
                Check Answer
              </button>
            ) : (
              <div className={`flex flex-col gap-3 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                <div className={`p-4 rounded-2xl md:rounded-xl ${isCorrect ? 'bg-green-500/10 border-2 border-green-500/30' : 'bg-red-500/10 border-2 border-red-500/30'}`}>
                  <span className="font-bold text-base md:text-lg block">
                    {isCorrect ? '✓ Correct! Amazing!' : `✗ ${currentQuestion.correctAnswer}`}
                  </span>
                  {!isCorrect && <span className="text-sm text-gray-400 block mt-1">Keep practicing!</span>}
                </div>
                <button
                  onClick={handleNextQuestion}
                  className={`
                    font-bold py-4 px-8 rounded-2xl md:rounded-xl text-white transition-all active:scale-95 shadow-lg
                    ${isCorrect ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800'}
                  `}
                >
                  {currentQuestionIndex < lesson.content.length - 1 ? 'Continue →' : 'Finish Lesson 🎉'}
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
      <div className="max-w-md w-full text-center animate-fade-in bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-3xl md:rounded-2xl p-8 md:p-10 border-2 border-green-500/30 shadow-2xl">
        <div className="mb-6 md:mb-8 text-6xl md:text-7xl">🎉</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Lesson Complete!</h2>
        <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
          You earned <span className="text-yellow-400 font-bold text-xl md:text-2xl">+{lesson.xpReward} XP</span>
        </p>
        <div className="space-y-3">
          <button
            onClick={() => navigate('/lessons')}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl md:rounded-xl transition-all active:scale-95 shadow-lg"
          >
            Continue Learning →
          </button>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-2xl md:rounded-xl transition-all active:scale-95"
          >
            ↻ Practice Again
          </button>
        </div>
      </div>
    </div>
  );
}
