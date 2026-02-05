import { QuizQuestion } from './types';

const generateSet = (mod: number, baseData: Partial<QuizQuestion>[]): QuizQuestion[] => {
  return baseData.map((d, i) => ({
    id: `${mod}.${i + 1}`,
    category: 'Exclamations',
    directSpeech: d.directSpeech || '',
    context: d.context || '',
    options: d.options || [],
    correctAnswer: d.correctAnswer || '',
    explanation: d.explanation || '',
    errorType: d.errorType || 'general'
  }));
};

export const quizExclamations: Record<string, QuizQuestion[]> = {
  'mod-20': generateSet(20, [
    { directSpeech: 'The boys said, "Hurrah! We have won the match."', context: 'Joy', options: ['The boys exclaimed with joy that they had won the match.', 'The boys said that Hurrah they won.', 'The boys exclaimed with sorrow that they won.', 'The boys told that we have won.'], correctAnswer: 'The boys exclaimed with joy that they had won the match.', explanation: 'Hurrah removed; exclaimed with joy added; have won -> had won.', errorType: 'reporting_verb' },
    { directSpeech: 'She said, "Alas! How foolish I have been!"', context: 'Sorrow', options: ['She exclaimed with sorrow that she had been very foolish.', 'She said alas she was foolish.', 'She exclaimed with joy she was foolish.', 'She confessed with regret that she have been foolish.'], correctAnswer: 'She exclaimed with sorrow that she had been very foolish.', explanation: 'Alas removed; exclaimed with sorrow added; have been -> had been.', errorType: 'tense' },
    { directSpeech: 'He said, "Hurrah! I have won a scholarship."', context: 'Joy', options: ['He exclaimed with joy that he had won a scholarship.', 'He said he won a scholarship.', 'He exclaimed he won a scholarship.', 'He told that he has won.'], correctAnswer: 'He exclaimed with joy that he had won a scholarship.', explanation: 'Standard joy conversion with backshift.', errorType: 'reporting_verb' }
  ]),
  'mod-21': generateSet(21, [
    { directSpeech: '"What a terrible storm it is!" he said.', context: 'Surprise', options: ['He exclaimed that it was a very terrible storm.', 'He said what a terrible storm it was.', 'He exclaimed it is a terrible storm.', 'He told that what a storm.'], correctAnswer: 'He exclaimed that it was a very terrible storm.', explanation: '"What a" removed; "very" added for intensity; is -> was.', errorType: 'general' },
    { directSpeech: 'Alice said, "How clever I am!"', context: 'Wonder', options: ['Alice exclaimed that she was very clever.', 'Alice said she is clever.', 'Alice exclaimed how clever she was.', 'Alice told she was clever.'], correctAnswer: 'Alice exclaimed that she was very clever.', explanation: 'How removed; very added; am -> was.', errorType: 'general' },
    { directSpeech: 'He said, "Bravo! You have done well."', context: 'Approval', options: ['He applauded him saying that he had done well.', 'He said bravo you did well.', 'He exclaimed with surprise he did well.', 'He told him bravo.'], correctAnswer: 'He applauded him saying that he had done well.', explanation: 'Bravo -> applauded ... saying that.', errorType: 'reporting_verb' }
  ]),
  'mod-22': generateSet(22, [
    { directSpeech: 'The lady said, "Good morning, Gentlemen!"', context: 'Greeting', options: ['The lady wished the gentlemen good morning.', 'The lady said good morning.', 'The lady exclaimed good morning.', 'The lady bade good morning.'], correctAnswer: 'The lady wished the gentlemen good morning.', explanation: 'Good morning -> wished.', errorType: 'reporting_verb' },
    { directSpeech: 'He said, "Good bye, friends."', context: 'Farewell', options: ['He bade good-bye to his friends.', 'He wished good-bye.', 'He said good-bye.', 'He prayed good-bye.'], correctAnswer: 'He bade good-bye to his friends.', explanation: 'Good bye -> bade.', errorType: 'reporting_verb' },
    { directSpeech: 'She said to me, "May God bless you!"', context: 'Prayer', options: ['She prayed that God might bless me.', 'She wished that God may bless me.', 'She said God bless you.', 'She prayed God bless me.'], correctAnswer: 'She prayed that God might bless me.', explanation: 'May God... -> prayed that God might...', errorType: 'tense' }
  ])
};