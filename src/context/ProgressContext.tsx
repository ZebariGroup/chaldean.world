import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

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
  loading: boolean;
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
  const { user } = useAuth();
  const [state, setState] = useState<ProgressState>(defaultState);
  const [loading, setLoading] = useState(true);

  // Load progress from Supabase or localStorage
  useEffect(() => {
    const loadProgress = async () => {
      setLoading(true);
      try {
        if (user) {
          // Load from Supabase
          const { data: progressData, error: progressError } = await supabase
            .from('user_progress')
            .select('*')
            .eq('id', user.id)
            .single();

          if (progressError && progressError.code !== 'PGRST116') {
            console.error('Error loading progress:', progressError);
          }

          // Load related data
          const [completedLessonsRes, wordsLearnedRes, wordReviewsRes, favoritesRes, incorrectAnswersRes, badgesRes] = await Promise.all([
            supabase.from('completed_lessons').select('lesson_id').eq('user_id', user.id),
            supabase.from('words_learned').select('word_id').eq('user_id', user.id),
            supabase.from('word_reviews').select('*').eq('user_id', user.id),
            supabase.from('favorite_words').select('*').eq('user_id', user.id),
            supabase.from('incorrect_answers').select('*').eq('user_id', user.id),
            supabase.from('badges').select('*').eq('user_id', user.id),
          ]);

          const progress = progressData || {};
          const wordReviewsMap: Record<string, WordReview> = {};
          
          (wordReviewsRes.data || []).forEach((wr: any) => {
            wordReviewsMap[wr.word_id] = {
              wordId: wr.word_id,
              lastReviewed: wr.last_reviewed,
              nextReview: wr.next_review,
              easeFactor: parseFloat(wr.ease_factor),
              interval: wr.interval_days,
              repetitions: wr.repetitions,
              correctCount: wr.correct_count,
              incorrectCount: wr.incorrect_count,
            };
          });

          const badgesMap = new Map((badgesRes.data || []).map((b: any) => [b.badge_id, b.earned_at]));
          const badges = defaultBadges.map(badge => ({
            ...badge,
            earnedAt: badgesMap.get(badge.id) || null,
          }));

          setState({
            points: progress.points || 0,
            level: progress.level || 1,
            currentStreak: progress.current_streak || 0,
            longestStreak: progress.longest_streak || 0,
            streakFreezeUsed: progress.streak_freeze_used || false,
            lastLogin: progress.last_login,
            totalStudyTime: progress.total_study_time || 0,
            lastStudyDate: progress.last_study_date,
            dailyProgress: progress.daily_progress || 0,
            completedLessons: (completedLessonsRes.data || []).map((cl: any) => cl.lesson_id),
            wordsLearned: (wordsLearnedRes.data || []).map((wl: any) => wl.word_id),
            wordReviews: wordReviewsMap,
            favorites: (favoritesRes.data || []).map((f: any) => ({
              wordId: f.word_id,
              addedAt: f.added_at,
            })),
            incorrectAnswers: (incorrectAnswersRes.data || []).map((ia: any) => ({
              lessonId: ia.lesson_id,
              questionId: ia.question_id,
              timestamp: ia.timestamp,
              question: ia.question,
              userAnswer: ia.user_answer,
              correctAnswer: ia.correct_answer,
            })),
            preferences: progress.preferences || defaultState.preferences,
            badges,
          });
        } else {
          // Load from localStorage
          const saved = localStorage.getItem('chaldean-progress');
          if (saved) {
            const parsed = JSON.parse(saved);
            setState({
              ...defaultState,
              ...parsed,
              preferences: { ...defaultState.preferences, ...(parsed.preferences || {}) },
              badges: parsed.badges || defaultBadges,
            });
          }
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [user]);

  // Save to Supabase or localStorage
  const saveProgress = useCallback(async (newState: ProgressState) => {
    if (user) {
      try {
        // Update user_progress
        await supabase
          .from('user_progress')
          .upsert({
            id: user.id,
            points: newState.points,
            level: newState.level,
            current_streak: newState.currentStreak,
            longest_streak: newState.longestStreak,
            streak_freeze_used: newState.streakFreezeUsed,
            last_login: newState.lastLogin,
            total_study_time: newState.totalStudyTime,
            last_study_date: newState.lastStudyDate,
            daily_progress: newState.dailyProgress,
            preferences: newState.preferences,
          });

        // Sync badges
        const earnedBadges = newState.badges.filter(b => b.earnedAt);
        if (earnedBadges.length > 0) {
          await supabase.from('badges').upsert(
            earnedBadges.map(badge => ({
              user_id: user.id,
              badge_id: badge.id,
              earned_at: badge.earnedAt,
            })),
            { onConflict: 'user_id,badge_id' }
          );
        }
      } catch (error) {
        console.error('Error saving progress to Supabase:', error);
      }
    } else {
      // Save to localStorage
      localStorage.setItem('chaldean-progress', JSON.stringify(newState));
    }
  }, [user]);

  // SM-2 Spaced Repetition Algorithm
  const calculateNextReview = useCallback((quality: number, review: WordReview): Partial<WordReview> => {
    let { easeFactor, interval, repetitions } = review;
    
    if (quality >= 3) {
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
    } else {
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

  const checkStreak = useCallback(async () => {
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
          newStreak = prev.currentStreak + 1;
          streakFreezeUsed = true;
        } else {
          newStreak = 1;
          streakFreezeUsed = false;
        }
      }

      const longestStreak = Math.max(prev.longestStreak, newStreak);
      const updatedBadges = [...prev.badges];
      
      if (newStreak >= 7) {
        const badge = updatedBadges.find(b => b.id === 'week-streak');
        if (badge && !badge.earnedAt) {
          badge.earnedAt = new Date().toISOString();
          if (user) {
            supabase.from('badges').upsert({
              user_id: user.id,
              badge_id: badge.id,
              earned_at: badge.earnedAt,
            });
          }
        }
      }
      if (newStreak >= 30) {
        const badge = updatedBadges.find(b => b.id === 'month-streak');
        if (badge && !badge.earnedAt) {
          badge.earnedAt = new Date().toISOString();
          if (user) {
            supabase.from('badges').upsert({
              user_id: user.id,
              badge_id: badge.id,
              earned_at: badge.earnedAt,
            });
          }
        }
      }

      const newState = {
        ...prev,
        currentStreak: newStreak,
        longestStreak,
        lastLogin: today,
        streakFreezeUsed,
        badges: updatedBadges,
      };
      
      saveProgress(newState);
      return newState;
    });
  }, [user, saveProgress]);

  useEffect(() => {
    if (!loading) {
      checkStreak();
    }
  }, [loading, checkStreak]);

  const addPoints = useCallback(async (amount: number) => {
    setState(prev => {
      const newPoints = prev.points + amount;
      const newLevel = Math.floor(newPoints / 1000) + 1;
      const newState = { ...prev, points: newPoints, level: newLevel };
      saveProgress(newState);
      return newState;
    });
  }, [saveProgress]);

  const completeLesson = useCallback(async (lessonId: number) => {
    setState(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      
      const today = new Date().toDateString();
      const dailyProgress = prev.lastStudyDate === today ? prev.dailyProgress + 1 : 1;
      
      const updatedBadges = [...prev.badges];
      const firstLesson = updatedBadges.find(b => b.id === 'first-lesson');
      if (firstLesson && !firstLesson.earnedAt) {
        firstLesson.earnedAt = new Date().toISOString();
        if (user) {
          supabase.from('badges').upsert({
            user_id: user.id,
            badge_id: firstLesson.id,
            earned_at: firstLesson.earnedAt,
          });
        }
      }
      
      const newState = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        dailyProgress,
        lastStudyDate: today,
        badges: updatedBadges,
      };

      if (user) {
        supabase.from('completed_lessons').insert({
          user_id: user.id,
          lesson_id: lessonId,
        });
      }
      
      saveProgress(newState);
      return newState;
    });
  }, [user, saveProgress]);

  const addWordToReview = useCallback(async (wordId: string) => {
    setState(prev => {
      if (prev.wordsLearned.includes(wordId)) return prev;
      
      const updatedBadges = [...prev.badges];
      const newWordsLearned = [...prev.wordsLearned, wordId];
      
      if (newWordsLearned.length >= 100) {
        const badge = updatedBadges.find(b => b.id === 'hundred-words');
        if (badge && !badge.earnedAt) {
          badge.earnedAt = new Date().toISOString();
          if (user) {
            supabase.from('badges').upsert({
              user_id: user.id,
              badge_id: badge.id,
              earned_at: badge.earnedAt,
            });
          }
        }
      }
      
      const nextReview = new Date();
      nextReview.setDate(nextReview.getDate() + 1);
      
      const newReview: WordReview = {
        wordId,
        lastReviewed: new Date().toISOString(),
        nextReview: nextReview.toISOString(),
        easeFactor: 2.5,
        interval: 1,
        repetitions: 0,
        correctCount: 0,
        incorrectCount: 0,
      };

      if (user) {
        supabase.from('words_learned').insert({ user_id: user.id, word_id: wordId });
        supabase.from('word_reviews').upsert({
          user_id: user.id,
          word_id: wordId,
          last_reviewed: newReview.lastReviewed,
          next_review: newReview.nextReview,
          ease_factor: newReview.easeFactor,
          interval_days: newReview.interval,
          repetitions: newReview.repetitions,
          correct_count: newReview.correctCount,
          incorrect_count: newReview.incorrectCount,
        });
      }
      
      const newState = {
        ...prev,
        wordsLearned: newWordsLearned,
        wordReviews: {
          ...prev.wordReviews,
          [wordId]: newReview,
        },
        badges: updatedBadges,
      };
      
      saveProgress(newState);
      return newState;
    });
  }, [user, saveProgress]);

  const updateWordReview = useCallback(async (wordId: string, quality: number) => {
    setState(prev => {
      const review = prev.wordReviews[wordId];
      if (!review) return prev;
      
      const updates = calculateNextReview(quality, review);
      const updatedReview = {
        ...review,
        ...updates,
        correctCount: quality >= 3 ? review.correctCount + 1 : review.correctCount,
        incorrectCount: quality < 3 ? review.incorrectCount + 1 : review.incorrectCount,
      };

      if (user) {
        supabase.from('word_reviews').upsert({
          user_id: user.id,
          word_id: wordId,
          last_reviewed: updatedReview.lastReviewed,
          next_review: updatedReview.nextReview,
          ease_factor: updatedReview.easeFactor,
          interval_days: updatedReview.interval,
          repetitions: updatedReview.repetitions,
          correct_count: updatedReview.correctCount,
          incorrect_count: updatedReview.incorrectCount,
        });
      }
      
      const newState = {
        ...prev,
        wordReviews: {
          ...prev.wordReviews,
          [wordId]: updatedReview,
        },
      };
      
      saveProgress(newState);
      return newState;
    });
  }, [user, calculateNextReview, saveProgress]);

  const toggleFavorite = useCallback(async (wordId: string) => {
    setState(prev => {
      const isFav = prev.favorites.some(f => f.wordId === wordId);
      
      if (user) {
        if (isFav) {
          supabase.from('favorite_words').delete().eq('user_id', user.id).eq('word_id', wordId);
        } else {
          supabase.from('favorite_words').insert({
            user_id: user.id,
            word_id: wordId,
          });
        }
      }
      
      const newState = isFav
        ? {
            ...prev,
            favorites: prev.favorites.filter(f => f.wordId !== wordId),
          }
        : {
            ...prev,
            favorites: [...prev.favorites, { wordId, addedAt: new Date().toISOString() }],
          };
      
      saveProgress(newState);
      return newState;
    });
  }, [user, saveProgress]);

  const isFavorite = useCallback((wordId: string) => {
    return state.favorites.some(f => f.wordId === wordId);
  }, [state.favorites]);

  const addIncorrectAnswer = useCallback(async (answer: IncorrectAnswer) => {
    setState(prev => {
      const newState = {
        ...prev,
        incorrectAnswers: [...prev.incorrectAnswers, answer],
      };

      if (user) {
        supabase.from('incorrect_answers').insert({
          user_id: user.id,
          lesson_id: answer.lessonId,
          question_id: answer.questionId,
          question: answer.question,
          user_answer: answer.userAnswer,
          correct_answer: answer.correctAnswer,
          timestamp: answer.timestamp,
        });
      }
      
      saveProgress(newState);
      return newState;
    });
  }, [user, saveProgress]);

  const clearIncorrectAnswers = useCallback(async () => {
    setState(prev => {
      const newState = {
        ...prev,
        incorrectAnswers: [],
      };

      if (user) {
        supabase.from('incorrect_answers').delete().eq('user_id', user.id);
      }
      
      saveProgress(newState);
      return newState;
    });
  }, [user, saveProgress]);

  const updatePreferences = useCallback(async (prefs: Partial<UserPreferences>) => {
    setState(prev => {
      const newState = {
        ...prev,
        preferences: { ...prev.preferences, ...prefs },
      };
      saveProgress(newState);
      return newState;
    });
  }, [saveProgress]);

  const addStudyTime = useCallback(async (minutes: number) => {
    setState(prev => {
      const newState = {
        ...prev,
        totalStudyTime: prev.totalStudyTime + minutes,
      };
      saveProgress(newState);
      return newState;
    });
  }, [saveProgress]);

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
      const newState = {
        ...defaultState,
        ...parsed,
        preferences: { ...defaultState.preferences, ...(parsed.preferences || {}) },
      };
      setState(newState);
      saveProgress(newState);
    } catch (error) {
      console.error('Failed to import progress:', error);
      alert('Failed to import progress. Invalid data format.');
    }
  }, [saveProgress]);

  const resetProgress = useCallback(async () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      if (user) {
        await Promise.all([
          supabase.from('completed_lessons').delete().eq('user_id', user.id),
          supabase.from('words_learned').delete().eq('user_id', user.id),
          supabase.from('word_reviews').delete().eq('user_id', user.id),
          supabase.from('favorite_words').delete().eq('user_id', user.id),
          supabase.from('incorrect_answers').delete().eq('user_id', user.id),
          supabase.from('badges').delete().eq('user_id', user.id),
          supabase.from('user_progress').update({
            points: 0,
            level: 1,
            current_streak: 0,
            longest_streak: 0,
            streak_freeze_used: false,
            last_login: null,
            total_study_time: 0,
            last_study_date: null,
            daily_progress: 0,
            preferences: defaultState.preferences,
          }).eq('id', user.id),
        ]);
      } else {
        localStorage.removeItem('chaldean-progress');
      }
      setState(defaultState);
    }
  }, [user]);

  const value = useMemo(() => ({
    ...state,
    loading,
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
    loading,
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
