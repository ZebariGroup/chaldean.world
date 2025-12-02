// Speech synthesis utilities with better voice selection

export interface VoiceOption {
  voice: SpeechSynthesisVoice;
  name: string;
  lang: string;
}

// Cache for voices
let cachedVoices: SpeechSynthesisVoice[] = [];

const FEMALE_HINTS = [
  'female',
  'woman',
  'lady',
  'laila',
  'layla',
  'leila',
  'lila',
  'hoda',
  'zahra',
  'salma',
  'dalia',
  'zeina',
  'zeinah',
  'zainab',
  'amira',
  'farah',
  'sahar',
  'rana',
  'dana',
  'dima',
  'asma',
  'sara',
  'lina',
  'zariyah',
  'maha'
].map((hint) => hint.toLowerCase());

const MALE_HINTS = [
  'male',
  'man',
  'maged',
  'naayf',
  'naif',
  'tarik',
  'khaled',
  'omar',
  'ahmed',
  'ali',
  'hamid',
  'ibrahim',
  'hazem',
  'youssef'
].map((hint) => hint.toLowerCase());

const PREMIUM_HINTS = ['google', 'enhanced', 'premium', 'natural', 'studio', 'neural', 'ai'];

const isArabicVoice = (voice: SpeechSynthesisVoice) => {
  const lang = voice.lang?.toLowerCase() ?? '';
  const name = voice.name?.toLowerCase() ?? '';
  return lang.startsWith('ar') || name.includes('arabic');
};

const scoreVoice = (voice: SpeechSynthesisVoice): number => {
  const name = voice.name?.toLowerCase() ?? '';
  const lang = voice.lang?.toLowerCase() ?? '';
  let score = 0;

  if (lang.startsWith('ar')) score += 50;
  if (name.includes('arabic')) score += 15;

  if (PREMIUM_HINTS.some((hint) => name.includes(hint))) score += 40;
  if (FEMALE_HINTS.some((hint) => name.includes(hint))) score += 60;
  if (MALE_HINTS.some((hint) => name.includes(hint))) score -= 60;

  // Google voices are consistently natural on Android and ChromeOS
  if (name.includes('google')) score += 100;

  return score;
};

// Load and cache voices
const loadVoices = (): SpeechSynthesisVoice[] => {
  if (!window.speechSynthesis) return [];
  cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
};

// Get all available Arabic voices
export const getArabicVoices = (): VoiceOption[] => {
  if (!window.speechSynthesis) return [];

  const voices = loadVoices();

  const arabicVoices = voices
    .filter(isArabicVoice)
    .map((voice) => ({
      voice,
      name: voice.name,
      lang: voice.lang,
    }))
    .sort((a, b) => scoreVoice(b.voice) - scoreVoice(a.voice));

  return arabicVoices;
};

// Get the best Arabic voice available
export const getBestArabicVoice = (): SpeechSynthesisVoice | null => {
  const allVoices = loadVoices();
  
  console.log('Available voices:', allVoices.map(v => `${v.name} (${v.lang})`));
  
  const arabicVoices = allVoices.filter(isArabicVoice);
  if (arabicVoices.length) {
    const ranked = arabicVoices
      .map((voice) => ({ voice, score: scoreVoice(voice) }))
      .sort((a, b) => b.score - a.score);
    
    const best = ranked[0]?.voice;
    if (best) {
      console.log('Selected best Arabic voice:', best.name);
      return best;
    }
  }

  // Last resort: pick whatever is available to avoid silence
  console.log('No Arabic voice found, using default');
  return allVoices[0] || null;
};

// Speak text with best available voice
export const speak = (text: string, options?: {
  rate?: number;
  pitch?: number;
  volume?: number;
  onEnd?: () => void;
  onError?: (error: any) => void;
}) => {
  if (!window.speechSynthesis) {
    console.warn('Speech synthesis not supported');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Function to actually speak
  const doSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Check for user's saved preference first
    const savedVoiceName = localStorage.getItem('chaldean-preferred-voice');
    const allVoices = loadVoices();
    
    let voice: SpeechSynthesisVoice | null = null;
    
    if (savedVoiceName) {
      voice = allVoices.find(v => v.name === savedVoiceName) || null;
    }
    
    if (!voice) {
      voice = getBestArabicVoice();
    }
    
    if (voice) {
      utterance.voice = voice;
      console.log('Speaking with voice:', voice.name);
    }
    
    // Set voice parameters
    utterance.lang = 'ar-SA';
    utterance.rate = options?.rate ?? 0.85;
    utterance.pitch = options?.pitch ?? 1.1; // Slightly higher pitch for female sound
    utterance.volume = options?.volume ?? 1.0;
    
    if (options?.onEnd) utterance.onend = options.onEnd;
    if (options?.onError) utterance.onerror = options.onError;
    
    window.speechSynthesis.speak(utterance);
  };

  // Ensure voices are loaded before speaking
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) {
    // Wait for voices to load
    window.speechSynthesis.addEventListener('voiceschanged', function handler() {
      window.speechSynthesis.removeEventListener('voiceschanged', handler);
      doSpeak();
    });
    // Fallback timeout
    setTimeout(doSpeak, 100);
  } else {
    doSpeak();
  }
};

// Initialize voices (needed for some browsers)
export const initializeVoices = (): Promise<void> => {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) {
      resolve();
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve();
      return;
    }

    // Wait for voices to load
    const voicesChangedHandler = () => {
      window.speechSynthesis.removeEventListener('voiceschanged', voicesChangedHandler);
      resolve();
    };
    
    window.speechSynthesis.addEventListener('voiceschanged', voicesChangedHandler);
    
    // Fallback timeout
    setTimeout(() => {
      window.speechSynthesis.removeEventListener('voiceschanged', voicesChangedHandler);
      resolve();
    }, 1000);
  });
};

// Save selected voice to preferences
export const savePreferredVoice = (voiceName: string) => {
  localStorage.setItem('chaldean-preferred-voice', voiceName);
};

// Get saved voice preference
export const getPreferredVoice = (): SpeechSynthesisVoice | null => {
  const savedVoiceName = localStorage.getItem('chaldean-preferred-voice');
  if (!savedVoiceName) return getBestArabicVoice();
  
  const voices = window.speechSynthesis.getVoices();
  const savedVoice = voices.find(v => v.name === savedVoiceName);
  
  return savedVoice || getBestArabicVoice();
};

