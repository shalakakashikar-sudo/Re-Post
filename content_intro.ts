import { LearnTopic } from './types';

export const introContent: LearnTopic = {
  id: 'core-vision',
  moduleId: 0,
  category: 'Foundations',
  title: 'Introduction to Reported Speech',
  shortTitle: 'Introduction',
  exitSkill: 'Identify the differences between Direct and Indirect speech.',
  icon: '📚',
  description: 'Direct speech repeats actual words; Indirect speech reports the meaning from a new time and place.',
  why: 'In formal writing and exams, we must report events accurately without using unnecessary quotation marks.',
  directExample: 'Ram said, "I will meet you today."',
  indirectExample: 'Ram said that he would meet me that day.',
  wittyRemark: 'Mastering the art of reporting.',
  waffleTip: 'Indirect speech NEVER uses quotation marks!',
  // Wrap infographic in an array and rename to infographics
  infographics: [{
    header: 'Core Transformation Elements',
    rows: [
      { label: 'Reporting Clause', value: 'The part that introduces the speaker (e.g., He said).' },
      { label: 'Reported Clause', value: 'The actual words converted into a statement.' },
      { label: 'Quotation Marks', value: 'Always removed in the indirect form.' },
      { label: 'Connector', value: 'A word like "that" or "if" used to join the two clauses.' }
    ]
  }],
  quiz: [
    {
      id: 'i1',
      category: 'Concept',
      directSpeech: 'He said, "I am busy now."',
      context: 'General conversion check',
      options: [
        'He said that he is busy now.',
        'He said that he was busy then.',
        'He told that I am busy now.',
        'He said that he was busy now.'
      ],
      correctAnswer: 'He said that he was busy then.',
      explanation: 'Three shifts: I -> he, am -> was, now -> then.',
      errorType: 'general'
    }
  ]
};