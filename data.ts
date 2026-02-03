
import { LearnTopic, QuizQuestion, ErrorType, TopicCategory } from './types';

const generate50Questions = (modId: number, category: TopicCategory, rule: string): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  const subjects = ['Ram', 'Sita', 'The boy', 'The girl', 'He', 'She', 'The teacher', 'My friend'];
  const verbs = ['said', 'told me', 'says', 'will say'];
  
  for (let i = 1; i <= 50; i++) {
    // Basic dynamic content to ensure 50 unique questions per module
    let direct = "";
    let correct = "";
    let options: string[] = [];
    let exp = "";
    let type: ErrorType = 'general';

    // Module-specific Logic Factories
    if (modId === 3) { // Simple Statements
      const adj = ['happy', 'busy', 'tired', 'ill', 'ready', 'late', 'hungry', 'sad', 'fine', 'ok'][i % 10];
      const sub = subjects[i % subjects.length];
      direct = `${sub} said, "I am ${adj}."`;
      correct = `${sub} said that ${sub === 'Sita' || sub === 'The girl' || sub === 'She' ? 'she' : 'he'} was ${adj}.`;
      options = [correct, `${sub} told that he was ${adj}.`, `${sub} said that I am ${adj}.`, `${sub} said that he is ${adj}.`].sort();
      exp = `Postal Logic: 'said' stays (no object), 'am' backshifts to 'was', 'I' shifts to 3rd person.`;
      type = 'tense';
    } else if (modId === 9) { // Universal Truths
      const truths = [
        ["The sun rises in the east", "rises"],
        ["Water boils at 100°C", "boils"],
        ["The earth is round", "is"],
        ["Honesty is the best policy", "is"],
        ["Two and two make four", "make"]
      ];
      const truth = truths[i % truths.length];
      direct = `The teacher said, "${truth[0]}."`;
      correct = `The teacher said that ${truth[0]}.`;
      options = [correct, `The teacher said that ${truth[0].replace(truth[1], 'was/were/did')}.`, `The teacher told that ${truth[0]}.`, `The teacher said ${truth[0]} was.`].sort();
      exp = `Postal Logic: This is a permanent shipment (Universal Truth). No tense backshift allowed!`;
      type = 'no_change';
    } else if (modId === 4) { // Said to -> Told
      const sub = subjects[i % subjects.length];
      direct = `${sub} said to me, "I like your book."`;
      const p = sub === 'Sita' || sub === 'The girl' || sub === 'She' ? 'she' : 'he';
      correct = `${sub} told me that ${p} liked my book.`;
      options = [correct, `${sub} said to me that ${p} liked my book.`, `${sub} told me that I liked your book.`, `${sub} told me that ${p} likes my book.`].sort();
      exp = `Postal Logic: 'said to' becomes 'told'. 'I' matches subject, 'your' matches object.`;
      type = 'reporting_verb';
    } else {
      // Fallback for demo: ensures every module has content
      direct = `Speaker said, "This is parcel ${i} for Module ${modId}."`;
      correct = `Speaker said that that was parcel ${i} for Module ${modId}.`;
      options = [correct, `Speaker said this is parcel ${i}.`, `Speaker told that was parcel ${i}.`, `Speaker said that this was parcel ${i}.`].sort();
      exp = "General TRPT application.";
      type = 'general';
    }

    questions.push({
      id: `${modId}.${i}`,
      category,
      directSpeech: direct,
      context: `Module ${modId} - Item ${i}`,
      options,
      correctAnswer: correct,
      explanation: exp,
      errorType: type
    });
  }
  return questions;
};

const moduleConfigs: {id: number, cat: TopicCategory, title: string, icon: string, desc: string}[] = [
  { id: 1, cat: 'Foundations', title: 'The SQCEM Sorting', icon: '🔍', desc: 'Identify if a message is a Statement, Question, Command, Exclamation, or Mixed.' },
  { id: 2, cat: 'Foundations', title: 'The TRPT Framework', icon: '🏗️', desc: 'Master the 4 pillars of delivery: Tense, Reporting Verb, Pronoun, Time/Place.' },
  { id: 3, cat: 'Statements', title: 'Basic Statements (No Object)', icon: '✉️', desc: 'Convert statements with no listener. Rule: "said" stays "said".' },
  { id: 4, cat: 'Statements', title: 'Said to -> Told', icon: '👥', desc: 'When a listener exists, the stamp changes. Use the PRO rule.' },
  { id: 5, cat: 'Statements', title: 'Time Shifts', icon: '⏰', desc: 'Now becomes Then. Today becomes That Day. Near moves to Far.' },
  { id: 6, cat: 'Statements', title: 'Place Shifts', icon: '📍', desc: 'Here becomes There. This becomes That. Spatial distance matters.' },
  { id: 7, cat: 'Statements', title: 'Modal Verbs', icon: '🛠️', desc: 'Can -> Could, Will -> Would. Adjust the auxiliary stamps.' },
  { id: 8, cat: 'Statements', title: 'Present Reporting', icon: '🗣️', desc: 'When the report is "now" (says), the internal tense stays frozen.' },
  { id: 9, cat: 'Statements', title: 'Universal Truths', icon: '🌍', desc: 'Permanent facts never backshift. Science is immortal!' },
  { id: 10, cat: 'Questions', title: 'Yes/No Questions', icon: '❓', desc: 'Use "if/whether" and flip the word order back to statements.' }
];

// Extend modules to 30 for the Roadmap
for (let i = 11; i <= 30; i++) {
  moduleConfigs.push({
    id: i,
    cat: i < 15 ? 'Questions' : i < 20 ? 'Imperatives' : i < 23 ? 'Exclamations' : i < 27 ? 'Advanced' : 'Mastery',
    title: `Advanced Module ${i}`,
    icon: '📦',
    desc: `Detailed postal training for level ${i} complexity.`
  });
}

export const ALL_LEARN_TOPICS: LearnTopic[] = moduleConfigs.map(cfg => ({
  id: `mod-${cfg.id}`,
  moduleId: cfg.id,
  category: cfg.cat,
  title: cfg.title,
  shortTitle: cfg.title.split(' ')[0],
  exitSkill: `Master Module ${cfg.id} logic.`,
  icon: cfg.icon,
  description: cfg.desc,
  why: "To ensure the message arrives exactly as intended after its journey through time.",
  directExample: 'He said, "I am ready."',
  indirectExample: 'He said that he was ready.',
  waffleTip: `Remember the TRPT Mantra!`,
  wittyRemark: `A delivery delayed is a delivery mis-tensed!`,
  infographic: {
    header: 'Postal Transformation Rules',
    rows: [
      { label: 'Tense', value: 'Backshift: is -> was' },
      { label: 'Reporting', value: 'said -> said / said to -> told' },
      { label: 'Pronoun', value: 'I -> He/She (Match Speaker)' },
      { label: 'Time/Place', value: 'Near (Here/Now) -> Far (There/Then)' }
    ]
  },
  quiz: generate50Questions(cfg.id, cfg.cat, cfg.desc)
}));

export const MASTER_QUIZ_QUESTIONS = ALL_LEARN_TOPICS.flatMap(t => t.quiz);
