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
      setDictionary([]); // Clear existing data on refetch
      
      let from = 0;
      const limit = 1000; // Fetch in chunks
      
      while (true) {
        const { data, error: fetchError } = await supabase
          .from('dictionary')
          .select('*')
          .order('word', { ascending: true })
          .range(from, from + limit - 1);

        if (fetchError) throw fetchError;
        
        if (!data || data.length === 0) break;
        
        // Progressive update: append new chunk to state immediately
        setDictionary(prev => [...prev, ...data]);
        
        // If we got fewer results than the limit, we've reached the end
        if (data.length < limit) break;
        
        from += limit;
      }

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
    
    // Optimistic update or refetch
    // Refetching entire dictionary is expensive now. 
    // Better to append locally.
    setDictionary(prev => [...prev, data].sort((a, b) => a.word.localeCompare(b.word)));
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
    
    // Local update
    setDictionary(prev => prev.map(item => item.id === id ? data : item));
    return data;
  }

  async function deleteWord(id: string) {
    const { error } = await supabase
      .from('dictionary')
      .delete()
      .eq('id', id);

    if (error) throw error;
    
    // Local delete
    setDictionary(prev => prev.filter(item => item.id !== id));
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
