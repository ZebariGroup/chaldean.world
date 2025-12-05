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
  },
  {
    id: 18,
    title: "Emotions",
    description: "Expressing how you feel.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🎭",
    vocabulary: [
      { word: "Khidiya", translation: "Happy", phonetic: "Khi-di-ya", script: "ܚܕܝܐ" },
      { word: "Kriwa", translation: "Sad", phonetic: "Kri-wa", script: "ܟܪܝܒܐ" },
      { word: "Karpana", translation: "Angry", phonetic: "Kar-pa-na", script: "ܟܪܦܢܐ" },
      { word: "Zdi'a", translation: "Scared", phonetic: "Zdi-a", script: "ܙܕܝܥܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'Happy'?",
        options: ["Khidiya", "Kriwa", "Chilya", "Karpana"],
        correctAnswer: "Khidiya"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What means 'Sad'?",
        options: ["Kriwa", "Khidiya", "Zdi'a", "Spay"],
        correctAnswer: "Kriwa"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Scared",
        correctAnswer: "Zdi'a"
      }
    ]
  },
  {
    id: 19,
    title: "Travel",
    description: "Words for traveling.",
    level: "Intermediate",
    xpReward: 150,
    icon: "✈️",
    vocabulary: [
      { word: "Tayara", translation: "Airplane", phonetic: "Ta-ya-ra", script: "ܛܝܪܐ" },
      { word: "Bosta", translation: "Bus", phonetic: "Bos-ta", script: "ܒܐܨ" },
      { word: "Orkha", translation: "Road", phonetic: "Or-kha", script: "ܐܘܪܚܐ" },
      { word: "Tiket", translation: "Ticket", phonetic: "Ti-ket", script: "ܬܝܟܬ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What flies in the sky?",
        options: ["Tayara", "Bosta", "Sayara", "Orkha"],
        correctAnswer: "Tayara"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Orkha'?",
        options: ["Road", "Car", "Ticket", "Bag"],
        correctAnswer: "Road"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Ticket",
        correctAnswer: "Tiket"
      }
    ]
  },
  {
    id: 20,
    title: "More Places",
    description: "Important locations in a city.",
    level: "Intermediate",
    xpReward: 160,
    icon: "🏥",
    vocabulary: [
      { word: "Bayta d-Asye", translation: "Hospital", phonetic: "Bay-ta d-As-ye", script: "ܒܝܬ ܐܣܝܐ" },
      { word: "Dukana", translation: "Store", phonetic: "Du-ka-na", script: "ܕܘܟܢܐ" },
      { word: "Mat'am", translation: "Restaurant", phonetic: "Mat-am", script: "ܡܛܥܡ" },
      { word: "Parqa", translation: "Park", phonetic: "Par-qa", script: "ܦܪܩܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Where do you go when you are sick?",
        options: ["Bayta d-Asye", "Dukana", "Mat'am", "Parqa"],
        correctAnswer: "Bayta d-Asye"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Where do you buy food?",
        options: ["Dukana", "Parqa", "Bayta d-Asye", "Knishta"],
        correctAnswer: "Dukana"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Restaurant",
        correctAnswer: "Mat'am"
      }
    ]
  },
  {
    id: 21,
    title: "More Professions",
    description: "Jobs people do.",
    level: "Intermediate",
    xpReward: 160,
    icon: "👨‍🍳",
    vocabulary: [
      { word: "Tabakha", translation: "Chef", phonetic: "Ta-ba-kha", script: "ܛܒܟ݂ܐ" },
      { word: "Sayuqa", translation: "Driver", phonetic: "Sa-yu-qa", script: "ܣܝܘܩܐ" },
      { word: "Shurta", translation: "Police", phonetic: "Shur-ta", script: "ܫܘܪܛܐ" },
      { word: "Nakhopa", translation: "Baker", phonetic: "Na-kho-pa", script: "ܢܚܘܦܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Who cooks food?",
        options: ["Tabakha", "Shurta", "Sayuqa", "Asya"],
        correctAnswer: "Tabakha"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Who drives a car?",
        options: ["Sayuqa", "Nakhopa", "Malpana", "Tabakha"],
        correctAnswer: "Sayuqa"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Police",
        correctAnswer: "Shurta"
      }
    ]
  },
  {
    id: 22,
    title: "Advanced Colors",
    description: "More colors to describe things.",
    level: "Advanced",
    xpReward: 170,
    icon: "🌈",
    vocabulary: [
      { word: "Dahba", translation: "Gold", phonetic: "Dah-ba", script: "ܕܗܒܐ" },
      { word: "Sipa", translation: "Silver", phonetic: "Si-pa", script: "ܣܐܡܐ" },
      { word: "Bahra", translation: "Light (Color)", phonetic: "Bah-ra", script: "ܒܗܪܐ" },
      { word: "Khekha", translation: "Dark (Color)", phonetic: "Khe-kha", script: "ܚܘܟ݂ܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is the color of gold?",
        options: ["Dahba", "Sipa", "Bahra", "Khekha"],
        correctAnswer: "Dahba"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Opposite of Light (Bahra) is:",
        options: ["Khekha", "Sipa", "Dahba", "Smoqa"],
        correctAnswer: "Khekha"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Silver",
        correctAnswer: "Sipa"
      }
    ]
  },
  {
    id: 23,
    title: "Days of the Week",
    description: "Learn all the days of the week in Chaldean.",
    level: "Beginner",
    xpReward: 130,
    icon: "📆",
    vocabulary: [
      { word: "Iroha", translation: "Sunday", phonetic: "I-ro-ha", script: "ܝܪܘܚܐ" },
      { word: "Trinbšaba", translation: "Monday", phonetic: "Trin-b-ša-ba", script: "ܬܪܝܢܒܫܒܐ" },
      { word: "Tlitbšaba", translation: "Tuesday", phonetic: "Tlit-b-ša-ba", script: "ܬܠܝܬܒܫܒܐ" },
      { word: "Arbibšaba", translation: "Wednesday", phonetic: "Ar-bib-ša-ba", script: "ܐܪܒܥܒܫܒܐ" },
      { word: "Khamiša", translation: "Thursday", phonetic: "Kha-mi-ša", script: "ܚܡܝܫܐ" },
      { word: "Khamšibšaba", translation: "Friday", phonetic: "Kham-ši-b-ša-ba", script: "ܚܡܫܒܫܒܐ" },
      { word: "Shabta", translation: "Saturday", phonetic: "Shab-ta", script: "ܫܒܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What day is 'Iroha'?",
        options: ["Sunday", "Monday", "Saturday", "Friday"],
        correctAnswer: "Sunday"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Friday' in Chaldean?",
        options: ["Khamšibšaba", "Khamiša", "Shabta", "Arbibšaba"],
        correctAnswer: "Khamšibšaba"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Wednesday",
        correctAnswer: "Arbibšaba"
      }
    ]
  },
  {
    id: 24,
    title: "Seasons & Weather",
    description: "Learn the four seasons and weather terms.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🌦️",
    vocabulary: [
      { word: "Kharta", translation: "Spring", phonetic: "Khar-ta", script: "ܟܪܬܐ" },
      { word: "Qayṭa", translation: "Summer", phonetic: "Qay-ṭa", script: "ܩܝܛܐ" },
      { word: "Ṭarpa", translation: "Autumn", phonetic: "Ṭar-pa", script: "ܛܪܦܐ" },
      { word: "Sitwa", translation: "Winter", phonetic: "Sit-wa", script: "ܣܬܘܐ" },
      { word: "Qarira", translation: "Cold", phonetic: "Qa-ri-ra", script: "ܩܪܝܪܐ" },
      { word: "Khamima", translation: "Hot", phonetic: "Kha-mi-ma", script: "ܚܡܝܡܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What season is 'Qayṭa'?",
        options: ["Summer", "Winter", "Spring", "Fall"],
        correctAnswer: "Summer"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "When is it cold?",
        options: ["Sitwa", "Qayṭa", "Kharta", "Ṭarpa"],
        correctAnswer: "Sitwa"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Spring",
        correctAnswer: "Kharta"
      }
    ]
  },
  {
    id: 25,
    title: "More Fruits",
    description: "Expand your fruit vocabulary.",
    level: "Beginner",
    xpReward: 140,
    icon: "🍇",
    vocabulary: [
      { word: "Tīna", translation: "Fig", phonetic: "Tī-na", script: "ܬܐܢܐ" },
      { word: "Rummana", translation: "Pomegranate", phonetic: "Rum-ma-na", script: "ܪܘܡܢܐ" },
      { word: "Khawkha", translation: "Peach", phonetic: "Khaw-kha", script: "ܚܘܟܐ" },
      { word: "Mešmeša", translation: "Apricot", phonetic: "Meš-me-ša", script: "ܡܫܡܫܐ" },
      { word: "Talyana", translation: "Watermelon", phonetic: "Tal-ya-na", script: "ܛܠܝܢܐ" },
      { word: "Limuna", translation: "Lemon", phonetic: "Li-mu-na", script: "ܠܝܡܘܢܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is a 'Rummana'?",
        options: ["Pomegranate", "Fig", "Peach", "Apricot"],
        correctAnswer: "Pomegranate"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Which fruit is 'Talyana'?",
        options: ["Watermelon", "Melon", "Lemon", "Orange"],
        correctAnswer: "Watermelon"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Apricot",
        correctAnswer: "Mešmeša"
      }
    ]
  },
  {
    id: 26,
    title: "Vegetables",
    description: "Learn common vegetable names.",
    level: "Beginner",
    xpReward: 140,
    icon: "🥕",
    vocabulary: [
      { word: "Tuma", translation: "Garlic", phonetic: "Tu-ma", script: "ܬܘܡܐ" },
      { word: "Pilpila", translation: "Pepper", phonetic: "Pil-pi-la", script: "ܦܠܦܠܐ" },
      { word: "Khassa", translation: "Lettuce", phonetic: "Khas-sa", script: "ܚܣܐ" },
      { word: "Shilpa", translation: "Eggplant", phonetic: "Shil-pa", script: "ܫܠܦܐ" },
      { word: "Gzara", translation: "Carrot", phonetic: "Gza-ra", script: "ܓܙܪܐ" },
      { word: "Lifta", translation: "Turnip", phonetic: "Lif-ta", script: "ܠܦܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Gzara'?",
        options: ["Carrot", "Turnip", "Lettuce", "Pepper"],
        correctAnswer: "Carrot"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What vegetable is 'Tuma'?",
        options: ["Garlic", "Onion", "Pepper", "Lettuce"],
        correctAnswer: "Garlic"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Eggplant",
        correctAnswer: "Shilpa"
      }
    ]
  },
  {
    id: 27,
    title: "Kitchen Items",
    description: "Things you find in the kitchen.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🍳",
    vocabulary: [
      { word: "Sanduqa", translation: "Pot", phonetic: "San-du-qa", script: "ܣܢܕܘܩܐ" },
      { word: "Qarora", translation: "Kettle", phonetic: "Qa-ro-ra", script: "ܩܪܘܪܐ" },
      { word: "Piala", translation: "Bowl", phonetic: "Pia-la", script: "ܦܝܠܐ" },
      { word: "Maqliya", translation: "Frying Pan", phonetic: "Maq-li-ya", script: "ܡܩܠܝܐ" },
      { word: "Tannura", translation: "Oven", phonetic: "Tan-nu-ra", script: "ܬܢܘܪܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "You cook in a:",
        options: ["Tannura", "Piala", "Stikana", "Sahna"],
        correctAnswer: "Tannura"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is a 'Maqliya'?",
        options: ["Frying Pan", "Pot", "Bowl", "Kettle"],
        correctAnswer: "Frying Pan"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Bowl",
        correctAnswer: "Piala"
      }
    ]
  },
  {
    id: 28,
    title: "More Animals",
    description: "Expand your animal vocabulary.",
    level: "Beginner",
    xpReward: 140,
    icon: "🐰",
    vocabulary: [
      { word: "Para", translation: "Cow", phonetic: "Pa-ra", script: "ܦܪܐ" },
      { word: "Ṭarpa", translation: "Goat", phonetic: "Ṭar-pa", script: "ܛܪܦܐ" },
      { word: "Arnava", translation: "Rabbit", phonetic: "Ar-na-va", script: "ܐܪܢܒܐ" },
      { word: "Ṭayra", translation: "Bird", phonetic: "Ṭay-ra", script: "ܛܝܪܐ" },
      { word: "Yōna", translation: "Dove", phonetic: "Yō-na", script: "ܝܘܢܐ" },
      { word: "Gamal", translation: "Camel", phonetic: "Ga-mal", script: "ܓܡܠ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What animal is 'Para'?",
        options: ["Cow", "Goat", "Sheep", "Horse"],
        correctAnswer: "Cow"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is a 'Yōna'?",
        options: ["Dove", "Eagle", "Bird", "Rooster"],
        correctAnswer: "Dove"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Rabbit",
        correctAnswer: "Arnava"
      }
    ]
  },
  {
    id: 29,
    title: "More Verbs",
    description: "Essential action words for daily life.",
    level: "Intermediate",
    xpReward: 160,
    icon: "🏃‍♂️",
    vocabulary: [
      { word: "Ḥli", translation: "To Wash", phonetic: "Ḥli", script: "ܚܠܝ" },
      { word: "Tbi", translation: "To Cook", phonetic: "Tbi", script: "ܛܒܝ" },
      { word: "Bni", translation: "To Build", phonetic: "Bni", script: "ܒܢܝ" },
      { word: "Ḥyi", translation: "To Live", phonetic: "Ḥyi", script: "ܚܝܝ" },
      { word: "Zmēr", translation: "To Sing", phonetic: "Zmēr", script: "ܙܡܪ" },
      { word: "Rqiḏ", translation: "To Dance", phonetic: "Rqi-ḏ", script: "ܪܓܕ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What means 'To Cook'?",
        options: ["Tbi", "Ḥli", "Qli", "Akhal"],
        correctAnswer: "Tbi"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'To Sing'?",
        options: ["Zmēr", "Rqiḏ", "Mahki", "Q'ā"],
        correctAnswer: "Zmēr"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: To Build",
        correctAnswer: "Bni"
      }
    ]
  },
  {
    id: 30,
    title: "Pronouns",
    description: "Learn personal pronouns in Chaldean.",
    level: "Intermediate",
    xpReward: 150,
    icon: "👤",
    vocabulary: [
      { word: "Ana", translation: "I", phonetic: "A-na", script: "ܐܢܐ" },
      { word: "At", translation: "You (masc.)", phonetic: "At", script: "ܐܢܬ" },
      { word: "Ati", translation: "You (fem.)", phonetic: "A-ti", script: "ܐܢܬܝ" },
      { word: "Awa", translation: "He", phonetic: "A-wa", script: "ܗܘ" },
      { word: "Aya", translation: "She", phonetic: "A-ya", script: "ܗܝ" },
      { word: "Akhnan", translation: "We", phonetic: "Akh-nan", script: "ܐܚܢܢ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'I' in Chaldean?",
        options: ["Ana", "At", "Awa", "Akhnan"],
        correctAnswer: "Ana"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What pronoun is 'Akhnan'?",
        options: ["We", "They", "You", "I"],
        correctAnswer: "We"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: She",
        correctAnswer: "Aya"
      }
    ]
  },
  {
    id: 31,
    title: "More Body Parts",
    description: "Advanced body vocabulary.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🦴",
    vocabulary: [
      { word: "Gaba", translation: "Shoulder", phonetic: "Ga-ba", script: "ܓܒܐ" },
      { word: "Pakhda", translation: "Thigh", phonetic: "Pakh-da", script: "ܦܟܕܐ" },
      { word: "Qādla", translation: "Neck", phonetic: "Qād-la", script: "ܩܕܠܐ" },
      { word: "Daqna", translation: "Beard", phonetic: "Daq-na", script: "ܕܩܢܐ" },
      { word: "Gavīna", translation: "Eyebrow", phonetic: "Ga-vī-na", script: "ܓܒܝܢܐ" },
      { word: "Šaptha", translation: "Lip", phonetic: "Šap-tha", script: "ܫܦܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Qādla'?",
        options: ["Neck", "Shoulder", "Arm", "Leg"],
        correctAnswer: "Neck"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What body part is 'Gavīna'?",
        options: ["Eyebrow", "Eyelash", "Eye", "Nose"],
        correctAnswer: "Eyebrow"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Shoulder",
        correctAnswer: "Gaba"
      }
    ]
  },
  {
    id: 32,
    title: "Demonstratives",
    description: "Learn this, that, these, and those.",
    level: "Intermediate",
    xpReward: 150,
    icon: "👉",
    vocabulary: [
      { word: "Haḏā", translation: "This (masc.)", phonetic: "Ha-ḏā", script: "ܗܕܐ" },
      { word: "Haḏē", translation: "This (fem.)", phonetic: "Ha-ḏē", script: "ܗܕܐ" },
      { word: "Haw", translation: "That (masc.)", phonetic: "Haw", script: "ܗܘ" },
      { word: "Hayē", translation: "That (fem.)", phonetic: "Ha-yē", script: "ܗܝ" },
      { word: "Hālen", translation: "These", phonetic: "Hā-len", script: "ܗܠܝܢ" },
      { word: "Hānōn", translation: "Those", phonetic: "Hā-nōn", script: "ܗܢܘܢ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'This' for masculine?",
        options: ["Haḏā", "Haw", "Hālen", "Haḏē"],
        correctAnswer: "Haḏā"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What means 'Those'?",
        options: ["Hānōn", "Hālen", "Haw", "Hayē"],
        correctAnswer: "Hānōn"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: These",
        correctAnswer: "Hālen"
      }
    ]
  },
  {
    id: 33,
    title: "Nature & Geography",
    description: "Natural features and geography.",
    level: "Intermediate",
    xpReward: 160,
    icon: "🏔️",
    vocabulary: [
      { word: "Šmaya", translation: "Sky/Heaven", phonetic: "Šma-ya", script: "ܫܡܝܐ" },
      { word: "Shuna", translation: "Stone/Rock", phonetic: "Shu-na", script: "ܫܘܢܐ" },
      { word: "Barqa", translation: "Lightning", phonetic: "Bar-qa", script: "ܒܪܩܐ" },
      { word: "Yabal", translation: "Hill", phonetic: "Ya-bal", script: "ܝܒܠ" },
      { word: "Gōba", translation: "Valley", phonetic: "Gō-ba", script: "ܓܘܒܐ" },
      { word: "Qešā", translation: "Forest", phonetic: "Qe-šā", script: "ܩܫܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is the sky called?",
        options: ["Šmaya", "Ar'a", "Tura", "Gōba"],
        correctAnswer: "Šmaya"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Barqa'?",
        options: ["Lightning", "Thunder", "Rain", "Wind"],
        correctAnswer: "Lightning"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Forest",
        correctAnswer: "Qešā"
      }
    ]
  },
  {
    id: 34,
    title: "Advanced Adjectives",
    description: "More descriptive words.",
    level: "Advanced",
    xpReward: 170,
    icon: "📝",
    vocabulary: [
      { word: "Bīša", translation: "Bad/Evil", phonetic: "Bī-ša", script: "ܒܝܫܐ" },
      { word: "Halyā", translation: "Sweet", phonetic: "Hal-yā", script: "ܚܠܝܐ" },
      { word: "Marirā", translation: "Bitter", phonetic: "Ma-ri-rā", script: "ܡܪܝܪܐ" },
      { word: "Melyā", translation: "Full", phonetic: "Mel-yā", script: "ܡܠܝܐ" },
      { word: "Sriqa", translation: "Empty", phonetic: "Sri-qa", script: "ܣܪܝܩܐ" },
      { word: "Ṭuvrā", translation: "Clean", phonetic: "Ṭuv-rā", script: "ܛܘܒܪܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What means 'Sweet'?",
        options: ["Halyā", "Marirā", "Bīša", "Sriqa"],
        correctAnswer: "Halyā"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Opposite of Full (Melyā) is:",
        options: ["Sriqa", "Halyā", "Ṭuvrā", "Bīša"],
        correctAnswer: "Sriqa"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Clean",
        correctAnswer: "Ṭuvrā"
      }
    ]
  },
  {
    id: 35,
    title: "Useful Phrases",
    description: "Common expressions for conversation.",
    level: "Intermediate",
    xpReward: 160,
    icon: "💬",
    vocabulary: [
      { word: "Ana Itwan", translation: "I am here", phonetic: "A-na It-wan", script: "ܐܢܐ ܐܝܬܘܢ" },
      { word: "Yadin ana", translation: "I know", phonetic: "Ya-din a-na", script: "ܝܕܥ ܐܢܐ" },
      { word: "Ba'en ana", translation: "I want", phonetic: "Ba-'en a-na", script: "ܒܥܐ ܐܢܐ" },
      { word: "La Ba'en", translation: "I don't want", phonetic: "La Ba-'en", script: "ܠܐ ܒܥܐ" },
      { word: "La Marri", translation: "Don't worry", phonetic: "La Mar-ri", script: "ܠܐ ܡܪܝ" },
      { word: "Min Fadhlokh", translation: "Please (to male)", phonetic: "Min Fadh-lokh", script: "ܡܢ ܦܕܠܘܟ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'I am here'?",
        options: ["Ana Itwan", "Yadin ana", "Ba'en ana", "La yadin"],
        correctAnswer: "Ana Itwan"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'La Marri' mean?",
        options: ["Don't worry", "I don't want", "I don't know", "Please"],
        correctAnswer: "Don't worry"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: I want",
        correctAnswer: "Ba'en ana"
      }
    ]
  },
  {
    id: 36,
    title: "Clothing & Accessories",
    description: "More items you wear.",
    level: "Intermediate",
    xpReward: 150,
    icon: "👗",
    vocabulary: [
      { word: "Nakhta", translation: "Dress", phonetic: "Nakh-ta", script: "ܢܚܬܐ" },
      { word: "Ṭaylasa", translation: "Veil/Scarf", phonetic: "Ṭay-la-sa", script: "ܛܝܠܣܐ" },
      { word: "Zunara", translation: "Belt", phonetic: "Zu-na-ra", script: "ܙܢܪܐ" },
      { word: "Quptha", translation: "Coat", phonetic: "Qup-tha", script: "ܩܘܦܬܐ" },
      { word: "Jubba", translation: "Robe", phonetic: "Jub-ba", script: "ܓܘܒܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is a 'Nakhta'?",
        options: ["Dress", "Shirt", "Pants", "Coat"],
        correctAnswer: "Dress"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What do you wear around your waist?",
        options: ["Zunara", "Ṭaylasa", "Jubba", "Quptha"],
        correctAnswer: "Zunara"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Coat",
        correctAnswer: "Quptha"
      }
    ]
  },
  {
    id: 37,
    title: "Cooking & Food Preparation",
    description: "Verbs related to cooking.",
    level: "Intermediate",
    xpReward: 160,
    icon: "👨‍🍳",
    vocabulary: [
      { word: "Tbi", translation: "To Cook", phonetic: "Tbi", script: "ܛܒܝ" },
      { word: "Qli", translation: "To Fry", phonetic: "Qli", script: "ܩܠܝ" },
      { word: "Blē", translation: "To Mix", phonetic: "Blē", script: "ܒܠܝ" },
      { word: "Ḥṣid", translation: "To Harvest", phonetic: "Ḥṣid", script: "ܚܨܕ" },
      { word: "Zri", translation: "To Plant", phonetic: "Zri", script: "ܙܪܥ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What means 'To Fry'?",
        options: ["Qli", "Tbi", "Blē", "Akhal"],
        correctAnswer: "Qli"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What do farmers do with seeds?",
        options: ["Zri", "Ḥṣid", "Tbi", "Qli"],
        correctAnswer: "Zri"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: To Mix",
        correctAnswer: "Blē"
      }
    ]
  },
  {
    id: 38,
    title: "Emotions & Feelings",
    description: "Advanced emotional vocabulary.",
    level: "Advanced",
    xpReward: 170,
    icon: "❤️",
    vocabulary: [
      { word: "Ḥib", translation: "To Love", phonetic: "Ḥib", script: "ܚܒ" },
      { word: "Sni", translation: "To Hate", phonetic: "Sni", script: "ܣܢܐ" },
      { word: "Nši", translation: "To Kiss", phonetic: "Nši", script: "ܢܫܩ" },
      { word: "Ḥbiq", translation: "To Hug", phonetic: "Ḥbiq", script: "ܚܒܩ" },
      { word: "Gkhikh", translation: "To Laugh", phonetic: "Gkhikh", script: "ܓܚܟ" },
      { word: "Bkhe", translation: "To Cry", phonetic: "Bkhe", script: "ܒܟܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What means 'To Love'?",
        options: ["Ḥib", "Sni", "Nši", "Ḥbiq"],
        correctAnswer: "Ḥib"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Opposite of Laugh (Gkhikh) is:",
        options: ["Bkhe", "Ḥib", "Sni", "Nši"],
        correctAnswer: "Bkhe"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: To Hug",
        correctAnswer: "Ḥbiq"
      }
    ]
  },
  {
    id: 39,
    title: "Insects & Small Animals",
    description: "Common insects and small creatures.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🐝",
    vocabulary: [
      { word: "Namla", translation: "Ant", phonetic: "Nam-la", script: "ܢܡܠܐ" },
      { word: "Dbōrta", translation: "Bee", phonetic: "Dbōr-ta", script: "ܕܒܘܪܬܐ" },
      { word: "Parpāša", translation: "Butterfly", phonetic: "Par-pā-ša", script: "ܦܪܦܫܐ" },
      { word: "Dadūna", translation: "Fly", phonetic: "Da-dū-na", script: "ܕܕܘܢܐ" },
      { word: "Qarda", translation: "Mosquito", phonetic: "Qar-da", script: "ܩܪܕܐ" },
      { word: "Ḥiwya", translation: "Snake", phonetic: "Ḥiw-ya", script: "ܚܘܝܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What makes honey?",
        options: ["Dbōrta", "Namla", "Parpāša", "Dadūna"],
        correctAnswer: "Dbōrta"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is 'Parpāša'?",
        options: ["Butterfly", "Bee", "Fly", "Ant"],
        correctAnswer: "Butterfly"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Ant",
        correctAnswer: "Namla"
      }
    ]
  },
  {
    id: 40,
    title: "Birds",
    description: "Learn names of various birds.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🦅",
    vocabulary: [
      { word: "Nišra", translation: "Eagle", phonetic: "Niš-ra", script: "ܢܫܪܐ" },
      { word: "Tarnagōlta", translation: "Rooster/Hen", phonetic: "Tar-na-gōl-ta", script: "ܬܪܢܓܘܠܬܐ" },
      { word: "Barōza", translation: "Duck", phonetic: "Ba-rō-za", script: "ܒܪܘܙܐ" },
      { word: "Wazza", translation: "Goose", phonetic: "Waz-za", script: "ܘܙܐ" },
      { word: "Yōna", translation: "Dove/Pigeon", phonetic: "Yō-na", script: "ܝܘܢܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What bird is a symbol of peace?",
        options: ["Yōna", "Nišra", "Barōza", "Wazza"],
        correctAnswer: "Yōna"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is an 'Nišra'?",
        options: ["Eagle", "Duck", "Goose", "Hen"],
        correctAnswer: "Eagle"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Duck",
        correctAnswer: "Barōza"
      }
    ]
  },
  {
    id: 41,
    title: "Counting 6-10",
    description: "Learn numbers six through ten.",
    level: "Beginner",
    xpReward: 100,
    icon: "🔢",
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
        question: "What is 'Six' in Chaldean?",
        options: ["Ishta", "Shwa", "Tmanya", "Tisha"],
        correctAnswer: "Ishta"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Which number is 'Asar'?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "10"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "What does 'Tmanya' mean?",
        options: ["Six", "Seven", "Eight", "Nine"],
        correctAnswer: "Eight"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "Select the correct order: 6, 7, 8",
        options: ["Ishta, Shwa, Tmanya", "Shwa, Ishta, Tmanya", "Ishta, Tmanya, Shwa"],
        correctAnswer: "Ishta, Shwa, Tmanya"
      }
    ]
  },
  {
    id: 42,
    title: "Counting 11-20",
    description: "Learn numbers eleven through twenty.",
    level: "Beginner",
    xpReward: 100,
    icon: "🔢",
    vocabulary: [
      { word: "Khadassar", translation: "Eleven", phonetic: "Kha-das-sar", script: "ܚܕܥܣܪ" },
      { word: "Treissar", translation: "Twelve", phonetic: "Treis-sar", script: "ܬܪܥܣܪ" },
      { word: "Esrin", translation: "Twenty", phonetic: "Es-rin", script: "ܥܣܪܝܢ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Eleven' in Chaldean?",
        options: ["Khadassar", "Treissar", "Asar", "Esrin"],
        correctAnswer: "Khadassar"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Which number is 'Esrin'?",
        options: ["10", "11", "12", "20"],
        correctAnswer: "20"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "What does 'Treissar' mean?",
        options: ["Two", "Ten", "Twelve", "Twenty"],
        correctAnswer: "Twelve"
      }
    ]
  },
  {
    id: 43,
    title: "Common Verbs - Actions",
    description: "Learn essential action verbs for daily communication.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🏃",
    vocabulary: [
      { word: "Azil", translation: "Go / Going", phonetic: "A-zil", script: "ܐܙܠ" },
      { word: "Ate", translation: "Come / Coming", phonetic: "A-te", script: "ܐܬܐ" },
      { word: "Yatib", translation: "Sit / Sitting", phonetic: "Ya-tib", script: "ܝܬܒ" },
      { word: "Qaym", translation: "Stand / Standing", phonetic: "Qaym", script: "ܩܝܡ" },
      { word: "Pateakh", translation: "Open / Opening", phonetic: "Pa-te-akh", script: "ܦܬܚ" },
      { word: "Sakir", translation: "Close / Closing", phonetic: "Sa-kir", script: "ܣܟܪ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'Go' in Chaldean?",
        options: ["Azil", "Ate", "Yatib", "Qaym"],
        correctAnswer: "Azil"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Pateakh' mean?",
        options: ["Close", "Open", "Sit", "Stand"],
        correctAnswer: "Open"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "What is 'Sit' in Chaldean?",
        options: ["Yatib", "Qaym", "Azil", "Ate"],
        correctAnswer: "Yatib"
      }
    ]
  },
  {
    id: 44,
    title: "Daily Greetings",
    description: "Greet people throughout the day in Chaldean.",
    level: "Beginner",
    xpReward: 120,
    icon: "👋",
    vocabulary: [
      { word: "Tsafra Taba", translation: "Good morning", phonetic: "Tsaf-ra Ta-ba", script: "ܨܦܪܐ ܛܒܐ" },
      { word: "Ramsha Taba", translation: "Good evening", phonetic: "Ram-sha Ta-ba", script: "ܪܡܫܐ ܛܒܐ" },
      { word: "Lele Taba", translation: "Good night", phonetic: "Le-le Ta-ba", script: "ܠܠܝܐ ܛܒܐ" },
      { word: "Khat Bokh", translation: "I love you (to male)", phonetic: "Khat Bo-kh", script: "ܟܬ ܒܘܟ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'Good morning'?",
        options: ["Tsafra Taba", "Ramsha Taba", "Lele Taba", "Shlama"],
        correctAnswer: "Tsafra Taba"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Lele Taba' mean?",
        options: ["Good night", "Good morning", "Good evening", "Goodbye"],
        correctAnswer: "Good night"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Good evening",
        correctAnswer: "Ramsha Taba"
      }
    ]
  },
  {
    id: 45,
    title: "In the House",
    description: "Learn words for rooms and household items.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🏠",
    vocabulary: [
      { word: "Tara", translation: "Door", phonetic: "Ta-ra", script: "ܬܪܥܐ" },
      { word: "Kawta", translation: "Window", phonetic: "Kaw-ta", script: "ܟܘܬܐ" },
      { word: "Madkhna", translation: "Kitchen", phonetic: "Mad-khna", script: "ܡܕܟܢܐ" },
      { word: "Madrasha", translation: "Bedroom", phonetic: "Mad-ra-sha", script: "ܡܕܪܫܐ" },
      { word: "Nuhra", translation: "Light/Lamp", phonetic: "Nuh-ra", script: "ܢܘܗܪܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Door' in Chaldean?",
        options: ["Tara", "Kawta", "Nuhra", "Gayra"],
        correctAnswer: "Tara"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Madkhna' mean?",
        options: ["Kitchen", "Bedroom", "Bathroom", "Living room"],
        correctAnswer: "Kitchen"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Window",
        correctAnswer: "Kawta"
      }
    ]
  },
  {
    id: 46,
    title: "Weather & Nature",
    description: "Talk about weather and natural elements.",
    level: "Intermediate",
    xpReward: 150,
    icon: "🌤️",
    vocabulary: [
      { word: "Shamsha", translation: "Sun", phonetic: "Sham-sha", script: "ܫܡܫܐ" },
      { word: "Sahra", translation: "Moon", phonetic: "Sah-ra", script: "ܣܗܪܐ" },
      { word: "Mitra", translation: "Rain", phonetic: "Mit-ra", script: "ܡܛܪܐ" },
      { word: "Talga", translation: "Snow", phonetic: "Tal-ga", script: "ܬܠܓܐ" },
      { word: "Rukha", translation: "Wind", phonetic: "Ru-kha", script: "ܪܘܚܐ" },
      { word: "Qarta", translation: "Cold", phonetic: "Qar-ta", script: "ܩܪܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Sun' in Chaldean?",
        options: ["Shamsha", "Sahra", "Mitra", "Rukha"],
        correctAnswer: "Shamsha"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Talga' mean?",
        options: ["Snow", "Rain", "Wind", "Cloud"],
        correctAnswer: "Snow"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "How do you say 'Cold'?",
        options: ["Qarta", "Shimsha", "Mitra", "Rukha"],
        correctAnswer: "Qarta"
      }
    ]
  },
  {
    id: 47,
    title: "Grammar: Masculine & Feminine",
    description: "Learn how words change between masculine and feminine forms.",
    level: "Advanced",
    xpReward: 200,
    icon: "📖",
    vocabulary: [
      { word: "Spay", translation: "Good (masc)", phonetic: "Spay", script: "ܣܦܝ" },
      { word: "Spayta", translation: "Good (fem)", phonetic: "Spay-ta", script: "ܣܦܝܬܐ" },
      { word: "Shapira", translation: "Beautiful (masc)", phonetic: "Sha-pi-ra", script: "ܫܦܝܪܐ" },
      { word: "Shapirta", translation: "Beautiful (fem)", phonetic: "Sha-pir-ta", script: "ܫܦܝܪܬܐ" },
      { word: "Zora", translation: "Small (masc)", phonetic: "Zo-ra", script: "ܙܥܘܪܐ" },
      { word: "Zorta", translation: "Small (fem)", phonetic: "Zor-ta", script: "ܙܥܘܪܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Feminine adjectives typically end in what sound?",
        options: ["-ta", "-a", "-na", "-ra"],
        correctAnswer: "-ta"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is the feminine form of 'Shapira' (beautiful)?",
        options: ["Shapirta", "Shapirana", "Shapirna", "Shapir"],
        correctAnswer: "Shapirta"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Which is the masculine form?",
        options: ["Spay", "Spayta", "Both", "Neither"],
        correctAnswer: "Spay"
      },
      {
        id: 4,
        type: 'translation',
        question: "Translate: Small (feminine)",
        correctAnswer: "Zorta"
      }
    ]
  },
  {
    id: 48,
    title: "Grammar: Verb Forms",
    description: "Learn basic verb conjugation patterns.",
    level: "Advanced",
    xpReward: 200,
    icon: "✍️",
    vocabulary: [
      { word: "Akhal", translation: "To Eat", phonetic: "A-khal", script: "ܐܟܠ" },
      { word: "Akhlin", translation: "Eating (I eat)", phonetic: "Akh-lin", script: "ܐܟܠܝܢ" },
      { word: "Azil", translation: "To Go", phonetic: "A-zil", script: "ܐܙܠ" },
      { word: "Azilin", translation: "Going (I go)", phonetic: "A-zi-lin", script: "ܐܙܠܝܢ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "The root form 'Akhal' means:",
        options: ["To Eat", "I eat", "Eating", "Ate"],
        correctAnswer: "To Eat"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Azilin' mean?",
        options: ["Going / I go", "To go", "Went", "Will go"],
        correctAnswer: "Going / I go"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Present tense verbs often end in:",
        options: ["-in", "-ta", "-a", "-na"],
        correctAnswer: "-in"
      }
    ]
  },
  {
    id: 49,
    title: "Making Sentences: Subject + Verb",
    description: "Learn to construct basic sentences.",
    level: "Advanced",
    xpReward: 200,
    icon: "💬",
    vocabulary: [
      { word: "Ana", translation: "I", phonetic: "A-na", script: "ܐܢܐ" },
      { word: "At", translation: "You (male)", phonetic: "At", script: "ܐܢܬ" },
      { word: "Akh", translation: "You (female)", phonetic: "Akh", script: "ܐܢܬܝ" },
      { word: "Ana azilin", translation: "I am going", phonetic: "A-na a-zi-lin", script: "ܐܢܐ ܐܙܠܝܢ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'I' in Chaldean?",
        options: ["Ana", "At", "Akh", "Aw"],
        correctAnswer: "Ana"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is the word order for 'I am going'?",
        options: ["Subject + Verb", "Verb + Subject", "Both work", "Neither"],
        correctAnswer: "Subject + Verb"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: I am going",
        correctAnswer: "Ana azilin"
      }
    ]
  },
  {
    id: 50,
    title: "Possessives: My, Your, His, Her",
    description: "Learn to express possession in Chaldean.",
    level: "Advanced",
    xpReward: 200,
    icon: "🤝",
    vocabulary: [
      { word: "Bayta dili", translation: "My house", phonetic: "Bay-ta di-li", script: "ܒܝܬܐ ܕܝܠܝ" },
      { word: "Bayta dilokh", translation: "Your house (male)", phonetic: "Bay-ta di-lokh", script: "ܒܝܬܐ ܕܝܠܘܟ" },
      { word: "Bayta dilakh", translation: "Your house (female)", phonetic: "Bay-ta di-lakh", script: "ܒܝܬܐ ܕܝܠܟ" },
      { word: "Dili", translation: "Of mine / My", phonetic: "Di-li", script: "ܕܝܠܝ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "'Dili' means:",
        options: ["Of mine / My", "Of yours", "Of his", "Of hers"],
        correctAnswer: "Of mine / My"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "How do you say 'My house'?",
        options: ["Bayta dili", "Bayta dilokh", "Bayta dilakh", "Bayta"],
        correctAnswer: "Bayta dili"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "The possessive comes:",
        options: ["After the noun", "Before the noun", "Either way", "Not used"],
        correctAnswer: "After the noun"
      }
    ]
  },
  {
    id: 51,
    title: "Question Formation",
    description: "Learn to ask questions using question words.",
    level: "Advanced",
    xpReward: 200,
    icon: "❓",
    vocabulary: [
      { word: "Mana", translation: "What", phonetic: "Ma-na", script: "ܡܢܐ" },
      { word: "Aykha", translation: "Where", phonetic: "Ay-kha", script: "ܐܝܟܐ" },
      { word: "Aymat", translation: "When", phonetic: "Ay-mat", script: "ܐܝܡܬ" },
      { word: "Lamana", translation: "Why", phonetic: "La-ma-na", script: "ܠܡܢܐ" },
      { word: "Aykana", translation: "How", phonetic: "Ay-ka-na", script: "ܐܝܟܢܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'What' in Chaldean?",
        options: ["Mana", "Aykha", "Aymat", "Lamana"],
        correctAnswer: "Mana"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Aykha' mean?",
        options: ["Where", "What", "When", "Why"],
        correctAnswer: "Where"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "'Lamana' means:",
        options: ["Why", "How", "Where", "When"],
        correctAnswer: "Why"
      }
    ]
  },
  {
    id: 52,
    title: "Prepositions & Location",
    description: "Learn to describe where things are.",
    level: "Advanced",
    xpReward: 200,
    icon: "📍",
    vocabulary: [
      { word: "B-", translation: "In/At/With", phonetic: "B-", script: "ܒ" },
      { word: "Al", translation: "On/Upon", phonetic: "Al", script: "ܥܠ" },
      { word: "Takh", translation: "Under/Below", phonetic: "Takh", script: "ܬܚܬ" },
      { word: "Gaw", translation: "Inside", phonetic: "Gaw", script: "ܓܘ" },
      { word: "Bar", translation: "Outside", phonetic: "Bar", script: "ܒܪ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What does 'Al' mean?",
        options: ["On/Upon", "Under", "Inside", "Outside"],
        correctAnswer: "On/Upon"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "'Takh' means:",
        options: ["Under/Below", "On", "Inside", "Outside"],
        correctAnswer: "Under/Below"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "How do you say 'Inside'?",
        options: ["Gaw", "Bar", "Al", "Takh"],
        correctAnswer: "Gaw"
      }
    ]
  },
  {
    id: 53,
    title: "Time Expressions",
    description: "Learn to talk about time and when things happen.",
    level: "Intermediate",
    xpReward: 150,
    icon: "⏰",
    vocabulary: [
      { word: "Hashâ", translation: "Now", phonetic: "Ha-shâ", script: "ܗܫܐ" },
      { word: "Yawma Akhrin", translation: "Tomorrow", phonetic: "Yaw-ma Akh-rin", script: "ܝܘܡܐ ܐܚܪܝܢ" },
      { word: "Etmali", translation: "Yesterday", phonetic: "Et-ma-li", script: "ܐܬܡܠܝ" },
      { word: "Awdana", translation: "Always", phonetic: "Aw-da-na", script: "ܐܘܕܢܐ" },
      { word: "Qalil", translation: "Sometimes", phonetic: "Qa-lil", script: "ܩܠܝܠ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'Now'?",
        options: ["Hashâ", "Etmali", "Awdana", "Qalil"],
        correctAnswer: "Hashâ"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Yawma Akhrin' mean?",
        options: ["Tomorrow", "Yesterday", "Today", "Now"],
        correctAnswer: "Tomorrow"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Yesterday",
        correctAnswer: "Etmali"
      }
    ]
  },
  {
    id: 54,
    title: "Emotions & Feelings",
    description: "Express how you feel in Chaldean.",
    level: "Intermediate",
    xpReward: 150,
    icon: "😊",
    vocabulary: [
      { word: "Khudta", translation: "Joy/Happiness", phonetic: "Khud-ta", script: "ܚܕܘܬܐ" },
      { word: "Kriuta", translation: "Sadness", phonetic: "Kriu-ta", script: "ܟܪܝܘܬܐ" },
      { word: "Dekhla", translation: "Fear", phonetic: "Dekh-la", script: "ܕܚܠܐ" },
      { word: "Khuba", translation: "Love", phonetic: "Khu-ba", script: "ܚܘܒܐ" },
      { word: "Shurkha", translation: "Hope", phonetic: "Shur-kha", script: "ܣܘܟܝܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What is 'Love' in Chaldean?",
        options: ["Khuba", "Khudta", "Kriuta", "Dekhla"],
        correctAnswer: "Khuba"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What does 'Khudta' mean?",
        options: ["Joy/Happiness", "Sadness", "Fear", "Anger"],
        correctAnswer: "Joy/Happiness"
      },
      {
        id: 3,
        type: 'translation',
        question: "Translate: Hope",
        correctAnswer: "Shurkha"
      }
    ]
  },
  {
    id: 55,
    title: "Present Tense Conjugation",
    description: "Master present tense verb conjugation for all persons.",
    level: "Advanced",
    xpReward: 250,
    icon: "🔄",
    vocabulary: [
      { word: "Ana akhlin", translation: "I eat", phonetic: "A-na akh-lin", script: "ܐܢܐ ܐܟܠܝܢ" },
      { word: "At akhlit", translation: "You (m) eat", phonetic: "At akh-lit", script: "ܐܢܬ ܐܟܠܬ" },
      { word: "Akh akhlit", translation: "You (f) eat", phonetic: "Akh akh-lit", script: "ܐܢܬܝ ܐܟܠܬ" },
      { word: "Aw akhil", translation: "He eats", phonetic: "Aw a-khil", script: "ܐܘ ܐܟܠ" },
      { word: "Ay akhla", translation: "She eats", phonetic: "Ay akh-la", script: "ܐܝ ܐܟܠܐ" },
      { word: "Akhnan akhlin", translation: "We eat", phonetic: "Akh-nan akh-lin", script: "ܐܚܢܢ ܐܟܠܝܢ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Complete the conjugation: 'Ana ___' (I eat)",
        options: ["akhlin", "akhlit", "akhil", "akhla"],
        correctAnswer: "akhlin"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What ending do verbs take for 'he'?",
        options: ["-il", "-lin", "-lit", "-la"],
        correctAnswer: "-il"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Translate: 'She eats'",
        options: ["Ay akhla", "Aw akhil", "Ana akhlin", "At akhlit"],
        correctAnswer: "Ay akhla"
      },
      {
        id: 4,
        type: 'translation',
        question: "How do you say 'We eat'?",
        correctAnswer: "Akhnan akhlin"
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: "What is the pattern for 'you (masculine)'?",
        options: ["At + verb-lit", "Ana + verb-lin", "Aw + verb-il", "Ay + verb-la"],
        correctAnswer: "At + verb-lit"
      }
    ]
  },
  {
    id: 56,
    title: "Past Tense Formation",
    description: "Learn how to express past actions and events.",
    level: "Advanced",
    xpReward: 250,
    icon: "⏮️",
    vocabulary: [
      { word: "Ana khlili", translation: "I ate", phonetic: "A-na khli-li", script: "ܐܢܐ ܟܠܝܠܝ" },
      { word: "At khlilokh", translation: "You (m) ate", phonetic: "At khli-lokh", script: "ܐܢܬ ܟܠܝܠܘܟ" },
      { word: "Aw khille", translation: "He ate", phonetic: "Aw khil-le", script: "ܐܘ ܟܠܠܗ" },
      { word: "Ana zilli", translation: "I went", phonetic: "A-na zil-li", script: "ܐܢܐ ܙܠܠܝ" },
      { word: "At zlilokh", translation: "You (m) went", phonetic: "At zli-lokh", script: "ܐܢܬ ܙܠܠܘܟ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Past tense of 'akhal' (to eat) for 'I' is:",
        options: ["khlili", "akhlin", "khille", "khlilokh"],
        correctAnswer: "khlili"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Translate: 'He ate'",
        options: ["Aw khille", "Ana khlili", "At khlilokh", "Aw akhil"],
        correctAnswer: "Aw khille"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "The past tense is formed by:",
        options: ["Changing the verb root and adding suffixes", "Just adding -ed", "Using present form", "Adding 'was'"],
        correctAnswer: "Changing the verb root and adding suffixes"
      },
      {
        id: 4,
        type: 'translation',
        question: "Say 'I went' in Chaldean",
        correctAnswer: "Ana zilli"
      }
    ]
  },
  {
    id: 57,
    title: "Question Formation",
    description: "Learn to form and answer questions properly.",
    level: "Advanced",
    xpReward: 250,
    icon: "❓",
    vocabulary: [
      { word: "Aykha at azil?", translation: "Where are you going?", phonetic: "Ay-kha at a-zil", script: "ܐܝܟܐ ܐܢܬ ܐܙܠ" },
      { word: "Mana at ba'ay?", translation: "What do you want?", phonetic: "Ma-na at ba-ay", script: "ܡܢܐ ܐܢܬ ܒܥܐ" },
      { word: "Lamana la azlit?", translation: "Why didn't you go?", phonetic: "La-ma-na la az-lit", script: "ܠܡܢܐ ܠܐ ܐܙܠܬ" },
      { word: "Aymat athi?", translation: "When will you come?", phonetic: "Ay-mat a-thi", script: "ܐܝܡܬ ܐܬܝ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Question words typically go:",
        options: ["At the beginning", "At the end", "In the middle", "Anywhere"],
        correctAnswer: "At the beginning"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Translate: 'Where are you going?'",
        options: ["Aykha at azil?", "Mana at azil?", "Aymat at azil?", "Lamana at azil?"],
        correctAnswer: "Aykha at azil?"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "'Lamana' means:",
        options: ["Why", "Where", "When", "What"],
        correctAnswer: "Why"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "Word order in questions is typically:",
        options: ["Question word + subject + verb", "Subject + verb + question word", "Verb + question word + subject", "Random"],
        correctAnswer: "Question word + subject + verb"
      }
    ]
  },
  {
    id: 58,
    title: "Negation Patterns",
    description: "Learn to make negative statements correctly.",
    level: "Advanced",
    xpReward: 250,
    icon: "🚫",
    vocabulary: [
      { word: "La akhlin", translation: "I don't eat / I'm not eating", phonetic: "La akh-lin", script: "ܠܐ ܐܟܠܝܢ" },
      { word: "La zilin", translation: "I don't go / I'm not going", phonetic: "La zi-lin", script: "ܠܐ ܙܠܝܢ" },
      { word: "La yadin", translation: "I don't know", phonetic: "La ya-din", script: "ܠܐ ܝܕܝܢ" },
      { word: "Layt", translation: "There isn't / I don't have", phonetic: "Layt", script: "ܠܝܬ" },
      { word: "La khlili", translation: "I didn't eat", phonetic: "La khli-li", script: "ܠܐ ܟܠܝܠܝ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "To negate a verb, you add:",
        options: ["'La' before the verb", "'Not' after verb", "Change verb ending", "Add suffix"],
        correctAnswer: "'La' before the verb"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Translate: 'I don't eat'",
        options: ["La akhlin", "Akhlin la", "La khlili", "No akhlin"],
        correctAnswer: "La akhlin"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "'Layt' is used for:",
        options: ["There isn't / don't have", "Don't want", "Don't go", "Don't like"],
        correctAnswer: "There isn't / don't have"
      },
      {
        id: 4,
        type: 'translation',
        question: "Say 'I didn't eat' in Chaldean",
        correctAnswer: "La khlili"
      }
    ]
  },
  {
    id: 59,
    title: "Prepositions in Context",
    description: "Use prepositions to describe location and direction.",
    level: "Advanced",
    xpReward: 250,
    icon: "🧭",
    vocabulary: [
      { word: "B-bayta", translation: "In the house", phonetic: "B-bay-ta", script: "ܒܒܝܬܐ" },
      { word: "Min bayta", translation: "From the house", phonetic: "Min bay-ta", script: "ܡܢ ܒܝܬܐ" },
      { word: "L-madrasa", translation: "To school", phonetic: "L-mad-ra-sa", script: "ܠܡܕܪܫܬܐ" },
      { word: "Al kursa", translation: "On the chair", phonetic: "Al kur-sa", script: "ܥܠ ܟܘܪܣܝܐ" },
      { word: "Gaw bayta", translation: "Inside the house", phonetic: "Gaw bay-ta", script: "ܓܘ ܒܝܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "The preposition 'b-' means:",
        options: ["In/at/with", "From", "To", "On"],
        correctAnswer: "In/at/with"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Translate: 'From the house'",
        options: ["Min bayta", "B-bayta", "L-bayta", "Al bayta"],
        correctAnswer: "Min bayta"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "To express 'on' or 'upon', use:",
        options: ["Al", "B-", "L-", "Min"],
        correctAnswer: "Al"
      },
      {
        id: 4,
        type: 'translation',
        question: "Say 'To school' in Chaldean",
        correctAnswer: "L-madrasa"
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: "Prepositions attach:",
        options: ["Directly to the noun", "Before with space", "After the noun", "Separately"],
        correctAnswer: "Directly to the noun"
      }
    ]
  },
  {
    id: 60,
    title: "Complex Sentences with Conjunctions",
    description: "Connect ideas and create compound sentences.",
    level: "Advanced",
    xpReward: 300,
    icon: "🔗",
    vocabulary: [
      { word: "Ana akhlin w-shatin", translation: "I eat and drink", phonetic: "A-na akh-lin w-sha-tin", script: "ܐܢܐ ܐܟܠܝܢ ܘܫܬܝܢ" },
      { word: "Ba'in, amma la ith li", translation: "I want, but I don't have", phonetic: "Ba-in am-ma la ith li", script: "ܒܥܝܢ ܐܡܡܐ ܠܐ ܐܝܬ ܠܝ" },
      { word: "Azil l-bayta w-dmikhin", translation: "I go home and sleep", phonetic: "A-zil l-bay-ta w-dmi-khin", script: "ܐܙܠ ܠܒܝܬܐ ܘܕܡܟܝܢ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "The conjunction 'w-' means:",
        options: ["And", "But", "Or", "Because"],
        correctAnswer: "And"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "'Amma' is used for:",
        options: ["But", "And", "Or", "Because"],
        correctAnswer: "But"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Translate: 'I eat and drink'",
        options: ["Ana akhlin w-shatin", "Akhlin w-shatin ana", "Ana w-akhlin shatin", "W-ana akhlin shatin"],
        correctAnswer: "Ana akhlin w-shatin"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "In compound sentences, 'w-' attaches:",
        options: ["To the second verb", "To the first verb", "Stands alone", "To the subject"],
        correctAnswer: "To the second verb"
      }
    ]
  },
  {
    id: 61,
    title: "Describing People and Things",
    description: "Use adjectives correctly with nouns.",
    level: "Advanced",
    xpReward: 300,
    icon: "👤",
    vocabulary: [
      { word: "Gawra raba", translation: "Big man", phonetic: "Gaw-ra ra-ba", script: "ܓܒܪܐ ܪܒܐ" },
      { word: "Bakhta shapirta", translation: "Beautiful woman", phonetic: "Bakh-ta sha-pir-ta", script: "ܒܟ݂ܬܐ ܫܦܝܪܬܐ" },
      { word: "Bayta khatha", translation: "New house", phonetic: "Bay-ta kha-tha", script: "ܒܝܬܐ ܚܕܬܐ" },
      { word: "Ktawa atiqa", translation: "Old book", phonetic: "Kta-wa a-ti-qa", script: "ܟܬܒܐ ܥܬܝܩܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "In Chaldean, adjectives come:",
        options: ["After the noun", "Before the noun", "Either position", "Attached to noun"],
        correctAnswer: "After the noun"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Adjectives must match the noun in:",
        options: ["Both gender and number", "Gender only", "Number only", "Neither"],
        correctAnswer: "Both gender and number"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "Translate: 'Beautiful woman'",
        options: ["Bakhta shapirta", "Shapirta bakhta", "Bakhta shapira", "Shapira bakhta"],
        correctAnswer: "Bakhta shapirta"
      },
      {
        id: 4,
        type: 'translation',
        question: "Say 'Old book' in Chaldean",
        correctAnswer: "Ktawa atiqa"
      }
    ]
  }
];
