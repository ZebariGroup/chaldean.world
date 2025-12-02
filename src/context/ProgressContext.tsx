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
  checkStreak: () => void;
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
    try {
      const saved = localStorage.getItem('chaldean-progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validate structure
        if (parsed && typeof parsed.points === 'number' && Array.isArray(parsed.completedLessons)) {
          return parsed;
        }
      }
    } catch (error) {
      console.error('Error loading progress from localStorage:', error);
    }
    return defaultState;
  });

  useEffect(() => {
    localStorage.setItem('chaldean-progress', JSON.stringify(state));
  }, [state]);

  // Run streak check on mount
  useEffect(() => {
    checkStreak();
  }, []);

  const checkStreak = () => {
    setState(prev => {
      const today = new Date().toDateString();
      const lastLogin = prev.lastLogin;
      
      // If logged in today already, do nothing
      if (lastLogin === today) return prev;

      // Calculate if streak continues
      let newStreak = 1; // Default to 1 if no streak or broken streak
      
      if (lastLogin) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastLogin === yesterday.toDateString()) {
          newStreak = prev.currentStreak + 1;
        } else {
          // Streak broken
          newStreak = 1;
        }
      }

      return {
        ...prev,
        currentStreak: newStreak,
        lastLogin: today
      };
    });
  };

  const addPoints = (amount: number) => {
    setState(prev => ({ ...prev, points: prev.points + amount }));
  };

  const completeLesson = (lessonId: number) => {
    setState(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId]
      };
    });
  };

  return (
    <ProgressContext.Provider value={{ ...state, addPoints, completeLesson, checkStreak }}>
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
