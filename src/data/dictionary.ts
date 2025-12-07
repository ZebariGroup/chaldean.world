export type CategoryType = 'greeting' | 'noun' | 'verb' | 'adjective' | 'phrase' | 'number' | 'food' | 'family' | 'color' | 'time' | 'place' | 'animal' | 'nature' | 'body' | 'home' | 'profession' | 'clothing' | 'emotion' | 'travel' | 'question' | 'preposition' | 'conjunction';

export interface DictionaryEntry {
  id?: string;
  word: string;
  translation: string;
  arabic: string;
  arabic_phonetic?: string;
  phonetic: string;
  script: string;
  categories: CategoryType[];
  created_at?: string;
  updated_at?: string;
}

export const dictionaryData: DictionaryEntry[] = [
  // Greetings
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", script: "ܫܠܡܐ", arabic: "", categories: ["greeting"] },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", script: "ܫܠܡܐ ܠܘܟ", arabic: "", categories: ["greeting"] },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", script: "ܫܠܡܐ ܠܟ", arabic: "", categories: ["greeting"] },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", script: "ܒܫܝܢܐ", arabic: "", categories: ["greeting"] },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", script: "ܕܐܟ݂ܝ ܘܬ", arabic: "", categories: ["greeting"] },
  
  // Question Words
  { word: "Aykha", translation: "Where", phonetic: "Ay-kha", script: "ܐܝܟܐ", arabic: "", categories: ["question"] },
  { word: "Mana", translation: "What", phonetic: "Ma-na", script: "ܡܢܐ", arabic: "", categories: ["question"] },
  { word: "Aymat", translation: "When", phonetic: "Ay-mat", script: "ܐܝܡܬ", arabic: "", categories: ["question"] },
  { word: "Lamana", translation: "Why", phonetic: "La-ma-na", script: "ܠܡܢܐ", arabic: "", categories: ["question"] },
  { word: "Aykana", translation: "How", phonetic: "Ay-ka-na", script: "ܐܝܟܢܐ", arabic: "", categories: ["question"] },
  { word: "Kama", translation: "How many/How much", phonetic: "Ka-ma", script: "ܟܡܐ", arabic: "", categories: ["question"] },
  { word: "Ayna", translation: "Which", phonetic: "Ay-na", script: "ܐܝܢܐ", arabic: "", categories: ["question"] },
  // Prepositions
  { word: "B-", translation: "In/At/With", phonetic: "B-", script: "ܒ", arabic: "", categories: ["preposition"] },
  { word: "Min", translation: "From", phonetic: "Min", script: "ܡܢ", arabic: "", categories: ["preposition"] },
  { word: "L-", translation: "To/For", phonetic: "L-", script: "ܠ", arabic: "", categories: ["preposition"] },
  { word: "Al", translation: "On/Upon", phonetic: "Al", script: "ܥܠ", arabic: "", categories: ["preposition"] },
  { word: "Takh", translation: "Under/Below", phonetic: "Takh", script: "ܬܚܬ", arabic: "", categories: ["preposition"] },
  { word: "Bathar", translation: "After/Behind", phonetic: "Ba-thar", script: "ܒܬܪ", arabic: "", categories: ["preposition"] },
  { word: "Qam", translation: "Before/In front of", phonetic: "Qam", script: "ܩܕܡ", arabic: "", categories: ["preposition"] },
  { word: "Gaw", translation: "Inside", phonetic: "Gaw", script: "ܓܘ", arabic: "", categories: ["preposition"] },
  { word: "Bar", translation: "Outside", phonetic: "Bar", script: "ܒܪ", arabic: "", categories: ["preposition"] },
  { word: "Gaw", translation: "Between/Among", phonetic: "Gaw", script: "ܒܝܢ", arabic: "", categories: ["preposition"] },
  { word: "Am", translation: "With", phonetic: "Am", script: "ܥܡ", arabic: "", categories: ["preposition"] },
  { word: "Dil", translation: "Of/Belonging to", phonetic: "Dil", script: "ܕܝܠ", arabic: "", categories: ["preposition"] },

  // Conjunctions
  { word: "W-", translation: "And", phonetic: "W-", script: "ܘ", arabic: "", categories: ["conjunction"] },
  { word: "Amma", translation: "But", phonetic: "Am-ma", script: "ܐܡܡܐ", arabic: "", categories: ["conjunction"] },
  { word: "Aw", translation: "Or", phonetic: "Aw", script: "ܐܘ", arabic: "", categories: ["conjunction"] },
  { word: "Metul d-", translation: "Because", phonetic: "Me-tul d-", script: "ܡܛܘܠ ܕ", arabic: "", categories: ["conjunction"] },
  { word: "Kad", translation: "When/As", phonetic: "Kad", script: "ܟܕ", arabic: "", categories: ["conjunction"] },
  { word: "Idan", translation: "If", phonetic: "I-dan", script: "ܐܝܕܢ", arabic: "", categories: ["conjunction"] },

  // Common Phrases
  { word: "Basima", translation: "Thank you (to a male) / Good (masc)", phonetic: "Ba-si-ma", script: "ܒܣܝܡܐ", arabic: "", categories: ["phrase"] },
  { word: "Basimta", translation: "Thank you (to a female) / Good (fem)", phonetic: "Ba-sim-ta", script: "ܒܣܝܡܬܐ", arabic: "", categories: ["phrase"] },
  { word: "Min d'yokh", translation: "Please (lit. from your hand)", phonetic: "Min d-yokh", script: "ܡܢ ܕܝܘܟ", arabic: "", categories: ["phrase"] },
  { word: "Tawdi", translation: "Thank you", phonetic: "Taw-di", script: "ܬܘܕܝ", arabic: "", categories: ["phrase"] },
  { word: "Eo", translation: "Yes", phonetic: "Eo", script: "ܐܝܢ", arabic: "", categories: ["phrase"] },
  { word: "La", translation: "No", phonetic: "La", script: "ܠܐ", arabic: "", categories: ["phrase"] },
  { word: "Shlama lokh", translation: "Goodbye (to male)", phonetic: "Shla-ma lokh", script: "ܫܠܡܐ ܠܘܟ", arabic: "", categories: ["phrase"] },
  { word: "Shlama lakh", translation: "Goodbye (to female)", phonetic: "Shla-ma lakh", script: "ܫܠܡܐ ܠܟ", arabic: "", categories: ["phrase"] },
  { word: "Brikh", translation: "Blessed", phonetic: "Brikh", script: "ܒܪܝܟ", arabic: "", categories: ["phrase"] },
  { word: "Shlama d'Alaha", translation: "Peace of God", phonetic: "Shla-ma d-A-la-ha", script: "ܫܠܡܐ ܕܐܠܗܐ", arabic: "", categories: ["phrase"] },
  
  // Adjectives
  { word: "Spay", translation: "Good", phonetic: "Spay", script: "ܣܦܝ", arabic: "", categories: ["adjective"] },

  { word: "Raba", translation: "Much / Very", phonetic: "Ra-ba", script: "ܪܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Shapira", translation: "Beautiful (masc)", phonetic: "Sha-pi-ra", script: "ܫܦܝܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Shapirta", translation: "Beautiful (fem)", phonetic: "Sha-pir-ta", script: "ܫܦܝܪܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Zora", translation: "Small", phonetic: "Zo-ra", script: "ܙܥܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Yarikha", translation: "Long", phonetic: "Ya-ri-kha", script: "ܝܪܝܟ݂ܐ", arabic: "", categories: ["adjective"] },

  { word: "Krya", translation: "Short", phonetic: "Kry-a", script: "ܟܪܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Khatha", translation: "New", phonetic: "Kha-tha", script: "ܚܕܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Atiqa", translation: "Old", phonetic: "A-ti-qa", script: "ܥܬܝܩܐ", arabic: "", categories: ["adjective"] },

  { word: "Khidiya", translation: "Happy", phonetic: "Khi-di-ya", script: "ܚܕܝܐ", arabic: "", categories: ["emotion"] },

  { word: "Kriwa", translation: "Sad", phonetic: "Kri-wa", script: "ܟܪܝܒܐ", arabic: "", categories: ["emotion"] },

  { word: "Chilya", translation: "Tired", phonetic: "Chil-ya", script: "ܟܗܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Kpina", translation: "Hungry", phonetic: "Kpi-na", script: "ܟܦܝܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Sahya", translation: "Thirsty", phonetic: "Sah-ya", script: "ܨܗܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Mrisha", translation: "Sick", phonetic: "Mri-sha", script: "ܡܪܥܐ", arabic: "", categories: ["adjective"] },

  { word: "Hayla", translation: "Strong", phonetic: "Hay-la", script: "ܚܝܠܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Basora", translation: "Weak", phonetic: "Ba-so-ra", script: "ܒܨܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Qalula", translation: "Fast", phonetic: "Qa-lu-la", script: "ܩܠܘܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Yaqura", translation: "Heavy/Slow", phonetic: "Ya-qu-ra", script: "ܝܩܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Rama", translation: "High", phonetic: "Ra-ma", script: "ܪܡܐ", arabic: "", categories: ["adjective"] },

  { word: "Kupa", translation: "Low", phonetic: "Ku-pa", script: "ܟܘܦܐ", arabic: "", categories: ["adjective"] },


  // Colors
  { word: "Smoqa", translation: "Red", phonetic: "Smo-qa", script: "ܣܡܘܩܐ", arabic: "", categories: ["color"] },
  { word: "Khawra", translation: "Blue", phonetic: "Khaw-ra", script: "ܟܘܪܐ", arabic: "", categories: ["color"] },
  { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka", script: "ܝܪܘܩܐ", arabic: "", categories: ["color"] },
  { word: "Spera", translation: "Yellow", phonetic: "Spe-ra", script: "ܣܦܝܪܐ", arabic: "", categories: ["color"] },
  { word: "Ukma", translation: "Black", phonetic: "Uk-ma", script: "ܐܘܟܡܐ", arabic: "", categories: ["color"] },
  { word: "Khwara", translation: "White", phonetic: "Khwa-ra", script: "ܚܘܪܐ", arabic: "", categories: ["color"] },
  { word: "Portuqala", translation: "Orange", phonetic: "Por-tu-qa-la", script: "ܦܘܪܬܩܠܐ", arabic: "", categories: ["color"] },
  { word: "Banafsha", translation: "Purple", phonetic: "Ba-naf-sha", script: "ܒܢܦܫܐ", arabic: "", categories: ["color"] },
  { word: "Warda", translation: "Pink", phonetic: "War-da", script: "ܘܪܕܐ", arabic: "", categories: ["color"] },
  { word: "Qahwaya", translation: "Brown", phonetic: "Qah-wa-ya", script: "ܩܗܘܝܐ", arabic: "", categories: ["color"] },
  { word: "Rasasa", translation: "Grey", phonetic: "Ra-sa-sa", script: "ܪܨܨܐ", arabic: "", categories: ["color"] },
  { word: "Dahba", translation: "Gold", phonetic: "Dah-ba", script: "ܕܗܒܐ", arabic: "", categories: ["color"] },
  { word: "Sipa", translation: "Silver", phonetic: "Si-pa", script: "ܣܐܡܐ", arabic: "", categories: ["color"] },
  { word: "Bahra", translation: "Light (Color)", phonetic: "Bah-ra", script: "ܒܗܪܐ", arabic: "", categories: ["color"] },
  { word: "Khekha", translation: "Dark (Color)", phonetic: "Khe-kha", script: "ܚܘܟ݂ܐ", arabic: "", categories: ["color"] },


  // Family
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", script: "ܒܒܐ", arabic: "", categories: ["family"] },
  { word: "Abba", translation: "Father (Formal)", phonetic: "Ab-ba", script: "ܐܒܐ", arabic: "", categories: ["family"] },
  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", script: "ܝܡܐ", arabic: "", categories: ["family"] },
  { word: "Imma", translation: "Mother (Formal)", phonetic: "Im-ma", script: "ܐܡܐ", arabic: "", categories: ["family"] },
  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", script: "ܐܚܘܢܐ", arabic: "", categories: ["family"] },
  { word: "Akh", translation: "Brother", phonetic: "Akh", script: "ܐܚܐ", arabic: "", categories: ["family"] },
  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", script: "ܚܬܐ", arabic: "", categories: ["family"] },
  { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", script: "ܣܒܐ", arabic: "", categories: ["family"] },
  { word: "Sawtha", translation: "Grandmother", phonetic: "Saw-tha", script: "ܣܒܬܐ", arabic: "", categories: ["family"] },
  { word: "Amma", translation: "Uncle (Paternal)", phonetic: "Am-ma", script: "ܥܡܐ", arabic: "", categories: ["family"] },
  { word: "Khala", translation: "Uncle (Maternal)", phonetic: "Kha-la", script: "ܚܠܐ", arabic: "", categories: ["family"] },
  { word: "Bra", translation: "Son", phonetic: "Bra", script: "ܒܪܐ", arabic: "", categories: ["family"] },
  { word: "Brata", translation: "Daughter", phonetic: "Bra-ta", script: "ܒܪܬܐ", arabic: "", categories: ["family"] },
  { word: "Gawra", translation: "Husband", phonetic: "Gaw-ra", script: "ܓܒܪܐ", arabic: "", categories: ["family"] },
  { word: "Bakhta", translation: "Wife", phonetic: "Bakh-ta", script: "ܒܟ݂ܬܐ", arabic: "", categories: ["family"] },
  { word: "Nashwatha", translation: "Relatives/Family", phonetic: "Nash-wa-tha", script: "ܢܫܘܬܐ", arabic: "", categories: ["family"] },
  { word: "Yala", translation: "Child/Boy", phonetic: "Ya-la", script: "ܝܠܐ", arabic: "", categories: ["noun"] },
  { word: "Nasha", translation: "Person", phonetic: "Na-sha", script: "ܢܫܐ", arabic: "", categories: ["noun"] },
  { word: "Nashe", translation: "People", phonetic: "Na-she", script: "ܢܫܐ", arabic: "", categories: ["noun"] },

  // Food & Drink
  { word: "Mya", translation: "Water", phonetic: "M-ya", script: "ܡܝܐ", arabic: "", categories: ["food"] },
  { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", script: "ܠܚܡܐ", arabic: "", categories: ["food"] },
  { word: "Bisra", translation: "Meat", phonetic: "Bis-ra", script: "ܒܣܪܐ", arabic: "", categories: ["food"] },
  { word: "Guptha", translation: "Cheese", phonetic: "Gup-tha", script: "ܓܘܒܬܐ", arabic: "", categories: ["food"] },
  { word: "Be'ay", translation: "Eggs", phonetic: "Be-ay", script: "ܒܝܥܐ", arabic: "", categories: ["food"] },
  { word: "Chai", translation: "Tea", phonetic: "Chai", script: "ܟܐܝ", arabic: "", categories: ["food"] },
  { word: "Qahwa", translation: "Coffee", phonetic: "Qah-wa", script: "ܩܗܘܐ", arabic: "", categories: ["food"] },
  { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha", script: "ܬܦܘܚܐ", arabic: "", categories: ["food"] },
  { word: "Pishra", translation: "Fish", phonetic: "Pish-ra", script: "ܦܫܪܐ", arabic: "", categories: ["food"] },
  { word: "Khala", translation: "Milk", phonetic: "Kha-la", script: "ܚܠܒܐ", arabic: "", categories: ["food"] },
  { word: "Kthayta", translation: "Chicken", phonetic: "Kthay-ta", script: "ܟܬܝܬܐ", arabic: "", categories: ["food"] },
  { word: "Yaraqa", translation: "Vegetables", phonetic: "Ya-ra-qa", script: "ܝܪܩܐ", arabic: "", categories: ["food"] },
  { word: "Pera", translation: "Fruit", phonetic: "Pe-ra", script: "ܦܐܪܐ", arabic: "", categories: ["food"] },
  { word: "Khamra", translation: "Wine", phonetic: "Kham-ra", script: "ܚܡܪܐ", arabic: "", categories: ["food"] },
  { word: "Melkha", translation: "Salt", phonetic: "Mel-kha", script: "ܡܠܚܐ", arabic: "", categories: ["food"] },
  { word: "Shekar", translation: "Sugar", phonetic: "She-kar", script: "ܫܟܪ", arabic: "", categories: ["food"] },
  { word: "Mishkha", translation: "Oil", phonetic: "Mish-kha", script: "ܡܫܚܐ", arabic: "", categories: ["food"] },
  { word: "Kare", translation: "Butter", phonetic: "Ka-re", script: "ܟܪܐ", arabic: "", categories: ["food"] },
  { word: "Masta", translation: "Yogurt", phonetic: "Mas-ta", script: "ܡܣܬܐ", arabic: "", categories: ["food"] },
  { word: "Qare", translation: "Cucumber", phonetic: "Qa-re", script: "ܩܪܐ", arabic: "", categories: ["food"] },
  { word: "Tamata", translation: "Tomato", phonetic: "Ta-ma-ta", script: "ܛܡܐܛܐ", arabic: "", categories: ["food"] },
  { word: "Basla", translation: "Onion", phonetic: "Bas-la", script: "ܒܨܠܐ", arabic: "", categories: ["food"] },
  { word: "Patata", translation: "Potato", phonetic: "Pa-ta-ta", script: "ܦܛܐܛܐ", arabic: "", categories: ["food"] },
  { word: "Inwe", translation: "Grapes", phonetic: "In-we", script: "ܥܢܒܐ", arabic: "", categories: ["food"] },

  // Nouns & Objects
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", script: "ܐܠܗܐ", arabic: "", categories: ["noun"] },
  { word: "Bayta", translation: "House", phonetic: "Bay-ta", script: "ܒܝܬܐ", arabic: "", categories: ["noun"] },
  { word: "Sayara", translation: "Car", phonetic: "Sa-ya-ra", script: "ܣܝܪܐ", arabic: "", categories: ["noun"] },
  { word: "Ktawa", translation: "Book", phonetic: "Kta-wa", script: "ܟܬܒܐ", arabic: "", categories: ["noun"] },
  { word: "Qalama", translation: "Pen", phonetic: "Qa-la-ma", script: "ܩܠܡܐ", arabic: "", categories: ["noun"] },
  { word: "Pata", translation: "Table/Face", phonetic: "Pa-ta", script: "ܦܬܐ", arabic: "", categories: ["noun"] },
  { word: "Kursa", translation: "Chair", phonetic: "Kur-sa", script: "ܟܘܪܣܝܐ", arabic: "", categories: ["noun"] },
  { word: "Itha", translation: "Hand", phonetic: "I-tha", script: "ܐܝܕܐ", arabic: "", categories: ["body"] },
  { word: "Reesha", translation: "Head", phonetic: "Ree-sha", script: "ܪܝܫܐ", arabic: "", categories: ["body"] },
  { word: "Libba", translation: "Heart", phonetic: "Lib-ba", script: "ܠܒܐ", arabic: "", categories: ["body"] },


  // Verbs (Infinitive/Root roughly)
  { word: "Akhal", translation: "To Eat", phonetic: "A-khal", script: "ܐܟܠ", arabic: "", categories: ["verb"] },
  { word: "Shtay", translation: "To Drink", phonetic: "Sh-tay", script: "ܫܬܐ", arabic: "", categories: ["verb"] },
  { word: "Dmikh", translation: "To Sleep", phonetic: "D-mikh", script: "ܕܡܟ", arabic: "", categories: ["verb"] },
  { word: "Yithib", translation: "To Sit", phonetic: "Yi-thib", script: "ܝܬܒ", arabic: "", categories: ["verb"] },
  { word: "Qim", translation: "To Rise/Stand", phonetic: "Qim", script: "ܩܡ", arabic: "", categories: ["verb"] },
  { word: "Khazi", translation: "To See", phonetic: "Kha-zi", script: "ܚܙܐ", arabic: "", categories: ["verb"] },
  { word: "Sheme", translation: "To Hear", phonetic: "She-me", script: "ܫܡܥ", arabic: "", categories: ["verb"] },
  { word: "Azil", translation: "To Go", phonetic: "A-zil", script: "ܐܙܠ", arabic: "", categories: ["verb"] },
  { word: "Athi", translation: "To Come", phonetic: "A-thi", script: "ܐܬܐ", arabic: "", categories: ["verb"] },
  { word: "Ktiv", translation: "To Write", phonetic: "K-tiv", script: "ܟܬܒ", arabic: "", categories: ["verb"] },
  { word: "Qari", translation: "To Read", phonetic: "Qa-ri", script: "ܩܪܐ", arabic: "", categories: ["verb"] },
  { word: "Pthakh", translation: "To Open", phonetic: "Pthakh", script: "ܦܬܚ", arabic: "", categories: ["verb"] },
  { word: "Dwiq", translation: "To Close/Hold", phonetic: "Dwiq", script: "ܕܒܩ", arabic: "", categories: ["verb"] },
  { word: "Shqil", translation: "To Take/Buy", phonetic: "Shqil", script: "ܫܩܠ", arabic: "", categories: ["verb"] },
  { word: "Hiw", translation: "To Give", phonetic: "Hiw", script: "ܝܗܒ", arabic: "", categories: ["verb"] },
  { word: "Ba'ay", translation: "To Want/Love", phonetic: "Ba-ay", script: "ܒܥܐ", arabic: "", categories: ["verb"] },
  { word: "Yadi", translation: "To Know", phonetic: "Ya-di", script: "ܝܕܥ", arabic: "", categories: ["verb"] },
  { word: "Pol", translation: "To Work", phonetic: "Pol", script: "ܦܠܚ", arabic: "", categories: ["verb"] },
  { word: "Mtal", translation: "To Play", phonetic: "Mtal", script: "ܡܛܠ", arabic: "", categories: ["verb"] },
  { word: "Mahki", translation: "To Speak", phonetic: "Mah-ki", script: "ܡܚܟܐ", arabic: "", categories: ["verb"] },
  { word: "Rkhosh", translation: "To Walk", phonetic: "Rkhosh", script: "ܪܚܫ", arabic: "", categories: ["verb"] },
  { word: "Rhit", translation: "To Run", phonetic: "Rhit", script: "ܪܗܛ", arabic: "", categories: ["verb"] },
  { word: "Gkhikh", translation: "To Laugh", phonetic: "Gkhikh", script: "ܓܚܟ", arabic: "", categories: ["verb"] },
  { word: "Bkhe", translation: "To Cry", phonetic: "Bkhe", script: "ܒܟܐ", arabic: "", categories: ["verb"] },


  // Numbers
  { word: "Kha", translation: "One", phonetic: "Kha", script: "ܚܕ", arabic: "", categories: ["number"] },
  { word: "Tre", translation: "Two", phonetic: "Tre", script: "ܬܪܝܢ", arabic: "", categories: ["number"] },
  { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", script: "ܬܠܬܐ", arabic: "", categories: ["number"] },
  { word: "Arba", translation: "Four", phonetic: "Ar-ba", script: "ܐܪܒܥܐ", arabic: "", categories: ["number"] },
  { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", script: "ܚܡܫܐ", arabic: "", categories: ["number"] },
  { word: "Ishta", translation: "Six", phonetic: "Ish-ta", script: "ܐܫܬܐ", arabic: "", categories: ["number"] },
  { word: "Shwa", translation: "Seven", phonetic: "Shwa", script: "ܫܒܥܐ", arabic: "", categories: ["number"] },
  { word: "Tmanya", translation: "Eight", phonetic: "Tman-ya", script: "ܬܡܢܝܐ", arabic: "", categories: ["number"] },
  { word: "Tisha", translation: "Nine", phonetic: "Ti-sha", script: "ܬܫܥܐ", arabic: "", categories: ["number"] },
  { word: "Asar", translation: "Ten", phonetic: "A-sar", script: "ܥܣܪܐ", arabic: "", categories: ["number"] },


  // Time
  { word: "Yoma", translation: "Day", phonetic: "Yo-ma", script: "ܝܘܡܐ", arabic: "", categories: ["time"] },
  { word: "Lelya", translation: "Night", phonetic: "Lel-ya", script: "ܠܠܝܐ", arabic: "", categories: ["time"] },
  { word: "Idyo", translation: "Today", phonetic: "Id-yo", script: "ܐܕܝܘ", arabic: "", categories: ["time"] },
  { word: "Timmal", translation: "Yesterday", phonetic: "Tim-mal", script: "ܬܡܠ", arabic: "", categories: ["time"] },
  { word: "Qam", translation: "Tomorrow", phonetic: "Qam", script: "ܩܐܡ", arabic: "", categories: ["time"] },
  { word: "Shabta", translation: "Saturday / Week", phonetic: "Shab-ta", script: "ܫܒܬܐ", arabic: "", categories: ["time"] },


  // Animals
  { word: "Kalba", translation: "Dog", phonetic: "Kal-ba", script: "ܟܠܒܐ", arabic: "", categories: ["animal"] },
  { word: "Qato", translation: "Cat", phonetic: "Qa-to", script: "ܩܛܘ", arabic: "", categories: ["animal"] },
  { word: "Susya", translation: "Horse", phonetic: "Sus-ya", script: "ܣܘܣܝܐ", arabic: "", categories: ["animal"] },
  { word: "Tawra", translation: "Bull/Ox", phonetic: "Taw-ra", script: "ܬܘܪܐ", arabic: "", categories: ["animal"] },
  { word: "Khmara", translation: "Donkey", phonetic: "Khma-ra", script: "ܚܡܪܐ", arabic: "", categories: ["animal"] },
  { word: "Arya", translation: "Lion", phonetic: "Ar-ya", script: "ܐܪܝܐ", arabic: "", categories: ["animal"] },
  { word: "Arva", translation: "Sheep", phonetic: "Ar-va", script: "ܐܪܒܐ", arabic: "", categories: ["animal"] },

  // Nature
  { word: "Shimsha", translation: "Sun", phonetic: "Shim-sha", script: "ܫܡܫܐ", arabic: "", categories: ["nature"] },

  { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ", arabic: "", categories: ["nature"] },

  { word: "Kokhva", translation: "Star", phonetic: "Kokh-va", script: "ܟܘܟܒܐ", arabic: "", categories: ["nature"] },

  { word: "Matra", translation: "Rain", phonetic: "Mat-ra", script: "ܡܛܪܐ", arabic: "", categories: ["nature"] },

  { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ", arabic: "", categories: ["nature"] },

  { word: "Nura", translation: "Fire", phonetic: "Nu-ra", script: "ܢܘܪܐ", arabic: "", categories: ["nature"] },

  { word: "Opra", translation: "Earth/Dust", phonetic: "Op-ra", script: "ܥܦܪܐ", arabic: "", categories: ["nature"] },

  { word: "Ilana", translation: "Tree", phonetic: "I-la-na", script: "ܐܝܠܢܐ", arabic: "", categories: ["nature"] },
  { word: "Nahra", translation: "River", phonetic: "Nah-ra", script: "ܢܗܪܐ", arabic: "", categories: ["nature"] },
  { word: "Yama", translation: "Sea/Lake", phonetic: "Ya-ma", script: "ܝܡܐ", arabic: "", categories: ["nature"] },
  { word: "Tura", translation: "Mountain", phonetic: "Tu-ra", script: "ܛܘܪܐ", arabic: "", categories: ["nature"] },
  { word: "Genta", translation: "Garden", phonetic: "Gen-ta", script: "ܓܢܬܐ", arabic: "", categories: ["nature"] },
  { word: "Aywa", translation: "Cloud", phonetic: "Ay-wa", script: "ܥܝܒܐ", arabic: "", categories: ["nature"] },
  { word: "Powkha", translation: "Wind/Air", phonetic: "Pow-kha", script: "ܦܘܚܐ", arabic: "", categories: ["nature"] },

  { word: "Qarira", translation: "Cold", phonetic: "Qa-ri-ra", script: "ܩܪܝܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Khamima", translation: "Hot", phonetic: "Kha-mi-ma", script: "ܚܡܝܡܐ", arabic: "", categories: ["adjective"] },


  // Body
  { word: "Ena", translation: "Eye", phonetic: "E-na", script: "ܥܝܢܐ", arabic: "", categories: ["body"] },

  { word: "Nakhira", translation: "Nose", phonetic: "Na-khi-ra", script: "ܢܚܝܪܐ", arabic: "", categories: ["body"] },

  { word: "Puma", translation: "Mouth", phonetic: "Pu-ma", script: "ܦܘܡܐ", arabic: "", categories: ["body"] },

  { word: "Odna", translation: "Ear", phonetic: "Od-na", script: "ܐܕܢܐ", arabic: "", categories: ["body"] },

  { word: "Regla", translation: "Foot/Leg", phonetic: "Reg-la", script: "ܪܓܠܐ", arabic: "", categories: ["body"] },

  { word: "Lishana", translation: "Tongue/Language", phonetic: "Li-sha-na", script: "ܠܫܢܐ", arabic: "", categories: ["body"] },

  { word: "Shina", translation: "Tooth", phonetic: "Shi-na", script: "ܫܢܐ", arabic: "", categories: ["body"] },

  { word: "Sa'ra", translation: "Hair", phonetic: "Sa-ra", script: "ܣܥܪܐ", arabic: "", categories: ["body"] },

  { word: "Khade", translation: "Chest", phonetic: "Kha-de", script: "ܚܕܝܐ", arabic: "", categories: ["body"] },

  { word: "Kasa", translation: "Stomach/Belly", phonetic: "Ka-sa", script: "ܟܪܣܐ", arabic: "", categories: ["body"] },

  { word: "Khasa", translation: "Back", phonetic: "Kha-sa", script: "ܚܨܐ", arabic: "", categories: ["body"] },

  { word: "Dra'a", translation: "Arm", phonetic: "Dra-a", script: "ܕܪܥܐ", arabic: "", categories: ["body"] },

  { word: "Siv'a", translation: "Finger", phonetic: "Siv-a", script: "ܨܒܥܐ", arabic: "", categories: ["body"] },

  { word: "Burka", translation: "Knee", phonetic: "Bur-ka", script: "ܒܘܪܟܐ", arabic: "", categories: ["adjective"] },


  // Home
  { word: "Tarra", translation: "Door", phonetic: "Tar-ra", script: "ܬܪܥܐ", arabic: "", categories: ["noun"] },

  { word: "Kawtha", translation: "Window", phonetic: "Kaw-tha", script: "ܟܘܬܐ", arabic: "", categories: ["nature"] },

  { word: "Igara", translation: "Roof", phonetic: "I-ga-ra", script: "ܐܓܪܐ", arabic: "", categories: ["noun"] },

  { word: "Shwitha", translation: "Bed", phonetic: "Shwi-tha", script: "ܫܘܝܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Matbakh", translation: "Kitchen", phonetic: "Mat-bakh", script: "ܡܛܒܟ݂", arabic: "", categories: ["noun"] },

  { word: "Khamama", translation: "Bathroom", phonetic: "Kha-ma-ma", script: "ܚܡܐܡܐ", arabic: "", categories: ["noun"] },

  { word: "Oda", translation: "Room/Bedroom", phonetic: "O-da", script: "ܐܘܕܐ", arabic: "", categories: ["noun"] },

  { word: "Ar'a", translation: "Floor/Ground", phonetic: "Ar-a", script: "ܐܪܥܐ", arabic: "", categories: ["noun"] },

  { word: "Qleeda", translation: "Key", phonetic: "Qlee-da", script: "ܩܠܝܕܐ", arabic: "", categories: ["home"] },

  { word: "Sahna", translation: "Plate", phonetic: "Sah-na", script: "ܨܚܢܐ", arabic: "", categories: ["home"] },

  { word: "Kchamcha", translation: "Spoon", phonetic: "Kcham-cha", script: "ܟܡܟܐ", arabic: "", categories: ["home"] },

  { word: "Changala", translation: "Fork", phonetic: "Chan-ga-la", script: "ܟܢܓܠܐ", arabic: "", categories: ["home"] },

  { word: "Sakina", translation: "Knife", phonetic: "Sa-ki-na", script: "ܣܟܝܢܐ", arabic: "", categories: ["home"] },

  { word: "Stikana", translation: "Cup (Tea)", phonetic: "Sti-ka-na", script: "ܐܣܬܟܢܐ", arabic: "", categories: ["home"] },

  { word: "Glasa", translation: "Glass", phonetic: "Gla-sa", script: "ܓܠܣܐ", arabic: "", categories: ["home"] },


  // Clothing
  { word: "Sudra", translation: "Shirt", phonetic: "Sud-ra", script: "ܨܘܕܪܐ", arabic: "", categories: ["clothing"] },

  { word: "Sharwala", translation: "Pants", phonetic: "Shar-wa-la", script: "ܫܪܘܠܐ", arabic: "", categories: ["clothing"] },

  { word: "Soltha", translation: "Shoe", phonetic: "Sol-tha", script: "ܣܘܠܬܐ", arabic: "", categories: ["clothing"] },

  { word: "Kusitha", translation: "Hat/Cap", phonetic: "Ku-si-tha", script: "ܟܘܣܝܬܐ", arabic: "", categories: ["clothing"] },


  // Places
  { word: "Madrasa", translation: "School", phonetic: "Mad-ra-sa", script: "ܡܕܪܫܬܐ", arabic: "", categories: ["place"] },
  { word: "Knishta", translation: "Church", phonetic: "Knish-ta", script: "ܟܢܘܫܬܐ", arabic: "", categories: ["place"] },
  { word: "Shuqa", translation: "Market", phonetic: "Shu-qa", script: "ܫܘܩܐ", arabic: "", categories: ["place"] },
  { word: "Matha", translation: "Village/Town", phonetic: "Ma-tha", script: "ܡܬܐ", arabic: "", categories: ["place"] },
  { word: "Medina", translation: "City", phonetic: "Me-di-na", script: "ܡܕܝܢܬܐ", arabic: "", categories: ["place"] },
  { word: "Bayta d-Asye", translation: "Hospital", phonetic: "Bay-ta d-As-ye", script: "ܒܝܬ ܐܣܝܐ", arabic: "", categories: ["place"] },
  { word: "Dukana", translation: "Store/Shop", phonetic: "Du-ka-na", script: "ܕܘܟܢܐ", arabic: "", categories: ["place"] },
  { word: "Be-Sawa", translation: "Grandfather's House", phonetic: "Be-Sa-wa", script: "ܒܝܬ ܣܒܐ", arabic: "", categories: ["place"] },

  { word: "Khakla", translation: "Field/Farm", phonetic: "Khak-la", script: "ܚܩܠܐ", arabic: "", categories: ["place"] },
  { word: "Parqa", translation: "Park", phonetic: "Par-qa", script: "ܦܪܩܐ", arabic: "", categories: ["place"] },
  { word: "Mat'am", translation: "Restaurant", phonetic: "Mat-am", script: "ܡܛܥܡ", arabic: "", categories: ["place"] },
  { word: "Maktab", translation: "Office", phonetic: "Mak-tab", script: "ܡܟܬܒ", arabic: "", categories: ["place"] },

  // Professions
  { word: "Malpana", translation: "Teacher (Masc)", phonetic: "Mal-pa-na", script: "ܡܠܦܢܐ", arabic: "", categories: ["profession"] },
  { word: "Malpantha", translation: "Teacher (Fem)", phonetic: "Mal-pan-tha", script: "ܡܠܦܢܬܐ", arabic: "", categories: ["profession"] },
  { word: "Asya", translation: "Doctor", phonetic: "As-ya", script: "ܐܣܝܐ", arabic: "", categories: ["profession"] },
  { word: "Nakhopa", translation: "Baker", phonetic: "Na-kho-pa", script: "ܢܚܘܦܐ", arabic: "", categories: ["profession"] },
  { word: "Sayuqa", translation: "Driver", phonetic: "Sa-yu-qa", script: "ܣܝܘܩܐ", arabic: "", categories: ["profession"] },
  { word: "Shurta", translation: "Police", phonetic: "Shur-ta", script: "ܫܘܪܛܐ", arabic: "", categories: ["profession"] },
  { word: "Khatota", translation: "Tailor/Seamstress", phonetic: "Kha-to-ta", script: "ܚܝܛܐ", arabic: "", categories: ["profession"] },
  { word: "Ranya", translation: "Singer", phonetic: "Ran-ya", script: "ܪܢܝܐ", arabic: "", categories: ["profession"] },
  { word: "Tabakha", translation: "Cook/Chef", phonetic: "Ta-ba-kha", script: "ܛܒܟ݂ܐ", arabic: "", categories: ["profession"] },
  { word: "Benaya", translation: "Builder", phonetic: "Be-na-ya", script: "ܒܢܝܐ", arabic: "", categories: ["profession"] },
  { word: "Falaha", translation: "Farmer", phonetic: "Fa-la-ha", script: "ܦܠܚܐ", arabic: "", categories: ["profession"] },

  // Emotions
  { word: "Khiditha", translation: "Happy (fem)", phonetic: "Khi-di-tha", script: "ܚܕܝܬܐ", arabic: "", categories: ["emotion"] },

  { word: "Krivta", translation: "Sad (fem)", phonetic: "Kriv-ta", script: "ܟܪܝܒܬܐ", arabic: "", categories: ["emotion"] },

  { word: "Karpana", translation: "Angry", phonetic: "Kar-pa-na", script: "ܟܪܦܢܐ", arabic: "", categories: ["emotion"] },

  { word: "Zdi'a", translation: "Scared", phonetic: "Zdi-a", script: "ܙܕܝܥܐ", arabic: "", categories: ["emotion"] },


  // Travel
  { word: "Orkha", translation: "Road/Way", phonetic: "Or-kha", script: "ܐܘܪܚܐ", arabic: "", categories: ["travel"] },
  { word: "Tayara", translation: "Airplane", phonetic: "Ta-ya-ra", script: "ܛܝܪܐ", arabic: "", categories: ["travel"] },
  { word: "Bosta", translation: "Bus", phonetic: "Bos-ta", script: "ܒܐܨ", arabic: "", categories: ["travel"] },
  { word: "Pasport", translation: "Passport", phonetic: "Pas-port", script: "ܦܣܦܘܪܬ", arabic: "", categories: ["travel"] },

  { word: "Tiket", translation: "Ticket", phonetic: "Ti-ket", script: "ܬܝܟܬ", arabic: "", categories: ["travel"] },

  { word: "Mata", translation: "Luggage/Things", phonetic: "Ma-ta", script: "ܡܐܬܐ", arabic: "", categories: ["travel"] },


  // More Time
  { word: "Sa'at", translation: "Hour/Clock", phonetic: "Sa-at", script: "ܣܥܬ", arabic: "", categories: ["time"] },

  { word: "Daqiqa", translation: "Minute", phonetic: "Da-qi-qa", script: "ܕܩܝܩܐ", arabic: "", categories: ["time"] },

  { word: "Shita", translation: "Year", phonetic: "Shi-ta", script: "ܫܢܬܐ", arabic: "", categories: ["time"] },

  { word: "Yargha", translation: "Month", phonetic: "Yar-gha", script: "ܝܪܚܐ", arabic: "", categories: ["time"] },

  { word: "Hasa", translation: "Now", phonetic: "Ha-sa", script: "ܗܣܐ", arabic: "", categories: ["time"] },

  { word: "Qam", translation: "Before", phonetic: "Qam", script: "ܩܡ", arabic: "", categories: ["time"] },

  { word: "Sipra", translation: "Morning", phonetic: "Sip-ra", script: "ܨܦܪܐ", arabic: "", categories: ["time"] },

  { word: "Ramsha", translation: "Evening", phonetic: "Ram-sha", script: "ܪܡܫܐ", arabic: "", categories: ["time"] },


  // More Numbers
  { word: "Khadassar", translation: "Eleven", phonetic: "Kha-das-sar", script: "ܚܕܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Treissar", translation: "Twelve", phonetic: "Treis-sar", script: "ܬܪܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Esrin", translation: "Twenty", phonetic: "Es-rin", script: "ܥܣܪܝܢ", arabic: "", categories: ["number"] },

  { word: "Tlaa", translation: "Thirty", phonetic: "Tla-a", script: "ܬܠܬܝܢ", arabic: "", categories: ["number"] },

  { word: "Arba", translation: "Forty", phonetic: "Ar-ba", script: "ܐܪܒܥܝܢ", arabic: "", categories: ["number"] },

  { word: "Khamshi", translation: "Fifty", phonetic: "Kham-shi", script: "ܚܡܫܝܢ", arabic: "", categories: ["number"] },

  { word: "Alpa", translation: "One Thousand", phonetic: "Al-pa", script: "ܐܠܦܐ", arabic: "", categories: ["number"] },



  // More Phrases
  { word: "Bshina b-atayokh", translation: "Welcome (to male)", phonetic: "B-shi-na b-a-ta-yokh", script: "ܒܫܝܢܐ ܒܐܬܝܘܟ݂", arabic: "", categories: ["phrase"] },

  { word: "Bshina b-atayakh", translation: "Welcome (to female)", phonetic: "B-shi-na b-a-ta-yakh", script: "ܒܫܝܢܐ ܒܐܬܝܟ݂", arabic: "", categories: ["phrase"] },

  { word: "Brikh sipra", translation: "Good morning", phonetic: "Brikh sip-ra", script: "ܒܪܝܟ݂ ܨܦܪܐ", arabic: "", categories: ["greeting"] },

  { word: "Brikh ramsha", translation: "Good evening", phonetic: "Brikh ram-sha", script: "ܒܪܝܟ݂ ܪܡܫܐ", arabic: "", categories: ["greeting"] },

  { word: "Ghanokh b-shina", translation: "Good night", phonetic: "Gha-nokh b-shi-na", script: "ܓܢܘܟ݂ ܒܫܝܢܐ", arabic: "", categories: ["greeting"] },

  { word: "Mahbila", translation: "Excuse me", phonetic: "Mah-bi-la", script: "ܡܚܒܠܐ", arabic: "", categories: ["phrase"] },

  { word: "La yadin", translation: "I don't know", phonetic: "La ya-din", script: "ܠܐ ܝܕܥܢ", arabic: "", categories: ["adjective"] },

  { word: "Brikh sipra", translation: "Good morning", phonetic: "Brikh sip-ra", script: "ܒܪܝܟ ܨܦܪܐ", arabic: "", categories: ["greeting"] },

  { word: "Brikh ramsha", translation: "Good evening", phonetic: "Brikh ram-sha", script: "ܒܪܝܟ ܪܡܫܐ", arabic: "", categories: ["greeting"] },

  { word: "Ghanokh b-shina", translation: "Good night", phonetic: "Gha-nokh b-shi-na", script: "ܓܢܘܟ ܒܫܝܢܐ", arabic: "", categories: ["greeting"] },

  { word: "Brikh d'Ati", translation: "God bless you", phonetic: "Brikh d-A-ti", script: "ܒܪܝܟ ܕܐܬܝ", arabic: "", categories: ["adjective"] },

  { word: "Brikh d'Atokh", translation: "God bless you (to male)", phonetic: "Brikh d-A-tokh", script: "ܒܪܝܟ ܕܐܬܘܟ", arabic: "", categories: ["adjective"] },

  { word: "Brikh d'Atakh", translation: "God bless you (to female)", phonetic: "Brikh d-A-takh", script: "ܒܪܝܟ ܕܐܬܟ", arabic: "", categories: ["adjective"] },

  { word: "Shlama d'Alaha b'Atokh", translation: "Peace of God be with you (to male)", phonetic: "Shla-ma d-A-la-ha b-A-tokh", script: "ܫܠܡܐ ܕܐܠܗܐ ܒܐܬܘܟ", arabic: "", categories: ["adjective"] },

  { word: "Shlama d'Alaha b'Atakh", translation: "Peace of God be with you (to female)", phonetic: "Shla-ma d-A-la-ha b-A-takh", script: "ܫܠܡܐ ܕܐܠܗܐ ܒܐܬܟ", arabic: "", categories: ["adjective"] },


  // More Verbs
  { word: "Sakh", translation: "To Wash", phonetic: "Sakh", script: "ܣܚ", arabic: "", categories: ["verb"] },

  { word: "Nashakh", translation: "To Clean", phonetic: "Na-shakh", script: "ܢܫܚ", arabic: "", categories: ["verb"] },

  { word: "Qatil", translation: "To Kill", phonetic: "Qa-til", script: "ܩܛܠ", arabic: "", categories: ["verb"] },

  { word: "Qayim", translation: "To Stand/Stay", phonetic: "Qa-yim", script: "ܩܐܡ", arabic: "", categories: ["verb"] },

  { word: "Shakil", translation: "To Carry/Lift", phonetic: "Sha-kil", script: "ܫܩܠ", arabic: "", categories: ["verb"] },

  { word: "Rakhim", translation: "To Throw/Put", phonetic: "Ra-khim", script: "ܪܟܡ", arabic: "", categories: ["verb"] },


  // Days of the Week
  { word: "Khamiša", translation: "Thursday", phonetic: "Kha-mi-ša", script: "ܚܡܝܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Iroha", translation: "Sunday", phonetic: "I-ro-ha", script: "ܝܪܘܚܐ", arabic: "", categories: ["nature"] },

  { word: "Trinbšaba", translation: "Monday", phonetic: "Trin-b-ša-ba", script: "ܬܪܝܢܒܫܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Tlitbšaba", translation: "Tuesday", phonetic: "Tlit-b-ša-ba", script: "ܬܠܝܬܒܫܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Arbibšaba", translation: "Wednesday", phonetic: "Ar-bib-ša-ba", script: "ܐܪܒܥܒܫܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Khamšibšaba", translation: "Friday", phonetic: "Kham-ši-b-ša-ba", script: "ܚܡܫܒܫܒܐ", arabic: "", categories: ["adjective"] },


  // Months & Seasons
  { word: "Kanun Qadmaya", translation: "January", phonetic: "Ka-nun Qad-ma-ya", script: "ܟܢܘܢ ܩܕܡܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Šbat", translation: "February", phonetic: "Šbat", script: "ܫܒܛ", arabic: "", categories: ["adjective"] },

  { word: "Adar", translation: "March", phonetic: "A-dar", script: "ܐܕܪ", arabic: "", categories: ["adjective"] },

  { word: "Nisan", translation: "April", phonetic: "Ni-san", script: "ܢܝܣܢ", arabic: "", categories: ["adjective"] },

  { word: "Iyyar", translation: "May", phonetic: "Iy-yar", script: "ܐܝܪ", arabic: "", categories: ["adjective"] },

  { word: "Ḥziran", translation: "June", phonetic: "Ḥzi-ran", script: "ܚܙܝܪܢ", arabic: "", categories: ["adjective"] },

  { word: "Tammuz", translation: "July", phonetic: "Tam-muz", script: "ܬܡܘܙ", arabic: "", categories: ["adjective"] },

  { word: "Ab", translation: "August", phonetic: "Ab", script: "ܐܒ", arabic: "", categories: ["adjective"] },

  { word: "Ilul", translation: "September", phonetic: "I-lul", script: "ܐܝܠܘܠ", arabic: "", categories: ["adjective"] },

  { word: "Tišrin Qadmaya", translation: "October", phonetic: "Tiš-rin Qad-ma-ya", script: "ܬܫܪܝܢ ܩܕܡܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Tišrin Ḥraya", translation: "November", phonetic: "Tiš-rin Ḥra-ya", script: "ܬܫܪܝܢ ܚܪܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Kanun Ḥraya", translation: "December", phonetic: "Ka-nun Ḥra-ya", script: "ܟܢܘܢ ܚܪܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Kharta", translation: "Spring", phonetic: "Khar-ta", script: "ܟܪܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Qayṭa", translation: "Summer", phonetic: "Qay-ṭa", script: "ܩܝܛܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṭarpa", translation: "Autumn/Fall", phonetic: "Ṭar-pa", script: "ܛܪܦܐ", arabic: "", categories: ["adjective"] },

  { word: "Sitwa", translation: "Winter", phonetic: "Sit-wa", script: "ܣܬܘܐ", arabic: "", categories: ["adjective"] },


  // More Fruits & Vegetables
  { word: "Tīna", translation: "Fig", phonetic: "Tī-na", script: "ܬܐܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Rummana", translation: "Pomegranate", phonetic: "Rum-ma-na", script: "ܪܘܡܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Khawkha", translation: "Peach", phonetic: "Khaw-kha", script: "ܚܘܟܐ", arabic: "", categories: ["adjective"] },

  { word: "Mešmeša", translation: "Apricot", phonetic: "Meš-me-ša", script: "ܡܫܡܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Kummatra", translation: "Pear", phonetic: "Kum-mat-ra", script: "ܟܘܡܬܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Talyana", translation: "Watermelon", phonetic: "Tal-ya-na", script: "ܛܠܝܢܐ", arabic: "", categories: ["nature"] },

  { word: "Bṭikha", translation: "Melon", phonetic: "Bṭi-kha", script: "ܒܛܝܟܐ", arabic: "", categories: ["adjective"] },

  { word: "Limuna", translation: "Lemon", phonetic: "Li-mu-na", script: "ܠܝܡܘܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Burtuqala", translation: "Orange (fruit)", phonetic: "Bur-tu-qa-la", script: "ܒܘܪܬܘܩܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṣōna", translation: "Dates (fruit)", phonetic: "Ṣō-na", script: "ܨܘܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Gōzta", translation: "Walnut", phonetic: "Gōz-ta", script: "ܓܘܙܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Lōza", translation: "Almond", phonetic: "Lō-za", script: "ܠܘܙܐ", arabic: "", categories: ["adjective"] },

  { word: "Fistōqa", translation: "Pistachio", phonetic: "Fis-tō-qa", script: "ܦܣܬܩܐ", arabic: "", categories: ["adjective"] },

  { word: "Tuma", translation: "Garlic", phonetic: "Tu-ma", script: "ܬܘܡܐ", arabic: "", categories: ["adjective"] },

  { word: "Pilpila", translation: "Pepper", phonetic: "Pil-pi-la", script: "ܦܠܦܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Karāt", translation: "Leek", phonetic: "Ka-rāt", script: "ܟܪܬ", arabic: "", categories: ["adjective"] },

  { word: "Khassa", translation: "Lettuce", phonetic: "Khas-sa", script: "ܚܣܐ", arabic: "", categories: ["adjective"] },

  { word: "Shilpa", translation: "Eggplant", phonetic: "Shil-pa", script: "ܫܠܦܐ", arabic: "", categories: ["adjective"] },

  { word: "Kōsa", translation: "Zucchini", phonetic: "Kō-sa", script: "ܟܘܣܐ", arabic: "", categories: ["adjective"] },

  { word: "Lifta", translation: "Turnip", phonetic: "Lif-ta", script: "ܠܦܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Gzara", translation: "Carrot", phonetic: "Gza-ra", script: "ܓܙܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Šalgam", translation: "Radish", phonetic: "Šal-gam", script: "ܫܠܓܡ", arabic: "", categories: ["adjective"] },


  // More Meats & Proteins
  { word: "Luḥma d-Khmara", translation: "Beef", phonetic: "Luḥ-ma d-Khma-ra", script: "ܠܘܚܡܐ ܕܚܡܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Luḥma d-Arva", translation: "Lamb", phonetic: "Luḥ-ma d-Ar-va", script: "ܠܘܚܡܐ ܕܐܪܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Luḥma d-Khanzira", translation: "Pork", phonetic: "Luḥ-ma d-Khan-zi-ra", script: "ܠܘܚܡܐ ܕܚܢܙܝܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Šamka", translation: "Fish (general)", phonetic: "Šam-ka", script: "ܫܡܟܐ", arabic: "", categories: ["adjective"] },

  { word: "Qrusta", translation: "Shrimp", phonetic: "Qrus-ta", script: "ܩܪܘܣܬܐ", arabic: "", categories: ["adjective"] },


  // Kitchen & Cooking
  { word: "Sanduqa", translation: "Pot", phonetic: "San-du-qa", script: "ܣܢܕܘܩܐ", arabic: "", categories: ["adjective"] },

  { word: "Qarora", translation: "Kettle", phonetic: "Qa-ro-ra", script: "ܩܪܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Piala", translation: "Bowl", phonetic: "Pia-la", script: "ܦܝܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Tannura", translation: "Oven", phonetic: "Tan-nu-ra", script: "ܬܢܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Maqliya", translation: "Frying Pan", phonetic: "Maq-li-ya", script: "ܡܩܠܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Zangīla", translation: "Basket", phonetic: "Zan-gī-la", script: "ܙܢܓܝܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṭasla", translation: "Tray", phonetic: "Ṭas-la", script: "ܛܣܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Qadḥa", translation: "Pitcher", phonetic: "Qad-ḥa", script: "ܩܕܚܐ", arabic: "", categories: ["adjective"] },

  { word: "Maḥbašta", translation: "Broom", phonetic: "Maḥ-baš-ta", script: "ܡܚܒܫܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Mapuḥta", translation: "Fan", phonetic: "Ma-puḥ-ta", script: "ܡܦܘܚܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Marpita", translation: "Blanket", phonetic: "Mar-pi-ta", script: "ܡܪܦܝܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Bēstha", translation: "Pillow", phonetic: "Bēs-tha", script: "ܒܝܣܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Simlā", translation: "Ladder", phonetic: "Sim-lā", script: "ܣܝܡܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Gāra", translation: "Roof", phonetic: "Gā-ra", script: "ܓܪܐ", arabic: "", categories: ["noun"] },

  { word: "Daraga", translation: "Stairs", phonetic: "Da-ra-ga", script: "ܕܪܓܐ", arabic: "", categories: ["adjective"] },


  // More Verbs
  { word: "Ḥli", translation: "To Wash", phonetic: "Ḥli", script: "ܚܠܝ", arabic: "", categories: ["verb"] },

  { word: "Tbi", translation: "To Cook", phonetic: "Tbi", script: "ܛܒܝ", arabic: "", categories: ["verb"] },

  { word: "Qli", translation: "To Fry", phonetic: "Qli", script: "ܩܠܝ", arabic: "", categories: ["verb"] },

  { word: "Blē", translation: "To Mix/Stir", phonetic: "Blē", script: "ܒܠܝ", arabic: "", categories: ["verb"] },

  { word: "Paš", translation: "To Stay/Remain", phonetic: "Paš", script: "ܦܫ", arabic: "", categories: ["verb"] },

  { word: "Npil", translation: "To Fall", phonetic: "Npil", script: "ܢܦܠ", arabic: "", categories: ["verb"] },

  { word: "Nḥit", translation: "To Descend/Go down", phonetic: "Nḥit", script: "ܢܚܬ", arabic: "", categories: ["verb"] },

  { word: "Sliq", translation: "To Ascend/Go up", phonetic: "Sliq", script: "ܣܠܩ", arabic: "", categories: ["verb"] },

  { word: "Pniā", translation: "To Turn", phonetic: "Pni-ā", script: "ܦܢܝܐ", arabic: "", categories: ["verb"] },

  { word: "Gdil", translation: "To Grow", phonetic: "Gdil", script: "ܓܕܠ", arabic: "", categories: ["verb"] },

  { word: "Qtil", translation: "To Kill", phonetic: "Qtil", script: "ܩܛܠ", arabic: "", categories: ["verb"] },

  { word: "Ḥyi", translation: "To Live", phonetic: "Ḥyi", script: "ܚܝܝ", arabic: "", categories: ["verb"] },

  { word: "Myi", translation: "To Die", phonetic: "Myi", script: "ܡܝܬ", arabic: "", categories: ["verb"] },

  { word: "Tli", translation: "To Hang", phonetic: "Tli", script: "ܬܠܝ", arabic: "", categories: ["verb"] },

  { word: "Bni", translation: "To Build", phonetic: "Bni", script: "ܒܢܝ", arabic: "", categories: ["verb"] },

  { word: "Ḥrib", translation: "To Destroy", phonetic: "Ḥrib", script: "ܚܪܒ", arabic: "", categories: ["verb"] },

  { word: "Pli", translation: "To Work/Plow", phonetic: "Pli", script: "ܦܠܚ", arabic: "", categories: ["verb"] },

  { word: "Zri", translation: "To Plant/Sow", phonetic: "Zri", script: "ܙܪܥ", arabic: "", categories: ["verb"] },

  { word: "Ḥṣid", translation: "To Harvest", phonetic: "Ḥṣid", script: "ܚܨܕ", arabic: "", categories: ["verb"] },

  { word: "Nši", translation: "To Forget", phonetic: "Nši", script: "ܢܫܝ", arabic: "", categories: ["verb"] },

  { word: "Dkhir", translation: "To Remember", phonetic: "Dkhir", script: "ܕܟܪ", arabic: "", categories: ["verb"] },

  { word: "Ḥšib", translation: "To Think", phonetic: "Ḥšib", script: "ܚܫܒ", arabic: "", categories: ["verb"] },

  { word: "Mlil", translation: "To Speak/Talk", phonetic: "Mlil", script: "ܡܠܠ", arabic: "", categories: ["verb"] },

  { word: "Šqi", translation: "To Be Silent", phonetic: "Šqi", script: "ܫܩܝ", arabic: "", categories: ["verb"] },

  { word: "Q'ā", translation: "To Cry/Shout", phonetic: "Q'ā", script: "ܩܥܐ", arabic: "", categories: ["verb"] },

  { word: "Zmēr", translation: "To Sing", phonetic: "Zmēr", script: "ܙܡܪ", arabic: "", categories: ["verb"] },

  { word: "Rqiḏ", translation: "To Dance", phonetic: "Rqi-ḏ", script: "ܪܩܕ", arabic: "", categories: ["verb"] },

  { word: "Ylib", translation: "To Study/Learn", phonetic: "Ylib", script: "ܝܠܦ", arabic: "", categories: ["verb"] },

  { word: "Qlē", translation: "To Teach", phonetic: "Qlē", script: "ܩܠܐ", arabic: "", categories: ["verb"] },

  { word: "Sbi", translation: "To Satisfy/Be full", phonetic: "Sbi", script: "ܣܒܥ", arabic: "", categories: ["verb"] },

  { word: "Kpin", translation: "To Be hungry", phonetic: "Kpin", script: "ܟܦܢ", arabic: "", categories: ["verb"] },

  { word: "Ṣhi", translation: "To Be thirsty", phonetic: "Ṣhi", script: "ܨܗܝ", arabic: "", categories: ["verb"] },

  { word: "Lbiš", translation: "To Wear/Dress", phonetic: "Lbiš", script: "ܠܒܫ", arabic: "", categories: ["verb"] },

  { word: "Šliḥ", translation: "To Undress", phonetic: "Šliḥ", script: "ܫܠܚ", arabic: "", categories: ["verb"] },

  { word: "Rkiv", translation: "To Ride", phonetic: "Rkiv", script: "ܪܟܒ", arabic: "", categories: ["verb"] },

  { word: "Pqiḏ", translation: "To Order/Command", phonetic: "Pqi-ḏ", script: "ܦܩܕ", arabic: "", categories: ["verb"] },

  { word: "Šmi", translation: "To Obey", phonetic: "Šmi", script: "ܫܡܥ", arabic: "", categories: ["verb"] },

  { word: "Sni", translation: "To Hate", phonetic: "Sni", script: "ܣܢܐ", arabic: "", categories: ["verb"] },

  { word: "Ḥib", translation: "To Love", phonetic: "Ḥib", script: "ܚܒ", arabic: "", categories: ["verb"] },

  { word: "Nši", translation: "To Kiss", phonetic: "Nši", script: "ܢܫܩ", arabic: "", categories: ["verb"] },

  { word: "Ḥbiq", translation: "To Hug/Embrace", phonetic: "Ḥbiq", script: "ܚܒܩ", arabic: "", categories: ["verb"] },


  // More Animals
  { word: "Para", translation: "Cow", phonetic: "Pa-ra", script: "ܦܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Khanzira", translation: "Pig", phonetic: "Khan-zi-ra", script: "ܚܢܙܝܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Dabba", translation: "Bear", phonetic: "Dab-ba", script: "ܕܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Dība", translation: "Wolf", phonetic: "Dī-ba", script: "ܕܝܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Talpa", translation: "Fox", phonetic: "Tal-pa", script: "ܬܠܦܐ", arabic: "", categories: ["adjective"] },

  { word: "Arnava", translation: "Rabbit", phonetic: "Ar-na-va", script: "ܐܪܢܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Pāra", translation: "Mouse/Rat", phonetic: "Pā-ra", script: "ܦܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Namla", translation: "Ant", phonetic: "Nam-la", script: "ܢܡܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Dbōrta", translation: "Bee", phonetic: "Dbōr-ta", script: "ܕܒܘܪܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṭayra", translation: "Bird", phonetic: "Ṭay-ra", script: "ܛܝܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Nišra", translation: "Eagle", phonetic: "Niš-ra", script: "ܢܫܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Tarnagōlta", translation: "Rooster/Hen", phonetic: "Tar-na-gōl-ta", script: "ܬܪܢܓܘܠܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Barōza", translation: "Duck", phonetic: "Ba-rō-za", script: "ܒܪܘܙܐ", arabic: "", categories: ["adjective"] },

  { word: "Wazza", translation: "Goose", phonetic: "Waz-za", script: "ܘܙܐ", arabic: "", categories: ["adjective"] },

  { word: "Yōna", translation: "Dove/Pigeon", phonetic: "Yō-na", script: "ܝܘܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Ḥiwya", translation: "Snake/Serpent", phonetic: "Ḥiw-ya", script: "ܚܘܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Kurpada", translation: "Frog", phonetic: "Kur-pa-da", script: "ܟܘܪܦܕܐ", arabic: "", categories: ["adjective"] },

  { word: "Šōna", translation: "Lizard", phonetic: "Šō-na", script: "ܫܘܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Parpāša", translation: "Butterfly", phonetic: "Par-pā-ša", script: "ܦܪܦܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Dadūna", translation: "Fly", phonetic: "Da-dū-na", script: "ܕܕܘܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Qarda", translation: "Mosquito", phonetic: "Qar-da", script: "ܩܪܕܐ", arabic: "", categories: ["adjective"] },

  { word: "Gamal", translation: "Camel", phonetic: "Ga-mal", script: "ܓܡܠ", arabic: "", categories: ["adjective"] },

  { word: "Pīla", translation: "Elephant", phonetic: "Pī-la", script: "ܦܝܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Qōpa", translation: "Monkey", phonetic: "Qō-pa", script: "ܩܘܦܐ", arabic: "", categories: ["adjective"] },


  // More Nature Words
  { word: "Šmaya", translation: "Sky/Heaven", phonetic: "Šma-ya", script: "ܫܡܝܐ", arabic: "", categories: ["nature"] },

  { word: "Shuna", translation: "Stone/Rock", phonetic: "Shu-na", script: "ܫܘܢܐ", arabic: "", categories: ["nature"] },

  { word: "Ṭīna", translation: "Mud/Clay", phonetic: "Ṭī-na", script: "ܛܝܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Mayā", translation: "Water (plural)", phonetic: "Ma-yā", script: "ܡܝܐ", arabic: "", categories: ["nature"] },

  { word: "Rāma", translation: "Thunder", phonetic: "Rā-ma", script: "ܪܥܡܐ", arabic: "", categories: ["nature"] },

  { word: "Barqa", translation: "Lightning", phonetic: "Bar-qa", script: "ܒܪܩܐ", arabic: "", categories: ["nature"] },

  { word: "Qešta", translation: "Rainbow", phonetic: "Qeš-ta", script: "ܩܫܬܐ", arabic: "", categories: ["nature"] },

  { word: "Brē", translation: "Desert", phonetic: "Brē", script: "ܒܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Midbrā", translation: "Wilderness", phonetic: "Mid-brā", script: "ܡܕܒܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Garra", translation: "Cave", phonetic: "Gar-ra", script: "ܓܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Dašta", translation: "Plain/Field", phonetic: "Daš-ta", script: "ܕܫܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Gāzarta", translation: "Island", phonetic: "Gā-zar-ta", script: "ܓܙܪܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Qešā", translation: "Forest/Woods", phonetic: "Qe-šā", script: "ܩܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Rē'uta", translation: "Pasture", phonetic: "Rē-'u-ta", script: "ܪܥܘܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Yabal", translation: "Hill", phonetic: "Ya-bal", script: "ܝܒܠ", arabic: "", categories: ["adjective"] },

  { word: "Gōba", translation: "Valley", phonetic: "Gō-ba", script: "ܓܘܒܐ", arabic: "", categories: ["adjective"] },


  // More Body Parts
  { word: "Gaba", translation: "Shoulder", phonetic: "Ga-ba", script: "ܓܒܐ", arabic: "", categories: ["body"] },

  { word: "Khada", translation: "Breast/Chest", phonetic: "Kha-da", script: "ܚܕܐ", arabic: "", categories: ["body"] },

  { word: "Ṣilā", translation: "Rib", phonetic: "Ṣi-lā", script: "ܨܠܥܐ", arabic: "", categories: ["adjective"] },

  { word: "Kasā", translation: "Belly/Abdomen", phonetic: "Ka-sā", script: "ܟܣܐ", arabic: "", categories: ["adjective"] },

  { word: "Ḥaṣā", translation: "Waist/Lower back", phonetic: "Ḥa-ṣā", script: "ܚܨܐ", arabic: "", categories: ["adjective"] },

  { word: "Pakhda", translation: "Thigh", phonetic: "Pakh-da", script: "ܦܟܕܐ", arabic: "", categories: ["adjective"] },

  { word: "Šāqa", translation: "Leg", phonetic: "Šā-qa", script: "ܫܩܐ", arabic: "", categories: ["body"] },

  { word: "Aqla", translation: "Ankle", phonetic: "Aq-la", script: "ܥܩܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṣiv'a", translation: "Toe", phonetic: "Ṣiv-'a", script: "ܨܒܥܐ", arabic: "", categories: ["body"] },

  { word: "Ṭipra", translation: "Nail/Fingernail", phonetic: "Ṭip-ra", script: "ܛܦܪܐ", arabic: "", categories: ["body"] },

  { word: "Karsa", translation: "Bone", phonetic: "Kar-sa", script: "ܟܪܣܐ", arabic: "", categories: ["adjective"] },

  { word: "Dma", translation: "Blood", phonetic: "Dma", script: "ܕܡܐ", arabic: "", categories: ["adjective"] },

  { word: "Našma", translation: "Breath/Soul", phonetic: "Naš-ma", script: "ܢܫܡܐ", arabic: "", categories: ["adjective"] },

  { word: "Napša", translation: "Soul/Life", phonetic: "Nap-ša", script: "ܢܦܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Rēha", translation: "Smell/Scent", phonetic: "Rē-ha", script: "ܪܝܚܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṭa'ma", translation: "Taste", phonetic: "Ṭa-'ma", script: "ܛܥܡܐ", arabic: "", categories: ["adjective"] },

  { word: "Qāla", translation: "Voice", phonetic: "Qā-la", script: "ܩܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Dmē", translation: "Tears", phonetic: "Dmē", script: "ܕܡܥܐ", arabic: "", categories: ["adjective"] },

  { word: "Rukha", translation: "Saliva/Spit", phonetic: "Ru-kha", script: "ܪܘܟܐ", arabic: "", categories: ["adjective"] },

  { word: "Šaptha", translation: "Lip", phonetic: "Šap-tha", script: "ܫܦܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Gavīna", translation: "Eyebrow", phonetic: "Ga-vī-na", script: "ܓܒܝܢܐ", arabic: "", categories: ["body"] },

  { word: "Šep'a", translation: "Eyelash", phonetic: "Šep-'a", script: "ܫܦܥܐ", arabic: "", categories: ["body"] },

  { word: "Daqna", translation: "Beard", phonetic: "Daq-na", script: "ܕܩܢܐ", arabic: "", categories: ["body"] },

  { word: "Sbarta", translation: "Mustache", phonetic: "Sbar-ta", script: "ܣܒܪܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Qādla", translation: "Neck", phonetic: "Qād-la", script: "ܩܕܠܐ", arabic: "", categories: ["body"] },

  { word: "Gargartha", translation: "Throat", phonetic: "Gar-gar-tha", script: "ܓܪܓܪܬܐ", arabic: "", categories: ["adjective"] },


  // More Clothing
  { word: "Nakhta", translation: "Dress", phonetic: "Nakh-ta", script: "ܢܚܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṭaylasa", translation: "Veil/Scarf", phonetic: "Ṭay-la-sa", script: "ܛܝܠܣܐ", arabic: "", categories: ["adjective"] },

  { word: "Zunara", translation: "Belt", phonetic: "Zu-na-ra", script: "ܙܢܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Sarwāla", translation: "Trousers", phonetic: "Sar-wā-la", script: "ܣܪܘܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Quptha", translation: "Coat", phonetic: "Qup-tha", script: "ܩܘܦܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Jubba", translation: "Robe", phonetic: "Jub-ba", script: "ܓܘܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Idara", translation: "Sleeve", phonetic: "I-da-ra", script: "ܐܝܕܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Gēba", translation: "Pocket", phonetic: "Gē-ba", script: "ܓܝܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Qnāta", translation: "Button", phonetic: "Qnā-ta", script: "ܩܢܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Khayṭa", translation: "Thread", phonetic: "Khay-ṭa", script: "ܚܝܛܐ", arabic: "", categories: ["adjective"] },

  { word: "Makhṭa", translation: "Needle", phonetic: "Makh-ṭa", script: "ܡܟܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Qaṣa", translation: "Scissors", phonetic: "Qa-ṣa", script: "ܩܨܐ", arabic: "", categories: ["adjective"] },


  // Pronouns & Grammar
  { word: "Ana", translation: "I", phonetic: "A-na", script: "ܐܢܐ", arabic: "", categories: ["adjective"] },

  { word: "At", translation: "You (masc. sing.)", phonetic: "At", script: "ܐܢܬ", arabic: "", categories: ["adjective"] },

  { word: "Ati", translation: "You (fem. sing.)", phonetic: "A-ti", script: "ܐܢܬܝ", arabic: "", categories: ["adjective"] },

  { word: "Awa", translation: "He", phonetic: "A-wa", script: "ܗܘ", arabic: "", categories: ["adjective"] },

  { word: "Aya", translation: "She", phonetic: "A-ya", script: "ܗܝ", arabic: "", categories: ["adjective"] },

  { word: "Akhnan", translation: "We", phonetic: "Akh-nan", script: "ܐܚܢܢ", arabic: "", categories: ["adjective"] },

  { word: "Atwon", translation: "You (masc. pl.)", phonetic: "At-won", script: "ܐܢܬܘܢ", arabic: "", categories: ["adjective"] },

  { word: "Atēn", translation: "You (fem. pl.)", phonetic: "A-tēn", script: "ܐܢܬܝܢ", arabic: "", categories: ["adjective"] },

  { word: "Anē", translation: "They (masc.)", phonetic: "A-nē", script: "ܐܢܝ", arabic: "", categories: ["adjective"] },

  { word: "Anēn", translation: "They (fem.)", phonetic: "A-nēn", script: "ܐܢܝܢ", arabic: "", categories: ["adjective"] },


  // More Common Words
  { word: "Kul", translation: "All/Every", phonetic: "Kul", script: "ܟܠ", arabic: "", categories: ["adjective"] },

  { word: "Kūlē", translation: "Everyone", phonetic: "Kū-lē", script: "ܟܠܗ", arabic: "", categories: ["adjective"] },

  { word: "Meddem", translation: "Something", phonetic: "Med-dem", script: "ܡܕܡ", arabic: "", categories: ["adjective"] },

  { word: "La Khit", translation: "Nothing", phonetic: "La Khit", script: "ܠܐ ܚܬ", arabic: "", categories: ["adjective"] },

  { word: "Haḏā", translation: "This (masc.)", phonetic: "Ha-ḏā", script: "ܗܕܐ", arabic: "", categories: ["adjective"] },

  { word: "Haḏē", translation: "This (fem.)", phonetic: "Ha-ḏē", script: "ܗܕܐ", arabic: "", categories: ["adjective"] },

  { word: "Haw", translation: "That (masc.)", phonetic: "Haw", script: "ܗܘ", arabic: "", categories: ["adjective"] },

  { word: "Hayē", translation: "That (fem.)", phonetic: "Ha-yē", script: "ܗܝ", arabic: "", categories: ["adjective"] },

  { word: "Hālen", translation: "These", phonetic: "Hā-len", script: "ܗܠܝܢ", arabic: "", categories: ["adjective"] },

  { word: "Hānōn", translation: "Those", phonetic: "Hā-nōn", script: "ܗܢܘܢ", arabic: "", categories: ["adjective"] },

  { word: "Zō'a", translation: "Few/Little", phonetic: "Zō-'a", script: "ܙܥܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Šapirā", translation: "Beautiful/Good", phonetic: "Ša-pi-rā", script: "ܫܦܝܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Bīša", translation: "Bad/Evil", phonetic: "Bī-ša", script: "ܒܝܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Ḥadṯa", translation: "New", phonetic: "Ḥad-ṯa", script: "ܚܕܬܐ", arabic: "", categories: ["adjective"] },

  { word: "'Atiqa", translation: "Old/Ancient", phonetic: "'A-ti-qa", script: "ܥܬܝܩܐ", arabic: "", categories: ["adjective"] },

  { word: "Yaqurā", translation: "Precious/Heavy", phonetic: "Ya-qu-rā", script: "ܝܩܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Qalīlā", translation: "Light/Easy", phonetic: "Qa-lī-lā", script: "ܩܠܝܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Khwārā", translation: "White/Pure", phonetic: "Khwā-rā", script: "ܚܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṭuvrā", translation: "Clean/Pure", phonetic: "Ṭuv-rā", script: "ܛܘܒܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Ṭanpā", translation: "Dirty/Unclean", phonetic: "Ṭan-pā", script: "ܛܢܦܐ", arabic: "", categories: ["adjective"] },

  { word: "Halyā", translation: "Sweet", phonetic: "Hal-yā", script: "ܚܠܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Marirā", translation: "Bitter", phonetic: "Ma-ri-rā", script: "ܡܪܝܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Melyā", translation: "Full", phonetic: "Mel-yā", script: "ܡܠܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Sriqa", translation: "Empty", phonetic: "Sri-qa", script: "ܣܪܝܩܐ", arabic: "", categories: ["adjective"] },


  // More Phrases
  { word: "Ana Itwan", translation: "I am here", phonetic: "A-na It-wan", script: "ܐܢܐ ܐܝܬܘܢ", arabic: "", categories: ["adjective"] },

  { word: "La Yadin ana", translation: "I don't know", phonetic: "La Ya-din a-na", script: "ܠܐ ܝܕܥ ܐܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Yadin ana", translation: "I know", phonetic: "Ya-din a-na", script: "ܝܕܥ ܐܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Ba'en ana", translation: "I want", phonetic: "Ba-'en a-na", script: "ܒܥܐ ܐܢܐ", arabic: "", categories: ["adjective"] },

  { word: "La Ba'en", translation: "I don't want", phonetic: "La Ba-'en", script: "ܠܐ ܒܥܐ", arabic: "", categories: ["adjective"] },

  { word: "Kamen Khit", translation: "One more time", phonetic: "Ka-men Khit", script: "ܟܡܢ ܚܕܐ", arabic: "", categories: ["adjective"] },

  { word: "Min Fadhlokh", translation: "Please (to male)", phonetic: "Min Fadh-lokh", script: "ܡܢ ܦܕܠܘܟ", arabic: "", categories: ["adjective"] },

  { word: "Min Fadhlakh", translation: "Please (to female)", phonetic: "Min Fadh-lakh", script: "ܡܢ ܦܕܠܟ", arabic: "", categories: ["adjective"] },

  { word: "La Marri", translation: "Don't worry", phonetic: "La Mar-ri", script: "ܠܐ ܡܪܝ", arabic: "", categories: ["adjective"] },

  { word: "Kheena", translation: "Slowly", phonetic: "Khee-na", script: "ܟܝܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Šapir", translation: "Well/Good", phonetic: "Ša-pir", script: "ܫܦܝܪ", arabic: "", categories: ["adjective"] },

  { word: "Amin", translation: "Amen/Truly", phonetic: "A-min", script: "ܐܡܝܢ", arabic: "", categories: ["adjective"] },

  { word: "Barikh Mor", translation: "Bless us, Lord", phonetic: "Ba-rikh Mor", script: "ܒܪܝܟ ܡܪܝ", arabic: "", categories: ["adjective"] },


  // More Common Greetings & Phrases
  { word: "Safa", translation: "Morning", phonetic: "Sa-fa", script: "ܨܦܪܐ", arabic: "", categories: ["time"] },

  { word: "Tsafra Taba", translation: "Good morning", phonetic: "Tsaf-ra Ta-ba", script: "ܨܦܪܐ ܛܒܐ", arabic: "", categories: ["greeting"] },

  { word: "Ramsha Taba", translation: "Good evening", phonetic: "Ram-sha Ta-ba", script: "ܪܡܫܐ ܛܒܐ", arabic: "", categories: ["greeting"] },

  { word: "Lele Taba", translation: "Good night", phonetic: "Le-le Ta-ba", script: "ܠܠܝܐ ܛܒܐ", arabic: "", categories: ["greeting"] },

  { word: "Brakhta", translation: "Blessing", phonetic: "Brakh-ta", script: "ܒܪܟܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Khaya Taba", translation: "Long life / Good health", phonetic: "Kha-ya Ta-ba", script: "ܚܝܐ ܛܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Mabrukha", translation: "Congratulations", phonetic: "Mab-ru-kha", script: "ܡܒܪܘܟܐ", arabic: "", categories: ["phrase"] },

  { word: "Eda Breekha", translation: "Merry Christmas", phonetic: "E-da Bree-kha", script: "ܥܐܕܐ ܒܪܝܟܐ", arabic: "", categories: ["adjective"] },

  { word: "Shatta Breekha", translation: "Happy New Year", phonetic: "Shat-ta Bree-kha", script: "ܫܢܬܐ ܒܪܝܟܬܐ", arabic: "", categories: ["time"] },

  { word: "Shata d'Khaye", translation: "Year of life (birthday wish)", phonetic: "Sha-ta d-Kha-ye", script: "ܫܢܬܐ ܕܚܝܐ", arabic: "", categories: ["time"] },

  { word: "Khat Bokh", translation: "I love you (to male)", phonetic: "Khat Bo-kh", script: "ܟܬ ܒܘܟ", arabic: "", categories: ["adjective"] },

  { word: "Khat Bakh", translation: "I love you (to female)", phonetic: "Khat Ba-kh", script: "ܟܬ ܒܟ", arabic: "", categories: ["adjective"] },

  { word: "Khuba", translation: "Love", phonetic: "Khu-ba", script: "ܚܘܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Khwab", translation: "Friend (male)", phonetic: "Khwab", script: "ܚܒܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Khwarta", translation: "Friend (female)", phonetic: "Khwar-ta", script: "ܚܒܪܬܐ", arabic: "", categories: ["adjective"] },


  // More Verbs & Actions
  { word: "Ate", translation: "Come / Coming", phonetic: "A-te", script: "ܐܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Yatib", translation: "Sit / Sitting", phonetic: "Ya-tib", script: "ܝܬܒ", arabic: "", categories: ["adjective"] },

  { word: "Qaym", translation: "Stand / Standing", phonetic: "Qaym", script: "ܩܝܡ", arabic: "", categories: ["adjective"] },

  { word: "Rakhitz", translation: "Run / Running", phonetic: "Ra-khitz", script: "ܪܚܨ", arabic: "", categories: ["adjective"] },

  { word: "Mhalikh", translation: "Walk / Walking", phonetic: "Mha-likh", script: "ܡܗܠܟ", arabic: "", categories: ["adjective"] },

  { word: "Pateakh", translation: "Open / Opening", phonetic: "Pa-te-akh", script: "ܦܬܚ", arabic: "", categories: ["adjective"] },

  { word: "Sakir", translation: "Close / Closing", phonetic: "Sa-kir", script: "ܣܟܪ", arabic: "", categories: ["adjective"] },

  { word: "Shami", translation: "Hear / Listening", phonetic: "Sha-mi", script: "ܫܡܥ", arabic: "", categories: ["adjective"] },

  { word: "Amir", translation: "Say / Saying", phonetic: "A-mir", script: "ܐܡܪ", arabic: "", categories: ["adjective"] },

  { word: "Mmalil", translation: "Speak / Speaking", phonetic: "Mma-lil", script: "ܡܠܠ", arabic: "", categories: ["adjective"] },

  { word: "Khatib", translation: "Write / Writing", phonetic: "Kha-tib", script: "ܟܬܒ", arabic: "", categories: ["adjective"] },

  { word: "Yalip", translation: "Learn / Learning", phonetic: "Ya-lip", script: "ܝܠܦ", arabic: "", categories: ["adjective"] },

  { word: "Malip", translation: "Teach / Teaching", phonetic: "Ma-lip", script: "ܡܠܦ", arabic: "", categories: ["adjective"] },

  { word: "Shayil", translation: "Ask / Asking", phonetic: "Sha-yil", script: "ܫܐܠ", arabic: "", categories: ["adjective"] },

  { word: "Mkhapir", translation: "Search / Searching", phonetic: "Mkha-pir", script: "ܡܚܦܪ", arabic: "", categories: ["nature"] },

  { word: "Yatwa", translation: "Gave / Give", phonetic: "Yat-wa", script: "ܝܗܒ", arabic: "", categories: ["adjective"] },

  { word: "Saqil", translation: "Take / Taking", phonetic: "Sa-qil", script: "ܫܩܠ", arabic: "", categories: ["adjective"] },

  { word: "Shadir", translation: "Send / Sending", phonetic: "Sha-dir", script: "ܫܕܪ", arabic: "", categories: ["adjective"] },

  { word: "Mbasim", translation: "Fix / Fixing", phonetic: "Mba-sim", script: "ܡܒܣܡ", arabic: "", categories: ["adjective"] },

  { word: "Khawib", translation: "Think / Thinking", phonetic: "Kha-wib", script: "ܚܫܒ", arabic: "", categories: ["adjective"] },

  { word: "Bayi", translation: "Want / Wanting", phonetic: "Ba-yi", script: "ܒܥܐ", arabic: "", categories: ["adjective"] },

  { word: "Mkhayil", translation: "Can / Able to", phonetic: "Mkha-yil", script: "ܡܟܝܠ", arabic: "", categories: ["adjective"] },

  { word: "Msalli", translation: "Pray / Praying", phonetic: "Msal-li", script: "ܡܨܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Mbarikh", translation: "Bless / Blessing", phonetic: "Mba-rikh", script: "ܡܒܪܟ", arabic: "", categories: ["adjective"] },

  { word: "Mshadir", translation: "Help / Helping", phonetic: "Msha-dir", script: "ܡܫܕܪ", arabic: "", categories: ["phrase"] },

  { word: "Mqayim", translation: "Stay / Staying", phonetic: "Mqa-yim", script: "ܡܩܝܡ", arabic: "", categories: ["adjective"] },

  { word: "Shapil", translation: "Pull / Pulling", phonetic: "Sha-pil", script: "ܫܦܠ", arabic: "", categories: ["adjective"] },

  { word: "Daqi", translation: "Push / Pushing", phonetic: "Da-qi", script: "ܕܩܐ", arabic: "", categories: ["adjective"] },

  { word: "Tali", translation: "Hang / Hanging", phonetic: "Ta-li", script: "ܬܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Nakhit", translation: "Fall / Falling", phonetic: "Na-khit", script: "ܢܚܬ", arabic: "", categories: ["adjective"] },


  // Household & Daily Life
  { word: "Tara", translation: "Door", phonetic: "Ta-ra", script: "ܬܪܥܐ", arabic: "", categories: ["noun"] },

  { word: "Kawta", translation: "Window", phonetic: "Kaw-ta", script: "ܟܘܬܐ", arabic: "", categories: ["nature"] },

  { word: "Shqapa", translation: "Ceiling", phonetic: "Shqa-pa", script: "ܫܩܦܐ", arabic: "", categories: ["noun"] },

  { word: "Araa", translation: "Floor/Ground", phonetic: "Ar-aa", script: "ܐܪܥܐ", arabic: "", categories: ["noun"] },

  { word: "Gayra", translation: "Wall", phonetic: "Gay-ra", script: "ܓܕܪܐ", arabic: "", categories: ["noun"] },

  { word: "Nuhra", translation: "Light/Lamp", phonetic: "Nuh-ra", script: "ܢܘܗܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Madkhna", translation: "Kitchen", phonetic: "Mad-khna", script: "ܡܕܟܢܐ", arabic: "", categories: ["noun"] },

  { word: "Khawshekha", translation: "Bathroom", phonetic: "Khaw-she-kha", script: "ܚܘܫܟܐ", arabic: "", categories: ["noun"] },

  { word: "Madrasha", translation: "Bedroom", phonetic: "Mad-ra-sha", script: "ܡܕܪܫܐ", arabic: "", categories: ["noun"] },

  { word: "Gardina", translation: "Garden", phonetic: "Gar-di-na", script: "ܓܪܕܝܢܐ", arabic: "", categories: ["noun"] },

  { word: "Saqpa", translation: "Roof", phonetic: "Saq-pa", script: "ܣܩܦܐ", arabic: "", categories: ["noun"] },

  { word: "Daraja", translation: "Stairs", phonetic: "Da-ra-ja", script: "ܕܪܓܐ", arabic: "", categories: ["adjective"] },

  { word: "Tanura", translation: "Oven", phonetic: "Ta-nu-ra", script: "ܬܢܘܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Makhla", translation: "Food/Meal", phonetic: "Makh-la", script: "ܡܐܟܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Shaqta", translation: "Drink", phonetic: "Shaq-ta", script: "ܫܩܝܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Sayna", translation: "Plate", phonetic: "Say-na", script: "ܨܝܢܐ", arabic: "", categories: ["home"] },

  { word: "Kasa", translation: "Cup/Glass", phonetic: "Ka-sa", script: "ܟܣܐ", arabic: "", categories: ["home"] },

  { word: "Purshana", translation: "Spoon", phonetic: "Pur-sha-na", script: "ܦܘܪܫܢܐ", arabic: "", categories: ["home"] },

  { word: "Qawra", translation: "Fork", phonetic: "Qaw-ra", script: "ܩܘܪܐ", arabic: "", categories: ["home"] },

  { word: "Tarpisa", translation: "Table", phonetic: "Tar-pi-sa", script: "ܛܪܦܝܣܐ", arabic: "", categories: ["adjective"] },

  { word: "Sapla", translation: "Bowl", phonetic: "Sap-la", script: "ܣܦܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Tanjara", translation: "Pot", phonetic: "Tan-ja-ra", script: "ܬܢܓܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Nakhtana", translation: "Towel", phonetic: "Nakh-ta-na", script: "ܢܟܬܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Sabuna", translation: "Soap", phonetic: "Sa-bu-na", script: "ܣܒܘܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Mushkha", translation: "Oil", phonetic: "Mush-kha", script: "ܡܫܚܐ", arabic: "", categories: ["adjective"] },

  { word: "Milkha", translation: "Salt", phonetic: "Mil-kha", script: "ܡܠܚܐ", arabic: "", categories: ["adjective"] },

  { word: "Dubsha", translation: "Honey", phonetic: "Dub-sha", script: "ܕܒܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Kheshla", translation: "Fruit", phonetic: "Khesh-la", script: "ܚܫܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Yarqa", translation: "Vegetable", phonetic: "Yar-qa", script: "ܝܪܩܐ", arabic: "", categories: ["adjective"] },


  // More Time Expressions
  { word: "Yawma", translation: "Day", phonetic: "Yaw-ma", script: "ܝܘܡܐ", arabic: "", categories: ["adjective"] },

  { word: "Lele", translation: "Night", phonetic: "Le-le", script: "ܠܠܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Shata", translation: "Year", phonetic: "Sha-ta", script: "ܫܢܬܐ", arabic: "", categories: ["time"] },

  { word: "Yarha", translation: "Month", phonetic: "Yar-ha", script: "ܝܪܚܐ", arabic: "", categories: ["time"] },

  { word: "Sha'ta", translation: "Hour", phonetic: "Sha'-ta", script: "ܫܥܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Regha", translation: "Minute/Moment", phonetic: "Reg-ha", script: "ܪܓܥܐ", arabic: "", categories: ["time"] },

  { word: "Hashâ", translation: "Now", phonetic: "Ha-shâ", script: "ܗܫܐ", arabic: "", categories: ["time"] },

  { word: "Qadam", translation: "Before/Earlier", phonetic: "Qa-dam", script: "ܩܕܡ", arabic: "", categories: ["time"] },

  { word: "Yawma Akhrin", translation: "Tomorrow", phonetic: "Yaw-ma Akh-rin", script: "ܝܘܡܐ ܐܚܪܝܢ", arabic: "", categories: ["adjective"] },

  { word: "Etmali", translation: "Yesterday", phonetic: "Et-ma-li", script: "ܐܬܡܠܝ", arabic: "", categories: ["adjective"] },

  { word: "Awdana", translation: "Always", phonetic: "Aw-da-na", script: "ܐܘܕܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Mitumt", translation: "Never", phonetic: "Mi-tumt", script: "ܡܬܘܡܬ", arabic: "", categories: ["adjective"] },

  { word: "Qalil", translation: "Sometimes", phonetic: "Qa-lil", script: "ܩܠܝܠ", arabic: "", categories: ["adjective"] },


  // More Numbers
  { word: "Tlathsar", translation: "Thirteen", phonetic: "Tlath-sar", script: "ܬܠܬܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Arbassar", translation: "Fourteen", phonetic: "Arba-ssar", script: "ܐܪܒܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Khamshassar", translation: "Fifteen", phonetic: "Khamsha-ssar", script: "ܚܡܫܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Eshtassar", translation: "Sixteen", phonetic: "Eshta-ssar", script: "ܫܬܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Shwassar", translation: "Seventeen", phonetic: "Shwa-ssar", script: "ܫܒܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Tmanyassar", translation: "Eighteen", phonetic: "Tmanya-ssar", script: "ܬܡܢܝܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Tshassar", translation: "Nineteen", phonetic: "Tsha-ssar", script: "ܬܫܥܣܪ", arabic: "", categories: ["number"] },

  { word: "Tlatin", translation: "Thirty", phonetic: "Tla-tin", script: "ܬܠܬܝܢ", arabic: "", categories: ["number"] },

  { word: "Arbin", translation: "Forty", phonetic: "Ar-bin", script: "ܐܪܒܥܝܢ", arabic: "", categories: ["number"] },

  { word: "Khamshiـn", translation: "Fifty", phonetic: "Khamshi-n", script: "ܚܡܫܝܢ", arabic: "", categories: ["number"] },

  { word: "Eshtin", translation: "Sixty", phonetic: "Esh-tin", script: "ܫܬܝܢ", arabic: "", categories: ["number"] },

  { word: "Shwin", translation: "Seventy", phonetic: "Shwin", script: "ܫܒܥܝܢ", arabic: "", categories: ["number"] },

  { word: "Tmanin", translation: "Eighty", phonetic: "Tma-nin", script: "ܬܡܢܝܢ", arabic: "", categories: ["number"] },

  { word: "Tshin", translation: "Ninety", phonetic: "Tshin", script: "ܬܫܥܝܢ", arabic: "", categories: ["number"] },

  { word: "Ima", translation: "Hundred", phonetic: "I-ma", script: "ܡܐܐ", arabic: "", categories: ["number"] },


  // Weather & Nature
  { word: "Shamsha", translation: "Sun", phonetic: "Sham-sha", script: "ܫܡܫܐ", arabic: "", categories: ["nature"] },

  { word: "Kawkwa", translation: "Star", phonetic: "Kaw-kwa", script: "ܟܘܟܒܐ", arabic: "", categories: ["nature"] },

  { word: "Shmaya", translation: "Sky/Heaven", phonetic: "Shma-ya", script: "ܫܡܝܐ", arabic: "", categories: ["nature"] },

  { word: "Ara", translation: "Earth", phonetic: "A-ra", script: "ܐܪܥܐ", arabic: "", categories: ["nature"] },

  { word: "Mitra", translation: "Rain", phonetic: "Mit-ra", script: "ܡܛܪܐ", arabic: "", categories: ["nature"] },

  { word: "Rukha", translation: "Wind", phonetic: "Ru-kha", script: "ܪܘܚܐ", arabic: "", categories: ["nature"] },

  { word: "Anana", translation: "Cloud", phonetic: "A-na-na", script: "ܥܢܢܐ", arabic: "", categories: ["nature"] },

  { word: "Rama", translation: "Thunder", phonetic: "Ra-ma", script: "ܪܥܡܐ", arabic: "", categories: ["nature"] },

  { word: "Qarta", translation: "Cold", phonetic: "Qar-ta", script: "ܩܪܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Habhaba", translation: "Flower", phonetic: "Hab-ha-ba", script: "ܗܒܗܒܐ", arabic: "", categories: ["nature"] },

  { word: "Yarqa", translation: "Leaf", phonetic: "Yar-qa", script: "ܛܪܦܐ", arabic: "", categories: ["adjective"] },

  { word: "Shwila", translation: "Root", phonetic: "Shwi-la", script: "ܫܪܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Darta", translation: "Garden", phonetic: "Dar-ta", script: "ܕܪܬܐ", arabic: "", categories: ["noun"] },

  { word: "Kippa", translation: "Stone/Rock", phonetic: "Kip-pa", script: "ܟܐܦܐ", arabic: "", categories: ["nature"] },


  // Transportation & Travel
  { word: "Urha", translation: "Road/Way", phonetic: "Ur-ha", script: "ܐܘܪܚܐ", arabic: "", categories: ["adjective"] },

  { word: "Gishra", translation: "Bridge", phonetic: "Gish-ra", script: "ܓܫܪܐ", arabic: "", categories: ["noun"] },

  { word: "Mdinta", translation: "City/Town", phonetic: "Mdin-ta", script: "ܡܕܝܢܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Qrita", translation: "Village", phonetic: "Qri-ta", script: "ܩܪܝܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Makhsana", translation: "Store/Shop", phonetic: "Makh-sa-na", script: "ܡܟܣܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Beth Kaspe", translation: "Bank", phonetic: "Beth Kas-pe", script: "ܒܝܬ ܟܣܦܐ", arabic: "", categories: ["adjective"] },

  { word: "Beth Slota", translation: "Church", phonetic: "Beth Slo-ta", script: "ܒܝܬ ܨܠܘܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Beth Sipre", translation: "Library", phonetic: "Beth Sip-re", script: "ܒܝܬ ܣܦܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Beth Mrisha", translation: "Hospital", phonetic: "Beth Mri-sha", script: "ܒܝܬ ܡܪܥܐ", arabic: "", categories: ["adjective"] },

  { word: "Beth Madrasha", translation: "School", phonetic: "Beth Mad-ra-sha", script: "ܒܝܬ ܡܕܪܫܐ", arabic: "", categories: ["adjective"] },

  { word: "Rakba", translation: "Train", phonetic: "Rak-ba", script: "ܪܟܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Tayarta", translation: "Airplane", phonetic: "Ta-yar-ta", script: "ܛܝܪܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Sipinta", translation: "Boat/Ship", phonetic: "Si-pin-ta", script: "ܣܦܝܢܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Rukhba", translation: "Vehicle", phonetic: "Rukh-ba", script: "ܪܟܘܒܐ", arabic: "", categories: ["adjective"] },

  { word: "Bayka", translation: "Bicycle", phonetic: "Bay-ka", script: "ܒܝܟܐ", arabic: "", categories: ["adjective"] },


  // More Emotions & States
  { word: "Khudta", translation: "Joy/Happiness", phonetic: "Khud-ta", script: "ܚܕܘܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Kriuta", translation: "Sadness/Sorrow", phonetic: "Kriu-ta", script: "ܟܪܝܘܬܐ", arabic: "", categories: ["emotion"] },

  { word: "Dekhla", translation: "Fear", phonetic: "Dekh-la", script: "ܕܚܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Ghuza", translation: "Anger", phonetic: "Ghu-za", script: "ܪܘܓܙܐ", arabic: "", categories: ["adjective"] },

  { word: "Shurkha", translation: "Hope", phonetic: "Shur-kha", script: "ܣܘܟܝܐ", arabic: "", categories: ["adjective"] },

  { word: "Tara", translation: "Peace/Calm", phonetic: "Ta-ra", script: "ܫܠܡܐ", arabic: "", categories: ["adjective"] },

  { word: "Teghmurta", translation: "Surprise", phonetic: "Tegh-mur-ta", script: "ܬܕܡܘܪܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Buhta", translation: "Shame", phonetic: "Buh-ta", script: "ܒܗܬܬܐ", arabic: "", categories: ["adjective"] },

  { word: "Tayruta", translation: "Patience", phonetic: "Tay-ru-ta", script: "ܡܣܝܒܪܢܘܬܐ", arabic: "", categories: ["adjective"] },


  // Additional essential words
  { word: "Khadshaba", translation: "Sunday", phonetic: "Khad-sha-ba", script: "ܚܕܫܒܐ", arabic: "", categories: ["time"] },
  { word: "Trayshaba", translation: "Monday", phonetic: "Tray-sha-ba", script: "ܬܪܝܢܫܒܐ", arabic: "", categories: ["time"] },
  { word: "Tlathashaba", translation: "Tuesday", phonetic: "Tla-tha-sha-ba", script: "ܬܠܬܫܒܐ", arabic: "", categories: ["time"] },
  { word: "Arbashaba", translation: "Wednesday", phonetic: "Ar-ba-sha-ba", script: "ܐܪܒܥܫܒܐ", arabic: "", categories: ["time"] },
  { word: "Khamshashaba", translation: "Thursday", phonetic: "Kham-sha-sha-ba", script: "ܚܡܫܫܒܐ", arabic: "", categories: ["time"] },
  { word: "Arubta", translation: "Friday", phonetic: "A-rub-ta", script: "ܥܪܘܒܬܐ", arabic: "", categories: ["time"] },
  { word: "Sapra tawa", translation: "Good morning", phonetic: "Sap-ra ta-wa", script: "ܨܦܪܐ ܛܒܐ", arabic: "", categories: ["greeting"] },
  { word: "Ramsha tawa", translation: "Good evening", phonetic: "Ram-sha ta-wa", script: "ܪܡܫܐ ܛܒܐ", arabic: "", categories: ["greeting"] },
  { word: "Lelya tawa", translation: "Good night", phonetic: "Lel-ya ta-wa", script: "ܠܠܝܐ ܛܒܐ", arabic: "", categories: ["greeting"] },
  { word: "Khadi khawit", translation: "I'm fine", phonetic: "Kha-di kha-wit", script: "ܚܕܝ ܚܘܝܬ", arabic: "", categories: ["phrase"] },
  { word: "Raba basima", translation: "Very good/Thank you very much", phonetic: "Ra-ba ba-si-ma", script: "ܪܒܐ ܒܣܝܡܐ", arabic: "", categories: ["phrase"] },
  { word: "Layt mushkilta", translation: "No problem", phonetic: "Layt mush-kil-ta", script: "ܠܝܬ ܡܫܟܠܬܐ", arabic: "", categories: ["phrase"] },
  { word: "Khoshakha", translation: "I love you (to male)", phonetic: "Kho-sha-kha", script: "ܚܘܒܟܐ", arabic: "", categories: ["phrase"] },
  { word: "Khoshakh", translation: "I love you (to female)", phonetic: "Kho-shakh", script: "ܚܘܒܟ", arabic: "", categories: ["phrase"] },
  { word: "Khawin", translation: "To show", phonetic: "Kha-win", script: "ܚܘܝ", arabic: "", categories: ["verb"] },
  { word: "Pakhi", translation: "To become", phonetic: "Pa-khi", script: "ܦܟܝ", arabic: "", categories: ["verb"] },
  { word: "Nashiq", translation: "To need", phonetic: "Na-shiq", script: "ܢܫܩ", arabic: "", categories: ["verb"] },
  { word: "Mashkhin", translation: "To be able/can", phonetic: "Mash-khin", script: "ܡܫܟܚ", arabic: "", categories: ["verb"] },
  { word: "Hamzim", translation: "To speak/talk", phonetic: "Ham-zim", script: "ܗܡܙܡ", arabic: "", categories: ["verb"] },
  { word: "Tawa", translation: "Good", phonetic: "Ta-wa", script: "ܛܒܐ", arabic: "", categories: ["adjective"] },
  { word: "Bisha", translation: "Bad/Evil", phonetic: "Bi-sha", script: "ܒܝܫܐ", arabic: "", categories: ["adjective"] },
  { word: "Qaleela", translation: "Little/Few", phonetic: "Qa-lee-la", script: "ܩܠܝܠܐ", arabic: "", categories: ["adjective"] },
  { word: "Khelta", translation: "Sweet", phonetic: "Khel-ta", script: "ܚܠܝܐ", arabic: "", categories: ["adjective"] },
  { word: "Mareera", translation: "Bitter", phonetic: "Ma-ree-ra", script: "ܡܪܝܪܐ", arabic: "", categories: ["adjective"] },
  { word: "Qareera", translation: "Cold", phonetic: "Qa-ree-ra", script: "ܩܪܝܪܐ", arabic: "", categories: ["adjective"] },
  { word: "Shma", translation: "Name", phonetic: "Sh-ma", script: "ܫܡܐ", arabic: "", categories: ["noun"] },
  { word: "Atra", translation: "Country/Place", phonetic: "At-ra", script: "ܐܬܪܐ", arabic: "", categories: ["noun"] },
  { word: "Umtha", translation: "Nation/People", phonetic: "Um-tha", script: "ܐܘܡܬܐ", arabic: "", categories: ["noun"] },
  { word: "Zuza", translation: "Money", phonetic: "Zu-za", script: "ܙܘܙܐ", arabic: "", categories: ["noun"] },
  { word: "Egartha", translation: "Letter", phonetic: "E-gar-tha", script: "ܐܓܪܬܐ", arabic: "", categories: ["noun"] },
  { word: "Miltha", translation: "Word/Thing", phonetic: "Mil-tha", script: "ܡܠܬܐ", arabic: "", categories: ["noun"] },
  { word: "Shuraya", translation: "Beginning", phonetic: "Shu-ra-ya", script: "ܫܘܪܝܐ", arabic: "", categories: ["noun"] },
  { word: "Sopa", translation: "End", phonetic: "So-pa", script: "ܣܘܦܐ", arabic: "", categories: ["noun"] },
  { word: "Khdessar", translation: "Eleven", phonetic: "Khd-es-sar", script: "ܚܕܥܣܪ", arabic: "", categories: ["number"] },
  { word: "Tressar", translation: "Twelve", phonetic: "Tres-sar", script: "ܬܪܥܣܪ", arabic: "", categories: ["number"] },
  { word: "Tlathessar", translation: "Thirteen", phonetic: "Tla-thes-sar", script: "ܬܠܬܥܣܪ", arabic: "", categories: ["number"] },
  { word: "Arb'in", translation: "Forty", phonetic: "Arb-in", script: "ܐܪܒܥܝܢ", arabic: "", categories: ["number"] },
  { word: "Khamšin", translation: "Fifty", phonetic: "Kham-šin", script: "ܚܡܫܝܢ", arabic: "", categories: ["number"] },
  { word: "Aina", translation: "Eye", phonetic: "Ai-na", script: "ܥܝܢܐ", arabic: "", categories: ["body"] },
  { word: "Edna", translation: "Ear", phonetic: "Ed-na", script: "ܐܕܢܐ", arabic: "", categories: ["body"] },
  { word: "Khurṭma", translation: "Nose", phonetic: "Khur-ṭma", script: "ܚܪܛܡܐ", arabic: "", categories: ["body"] },
  { word: "Etsba", translation: "Finger", phonetic: "Ets-ba", script: "ܐܨܒܥܐ", arabic: "", categories: ["body"] },
];
