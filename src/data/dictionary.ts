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
  { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", script: "ܫܠܡܐ", arabic: "مرحبا", categories: ["greeting"] },
  { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", script: "ܫܠܡܐ ܠܘܟ", arabic: "مرحبا", categories: ["greeting"] },
  { word: "Shlamalakh", translation: "Hello (to a female)", phonetic: "Shla-ma-lakh", script: "ܫܠܡܐ ܠܟ", arabic: "مرحبا", categories: ["greeting"] },
  { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", script: "ܒܫܝܢܐ", arabic: "أهلا بك", categories: ["greeting"] },
  { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", script: "ܕܐܟ݂ܝ ܘܬ", arabic: "كيف حالك؟", categories: ["greeting"] },
  
  // Question Words
  { word: "Aykha", translation: "Where", phonetic: "Ay-kha", script: "ܐܝܟܐ", arabic: "أين", categories: ["question"] },
  { word: "Mana", translation: "What", phonetic: "Ma-na", script: "ܡܢܐ", arabic: "ماذا", categories: ["question"] },
  { word: "Aymat", translation: "When", phonetic: "Ay-mat", script: "ܐܝܡܬ", arabic: "متى", categories: ["question"] },
  { word: "Lamana", translation: "Why", phonetic: "La-ma-na", script: "ܠܡܢܐ", arabic: "لماذا", categories: ["question"] },
  { word: "Aykana", translation: "How", phonetic: "Ay-ka-na", script: "ܐܝܟܢܐ", arabic: "كيف", categories: ["question"] },
  { word: "Kama", translation: "How many/How much", phonetic: "Ka-ma", script: "ܟܡܐ", arabic: "كم", categories: ["question"] },
  { word: "Ayna", translation: "Which", phonetic: "Ay-na", script: "ܐܝܢܐ", arabic: "أي", categories: ["question"] },
  // Prepositions
  { word: "B-", translation: "In/At/With", phonetic: "B-", script: "ܒ", arabic: "في", categories: ["preposition"] },
  { word: "Min", translation: "From", phonetic: "Min", script: "ܡܢ", arabic: "من", categories: ["preposition"] },
  { word: "L-", translation: "To/For", phonetic: "L-", script: "ܠ", arabic: "إلى", categories: ["preposition"] },
  { word: "Al", translation: "On/Upon", phonetic: "Al", script: "ܥܠ", arabic: "على", categories: ["preposition"] },
  { word: "Takh", translation: "Under/Below", phonetic: "Takh", script: "ܬܚܬ", arabic: "تحت", categories: ["preposition"] },
  { word: "Bathar", translation: "After/Behind", phonetic: "Ba-thar", script: "ܒܬܪ", arabic: "بعد", categories: ["preposition"] },
  { word: "Qam", translation: "Before/In front of", phonetic: "Qam", script: "ܩܕܡ", arabic: "قبل", categories: ["preposition"] },
  { word: "Gaw", translation: "Inside", phonetic: "Gaw", script: "ܓܘ", arabic: "داخل", categories: ["preposition"] },
  { word: "Bar", translation: "Outside", phonetic: "Bar", script: "ܒܪ", arabic: "خارج", categories: ["preposition"] },
  { word: "Gaw", translation: "Between/Among", phonetic: "Gaw", script: "ܒܝܢ", arabic: "بين", categories: ["preposition"] },
  { word: "Am", translation: "With", phonetic: "Am", script: "ܥܡ", arabic: "مع", categories: ["preposition"] },
  { word: "Dil", translation: "Of/Belonging to", phonetic: "Dil", script: "ܕܝܠ", arabic: "من", categories: ["preposition"] },

  // Conjunctions
  { word: "W-", translation: "And", phonetic: "W-", script: "ܘ", arabic: "و", categories: ["conjunction"] },
  { word: "Amma", translation: "But", phonetic: "Am-ma", script: "ܐܡܡܐ", arabic: "لكن", categories: ["conjunction"] },
  { word: "Aw", translation: "Or", phonetic: "Aw", script: "ܐܘ", arabic: "أو", categories: ["conjunction"] },
  { word: "Metul d-", translation: "Because", phonetic: "Me-tul d-", script: "ܡܛܘܠ ܕ", arabic: "لأن", categories: ["conjunction"] },
  { word: "Kad", translation: "When/As", phonetic: "Kad", script: "ܟܕ", arabic: "متى", categories: ["conjunction"] },
  { word: "Idan", translation: "If", phonetic: "I-dan", script: "ܐܝܕܢ", arabic: "إذا", categories: ["conjunction"] },

  // Common Phrases
  { word: "Basima", translation: "Thank you (to a male) / Good (masc)", phonetic: "Ba-si-ma", script: "ܒܣܝܡܐ", arabic: "شكرا", categories: ["phrase"] },
  { word: "Basimta", translation: "Thank you (to a female) / Good (fem)", phonetic: "Ba-sim-ta", script: "ܒܣܝܡܬܐ", arabic: "شكرا", categories: ["phrase"] },
  { word: "Min d'yokh", translation: "Please (lit. from your hand)", phonetic: "Min d-yokh", script: "ܡܢ ܕܝܘܟ", arabic: "من فضلك", categories: ["phrase"] },
  { word: "Tawdi", translation: "Thank you", phonetic: "Taw-di", script: "ܬܘܕܝ", arabic: "شكرا", categories: ["phrase"] },
  { word: "Eo", translation: "Yes", phonetic: "Eo", script: "ܐܝܢ", arabic: "نعم", categories: ["phrase"] },
  { word: "La", translation: "No", phonetic: "La", script: "ܠܐ", arabic: "لا", categories: ["phrase"] },
  { word: "Shlama lokh", translation: "Goodbye (to male)", phonetic: "Shla-ma lokh", script: "ܫܠܡܐ ܠܘܟ", arabic: "وداعا", categories: ["phrase"] },
  { word: "Shlama lakh", translation: "Goodbye (to female)", phonetic: "Shla-ma lakh", script: "ܫܠܡܐ ܠܟ", arabic: "وداعا", categories: ["phrase"] },
  { word: "Brikh", translation: "Blessed", phonetic: "Brikh", script: "ܒܪܝܟ", arabic: "مبارك", categories: ["phrase"] },
  { word: "Shlama d'Alaha", translation: "Peace of God", phonetic: "Shla-ma d-A-la-ha", script: "ܫܠܡܐ ܕܐܠܗܐ", arabic: "سلام الله", categories: ["phrase"] },
  
  // Adjectives
  { word: "Spay", translation: "Good", phonetic: "Spay", script: "ܣܦܝ", arabic: "جيد", categories: ["adjective"] },

  { word: "Raba", translation: "Much / Very", phonetic: "Ra-ba", script: "ܪܒܐ", arabic: "كثير", categories: ["adjective"] },

  { word: "Shapira", translation: "Beautiful (masc)", phonetic: "Sha-pi-ra", script: "ܫܦܝܪܐ", arabic: "جميل", categories: ["adjective"] },

  { word: "Shapirta", translation: "Beautiful (fem)", phonetic: "Sha-pir-ta", script: "ܫܦܝܪܬܐ", arabic: "جميل", categories: ["adjective"] },

  { word: "Zora", translation: "Small", phonetic: "Zo-ra", script: "ܙܥܘܪܐ", arabic: "صغير", categories: ["adjective"] },

  { word: "Yarikha", translation: "Long", phonetic: "Ya-ri-kha", script: "ܝܪܝܟ݂ܐ", arabic: "طويل", categories: ["adjective"] },

  { word: "Krya", translation: "Short", phonetic: "Kry-a", script: "ܟܪܝܐ", arabic: "قصير", categories: ["adjective"] },

  { word: "Khatha", translation: "New", phonetic: "Kha-tha", script: "ܚܕܬܐ", arabic: "جديد", categories: ["adjective"] },

  { word: "Atiqa", translation: "Old", phonetic: "A-ti-qa", script: "ܥܬܝܩܐ", arabic: "قديم", categories: ["adjective"] },

  { word: "Khidiya", translation: "Happy", phonetic: "Khi-di-ya", script: "ܚܕܝܐ", arabic: "سعيد", categories: ["emotion"] },

  { word: "Kriwa", translation: "Sad", phonetic: "Kri-wa", script: "ܟܪܝܒܐ", arabic: "حزين", categories: ["emotion"] },

  { word: "Chilya", translation: "Tired", phonetic: "Chil-ya", script: "ܟܗܝܐ", arabic: "تعبان", categories: ["adjective"] },

  { word: "Kpina", translation: "Hungry", phonetic: "Kpi-na", script: "ܟܦܝܢܐ", arabic: "جائع", categories: ["adjective"] },

  { word: "Sahya", translation: "Thirsty", phonetic: "Sah-ya", script: "ܨܗܝܐ", arabic: "عطشان", categories: ["adjective"] },

  { word: "Mrisha", translation: "Sick", phonetic: "Mri-sha", script: "ܡܪܥܐ", arabic: "مريض", categories: ["adjective"] },

  { word: "Hayla", translation: "Strong", phonetic: "Hay-la", script: "ܚܝܠܢܐ", arabic: "قوي", categories: ["adjective"] },

  { word: "Basora", translation: "Weak", phonetic: "Ba-so-ra", script: "ܒܨܘܪܐ", arabic: "ضعيف", categories: ["adjective"] },

  { word: "Qalula", translation: "Fast", phonetic: "Qa-lu-la", script: "ܩܠܘܠܐ", arabic: "سريع", categories: ["adjective"] },

  { word: "Yaqura", translation: "Heavy/Slow", phonetic: "Ya-qu-ra", script: "ܝܩܘܪܐ", arabic: "ثقيل", categories: ["adjective"] },

  { word: "Rama", translation: "High", phonetic: "Ra-ma", script: "ܪܡܐ", arabic: "عالي", categories: ["adjective"] },

  { word: "Kupa", translation: "Low", phonetic: "Ku-pa", script: "ܟܘܦܐ", arabic: "منخفض", categories: ["adjective"] },


  // Colors
  { word: "Smoqa", translation: "Red", phonetic: "Smo-qa", script: "ܣܡܘܩܐ", arabic: "أحمر", categories: ["color"] },
  { word: "Khawra", translation: "Blue", phonetic: "Khaw-ra", script: "ܟܘܪܐ", arabic: "أزرق", categories: ["color"] },
  { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka", script: "ܝܪܘܩܐ", arabic: "أخضر", categories: ["color"] },
  { word: "Spera", translation: "Yellow", phonetic: "Spe-ra", script: "ܣܦܝܪܐ", arabic: "أصفر", categories: ["color"] },
  { word: "Ukma", translation: "Black", phonetic: "Uk-ma", script: "ܐܘܟܡܐ", arabic: "أسود", categories: ["color"] },
  { word: "Khwara", translation: "White", phonetic: "Khwa-ra", script: "ܚܘܪܐ", arabic: "أبيض", categories: ["color"] },
  { word: "Portuqala", translation: "Orange", phonetic: "Por-tu-qa-la", script: "ܦܘܪܬܩܠܐ", arabic: "برتقالي", categories: ["color"] },
  { word: "Banafsha", translation: "Purple", phonetic: "Ba-naf-sha", script: "ܒܢܦܫܐ", arabic: "أرجواني", categories: ["color"] },
  { word: "Warda", translation: "Pink", phonetic: "War-da", script: "ܘܪܕܐ", arabic: "وردي", categories: ["color"] },
  { word: "Qahwaya", translation: "Brown", phonetic: "Qah-wa-ya", script: "ܩܗܘܝܐ", arabic: "بني", categories: ["color"] },
  { word: "Rasasa", translation: "Grey", phonetic: "Ra-sa-sa", script: "ܪܨܨܐ", arabic: "رمادي", categories: ["color"] },
  { word: "Dahba", translation: "Gold", phonetic: "Dah-ba", script: "ܕܗܒܐ", arabic: "ذهبي", categories: ["color"] },
  { word: "Sipa", translation: "Silver", phonetic: "Si-pa", script: "ܣܐܡܐ", arabic: "فضي", categories: ["color"] },
  { word: "Bahra", translation: "Light (Color)", phonetic: "Bah-ra", script: "ܒܗܪܐ", arabic: "خفيف", categories: ["color"] },
  { word: "Khekha", translation: "Dark (Color)", phonetic: "Khe-kha", script: "ܚܘܟ݂ܐ", arabic: "مظلم", categories: ["color"] },


  // Family
  { word: "Baba", translation: "Father", phonetic: "Ba-ba", script: "ܒܒܐ", arabic: "أب", categories: ["family"] },
  { word: "Abba", translation: "Father (Formal)", phonetic: "Ab-ba", script: "ܐܒܐ", arabic: "أب", categories: ["family"] },
  { word: "Yima", translation: "Mother", phonetic: "Yi-ma", script: "ܝܡܐ", arabic: "أم", categories: ["family"] },
  { word: "Imma", translation: "Mother (Formal)", phonetic: "Im-ma", script: "ܐܡܐ", arabic: "أم", categories: ["family"] },
  { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", script: "ܐܚܘܢܐ", arabic: "أخ", categories: ["family"] },
  { word: "Akh", translation: "Brother", phonetic: "Akh", script: "ܐܚܐ", arabic: "أخ", categories: ["family"] },
  { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", script: "ܚܬܐ", arabic: "أخت", categories: ["family"] },
  { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", script: "ܣܒܐ", arabic: "جد", categories: ["family"] },
  { word: "Sawtha", translation: "Grandmother", phonetic: "Saw-tha", script: "ܣܒܬܐ", arabic: "جدة", categories: ["family"] },
  { word: "Amma", translation: "Uncle (Paternal)", phonetic: "Am-ma", script: "ܥܡܐ", arabic: "عم", categories: ["family"] },
  { word: "Khala", translation: "Uncle (Maternal)", phonetic: "Kha-la", script: "ܚܠܐ", arabic: "عم", categories: ["family"] },
  { word: "Bra", translation: "Son", phonetic: "Bra", script: "ܒܪܐ", arabic: "ابن", categories: ["family"] },
  { word: "Brata", translation: "Daughter", phonetic: "Bra-ta", script: "ܒܪܬܐ", arabic: "ابنة", categories: ["family"] },
  { word: "Gawra", translation: "Husband", phonetic: "Gaw-ra", script: "ܓܒܪܐ", arabic: "زوج", categories: ["family"] },
  { word: "Bakhta", translation: "Wife", phonetic: "Bakh-ta", script: "ܒܟ݂ܬܐ", arabic: "زوجة", categories: ["family"] },
  { word: "Nashwatha", translation: "Relatives/Family", phonetic: "Nash-wa-tha", script: "ܢܫܘܬܐ", arabic: "أقارب", categories: ["family"] },
  { word: "Yala", translation: "Child/Boy", phonetic: "Ya-la", script: "ܝܠܐ", arabic: "طفل", categories: ["noun"] },
  { word: "Nasha", translation: "Person", phonetic: "Na-sha", script: "ܢܫܐ", arabic: "شخص", categories: ["noun"] },
  { word: "Nashe", translation: "People", phonetic: "Na-she", script: "ܢܫܐ", arabic: "ناس", categories: ["noun"] },

  // Food & Drink
  { word: "Mya", translation: "Water", phonetic: "M-ya", script: "ܡܝܐ", arabic: "ماء", categories: ["food"] },
  { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", script: "ܠܚܡܐ", arabic: "خبز", categories: ["food"] },
  { word: "Bisra", translation: "Meat", phonetic: "Bis-ra", script: "ܒܣܪܐ", arabic: "لحم", categories: ["food"] },
  { word: "Guptha", translation: "Cheese", phonetic: "Gup-tha", script: "ܓܘܒܬܐ", arabic: "جبن", categories: ["food"] },
  { word: "Be'ay", translation: "Eggs", phonetic: "Be-ay", script: "ܒܝܥܐ", arabic: "بيض", categories: ["food"] },
  { word: "Chai", translation: "Tea", phonetic: "Chai", script: "ܟܐܝ", arabic: "شاي", categories: ["food"] },
  { word: "Qahwa", translation: "Coffee", phonetic: "Qah-wa", script: "ܩܗܘܐ", arabic: "قهوة", categories: ["food"] },
  { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha", script: "ܬܦܘܚܐ", arabic: "تفاحة", categories: ["food"] },
  { word: "Pishra", translation: "Fish", phonetic: "Pish-ra", script: "ܦܫܪܐ", arabic: "سمك", categories: ["food"] },
  { word: "Khala", translation: "Milk", phonetic: "Kha-la", script: "ܚܠܒܐ", arabic: "حليب", categories: ["food"] },
  { word: "Kthayta", translation: "Chicken", phonetic: "Kthay-ta", script: "ܟܬܝܬܐ", arabic: "دجاج", categories: ["food"] },
  { word: "Yaraqa", translation: "Vegetables", phonetic: "Ya-ra-qa", script: "ܝܪܩܐ", arabic: "خضروات", categories: ["food"] },
  { word: "Pera", translation: "Fruit", phonetic: "Pe-ra", script: "ܦܐܪܐ", arabic: "فاكهة", categories: ["food"] },
  { word: "Khamra", translation: "Wine", phonetic: "Kham-ra", script: "ܚܡܪܐ", arabic: "نبيذ", categories: ["food"] },
  { word: "Melkha", translation: "Salt", phonetic: "Mel-kha", script: "ܡܠܚܐ", arabic: "ملح", categories: ["food"] },
  { word: "Shekar", translation: "Sugar", phonetic: "She-kar", script: "ܫܟܪ", arabic: "سكر", categories: ["food"] },
  { word: "Mishkha", translation: "Oil", phonetic: "Mish-kha", script: "ܡܫܚܐ", arabic: "زيت", categories: ["food"] },
  { word: "Kare", translation: "Butter", phonetic: "Ka-re", script: "ܟܪܐ", arabic: "زبدة", categories: ["food"] },
  { word: "Masta", translation: "Yogurt", phonetic: "Mas-ta", script: "ܡܣܬܐ", arabic: "زبادي", categories: ["food"] },
  { word: "Qare", translation: "Cucumber", phonetic: "Qa-re", script: "ܩܪܐ", arabic: "خيار", categories: ["food"] },
  { word: "Tamata", translation: "Tomato", phonetic: "Ta-ma-ta", script: "ܛܡܐܛܐ", arabic: "طماطم", categories: ["food"] },
  { word: "Basla", translation: "Onion", phonetic: "Bas-la", script: "ܒܨܠܐ", arabic: "بصل", categories: ["food"] },
  { word: "Patata", translation: "Potato", phonetic: "Pa-ta-ta", script: "ܦܛܐܛܐ", arabic: "بطاطس", categories: ["food"] },
  { word: "Inwe", translation: "Grapes", phonetic: "In-we", script: "ܥܢܒܐ", arabic: "عنب", categories: ["food"] },

  // Nouns & Objects
  { word: "Alaha", translation: "God", phonetic: "A-la-ha", script: "ܐܠܗܐ", arabic: "الله", categories: ["noun"] },
  { word: "Bayta", translation: "House", phonetic: "Bay-ta", script: "ܒܝܬܐ", arabic: "منزل", categories: ["noun"] },
  { word: "Sayara", translation: "Car", phonetic: "Sa-ya-ra", script: "ܣܝܪܐ", arabic: "سيارة", categories: ["noun"] },
  { word: "Ktawa", translation: "Book", phonetic: "Kta-wa", script: "ܟܬܒܐ", arabic: "كتاب", categories: ["noun"] },
  { word: "Qalama", translation: "Pen", phonetic: "Qa-la-ma", script: "ܩܠܡܐ", arabic: "قلم", categories: ["noun"] },
  { word: "Pata", translation: "Table/Face", phonetic: "Pa-ta", script: "ܦܬܐ", arabic: "طاولة", categories: ["noun"] },
  { word: "Kursa", translation: "Chair", phonetic: "Kur-sa", script: "ܟܘܪܣܝܐ", arabic: "كرسي", categories: ["noun"] },
  { word: "Itha", translation: "Hand", phonetic: "I-tha", script: "ܐܝܕܐ", arabic: "يد", categories: ["body"] },
  { word: "Reesha", translation: "Head", phonetic: "Ree-sha", script: "ܪܝܫܐ", arabic: "رأس", categories: ["body"] },
  { word: "Libba", translation: "Heart", phonetic: "Lib-ba", script: "ܠܒܐ", arabic: "قلب", categories: ["body"] },


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
  { word: "Kha", translation: "One", phonetic: "Kha", script: "ܚܕ", arabic: "واحد", categories: ["number"] },
  { word: "Tre", translation: "Two", phonetic: "Tre", script: "ܬܪܝܢ", arabic: "اثنان", categories: ["number"] },
  { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", script: "ܬܠܬܐ", arabic: "ثلاثة", categories: ["number"] },
  { word: "Arba", translation: "Four", phonetic: "Ar-ba", script: "ܐܪܒܥܐ", arabic: "أربعة", categories: ["number"] },
  { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", script: "ܚܡܫܐ", arabic: "خمسة", categories: ["number"] },
  { word: "Ishta", translation: "Six", phonetic: "Ish-ta", script: "ܐܫܬܐ", arabic: "ستة", categories: ["number"] },
  { word: "Shwa", translation: "Seven", phonetic: "Shwa", script: "ܫܒܥܐ", arabic: "سبعة", categories: ["number"] },
  { word: "Tmanya", translation: "Eight", phonetic: "Tman-ya", script: "ܬܡܢܝܐ", arabic: "ثمانية", categories: ["number"] },
  { word: "Tisha", translation: "Nine", phonetic: "Ti-sha", script: "ܬܫܥܐ", arabic: "تسعة", categories: ["number"] },
  { word: "Asar", translation: "Ten", phonetic: "A-sar", script: "ܥܣܪܐ", arabic: "عشرة", categories: ["number"] },


  // Time
  { word: "Yoma", translation: "Day", phonetic: "Yo-ma", script: "ܝܘܡܐ", arabic: "يوم", categories: ["time"] },
  { word: "Lelya", translation: "Night", phonetic: "Lel-ya", script: "ܠܠܝܐ", arabic: "ليل", categories: ["time"] },
  { word: "Idyo", translation: "Today", phonetic: "Id-yo", script: "ܐܕܝܘ", arabic: "اليوم", categories: ["time"] },
  { word: "Timmal", translation: "Yesterday", phonetic: "Tim-mal", script: "ܬܡܠ", arabic: "أمس", categories: ["time"] },
  { word: "Qam", translation: "Tomorrow", phonetic: "Qam", script: "ܩܐܡ", arabic: "غدا", categories: ["time"] },
  { word: "Shabta", translation: "Saturday / Week", phonetic: "Shab-ta", script: "ܫܒܬܐ", arabic: "السبت", categories: ["time"] },


  // Animals
  { word: "Kalba", translation: "Dog", phonetic: "Kal-ba", script: "ܟܠܒܐ", arabic: "كلب", categories: ["animal"] },
  { word: "Qato", translation: "Cat", phonetic: "Qa-to", script: "ܩܛܘ", arabic: "قطة", categories: ["animal"] },
  { word: "Susya", translation: "Horse", phonetic: "Sus-ya", script: "ܣܘܣܝܐ", arabic: "حصان", categories: ["animal"] },
  { word: "Tawra", translation: "Bull/Ox", phonetic: "Taw-ra", script: "ܬܘܪܐ", arabic: "ثور", categories: ["animal"] },
  { word: "Khmara", translation: "Donkey", phonetic: "Khma-ra", script: "ܚܡܪܐ", arabic: "حمار", categories: ["animal"] },
  { word: "Arya", translation: "Lion", phonetic: "Ar-ya", script: "ܐܪܝܐ", arabic: "أسد", categories: ["animal"] },
  { word: "Arva", translation: "Sheep", phonetic: "Ar-va", script: "ܐܪܒܐ", arabic: "خروف", categories: ["animal"] },

  // Nature
  { word: "Shimsha", translation: "Sun", phonetic: "Shim-sha", script: "ܫܡܫܐ", arabic: "شمس", categories: ["nature"] },

  { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ", arabic: "قمر", categories: ["nature"] },

  { word: "Kokhva", translation: "Star", phonetic: "Kokh-va", script: "ܟܘܟܒܐ", arabic: "نجم", categories: ["nature"] },

  { word: "Matra", translation: "Rain", phonetic: "Mat-ra", script: "ܡܛܪܐ", arabic: "مطر", categories: ["nature"] },

  { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ", arabic: "ثلج", categories: ["nature"] },

  { word: "Nura", translation: "Fire", phonetic: "Nu-ra", script: "ܢܘܪܐ", arabic: "نار", categories: ["nature"] },

  { word: "Opra", translation: "Earth/Dust", phonetic: "Op-ra", script: "ܥܦܪܐ", arabic: "أرض", categories: ["nature"] },

  { word: "Ilana", translation: "Tree", phonetic: "I-la-na", script: "ܐܝܠܢܐ", arabic: "شجرة", categories: ["nature"] },
  { word: "Nahra", translation: "River", phonetic: "Nah-ra", script: "ܢܗܪܐ", arabic: "نهر", categories: ["nature"] },
  { word: "Yama", translation: "Sea/Lake", phonetic: "Ya-ma", script: "ܝܡܐ", arabic: "بحر", categories: ["nature"] },
  { word: "Tura", translation: "Mountain", phonetic: "Tu-ra", script: "ܛܘܪܐ", arabic: "جبل", categories: ["nature"] },
  { word: "Genta", translation: "Garden", phonetic: "Gen-ta", script: "ܓܢܬܐ", arabic: "حديقة", categories: ["nature"] },
  { word: "Aywa", translation: "Cloud", phonetic: "Ay-wa", script: "ܥܝܒܐ", arabic: "سحابة", categories: ["nature"] },
  { word: "Powkha", translation: "Wind/Air", phonetic: "Pow-kha", script: "ܦܘܚܐ", arabic: "ريح", categories: ["nature"] },

  { word: "Qarira", translation: "Cold", phonetic: "Qa-ri-ra", script: "ܩܪܝܪܐ", arabic: "بارد", categories: ["adjective"] },

  { word: "Khamima", translation: "Hot", phonetic: "Kha-mi-ma", script: "ܚܡܝܡܐ", arabic: "حار", categories: ["adjective"] },


  // Body
  { word: "Ena", translation: "Eye", phonetic: "E-na", script: "ܥܝܢܐ", arabic: "عين", categories: ["body"] },

  { word: "Nakhira", translation: "Nose", phonetic: "Na-khi-ra", script: "ܢܚܝܪܐ", arabic: "أنف", categories: ["body"] },

  { word: "Puma", translation: "Mouth", phonetic: "Pu-ma", script: "ܦܘܡܐ", arabic: "فم", categories: ["body"] },

  { word: "Odna", translation: "Ear", phonetic: "Od-na", script: "ܐܕܢܐ", arabic: "أذن", categories: ["body"] },

  { word: "Regla", translation: "Foot/Leg", phonetic: "Reg-la", script: "ܪܓܠܐ", arabic: "قدم", categories: ["body"] },

  { word: "Lishana", translation: "Tongue/Language", phonetic: "Li-sha-na", script: "ܠܫܢܐ", arabic: "لسان", categories: ["body"] },

  { word: "Shina", translation: "Tooth", phonetic: "Shi-na", script: "ܫܢܐ", arabic: "سن", categories: ["body"] },

  { word: "Sa'ra", translation: "Hair", phonetic: "Sa-ra", script: "ܣܥܪܐ", arabic: "شعر", categories: ["body"] },

  { word: "Khade", translation: "Chest", phonetic: "Kha-de", script: "ܚܕܝܐ", arabic: "صدر", categories: ["body"] },

  { word: "Kasa", translation: "Stomach/Belly", phonetic: "Ka-sa", script: "ܟܪܣܐ", arabic: "معدة", categories: ["body"] },

  { word: "Khasa", translation: "Back", phonetic: "Kha-sa", script: "ܚܨܐ", arabic: "ظهر", categories: ["body"] },

  { word: "Dra'a", translation: "Arm", phonetic: "Dra-a", script: "ܕܪܥܐ", arabic: "ذراع", categories: ["body"] },

  { word: "Siv'a", translation: "Finger", phonetic: "Siv-a", script: "ܨܒܥܐ", arabic: "إصبع", categories: ["body"] },

  { word: "Burka", translation: "Knee", phonetic: "Bur-ka", script: "ܒܘܪܟܐ", arabic: "ركبة", categories: ["adjective"] },


  // Home
  { word: "Tarra", translation: "Door", phonetic: "Tar-ra", script: "ܬܪܥܐ", arabic: "باب", categories: ["noun"] },

  { word: "Kawtha", translation: "Window", phonetic: "Kaw-tha", script: "ܟܘܬܐ", arabic: "نافذة", categories: ["nature"] },

  { word: "Igara", translation: "Roof", phonetic: "I-ga-ra", script: "ܐܓܪܐ", arabic: "سقف", categories: ["noun"] },

  { word: "Shwitha", translation: "Bed", phonetic: "Shwi-tha", script: "ܫܘܝܬܐ", arabic: "سرير", categories: ["adjective"] },

  { word: "Matbakh", translation: "Kitchen", phonetic: "Mat-bakh", script: "ܡܛܒܟ݂", arabic: "مطبخ", categories: ["noun"] },

  { word: "Khamama", translation: "Bathroom", phonetic: "Kha-ma-ma", script: "ܚܡܐܡܐ", arabic: "حمام", categories: ["noun"] },

  { word: "Oda", translation: "Room/Bedroom", phonetic: "O-da", script: "ܐܘܕܐ", arabic: "غرفة", categories: ["noun"] },

  { word: "Ar'a", translation: "Floor/Ground", phonetic: "Ar-a", script: "ܐܪܥܐ", arabic: "أرضية", categories: ["noun"] },

  { word: "Qleeda", translation: "Key", phonetic: "Qlee-da", script: "ܩܠܝܕܐ", arabic: "مفتاح", categories: ["home"] },

  { word: "Sahna", translation: "Plate", phonetic: "Sah-na", script: "ܨܚܢܐ", arabic: "صحن", categories: ["home"] },

  { word: "Kchamcha", translation: "Spoon", phonetic: "Kcham-cha", script: "ܟܡܟܐ", arabic: "ملعقة", categories: ["home"] },

  { word: "Changala", translation: "Fork", phonetic: "Chan-ga-la", script: "ܟܢܓܠܐ", arabic: "شوكة", categories: ["home"] },

  { word: "Sakina", translation: "Knife", phonetic: "Sa-ki-na", script: "ܣܟܝܢܐ", arabic: "سكين", categories: ["home"] },

  { word: "Stikana", translation: "Cup (Tea)", phonetic: "Sti-ka-na", script: "ܐܣܬܟܢܐ", arabic: "كوب", categories: ["home"] },

  { word: "Glasa", translation: "Glass", phonetic: "Gla-sa", script: "ܓܠܣܐ", arabic: "كأس", categories: ["home"] },


  // Clothing
  { word: "Sudra", translation: "Shirt", phonetic: "Sud-ra", script: "ܨܘܕܪܐ", arabic: "قميص", categories: ["clothing"] },

  { word: "Sharwala", translation: "Pants", phonetic: "Shar-wa-la", script: "ܫܪܘܠܐ", arabic: "بنطلون", categories: ["clothing"] },

  { word: "Soltha", translation: "Shoe", phonetic: "Sol-tha", script: "ܣܘܠܬܐ", arabic: "حذاء", categories: ["clothing"] },

  { word: "Kusitha", translation: "Hat/Cap", phonetic: "Ku-si-tha", script: "ܟܘܣܝܬܐ", arabic: "قبعة", categories: ["clothing"] },


  // Places
  { word: "Madrasa", translation: "School", phonetic: "Mad-ra-sa", script: "ܡܕܪܫܬܐ", arabic: "مدرسة", categories: ["place"] },
  { word: "Knishta", translation: "Church", phonetic: "Knish-ta", script: "ܟܢܘܫܬܐ", arabic: "كنيسة", categories: ["place"] },
  { word: "Shuqa", translation: "Market", phonetic: "Shu-qa", script: "ܫܘܩܐ", arabic: "سوق", categories: ["place"] },
  { word: "Matha", translation: "Village/Town", phonetic: "Ma-tha", script: "ܡܬܐ", arabic: "قرية", categories: ["place"] },
  { word: "Medina", translation: "City", phonetic: "Me-di-na", script: "ܡܕܝܢܬܐ", arabic: "مدينة", categories: ["place"] },
  { word: "Bayta d-Asye", translation: "Hospital", phonetic: "Bay-ta d-As-ye", script: "ܒܝܬ ܐܣܝܐ", arabic: "مستشفى", categories: ["place"] },
  { word: "Dukana", translation: "Store/Shop", phonetic: "Du-ka-na", script: "ܕܘܟܢܐ", arabic: "متجر", categories: ["place"] },
  { word: "Be-Sawa", translation: "Grandfather's House", phonetic: "Be-Sa-wa", script: "ܒܝܬ ܣܒܐ", arabic: "", categories: ["place"] },

  { word: "Khakla", translation: "Field/Farm", phonetic: "Khak-la", script: "ܚܩܠܐ", arabic: "حقل", categories: ["place"] },
  { word: "Parqa", translation: "Park", phonetic: "Par-qa", script: "ܦܪܩܐ", arabic: "حديقة", categories: ["place"] },
  { word: "Mat'am", translation: "Restaurant", phonetic: "Mat-am", script: "ܡܛܥܡ", arabic: "مطعم", categories: ["place"] },
  { word: "Maktab", translation: "Office", phonetic: "Mak-tab", script: "ܡܟܬܒ", arabic: "مكتب", categories: ["place"] },

  // Professions
  { word: "Malpana", translation: "Teacher (Masc)", phonetic: "Mal-pa-na", script: "ܡܠܦܢܐ", arabic: "معلم", categories: ["profession"] },
  { word: "Malpantha", translation: "Teacher (Fem)", phonetic: "Mal-pan-tha", script: "ܡܠܦܢܬܐ", arabic: "معلم", categories: ["profession"] },
  { word: "Asya", translation: "Doctor", phonetic: "As-ya", script: "ܐܣܝܐ", arabic: "طبيب", categories: ["profession"] },
  { word: "Nakhopa", translation: "Baker", phonetic: "Na-kho-pa", script: "ܢܚܘܦܐ", arabic: "خباز", categories: ["profession"] },
  { word: "Sayuqa", translation: "Driver", phonetic: "Sa-yu-qa", script: "ܣܝܘܩܐ", arabic: "سائق", categories: ["profession"] },
  { word: "Shurta", translation: "Police", phonetic: "Shur-ta", script: "ܫܘܪܛܐ", arabic: "شرطة", categories: ["profession"] },
  { word: "Khatota", translation: "Tailor/Seamstress", phonetic: "Kha-to-ta", script: "ܚܝܛܐ", arabic: "خياط", categories: ["profession"] },
  { word: "Ranya", translation: "Singer", phonetic: "Ran-ya", script: "ܪܢܝܐ", arabic: "مغني", categories: ["profession"] },
  { word: "Tabakha", translation: "Cook/Chef", phonetic: "Ta-ba-kha", script: "ܛܒܟ݂ܐ", arabic: "طباخ", categories: ["profession"] },
  { word: "Benaya", translation: "Builder", phonetic: "Be-na-ya", script: "ܒܢܝܐ", arabic: "بناء", categories: ["profession"] },
  { word: "Falaha", translation: "Farmer", phonetic: "Fa-la-ha", script: "ܦܠܚܐ", arabic: "فلاح", categories: ["profession"] },

  // Emotions
  { word: "Khiditha", translation: "Happy (fem)", phonetic: "Khi-di-tha", script: "ܚܕܝܬܐ", arabic: "سعيد", categories: ["emotion"] },

  { word: "Krivta", translation: "Sad (fem)", phonetic: "Kriv-ta", script: "ܟܪܝܒܬܐ", arabic: "حزين", categories: ["emotion"] },

  { word: "Karpana", translation: "Angry", phonetic: "Kar-pa-na", script: "ܟܪܦܢܐ", arabic: "غاضب", categories: ["emotion"] },

  { word: "Zdi'a", translation: "Scared", phonetic: "Zdi-a", script: "ܙܕܝܥܐ", arabic: "خائف", categories: ["emotion"] },


  // Travel
  { word: "Orkha", translation: "Road/Way", phonetic: "Or-kha", script: "ܐܘܪܚܐ", arabic: "طريق", categories: ["travel"] },
  { word: "Tayara", translation: "Airplane", phonetic: "Ta-ya-ra", script: "ܛܝܪܐ", arabic: "طائرة", categories: ["travel"] },
  { word: "Bosta", translation: "Bus", phonetic: "Bos-ta", script: "ܒܐܨ", arabic: "حافلة", categories: ["travel"] },
  { word: "Pasport", translation: "Passport", phonetic: "Pas-port", script: "ܦܣܦܘܪܬ", arabic: "جواز سفر", categories: ["travel"] },

  { word: "Tiket", translation: "Ticket", phonetic: "Ti-ket", script: "ܬܝܟܬ", arabic: "تذكرة", categories: ["travel"] },

  { word: "Mata", translation: "Luggage/Things", phonetic: "Ma-ta", script: "ܡܐܬܐ", arabic: "أمتعة", categories: ["travel"] },


  // More Time
  { word: "Sa'at", translation: "Hour/Clock", phonetic: "Sa-at", script: "ܣܥܬ", arabic: "ساعة", categories: ["time"] },

  { word: "Daqiqa", translation: "Minute", phonetic: "Da-qi-qa", script: "ܕܩܝܩܐ", arabic: "دقيقة", categories: ["time"] },

  { word: "Shita", translation: "Year", phonetic: "Shi-ta", script: "ܫܢܬܐ", arabic: "سنة", categories: ["time"] },

  { word: "Yargha", translation: "Month", phonetic: "Yar-gha", script: "ܝܪܚܐ", arabic: "شهر", categories: ["time"] },

  { word: "Hasa", translation: "Now", phonetic: "Ha-sa", script: "ܗܣܐ", arabic: "الآن", categories: ["time"] },

  { word: "Qam", translation: "Before", phonetic: "Qam", script: "ܩܡ", arabic: "قبل", categories: ["time"] },

  { word: "Sipra", translation: "Morning", phonetic: "Sip-ra", script: "ܨܦܪܐ", arabic: "صباح", categories: ["time"] },

  { word: "Ramsha", translation: "Evening", phonetic: "Ram-sha", script: "ܪܡܫܐ", arabic: "مساء", categories: ["time"] },


  // More Numbers
  { word: "Khadassar", translation: "Eleven", phonetic: "Kha-das-sar", script: "ܚܕܥܣܪ", arabic: "أحد عشر", categories: ["number"] },

  { word: "Treissar", translation: "Twelve", phonetic: "Treis-sar", script: "ܬܪܥܣܪ", arabic: "اثنا عشر", categories: ["number"] },

  { word: "Esrin", translation: "Twenty", phonetic: "Es-rin", script: "ܥܣܪܝܢ", arabic: "عشرون", categories: ["number"] },

  { word: "Tlaa", translation: "Thirty", phonetic: "Tla-a", script: "ܬܠܬܝܢ", arabic: "ثلاثون", categories: ["number"] },

  { word: "Arba", translation: "Forty", phonetic: "Ar-ba", script: "ܐܪܒܥܝܢ", arabic: "أربعون", categories: ["number"] },

  { word: "Khamshi", translation: "Fifty", phonetic: "Kham-shi", script: "ܚܡܫܝܢ", arabic: "خمسون", categories: ["number"] },

  { word: "Alpa", translation: "One Thousand", phonetic: "Al-pa", script: "ܐܠܦܐ", arabic: "ألف", categories: ["number"] },



  // More Phrases
  { word: "Bshina b-atayokh", translation: "Welcome (to male)", phonetic: "B-shi-na b-a-ta-yokh", script: "ܒܫܝܢܐ ܒܐܬܝܘܟ݂", arabic: "أهلا بك", categories: ["phrase"] },

  { word: "Bshina b-atayakh", translation: "Welcome (to female)", phonetic: "B-shi-na b-a-ta-yakh", script: "ܒܫܝܢܐ ܒܐܬܝܟ݂", arabic: "أهلا بك", categories: ["phrase"] },

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
  { word: "Khamiša", translation: "Thursday", phonetic: "Kha-mi-ša", script: "ܚܡܝܫܐ", arabic: "الخميس", categories: ["adjective"] },

  { word: "Iroha", translation: "Sunday", phonetic: "I-ro-ha", script: "ܝܪܘܚܐ", arabic: "الأحد", categories: ["nature"] },

  { word: "Trinbšaba", translation: "Monday", phonetic: "Trin-b-ša-ba", script: "ܬܪܝܢܒܫܒܐ", arabic: "الاثنين", categories: ["adjective"] },

  { word: "Tlitbšaba", translation: "Tuesday", phonetic: "Tlit-b-ša-ba", script: "ܬܠܝܬܒܫܒܐ", arabic: "الثلاثاء", categories: ["adjective"] },

  { word: "Arbibšaba", translation: "Wednesday", phonetic: "Ar-bib-ša-ba", script: "ܐܪܒܥܒܫܒܐ", arabic: "الأربعاء", categories: ["adjective"] },

  { word: "Khamšibšaba", translation: "Friday", phonetic: "Kham-ši-b-ša-ba", script: "ܚܡܫܒܫܒܐ", arabic: "الجمعة", categories: ["adjective"] },


  // Months & Seasons
  { word: "Kanun Qadmaya", translation: "January", phonetic: "Ka-nun Qad-ma-ya", script: "ܟܢܘܢ ܩܕܡܝܐ", arabic: "يناير", categories: ["adjective"] },

  { word: "Šbat", translation: "February", phonetic: "Šbat", script: "ܫܒܛ", arabic: "فبراير", categories: ["adjective"] },

  { word: "Adar", translation: "March", phonetic: "A-dar", script: "ܐܕܪ", arabic: "مارس", categories: ["adjective"] },

  { word: "Nisan", translation: "April", phonetic: "Ni-san", script: "ܢܝܣܢ", arabic: "أبريل", categories: ["adjective"] },

  { word: "Iyyar", translation: "May", phonetic: "Iy-yar", script: "ܐܝܪ", arabic: "مايو", categories: ["adjective"] },

  { word: "Ḥziran", translation: "June", phonetic: "Ḥzi-ran", script: "ܚܙܝܪܢ", arabic: "يونيو", categories: ["adjective"] },

  { word: "Tammuz", translation: "July", phonetic: "Tam-muz", script: "ܬܡܘܙ", arabic: "يوليو", categories: ["adjective"] },

  { word: "Ab", translation: "August", phonetic: "Ab", script: "ܐܒ", arabic: "أغسطس", categories: ["adjective"] },

  { word: "Ilul", translation: "September", phonetic: "I-lul", script: "ܐܝܠܘܠ", arabic: "سبتمبر", categories: ["adjective"] },

  { word: "Tišrin Qadmaya", translation: "October", phonetic: "Tiš-rin Qad-ma-ya", script: "ܬܫܪܝܢ ܩܕܡܝܐ", arabic: "أكتوبر", categories: ["adjective"] },

  { word: "Tišrin Ḥraya", translation: "November", phonetic: "Tiš-rin Ḥra-ya", script: "ܬܫܪܝܢ ܚܪܝܐ", arabic: "نوفمبر", categories: ["adjective"] },

  { word: "Kanun Ḥraya", translation: "December", phonetic: "Ka-nun Ḥra-ya", script: "ܟܢܘܢ ܚܪܝܐ", arabic: "ديسمبر", categories: ["adjective"] },

  { word: "Kharta", translation: "Spring", phonetic: "Khar-ta", script: "ܟܪܬܐ", arabic: "ربيع", categories: ["adjective"] },

  { word: "Qayṭa", translation: "Summer", phonetic: "Qay-ṭa", script: "ܩܝܛܐ", arabic: "صيف", categories: ["adjective"] },

  { word: "Ṭarpa", translation: "Autumn/Fall", phonetic: "Ṭar-pa", script: "ܛܪܦܐ", arabic: "خريف", categories: ["adjective"] },

  { word: "Sitwa", translation: "Winter", phonetic: "Sit-wa", script: "ܣܬܘܐ", arabic: "شتاء", categories: ["adjective"] },


  // More Fruits & Vegetables
  { word: "Tīna", translation: "Fig", phonetic: "Tī-na", script: "ܬܐܢܐ", arabic: "تين", categories: ["adjective"] },

  { word: "Rummana", translation: "Pomegranate", phonetic: "Rum-ma-na", script: "ܪܘܡܢܐ", arabic: "رمان", categories: ["adjective"] },

  { word: "Khawkha", translation: "Peach", phonetic: "Khaw-kha", script: "ܚܘܟܐ", arabic: "خوخ", categories: ["adjective"] },

  { word: "Mešmeša", translation: "Apricot", phonetic: "Meš-me-ša", script: "ܡܫܡܫܐ", arabic: "مشمش", categories: ["adjective"] },

  { word: "Kummatra", translation: "Pear", phonetic: "Kum-mat-ra", script: "ܟܘܡܬܪܐ", arabic: "كمثرى", categories: ["adjective"] },

  { word: "Talyana", translation: "Watermelon", phonetic: "Tal-ya-na", script: "ܛܠܝܢܐ", arabic: "بطيخ", categories: ["nature"] },

  { word: "Bṭikha", translation: "Melon", phonetic: "Bṭi-kha", script: "ܒܛܝܟܐ", arabic: "شمام", categories: ["adjective"] },

  { word: "Limuna", translation: "Lemon", phonetic: "Li-mu-na", script: "ܠܝܡܘܢܐ", arabic: "ليمون", categories: ["adjective"] },

  { word: "Burtuqala", translation: "Orange (fruit)", phonetic: "Bur-tu-qa-la", script: "ܒܘܪܬܘܩܠܐ", arabic: "برتقالي", categories: ["adjective"] },

  { word: "Ṣōna", translation: "Dates (fruit)", phonetic: "Ṣō-na", script: "ܨܘܢܐ", arabic: "تمر", categories: ["adjective"] },

  { word: "Gōzta", translation: "Walnut", phonetic: "Gōz-ta", script: "ܓܘܙܬܐ", arabic: "جوز", categories: ["adjective"] },

  { word: "Lōza", translation: "Almond", phonetic: "Lō-za", script: "ܠܘܙܐ", arabic: "لوز", categories: ["adjective"] },

  { word: "Fistōqa", translation: "Pistachio", phonetic: "Fis-tō-qa", script: "ܦܣܬܩܐ", arabic: "فستق", categories: ["adjective"] },

  { word: "Tuma", translation: "Garlic", phonetic: "Tu-ma", script: "ܬܘܡܐ", arabic: "ثوم", categories: ["adjective"] },

  { word: "Pilpila", translation: "Pepper", phonetic: "Pil-pi-la", script: "ܦܠܦܠܐ", arabic: "فلفل", categories: ["adjective"] },

  { word: "Karāt", translation: "Leek", phonetic: "Ka-rāt", script: "ܟܪܬ", arabic: "كراث", categories: ["adjective"] },

  { word: "Khassa", translation: "Lettuce", phonetic: "Khas-sa", script: "ܚܣܐ", arabic: "خس", categories: ["adjective"] },

  { word: "Shilpa", translation: "Eggplant", phonetic: "Shil-pa", script: "ܫܠܦܐ", arabic: "باذنجان", categories: ["adjective"] },

  { word: "Kōsa", translation: "Zucchini", phonetic: "Kō-sa", script: "ܟܘܣܐ", arabic: "كوسة", categories: ["adjective"] },

  { word: "Lifta", translation: "Turnip", phonetic: "Lif-ta", script: "ܠܦܬܐ", arabic: "لفت", categories: ["adjective"] },

  { word: "Gzara", translation: "Carrot", phonetic: "Gza-ra", script: "ܓܙܪܐ", arabic: "جزر", categories: ["adjective"] },

  { word: "Šalgam", translation: "Radish", phonetic: "Šal-gam", script: "ܫܠܓܡ", arabic: "فجل", categories: ["adjective"] },


  // More Meats & Proteins
  { word: "Luḥma d-Khmara", translation: "Beef", phonetic: "Luḥ-ma d-Khma-ra", script: "ܠܘܚܡܐ ܕܚܡܪܐ", arabic: "لحم بقر", categories: ["adjective"] },

  { word: "Luḥma d-Arva", translation: "Lamb", phonetic: "Luḥ-ma d-Ar-va", script: "ܠܘܚܡܐ ܕܐܪܒܐ", arabic: "لحم غنم", categories: ["adjective"] },

  { word: "Luḥma d-Khanzira", translation: "Pork", phonetic: "Luḥ-ma d-Khan-zi-ra", script: "ܠܘܚܡܐ ܕܚܢܙܝܪܐ", arabic: "لحم خنزير", categories: ["adjective"] },

  { word: "Šamka", translation: "Fish (general)", phonetic: "Šam-ka", script: "ܫܡܟܐ", arabic: "سمك", categories: ["adjective"] },

  { word: "Qrusta", translation: "Shrimp", phonetic: "Qrus-ta", script: "ܩܪܘܣܬܐ", arabic: "جمبري", categories: ["adjective"] },


  // Kitchen & Cooking
  { word: "Sanduqa", translation: "Pot", phonetic: "San-du-qa", script: "ܣܢܕܘܩܐ", arabic: "قدر", categories: ["adjective"] },

  { word: "Qarora", translation: "Kettle", phonetic: "Qa-ro-ra", script: "ܩܪܘܪܐ", arabic: "غلاية", categories: ["adjective"] },

  { word: "Piala", translation: "Bowl", phonetic: "Pia-la", script: "ܦܝܠܐ", arabic: "وعاء", categories: ["adjective"] },

  { word: "Tannura", translation: "Oven", phonetic: "Tan-nu-ra", script: "ܬܢܘܪܐ", arabic: "فرن", categories: ["adjective"] },

  { word: "Maqliya", translation: "Frying Pan", phonetic: "Maq-li-ya", script: "ܡܩܠܝܐ", arabic: "مقلاة", categories: ["adjective"] },

  { word: "Zangīla", translation: "Basket", phonetic: "Zan-gī-la", script: "ܙܢܓܝܠܐ", arabic: "سلة", categories: ["adjective"] },

  { word: "Ṭasla", translation: "Tray", phonetic: "Ṭas-la", script: "ܛܣܠܐ", arabic: "صينية", categories: ["adjective"] },

  { word: "Qadḥa", translation: "Pitcher", phonetic: "Qad-ḥa", script: "ܩܕܚܐ", arabic: "إبريق", categories: ["adjective"] },

  { word: "Maḥbašta", translation: "Broom", phonetic: "Maḥ-baš-ta", script: "ܡܚܒܫܬܐ", arabic: "مكنسة", categories: ["adjective"] },

  { word: "Mapuḥta", translation: "Fan", phonetic: "Ma-puḥ-ta", script: "ܡܦܘܚܬܐ", arabic: "مروحة", categories: ["adjective"] },

  { word: "Marpita", translation: "Blanket", phonetic: "Mar-pi-ta", script: "ܡܪܦܝܬܐ", arabic: "بطانية", categories: ["adjective"] },

  { word: "Bēstha", translation: "Pillow", phonetic: "Bēs-tha", script: "ܒܝܣܬܐ", arabic: "وسادة", categories: ["adjective"] },

  { word: "Simlā", translation: "Ladder", phonetic: "Sim-lā", script: "ܣܝܡܠܐ", arabic: "سلم", categories: ["adjective"] },

  { word: "Gāra", translation: "Roof", phonetic: "Gā-ra", script: "ܓܪܐ", arabic: "سقف", categories: ["noun"] },

  { word: "Daraga", translation: "Stairs", phonetic: "Da-ra-ga", script: "ܕܪܓܐ", arabic: "درج", categories: ["adjective"] },


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
  { word: "Para", translation: "Cow", phonetic: "Pa-ra", script: "ܦܪܐ", arabic: "بقرة", categories: ["adjective"] },

  { word: "Khanzira", translation: "Pig", phonetic: "Khan-zi-ra", script: "ܚܢܙܝܪܐ", arabic: "خنزير", categories: ["adjective"] },

  { word: "Dabba", translation: "Bear", phonetic: "Dab-ba", script: "ܕܒܐ", arabic: "دب", categories: ["adjective"] },

  { word: "Dība", translation: "Wolf", phonetic: "Dī-ba", script: "ܕܝܒܐ", arabic: "ذئب", categories: ["adjective"] },

  { word: "Talpa", translation: "Fox", phonetic: "Tal-pa", script: "ܬܠܦܐ", arabic: "ثعلب", categories: ["adjective"] },

  { word: "Arnava", translation: "Rabbit", phonetic: "Ar-na-va", script: "ܐܪܢܒܐ", arabic: "أرنب", categories: ["adjective"] },

  { word: "Pāra", translation: "Mouse/Rat", phonetic: "Pā-ra", script: "ܦܪܐ", arabic: "فأر", categories: ["adjective"] },

  { word: "Namla", translation: "Ant", phonetic: "Nam-la", script: "ܢܡܠܐ", arabic: "نملة", categories: ["adjective"] },

  { word: "Dbōrta", translation: "Bee", phonetic: "Dbōr-ta", script: "ܕܒܘܪܬܐ", arabic: "نحلة", categories: ["adjective"] },

  { word: "Ṭayra", translation: "Bird", phonetic: "Ṭay-ra", script: "ܛܝܪܐ", arabic: "طائر", categories: ["adjective"] },

  { word: "Nišra", translation: "Eagle", phonetic: "Niš-ra", script: "ܢܫܪܐ", arabic: "نسر", categories: ["adjective"] },

  { word: "Tarnagōlta", translation: "Rooster/Hen", phonetic: "Tar-na-gōl-ta", script: "ܬܪܢܓܘܠܬܐ", arabic: "ديك", categories: ["adjective"] },

  { word: "Barōza", translation: "Duck", phonetic: "Ba-rō-za", script: "ܒܪܘܙܐ", arabic: "بطة", categories: ["adjective"] },

  { word: "Wazza", translation: "Goose", phonetic: "Waz-za", script: "ܘܙܐ", arabic: "وزة", categories: ["adjective"] },

  { word: "Yōna", translation: "Dove/Pigeon", phonetic: "Yō-na", script: "ܝܘܢܐ", arabic: "يمامة", categories: ["adjective"] },

  { word: "Ḥiwya", translation: "Snake/Serpent", phonetic: "Ḥiw-ya", script: "ܚܘܝܐ", arabic: "ثعبان", categories: ["adjective"] },

  { word: "Kurpada", translation: "Frog", phonetic: "Kur-pa-da", script: "ܟܘܪܦܕܐ", arabic: "ضفدع", categories: ["adjective"] },

  { word: "Šōna", translation: "Lizard", phonetic: "Šō-na", script: "ܫܘܢܐ", arabic: "سحلية", categories: ["adjective"] },

  { word: "Parpāša", translation: "Butterfly", phonetic: "Par-pā-ša", script: "ܦܪܦܫܐ", arabic: "فراشة", categories: ["adjective"] },

  { word: "Dadūna", translation: "Fly", phonetic: "Da-dū-na", script: "ܕܕܘܢܐ", arabic: "ذبانة", categories: ["adjective"] },

  { word: "Qarda", translation: "Mosquito", phonetic: "Qar-da", script: "ܩܪܕܐ", arabic: "بعوضة", categories: ["adjective"] },

  { word: "Gamal", translation: "Camel", phonetic: "Ga-mal", script: "ܓܡܠ", arabic: "جمل", categories: ["adjective"] },

  { word: "Pīla", translation: "Elephant", phonetic: "Pī-la", script: "ܦܝܠܐ", arabic: "فيل", categories: ["adjective"] },

  { word: "Qōpa", translation: "Monkey", phonetic: "Qō-pa", script: "ܩܘܦܐ", arabic: "قرد", categories: ["adjective"] },


  // More Nature Words
  { word: "Šmaya", translation: "Sky/Heaven", phonetic: "Šma-ya", script: "ܫܡܝܐ", arabic: "سماء", categories: ["nature"] },

  { word: "Shuna", translation: "Stone/Rock", phonetic: "Shu-na", script: "ܫܘܢܐ", arabic: "حجر", categories: ["nature"] },

  { word: "Ṭīna", translation: "Mud/Clay", phonetic: "Ṭī-na", script: "ܛܝܢܐ", arabic: "طين", categories: ["adjective"] },

  { word: "Mayā", translation: "Water (plural)", phonetic: "Ma-yā", script: "ܡܝܐ", arabic: "ماء", categories: ["nature"] },

  { word: "Rāma", translation: "Thunder", phonetic: "Rā-ma", script: "ܪܥܡܐ", arabic: "رعد", categories: ["nature"] },

  { word: "Barqa", translation: "Lightning", phonetic: "Bar-qa", script: "ܒܪܩܐ", arabic: "برق", categories: ["nature"] },

  { word: "Qešta", translation: "Rainbow", phonetic: "Qeš-ta", script: "ܩܫܬܐ", arabic: "قوس قزح", categories: ["nature"] },

  { word: "Brē", translation: "Desert", phonetic: "Brē", script: "ܒܪܐ", arabic: "صحراء", categories: ["adjective"] },

  { word: "Midbrā", translation: "Wilderness", phonetic: "Mid-brā", script: "ܡܕܒܪܐ", arabic: "برية", categories: ["adjective"] },

  { word: "Garra", translation: "Cave", phonetic: "Gar-ra", script: "ܓܪܐ", arabic: "كهف", categories: ["adjective"] },

  { word: "Dašta", translation: "Plain/Field", phonetic: "Daš-ta", script: "ܕܫܬܐ", arabic: "سهل", categories: ["adjective"] },

  { word: "Gāzarta", translation: "Island", phonetic: "Gā-zar-ta", script: "ܓܙܪܬܐ", arabic: "جزيرة", categories: ["adjective"] },

  { word: "Qešā", translation: "Forest/Woods", phonetic: "Qe-šā", script: "ܩܫܐ", arabic: "غابة", categories: ["adjective"] },

  { word: "Rē'uta", translation: "Pasture", phonetic: "Rē-'u-ta", script: "ܪܥܘܬܐ", arabic: "مرعى", categories: ["adjective"] },

  { word: "Yabal", translation: "Hill", phonetic: "Ya-bal", script: "ܝܒܠ", arabic: "تلة", categories: ["adjective"] },

  { word: "Gōba", translation: "Valley", phonetic: "Gō-ba", script: "ܓܘܒܐ", arabic: "وادي", categories: ["adjective"] },


  // More Body Parts
  { word: "Gaba", translation: "Shoulder", phonetic: "Ga-ba", script: "ܓܒܐ", arabic: "كتف", categories: ["body"] },

  { word: "Khada", translation: "Breast/Chest", phonetic: "Kha-da", script: "ܚܕܐ", arabic: "ثدي", categories: ["body"] },

  { word: "Ṣilā", translation: "Rib", phonetic: "Ṣi-lā", script: "ܨܠܥܐ", arabic: "ضلع", categories: ["adjective"] },

  { word: "Kasā", translation: "Belly/Abdomen", phonetic: "Ka-sā", script: "ܟܣܐ", arabic: "بطن", categories: ["adjective"] },

  { word: "Ḥaṣā", translation: "Waist/Lower back", phonetic: "Ḥa-ṣā", script: "ܚܨܐ", arabic: "خصر", categories: ["adjective"] },

  { word: "Pakhda", translation: "Thigh", phonetic: "Pakh-da", script: "ܦܟܕܐ", arabic: "فخذ", categories: ["adjective"] },

  { word: "Šāqa", translation: "Leg", phonetic: "Šā-qa", script: "ܫܩܐ", arabic: "ساق", categories: ["body"] },

  { word: "Aqla", translation: "Ankle", phonetic: "Aq-la", script: "ܥܩܠܐ", arabic: "كاحل", categories: ["adjective"] },

  { word: "Ṣiv'a", translation: "Toe", phonetic: "Ṣiv-'a", script: "ܨܒܥܐ", arabic: "إصبع قدم", categories: ["body"] },

  { word: "Ṭipra", translation: "Nail/Fingernail", phonetic: "Ṭip-ra", script: "ܛܦܪܐ", arabic: "ظفر", categories: ["body"] },

  { word: "Karsa", translation: "Bone", phonetic: "Kar-sa", script: "ܟܪܣܐ", arabic: "عظم", categories: ["adjective"] },

  { word: "Dma", translation: "Blood", phonetic: "Dma", script: "ܕܡܐ", arabic: "دم", categories: ["adjective"] },

  { word: "Našma", translation: "Breath/Soul", phonetic: "Naš-ma", script: "ܢܫܡܐ", arabic: "نفس", categories: ["adjective"] },

  { word: "Napša", translation: "Soul/Life", phonetic: "Nap-ša", script: "ܢܦܫܐ", arabic: "روح", categories: ["adjective"] },

  { word: "Rēha", translation: "Smell/Scent", phonetic: "Rē-ha", script: "ܪܝܚܐ", arabic: "شم", categories: ["adjective"] },

  { word: "Ṭa'ma", translation: "Taste", phonetic: "Ṭa-'ma", script: "ܛܥܡܐ", arabic: "تذوق", categories: ["adjective"] },

  { word: "Qāla", translation: "Voice", phonetic: "Qā-la", script: "ܩܠܐ", arabic: "صوت", categories: ["adjective"] },

  { word: "Dmē", translation: "Tears", phonetic: "Dmē", script: "ܕܡܥܐ", arabic: "دموع", categories: ["adjective"] },

  { word: "Rukha", translation: "Saliva/Spit", phonetic: "Ru-kha", script: "ܪܘܟܐ", arabic: "لعاب", categories: ["adjective"] },

  { word: "Šaptha", translation: "Lip", phonetic: "Šap-tha", script: "ܫܦܬܐ", arabic: "شفة", categories: ["adjective"] },

  { word: "Gavīna", translation: "Eyebrow", phonetic: "Ga-vī-na", script: "ܓܒܝܢܐ", arabic: "حاجب", categories: ["body"] },

  { word: "Šep'a", translation: "Eyelash", phonetic: "Šep-'a", script: "ܫܦܥܐ", arabic: "رمش", categories: ["body"] },

  { word: "Daqna", translation: "Beard", phonetic: "Daq-na", script: "ܕܩܢܐ", arabic: "لحية", categories: ["body"] },

  { word: "Sbarta", translation: "Mustache", phonetic: "Sbar-ta", script: "ܣܒܪܬܐ", arabic: "شارب", categories: ["adjective"] },

  { word: "Qādla", translation: "Neck", phonetic: "Qād-la", script: "ܩܕܠܐ", arabic: "رقبة", categories: ["body"] },

  { word: "Gargartha", translation: "Throat", phonetic: "Gar-gar-tha", script: "ܓܪܓܪܬܐ", arabic: "حلق", categories: ["adjective"] },


  // More Clothing
  { word: "Nakhta", translation: "Dress", phonetic: "Nakh-ta", script: "ܢܚܬܐ", arabic: "فستان", categories: ["adjective"] },

  { word: "Ṭaylasa", translation: "Veil/Scarf", phonetic: "Ṭay-la-sa", script: "ܛܝܠܣܐ", arabic: "حجاب", categories: ["adjective"] },

  { word: "Zunara", translation: "Belt", phonetic: "Zu-na-ra", script: "ܙܢܪܐ", arabic: "حزام", categories: ["adjective"] },

  { word: "Sarwāla", translation: "Trousers", phonetic: "Sar-wā-la", script: "ܣܪܘܠܐ", arabic: "بنطلون", categories: ["adjective"] },

  { word: "Quptha", translation: "Coat", phonetic: "Qup-tha", script: "ܩܘܦܬܐ", arabic: "معطف", categories: ["adjective"] },

  { word: "Jubba", translation: "Robe", phonetic: "Jub-ba", script: "ܓܘܒܐ", arabic: "روب", categories: ["adjective"] },

  { word: "Idara", translation: "Sleeve", phonetic: "I-da-ra", script: "ܐܝܕܪܐ", arabic: "كم", categories: ["adjective"] },

  { word: "Gēba", translation: "Pocket", phonetic: "Gē-ba", script: "ܓܝܒܐ", arabic: "جيب", categories: ["adjective"] },

  { word: "Qnāta", translation: "Button", phonetic: "Qnā-ta", script: "ܩܢܬܐ", arabic: "زر", categories: ["adjective"] },

  { word: "Khayṭa", translation: "Thread", phonetic: "Khay-ṭa", script: "ܚܝܛܐ", arabic: "خيط", categories: ["adjective"] },

  { word: "Makhṭa", translation: "Needle", phonetic: "Makh-ṭa", script: "ܡܟܬܐ", arabic: "إبرة", categories: ["adjective"] },

  { word: "Qaṣa", translation: "Scissors", phonetic: "Qa-ṣa", script: "ܩܨܐ", arabic: "مقص", categories: ["adjective"] },


  // Pronouns & Grammar
  { word: "Ana", translation: "I", phonetic: "A-na", script: "ܐܢܐ", arabic: "أنا", categories: ["adjective"] },

  { word: "At", translation: "You (masc. sing.)", phonetic: "At", script: "ܐܢܬ", arabic: "أنت", categories: ["adjective"] },

  { word: "Ati", translation: "You (fem. sing.)", phonetic: "A-ti", script: "ܐܢܬܝ", arabic: "أنت", categories: ["adjective"] },

  { word: "Awa", translation: "He", phonetic: "A-wa", script: "ܗܘ", arabic: "هو", categories: ["adjective"] },

  { word: "Aya", translation: "She", phonetic: "A-ya", script: "ܗܝ", arabic: "هي", categories: ["adjective"] },

  { word: "Akhnan", translation: "We", phonetic: "Akh-nan", script: "ܐܚܢܢ", arabic: "نحن", categories: ["adjective"] },

  { word: "Atwon", translation: "You (masc. pl.)", phonetic: "At-won", script: "ܐܢܬܘܢ", arabic: "أنت", categories: ["adjective"] },

  { word: "Atēn", translation: "You (fem. pl.)", phonetic: "A-tēn", script: "ܐܢܬܝܢ", arabic: "أنت", categories: ["adjective"] },

  { word: "Anē", translation: "They (masc.)", phonetic: "A-nē", script: "ܐܢܝ", arabic: "هم", categories: ["adjective"] },

  { word: "Anēn", translation: "They (fem.)", phonetic: "A-nēn", script: "ܐܢܝܢ", arabic: "هم", categories: ["adjective"] },


  // More Common Words
  { word: "Kul", translation: "All/Every", phonetic: "Kul", script: "ܟܠ", arabic: "كل", categories: ["adjective"] },

  { word: "Kūlē", translation: "Everyone", phonetic: "Kū-lē", script: "ܟܠܗ", arabic: "الجميع", categories: ["adjective"] },

  { word: "Meddem", translation: "Something", phonetic: "Med-dem", script: "ܡܕܡ", arabic: "شيء", categories: ["adjective"] },

  { word: "La Khit", translation: "Nothing", phonetic: "La Khit", script: "ܠܐ ܚܬ", arabic: "لا شيء", categories: ["adjective"] },

  { word: "Haḏā", translation: "This (masc.)", phonetic: "Ha-ḏā", script: "ܗܕܐ", arabic: "هذا", categories: ["adjective"] },

  { word: "Haḏē", translation: "This (fem.)", phonetic: "Ha-ḏē", script: "ܗܕܐ", arabic: "هذا", categories: ["adjective"] },

  { word: "Haw", translation: "That (masc.)", phonetic: "Haw", script: "ܗܘ", arabic: "ذلك", categories: ["adjective"] },

  { word: "Hayē", translation: "That (fem.)", phonetic: "Ha-yē", script: "ܗܝ", arabic: "ذلك", categories: ["adjective"] },

  { word: "Hālen", translation: "These", phonetic: "Hā-len", script: "ܗܠܝܢ", arabic: "هؤلاء", categories: ["adjective"] },

  { word: "Hānōn", translation: "Those", phonetic: "Hā-nōn", script: "ܗܢܘܢ", arabic: "أولئك", categories: ["adjective"] },

  { word: "Zō'a", translation: "Few/Little", phonetic: "Zō-'a", script: "ܙܥܘܪܐ", arabic: "قليل", categories: ["adjective"] },

  { word: "Šapirā", translation: "Beautiful/Good", phonetic: "Ša-pi-rā", script: "ܫܦܝܪܐ", arabic: "جميل", categories: ["adjective"] },

  { word: "Bīša", translation: "Bad/Evil", phonetic: "Bī-ša", script: "ܒܝܫܐ", arabic: "سيء", categories: ["adjective"] },

  { word: "Ḥadṯa", translation: "New", phonetic: "Ḥad-ṯa", script: "ܚܕܬܐ", arabic: "جديد", categories: ["adjective"] },

  { word: "'Atiqa", translation: "Old/Ancient", phonetic: "'A-ti-qa", script: "ܥܬܝܩܐ", arabic: "قديم", categories: ["adjective"] },

  { word: "Yaqurā", translation: "Precious/Heavy", phonetic: "Ya-qu-rā", script: "ܝܩܘܪܐ", arabic: "ثمين", categories: ["adjective"] },

  { word: "Qalīlā", translation: "Light/Easy", phonetic: "Qa-lī-lā", script: "ܩܠܝܠܐ", arabic: "خفيف", categories: ["adjective"] },

  { word: "Khwārā", translation: "White/Pure", phonetic: "Khwā-rā", script: "ܚܘܪܐ", arabic: "أبيض", categories: ["adjective"] },

  { word: "Ṭuvrā", translation: "Clean/Pure", phonetic: "Ṭuv-rā", script: "ܛܘܒܪܐ", arabic: "نظف", categories: ["adjective"] },

  { word: "Ṭanpā", translation: "Dirty/Unclean", phonetic: "Ṭan-pā", script: "ܛܢܦܐ", arabic: "وسخ", categories: ["adjective"] },

  { word: "Halyā", translation: "Sweet", phonetic: "Hal-yā", script: "ܚܠܝܐ", arabic: "حلو", categories: ["adjective"] },

  { word: "Marirā", translation: "Bitter", phonetic: "Ma-ri-rā", script: "ܡܪܝܪܐ", arabic: "مر", categories: ["adjective"] },

  { word: "Melyā", translation: "Full", phonetic: "Mel-yā", script: "ܡܠܝܐ", arabic: "ممتلئ", categories: ["adjective"] },

  { word: "Sriqa", translation: "Empty", phonetic: "Sri-qa", script: "ܣܪܝܩܐ", arabic: "فارغ", categories: ["adjective"] },


  // More Phrases
  { word: "Ana Itwan", translation: "I am here", phonetic: "A-na It-wan", script: "ܐܢܐ ܐܝܬܘܢ", arabic: "", categories: ["adjective"] },

  { word: "La Yadin ana", translation: "I don't know", phonetic: "La Ya-din a-na", script: "ܠܐ ܝܕܥ ܐܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Yadin ana", translation: "I know", phonetic: "Ya-din a-na", script: "ܝܕܥ ܐܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Ba'en ana", translation: "I want", phonetic: "Ba-'en a-na", script: "ܒܥܐ ܐܢܐ", arabic: "", categories: ["adjective"] },

  { word: "La Ba'en", translation: "I don't want", phonetic: "La Ba-'en", script: "ܠܐ ܒܥܐ", arabic: "", categories: ["adjective"] },

  { word: "Kamen Khit", translation: "One more time", phonetic: "Ka-men Khit", script: "ܟܡܢ ܚܕܐ", arabic: "", categories: ["adjective"] },

  { word: "Min Fadhlokh", translation: "Please (to male)", phonetic: "Min Fadh-lokh", script: "ܡܢ ܦܕܠܘܟ", arabic: "من فضلك", categories: ["adjective"] },

  { word: "Min Fadhlakh", translation: "Please (to female)", phonetic: "Min Fadh-lakh", script: "ܡܢ ܦܕܠܟ", arabic: "من فضلك", categories: ["adjective"] },

  { word: "La Marri", translation: "Don't worry", phonetic: "La Mar-ri", script: "ܠܐ ܡܪܝ", arabic: "", categories: ["adjective"] },

  { word: "Kheena", translation: "Slowly", phonetic: "Khee-na", script: "ܟܝܢܐ", arabic: "", categories: ["adjective"] },

  { word: "Šapir", translation: "Well/Good", phonetic: "Ša-pir", script: "ܫܦܝܪ", arabic: "", categories: ["adjective"] },

  { word: "Amin", translation: "Amen/Truly", phonetic: "A-min", script: "ܐܡܝܢ", arabic: "", categories: ["adjective"] },

  { word: "Barikh Mor", translation: "Bless us, Lord", phonetic: "Ba-rikh Mor", script: "ܒܪܝܟ ܡܪܝ", arabic: "", categories: ["adjective"] },


  // More Common Greetings & Phrases
  { word: "Safa", translation: "Morning", phonetic: "Sa-fa", script: "ܨܦܪܐ", arabic: "صباح", categories: ["time"] },

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

  { word: "Khuba", translation: "Love", phonetic: "Khu-ba", script: "ܚܘܒܐ", arabic: "أحب", categories: ["adjective"] },

  { word: "Khwab", translation: "Friend (male)", phonetic: "Khwab", script: "ܚܒܪܐ", arabic: "", categories: ["adjective"] },

  { word: "Khwarta", translation: "Friend (female)", phonetic: "Khwar-ta", script: "ܚܒܪܬܐ", arabic: "", categories: ["adjective"] },


  // More Verbs & Actions
  { word: "Ate", translation: "Come / Coming", phonetic: "A-te", script: "ܐܬܐ", arabic: "أتى", categories: ["adjective"] },

  { word: "Yatib", translation: "Sit / Sitting", phonetic: "Ya-tib", script: "ܝܬܒ", arabic: "جلس", categories: ["adjective"] },

  { word: "Qaym", translation: "Stand / Standing", phonetic: "Qaym", script: "ܩܝܡ", arabic: "وقف", categories: ["adjective"] },

  { word: "Rakhitz", translation: "Run / Running", phonetic: "Ra-khitz", script: "ܪܚܨ", arabic: "ركض", categories: ["adjective"] },

  { word: "Mhalikh", translation: "Walk / Walking", phonetic: "Mha-likh", script: "ܡܗܠܟ", arabic: "مشى", categories: ["adjective"] },

  { word: "Pateakh", translation: "Open / Opening", phonetic: "Pa-te-akh", script: "ܦܬܚ", arabic: "فتح", categories: ["adjective"] },

  { word: "Sakir", translation: "Close / Closing", phonetic: "Sa-kir", script: "ܣܟܪ", arabic: "أغلق", categories: ["adjective"] },

  { word: "Shami", translation: "Hear / Listening", phonetic: "Sha-mi", script: "ܫܡܥ", arabic: "سمع", categories: ["adjective"] },

  { word: "Amir", translation: "Say / Saying", phonetic: "A-mir", script: "ܐܡܪ", arabic: "", categories: ["adjective"] },

  { word: "Mmalil", translation: "Speak / Speaking", phonetic: "Mma-lil", script: "ܡܠܠ", arabic: "تكلم", categories: ["adjective"] },

  { word: "Khatib", translation: "Write / Writing", phonetic: "Kha-tib", script: "ܟܬܒ", arabic: "كتب", categories: ["adjective"] },

  { word: "Yalip", translation: "Learn / Learning", phonetic: "Ya-lip", script: "ܝܠܦ", arabic: "تعلم", categories: ["adjective"] },

  { word: "Malip", translation: "Teach / Teaching", phonetic: "Ma-lip", script: "ܡܠܦ", arabic: "علم", categories: ["adjective"] },

  { word: "Shayil", translation: "Ask / Asking", phonetic: "Sha-yil", script: "ܫܐܠ", arabic: "", categories: ["adjective"] },

  { word: "Mkhapir", translation: "Search / Searching", phonetic: "Mkha-pir", script: "ܡܚܦܪ", arabic: "بحث", categories: ["nature"] },

  { word: "Yatwa", translation: "Gave / Give", phonetic: "Yat-wa", script: "ܝܗܒ", arabic: "", categories: ["adjective"] },

  { word: "Saqil", translation: "Take / Taking", phonetic: "Sa-qil", script: "ܫܩܠ", arabic: "أخذ", categories: ["adjective"] },

  { word: "Shadir", translation: "Send / Sending", phonetic: "Sha-dir", script: "ܫܕܪ", arabic: "أرسل", categories: ["adjective"] },

  { word: "Mbasim", translation: "Fix / Fixing", phonetic: "Mba-sim", script: "ܡܒܣܡ", arabic: "أصلح", categories: ["adjective"] },

  { word: "Khawib", translation: "Think / Thinking", phonetic: "Kha-wib", script: "ܚܫܒ", arabic: "فكر", categories: ["adjective"] },

  { word: "Bayi", translation: "Want / Wanting", phonetic: "Ba-yi", script: "ܒܥܐ", arabic: "أراد", categories: ["adjective"] },

  { word: "Mkhayil", translation: "Can / Able to", phonetic: "Mkha-yil", script: "ܡܟܝܠ", arabic: "استطاع", categories: ["adjective"] },

  { word: "Msalli", translation: "Pray / Praying", phonetic: "Msal-li", script: "ܡܨܠܐ", arabic: "صلى", categories: ["adjective"] },

  { word: "Mbarikh", translation: "Bless / Blessing", phonetic: "Mba-rikh", script: "ܡܒܪܟ", arabic: "بارك", categories: ["adjective"] },

  { word: "Mshadir", translation: "Help / Helping", phonetic: "Msha-dir", script: "ܡܫܕܪ", arabic: "ساعد", categories: ["phrase"] },

  { word: "Mqayim", translation: "Stay / Staying", phonetic: "Mqa-yim", script: "ܡܩܝܡ", arabic: "بقي", categories: ["adjective"] },

  { word: "Shapil", translation: "Pull / Pulling", phonetic: "Sha-pil", script: "ܫܦܠ", arabic: "سحب", categories: ["adjective"] },

  { word: "Daqi", translation: "Push / Pushing", phonetic: "Da-qi", script: "ܕܩܐ", arabic: "دفع", categories: ["adjective"] },

  { word: "Tali", translation: "Hang / Hanging", phonetic: "Ta-li", script: "ܬܠܐ", arabic: "علق", categories: ["adjective"] },

  { word: "Nakhit", translation: "Fall / Falling", phonetic: "Na-khit", script: "ܢܚܬ", arabic: "خريف", categories: ["adjective"] },


  // Household & Daily Life
  { word: "Tara", translation: "Door", phonetic: "Ta-ra", script: "ܬܪܥܐ", arabic: "باب", categories: ["noun"] },

  { word: "Kawta", translation: "Window", phonetic: "Kaw-ta", script: "ܟܘܬܐ", arabic: "نافذة", categories: ["nature"] },

  { word: "Shqapa", translation: "Ceiling", phonetic: "Shqa-pa", script: "ܫܩܦܐ", arabic: "", categories: ["noun"] },

  { word: "Araa", translation: "Floor/Ground", phonetic: "Ar-aa", script: "ܐܪܥܐ", arabic: "أرضية", categories: ["noun"] },

  { word: "Gayra", translation: "Wall", phonetic: "Gay-ra", script: "ܓܕܪܐ", arabic: "", categories: ["noun"] },

  { word: "Nuhra", translation: "Light/Lamp", phonetic: "Nuh-ra", script: "ܢܘܗܪܐ", arabic: "خفيف", categories: ["adjective"] },

  { word: "Madkhna", translation: "Kitchen", phonetic: "Mad-khna", script: "ܡܕܟܢܐ", arabic: "مطبخ", categories: ["noun"] },

  { word: "Khawshekha", translation: "Bathroom", phonetic: "Khaw-she-kha", script: "ܚܘܫܟܐ", arabic: "حمام", categories: ["noun"] },

  { word: "Madrasha", translation: "Bedroom", phonetic: "Mad-ra-sha", script: "ܡܕܪܫܐ", arabic: "غرفة نوم", categories: ["noun"] },

  { word: "Gardina", translation: "Garden", phonetic: "Gar-di-na", script: "ܓܪܕܝܢܐ", arabic: "حديقة", categories: ["noun"] },

  { word: "Saqpa", translation: "Roof", phonetic: "Saq-pa", script: "ܣܩܦܐ", arabic: "سقف", categories: ["noun"] },

  { word: "Daraja", translation: "Stairs", phonetic: "Da-ra-ja", script: "ܕܪܓܐ", arabic: "درج", categories: ["adjective"] },

  { word: "Tanura", translation: "Oven", phonetic: "Ta-nu-ra", script: "ܬܢܘܪܐ", arabic: "فرن", categories: ["adjective"] },

  { word: "Makhla", translation: "Food/Meal", phonetic: "Makh-la", script: "ܡܐܟܠܐ", arabic: "", categories: ["adjective"] },

  { word: "Shaqta", translation: "Drink", phonetic: "Shaq-ta", script: "ܫܩܝܬܐ", arabic: "شرب", categories: ["adjective"] },

  { word: "Sayna", translation: "Plate", phonetic: "Say-na", script: "ܨܝܢܐ", arabic: "صحن", categories: ["home"] },

  { word: "Kasa", translation: "Cup/Glass", phonetic: "Ka-sa", script: "ܟܣܐ", arabic: "كوب", categories: ["home"] },

  { word: "Purshana", translation: "Spoon", phonetic: "Pur-sha-na", script: "ܦܘܪܫܢܐ", arabic: "ملعقة", categories: ["home"] },

  { word: "Qawra", translation: "Fork", phonetic: "Qaw-ra", script: "ܩܘܪܐ", arabic: "شوكة", categories: ["home"] },

  { word: "Tarpisa", translation: "Table", phonetic: "Tar-pi-sa", script: "ܛܪܦܝܣܐ", arabic: "طاولة", categories: ["adjective"] },

  { word: "Sapla", translation: "Bowl", phonetic: "Sap-la", script: "ܣܦܠܐ", arabic: "وعاء", categories: ["adjective"] },

  { word: "Tanjara", translation: "Pot", phonetic: "Tan-ja-ra", script: "ܬܢܓܪܐ", arabic: "قدر", categories: ["adjective"] },

  { word: "Nakhtana", translation: "Towel", phonetic: "Nakh-ta-na", script: "ܢܟܬܢܐ", arabic: "منشفة", categories: ["adjective"] },

  { word: "Sabuna", translation: "Soap", phonetic: "Sa-bu-na", script: "ܣܒܘܢܐ", arabic: "صابون", categories: ["adjective"] },

  { word: "Mushkha", translation: "Oil", phonetic: "Mush-kha", script: "ܡܫܚܐ", arabic: "زيت", categories: ["adjective"] },

  { word: "Milkha", translation: "Salt", phonetic: "Mil-kha", script: "ܡܠܚܐ", arabic: "ملح", categories: ["adjective"] },

  { word: "Dubsha", translation: "Honey", phonetic: "Dub-sha", script: "ܕܒܫܐ", arabic: "عسل", categories: ["adjective"] },

  { word: "Kheshla", translation: "Fruit", phonetic: "Khesh-la", script: "ܚܫܠܐ", arabic: "فاكهة", categories: ["adjective"] },

  { word: "Yarqa", translation: "Vegetable", phonetic: "Yar-qa", script: "ܝܪܩܐ", arabic: "", categories: ["adjective"] },


  // More Time Expressions
  { word: "Yawma", translation: "Day", phonetic: "Yaw-ma", script: "ܝܘܡܐ", arabic: "يوم", categories: ["adjective"] },

  { word: "Lele", translation: "Night", phonetic: "Le-le", script: "ܠܠܝܐ", arabic: "ليل", categories: ["adjective"] },

  { word: "Shata", translation: "Year", phonetic: "Sha-ta", script: "ܫܢܬܐ", arabic: "سنة", categories: ["time"] },

  { word: "Yarha", translation: "Month", phonetic: "Yar-ha", script: "ܝܪܚܐ", arabic: "شهر", categories: ["time"] },

  { word: "Sha'ta", translation: "Hour", phonetic: "Sha'-ta", script: "ܫܥܬܐ", arabic: "ساعة", categories: ["adjective"] },

  { word: "Regha", translation: "Minute/Moment", phonetic: "Reg-ha", script: "ܪܓܥܐ", arabic: "دقيقة", categories: ["time"] },

  { word: "Hashâ", translation: "Now", phonetic: "Ha-shâ", script: "ܗܫܐ", arabic: "الآن", categories: ["time"] },

  { word: "Qadam", translation: "Before/Earlier", phonetic: "Qa-dam", script: "ܩܕܡ", arabic: "قبل", categories: ["time"] },

  { word: "Yawma Akhrin", translation: "Tomorrow", phonetic: "Yaw-ma Akh-rin", script: "ܝܘܡܐ ܐܚܪܝܢ", arabic: "غدا", categories: ["adjective"] },

  { word: "Etmali", translation: "Yesterday", phonetic: "Et-ma-li", script: "ܐܬܡܠܝ", arabic: "أمس", categories: ["adjective"] },

  { word: "Awdana", translation: "Always", phonetic: "Aw-da-na", script: "ܐܘܕܢܐ", arabic: "دائما", categories: ["adjective"] },

  { word: "Mitumt", translation: "Never", phonetic: "Mi-tumt", script: "ܡܬܘܡܬ", arabic: "أبدا", categories: ["adjective"] },

  { word: "Qalil", translation: "Sometimes", phonetic: "Qa-lil", script: "ܩܠܝܠ", arabic: "أحيانا", categories: ["adjective"] },


  // More Numbers
  { word: "Tlathsar", translation: "Thirteen", phonetic: "Tlath-sar", script: "ܬܠܬܥܣܪ", arabic: "ثلاثة عشر", categories: ["number"] },

  { word: "Arbassar", translation: "Fourteen", phonetic: "Arba-ssar", script: "ܐܪܒܥܣܪ", arabic: "أربعة عشر", categories: ["number"] },

  { word: "Khamshassar", translation: "Fifteen", phonetic: "Khamsha-ssar", script: "ܚܡܫܥܣܪ", arabic: "خمسة عشر", categories: ["number"] },

  { word: "Eshtassar", translation: "Sixteen", phonetic: "Eshta-ssar", script: "ܫܬܥܣܪ", arabic: "ستة عشر", categories: ["number"] },

  { word: "Shwassar", translation: "Seventeen", phonetic: "Shwa-ssar", script: "ܫܒܥܣܪ", arabic: "سبعة عشر", categories: ["number"] },

  { word: "Tmanyassar", translation: "Eighteen", phonetic: "Tmanya-ssar", script: "ܬܡܢܝܥܣܪ", arabic: "ثمانية عشر", categories: ["number"] },

  { word: "Tshassar", translation: "Nineteen", phonetic: "Tsha-ssar", script: "ܬܫܥܣܪ", arabic: "تسعة عشر", categories: ["number"] },

  { word: "Tlatin", translation: "Thirty", phonetic: "Tla-tin", script: "ܬܠܬܝܢ", arabic: "ثلاثون", categories: ["number"] },

  { word: "Arbin", translation: "Forty", phonetic: "Ar-bin", script: "ܐܪܒܥܝܢ", arabic: "أربعون", categories: ["number"] },

  { word: "Khamshiـn", translation: "Fifty", phonetic: "Khamshi-n", script: "ܚܡܫܝܢ", arabic: "خمسون", categories: ["number"] },

  { word: "Eshtin", translation: "Sixty", phonetic: "Esh-tin", script: "ܫܬܝܢ", arabic: "ستون", categories: ["number"] },

  { word: "Shwin", translation: "Seventy", phonetic: "Shwin", script: "ܫܒܥܝܢ", arabic: "سبعون", categories: ["number"] },

  { word: "Tmanin", translation: "Eighty", phonetic: "Tma-nin", script: "ܬܡܢܝܢ", arabic: "ثمانون", categories: ["number"] },

  { word: "Tshin", translation: "Ninety", phonetic: "Tshin", script: "ܬܫܥܝܢ", arabic: "تسعون", categories: ["number"] },

  { word: "Ima", translation: "Hundred", phonetic: "I-ma", script: "ܡܐܐ", arabic: "مائة", categories: ["number"] },


  // Weather & Nature
  { word: "Shamsha", translation: "Sun", phonetic: "Sham-sha", script: "ܫܡܫܐ", arabic: "شمس", categories: ["nature"] },

  { word: "Kawkwa", translation: "Star", phonetic: "Kaw-kwa", script: "ܟܘܟܒܐ", arabic: "نجم", categories: ["nature"] },

  { word: "Shmaya", translation: "Sky/Heaven", phonetic: "Shma-ya", script: "ܫܡܝܐ", arabic: "سماء", categories: ["nature"] },

  { word: "Ara", translation: "Earth", phonetic: "A-ra", script: "ܐܪܥܐ", arabic: "أرض", categories: ["nature"] },

  { word: "Mitra", translation: "Rain", phonetic: "Mit-ra", script: "ܡܛܪܐ", arabic: "مطر", categories: ["nature"] },

  { word: "Rukha", translation: "Wind", phonetic: "Ru-kha", script: "ܪܘܚܐ", arabic: "ريح", categories: ["nature"] },

  { word: "Anana", translation: "Cloud", phonetic: "A-na-na", script: "ܥܢܢܐ", arabic: "سحابة", categories: ["nature"] },

  { word: "Rama", translation: "Thunder", phonetic: "Ra-ma", script: "ܪܥܡܐ", arabic: "رعد", categories: ["nature"] },

  { word: "Qarta", translation: "Cold", phonetic: "Qar-ta", script: "ܩܪܬܐ", arabic: "بارد", categories: ["adjective"] },

  { word: "Habhaba", translation: "Flower", phonetic: "Hab-ha-ba", script: "ܗܒܗܒܐ", arabic: "زهرة", categories: ["nature"] },

  { word: "Yarqa", translation: "Leaf", phonetic: "Yar-qa", script: "ܛܪܦܐ", arabic: "ورقة", categories: ["adjective"] },

  { word: "Shwila", translation: "Root", phonetic: "Shwi-la", script: "ܫܪܫܐ", arabic: "جذر", categories: ["adjective"] },

  { word: "Darta", translation: "Garden", phonetic: "Dar-ta", script: "ܕܪܬܐ", arabic: "حديقة", categories: ["noun"] },

  { word: "Kippa", translation: "Stone/Rock", phonetic: "Kip-pa", script: "ܟܐܦܐ", arabic: "حجر", categories: ["nature"] },


  // Transportation & Travel
  { word: "Urha", translation: "Road/Way", phonetic: "Ur-ha", script: "ܐܘܪܚܐ", arabic: "طريق", categories: ["adjective"] },

  { word: "Gishra", translation: "Bridge", phonetic: "Gish-ra", script: "ܓܫܪܐ", arabic: "جسر", categories: ["noun"] },

  { word: "Mdinta", translation: "City/Town", phonetic: "Mdin-ta", script: "ܡܕܝܢܬܐ", arabic: "مدينة", categories: ["adjective"] },

  { word: "Qrita", translation: "Village", phonetic: "Qri-ta", script: "ܩܪܝܬܐ", arabic: "قرية", categories: ["adjective"] },

  { word: "Makhsana", translation: "Store/Shop", phonetic: "Makh-sa-na", script: "ܡܟܣܢܐ", arabic: "متجر", categories: ["adjective"] },

  { word: "Beth Kaspe", translation: "Bank", phonetic: "Beth Kas-pe", script: "ܒܝܬ ܟܣܦܐ", arabic: "بنك", categories: ["adjective"] },

  { word: "Beth Slota", translation: "Church", phonetic: "Beth Slo-ta", script: "ܒܝܬ ܨܠܘܬܐ", arabic: "كنيسة", categories: ["adjective"] },

  { word: "Beth Sipre", translation: "Library", phonetic: "Beth Sip-re", script: "ܒܝܬ ܣܦܪܐ", arabic: "مكتبة", categories: ["adjective"] },

  { word: "Beth Mrisha", translation: "Hospital", phonetic: "Beth Mri-sha", script: "ܒܝܬ ܡܪܥܐ", arabic: "مستشفى", categories: ["adjective"] },

  { word: "Beth Madrasha", translation: "School", phonetic: "Beth Mad-ra-sha", script: "ܒܝܬ ܡܕܪܫܐ", arabic: "مدرسة", categories: ["adjective"] },

  { word: "Rakba", translation: "Train", phonetic: "Rak-ba", script: "ܪܟܒܐ", arabic: "قطار", categories: ["adjective"] },

  { word: "Tayarta", translation: "Airplane", phonetic: "Ta-yar-ta", script: "ܛܝܪܬܐ", arabic: "طائرة", categories: ["adjective"] },

  { word: "Sipinta", translation: "Boat/Ship", phonetic: "Si-pin-ta", script: "ܣܦܝܢܬܐ", arabic: "قارب", categories: ["adjective"] },

  { word: "Rukhba", translation: "Vehicle", phonetic: "Rukh-ba", script: "ܪܟܘܒܐ", arabic: "مركبة", categories: ["adjective"] },

  { word: "Bayka", translation: "Bicycle", phonetic: "Bay-ka", script: "ܒܝܟܐ", arabic: "دراجة", categories: ["adjective"] },


  // More Emotions & States
  { word: "Khudta", translation: "Joy/Happiness", phonetic: "Khud-ta", script: "ܚܕܘܬܐ", arabic: "فرح", categories: ["adjective"] },

  { word: "Kriuta", translation: "Sadness/Sorrow", phonetic: "Kriu-ta", script: "ܟܪܝܘܬܐ", arabic: "حزن", categories: ["emotion"] },

  { word: "Dekhla", translation: "Fear", phonetic: "Dekh-la", script: "ܕܚܠܐ", arabic: "خوف", categories: ["adjective"] },

  { word: "Ghuza", translation: "Anger", phonetic: "Ghu-za", script: "ܪܘܓܙܐ", arabic: "غضب", categories: ["adjective"] },

  { word: "Shurkha", translation: "Hope", phonetic: "Shur-kha", script: "ܣܘܟܝܐ", arabic: "أمل", categories: ["adjective"] },

  { word: "Tara", translation: "Peace/Calm", phonetic: "Ta-ra", script: "ܫܠܡܐ", arabic: "سلام", categories: ["adjective"] },

  { word: "Teghmurta", translation: "Surprise", phonetic: "Tegh-mur-ta", script: "ܬܕܡܘܪܬܐ", arabic: "مفاجأة", categories: ["adjective"] },

  { word: "Buhta", translation: "Shame", phonetic: "Buh-ta", script: "ܒܗܬܬܐ", arabic: "عار", categories: ["adjective"] },

  { word: "Tayruta", translation: "Patience", phonetic: "Tay-ru-ta", script: "ܡܣܝܒܪܢܘܬܐ", arabic: "صبر", categories: ["adjective"] },


  // Additional essential words
  { word: "Khadshaba", translation: "Sunday", phonetic: "Khad-sha-ba", script: "ܚܕܫܒܐ", arabic: "الأحد", categories: ["time"] },
  { word: "Trayshaba", translation: "Monday", phonetic: "Tray-sha-ba", script: "ܬܪܝܢܫܒܐ", arabic: "الاثنين", categories: ["time"] },
  { word: "Tlathashaba", translation: "Tuesday", phonetic: "Tla-tha-sha-ba", script: "ܬܠܬܫܒܐ", arabic: "الثلاثاء", categories: ["time"] },
  { word: "Arbashaba", translation: "Wednesday", phonetic: "Ar-ba-sha-ba", script: "ܐܪܒܥܫܒܐ", arabic: "الأربعاء", categories: ["time"] },
  { word: "Khamshashaba", translation: "Thursday", phonetic: "Kham-sha-sha-ba", script: "ܚܡܫܫܒܐ", arabic: "الخميس", categories: ["time"] },
  { word: "Arubta", translation: "Friday", phonetic: "A-rub-ta", script: "ܥܪܘܒܬܐ", arabic: "الجمعة", categories: ["time"] },
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
  { word: "Tawa", translation: "Good", phonetic: "Ta-wa", script: "ܛܒܐ", arabic: "جيد", categories: ["adjective"] },
  { word: "Bisha", translation: "Bad/Evil", phonetic: "Bi-sha", script: "ܒܝܫܐ", arabic: "سيء", categories: ["adjective"] },
  { word: "Qaleela", translation: "Little/Few", phonetic: "Qa-lee-la", script: "ܩܠܝܠܐ", arabic: "قليل", categories: ["adjective"] },
  { word: "Khelta", translation: "Sweet", phonetic: "Khel-ta", script: "ܚܠܝܐ", arabic: "حلو", categories: ["adjective"] },
  { word: "Mareera", translation: "Bitter", phonetic: "Ma-ree-ra", script: "ܡܪܝܪܐ", arabic: "مر", categories: ["adjective"] },
  { word: "Qareera", translation: "Cold", phonetic: "Qa-ree-ra", script: "ܩܪܝܪܐ", arabic: "بارد", categories: ["adjective"] },
  { word: "Shma", translation: "Name", phonetic: "Sh-ma", script: "ܫܡܐ", arabic: "اسم", categories: ["noun"] },
  { word: "Atra", translation: "Country/Place", phonetic: "At-ra", script: "ܐܬܪܐ", arabic: "بلد", categories: ["noun"] },
  { word: "Umtha", translation: "Nation/People", phonetic: "Um-tha", script: "ܐܘܡܬܐ", arabic: "أمة", categories: ["noun"] },
  { word: "Zuza", translation: "Money", phonetic: "Zu-za", script: "ܙܘܙܐ", arabic: "مال", categories: ["noun"] },
  { word: "Egartha", translation: "Letter", phonetic: "E-gar-tha", script: "ܐܓܪܬܐ", arabic: "رسالة", categories: ["noun"] },
  { word: "Miltha", translation: "Word/Thing", phonetic: "Mil-tha", script: "ܡܠܬܐ", arabic: "كلمة", categories: ["noun"] },
  { word: "Shuraya", translation: "Beginning", phonetic: "Shu-ra-ya", script: "ܫܘܪܝܐ", arabic: "بداية", categories: ["noun"] },
  { word: "Sopa", translation: "End", phonetic: "So-pa", script: "ܣܘܦܐ", arabic: "نهاية", categories: ["noun"] },
  { word: "Khdessar", translation: "Eleven", phonetic: "Khd-es-sar", script: "ܚܕܥܣܪ", arabic: "أحد عشر", categories: ["number"] },
  { word: "Tressar", translation: "Twelve", phonetic: "Tres-sar", script: "ܬܪܥܣܪ", arabic: "اثنا عشر", categories: ["number"] },
  { word: "Tlathessar", translation: "Thirteen", phonetic: "Tla-thes-sar", script: "ܬܠܬܥܣܪ", arabic: "ثلاثة عشر", categories: ["number"] },
  { word: "Arb'in", translation: "Forty", phonetic: "Arb-in", script: "ܐܪܒܥܝܢ", arabic: "أربعون", categories: ["number"] },
  { word: "Khamšin", translation: "Fifty", phonetic: "Kham-šin", script: "ܚܡܫܝܢ", arabic: "خمسون", categories: ["number"] },
  { word: "Aina", translation: "Eye", phonetic: "Ai-na", script: "ܥܝܢܐ", arabic: "عين", categories: ["body"] },
  { word: "Edna", translation: "Ear", phonetic: "Ed-na", script: "ܐܕܢܐ", arabic: "أذن", categories: ["body"] },
  { word: "Khurṭma", translation: "Nose", phonetic: "Khur-ṭma", script: "ܚܪܛܡܐ", arabic: "أنف", categories: ["body"] },
  { word: "Etsba", translation: "Finger", phonetic: "Ets-ba", script: "ܐܨܒܥܐ", arabic: "إصبع", categories: ["body"] },
];
