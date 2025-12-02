// Speech synthesis utilities with better voice selection

export interface VoiceOption {
  voice: SpeechSynthesisVoice;
  name: string;
  lang: string;
}

// Get all available Arabic voices
export const getArabicVoices = (): VoiceOption[] => {
  if (!window.speechSynthesis) return [];
  
  const voices = window.speechSynthesis.getVoices();
  
  // Filter for Arabic voices and prioritize quality
  const arabicVoices = voices
    .filter(voice => 
      voice.lang.startsWith('ar') || 
      voice.lang.includes('AR') ||
      voice.name.toLowerCase().includes('arabic')
    )
    .map(voice => ({
      voice,
      name: voice.name,
      lang: voice.lang
    }));

  // Sort by preference: female voices first, then by quality indicators
  arabicVoices.sort((a, b) => {
    // Prefer female voices
    const aFemale = a.name.toLowerCase().includes('female') || a.name.toLowerCase().includes('woman');
    const bFemale = b.name.toLowerCase().includes('female') || b.name.toLowerCase().includes('woman');
    if (aFemale && !bFemale) return -1;
    if (!aFemale && bFemale) return 1;
    
    // Prefer premium/enhanced voices
    const aPremium = a.name.toLowerCase().includes('enhanced') || 
                     a.name.toLowerCase().includes('premium') ||
                     a.name.toLowerCase().includes('google');
    const bPremium = b.name.toLowerCase().includes('enhanced') || 
                     b.name.toLowerCase().includes('premium') ||
                     b.name.toLowerCase().includes('google');
    if (aPremium && !bPremium) return -1;
    if (!aPremium && bPremium) return 1;
    
    return 0;
  });

  return arabicVoices;
};

// Get the best Arabic voice available
export const getBestArabicVoice = (): SpeechSynthesisVoice | null => {
  const allVoices = window.speechSynthesis.getVoices();
  
  // First priority: Google Arabic Female (exact match)
  let googleFemale = allVoices.find(v => 
    v.name.toLowerCase().includes('google') && 
    v.name.toLowerCase().includes('arabic') && 
    v.name.toLowerCase().includes('female')
  );
  
  if (googleFemale) return googleFemale;
  
  // Second priority: Any Google Arabic voice
  let googleArabic = allVoices.find(v => 
    v.name.toLowerCase().includes('google') && 
    (v.name.toLowerCase().includes('arabic') || v.lang.toLowerCase().includes('ar'))
  );
  
  if (googleArabic) return googleArabic;
  
  // Third priority: Use sorted list from getArabicVoices
  const voices = getArabicVoices();
  
  if (voices.length === 0) {
    // Fallback to any voice that might work
    const fallback = allVoices.find(v => v.lang.toLowerCase().includes('ar'));
    if (fallback) return fallback;
    
    // Last resort: use default voice
    return allVoices[0] || null;
  }
  
  // Return the first (best) voice from sorted list
  return voices[0].voice;
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

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Get the best voice
  const voice = getBestArabicVoice();
  if (voice) {
    utterance.voice = voice;
  }
  
  // Set voice parameters
  utterance.lang = 'ar-SA'; // Saudi Arabic
  utterance.rate = options?.rate ?? 0.85; // Slightly slower for clarity
  utterance.pitch = options?.pitch ?? 1.0;
  utterance.volume = options?.volume ?? 1.0;
  
  // Event handlers
  if (options?.onEnd) {
    utterance.onend = options.onEnd;
  }
  
  if (options?.onError) {
    utterance.onerror = options.onError;
  }
  
  // Speak with a small delay to ensure voice is loaded
  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 50);
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

