import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { DictionaryEntry } from '../data/dictionary';

export function useDictionary() {
  const [dictionary, setDictionary] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchDictionary();
  }, []);

  async function fetchDictionary() {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('dictionary')
        .select('*')
        .order('word', { ascending: true });

      if (fetchError) throw fetchError;

      setDictionary(data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching dictionary:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  async function addWord(entry: Omit<DictionaryEntry, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('dictionary')
      .insert([entry])
      .select()
      .single();

    if (error) throw error;
    
    await fetchDictionary(); // Refresh
    return data;
  }

  async function updateWord(id: string, updates: Partial<DictionaryEntry>) {
    const { data, error } = await supabase
      .from('dictionary')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    
    await fetchDictionary(); // Refresh
    return data;
  }

  async function deleteWord(id: string) {
    const { error } = await supabase
      .from('dictionary')
      .delete()
      .eq('id', id);

    if (error) throw error;
    
    await fetchDictionary(); // Refresh
  }

  return {
    dictionary,
    loading,
    error,
    refetch: fetchDictionary,
    addWord,
    updateWord,
    deleteWord,
  };
}

