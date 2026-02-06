
import { LearnTopic } from './types';
import { quizFoundations } from './quiz_foundations';

export const foundationTopics: LearnTopic[] = [
  {
    id: 'mod-1',
    moduleId: 1,
    category: 'Foundations',
    title: 'Identifying Sentence Types',
    shortTitle: 'Sentence Types',
    exitSkill: 'Correctly identify what kind of sentence you are dealing with before converting.',
    icon: '🔍',
    description: 'Every sentence you will ever convert belongs to one of these five categories. Before you touch a single conversion, you must be able to spot the type instantly. This is your first and most important skill.',
    why: 'The type determines the specific reporting verb and connector used in Indirect Speech.',
    directExample: 'He said, "I think it will rain today."',
    indirectExample: 'He said that he thought it would rain that day.',
    waffleTip: 'Memory Aid: The "SQCEM" Trick!',
    wittyRemark: 'Spot the type first, squeak!',
    infographics: [{
      header: 'The SQCEM Trick',
      rows: [
        { label: 'S (Statement)', value: 'Ends with ( . )' },
        { label: 'Q (Question)', value: 'Ends with ( ? )' },
        { label: 'C (Command)', value: 'Ends with ( . ) or ( ! )' },
        { label: 'E (Exclamation)', value: 'Ends with ( ! ) + strong emotion word' },
        { label: 'M (Mixed)', value: 'Has two types joined together' }
      ]
    }],
    quiz: quizFoundations['mod-1']
  },
  {
    id: 'mod-2',
    moduleId: 2,
    category: 'Foundations',
    title: 'Understanding Reporting Structure',
    shortTitle: 'Reporting Structure',
    exitSkill: 'Understand the elements that change during conversion and why they change.',
    icon: '🏗️',
    description: 'Before any conversion happens, you need to understand the two parts of any reported sentence and why certain things change due to the gap between the time of speaking and reporting.',
    why: 'Shifts happen because Ram said "I" yesterday, but today you are reporting it as "He".',
    directExample: 'Ram said, "I am going."',
    indirectExample: 'Ram said that he was going.',
    waffleTip: 'Memory Aid: The "TRPT" Mantra!',
    wittyRemark: 'Check these four things in order!',
    infographics: [
      {
        header: 'The Reporting Framework',
        rows: [
          { label: 'Reporting Clause', value: 'Tells us WHO said it and WHEN (He said...)' },
          { label: 'Reported Clause', value: 'The actual words or meaning of what was said.' },
          { label: 'Speaker', value: 'The person who originally spoke (e.g., Ram)' },
          { label: 'Listener', value: 'The person being spoken to (e.g., to me)' }
        ]
      },
      {
        header: 'The TRPT Pillars',
        rows: [
          { label: 'T (Tense)', value: 'Backshift: am → was' },
          { label: 'R (Reporting Verb)', value: 'said to → told' },
          { label: 'P (Pronoun)', value: 'I → he/she' },
          { label: 'T (Time & Place)', value: 'today → that day' },
          { label: 'Connector', value: 'Quotation marks removed, "that" added' }
        ]
      }
    ],
    quiz: quizFoundations['mod-2']
  }
];
