export interface DictionaryEntry {
  word: string;
  translation: string;
  phonetic: string;
  category: 'greeting' | 'noun' | 'adjective' | 'phrase' | 'number';
}

export const dictionaryData: DictionaryEntry[] = [
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", category: "greeting" },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", category: "greeting" },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", category: "greeting" },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", category: "greeting" },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", category: "greeting" },
  { word: "Spay", translation: "Good", phonetic: "Spay", category: "adjective" },
  { word: "Basima", translation: "Thank you (to a male)", phonetic: "Ba-si-ma", category: "phrase" },
  { word: "Basimta", translation: "Thank you (to a female)", phonetic: "Ba-sim-ta", category: "phrase" },
  { word: "Raba", translation: "Much / Very", phonetic: "Ra-ba", category: "adjective" },
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", category: "noun" },
  { word: "Bayta", translation: "House", phonetic: "Bay-ta", category: "noun" },
  { word: "Mya", translation: "Water", phonetic: "M-ya", category: "noun" },
  { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", category: "noun" },
  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", category: "noun" },
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", category: "noun" },
  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", category: "noun" },
  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", category: "noun" },
  { word: "Kha", translation: "One", phonetic: "Kha", category: "number" },
  { word: "Tre", translation: "Two", phonetic: "Tre", category: "number" },
  { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", category: "number" },
  { word: "Arba", translation: "Four", phonetic: "Ar-ba", category: "number" },
  { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", category: "number" },
];

