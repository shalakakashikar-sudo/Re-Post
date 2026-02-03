import { LearnTopic } from './types';

export const pronounContent: LearnTopic = {
  id: 'pronouns',
  moduleId: 11,
  category: 'Foundations',
  title: 'The Pronoun Address Route',
  shortTitle: 'Pronoun Shifts',
  exitSkill: 'Shift pronouns correctly based on context.',
  icon: '👤',
  description: 'Pronouns change based on who is speaking and who is being spoken to.',
  why: 'If Ram says "I", you report it as "He" to accurately represent him to others.',
  directExample: 'Ram said, "I am happy."',
  indirectExample: 'Ram said that he was happy.',
  // Fix: Renamed visualMetaphor to wittyRemark to match LearnTopic interface
  wittyRemark: 'Checking the Address Label for the right recipient.',
  waffleTip: 'Always check who the "I" or "You" refers to in the delivery!',
  infographic: {
    header: 'Address Label Changes',
    rows: [
      { label: 'I / Me', value: 'He / She / Him / Her' },
      { label: 'We / Us', value: 'They / Them' },
      { label: 'My / Our', value: 'His / Her / Their' },
      { label: 'You (Subject)', value: 'I / He / She / They' }
    ]
  },
  quiz: [
    {
      id: 'p1',
      category: 'Pronoun Shift',
      directSpeech: 'Rahul said to me, "Where are you going?"',
      context: '(Rahul is asking the reporter)',
      options: [
        'Rahul asked me where I am going.',
        'Rahul asked me where I was going.',
        'Rahul asked where are you going.',
        'Rahul said to me where I was going.'
      ],
      correctAnswer: 'Rahul asked me where I was going.',
      explanation: '"You" changes to "I" because Rahul was speaking to "me".',
      errorType: 'pronoun'
    }
  ]
};