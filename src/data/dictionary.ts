export interface DictionaryEntry {
  word: string;
  translation: string;
  phonetic: string;
  category: 'greeting' | 'noun' | 'verb' | 'adjective' | 'phrase' | 'number' | 'food' | 'family';
}

export const dictionaryData: DictionaryEntry[] = [
  // Greetings
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", category: "greeting" },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", category: "greeting" },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", category: "greeting" },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", category: "greeting" },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", category: "greeting" },
  
  // Common Phrases
  { word: "Basima", translation: "Thank you (to a male)", phonetic: "Ba-si-ma", category: "phrase" },
  { word: "Basimta", translation: "Thank you (to a female)", phonetic: "Ba-sim-ta", category: "phrase" },
  { word: "Min d'yokh", translation: "Please (lit. from your hand)", phonetic: "Min d-yokh", category: "phrase" },
  
  // Adjectives
  { word: "Spay", translation: "Good", phonetic: "Spay", category: "adjective" },
  { word: "Raba", translation: "Much / Very", phonetic: "Ra-ba", category: "adjective" },
  { word: "Shapira", translation: "Beautiful (masc)", phonetic: "Sha-pi-ra", category: "adjective" },
  { word: "Shapirta", translation: "Beautiful (fem)", phonetic: "Sha-pir-ta", category: "adjective" },

  // Family
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", category: "family" },
  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", category: "family" },
  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", category: "family" },
  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", category: "family" },
  { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", category: "family" },
  { word: "Sawtha", translation: "Grandmother", phonetic: "Saw-tha", category: "family" },
  { word: "Amma", translation: "Uncle (Paternal)", phonetic: "Am-ma", category: "family" },
  { word: "Khala", translation: "Uncle (Maternal)", phonetic: "Kha-la", category: "family" },

  // Food & Drink
  { word: "Mya", translation: "Water", phonetic: "M-ya", category: "food" },
  { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", category: "food" },
  { word: "Bisra", translation: "Meat", phonetic: "Bis-ra", category: "food" },
  { word: "Guptha", translation: "Cheese", phonetic: "Gup-tha", category: "food" },
  { word: "Be'ay", translation: "Eggs", phonetic: "Be-ay", category: "food" },
  { word: "Chai", translation: "Tea", phonetic: "Chai", category: "food" },
  { word: "Qahwa", translation: "Coffee", phonetic: "Qah-wa", category: "food" },
  { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha", category: "food" },

  // Nouns
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", category: "noun" },
  { word: "Bayta", translation: "House", phonetic: "Bay-ta", category: "noun" },
  { word: "Itha", translation: "Hand", phonetic: "I-tha", category: "noun" },
  { word: "Reesha", translation: "Head", phonetic: "Ree-sha", category: "noun" },
  { word: "Libba", translation: "Heart", phonetic: "Lib-ba", category: "noun" },

  // Verbs (Infinitive/Root roughly)
  { word: "Akhal", translation: "To Eat", phonetic: "A-khal", category: "verb" },
  { word: "Shtay", translation: "To Drink", phonetic: "Sh-tay", category: "verb" },
  { word: "Dmikh", translation: "To Sleep", phonetic: "D-mikh", category: "verb" },
  { word: "Yithib", translation: "To Sit", phonetic: "Yi-thib", category: "verb" },
  { word: "Qim", translation: "To Rise/Stand", phonetic: "Qim", category: "verb" },
  { word: "Khazi", translation: "To See", phonetic: "Kha-zi", category: "verb" },
  { word: "Sheme", translation: "To Hear", phonetic: "She-me", category: "verb" },

  // Numbers
  { word: "Kha", translation: "One", phonetic: "Kha", category: "number" },
  { word: "Tre", translation: "Two", phonetic: "Tre", category: "number" },
  { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", category: "number" },
  { word: "Arba", translation: "Four", phonetic: "Ar-ba", category: "number" },
  { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", category: "number" },
  { word: "Ishta", translation: "Six", phonetic: "Ish-ta", category: "number" },
  { word: "Shwa", translation: "Seven", phonetic: "Shwa", category: "number" },
  { word: "Tmanya", translation: "Eight", phonetic: "Tman-ya", category: "number" },
  { word: "Tisha", translation: "Nine", phonetic: "Ti-sha", category: "number" },
  { word: "Asar", translation: "Ten", phonetic: "A-sar", category: "number" },
];
