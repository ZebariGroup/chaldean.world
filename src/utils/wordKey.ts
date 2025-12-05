import { DictionaryEntry } from '../data/dictionary';

const normalize = (value?: string) => (value || '').trim();

// Build a stable identifier for a dictionary entry to tie Supabase records to words
export const buildWordKey = (
  entry: Pick<DictionaryEntry, 'word' | 'translation' | 'script'>
) => {
  const parts = [normalize(entry.word), normalize(entry.translation), normalize(entry.script)];
  return parts.filter(Boolean).join(' | ');
};

// Create a storage-safe path segment from a word key
export const encodeWordKeyForPath = (wordKey: string) =>
  encodeURIComponent(wordKey).replace(/%20/g, '+');

