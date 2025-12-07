export type CategoryType = 'greeting' | 'noun' | 'verb' | 'adjective' | 'phrase' | 'number' | 'food' | 'family' | 'color' | 'time' | 'place' | 'animal' | 'nature' | 'body' | 'home' | 'profession' | 'clothing' | 'emotion' | 'travel' | 'question' | 'preposition' | 'conjunction';

export interface DictionaryEntry {
  id?: string;
  word: string;
  translation: string;
  phonetic: string;
  script: string;
  categories: CategoryType[];
  created_at?: string;
  updated_at?: string;
}

export const dictionaryData: DictionaryEntry[] = [
  // Greetings
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", script: "ܫܠܡܐ", categories: ["greeting"] },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", script: "ܫܠܡܐ ܠܘܟ", categories: ["greeting"] },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", script: "ܫܠܡܐ ܠܟ", categories: ["greeting"] },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", script: "ܒܫܝܢܐ", categories: ["greeting"] },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", script: "ܕܐܟ݂ܝ ܘܬ", categories: ["greeting"] },
  
  // Question Words
  { word: "Aykha", translation: "Where", phonetic: "Ay-kha", script: "ܐܝܟܐ", categories: ["question"] },
  { word: "Mana", translation: "What", phonetic: "Ma-na", script: "ܡܢܐ", categories: ["question"] },
  { word: "Aymat", translation: "When", phonetic: "Ay-mat", script: "ܐܝܡܬ", categories: ["question"] },
  { word: "Lamana", translation: "Why", phonetic: "La-ma-na", script: "ܠܡܢܐ", categories: ["question"] },
  { word: "Aykana", translation: "How", phonetic: "Ay-ka-na", script: "ܐܝܟܢܐ", categories: ["question"] },
  { word: "Kama", translation: "How many/How much", phonetic: "Ka-ma", script: "ܟܡܐ", categories: ["question"] },
  { word: "Ayna", translation: "Which", phonetic: "Ay-na", script: "ܐܝܢܐ", categories: ["question"] },
  // Prepositions
  { word: "B-", translation: "In/At/With", phonetic: "B-", script: "ܒ", categories: ["preposition"] },
  { word: "Min", translation: "From", phonetic: "Min", script: "ܡܢ", categories: ["preposition"] },
  { word: "L-", translation: "To/For", phonetic: "L-", script: "ܠ", categories: ["preposition"] },
  { word: "Al", translation: "On/Upon", phonetic: "Al", script: "ܥܠ", categories: ["preposition"] },
  { word: "Takh", translation: "Under/Below", phonetic: "Takh", script: "ܬܚܬ", categories: ["preposition"] },
  { word: "Bathar", translation: "After/Behind", phonetic: "Ba-thar", script: "ܒܬܪ", categories: ["preposition"] },
  { word: "Qam", translation: "Before/In front of", phonetic: "Qam", script: "ܩܕܡ", categories: ["preposition"] },
  { word: "Gaw", translation: "Inside", phonetic: "Gaw", script: "ܓܘ", categories: ["preposition"] },
  { word: "Bar", translation: "Outside", phonetic: "Bar", script: "ܒܪ", categories: ["preposition"] },
  { word: "Gaw", translation: "Between/Among", phonetic: "Gaw", script: "ܒܝܢ", categories: ["preposition"] },
  { word: "Am", translation: "With", phonetic: "Am", script: "ܥܡ", categories: ["preposition"] },
  { word: "Dil", translation: "Of/Belonging to", phonetic: "Dil", script: "ܕܝܠ", categories: ["preposition"] },

  // Conjunctions
  { word: "W-", translation: "And", phonetic: "W-", script: "ܘ", categories: ["conjunction"] },
  { word: "Amma", translation: "But", phonetic: "Am-ma", script: "ܐܡܡܐ", categories: ["conjunction"] },
  { word: "Aw", translation: "Or", phonetic: "Aw", script: "ܐܘ", categories: ["conjunction"] },
  { word: "Metul d-", translation: "Because", phonetic: "Me-tul d-", script: "ܡܛܘܠ ܕ", categories: ["conjunction"] },
  { word: "Kad", translation: "When/As", phonetic: "Kad", script: "ܟܕ", categories: ["conjunction"] },
  { word: "Idan", translation: "If", phonetic: "I-dan", script: "ܐܝܕܢ", categories: ["conjunction"] },

  // Common Phrases
  { word: "Basima", translation: "Thank you (to a male) / Good (masc)", phonetic: "Ba-si-ma", script: "ܒܣܝܡܐ", categories: ["phrase"] },
  { word: "Basimta", translation: "Thank you (to a female) / Good (fem)", phonetic: "Ba-sim-ta", script: "ܒܣܝܡܬܐ", categories: ["phrase"] },
  { word: "Min d'yokh", translation: "Please (lit. from your hand)", phonetic: "Min d-yokh", script: "ܡܢ ܕܝܘܟ", categories: ["phrase"] },
  { word: "Tawdi", translation: "Thank you", phonetic: "Taw-di", script: "ܬܘܕܝ", categories: ["phrase"] },
  { word: "Eo", translation: "Yes", phonetic: "Eo", script: "ܐܝܢ", categories: ["phrase"] },
  { word: "La", translation: "No", phonetic: "La", script: "ܠܐ", categories: ["phrase"] },
  { word: "Shlama lokh", translation: "Goodbye (to male)", phonetic: "Shla-ma lokh", script: "ܫܠܡܐ ܠܘܟ", categories: ["phrase"] },
  { word: "Shlama lakh", translation: "Goodbye (to female)", phonetic: "Shla-ma lakh", script: "ܫܠܡܐ ܠܟ", categories: ["phrase"] },
  { word: "Brikh", translation: "Blessed", phonetic: "Brikh", script: "ܒܪܝܟ", categories: ["phrase"] },
  { word: "Shlama d'Alaha", translation: "Peace of God", phonetic: "Shla-ma d-A-la-ha", script: "ܫܠܡܐ ܕܐܠܗܐ", categories: ["phrase"] },
  
  // Adjectives
  { word: "Spay", translation: "Good", phonetic: "Spay", script: "ܣܦܝ", categories: ["adjective"] },

  { word: "Raba", translation: "Much / Very", phonetic: "Ra-ba", script: "ܪܒܐ", categories: ["adjective"] },

  { word: "Shapira", translation: "Beautiful (masc)", phonetic: "Sha-pi-ra", script: "ܫܦܝܪܐ", categories: ["adjective"] },

  { word: "Shapirta", translation: "Beautiful (fem)", phonetic: "Sha-pir-ta", script: "ܫܦܝܪܬܐ", categories: ["adjective"] },

  { word: "Zora", translation: "Small", phonetic: "Zo-ra", script: "ܙܥܘܪܐ", categories: ["adjective"] },

  { word: "Yarikha", translation: "Long", phonetic: "Ya-ri-kha", script: "ܝܪܝܟ݂ܐ", categories: ["adjective"] },

  { word: "Krya", translation: "Short", phonetic: "Kry-a", script: "ܟܪܝܐ", categories: ["adjective"] },

  { word: "Khatha", translation: "New", phonetic: "Kha-tha", script: "ܚܕܬܐ", categories: ["adjective"] },

  { word: "Atiqa", translation: "Old", phonetic: "A-ti-qa", script: "ܥܬܝܩܐ", categories: ["adjective"] },

  { word: "Khidiya", translation: "Happy", phonetic: "Khi-di-ya", script: "ܚܕܝܐ", categories: ["emotion"] },

  { word: "Kriwa", translation: "Sad", phonetic: "Kri-wa", script: "ܟܪܝܒܐ", categories: ["emotion"] },

  { word: "Chilya", translation: "Tired", phonetic: "Chil-ya", script: "ܟܗܝܐ", categories: ["adjective"] },

  { word: "Kpina", translation: "Hungry", phonetic: "Kpi-na", script: "ܟܦܝܢܐ", categories: ["adjective"] },

  { word: "Sahya", translation: "Thirsty", phonetic: "Sah-ya", script: "ܨܗܝܐ", categories: ["adjective"] },

  { word: "Mrisha", translation: "Sick", phonetic: "Mri-sha", script: "ܡܪܥܐ", categories: ["adjective"] },

  { word: "Hayla", translation: "Strong", phonetic: "Hay-la", script: "ܚܝܠܢܐ", categories: ["adjective"] },

  { word: "Basora", translation: "Weak", phonetic: "Ba-so-ra", script: "ܒܨܘܪܐ", categories: ["adjective"] },

  { word: "Qalula", translation: "Fast", phonetic: "Qa-lu-la", script: "ܩܠܘܠܐ", categories: ["adjective"] },

  { word: "Yaqura", translation: "Heavy/Slow", phonetic: "Ya-qu-ra", script: "ܝܩܘܪܐ", categories: ["adjective"] },

  { word: "Rama", translation: "High", phonetic: "Ra-ma", script: "ܪܡܐ", categories: ["adjective"] },

  { word: "Kupa", translation: "Low", phonetic: "Ku-pa", script: "ܟܘܦܐ", categories: ["adjective"] },


  // Colors
  { word: "Smoqa", translation: "Red", phonetic: "Smo-qa", script: "ܣܡܘܩܐ", categories: ["color"] },
  { word: "Khawra", translation: "Blue", phonetic: "Khaw-ra", script: "ܟܘܪܐ", categories: ["color"] },
  { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka", script: "ܝܪܘܩܐ", categories: ["color"] },
  { word: "Spera", translation: "Yellow", phonetic: "Spe-ra", script: "ܣܦܝܪܐ", categories: ["color"] },
  { word: "Ukma", translation: "Black", phonetic: "Uk-ma", script: "ܐܘܟܡܐ", categories: ["color"] },
  { word: "Khwara", translation: "White", phonetic: "Khwa-ra", script: "ܚܘܪܐ", categories: ["color"] },
  { word: "Portuqala", translation: "Orange", phonetic: "Por-tu-qa-la", script: "ܦܘܪܬܩܠܐ", categories: ["color"] },
  { word: "Banafsha", translation: "Purple", phonetic: "Ba-naf-sha", script: "ܒܢܦܫܐ", categories: ["color"] },
  { word: "Warda", translation: "Pink", phonetic: "War-da", script: "ܘܪܕܐ", categories: ["color"] },
  { word: "Qahwaya", translation: "Brown", phonetic: "Qah-wa-ya", script: "ܩܗܘܝܐ", categories: ["color"] },
  { word: "Rasasa", translation: "Grey", phonetic: "Ra-sa-sa", script: "ܪܨܨܐ", categories: ["color"] },
  { word: "Dahba", translation: "Gold", phonetic: "Dah-ba", script: "ܕܗܒܐ", categories: ["color"] },
  { word: "Sipa", translation: "Silver", phonetic: "Si-pa", script: "ܣܐܡܐ", categories: ["color"] },
  { word: "Bahra", translation: "Light (Color)", phonetic: "Bah-ra", script: "ܒܗܪܐ", categories: ["color"] },
  { word: "Khekha", translation: "Dark (Color)", phonetic: "Khe-kha", script: "ܚܘܟ݂ܐ", categories: ["color"] },


  // Family
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", script: "ܒܒܐ", categories: ["family"] },
  { word: "Abba", translation: "Father (Formal)", phonetic: "Ab-ba", script: "ܐܒܐ", categories: ["family"] },
  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", script: "ܝܡܐ", categories: ["family"] },
  { word: "Imma", translation: "Mother (Formal)", phonetic: "Im-ma", script: "ܐܡܐ", categories: ["family"] },
  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", script: "ܐܚܘܢܐ", categories: ["family"] },
  { word: "Akh", translation: "Brother", phonetic: "Akh", script: "ܐܚܐ", categories: ["family"] },
  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", script: "ܚܬܐ", categories: ["family"] },
  { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", script: "ܣܒܐ", categories: ["family"] },
  { word: "Sawtha", translation: "Grandmother", phonetic: "Saw-tha", script: "ܣܒܬܐ", categories: ["family"] },
  { word: "Amma", translation: "Uncle (Paternal)", phonetic: "Am-ma", script: "ܥܡܐ", categories: ["family"] },
  { word: "Khala", translation: "Uncle (Maternal)", phonetic: "Kha-la", script: "ܚܠܐ", categories: ["family"] },
  { word: "Bra", translation: "Son", phonetic: "Bra", script: "ܒܪܐ", categories: ["family"] },
  { word: "Brata", translation: "Daughter", phonetic: "Bra-ta", script: "ܒܪܬܐ", categories: ["family"] },
  { word: "Gawra", translation: "Husband", phonetic: "Gaw-ra", script: "ܓܒܪܐ", categories: ["family"] },
  { word: "Bakhta", translation: "Wife", phonetic: "Bakh-ta", script: "ܒܟ݂ܬܐ", categories: ["family"] },
  { word: "Nashwatha", translation: "Relatives/Family", phonetic: "Nash-wa-tha", script: "ܢܫܘܬܐ", categories: ["family"] },
  { word: "Yala", translation: "Child/Boy", phonetic: "Ya-la", script: "ܝܠܐ", categories: ["noun"] },
  { word: "Nasha", translation: "Person", phonetic: "Na-sha", script: "ܢܫܐ", categories: ["noun"] },
  { word: "Nashe", translation: "People", phonetic: "Na-she", script: "ܢܫܐ", categories: ["noun"] },

  // Food & Drink
  { word: "Mya", translation: "Water", phonetic: "M-ya", script: "ܡܝܐ", categories: ["food"] },
  { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", script: "ܠܚܡܐ", categories: ["food"] },
  { word: "Bisra", translation: "Meat", phonetic: "Bis-ra", script: "ܒܣܪܐ", categories: ["food"] },
  { word: "Guptha", translation: "Cheese", phonetic: "Gup-tha", script: "ܓܘܒܬܐ", categories: ["food"] },
  { word: "Be'ay", translation: "Eggs", phonetic: "Be-ay", script: "ܒܝܥܐ", categories: ["food"] },
  { word: "Chai", translation: "Tea", phonetic: "Chai", script: "ܟܐܝ", categories: ["food"] },
  { word: "Qahwa", translation: "Coffee", phonetic: "Qah-wa", script: "ܩܗܘܐ", categories: ["food"] },
  { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha", script: "ܬܦܘܚܐ", categories: ["food"] },
  { word: "Pishra", translation: "Fish", phonetic: "Pish-ra", script: "ܦܫܪܐ", categories: ["food"] },
  { word: "Khala", translation: "Milk", phonetic: "Kha-la", script: "ܚܠܒܐ", categories: ["food"] },
  { word: "Kthayta", translation: "Chicken", phonetic: "Kthay-ta", script: "ܟܬܝܬܐ", categories: ["food"] },
  { word: "Yaraqa", translation: "Vegetables", phonetic: "Ya-ra-qa", script: "ܝܪܩܐ", categories: ["food"] },
  { word: "Pera", translation: "Fruit", phonetic: "Pe-ra", script: "ܦܐܪܐ", categories: ["food"] },
  { word: "Khamra", translation: "Wine", phonetic: "Kham-ra", script: "ܚܡܪܐ", categories: ["food"] },
  { word: "Melkha", translation: "Salt", phonetic: "Mel-kha", script: "ܡܠܚܐ", categories: ["food"] },
  { word: "Shekar", translation: "Sugar", phonetic: "She-kar", script: "ܫܟܪ", categories: ["food"] },
  { word: "Mishkha", translation: "Oil", phonetic: "Mish-kha", script: "ܡܫܚܐ", categories: ["food"] },
  { word: "Kare", translation: "Butter", phonetic: "Ka-re", script: "ܟܪܐ", categories: ["food"] },
  { word: "Masta", translation: "Yogurt", phonetic: "Mas-ta", script: "ܡܣܬܐ", categories: ["food"] },
  { word: "Qare", translation: "Cucumber", phonetic: "Qa-re", script: "ܩܪܐ", categories: ["food"] },
  { word: "Tamata", translation: "Tomato", phonetic: "Ta-ma-ta", script: "ܛܡܐܛܐ", categories: ["food"] },
  { word: "Basla", translation: "Onion", phonetic: "Bas-la", script: "ܒܨܠܐ", categories: ["food"] },
  { word: "Patata", translation: "Potato", phonetic: "Pa-ta-ta", script: "ܦܛܐܛܐ", categories: ["food"] },
  { word: "Inwe", translation: "Grapes", phonetic: "In-we", script: "ܥܢܒܐ", categories: ["food"] },

  // Nouns & Objects
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", script: "ܐܠܗܐ", categories: ["noun"] },
  { word: "Bayta", translation: "House", phonetic: "Bay-ta", script: "ܒܝܬܐ", categories: ["noun"] },
  { word: "Sayara", translation: "Car", phonetic: "Sa-ya-ra", script: "ܣܝܪܐ", categories: ["noun"] },
  { word: "Ktawa", translation: "Book", phonetic: "Kta-wa", script: "ܟܬܒܐ", categories: ["noun"] },
  { word: "Qalama", translation: "Pen", phonetic: "Qa-la-ma", script: "ܩܠܡܐ", categories: ["noun"] },
  { word: "Pata", translation: "Table/Face", phonetic: "Pa-ta", script: "ܦܬܐ", categories: ["noun"] },
  { word: "Kursa", translation: "Chair", phonetic: "Kur-sa", script: "ܟܘܪܣܝܐ", categories: ["noun"] },
  { word: "Itha", translation: "Hand", phonetic: "I-tha", script: "ܐܝܕܐ", categories: ["body"] },
  { word: "Reesha", translation: "Head", phonetic: "Ree-sha", script: "ܪܝܫܐ", categories: ["body"] },
  { word: "Libba", translation: "Heart", phonetic: "Lib-ba", script: "ܠܒܐ", categories: ["body"] },


  // Verbs (Infinitive/Root roughly)
  { word: "Akhal", translation: "To Eat", phonetic: "A-khal", script: "ܐܟܠ", categories: ["verb"] },
  { word: "Shtay", translation: "To Drink", phonetic: "Sh-tay", script: "ܫܬܐ", categories: ["verb"] },
  { word: "Dmikh", translation: "To Sleep", phonetic: "D-mikh", script: "ܕܡܟ", categories: ["verb"] },
  { word: "Yithib", translation: "To Sit", phonetic: "Yi-thib", script: "ܝܬܒ", categories: ["verb"] },
  { word: "Qim", translation: "To Rise/Stand", phonetic: "Qim", script: "ܩܡ", categories: ["verb"] },
  { word: "Khazi", translation: "To See", phonetic: "Kha-zi", script: "ܚܙܐ", categories: ["verb"] },
  { word: "Sheme", translation: "To Hear", phonetic: "She-me", script: "ܫܡܥ", categories: ["verb"] },
  { word: "Azil", translation: "To Go", phonetic: "A-zil", script: "ܐܙܠ", categories: ["verb"] },
  { word: "Athi", translation: "To Come", phonetic: "A-thi", script: "ܐܬܐ", categories: ["verb"] },
  { word: "Ktiv", translation: "To Write", phonetic: "K-tiv", script: "ܟܬܒ", categories: ["verb"] },
  { word: "Qari", translation: "To Read", phonetic: "Qa-ri", script: "ܩܪܐ", categories: ["verb"] },
  { word: "Pthakh", translation: "To Open", phonetic: "Pthakh", script: "ܦܬܚ", categories: ["verb"] },
  { word: "Dwiq", translation: "To Close/Hold", phonetic: "Dwiq", script: "ܕܒܩ", categories: ["verb"] },
  { word: "Shqil", translation: "To Take/Buy", phonetic: "Shqil", script: "ܫܩܠ", categories: ["verb"] },
  { word: "Hiw", translation: "To Give", phonetic: "Hiw", script: "ܝܗܒ", categories: ["verb"] },
  { word: "Ba'ay", translation: "To Want/Love", phonetic: "Ba-ay", script: "ܒܥܐ", categories: ["verb"] },
  { word: "Yadi", translation: "To Know", phonetic: "Ya-di", script: "ܝܕܥ", categories: ["verb"] },
  { word: "Pol", translation: "To Work", phonetic: "Pol", script: "ܦܠܚ", categories: ["verb"] },
  { word: "Mtal", translation: "To Play", phonetic: "Mtal", script: "ܡܛܠ", categories: ["verb"] },
  { word: "Mahki", translation: "To Speak", phonetic: "Mah-ki", script: "ܡܚܟܐ", categories: ["verb"] },
  { word: "Rkhosh", translation: "To Walk", phonetic: "Rkhosh", script: "ܪܚܫ", categories: ["verb"] },
  { word: "Rhit", translation: "To Run", phonetic: "Rhit", script: "ܪܗܛ", categories: ["verb"] },
  { word: "Gkhikh", translation: "To Laugh", phonetic: "Gkhikh", script: "ܓܚܟ", categories: ["verb"] },
  { word: "Bkhe", translation: "To Cry", phonetic: "Bkhe", script: "ܒܟܐ", categories: ["verb"] },


  // Numbers
  { word: "Kha", translation: "One", phonetic: "Kha", script: "ܚܕ", categories: ["number"] },
  { word: "Tre", translation: "Two", phonetic: "Tre", script: "ܬܪܝܢ", categories: ["number"] },
  { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", script: "ܬܠܬܐ", categories: ["number"] },
  { word: "Arba", translation: "Four", phonetic: "Ar-ba", script: "ܐܪܒܥܐ", categories: ["number"] },
  { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", script: "ܚܡܫܐ", categories: ["number"] },
  { word: "Ishta", translation: "Six", phonetic: "Ish-ta", script: "ܐܫܬܐ", categories: ["number"] },
  { word: "Shwa", translation: "Seven", phonetic: "Shwa", script: "ܫܒܥܐ", categories: ["number"] },
  { word: "Tmanya", translation: "Eight", phonetic: "Tman-ya", script: "ܬܡܢܝܐ", categories: ["number"] },
  { word: "Tisha", translation: "Nine", phonetic: "Ti-sha", script: "ܬܫܥܐ", categories: ["number"] },
  { word: "Asar", translation: "Ten", phonetic: "A-sar", script: "ܥܣܪܐ", categories: ["number"] },


  // Time
  { word: "Yoma", translation: "Day", phonetic: "Yo-ma", script: "ܝܘܡܐ", categories: ["time"] },
  { word: "Lelya", translation: "Night", phonetic: "Lel-ya", script: "ܠܠܝܐ", categories: ["time"] },
  { word: "Idyo", translation: "Today", phonetic: "Id-yo", script: "ܐܕܝܘ", categories: ["time"] },
  { word: "Timmal", translation: "Yesterday", phonetic: "Tim-mal", script: "ܬܡܠ", categories: ["time"] },
  { word: "Qam", translation: "Tomorrow", phonetic: "Qam", script: "ܩܐܡ", categories: ["time"] },
  { word: "Shabta", translation: "Saturday / Week", phonetic: "Shab-ta", script: "ܫܒܬܐ", categories: ["time"] },


  // Animals
  { word: "Kalba", translation: "Dog", phonetic: "Kal-ba", script: "ܟܠܒܐ", categories: ["animal"] },
  { word: "Qato", translation: "Cat", phonetic: "Qa-to", script: "ܩܛܘ", categories: ["animal"] },
  { word: "Susya", translation: "Horse", phonetic: "Sus-ya", script: "ܣܘܣܝܐ", categories: ["animal"] },
  { word: "Tawra", translation: "Bull/Ox", phonetic: "Taw-ra", script: "ܬܘܪܐ", categories: ["animal"] },
  { word: "Khmara", translation: "Donkey", phonetic: "Khma-ra", script: "ܚܡܪܐ", categories: ["animal"] },
  { word: "Arya", translation: "Lion", phonetic: "Ar-ya", script: "ܐܪܝܐ", categories: ["animal"] },
  { word: "Arva", translation: "Sheep", phonetic: "Ar-va", script: "ܐܪܒܐ", categories: ["animal"] },

  // Nature
  { word: "Shimsha", translation: "Sun", phonetic: "Shim-sha", script: "ܫܡܫܐ", categories: ["nature"] },

  { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ", categories: ["nature"] },

  { word: "Kokhva", translation: "Star", phonetic: "Kokh-va", script: "ܟܘܟܒܐ", categories: ["nature"] },

  { word: "Matra", translation: "Rain", phonetic: "Mat-ra", script: "ܡܛܪܐ", categories: ["nature"] },

  { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ", categories: ["nature"] },

  { word: "Nura", translation: "Fire", phonetic: "Nu-ra", script: "ܢܘܪܐ", categories: ["nature"] },

  { word: "Opra", translation: "Earth/Dust", phonetic: "Op-ra", script: "ܥܦܪܐ", categories: ["nature"] },

  { word: "Ilana", translation: "Tree", phonetic: "I-la-na", script: "ܐܝܠܢܐ", categories: ["nature"] },
  { word: "Nahra", translation: "River", phonetic: "Nah-ra", script: "ܢܗܪܐ", categories: ["nature"] },
  { word: "Yama", translation: "Sea/Lake", phonetic: "Ya-ma", script: "ܝܡܐ", categories: ["nature"] },
  { word: "Tura", translation: "Mountain", phonetic: "Tu-ra", script: "ܛܘܪܐ", categories: ["nature"] },
  { word: "Genta", translation: "Garden", phonetic: "Gen-ta", script: "ܓܢܬܐ", categories: ["nature"] },
  { word: "Aywa", translation: "Cloud", phonetic: "Ay-wa", script: "ܥܝܒܐ", categories: ["nature"] },
  { word: "Powkha", translation: "Wind/Air", phonetic: "Pow-kha", script: "ܦܘܚܐ", categories: ["nature"] },

  { word: "Qarira", translation: "Cold", phonetic: "Qa-ri-ra", script: "ܩܪܝܪܐ", categories: ["adjective"] },

  { word: "Khamima", translation: "Hot", phonetic: "Kha-mi-ma", script: "ܚܡܝܡܐ", categories: ["adjective"] },


  // Body
  { word: "Ena", translation: "Eye", phonetic: "E-na", script: "ܥܝܢܐ", categories: ["body"] },

  { word: "Nakhira", translation: "Nose", phonetic: "Na-khi-ra", script: "ܢܚܝܪܐ", categories: ["body"] },

  { word: "Puma", translation: "Mouth", phonetic: "Pu-ma", script: "ܦܘܡܐ", categories: ["body"] },

  { word: "Odna", translation: "Ear", phonetic: "Od-na", script: "ܐܕܢܐ", categories: ["body"] },

  { word: "Regla", translation: "Foot/Leg", phonetic: "Reg-la", script: "ܪܓܠܐ", categories: ["body"] },

  { word: "Lishana", translation: "Tongue/Language", phonetic: "Li-sha-na", script: "ܠܫܢܐ", categories: ["body"] },

  { word: "Shina", translation: "Tooth", phonetic: "Shi-na", script: "ܫܢܐ", categories: ["body"] },

  { word: "Sa'ra", translation: "Hair", phonetic: "Sa-ra", script: "ܣܥܪܐ", categories: ["body"] },

  { word: "Khade", translation: "Chest", phonetic: "Kha-de", script: "ܚܕܝܐ", categories: ["body"] },

  { word: "Kasa", translation: "Stomach/Belly", phonetic: "Ka-sa", script: "ܟܪܣܐ", categories: ["body"] },

  { word: "Khasa", translation: "Back", phonetic: "Kha-sa", script: "ܚܨܐ", categories: ["body"] },

  { word: "Dra'a", translation: "Arm", phonetic: "Dra-a", script: "ܕܪܥܐ", categories: ["body"] },

  { word: "Siv'a", translation: "Finger", phonetic: "Siv-a", script: "ܨܒܥܐ", categories: ["body"] },

  { word: "Burka", translation: "Knee", phonetic: "Bur-ka", script: "ܒܘܪܟܐ", categories: ["adjective"] },


  // Home
  { word: "Tarra", translation: "Door", phonetic: "Tar-ra", script: "ܬܪܥܐ", categories: ["noun"] },

  { word: "Kawtha", translation: "Window", phonetic: "Kaw-tha", script: "ܟܘܬܐ", categories: ["nature"] },

  { word: "Igara", translation: "Roof", phonetic: "I-ga-ra", script: "ܐܓܪܐ", categories: ["noun"] },

  { word: "Shwitha", translation: "Bed", phonetic: "Shwi-tha", script: "ܫܘܝܬܐ", categories: ["adjective"] },

  { word: "Matbakh", translation: "Kitchen", phonetic: "Mat-bakh", script: "ܡܛܒܟ݂", categories: ["noun"] },

  { word: "Khamama", translation: "Bathroom", phonetic: "Kha-ma-ma", script: "ܚܡܐܡܐ", categories: ["noun"] },

  { word: "Oda", translation: "Room/Bedroom", phonetic: "O-da", script: "ܐܘܕܐ", categories: ["noun"] },

  { word: "Ar'a", translation: "Floor/Ground", phonetic: "Ar-a", script: "ܐܪܥܐ", categories: ["noun"] },

  { word: "Qleeda", translation: "Key", phonetic: "Qlee-da", script: "ܩܠܝܕܐ", categories: ["home"] },

  { word: "Sahna", translation: "Plate", phonetic: "Sah-na", script: "ܨܚܢܐ", categories: ["home"] },

  { word: "Kchamcha", translation: "Spoon", phonetic: "Kcham-cha", script: "ܟܡܟܐ", categories: ["home"] },

  { word: "Changala", translation: "Fork", phonetic: "Chan-ga-la", script: "ܟܢܓܠܐ", categories: ["home"] },

  { word: "Sakina", translation: "Knife", phonetic: "Sa-ki-na", script: "ܣܟܝܢܐ", categories: ["home"] },

  { word: "Stikana", translation: "Cup (Tea)", phonetic: "Sti-ka-na", script: "ܐܣܬܟܢܐ", categories: ["home"] },

  { word: "Glasa", translation: "Glass", phonetic: "Gla-sa", script: "ܓܠܣܐ", categories: ["home"] },


  // Clothing
  { word: "Sudra", translation: "Shirt", phonetic: "Sud-ra", script: "ܨܘܕܪܐ", categories: ["clothing"] },

  { word: "Sharwala", translation: "Pants", phonetic: "Shar-wa-la", script: "ܫܪܘܠܐ", categories: ["clothing"] },

  { word: "Soltha", translation: "Shoe", phonetic: "Sol-tha", script: "ܣܘܠܬܐ", categories: ["clothing"] },

  { word: "Kusitha", translation: "Hat/Cap", phonetic: "Ku-si-tha", script: "ܟܘܣܝܬܐ", categories: ["clothing"] },


  // Places
  { word: "Madrasa", translation: "School", phonetic: "Mad-ra-sa", script: "ܡܕܪܫܬܐ", categories: ["place"] },
  { word: "Knishta", translation: "Church", phonetic: "Knish-ta", script: "ܟܢܘܫܬܐ", categories: ["place"] },
  { word: "Shuqa", translation: "Market", phonetic: "Shu-qa", script: "ܫܘܩܐ", categories: ["place"] },
  { word: "Matha", translation: "Village/Town", phonetic: "Ma-tha", script: "ܡܬܐ", categories: ["place"] },
  { word: "Medina", translation: "City", phonetic: "Me-di-na", script: "ܡܕܝܢܬܐ", categories: ["place"] },
  { word: "Bayta d-Asye", translation: "Hospital", phonetic: "Bay-ta d-As-ye", script: "ܒܝܬ ܐܣܝܐ", categories: ["place"] },
  { word: "Dukana", translation: "Store/Shop", phonetic: "Du-ka-na", script: "ܕܘܟܢܐ", categories: ["place"] },
  { word: "Be-Sawa", translation: "Grandfather's House", phonetic: "Be-Sa-wa", script: "ܒܝܬ ܣܒܐ", categories: ["place"] },

  { word: "Khakla", translation: "Field/Farm", phonetic: "Khak-la", script: "ܚܩܠܐ", categories: ["place"] },
  { word: "Parqa", translation: "Park", phonetic: "Par-qa", script: "ܦܪܩܐ", categories: ["place"] },
  { word: "Mat'am", translation: "Restaurant", phonetic: "Mat-am", script: "ܡܛܥܡ", categories: ["place"] },
  { word: "Maktab", translation: "Office", phonetic: "Mak-tab", script: "ܡܟܬܒ", categories: ["place"] },

  // Professions
  { word: "Malpana", translation: "Teacher (Masc)", phonetic: "Mal-pa-na", script: "ܡܠܦܢܐ", categories: ["profession"] },
  { word: "Malpantha", translation: "Teacher (Fem)", phonetic: "Mal-pan-tha", script: "ܡܠܦܢܬܐ", categories: ["profession"] },
  { word: "Asya", translation: "Doctor", phonetic: "As-ya", script: "ܐܣܝܐ", categories: ["profession"] },
  { word: "Nakhopa", translation: "Baker", phonetic: "Na-kho-pa", script: "ܢܚܘܦܐ", categories: ["profession"] },
  { word: "Sayuqa", translation: "Driver", phonetic: "Sa-yu-qa", script: "ܣܝܘܩܐ", categories: ["profession"] },
  { word: "Shurta", translation: "Police", phonetic: "Shur-ta", script: "ܫܘܪܛܐ", categories: ["profession"] },
  { word: "Khatota", translation: "Tailor/Seamstress", phonetic: "Kha-to-ta", script: "ܚܝܛܐ", categories: ["profession"] },
  { word: "Ranya", translation: "Singer", phonetic: "Ran-ya", script: "ܪܢܝܐ", categories: ["profession"] },
  { word: "Tabakha", translation: "Cook/Chef", phonetic: "Ta-ba-kha", script: "ܛܒܟ݂ܐ", categories: ["profession"] },
  { word: "Benaya", translation: "Builder", phonetic: "Be-na-ya", script: "ܒܢܝܐ", categories: ["profession"] },
  { word: "Falaha", translation: "Farmer", phonetic: "Fa-la-ha", script: "ܦܠܚܐ", categories: ["profession"] },

  // Emotions
  { word: "Khiditha", translation: "Happy (fem)", phonetic: "Khi-di-tha", script: "ܚܕܝܬܐ", categories: ["emotion"] },

  { word: "Krivta", translation: "Sad (fem)", phonetic: "Kriv-ta", script: "ܟܪܝܒܬܐ", categories: ["emotion"] },

  { word: "Karpana", translation: "Angry", phonetic: "Kar-pa-na", script: "ܟܪܦܢܐ", categories: ["emotion"] },

  { word: "Zdi'a", translation: "Scared", phonetic: "Zdi-a", script: "ܙܕܝܥܐ", categories: ["emotion"] },


  // Travel
  { word: "Orkha", translation: "Road/Way", phonetic: "Or-kha", script: "ܐܘܪܚܐ", categories: ["travel"] },
  { word: "Tayara", translation: "Airplane", phonetic: "Ta-ya-ra", script: "ܛܝܪܐ", categories: ["travel"] },
  { word: "Bosta", translation: "Bus", phonetic: "Bos-ta", script: "ܒܐܨ", categories: ["travel"] },
  { word: "Pasport", translation: "Passport", phonetic: "Pas-port", script: "ܦܣܦܘܪܬ", categories: ["travel"] },

  { word: "Tiket", translation: "Ticket", phonetic: "Ti-ket", script: "ܬܝܟܬ", categories: ["travel"] },

  { word: "Mata", translation: "Luggage/Things", phonetic: "Ma-ta", script: "ܡܐܬܐ", categories: ["travel"] },


  // More Time
  { word: "Sa'at", translation: "Hour/Clock", phonetic: "Sa-at", script: "ܣܥܬ", categories: ["time"] },

  { word: "Daqiqa", translation: "Minute", phonetic: "Da-qi-qa", script: "ܕܩܝܩܐ", categories: ["time"] },

  { word: "Shita", translation: "Year", phonetic: "Shi-ta", script: "ܫܢܬܐ", categories: ["time"] },

  { word: "Yargha", translation: "Month", phonetic: "Yar-gha", script: "ܝܪܚܐ", categories: ["time"] },

  { word: "Hasa", translation: "Now", phonetic: "Ha-sa", script: "ܗܣܐ", categories: ["time"] },

  { word: "Qam", translation: "Before", phonetic: "Qam", script: "ܩܡ", categories: ["time"] },

  { word: "Sipra", translation: "Morning", phonetic: "Sip-ra", script: "ܨܦܪܐ", categories: ["time"] },

  { word: "Ramsha", translation: "Evening", phonetic: "Ram-sha", script: "ܪܡܫܐ", categories: ["time"] },


  // More Numbers
  { word: "Khadassar", translation: "Eleven", phonetic: "Kha-das-sar", script: "ܚܕܥܣܪ", categories: ["number"] },

  { word: "Treissar", translation: "Twelve", phonetic: "Treis-sar", script: "ܬܪܥܣܪ", categories: ["number"] },

  { word: "Esrin", translation: "Twenty", phonetic: "Es-rin", script: "ܥܣܪܝܢ", categories: ["number"] },

  { word: "Tlaa", translation: "Thirty", phonetic: "Tla-a", script: "ܬܠܬܝܢ", categories: ["number"] },

  { word: "Arba", translation: "Forty", phonetic: "Ar-ba", script: "ܐܪܒܥܝܢ", categories: ["number"] },

  { word: "Khamshi", translation: "Fifty", phonetic: "Kham-shi", script: "ܚܡܫܝܢ", categories: ["number"] },

  { word: "Alpa", translation: "One Thousand", phonetic: "Al-pa", script: "ܐܠܦܐ", categories: ["number"] },



  // More Phrases
  { word: "Bshina b-atayokh", translation: "Welcome (to male)", phonetic: "B-shi-na b-a-ta-yokh", script: "ܒܫܝܢܐ ܒܐܬܝܘܟ݂", categories: ["phrase"] },

  { word: "Bshina b-atayakh", translation: "Welcome (to female)", phonetic: "B-shi-na b-a-ta-yakh", script: "ܒܫܝܢܐ ܒܐܬܝܟ݂", categories: ["phrase"] },

  { word: "Brikh sipra", translation: "Good morning", phonetic: "Brikh sip-ra", script: "ܒܪܝܟ݂ ܨܦܪܐ", categories: ["greeting"] },

  { word: "Brikh ramsha", translation: "Good evening", phonetic: "Brikh ram-sha", script: "ܒܪܝܟ݂ ܪܡܫܐ", categories: ["greeting"] },

  { word: "Ghanokh b-shina", translation: "Good night", phonetic: "Gha-nokh b-shi-na", script: "ܓܢܘܟ݂ ܒܫܝܢܐ", categories: ["greeting"] },

  { word: "Mahbila", translation: "Excuse me", phonetic: "Mah-bi-la", script: "ܡܚܒܠܐ", categories: ["phrase"] },

  { word: "La yadin", translation: "I don't know", phonetic: "La ya-din", script: "ܠܐ ܝܕܥܢ", categories: ["adjective"] },

  { word: "Brikh sipra", translation: "Good morning", phonetic: "Brikh sip-ra", script: "ܒܪܝܟ ܨܦܪܐ", categories: ["greeting"] },

  { word: "Brikh ramsha", translation: "Good evening", phonetic: "Brikh ram-sha", script: "ܒܪܝܟ ܪܡܫܐ", categories: ["greeting"] },

  { word: "Ghanokh b-shina", translation: "Good night", phonetic: "Gha-nokh b-shi-na", script: "ܓܢܘܟ ܒܫܝܢܐ", categories: ["greeting"] },

  { word: "Brikh d'Ati", translation: "God bless you", phonetic: "Brikh d-A-ti", script: "ܒܪܝܟ ܕܐܬܝ", categories: ["adjective"] },

  { word: "Brikh d'Atokh", translation: "God bless you (to male)", phonetic: "Brikh d-A-tokh", script: "ܒܪܝܟ ܕܐܬܘܟ", categories: ["adjective"] },

  { word: "Brikh d'Atakh", translation: "God bless you (to female)", phonetic: "Brikh d-A-takh", script: "ܒܪܝܟ ܕܐܬܟ", categories: ["adjective"] },

  { word: "Shlama d'Alaha b'Atokh", translation: "Peace of God be with you (to male)", phonetic: "Shla-ma d-A-la-ha b-A-tokh", script: "ܫܠܡܐ ܕܐܠܗܐ ܒܐܬܘܟ", categories: ["adjective"] },

  { word: "Shlama d'Alaha b'Atakh", translation: "Peace of God be with you (to female)", phonetic: "Shla-ma d-A-la-ha b-A-takh", script: "ܫܠܡܐ ܕܐܠܗܐ ܒܐܬܟ", categories: ["adjective"] },


  // More Verbs
  { word: "Sakh", translation: "To Wash", phonetic: "Sakh", script: "ܣܚ", categories: ["verb"] },

  { word: "Nashakh", translation: "To Clean", phonetic: "Na-shakh", script: "ܢܫܚ", categories: ["verb"] },

  { word: "Qatil", translation: "To Kill", phonetic: "Qa-til", script: "ܩܛܠ", categories: ["verb"] },

  { word: "Qayim", translation: "To Stand/Stay", phonetic: "Qa-yim", script: "ܩܐܡ", categories: ["verb"] },

  { word: "Shakil", translation: "To Carry/Lift", phonetic: "Sha-kil", script: "ܫܩܠ", categories: ["verb"] },

  { word: "Rakhim", translation: "To Throw/Put", phonetic: "Ra-khim", script: "ܪܟܡ", categories: ["verb"] },


  // Days of the Week
  { word: "Khamiša", translation: "Thursday", phonetic: "Kha-mi-ša", script: "ܚܡܝܫܐ", categories: ["adjective"] },

  { word: "Iroha", translation: "Sunday", phonetic: "I-ro-ha", script: "ܝܪܘܚܐ", categories: ["nature"] },

  { word: "Trinbšaba", translation: "Monday", phonetic: "Trin-b-ša-ba", script: "ܬܪܝܢܒܫܒܐ", categories: ["adjective"] },

  { word: "Tlitbšaba", translation: "Tuesday", phonetic: "Tlit-b-ša-ba", script: "ܬܠܝܬܒܫܒܐ", categories: ["adjective"] },

  { word: "Arbibšaba", translation: "Wednesday", phonetic: "Ar-bib-ša-ba", script: "ܐܪܒܥܒܫܒܐ", categories: ["adjective"] },

  { word: "Khamšibšaba", translation: "Friday", phonetic: "Kham-ši-b-ša-ba", script: "ܚܡܫܒܫܒܐ", categories: ["adjective"] },


  // Months & Seasons
  { word: "Kanun Qadmaya", translation: "January", phonetic: "Ka-nun Qad-ma-ya", script: "ܟܢܘܢ ܩܕܡܝܐ", categories: ["adjective"] },

  { word: "Šbat", translation: "February", phonetic: "Šbat", script: "ܫܒܛ", categories: ["adjective"] },

  { word: "Adar", translation: "March", phonetic: "A-dar", script: "ܐܕܪ", categories: ["adjective"] },

  { word: "Nisan", translation: "April", phonetic: "Ni-san", script: "ܢܝܣܢ", categories: ["adjective"] },

  { word: "Iyyar", translation: "May", phonetic: "Iy-yar", script: "ܐܝܪ", categories: ["adjective"] },

  { word: "Ḥziran", translation: "June", phonetic: "Ḥzi-ran", script: "ܚܙܝܪܢ", categories: ["adjective"] },

  { word: "Tammuz", translation: "July", phonetic: "Tam-muz", script: "ܬܡܘܙ", categories: ["adjective"] },

  { word: "Ab", translation: "August", phonetic: "Ab", script: "ܐܒ", categories: ["adjective"] },

  { word: "Ilul", translation: "September", phonetic: "I-lul", script: "ܐܝܠܘܠ", categories: ["adjective"] },

  { word: "Tišrin Qadmaya", translation: "October", phonetic: "Tiš-rin Qad-ma-ya", script: "ܬܫܪܝܢ ܩܕܡܝܐ", categories: ["adjective"] },

  { word: "Tišrin Ḥraya", translation: "November", phonetic: "Tiš-rin Ḥra-ya", script: "ܬܫܪܝܢ ܚܪܝܐ", categories: ["adjective"] },

  { word: "Kanun Ḥraya", translation: "December", phonetic: "Ka-nun Ḥra-ya", script: "ܟܢܘܢ ܚܪܝܐ", categories: ["adjective"] },

  { word: "Kharta", translation: "Spring", phonetic: "Khar-ta", script: "ܟܪܬܐ", categories: ["adjective"] },

  { word: "Qayṭa", translation: "Summer", phonetic: "Qay-ṭa", script: "ܩܝܛܐ", categories: ["adjective"] },

  { word: "Ṭarpa", translation: "Autumn/Fall", phonetic: "Ṭar-pa", script: "ܛܪܦܐ", categories: ["adjective"] },

  { word: "Sitwa", translation: "Winter", phonetic: "Sit-wa", script: "ܣܬܘܐ", categories: ["adjective"] },


  // More Fruits & Vegetables
  { word: "Tīna", translation: "Fig", phonetic: "Tī-na", script: "ܬܐܢܐ", categories: ["adjective"] },

  { word: "Rummana", translation: "Pomegranate", phonetic: "Rum-ma-na", script: "ܪܘܡܢܐ", categories: ["adjective"] },

  { word: "Khawkha", translation: "Peach", phonetic: "Khaw-kha", script: "ܚܘܟܐ", categories: ["adjective"] },

  { word: "Mešmeša", translation: "Apricot", phonetic: "Meš-me-ša", script: "ܡܫܡܫܐ", categories: ["adjective"] },

  { word: "Kummatra", translation: "Pear", phonetic: "Kum-mat-ra", script: "ܟܘܡܬܪܐ", categories: ["adjective"] },

  { word: "Talyana", translation: "Watermelon", phonetic: "Tal-ya-na", script: "ܛܠܝܢܐ", categories: ["nature"] },

  { word: "Bṭikha", translation: "Melon", phonetic: "Bṭi-kha", script: "ܒܛܝܟܐ", categories: ["adjective"] },

  { word: "Limuna", translation: "Lemon", phonetic: "Li-mu-na", script: "ܠܝܡܘܢܐ", categories: ["adjective"] },

  { word: "Burtuqala", translation: "Orange (fruit)", phonetic: "Bur-tu-qa-la", script: "ܒܘܪܬܘܩܠܐ", categories: ["adjective"] },

  { word: "Ṣōna", translation: "Dates (fruit)", phonetic: "Ṣō-na", script: "ܨܘܢܐ", categories: ["adjective"] },

  { word: "Gōzta", translation: "Walnut", phonetic: "Gōz-ta", script: "ܓܘܙܬܐ", categories: ["adjective"] },

  { word: "Lōza", translation: "Almond", phonetic: "Lō-za", script: "ܠܘܙܐ", categories: ["adjective"] },

  { word: "Fistōqa", translation: "Pistachio", phonetic: "Fis-tō-qa", script: "ܦܣܬܩܐ", categories: ["adjective"] },

  { word: "Tuma", translation: "Garlic", phonetic: "Tu-ma", script: "ܬܘܡܐ", categories: ["adjective"] },

  { word: "Pilpila", translation: "Pepper", phonetic: "Pil-pi-la", script: "ܦܠܦܠܐ", categories: ["adjective"] },

  { word: "Karāt", translation: "Leek", phonetic: "Ka-rāt", script: "ܟܪܬ", categories: ["adjective"] },

  { word: "Khassa", translation: "Lettuce", phonetic: "Khas-sa", script: "ܚܣܐ", categories: ["adjective"] },

  { word: "Shilpa", translation: "Eggplant", phonetic: "Shil-pa", script: "ܫܠܦܐ", categories: ["adjective"] },

  { word: "Kōsa", translation: "Zucchini", phonetic: "Kō-sa", script: "ܟܘܣܐ", categories: ["adjective"] },

  { word: "Lifta", translation: "Turnip", phonetic: "Lif-ta", script: "ܠܦܬܐ", categories: ["adjective"] },

  { word: "Gzara", translation: "Carrot", phonetic: "Gza-ra", script: "ܓܙܪܐ", categories: ["adjective"] },

  { word: "Šalgam", translation: "Radish", phonetic: "Šal-gam", script: "ܫܠܓܡ", categories: ["adjective"] },


  // More Meats & Proteins
  { word: "Luḥma d-Khmara", translation: "Beef", phonetic: "Luḥ-ma d-Khma-ra", script: "ܠܘܚܡܐ ܕܚܡܪܐ", categories: ["adjective"] },

  { word: "Luḥma d-Arva", translation: "Lamb", phonetic: "Luḥ-ma d-Ar-va", script: "ܠܘܚܡܐ ܕܐܪܒܐ", categories: ["adjective"] },

  { word: "Luḥma d-Khanzira", translation: "Pork", phonetic: "Luḥ-ma d-Khan-zi-ra", script: "ܠܘܚܡܐ ܕܚܢܙܝܪܐ", categories: ["adjective"] },

  { word: "Šamka", translation: "Fish (general)", phonetic: "Šam-ka", script: "ܫܡܟܐ", categories: ["adjective"] },

  { word: "Qrusta", translation: "Shrimp", phonetic: "Qrus-ta", script: "ܩܪܘܣܬܐ", categories: ["adjective"] },


  // Kitchen & Cooking
  { word: "Sanduqa", translation: "Pot", phonetic: "San-du-qa", script: "ܣܢܕܘܩܐ", categories: ["adjective"] },

  { word: "Qarora", translation: "Kettle", phonetic: "Qa-ro-ra", script: "ܩܪܘܪܐ", categories: ["adjective"] },

  { word: "Piala", translation: "Bowl", phonetic: "Pia-la", script: "ܦܝܠܐ", categories: ["adjective"] },

  { word: "Tannura", translation: "Oven", phonetic: "Tan-nu-ra", script: "ܬܢܘܪܐ", categories: ["adjective"] },

  { word: "Maqliya", translation: "Frying Pan", phonetic: "Maq-li-ya", script: "ܡܩܠܝܐ", categories: ["adjective"] },

  { word: "Zangīla", translation: "Basket", phonetic: "Zan-gī-la", script: "ܙܢܓܝܠܐ", categories: ["adjective"] },

  { word: "Ṭasla", translation: "Tray", phonetic: "Ṭas-la", script: "ܛܣܠܐ", categories: ["adjective"] },

  { word: "Qadḥa", translation: "Pitcher", phonetic: "Qad-ḥa", script: "ܩܕܚܐ", categories: ["adjective"] },

  { word: "Maḥbašta", translation: "Broom", phonetic: "Maḥ-baš-ta", script: "ܡܚܒܫܬܐ", categories: ["adjective"] },

  { word: "Mapuḥta", translation: "Fan", phonetic: "Ma-puḥ-ta", script: "ܡܦܘܚܬܐ", categories: ["adjective"] },

  { word: "Marpita", translation: "Blanket", phonetic: "Mar-pi-ta", script: "ܡܪܦܝܬܐ", categories: ["adjective"] },

  { word: "Bēstha", translation: "Pillow", phonetic: "Bēs-tha", script: "ܒܝܣܬܐ", categories: ["adjective"] },

  { word: "Simlā", translation: "Ladder", phonetic: "Sim-lā", script: "ܣܝܡܠܐ", categories: ["adjective"] },

  { word: "Gāra", translation: "Roof", phonetic: "Gā-ra", script: "ܓܪܐ", categories: ["noun"] },

  { word: "Daraga", translation: "Stairs", phonetic: "Da-ra-ga", script: "ܕܪܓܐ", categories: ["adjective"] },


  // More Verbs
  { word: "Ḥli", translation: "To Wash", phonetic: "Ḥli", script: "ܚܠܝ", categories: ["verb"] },

  { word: "Tbi", translation: "To Cook", phonetic: "Tbi", script: "ܛܒܝ", categories: ["verb"] },

  { word: "Qli", translation: "To Fry", phonetic: "Qli", script: "ܩܠܝ", categories: ["verb"] },

  { word: "Blē", translation: "To Mix/Stir", phonetic: "Blē", script: "ܒܠܝ", categories: ["verb"] },

  { word: "Paš", translation: "To Stay/Remain", phonetic: "Paš", script: "ܦܫ", categories: ["verb"] },

  { word: "Npil", translation: "To Fall", phonetic: "Npil", script: "ܢܦܠ", categories: ["verb"] },

  { word: "Nḥit", translation: "To Descend/Go down", phonetic: "Nḥit", script: "ܢܚܬ", categories: ["verb"] },

  { word: "Sliq", translation: "To Ascend/Go up", phonetic: "Sliq", script: "ܣܠܩ", categories: ["verb"] },

  { word: "Pniā", translation: "To Turn", phonetic: "Pni-ā", script: "ܦܢܝܐ", categories: ["verb"] },

  { word: "Gdil", translation: "To Grow", phonetic: "Gdil", script: "ܓܕܠ", categories: ["verb"] },

  { word: "Qtil", translation: "To Kill", phonetic: "Qtil", script: "ܩܛܠ", categories: ["verb"] },

  { word: "Ḥyi", translation: "To Live", phonetic: "Ḥyi", script: "ܚܝܝ", categories: ["verb"] },

  { word: "Myi", translation: "To Die", phonetic: "Myi", script: "ܡܝܬ", categories: ["verb"] },

  { word: "Tli", translation: "To Hang", phonetic: "Tli", script: "ܬܠܝ", categories: ["verb"] },

  { word: "Bni", translation: "To Build", phonetic: "Bni", script: "ܒܢܝ", categories: ["verb"] },

  { word: "Ḥrib", translation: "To Destroy", phonetic: "Ḥrib", script: "ܚܪܒ", categories: ["verb"] },

  { word: "Pli", translation: "To Work/Plow", phonetic: "Pli", script: "ܦܠܚ", categories: ["verb"] },

  { word: "Zri", translation: "To Plant/Sow", phonetic: "Zri", script: "ܙܪܥ", categories: ["verb"] },

  { word: "Ḥṣid", translation: "To Harvest", phonetic: "Ḥṣid", script: "ܚܨܕ", categories: ["verb"] },

  { word: "Nši", translation: "To Forget", phonetic: "Nši", script: "ܢܫܝ", categories: ["verb"] },

  { word: "Dkhir", translation: "To Remember", phonetic: "Dkhir", script: "ܕܟܪ", categories: ["verb"] },

  { word: "Ḥšib", translation: "To Think", phonetic: "Ḥšib", script: "ܚܫܒ", categories: ["verb"] },

  { word: "Mlil", translation: "To Speak/Talk", phonetic: "Mlil", script: "ܡܠܠ", categories: ["verb"] },

  { word: "Šqi", translation: "To Be Silent", phonetic: "Šqi", script: "ܫܩܝ", categories: ["verb"] },

  { word: "Q'ā", translation: "To Cry/Shout", phonetic: "Q'ā", script: "ܩܥܐ", categories: ["verb"] },

  { word: "Zmēr", translation: "To Sing", phonetic: "Zmēr", script: "ܙܡܪ", categories: ["verb"] },

  { word: "Rqiḏ", translation: "To Dance", phonetic: "Rqi-ḏ", script: "ܪܩܕ", categories: ["verb"] },

  { word: "Ylib", translation: "To Study/Learn", phonetic: "Ylib", script: "ܝܠܦ", categories: ["verb"] },

  { word: "Qlē", translation: "To Teach", phonetic: "Qlē", script: "ܩܠܐ", categories: ["verb"] },

  { word: "Sbi", translation: "To Satisfy/Be full", phonetic: "Sbi", script: "ܣܒܥ", categories: ["verb"] },

  { word: "Kpin", translation: "To Be hungry", phonetic: "Kpin", script: "ܟܦܢ", categories: ["verb"] },

  { word: "Ṣhi", translation: "To Be thirsty", phonetic: "Ṣhi", script: "ܨܗܝ", categories: ["verb"] },

  { word: "Lbiš", translation: "To Wear/Dress", phonetic: "Lbiš", script: "ܠܒܫ", categories: ["verb"] },

  { word: "Šliḥ", translation: "To Undress", phonetic: "Šliḥ", script: "ܫܠܚ", categories: ["verb"] },

  { word: "Rkiv", translation: "To Ride", phonetic: "Rkiv", script: "ܪܟܒ", categories: ["verb"] },

  { word: "Pqiḏ", translation: "To Order/Command", phonetic: "Pqi-ḏ", script: "ܦܩܕ", categories: ["verb"] },

  { word: "Šmi", translation: "To Obey", phonetic: "Šmi", script: "ܫܡܥ", categories: ["verb"] },

  { word: "Sni", translation: "To Hate", phonetic: "Sni", script: "ܣܢܐ", categories: ["verb"] },

  { word: "Ḥib", translation: "To Love", phonetic: "Ḥib", script: "ܚܒ", categories: ["verb"] },

  { word: "Nši", translation: "To Kiss", phonetic: "Nši", script: "ܢܫܩ", categories: ["verb"] },

  { word: "Ḥbiq", translation: "To Hug/Embrace", phonetic: "Ḥbiq", script: "ܚܒܩ", categories: ["verb"] },


  // More Animals
  { word: "Para", translation: "Cow", phonetic: "Pa-ra", script: "ܦܪܐ", categories: ["adjective"] },

  { word: "Khanzira", translation: "Pig", phonetic: "Khan-zi-ra", script: "ܚܢܙܝܪܐ", categories: ["adjective"] },

  { word: "Dabba", translation: "Bear", phonetic: "Dab-ba", script: "ܕܒܐ", categories: ["adjective"] },

  { word: "Dība", translation: "Wolf", phonetic: "Dī-ba", script: "ܕܝܒܐ", categories: ["adjective"] },

  { word: "Talpa", translation: "Fox", phonetic: "Tal-pa", script: "ܬܠܦܐ", categories: ["adjective"] },

  { word: "Arnava", translation: "Rabbit", phonetic: "Ar-na-va", script: "ܐܪܢܒܐ", categories: ["adjective"] },

  { word: "Pāra", translation: "Mouse/Rat", phonetic: "Pā-ra", script: "ܦܪܐ", categories: ["adjective"] },

  { word: "Namla", translation: "Ant", phonetic: "Nam-la", script: "ܢܡܠܐ", categories: ["adjective"] },

  { word: "Dbōrta", translation: "Bee", phonetic: "Dbōr-ta", script: "ܕܒܘܪܬܐ", categories: ["adjective"] },

  { word: "Ṭayra", translation: "Bird", phonetic: "Ṭay-ra", script: "ܛܝܪܐ", categories: ["adjective"] },

  { word: "Nišra", translation: "Eagle", phonetic: "Niš-ra", script: "ܢܫܪܐ", categories: ["adjective"] },

  { word: "Tarnagōlta", translation: "Rooster/Hen", phonetic: "Tar-na-gōl-ta", script: "ܬܪܢܓܘܠܬܐ", categories: ["adjective"] },

  { word: "Barōza", translation: "Duck", phonetic: "Ba-rō-za", script: "ܒܪܘܙܐ", categories: ["adjective"] },

  { word: "Wazza", translation: "Goose", phonetic: "Waz-za", script: "ܘܙܐ", categories: ["adjective"] },

  { word: "Yōna", translation: "Dove/Pigeon", phonetic: "Yō-na", script: "ܝܘܢܐ", categories: ["adjective"] },

  { word: "Ḥiwya", translation: "Snake/Serpent", phonetic: "Ḥiw-ya", script: "ܚܘܝܐ", categories: ["adjective"] },

  { word: "Kurpada", translation: "Frog", phonetic: "Kur-pa-da", script: "ܟܘܪܦܕܐ", categories: ["adjective"] },

  { word: "Šōna", translation: "Lizard", phonetic: "Šō-na", script: "ܫܘܢܐ", categories: ["adjective"] },

  { word: "Parpāša", translation: "Butterfly", phonetic: "Par-pā-ša", script: "ܦܪܦܫܐ", categories: ["adjective"] },

  { word: "Dadūna", translation: "Fly", phonetic: "Da-dū-na", script: "ܕܕܘܢܐ", categories: ["adjective"] },

  { word: "Qarda", translation: "Mosquito", phonetic: "Qar-da", script: "ܩܪܕܐ", categories: ["adjective"] },

  { word: "Gamal", translation: "Camel", phonetic: "Ga-mal", script: "ܓܡܠ", categories: ["adjective"] },

  { word: "Pīla", translation: "Elephant", phonetic: "Pī-la", script: "ܦܝܠܐ", categories: ["adjective"] },

  { word: "Qōpa", translation: "Monkey", phonetic: "Qō-pa", script: "ܩܘܦܐ", categories: ["adjective"] },


  // More Nature Words
  { word: "Šmaya", translation: "Sky/Heaven", phonetic: "Šma-ya", script: "ܫܡܝܐ", categories: ["nature"] },

  { word: "Shuna", translation: "Stone/Rock", phonetic: "Shu-na", script: "ܫܘܢܐ", categories: ["nature"] },

  { word: "Ṭīna", translation: "Mud/Clay", phonetic: "Ṭī-na", script: "ܛܝܢܐ", categories: ["adjective"] },

  { word: "Mayā", translation: "Water (plural)", phonetic: "Ma-yā", script: "ܡܝܐ", categories: ["nature"] },

  { word: "Rāma", translation: "Thunder", phonetic: "Rā-ma", script: "ܪܥܡܐ", categories: ["nature"] },

  { word: "Barqa", translation: "Lightning", phonetic: "Bar-qa", script: "ܒܪܩܐ", categories: ["nature"] },

  { word: "Qešta", translation: "Rainbow", phonetic: "Qeš-ta", script: "ܩܫܬܐ", categories: ["nature"] },

  { word: "Brē", translation: "Desert", phonetic: "Brē", script: "ܒܪܐ", categories: ["adjective"] },

  { word: "Midbrā", translation: "Wilderness", phonetic: "Mid-brā", script: "ܡܕܒܪܐ", categories: ["adjective"] },

  { word: "Garra", translation: "Cave", phonetic: "Gar-ra", script: "ܓܪܐ", categories: ["adjective"] },

  { word: "Dašta", translation: "Plain/Field", phonetic: "Daš-ta", script: "ܕܫܬܐ", categories: ["adjective"] },

  { word: "Gāzarta", translation: "Island", phonetic: "Gā-zar-ta", script: "ܓܙܪܬܐ", categories: ["adjective"] },

  { word: "Qešā", translation: "Forest/Woods", phonetic: "Qe-šā", script: "ܩܫܐ", categories: ["adjective"] },

  { word: "Rē'uta", translation: "Pasture", phonetic: "Rē-'u-ta", script: "ܪܥܘܬܐ", categories: ["adjective"] },

  { word: "Yabal", translation: "Hill", phonetic: "Ya-bal", script: "ܝܒܠ", categories: ["adjective"] },

  { word: "Gōba", translation: "Valley", phonetic: "Gō-ba", script: "ܓܘܒܐ", categories: ["adjective"] },


  // More Body Parts
  { word: "Gaba", translation: "Shoulder", phonetic: "Ga-ba", script: "ܓܒܐ", categories: ["body"] },

  { word: "Khada", translation: "Breast/Chest", phonetic: "Kha-da", script: "ܚܕܐ", categories: ["body"] },

  { word: "Ṣilā", translation: "Rib", phonetic: "Ṣi-lā", script: "ܨܠܥܐ", categories: ["adjective"] },

  { word: "Kasā", translation: "Belly/Abdomen", phonetic: "Ka-sā", script: "ܟܣܐ", categories: ["adjective"] },

  { word: "Ḥaṣā", translation: "Waist/Lower back", phonetic: "Ḥa-ṣā", script: "ܚܨܐ", categories: ["adjective"] },

  { word: "Pakhda", translation: "Thigh", phonetic: "Pakh-da", script: "ܦܟܕܐ", categories: ["adjective"] },

  { word: "Šāqa", translation: "Leg", phonetic: "Šā-qa", script: "ܫܩܐ", categories: ["body"] },

  { word: "Aqla", translation: "Ankle", phonetic: "Aq-la", script: "ܥܩܠܐ", categories: ["adjective"] },

  { word: "Ṣiv'a", translation: "Toe", phonetic: "Ṣiv-'a", script: "ܨܒܥܐ", categories: ["body"] },

  { word: "Ṭipra", translation: "Nail/Fingernail", phonetic: "Ṭip-ra", script: "ܛܦܪܐ", categories: ["body"] },

  { word: "Karsa", translation: "Bone", phonetic: "Kar-sa", script: "ܟܪܣܐ", categories: ["adjective"] },

  { word: "Dma", translation: "Blood", phonetic: "Dma", script: "ܕܡܐ", categories: ["adjective"] },

  { word: "Našma", translation: "Breath/Soul", phonetic: "Naš-ma", script: "ܢܫܡܐ", categories: ["adjective"] },

  { word: "Napša", translation: "Soul/Life", phonetic: "Nap-ša", script: "ܢܦܫܐ", categories: ["adjective"] },

  { word: "Rēha", translation: "Smell/Scent", phonetic: "Rē-ha", script: "ܪܝܚܐ", categories: ["adjective"] },

  { word: "Ṭa'ma", translation: "Taste", phonetic: "Ṭa-'ma", script: "ܛܥܡܐ", categories: ["adjective"] },

  { word: "Qāla", translation: "Voice", phonetic: "Qā-la", script: "ܩܠܐ", categories: ["adjective"] },

  { word: "Dmē", translation: "Tears", phonetic: "Dmē", script: "ܕܡܥܐ", categories: ["adjective"] },

  { word: "Rukha", translation: "Saliva/Spit", phonetic: "Ru-kha", script: "ܪܘܟܐ", categories: ["adjective"] },

  { word: "Šaptha", translation: "Lip", phonetic: "Šap-tha", script: "ܫܦܬܐ", categories: ["adjective"] },

  { word: "Gavīna", translation: "Eyebrow", phonetic: "Ga-vī-na", script: "ܓܒܝܢܐ", categories: ["body"] },

  { word: "Šep'a", translation: "Eyelash", phonetic: "Šep-'a", script: "ܫܦܥܐ", categories: ["body"] },

  { word: "Daqna", translation: "Beard", phonetic: "Daq-na", script: "ܕܩܢܐ", categories: ["body"] },

  { word: "Sbarta", translation: "Mustache", phonetic: "Sbar-ta", script: "ܣܒܪܬܐ", categories: ["adjective"] },

  { word: "Qādla", translation: "Neck", phonetic: "Qād-la", script: "ܩܕܠܐ", categories: ["body"] },

  { word: "Gargartha", translation: "Throat", phonetic: "Gar-gar-tha", script: "ܓܪܓܪܬܐ", categories: ["adjective"] },


  // More Clothing
  { word: "Nakhta", translation: "Dress", phonetic: "Nakh-ta", script: "ܢܚܬܐ", categories: ["adjective"] },

  { word: "Ṭaylasa", translation: "Veil/Scarf", phonetic: "Ṭay-la-sa", script: "ܛܝܠܣܐ", categories: ["adjective"] },

  { word: "Zunara", translation: "Belt", phonetic: "Zu-na-ra", script: "ܙܢܪܐ", categories: ["adjective"] },

  { word: "Sarwāla", translation: "Trousers", phonetic: "Sar-wā-la", script: "ܣܪܘܠܐ", categories: ["adjective"] },

  { word: "Quptha", translation: "Coat", phonetic: "Qup-tha", script: "ܩܘܦܬܐ", categories: ["adjective"] },

  { word: "Jubba", translation: "Robe", phonetic: "Jub-ba", script: "ܓܘܒܐ", categories: ["adjective"] },

  { word: "Idara", translation: "Sleeve", phonetic: "I-da-ra", script: "ܐܝܕܪܐ", categories: ["adjective"] },

  { word: "Gēba", translation: "Pocket", phonetic: "Gē-ba", script: "ܓܝܒܐ", categories: ["adjective"] },

  { word: "Qnāta", translation: "Button", phonetic: "Qnā-ta", script: "ܩܢܬܐ", categories: ["adjective"] },

  { word: "Khayṭa", translation: "Thread", phonetic: "Khay-ṭa", script: "ܚܝܛܐ", categories: ["adjective"] },

  { word: "Makhṭa", translation: "Needle", phonetic: "Makh-ṭa", script: "ܡܟܬܐ", categories: ["adjective"] },

  { word: "Qaṣa", translation: "Scissors", phonetic: "Qa-ṣa", script: "ܩܨܐ", categories: ["adjective"] },


  // Pronouns & Grammar
  { word: "Ana", translation: "I", phonetic: "A-na", script: "ܐܢܐ", categories: ["adjective"] },

  { word: "At", translation: "You (masc. sing.)", phonetic: "At", script: "ܐܢܬ", categories: ["adjective"] },

  { word: "Ati", translation: "You (fem. sing.)", phonetic: "A-ti", script: "ܐܢܬܝ", categories: ["adjective"] },

  { word: "Awa", translation: "He", phonetic: "A-wa", script: "ܗܘ", categories: ["adjective"] },

  { word: "Aya", translation: "She", phonetic: "A-ya", script: "ܗܝ", categories: ["adjective"] },

  { word: "Akhnan", translation: "We", phonetic: "Akh-nan", script: "ܐܚܢܢ", categories: ["adjective"] },

  { word: "Atwon", translation: "You (masc. pl.)", phonetic: "At-won", script: "ܐܢܬܘܢ", categories: ["adjective"] },

  { word: "Atēn", translation: "You (fem. pl.)", phonetic: "A-tēn", script: "ܐܢܬܝܢ", categories: ["adjective"] },

  { word: "Anē", translation: "They (masc.)", phonetic: "A-nē", script: "ܐܢܝ", categories: ["adjective"] },

  { word: "Anēn", translation: "They (fem.)", phonetic: "A-nēn", script: "ܐܢܝܢ", categories: ["adjective"] },


  // More Common Words
  { word: "Kul", translation: "All/Every", phonetic: "Kul", script: "ܟܠ", categories: ["adjective"] },

  { word: "Kūlē", translation: "Everyone", phonetic: "Kū-lē", script: "ܟܠܗ", categories: ["adjective"] },

  { word: "Meddem", translation: "Something", phonetic: "Med-dem", script: "ܡܕܡ", categories: ["adjective"] },

  { word: "La Khit", translation: "Nothing", phonetic: "La Khit", script: "ܠܐ ܚܬ", categories: ["adjective"] },

  { word: "Haḏā", translation: "This (masc.)", phonetic: "Ha-ḏā", script: "ܗܕܐ", categories: ["adjective"] },

  { word: "Haḏē", translation: "This (fem.)", phonetic: "Ha-ḏē", script: "ܗܕܐ", categories: ["adjective"] },

  { word: "Haw", translation: "That (masc.)", phonetic: "Haw", script: "ܗܘ", categories: ["adjective"] },

  { word: "Hayē", translation: "That (fem.)", phonetic: "Ha-yē", script: "ܗܝ", categories: ["adjective"] },

  { word: "Hālen", translation: "These", phonetic: "Hā-len", script: "ܗܠܝܢ", categories: ["adjective"] },

  { word: "Hānōn", translation: "Those", phonetic: "Hā-nōn", script: "ܗܢܘܢ", categories: ["adjective"] },

  { word: "Zō'a", translation: "Few/Little", phonetic: "Zō-'a", script: "ܙܥܘܪܐ", categories: ["adjective"] },

  { word: "Šapirā", translation: "Beautiful/Good", phonetic: "Ša-pi-rā", script: "ܫܦܝܪܐ", categories: ["adjective"] },

  { word: "Bīša", translation: "Bad/Evil", phonetic: "Bī-ša", script: "ܒܝܫܐ", categories: ["adjective"] },

  { word: "Ḥadṯa", translation: "New", phonetic: "Ḥad-ṯa", script: "ܚܕܬܐ", categories: ["adjective"] },

  { word: "'Atiqa", translation: "Old/Ancient", phonetic: "'A-ti-qa", script: "ܥܬܝܩܐ", categories: ["adjective"] },

  { word: "Yaqurā", translation: "Precious/Heavy", phonetic: "Ya-qu-rā", script: "ܝܩܘܪܐ", categories: ["adjective"] },

  { word: "Qalīlā", translation: "Light/Easy", phonetic: "Qa-lī-lā", script: "ܩܠܝܠܐ", categories: ["adjective"] },

  { word: "Khwārā", translation: "White/Pure", phonetic: "Khwā-rā", script: "ܚܘܪܐ", categories: ["adjective"] },

  { word: "Ṭuvrā", translation: "Clean/Pure", phonetic: "Ṭuv-rā", script: "ܛܘܒܪܐ", categories: ["adjective"] },

  { word: "Ṭanpā", translation: "Dirty/Unclean", phonetic: "Ṭan-pā", script: "ܛܢܦܐ", categories: ["adjective"] },

  { word: "Halyā", translation: "Sweet", phonetic: "Hal-yā", script: "ܚܠܝܐ", categories: ["adjective"] },

  { word: "Marirā", translation: "Bitter", phonetic: "Ma-ri-rā", script: "ܡܪܝܪܐ", categories: ["adjective"] },

  { word: "Melyā", translation: "Full", phonetic: "Mel-yā", script: "ܡܠܝܐ", categories: ["adjective"] },

  { word: "Sriqa", translation: "Empty", phonetic: "Sri-qa", script: "ܣܪܝܩܐ", categories: ["adjective"] },


  // More Phrases
  { word: "Ana Itwan", translation: "I am here", phonetic: "A-na It-wan", script: "ܐܢܐ ܐܝܬܘܢ", categories: ["adjective"] },

  { word: "La Yadin ana", translation: "I don't know", phonetic: "La Ya-din a-na", script: "ܠܐ ܝܕܥ ܐܢܐ", categories: ["adjective"] },

  { word: "Yadin ana", translation: "I know", phonetic: "Ya-din a-na", script: "ܝܕܥ ܐܢܐ", categories: ["adjective"] },

  { word: "Ba'en ana", translation: "I want", phonetic: "Ba-'en a-na", script: "ܒܥܐ ܐܢܐ", categories: ["adjective"] },

  { word: "La Ba'en", translation: "I don't want", phonetic: "La Ba-'en", script: "ܠܐ ܒܥܐ", categories: ["adjective"] },

  { word: "Kamen Khit", translation: "One more time", phonetic: "Ka-men Khit", script: "ܟܡܢ ܚܕܐ", categories: ["adjective"] },

  { word: "Min Fadhlokh", translation: "Please (to male)", phonetic: "Min Fadh-lokh", script: "ܡܢ ܦܕܠܘܟ", categories: ["adjective"] },

  { word: "Min Fadhlakh", translation: "Please (to female)", phonetic: "Min Fadh-lakh", script: "ܡܢ ܦܕܠܟ", categories: ["adjective"] },

  { word: "La Marri", translation: "Don't worry", phonetic: "La Mar-ri", script: "ܠܐ ܡܪܝ", categories: ["adjective"] },

  { word: "Kheena", translation: "Slowly", phonetic: "Khee-na", script: "ܟܝܢܐ", categories: ["adjective"] },

  { word: "Šapir", translation: "Well/Good", phonetic: "Ša-pir", script: "ܫܦܝܪ", categories: ["adjective"] },

  { word: "Amin", translation: "Amen/Truly", phonetic: "A-min", script: "ܐܡܝܢ", categories: ["adjective"] },

  { word: "Barikh Mor", translation: "Bless us, Lord", phonetic: "Ba-rikh Mor", script: "ܒܪܝܟ ܡܪܝ", categories: ["adjective"] },


  // More Common Greetings & Phrases
  { word: "Safa", translation: "Morning", phonetic: "Sa-fa", script: "ܨܦܪܐ", categories: ["time"] },

  { word: "Tsafra Taba", translation: "Good morning", phonetic: "Tsaf-ra Ta-ba", script: "ܨܦܪܐ ܛܒܐ", categories: ["greeting"] },

  { word: "Ramsha Taba", translation: "Good evening", phonetic: "Ram-sha Ta-ba", script: "ܪܡܫܐ ܛܒܐ", categories: ["greeting"] },

  { word: "Lele Taba", translation: "Good night", phonetic: "Le-le Ta-ba", script: "ܠܠܝܐ ܛܒܐ", categories: ["greeting"] },

  { word: "Brakhta", translation: "Blessing", phonetic: "Brakh-ta", script: "ܒܪܟܬܐ", categories: ["adjective"] },

  { word: "Khaya Taba", translation: "Long life / Good health", phonetic: "Kha-ya Ta-ba", script: "ܚܝܐ ܛܒܐ", categories: ["adjective"] },

  { word: "Mabrukha", translation: "Congratulations", phonetic: "Mab-ru-kha", script: "ܡܒܪܘܟܐ", categories: ["phrase"] },

  { word: "Eda Breekha", translation: "Merry Christmas", phonetic: "E-da Bree-kha", script: "ܥܐܕܐ ܒܪܝܟܐ", categories: ["adjective"] },

  { word: "Shatta Breekha", translation: "Happy New Year", phonetic: "Shat-ta Bree-kha", script: "ܫܢܬܐ ܒܪܝܟܬܐ", categories: ["time"] },

  { word: "Shata d'Khaye", translation: "Year of life (birthday wish)", phonetic: "Sha-ta d-Kha-ye", script: "ܫܢܬܐ ܕܚܝܐ", categories: ["time"] },

  { word: "Khat Bokh", translation: "I love you (to male)", phonetic: "Khat Bo-kh", script: "ܟܬ ܒܘܟ", categories: ["adjective"] },

  { word: "Khat Bakh", translation: "I love you (to female)", phonetic: "Khat Ba-kh", script: "ܟܬ ܒܟ", categories: ["adjective"] },

  { word: "Khuba", translation: "Love", phonetic: "Khu-ba", script: "ܚܘܒܐ", categories: ["adjective"] },

  { word: "Khwab", translation: "Friend (male)", phonetic: "Khwab", script: "ܚܒܪܐ", categories: ["adjective"] },

  { word: "Khwarta", translation: "Friend (female)", phonetic: "Khwar-ta", script: "ܚܒܪܬܐ", categories: ["adjective"] },


  // More Verbs & Actions
  { word: "Ate", translation: "Come / Coming", phonetic: "A-te", script: "ܐܬܐ", categories: ["adjective"] },

  { word: "Yatib", translation: "Sit / Sitting", phonetic: "Ya-tib", script: "ܝܬܒ", categories: ["adjective"] },

  { word: "Qaym", translation: "Stand / Standing", phonetic: "Qaym", script: "ܩܝܡ", categories: ["adjective"] },

  { word: "Rakhitz", translation: "Run / Running", phonetic: "Ra-khitz", script: "ܪܚܨ", categories: ["adjective"] },

  { word: "Mhalikh", translation: "Walk / Walking", phonetic: "Mha-likh", script: "ܡܗܠܟ", categories: ["adjective"] },

  { word: "Pateakh", translation: "Open / Opening", phonetic: "Pa-te-akh", script: "ܦܬܚ", categories: ["adjective"] },

  { word: "Sakir", translation: "Close / Closing", phonetic: "Sa-kir", script: "ܣܟܪ", categories: ["adjective"] },

  { word: "Shami", translation: "Hear / Listening", phonetic: "Sha-mi", script: "ܫܡܥ", categories: ["adjective"] },

  { word: "Amir", translation: "Say / Saying", phonetic: "A-mir", script: "ܐܡܪ", categories: ["adjective"] },

  { word: "Mmalil", translation: "Speak / Speaking", phonetic: "Mma-lil", script: "ܡܠܠ", categories: ["adjective"] },

  { word: "Khatib", translation: "Write / Writing", phonetic: "Kha-tib", script: "ܟܬܒ", categories: ["adjective"] },

  { word: "Yalip", translation: "Learn / Learning", phonetic: "Ya-lip", script: "ܝܠܦ", categories: ["adjective"] },

  { word: "Malip", translation: "Teach / Teaching", phonetic: "Ma-lip", script: "ܡܠܦ", categories: ["adjective"] },

  { word: "Shayil", translation: "Ask / Asking", phonetic: "Sha-yil", script: "ܫܐܠ", categories: ["adjective"] },

  { word: "Mkhapir", translation: "Search / Searching", phonetic: "Mkha-pir", script: "ܡܚܦܪ", categories: ["nature"] },

  { word: "Yatwa", translation: "Gave / Give", phonetic: "Yat-wa", script: "ܝܗܒ", categories: ["adjective"] },

  { word: "Saqil", translation: "Take / Taking", phonetic: "Sa-qil", script: "ܫܩܠ", categories: ["adjective"] },

  { word: "Shadir", translation: "Send / Sending", phonetic: "Sha-dir", script: "ܫܕܪ", categories: ["adjective"] },

  { word: "Mbasim", translation: "Fix / Fixing", phonetic: "Mba-sim", script: "ܡܒܣܡ", categories: ["adjective"] },

  { word: "Khawib", translation: "Think / Thinking", phonetic: "Kha-wib", script: "ܚܫܒ", categories: ["adjective"] },

  { word: "Bayi", translation: "Want / Wanting", phonetic: "Ba-yi", script: "ܒܥܐ", categories: ["adjective"] },

  { word: "Mkhayil", translation: "Can / Able to", phonetic: "Mkha-yil", script: "ܡܟܝܠ", categories: ["adjective"] },

  { word: "Msalli", translation: "Pray / Praying", phonetic: "Msal-li", script: "ܡܨܠܐ", categories: ["adjective"] },

  { word: "Mbarikh", translation: "Bless / Blessing", phonetic: "Mba-rikh", script: "ܡܒܪܟ", categories: ["adjective"] },

  { word: "Mshadir", translation: "Help / Helping", phonetic: "Msha-dir", script: "ܡܫܕܪ", categories: ["phrase"] },

  { word: "Mqayim", translation: "Stay / Staying", phonetic: "Mqa-yim", script: "ܡܩܝܡ", categories: ["adjective"] },

  { word: "Shapil", translation: "Pull / Pulling", phonetic: "Sha-pil", script: "ܫܦܠ", categories: ["adjective"] },

  { word: "Daqi", translation: "Push / Pushing", phonetic: "Da-qi", script: "ܕܩܐ", categories: ["adjective"] },

  { word: "Tali", translation: "Hang / Hanging", phonetic: "Ta-li", script: "ܬܠܐ", categories: ["adjective"] },

  { word: "Nakhit", translation: "Fall / Falling", phonetic: "Na-khit", script: "ܢܚܬ", categories: ["adjective"] },


  // Household & Daily Life
  { word: "Tara", translation: "Door", phonetic: "Ta-ra", script: "ܬܪܥܐ", categories: ["noun"] },

  { word: "Kawta", translation: "Window", phonetic: "Kaw-ta", script: "ܟܘܬܐ", categories: ["nature"] },

  { word: "Shqapa", translation: "Ceiling", phonetic: "Shqa-pa", script: "ܫܩܦܐ", categories: ["noun"] },

  { word: "Araa", translation: "Floor/Ground", phonetic: "Ar-aa", script: "ܐܪܥܐ", categories: ["noun"] },

  { word: "Gayra", translation: "Wall", phonetic: "Gay-ra", script: "ܓܕܪܐ", categories: ["noun"] },

  { word: "Nuhra", translation: "Light/Lamp", phonetic: "Nuh-ra", script: "ܢܘܗܪܐ", categories: ["adjective"] },

  { word: "Madkhna", translation: "Kitchen", phonetic: "Mad-khna", script: "ܡܕܟܢܐ", categories: ["noun"] },

  { word: "Khawshekha", translation: "Bathroom", phonetic: "Khaw-she-kha", script: "ܚܘܫܟܐ", categories: ["noun"] },

  { word: "Madrasha", translation: "Bedroom", phonetic: "Mad-ra-sha", script: "ܡܕܪܫܐ", categories: ["noun"] },

  { word: "Gardina", translation: "Garden", phonetic: "Gar-di-na", script: "ܓܪܕܝܢܐ", categories: ["noun"] },

  { word: "Saqpa", translation: "Roof", phonetic: "Saq-pa", script: "ܣܩܦܐ", categories: ["noun"] },

  { word: "Daraja", translation: "Stairs", phonetic: "Da-ra-ja", script: "ܕܪܓܐ", categories: ["adjective"] },

  { word: "Tanura", translation: "Oven", phonetic: "Ta-nu-ra", script: "ܬܢܘܪܐ", categories: ["adjective"] },

  { word: "Makhla", translation: "Food/Meal", phonetic: "Makh-la", script: "ܡܐܟܠܐ", categories: ["adjective"] },

  { word: "Shaqta", translation: "Drink", phonetic: "Shaq-ta", script: "ܫܩܝܬܐ", categories: ["adjective"] },

  { word: "Sayna", translation: "Plate", phonetic: "Say-na", script: "ܨܝܢܐ", categories: ["home"] },

  { word: "Kasa", translation: "Cup/Glass", phonetic: "Ka-sa", script: "ܟܣܐ", categories: ["home"] },

  { word: "Purshana", translation: "Spoon", phonetic: "Pur-sha-na", script: "ܦܘܪܫܢܐ", categories: ["home"] },

  { word: "Qawra", translation: "Fork", phonetic: "Qaw-ra", script: "ܩܘܪܐ", categories: ["home"] },

  { word: "Tarpisa", translation: "Table", phonetic: "Tar-pi-sa", script: "ܛܪܦܝܣܐ", categories: ["adjective"] },

  { word: "Sapla", translation: "Bowl", phonetic: "Sap-la", script: "ܣܦܠܐ", categories: ["adjective"] },

  { word: "Tanjara", translation: "Pot", phonetic: "Tan-ja-ra", script: "ܬܢܓܪܐ", categories: ["adjective"] },

  { word: "Nakhtana", translation: "Towel", phonetic: "Nakh-ta-na", script: "ܢܟܬܢܐ", categories: ["adjective"] },

  { word: "Sabuna", translation: "Soap", phonetic: "Sa-bu-na", script: "ܣܒܘܢܐ", categories: ["adjective"] },

  { word: "Mushkha", translation: "Oil", phonetic: "Mush-kha", script: "ܡܫܚܐ", categories: ["adjective"] },

  { word: "Milkha", translation: "Salt", phonetic: "Mil-kha", script: "ܡܠܚܐ", categories: ["adjective"] },

  { word: "Dubsha", translation: "Honey", phonetic: "Dub-sha", script: "ܕܒܫܐ", categories: ["adjective"] },

  { word: "Kheshla", translation: "Fruit", phonetic: "Khesh-la", script: "ܚܫܠܐ", categories: ["adjective"] },

  { word: "Yarqa", translation: "Vegetable", phonetic: "Yar-qa", script: "ܝܪܩܐ", categories: ["adjective"] },


  // More Time Expressions
  { word: "Yawma", translation: "Day", phonetic: "Yaw-ma", script: "ܝܘܡܐ", categories: ["adjective"] },

  { word: "Lele", translation: "Night", phonetic: "Le-le", script: "ܠܠܝܐ", categories: ["adjective"] },

  { word: "Shata", translation: "Year", phonetic: "Sha-ta", script: "ܫܢܬܐ", categories: ["time"] },

  { word: "Yarha", translation: "Month", phonetic: "Yar-ha", script: "ܝܪܚܐ", categories: ["time"] },

  { word: "Sha'ta", translation: "Hour", phonetic: "Sha'-ta", script: "ܫܥܬܐ", categories: ["adjective"] },

  { word: "Regha", translation: "Minute/Moment", phonetic: "Reg-ha", script: "ܪܓܥܐ", categories: ["time"] },

  { word: "Hashâ", translation: "Now", phonetic: "Ha-shâ", script: "ܗܫܐ", categories: ["time"] },

  { word: "Qadam", translation: "Before/Earlier", phonetic: "Qa-dam", script: "ܩܕܡ", categories: ["time"] },

  { word: "Yawma Akhrin", translation: "Tomorrow", phonetic: "Yaw-ma Akh-rin", script: "ܝܘܡܐ ܐܚܪܝܢ", categories: ["adjective"] },

  { word: "Etmali", translation: "Yesterday", phonetic: "Et-ma-li", script: "ܐܬܡܠܝ", categories: ["adjective"] },

  { word: "Awdana", translation: "Always", phonetic: "Aw-da-na", script: "ܐܘܕܢܐ", categories: ["adjective"] },

  { word: "Mitumt", translation: "Never", phonetic: "Mi-tumt", script: "ܡܬܘܡܬ", categories: ["adjective"] },

  { word: "Qalil", translation: "Sometimes", phonetic: "Qa-lil", script: "ܩܠܝܠ", categories: ["adjective"] },


  // More Numbers
  { word: "Tlathsar", translation: "Thirteen", phonetic: "Tlath-sar", script: "ܬܠܬܥܣܪ", categories: ["number"] },

  { word: "Arbassar", translation: "Fourteen", phonetic: "Arba-ssar", script: "ܐܪܒܥܣܪ", categories: ["number"] },

  { word: "Khamshassar", translation: "Fifteen", phonetic: "Khamsha-ssar", script: "ܚܡܫܥܣܪ", categories: ["number"] },

  { word: "Eshtassar", translation: "Sixteen", phonetic: "Eshta-ssar", script: "ܫܬܥܣܪ", categories: ["number"] },

  { word: "Shwassar", translation: "Seventeen", phonetic: "Shwa-ssar", script: "ܫܒܥܣܪ", categories: ["number"] },

  { word: "Tmanyassar", translation: "Eighteen", phonetic: "Tmanya-ssar", script: "ܬܡܢܝܥܣܪ", categories: ["number"] },

  { word: "Tshassar", translation: "Nineteen", phonetic: "Tsha-ssar", script: "ܬܫܥܣܪ", categories: ["number"] },

  { word: "Tlatin", translation: "Thirty", phonetic: "Tla-tin", script: "ܬܠܬܝܢ", categories: ["number"] },

  { word: "Arbin", translation: "Forty", phonetic: "Ar-bin", script: "ܐܪܒܥܝܢ", categories: ["number"] },

  { word: "Khamshiـn", translation: "Fifty", phonetic: "Khamshi-n", script: "ܚܡܫܝܢ", categories: ["number"] },

  { word: "Eshtin", translation: "Sixty", phonetic: "Esh-tin", script: "ܫܬܝܢ", categories: ["number"] },

  { word: "Shwin", translation: "Seventy", phonetic: "Shwin", script: "ܫܒܥܝܢ", categories: ["number"] },

  { word: "Tmanin", translation: "Eighty", phonetic: "Tma-nin", script: "ܬܡܢܝܢ", categories: ["number"] },

  { word: "Tshin", translation: "Ninety", phonetic: "Tshin", script: "ܬܫܥܝܢ", categories: ["number"] },

  { word: "Ima", translation: "Hundred", phonetic: "I-ma", script: "ܡܐܐ", categories: ["number"] },


  // Weather & Nature
  { word: "Shamsha", translation: "Sun", phonetic: "Sham-sha", script: "ܫܡܫܐ", categories: ["nature"] },

  { word: "Kawkwa", translation: "Star", phonetic: "Kaw-kwa", script: "ܟܘܟܒܐ", categories: ["nature"] },

  { word: "Shmaya", translation: "Sky/Heaven", phonetic: "Shma-ya", script: "ܫܡܝܐ", categories: ["nature"] },

  { word: "Ara", translation: "Earth", phonetic: "A-ra", script: "ܐܪܥܐ", categories: ["nature"] },

  { word: "Mitra", translation: "Rain", phonetic: "Mit-ra", script: "ܡܛܪܐ", categories: ["nature"] },

  { word: "Rukha", translation: "Wind", phonetic: "Ru-kha", script: "ܪܘܚܐ", categories: ["nature"] },

  { word: "Anana", translation: "Cloud", phonetic: "A-na-na", script: "ܥܢܢܐ", categories: ["nature"] },

  { word: "Rama", translation: "Thunder", phonetic: "Ra-ma", script: "ܪܥܡܐ", categories: ["nature"] },

  { word: "Qarta", translation: "Cold", phonetic: "Qar-ta", script: "ܩܪܬܐ", categories: ["adjective"] },

  { word: "Habhaba", translation: "Flower", phonetic: "Hab-ha-ba", script: "ܗܒܗܒܐ", categories: ["nature"] },

  { word: "Yarqa", translation: "Leaf", phonetic: "Yar-qa", script: "ܛܪܦܐ", categories: ["adjective"] },

  { word: "Shwila", translation: "Root", phonetic: "Shwi-la", script: "ܫܪܫܐ", categories: ["adjective"] },

  { word: "Darta", translation: "Garden", phonetic: "Dar-ta", script: "ܕܪܬܐ", categories: ["noun"] },

  { word: "Kippa", translation: "Stone/Rock", phonetic: "Kip-pa", script: "ܟܐܦܐ", categories: ["nature"] },


  // Transportation & Travel
  { word: "Urha", translation: "Road/Way", phonetic: "Ur-ha", script: "ܐܘܪܚܐ", categories: ["adjective"] },

  { word: "Gishra", translation: "Bridge", phonetic: "Gish-ra", script: "ܓܫܪܐ", categories: ["noun"] },

  { word: "Mdinta", translation: "City/Town", phonetic: "Mdin-ta", script: "ܡܕܝܢܬܐ", categories: ["adjective"] },

  { word: "Qrita", translation: "Village", phonetic: "Qri-ta", script: "ܩܪܝܬܐ", categories: ["adjective"] },

  { word: "Makhsana", translation: "Store/Shop", phonetic: "Makh-sa-na", script: "ܡܟܣܢܐ", categories: ["adjective"] },

  { word: "Beth Kaspe", translation: "Bank", phonetic: "Beth Kas-pe", script: "ܒܝܬ ܟܣܦܐ", categories: ["adjective"] },

  { word: "Beth Slota", translation: "Church", phonetic: "Beth Slo-ta", script: "ܒܝܬ ܨܠܘܬܐ", categories: ["adjective"] },

  { word: "Beth Sipre", translation: "Library", phonetic: "Beth Sip-re", script: "ܒܝܬ ܣܦܪܐ", categories: ["adjective"] },

  { word: "Beth Mrisha", translation: "Hospital", phonetic: "Beth Mri-sha", script: "ܒܝܬ ܡܪܥܐ", categories: ["adjective"] },

  { word: "Beth Madrasha", translation: "School", phonetic: "Beth Mad-ra-sha", script: "ܒܝܬ ܡܕܪܫܐ", categories: ["adjective"] },

  { word: "Rakba", translation: "Train", phonetic: "Rak-ba", script: "ܪܟܒܐ", categories: ["adjective"] },

  { word: "Tayarta", translation: "Airplane", phonetic: "Ta-yar-ta", script: "ܛܝܪܬܐ", categories: ["adjective"] },

  { word: "Sipinta", translation: "Boat/Ship", phonetic: "Si-pin-ta", script: "ܣܦܝܢܬܐ", categories: ["adjective"] },

  { word: "Rukhba", translation: "Vehicle", phonetic: "Rukh-ba", script: "ܪܟܘܒܐ", categories: ["adjective"] },

  { word: "Bayka", translation: "Bicycle", phonetic: "Bay-ka", script: "ܒܝܟܐ", categories: ["adjective"] },


  // More Emotions & States
  { word: "Khudta", translation: "Joy/Happiness", phonetic: "Khud-ta", script: "ܚܕܘܬܐ", categories: ["adjective"] },

  { word: "Kriuta", translation: "Sadness/Sorrow", phonetic: "Kriu-ta", script: "ܟܪܝܘܬܐ", categories: ["emotion"] },

  { word: "Dekhla", translation: "Fear", phonetic: "Dekh-la", script: "ܕܚܠܐ", categories: ["adjective"] },

  { word: "Ghuza", translation: "Anger", phonetic: "Ghu-za", script: "ܪܘܓܙܐ", categories: ["adjective"] },

  { word: "Shurkha", translation: "Hope", phonetic: "Shur-kha", script: "ܣܘܟܝܐ", categories: ["adjective"] },

  { word: "Tara", translation: "Peace/Calm", phonetic: "Ta-ra", script: "ܫܠܡܐ", categories: ["adjective"] },

  { word: "Teghmurta", translation: "Surprise", phonetic: "Tegh-mur-ta", script: "ܬܕܡܘܪܬܐ", categories: ["adjective"] },

  { word: "Buhta", translation: "Shame", phonetic: "Buh-ta", script: "ܒܗܬܬܐ", categories: ["adjective"] },

  { word: "Tayruta", translation: "Patience", phonetic: "Tay-ru-ta", script: "ܡܣܝܒܪܢܘܬܐ", categories: ["adjective"] },


  // Additional essential words
  { word: "Khadshaba", translation: "Sunday", phonetic: "Khad-sha-ba", script: "ܚܕܫܒܐ", categories: ["time"] },
  { word: "Trayshaba", translation: "Monday", phonetic: "Tray-sha-ba", script: "ܬܪܝܢܫܒܐ", categories: ["time"] },
  { word: "Tlathashaba", translation: "Tuesday", phonetic: "Tla-tha-sha-ba", script: "ܬܠܬܫܒܐ", categories: ["time"] },
  { word: "Arbashaba", translation: "Wednesday", phonetic: "Ar-ba-sha-ba", script: "ܐܪܒܥܫܒܐ", categories: ["time"] },
  { word: "Khamshashaba", translation: "Thursday", phonetic: "Kham-sha-sha-ba", script: "ܚܡܫܫܒܐ", categories: ["time"] },
  { word: "Arubta", translation: "Friday", phonetic: "A-rub-ta", script: "ܥܪܘܒܬܐ", categories: ["time"] },
  { word: "Sapra tawa", translation: "Good morning", phonetic: "Sap-ra ta-wa", script: "ܨܦܪܐ ܛܒܐ", categories: ["greeting"] },
  { word: "Ramsha tawa", translation: "Good evening", phonetic: "Ram-sha ta-wa", script: "ܪܡܫܐ ܛܒܐ", categories: ["greeting"] },
  { word: "Lelya tawa", translation: "Good night", phonetic: "Lel-ya ta-wa", script: "ܠܠܝܐ ܛܒܐ", categories: ["greeting"] },
  { word: "Khadi khawit", translation: "I'm fine", phonetic: "Kha-di kha-wit", script: "ܚܕܝ ܚܘܝܬ", categories: ["phrase"] },
  { word: "Raba basima", translation: "Very good/Thank you very much", phonetic: "Ra-ba ba-si-ma", script: "ܪܒܐ ܒܣܝܡܐ", categories: ["phrase"] },
  { word: "Layt mushkilta", translation: "No problem", phonetic: "Layt mush-kil-ta", script: "ܠܝܬ ܡܫܟܠܬܐ", categories: ["phrase"] },
  { word: "Khoshakha", translation: "I love you (to male)", phonetic: "Kho-sha-kha", script: "ܚܘܒܟܐ", categories: ["phrase"] },
  { word: "Khoshakh", translation: "I love you (to female)", phonetic: "Kho-shakh", script: "ܚܘܒܟ", categories: ["phrase"] },
  { word: "Khawin", translation: "To show", phonetic: "Kha-win", script: "ܚܘܝ", categories: ["verb"] },
  { word: "Pakhi", translation: "To become", phonetic: "Pa-khi", script: "ܦܟܝ", categories: ["verb"] },
  { word: "Nashiq", translation: "To need", phonetic: "Na-shiq", script: "ܢܫܩ", categories: ["verb"] },
  { word: "Mashkhin", translation: "To be able/can", phonetic: "Mash-khin", script: "ܡܫܟܚ", categories: ["verb"] },
  { word: "Hamzim", translation: "To speak/talk", phonetic: "Ham-zim", script: "ܗܡܙܡ", categories: ["verb"] },
  { word: "Tawa", translation: "Good", phonetic: "Ta-wa", script: "ܛܒܐ", categories: ["adjective"] },
  { word: "Bisha", translation: "Bad/Evil", phonetic: "Bi-sha", script: "ܒܝܫܐ", categories: ["adjective"] },
  { word: "Qaleela", translation: "Little/Few", phonetic: "Qa-lee-la", script: "ܩܠܝܠܐ", categories: ["adjective"] },
  { word: "Khelta", translation: "Sweet", phonetic: "Khel-ta", script: "ܚܠܝܐ", categories: ["adjective"] },
  { word: "Mareera", translation: "Bitter", phonetic: "Ma-ree-ra", script: "ܡܪܝܪܐ", categories: ["adjective"] },
  { word: "Qareera", translation: "Cold", phonetic: "Qa-ree-ra", script: "ܩܪܝܪܐ", categories: ["adjective"] },
  { word: "Shma", translation: "Name", phonetic: "Sh-ma", script: "ܫܡܐ", categories: ["noun"] },
  { word: "Atra", translation: "Country/Place", phonetic: "At-ra", script: "ܐܬܪܐ", categories: ["noun"] },
  { word: "Umtha", translation: "Nation/People", phonetic: "Um-tha", script: "ܐܘܡܬܐ", categories: ["noun"] },
  { word: "Zuza", translation: "Money", phonetic: "Zu-za", script: "ܙܘܙܐ", categories: ["noun"] },
  { word: "Egartha", translation: "Letter", phonetic: "E-gar-tha", script: "ܐܓܪܬܐ", categories: ["noun"] },
  { word: "Miltha", translation: "Word/Thing", phonetic: "Mil-tha", script: "ܡܠܬܐ", categories: ["noun"] },
  { word: "Shuraya", translation: "Beginning", phonetic: "Shu-ra-ya", script: "ܫܘܪܝܐ", categories: ["noun"] },
  { word: "Sopa", translation: "End", phonetic: "So-pa", script: "ܣܘܦܐ", categories: ["noun"] },
  { word: "Khdessar", translation: "Eleven", phonetic: "Khd-es-sar", script: "ܚܕܥܣܪ", categories: ["number"] },
  { word: "Tressar", translation: "Twelve", phonetic: "Tres-sar", script: "ܬܪܥܣܪ", categories: ["number"] },
  { word: "Tlathessar", translation: "Thirteen", phonetic: "Tla-thes-sar", script: "ܬܠܬܥܣܪ", categories: ["number"] },
  { word: "Arb'in", translation: "Forty", phonetic: "Arb-in", script: "ܐܪܒܥܝܢ", categories: ["number"] },
  { word: "Khamšin", translation: "Fifty", phonetic: "Kham-šin", script: "ܚܡܫܝܢ", categories: ["number"] },
  { word: "Aina", translation: "Eye", phonetic: "Ai-na", script: "ܥܝܢܐ", categories: ["body"] },
  { word: "Edna", translation: "Ear", phonetic: "Ed-na", script: "ܐܕܢܐ", categories: ["body"] },
  { word: "Khurṭma", translation: "Nose", phonetic: "Khur-ṭma", script: "ܚܪܛܡܐ", categories: ["body"] },
  { word: "Etsba", translation: "Finger", phonetic: "Ets-ba", script: "ܐܨܒܥܐ", categories: ["body"] },
];
