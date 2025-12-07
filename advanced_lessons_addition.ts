// Advanced lessons to add to lessons.ts
// These focus on grammar, sentence construction, and real communication

const advancedLessons = [
  {
    id: 50,
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
    id: 51,
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
    id: 52,
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
    id: 53,
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
    id: 54,
    title: "Possession and 'To Have'",
    description: "Express possession and ownership.",
    level: "Advanced",
    xpReward: 250,
    icon: "🤝",
    vocabulary: [
      { word: "Ith li", translation: "I have (lit: there is to me)", phonetic: "Ith li", script: "ܐܝܬ ܠܝ" },
      { word: "Ith lokh", translation: "You (m) have", phonetic: "Ith lokh", script: "ܐܝܬ ܠܘܟ" },
      { word: "Layt li", translation: "I don't have", phonetic: "Layt li", script: "ܠܝܬ ܠܝ" },
      { word: "Dili", translation: "Mine / of me", phonetic: "Di-li", script: "ܕܝܠܝ" },
      { word: "Ktawa dili", translation: "My book", phonetic: "Kta-wa di-li", script: "ܟܬܒܐ ܕܝܠܝ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "'To have' is expressed using:",
        options: ["'Ith' + preposition 'to'", "Verb 'have'", "Suffix on noun", "Separate word"],
        correctAnswer: "'Ith' + preposition 'to'"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Translate: 'I have'",
        options: ["Ith li", "Li ith", "Ith ana", "Ana ith"],
        correctAnswer: "Ith li"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "To show possession of a noun, use:",
        options: ["Noun + dil + suffix", "Suffix on noun", "'Of' before noun", "Change noun"],
        correctAnswer: "Noun + dil + suffix"
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "'My book' in Chaldean is:",
        options: ["Ktawa dili", "Dili ktawa", "Ktawa li", "Li ktawa"],
        correctAnswer: "Ktawa dili"
      }
    ]
  },
  {
    id: 55,
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
    id: 56,
    title: "Complex Sentences with 'And' and 'But'",
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
    id: 57,
    title: "Expressing Future Actions",
    description: "Talk about future plans and intentions.",
    level: "Advanced",
    xpReward: 300,
    icon: "⏭️",
    vocabulary: [
      { word: "Qabin akhil", translation: "I will eat (lit: wanting eat)", phonetic: "Qa-bin a-khil", script: "ܩܒܝܢ ܐܟܠ" },
      { word: "B-akhlin qam", translation: "I will eat tomorrow", phonetic: "B-akh-lin qam", script: "ܒܐܟܠܝܢ ܩܡ" },
      { word: "Azlin l-bayta", translation: "I will go home", phonetic: "Az-lin l-bay-ta", script: "ܐܙܠܝܢ ܠܒܝܬܐ" }
    ],
    content: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Future can be expressed using:",
        options: ["Present tense with time word", "'Will' before verb", "Special future ending", "Change verb root"],
        correctAnswer: "Present tense with time word"
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Another way to express future is:",
        options: ["Qabin + verb infinitive", "Adding -ed", "Using past tense", "Changing word order"],
        correctAnswer: "Qabin + verb infinitive"
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "'Qam' means:",
        options: ["Tomorrow", "Yesterday", "Today", "Now"],
        correctAnswer: "Tomorrow"
      }
    ]
  },
  {
    id: 58,
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
        options: ["Gender", "Number", "Both gender and number", "Neither"],
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

export default advancedLessons;




