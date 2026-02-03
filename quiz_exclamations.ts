
import { QuizQuestion } from './types';

export const quizExclamations: Record<string, QuizQuestion[]> = {
  'mod-20': [
    { id: '20.1', category: 'Exclamations', directSpeech: 'Hurrah!', context: 'Emotion identification', options: ['Sorrow', 'Surprise', 'Joy', 'Anger'], correctAnswer: 'Joy', explanation: 'Expresses victory/joy.', errorType: 'sentence_type' },
    { id: '20.2', category: 'Exclamations', directSpeech: 'Hurrah! We have won the match.', context: 'Joy exclamation', options: ['have won', 'had won', 'exclaimed with sorrow', 'said with joy'], correctAnswer: 'The boys exclaimed with joy that they had won the match.', explanation: 'have won -> had won.', errorType: 'tense' },
    { id: '20.3', category: 'Exclamations', directSpeech: 'Alas! How foolish I have been!', context: 'Sorrow exclamation', options: ['with joy', 'has been', 'had been', 'said with sorrow'], correctAnswer: 'She exclaimed with sorrow that she had been very foolish.', explanation: 'have been -> had been; alas -> sorrow.', errorType: 'tense' },
    { id: '20.4', category: 'Exclamations', directSpeech: 'Hurrah! My son...', context: 'Complex joy', options: ['her son had qualified... proud of him', 'my son...', 'with sorrow', 'said with joy'], correctAnswer: 'The mother exclaimed with joy that her son had qualified the examination, and that she was so proud of him.', explanation: 'Full TRPT and emotion coverage.', errorType: 'reporting_verb' }
  ],
  'mod-21': [
    { id: '21.1', category: 'Exclamations', directSpeech: 'What a...! / How...!', context: 'Intensity shift rule', options: ['very', 'much', 'really', 'quite'], correctAnswer: 'very', explanation: 'Use very/great to replace intensity.', errorType: 'general' },
    { id: '21.2', category: 'Exclamations', directSpeech: 'What a lovely rose!', context: 'Intensity conversion', options: ['it was a lovely rose', 'it was a very lovely rose', 'with joy', 'said that it was...'], correctAnswer: 'She exclaimed that it was a very lovely rose.', explanation: 'Added "very" to compensate for "What a".', errorType: 'general' },
    { id: '21.3', category: 'Exclamations', directSpeech: 'Bravo! You have done well.', context: 'Approval exclamation', options: ['exclaimed with joy', 'applauded him saying', 'exclaimed with surprise', 'said bravo'], correctAnswer: 'He applauded him saying that he had done well.', explanation: 'Bravo implies applause.', errorType: 'reporting_verb' },
    { id: '21.4', category: 'Exclamations', directSpeech: 'How clever I am!', context: 'Complex wonder', options: ['exclaimed she was very clever...', 'I was...', 'she solved...', 'said she was...'], correctAnswer: 'Alice exclaimed that she was very clever and that she had solved the puzzle that no one else could.', explanation: 'How -> very; could (past modal) stays could.', errorType: 'tense' }
  ],
  'mod-22': [
    { id: '22.1', category: 'Exclamations', directSpeech: 'Good morning, Gentlemen!', context: 'Morning greeting', options: ['exclaimed', 'wished', 'told', 'prayed'], correctAnswer: 'The lady wished the gentlemen good morning.', explanation: 'Social greetings use wished.', errorType: 'reporting_verb' },
    { id: '22.2', category: 'Exclamations', directSpeech: 'Good bye, friends.', context: 'Farewell', options: ['wished', 'exclaimed', 'bade', 'prayed'], correctAnswer: 'He bade good-bye to his friends.', explanation: 'Farewells use bade.', errorType: 'reporting_verb' },
    { id: '22.3', category: 'Exclamations', directSpeech: 'May God bless you!', context: 'Prayer/Wish', options: ['wished... bless', 'prayed... might bless', 'exclaimed... might', 'prayed... may'], correctAnswer: 'She prayed that God might bless me.', explanation: 'May -> might in prayers.', errorType: 'tense' },
    { id: '22.4', category: 'Exclamations', directSpeech: 'Good morning! May God bless you all...', context: 'Mixed prayer', options: ['wished... morning and prayed... might', 'may bless', 'exclaimed', 'told'], correctAnswer: 'The grandmother wished the children good morning and prayed that God might bless them all and keep them safe.', explanation: 'Full TRPT and social coverage.', errorType: 'reporting_verb' }
  ]
};
