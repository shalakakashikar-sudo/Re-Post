import { LearnTopic } from './types';
import { quizMastery } from './quiz_mastery';

export const masteryTopics: LearnTopic[] = [
  {
    id: 'mod-27',
    moduleId: 27,
    category: 'Mastery',
    title: 'Indirect to Direct (Statements)',
    shortTitle: 'Reversal: Statements',
    exitSkill: 'Perform a full reverse transformation of statements.',
    icon: '⏪',
    description: 'Reverse the backshift! Move tenses forward (was → is) and restore quotation marks.',
    why: 'True mastery means being able to travel in both directions through the grammar timeline.',
    directExample: 'He told me that he was ill.',
    indirectExample: 'He said to me, "I am ill."',
    waffleTip: 'Reverse the TRPT Mantra! Far becomes Near.',
    wittyRemark: 'Taking the message back to the original speaker!',
    infographic: {
      header: 'The Reversal Checklist',
      rows: [
        { label: 'that', value: '→ comma and opening quotes' },
        { label: 'told', value: '→ said to' },
        { label: 'was / were', value: '→ is / am / are' },
        { label: 'he / she', value: '→ I (check context)' },
        { label: 'then', value: '→ now' }
      ]
    },
    quiz: quizMastery['mod-27']
  },
  {
    id: 'mod-28',
    moduleId: 28,
    category: 'Mastery',
    title: 'Indirect to Direct (Questions/Commands)',
    shortTitle: 'Reversal: Mixed',
    exitSkill: 'Reverse questions and imperatives back to their original form.',
    icon: '↩️',
    description: 'Restore the question word order (HV + Sub) and put back "Please" for requests.',
    why: 'Questions and commands have unique markers (like "?" and "Please") that must be carefully restored.',
    directExample: 'He asked me where I lived.',
    indirectExample: 'He said to me, "Where do you live?"',
    waffleTip: 'Restored word order: HV must come before Subject!',
    wittyRemark: 'Bring back the Question Mark!',
    infographic: {
      header: 'Complex Reversal',
      rows: [
        { label: 'if / whether', value: '→ Helping Verb + "?"' },
        { label: 'requested to', value: '→ "Please" + V1' },
        { label: 'ordered to', value: '→ V1 (Direct command)' },
        { label: 'Wh + Sub + V', value: '→ Wh + V + Sub + "?"' }
      ]
    },
    quiz: quizMastery['mod-28']
  },
  {
    id: 'mod-29',
    moduleId: 29,
    category: 'Mastery',
    title: 'Common Error Diagnosis',
    shortTitle: 'Diagnosis',
    exitSkill: 'Identify and fix common "Forbidden Grammar" errors.',
    icon: '🛡️',
    description: 'Identify typical mistakes like leaving "said to" in indirect speech or forgetting the word order flip in questions.',
    why: 'Spotting errors helps you avoid them in exams and formal writing.',
    directExample: 'He said to me that he was busy. (ERROR)',
    indirectExample: 'He told me that he was busy. (CORRECT)',
    waffleTip: 'Check your work with the TRPT checklist!',
    wittyRemark: 'Be a Grammar Inspector! Find the leak!',
    infographic: {
      header: 'Forbidden Grammar Log',
      rows: [
        { label: 'Mistake 1', value: 'Using "that" before a Wh-word' },
        { label: 'Mistake 2', value: 'Keeping "said to" instead of "told"' },
        { label: 'Mistake 3', value: 'Forgetting the Word Order Flip' },
        { label: 'Mistake 4', value: 'Leaving "now" or "here" in the report' }
      ]
    },
    quiz: quizMastery['mod-29']
  },
  {
    id: 'mod-30',
    moduleId: 30,
    category: 'Mastery',
    title: 'Full Mixed Conversion Practice',
    shortTitle: 'Final Mastery',
    exitSkill: 'Convert any sentence of any complexity with 100% accuracy.',
    icon: '🏆',
    description: 'Final exam-level mixed questions covering all 30 modules. This is the ultimate delivery test.',
    why: 'Prove you are a Master Postman of Direct and Indirect speech.',
    directExample: 'He said, "If I had the money, I would buy a house."',
    indirectExample: 'He said that if he had the money, he would buy a house.',
    waffleTip: 'Use everything you learned. SQCEM + TRPT + PRO!',
    wittyRemark: 'Graduation Day! Squeak!',
    infographic: {
      header: 'Master Postman Guide',
      rows: [
        { label: 'Final Step', value: 'Check punctuation' },
        { label: 'Final Step', value: 'Verify Pronoun identity' },
        { label: 'Final Step', value: 'Verify Tense Backshift' },
        { label: 'Final Step', value: 'Read aloud: Does it sound like a report?' }
      ]
    },
    quiz: quizMastery['mod-30']
  }
];
