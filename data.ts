
import { LearnTopic, QuizQuestion, TopicCategory } from './types';
import { quizFoundations } from './quiz_foundations';
import { quizStatements } from './quiz_statements';
import { quizQuestions } from './quiz_questions';
import { quizImperatives } from './quiz_imperatives';
import { quizExclamations } from './quiz_exclamations';
import { quizAdvanced } from './quiz_advanced';
import { quizMastery } from './quiz_mastery';

// Data mapping for all 30 modules
const moduleDefinitions: Partial<Record<number, Partial<LearnTopic>>> = {
  // Foundations (1-2)
  1: {
    title: 'Identifying Sentence Types',
    icon: '🔍',
    description: 'Master the SQCEM Trick to identify Statement, Question, Command, Exclamation, or Mixed types.',
    why: 'The type determines the reporting verb and connector you use.',
    directExample: 'He said, "Where is the post office?"',
    indirectExample: 'He asked where the post office was.',
    waffleTip: 'Check the punctuation at the end of the quote first!',
    infographic: {
      header: 'The SQCEM Trick Manual',
      rows: [
        { label: 'Statement (S)', value: 'Simple Fact. Ends with [ . ]' },
        { label: 'Question (Q)', value: 'Inquiry. Ends with [ ? ]' },
        { label: 'Command (C)', value: 'Order/Request. Ends with [ . ] or [ ! ]' },
        { label: 'Exclamation (E)', value: 'Strong Emotion. Ends with [ ! ]' }
      ]
    }
  },
  2: {
    title: 'The TRPT Framework',
    icon: '🏗️',
    description: 'Understand the skeleton: Tense, Reporting Verb, Pronouns, and Time/Place shifts.',
    why: 'Shifts happen because of the time and space gap between speaking and reporting.',
    directExample: 'Ram said to me, "I am busy."',
    indirectExample: 'Ram told me that he was busy.',
    waffleTip: 'Tense, Verb, Pronoun, Time. Memorize the mantra!',
    infographic: {
      header: 'The TRPT Mantra Framework',
      rows: [
        { label: 'Tense', value: 'Backshift: am → was' },
        { label: 'Verb', value: 'said to → told' },
        { label: 'Pronouns', value: 'I → he/she' },
        { label: 'Time/Place', value: 'here → there' }
      ]
    }
  },
  // Statements (3-9)
  3: { title: 'Simple Statements (No Object)', icon: '✉️', description: 'Convert basic statements where no listener is mentioned. "Said" stays "said".' },
  4: { title: 'Statements with Object', icon: '👥', description: 'When a listener is present, "said to" must change to "told".' },
  5: { title: 'Time Expressions', icon: '⏰', description: 'Near words become far words: "today" becomes "that day".' },
  6: { title: 'Place Expressions', icon: '📍', description: 'Spatial shifts: "here" becomes "there" and "this" becomes "that".' },
  7: { title: 'Modal Verbs', icon: '🛠️', description: 'Backshift modals: can → could, will → would, may → might.' },
  8: { title: 'Present Reporting Verb', icon: '🗣️', description: 'If the verb is "says" or "will say", the tense does NOT change.' },
  9: { title: 'Universal Truths & Habits', icon: '🌍', description: 'Scientific facts and eternal truths stay in the present tense.' },
  // Questions (10-14)
  10: { title: 'Yes/No Questions (Simple)', icon: '❓', description: 'Use "if" or "whether" and flip the word order to statement style.' },
  11: { title: 'Yes/No with Modals', icon: '🔧', description: 'Convert modal questions with both a flip and a backshift.' },
  12: { title: 'Wh-Questions (Subject)', icon: '👤', description: 'When the Wh-word is the subject, NO word order flip is needed.' },
  13: { title: 'Wh-Questions (Swap)', icon: '🔀', description: 'Standard Wh-questions require swapping the Subject and Helping Verb.' },
  14: { title: 'Polite Inquiries', icon: '🤵', description: 'Handle soft, indirect-style direct questions with specialized verbs.' },
  // Imperatives (15-19)
  15: { title: 'Positive Commands', icon: '💂', description: 'Convert direct orders using "ordered" and "to + verb".' },
  16: { title: 'Requests (Please)', icon: '🙏', description: 'Use "requested" and remove redundant words like "please".' },
  17: { title: 'Negative Commands', icon: '🚫', description: 'Convert "Don\'t" to "not to" or use the verb "forbade".' },
  18: { title: 'Advice & Warnings', icon: '💡', description: 'Choose verbs like "advised" or "warned" based on the speaker\'s tone.' },
  19: { title: 'Suggestions (Let\'s)', icon: '🤝', description: 'Convert proposals using "suggested that they should".' },
  // Exclamations (20-22)
  20: { title: 'Joy & Sorrow', icon: '🎉', description: 'Map interjections to descriptive feelings: "exclaimed with joy".' },
  21: { title: 'Surprise & Wonder', icon: '😲', description: 'Convert "What a" and "How" into intensifying adverbs like "very".' },
  22: { title: 'Greetings & Wishes', icon: '👋', description: 'Use "wished" or "bade" for social conventions and etiquette.' },
  // Advanced (23-26)
  23: { title: 'Conditional Sentences', icon: '🖇️', description: 'Preserve the hypothetical mood in Type 2 and Type 3 conditionals.' },
  24: { title: 'Mixed Sentences', icon: '🌀', description: 'Handle multiple sentence types within a single quotation block.' },
  25: { title: 'Nested Quotes', icon: '📦', description: 'Flatten layers of speech (a quote inside a quote) into a single report.' },
  26: { title: 'Parenthetical Clauses', icon: '✂️', description: 'Move split reporting clauses to the beginning of the sentence.' },
  // Mastery (27-30)
  27: { title: 'Reverse: Statements', icon: '⏪', description: 'Travel backwards: restore quotes and move tenses forward.' },
  28: { title: 'Reverse: Mixed', icon: '↩️', description: 'Restore question marks and polite markers from a reported text.' },
  29: { title: 'Diagnosis', icon: '🛡️', description: 'Identify and fix common "Forbidden Grammar" errors in the machine.' },
  30: { title: 'Final Certification', icon: '🏆', description: 'The ultimate delivery test covering all 30 modules of route training.' }
};

const getQuizForMod = (id: number): QuizQuestion[] => {
  const modId = `mod-${id}`;
  if (id <= 2) return quizFoundations[modId] || [];
  if (id <= 9) return quizStatements[modId] || [];
  if (id <= 14) return quizQuestions[modId] || [];
  if (id <= 19) return quizImperatives[modId] || [];
  if (id <= 22) return quizExclamations[modId] || [];
  if (id <= 26) return quizAdvanced[modId] || [];
  return quizMastery[modId] || [];
};

const moduleConfigs: LearnTopic[] = [];

for (let i = 1; i <= 30; i++) {
  const cat: TopicCategory = 
    i <= 2 ? 'Foundations' : 
    i <= 9 ? 'Statements' : 
    i <= 14 ? 'Questions' : 
    i <= 19 ? 'Imperatives' : 
    i <= 22 ? 'Exclamations' : 
    i <= 26 ? 'Advanced' : 'Mastery';
    
  const def = moduleDefinitions[i] || {};
  
  moduleConfigs.push({
    id: `mod-${i}`,
    moduleId: i,
    category: cat,
    title: def.title || `Module ${i} Route`,
    shortTitle: def.title?.split(' ')[0] || `Mod ${i}`,
    exitSkill: `Master Level ${i} Sorting`,
    icon: def.icon || '📦',
    description: def.description || `Specialized route training for ${cat} parcels.`,
    why: def.why || "To ensure the message remains accurate across the postal network.",
    directExample: def.directExample || 'He said, "I am here."',
    indirectExample: def.indirectExample || 'He said that he was there.',
    waffleTip: def.waffleTip || "Double-check your TRPT stamp before delivery!",
    wittyRemark: "A hamster's work is never done!",
    infographic: def.infographic || {
      header: 'Postal Rule #'+i,
      rows: [
        { label: 'Tense', value: 'Shift back one step.' },
        { label: 'Pronoun', value: 'Update to match speaker.' },
        { label: 'Time', value: 'Near words become far words.' }
      ]
    },
    quiz: getQuizForMod(i)
  });
}

export const ALL_LEARN_TOPICS = moduleConfigs;
export const MASTER_QUIZ_QUESTIONS = ALL_LEARN_TOPICS.flatMap(t => t.quiz || []);
