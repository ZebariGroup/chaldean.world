import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';

// Spaced Repetition: Track word review performance
interface WordReview {
  wordId: string;
  lastReviewed: string;
  nextReview: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  correctCount: number;
  incorrectCount: number;
}

// Track favorites
interface FavoriteWord {
  wordId: string;
  addedAt: string;
}

// Track incorrect answers for review
interface IncorrectAnswer {
  lessonId: number;
  questionId: number;
  timestamp: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
}

// User preferences
interface UserPreferences {
  dailyGoal: number;
  notificationsEnabled: boolean;
  darkMode: boolean;
  audioEnabled: boolean;
  learningGoal: 'conversation' | 'reading' | 'travel' | 'general';
}

// Achievement badges
interface Badge {
  id: string;
  name: string;
  description: string;
  earnedAt: string | null;
}

interface ProgressState {
  points: number;
  completedLessons: number[];
  currentStreak: number;
  lastLogin: string | null;
  longestStreak: number;
  streakFreezeUsed: boolean;
  level: number;
  wordsLearned: string[];
  wordReviews: Record<string, WordReview>;
  favorites: FavoriteWord[];
  incorrectAnswers: IncorrectAnswer[];
  preferences: UserPreferences;
  badges: Badge[];
  totalStudyTime: number; // in minutes
  lastStudyDate: string | null;
  dailyProgress: number; // lessons completed today
}

interface ProgressContextType extends ProgressState {
  addPoints: (amount: number) => void;
  completeLesson: (lessonId: number) => void;
  checkStreak: () => void;
  addWordToReview: (wordId: string) => void;
  updateWordReview: (wordId: string, quality: number) => void; // SM-2 algorithm
  toggleFavorite: (wordId: string) => void;
  isFavorite: (wordId: string) => boolean;
  addIncorrectAnswer: (answer: IncorrectAnswer) => void;
  clearIncorrectAnswers: () => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  addStudyTime: (minutes: number) => void;
  getWordsToReview: () => string[];
  exportProgress: () => string;
  importProgress: (data: string) => void;
  resetProgress: () => void;
}

const defaultBadges: Badge[] = [
  { id: 'first-lesson', name: 'First Steps', description: 'Complete your first lesson', earnedAt: null },
  { id: 'week-streak', name: 'Week Warrior', description: '7-day streak', earnedAt: null },
  { id: 'month-streak', name: 'Monthly Master', description: '30-day streak', earnedAt: null },
  { id: 'hundred-words', name: 'Vocabulary Builder', description: 'Learn 100 words', earnedAt: null },
  { id: 'all-beginner', name: 'Beginner Graduate', description: 'Complete all beginner lessons', earnedAt: null },
  { id: 'practice-master', name: 'Practice Master', description: 'Complete 50 practice sessions', earnedAt: null },
];

const defaultState: ProgressState = {
  points: 0,
  completedLessons: [],
  currentStreak: 0,
  lastLogin: null,
  longestStreak: 0,
  streakFreezeUsed: false,
  level: 1,
  wordsLearned: [],
  wordReviews: {},
  favorites: [],
  incorrectAnswers: [],
  preferences: {
    dailyGoal: 3,
    notificationsEnabled: false,
    darkMode: true,
    audioEnabled: true,
    learningGoal: 'general',
  },
  badges: defaultBadges,
  totalStudyTime: 0,
  lastStudyDate: null,
  dailyProgress: 0,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => {
    try {
      const saved = localStorage.getItem('chaldean-progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults to handle new fields
        return {
          ...defaultState,
          ...parsed,
          preferences: { ...defaultState.preferences, ...(parsed.preferences || {}) },
          badges: parsed.badges || defaultBadges,
        };
      }
    } catch (error) {
      console.error('Error loading progress from localStorage:', error);
    }
    return defaultState;
  });

  useEffect(() => {
    localStorage.setItem('chaldean-progress', JSON.stringify(state));
  }, [state]);

  // SM-2 Spaced Repetition Algorithm
  const calculateNextReview = useCallback((quality: number, review: WordReview): Partial<WordReview> => {
    let { easeFactor, interval, repetitions } = review;
    
    if (quality >= 3) {
      // Correct response
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
    } else {
      // Incorrect response
      repetitions = 0;
      interval = 1;
    }
    
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;
    
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);
    
    return {
      easeFactor,
      interval,
      repetitions,
      lastReviewed: new Date().toISOString(),
      nextReview: nextReview.toISOString(),
    };
  }, []);

  const checkStreak = useCallback(() => {
    setState(prev => {
      const today = new Date().toDateString();
      const lastLogin = prev.lastLogin;
      
      if (lastLogin === today) return prev;

      let newStreak = 1;
      let streakFreezeUsed = prev.streakFreezeUsed;
      
      if (lastLogin) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        
        if (lastLogin === yesterday.toDateString()) {
          newStreak = prev.currentStreak + 1;
        } else if (lastLogin === twoDaysAgo.toDateString() && !prev.streakFreezeUsed) {
          // Use streak freeze
          newStreak = prev.currentStreak + 1;
          streakFreezeUsed = true;
        } else {
          newStreak = 1;
          streakFreezeUsed = false;
        }
      }

      const longestStreak = Math.max(prev.longestStreak, newStreak);
      const updatedBadges = [...prev.badges];
      
      // Award streak badges
      if (newStreak >= 7) {
        const badge = updatedBadges.find(b => b.id === 'week-streak');
        if (badge && !badge.earnedAt) badge.earnedAt = new Date().toISOString();
      }
      if (newStreak >= 30) {
        const badge = updatedBadges.find(b => b.id === 'month-streak');
        if (badge && !badge.earnedAt) badge.earnedAt = new Date().toISOString();
      }

      return {
        ...prev,
        currentStreak: newStreak,
        longestStreak,
        lastLogin: today,
        streakFreezeUsed,
        badges: updatedBadges,
      };
    });
  }, []);

  useEffect(() => {
    checkStreak();
  }, [checkStreak]);

  const addPoints = useCallback((amount: number) => {
    setState(prev => {
      const newPoints = prev.points + amount;
      const newLevel = Math.floor(newPoints / 1000) + 1;
      return { ...prev, points: newPoints, level: newLevel };
    });
  }, []);

  const completeLesson = useCallback((lessonId: number) => {
    setState(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      
      const today = new Date().toDateString();
      const dailyProgress = prev.lastStudyDate === today ? prev.dailyProgress + 1 : 1;
      
      const updatedBadges = [...prev.badges];
      const firstLesson = updatedBadges.find(b => b.id === 'first-lesson');
      if (firstLesson && !firstLesson.earnedAt) {
        firstLesson.earnedAt = new Date().toISOString();
      }
      
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        dailyProgress,
        lastStudyDate: today,
        badges: updatedBadges,
      };
    });
  }, []);

  const addWordToReview = useCallback((wordId: string) => {
    setState(prev => {
      if (prev.wordsLearned.includes(wordId)) return prev;
      
      const updatedBadges = [...prev.badges];
      const newWordsLearned = [...prev.wordsLearned, wordId];
      
      if (newWordsLearned.length >= 100) {
        const badge = updatedBadges.find(b => b.id === 'hundred-words');
        if (badge && !badge.earnedAt) badge.earnedAt = new Date().toISOString();
      }
      
      return {
        ...prev,
        wordsLearned: newWordsLearned,
        wordReviews: {
          ...prev.wordReviews,
          [wordId]: {
            wordId,
            lastReviewed: new Date().toISOString(),
            nextReview: new Date(Date.now() + 86400000).toISOString(), // 1 day
            easeFactor: 2.5,
            interval: 1,
            repetitions: 0,
            correctCount: 0,
            incorrectCount: 0,
          },
        },
        badges: updatedBadges,
      };
    });
  }, []);

  const updateWordReview = useCallback((wordId: string, quality: number) => {
    setState(prev => {
      const review = prev.wordReviews[wordId];
      if (!review) return prev;
      
      const updates = calculateNextReview(quality, review);
      
      return {
        ...prev,
        wordReviews: {
          ...prev.wordReviews,
          [wordId]: {
            ...review,
            ...updates,
            correctCount: quality >= 3 ? review.correctCount + 1 : review.correctCount,
            incorrectCount: quality < 3 ? review.incorrectCount + 1 : review.incorrectCount,
          },
        },
      };
    });
  }, [calculateNextReview]);

  const toggleFavorite = useCallback((wordId: string) => {
    setState(prev => {
      const isFav = prev.favorites.some(f => f.wordId === wordId);
      if (isFav) {
        return {
          ...prev,
          favorites: prev.favorites.filter(f => f.wordId !== wordId),
        };
      } else {
        return {
          ...prev,
          favorites: [...prev.favorites, { wordId, addedAt: new Date().toISOString() }],
        };
      }
    });
  }, []);

  const isFavorite = useCallback((wordId: string) => {
    return state.favorites.some(f => f.wordId === wordId);
  }, [state.favorites]);

  const addIncorrectAnswer = useCallback((answer: IncorrectAnswer) => {
    setState(prev => ({
      ...prev,
      incorrectAnswers: [...prev.incorrectAnswers, answer],
    }));
  }, []);

  const clearIncorrectAnswers = useCallback(() => {
    setState(prev => ({
      ...prev,
      incorrectAnswers: [],
    }));
  }, []);

  const updatePreferences = useCallback((prefs: Partial<UserPreferences>) => {
    setState(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...prefs },
    }));
  }, []);

  const addStudyTime = useCallback((minutes: number) => {
    setState(prev => ({
      ...prev,
      totalStudyTime: prev.totalStudyTime + minutes,
    }));
  }, []);

  const getWordsToReview = useCallback(() => {
    const now = new Date().toISOString();
    return Object.values(state.wordReviews)
      .filter(review => review.nextReview <= now)
      .map(review => review.wordId);
  }, [state.wordReviews]);

  const exportProgress = useCallback(() => {
    return JSON.stringify(state, null, 2);
  }, [state]);

  const importProgress = useCallback((data: string) => {
    try {
      const parsed = JSON.parse(data);
      setState({
        ...defaultState,
        ...parsed,
        preferences: { ...defaultState.preferences, ...(parsed.preferences || {}) },
      });
    } catch (error) {
      console.error('Failed to import progress:', error);
      alert('Failed to import progress. Invalid data format.');
    }
  }, []);

  const resetProgress = useCallback(() => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setState(defaultState);
    }
  }, []);

  const value = useMemo(() => ({
    ...state,
    addPoints,
    completeLesson,
    checkStreak,
    addWordToReview,
    updateWordReview,
    toggleFavorite,
    isFavorite,
    addIncorrectAnswer,
    clearIncorrectAnswers,
    updatePreferences,
    addStudyTime,
    getWordsToReview,
    exportProgress,
    importProgress,
    resetProgress,
  }), [
    state,
    addPoints,
    completeLesson,
    checkStreak,
    addWordToReview,
    updateWordReview,
    toggleFavorite,
    isFavorite,
    addIncorrectAnswer,
    clearIncorrectAnswers,
    updatePreferences,
    addStudyTime,
    getWordsToReview,
    exportProgress,
    importProgress,
    resetProgress,
  ]);

  return (
    <ProgressContext.Provider value={value}>
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
