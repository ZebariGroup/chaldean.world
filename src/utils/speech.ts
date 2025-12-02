// Speech synthesis utilities with better voice selection

export interface VoiceOption {
  voice: SpeechSynthesisVoice;
  name: string;
  lang: string;
}

// Cache for voices
let cachedVoices: SpeechSynthesisVoice[] = [];

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
    // Prefer female voices (check various indicators)
    const aFemale = a.name.toLowerCase().includes('female') || 
                    a.name.toLowerCase().includes('woman') ||
                    a.name.toLowerCase().includes('laila') ||
                    a.name.toLowerCase().includes('maged') === false;
    const bFemale = b.name.toLowerCase().includes('female') || 
                    b.name.toLowerCase().includes('woman') ||
                    b.name.toLowerCase().includes('laila') ||
                    b.name.toLowerCase().includes('maged') === false;
    if (aFemale && !bFemale) return -1;
    if (!aFemale && bFemale) return 1;
    
    // Prefer premium/enhanced voices
    const aPremium = a.name.toLowerCase().includes('enhanced') || 
                     a.name.toLowerCase().includes('premium') ||
                     a.name.toLowerCase().includes('google') ||
                     a.name.toLowerCase().includes('natural');
    const bPremium = b.name.toLowerCase().includes('enhanced') || 
                     b.name.toLowerCase().includes('premium') ||
                     b.name.toLowerCase().includes('google') ||
                     b.name.toLowerCase().includes('natural');
    if (aPremium && !bPremium) return -1;
    if (!aPremium && bPremium) return 1;
    
    return 0;
  });

  return arabicVoices;
};

// Get the best Arabic voice available
export const getBestArabicVoice = (): SpeechSynthesisVoice | null => {
  const allVoices = loadVoices();
  
  console.log('Available voices:', allVoices.map(v => `${v.name} (${v.lang})`));
  
  // Priority 1: Google Arabic (any - usually female and high quality)
  const googleArabic = allVoices.find(v => 
    v.name.toLowerCase().includes('google') && 
    v.lang.toLowerCase().startsWith('ar')
  );
  if (googleArabic) {
    console.log('Selected Google Arabic voice:', googleArabic.name);
    return googleArabic;
  }
  
  // Priority 2: Any voice with "female" in name and Arabic
  const femaleArabic = allVoices.find(v => 
    v.name.toLowerCase().includes('female') && 
    v.lang.toLowerCase().startsWith('ar')
  );
  if (femaleArabic) {
    console.log('Selected Female Arabic voice:', femaleArabic.name);
    return femaleArabic;
  }
  
  // Priority 3: Laila (common Arabic female voice name)
  const laila = allVoices.find(v => 
    v.name.toLowerCase().includes('laila') ||
    v.name.toLowerCase().includes('leila')
  );
  if (laila) {
    console.log('Selected Laila voice:', laila.name);
    return laila;
  }
  
  // Priority 4: Any Arabic voice that's NOT Maged (male voice)
  const nonMaleArabic = allVoices.find(v => 
    v.lang.toLowerCase().startsWith('ar') && 
    !v.name.toLowerCase().includes('maged')
  );
  if (nonMaleArabic) {
    console.log('Selected non-male Arabic voice:', nonMaleArabic.name);
    return nonMaleArabic;
  }
  
  // Priority 5: Any Arabic voice
  const anyArabic = allVoices.find(v => v.lang.toLowerCase().startsWith('ar'));
  if (anyArabic) {
    console.log('Selected any Arabic voice:', anyArabic.name);
    return anyArabic;
  }
  
  // Last resort
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

