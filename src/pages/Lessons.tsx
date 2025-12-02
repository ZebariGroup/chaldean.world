import { Link } from 'react-router-dom';
import { lessonsData } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

export default function Lessons() {
  const { completedLessons } = useProgress();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 md:py-0">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Your Lessons</h1>
        <p className="text-gray-400 text-sm md:text-base">Choose a lesson to continue your journey</p>
      </div>
      
      {/* Mobile: List view, Desktop: Grid view */}
      <div className="flex flex-col gap-3 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lessonsData.map((lesson) => {
          const isCompleted = completedLessons.includes(lesson.id);
          
          return (
            <Link 
              key={lesson.id} 
              to={`/lessons/${lesson.id}`}
              className={`
                block relative rounded-2xl md:rounded-xl border-2 transition-all active:scale-95 md:hover:scale-105
                ${isCompleted 
                  ? 'bg-gradient-to-br from-green-900/20 to-gray-800/50 border-green-500/50 md:hover:border-green-500' 
                  : 'bg-gradient-to-br from-gray-800 to-gray-800/80 border-gray-700 md:hover:border-blue-500'
                }
              `}
            >
              {/* Mobile: Horizontal layout */}
              <div className="flex md:block p-4 md:p-6">
                {/* Left side on mobile: Icon + Level */}
                <div className="flex flex-col items-center justify-center mr-4 md:mr-0 md:mb-3">
                  <div className="text-4xl md:text-5xl mb-1 md:mb-3">{lesson.icon || "📚"}</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded-full">
                    {lesson.level}
                  </div>
                </div>

                {/* Right side on mobile: Content */}
                <div className="flex-1">
                  {isCompleted && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 text-green-500 bg-green-500/10 p-1.5 md:p-2 rounded-full">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 pr-8">{lesson.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 md:line-clamp-none md:min-h-[40px]">{lesson.description}</p>
                  
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-yellow-400 font-bold flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-full">
                      <span>★</span> {lesson.xpReward} XP
                    </span>
                    <span className={`font-medium ${isCompleted ? 'text-green-400' : 'text-blue-400'}`}>
                      {isCompleted ? '↻ Review' : 'Start →'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
