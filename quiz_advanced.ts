import { QuizQuestion } from './types';

const generateSet = (mod: number, baseData: Partial<QuizQuestion>[]): QuizQuestion[] => {
  return baseData.map((d, i) => ({
    id: `${mod}.${i + 1}`,
    category: 'Advanced',
    directSpeech: d.directSpeech || '',
    context: d.context || '',
    options: d.options || [],
    correctAnswer: d.correctAnswer || '',
    explanation: d.explanation || '',
    errorType: d.errorType || 'general'
  }));
};

export const quizAdvanced: Record<string, QuizQuestion[]> = {
  'mod-23': generateSet(23, [
    { directSpeech: 'He said, "If it rains, I will not go."', context: 'Type 1 Conditional', options: ['He said that if it rained, he would not go.', 'He said that if it rains, he will not go.', 'He told if it rained, he would not go.', 'He said if it rained I would not go.'], correctAnswer: 'He said that if it rained, he would not go.', explanation: 'Type 1 (Real): Shift rains → rained and will → would.', errorType: 'tense' },
    { directSpeech: 'She said, "If I were rich, I would help the poor."', context: 'Type 2 Conditional', options: ['She said that if she were rich, she would help the poor.', 'She said that if she was rich, she would help.', 'She said that if she had been rich, she would help.', 'She told that if she were rich, she would help.'], correctAnswer: 'She said that if she were rich, she would help the poor.', explanation: 'Type 2 (Hypothetical): Subjunctive "were" and "would" stay as they are.', errorType: 'no_change' },
    { directSpeech: 'He said, "If I had known, I would have come."', context: 'Type 3 Conditional', options: ['He said that if he had known, he would have come.', 'He said that if he knew, he would come.', 'He said that if he had known, he will have come.', 'He told that if he had known, he would have come.'], correctAnswer: 'He said that if he had known, he would have come.', explanation: 'Type 3 (Impossible): Already in Past Perfect, so no change is needed.', errorType: 'no_change' },
    { directSpeech: 'She said, "If you study hard, you will pass."', context: 'Conditional logic check', options: ['she said that if he studied hard, he would pass', 'she said that if he study hard, he would pass', 'she said if you studied hard, you would pass', 'she told that if he had studied, he would pass'], correctAnswer: 'she said that if he studied hard, he would pass', explanation: 'Standard Type 1 backshift.', errorType: 'tense' }
  ]),
  'mod-24': generateSet(24, [
    { directSpeech: 'He said, "Be quiet and listen to my words."', context: 'Double Command', options: ['He urged them to be quiet and listen to his words.', 'He said that be quiet and listen to his words.', 'He urged them to be quiet and listened to his words.', 'He told them be quiet and listen to his words.'], correctAnswer: 'He urged them to be quiet and listen to his words.', explanation: 'Two commands joined; both use "to + V1".', errorType: 'structure' },
    { directSpeech: '"Who are you, sir, and what do you want?" they asked.', context: 'Double Question', options: ['They asked the young man who he was and what he wanted.', 'They asked him who was he and what did he want.', 'They asked that who he was and what he wanted.', 'They asked who he is and what he wants.'], correctAnswer: 'They asked the young man who he was and what he wanted.', explanation: 'Two Wh-questions converted and joined with statement order.', errorType: 'structure' },
    { directSpeech: 'She said, "I can\'t come because I am busy now."', context: 'Statement + Reason', options: ['She said that she couldn\'t come because she was busy then.', 'She said that she can\'t come because she is busy then.', 'She told she couldn\'t come because she was busy now.', 'She said that she couldn\'t come because I was busy then.'], correctAnswer: 'She said that she couldn\'t come because she was busy then.', explanation: 'Both clauses backshift; now -> then.', errorType: 'tense' },
    { directSpeech: 'The manager said, "The meeting has been postponed to next week."', context: 'Passive Mixed', options: ['He said that the meeting had been postponed to the following week.', 'He said that the meeting was postponed to next week.', 'He told that the meeting had been postponed to the following week.', 'He said that the meeting had postponed to following week.'], correctAnswer: 'He said that the meeting had been postponed to the following week.', explanation: 'Passive voice kept; has been -> had been; next week -> following week.', errorType: 'time_place' }
  ]),
  'mod-25': generateSet(25, [
    { directSpeech: 'He said, "My teacher told me, \'Work hard.\'"', context: 'Nested Command', options: ['He said that his teacher had told him to work hard.', 'He said that his teacher told him to work hard.', 'He said that his teacher had told me to work hard.', 'He said his teacher told him, "work hard".'], correctAnswer: 'He said that his teacher had told him to work hard.', explanation: 'Flattened both layers; told -> had told; "work hard" -> to work hard.', errorType: 'tense' },
    { directSpeech: 'She said, "My mother asked me, \'Have you eaten?\'"', context: 'Nested Question', options: ['She said that her mother had asked her if she had eaten.', 'She said that her mother asked if she had eaten.', 'She said that her mother had asked her that had she eaten.', 'She told that her mother had asked her if she ate.'], correctAnswer: 'She said that her mother had asked her if she had eaten.', explanation: 'Flattened; asked -> had asked; "Have you eaten" -> if she had eaten.', errorType: 'tense' },
    { directSpeech: 'He said, "The doctor told me, \'Take rest.\'"', context: 'Medical Nesting', options: ['He said that the doctor had told him to take rest.', 'He said that the doctor told him to take rest.', 'He said that the doctor has told him to take rest.', 'He said the doctor told to take rest.'], correctAnswer: 'He said that the doctor had told him to take rest.', explanation: 'Flattened command report.', errorType: 'tense' }
  ]),
  'mod-26': generateSet(26, [
    { directSpeech: '"I am," he said, "very tired."', context: 'Split Statement', options: ['He said that he was very tired.', 'He said he is very tired.', 'He said, "I was very tired."', 'He told that he was very tired.'], correctAnswer: 'He said that he was very tired.', explanation: 'Reporting clause moves to front; split parts join.', errorType: 'structure' },
    { directSpeech: '"Where are you going?" she asked.', context: 'End Question', options: ['She asked where he was going.', 'She asked where was he going.', 'She asked where are you going.', 'She told where he was going.'], correctAnswer: 'She asked where he was going.', explanation: 'Reporting clause moves to front; statement order for question.', errorType: 'structure' },
    { directSpeech: '"I know her address," said Gopal.', context: 'End Statement', options: ['Gopal said that he knew her address.', 'Gopal said that I know her address.', 'Gopal told that he knew her address.', 'Gopal asked if he knew her address.'], correctAnswer: 'Gopal said that he knew her address.', explanation: 'Move speaker to front; backshift know -> knew.', errorType: 'tense' },
    { directSpeech: '"Do you know the answer?" the teacher asked.', context: 'End Yes/No', options: ['The teacher asked if he knew the answer.', 'The teacher asked that if he knew the answer.', 'The teacher asked if did he know the answer.', 'The teacher told if he knew the answer.'], correctAnswer: 'The teacher asked if he knew the answer.', explanation: 'Move speaker to front; add "if"; statement order.', errorType: 'structure' }
  ])
};