export interface LessonQuestion {
  id: number;
  type: 'multiple-choice' | 'translation';
  question: string;
  options?: string[];
  correctAnswer: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  level: string;
  xpReward: number;
  content: LessonQuestion[];
}

export const lessonsData: Lesson[] = [
  {
    id: 1,
    title: "First Greetings",
    description: "Learn how to say hello and welcome in Chaldean.",
    level: "Beginner",
    xpReward: 100,
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
        correctAnswer: "Shlamalokh" // Basic string match for now
      }
    ]
  },
  {
    id: 2,
    title: "Counting 1-5",
    description: "Learn the first five numbers.",
    level: "Beginner",
    xpReward: 100,
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
      }
    ]
  }
];

