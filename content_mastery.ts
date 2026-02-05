import { LearnTopic } from './types';
import { quizMastery } from './quiz_mastery';

export const masteryTopics: LearnTopic[] = [
  {
    id: 'mod-27',
    moduleId: 27,
    category: 'Mastery',
    title: 'Indirect to Direct (Statements)',
    shortTitle: 'Reversal: Statements',
    exitSkill: 'Perform a full reverse transformation of reported statements back to direct speech.',
    icon: '⏪',
    description: 'Mastery means traveling backwards! Reverse the backshift, restore quotes, and change "told" back to "said to".',
    why: 'Reversing the process solidifies your understanding of the relationship between direct and indirect clauses.',
    directExample: 'He said to me, "I am ill."',
    indirectExample: 'He told me that he was ill.',
    waffleTip: 'Tense reversal: Move tenses FORWARD! was → am, had done → did/have done.',
    wittyRemark: 'Taking the message back to the original speaker! 180-degree turn!',
    infographics: [{
      header: 'The Reversal Checklist',
      rows: [
        { label: 'told', value: '→ said to (restore the object connector)' },
        { label: 'that', value: '→ replace with comma and opening quotes' },
        { label: 'Tense', value: 'Forward shift (Simple Past → Simple Present)' },
        { label: 'Time/Place', value: 'Far → Near (the next day → tomorrow)' }
      ]
    }],
    quiz: quizMastery['mod-27']
  },
  {
    id: 'mod-28',
    moduleId: 28,
    category: 'Mastery',
    title: 'Indirect to Direct (Questions/Commands)',
    shortTitle: 'Reversal: Mixed',
    exitSkill: 'Restore original question word order and imperative tone (like adding "Please").',
    icon: '↩️',
    description: 'Reverse questions and commands. Restore the question mark (?) and the "HV + Subject" order for inquiries.',
    why: 'Questions and commands have structural markers that vanish in indirect speech; mastery requires their perfect restoration.',
    directExample: 'He said to me, "Where do you live?"',
    indirectExample: 'He asked me where I lived.',
    waffleTip: 'Requested → add "Please". Asked if → add "?" and move HV to front!',
    wittyRemark: 'Bringing back the curiosities and the politeness!',
    infographics: [{
      header: 'Structural Restoration',
      rows: [
        { label: 'if / whether', value: '→ Remove and add Question Mark' },
        { label: 'requested to', value: '→ said to + "Please,"' },
        { label: 'Word Order', value: 'Sub + HV → HV + Sub (for questions)' },
        { label: 'Pronouns', value: 'Shift back to 1st/2nd person perspective' }
      ]
    }],
    quiz: quizMastery['mod-28']
  },
  {
    id: 'mod-29',
    moduleId: 29,
    category: 'Mastery',
    title: 'Common Error Diagnosis',
    shortTitle: 'Diagnosis',
    exitSkill: 'Identify and fix the top 10 most frequent conversion mistakes.',
    icon: '🛡️',
    description: 'Be the inspector! Spot mistakes like keeping "said to" in reports or forgetting the question order flip.',
    why: 'Knowing what NOT to do is just as important as knowing what to do in competitive exams.',
    directExample: 'He said to me that he was busy. (ERROR)',
    indirectExample: 'He told me that he was busy. (FIXED)',
    waffleTip: 'Check for "that" before Wh-words—it is a forbidden bridge! Squeak!',
    wittyRemark: 'Whiskers up! Spot the grammar leak before it ships!',
    infographics: [{
      header: 'The Forbidden Log',
      rows: [
        { label: 'Error 1', value: 'Leaving "said to" instead of "told"' },
        { label: 'Error 2', value: 'Double tense shift (had had been)' },
        { label: 'Error 3', value: 'Using "that" with Wh-questions' },
        { label: 'Error 4', value: 'Forgot to flip question order' }
      ]
    }],
    quiz: quizMastery['mod-29']
  },
  {
    id: 'mod-30',
    moduleId: 30,
    category: 'Mastery',
    title: 'Full Mixed Conversion Practice',
    shortTitle: 'Final Mastery',
    exitSkill: 'Convert high-complexity sentences accurately across all TRPT pillars.',
    icon: '🏆',
    description: 'The final dispatch. High-level sentences combining conditionals, exclamations, and mixed types.',
    why: 'Demonstrate total mastery of the 30-module curriculum.',
    directExample: 'She said, "What a wonderful experience this has been!"',
    indirectExample: 'She exclaimed that it had been a very wonderful experience.',
    waffleTip: 'Check Pronoun identity vs Reporting Subject/Object one last time!',
    wittyRemark: 'The Golden Stamp is yours! Full speed ahead!',
    infographics: [{
      header: 'Master Postman Ritual',
      rows: [
        { label: 'Step 1', value: 'Identify SQCEM type' },
        { label: 'Step 2', value: 'Apply TRPT Pillar shifts' },
        { label: 'Step 3', value: 'Verify connector (that/if/to)' },
        { label: 'Step 4', value: 'Final check of Time/Place markers' }
      ]
    }],
    quiz: quizMastery['mod-30']
  }
];