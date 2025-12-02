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
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  level: string;
  xpReward: number;
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
    vocabulary: [
      { word: "Shlama", translation: "Hello / Peace", phonetic: "Shla-ma" },
      { word: "Bshina", translation: "Welcome", phonetic: "B-shi-na" },
      { word: "Shlamalokh", translation: "Hello (to a male)", phonetic: "Shla-ma-lokh" },
      { word: "Dakhiwit", translation: "How are you?", phonetic: "Da-khi-wit" }
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
    vocabulary: [
      { word: "Kha", translation: "One", phonetic: "Kha" },
      { word: "Tre", translation: "Two", phonetic: "Tre" },
      { word: "Tlatha", translation: "Three", phonetic: "Tla-tha" },
      { word: "Arba", translation: "Four", phonetic: "Ar-ba" },
      { word: "Khamsha", translation: "Five", phonetic: "Kham-sha" }
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
    vocabulary: [
      { word: "Baba", translation: "Father", phonetic: "Ba-ba" },
      { word: "Yima", translation: "Mother", phonetic: "Yi-ma" },
      { word: "Akhona", translation: "Brother", phonetic: "A-kho-na" },
      { word: "Khatha", translation: "Sister", phonetic: "Kha-tha" },
      { word: "Sawa", translation: "Grandfather", phonetic: "Sa-wa" }
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
      }
    ]
  },
  {
    id: 4,
    title: "Common Colors",
    description: "Learn basic colors in Chaldean.",
    level: "Beginner",
    xpReward: 120,
    vocabulary: [
      { word: "Smoqa", translation: "Red", phonetic: "Smo-qa" },
      { word: "Khwara", translation: "White", phonetic: "Khwa-ra" },
      { word: "Ukma", translation: "Black", phonetic: "Uk-ma" },
      { word: "Yaruka", translation: "Green", phonetic: "Ya-ru-ka" },
      { word: "Khawra", translation: "Blue", phonetic: "Khaw-ra" }
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
    vocabulary: [
      { word: "Mya", translation: "Water", phonetic: "M-ya" },
      { word: "Lakhma", translation: "Bread", phonetic: "Lakh-ma" },
      { word: "Bisra", translation: "Meat", phonetic: "Bis-ra" },
      { word: "Chai", translation: "Tea", phonetic: "Chai" },
      { word: "Tapukha", translation: "Apple", phonetic: "Ta-pu-kha" }
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
      }
    ]
  },
  {
    id: 6,
    title: "Basic Actions",
    description: "Learn common verbs to express actions.",
    level: "Intermediate",
    xpReward: 150,
    vocabulary: [
      { word: "Akhal", translation: "To Eat", phonetic: "A-khal" },
      { word: "Shtay", translation: "To Drink", phonetic: "Sh-tay" },
      { word: "Dmikh", translation: "To Sleep", phonetic: "D-mikh" },
      { word: "Yithib", translation: "To Sit", phonetic: "Yi-thib" },
      { word: "Azil", translation: "To Go", phonetic: "A-zil" }
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
    vocabulary: [
      { word: "Yoma", translation: "Day", phonetic: "Yo-ma" },
      { word: "Lelya", translation: "Night", phonetic: "Lel-ya" },
      { word: "Idyo", translation: "Today", phonetic: "Id-yo" },
      { word: "Qam", translation: "Tomorrow", phonetic: "Qam" },
      { word: "Shabta", translation: "Saturday", phonetic: "Shab-ta" }
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
  }
];
