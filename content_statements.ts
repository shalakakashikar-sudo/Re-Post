import { LearnTopic } from './types';
import { quizStatements } from './quiz_statements';

export const statementTopics: LearnTopic[] = [
  {
    id: 'mod-3',
    moduleId: 3,
    category: 'Statements',
    title: 'Simple Statements (No Object)',
    shortTitle: 'Basic Statements',
    exitSkill: 'Convert basic statements where no listener is mentioned.',
    icon: '✉️',
    description: 'When no listener is mentioned, the reporting verb "said" remains unchanged.',
    why: 'The connector "that" is added to join the clauses.',
    directExample: 'Rajan said, "I am ill."',
    indirectExample: 'Rajan said that he was ill.',
    waffleTip: 'No object? "said" stays "said".',
    wittyRemark: 'If no one is listening, "said" is just fine!',
    infographic: {
      header: 'Simple Statement Core',
      rows: [
        { label: 'Rule 1', value: 'Keep "said" if there is no listener.' },
        { label: 'Rule 2', value: 'Add "that" as a bridge.' },
        { label: 'Rule 3', value: 'Remove all commas and quotation marks.' }
      ]
    },
    quiz: quizStatements['mod-3']
  },
  {
    id: 'mod-4',
    moduleId: 4,
    category: 'Statements',
    title: 'Statements with Object (said to → told)',
    shortTitle: 'Object Statements',
    exitSkill: 'Apply the PRO Rule: 1st person follows Subject, 2nd follows Object.',
    icon: '👥',
    description: 'When a listener is present, "said to" must change to "told".',
    why: '"Told" is transitive and requires an object (the listener).',
    directExample: 'He said to me, "You are brilliant."',
    indirectExample: 'He told me that I was brilliant.',
    waffleTip: 'PRO Rule: 1st (Subject), 2nd (Object), 3rd (No change).',
    wittyRemark: 'A listener means it\'s time for "told"!',
    infographic: {
      header: 'The PRO Identity Rule',
      rows: [
        { label: '1st Person (I, we, me)', value: 'Changes according to the Subject.' },
        { label: '2nd Person (You, your)', value: 'Changes according to the Object.' },
        { label: '3rd Person (He, she, it, they)', value: 'No change to identity.' }
      ]
    },
    quiz: quizStatements['mod-4']
  },
  {
    id: 'mod-5',
    moduleId: 5,
    category: 'Statements',
    title: 'Statements with Time Expressions',
    shortTitle: 'Time Shifts',
    exitSkill: 'Convert "near" time words to "far" time words.',
    icon: '⏰',
    description: 'Words showing nearness in time must shift to show distance.',
    why: 'The original moment has passed relative to the new reporting moment.',
    directExample: 'She said, "I met him yesterday."',
    indirectExample: 'She said that she had met him the previous day.',
    waffleTip: 'Tomorrow → Next Day, Yesterday → Previous Day.',
    wittyRemark: 'Time moves forward, so do the words!',
    infographic: {
      header: 'Time Conversion Map',
      rows: [
        { label: 'Now / Today', value: 'Then / That day' },
        { label: 'Tonight', value: 'That night' },
        { label: 'Yesterday', value: 'The previous day / the day before' },
        { label: 'Tomorrow', value: 'The next day / the following day' },
        { label: 'Last week', value: 'The week before / previous week' }
      ]
    },
    quiz: quizStatements['mod-5']
  },
  {
    id: 'mod-6',
    moduleId: 6,
    category: 'Statements',
    title: 'Statements with Place Expressions',
    shortTitle: 'Place Shifts',
    exitSkill: 'Convert "near" place words to "far" place words.',
    icon: '📍',
    description: 'Place words shift from nearness to distance.',
    why: 'You are often reporting from a different "here" than the original.',
    directExample: 'He said, "I live here."',
    indirectExample: 'He said that he lived there.',
    waffleTip: 'This → That, These → Those, Here → There.',
    wittyRemark: 'Indirect speech creates distance!',
    infographic: {
      header: 'Space Conversion Map',
      rows: [
        { label: 'Here', value: 'There' },
        { label: 'This', value: 'That' },
        { label: 'These', value: 'Those' },
        { label: 'Hither', value: 'Thither' },
        { label: 'Hence', value: 'Thence' }
      ]
    },
    quiz: quizStatements['mod-6']
  },
  {
    id: 'mod-7',
    moduleId: 7,
    category: 'Statements',
    title: 'Statements with Modal Verbs',
    shortTitle: 'Modals',
    exitSkill: 'Shift will/shall/can/may to past forms.',
    icon: '🛠️',
    description: 'Present modals change to past forms; past modals remain unchanged.',
    why: 'Modals must align with the past reporting verb.',
    directExample: 'She said, "I can swim very fast."',
    indirectExample: 'She said that she could swim very fast.',
    waffleTip: 'can → could, will → would, shall → should.',
    wittyRemark: 'Modals backshift like regular verbs!',
    infographic: {
      header: 'The Modal Shift Table',
      rows: [
        { label: 'Will / Shall', value: 'Would / Should' },
        { label: 'Can / May', value: 'Could / Might' },
        { label: 'Must', value: 'Had to (for past obligation)' },
        { label: 'Permanent Modals', value: 'Could, Would, Should (No change)' }
      ]
    },
    quiz: quizStatements['mod-7']
  },
  {
    id: 'mod-8',
    moduleId: 8,
    category: 'Statements',
    title: 'Statements with Present Reporting Verb',
    shortTitle: 'Present Reporting',
    exitSkill: 'Identify when NO tense change is needed.',
    icon: '🗣️',
    description: 'If the reporting verb is in the present (says) or future (will say), NO tense change happens.',
    why: 'There is no time gap to create a backshift in tense.',
    directExample: 'He says, "Tea is ready."',
    indirectExample: 'He says that tea is ready.',
    waffleTip: 'Present reporting? Leave the tense alone!',
    wittyRemark: 'No past verb, no past shift!',
    infographic: {
      header: 'No-Shift Triggers',
      rows: [
        { label: 'Says / Tells', value: 'Keep original tense' },
        { label: 'Will say', value: 'Keep original tense' },
        { label: 'Has said', value: 'Keep original tense' }
      ]
    },
    quiz: quizStatements['mod-8']
  },
  {
    id: 'mod-9',
    moduleId: 9,
    category: 'Statements',
    title: 'Universal Truths & Habits',
    shortTitle: 'Facts & Habits',
    exitSkill: 'Retain present tense for unchangeable facts.',
    icon: '🌍',
    description: 'Universal truths, facts, or habits keep the present tense.',
    why: 'Facts are eternally true regardless of the time of reporting.',
    directExample: 'The teacher said, "The sun rises in the east."',
    indirectExample: 'The teacher said that the sun rises in the east.',
    waffleTip: 'Scientific facts don\'t backshift!',
    wittyRemark: 'Facts are immortal!',
    infographic: {
      header: 'Permanent Truth Log',
      rows: [
        { label: 'Scientific Law', value: 'Gravity pulls things down.' },
        { label: 'Universal Truth', value: 'The Earth is round.' },
        { label: 'Mathematical Fact', value: 'Two plus two is four.' },
        { label: 'Habitual Action', value: 'He wakes up at 6 AM.' }
      ]
    },
    quiz: quizStatements['mod-9']
  }
];