import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export interface LessonVocabulary {
  word: string;
  translation: string;
  phonetic: string;
  script?: string;
}

export interface LessonQuestion {
  id: number;
  type: 'multiple-choice' | 'translation';
  question: string;
  options?: string[];
  correctAnswer: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  level: string;
  xpReward: number;
  icon?: string;
  vocabulary: LessonVocabulary[];
  content: LessonQuestion[];
}

export function useLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchLessons();
  }, []);

  async function fetchLessons() {
    try {
      setLoading(true);
      
      // Fetch lessons with their vocabulary and questions
      const { data: lessonsData, error: lessonsError } = await supabase
        .from('lessons')
        .select('*')
        .order('display_order', { ascending: true });

      if (lessonsError) throw lessonsError;

      if (!lessonsData || lessonsData.length === 0) {
        setLessons([]);
        setLoading(false);
        return;
      }

      // Fetch vocabulary for all lessons
      const lessonIds = lessonsData.map(l => l.id);
      const { data: vocabularyData, error: vocabError } = await supabase
        .from('lesson_vocabulary')
        .select('lesson_id, display_order, dictionary_id')
        .in('lesson_id', lessonIds)
        .order('display_order', { ascending: true });

      if (vocabError) throw vocabError;

      // Fetch dictionary entries for vocabulary
      const dictionaryIds = [...new Set((vocabularyData || []).map((v: any) => v.dictionary_id))];
      const { data: dictionaryData, error: dictError } = await supabase
        .from('dictionary')
        .select('id, word, translation, phonetic, script')
        .in('id', dictionaryIds);

      if (dictError) throw dictError;

      const dictionaryMap = new Map((dictionaryData || []).map((d: any) => [d.id, d]));

      // Fetch questions for all lessons
      const { data: questionsData, error: questionsError } = await supabase
        .from('lesson_questions')
        .select('*')
        .in('lesson_id', lessonIds)
        .order('display_order', { ascending: true });

      if (questionsError) throw questionsError;

      // Group vocabulary by lesson_id
      const vocabularyByLesson: Record<number, LessonVocabulary[]> = {};
      (vocabularyData || []).forEach((item: any) => {
        const dict = dictionaryMap.get(item.dictionary_id);
        if (!dict) return;
        if (!vocabularyByLesson[item.lesson_id]) {
          vocabularyByLesson[item.lesson_id] = [];
        }
        vocabularyByLesson[item.lesson_id].push({
          word: dict.word,
          translation: dict.translation,
          phonetic: dict.phonetic,
          script: dict.script,
        });
      });

      // Group questions by lesson_id
      const questionsByLesson: Record<number, LessonQuestion[]> = {};
      (questionsData || []).forEach((item: any) => {
        if (!questionsByLesson[item.lesson_id]) {
          questionsByLesson[item.lesson_id] = [];
        }
        questionsByLesson[item.lesson_id].push({
          id: item.id,
          type: item.question_type,
          question: item.question,
          options: item.options || undefined,
          correctAnswer: item.correct_answer,
        });
      });

      // Combine everything
      const lessonsWithData: Lesson[] = lessonsData.map((lesson: any) => ({
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        level: lesson.level,
        xpReward: lesson.xp_reward,
        icon: lesson.icon,
        vocabulary: vocabularyByLesson[lesson.id] || [],
        content: questionsByLesson[lesson.id] || [],
      }));

      setLessons(lessonsWithData);
      setError(null);
    } catch (err) {
      console.error('Error fetching lessons:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchLessonById(id: number): Promise<Lesson | null> {
    try {
      const { data: lessonData, error: lessonError } = await supabase
        .from('lessons')
        .select('*')
        .eq('id', id)
        .single();

      if (lessonError) throw lessonError;
      if (!lessonData) return null;

      // Fetch vocabulary
      const { data: vocabularyData, error: vocabError } = await supabase
        .from('lesson_vocabulary')
        .select('display_order, dictionary_id')
        .eq('lesson_id', id)
        .order('display_order', { ascending: true });

      if (vocabError) throw vocabError;

      // Fetch dictionary entries
      const dictionaryIds = (vocabularyData || []).map((v: any) => v.dictionary_id);
      const { data: dictionaryData, error: dictError } = await supabase
        .from('dictionary')
        .select('id, word, translation, phonetic, script')
        .in('id', dictionaryIds);

      if (dictError) throw dictError;

      const dictionaryMap = new Map((dictionaryData || []).map((d: any) => [d.id, d]));

      // Fetch questions
      const { data: questionsData, error: questionsError } = await supabase
        .from('lesson_questions')
        .select('*')
        .eq('lesson_id', id)
        .order('display_order', { ascending: true });

      if (questionsError) throw questionsError;

      const vocabulary: LessonVocabulary[] = (vocabularyData || [])
        .map((item: any) => {
          const dict = dictionaryMap.get(item.dictionary_id);
          if (!dict) return null;
          return {
            word: dict.word,
            translation: dict.translation,
            phonetic: dict.phonetic,
            script: dict.script,
          };
        })
        .filter(Boolean) as LessonVocabulary[];

      const content: LessonQuestion[] = (questionsData || []).map((item: any) => ({
        id: item.id,
        type: item.question_type,
        question: item.question,
        options: item.options || undefined,
        correctAnswer: item.correct_answer,
      }));

      return {
        id: lessonData.id,
        title: lessonData.title,
        description: lessonData.description,
        level: lessonData.level,
        xpReward: lessonData.xp_reward,
        icon: lessonData.icon,
        vocabulary,
        content,
      };
    } catch (err) {
      console.error('Error fetching lesson:', err);
      return null;
    }
  }

  return {
    lessons,
    loading,
    error,
    refetch: fetchLessons,
    fetchLessonById,
  };
}

