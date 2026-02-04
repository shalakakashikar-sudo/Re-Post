
import { LearnTopic, QuizQuestion, TopicCategory } from './types';
import { quizFoundations } from './quiz_foundations';
import { quizStatements } from './quiz_statements';
import { quizQuestions } from './quiz_questions';
import { quizImperatives } from './quiz_imperatives';
import { quizExclamations } from './quiz_exclamations';
import { quizAdvanced } from './quiz_advanced';
import { quizMastery } from './quiz_mastery';

const moduleDefinitions: Partial<Record<number, Partial<LearnTopic>>> = {
  1: {
    title: 'Sentence Classification (SQCEM)',
    infographics: [{
      header: 'Classification of Sentences & Connectors',
      rows: [
        { label: 'S - Statement (Assertive)', value: 'Declares facts/info. Ends with [.]. Use "that".' },
        { label: 'Q - Question (Interrogative)', value: 'Inquiry. Ends with [?]. Use "if/whether" or the "Wh-word".' },
        { label: 'C - Command (Imperative)', value: 'Order/Request. Ends with [.]/[!]. Use "to-infinitive".' },
        { label: 'E - Exclamation (Exclamatory)', value: 'Strong emotion. Ends with [!]. Use "exclaimed with...".' },
        { label: 'M - Mixed', value: 'Compound sentences. Requires separate connectors for each part.' }
      ]
    }]
  },
  2: {
    title: 'Core Rules (TRPT Framework)',
    infographics: [
      {
        header: 'Primary Tense Shifts (Direct → Indirect)',
        rows: [
          { label: 'Present Simple → Past Simple', value: 'write / writes → wrote' },
          { label: 'Present Continuous → Past Continuous', value: 'is/am/are writing → was/were writing' },
          { label: 'Present Perfect → Past Perfect', value: 'has/have written → had written' },
          { label: 'Past Simple → Past Perfect', value: 'wrote → had written' },
          { label: 'Past Continuous → Past Perfect Continuous', value: 'was/were writing → had been writing' }
        ]
      },
      {
        header: 'Fundamental Framework Components',
        rows: [
          { label: 'Tense', value: 'Backshift verbs one step (except for truths).' },
          { label: 'Reporting Verb', value: 'Change based on tone (said to → told, asked, etc.).' },
          { label: 'Pronouns', value: 'Align I/You based on speaker/listener perspective.' },
          { label: 'Time & Place', value: 'Convert near references to far (now → then).' }
        ]
      }
    ]
  },
  3: {
    title: 'Present Tense Backshifts',
    infographics: [
      {
        header: 'Tense Backshift Table',
        rows: [
          { label: 'Simple Present', value: 'becomes → Simple Past (V1 → V2)' },
          { label: 'Present Continuous', value: 'becomes → Past Continuous (is/am/are → was/were)' },
          { label: 'Present Perfect', value: 'becomes → Past Perfect (has/have → had + V3)' },
          { label: 'Present Perfect Cont.', value: 'becomes → Past Perfect Cont. (has been → had been)' }
        ]
      },
      {
        header: 'Helping Verb Reference',
        rows: [
          { label: 'do / does', value: 'shifts to → did' },
          { label: 'is / am / are', value: 'shifts to → was / were' },
          { label: 'has / have', value: 'shifts to → had' }
        ]
      }
    ]
  },
  4: {
    title: 'Past Tense Backshifts',
    infographics: [
      {
        header: 'Past Tense Transformation',
        rows: [
          { label: 'Simple Past', value: 'becomes → Past Perfect (V2 → had + V3)' },
          { label: 'Past Continuous', value: 'becomes → Past Perfect Continuous (was/were → had been)' },
          { label: 'Past Perfect', value: 'remains → Past Perfect (No Change)' },
          { label: 'Past Perfect Cont.', value: 'remains → Past Perfect Continuous (No Change)' }
        ]
      },
      {
        header: 'Helping Verb Reference',
        rows: [
          { label: 'did + V1', value: 'shifts to → had + V3' },
          { label: 'was / were', value: 'shifts to → had been' }
        ]
      }
    ]
  },
  5: {
    title: 'Modal Verb Shifts',
    infographics: [
      {
        header: 'Modal Transformation Reference',
        rows: [
          { label: 'Will / Shall', value: 'Would / Should (Shall → should for advice)' },
          { label: 'Can', value: 'Could' },
          { label: 'May', value: 'Might' },
          { label: 'Must', value: 'Had to (for obligation) / Must (for logical necessity)' },
          { label: 'Should / Could', value: 'No Change' },
          { label: 'Might / Ought to', value: 'No Change' }
        ]
      }
    ]
  },
  6: {
    title: 'The PRO Rule (Pronouns)',
    infographics: [
      {
        header: 'Identity Transformation (SON)',
        rows: [
          { label: '1st Person (I, we, my, our)', value: 'Follows SUBJECT of the reporting verb.' },
          { label: '2nd Person (You, your, yours)', value: 'Follows OBJECT of the reporting verb.' },
          { label: '3rd Person (He, she, it, they)', value: 'NO CHANGE.' }
        ]
      },
      {
        header: 'Pronoun Case Table',
        rows: [
          { label: 'Subjective', value: 'I → he/she; we → they' },
          { label: 'Objective', value: 'me → him/her; us → them' },
          { label: 'Possessive', value: 'my → his/her; our → their' }
        ]
      }
    ]
  },
  7: {
    title: 'Near to Far Distance Shifts',
    infographics: [
      {
        header: 'Temporal (Time) Shifts',
        rows: [
          { label: 'Now / Today', value: 'Then / That day' },
          { label: 'Yesterday', value: 'The previous day / The day before' },
          { label: 'Tomorrow', value: 'The next day / The following day' },
          { label: 'Tonight / This week', value: 'That night / That week' },
          { label: 'Last month / year', value: 'The previous month / year' },
          { label: 'Ago', value: 'Before' }
        ]
      },
      {
        header: 'Spatial (Place) & Misc Shifts',
        rows: [
          { label: 'Here', value: 'There' },
          { label: 'This / These', value: 'That / Those' },
          { label: 'Thus', value: 'So' },
          { label: 'Hither', value: 'Thither' }
        ]
      }
    ]
  },
  8: {
    title: 'Exceptions: Present/Future Reporting',
    description: 'When the reporting verb is in the present (says) or future (will say), the tense of the reported clause remains unchanged.',
    why: 'The message is still current, so no backshift is necessary.',
    infographics: [
      {
        header: 'Present/Future Reporting Rule',
        rows: [
          { label: 'If verb is: says / tells', value: 'NO CHANGE in tense of reported clause.' },
          { label: 'If verb is: will say', value: 'NO CHANGE in tense of reported clause.' },
          { label: 'Pronoun Shift', value: 'Pronouns ALWAYS shift to match identity.' },
          { label: 'Example (Direct)', value: 'He says, "I am busy."' },
          { label: 'Example (Indirect)', value: 'He says that he is busy.' }
        ]
      }
    ]
  },
  9: {
    title: 'Exceptions: Universal Truths',
    infographics: [
      {
        header: 'Permanent State Rule',
        rows: [
          { label: 'Universal Truths', value: 'No Tense Change (The sun rises in the east).' },
          { label: 'Scientific Facts', value: 'No Tense Change (Water boils at 100°C).' },
          { label: 'Proverbs / Morals', value: 'No Tense Change (Honesty is the best policy).' },
          { label: 'Habitual Actions', value: 'No Tense Change (He walks every morning).' }
        ]
      }
    ]
  },
  10: {
    title: 'Interrogative: Yes/No Questions',
    infographics: [
      {
        header: 'Yes/No Conversion Steps',
        rows: [
          { label: 'Reporting Verb', value: 'said/said to → asked / inquired / wondered' },
          { label: 'Connector', value: 'Remove quotes, add "if" or "whether"' },
          { label: 'Word Order', value: 'Change to Statement Order (Subject before Verb)' },
          { label: 'Helping Verbs', value: 'Remove Do, Does, Did; adjust main verb tense.' }
        ]
      }
    ]
  },
  13: {
    title: 'Interrogative: Wh- Questions',
    infographics: [
      {
        header: 'Wh-Word Rules',
        rows: [
          { label: 'Connector', value: 'The Wh-word itself is the connector (No "that" or "if").' },
          { label: 'Structure', value: 'Wh-word + Subject + Helping Verb + Main Verb.' },
          { label: 'Tense', value: 'Full backshift applies as per standard rules.' },
          { label: 'Example', value: '"Where are you?" → where I was.' }
        ]
      }
    ]
  },
  15: {
    title: 'Imperative: Commands',
    infographics: [
      {
        header: 'Order & Instruction Conversion',
        rows: [
          { label: 'Reporting Verb', value: 'ordered / commanded / told / warned' },
          { label: 'Connector', value: 'quotes → "to" (for positive commands)' },
          { label: 'Verb Form', value: 'to + V1 (base form)' },
          { label: 'Negative', value: 'quotes → "not to" (for negative commands)' }
        ]
      }
    ]
  },
  16: {
    title: 'Imperative: Requests',
    infographics: [
      {
        header: 'Polite Request Reference',
        rows: [
          { label: 'Reporting Verb', value: 'requested / begged / entreated / implored' },
          { label: 'Remove Word', value: 'Delete "Please" or "Kindly" from indirect speech.' },
          { label: 'Connector', value: 'to + V1' },
          { label: 'Example', value: '"Please wait" → requested to wait.' }
        ]
      }
    ]
  },
  20: {
    title: 'Exclamatory: Emotion Mapping',
    infographics: [
      {
        header: 'Interjection Conversion Table',
        rows: [
          { label: 'Hurrah! / Ha!', value: 'exclaimed with joy / delight' },
          { label: 'Alas! / Oh!', value: 'exclaimed with sorrow / grief' },
          { label: 'Bravo!', value: 'applauded him / praised / said with applause' },
          { label: 'What! / How!', value: 'exclaimed with surprise / wonder' },
          { label: 'What a + Noun', value: 'became → a great + Noun' },
          { label: 'How + Adj', value: 'became → very + Adj' }
        ]
      }
    ]
  },
  22: {
    title: 'Greetings & Wishes',
    infographics: [
      {
        header: 'Social Transformation Reference',
        rows: [
          { label: 'Good Morning/Day', value: 'wished' },
          { label: 'Good Night/Bye', value: 'bade' },
          { label: 'Thank you', value: 'thanked' },
          { label: 'Congratulations', value: 'congratulated' }
        ]
      }
    ]
  }
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
    title: def.title || `Module ${i}: Advanced Transformations`,
    shortTitle: def.title?.split(' ')[0] || `Mod ${i}`,
    exitSkill: `Proficiency in Level ${i} grammar logic.`,
    icon: def.icon || '📘',
    description: def.description || `In-depth analysis and application of ${cat} rules.`,
    why: def.why || "To maintain precise communication when reporting secondary information.",
    directExample: def.directExample || 'He said, "I am ready."',
    indirectExample: def.indirectExample || 'He said that he was ready.',
    waffleTip: def.waffleTip || "Ensure all TRPT pillars are aligned!",
    wittyRemark: "Squeak! Time to master the syntax!",
    infographics: def.infographics || [{
      header: 'Transformation Guide',
      rows: [
        { label: 'Verb Tense', value: 'Apply standard backshift.' },
        { label: 'Pronouns', value: 'Adjust to Speaker/Listener.' },
        { label: 'Time & Place', value: 'Shift from Near to Far.' }
      ]
    }],
    quiz: getQuizForMod(i)
  });
}

export const ALL_LEARN_TOPICS = moduleConfigs;
export const MASTER_QUIZ_QUESTIONS = ALL_LEARN_TOPICS.flatMap(t => t.quiz || []);
