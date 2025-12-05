export interface DictionaryEntry {
  word: string;
  translation: string;
  phonetic: string;
  script: string;
  category: 'greeting' | 'noun' | 'verb' | 'adjective' | 'phrase' | 'number' | 'food' | 'family' | 'color' | 'time' | 'place' | 'animal' | 'nature' | 'body' | 'home' | 'profession' | 'clothing' | 'emotion' | 'travel' | 'question' | 'preposition' | 'conjunction';
  image?: string;
}

// Category-based fallback images (used when an entry has no image)
const categoryImageMap: Record<DictionaryEntry['category'] | 'default', string> = {
  greeting: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=70',
  noun: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&auto=format&fit=crop&q=70',
  verb: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=900&auto=format&fit=crop&q=70',
  adjective: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=900&auto=format&fit=crop&q=70',
  phrase: 'https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=900&auto=format&fit=crop&q=70',
  number: 'https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=900&auto=format&fit=crop&q=70',
  food: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop&q=70',
  family: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=70',
  color: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&auto=format&fit=crop&q=70',
  time: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=900&auto=format&fit=crop&q=70',
  place: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&auto=format&fit=crop&q=70',
  animal: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=900&auto=format&fit=crop&q=70',
  nature: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&auto=format&fit=crop&q=70',
  body: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&auto=format&fit=crop&q=70',
  home: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&auto=format&fit=crop&q=70',
  profession: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=70',
  clothing: 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=900&auto=format&fit=crop&q=70',
  emotion: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=70',
  travel: 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=900&auto=format&fit=crop&q=70',
  question: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&auto=format&fit=crop&q=70',
  preposition: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=900&auto=format&fit=crop&q=70',
  conjunction: 'https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=900&auto=format&fit=crop&q=70',
  default: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&auto=format&fit=crop&q=70',
};

export const dictionaryData: DictionaryEntry[] = [
  // Greetings
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", script: "ܫܠܡܐ", category: "greeting", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60" },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", script: "ܫܠܡܐ ܠܘܟ", category: "greeting", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60" },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", script: "ܫܠܡܐ ܠܟ", category: "greeting", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60" },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", script: "ܒܫܝܢܐ", category: "greeting", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60" },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", script: "ܕܐܟ݂ܝ ܘܬ", category: "greeting", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60" },
  
  // Question Words
  { word: "Aykha", translation: "Where", phonetic: "Ay-kha", script: "ܐܝܟܐ", category: "question", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=60" },
  { word: "Mana", translation: "What", phonetic: "Ma-na", script: "ܡܢܐ", category: "question", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60" },
  { word: "Mana", translation: "Who", phonetic: "Ma-na", script: "ܡܢܐ", category: "question", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60" },
  { word: "Aymat", translation: "When", phonetic: "Ay-mat", script: "ܐܝܡܬ", category: "question", image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60" },
  { word: "Lamana", translation: "Why", phonetic: "La-ma-na", script: "ܠܡܢܐ", category: "question", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60" },
  { word: "Aykana", translation: "How", phonetic: "Ay-ka-na", script: "ܐܝܟܢܐ", category: "question", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60" },
  { word: "Kama", translation: "How many/How much", phonetic: "Ka-ma", script: "ܟܡܐ", category: "question", image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60" },
  { word: "Ayna", translation: "Which", phonetic: "Ay-na", script: "ܐܝܢܐ", category: "question", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60" },

  // Prepositions
  { word: "B-", translation: "In/At/With", phonetic: "B-", script: "ܒ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Min", translation: "From", phonetic: "Min", script: "ܡܢ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "L-", translation: "To/For", phonetic: "L-", script: "ܠ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Al", translation: "On/Upon", phonetic: "Al", script: "ܥܠ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Takh", translation: "Under/Below", phonetic: "Takh", script: "ܬܚܬ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Bathar", translation: "After/Behind", phonetic: "Ba-thar", script: "ܒܬܪ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Qam", translation: "Before/In front of", phonetic: "Qam", script: "ܩܕܡ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Gaw", translation: "Inside", phonetic: "Gaw", script: "ܓܘ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Bar", translation: "Outside", phonetic: "Bar", script: "ܒܪ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Gaw", translation: "Between/Among", phonetic: "Gaw", script: "ܒܝܢ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Am", translation: "With", phonetic: "Am", script: "ܥܡ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },
  { word: "Dil", translation: "Of/Belonging to", phonetic: "Dil", script: "ܕܝܠ", category: "preposition", image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=800&auto=format&fit=crop&q=60" },

  // Conjunctions
  { word: "W-", translation: "And", phonetic: "W-", script: "ܘ", category: "conjunction", image: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=800&auto=format&fit=crop&q=60" },
  { word: "Amma", translation: "But", phonetic: "Am-ma", script: "ܐܡܡܐ", category: "conjunction", image: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=800&auto=format&fit=crop&q=60" },
  { word: "Aw", translation: "Or", phonetic: "Aw", script: "ܐܘ", category: "conjunction", image: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=800&auto=format&fit=crop&q=60" },
  { word: "Metul d-", translation: "Because", phonetic: "Me-tul d-", script: "ܡܛܘܠ ܕ", category: "conjunction", image: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=800&auto=format&fit=crop&q=60" },
  { word: "Kad", translation: "When/As", phonetic: "Kad", script: "ܟܕ", category: "conjunction", image: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=800&auto=format&fit=crop&q=60" },
  { word: "Idan", translation: "If", phonetic: "I-dan", script: "ܐܝܕܢ", category: "conjunction", image: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?w=800&auto=format&fit=crop&q=60" },

  // Common Phrases
  { word: "Basima", translation: "Thank you (to a male) / Good (masc)", phonetic: "Ba-si-ma", script: "ܒܣܝܡܐ", category: "phrase", image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60" },
  { word: "Basimta", translation: "Thank you (to a female) / Good (fem)", phonetic: "Ba-sim-ta", script: "ܒܣܝܡܬܐ", category: "phrase", image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60" },
  { word: "Min d'yokh", translation: "Please (lit. from your hand)", phonetic: "Min d-yokh", script: "ܡܢ ܕܝܘܟ", category: "phrase", image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60" },
  { word: "Tawdi", translation: "Thank you", phonetic: "Taw-di", script: "ܬܘܕܝ", category: "phrase", image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60" },
  { word: "Eo", translation: "Yes", phonetic: "Eo", script: "ܐܝܢ", category: "phrase", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60" },
  { word: "La", translation: "No", phonetic: "La", script: "ܠܐ", category: "phrase", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60" },
  { word: "Shlama lokh", translation: "Goodbye (to male)", phonetic: "Shla-ma lokh", script: "ܫܠܡܐ ܠܘܟ", category: "phrase", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60" },
  { word: "Shlama lakh", translation: "Goodbye (to female)", phonetic: "Shla-ma lakh", script: "ܫܠܡܐ ܠܟ", category: "phrase", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60" },
  { word: "Brikh", translation: "Blessed", phonetic: "Brikh", script: "ܒܪܝܟ", category: "phrase", image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60" },
  { word: "Shlama d'Alaha", translation: "Peace of God", phonetic: "Shla-ma d-A-la-ha", script: "ܫܠܡܐ ܕܐܠܗܐ", category: "phrase", image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60" },
  
  // Adjectives
  { word: "Spay", translation: "Good", phonetic: "Spay", script: "ܣܦܝ", category: "adjective" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Raba", translation: "Much / Very", phonetic: "Ra-ba", script: "ܪܒܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Shapira", translation: "Beautiful (masc)", phonetic: "Sha-pi-ra", script: "ܫܦܝܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Shapirta", translation: "Beautiful (fem)", phonetic: "Sha-pir-ta", script: "ܫܦܝܪܬܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Raba", translation: "Big", phonetic: "Ra-ba", script: "ܪܒܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Zora", translation: "Small", phonetic: "Zo-ra", script: "ܙܥܘܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Yarikha", translation: "Long", phonetic: "Ya-ri-kha", script: "ܝܪܝܟ݂ܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Krya", translation: "Short", phonetic: "Kry-a", script: "ܟܪܝܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Khatha", translation: "New", phonetic: "Kha-tha", script: "ܚܕܬܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Atiqa", translation: "Old", phonetic: "A-ti-qa", script: "ܥܬܝܩܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Khidiya", translation: "Happy", phonetic: "Khi-di-ya", script: "ܚܕܝܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Kriwa", translation: "Sad", phonetic: "Kri-wa", script: "ܟܪܝܒܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Chilya", translation: "Tired", phonetic: "Chil-ya", script: "ܟܗܝܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1518893063132-36ae2366d998?w=800&auto=format&fit=crop&q=60",

  { word: "Kpina", translation: "Hungry", phonetic: "Kpi-na", script: "ܟܦܝܢܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Sahya", translation: "Thirsty", phonetic: "Sah-ya", script: "ܨܗܝܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Mrisha", translation: "Sick", phonetic: "Mri-sha", script: "ܡܪܥܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Hayla", translation: "Strong", phonetic: "Hay-la", script: "ܚܝܠܢܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Basora", translation: "Weak", phonetic: "Ba-so-ra", script: "ܒܨܘܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Qalula", translation: "Fast", phonetic: "Qa-lu-la", script: "ܩܠܘܠܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Yaqura", translation: "Heavy/Slow", phonetic: "Ya-qu-ra", script: "ܝܩܘܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Rama", translation: "High", phonetic: "Ra-ma", script: "ܪܡܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Kupa", translation: "Low", phonetic: "Ku-pa", script: "ܟܘܦܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",


  // Colors
  { word: "Smoqa", translation: "Red", phonetic: "Smo-qa", script: "ܣܡܘܩܐ", category: "color" }, image: "https://images.unsplash.com/photo-1518893063132-36ae2366d998?w=800&auto=format&fit=crop&q=60",

  { word: "Khawra", translation: "Blue", phonetic: "Khaw-ra", script: "ܟܘܪܐ", category: "color" }, image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop&q=60",

  { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka", script: "ܝܪܘܩܐ", category: "color" }, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60",

  { word: "Spera", translation: "Yellow", phonetic: "Spe-ra", script: "ܣܦܝܪܐ", category: "color" }, image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&auto=format&fit=crop&q=60",

  { word: "Ukma", translation: "Black", phonetic: "Uk-ma", script: "ܐܘܟܡܐ", category: "color" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Khwara", translation: "White", phonetic: "Khwa-ra", script: "ܚܘܪܐ", category: "color" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Portuqala", translation: "Orange", phonetic: "Por-tu-qa-la", script: "ܦܘܪܬܩܠܐ", category: "color" }, image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=60",

  { word: "Banafsha", translation: "Purple", phonetic: "Ba-naf-sha", script: "ܒܢܦܫܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Warda", translation: "Pink", phonetic: "War-da", script: "ܘܪܕܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Qahwaya", translation: "Brown", phonetic: "Qah-wa-ya", script: "ܩܗܘܝܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Rasasa", translation: "Grey", phonetic: "Ra-sa-sa", script: "ܪܨܨܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Dahba", translation: "Gold", phonetic: "Dah-ba", script: "ܕܗܒܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Sipa", translation: "Silver", phonetic: "Si-pa", script: "ܣܐܡܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Bahra", translation: "Light (Color)", phonetic: "Bah-ra", script: "ܒܗܪܐ", category: "color" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Khekha", translation: "Dark (Color)", phonetic: "Khe-kha", script: "ܚܘܟ݂ܐ", category: "color" }, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop&q=60",


  // Family
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", script: "ܒܒܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Abba", translation: "Father (Formal)", phonetic: "Ab-ba", script: "ܐܒܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", script: "ܝܡܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Imma", translation: "Mother (Formal)", phonetic: "Im-ma", script: "ܐܡܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", script: "ܐܚܘܢܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Akh", translation: "Brother", phonetic: "Akh", script: "ܐܚܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", script: "ܚܬܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", script: "ܣܒܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Sawtha", translation: "Grandmother", phonetic: "Saw-tha", script: "ܣܒܬܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Amma", translation: "Uncle (Paternal)", phonetic: "Am-ma", script: "ܥܡܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Khala", translation: "Uncle (Maternal)", phonetic: "Kha-la", script: "ܚܠܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Bra", translation: "Son", phonetic: "Bra", script: "ܒܪܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Brata", translation: "Daughter", phonetic: "Bra-ta", script: "ܒܪܬܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Gawra", translation: "Husband", phonetic: "Gaw-ra", script: "ܓܒܪܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Bakhta", translation: "Wife", phonetic: "Bakh-ta", script: "ܒܟ݂ܬܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Nashwatha", translation: "Relatives/Family", phonetic: "Nash-wa-tha", script: "ܢܫܘܬܐ", category: "family" }, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60",

  { word: "Yala", translation: "Child/Boy", phonetic: "Ya-la", script: "ܝܠܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Brata", translation: "Girl", phonetic: "Bra-ta", script: "ܒܪܬܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Gawra", translation: "Man", phonetic: "Gaw-ra", script: "ܓܒܪܐ", category: "family" }, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",

  { word: "Bakhta", translation: "Woman", phonetic: "Bakh-ta", script: "ܒܟ݂ܬܐ", category: "family" }, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",

  { word: "Nasha", translation: "Person", phonetic: "Na-sha", script: "ܢܫܐ", category: "family" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Nashe", translation: "People", phonetic: "Na-she", script: "ܢܫܐ", category: "family" }, image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=60",


  // Food & Drink
  { word: "Mya", translation: "Water", phonetic: "M-ya", script: "ܡܝܐ", category: "food", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&auto=format&fit=crop&q=60" },
  { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", script: "ܠܚܡܐ", category: "food", image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=800&auto=format&fit=crop&q=60" },
  { word: "Bisra", translation: "Meat", phonetic: "Bis-ra", script: "ܒܣܪܐ", category: "food", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&auto=format&fit=crop&q=60" },
  { word: "Guptha", translation: "Cheese", phonetic: "Gup-tha", script: "ܓܘܒܬܐ", category: "food", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&auto=format&fit=crop&q=60" },
  { word: "Be'ay", translation: "Eggs", phonetic: "Be-ay", script: "ܒܝܥܐ", category: "food", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=800&auto=format&fit=crop&q=60" },
  { word: "Chai", translation: "Tea", phonetic: "Chai", script: "ܟܐܝ", category: "food", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&auto=format&fit=crop&q=60" },
  { word: "Qahwa", translation: "Coffee", phonetic: "Qah-wa", script: "ܩܗܘܐ", category: "food", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60" },
  { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha", script: "ܬܦܘܚܐ", category: "food", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop&q=60" },
  { word: "Pishra", translation: "Fish", phonetic: "Pish-ra", script: "ܦܫܪܐ", category: "food", image: "https://images.unsplash.com/photo-1544551763-46a8723ba3f9?w=800&auto=format&fit=crop&q=60" },
  { word: "Khala", translation: "Milk", phonetic: "Kha-la", script: "ܚܠܒܐ", category: "food", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=60" },
  { word: "Kthayta", translation: "Chicken", phonetic: "Kthay-ta", script: "ܟܬܝܬܐ", category: "food", image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop&q=60" },
  { word: "Yaraqa", translation: "Vegetables", phonetic: "Ya-ra-qa", script: "ܝܪܩܐ", category: "food", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&auto=format&fit=crop&q=60" },
  { word: "Pera", translation: "Fruit", phonetic: "Pe-ra", script: "ܦܐܪܐ", category: "food", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=60" },
  { word: "Khamra", translation: "Wine", phonetic: "Kham-ra", script: "ܚܡܪܐ", category: "food", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=60" },
  { word: "Melkha", translation: "Salt", phonetic: "Mel-kha", script: "ܡܠܚܐ", category: "food", image: "https://images.unsplash.com/photo-1518110925495-59b16184de6c?w=800&auto=format&fit=crop&q=60" },
  { word: "Shekar", translation: "Sugar", phonetic: "She-kar", script: "ܫܟܪ", category: "food", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop&q=60" },
  { word: "Mishkha", translation: "Oil", phonetic: "Mish-kha", script: "ܡܫܚܐ", category: "food", image: "https://images.unsplash.com/photo-1474979266404-7cadd2592543?w=800&auto=format&fit=crop&q=60" },
  { word: "Kare", translation: "Butter", phonetic: "Ka-re", script: "ܟܪܐ", category: "food", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&auto=format&fit=crop&q=60" },
  { word: "Masta", translation: "Yogurt", phonetic: "Mas-ta", script: "ܡܣܬܐ", category: "food", image: "https://images.unsplash.com/photo-1563914982977-28254880095f?w=800&auto=format&fit=crop&q=60" },
  { word: "Qare", translation: "Cucumber", phonetic: "Qa-re", script: "ܩܪܐ", category: "food", image: "https://images.unsplash.com/photo-1449300079323-02e209d9d8a6?w=800&auto=format&fit=crop&q=60" },
  { word: "Tamata", translation: "Tomato", phonetic: "Ta-ma-ta", script: "ܛܡܐܛܐ", category: "food", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=60" },
  { word: "Basla", translation: "Onion", phonetic: "Bas-la", script: "ܒܨܠܐ", category: "food", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&auto=format&fit=crop&q=60" },
  { word: "Patata", translation: "Potato", phonetic: "Pa-ta-ta", script: "ܦܛܐܛܐ", category: "food", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60" },
  { word: "Inwe", translation: "Grapes", phonetic: "In-we", script: "ܥܢܒܐ", category: "food", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop&q=60" },

  // Nouns & Objects
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", script: "ܐܠܗܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Bayta", translation: "House", phonetic: "Bay-ta", script: "ܒܝܬܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Sayara", translation: "Car", phonetic: "Sa-ya-ra", script: "ܣܝܪܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60",

  { word: "Ktawa", translation: "Book", phonetic: "Kta-wa", script: "ܟܬܒܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=60",

  { word: "Qalama", translation: "Pen", phonetic: "Qa-la-ma", script: "ܩܠܡܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Pata", translation: "Table/Face", phonetic: "Pa-ta", script: "ܦܬܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Kursa", translation: "Chair", phonetic: "Kur-sa", script: "ܟܘܪܣܝܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Itha", translation: "Hand", phonetic: "I-tha", script: "ܐܝܕܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Reesha", translation: "Head", phonetic: "Ree-sha", script: "ܪܝܫܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Libba", translation: "Heart", phonetic: "Lib-ba", script: "ܠܒܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",


  // Verbs (Infinitive/Root roughly)
  { word: "Akhal", translation: "To Eat", phonetic: "A-khal", script: "ܐܟܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shtay", translation: "To Drink", phonetic: "Sh-tay", script: "ܫܬܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Dmikh", translation: "To Sleep", phonetic: "D-mikh", script: "ܕܡܟ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Yithib", translation: "To Sit", phonetic: "Yi-thib", script: "ܝܬܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Qim", translation: "To Rise/Stand", phonetic: "Qim", script: "ܩܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Khazi", translation: "To See", phonetic: "Kha-zi", script: "ܚܙܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Sheme", translation: "To Hear", phonetic: "She-me", script: "ܫܡܥ", category: "verb" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Azil", translation: "To Go", phonetic: "A-zil", script: "ܐܙܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Athi", translation: "To Come", phonetic: "A-thi", script: "ܐܬܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Ktiv", translation: "To Write", phonetic: "K-tiv", script: "ܟܬܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Qari", translation: "To Read", phonetic: "Qa-ri", script: "ܩܪܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Pthakh", translation: "To Open", phonetic: "Pthakh", script: "ܦܬܚ", category: "verb" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Dwiq", translation: "To Close/Hold", phonetic: "Dwiq", script: "ܕܒܩ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shqil", translation: "To Take/Buy", phonetic: "Shqil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Hiw", translation: "To Give", phonetic: "Hiw", script: "ܝܗܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Ba'ay", translation: "To Want/Love", phonetic: "Ba-ay", script: "ܒܥܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Yadi", translation: "To Know", phonetic: "Ya-di", script: "ܝܕܥ", category: "verb" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Pol", translation: "To Work", phonetic: "Pol", script: "ܦܠܚ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mtal", translation: "To Play", phonetic: "Mtal", script: "ܡܛܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mahki", translation: "To Speak", phonetic: "Mah-ki", script: "ܡܚܟܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rkhosh", translation: "To Walk", phonetic: "Rkhosh", script: "ܪܚܫ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rhit", translation: "To Run", phonetic: "Rhit", script: "ܪܗܛ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Gkhikh", translation: "To Laugh", phonetic: "Gkhikh", script: "ܓܚܟ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Bkhe", translation: "To Cry", phonetic: "Bkhe", script: "ܒܟܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",


  // Numbers
  { word: "Kha", translation: "One", phonetic: "Kha", script: "ܚܕ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tre", translation: "Two", phonetic: "Tre", script: "ܬܪܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", script: "ܬܠܬܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Arba", translation: "Four", phonetic: "Ar-ba", script: "ܐܪܒܥܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", script: "ܚܡܫܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Ishta", translation: "Six", phonetic: "Ish-ta", script: "ܐܫܬܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Shwa", translation: "Seven", phonetic: "Shwa", script: "ܫܒܥܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tmanya", translation: "Eight", phonetic: "Tman-ya", script: "ܬܡܢܝܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tisha", translation: "Nine", phonetic: "Ti-sha", script: "ܬܫܥܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Asar", translation: "Ten", phonetic: "A-sar", script: "ܥܣܪܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",


  // Time
  { word: "Yoma", translation: "Day", phonetic: "Yo-ma", script: "ܝܘܡܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Lelya", translation: "Night", phonetic: "Lel-ya", script: "ܠܠܝܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Idyo", translation: "Today", phonetic: "Id-yo", script: "ܐܕܝܘ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Timmal", translation: "Yesterday", phonetic: "Tim-mal", script: "ܬܡܠ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Qam", translation: "Tomorrow", phonetic: "Qam", script: "ܩܐܡ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Shabta", translation: "Saturday / Week", phonetic: "Shab-ta", script: "ܫܒܬܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",


  // Animals
  { word: "Kalba", translation: "Dog", phonetic: "Kal-ba", script: "ܟܠܒܐ", category: "animal", image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=60" },
  { word: "Qato", translation: "Cat", phonetic: "Qa-to", script: "ܩܛܘ", category: "animal", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=60" },
  { word: "Susya", translation: "Horse", phonetic: "Sus-ya", script: "ܣܘܣܝܐ", category: "animal", image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=800&auto=format&fit=crop&q=60" },
  { word: "Tawra", translation: "Bull/Ox", phonetic: "Taw-ra", script: "ܬܘܪܐ", category: "animal", image: "https://images.unsplash.com/photo-1559449927-41787c188b36?w=800&auto=format&fit=crop&q=60" },
  { word: "Khmara", translation: "Donkey", phonetic: "Khma-ra", script: "ܚܡܪܐ", category: "animal", image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&auto=format&fit=crop&q=60" },
  { word: "Arya", translation: "Lion", phonetic: "Ar-ya", script: "ܐܪܝܐ", category: "animal", image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&auto=format&fit=crop&q=60" },
  { word: "Arva", translation: "Sheep", phonetic: "Ar-va", script: "ܐܪܒܐ", category: "animal", image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&auto=format&fit=crop&q=60" },

  // Nature
  { word: "Shimsha", translation: "Sun", phonetic: "Shim-sha", script: "ܫܡܫܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&auto=format&fit=crop&q=60",

  { word: "Kokhva", translation: "Star", phonetic: "Kokh-va", script: "ܟܘܟܒܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop&q=60",

  { word: "Matra", translation: "Rain", phonetic: "Mat-ra", script: "ܡܛܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&auto=format&fit=crop&q=60",

  { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Nura", translation: "Fire", phonetic: "Nu-ra", script: "ܢܘܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Opra", translation: "Earth/Dust", phonetic: "Op-ra", script: "ܥܦܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Ilana", translation: "Tree", phonetic: "I-la-na", script: "ܐܝܠܢܐ", category: "nature", image: "https://images.unsplash.com/photo-1513836279014-a89f7a760af0?w=800&auto=format&fit=crop&q=60" },
  { word: "Warda", translation: "Flower", phonetic: "War-da", script: "ܘܪܕܐ", category: "nature", image: "https://images.unsplash.com/photo-1490750967868-58cb75065ed4?w=800&auto=format&fit=crop&q=60" },
  { word: "Nahra", translation: "River", phonetic: "Nah-ra", script: "ܢܗܪܐ", category: "nature", image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&auto=format&fit=crop&q=60" },
  { word: "Yama", translation: "Sea/Lake", phonetic: "Ya-ma", script: "ܝܡܐ", category: "nature", image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&auto=format&fit=crop&q=60" },
  { word: "Tura", translation: "Mountain", phonetic: "Tu-ra", script: "ܛܘܪܐ", category: "nature", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60" },
  { word: "Genta", translation: "Garden", phonetic: "Gen-ta", script: "ܓܢܬܐ", category: "nature", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=60" },
  { word: "Aywa", translation: "Cloud", phonetic: "Ay-wa", script: "ܥܝܒܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Powkha", translation: "Wind/Air", phonetic: "Pow-kha", script: "ܦܘܚܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Qarira", translation: "Cold", phonetic: "Qa-ri-ra", script: "ܩܪܝܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1551524164-6cf77f63edb6?w=800&auto=format&fit=crop&q=60",

  { word: "Khamima", translation: "Hot", phonetic: "Kha-mi-ma", script: "ܚܡܝܡܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",


  // Body
  { word: "Ena", translation: "Eye", phonetic: "E-na", script: "ܥܝܢܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Nakhira", translation: "Nose", phonetic: "Na-khi-ra", script: "ܢܚܝܪܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Puma", translation: "Mouth", phonetic: "Pu-ma", script: "ܦܘܡܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Odna", translation: "Ear", phonetic: "Od-na", script: "ܐܕܢܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Regla", translation: "Foot/Leg", phonetic: "Reg-la", script: "ܪܓܠܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Lishana", translation: "Tongue/Language", phonetic: "Li-sha-na", script: "ܠܫܢܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Shina", translation: "Tooth", phonetic: "Shi-na", script: "ܫܢܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Sa'ra", translation: "Hair", phonetic: "Sa-ra", script: "ܣܥܪܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Pata", translation: "Face", phonetic: "Pa-ta", script: "ܦܬܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Khade", translation: "Chest", phonetic: "Kha-de", script: "ܚܕܝܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Kasa", translation: "Stomach/Belly", phonetic: "Ka-sa", script: "ܟܪܣܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Khasa", translation: "Back", phonetic: "Kha-sa", script: "ܚܨܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Dra'a", translation: "Arm", phonetic: "Dra-a", script: "ܕܪܥܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Siv'a", translation: "Finger", phonetic: "Siv-a", script: "ܨܒܥܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Burka", translation: "Knee", phonetic: "Bur-ka", script: "ܒܘܪܟܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",


  // Home
  { word: "Tarra", translation: "Door", phonetic: "Tar-ra", script: "ܬܪܥܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Kawtha", translation: "Window", phonetic: "Kaw-tha", script: "ܟܘܬܐ", category: "home" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Igara", translation: "Roof", phonetic: "I-ga-ra", script: "ܐܓܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Shwitha", translation: "Bed", phonetic: "Shwi-tha", script: "ܫܘܝܬܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Matbakh", translation: "Kitchen", phonetic: "Mat-bakh", script: "ܡܛܒܟ݂", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Khamama", translation: "Bathroom", phonetic: "Kha-ma-ma", script: "ܚܡܐܡܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Oda", translation: "Room/Bedroom", phonetic: "O-da", script: "ܐܘܕܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Igara", translation: "Wall", phonetic: "I-ga-ra", script: "ܐܓܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Ar'a", translation: "Floor/Ground", phonetic: "Ar-a", script: "ܐܪܥܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Qleeda", translation: "Key", phonetic: "Qlee-da", script: "ܩܠܝܕܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Bahra", translation: "Light", phonetic: "Bah-ra", script: "ܒܗܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Sahna", translation: "Plate", phonetic: "Sah-na", script: "ܨܚܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Kchamcha", translation: "Spoon", phonetic: "Kcham-cha", script: "ܟܡܟܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Changala", translation: "Fork", phonetic: "Chan-ga-la", script: "ܟܢܓܠܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Sakina", translation: "Knife", phonetic: "Sa-ki-na", script: "ܣܟܝܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Stikana", translation: "Cup (Tea)", phonetic: "Sti-ka-na", script: "ܐܣܬܟܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Glasa", translation: "Glass", phonetic: "Gla-sa", script: "ܓܠܣܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",


  // Clothing
  { word: "Sudra", translation: "Shirt", phonetic: "Sud-ra", script: "ܨܘܕܪܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Sharwala", translation: "Pants", phonetic: "Shar-wa-la", script: "ܫܪܘܠܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Soltha", translation: "Shoe", phonetic: "Sol-tha", script: "ܣܘܠܬܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Kusitha", translation: "Hat/Cap", phonetic: "Ku-si-tha", script: "ܟܘܣܝܬܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",


  // Places
  { word: "Madrasa", translation: "School", phonetic: "Mad-ra-sa", script: "ܡܕܪܫܬܐ", category: "place", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60" },
  { word: "Knishta", translation: "Church", phonetic: "Knish-ta", script: "ܟܢܘܫܬܐ", category: "place", image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format&fit=crop&q=60" },
  { word: "Shuqa", translation: "Market", phonetic: "Shu-qa", script: "ܫܘܩܐ", category: "place", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60" },
  { word: "Matha", translation: "Village/Town", phonetic: "Ma-tha", script: "ܡܬܐ", category: "place", image: "https://images.unsplash.com/photo-1596423734564-354b1314984c?w=800&auto=format&fit=crop&q=60" },
  { word: "Medina", translation: "City", phonetic: "Me-di-na", script: "ܡܕܝܢܬܐ", category: "place", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60" },
  { word: "Bayta d-Asye", translation: "Hospital", phonetic: "Bay-ta d-As-ye", script: "ܒܝܬ ܐܣܝܐ", category: "place", image: "https://images.unsplash.com/photo-1587351021759-3e566b9a44fd?w=800&auto=format&fit=crop&q=60" },
  { word: "Dukana", translation: "Store/Shop", phonetic: "Du-ka-na", script: "ܕܘܟܢܐ", category: "place", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=60" },
  { word: "Be-Sawa", translation: "Grandfather's House", phonetic: "Be-Sa-wa", script: "ܒܝܬ ܣܒܐ", category: "place" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Khakla", translation: "Field/Farm", phonetic: "Khak-la", script: "ܚܩܠܐ", category: "place", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60" },
  { word: "Parqa", translation: "Park", phonetic: "Par-qa", script: "ܦܪܩܐ", category: "place", image: "https://images.unsplash.com/photo-1496070242169-b672c576566b?w=800&auto=format&fit=crop&q=60" },
  { word: "Mat'am", translation: "Restaurant", phonetic: "Mat-am", script: "ܡܛܥܡ", category: "place", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60" },
  { word: "Maktab", translation: "Office", phonetic: "Mak-tab", script: "ܡܟܬܒ", category: "place", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60" },

  // Professions
  { word: "Malpana", translation: "Teacher (Masc)", phonetic: "Mal-pa-na", script: "ܡܠܦܢܐ", category: "profession", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60" },
  { word: "Malpantha", translation: "Teacher (Fem)", phonetic: "Mal-pan-tha", script: "ܡܠܦܢܬܐ", category: "profession", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60" },
  { word: "Asya", translation: "Doctor", phonetic: "As-ya", script: "ܐܣܝܐ", category: "profession", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&auto=format&fit=crop&q=60" },
  { word: "Nakhopa", translation: "Baker", phonetic: "Na-kho-pa", script: "ܢܚܘܦܐ", category: "profession", image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=800&auto=format&fit=crop&q=60" },
  { word: "Sayuqa", translation: "Driver", phonetic: "Sa-yu-qa", script: "ܣܝܘܩܐ", category: "profession", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60" },
  { word: "Shurta", translation: "Police", phonetic: "Shur-ta", script: "ܫܘܪܛܐ", category: "profession", image: "https://images.unsplash.com/photo-1453873419063-ad7fb1e252bc?w=800&auto=format&fit=crop&q=60" },
  { word: "Khatota", translation: "Tailor/Seamstress", phonetic: "Kha-to-ta", script: "ܚܝܛܐ", category: "profession", image: "https://images.unsplash.com/photo-1596356453261-03465289427d?w=800&auto=format&fit=crop&q=60" },
  { word: "Ranya", translation: "Singer", phonetic: "Ran-ya", script: "ܪܢܝܐ", category: "profession", image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&auto=format&fit=crop&q=60" },
  { word: "Tabakha", translation: "Cook/Chef", phonetic: "Ta-ba-kha", script: "ܛܒܟ݂ܐ", category: "profession", image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60" },
  { word: "Benaya", translation: "Builder", phonetic: "Be-na-ya", script: "ܒܢܝܐ", category: "profession", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60" },
  { word: "Falaha", translation: "Farmer", phonetic: "Fa-la-ha", script: "ܦܠܚܐ", category: "profession", image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=800&auto=format&fit=crop&q=60" },

  // Emotions
  { word: "Khidiya", translation: "Happy (masc)", phonetic: "Khi-di-ya", script: "ܚܕܝܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Khiditha", translation: "Happy (fem)", phonetic: "Khi-di-tha", script: "ܚܕܝܬܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Kriwa", translation: "Sad (masc)", phonetic: "Kri-wa", script: "ܟܪܝܒܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Krivta", translation: "Sad (fem)", phonetic: "Kriv-ta", script: "ܟܪܝܒܬܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Karpana", translation: "Angry", phonetic: "Kar-pa-na", script: "ܟܪܦܢܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Zdi'a", translation: "Scared", phonetic: "Zdi-a", script: "ܙܕܝܥܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1518893063132-36ae2366d998?w=800&auto=format&fit=crop&q=60",


  // Travel
  { word: "Orkha", translation: "Road/Way", phonetic: "Or-kha", script: "ܐܘܪܚܐ", category: "travel", image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800&auto=format&fit=crop&q=60" },
  { word: "Tayara", translation: "Airplane", phonetic: "Ta-ya-ra", script: "ܛܝܪܐ", category: "travel", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60" },
  { word: "Bosta", translation: "Bus", phonetic: "Bos-ta", script: "ܒܐܨ", category: "travel", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=60" },
  { word: "Pasport", translation: "Passport", phonetic: "Pas-port", script: "ܦܣܦܘܪܬ", category: "travel" }, image: "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60",

  { word: "Tiket", translation: "Ticket", phonetic: "Ti-ket", script: "ܬܝܟܬ", category: "travel" }, image: "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60",

  { word: "Mata", translation: "Luggage/Things", phonetic: "Ma-ta", script: "ܡܐܬܐ", category: "travel" }, image: "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60",


  // More Time
  { word: "Sa'at", translation: "Hour/Clock", phonetic: "Sa-at", script: "ܣܥܬ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Daqiqa", translation: "Minute", phonetic: "Da-qi-qa", script: "ܕܩܝܩܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Shita", translation: "Year", phonetic: "Shi-ta", script: "ܫܢܬܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Yargha", translation: "Month", phonetic: "Yar-gha", script: "ܝܪܚܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Hasa", translation: "Now", phonetic: "Ha-sa", script: "ܗܣܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Bathar", translation: "Later/After", phonetic: "Ba-thar", script: "ܒܬܪ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Qam", translation: "Before", phonetic: "Qam", script: "ܩܡ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Sipra", translation: "Morning", phonetic: "Sip-ra", script: "ܨܦܪܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ramsha", translation: "Evening", phonetic: "Ram-sha", script: "ܪܡܫܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",


  // More Numbers
  { word: "Khadassar", translation: "Eleven", phonetic: "Kha-das-sar", script: "ܚܕܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Treissar", translation: "Twelve", phonetic: "Treis-sar", script: "ܬܪܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Esrin", translation: "Twenty", phonetic: "Es-rin", script: "ܥܣܪܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tlaa", translation: "Thirty", phonetic: "Tla-a", script: "ܬܠܬܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Arba", translation: "Forty", phonetic: "Ar-ba", script: "ܐܪܒܥܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Khamshi", translation: "Fifty", phonetic: "Kham-shi", script: "ܚܡܫܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Imma", translation: "One Hundred", phonetic: "Im-ma", script: "ܐܡܐ", category: "number" }, image: "https://images.unsplash.com/photo-1518893063132-36ae2366d998?w=800&auto=format&fit=crop&q=60",

  { word: "Alpa", translation: "One Thousand", phonetic: "Al-pa", script: "ܐܠܦܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",


  { word: "Portuqala", translation: "Orange", phonetic: "Por-tu-qa-la", script: "ܦܘܪܬܩܠܐ", category: "color" }, image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=60",

  { word: "Banafsha", translation: "Purple", phonetic: "Ba-naf-sha", script: "ܒܢܦܫܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Warda", translation: "Pink", phonetic: "War-da", script: "ܘܪܕܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Qahwaya", translation: "Brown", phonetic: "Qah-wa-ya", script: "ܩܗܘܝܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",

  { word: "Rasasa", translation: "Grey", phonetic: "Ra-sa-sa", script: "ܪܨܨܐ", category: "color" }, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop&q=60",


  // More Phrases
  { word: "Bshina b-atayokh", translation: "Welcome (to male)", phonetic: "B-shi-na b-a-ta-yokh", script: "ܒܫܝܢܐ ܒܐܬܝܘܟ݂", category: "phrase" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Bshina b-atayakh", translation: "Welcome (to female)", phonetic: "B-shi-na b-a-ta-yakh", script: "ܒܫܝܢܐ ܒܐܬܝܟ݂", category: "phrase" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh sipra", translation: "Good morning", phonetic: "Brikh sip-ra", script: "ܒܪܝܟ݂ ܨܦܪܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh ramsha", translation: "Good evening", phonetic: "Brikh ram-sha", script: "ܒܪܝܟ݂ ܪܡܫܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ghanokh b-shina", translation: "Good night", phonetic: "Gha-nokh b-shi-na", script: "ܓܢܘܟ݂ ܒܫܝܢܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Mahbila", translation: "Excuse me", phonetic: "Mah-bi-la", script: "ܡܚܒܠܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "La yadin", translation: "I don't know", phonetic: "La ya-din", script: "ܠܐ ܝܕܥܢ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Shlama lokh", translation: "Goodbye (to male)", phonetic: "Shla-ma lokh", script: "ܫܠܡܐ ܠܘܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shlama lakh", translation: "Goodbye (to female)", phonetic: "Shla-ma lakh", script: "ܫܠܡܐ ܠܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh", translation: "Blessed", phonetic: "Brikh", script: "ܒܪܝܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "Shlama d'Alaha", translation: "Peace of God", phonetic: "Shla-ma d-A-la-ha", script: "ܫܠܡܐ ܕܐܠܗܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh sipra", translation: "Good morning", phonetic: "Brikh sip-ra", script: "ܒܪܝܟ ܨܦܪܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh ramsha", translation: "Good evening", phonetic: "Brikh ram-sha", script: "ܒܪܝܟ ܪܡܫܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ghanokh b-shina", translation: "Good night", phonetic: "Gha-nokh b-shi-na", script: "ܓܢܘܟ ܒܫܝܢܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Mahbila", translation: "Excuse me", phonetic: "Mah-bi-la", script: "ܡܚܒܠܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh d'Ati", translation: "God bless you", phonetic: "Brikh d-A-ti", script: "ܒܪܝܟ ܕܐܬܝ", category: "phrase" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh d'Atokh", translation: "God bless you (to male)", phonetic: "Brikh d-A-tokh", script: "ܒܪܝܟ ܕܐܬܘܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh d'Atakh", translation: "God bless you (to female)", phonetic: "Brikh d-A-takh", script: "ܒܪܝܟ ܕܐܬܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Shlama d'Alaha b'Atokh", translation: "Peace of God be with you (to male)", phonetic: "Shla-ma d-A-la-ha b-A-tokh", script: "ܫܠܡܐ ܕܐܠܗܐ ܒܐܬܘܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Shlama d'Alaha b'Atakh", translation: "Peace of God be with you (to female)", phonetic: "Shla-ma d-A-la-ha b-A-takh", script: "ܫܠܡܐ ܕܐܠܗܐ ܒܐܬܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh d'Atokh", translation: "Blessed be you (to male)", phonetic: "Brikh d-A-tokh", script: "ܒܪܝܟ ܕܐܬܘܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "Brikh d'Atakh", translation: "Blessed be you (to female)", phonetic: "Brikh d-A-takh", script: "ܒܪܝܟ ܕܐܬܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",


  // More Verbs
  { word: "Sakh", translation: "To Wash", phonetic: "Sakh", script: "ܣܚ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Nashakh", translation: "To Clean", phonetic: "Na-shakh", script: "ܢܫܚ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Qatil", translation: "To Kill", phonetic: "Qa-til", script: "ܩܛܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Qayim", translation: "To Stand/Stay", phonetic: "Qa-yim", script: "ܩܐܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shakil", translation: "To Carry/Lift", phonetic: "Sha-kil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhim", translation: "To Throw/Put", phonetic: "Ra-khim", script: "ܪܟܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shakil", translation: "To Take", phonetic: "Sha-kil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhim", translation: "To Place", phonetic: "Ra-khim", script: "ܪܟܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shakil", translation: "To Buy", phonetic: "Sha-kil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhim", translation: "To Sell", phonetic: "Ra-khim", script: "ܪܟܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shakil", translation: "To Bring", phonetic: "Sha-kil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhim", translation: "To Send", phonetic: "Ra-khim", script: "ܪܟܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shakil", translation: "To Find", phonetic: "Sha-kil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhim", translation: "To Lose", phonetic: "Ra-khim", script: "ܪܟܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shakil", translation: "To Look", phonetic: "Sha-kil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhim", translation: "To Show", phonetic: "Ra-khim", script: "ܪܟܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shakil", translation: "To Ask", phonetic: "Sha-kil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhim", translation: "To Answer", phonetic: "Ra-khim", script: "ܪܟܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shakil", translation: "To Call", phonetic: "Sha-kil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhim", translation: "To Name", phonetic: "Ra-khim", script: "ܪܟܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",


  // Days of the Week
  { word: "Khamiša", translation: "Thursday", phonetic: "Kha-mi-ša", script: "ܚܡܝܫܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Iroha", translation: "Sunday", phonetic: "I-ro-ha", script: "ܝܪܘܚܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Trinbšaba", translation: "Monday", phonetic: "Trin-b-ša-ba", script: "ܬܪܝܢܒܫܒܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Tlitbšaba", translation: "Tuesday", phonetic: "Tlit-b-ša-ba", script: "ܬܠܝܬܒܫܒܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Arbibšaba", translation: "Wednesday", phonetic: "Ar-bib-ša-ba", script: "ܐܪܒܥܒܫܒܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Khamšibšaba", translation: "Friday", phonetic: "Kham-ši-b-ša-ba", script: "ܚܡܫܒܫܒܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",


  // Months & Seasons
  { word: "Kanun Qadmaya", translation: "January", phonetic: "Ka-nun Qad-ma-ya", script: "ܟܢܘܢ ܩܕܡܝܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Šbat", translation: "February", phonetic: "Šbat", script: "ܫܒܛ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Adar", translation: "March", phonetic: "A-dar", script: "ܐܕܪ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Nisan", translation: "April", phonetic: "Ni-san", script: "ܢܝܣܢ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Iyyar", translation: "May", phonetic: "Iy-yar", script: "ܐܝܪ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥziran", translation: "June", phonetic: "Ḥzi-ran", script: "ܚܙܝܪܢ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Tammuz", translation: "July", phonetic: "Tam-muz", script: "ܬܡܘܙ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ab", translation: "August", phonetic: "Ab", script: "ܐܒ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ilul", translation: "September", phonetic: "I-lul", script: "ܐܝܠܘܠ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Tišrin Qadmaya", translation: "October", phonetic: "Tiš-rin Qad-ma-ya", script: "ܬܫܪܝܢ ܩܕܡܝܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Tišrin Ḥraya", translation: "November", phonetic: "Tiš-rin Ḥra-ya", script: "ܬܫܪܝܢ ܚܪܝܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Kanun Ḥraya", translation: "December", phonetic: "Ka-nun Ḥra-ya", script: "ܟܢܘܢ ܚܪܝܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Kharta", translation: "Spring", phonetic: "Khar-ta", script: "ܟܪܬܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Qayṭa", translation: "Summer", phonetic: "Qay-ṭa", script: "ܩܝܛܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭarpa", translation: "Autumn/Fall", phonetic: "Ṭar-pa", script: "ܛܪܦܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Sitwa", translation: "Winter", phonetic: "Sit-wa", script: "ܣܬܘܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",


  // More Fruits & Vegetables
  { word: "Tīna", translation: "Fig", phonetic: "Tī-na", script: "ܬܐܢܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Rummana", translation: "Pomegranate", phonetic: "Rum-ma-na", script: "ܪܘܡܢܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Khawkha", translation: "Peach", phonetic: "Khaw-kha", script: "ܚܘܟܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Mešmeša", translation: "Apricot", phonetic: "Meš-me-ša", script: "ܡܫܡܫܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Kummatra", translation: "Pear", phonetic: "Kum-mat-ra", script: "ܟܘܡܬܪܐ", category: "food" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Talyana", translation: "Watermelon", phonetic: "Tal-ya-na", script: "ܛܠܝܢܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Bṭikha", translation: "Melon", phonetic: "Bṭi-kha", script: "ܒܛܝܟܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Limuna", translation: "Lemon", phonetic: "Li-mu-na", script: "ܠܝܡܘܢܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Burtuqala", translation: "Orange (fruit)", phonetic: "Bur-tu-qa-la", script: "ܒܘܪܬܘܩܠܐ", category: "food" }, image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=60",

  { word: "Ṣōna", translation: "Dates (fruit)", phonetic: "Ṣō-na", script: "ܨܘܢܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Gōzta", translation: "Walnut", phonetic: "Gōz-ta", script: "ܓܘܙܬܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Lōza", translation: "Almond", phonetic: "Lō-za", script: "ܠܘܙܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Fistōqa", translation: "Pistachio", phonetic: "Fis-tō-qa", script: "ܦܣܬܩܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Tuma", translation: "Garlic", phonetic: "Tu-ma", script: "ܬܘܡܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Pilpila", translation: "Pepper", phonetic: "Pil-pi-la", script: "ܦܠܦܠܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Karāt", translation: "Leek", phonetic: "Ka-rāt", script: "ܟܪܬ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Khassa", translation: "Lettuce", phonetic: "Khas-sa", script: "ܚܣܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Shilpa", translation: "Eggplant", phonetic: "Shil-pa", script: "ܫܠܦܐ", category: "food" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Kōsa", translation: "Zucchini", phonetic: "Kō-sa", script: "ܟܘܣܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Lifta", translation: "Turnip", phonetic: "Lif-ta", script: "ܠܦܬܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Gzara", translation: "Carrot", phonetic: "Gza-ra", script: "ܓܙܪܐ", category: "food" }, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60",

  { word: "Šalgam", translation: "Radish", phonetic: "Šal-gam", script: "ܫܠܓܡ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",


  // More Meats & Proteins
  { word: "Luḥma d-Khmara", translation: "Beef", phonetic: "Luḥ-ma d-Khma-ra", script: "ܠܘܚܡܐ ܕܚܡܪܐ", category: "food" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Luḥma d-Arva", translation: "Lamb", phonetic: "Luḥ-ma d-Ar-va", script: "ܠܘܚܡܐ ܕܐܪܒܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Luḥma d-Khanzira", translation: "Pork", phonetic: "Luḥ-ma d-Khan-zi-ra", script: "ܠܘܚܡܐ ܕܚܢܙܝܪܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Šamka", translation: "Fish (general)", phonetic: "Šam-ka", script: "ܫܡܟܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Qrusta", translation: "Shrimp", phonetic: "Qrus-ta", script: "ܩܪܘܣܬܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",


  // Kitchen & Cooking
  { word: "Sanduqa", translation: "Pot", phonetic: "San-du-qa", script: "ܣܢܕܘܩܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Qarora", translation: "Kettle", phonetic: "Qa-ro-ra", script: "ܩܪܘܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Piala", translation: "Bowl", phonetic: "Pia-la", script: "ܦܝܠܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Tannura", translation: "Oven", phonetic: "Tan-nu-ra", script: "ܬܢܘܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Maqliya", translation: "Frying Pan", phonetic: "Maq-li-ya", script: "ܡܩܠܝܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Zangīla", translation: "Basket", phonetic: "Zan-gī-la", script: "ܙܢܓܝܠܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭasla", translation: "Tray", phonetic: "Ṭas-la", script: "ܛܣܠܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Qadḥa", translation: "Pitcher", phonetic: "Qad-ḥa", script: "ܩܕܚܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Maḥbašta", translation: "Broom", phonetic: "Maḥ-baš-ta", script: "ܡܚܒܫܬܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Mapuḥta", translation: "Fan", phonetic: "Ma-puḥ-ta", script: "ܡܦܘܚܬܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Marpita", translation: "Blanket", phonetic: "Mar-pi-ta", script: "ܡܪܦܝܬܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Bēstha", translation: "Pillow", phonetic: "Bēs-tha", script: "ܒܝܣܬܐ", category: "home" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Simlā", translation: "Ladder", phonetic: "Sim-lā", script: "ܣܝܡܠܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Gāra", translation: "Roof", phonetic: "Gā-ra", script: "ܓܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Daraga", translation: "Stairs", phonetic: "Da-ra-ga", script: "ܕܪܓܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",


  // More Verbs
  { word: "Ḥli", translation: "To Wash", phonetic: "Ḥli", script: "ܚܠܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Tbi", translation: "To Cook", phonetic: "Tbi", script: "ܛܒܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60",

  { word: "Qli", translation: "To Fry", phonetic: "Qli", script: "ܩܠܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Blē", translation: "To Mix/Stir", phonetic: "Blē", script: "ܒܠܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Paš", translation: "To Stay/Remain", phonetic: "Paš", script: "ܦܫ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Npil", translation: "To Fall", phonetic: "Npil", script: "ܢܦܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Nḥit", translation: "To Descend/Go down", phonetic: "Nḥit", script: "ܢܚܬ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Sliq", translation: "To Ascend/Go up", phonetic: "Sliq", script: "ܣܠܩ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Pniā", translation: "To Turn", phonetic: "Pni-ā", script: "ܦܢܝܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Gdil", translation: "To Grow", phonetic: "Gdil", script: "ܓܕܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Qtil", translation: "To Kill", phonetic: "Qtil", script: "ܩܛܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥyi", translation: "To Live", phonetic: "Ḥyi", script: "ܚܝܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Myi", translation: "To Die", phonetic: "Myi", script: "ܡܝܬ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Tli", translation: "To Hang", phonetic: "Tli", script: "ܬܠܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Bni", translation: "To Build", phonetic: "Bni", script: "ܒܢܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥrib", translation: "To Destroy", phonetic: "Ḥrib", script: "ܚܪܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Pli", translation: "To Work/Plow", phonetic: "Pli", script: "ܦܠܚ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Zri", translation: "To Plant/Sow", phonetic: "Zri", script: "ܙܪܥ", category: "verb" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥṣid", translation: "To Harvest", phonetic: "Ḥṣid", script: "ܚܨܕ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Nši", translation: "To Forget", phonetic: "Nši", script: "ܢܫܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Dkhir", translation: "To Remember", phonetic: "Dkhir", script: "ܕܟܪ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥšib", translation: "To Think", phonetic: "Ḥšib", script: "ܚܫܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mlil", translation: "To Speak/Talk", phonetic: "Mlil", script: "ܡܠܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Šqi", translation: "To Be Silent", phonetic: "Šqi", script: "ܫܩܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Q'ā", translation: "To Cry/Shout", phonetic: "Q'ā", script: "ܩܥܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Zmēr", translation: "To Sing", phonetic: "Zmēr", script: "ܙܡܪ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rqiḏ", translation: "To Dance", phonetic: "Rqi-ḏ", script: "ܪܩܕ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Ylib", translation: "To Study/Learn", phonetic: "Ylib", script: "ܝܠܦ", category: "verb" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Qlē", translation: "To Teach", phonetic: "Qlē", script: "ܩܠܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Sbi", translation: "To Satisfy/Be full", phonetic: "Sbi", script: "ܣܒܥ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Kpin", translation: "To Be hungry", phonetic: "Kpin", script: "ܟܦܢ", category: "verb" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Ṣhi", translation: "To Be thirsty", phonetic: "Ṣhi", script: "ܨܗܝ", category: "verb" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Lbiš", translation: "To Wear/Dress", phonetic: "Lbiš", script: "ܠܒܫ", category: "verb" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Šliḥ", translation: "To Undress", phonetic: "Šliḥ", script: "ܫܠܚ", category: "verb" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Rkiv", translation: "To Ride", phonetic: "Rkiv", script: "ܪܟܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Nḥit", translation: "To Get down/Descend", phonetic: "Nḥit", script: "ܢܚܬ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Pqiḏ", translation: "To Order/Command", phonetic: "Pqi-ḏ", script: "ܦܩܕ", category: "verb" }, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",

  { word: "Šmi", translation: "To Obey", phonetic: "Šmi", script: "ܫܡܥ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Sni", translation: "To Hate", phonetic: "Sni", script: "ܣܢܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥib", translation: "To Love", phonetic: "Ḥib", script: "ܚܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Nši", translation: "To Kiss", phonetic: "Nši", script: "ܢܫܩ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥbiq", translation: "To Hug/Embrace", phonetic: "Ḥbiq", script: "ܚܒܩ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",


  // More Animals
  { word: "Para", translation: "Cow", phonetic: "Pa-ra", script: "ܦܪܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭarpa", translation: "Goat", phonetic: "Ṭar-pa", script: "ܛܪܦܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Khanzira", translation: "Pig", phonetic: "Khan-zi-ra", script: "ܚܢܙܝܪܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Dabba", translation: "Bear", phonetic: "Dab-ba", script: "ܕܒܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Dība", translation: "Wolf", phonetic: "Dī-ba", script: "ܕܝܒܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Talpa", translation: "Fox", phonetic: "Tal-pa", script: "ܬܠܦܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1559449927-41787c188b36?w=800&auto=format&fit=crop&q=60",

  { word: "Arnava", translation: "Rabbit", phonetic: "Ar-na-va", script: "ܐܪܢܒܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Pāra", translation: "Mouse/Rat", phonetic: "Pā-ra", script: "ܦܪܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Namla", translation: "Ant", phonetic: "Nam-la", script: "ܢܡܠܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Dbōrta", translation: "Bee", phonetic: "Dbōr-ta", script: "ܕܒܘܪܬܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭayra", translation: "Bird", phonetic: "Ṭay-ra", script: "ܛܝܪܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Nišra", translation: "Eagle", phonetic: "Niš-ra", script: "ܢܫܪܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Tarnagōlta", translation: "Rooster/Hen", phonetic: "Tar-na-gōl-ta", script: "ܬܪܢܓܘܠܬܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Barōza", translation: "Duck", phonetic: "Ba-rō-za", script: "ܒܪܘܙܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Wazza", translation: "Goose", phonetic: "Waz-za", script: "ܘܙܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Yōna", translation: "Dove/Pigeon", phonetic: "Yō-na", script: "ܝܘܢܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥiwya", translation: "Snake/Serpent", phonetic: "Ḥiw-ya", script: "ܚܘܝܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Kurpada", translation: "Frog", phonetic: "Kur-pa-da", script: "ܟܘܪܦܕܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Šōna", translation: "Lizard", phonetic: "Šō-na", script: "ܫܘܢܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Parpāša", translation: "Butterfly", phonetic: "Par-pā-ša", script: "ܦܪܦܫܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Dadūna", translation: "Fly", phonetic: "Da-dū-na", script: "ܕܕܘܢܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Qarda", translation: "Mosquito", phonetic: "Qar-da", script: "ܩܪܕܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Gamal", translation: "Camel", phonetic: "Ga-mal", script: "ܓܡܠ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Pīla", translation: "Elephant", phonetic: "Pī-la", script: "ܦܝܠܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Qōpa", translation: "Monkey", phonetic: "Qō-pa", script: "ܩܘܦܐ", category: "animal" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",


  // More Nature Words
  { word: "Šmaya", translation: "Sky/Heaven", phonetic: "Šma-ya", script: "ܫܡܝܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Ar'a", translation: "Earth/Ground", phonetic: "Ar-'a", script: "ܐܪܥܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Shuna", translation: "Stone/Rock", phonetic: "Shu-na", script: "ܫܘܢܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Khala", translation: "Sand", phonetic: "Kha-la", script: "ܚܠܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭīna", translation: "Mud/Clay", phonetic: "Ṭī-na", script: "ܛܝܢܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Mayā", translation: "Water (plural)", phonetic: "Ma-yā", script: "ܡܝܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Rāma", translation: "Thunder", phonetic: "Rā-ma", script: "ܪܥܡܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Barqa", translation: "Lightning", phonetic: "Bar-qa", script: "ܒܪܩܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Qešta", translation: "Rainbow", phonetic: "Qeš-ta", script: "ܩܫܬܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&auto=format&fit=crop&q=60",

  { word: "Brē", translation: "Desert", phonetic: "Brē", script: "ܒܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Midbrā", translation: "Wilderness", phonetic: "Mid-brā", script: "ܡܕܒܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Garra", translation: "Cave", phonetic: "Gar-ra", script: "ܓܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Dašta", translation: "Plain/Field", phonetic: "Daš-ta", script: "ܕܫܬܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60",

  { word: "Gāzarta", translation: "Island", phonetic: "Gā-zar-ta", script: "ܓܙܪܬܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Qešā", translation: "Forest/Woods", phonetic: "Qe-šā", script: "ܩܫܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Rē'uta", translation: "Pasture", phonetic: "Rē-'u-ta", script: "ܪܥܘܬܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Yabal", translation: "Hill", phonetic: "Ya-bal", script: "ܝܒܠ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Gōba", translation: "Valley", phonetic: "Gō-ba", script: "ܓܘܒܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",


  // More Body Parts
  { word: "Gaba", translation: "Shoulder", phonetic: "Ga-ba", script: "ܓܒܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Khada", translation: "Breast/Chest", phonetic: "Kha-da", script: "ܚܕܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Ṣilā", translation: "Rib", phonetic: "Ṣi-lā", script: "ܨܠܥܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Kasā", translation: "Belly/Abdomen", phonetic: "Ka-sā", script: "ܟܣܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥaṣā", translation: "Waist/Lower back", phonetic: "Ḥa-ṣā", script: "ܚܨܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Pakhda", translation: "Thigh", phonetic: "Pakh-da", script: "ܦܟܕܐ", category: "body" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Šāqa", translation: "Leg", phonetic: "Šā-qa", script: "ܫܩܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Aqla", translation: "Ankle", phonetic: "Aq-la", script: "ܥܩܠܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Ṣiv'a", translation: "Toe", phonetic: "Ṣiv-'a", script: "ܨܒܥܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭipra", translation: "Nail/Fingernail", phonetic: "Ṭip-ra", script: "ܛܦܪܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Karsa", translation: "Bone", phonetic: "Kar-sa", script: "ܟܪܣܐ", category: "body" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Dma", translation: "Blood", phonetic: "Dma", script: "ܕܡܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Našma", translation: "Breath/Soul", phonetic: "Naš-ma", script: "ܢܫܡܐ", category: "body" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Napša", translation: "Soul/Life", phonetic: "Nap-ša", script: "ܢܦܫܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Rēha", translation: "Smell/Scent", phonetic: "Rē-ha", script: "ܪܝܚܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭa'ma", translation: "Taste", phonetic: "Ṭa-'ma", script: "ܛܥܡܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Qāla", translation: "Voice", phonetic: "Qā-la", script: "ܩܠܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Dmē", translation: "Tears", phonetic: "Dmē", script: "ܕܡܥܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Rukha", translation: "Saliva/Spit", phonetic: "Ru-kha", script: "ܪܘܟܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Šaptha", translation: "Lip", phonetic: "Šap-tha", script: "ܫܦܬܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Gavīna", translation: "Eyebrow", phonetic: "Ga-vī-na", script: "ܓܒܝܢܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Šep'a", translation: "Eyelash", phonetic: "Šep-'a", script: "ܫܦܥܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Daqna", translation: "Beard", phonetic: "Daq-na", script: "ܕܩܢܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Sbarta", translation: "Mustache", phonetic: "Sbar-ta", script: "ܣܒܪܬܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Qādla", translation: "Neck", phonetic: "Qād-la", script: "ܩܕܠܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Gargartha", translation: "Throat", phonetic: "Gar-gar-tha", script: "ܓܪܓܪܬܐ", category: "body" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",


  // More Clothing
  { word: "Nakhta", translation: "Dress", phonetic: "Nakh-ta", script: "ܢܚܬܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭaylasa", translation: "Veil/Scarf", phonetic: "Ṭay-la-sa", script: "ܛܝܠܣܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=60",

  { word: "Zunara", translation: "Belt", phonetic: "Zu-na-ra", script: "ܙܢܪܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Sarwāla", translation: "Trousers", phonetic: "Sar-wā-la", script: "ܣܪܘܠܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Quptha", translation: "Coat", phonetic: "Qup-tha", script: "ܩܘܦܬܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Jubba", translation: "Robe", phonetic: "Jub-ba", script: "ܓܘܒܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Idara", translation: "Sleeve", phonetic: "I-da-ra", script: "ܐܝܕܪܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Gēba", translation: "Pocket", phonetic: "Gē-ba", script: "ܓܝܒܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Qnāta", translation: "Button", phonetic: "Qnā-ta", script: "ܩܢܬܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Khayṭa", translation: "Thread", phonetic: "Khay-ṭa", script: "ܚܝܛܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Makhṭa", translation: "Needle", phonetic: "Makh-ṭa", script: "ܡܟܬܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Qaṣa", translation: "Scissors", phonetic: "Qa-ṣa", script: "ܩܨܐ", category: "clothing" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",


  // Pronouns & Grammar
  { word: "Ana", translation: "I", phonetic: "A-na", script: "ܐܢܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "At", translation: "You (masc. sing.)", phonetic: "At", script: "ܐܢܬ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Ati", translation: "You (fem. sing.)", phonetic: "A-ti", script: "ܐܢܬܝ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Awa", translation: "He", phonetic: "A-wa", script: "ܗܘ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Aya", translation: "She", phonetic: "A-ya", script: "ܗܝ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Akhnan", translation: "We", phonetic: "Akh-nan", script: "ܐܚܢܢ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Atwon", translation: "You (masc. pl.)", phonetic: "At-won", script: "ܐܢܬܘܢ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Atēn", translation: "You (fem. pl.)", phonetic: "A-tēn", script: "ܐܢܬܝܢ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Anē", translation: "They (masc.)", phonetic: "A-nē", script: "ܐܢܝ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Anēn", translation: "They (fem.)", phonetic: "A-nēn", script: "ܐܢܝܢ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",


  // More Common Words
  { word: "Kul", translation: "All/Every", phonetic: "Kul", script: "ܟܠ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Kūlē", translation: "Everyone", phonetic: "Kū-lē", script: "ܟܠܗ", category: "noun" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Meddem", translation: "Something", phonetic: "Med-dem", script: "ܡܕܡ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "La Khit", translation: "Nothing", phonetic: "La Khit", script: "ܠܐ ܚܬ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Haḏā", translation: "This (masc.)", phonetic: "Ha-ḏā", script: "ܗܕܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Haḏē", translation: "This (fem.)", phonetic: "Ha-ḏē", script: "ܗܕܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Haw", translation: "That (masc.)", phonetic: "Haw", script: "ܗܘ", category: "noun" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Hayē", translation: "That (fem.)", phonetic: "Ha-yē", script: "ܗܝ", category: "noun" }, image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800&auto=format&fit=crop&q=60",

  { word: "Hālen", translation: "These", phonetic: "Hā-len", script: "ܗܠܝܢ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Hānōn", translation: "Those", phonetic: "Hā-nōn", script: "ܗܢܘܢ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Raba", translation: "Many/Much", phonetic: "Ra-ba", script: "ܪܒܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",

  { word: "Zō'a", translation: "Few/Little", phonetic: "Zō-'a", script: "ܙܥܘܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Šapirā", translation: "Beautiful/Good", phonetic: "Ša-pi-rā", script: "ܫܦܝܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Bīša", translation: "Bad/Evil", phonetic: "Bī-ša", script: "ܒܝܫܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Ḥadṯa", translation: "New", phonetic: "Ḥad-ṯa", script: "ܚܕܬܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "'Atiqa", translation: "Old/Ancient", phonetic: "'A-ti-qa", script: "ܥܬܝܩܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Yaqurā", translation: "Precious/Heavy", phonetic: "Ya-qu-rā", script: "ܝܩܘܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Qalīlā", translation: "Light/Easy", phonetic: "Qa-lī-lā", script: "ܩܠܝܠܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Khwārā", translation: "White/Pure", phonetic: "Khwā-rā", script: "ܚܘܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭuvrā", translation: "Clean/Pure", phonetic: "Ṭuv-rā", script: "ܛܘܒܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Ṭanpā", translation: "Dirty/Unclean", phonetic: "Ṭan-pā", script: "ܛܢܦܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",

  { word: "Halyā", translation: "Sweet", phonetic: "Hal-yā", script: "ܚܠܝܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Marirā", translation: "Bitter", phonetic: "Ma-ri-rā", script: "ܡܪܝܪܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Melyā", translation: "Full", phonetic: "Mel-yā", script: "ܡܠܝܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Sriqa", translation: "Empty", phonetic: "Sri-qa", script: "ܣܪܝܩܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",


  // More Phrases
  { word: "Ana Itwan", translation: "I am here", phonetic: "A-na It-wan", script: "ܐܢܐ ܐܝܬܘܢ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "La Yadin ana", translation: "I don't know", phonetic: "La Ya-din a-na", script: "ܠܐ ܝܕܥ ܐܢܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Yadin ana", translation: "I know", phonetic: "Ya-din a-na", script: "ܝܕܥ ܐܢܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ba'en ana", translation: "I want", phonetic: "Ba-'en a-na", script: "ܒܥܐ ܐܢܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "La Ba'en", translation: "I don't want", phonetic: "La Ba-'en", script: "ܠܐ ܒܥܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Kamen Khit", translation: "One more time", phonetic: "Ka-men Khit", script: "ܟܡܢ ܚܕܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Min Fadhlokh", translation: "Please (to male)", phonetic: "Min Fadh-lokh", script: "ܡܢ ܦܕܠܘܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "Min Fadhlakh", translation: "Please (to female)", phonetic: "Min Fadh-lakh", script: "ܡܢ ܦܕܠܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "La Marri", translation: "Don't worry", phonetic: "La Mar-ri", script: "ܠܐ ܡܪܝ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "Kheena", translation: "Slowly", phonetic: "Khee-na", script: "ܟܝܢܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Qalula", translation: "Quickly", phonetic: "Qa-lu-la", script: "ܩܠܘܠܐ", category: "adjective" }, image: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&auto=format&fit=crop&q=60",

  { word: "Šapir", translation: "Well/Good", phonetic: "Ša-pir", script: "ܫܦܝܪ", category: "adjective" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Amin", translation: "Amen/Truly", phonetic: "A-min", script: "ܐܡܝܢ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "Barikh Mor", translation: "Bless us, Lord", phonetic: "Ba-rikh Mor", script: "ܒܪܝܟ ܡܪܝ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",


  // More Common Greetings & Phrases
  { word: "Safa", translation: "Morning", phonetic: "Sa-fa", script: "ܨܦܪܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Tsafra Taba", translation: "Good morning", phonetic: "Tsaf-ra Ta-ba", script: "ܨܦܪܐ ܛܒܐ", category: "greeting" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Ramsha Taba", translation: "Good evening", phonetic: "Ram-sha Ta-ba", script: "ܪܡܫܐ ܛܒܐ", category: "greeting" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Lele Taba", translation: "Good night", phonetic: "Le-le Ta-ba", script: "ܠܠܝܐ ܛܒܐ", category: "greeting" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Brakhta", translation: "Blessing", phonetic: "Brakh-ta", script: "ܒܪܟܬܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Khaya Taba", translation: "Long life / Good health", phonetic: "Kha-ya Ta-ba", script: "ܚܝܐ ܛܒܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mabrukha", translation: "Congratulations", phonetic: "Mab-ru-kha", script: "ܡܒܪܘܟܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=800&auto=format&fit=crop&q=60",

  { word: "Eda Breekha", translation: "Merry Christmas", phonetic: "E-da Bree-kha", script: "ܥܐܕܐ ܒܪܝܟܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1509099836639-18ba02e2e1ba?w=800&auto=format&fit=crop&q=60",

  { word: "Shatta Breekha", translation: "Happy New Year", phonetic: "Shat-ta Bree-kha", script: "ܫܢܬܐ ܒܪܝܟܬܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Shata d'Khaye", translation: "Year of life (birthday wish)", phonetic: "Sha-ta d-Kha-ye", script: "ܫܢܬܐ ܕܚܝܐ", category: "phrase" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Khat Bokh", translation: "I love you (to male)", phonetic: "Khat Bo-kh", script: "ܟܬ ܒܘܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Khat Bakh", translation: "I love you (to female)", phonetic: "Khat Ba-kh", script: "ܟܬ ܒܟ", category: "phrase" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Khuba", translation: "Love", phonetic: "Khu-ba", script: "ܚܘܒܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Khwab", translation: "Friend (male)", phonetic: "Khwab", script: "ܚܒܪܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Khwarta", translation: "Friend (female)", phonetic: "Khwar-ta", script: "ܚܒܪܬܐ", category: "noun" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",


  // More Verbs & Actions
  { word: "Azil", translation: "Go / Going", phonetic: "A-zil", script: "ܐܙܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Ate", translation: "Come / Coming", phonetic: "A-te", script: "ܐܬܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Yatib", translation: "Sit / Sitting", phonetic: "Ya-tib", script: "ܝܬܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Qaym", translation: "Stand / Standing", phonetic: "Qaym", script: "ܩܝܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Rakhitz", translation: "Run / Running", phonetic: "Ra-khitz", script: "ܪܚܨ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mhalikh", translation: "Walk / Walking", phonetic: "Mha-likh", script: "ܡܗܠܟ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Pateakh", translation: "Open / Opening", phonetic: "Pa-te-akh", script: "ܦܬܚ", category: "verb" }, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60",

  { word: "Sakir", translation: "Close / Closing", phonetic: "Sa-kir", script: "ܣܟܪ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Yadi", translation: "Know / Knowing", phonetic: "Ya-di", script: "ܝܕܥ", category: "verb" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Shami", translation: "Hear / Listening", phonetic: "Sha-mi", script: "ܫܡܥ", category: "verb" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Khazi", translation: "See / Seeing", phonetic: "Kha-zi", script: "ܚܙܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Amir", translation: "Say / Saying", phonetic: "A-mir", script: "ܐܡܪ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mmalil", translation: "Speak / Speaking", phonetic: "Mma-lil", script: "ܡܠܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Khatib", translation: "Write / Writing", phonetic: "Kha-tib", script: "ܟܬܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Qari", translation: "Read / Reading", phonetic: "Qa-ri", script: "ܩܪܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Yalip", translation: "Learn / Learning", phonetic: "Ya-lip", script: "ܝܠܦ", category: "verb" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Malip", translation: "Teach / Teaching", phonetic: "Ma-lip", script: "ܡܠܦ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shayil", translation: "Ask / Asking", phonetic: "Sha-yil", script: "ܫܐܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mkhapir", translation: "Search / Searching", phonetic: "Mkha-pir", script: "ܡܚܦܪ", category: "verb" }, image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&auto=format&fit=crop&q=60",

  { word: "Yatwa", translation: "Gave / Give", phonetic: "Yat-wa", script: "ܝܗܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Saqil", translation: "Take / Taking", phonetic: "Sa-qil", script: "ܫܩܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shadir", translation: "Send / Sending", phonetic: "Sha-dir", script: "ܫܕܪ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mbasim", translation: "Fix / Fixing", phonetic: "Mba-sim", script: "ܡܒܣܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Khawib", translation: "Think / Thinking", phonetic: "Kha-wib", script: "ܚܫܒ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Bayi", translation: "Want / Wanting", phonetic: "Ba-yi", script: "ܒܥܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mkhayil", translation: "Can / Able to", phonetic: "Mkha-yil", script: "ܡܟܝܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Msalli", translation: "Pray / Praying", phonetic: "Msal-li", script: "ܡܨܠܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mbarikh", translation: "Bless / Blessing", phonetic: "Mba-rikh", script: "ܡܒܪܟ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mshadir", translation: "Help / Helping", phonetic: "Msha-dir", script: "ܡܫܕܪ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Mqayim", translation: "Stay / Staying", phonetic: "Mqa-yim", script: "ܡܩܝܡ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Shapil", translation: "Pull / Pulling", phonetic: "Sha-pil", script: "ܫܦܠ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Daqi", translation: "Push / Pushing", phonetic: "Da-qi", script: "ܕܩܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Tali", translation: "Hang / Hanging", phonetic: "Ta-li", script: "ܬܠܐ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Nakhit", translation: "Fall / Falling", phonetic: "Na-khit", script: "ܢܚܬ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Sliq", translation: "Climb / Go up", phonetic: "Sliq", script: "ܣܠܩ", category: "verb" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",


  // Household & Daily Life
  { word: "Tara", translation: "Door", phonetic: "Ta-ra", script: "ܬܪܥܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Kawta", translation: "Window", phonetic: "Kaw-ta", script: "ܟܘܬܐ", category: "home" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Shqapa", translation: "Ceiling", phonetic: "Shqa-pa", script: "ܫܩܦܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Araa", translation: "Floor/Ground", phonetic: "Ar-aa", script: "ܐܪܥܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Gayra", translation: "Wall", phonetic: "Gay-ra", script: "ܓܕܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Nuhra", translation: "Light/Lamp", phonetic: "Nuh-ra", script: "ܢܘܗܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Madkhna", translation: "Kitchen", phonetic: "Mad-khna", script: "ܡܕܟܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Khawshekha", translation: "Bathroom", phonetic: "Khaw-she-kha", script: "ܚܘܫܟܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Madrasha", translation: "Bedroom", phonetic: "Mad-ra-sha", script: "ܡܕܪܫܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Gardina", translation: "Garden", phonetic: "Gar-di-na", script: "ܓܪܕܝܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=60",

  { word: "Saqpa", translation: "Roof", phonetic: "Saq-pa", script: "ܣܩܦܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Daraja", translation: "Stairs", phonetic: "Da-ra-ja", script: "ܕܪܓܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Tanura", translation: "Oven", phonetic: "Ta-nu-ra", script: "ܬܢܘܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Makhla", translation: "Food/Meal", phonetic: "Makh-la", script: "ܡܐܟܠܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Shaqta", translation: "Drink", phonetic: "Shaq-ta", script: "ܫܩܝܬܐ", category: "food" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Sayna", translation: "Plate", phonetic: "Say-na", script: "ܨܝܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Kasa", translation: "Cup/Glass", phonetic: "Ka-sa", script: "ܟܣܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Sakina", translation: "Knife", phonetic: "Sa-ki-na", script: "ܣܟܝܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Purshana", translation: "Spoon", phonetic: "Pur-sha-na", script: "ܦܘܪܫܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Qawra", translation: "Fork", phonetic: "Qaw-ra", script: "ܩܘܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Tarpisa", translation: "Table", phonetic: "Tar-pi-sa", script: "ܛܪܦܝܣܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Sapla", translation: "Bowl", phonetic: "Sap-la", script: "ܣܦܠܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Tanjara", translation: "Pot", phonetic: "Tan-ja-ra", script: "ܬܢܓܪܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Nakhtana", translation: "Towel", phonetic: "Nakh-ta-na", script: "ܢܟܬܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Sabuna", translation: "Soap", phonetic: "Sa-bu-na", script: "ܣܒܘܢܐ", category: "home" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",

  { word: "Mushkha", translation: "Oil", phonetic: "Mush-kha", script: "ܡܫܚܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Milkha", translation: "Salt", phonetic: "Mil-kha", script: "ܡܠܚܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Khala", translation: "Vinegar", phonetic: "Kha-la", script: "ܚܠܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Dubsha", translation: "Honey", phonetic: "Dub-sha", script: "ܕܒܫܐ", category: "food" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Kheshla", translation: "Fruit", phonetic: "Khesh-la", script: "ܚܫܠܐ", category: "food" }, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60",

  { word: "Yarqa", translation: "Vegetable", phonetic: "Yar-qa", script: "ܝܪܩܐ", category: "food" }, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60",


  // More Time Expressions
  { word: "Yawma", translation: "Day", phonetic: "Yaw-ma", script: "ܝܘܡܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Lele", translation: "Night", phonetic: "Le-le", script: "ܠܠܝܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Shata", translation: "Year", phonetic: "Sha-ta", script: "ܫܢܬܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Yarha", translation: "Month", phonetic: "Yar-ha", script: "ܝܪܚܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Shabta", translation: "Week", phonetic: "Shab-ta", script: "ܫܒܬܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Sha'ta", translation: "Hour", phonetic: "Sha'-ta", script: "ܫܥܬܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Regha", translation: "Minute/Moment", phonetic: "Reg-ha", script: "ܪܓܥܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Hashâ", translation: "Now", phonetic: "Ha-shâ", script: "ܗܫܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Qadam", translation: "Before/Earlier", phonetic: "Qa-dam", script: "ܩܕܡ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Bathar", translation: "After/Later", phonetic: "Ba-thar", script: "ܒܬܪ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Yawma Akhrin", translation: "Tomorrow", phonetic: "Yaw-ma Akh-rin", script: "ܝܘܡܐ ܐܚܪܝܢ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Etmali", translation: "Yesterday", phonetic: "Et-ma-li", script: "ܐܬܡܠܝ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Awdana", translation: "Always", phonetic: "Aw-da-na", script: "ܐܘܕܢܐ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Mitumt", translation: "Never", phonetic: "Mi-tumt", script: "ܡܬܘܡܬ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Qalil", translation: "Sometimes", phonetic: "Qa-lil", script: "ܩܠܝܠ", category: "time" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",


  // More Numbers
  { word: "Tlathsar", translation: "Thirteen", phonetic: "Tlath-sar", script: "ܬܠܬܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Arbassar", translation: "Fourteen", phonetic: "Arba-ssar", script: "ܐܪܒܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Khamshassar", translation: "Fifteen", phonetic: "Khamsha-ssar", script: "ܚܡܫܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Eshtassar", translation: "Sixteen", phonetic: "Eshta-ssar", script: "ܫܬܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Shwassar", translation: "Seventeen", phonetic: "Shwa-ssar", script: "ܫܒܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tmanyassar", translation: "Eighteen", phonetic: "Tmanya-ssar", script: "ܬܡܢܝܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tshassar", translation: "Nineteen", phonetic: "Tsha-ssar", script: "ܬܫܥܣܪ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tlatin", translation: "Thirty", phonetic: "Tla-tin", script: "ܬܠܬܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Arbin", translation: "Forty", phonetic: "Ar-bin", script: "ܐܪܒܥܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Khamshiـn", translation: "Fifty", phonetic: "Khamshi-n", script: "ܚܡܫܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Eshtin", translation: "Sixty", phonetic: "Esh-tin", script: "ܫܬܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Shwin", translation: "Seventy", phonetic: "Shwin", script: "ܫܒܥܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tmanin", translation: "Eighty", phonetic: "Tma-nin", script: "ܬܡܢܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Tshin", translation: "Ninety", phonetic: "Tshin", script: "ܬܫܥܝܢ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Ima", translation: "Hundred", phonetic: "I-ma", script: "ܡܐܐ", category: "number" }, image: "https://images.unsplash.com/photo-1518893063132-36ae2366d998?w=800&auto=format&fit=crop&q=60",

  { word: "Alpa", translation: "Thousand", phonetic: "Al-pa", script: "ܐܠܦܐ", category: "number" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",


  // Weather & Nature
  { word: "Shamsha", translation: "Sun", phonetic: "Sham-sha", script: "ܫܡܫܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&auto=format&fit=crop&q=60",

  { word: "Kawkwa", translation: "Star", phonetic: "Kaw-kwa", script: "ܟܘܟܒܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop&q=60",

  { word: "Shmaya", translation: "Sky/Heaven", phonetic: "Shma-ya", script: "ܫܡܝܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Ara", translation: "Earth", phonetic: "A-ra", script: "ܐܪܥܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Mitra", translation: "Rain", phonetic: "Mit-ra", script: "ܡܛܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&auto=format&fit=crop&q=60",

  { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop&q=60",

  { word: "Rukha", translation: "Wind", phonetic: "Ru-kha", script: "ܪܘܚܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Anana", translation: "Cloud", phonetic: "A-na-na", script: "ܥܢܢܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Barqa", translation: "Lightning", phonetic: "Bar-qa", script: "ܒܪܩܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Rama", translation: "Thunder", phonetic: "Ra-ma", script: "ܪܥܡܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Shimsha", translation: "Warm/Heat", phonetic: "Shim-sha", script: "ܫܡܫܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60",

  { word: "Qarta", translation: "Cold", phonetic: "Qar-ta", script: "ܩܪܬܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1551524164-6cf77f63edb6?w=800&auto=format&fit=crop&q=60",

  { word: "Ilana", translation: "Tree", phonetic: "I-la-na", script: "ܐܝܠܢܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1513836279014-a89f7a760af0?w=800&auto=format&fit=crop&q=60",

  { word: "Habhaba", translation: "Flower", phonetic: "Hab-ha-ba", script: "ܗܒܗܒܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1490750967868-58cb75065ed4?w=800&auto=format&fit=crop&q=60",

  { word: "Yarqa", translation: "Leaf", phonetic: "Yar-qa", script: "ܛܪܦܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Shwila", translation: "Root", phonetic: "Shwi-la", script: "ܫܪܫܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",

  { word: "Darta", translation: "Garden", phonetic: "Dar-ta", script: "ܕܪܬܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=60",

  { word: "Tura", translation: "Mountain", phonetic: "Tu-ra", script: "ܛܘܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60",

  { word: "Nahra", translation: "River", phonetic: "Nah-ra", script: "ܢܗܪܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&auto=format&fit=crop&q=60",

  { word: "Yama", translation: "Sea/Lake", phonetic: "Ya-ma", script: "ܝܡܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&auto=format&fit=crop&q=60",

  { word: "Kippa", translation: "Stone/Rock", phonetic: "Kip-pa", script: "ܟܐܦܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1529676468690-a442a6c78fcd?w=800&auto=format&fit=crop&q=60",

  { word: "Khala", translation: "Sand", phonetic: "Kha-la", script: "ܚܠܐ", category: "nature" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",


  // Transportation & Travel
  { word: "Urha", translation: "Road/Way", phonetic: "Ur-ha", script: "ܐܘܪܚܐ", category: "travel" }, image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=800&auto=format&fit=crop&q=60",

  { word: "Gishra", translation: "Bridge", phonetic: "Gish-ra", script: "ܓܫܪܐ", category: "travel" }, image: "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60",

  { word: "Mdinta", translation: "City/Town", phonetic: "Mdin-ta", script: "ܡܕܝܢܬܐ", category: "place" }, image: "https://images.unsplash.com/photo-1596423734564-354b1314984c?w=800&auto=format&fit=crop&q=60",

  { word: "Qrita", translation: "Village", phonetic: "Qri-ta", script: "ܩܪܝܬܐ", category: "place" }, image: "https://images.unsplash.com/photo-1596423734564-354b1314984c?w=800&auto=format&fit=crop&q=60",

  { word: "Shuqa", translation: "Market", phonetic: "Shu-qa", script: "ܫܘܩܐ", category: "place" }, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60",

  { word: "Makhsana", translation: "Store/Shop", phonetic: "Makh-sa-na", script: "ܡܟܣܢܐ", category: "place" }, image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=60",

  { word: "Beth Kaspe", translation: "Bank", phonetic: "Beth Kas-pe", script: "ܒܝܬ ܟܣܦܐ", category: "place" }, image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop&q=60",

  { word: "Beth Slota", translation: "Church", phonetic: "Beth Slo-ta", script: "ܒܝܬ ܨܠܘܬܐ", category: "place" }, image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format&fit=crop&q=60",

  { word: "Beth Sipre", translation: "Library", phonetic: "Beth Sip-re", script: "ܒܝܬ ܣܦܪܐ", category: "place" }, image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop&q=60",

  { word: "Beth Mrisha", translation: "Hospital", phonetic: "Beth Mri-sha", script: "ܒܝܬ ܡܪܥܐ", category: "place" }, image: "https://images.unsplash.com/photo-1587351021759-3e566b9a44fd?w=800&auto=format&fit=crop&q=60",

  { word: "Beth Madrasha", translation: "School", phonetic: "Beth Mad-ra-sha", script: "ܒܝܬ ܡܕܪܫܐ", category: "place" }, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60",

  { word: "Rakba", translation: "Train", phonetic: "Rak-ba", script: "ܪܟܒܐ", category: "travel" }, image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&auto=format&fit=crop&q=60",

  { word: "Tayarta", translation: "Airplane", phonetic: "Ta-yar-ta", script: "ܛܝܪܬܐ", category: "travel" }, image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60",

  { word: "Sipinta", translation: "Boat/Ship", phonetic: "Si-pin-ta", script: "ܣܦܝܢܬܐ", category: "travel" }, image: "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60",

  { word: "Rukhba", translation: "Vehicle", phonetic: "Rukh-ba", script: "ܪܟܘܒܐ", category: "travel" }, image: "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60",

  { word: "Bayka", translation: "Bicycle", phonetic: "Bay-ka", script: "ܒܝܟܐ", category: "travel" }, image: "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800&auto=format&fit=crop&q=60",


  // More Emotions & States
  { word: "Khudta", translation: "Joy/Happiness", phonetic: "Khud-ta", script: "ܚܕܘܬܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Kriuta", translation: "Sadness/Sorrow", phonetic: "Kriu-ta", script: "ܟܪܝܘܬܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Dekhla", translation: "Fear", phonetic: "Dekh-la", script: "ܕܚܠܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",

  { word: "Ghuza", translation: "Anger", phonetic: "Ghu-za", script: "ܪܘܓܙܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Shurkha", translation: "Hope", phonetic: "Shur-kha", script: "ܣܘܟܝܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Tara", translation: "Peace/Calm", phonetic: "Ta-ra", script: "ܫܠܡܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Teghmurta", translation: "Surprise", phonetic: "Tegh-mur-ta", script: "ܬܕܡܘܪܬܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop&q=60",

  { word: "Buhta", translation: "Shame", phonetic: "Buh-ta", script: "ܒܗܬܬܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

  { word: "Tayruta", translation: "Patience", phonetic: "Tay-ru-ta", script: "ܡܣܝܒܪܢܘܬܐ", category: "emotion" }, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=60",

];

// Export a version with guaranteed images using category fallbacks
export const dictionaryDataWithImages: DictionaryEntry[] = dictionaryData.map((entry) => ({
  ...entry,
  image: entry.image ?? categoryImageMap[entry.category] ?? categoryImageMap.default,
}));
