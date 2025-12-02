export interface DictionaryEntry {
  word: string;
  translation: string;
  phonetic: string;
  script: string;
  category: 'greeting' | 'noun' | 'verb' | 'adjective' | 'phrase' | 'number' | 'food' | 'family' | 'color' | 'time' | 'place' | 'animal' | 'nature' | 'body' | 'home' | 'profession' | 'clothing';
}

export const dictionaryData: DictionaryEntry[] = [
  // Greetings
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", script: "ܫܠܡܐ", category: "greeting" },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", script: "ܫܠܡܐ ܠܘܟ", category: "greeting" },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", script: "ܫܠܡܐ ܠܟ", category: "greeting" },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", script: "ܒܫܝܢܐ", category: "greeting" },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", script: "ܕܐܟ݂ܝ ܘܬ", category: "greeting" },
  
  // Common Phrases
  { word: "Basima", translation: "Thank you (to a male) / Good (masc)", phonetic: "Ba-si-ma", script: "ܒܣܝܡܐ", category: "phrase" },
  { word: "Basimta", translation: "Thank you (to a female) / Good (fem)", phonetic: "Ba-sim-ta", script: "ܒܣܝܡܬܐ", category: "phrase" },
  { word: "Min d'yokh", translation: "Please (lit. from your hand)", phonetic: "Min d-yokh", script: "ܡܢ ܕܝܘܟ", category: "phrase" },
  { word: "Tawdi", translation: "Thank you", phonetic: "Taw-di", script: "ܬܘܕܝ", category: "phrase" },
  { word: "Eo", translation: "Yes", phonetic: "Eo", script: "ܐܝܢ", category: "phrase" },
  { word: "La", translation: "No", phonetic: "La", script: "ܠܐ", category: "phrase" },
  
  // Adjectives
  { word: "Spay", translation: "Good", phonetic: "Spay", script: "ܣܦܝ", category: "adjective" },
  { word: "Raba", translation: "Much / Very", phonetic: "Ra-ba", script: "ܪܒܐ", category: "adjective" },
  { word: "Shapira", translation: "Beautiful (masc)", phonetic: "Sha-pi-ra", script: "ܫܦܝܪܐ", category: "adjective" },
  { word: "Shapirta", translation: "Beautiful (fem)", phonetic: "Sha-pir-ta", script: "ܫܦܝܪܬܐ", category: "adjective" },
  { word: "Raba", translation: "Big", phonetic: "Ra-ba", script: "ܪܒܐ", category: "adjective" },
  { word: "Zora", translation: "Small", phonetic: "Zo-ra", script: "ܙܥܘܪܐ", category: "adjective" },
  { word: "Yarikha", translation: "Long", phonetic: "Ya-ri-kha", script: "ܝܪܝܟ݂ܐ", category: "adjective" },
  { word: "Krya", translation: "Short", phonetic: "Kry-a", script: "ܟܪܝܐ", category: "adjective" },
  { word: "Khatha", translation: "New", phonetic: "Kha-tha", script: "ܚܕܬܐ", category: "adjective" },
  { word: "Atiqa", translation: "Old", phonetic: "A-ti-qa", script: "ܥܬܝܩܐ", category: "adjective" },

  // Colors
  { word: "Smoqa", translation: "Red", phonetic: "Smo-qa", script: "ܣܡܘܩܐ", category: "color" },
  { word: "Khawra", translation: "Blue", phonetic: "Khaw-ra", script: "ܟܘܪܐ", category: "color" },
  { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka", script: "ܝܪܘܩܐ", category: "color" },
  { word: "Spera", translation: "Yellow", phonetic: "Spe-ra", script: "ܣܦܝܪܐ", category: "color" },
  { word: "Ukma", translation: "Black", phonetic: "Uk-ma", script: "ܐܘܟܡܐ", category: "color" },
  { word: "Khwara", translation: "White", phonetic: "Khwa-ra", script: "ܚܘܪܐ", category: "color" },

  // Family
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", script: "ܒܒܐ", category: "family" },
  { word: "Abba", translation: "Father (Formal)", phonetic: "Ab-ba", script: "ܐܒܐ", category: "family" },
  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", script: "ܝܡܐ", category: "family" },
  { word: "Imma", translation: "Mother (Formal)", phonetic: "Im-ma", script: "ܐܡܐ", category: "family" },
  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", script: "ܐܚܘܢܐ", category: "family" },
  { word: "Akh", translation: "Brother", phonetic: "Akh", script: "ܐܚܐ", category: "family" },
  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", script: "ܚܬܐ", category: "family" },
  { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", script: "ܣܒܐ", category: "family" },
  { word: "Sawtha", translation: "Grandmother", phonetic: "Saw-tha", script: "ܣܒܬܐ", category: "family" },
  { word: "Amma", translation: "Uncle (Paternal)", phonetic: "Am-ma", script: "ܥܡܐ", category: "family" },
  { word: "Khala", translation: "Uncle (Maternal)", phonetic: "Kha-la", script: "ܚܠܐ", category: "family" },
  { word: "Bra", translation: "Son", phonetic: "Bra", script: "ܒܪܐ", category: "family" },
  { word: "Brata", translation: "Daughter", phonetic: "Bra-ta", script: "ܒܪܬܐ", category: "family" },

  // Food & Drink
  { word: "Mya", translation: "Water", phonetic: "M-ya", script: "ܡܝܐ", category: "food" },
  { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", script: "ܠܚܡܐ", category: "food" },
  { word: "Bisra", translation: "Meat", phonetic: "Bis-ra", script: "ܒܣܪܐ", category: "food" },
  { word: "Guptha", translation: "Cheese", phonetic: "Gup-tha", script: "ܓܘܒܬܐ", category: "food" },
  { word: "Be'ay", translation: "Eggs", phonetic: "Be-ay", script: "ܒܝܥܐ", category: "food" },
  { word: "Chai", translation: "Tea", phonetic: "Chai", script: "ܟܐܝ", category: "food" },
  { word: "Qahwa", translation: "Coffee", phonetic: "Qah-wa", script: "ܩܗܘܐ", category: "food" },
  { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha", script: "ܬܦܘܚܐ", category: "food" },
  { word: "Pishra", translation: "Fish", phonetic: "Pish-ra", script: "ܦܫܪܐ", category: "food" },
  { word: "Khala", translation: "Milk", phonetic: "Kha-la", script: "ܚܠܒܐ", category: "food" },

  // Nouns & Objects
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", script: "ܐܠܗܐ", category: "noun" },
  { word: "Bayta", translation: "House", phonetic: "Bay-ta", script: "ܒܝܬܐ", category: "noun" },
  { word: "Sayara", translation: "Car", phonetic: "Sa-ya-ra", script: "ܣܝܪܐ", category: "noun" },
  { word: "Ktawa", translation: "Book", phonetic: "Kta-wa", script: "ܟܬܒܐ", category: "noun" },
  { word: "Qalama", translation: "Pen", phonetic: "Qa-la-ma", script: "ܩܠܡܐ", category: "noun" },
  { word: "Pata", translation: "Table/Face", phonetic: "Pa-ta", script: "ܦܬܐ", category: "noun" },
  { word: "Kursa", translation: "Chair", phonetic: "Kur-sa", script: "ܟܘܪܣܝܐ", category: "noun" },
  { word: "Itha", translation: "Hand", phonetic: "I-tha", script: "ܐܝܕܐ", category: "noun" },
  { word: "Reesha", translation: "Head", phonetic: "Ree-sha", script: "ܪܝܫܐ", category: "noun" },
  { word: "Libba", translation: "Heart", phonetic: "Lib-ba", script: "ܠܒܐ", category: "noun" },

  // Verbs (Infinitive/Root roughly)
  { word: "Akhal", translation: "To Eat", phonetic: "A-khal", script: "ܐܟܠ", category: "verb" },
  { word: "Shtay", translation: "To Drink", phonetic: "Sh-tay", script: "ܫܬܐ", category: "verb" },
  { word: "Dmikh", translation: "To Sleep", phonetic: "D-mikh", script: "ܕܡܟ", category: "verb" },
  { word: "Yithib", translation: "To Sit", phonetic: "Yi-thib", script: "ܝܬܒ", category: "verb" },
  { word: "Qim", translation: "To Rise/Stand", phonetic: "Qim", script: "ܩܡ", category: "verb" },
  { word: "Khazi", translation: "To See", phonetic: "Kha-zi", script: "ܚܙܐ", category: "verb" },
  { word: "Sheme", translation: "To Hear", phonetic: "She-me", script: "ܫܡܥ", category: "verb" },
  { word: "Azil", translation: "To Go", phonetic: "A-zil", script: "ܐܙܠ", category: "verb" },
  { word: "Athi", translation: "To Come", phonetic: "A-thi", script: "ܐܬܐ", category: "verb" },
  { word: "Ktiv", translation: "To Write", phonetic: "K-tiv", script: "ܟܬܒ", category: "verb" },
  { word: "Qari", translation: "To Read", phonetic: "Qa-ri", script: "ܩܪܐ", category: "verb" },

  // Numbers
  { word: "Kha", translation: "One", phonetic: "Kha", script: "ܚܕ", category: "number" },
  { word: "Tre", translation: "Two", phonetic: "Tre", script: "ܬܪܝܢ", category: "number" },
  { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", script: "ܬܠܬܐ", category: "number" },
  { word: "Arba", translation: "Four", phonetic: "Ar-ba", script: "ܐܪܒܥܐ", category: "number" },
  { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", script: "ܚܡܫܐ", category: "number" },
  { word: "Ishta", translation: "Six", phonetic: "Ish-ta", script: "ܐܫܬܐ", category: "number" },
  { word: "Shwa", translation: "Seven", phonetic: "Shwa", script: "ܫܒܥܐ", category: "number" },
  { word: "Tmanya", translation: "Eight", phonetic: "Tman-ya", script: "ܬܡܢܝܐ", category: "number" },
  { word: "Tisha", translation: "Nine", phonetic: "Ti-sha", script: "ܬܫܥܐ", category: "number" },
  { word: "Asar", translation: "Ten", phonetic: "A-sar", script: "ܥܣܪܐ", category: "number" },

  // Time
  { word: "Yoma", translation: "Day", phonetic: "Yo-ma", script: "ܝܘܡܐ", category: "time" },
  { word: "Lelya", translation: "Night", phonetic: "Lel-ya", script: "ܠܠܝܐ", category: "time" },
  { word: "Idyo", translation: "Today", phonetic: "Id-yo", script: "ܐܕܝܘ", category: "time" },
  { word: "Timmal", translation: "Yesterday", phonetic: "Tim-mal", script: "ܬܡܠ", category: "time" },
  { word: "Qam", translation: "Tomorrow", phonetic: "Qam", script: "ܩܐܡ", category: "time" },
  { word: "Shabta", translation: "Saturday / Week", phonetic: "Shab-ta", script: "ܫܒܬܐ", category: "time" },

  // Animals
  { word: "Kalba", translation: "Dog", phonetic: "Kal-ba", script: "ܟܠܒܐ", category: "animal" },
  { word: "Qato", translation: "Cat", phonetic: "Qa-to", script: "ܩܛܘ", category: "animal" },
  { word: "Susya", translation: "Horse", phonetic: "Sus-ya", script: "ܣܘܣܝܐ", category: "animal" },
  { word: "Tawra", translation: "Bull/Ox", phonetic: "Taw-ra", script: "ܬܘܪܐ", category: "animal" },
  { word: "Khmara", translation: "Donkey", phonetic: "Khma-ra", script: "ܚܡܪܐ", category: "animal" },

  // Nature
  { word: "Shimsha", translation: "Sun", phonetic: "Shim-sha", script: "ܫܡܫܐ", category: "nature" },
  { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ", category: "nature" },
  { word: "Kokhva", translation: "Star", phonetic: "Kokh-va", script: "ܟܘܟܒܐ", category: "nature" },
  { word: "Matra", translation: "Rain", phonetic: "Mat-ra", script: "ܡܛܪܐ", category: "nature" },
  { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ", category: "nature" },

  // Body
  { word: "Ena", translation: "Eye", phonetic: "E-na", script: "ܥܝܢܐ", category: "body" },
  { word: "Nakhira", translation: "Nose", phonetic: "Na-khi-ra", script: "ܢܚܝܪܐ", category: "body" },
  { word: "Puma", translation: "Mouth", phonetic: "Pu-ma", script: "ܦܘܡܐ", category: "body" },
  { word: "Odna", translation: "Ear", phonetic: "Od-na", script: "ܐܕܢܐ", category: "body" },
  { word: "Regla", translation: "Foot/Leg", phonetic: "Reg-la", script: "ܪܓܠܐ", category: "body" },

  // Home
  { word: "Tarra", translation: "Door", phonetic: "Tar-ra", script: "ܬܪܥܐ", category: "home" },
  { word: "Kawtha", translation: "Window", phonetic: "Kaw-tha", script: "ܟܘܬܐ", category: "home" },
  { word: "Igara", translation: "Roof", phonetic: "I-ga-ra", script: "ܐܓܪܐ", category: "home" },
  { word: "Shwitha", translation: "Bed", phonetic: "Shwi-tha", script: "ܫܘܝܬܐ", category: "home" },

  // Clothing
  { word: "Sudra", translation: "Shirt", phonetic: "Sud-ra", script: "ܨܘܕܪܐ", category: "clothing" },
  { word: "Sharwala", translation: "Pants", phonetic: "Shar-wa-la", script: "ܫܪܘܠܐ", category: "clothing" },
  { word: "Soltha", translation: "Shoe", phonetic: "Sol-tha", script: "ܣܘܠܬܐ", category: "clothing" },
  { word: "Kusitha", translation: "Hat/Cap", phonetic: "Ku-si-tha", script: "ܟܘܣܝܬܐ", category: "clothing" },
];
