
import { LearnTopic, QuizQuestion, ErrorType, TopicCategory } from './types';

const generateFallbackQuestions = (modId: number, category: TopicCategory): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  const subjects = ['Ram', 'The supervisor', 'She', 'The postman', 'Waffle', 'The customer'];
  for (let i = 1; i <= 5; i++) {
    questions.push({
      id: `${modId}.${i}`,
      category,
      directSpeech: `The speaker said, "I am delivering parcel ${i} for Module ${modId}."`,
      context: `Route Training ${modId}`,
      options: [
        `The speaker said that he was delivering parcel ${i} for Module ${modId}.`,
        `The speaker told that he was delivering parcel ${i}.`,
        `The speaker said that I am delivering parcel ${i}.`,
        `The speaker said that he is delivering parcel ${i}.`
      ].sort(),
      correctAnswer: `The speaker said that he was delivering parcel ${i} for Module ${modId}.`,
      explanation: "Standard TRPT backshift: 'am' becomes 'was' and 'I' becomes 'he'.",
      errorType: 'tense'
    });
  }
  return questions;
};

// Hand-crafted content integration
const handCraftedModules: Partial<Record<number, Partial<LearnTopic>>> = {
  1: {
    category: 'Foundations',
    title: 'Identifying Sentence Types',
    icon: '🔍',
    description: 'The first step of the postman is sorting. Identify the "type" before you can stamp it correctly.',
    why: 'Different types determine which connector (that, if, to) and reporting verb to use.',
    infographic: {
      header: 'The SQCEM Trick Manual',
      rows: [
        { label: 'Statement (S)', value: 'Simple Fact/Info. Ends with [ . ]' },
        { label: 'Question (Q)', value: 'Inquiry. Ends with [ ? ]' },
        { label: 'Command (C)', value: 'Order/Request. Ends with [ . ] or [ ! ]' },
        { label: 'Exclamation (E)', value: 'Strong Emotion. Ends with [ ! ]' },
        { label: 'Mixed (M)', value: 'Joins two or more types in one quote.' }
      ]
    }
  },
  2: {
    category: 'Foundations',
    title: 'The TRPT Framework',
    icon: '🏗️',
    description: 'Every reported sentence consists of a Reporting Clause and a Reported Clause.',
    why: 'Shifts happen because of the time and space gap between speaking and reporting.',
    infographic: {
      header: 'The TRPT Mantra Framework',
      rows: [
        { label: 'Tense', value: 'Backshift: is → was, will → would' },
        { label: 'Reporting Verb', value: 'said to → told / asked / requested' },
        { label: 'Pronouns', value: 'I/You → He/She/Me (PRO Rule)' },
        { label: 'Time & Place', value: 'Near words → Far words (now → then)' }
      ]
    }
  },
  10: {
    category: 'Questions',
    title: 'The Tense Stamp Route',
    icon: '⏰',
    description: 'When we report the past, the verbs move one step back in time.',
    why: 'The original "now" is now the "past" when the message is finally delivered.',
    infographic: {
      header: 'Stamp Transformation Table',
      rows: [
        { label: 'is / am / are', value: 'was / were' },
        { label: 'writes / write', value: 'wrote' },
        { label: 'wrote / has written', value: 'had written' },
        { label: 'will / can', value: 'would / could' }
      ]
    }
  }
};

const moduleConfigs: LearnTopic[] = [];

for (let i = 1; i <= 30; i++) {
  const cat: TopicCategory = i <= 2 ? 'Foundations' : i <= 9 ? 'Statements' : i <= 14 ? 'Questions' : i <= 19 ? 'Imperatives' : i <= 22 ? 'Exclamations' : i <= 26 ? 'Advanced' : 'Mastery';
  const custom = handCraftedModules[i] || {};
  
  moduleConfigs.push({
    id: `mod-${i}`,
    moduleId: i,
    category: cat,
    title: custom.title || `Advanced Route ${i}`,
    shortTitle: custom.title?.split(' ')[0] || `Mod ${i}`,
    exitSkill: `Master Level ${i} Sorting`,
    icon: custom.icon || '📦',
    description: custom.description || `Training for complex postal delivery at level ${i}.`,
    why: custom.why || "To ensure accuracy after the journey through time and space.",
    directExample: custom.directExample || 'He said, "I am here."',
    indirectExample: custom.indirectExample || 'He said that he was there.',
    waffleTip: "Check your TRPT checklist before stamping!",
    wittyRemark: custom.wittyRemark || "A delivery delayed is a delivery mis-tensed!",
    infographic: custom.infographic || {
      header: 'Postal Transformation Rules',
      rows: [
        { label: 'Tense', value: 'Backshift one step into the past.' },
        { label: 'Pronoun', value: 'Shift to match the new perspective.' },
        { label: 'Time', value: 'Near words become far words.' }
      ]
    },
    quiz: generateFallbackQuestions(i, cat)
  });
}

export const ALL_LEARN_TOPICS = moduleConfigs;
export const MASTER_QUIZ_QUESTIONS = ALL_LEARN_TOPICS.flatMap(t => t.quiz || []);
