import { QuizQuestion } from './types';

const generateSet = (mod: number, baseData: Partial<QuizQuestion>[]): QuizQuestion[] => {
  return baseData.map((d, i) => ({
    id: `${mod}.${i + 1}`,
    category: 'Imperatives',
    directSpeech: d.directSpeech || '',
    context: d.context || '',
    options: d.options || [],
    correctAnswer: d.correctAnswer || '',
    explanation: d.explanation || '',
    errorType: d.errorType || 'general'
  }));
};

export const quizImperatives: Record<string, QuizQuestion[]> = {
  'mod-15': generateSet(15, [
    { directSpeech: 'He said to me, "Give me your pencil."', context: 'Neutral Command', options: ['He asked me to give him my pencil.', 'He told me to give him your pencil.', 'He asked me to give me his pencil.', 'He told that give him his pencil.'], correctAnswer: 'He asked me to give him my pencil.', explanation: 'said to -> asked; me -> him; your -> my; connector "to".', errorType: 'pronoun' },
    { directSpeech: 'He said to the servant, "Leave my house at once."', context: 'Harsh Order', options: ['He ordered the servant to leave his house at once.', 'He told the servant to leave my house at once.', 'He asked the servant leave his house.', 'He ordered for the servant to leave.'], correctAnswer: 'He ordered the servant to leave his house at once.', explanation: 'said to -> ordered (authority); my -> his.', errorType: 'reporting_verb' },
    { directSpeech: '"Call the first witness," said the judge.', context: 'Formal Command', options: ['The judge commanded them to call the first witness.', 'The judge ordered for calling the first witness.', 'The judge said to call the first witness.', 'The judge asked to call the witness.'], correctAnswer: 'The judge commanded them to call the first witness.', explanation: 'Judge = Command; connector "to".', errorType: 'reporting_verb' }
  ]),
  'mod-16': generateSet(16, [
    { directSpeech: 'He said to me, "Please give me a glass of water."', context: 'Polite request', options: ['He requested me to give him a glass of water.', 'He told me to give him a glass of water.', 'He requested me to please give him water.', 'He said please give him water.'], correctAnswer: 'He requested me to give him a glass of water.', explanation: 'said to + please -> requested. Remove "please" in report.', errorType: 'reporting_verb' },
    { directSpeech: 'I said to the teacher, "Please explain this question to me."', context: 'Classroom request', options: ['I requested the teacher to explain that question to me.', 'I requested the teacher to explain this question to me.', 'I told the teacher please explain that.', 'I asked the teacher explaining that question.'], correctAnswer: 'I requested the teacher to explain that question to me.', explanation: 'this -> that; please -> requested.', errorType: 'time_place' }
  ]),
  'mod-17': generateSet(17, [
    { directSpeech: 'The mother said to the child, "Don\'t touch the hot pan."', context: 'Warning', options: ['The mother warned the child not to touch the hot pan.', 'The mother warned the child to not touch the hot pan.', 'The mother told the child don\'t touch the pan.', 'The mother forbade the child not to touch.'], correctAnswer: 'The mother warned the child not to touch the hot pan.', explanation: 'Don\'t -> not to. Warning is appropriate.', errorType: 'structure' },
    { directSpeech: 'He said to the students, "Do not make a noise."', context: 'Standard prohibition', options: ['He forbade the students to make a noise.', 'He forbade the students not to make a noise.', 'He told the students don\'t make a noise.', 'He asked to not make a noise.'], correctAnswer: 'He forbade the students to make a noise.', explanation: '"Forbade" already implies "not". Do not double the negative.', errorType: 'structure' }
  ]),
  'mod-18': generateSet(18, [
    { directSpeech: 'The teacher said to the students, "Work hard and be regular in your studies."', context: 'Advice', options: ['The teacher advised the students to work hard and be regular in their studies.', 'The teacher told the students to work hard and be regular in your studies.', 'The teacher asked the students work hard.', 'The teacher said they work hard.'], correctAnswer: 'The teacher advised the students to work hard and be regular in their studies.', explanation: 'Instruction for success = advice.', errorType: 'reporting_verb' },
    { directSpeech: 'The principal said, "Do not use mobile phones in school."', context: 'Formal ban', options: ['The principal prohibited the students from using mobile phones in school.', 'The principal forbade the students not to use phones.', 'The principal told don\'t use phones.', 'The principal advised to not use phones.'], correctAnswer: 'The principal prohibited the students from using mobile phones in school.', explanation: 'Formal school policy = prohibited/forbade.', errorType: 'reporting_verb' }
  ]),
  'mod-19': generateSet(19, [
    { directSpeech: 'He said, "Let\'s go for a walk."', context: 'Collective suggestion', options: ['He suggested that they should go for a walk.', 'He suggested going for a walk.', 'He asked to go for a walk.', 'Both A and B'], correctAnswer: 'Both A and B', explanation: 'Let\'s can be "suggested that they should" or "suggested + V-ing".', errorType: 'reporting_verb' },
    { directSpeech: 'He shouted, "Let me go."', context: 'Individual request', options: ['He shouted to them to let him go.', 'He suggested that he should go.', 'He told them let me go.', 'He asked if he could go.'], correctAnswer: 'He shouted to them to let him go.', explanation: '"Let me" is a request for permission, not a joint suggestion.', errorType: 'reporting_verb' }
  ])
};