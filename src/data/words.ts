
export interface SpellingWord {
  id: number;
  word: string;
  hebrewTranslation: string;
  definition: string;
  example?: string;
}

export const spellingWords: SpellingWord[] = [
  {
    id: 1,
    word: "accommodate",
    hebrewTranslation: "להתאים",
    definition: "To provide with something desired, needed, or suited.",
    example: "The hotel can accommodate up to 500 guests."
  },
  {
    id: 2,
    word: "rhythm",
    hebrewTranslation: "קצב",
    definition: "A strong, regular, repeated pattern of movement or sound.",
    example: "She couldn't help tapping her feet to the rhythm of the music."
  },
  {
    id: 3,
    word: "necessary",
    hebrewTranslation: "הכרחי",
    definition: "Required to be done, achieved, or present; needed; essential.",
    example: "It is necessary to complete all the paperwork before proceeding."
  },
  {
    id: 4,
    word: "experience",
    hebrewTranslation: "ניסיון",
    definition: "Practical contact with and observation of facts or events.",
    example: "The experience of seeing the Grand Canyon for the first time was breathtaking."
  },
  {
    id: 5,
    word: "definitely",
    hebrewTranslation: "בהחלט",
    definition: "Without doubt; unquestionably.",
    example: "That is definitely the right answer."
  },
  {
    id: 6,
    word: "separate",
    hebrewTranslation: "נפרד",
    definition: "Forming or viewed as a unit apart or by itself.",
    example: "The children sleep in separate rooms."
  },
  {
    id: 7,
    word: "weird",
    hebrewTranslation: "מוזר",
    definition: "Suggesting something supernatural; uncanny.",
    example: "The house had a weird atmosphere that made everyone uncomfortable."
  },
  {
    id: 8,
    word: "maintenance",
    hebrewTranslation: "תחזוקה",
    definition: "The process of maintaining or preserving someone or something.",
    example: "Regular maintenance of the equipment prolongs its life."
  },
  {
    id: 9,
    word: "occurrence",
    hebrewTranslation: "התרחשות",
    definition: "An incident or event.",
    example: "Sightings of the rare bird are a common occurrence in this area."
  },
  {
    id: 10,
    word: "intelligence",
    hebrewTranslation: "אינטליגנציה",
    definition: "The ability to acquire and apply knowledge and skills.",
    example: "Her intelligence was evident in how quickly she solved the problem."
  }
];
