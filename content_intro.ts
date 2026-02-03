import { LearnTopic } from './types';

export const introContent: LearnTopic = {
  id: 'core-vision',
  moduleId: 0,
  category: 'Foundations',
  title: 'The Core Vision: Messages Travel',
  shortTitle: 'Core Vision',
  exitSkill: 'Understand the "TRPT" framework for message transformation.',
  icon: '🚀',
  description: 'Direct speech is a live broadcast; Indirect speech is a recorded report. When a message travels through time and space, it must adapt.',
  why: 'In exams and life, we report events after they happen. To stay accurate, we must shift the tense, pronouns, and time words to reflect the new "Now".',
  directExample: 'Ram said to me, "I will meet you here today."',
  indirectExample: 'Ram told me that he would meet me there that day.',
  // Fix: Renamed visualMetaphor to wittyRemark to match LearnTopic interface
  wittyRemark: 'Reporting is like a "Time Machine"—as you move away from the moment of speaking, everything shifts into the past.',
  waffleTip: 'Always check the TRPT Mantra: Tense → Reporting Verb → Pronoun → Time/Place!',
  infographic: {
    header: 'The TRPT Transformation Map',
    rows: [
      { label: 'Tense', value: 'The Backshift: One step into the past (is → was)' },
      { label: 'Reporting Verb', value: 'The Tone Shift: said to → told / asked / ordered' },
      { label: 'Pronouns', value: 'The Identity Shift: I/You → He/She/Me (PRO Rule)' },
      { label: 'Time/Place', value: 'The Distance Shift: Near (here/now) → Far (there/then)' }
    ]
  },
  quiz: [
    {
      id: 'i1',
      category: 'Concept',
      directSpeech: 'Arjun said, "I am busy now."',
      context: '(Reported two days later in a different city)',
      options: [
        'Arjun said that he is busy now.',
        'Arjun said that he was busy then.',
        'Arjun told that I am busy then.',
        'Arjun said that he was busy now.'
      ],
      correctAnswer: 'Arjun said that he was busy then.',
      explanation: 'Three shifts occurred: "I" became "he" (Pronoun), "am" became "was" (Tense), and "now" became "then" (Time).',
      // Fix: Changed 'mixed' to 'general' as 'mixed' is not a valid ErrorType in types.ts
      errorType: 'general'
    }
  ]
};