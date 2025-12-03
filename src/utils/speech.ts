// Speech synthesis utilities - uses system default voice

// Speak text using system default voice
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
    
    // Use system default voice (browser will select appropriate voice based on lang)
    utterance.lang = 'ar-SA';
    utterance.rate = options?.rate ?? 0.85;
    utterance.pitch = options?.pitch ?? 1.0;
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

