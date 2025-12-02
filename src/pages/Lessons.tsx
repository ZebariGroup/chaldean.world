import { Link } from 'react-router-dom';
import { lessonsData } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

export default function Lessons() {
  const { completedLessons } = useProgress();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Lessons</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessonsData.map((lesson) => {
          const isCompleted = completedLessons.includes(lesson.id);
          
          return (
            <Link 
              key={lesson.id} 
              to={`/lessons/${lesson.id}`}
              className={`
                block relative p-6 rounded-xl border-2 transition-all transform hover:scale-105
                ${isCompleted 
                  ? 'bg-gray-800/50 border-green-500/50 hover:border-green-500' 
                  : 'bg-gray-800 border-gray-700 hover:border-blue-500'
                }
              `}
            >
              {isCompleted && (
                <div className="absolute top-4 right-4 text-green-500 bg-green-500/10 p-1 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              
              <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">
                {lesson.level}
              </div>
              <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
              <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{lesson.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-yellow-400 font-bold flex items-center gap-1">
                  <span>★</span> {lesson.xpReward} XP
                </span>
                <span className={isCompleted ? 'text-green-400' : 'text-blue-400'}>
                  {isCompleted ? 'Practice Again' : 'Start Lesson'} &rarr;
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
