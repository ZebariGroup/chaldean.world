import { supabase } from '../lib/supabase';
import { buildWordKey } from './wordKey';
import { DictionaryEntry } from '../data/dictionary';

// Define the type for the callback that opens the modal
type OpenModalCallback = (entry: DictionaryEntry) => void;

/**
 * Handles playing audio for a word.
 * 
 * Logic:
 * 1. Check for approved native recordings in Supabase.
 * 2. If 0 recordings: Use TTS (speakWord).
 * 3. If 1 recording: Play that recording directly.
 * 4. If > 1 recording: Open the PronunciationModal to let the user choose.
 */
export async function playWordAudio(
  entry: DictionaryEntry, 
  openModalCallback?: OpenModalCallback,
  skipTTS: boolean = false
) {
  try {
    const wordKey = buildWordKey(entry);
    
    // Fetch approved recordings
    const { data, error } = await supabase
      .from('word_pronunciations')
      .select('audio_path')
      .eq('word_key', wordKey)
      .eq('status', 'approved');

    if (error) {
      console.error('Error fetching pronunciations:', error);
      // Fallback to TTS on error
      if (!skipTTS) {
        import('./speech').then(({ speak }) => speak(entry.word));
      }
      return;
    }

    const recordings = data || [];

    if (recordings.length === 0) {
      // No recordings -> TTS
      if (!skipTTS) {
        import('./speech').then(({ speak }) => speak(entry.word));
      }
    } else if (recordings.length === 1) {
      // One recording -> Play it directly
      const { data: publicUrlData } = supabase.storage
        .from('pronunciations')
        .getPublicUrl(recordings[0].audio_path);
      
      const audio = new Audio(publicUrlData.publicUrl);
      audio.play().catch(e => console.error('Audio playback failed', e));
    } else {
      // Multiple recordings -> Open modal if callback provided, otherwise play first
      if (openModalCallback) {
        openModalCallback(entry);
      } else {
        // Fallback if no modal callback provided (e.g. game mode?)
        // Just play the first one or random one?
        // Let's play the first one for consistency if modal can't be opened
        const { data: publicUrlData } = supabase.storage
          .from('pronunciations')
          .getPublicUrl(recordings[0].audio_path);
        
        const audio = new Audio(publicUrlData.publicUrl);
        audio.play().catch(e => console.error('Audio playback failed', e));
      }
    }
  } catch (err) {
    console.error('Unexpected error in playWordAudio:', err);
    if (!skipTTS) {
      import('./speech').then(({ speak }) => speak(entry.word));
    }
  }
}

