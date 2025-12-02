export interface LessonQuestion {
  id: number;
  type: 'multiple-choice' | 'translation';
  question: string;
  options?: string[];
  correctAnswer: string;
}

export interface LessonVocabulary {
  word: string;
  translation: string;
  phonetic: string;
  script?: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  level: string;
  xpReward: number;
  icon?: string;
  vocabulary: LessonVocabulary[];
  content: LessonQuestion[];
}

export const lessonsData: Lesson[] = [
  {
    id: 1,
    title: "First Greetings",
    description: "Learn how to say hello and welcome in Chaldean.",
    level: "Beginner",
    xpReward: 100,
    icon: "👋",
    vocabulary: [
      { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma", script: "ܫܠܡܐ" },
      { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na", script: "ܒܫܝܢܐ" },
      { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh", script: "ܫܠܡܐ ܠܘܟ" },
      { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit", script: "ܕܐܟ݂ܝ ܘܬ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'Peace' or 'Hello'?",
        options: ["Shlama", "Bshina", "Spay", "Alaha"],
        correctAnswer: "Shlama"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Bshina' mean?",
        options: ["Goodbye", "Welcome", "Thank you", "Good"],
        correctAnswer: "Welcome"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Hello (to a male)",
        correctAnswer: "Shlamalokh"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "How do you say 'How are you?'",
        options: ["Dakhiwit", "Basima", "Shlama", "Spay"],
        correctAnswer: "Dakhiwit"
      }
    ]
  },
  {
    id: 2,
    title: "Counting 1-5",
    description: "Learn the first five numbers.",
    level: "Beginner",
    xpReward: 100,
    icon: "🔢",
    vocabulary: [
      { word: "Kha", translation: "One", phonetic: "Kha", script: "ܚܕ" },
      { word: "Tre", translation: "Two", phonetic: "Tre", script: "ܬܪܝܢ" },
      { word: "Tlatha", translation: "Three", phonetic: "Tla-tha", script: "ܬܠܬܐ" },
      { word: "Arba", translation: "Four", phonetic: "Ar-ba", script: "ܐܪܒܥܐ" },
      { word: "Khamsha", translation: "Five", phonetic: "Kham-sha", script: "ܚܡܫܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'One' in Chaldean?",
        options: ["Tre", "Kha", "Tlatha", "Arba"],
        correctAnswer: "Kha"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Which number is 'Khamsha'?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Select the correct order: 1, 2, 3",
        options: ["Kha, Tre, Tlatha", "Kha, Tlatha, Tre", "Tre, Kha, Tlatha"],
        correctAnswer: "Kha, Tre, Tlatha"
      }
    ]
  },
  {
    id: 3,
    title: "Family Members",
    description: "Learn words for family.",
    level: "Beginner",
    xpReward: 100,
    icon: "👨‍👩‍👧‍👦",
    vocabulary: [
      { word: "Baba", translation: "Father", phonetic: "Ba-ba", script: "ܒܒܐ" },
      { word: "Yima", translation: "Mother", phonetic: "Yi-ma", script: "ܝܡܐ" },
      { word: "Akhona", translation: "Brother", phonetic: "A-kho-na", script: "ܐܚܘܢܐ" },
      { word: "Khatha", translation: "Sister", phonetic: "Kha-tha", script: "ܚܬܐ" },
      { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa", script: "ܣܒܐ" },
      { word: "Gawra", translation: "Husband", phonetic: "Gaw-ra", script: "ܓܒܪܐ" },
      { word: "Bakhta", translation: "Wife", phonetic: "Bakh-ta", script: "ܒܟ݂ܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What does 'Baba' mean?",
        options: ["Mother", "Brother", "Father", "Sister"],
        correctAnswer: "Father"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Sister' in Chaldean?",
        options: ["Khatha", "Akhona", "Yima", "Sawa"],
        correctAnswer: "Khatha"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Who is 'Sawa'?",
        options: ["Uncle", "Grandfather", "Father", "Brother"],
        correctAnswer: "Grandfather"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "What does 'Bakhta' mean?",
        options: ["Wife", "Husband", "Sister", "Mother"],
        correctAnswer: "Wife"
      }
    ]
  },
  {
    id: 4,
    title: "Common Colors",
    description: "Learn basic colors in Chaldean.",
    level: "Beginner",
    xpReward: 120,
    icon: "🎨",
    vocabulary: [
      { word: "Smoqa", translation: "Red", phonetic: "Smo-qa", script: "ܣܡܘܩܐ" },
      { word: "Khwara", translation: "White", phonetic: "Khwa-ra", script: "ܚܘܪܐ" },
      { word: "Ukma", translation: "Black", phonetic: "Uk-ma", script: "ܐܘܟܡܐ" },
      { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka", script: "ܝܪܘܩܐ" },
      { word: "Khawra", translation: "Blue", phonetic: "Khaw-ra", script: "ܟܘܪܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Red' in Chaldean?",
        options: ["Smoqa", "Khwara", "Ukma", "Yaruka"],
        correctAnswer: "Smoqa"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What color is 'Ukma'?",
        options: ["White", "Black", "Blue", "Green"],
        correctAnswer: "Black"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: White",
        correctAnswer: "Khwara"
      }
    ]
  },
  {
    id: 5,
    title: "Food & Drink",
    description: "Essential vocabulary for eating and drinking.",
    level: "Beginner",
    xpReward: 150,
    icon: "🍽️",
    vocabulary: [
      { word: "Mya", translation: "Water", phonetic: "M-ya", script: "ܡܝܐ" },
      { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma", script: "ܠܚܡܐ" },
      { word: "Bisra", translation: "Meat", phonetic: "Bis-ra", script: "ܒܣܪܐ" },
      { word: "Chai", translation: "Tea", phonetic: "Chai", script: "ܟܐܝ" },
      { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha", script: "ܬܦܘܚܐ" },
      { word: "Kthayta", translation: "Chicken", phonetic: "Kthay-ta", script: "ܟܬܝܬܐ" },
      { word: "Pera", translation: "Fruit", phonetic: "Pe-ra", script: "ܦܐܪܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Water' in Chaldean?",
        options: ["Mya", "Lakhma", "Chai", "Qahwa"],
        correctAnswer: "Mya"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Translate 'Lakhma':",
        options: ["Meat", "Bread", "Cheese", "Apple"],
        correctAnswer: "Bread"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Tea",
        correctAnswer: "Chai"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "What is 'Kthayta'?",
        options: ["Chicken", "Meat", "Bread", "Fish"],
        correctAnswer: "Chicken"
      }
    ]
  },
  {
    id: 6,
    title: "Basic Actions",
    description: "Learn common verbs to express actions.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🏃",
    vocabulary: [
      { word: "Akhal", translation: "To Eat", phonetic: "A-khal", script: "ܐܟܠ" },
      { word: "Shtay", translation: "To Drink", phonetic: "Sh-tay", script: "ܫܬܐ" },
      { word: "Dmikh", translation: "To Sleep", phonetic: "D-mikh", script: "ܕܡܟ" },
      { word: "Yithib", translation: "To Sit", phonetic: "Yi-thib", script: "ܝܬܒ" },
      { word: "Azil", translation: "To Go", phonetic: "A-zil", script: "ܐܙܠ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What means 'To Eat'?",
        options: ["Shtay", "Akhal", "Dmikh", "Qim"],
        correctAnswer: "Akhal"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "If you are thirsty, you want to ___?",
        options: ["Akhal", "Shtay", "Yithib", "Dmikh"],
        correctAnswer: "Shtay"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: To Sleep",
        correctAnswer: "Dmikh"
      }
    ]
  },
  {
    id: 7,
    title: "Time & Days",
    description: "Learn about time and days of the week.",
    level: "Intermediate",
    xpReward: 150,
    icon: "📅",
    vocabulary: [
      { word: "Yoma", translation: "Day", phonetic: "Yo-ma", script: "ܝܘܡܐ" },
      { word: "Lelya", translation: "Night", phonetic: "Lel-ya", script: "ܠܠܝܐ" },
      { word: "Idyo", translation: "Today", phonetic: "Id-yo", script: "ܐܕܝܘ" },
      { word: "Qam", translation: "Tomorrow", phonetic: "Qam", script: "ܩܐܡ" },
      { word: "Shabta", translation: "Saturday", phonetic: "Shab-ta", script: "ܫܒܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Today'?",
        options: ["Idyo", "Timmal", "Qam", "Yoma"],
        correctAnswer: "Idyo"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What comes after day (Yoma)?",
        options: ["Lelya", "Shabta", "Idyo", "Qam"],
        correctAnswer: "Lelya"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Saturday",
        correctAnswer: "Shabta"
      }
    ]
  },
  {
    id: 8,
    title: "Animals",
    description: "Common animals you might see.",
    level: "Beginner",
    xpReward: 130,
    icon: "🐕",
    vocabulary: [
      { word: "Kalba", translation: "Dog", phonetic: "Kal-ba", script: "ܟܠܒܐ" },
      { word: "Qato", translation: "Cat", phonetic: "Qa-to", script: "ܩܛܘ" },
      { word: "Susya", translation: "Horse", phonetic: "Sus-ya", script: "ܣܘܣܝܐ" },
      { word: "Tawra", translation: "Bull", phonetic: "Taw-ra", script: "ܬܘܪܐ" },
      { word: "Khmara", translation: "Donkey", phonetic: "Khma-ra", script: "ܚܡܪܐ" },
      { word: "Arya", translation: "Lion", phonetic: "Ar-ya", script: "ܐܪܝܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Dog'?",
        options: ["Kalba", "Qato", "Susya", "Tawra"],
        correctAnswer: "Kalba"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Translate 'Qato':",
        options: ["Dog", "Cat", "Horse", "Mouse"],
        correctAnswer: "Cat"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Horse",
        correctAnswer: "Susya"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "What animal is 'Arya'?",
        options: ["Lion", "Bear", "Tiger", "Wolf"],
        correctAnswer: "Lion"
      }
    ]
  },
  {
    id: 9,
    title: "Nature & Weather",
    description: "Words for the world around us.",
    level: "Intermediate",
    xpReward: 140,
    icon: "🌤️",
    vocabulary: [
      { word: "Shimsha", translation: "Sun", phonetic: "Shim-sha", script: "ܫܡܫܐ" },
      { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ" },
      { word: "Matra", translation: "Rain", phonetic: "Mat-ra", script: "ܡܛܪܐ" },
      { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ" },
      { word: "Kokhva", translation: "Star", phonetic: "Kokh-va", script: "ܟܘܟܒܐ" },
      { word: "Nura", translation: "Fire", phonetic: "Nu-ra", script: "ܢܘܪܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What shines during the day?",
        options: ["Shimsha", "Sahra", "Kokhva", "Talga"],
        correctAnswer: "Shimsha"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Rain'?",
        options: ["Matra", "Talga", "Mya", "Yoma"],
        correctAnswer: "Matra"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Snow",
        correctAnswer: "Talga"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "What does 'Nura' mean?",
        options: ["Fire", "Water", "Earth", "Air"],
        correctAnswer: "Fire"
      }
    ]
  },
  {
    id: 10,
    title: "The Body",
    description: "Parts of the human body.",
    level: "Intermediate",
    xpReward: 150,
    icon: "👀",
    vocabulary: [
      { word: "Ena", translation: "Eye", phonetic: "E-na", script: "ܥܝܢܐ" },
      { word: "Nakhira", translation: "Nose", phonetic: "Na-khi-ra", script: "ܢܚܝܪܐ" },
      { word: "Puma", translation: "Mouth", phonetic: "Pu-ma", script: "ܦܘܡܐ" },
      { word: "Odna", translation: "Ear", phonetic: "Od-na", script: "ܐܕܢܐ" },
      { word: "Itha", translation: "Hand", phonetic: "I-tha", script: "ܐܝܕܐ" },
      { word: "Lishana", translation: "Tongue/Language", phonetic: "Li-sha-na", script: "ܠܫܢܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What do you see with?",
        options: ["Ena", "Odna", "Puma", "Nakhira"],
        correctAnswer: "Ena"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Hand'?",
        options: ["Itha", "Regla", "Reesha", "Libba"],
        correctAnswer: "Itha"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Mouth",
        correctAnswer: "Puma"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "What is 'Lishana'?",
        options: ["Tongue", "Tooth", "Lip", "Nose"],
        correctAnswer: "Tongue"
      }
    ]
  },
  {
    id: 11,
    title: "At Home",
    description: "Items found in a house.",
    level: "Beginner",
    xpReward: 130,
    icon: "🏠",
    vocabulary: [
      { word: "Bayta", translation: "House", phonetic: "Bay-ta", script: "ܒܝܬܐ" },
      { word: "Tarra", translation: "Door", phonetic: "Tar-ra", script: "ܬܪܥܐ" },
      { word: "Kawtha", translation: "Window", phonetic: "Kaw-tha", script: "ܟܘܬܐ" },
      { word: "Kursa", translation: "Chair", phonetic: "Kur-sa", script: "ܟܘܪܣܝܐ" },
      { word: "Shwitha", translation: "Bed", phonetic: "Shwi-tha", script: "ܫܘܝܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'House'?",
        options: ["Bayta", "Igara", "Tarra", "Kursa"],
        correctAnswer: "Bayta"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "You sleep on a:",
        options: ["Shwitha", "Kursa", "Pata", "Tarra"],
        correctAnswer: "Shwitha"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Door",
        correctAnswer: "Tarra"
      }
    ]
  },
  {
    id: 12,
    title: "Clothing",
    description: "Names of clothes.",
    level: "Intermediate",
    xpReward: 140,
    icon: "👕",
    vocabulary: [
      { word: "Sudra", translation: "Shirt", phonetic: "Sud-ra", script: "ܨܘܕܪܐ" },
      { word: "Sharwala", translation: "Pants", phonetic: "Shar-wa-la", script: "ܫܪܘܠܐ" },
      { word: "Soltha", translation: "Shoe", phonetic: "Sol-tha", script: "ܣܘܠܬܐ" },
      { word: "Kusitha", translation: "Hat", phonetic: "Ku-si-tha", script: "ܟܘܣܝܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What are 'Pants'?",
        options: ["Sharwala", "Sudra", "Soltha", "Kusitha"],
        correctAnswer: "Sharwala"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "You wear this on your feet:",
        options: ["Soltha", "Kusitha", "Sudra", "Sharwala"],
        correctAnswer: "Soltha"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Shirt",
        correctAnswer: "Sudra"
      }
    ]
  },
  {
    id: 13,
    title: "Common Adjectives",
    description: "Describing things.",
    level: "Intermediate",
    xpReward: 150,
    icon: "✨",
    vocabulary: [
      { word: "Raba", translation: "Big", phonetic: "Ra-ba", script: "ܪܒܐ" },
      { word: "Zora", translation: "Small", phonetic: "Zo-ra", script: "ܙܥܘܪܐ" },
      { word: "Yarikha", translation: "Long", phonetic: "Ya-ri-kha", script: "ܝܪܝܟ݂ܐ" },
      { word: "Krya", translation: "Short", phonetic: "Kry-a", script: "ܟܪܝܐ" },
      { word: "Khatha", translation: "New", phonetic: "Kha-tha", script: "ܚܕܬܐ" },
      { word: "Atiqa", translation: "Old", phonetic: "A-ti-qa", script: "ܥܬܝܩܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Opposite of Small (Zora) is:",
        options: ["Raba", "Krya", "Atiqa", "Khatha"],
        correctAnswer: "Raba"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What means 'New'?",
        options: ["Khatha", "Atiqa", "Yarikha", "Zora"],
        correctAnswer: "Khatha"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Small",
        correctAnswer: "Zora"
      }
    ]
  },
  {
    id: 14,
    title: "More Numbers",
    description: "Counting 6-10.",
    level: "Beginner",
    xpReward: 120,
    icon: "#️⃣",
    vocabulary: [
      { word: "Ishta", translation: "Six", phonetic: "Ish-ta", script: "ܐܫܬܐ" },
      { word: "Shwa", translation: "Seven", phonetic: "Shwa", script: "ܫܒܥܐ" },
      { word: "Tmanya", translation: "Eight", phonetic: "Tman-ya", script: "ܬܡܢܝܐ" },
      { word: "Tisha", translation: "Nine", phonetic: "Ti-sha", script: "ܬܫܥܐ" },
      { word: "Asar", translation: "Ten", phonetic: "A-sar", script: "ܥܣܪܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Ten'?",
        options: ["Asar", "Tisha", "Tmanya", "Ishta"],
        correctAnswer: "Asar"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Which is 'Seven'?",
        options: ["Shwa", "Ishta", "Tmanya", "Khamsha"],
        correctAnswer: "Shwa"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Order: 8, 9, 10",
        options: ["Tmanya, Tisha, Asar", "Tisha, Tmanya, Asar", "Asar, Tisha, Tmanya"],
        correctAnswer: "Tmanya, Tisha, Asar"
      }
    ]
  },
  {
    id: 15,
    title: "School Objects",
    description: "Things you use to learn.",
    level: "Intermediate",
    xpReward: 140,
    icon: "🎒",
    vocabulary: [
      { word: "Ktawa", translation: "Book", phonetic: "Kta-wa", script: "ܟܬܒܐ" },
      { word: "Qalama", translation: "Pen", phonetic: "Qa-la-ma", script: "ܩܠܡܐ" },
      { word: "Ktiv", translation: "To Write", phonetic: "K-tiv", script: "ܟܬܒ" },
      { word: "Qari", translation: "To Read", phonetic: "Qa-ri", script: "ܩܪܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "You write with a:",
        options: ["Qalama", "Ktawa", "Pata", "Kursa"],
        correctAnswer: "Qalama"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What means 'To Read'?",
        options: ["Qari", "Ktiv", "Akhal", "Shtay"],
        correctAnswer: "Qari"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Book",
        correctAnswer: "Ktawa"
      }
    ]
  },
  {
    id: 16,
    title: "Places",
    description: "Important places in a town.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🏙️",
    vocabulary: [
      { word: "Madrasa", translation: "School", phonetic: "Mad-ra-sa", script: "ܡܕܪܫܬܐ" },
      { word: "Knishta", translation: "Church", phonetic: "Knish-ta", script: "ܟܢܘܫܬܐ" },
      { word: "Shuqa", translation: "Market", phonetic: "Shu-qa", script: "ܫܘܩܐ" },
      { word: "Matha", translation: "Village", phonetic: "Ma-tha", script: "ܡܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Where do you go to learn?",
        options: ["Madrasa", "Shuqa", "Knishta", "Bayta"],
        correctAnswer: "Madrasa"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Shuqa'?",
        options: ["Market", "School", "Church", "House"],
        correctAnswer: "Market"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Church",
        correctAnswer: "Knishta"
      }
    ]
  },
  {
    id: 17,
    title: "Professions",
    description: "Jobs and roles.",
    level: "Intermediate",
    xpReward: 150,
    icon: "👨‍⚕️",
    vocabulary: [
      { word: "Malpana", translation: "Teacher (Masc)", phonetic: "Mal-pa-na", script: "ܡܠܦܢܐ" },
      { word: "Malpantha", translation: "Teacher (Fem)", phonetic: "Mal-pan-tha", script: "ܡܠܦܢܬܐ" },
      { word: "Asya", translation: "Doctor", phonetic: "As-ya", script: "ܐܣܝܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Who teaches at a school?",
        options: ["Malpana", "Asya", "Khatota", "Ranya"],
        correctAnswer: "Malpana"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Asya'?",
        options: ["Doctor", "Teacher", "Singer", "Tailor"],
        correctAnswer: "Doctor"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Teacher (Female)",
        correctAnswer: "Malpantha"
      }
    ]
  }
];
