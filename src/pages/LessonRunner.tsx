import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lessonsData } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

export default function LessonRunner() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson } = useProgress();
  
  const lesson = lessonsData.find(l => l.id === Number(lessonId));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!lesson) {
    return <div className="text-center py-12">Lesson not found</div>;
  }

  const currentQuestion = lesson.content[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex) / lesson.content.length) * 100;

  const handleCheck = () => {
    if (!selectedOption) return;
    
    const correct = selectedOption.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    setIsCorrect(correct);
  };

  const handleNext = () => {
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
    setIsCompleted(true);
  };

  if (isCompleted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 animate-fade-in">
        <div className="mb-8 text-6xl">🎉</div>
        <h2 className="text-3xl font-bold mb-4">Lesson Completed!</h2>
        <p className="text-xl text-gray-300 mb-8">
          You earned <span className="text-yellow-400 font-bold">{lesson.xpReward} XP</span>
        </p>
        <button
          onClick={() => navigate('/lessons')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
        >
          Back to Lessons
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-8">
        <div 
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl min-h-[400px] flex flex-col">
        <h3 className="text-xl text-gray-400 mb-4">Question {currentQuestionIndex + 1} of {lesson.content.length}</h3>
        
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-8">{currentQuestion.question}</h2>
          
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

        <div className="mt-8 pt-6 border-t border-gray-700">
          {isCorrect === null ? (
            <button
              onClick={handleCheck}
              disabled={!selectedOption}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Check Answer
            </button>
          ) : (
            <div className={`flex items-center justify-between ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              <span className="font-bold text-lg">
                {isCorrect ? 'Correct! 🎉' : `Incorrect. The answer is: ${currentQuestion.correctAnswer}`}
              </span>
              <button
                onClick={handleNext}
                className={`
                  font-bold py-3 px-8 rounded-lg text-white transition-colors
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
  );
}

