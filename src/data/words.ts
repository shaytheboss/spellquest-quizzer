
export interface SpellingWord {
  id: number;
  word: string;
  pastTense: string;
  hebrewTranslation: string;
  definition?: string;
  example?: string;
}

export const spellingWords: SpellingWord[] = [
  {
    id: 1,
    word: "sit",
    pastTense: "sat",
    hebrewTranslation: "לשבת",
    definition: "To be in a position in which the lower part of your body is resting on a surface",
    example: "She sits at her desk all day."
  },
  {
    id: 2,
    word: "ring",
    pastTense: "rang",
    hebrewTranslation: "לצלצל",
    definition: "To make a clear resonant sound",
    example: "The phone rang several times before she answered it."
  },
  {
    id: 3,
    word: "sing",
    pastTense: "sang",
    hebrewTranslation: "לשיר",
    definition: "To make musical sounds with the voice",
    example: "She sings in the church choir every Sunday."
  },
  {
    id: 4,
    word: "swim",
    pastTense: "swam",
    hebrewTranslation: "לשחות",
    definition: "To move through water using your arms and legs",
    example: "The children swim in the lake during summer."
  },
  {
    id: 5,
    word: "drink",
    pastTense: "drank",
    hebrewTranslation: "לשתות",
    definition: "To take liquid into your mouth and swallow it",
    example: "He drinks coffee every morning."
  },
  {
    id: 6,
    word: "begin",
    pastTense: "began",
    hebrewTranslation: "להתחיל",
    definition: "To start doing something",
    example: "The ceremony begins at noon."
  },
  {
    id: 7,
    word: "know",
    pastTense: "knew",
    hebrewTranslation: "לדעת",
    definition: "To have information in your mind",
    example: "I know the answer to that question."
  },
  {
    id: 8,
    word: "throw",
    pastTense: "threw",
    hebrewTranslation: "לזרוק",
    definition: "To send something from your hand through the air",
    example: "He throws the ball to his dog."
  },
  {
    id: 9,
    word: "grow",
    pastTense: "grew",
    hebrewTranslation: "לגדול",
    definition: "To increase in size or amount",
    example: "Plants grow faster in the summer."
  },
  {
    id: 10,
    word: "blow",
    pastTense: "blew",
    hebrewTranslation: "לנשוף",
    definition: "To move and create an air current",
    example: "The wind blows strongly in March."
  },
  {
    id: 11,
    word: "fly",
    pastTense: "flew",
    hebrewTranslation: "לעוף",
    definition: "To move through the air using wings",
    example: "Birds fly south for the winter."
  },
  {
    id: 12,
    word: "draw",
    pastTense: "drew",
    hebrewTranslation: "לצייר",
    definition: "To create a picture using a pencil, pen, etc.",
    example: "The child draws pictures of her family."
  },
  {
    id: 13,
    word: "speak",
    pastTense: "spoke",
    hebrewTranslation: "לדבר",
    definition: "To say words in order to express thoughts",
    example: "She speaks three languages fluently."
  },
  {
    id: 14,
    word: "break",
    pastTense: "broke",
    hebrewTranslation: "לשבור",
    definition: "To separate into pieces as a result of force",
    example: "Be careful not to break the glass."
  },
  {
    id: 15,
    word: "steal",
    pastTense: "stole",
    hebrewTranslation: "לגנוב",
    definition: "To take without permission or legal right",
    example: "It's wrong to steal from others."
  },
  {
    id: 16,
    word: "write",
    pastTense: "wrote",
    hebrewTranslation: "לכתוב",
    definition: "To mark letters or words on a surface",
    example: "She writes in her journal every evening."
  },
  {
    id: 17,
    word: "ride",
    pastTense: "rode",
    hebrewTranslation: "לרכוב",
    definition: "To sit on and control the movement of an animal or vehicle",
    example: "Children ride their bikes in the park."
  },
  {
    id: 18,
    word: "drive",
    pastTense: "drove",
    hebrewTranslation: "לנהוג",
    definition: "To operate and control a vehicle",
    example: "He drives to work every day."
  },
  {
    id: 19,
    word: "choose",
    pastTense: "chose",
    hebrewTranslation: "לבחור",
    definition: "To select from a number of possibilities",
    example: "You need to choose a color for the walls."
  },
  {
    id: 20,
    word: "wake",
    pastTense: "woke",
    hebrewTranslation: "להתעורר",
    definition: "To stop sleeping",
    example: "I wake up at 6 AM every day."
  },
  {
    id: 21,
    word: "rise",
    pastTense: "rose",
    hebrewTranslation: "לקום",
    definition: "To move upward",
    example: "The sun rises in the east."
  },
  {
    id: 22,
    word: "shine",
    pastTense: "shone",
    hebrewTranslation: "לזרוח",
    definition: "To produce or reflect light",
    example: "The sun shines brightly today."
  },
  {
    id: 23,
    word: "think",
    pastTense: "thought",
    hebrewTranslation: "לחשוב",
    definition: "To use the mind to form ideas or opinions",
    example: "I think we should leave early."
  },
  {
    id: 24,
    word: "buy",
    pastTense: "bought",
    hebrewTranslation: "לקנות",
    definition: "To get something by paying money for it",
    example: "We buy fresh vegetables every week."
  },
  {
    id: 25,
    word: "bring",
    pastTense: "brought",
    hebrewTranslation: "להביא",
    definition: "To take or carry something to a place",
    example: "Please bring your books to class."
  },
  {
    id: 26,
    word: "fight",
    pastTense: "fought",
    hebrewTranslation: "להילחם",
    definition: "To use physical force to try to defeat someone",
    example: "The soldiers fight for their country."
  },
  {
    id: 27,
    word: "teach",
    pastTense: "taught",
    hebrewTranslation: "ללמד",
    definition: "To give someone knowledge or skills",
    example: "She teaches mathematics at the university."
  },
  {
    id: 28,
    word: "catch",
    pastTense: "caught",
    hebrewTranslation: "לתפוס",
    definition: "To stop and hold something that is moving through the air",
    example: "He catches the ball with one hand."
  },
  {
    id: 29,
    word: "give",
    pastTense: "gave",
    hebrewTranslation: "לתת",
    definition: "To present voluntarily and without expecting compensation",
    example: "We give presents on birthdays."
  }
];
