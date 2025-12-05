export interface DictionaryEntry {
  word: string;
  translation: string;
  phonetic: string;
  script: string;
  category: 'greeting' | 'noun' | 'verb' | 'adjective' | 'phrase' | 'number' | 'food' | 'family' | 'color' | 'time' | 'place' | 'animal' | 'nature' | 'body' | 'home' | 'profession' | 'clothing' | 'emotion' | 'travel' | 'question' | 'preposition' | 'conjunction';
}

export const dictionaryData: DictionaryEntry[] = [
  // Greetings
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", script: "ܫܠܡܐ", category: "greeting" },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", script: "ܫܠܡܐ ܠܘܟ", category: "greeting" },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", script: "ܫܠܡܐ ܠܟ", category: "greeting" },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", script: "ܒܫܝܢܐ", category: "greeting" },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", script: "ܕܐܟ݂ܝ ܘܬ", category: "greeting" },
  
  // Question Words
  { word: "Aykha", translation: "Where", phonetic: "Ay-kha", script: "ܐܝܟܐ", category: "question" },
  { word: "Mana", translation: "What", phonetic: "Ma-na", script: "ܡܢܐ", category: "question" },
  { word: "Mana", translation: "Who", phonetic: "Ma-na", script: "ܡܢܐ", category: "question" },
  { word: "Aymat", translation: "When", phonetic: "Ay-mat", script: "ܐܝܡܬ", category: "question" },
  { word: "Lamana", translation: "Why", phonetic: "La-ma-na", script: "ܠܡܢܐ", category: "question" },
  { word: "Aykana", translation: "How", phonetic: "Ay-ka-na", script: "ܐܝܟܢܐ", category: "question" },
  { word: "Kama", translation: "How many/How much", phonetic: "Ka-ma", script: "ܟܡܐ", category: "question" },
  { word: "Ayna", translation: "Which", phonetic: "Ay-na", script: "ܐܝܢܐ", category: "question" },

  // Prepositions
  { word: "B-", translation: "In/At/With", phonetic: "B-", script: "ܒ", category: "preposition" },
  { word: "Min", translation: "From", phonetic: "Min", script: "ܡܢ", category: "preposition" },
  { word: "L-", translation: "To/For", phonetic: "L-", script: "ܠ", category: "preposition" },
  { word: "Al", translation: "On/Upon", phonetic: "Al", script: "ܥܠ", category: "preposition" },
  { word: "Takh", translation: "Under/Below", phonetic: "Takh", script: "ܬܚܬ", category: "preposition" },
  { word: "Bathar", translation: "After/Behind", phonetic: "Ba-thar", script: "ܒܬܪ", category: "preposition" },
  { word: "Qam", translation: "Before/In front of", phonetic: "Qam", script: "ܩܕܡ", category: "preposition" },
  { word: "Gaw", translation: "Inside", phonetic: "Gaw", script: "ܓܘ", category: "preposition" },
  { word: "Bar", translation: "Outside", phonetic: "Bar", script: "ܒܪ", category: "preposition" },
  { word: "Gaw", translation: "Between/Among", phonetic: "Gaw", script: "ܒܝܢ", category: "preposition" },
  { word: "Am", translation: "With", phonetic: "Am", script: "ܥܡ", category: "preposition" },
  { word: "Dil", translation: "Of/Belonging to", phonetic: "Dil", script: "ܕܝܠ", category: "preposition" },

  // Conjunctions
  { word: "W-", translation: "And", phonetic: "W-", script: "ܘ", category: "conjunction" },
  { word: "Amma", translation: "But", phonetic: "Am-ma", script: "ܐܡܡܐ", category: "conjunction" },
  { word: "Aw", translation: "Or", phonetic: "Aw", script: "ܐܘ", category: "conjunction" },
  { word: "Metul d-", translation: "Because", phonetic: "Me-tul d-", script: "ܡܛܘܠ ܕ", category: "conjunction" },
  { word: "Kad", translation: "When/As", phonetic: "Kad", script: "ܟܕ", category: "conjunction" },
  { word: "Idan", translation: "If", phonetic: "I-dan", script: "ܐܝܕܢ", category: "conjunction" },

  // Common Phrases
  { word: "Basima", translation: "Thank you (to a male) / Good (masc)", phonetic: "Ba-si-ma", script: "ܒܣܝܡܐ", category: "phrase" },
  { word: "Basimta", translation: "Thank you (to a female) / Good (fem)", phonetic: "Ba-sim-ta", script: "ܒܣܝܡܬܐ", category: "phrase" },
  { word: "Min d'yokh", translation: "Please (lit. from your hand)", phonetic: "Min d-yokh", script: "ܡܢ ܕܝܘܟ", category: "phrase" },
  { word: "Tawdi", translation: "Thank you", phonetic: "Taw-di", script: "ܬܘܕܝ", category: "phrase" },
  { word: "Eo", translation: "Yes", phonetic: "Eo", script: "ܐܝܢ", category: "phrase" },
  { word: "La", translation: "No", phonetic: "La", script: "ܠܐ", category: "phrase" },
  { word: "Shlama lokh", translation: "Goodbye (to male)", phonetic: "Shla-ma lokh", script: "ܫܠܡܐ ܠܘܟ", category: "phrase" },
  { word: "Shlama lakh", translation: "Goodbye (to female)", phonetic: "Shla-ma lakh", script: "ܫܠܡܐ ܠܟ", category: "phrase" },
  { word: "Brikh", translation: "Blessed", phonetic: "Brikh", script: "ܒܪܝܟ", category: "phrase" },
  { word: "Shlama d'Alaha", translation: "Peace of God", phonetic: "Shla-ma d-A-la-ha", script: "ܫܠܡܐ ܕܐܠܗܐ", category: "phrase" },
  
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

  { word: "Khidiya", translation: "Happy", phonetic: "Khi-di-ya", script: "ܚܕܝܐ", category: "adjective" },

  { word: "Kriwa", translation: "Sad", phonetic: "Kri-wa", script: "ܟܪܝܒܐ", category: "adjective" },

  { word: "Chilya", translation: "Tired", phonetic: "Chil-ya", script: "ܟܗܝܐ", category: "adjective" },

  { word: "Kpina", translation: "Hungry", phonetic: "Kpi-na", script: "ܟܦܝܢܐ", category: "adjective" },

  { word: "Sahya", translation: "Thirsty", phonetic: "Sah-ya", script: "ܨܗܝܐ", category: "adjective" },

  { word: "Mrisha", translation: "Sick", phonetic: "Mri-sha", script: "ܡܪܥܐ", category: "adjective" },

  { word: "Hayla", translation: "Strong", phonetic: "Hay-la", script: "ܚܝܠܢܐ", category: "adjective" },

  { word: "Basora", translation: "Weak", phonetic: "Ba-so-ra", script: "ܒܨܘܪܐ", category: "adjective" },

  { word: "Qalula", translation: "Fast", phonetic: "Qa-lu-la", script: "ܩܠܘܠܐ", category: "adjective" },

  { word: "Yaqura", translation: "Heavy/Slow", phonetic: "Ya-qu-ra", script: "ܝܩܘܪܐ", category: "adjective" },

  { word: "Rama", translation: "High", phonetic: "Ra-ma", script: "ܪܡܐ", category: "adjective" },

  { word: "Kupa", translation: "Low", phonetic: "Ku-pa", script: "ܟܘܦܐ", category: "adjective" },


  // Colors
  { word: "Smoqa", translation: "Red", phonetic: "Smo-qa", script: "ܣܡܘܩܐ", category: "adjective" },

  { word: "Khawra", translation: "Blue", phonetic: "Khaw-ra", script: "ܟܘܪܐ", category: "adjective" },

  { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka", script: "ܝܪܘܩܐ", category: "adjective" },

  { word: "Spera", translation: "Yellow", phonetic: "Spe-ra", script: "ܣܦܝܪܐ", category: "adjective" },

  { word: "Ukma", translation: "Black", phonetic: "Uk-ma", script: "ܐܘܟܡܐ", category: "adjective" },

  { word: "Khwara", translation: "White", phonetic: "Khwa-ra", script: "ܚܘܪܐ", category: "adjective" },

  { word: "Portuqala", translation: "Orange", phonetic: "Por-tu-qa-la", script: "ܦܘܪܬܩܠܐ", category: "adjective" },

  { word: "Banafsha", translation: "Purple", phonetic: "Ba-naf-sha", script: "ܒܢܦܫܐ", category: "adjective" },

  { word: "Warda", translation: "Pink", phonetic: "War-da", script: "ܘܪܕܐ", category: "adjective" },

  { word: "Qahwaya", translation: "Brown", phonetic: "Qah-wa-ya", script: "ܩܗܘܝܐ", category: "adjective" },

  { word: "Rasasa", translation: "Grey", phonetic: "Ra-sa-sa", script: "ܪܨܨܐ", category: "adjective" },

  { word: "Dahba", translation: "Gold", phonetic: "Dah-ba", script: "ܕܗܒܐ", category: "adjective" },

  { word: "Sipa", translation: "Silver", phonetic: "Si-pa", script: "ܣܐܡܐ", category: "adjective" },

  { word: "Bahra", translation: "Light (Color)", phonetic: "Bah-ra", script: "ܒܗܪܐ", category: "adjective" },

  { word: "Khekha", translation: "Dark (Color)", phonetic: "Khe-kha", script: "ܚܘܟ݂ܐ", category: "adjective" },


  // Family
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", script: "ܒܒܐ", category: "adjective" },

  { word: "Abba", translation: "Father (Formal)", phonetic: "Ab-ba", script: "ܐܒܐ", category: "adjective" },

  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", script: "ܝܡܐ", category: "adjective" },

  { word: "Imma", translation: "Mother (Formal)", phonetic: "Im-ma", script: "ܐܡܐ", category: "adjective" },

  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", script: "ܐܚܘܢܐ", category: "adjective" },

  { word: "Akh", translation: "Brother", phonetic: "Akh", script: "ܐܚܐ", category: "adjective" },

  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", script: "ܚܬܐ", category: "adjective" },

  { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", script: "ܣܒܐ", category: "adjective" },

  { word: "Sawtha", translation: "Grandmother", phonetic: "Saw-tha", script: "ܣܒܬܐ", category: "adjective" },

  { word: "Amma", translation: "Uncle (Paternal)", phonetic: "Am-ma", script: "ܥܡܐ", category: "adjective" },

  { word: "Khala", translation: "Uncle (Maternal)", phonetic: "Kha-la", script: "ܚܠܐ", category: "adjective" },

  { word: "Bra", translation: "Son", phonetic: "Bra", script: "ܒܪܐ", category: "adjective" },

  { word: "Brata", translation: "Daughter", phonetic: "Bra-ta", script: "ܒܪܬܐ", category: "adjective" },

  { word: "Gawra", translation: "Husband", phonetic: "Gaw-ra", script: "ܓܒܪܐ", category: "adjective" },

  { word: "Bakhta", translation: "Wife", phonetic: "Bakh-ta", script: "ܒܟ݂ܬܐ", category: "adjective" },

  { word: "Nashwatha", translation: "Relatives/Family", phonetic: "Nash-wa-tha", script: "ܢܫܘܬܐ", category: "adjective" },

  { word: "Yala", translation: "Child/Boy", phonetic: "Ya-la", script: "ܝܠܐ", category: "adjective" },

  { word: "Brata", translation: "Girl", phonetic: "Bra-ta", script: "ܒܪܬܐ", category: "adjective" },

  { word: "Gawra", translation: "Man", phonetic: "Gaw-ra", script: "ܓܒܪܐ", category: "adjective" },

  { word: "Bakhta", translation: "Woman", phonetic: "Bakh-ta", script: "ܒܟ݂ܬܐ", category: "adjective" },

  { word: "Nasha", translation: "Person", phonetic: "Na-sha", script: "ܢܫܐ", category: "adjective" },

  { word: "Nashe", translation: "People", phonetic: "Na-she", script: "ܢܫܐ", category: "adjective" },


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
  { word: "Kthayta", translation: "Chicken", phonetic: "Kthay-ta", script: "ܟܬܝܬܐ", category: "food" },
  { word: "Yaraqa", translation: "Vegetables", phonetic: "Ya-ra-qa", script: "ܝܪܩܐ", category: "food" },
  { word: "Pera", translation: "Fruit", phonetic: "Pe-ra", script: "ܦܐܪܐ", category: "food" },
  { word: "Khamra", translation: "Wine", phonetic: "Kham-ra", script: "ܚܡܪܐ", category: "food" },
  { word: "Melkha", translation: "Salt", phonetic: "Mel-kha", script: "ܡܠܚܐ", category: "food" },
  { word: "Shekar", translation: "Sugar", phonetic: "She-kar", script: "ܫܟܪ", category: "food" },
  { word: "Mishkha", translation: "Oil", phonetic: "Mish-kha", script: "ܡܫܚܐ", category: "food" },
  { word: "Kare", translation: "Butter", phonetic: "Ka-re", script: "ܟܪܐ", category: "food" },
  { word: "Masta", translation: "Yogurt", phonetic: "Mas-ta", script: "ܡܣܬܐ", category: "food" },
  { word: "Qare", translation: "Cucumber", phonetic: "Qa-re", script: "ܩܪܐ", category: "food" },
  { word: "Tamata", translation: "Tomato", phonetic: "Ta-ma-ta", script: "ܛܡܐܛܐ", category: "food" },
  { word: "Basla", translation: "Onion", phonetic: "Bas-la", script: "ܒܨܠܐ", category: "food" },
  { word: "Patata", translation: "Potato", phonetic: "Pa-ta-ta", script: "ܦܛܐܛܐ", category: "food" },
  { word: "Inwe", translation: "Grapes", phonetic: "In-we", script: "ܥܢܒܐ", category: "food" },

  // Nouns & Objects
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", script: "ܐܠܗܐ", category: "adjective" },

  { word: "Bayta", translation: "House", phonetic: "Bay-ta", script: "ܒܝܬܐ", category: "adjective" },

  { word: "Sayara", translation: "Car", phonetic: "Sa-ya-ra", script: "ܣܝܪܐ", category: "adjective" },

  { word: "Ktawa", translation: "Book", phonetic: "Kta-wa", script: "ܟܬܒܐ", category: "adjective" },

  { word: "Qalama", translation: "Pen", phonetic: "Qa-la-ma", script: "ܩܠܡܐ", category: "adjective" },

  { word: "Pata", translation: "Table/Face", phonetic: "Pa-ta", script: "ܦܬܐ", category: "adjective" },

  { word: "Kursa", translation: "Chair", phonetic: "Kur-sa", script: "ܟܘܪܣܝܐ", category: "adjective" },

  { word: "Itha", translation: "Hand", phonetic: "I-tha", script: "ܐܝܕܐ", category: "adjective" },

  { word: "Reesha", translation: "Head", phonetic: "Ree-sha", script: "ܪܝܫܐ", category: "adjective" },

  { word: "Libba", translation: "Heart", phonetic: "Lib-ba", script: "ܠܒܐ", category: "adjective" },


  // Verbs (Infinitive/Root roughly)
  { word: "Akhal", translation: "To Eat", phonetic: "A-khal", script: "ܐܟܠ", category: "adjective" },

  { word: "Shtay", translation: "To Drink", phonetic: "Sh-tay", script: "ܫܬܐ", category: "adjective" },

  { word: "Dmikh", translation: "To Sleep", phonetic: "D-mikh", script: "ܕܡܟ", category: "adjective" },

  { word: "Yithib", translation: "To Sit", phonetic: "Yi-thib", script: "ܝܬܒ", category: "adjective" },

  { word: "Qim", translation: "To Rise/Stand", phonetic: "Qim", script: "ܩܡ", category: "adjective" },

  { word: "Khazi", translation: "To See", phonetic: "Kha-zi", script: "ܚܙܐ", category: "adjective" },

  { word: "Sheme", translation: "To Hear", phonetic: "She-me", script: "ܫܡܥ", category: "adjective" },

  { word: "Azil", translation: "To Go", phonetic: "A-zil", script: "ܐܙܠ", category: "adjective" },

  { word: "Athi", translation: "To Come", phonetic: "A-thi", script: "ܐܬܐ", category: "adjective" },

  { word: "Ktiv", translation: "To Write", phonetic: "K-tiv", script: "ܟܬܒ", category: "adjective" },

  { word: "Qari", translation: "To Read", phonetic: "Qa-ri", script: "ܩܪܐ", category: "adjective" },

  { word: "Pthakh", translation: "To Open", phonetic: "Pthakh", script: "ܦܬܚ", category: "adjective" },

  { word: "Dwiq", translation: "To Close/Hold", phonetic: "Dwiq", script: "ܕܒܩ", category: "adjective" },

  { word: "Shqil", translation: "To Take/Buy", phonetic: "Shqil", script: "ܫܩܠ", category: "adjective" },

  { word: "Hiw", translation: "To Give", phonetic: "Hiw", script: "ܝܗܒ", category: "adjective" },

  { word: "Ba'ay", translation: "To Want/Love", phonetic: "Ba-ay", script: "ܒܥܐ", category: "adjective" },

  { word: "Yadi", translation: "To Know", phonetic: "Ya-di", script: "ܝܕܥ", category: "adjective" },

  { word: "Pol", translation: "To Work", phonetic: "Pol", script: "ܦܠܚ", category: "adjective" },

  { word: "Mtal", translation: "To Play", phonetic: "Mtal", script: "ܡܛܠ", category: "adjective" },

  { word: "Mahki", translation: "To Speak", phonetic: "Mah-ki", script: "ܡܚܟܐ", category: "adjective" },

  { word: "Rkhosh", translation: "To Walk", phonetic: "Rkhosh", script: "ܪܚܫ", category: "adjective" },

  { word: "Rhit", translation: "To Run", phonetic: "Rhit", script: "ܪܗܛ", category: "adjective" },

  { word: "Gkhikh", translation: "To Laugh", phonetic: "Gkhikh", script: "ܓܚܟ", category: "adjective" },

  { word: "Bkhe", translation: "To Cry", phonetic: "Bkhe", script: "ܒܟܐ", category: "adjective" },


  // Numbers
  { word: "Kha", translation: "One", phonetic: "Kha", script: "ܚܕ", category: "adjective" },

  { word: "Tre", translation: "Two", phonetic: "Tre", script: "ܬܪܝܢ", category: "adjective" },

  { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", script: "ܬܠܬܐ", category: "adjective" },

  { word: "Arba", translation: "Four", phonetic: "Ar-ba", script: "ܐܪܒܥܐ", category: "adjective" },

  { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", script: "ܚܡܫܐ", category: "adjective" },

  { word: "Ishta", translation: "Six", phonetic: "Ish-ta", script: "ܐܫܬܐ", category: "adjective" },

  { word: "Shwa", translation: "Seven", phonetic: "Shwa", script: "ܫܒܥܐ", category: "adjective" },

  { word: "Tmanya", translation: "Eight", phonetic: "Tman-ya", script: "ܬܡܢܝܐ", category: "adjective" },

  { word: "Tisha", translation: "Nine", phonetic: "Ti-sha", script: "ܬܫܥܐ", category: "adjective" },

  { word: "Asar", translation: "Ten", phonetic: "A-sar", script: "ܥܣܪܐ", category: "adjective" },


  // Time
  { word: "Yoma", translation: "Day", phonetic: "Yo-ma", script: "ܝܘܡܐ", category: "adjective" },

  { word: "Lelya", translation: "Night", phonetic: "Lel-ya", script: "ܠܠܝܐ", category: "adjective" },

  { word: "Idyo", translation: "Today", phonetic: "Id-yo", script: "ܐܕܝܘ", category: "adjective" },

  { word: "Timmal", translation: "Yesterday", phonetic: "Tim-mal", script: "ܬܡܠ", category: "adjective" },

  { word: "Qam", translation: "Tomorrow", phonetic: "Qam", script: "ܩܐܡ", category: "adjective" },

  { word: "Shabta", translation: "Saturday / Week", phonetic: "Shab-ta", script: "ܫܒܬܐ", category: "adjective" },


  // Animals
  { word: "Kalba", translation: "Dog", phonetic: "Kal-ba", script: "ܟܠܒܐ", category: "animal" },
  { word: "Qato", translation: "Cat", phonetic: "Qa-to", script: "ܩܛܘ", category: "animal" },
  { word: "Susya", translation: "Horse", phonetic: "Sus-ya", script: "ܣܘܣܝܐ", category: "animal" },
  { word: "Tawra", translation: "Bull/Ox", phonetic: "Taw-ra", script: "ܬܘܪܐ", category: "animal" },
  { word: "Khmara", translation: "Donkey", phonetic: "Khma-ra", script: "ܚܡܪܐ", category: "animal" },
  { word: "Arya", translation: "Lion", phonetic: "Ar-ya", script: "ܐܪܝܐ", category: "animal" },
  { word: "Arva", translation: "Sheep", phonetic: "Ar-va", script: "ܐܪܒܐ", category: "animal" },

  // Nature
  { word: "Shimsha", translation: "Sun", phonetic: "Shim-sha", script: "ܫܡܫܐ", category: "adjective" },

  { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ", category: "adjective" },

  { word: "Kokhva", translation: "Star", phonetic: "Kokh-va", script: "ܟܘܟܒܐ", category: "adjective" },

  { word: "Matra", translation: "Rain", phonetic: "Mat-ra", script: "ܡܛܪܐ", category: "adjective" },

  { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ", category: "adjective" },

  { word: "Nura", translation: "Fire", phonetic: "Nu-ra", script: "ܢܘܪܐ", category: "adjective" },

  { word: "Opra", translation: "Earth/Dust", phonetic: "Op-ra", script: "ܥܦܪܐ", category: "adjective" },

  { word: "Ilana", translation: "Tree", phonetic: "I-la-na", script: "ܐܝܠܢܐ", category: "nature" },
  { word: "Warda", translation: "Flower", phonetic: "War-da", script: "ܘܪܕܐ", category: "nature" },
  { word: "Nahra", translation: "River", phonetic: "Nah-ra", script: "ܢܗܪܐ", category: "nature" },
  { word: "Yama", translation: "Sea/Lake", phonetic: "Ya-ma", script: "ܝܡܐ", category: "nature" },
  { word: "Tura", translation: "Mountain", phonetic: "Tu-ra", script: "ܛܘܪܐ", category: "nature" },
  { word: "Genta", translation: "Garden", phonetic: "Gen-ta", script: "ܓܢܬܐ", category: "nature" },
  { word: "Aywa", translation: "Cloud", phonetic: "Ay-wa", script: "ܥܝܒܐ", category: "adjective" },

  { word: "Powkha", translation: "Wind/Air", phonetic: "Pow-kha", script: "ܦܘܚܐ", category: "adjective" },

  { word: "Qarira", translation: "Cold", phonetic: "Qa-ri-ra", script: "ܩܪܝܪܐ", category: "adjective" },

  { word: "Khamima", translation: "Hot", phonetic: "Kha-mi-ma", script: "ܚܡܝܡܐ", category: "adjective" },


  // Body
  { word: "Ena", translation: "Eye", phonetic: "E-na", script: "ܥܝܢܐ", category: "adjective" },

  { word: "Nakhira", translation: "Nose", phonetic: "Na-khi-ra", script: "ܢܚܝܪܐ", category: "adjective" },

  { word: "Puma", translation: "Mouth", phonetic: "Pu-ma", script: "ܦܘܡܐ", category: "adjective" },

  { word: "Odna", translation: "Ear", phonetic: "Od-na", script: "ܐܕܢܐ", category: "adjective" },

  { word: "Regla", translation: "Foot/Leg", phonetic: "Reg-la", script: "ܪܓܠܐ", category: "adjective" },

  { word: "Lishana", translation: "Tongue/Language", phonetic: "Li-sha-na", script: "ܠܫܢܐ", category: "adjective" },

  { word: "Shina", translation: "Tooth", phonetic: "Shi-na", script: "ܫܢܐ", category: "adjective" },

  { word: "Sa'ra", translation: "Hair", phonetic: "Sa-ra", script: "ܣܥܪܐ", category: "adjective" },

  { word: "Pata", translation: "Face", phonetic: "Pa-ta", script: "ܦܬܐ", category: "adjective" },

  { word: "Khade", translation: "Chest", phonetic: "Kha-de", script: "ܚܕܝܐ", category: "adjective" },

  { word: "Kasa", translation: "Stomach/Belly", phonetic: "Ka-sa", script: "ܟܪܣܐ", category: "adjective" },

  { word: "Khasa", translation: "Back", phonetic: "Kha-sa", script: "ܚܨܐ", category: "adjective" },

  { word: "Dra'a", translation: "Arm", phonetic: "Dra-a", script: "ܕܪܥܐ", category: "adjective" },

  { word: "Siv'a", translation: "Finger", phonetic: "Siv-a", script: "ܨܒܥܐ", category: "adjective" },

  { word: "Burka", translation: "Knee", phonetic: "Bur-ka", script: "ܒܘܪܟܐ", category: "adjective" },


  // Home
  { word: "Tarra", translation: "Door", phonetic: "Tar-ra", script: "ܬܪܥܐ", category: "adjective" },

  { word: "Kawtha", translation: "Window", phonetic: "Kaw-tha", script: "ܟܘܬܐ", category: "adjective" },

  { word: "Igara", translation: "Roof", phonetic: "I-ga-ra", script: "ܐܓܪܐ", category: "adjective" },

  { word: "Shwitha", translation: "Bed", phonetic: "Shwi-tha", script: "ܫܘܝܬܐ", category: "adjective" },

  { word: "Matbakh", translation: "Kitchen", phonetic: "Mat-bakh", script: "ܡܛܒܟ݂", category: "adjective" },

  { word: "Khamama", translation: "Bathroom", phonetic: "Kha-ma-ma", script: "ܚܡܐܡܐ", category: "adjective" },

  { word: "Oda", translation: "Room/Bedroom", phonetic: "O-da", script: "ܐܘܕܐ", category: "adjective" },

  { word: "Igara", translation: "Wall", phonetic: "I-ga-ra", script: "ܐܓܪܐ", category: "adjective" },

  { word: "Ar'a", translation: "Floor/Ground", phonetic: "Ar-a", script: "ܐܪܥܐ", category: "adjective" },

  { word: "Qleeda", translation: "Key", phonetic: "Qlee-da", script: "ܩܠܝܕܐ", category: "adjective" },

  { word: "Bahra", translation: "Light", phonetic: "Bah-ra", script: "ܒܗܪܐ", category: "adjective" },

  { word: "Sahna", translation: "Plate", phonetic: "Sah-na", script: "ܨܚܢܐ", category: "adjective" },

  { word: "Kchamcha", translation: "Spoon", phonetic: "Kcham-cha", script: "ܟܡܟܐ", category: "adjective" },

  { word: "Changala", translation: "Fork", phonetic: "Chan-ga-la", script: "ܟܢܓܠܐ", category: "adjective" },

  { word: "Sakina", translation: "Knife", phonetic: "Sa-ki-na", script: "ܣܟܝܢܐ", category: "adjective" },

  { word: "Stikana", translation: "Cup (Tea)", phonetic: "Sti-ka-na", script: "ܐܣܬܟܢܐ", category: "adjective" },

  { word: "Glasa", translation: "Glass", phonetic: "Gla-sa", script: "ܓܠܣܐ", category: "adjective" },


  // Clothing
  { word: "Sudra", translation: "Shirt", phonetic: "Sud-ra", script: "ܨܘܕܪܐ", category: "adjective" },

  { word: "Sharwala", translation: "Pants", phonetic: "Shar-wa-la", script: "ܫܪܘܠܐ", category: "adjective" },

  { word: "Soltha", translation: "Shoe", phonetic: "Sol-tha", script: "ܣܘܠܬܐ", category: "adjective" },

  { word: "Kusitha", translation: "Hat/Cap", phonetic: "Ku-si-tha", script: "ܟܘܣܝܬܐ", category: "adjective" },


  // Places
  { word: "Madrasa", translation: "School", phonetic: "Mad-ra-sa", script: "ܡܕܪܫܬܐ", category: "place" },
  { word: "Knishta", translation: "Church", phonetic: "Knish-ta", script: "ܟܢܘܫܬܐ", category: "place" },
  { word: "Shuqa", translation: "Market", phonetic: "Shu-qa", script: "ܫܘܩܐ", category: "place" },
  { word: "Matha", translation: "Village/Town", phonetic: "Ma-tha", script: "ܡܬܐ", category: "place" },
  { word: "Medina", translation: "City", phonetic: "Me-di-na", script: "ܡܕܝܢܬܐ", category: "place" },
  { word: "Bayta d-Asye", translation: "Hospital", phonetic: "Bay-ta d-As-ye", script: "ܒܝܬ ܐܣܝܐ", category: "place" },
  { word: "Dukana", translation: "Store/Shop", phonetic: "Du-ka-na", script: "ܕܘܟܢܐ", category: "place" },
  { word: "Be-Sawa", translation: "Grandfather's House", phonetic: "Be-Sa-wa", script: "ܒܝܬ ܣܒܐ", category: "adjective" },

  { word: "Khakla", translation: "Field/Farm", phonetic: "Khak-la", script: "ܚܩܠܐ", category: "place" },
  { word: "Parqa", translation: "Park", phonetic: "Par-qa", script: "ܦܪܩܐ", category: "place" },
  { word: "Mat'am", translation: "Restaurant", phonetic: "Mat-am", script: "ܡܛܥܡ", category: "place" },
  { word: "Maktab", translation: "Office", phonetic: "Mak-tab", script: "ܡܟܬܒ", category: "place" },

  // Professions
  { word: "Malpana", translation: "Teacher (Masc)", phonetic: "Mal-pa-na", script: "ܡܠܦܢܐ", category: "profession" },
  { word: "Malpantha", translation: "Teacher (Fem)", phonetic: "Mal-pan-tha", script: "ܡܠܦܢܬܐ", category: "profession" },
  { word: "Asya", translation: "Doctor", phonetic: "As-ya", script: "ܐܣܝܐ", category: "profession" },
  { word: "Nakhopa", translation: "Baker", phonetic: "Na-kho-pa", script: "ܢܚܘܦܐ", category: "profession" },
  { word: "Sayuqa", translation: "Driver", phonetic: "Sa-yu-qa", script: "ܣܝܘܩܐ", category: "profession" },
  { word: "Shurta", translation: "Police", phonetic: "Shur-ta", script: "ܫܘܪܛܐ", category: "profession" },
  { word: "Khatota", translation: "Tailor/Seamstress", phonetic: "Kha-to-ta", script: "ܚܝܛܐ", category: "profession" },
  { word: "Ranya", translation: "Singer", phonetic: "Ran-ya", script: "ܪܢܝܐ", category: "profession" },
  { word: "Tabakha", translation: "Cook/Chef", phonetic: "Ta-ba-kha", script: "ܛܒܟ݂ܐ", category: "profession" },
  { word: "Benaya", translation: "Builder", phonetic: "Be-na-ya", script: "ܒܢܝܐ", category: "profession" },
  { word: "Falaha", translation: "Farmer", phonetic: "Fa-la-ha", script: "ܦܠܚܐ", category: "profession" },

  // Emotions
  { word: "Khidiya", translation: "Happy (masc)", phonetic: "Khi-di-ya", script: "ܚܕܝܐ", category: "adjective" },

  { word: "Khiditha", translation: "Happy (fem)", phonetic: "Khi-di-tha", script: "ܚܕܝܬܐ", category: "adjective" },

  { word: "Kriwa", translation: "Sad (masc)", phonetic: "Kri-wa", script: "ܟܪܝܒܐ", category: "adjective" },

  { word: "Krivta", translation: "Sad (fem)", phonetic: "Kriv-ta", script: "ܟܪܝܒܬܐ", category: "adjective" },

  { word: "Karpana", translation: "Angry", phonetic: "Kar-pa-na", script: "ܟܪܦܢܐ", category: "adjective" },

  { word: "Zdi'a", translation: "Scared", phonetic: "Zdi-a", script: "ܙܕܝܥܐ", category: "adjective" },


  // Travel
  { word: "Orkha", translation: "Road/Way", phonetic: "Or-kha", script: "ܐܘܪܚܐ", category: "travel" },
  { word: "Tayara", translation: "Airplane", phonetic: "Ta-ya-ra", script: "ܛܝܪܐ", category: "travel" },
  { word: "Bosta", translation: "Bus", phonetic: "Bos-ta", script: "ܒܐܨ", category: "travel" },
  { word: "Pasport", translation: "Passport", phonetic: "Pas-port", script: "ܦܣܦܘܪܬ", category: "adjective" },

  { word: "Tiket", translation: "Ticket", phonetic: "Ti-ket", script: "ܬܝܟܬ", category: "adjective" },

  { word: "Mata", translation: "Luggage/Things", phonetic: "Ma-ta", script: "ܡܐܬܐ", category: "adjective" },


  // More Time
  { word: "Sa'at", translation: "Hour/Clock", phonetic: "Sa-at", script: "ܣܥܬ", category: "adjective" },

  { word: "Daqiqa", translation: "Minute", phonetic: "Da-qi-qa", script: "ܕܩܝܩܐ", category: "adjective" },

  { word: "Shita", translation: "Year", phonetic: "Shi-ta", script: "ܫܢܬܐ", category: "adjective" },

  { word: "Yargha", translation: "Month", phonetic: "Yar-gha", script: "ܝܪܚܐ", category: "adjective" },

  { word: "Hasa", translation: "Now", phonetic: "Ha-sa", script: "ܗܣܐ", category: "adjective" },

  { word: "Bathar", translation: "Later/After", phonetic: "Ba-thar", script: "ܒܬܪ", category: "adjective" },

  { word: "Qam", translation: "Before", phonetic: "Qam", script: "ܩܡ", category: "adjective" },

  { word: "Sipra", translation: "Morning", phonetic: "Sip-ra", script: "ܨܦܪܐ", category: "adjective" },

  { word: "Ramsha", translation: "Evening", phonetic: "Ram-sha", script: "ܪܡܫܐ", category: "adjective" },


  // More Numbers
  { word: "Khadassar", translation: "Eleven", phonetic: "Kha-das-sar", script: "ܚܕܥܣܪ", category: "adjective" },

  { word: "Treissar", translation: "Twelve", phonetic: "Treis-sar", script: "ܬܪܥܣܪ", category: "adjective" },

  { word: "Esrin", translation: "Twenty", phonetic: "Es-rin", script: "ܥܣܪܝܢ", category: "adjective" },

  { word: "Tlaa", translation: "Thirty", phonetic: "Tla-a", script: "ܬܠܬܝܢ", category: "adjective" },

  { word: "Arba", translation: "Forty", phonetic: "Ar-ba", script: "ܐܪܒܥܝܢ", category: "adjective" },

  { word: "Khamshi", translation: "Fifty", phonetic: "Kham-shi", script: "ܚܡܫܝܢ", category: "adjective" },

  { word: "Imma", translation: "One Hundred", phonetic: "Im-ma", script: "ܐܡܐ", category: "adjective" },

  { word: "Alpa", translation: "One Thousand", phonetic: "Al-pa", script: "ܐܠܦܐ", category: "adjective" },


  { word: "Portuqala", translation: "Orange", phonetic: "Por-tu-qa-la", script: "ܦܘܪܬܩܠܐ", category: "adjective" },

  { word: "Banafsha", translation: "Purple", phonetic: "Ba-naf-sha", script: "ܒܢܦܫܐ", category: "adjective" },

  { word: "Warda", translation: "Pink", phonetic: "War-da", script: "ܘܪܕܐ", category: "adjective" },

  { word: "Qahwaya", translation: "Brown", phonetic: "Qah-wa-ya", script: "ܩܗܘܝܐ", category: "adjective" },

  { word: "Rasasa", translation: "Grey", phonetic: "Ra-sa-sa", script: "ܪܨܨܐ", category: "adjective" },


  // More Phrases
  { word: "Bshina b-atayokh", translation: "Welcome (to male)", phonetic: "B-shi-na b-a-ta-yokh", script: "ܒܫܝܢܐ ܒܐܬܝܘܟ݂", category: "adjective" },

  { word: "Bshina b-atayakh", translation: "Welcome (to female)", phonetic: "B-shi-na b-a-ta-yakh", script: "ܒܫܝܢܐ ܒܐܬܝܟ݂", category: "adjective" },

  { word: "Brikh sipra", translation: "Good morning", phonetic: "Brikh sip-ra", script: "ܒܪܝܟ݂ ܨܦܪܐ", category: "adjective" },

  { word: "Brikh ramsha", translation: "Good evening", phonetic: "Brikh ram-sha", script: "ܒܪܝܟ݂ ܪܡܫܐ", category: "adjective" },

  { word: "Ghanokh b-shina", translation: "Good night", phonetic: "Gha-nokh b-shi-na", script: "ܓܢܘܟ݂ ܒܫܝܢܐ", category: "adjective" },

  { word: "Mahbila", translation: "Excuse me", phonetic: "Mah-bi-la", script: "ܡܚܒܠܐ", category: "adjective" },

  { word: "La yadin", translation: "I don't know", phonetic: "La ya-din", script: "ܠܐ ܝܕܥܢ", category: "adjective" },

  { word: "Shlama lokh", translation: "Goodbye (to male)", phonetic: "Shla-ma lokh", script: "ܫܠܡܐ ܠܘܟ", category: "adjective" },

  { word: "Shlama lakh", translation: "Goodbye (to female)", phonetic: "Shla-ma lakh", script: "ܫܠܡܐ ܠܟ", category: "adjective" },

  { word: "Brikh", translation: "Blessed", phonetic: "Brikh", script: "ܒܪܝܟ", category: "adjective" },

  { word: "Shlama d'Alaha", translation: "Peace of God", phonetic: "Shla-ma d-A-la-ha", script: "ܫܠܡܐ ܕܐܠܗܐ", category: "adjective" },

  { word: "Brikh sipra", translation: "Good morning", phonetic: "Brikh sip-ra", script: "ܒܪܝܟ ܨܦܪܐ", category: "adjective" },

  { word: "Brikh ramsha", translation: "Good evening", phonetic: "Brikh ram-sha", script: "ܒܪܝܟ ܪܡܫܐ", category: "adjective" },

  { word: "Ghanokh b-shina", translation: "Good night", phonetic: "Gha-nokh b-shi-na", script: "ܓܢܘܟ ܒܫܝܢܐ", category: "adjective" },

  { word: "Mahbila", translation: "Excuse me", phonetic: "Mah-bi-la", script: "ܡܚܒܠܐ", category: "adjective" },

  { word: "Brikh d'Ati", translation: "God bless you", phonetic: "Brikh d-A-ti", script: "ܒܪܝܟ ܕܐܬܝ", category: "adjective" },

  { word: "Brikh d'Atokh", translation: "God bless you (to male)", phonetic: "Brikh d-A-tokh", script: "ܒܪܝܟ ܕܐܬܘܟ", category: "adjective" },

  { word: "Brikh d'Atakh", translation: "God bless you (to female)", phonetic: "Brikh d-A-takh", script: "ܒܪܝܟ ܕܐܬܟ", category: "adjective" },

  { word: "Shlama d'Alaha b'Atokh", translation: "Peace of God be with you (to male)", phonetic: "Shla-ma d-A-la-ha b-A-tokh", script: "ܫܠܡܐ ܕܐܠܗܐ ܒܐܬܘܟ", category: "adjective" },

  { word: "Shlama d'Alaha b'Atakh", translation: "Peace of God be with you (to female)", phonetic: "Shla-ma d-A-la-ha b-A-takh", script: "ܫܠܡܐ ܕܐܠܗܐ ܒܐܬܟ", category: "adjective" },

  { word: "Brikh d'Atokh", translation: "Blessed be you (to male)", phonetic: "Brikh d-A-tokh", script: "ܒܪܝܟ ܕܐܬܘܟ", category: "adjective" },

  { word: "Brikh d'Atakh", translation: "Blessed be you (to female)", phonetic: "Brikh d-A-takh", script: "ܒܪܝܟ ܕܐܬܟ", category: "adjective" },


  // More Verbs
  { word: "Sakh", translation: "To Wash", phonetic: "Sakh", script: "ܣܚ", category: "adjective" },

  { word: "Nashakh", translation: "To Clean", phonetic: "Na-shakh", script: "ܢܫܚ", category: "adjective" },

  { word: "Qatil", translation: "To Kill", phonetic: "Qa-til", script: "ܩܛܠ", category: "adjective" },

  { word: "Qayim", translation: "To Stand/Stay", phonetic: "Qa-yim", script: "ܩܐܡ", category: "adjective" },

  { word: "Shakil", translation: "To Carry/Lift", phonetic: "Sha-kil", script: "ܫܩܠ", category: "adjective" },

  { word: "Rakhim", translation: "To Throw/Put", phonetic: "Ra-khim", script: "ܪܟܡ", category: "adjective" },

  { word: "Shakil", translation: "To Take", phonetic: "Sha-kil", script: "ܫܩܠ", category: "adjective" },

  { word: "Rakhim", translation: "To Place", phonetic: "Ra-khim", script: "ܪܟܡ", category: "adjective" },

  { word: "Shakil", translation: "To Buy", phonetic: "Sha-kil", script: "ܫܩܠ", category: "adjective" },

  { word: "Rakhim", translation: "To Sell", phonetic: "Ra-khim", script: "ܪܟܡ", category: "adjective" },

  { word: "Shakil", translation: "To Bring", phonetic: "Sha-kil", script: "ܫܩܠ", category: "adjective" },

  { word: "Rakhim", translation: "To Send", phonetic: "Ra-khim", script: "ܪܟܡ", category: "adjective" },

  { word: "Shakil", translation: "To Find", phonetic: "Sha-kil", script: "ܫܩܠ", category: "adjective" },

  { word: "Rakhim", translation: "To Lose", phonetic: "Ra-khim", script: "ܪܟܡ", category: "adjective" },

  { word: "Shakil", translation: "To Look", phonetic: "Sha-kil", script: "ܫܩܠ", category: "adjective" },

  { word: "Rakhim", translation: "To Show", phonetic: "Ra-khim", script: "ܪܟܡ", category: "adjective" },

  { word: "Shakil", translation: "To Ask", phonetic: "Sha-kil", script: "ܫܩܠ", category: "adjective" },

  { word: "Rakhim", translation: "To Answer", phonetic: "Ra-khim", script: "ܪܟܡ", category: "adjective" },

  { word: "Shakil", translation: "To Call", phonetic: "Sha-kil", script: "ܫܩܠ", category: "adjective" },

  { word: "Rakhim", translation: "To Name", phonetic: "Ra-khim", script: "ܪܟܡ", category: "adjective" },


  // Days of the Week
  { word: "Khamiša", translation: "Thursday", phonetic: "Kha-mi-ša", script: "ܚܡܝܫܐ", category: "adjective" },

  { word: "Iroha", translation: "Sunday", phonetic: "I-ro-ha", script: "ܝܪܘܚܐ", category: "adjective" },

  { word: "Trinbšaba", translation: "Monday", phonetic: "Trin-b-ša-ba", script: "ܬܪܝܢܒܫܒܐ", category: "adjective" },

  { word: "Tlitbšaba", translation: "Tuesday", phonetic: "Tlit-b-ša-ba", script: "ܬܠܝܬܒܫܒܐ", category: "adjective" },

  { word: "Arbibšaba", translation: "Wednesday", phonetic: "Ar-bib-ša-ba", script: "ܐܪܒܥܒܫܒܐ", category: "adjective" },

  { word: "Khamšibšaba", translation: "Friday", phonetic: "Kham-ši-b-ša-ba", script: "ܚܡܫܒܫܒܐ", category: "adjective" },


  // Months & Seasons
  { word: "Kanun Qadmaya", translation: "January", phonetic: "Ka-nun Qad-ma-ya", script: "ܟܢܘܢ ܩܕܡܝܐ", category: "adjective" },

  { word: "Šbat", translation: "February", phonetic: "Šbat", script: "ܫܒܛ", category: "adjective" },

  { word: "Adar", translation: "March", phonetic: "A-dar", script: "ܐܕܪ", category: "adjective" },

  { word: "Nisan", translation: "April", phonetic: "Ni-san", script: "ܢܝܣܢ", category: "adjective" },

  { word: "Iyyar", translation: "May", phonetic: "Iy-yar", script: "ܐܝܪ", category: "adjective" },

  { word: "Ḥziran", translation: "June", phonetic: "Ḥzi-ran", script: "ܚܙܝܪܢ", category: "adjective" },

  { word: "Tammuz", translation: "July", phonetic: "Tam-muz", script: "ܬܡܘܙ", category: "adjective" },

  { word: "Ab", translation: "August", phonetic: "Ab", script: "ܐܒ", category: "adjective" },

  { word: "Ilul", translation: "September", phonetic: "I-lul", script: "ܐܝܠܘܠ", category: "adjective" },

  { word: "Tišrin Qadmaya", translation: "October", phonetic: "Tiš-rin Qad-ma-ya", script: "ܬܫܪܝܢ ܩܕܡܝܐ", category: "adjective" },

  { word: "Tišrin Ḥraya", translation: "November", phonetic: "Tiš-rin Ḥra-ya", script: "ܬܫܪܝܢ ܚܪܝܐ", category: "adjective" },

  { word: "Kanun Ḥraya", translation: "December", phonetic: "Ka-nun Ḥra-ya", script: "ܟܢܘܢ ܚܪܝܐ", category: "adjective" },

  { word: "Kharta", translation: "Spring", phonetic: "Khar-ta", script: "ܟܪܬܐ", category: "adjective" },

  { word: "Qayṭa", translation: "Summer", phonetic: "Qay-ṭa", script: "ܩܝܛܐ", category: "adjective" },

  { word: "Ṭarpa", translation: "Autumn/Fall", phonetic: "Ṭar-pa", script: "ܛܪܦܐ", category: "adjective" },

  { word: "Sitwa", translation: "Winter", phonetic: "Sit-wa", script: "ܣܬܘܐ", category: "adjective" },


  // More Fruits & Vegetables
  { word: "Tīna", translation: "Fig", phonetic: "Tī-na", script: "ܬܐܢܐ", category: "adjective" },

  { word: "Rummana", translation: "Pomegranate", phonetic: "Rum-ma-na", script: "ܪܘܡܢܐ", category: "adjective" },

  { word: "Khawkha", translation: "Peach", phonetic: "Khaw-kha", script: "ܚܘܟܐ", category: "adjective" },

  { word: "Mešmeša", translation: "Apricot", phonetic: "Meš-me-ša", script: "ܡܫܡܫܐ", category: "adjective" },

  { word: "Kummatra", translation: "Pear", phonetic: "Kum-mat-ra", script: "ܟܘܡܬܪܐ", category: "adjective" },

  { word: "Talyana", translation: "Watermelon", phonetic: "Tal-ya-na", script: "ܛܠܝܢܐ", category: "adjective" },

  { word: "Bṭikha", translation: "Melon", phonetic: "Bṭi-kha", script: "ܒܛܝܟܐ", category: "adjective" },

  { word: "Limuna", translation: "Lemon", phonetic: "Li-mu-na", script: "ܠܝܡܘܢܐ", category: "adjective" },

  { word: "Burtuqala", translation: "Orange (fruit)", phonetic: "Bur-tu-qa-la", script: "ܒܘܪܬܘܩܠܐ", category: "adjective" },

  { word: "Ṣōna", translation: "Dates (fruit)", phonetic: "Ṣō-na", script: "ܨܘܢܐ", category: "adjective" },

  { word: "Gōzta", translation: "Walnut", phonetic: "Gōz-ta", script: "ܓܘܙܬܐ", category: "adjective" },

  { word: "Lōza", translation: "Almond", phonetic: "Lō-za", script: "ܠܘܙܐ", category: "adjective" },

  { word: "Fistōqa", translation: "Pistachio", phonetic: "Fis-tō-qa", script: "ܦܣܬܩܐ", category: "adjective" },

  { word: "Tuma", translation: "Garlic", phonetic: "Tu-ma", script: "ܬܘܡܐ", category: "adjective" },

  { word: "Pilpila", translation: "Pepper", phonetic: "Pil-pi-la", script: "ܦܠܦܠܐ", category: "adjective" },

  { word: "Karāt", translation: "Leek", phonetic: "Ka-rāt", script: "ܟܪܬ", category: "adjective" },

  { word: "Khassa", translation: "Lettuce", phonetic: "Khas-sa", script: "ܚܣܐ", category: "adjective" },

  { word: "Shilpa", translation: "Eggplant", phonetic: "Shil-pa", script: "ܫܠܦܐ", category: "adjective" },

  { word: "Kōsa", translation: "Zucchini", phonetic: "Kō-sa", script: "ܟܘܣܐ", category: "adjective" },

  { word: "Lifta", translation: "Turnip", phonetic: "Lif-ta", script: "ܠܦܬܐ", category: "adjective" },

  { word: "Gzara", translation: "Carrot", phonetic: "Gza-ra", script: "ܓܙܪܐ", category: "adjective" },

  { word: "Šalgam", translation: "Radish", phonetic: "Šal-gam", script: "ܫܠܓܡ", category: "adjective" },


  // More Meats & Proteins
  { word: "Luḥma d-Khmara", translation: "Beef", phonetic: "Luḥ-ma d-Khma-ra", script: "ܠܘܚܡܐ ܕܚܡܪܐ", category: "adjective" },

  { word: "Luḥma d-Arva", translation: "Lamb", phonetic: "Luḥ-ma d-Ar-va", script: "ܠܘܚܡܐ ܕܐܪܒܐ", category: "adjective" },

  { word: "Luḥma d-Khanzira", translation: "Pork", phonetic: "Luḥ-ma d-Khan-zi-ra", script: "ܠܘܚܡܐ ܕܚܢܙܝܪܐ", category: "adjective" },

  { word: "Šamka", translation: "Fish (general)", phonetic: "Šam-ka", script: "ܫܡܟܐ", category: "adjective" },

  { word: "Qrusta", translation: "Shrimp", phonetic: "Qrus-ta", script: "ܩܪܘܣܬܐ", category: "adjective" },


  // Kitchen & Cooking
  { word: "Sanduqa", translation: "Pot", phonetic: "San-du-qa", script: "ܣܢܕܘܩܐ", category: "adjective" },

  { word: "Qarora", translation: "Kettle", phonetic: "Qa-ro-ra", script: "ܩܪܘܪܐ", category: "adjective" },

  { word: "Piala", translation: "Bowl", phonetic: "Pia-la", script: "ܦܝܠܐ", category: "adjective" },

  { word: "Tannura", translation: "Oven", phonetic: "Tan-nu-ra", script: "ܬܢܘܪܐ", category: "adjective" },

  { word: "Maqliya", translation: "Frying Pan", phonetic: "Maq-li-ya", script: "ܡܩܠܝܐ", category: "adjective" },

  { word: "Zangīla", translation: "Basket", phonetic: "Zan-gī-la", script: "ܙܢܓܝܠܐ", category: "adjective" },

  { word: "Ṭasla", translation: "Tray", phonetic: "Ṭas-la", script: "ܛܣܠܐ", category: "adjective" },

  { word: "Qadḥa", translation: "Pitcher", phonetic: "Qad-ḥa", script: "ܩܕܚܐ", category: "adjective" },

  { word: "Maḥbašta", translation: "Broom", phonetic: "Maḥ-baš-ta", script: "ܡܚܒܫܬܐ", category: "adjective" },

  { word: "Mapuḥta", translation: "Fan", phonetic: "Ma-puḥ-ta", script: "ܡܦܘܚܬܐ", category: "adjective" },

  { word: "Marpita", translation: "Blanket", phonetic: "Mar-pi-ta", script: "ܡܪܦܝܬܐ", category: "adjective" },

  { word: "Bēstha", translation: "Pillow", phonetic: "Bēs-tha", script: "ܒܝܣܬܐ", category: "adjective" },

  { word: "Simlā", translation: "Ladder", phonetic: "Sim-lā", script: "ܣܝܡܠܐ", category: "adjective" },

  { word: "Gāra", translation: "Roof", phonetic: "Gā-ra", script: "ܓܪܐ", category: "adjective" },

  { word: "Daraga", translation: "Stairs", phonetic: "Da-ra-ga", script: "ܕܪܓܐ", category: "adjective" },


  // More Verbs
  { word: "Ḥli", translation: "To Wash", phonetic: "Ḥli", script: "ܚܠܝ", category: "adjective" },

  { word: "Tbi", translation: "To Cook", phonetic: "Tbi", script: "ܛܒܝ", category: "adjective" },

  { word: "Qli", translation: "To Fry", phonetic: "Qli", script: "ܩܠܝ", category: "adjective" },

  { word: "Blē", translation: "To Mix/Stir", phonetic: "Blē", script: "ܒܠܝ", category: "adjective" },

  { word: "Paš", translation: "To Stay/Remain", phonetic: "Paš", script: "ܦܫ", category: "adjective" },

  { word: "Npil", translation: "To Fall", phonetic: "Npil", script: "ܢܦܠ", category: "adjective" },

  { word: "Nḥit", translation: "To Descend/Go down", phonetic: "Nḥit", script: "ܢܚܬ", category: "adjective" },

  { word: "Sliq", translation: "To Ascend/Go up", phonetic: "Sliq", script: "ܣܠܩ", category: "adjective" },

  { word: "Pniā", translation: "To Turn", phonetic: "Pni-ā", script: "ܦܢܝܐ", category: "adjective" },

  { word: "Gdil", translation: "To Grow", phonetic: "Gdil", script: "ܓܕܠ", category: "adjective" },

  { word: "Qtil", translation: "To Kill", phonetic: "Qtil", script: "ܩܛܠ", category: "adjective" },

  { word: "Ḥyi", translation: "To Live", phonetic: "Ḥyi", script: "ܚܝܝ", category: "adjective" },

  { word: "Myi", translation: "To Die", phonetic: "Myi", script: "ܡܝܬ", category: "adjective" },

  { word: "Tli", translation: "To Hang", phonetic: "Tli", script: "ܬܠܝ", category: "adjective" },

  { word: "Bni", translation: "To Build", phonetic: "Bni", script: "ܒܢܝ", category: "adjective" },

  { word: "Ḥrib", translation: "To Destroy", phonetic: "Ḥrib", script: "ܚܪܒ", category: "adjective" },

  { word: "Pli", translation: "To Work/Plow", phonetic: "Pli", script: "ܦܠܚ", category: "adjective" },

  { word: "Zri", translation: "To Plant/Sow", phonetic: "Zri", script: "ܙܪܥ", category: "adjective" },

  { word: "Ḥṣid", translation: "To Harvest", phonetic: "Ḥṣid", script: "ܚܨܕ", category: "adjective" },

  { word: "Nši", translation: "To Forget", phonetic: "Nši", script: "ܢܫܝ", category: "adjective" },

  { word: "Dkhir", translation: "To Remember", phonetic: "Dkhir", script: "ܕܟܪ", category: "adjective" },

  { word: "Ḥšib", translation: "To Think", phonetic: "Ḥšib", script: "ܚܫܒ", category: "adjective" },

  { word: "Mlil", translation: "To Speak/Talk", phonetic: "Mlil", script: "ܡܠܠ", category: "adjective" },

  { word: "Šqi", translation: "To Be Silent", phonetic: "Šqi", script: "ܫܩܝ", category: "adjective" },

  { word: "Q'ā", translation: "To Cry/Shout", phonetic: "Q'ā", script: "ܩܥܐ", category: "adjective" },

  { word: "Zmēr", translation: "To Sing", phonetic: "Zmēr", script: "ܙܡܪ", category: "adjective" },

  { word: "Rqiḏ", translation: "To Dance", phonetic: "Rqi-ḏ", script: "ܪܩܕ", category: "adjective" },

  { word: "Ylib", translation: "To Study/Learn", phonetic: "Ylib", script: "ܝܠܦ", category: "adjective" },

  { word: "Qlē", translation: "To Teach", phonetic: "Qlē", script: "ܩܠܐ", category: "adjective" },

  { word: "Sbi", translation: "To Satisfy/Be full", phonetic: "Sbi", script: "ܣܒܥ", category: "adjective" },

  { word: "Kpin", translation: "To Be hungry", phonetic: "Kpin", script: "ܟܦܢ", category: "adjective" },

  { word: "Ṣhi", translation: "To Be thirsty", phonetic: "Ṣhi", script: "ܨܗܝ", category: "adjective" },

  { word: "Lbiš", translation: "To Wear/Dress", phonetic: "Lbiš", script: "ܠܒܫ", category: "adjective" },

  { word: "Šliḥ", translation: "To Undress", phonetic: "Šliḥ", script: "ܫܠܚ", category: "adjective" },

  { word: "Rkiv", translation: "To Ride", phonetic: "Rkiv", script: "ܪܟܒ", category: "adjective" },

  { word: "Nḥit", translation: "To Get down/Descend", phonetic: "Nḥit", script: "ܢܚܬ", category: "adjective" },

  { word: "Pqiḏ", translation: "To Order/Command", phonetic: "Pqi-ḏ", script: "ܦܩܕ", category: "adjective" },

  { word: "Šmi", translation: "To Obey", phonetic: "Šmi", script: "ܫܡܥ", category: "adjective" },

  { word: "Sni", translation: "To Hate", phonetic: "Sni", script: "ܣܢܐ", category: "adjective" },

  { word: "Ḥib", translation: "To Love", phonetic: "Ḥib", script: "ܚܒ", category: "adjective" },

  { word: "Nši", translation: "To Kiss", phonetic: "Nši", script: "ܢܫܩ", category: "adjective" },

  { word: "Ḥbiq", translation: "To Hug/Embrace", phonetic: "Ḥbiq", script: "ܚܒܩ", category: "adjective" },


  // More Animals
  { word: "Para", translation: "Cow", phonetic: "Pa-ra", script: "ܦܪܐ", category: "adjective" },

  { word: "Ṭarpa", translation: "Goat", phonetic: "Ṭar-pa", script: "ܛܪܦܐ", category: "adjective" },

  { word: "Khanzira", translation: "Pig", phonetic: "Khan-zi-ra", script: "ܚܢܙܝܪܐ", category: "adjective" },

  { word: "Dabba", translation: "Bear", phonetic: "Dab-ba", script: "ܕܒܐ", category: "adjective" },

  { word: "Dība", translation: "Wolf", phonetic: "Dī-ba", script: "ܕܝܒܐ", category: "adjective" },

  { word: "Talpa", translation: "Fox", phonetic: "Tal-pa", script: "ܬܠܦܐ", category: "adjective" },

  { word: "Arnava", translation: "Rabbit", phonetic: "Ar-na-va", script: "ܐܪܢܒܐ", category: "adjective" },

  { word: "Pāra", translation: "Mouse/Rat", phonetic: "Pā-ra", script: "ܦܪܐ", category: "adjective" },

  { word: "Namla", translation: "Ant", phonetic: "Nam-la", script: "ܢܡܠܐ", category: "adjective" },

  { word: "Dbōrta", translation: "Bee", phonetic: "Dbōr-ta", script: "ܕܒܘܪܬܐ", category: "adjective" },

  { word: "Ṭayra", translation: "Bird", phonetic: "Ṭay-ra", script: "ܛܝܪܐ", category: "adjective" },

  { word: "Nišra", translation: "Eagle", phonetic: "Niš-ra", script: "ܢܫܪܐ", category: "adjective" },

  { word: "Tarnagōlta", translation: "Rooster/Hen", phonetic: "Tar-na-gōl-ta", script: "ܬܪܢܓܘܠܬܐ", category: "adjective" },

  { word: "Barōza", translation: "Duck", phonetic: "Ba-rō-za", script: "ܒܪܘܙܐ", category: "adjective" },

  { word: "Wazza", translation: "Goose", phonetic: "Waz-za", script: "ܘܙܐ", category: "adjective" },

  { word: "Yōna", translation: "Dove/Pigeon", phonetic: "Yō-na", script: "ܝܘܢܐ", category: "adjective" },

  { word: "Ḥiwya", translation: "Snake/Serpent", phonetic: "Ḥiw-ya", script: "ܚܘܝܐ", category: "adjective" },

  { word: "Kurpada", translation: "Frog", phonetic: "Kur-pa-da", script: "ܟܘܪܦܕܐ", category: "adjective" },

  { word: "Šōna", translation: "Lizard", phonetic: "Šō-na", script: "ܫܘܢܐ", category: "adjective" },

  { word: "Parpāša", translation: "Butterfly", phonetic: "Par-pā-ša", script: "ܦܪܦܫܐ", category: "adjective" },

  { word: "Dadūna", translation: "Fly", phonetic: "Da-dū-na", script: "ܕܕܘܢܐ", category: "adjective" },

  { word: "Qarda", translation: "Mosquito", phonetic: "Qar-da", script: "ܩܪܕܐ", category: "adjective" },

  { word: "Gamal", translation: "Camel", phonetic: "Ga-mal", script: "ܓܡܠ", category: "adjective" },

  { word: "Pīla", translation: "Elephant", phonetic: "Pī-la", script: "ܦܝܠܐ", category: "adjective" },

  { word: "Qōpa", translation: "Monkey", phonetic: "Qō-pa", script: "ܩܘܦܐ", category: "adjective" },


  // More Nature Words
  { word: "Šmaya", translation: "Sky/Heaven", phonetic: "Šma-ya", script: "ܫܡܝܐ", category: "adjective" },

  { word: "Ar'a", translation: "Earth/Ground", phonetic: "Ar-'a", script: "ܐܪܥܐ", category: "adjective" },

  { word: "Shuna", translation: "Stone/Rock", phonetic: "Shu-na", script: "ܫܘܢܐ", category: "adjective" },

  { word: "Khala", translation: "Sand", phonetic: "Kha-la", script: "ܚܠܐ", category: "adjective" },

  { word: "Ṭīna", translation: "Mud/Clay", phonetic: "Ṭī-na", script: "ܛܝܢܐ", category: "adjective" },

  { word: "Mayā", translation: "Water (plural)", phonetic: "Ma-yā", script: "ܡܝܐ", category: "adjective" },

  { word: "Rāma", translation: "Thunder", phonetic: "Rā-ma", script: "ܪܥܡܐ", category: "adjective" },

  { word: "Barqa", translation: "Lightning", phonetic: "Bar-qa", script: "ܒܪܩܐ", category: "adjective" },

  { word: "Qešta", translation: "Rainbow", phonetic: "Qeš-ta", script: "ܩܫܬܐ", category: "adjective" },

  { word: "Brē", translation: "Desert", phonetic: "Brē", script: "ܒܪܐ", category: "adjective" },

  { word: "Midbrā", translation: "Wilderness", phonetic: "Mid-brā", script: "ܡܕܒܪܐ", category: "adjective" },

  { word: "Garra", translation: "Cave", phonetic: "Gar-ra", script: "ܓܪܐ", category: "adjective" },

  { word: "Dašta", translation: "Plain/Field", phonetic: "Daš-ta", script: "ܕܫܬܐ", category: "adjective" },

  { word: "Gāzarta", translation: "Island", phonetic: "Gā-zar-ta", script: "ܓܙܪܬܐ", category: "adjective" },

  { word: "Qešā", translation: "Forest/Woods", phonetic: "Qe-šā", script: "ܩܫܐ", category: "adjective" },

  { word: "Rē'uta", translation: "Pasture", phonetic: "Rē-'u-ta", script: "ܪܥܘܬܐ", category: "adjective" },

  { word: "Yabal", translation: "Hill", phonetic: "Ya-bal", script: "ܝܒܠ", category: "adjective" },

  { word: "Gōba", translation: "Valley", phonetic: "Gō-ba", script: "ܓܘܒܐ", category: "adjective" },


  // More Body Parts
  { word: "Gaba", translation: "Shoulder", phonetic: "Ga-ba", script: "ܓܒܐ", category: "adjective" },

  { word: "Khada", translation: "Breast/Chest", phonetic: "Kha-da", script: "ܚܕܐ", category: "adjective" },

  { word: "Ṣilā", translation: "Rib", phonetic: "Ṣi-lā", script: "ܨܠܥܐ", category: "adjective" },

  { word: "Kasā", translation: "Belly/Abdomen", phonetic: "Ka-sā", script: "ܟܣܐ", category: "adjective" },

  { word: "Ḥaṣā", translation: "Waist/Lower back", phonetic: "Ḥa-ṣā", script: "ܚܨܐ", category: "adjective" },

  { word: "Pakhda", translation: "Thigh", phonetic: "Pakh-da", script: "ܦܟܕܐ", category: "adjective" },

  { word: "Šāqa", translation: "Leg", phonetic: "Šā-qa", script: "ܫܩܐ", category: "adjective" },

  { word: "Aqla", translation: "Ankle", phonetic: "Aq-la", script: "ܥܩܠܐ", category: "adjective" },

  { word: "Ṣiv'a", translation: "Toe", phonetic: "Ṣiv-'a", script: "ܨܒܥܐ", category: "adjective" },

  { word: "Ṭipra", translation: "Nail/Fingernail", phonetic: "Ṭip-ra", script: "ܛܦܪܐ", category: "adjective" },

  { word: "Karsa", translation: "Bone", phonetic: "Kar-sa", script: "ܟܪܣܐ", category: "adjective" },

  { word: "Dma", translation: "Blood", phonetic: "Dma", script: "ܕܡܐ", category: "adjective" },

  { word: "Našma", translation: "Breath/Soul", phonetic: "Naš-ma", script: "ܢܫܡܐ", category: "adjective" },

  { word: "Napša", translation: "Soul/Life", phonetic: "Nap-ša", script: "ܢܦܫܐ", category: "adjective" },

  { word: "Rēha", translation: "Smell/Scent", phonetic: "Rē-ha", script: "ܪܝܚܐ", category: "adjective" },

  { word: "Ṭa'ma", translation: "Taste", phonetic: "Ṭa-'ma", script: "ܛܥܡܐ", category: "adjective" },

  { word: "Qāla", translation: "Voice", phonetic: "Qā-la", script: "ܩܠܐ", category: "adjective" },

  { word: "Dmē", translation: "Tears", phonetic: "Dmē", script: "ܕܡܥܐ", category: "adjective" },

  { word: "Rukha", translation: "Saliva/Spit", phonetic: "Ru-kha", script: "ܪܘܟܐ", category: "adjective" },

  { word: "Šaptha", translation: "Lip", phonetic: "Šap-tha", script: "ܫܦܬܐ", category: "adjective" },

  { word: "Gavīna", translation: "Eyebrow", phonetic: "Ga-vī-na", script: "ܓܒܝܢܐ", category: "adjective" },

  { word: "Šep'a", translation: "Eyelash", phonetic: "Šep-'a", script: "ܫܦܥܐ", category: "adjective" },

  { word: "Daqna", translation: "Beard", phonetic: "Daq-na", script: "ܕܩܢܐ", category: "adjective" },

  { word: "Sbarta", translation: "Mustache", phonetic: "Sbar-ta", script: "ܣܒܪܬܐ", category: "adjective" },

  { word: "Qādla", translation: "Neck", phonetic: "Qād-la", script: "ܩܕܠܐ", category: "adjective" },

  { word: "Gargartha", translation: "Throat", phonetic: "Gar-gar-tha", script: "ܓܪܓܪܬܐ", category: "adjective" },


  // More Clothing
  { word: "Nakhta", translation: "Dress", phonetic: "Nakh-ta", script: "ܢܚܬܐ", category: "adjective" },

  { word: "Ṭaylasa", translation: "Veil/Scarf", phonetic: "Ṭay-la-sa", script: "ܛܝܠܣܐ", category: "adjective" },

  { word: "Zunara", translation: "Belt", phonetic: "Zu-na-ra", script: "ܙܢܪܐ", category: "adjective" },

  { word: "Sarwāla", translation: "Trousers", phonetic: "Sar-wā-la", script: "ܣܪܘܠܐ", category: "adjective" },

  { word: "Quptha", translation: "Coat", phonetic: "Qup-tha", script: "ܩܘܦܬܐ", category: "adjective" },

  { word: "Jubba", translation: "Robe", phonetic: "Jub-ba", script: "ܓܘܒܐ", category: "adjective" },

  { word: "Idara", translation: "Sleeve", phonetic: "I-da-ra", script: "ܐܝܕܪܐ", category: "adjective" },

  { word: "Gēba", translation: "Pocket", phonetic: "Gē-ba", script: "ܓܝܒܐ", category: "adjective" },

  { word: "Qnāta", translation: "Button", phonetic: "Qnā-ta", script: "ܩܢܬܐ", category: "adjective" },

  { word: "Khayṭa", translation: "Thread", phonetic: "Khay-ṭa", script: "ܚܝܛܐ", category: "adjective" },

  { word: "Makhṭa", translation: "Needle", phonetic: "Makh-ṭa", script: "ܡܟܬܐ", category: "adjective" },

  { word: "Qaṣa", translation: "Scissors", phonetic: "Qa-ṣa", script: "ܩܨܐ", category: "adjective" },


  // Pronouns & Grammar
  { word: "Ana", translation: "I", phonetic: "A-na", script: "ܐܢܐ", category: "adjective" },

  { word: "At", translation: "You (masc. sing.)", phonetic: "At", script: "ܐܢܬ", category: "adjective" },

  { word: "Ati", translation: "You (fem. sing.)", phonetic: "A-ti", script: "ܐܢܬܝ", category: "adjective" },

  { word: "Awa", translation: "He", phonetic: "A-wa", script: "ܗܘ", category: "adjective" },

  { word: "Aya", translation: "She", phonetic: "A-ya", script: "ܗܝ", category: "adjective" },

  { word: "Akhnan", translation: "We", phonetic: "Akh-nan", script: "ܐܚܢܢ", category: "adjective" },

  { word: "Atwon", translation: "You (masc. pl.)", phonetic: "At-won", script: "ܐܢܬܘܢ", category: "adjective" },

  { word: "Atēn", translation: "You (fem. pl.)", phonetic: "A-tēn", script: "ܐܢܬܝܢ", category: "adjective" },

  { word: "Anē", translation: "They (masc.)", phonetic: "A-nē", script: "ܐܢܝ", category: "adjective" },

  { word: "Anēn", translation: "They (fem.)", phonetic: "A-nēn", script: "ܐܢܝܢ", category: "adjective" },


  // More Common Words
  { word: "Kul", translation: "All/Every", phonetic: "Kul", script: "ܟܠ", category: "adjective" },

  { word: "Kūlē", translation: "Everyone", phonetic: "Kū-lē", script: "ܟܠܗ", category: "adjective" },

  { word: "Meddem", translation: "Something", phonetic: "Med-dem", script: "ܡܕܡ", category: "adjective" },

  { word: "La Khit", translation: "Nothing", phonetic: "La Khit", script: "ܠܐ ܚܬ", category: "adjective" },

  { word: "Haḏā", translation: "This (masc.)", phonetic: "Ha-ḏā", script: "ܗܕܐ", category: "adjective" },

  { word: "Haḏē", translation: "This (fem.)", phonetic: "Ha-ḏē", script: "ܗܕܐ", category: "adjective" },

  { word: "Haw", translation: "That (masc.)", phonetic: "Haw", script: "ܗܘ", category: "adjective" },

  { word: "Hayē", translation: "That (fem.)", phonetic: "Ha-yē", script: "ܗܝ", category: "adjective" },

  { word: "Hālen", translation: "These", phonetic: "Hā-len", script: "ܗܠܝܢ", category: "adjective" },

  { word: "Hānōn", translation: "Those", phonetic: "Hā-nōn", script: "ܗܢܘܢ", category: "adjective" },

  { word: "Raba", translation: "Many/Much", phonetic: "Ra-ba", script: "ܪܒܐ", category: "adjective" },

  { word: "Zō'a", translation: "Few/Little", phonetic: "Zō-'a", script: "ܙܥܘܪܐ", category: "adjective" },

  { word: "Šapirā", translation: "Beautiful/Good", phonetic: "Ša-pi-rā", script: "ܫܦܝܪܐ", category: "adjective" },

  { word: "Bīša", translation: "Bad/Evil", phonetic: "Bī-ša", script: "ܒܝܫܐ", category: "adjective" },

  { word: "Ḥadṯa", translation: "New", phonetic: "Ḥad-ṯa", script: "ܚܕܬܐ", category: "adjective" },

  { word: "'Atiqa", translation: "Old/Ancient", phonetic: "'A-ti-qa", script: "ܥܬܝܩܐ", category: "adjective" },

  { word: "Yaqurā", translation: "Precious/Heavy", phonetic: "Ya-qu-rā", script: "ܝܩܘܪܐ", category: "adjective" },

  { word: "Qalīlā", translation: "Light/Easy", phonetic: "Qa-lī-lā", script: "ܩܠܝܠܐ", category: "adjective" },

  { word: "Khwārā", translation: "White/Pure", phonetic: "Khwā-rā", script: "ܚܘܪܐ", category: "adjective" },

  { word: "Ṭuvrā", translation: "Clean/Pure", phonetic: "Ṭuv-rā", script: "ܛܘܒܪܐ", category: "adjective" },

  { word: "Ṭanpā", translation: "Dirty/Unclean", phonetic: "Ṭan-pā", script: "ܛܢܦܐ", category: "adjective" },

  { word: "Halyā", translation: "Sweet", phonetic: "Hal-yā", script: "ܚܠܝܐ", category: "adjective" },

  { word: "Marirā", translation: "Bitter", phonetic: "Ma-ri-rā", script: "ܡܪܝܪܐ", category: "adjective" },

  { word: "Melyā", translation: "Full", phonetic: "Mel-yā", script: "ܡܠܝܐ", category: "adjective" },

  { word: "Sriqa", translation: "Empty", phonetic: "Sri-qa", script: "ܣܪܝܩܐ", category: "adjective" },


  // More Phrases
  { word: "Ana Itwan", translation: "I am here", phonetic: "A-na It-wan", script: "ܐܢܐ ܐܝܬܘܢ", category: "adjective" },

  { word: "La Yadin ana", translation: "I don't know", phonetic: "La Ya-din a-na", script: "ܠܐ ܝܕܥ ܐܢܐ", category: "adjective" },

  { word: "Yadin ana", translation: "I know", phonetic: "Ya-din a-na", script: "ܝܕܥ ܐܢܐ", category: "adjective" },

  { word: "Ba'en ana", translation: "I want", phonetic: "Ba-'en a-na", script: "ܒܥܐ ܐܢܐ", category: "adjective" },

  { word: "La Ba'en", translation: "I don't want", phonetic: "La Ba-'en", script: "ܠܐ ܒܥܐ", category: "adjective" },

  { word: "Kamen Khit", translation: "One more time", phonetic: "Ka-men Khit", script: "ܟܡܢ ܚܕܐ", category: "adjective" },

  { word: "Min Fadhlokh", translation: "Please (to male)", phonetic: "Min Fadh-lokh", script: "ܡܢ ܦܕܠܘܟ", category: "adjective" },

  { word: "Min Fadhlakh", translation: "Please (to female)", phonetic: "Min Fadh-lakh", script: "ܡܢ ܦܕܠܟ", category: "adjective" },

  { word: "La Marri", translation: "Don't worry", phonetic: "La Mar-ri", script: "ܠܐ ܡܪܝ", category: "adjective" },

  { word: "Kheena", translation: "Slowly", phonetic: "Khee-na", script: "ܟܝܢܐ", category: "adjective" },

  { word: "Qalula", translation: "Quickly", phonetic: "Qa-lu-la", script: "ܩܠܘܠܐ", category: "adjective" },

  { word: "Šapir", translation: "Well/Good", phonetic: "Ša-pir", script: "ܫܦܝܪ", category: "adjective" },

  { word: "Amin", translation: "Amen/Truly", phonetic: "A-min", script: "ܐܡܝܢ", category: "adjective" },

  { word: "Barikh Mor", translation: "Bless us, Lord", phonetic: "Ba-rikh Mor", script: "ܒܪܝܟ ܡܪܝ", category: "adjective" },


  // More Common Greetings & Phrases
  { word: "Safa", translation: "Morning", phonetic: "Sa-fa", script: "ܨܦܪܐ", category: "adjective" },

  { word: "Tsafra Taba", translation: "Good morning", phonetic: "Tsaf-ra Ta-ba", script: "ܨܦܪܐ ܛܒܐ", category: "adjective" },

  { word: "Ramsha Taba", translation: "Good evening", phonetic: "Ram-sha Ta-ba", script: "ܪܡܫܐ ܛܒܐ", category: "adjective" },

  { word: "Lele Taba", translation: "Good night", phonetic: "Le-le Ta-ba", script: "ܠܠܝܐ ܛܒܐ", category: "adjective" },

  { word: "Brakhta", translation: "Blessing", phonetic: "Brakh-ta", script: "ܒܪܟܬܐ", category: "adjective" },

  { word: "Khaya Taba", translation: "Long life / Good health", phonetic: "Kha-ya Ta-ba", script: "ܚܝܐ ܛܒܐ", category: "adjective" },

  { word: "Mabrukha", translation: "Congratulations", phonetic: "Mab-ru-kha", script: "ܡܒܪܘܟܐ", category: "adjective" },

  { word: "Eda Breekha", translation: "Merry Christmas", phonetic: "E-da Bree-kha", script: "ܥܐܕܐ ܒܪܝܟܐ", category: "adjective" },

  { word: "Shatta Breekha", translation: "Happy New Year", phonetic: "Shat-ta Bree-kha", script: "ܫܢܬܐ ܒܪܝܟܬܐ", category: "adjective" },

  { word: "Shata d'Khaye", translation: "Year of life (birthday wish)", phonetic: "Sha-ta d-Kha-ye", script: "ܫܢܬܐ ܕܚܝܐ", category: "adjective" },

  { word: "Khat Bokh", translation: "I love you (to male)", phonetic: "Khat Bo-kh", script: "ܟܬ ܒܘܟ", category: "adjective" },

  { word: "Khat Bakh", translation: "I love you (to female)", phonetic: "Khat Ba-kh", script: "ܟܬ ܒܟ", category: "adjective" },

  { word: "Khuba", translation: "Love", phonetic: "Khu-ba", script: "ܚܘܒܐ", category: "adjective" },

  { word: "Khwab", translation: "Friend (male)", phonetic: "Khwab", script: "ܚܒܪܐ", category: "adjective" },

  { word: "Khwarta", translation: "Friend (female)", phonetic: "Khwar-ta", script: "ܚܒܪܬܐ", category: "adjective" },


  // More Verbs & Actions
  { word: "Azil", translation: "Go / Going", phonetic: "A-zil", script: "ܐܙܠ", category: "adjective" },

  { word: "Ate", translation: "Come / Coming", phonetic: "A-te", script: "ܐܬܐ", category: "adjective" },

  { word: "Yatib", translation: "Sit / Sitting", phonetic: "Ya-tib", script: "ܝܬܒ", category: "adjective" },

  { word: "Qaym", translation: "Stand / Standing", phonetic: "Qaym", script: "ܩܝܡ", category: "adjective" },

  { word: "Rakhitz", translation: "Run / Running", phonetic: "Ra-khitz", script: "ܪܚܨ", category: "adjective" },

  { word: "Mhalikh", translation: "Walk / Walking", phonetic: "Mha-likh", script: "ܡܗܠܟ", category: "adjective" },

  { word: "Pateakh", translation: "Open / Opening", phonetic: "Pa-te-akh", script: "ܦܬܚ", category: "adjective" },

  { word: "Sakir", translation: "Close / Closing", phonetic: "Sa-kir", script: "ܣܟܪ", category: "adjective" },

  { word: "Yadi", translation: "Know / Knowing", phonetic: "Ya-di", script: "ܝܕܥ", category: "adjective" },

  { word: "Shami", translation: "Hear / Listening", phonetic: "Sha-mi", script: "ܫܡܥ", category: "adjective" },

  { word: "Khazi", translation: "See / Seeing", phonetic: "Kha-zi", script: "ܚܙܐ", category: "adjective" },

  { word: "Amir", translation: "Say / Saying", phonetic: "A-mir", script: "ܐܡܪ", category: "adjective" },

  { word: "Mmalil", translation: "Speak / Speaking", phonetic: "Mma-lil", script: "ܡܠܠ", category: "adjective" },

  { word: "Khatib", translation: "Write / Writing", phonetic: "Kha-tib", script: "ܟܬܒ", category: "adjective" },

  { word: "Qari", translation: "Read / Reading", phonetic: "Qa-ri", script: "ܩܪܐ", category: "adjective" },

  { word: "Yalip", translation: "Learn / Learning", phonetic: "Ya-lip", script: "ܝܠܦ", category: "adjective" },

  { word: "Malip", translation: "Teach / Teaching", phonetic: "Ma-lip", script: "ܡܠܦ", category: "adjective" },

  { word: "Shayil", translation: "Ask / Asking", phonetic: "Sha-yil", script: "ܫܐܠ", category: "adjective" },

  { word: "Mkhapir", translation: "Search / Searching", phonetic: "Mkha-pir", script: "ܡܚܦܪ", category: "adjective" },

  { word: "Yatwa", translation: "Gave / Give", phonetic: "Yat-wa", script: "ܝܗܒ", category: "adjective" },

  { word: "Saqil", translation: "Take / Taking", phonetic: "Sa-qil", script: "ܫܩܠ", category: "adjective" },

  { word: "Shadir", translation: "Send / Sending", phonetic: "Sha-dir", script: "ܫܕܪ", category: "adjective" },

  { word: "Mbasim", translation: "Fix / Fixing", phonetic: "Mba-sim", script: "ܡܒܣܡ", category: "adjective" },

  { word: "Khawib", translation: "Think / Thinking", phonetic: "Kha-wib", script: "ܚܫܒ", category: "adjective" },

  { word: "Bayi", translation: "Want / Wanting", phonetic: "Ba-yi", script: "ܒܥܐ", category: "adjective" },

  { word: "Mkhayil", translation: "Can / Able to", phonetic: "Mkha-yil", script: "ܡܟܝܠ", category: "adjective" },

  { word: "Msalli", translation: "Pray / Praying", phonetic: "Msal-li", script: "ܡܨܠܐ", category: "adjective" },

  { word: "Mbarikh", translation: "Bless / Blessing", phonetic: "Mba-rikh", script: "ܡܒܪܟ", category: "adjective" },

  { word: "Mshadir", translation: "Help / Helping", phonetic: "Msha-dir", script: "ܡܫܕܪ", category: "adjective" },

  { word: "Mqayim", translation: "Stay / Staying", phonetic: "Mqa-yim", script: "ܡܩܝܡ", category: "adjective" },

  { word: "Shapil", translation: "Pull / Pulling", phonetic: "Sha-pil", script: "ܫܦܠ", category: "adjective" },

  { word: "Daqi", translation: "Push / Pushing", phonetic: "Da-qi", script: "ܕܩܐ", category: "adjective" },

  { word: "Tali", translation: "Hang / Hanging", phonetic: "Ta-li", script: "ܬܠܐ", category: "adjective" },

  { word: "Nakhit", translation: "Fall / Falling", phonetic: "Na-khit", script: "ܢܚܬ", category: "adjective" },

  { word: "Sliq", translation: "Climb / Go up", phonetic: "Sliq", script: "ܣܠܩ", category: "adjective" },


  // Household & Daily Life
  { word: "Tara", translation: "Door", phonetic: "Ta-ra", script: "ܬܪܥܐ", category: "adjective" },

  { word: "Kawta", translation: "Window", phonetic: "Kaw-ta", script: "ܟܘܬܐ", category: "adjective" },

  { word: "Shqapa", translation: "Ceiling", phonetic: "Shqa-pa", script: "ܫܩܦܐ", category: "adjective" },

  { word: "Araa", translation: "Floor/Ground", phonetic: "Ar-aa", script: "ܐܪܥܐ", category: "adjective" },

  { word: "Gayra", translation: "Wall", phonetic: "Gay-ra", script: "ܓܕܪܐ", category: "adjective" },

  { word: "Nuhra", translation: "Light/Lamp", phonetic: "Nuh-ra", script: "ܢܘܗܪܐ", category: "adjective" },

  { word: "Madkhna", translation: "Kitchen", phonetic: "Mad-khna", script: "ܡܕܟܢܐ", category: "adjective" },

  { word: "Khawshekha", translation: "Bathroom", phonetic: "Khaw-she-kha", script: "ܚܘܫܟܐ", category: "adjective" },

  { word: "Madrasha", translation: "Bedroom", phonetic: "Mad-ra-sha", script: "ܡܕܪܫܐ", category: "adjective" },

  { word: "Gardina", translation: "Garden", phonetic: "Gar-di-na", script: "ܓܪܕܝܢܐ", category: "adjective" },

  { word: "Saqpa", translation: "Roof", phonetic: "Saq-pa", script: "ܣܩܦܐ", category: "adjective" },

  { word: "Daraja", translation: "Stairs", phonetic: "Da-ra-ja", script: "ܕܪܓܐ", category: "adjective" },

  { word: "Tanura", translation: "Oven", phonetic: "Ta-nu-ra", script: "ܬܢܘܪܐ", category: "adjective" },

  { word: "Makhla", translation: "Food/Meal", phonetic: "Makh-la", script: "ܡܐܟܠܐ", category: "adjective" },

  { word: "Shaqta", translation: "Drink", phonetic: "Shaq-ta", script: "ܫܩܝܬܐ", category: "adjective" },

  { word: "Sayna", translation: "Plate", phonetic: "Say-na", script: "ܨܝܢܐ", category: "adjective" },

  { word: "Kasa", translation: "Cup/Glass", phonetic: "Ka-sa", script: "ܟܣܐ", category: "adjective" },

  { word: "Sakina", translation: "Knife", phonetic: "Sa-ki-na", script: "ܣܟܝܢܐ", category: "adjective" },

  { word: "Purshana", translation: "Spoon", phonetic: "Pur-sha-na", script: "ܦܘܪܫܢܐ", category: "adjective" },

  { word: "Qawra", translation: "Fork", phonetic: "Qaw-ra", script: "ܩܘܪܐ", category: "adjective" },

  { word: "Tarpisa", translation: "Table", phonetic: "Tar-pi-sa", script: "ܛܪܦܝܣܐ", category: "adjective" },

  { word: "Sapla", translation: "Bowl", phonetic: "Sap-la", script: "ܣܦܠܐ", category: "adjective" },

  { word: "Tanjara", translation: "Pot", phonetic: "Tan-ja-ra", script: "ܬܢܓܪܐ", category: "adjective" },

  { word: "Nakhtana", translation: "Towel", phonetic: "Nakh-ta-na", script: "ܢܟܬܢܐ", category: "adjective" },

  { word: "Sabuna", translation: "Soap", phonetic: "Sa-bu-na", script: "ܣܒܘܢܐ", category: "adjective" },

  { word: "Mushkha", translation: "Oil", phonetic: "Mush-kha", script: "ܡܫܚܐ", category: "adjective" },

  { word: "Milkha", translation: "Salt", phonetic: "Mil-kha", script: "ܡܠܚܐ", category: "adjective" },

  { word: "Khala", translation: "Vinegar", phonetic: "Kha-la", script: "ܚܠܐ", category: "adjective" },

  { word: "Dubsha", translation: "Honey", phonetic: "Dub-sha", script: "ܕܒܫܐ", category: "adjective" },

  { word: "Kheshla", translation: "Fruit", phonetic: "Khesh-la", script: "ܚܫܠܐ", category: "adjective" },

  { word: "Yarqa", translation: "Vegetable", phonetic: "Yar-qa", script: "ܝܪܩܐ", category: "adjective" },


  // More Time Expressions
  { word: "Yawma", translation: "Day", phonetic: "Yaw-ma", script: "ܝܘܡܐ", category: "adjective" },

  { word: "Lele", translation: "Night", phonetic: "Le-le", script: "ܠܠܝܐ", category: "adjective" },

  { word: "Shata", translation: "Year", phonetic: "Sha-ta", script: "ܫܢܬܐ", category: "adjective" },

  { word: "Yarha", translation: "Month", phonetic: "Yar-ha", script: "ܝܪܚܐ", category: "adjective" },

  { word: "Shabta", translation: "Week", phonetic: "Shab-ta", script: "ܫܒܬܐ", category: "adjective" },

  { word: "Sha'ta", translation: "Hour", phonetic: "Sha'-ta", script: "ܫܥܬܐ", category: "adjective" },

  { word: "Regha", translation: "Minute/Moment", phonetic: "Reg-ha", script: "ܪܓܥܐ", category: "adjective" },

  { word: "Hashâ", translation: "Now", phonetic: "Ha-shâ", script: "ܗܫܐ", category: "adjective" },

  { word: "Qadam", translation: "Before/Earlier", phonetic: "Qa-dam", script: "ܩܕܡ", category: "adjective" },

  { word: "Bathar", translation: "After/Later", phonetic: "Ba-thar", script: "ܒܬܪ", category: "adjective" },

  { word: "Yawma Akhrin", translation: "Tomorrow", phonetic: "Yaw-ma Akh-rin", script: "ܝܘܡܐ ܐܚܪܝܢ", category: "adjective" },

  { word: "Etmali", translation: "Yesterday", phonetic: "Et-ma-li", script: "ܐܬܡܠܝ", category: "adjective" },

  { word: "Awdana", translation: "Always", phonetic: "Aw-da-na", script: "ܐܘܕܢܐ", category: "adjective" },

  { word: "Mitumt", translation: "Never", phonetic: "Mi-tumt", script: "ܡܬܘܡܬ", category: "adjective" },

  { word: "Qalil", translation: "Sometimes", phonetic: "Qa-lil", script: "ܩܠܝܠ", category: "adjective" },


  // More Numbers
  { word: "Tlathsar", translation: "Thirteen", phonetic: "Tlath-sar", script: "ܬܠܬܥܣܪ", category: "adjective" },

  { word: "Arbassar", translation: "Fourteen", phonetic: "Arba-ssar", script: "ܐܪܒܥܣܪ", category: "adjective" },

  { word: "Khamshassar", translation: "Fifteen", phonetic: "Khamsha-ssar", script: "ܚܡܫܥܣܪ", category: "adjective" },

  { word: "Eshtassar", translation: "Sixteen", phonetic: "Eshta-ssar", script: "ܫܬܥܣܪ", category: "adjective" },

  { word: "Shwassar", translation: "Seventeen", phonetic: "Shwa-ssar", script: "ܫܒܥܣܪ", category: "adjective" },

  { word: "Tmanyassar", translation: "Eighteen", phonetic: "Tmanya-ssar", script: "ܬܡܢܝܥܣܪ", category: "adjective" },

  { word: "Tshassar", translation: "Nineteen", phonetic: "Tsha-ssar", script: "ܬܫܥܣܪ", category: "adjective" },

  { word: "Tlatin", translation: "Thirty", phonetic: "Tla-tin", script: "ܬܠܬܝܢ", category: "adjective" },

  { word: "Arbin", translation: "Forty", phonetic: "Ar-bin", script: "ܐܪܒܥܝܢ", category: "adjective" },

  { word: "Khamshiـn", translation: "Fifty", phonetic: "Khamshi-n", script: "ܚܡܫܝܢ", category: "adjective" },

  { word: "Eshtin", translation: "Sixty", phonetic: "Esh-tin", script: "ܫܬܝܢ", category: "adjective" },

  { word: "Shwin", translation: "Seventy", phonetic: "Shwin", script: "ܫܒܥܝܢ", category: "adjective" },

  { word: "Tmanin", translation: "Eighty", phonetic: "Tma-nin", script: "ܬܡܢܝܢ", category: "adjective" },

  { word: "Tshin", translation: "Ninety", phonetic: "Tshin", script: "ܬܫܥܝܢ", category: "adjective" },

  { word: "Ima", translation: "Hundred", phonetic: "I-ma", script: "ܡܐܐ", category: "adjective" },

  { word: "Alpa", translation: "Thousand", phonetic: "Al-pa", script: "ܐܠܦܐ", category: "adjective" },


  // Weather & Nature
  { word: "Shamsha", translation: "Sun", phonetic: "Sham-sha", script: "ܫܡܫܐ", category: "adjective" },

  { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ", category: "adjective" },

  { word: "Kawkwa", translation: "Star", phonetic: "Kaw-kwa", script: "ܟܘܟܒܐ", category: "adjective" },

  { word: "Shmaya", translation: "Sky/Heaven", phonetic: "Shma-ya", script: "ܫܡܝܐ", category: "adjective" },

  { word: "Ara", translation: "Earth", phonetic: "A-ra", script: "ܐܪܥܐ", category: "adjective" },

  { word: "Mitra", translation: "Rain", phonetic: "Mit-ra", script: "ܡܛܪܐ", category: "adjective" },

  { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ", category: "adjective" },

  { word: "Rukha", translation: "Wind", phonetic: "Ru-kha", script: "ܪܘܚܐ", category: "adjective" },

  { word: "Anana", translation: "Cloud", phonetic: "A-na-na", script: "ܥܢܢܐ", category: "adjective" },

  { word: "Barqa", translation: "Lightning", phonetic: "Bar-qa", script: "ܒܪܩܐ", category: "adjective" },

  { word: "Rama", translation: "Thunder", phonetic: "Ra-ma", script: "ܪܥܡܐ", category: "adjective" },

  { word: "Shimsha", translation: "Warm/Heat", phonetic: "Shim-sha", script: "ܫܡܫܐ", category: "adjective" },

  { word: "Qarta", translation: "Cold", phonetic: "Qar-ta", script: "ܩܪܬܐ", category: "adjective" },

  { word: "Ilana", translation: "Tree", phonetic: "I-la-na", script: "ܐܝܠܢܐ", category: "adjective" },

  { word: "Habhaba", translation: "Flower", phonetic: "Hab-ha-ba", script: "ܗܒܗܒܐ", category: "adjective" },

  { word: "Yarqa", translation: "Leaf", phonetic: "Yar-qa", script: "ܛܪܦܐ", category: "adjective" },

  { word: "Shwila", translation: "Root", phonetic: "Shwi-la", script: "ܫܪܫܐ", category: "adjective" },

  { word: "Darta", translation: "Garden", phonetic: "Dar-ta", script: "ܕܪܬܐ", category: "adjective" },

  { word: "Tura", translation: "Mountain", phonetic: "Tu-ra", script: "ܛܘܪܐ", category: "adjective" },

  { word: "Nahra", translation: "River", phonetic: "Nah-ra", script: "ܢܗܪܐ", category: "adjective" },

  { word: "Yama", translation: "Sea/Lake", phonetic: "Ya-ma", script: "ܝܡܐ", category: "adjective" },

  { word: "Kippa", translation: "Stone/Rock", phonetic: "Kip-pa", script: "ܟܐܦܐ", category: "adjective" },

  { word: "Khala", translation: "Sand", phonetic: "Kha-la", script: "ܚܠܐ", category: "adjective" },


  // Transportation & Travel
  { word: "Urha", translation: "Road/Way", phonetic: "Ur-ha", script: "ܐܘܪܚܐ", category: "adjective" },

  { word: "Gishra", translation: "Bridge", phonetic: "Gish-ra", script: "ܓܫܪܐ", category: "adjective" },

  { word: "Mdinta", translation: "City/Town", phonetic: "Mdin-ta", script: "ܡܕܝܢܬܐ", category: "adjective" },

  { word: "Qrita", translation: "Village", phonetic: "Qri-ta", script: "ܩܪܝܬܐ", category: "adjective" },

  { word: "Shuqa", translation: "Market", phonetic: "Shu-qa", script: "ܫܘܩܐ", category: "adjective" },

  { word: "Makhsana", translation: "Store/Shop", phonetic: "Makh-sa-na", script: "ܡܟܣܢܐ", category: "adjective" },

  { word: "Beth Kaspe", translation: "Bank", phonetic: "Beth Kas-pe", script: "ܒܝܬ ܟܣܦܐ", category: "adjective" },

  { word: "Beth Slota", translation: "Church", phonetic: "Beth Slo-ta", script: "ܒܝܬ ܨܠܘܬܐ", category: "adjective" },

  { word: "Beth Sipre", translation: "Library", phonetic: "Beth Sip-re", script: "ܒܝܬ ܣܦܪܐ", category: "adjective" },

  { word: "Beth Mrisha", translation: "Hospital", phonetic: "Beth Mri-sha", script: "ܒܝܬ ܡܪܥܐ", category: "adjective" },

  { word: "Beth Madrasha", translation: "School", phonetic: "Beth Mad-ra-sha", script: "ܒܝܬ ܡܕܪܫܐ", category: "adjective" },

  { word: "Rakba", translation: "Train", phonetic: "Rak-ba", script: "ܪܟܒܐ", category: "adjective" },

  { word: "Tayarta", translation: "Airplane", phonetic: "Ta-yar-ta", script: "ܛܝܪܬܐ", category: "adjective" },

  { word: "Sipinta", translation: "Boat/Ship", phonetic: "Si-pin-ta", script: "ܣܦܝܢܬܐ", category: "adjective" },

  { word: "Rukhba", translation: "Vehicle", phonetic: "Rukh-ba", script: "ܪܟܘܒܐ", category: "adjective" },

  { word: "Bayka", translation: "Bicycle", phonetic: "Bay-ka", script: "ܒܝܟܐ", category: "adjective" },


  // More Emotions & States
  { word: "Khudta", translation: "Joy/Happiness", phonetic: "Khud-ta", script: "ܚܕܘܬܐ", category: "adjective" },

  { word: "Kriuta", translation: "Sadness/Sorrow", phonetic: "Kriu-ta", script: "ܟܪܝܘܬܐ", category: "adjective" },

  { word: "Dekhla", translation: "Fear", phonetic: "Dekh-la", script: "ܕܚܠܐ", category: "adjective" },

  { word: "Ghuza", translation: "Anger", phonetic: "Ghu-za", script: "ܪܘܓܙܐ", category: "adjective" },

  { word: "Shurkha", translation: "Hope", phonetic: "Shur-kha", script: "ܣܘܟܝܐ", category: "adjective" },

  { word: "Tara", translation: "Peace/Calm", phonetic: "Ta-ra", script: "ܫܠܡܐ", category: "adjective" },

  { word: "Teghmurta", translation: "Surprise", phonetic: "Tegh-mur-ta", script: "ܬܕܡܘܪܬܐ", category: "adjective" },

  { word: "Buhta", translation: "Shame", phonetic: "Buh-ta", script: "ܒܗܬܬܐ", category: "adjective" },

  { word: "Tayruta", translation: "Patience", phonetic: "Tay-ru-ta", script: "ܡܣܝܒܪܢܘܬܐ", category: "adjective" },

];
