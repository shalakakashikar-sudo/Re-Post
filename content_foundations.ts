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
    infographic: {
      header: 'The SQCEM Trick Manual',
      rows: [
        { label: 'Statement (S)', value: 'Simple Fact/Info. Ends with Period (.)' },
        { label: 'Question (Q)', value: 'Inquiry. Ends with Question Mark (?)' },
        { label: 'Command (C)', value: 'Order/Request. Ends with (.) or (!)' },
        { label: 'Exclamation (E)', value: 'Strong Emotion (Hurrah/Alas). Ends with (!)' },
        { label: 'Mixed (M)', value: 'Joining two or more types in one quote.' }
      ]
    },
    quiz: quizFoundations['mod-1']
  },
  {
    id: 'mod-2',
    moduleId: 2,
    category: 'Foundations',
    title: 'Understanding Reporting Structure',
    shortTitle: 'Structure',
    exitSkill: 'Identify Speaker, Listener, Reporting Clause, and Reported Clause.',
    icon: '🏗️',
    description: 'Every reported sentence consists of a Reporting Clause (who said it) and a Reported Clause (actual words).',
    why: 'Shifts in tense and pronouns happen because of the time and space gap between speaking and reporting.',
    directExample: 'Ram said to me, "I am busy."',
    indirectExample: 'Ram told me that he was busy.',
    waffleTip: 'Remember the TRPT Mantra: Tense → Reporting Verb → Pronoun → Time/Place.',
    wittyRemark: 'Check the skeleton before you build the body!',
    infographic: {
      header: 'The TRPT Mantra Framework',
      rows: [
        { label: 'Tense', value: 'Backshift: is → was, will → would' },
        { label: 'Reporting Verb', value: 'said to → told / asked / requested' },
        { label: 'Pronouns', value: 'I/You → He/She/Me (PRO Rule)' },
        { label: 'Time & Place', value: 'Near words → Far words (now → then)' }
      ]
    },
    quiz: quizFoundations['mod-2']
  }
];