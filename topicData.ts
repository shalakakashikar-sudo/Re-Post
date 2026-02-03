
import { LearnTopic } from './types';
import { ALL_QUIZZES } from './quizData';

export const ALL_LEARN_TOPICS: LearnTopic[] = [
  {
    id: 'mod-1',
    moduleId: 1,
    category: 'Foundations',
    title: 'The SQCEM Identification',
    shortTitle: 'Identify Type',
    exitSkill: 'Identify Statement, Question, Command, Exclamation, or Mixed.',
    icon: '🔍',
    description: 'The first step of the postman is sorting. You must identify the "type" of the parcel before you can stamp it correctly.',
    why: 'Different types use different connectors (that, if, to) and different reporting verbs (told, asked, requested).',
    directExample: 'He said, "Where are you?"',
    indirectExample: 'He asked where I was.',
    waffleTip: 'Look at the punctuation mark at the very end of the quote!',
    wittyRemark: 'A question mark means "asked". A period usually means "told". Simple, squeak!',
    infographic: {
      header: 'The sorting machine rules',
      rows: [
        { label: 'S (Statement)', value: 'Ends in [ . ] - Use "told" or "said"' },
        { label: 'Q (Question)', value: 'Ends in [ ? ] - Use "asked" or "inquired"' },
        { label: 'C (Command)', value: 'Ends in [ . ] or [ ! ] - Use "ordered" or "requested"' },
        { label: 'E (Exclamation)', value: 'Ends in [ ! ] - Use "exclaimed"' },
        { label: 'M (Mixed)', value: 'Joins two types - Use "and added that"' }
      ]
    },
    quiz: ALL_QUIZZES['mod-1'] || []
  },
  {
    id: 'mod-3',
    moduleId: 3,
    category: 'Statements',
    title: 'Basic Statements (No Object)',
    shortTitle: 'Said vs Told',
    exitSkill: 'Convert statements with no listener mentioned.',
    icon: '✉️',
    description: 'When the speaker is just "saying" to the world, the reporting verb "said" does not change.',
    why: 'There is no object to receive the "told" action.',
    directExample: 'Ram said, "I am busy."',
    indirectExample: 'Ram said that he was busy.',
    waffleTip: 'If there is no "to [Someone]", keep the "said"!',
    wittyRemark: 'Talking to yourself is fine in grammar, just keep the "said"!',
    infographic: {
      header: 'Simple Delivery Stamping',
      rows: [
        { label: 'Reporting Clause', value: 'Ram said (No Object)' },
        { label: 'Connector', value: 'Always use "that" for Statements' },
        { label: 'Tense Stamp', value: 'Backshift: am -> was' },
        { label: 'Identity Stamp', value: 'I -> He (Subject Match)' }
      ]
    },
    quiz: ALL_QUIZZES['mod-3'] || []
  }
  // ... Additional modules follow same pattern
];
