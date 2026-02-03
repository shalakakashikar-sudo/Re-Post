import { LearnTopic } from './types';

export const commandsContent: LearnTopic = {
  id: 'commands',
  moduleId: 14,
  category: 'Imperatives',
  title: 'The Express Order Route',
  shortTitle: 'Commands',
  exitSkill: 'Convert orders and requests using to-infinitives.',
  icon: '❗',
  description: 'Commands and requests use reporting verbs like told or requested followed by "to + verb".',
  why: 'The reporting verb captures the intent (order vs request) of the speaker.',
  directExample: 'Father said to me, "Close the door."',
  indirectExample: 'Father told me to close the door.',
  // Fix: Renamed visualMetaphor to wittyRemark to match LearnTopic interface
  wittyRemark: 'Express vs Standard Delivery handling.',
  waffleTip: 'If you see "please", use "requested"!',
  infographic: {
    header: 'Handling Instructions',
    rows: [
      { label: 'Order', value: 'Ordered / Told' },
      { label: 'Request', value: 'Requested / Asked' },
      { label: 'Structure', value: 'to + base verb' },
      { label: 'Negative', value: 'not to + base verb' }
    ]
  },
  quiz: [
    {
      id: 'c1',
      category: 'Request',
      directSpeech: 'She said, "Please help me."',
      context: '(A polite request)',
      options: [
        'She told me to help her.',
        'She requested me to help her.',
        'She said that please help her.',
        'She requested me to help me.'
      ],
      correctAnswer: 'She requested me to help her.',
      explanation: '"Please" implies the reporting verb "requested".',
      errorType: 'reporting_verb'
    }
  ]
};