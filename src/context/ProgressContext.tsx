import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProgressState {
  points: number;
  completedLessons: number[]; // Store IDs of completed lessons
  currentStreak: number;
  lastLogin: string | null;
}

interface ProgressContextType extends ProgressState {
  addPoints: (amount: number) => void;
  completeLesson: (lessonId: number) => void;
}

const defaultState: ProgressState = {
  points: 0,
  completedLessons: [],
  currentStreak: 0,
  lastLogin: null,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => {
    const saved = localStorage.getItem('chaldean-progress');
    return saved ? JSON.parse(saved) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem('chaldean-progress', JSON.stringify(state));
  }, [state]);

  const addPoints = (amount: number) => {
    setState(prev => ({ ...prev, points: prev.points + amount }));
  };

  const completeLesson = (lessonId: number) => {
    setState(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        points: prev.points + 50 // Bonus for completing a lesson
      };
    });
  };

  return (
    <ProgressContext.Provider value={{ ...state, addPoints, completeLesson }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}

