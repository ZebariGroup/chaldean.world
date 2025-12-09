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
// Using encodeURIComponent is good, but some characters like |, +, etc might still cause issues if not handled
// or if used in S3 keys without proper encoding.
// Instead of full path encoding, let's hash the key or sanitize it more aggressively.
export const encodeWordKeyForPath = (wordKey: string) => {
  // Option 1: Simple sanitization (remove unsafe chars)
  // Keep alphanumeric, dashes, underscores. Replace everything else.
  // This is safer for file systems/S3 keys.
  // We can also append a short hash if collisions are a concern, but words are usually unique.
  return wordKey
    .replace(/[^a-zA-Z0-9-_]/g, '-') // Replace non-alphanumeric with dash
    .replace(/-+/g, '-')             // Collapse multiple dashes
    .replace(/^-|-$/g, '');          // Trim dashes
};
