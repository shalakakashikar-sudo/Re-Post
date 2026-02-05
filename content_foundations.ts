
import { LearnTopic } from './types';
import { quizFoundations } from './quiz_foundations';

export const foundationTopics: LearnTopic[] = [
  {
    id: 'mod-1',
    moduleId: 1,
    category: 'Foundations',
    title: 'Identifying Sentence Types',
    shortTitle: 'Sentence Types',
    exitSkill: 'Identify sentence type (Statement, Question, Command, Exclamation, Mixed).',
    icon: '🔍',
    description: 'Every sentence belongs to one of five categories. You must be able to spot the type instantly before converting.',
    why: 'The type determines which reporting verb and connector (that, if, to) you use.',
    directExample: 'He said, "Where is the post office?"',
    indirectExample: 'He asked where the post office was.',
    waffleTip: 'Use the SQCEM Trick: Statement (.), Question (?), Command (. or !), Exclamation (!), Mixed (joined types).',
    wittyRemark: 'Spot the punctuation first!',
    infographics: [{
      header: 'The Exhaustive SQCEM Manual',
      rows: [
        { label: 'S (Statement)', value: 'Simple Fact/Info. Ends with [ . ]. Use "that" connector.' },
        { label: 'Q (Question)', value: 'Inquiry. Ends with [ ? ]. Use "if/whether" or Wh-word.' },
        { label: 'C (Command)', value: 'Order/Request. Ends with [ . ] or [ ! ]. Use "to + V1".' },
        { label: 'E (Exclamation)', value: 'Emotion. Ends with [ ! ]. Use descriptive reporting verbs.' },
        { label: 'M (Mixed)', value: 'Joined types. Use "and added that" or "and asked".' }
      ]
    }],
    quiz: quizFoundations['mod-1']
  },
  {
    id: 'mod-2',
    moduleId: 2,
    category: 'Foundations',
    title: 'The TRPT Framework',
    shortTitle: 'TRPT Framework',
    exitSkill: 'Apply the TRPT framework for basic sentence transformation.',
    icon: '🏗️',
    description: 'The fundamental skeleton of reporting speech involves checking five critical pillars.',
    why: 'Missing one pillar causes a "grammar leak" that changes the original meaning.',
    directExample: 'Ram said to me, "I am busy."',
    indirectExample: 'Ram told me that he was busy.',
    waffleTip: 'Remember the TRPT Mantra: Tense → Reporting Verb → Pronoun → Time/Place.',
    wittyRemark: 'Check the skeleton before you build the body!',
    infographics: [
      {
        header: 'Tense Step-Down Chart',
        rows: [
          { label: 'Present → Past', value: 'is/am/are → was/were; write → wrote' },
          { label: 'Past → Past Perfect', value: 'wrote → had written; was → had been' },
          { label: 'Future → Conditional', value: 'will → would; can → could' }
        ]
      },
      {
        header: 'The 5-Pillar Framework',
        rows: [
          { label: 'Tense', value: 'Backshift: Move one step into the past.' },
          { label: 'Reporting Verb', value: 'Tone: said to → told / asked / ordered.' },
          { label: 'Pronouns', value: 'Identity: I/You → He/She/Me (The PRO Rule).' },
          { label: 'Time & Place', value: 'Distance: near words (now) → far words (then).' },
          { label: 'Connectors', value: 'Bridge: add "that", "if/whether", or "to".' }
        ]
      }
    ],
    quiz: quizFoundations['mod-2']
  }
];
