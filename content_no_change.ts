import { LearnTopic } from './types';

export const noChangeContent: LearnTopic = {
  id: 'no-change',
  moduleId: 15,
  category: 'Statements',
  title: 'The Permanent Shipment',
  shortTitle: 'No-Change',
  exitSkill: 'Identify statements that do not backshift.',
  icon: '🌍',
  description: 'If the statement is a universal truth, scientific fact, or habitual action, the tense does not change.',
  why: 'Facts remain true regardless of when they are reported.',
  directExample: 'Teacher said, "The Earth revolves around the Sun."',
  indirectExample: 'Teacher said that the Earth revolves around the Sun.',
  // Fix: Renamed visualMetaphor to wittyRemark to match LearnTopic interface
  wittyRemark: 'A message that never expires or changes.',
  waffleTip: 'Scientific facts don\'t get a new tense stamp!',
  infographic: {
    header: 'Permanent Facts',
    rows: [
      { label: 'Scientific Facts', value: 'No Backshift' },
      { label: 'Universal Truths', value: 'No Backshift' },
      { label: 'Habitual Actions', value: 'No Backshift' },
      { label: 'Historical Facts', value: 'No Backshift' }
    ]
  },
  quiz: [
    {
      id: 'nc1',
      category: 'Universal Truth',
      directSpeech: 'The teacher said, "The Earth revolves around the Sun."',
      context: '(Scientific Fact)',
      options: [
        'The teacher said that the Earth revolved around the Sun.',
        'The teacher said that the Earth revolves around the Sun.',
        'The teacher told that Earth is revolving around the Sun.',
        'The teacher said revolves around the Sun.'
      ],
      correctAnswer: 'The teacher said that the Earth revolves around the Sun.',
      explanation: 'Universal truths do not undergo tense backshift.',
      errorType: 'no_change'
    }
  ]
};