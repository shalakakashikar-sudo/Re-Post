import { QuizQuestion } from './types';

const generateSet = (mod: number, baseData: Partial<QuizQuestion>[]): QuizQuestion[] => {
  return baseData.map((d, i) => ({
    id: `${mod}.${i + 1}`,
    category: 'Mastery',
    directSpeech: d.directSpeech || '',
    context: d.context || '',
    options: d.options || [],
    correctAnswer: d.correctAnswer || '',
    explanation: d.explanation || '',
    errorType: d.errorType || 'general'
  }));
};

export const quizMastery: Record<string, QuizQuestion[]> = {
  'mod-27': generateSet(27, [
    { directSpeech: 'He told me that he was ill.', context: 'Reverse Statement', options: ['He said to me, "I am ill."', 'He told me, "I am ill."', 'He said to me, "He was ill."', 'He told to me, "I am ill."'], correctAnswer: 'He said to me, "I am ill."', explanation: 'told -> said to; that -> quote; was -> am; he -> I.', errorType: 'general' },
    { directSpeech: 'She said that she had passed the examination.', context: 'Reverse Perfect', options: ['She said, "I have passed the examination."', 'She said, "I passed the examination."', 'She said, "She had passed the examination."', 'She said, "I had passed the examination."'], correctAnswer: 'She said, "I have passed the examination."', explanation: 'had passed -> have passed (or simple past); she -> I.', errorType: 'tense' },
    { directSpeech: 'Rama replied that he could not do so.', context: 'Reverse Modal', options: ['Rama replied, "I cannot do so."', 'Rama replied, "He could not do so."', 'Rama replied, "I could not do so."', 'Rama said that, "I cannot do so."'], correctAnswer: 'Rama replied, "I cannot do so."', explanation: 'could -> can; he -> I.', errorType: 'tense' },
    { directSpeech: 'He said that he had met that man two days before.', context: 'Reverse Time/Place', options: ['He said, "I met this man two days ago."', 'He said, "I have met that man two days before."', 'He said, "He met this man two days ago."', 'He said, "I met that man two days ago."'], correctAnswer: 'He said, "I met this man two days ago."', explanation: 'had met -> met; that -> this; before -> ago.', errorType: 'time_place' }
  ]),
  'mod-28': generateSet(28, [
    { directSpeech: 'He asked me what I wanted.', context: 'Reverse Wh-Question', options: ['He said to me, "What do you want?"', 'He said to me, "What I wanted?"', 'He said to me, "What did I want?"', 'He asked me, "What do you want?"'], correctAnswer: 'He said to me, "What do you want?"', explanation: 'asked -> said to; what I wanted -> What do you want? (order restored).', errorType: 'structure' },
    { directSpeech: 'He begged the king to forgive him.', context: 'Reverse Polite Request', options: ['He said to the king, "Please, forgive me."', 'He said to the king, "Forgive him."', 'He told the king, "Please forgive me."', 'He begged to the king, "Forgive me."'], correctAnswer: 'He said to the king, "Please, forgive me."', explanation: 'begged -> said to + Please; him -> me.', errorType: 'reporting_verb' },
    { directSpeech: 'He asked his father when the next letter would come.', context: 'Reverse Modal Question', options: ['He said to his father, "When will the next letter come?"', 'He asked his father, "When would the next letter come?"', 'He said to his father, "When would the next letter come?"', 'He told his father, "When will the next letter come?"'], correctAnswer: 'He said to his father, "When will the next letter come?"', explanation: 'would -> will; order restored to HV+Sub.', errorType: 'structure' },
    { directSpeech: 'The captain commanded his soldiers to attack the enemy.', context: 'Reverse Command', options: ['The captain said to his soldiers, "Attack the enemy."', 'The captain told his soldiers, "Attack the enemy."', 'The captain said to his soldiers, "To attack the enemy."', 'The captain commanded, "Attack the enemy."'], correctAnswer: 'The captain said to his soldiers, "Attack the enemy."', explanation: 'commanded...to attack -> said to... + "V1".', errorType: 'reporting_verb' }
  ]),
  'mod-29': generateSet(29, [
    { directSpeech: 'He said to me that he was busy.', context: 'Error Check: Reporting Verb', options: ['Error: "said to" should be "told"', 'Error: "that" should be "if"', 'Error: "was" should be "is"', 'No Error'], correctAnswer: 'Error: "said to" should be "told"', explanation: 'When an object (me) is present, "said to" must shift to "told" in indirect speech.', errorType: 'reporting_verb' },
    { directSpeech: 'She asked what was I doing.', context: 'Error Check: Question Order', options: ['Error: "was I" should be "I was"', 'Error: "asked" should be "said"', 'Error: "doing" should be "done"', 'No Error'], correctAnswer: 'Error: "was I" should be "I was"', explanation: 'Indirect questions must follow statement word order (Subject + Verb).', errorType: 'structure' },
    { directSpeech: 'The teacher said that the earth was round.', context: 'Error Check: Truth', options: ['Error: "was" should be "is"', 'Error: "said" should be "told"', 'Error: "that" should be "if"', 'No Error'], correctAnswer: 'Error: "was" should be "is"', explanation: 'Universal truths keep the present tense even in reported speech.', errorType: 'no_change' },
    { directSpeech: 'He asked that I was ready.', context: 'Error Check: Connector', options: ['Error: "that" should be "if/whether"', 'Error: "asked" should be "told"', 'Error: "ready" should be "readily"', 'No Error'], correctAnswer: 'Error: "that" should be "if/whether"', explanation: 'Yes/No questions use "if" or "whether" as connectors, not "that".', errorType: 'structure' }
  ]),
  'mod-30': generateSet(30, [
    { directSpeech: 'He said, "Let\'s celebrate this victory."', context: 'Suggestion Conversion', options: ['He suggested that they should celebrate that victory.', 'He suggested they celebrate this victory.', 'He told them to celebrate that victory.', 'He suggested to celebrate that victory.'], correctAnswer: 'He suggested that they should celebrate that victory.', explanation: 'Let\'s -> suggested should; this -> that.', errorType: 'reporting_verb' },
    { directSpeech: 'She said to me, "Do you remember what I told you yesterday?"', context: 'Complex Mixed', options: ['She asked me if I remembered what she had told me the previous day.', 'She asked me if I remembered what I told you yesterday.', 'She told me if I remembered what she had told me yesterday.', 'She asked if I remembered what she told me the previous day.'], correctAnswer: 'She asked me if I remembered what she had told me the previous day.', explanation: 'Multiple shifts: if; remember -> remembered; I -> she; told -> had told; yesterday -> previous day.', errorType: 'general' },
    { directSpeech: 'He said, "If I had the money, I would buy a house."', context: 'Type 3 Conditional', options: ['He said that if he had the money, he would buy a house.', 'He said that if he had had the money, he would have bought...', 'He told that if he had the money, he will buy...', 'He said if he had the money I would buy...'], correctAnswer: 'He said that if he had the money, he would buy a house.', explanation: 'Type 3 conditionals do not shift further.', errorType: 'no_change' },
    { directSpeech: '"Be honest and work with dedication," the father said to his son.', context: 'Compound Command', options: ['The father advised his son to be honest and work with dedication.', 'The father told his son that be honest and work.', 'The father said to his son to be honest and work.', 'The father advised to his son to be honest.'], correctAnswer: 'The father advised his son to be honest and work with dedication.', explanation: 'said to -> advised; imperatives join with "to".', errorType: 'reporting_verb' }
  ])
};