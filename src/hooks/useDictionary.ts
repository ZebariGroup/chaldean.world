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
      let allData: DictionaryEntry[] = [];
      let from = 0;
      const limit = 1000; // Fetch in chunks to avoid API limits
      
      while (true) {
        const { data, error: fetchError } = await supabase
          .from('dictionary')
          .select('*')
          .order('word', { ascending: true })
          .range(from, from + limit - 1);

        if (fetchError) throw fetchError;
        
        if (!data || data.length === 0) break;
        
        allData = [...allData, ...data];
        
        // If we got fewer results than the limit, we've reached the end
        if (data.length < limit) break;
        
        from += limit;
      }

      setDictionary(allData);
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
