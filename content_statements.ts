
import { LearnTopic } from './types';
import { quizStatements } from './quiz_statements';

export const statementTopics: LearnTopic[] = [
  {
    id: 'mod-3',
    moduleId: 3,
    category: 'Statements',
    title: 'Simple Statements (No Object)',
    shortTitle: 'Basic Statements',
    exitSkill: 'Convert basic statements correctly when no listener is mentioned.',
    icon: '✉️',
    description: 'The simplest possible conversion. When the reporting verb is "said" (no listener mentioned) and there are no time/place words, we follow a simple 4-step backshift.',
    why: 'If there is no listener, the reporting verb stays as "said". It does NOT change to "told".',
    directExample: 'Rajan said, "I am ill."',
    indirectExample: 'Rajan said that he was ill.',
    waffleTip: 'Connector "that" goes immediately after "said"!',
    wittyRemark: 'Squeak! No one listening? Keep the "said"!',
    infographics: [{
      header: 'Simple Statement Rules',
      rows: [
        { label: 'Step 1', value: 'Remove quotation marks [" "]' },
        { label: 'Step 2', value: 'Add "that" after "said"' },
        { label: 'Step 3', value: 'Change pronouns (I/we → he/she/they)' },
        { label: 'Step 4', value: 'Change tense one step back' }
      ]
    }],
    quiz: quizStatements['mod-3']
  },
  {
    id: 'mod-4',
    moduleId: 4,
    category: 'Statements',
    title: 'Statements with Object (said to → told)',
    shortTitle: 'Object Statements',
    exitSkill: 'Apply the PRO Rule and change "said to" to "told".',
    icon: '👥',
    description: 'When a listener is present ("said to me", "said to him"), the reporting verb changes to "told". "Told" already carries the meaning of "said to someone."',
    why: 'In Indirect Speech, "said to" sounds incomplete.',
    directExample: 'He said to me, "You are brilliant."',
    indirectExample: 'He told me that I was brilliant.',
    waffleTip: 'Memory Aid: Think of it as a swap game!',
    wittyRemark: 'If you have a listener, you gotta tell \'em!',
    infographics: [{
      header: 'The PRO Identity Rule',
      rows: [
        { label: 'Verb Change', value: '"said to" ALWAYS becomes "told"' },
        { label: '1st Person (I/we)', value: 'Follows Reporting Subject' },
        { label: '2nd Person (You)', value: 'Follows Reporting Object (Listener)' },
        { label: '3rd Person (He/she)', value: 'No change' }
      ]
    }],
    quiz: quizStatements['mod-4']
  },
  {
    id: 'mod-5',
    moduleId: 5,
    category: 'Statements',
    title: 'Time Expressions (Near to Far)',
    shortTitle: 'Time Shifts',
    exitSkill: 'Shift "near" time words to "far" time words accurately.',
    icon: '⏰',
    description: 'When someone spoke in the past and we report it later, all words showing nearness in time must shift to show distance.',
    why: 'Shifts happen because time has moved forward between speaking and reporting.',
    directExample: 'He said, "I will meet you tomorrow."',
    indirectExample: 'He said that he would meet him the next day.',
    waffleTip: 'Yesterday becomes "the previous day". Today becomes "that day"!',
    wittyRemark: 'Time travel for words! Squeak!',
    infographics: [{
      header: 'Time Shift Table',
      rows: [
        { label: 'now / today', value: 'then / that day' },
        { label: 'tomorrow', value: 'the next day / following day' },
        { label: 'yesterday', value: 'the previous day / day before' },
        { label: 'tonight / ago', value: 'that night / before' },
        { label: 'last week', value: 'the previous week' }
      ]
    }],
    quiz: quizStatements['mod-5']
  },
  {
    id: 'mod-6',
    moduleId: 6,
    category: 'Statements',
    title: 'Place Expressions (Near to Far)',
    shortTitle: 'Place Shifts',
    exitSkill: 'Convert place and context words to show distance.',
    icon: '📍',
    description: 'Just like time words, place words also shift from nearness to distance in reporting.',
    why: 'The reporter is often at a different distance from the object than the speaker was.',
    directExample: 'He said, "I bought this book."',
    indirectExample: 'He said that he had bought that book.',
    waffleTip: 'Here becomes there. This becomes that. It\'s the map shift!',
    wittyRemark: 'Near to Far! My whiskers feel the distance!',
    infographics: [{
      header: 'Place & Context Table',
      rows: [
        { label: 'here / this', value: 'there / that' },
        { label: 'these / hence', value: 'those / thence' },
        { label: 'come / bring', value: 'go / take' }
      ]
    }],
    quiz: quizStatements['mod-6']
  },
  {
    id: 'mod-7',
    moduleId: 7,
    category: 'Statements',
    title: 'Statements with Modal Verbs',
    shortTitle: 'Modal Shifts',
    exitSkill: 'Properly shift modals to their past forms or maintain them.',
    icon: '🔧',
    description: 'Modal verbs (will, can, may, etc.) change based on whether they are in "present form" or "past form".',
    why: 'Present modals change to show the past perspective; past modals stay stable.',
    directExample: 'He said, "I can swim very fast."',
    indirectExample: 'He said that he could swim very fast.',
    waffleTip: 'Present Modals Change. Past Modals Stay!',
    wittyRemark: 'Can becomes Could, but Would stays Would!',
    infographics: [{
      header: 'The Golden Rule for Modals',
      rows: [
        { label: 'will / shall', value: 'would / should' },
        { label: 'can / may', value: 'could / might' },
        { label: 'must', value: 'had to / must' },
        { label: 'Already Past', value: 'would, could, should, might, ought to (No Change)' }
      ]
    }],
    quiz: quizStatements['mod-7']
  },
  {
    id: 'mod-8',
    moduleId: 8,
    category: 'Statements',
    title: 'Present & Future Reporting Verbs',
    shortTitle: 'Exception: Present',
    exitSkill: 'Identify when NO tense change is needed despite reporting.',
    icon: '🕒',
    description: 'When the reporting verb is in the present (says, tells) or future (will say), NO tense change happens at all.',
    why: 'Tenses change ONLY when the reporting verb is in the past tense (said, told).',
    directExample: 'The servant says, "Tea is ready."',
    indirectExample: 'The servant says that tea is ready.',
    waffleTip: 'Check the reporting verb first! Is it says? Then don\'t shift!',
    wittyRemark: 'Hold your horses! Check the verb tense first!',
    infographics: [{
      header: 'Tense Lock Exception',
      rows: [
        { label: 'says / tells', value: 'Present: NO backshift' },
        { label: 'will say', value: 'Future: NO backshift' },
        { label: 'Important', value: 'Only change tense if verb is past (said/told)' }
      ]
    }],
    quiz: quizStatements['mod-8']
  },
  {
    id: 'mod-9',
    moduleId: 9,
    category: 'Statements',
    title: 'Universal Truths & Habits',
    shortTitle: 'Facts & Truths',
    exitSkill: 'Maintain present tense for universal facts and habitual actions.',
    icon: '🌍',
    description: 'If the reported speech is a universal truth, scientific fact, moral saying, or habitual action, the present tense is retained.',
    why: 'These things are always true. Saying "the earth was round" implies it isn\'t anymore!',
    directExample: 'The teacher said, "The sun rises in the east."',
    indirectExample: 'The teacher said that the sun rises in the east.',
    waffleTip: 'Is it always true? Then keep it in the present!',
    wittyRemark: 'Scientific facts are permanent shipments!',
    infographics: [{
      header: 'Permanent Truth Rules',
      rows: [
        { label: 'Scientific Fact', value: 'Water boils at 100°C (Stays boils)' },
        { label: 'Mathematical', value: 'Two and two make four (Stays make)' },
        { label: 'Moral Truth', value: 'Virtue is its own reward (Stays is)' },
        { label: 'Habitual Fact', value: 'She always wakes up early (Stays wakes)' }
      ]
    }],
    quiz: quizStatements['mod-9']
  }
];
