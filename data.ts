
import { LearnTopic, QuizQuestion, TopicCategory, ErrorType } from './types';

// Utility to generate a quiz for a module if specific questions aren't provided
const generatePlaceholderQuiz = (moduleId: number, category: string): QuizQuestion[] => {
  return [
    {
      id: `q-${moduleId}-1`,
      category: category,
      directSpeech: 'He said, "I am working."',
      context: 'Standard backshift check',
      options: ['He said that he was working.', 'He said that he is working.', 'He told that he was working.', 'He says that he was working.'],
      correctAnswer: 'He said that he was working.',
      explanation: 'In past reporting, "am" becomes "was" and "I" becomes "he".',
      errorType: 'tense'
    },
    {
      id: `q-${moduleId}-2`,
      category: category,
      directSpeech: 'She said to me, "I will call you tomorrow."',
      context: 'Multi-shift check',
      options: ['She told me that she would call me the next day.', 'She said me that she will call me tomorrow.', 'She told me she would call you tomorrow.', 'She asked me if I will call her.'],
      correctAnswer: 'She told me that she would call me the next day.',
      explanation: '"said to" -> "told"; "will" -> "would"; "tomorrow" -> "the next day".',
      errorType: 'general'
    }
  ];
};

const moduleDefinitions: Record<number, Partial<LearnTopic>> = {
  1: {
    title: 'Sentence Classification (SQCEM)',
    icon: '🔍',
    description: 'Master the SQCEM technique to identify the five types of sentences before conversion.',
    why: 'The sentence type determines the specific reporting verb and connector used in Indirect Speech.',
    infographics: [{
      header: 'Classification & Connectors',
      rows: [
        { label: 'Statement (Assertive)', value: 'Ends with [.]. Use "that".' },
        { label: 'Question (Interrogative)', value: 'Ends with [?]. Use "if/whether" or the Wh-word.' },
        { label: 'Command (Imperative)', value: 'Ends with [.] or [!]. Use "to + V1".' },
        { label: 'Exclamation (Exclamatory)', value: 'Ends with [!]. Use "exclaimed with joy/sorrow".' },
        { label: 'Mixed', value: 'Compound sentences. Requires separate connectors for each part.' }
      ]
    }]
  },
  2: {
    title: 'The TRPT Global Rules',
    icon: '🏗️',
    description: 'The five fundamental pillars of speech transformation.',
    why: 'These components must be checked for every sentence to ensure grammatical accuracy.',
    infographics: [
      {
        header: 'The Tense Backshift Logic',
        rows: [
          { label: 'Present → Past', value: 'Simple Present (write) becomes Simple Past (wrote)' },
          { label: 'Past → Past Perfect', value: 'Simple Past (wrote) becomes Past Perfect (had written)' },
          { label: 'Continuous Shift', value: 'is writing → was writing; was writing → had been writing' }
        ]
      },
      {
        header: 'The 5-Pillar Framework',
        rows: [
          { label: 'Tense', value: 'Backshift verbs one step (Present to Past, Past to Past Perfect).' },
          { label: 'Reporting Verb', value: 'Change based on tone (said to → told, asked, ordered).' },
          { label: 'Pronouns', value: 'Align I/You based on Speaker/Listener perspective (PRO Rule).' },
          { label: 'Time & Place', value: 'Convert near references to far (now → then, here → there).' },
          { label: 'Connector', value: 'The bridge joining two parts (that, if, whether, to).' }
        ]
      }
    ]
  },
  3: { title: 'Main Verb Backshift Table', icon: '⏰' },
  4: { title: 'Helping Verb Shift Table', icon: '⏪' },
  5: { title: 'Modal Verb Transformations', icon: '🔧' },
  6: { title: 'The PRO Rule: 1st Person', icon: '👤' },
  7: { title: 'The PRO Rule: 2nd & 3rd Person', icon: '👥' },
  8: {
    title: 'Present & Future Reporting Verbs',
    icon: '🕒',
    category: 'Foundations',
    description: 'When the reporting verb is in the present (says) or future (will say), the tense of the reported clause DOES NOT change.',
    why: 'The message is reported as still being current, so the time-line does not move back.',
    infographics: [
      {
        header: 'Reporting Verb Exception Rule',
        rows: [
          { label: 'Verb: says / tells', value: 'NO TENSE CHANGE (e.g., "am" remains "is/am/are")' },
          { label: 'Verb: will say', value: 'NO TENSE CHANGE (e.g., "will" remains "will")' },
          { label: 'Pronoun Shift', value: 'Pronouns STILL shift to match identity (I → He).' },
          { label: 'Comparison', value: 'He said (Past) vs He says (Present)' }
        ]
      }
    ],
    quiz: [
      {
        id: 'q8-1',
        category: 'Foundations',
        directSpeech: 'He says, "I am busy."',
        context: 'Present Reporting Verb',
        options: ['He says that he is busy.', 'He says that he was busy.', 'He said that he was busy.', 'He told that he is busy.'],
        correctAnswer: 'He says that he is busy.',
        explanation: 'Because "says" is in the present tense, the reported "am" does not backshift to "was".',
        errorType: 'no_change'
      }
    ]
  },
  9: { title: 'Universal Truths & Habits', icon: '🌍' },
  10: { title: 'Interrogative: Yes/No Basics', icon: '❓' },
  11: { title: 'Interrogative: Yes/No with Modals', icon: '💬' },
  12: { title: 'Interrogative: Wh-Subject Questions', icon: '🧐' },
  13: { title: 'Interrogative: Wh-Object Questions', icon: '🔀' },
  14: { title: 'Imperative: Positive Commands', icon: '💂' },
  15: { title: 'Imperative: Requests (Please/Kindly)', icon: '🙏' },
  16: { title: 'Imperative: Negative Commands', icon: '🚫' },
  17: { title: 'Imperative: Advice & Warnings', icon: '💡' },
  18: { title: 'Imperative: Suggestions (Let\'s)', icon: '🤝' },
  19: { title: 'Exclamatory: Joy & Sorrow', icon: '🎉' },
  20: { title: 'Exclamatory: Surprise & Wonder', icon: '😲' },
  21: { title: 'Exclamatory: Intensity (What/How)', icon: '🔊' },
  22: { title: 'Greetings & Social Wishes', icon: '✉️' },
  23: { title: 'Advanced: Conditional Type 1', icon: '🖇️' },
  24: { title: 'Advanced: Conditional Type 2 & 3', icon: '🔗' },
  25: { title: 'Advanced: Mixed Sentence Types', icon: '🌀' },
  26: { title: 'Advanced: Nested Quotes', icon: '📦' },
  27: { title: 'Advanced: Split Reporting Clauses', icon: '✂️' },
  28: { title: 'Mastery: Indirect to Direct (S)', icon: '⏪' },
  29: { title: 'Mastery: Indirect to Direct (Q/C)', icon: '↩️' },
  30: { title: 'Mastery: Expert Error Diagnosis', icon: '🛡️' }
};

const fullCurriculum: LearnTopic[] = [];

for (let i = 1; i <= 30; i++) {
  const def = moduleDefinitions[i] || {};
  const cat: TopicCategory = 
    i <= 9 ? 'Foundations' : 
    i <= 13 ? 'Questions' : 
    i <= 18 ? 'Imperatives' : 
    i <= 22 ? 'Exclamations' : 
    i <= 27 ? 'Advanced' : 'Mastery';

  fullCurriculum.push({
    id: `mod-${i}`,
    moduleId: i,
    category: cat,
    title: def.title || `Level ${i}: Specialized Topic`,
    shortTitle: `Lvl ${i}`,
    exitSkill: `Expertise in Level ${i} grammar logic.`,
    icon: def.icon || '📘',
    description: def.description || `Comprehensive study of ${cat} transformations.`,
    why: def.why || "To maintain precision and clarity when reporting information.",
    directExample: 'He said, "I am here."',
    indirectExample: 'He said that he was there.',
    waffleTip: 'Check the TRPT pillars!',
    wittyRemark: 'Squeak! Grammar is the fuel for my delivery van!',
    infographics: def.infographics || [{
      header: 'Transformation Table',
      rows: [
        { label: 'Tense', value: 'Shift back one step.' },
        { label: 'Pronoun', value: 'Align with speaker.' },
        { label: 'Time', value: 'Near becomes Far.' }
      ]
    }],
    quiz: def.quiz || generatePlaceholderQuiz(i, cat)
  });
}

export const ALL_LEARN_TOPICS = fullCurriculum;
export const MASTER_QUIZ_QUESTIONS = ALL_LEARN_TOPICS.flatMap(t => t.quiz);
