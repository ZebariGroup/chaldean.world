export interface DictionaryEntry {
  word: string;
  translation: string;
  phonetic: string;
  category: 'greeting' | 'noun' | 'verb' | 'adjective' | 'phrase' | 'number' | 'food' | 'family' | 'color' | 'time' | 'place';
}

export const dictionaryData: DictionaryEntry[] = [
  // Greetings
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", category: "greeting" },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", category: "greeting" },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", category: "greeting" },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", category: "greeting" },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", category: "greeting" },
  
  // Common Phrases
  { word: "Basima", translation: "Thank you (to a male) / Good (masc)", phonetic: "Ba-si-ma", category: "phrase" },
  { word: "Basimta", translation: "Thank you (to a female) / Good (fem)", phonetic: "Ba-sim-ta", category: "phrase" },
  { word: "Min d'yokh", translation: "Please (lit. from your hand)", phonetic: "Min d-yokh", category: "phrase" },
  { word: "Tawdi", translation: "Thank you", phonetic: "Taw-di", category: "phrase" },
  { word: "Eo", translation: "Yes", phonetic: "Eo", category: "phrase" },
  { word: "La", translation: "No", phonetic: "La", category: "phrase" },
  
  // Adjectives
  { word: "Spay", translation: "Good", phonetic: "Spay", category: "adjective" },
  { word: "Raba", translation: "Much / Very", phonetic: "Ra-ba", category: "adjective" },
  { word: "Shapira", translation: "Beautiful (masc)", phonetic: "Sha-pi-ra", category: "adjective" },
  { word: "Shapirta", translation: "Beautiful (fem)", phonetic: "Sha-pir-ta", category: "adjective" },
  { word: "Smoqa", translation: "Red", phonetic: "Smo-qa", category: "color" },
  { word: "Khawra", translation: "Blue / White (dialect dependent, often Khwara is white)", phonetic: "Khaw-ra", category: "color" },
  { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka", category: "color" },
  { word: "Spera", translation: "Yellow", phonetic: "Spe-ra", category: "color" },
  { word: "Ukma", translation: "Black", phonetic: "Uk-ma", category: "color" },
  { word: "Khwara", translation: "White", phonetic: "Khwa-ra", category: "color" },

  // Family
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", category: "family" },
  { word: "Abba", translation: "Father (Formal)", phonetic: "Ab-ba", category: "family" },
  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", category: "family" },
  { word: "Imma", translation: "Mother (Formal)", phonetic: "Im-ma", category: "family" },
  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", category: "family" },
  { word: "Akh", translation: "Brother", phonetic: "Akh", category: "family" },
  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", category: "family" },
  { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", category: "family" },
  { word: "Sawtha", translation: "Grandmother", phonetic: "Saw-tha", category: "family" },
  { word: "Amma", translation: "Uncle (Paternal)", phonetic: "Am-ma", category: "family" },
  { word: "Khala", translation: "Uncle (Maternal)", phonetic: "Kha-la", category: "family" },
  { word: "Bra", translation: "Son", phonetic: "Bra", category: "family" },
  { word: "Brata", translation: "Daughter", phonetic: "Bra-ta", category: "family" },

  // Food & Drink
  { word: "Mya", translation: "Water", phonetic: "M-ya", category: "food" },
  { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", category: "food" },
  { word: "Bisra", translation: "Meat", phonetic: "Bis-ra", category: "food" },
  { word: "Guptha", translation: "Cheese", phonetic: "Gup-tha", category: "food" },
  { word: "Be'ay", translation: "Eggs", phonetic: "Be-ay", category: "food" },
  { word: "Chai", translation: "Tea", phonetic: "Chai", category: "food" },
  { word: "Qahwa", translation: "Coffee", phonetic: "Qah-wa", category: "food" },
  { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha", category: "food" },

  // Nouns & Objects
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", category: "noun" },
  { word: "Bayta", translation: "House", phonetic: "Bay-ta", category: "noun" },
  { word: "Sayara", translation: "Car", phonetic: "Sa-ya-ra", category: "noun" },
  { word: "Ktawa", translation: "Book", phonetic: "Kta-wa", category: "noun" },
  { word: "Qalama", translation: "Pen", phonetic: "Qa-la-ma", category: "noun" },
  { word: "Pata", translation: "Table/Face", phonetic: "Pa-ta", category: "noun" },
  { word: "Kursa", translation: "Chair", phonetic: "Kur-sa", category: "noun" },
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
  { word: "Azil", translation: "To Go", phonetic: "A-zil", category: "verb" },
  { word: "Athi", translation: "To Come", phonetic: "A-thi", category: "verb" },

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

  // Time
  { word: "Yoma", translation: "Day", phonetic: "Yo-ma", category: "time" },
  { word: "Lelya", translation: "Night", phonetic: "Lel-ya", category: "time" },
  { word: "Idyo", translation: "Today", phonetic: "Id-yo", category: "time" },
  { word: "Timmal", translation: "Yesterday", phonetic: "Tim-mal", category: "time" },
  { word: "Qam", translation: "Tomorrow", phonetic: "Qam", category: "time" },
  { word: "Shabta", translation: "Saturday / Week", phonetic: "Shab-ta", category: "time" },
];
