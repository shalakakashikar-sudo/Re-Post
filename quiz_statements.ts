
import { QuizQuestion } from './types';

const generateSet = (mod: number, baseData: Partial<QuizQuestion>[]): QuizQuestion[] => {
  return baseData.map((d, i) => ({
    id: `${mod}.${i + 1}`,
    category: 'Statements',
    directSpeech: d.directSpeech || '',
    context: d.context || '',
    options: d.options || [],
    correctAnswer: d.correctAnswer || '',
    explanation: d.explanation || '',
    errorType: d.errorType || 'general'
  }));
};

export const quizStatements: Record<string, QuizQuestion[]> = {
  'mod-3': generateSet(3, [
    { directSpeech: 'Rajan said, "I am ill."', context: 'Simple Present', options: ['Rajan said that he was ill.', 'Rajan said that I was ill.', 'Rajan said he is ill.', 'Rajan told that he was ill.'], correctAnswer: 'Rajan said that he was ill.', explanation: 'I -> he; am -> was. Reporting verb stays "said" because there is no object.', errorType: 'tense' },
    { directSpeech: 'She said, "I have finished my work."', context: 'Present Perfect', options: ['She said that she has finished her work.', 'She said that she had finished her work.', 'She said I had finished my work.', 'She told she had finished her work.'], correctAnswer: 'She said that she had finished her work.', explanation: 'have finished -> had finished.', errorType: 'tense' },
    { directSpeech: 'The boy said, "I study every night."', context: 'Simple Present', options: ['that he studies', 'that he studied', 'that I studied', 'that he had studied'], correctAnswer: 'The boy said that he studied every night.', explanation: 'study -> studied.', errorType: 'tense' },
    { directSpeech: 'They said, "We are very happy."', context: 'Plural Pronoun', options: ['they were', 'we were', 'they are', 'they had been'], correctAnswer: 'They said that they were very happy.', explanation: 'We -> they; are -> were.', errorType: 'pronoun' },
    { directSpeech: 'She said, "I was sleeping."', context: 'Past Continuous', options: ['she was sleeping', 'she had been sleeping', 'I had been sleeping', 'she had slept'], correctAnswer: 'She said that she had been sleeping.', explanation: 'was sleeping -> had been sleeping.', errorType: 'tense' }
  ]),
  'mod-4': generateSet(4, [
    { directSpeech: 'He said to me, "You are brilliant."', context: 'said to -> told', options: ['He told me that I was brilliant.', 'He said to me that I was brilliant.', 'He told me that you were brilliant.', 'He told me I am brilliant.'], correctAnswer: 'He told me that I was brilliant.', explanation: '"said to" becomes "told" when there is a listener. "You" becomes "I" because the listener is "me".', errorType: 'reporting_verb' },
    { directSpeech: 'I said to the boys, "You should do your duty."', context: 'Plural listener', options: ['they should', 'you should', 'I should', 'we should'], correctAnswer: 'I told the boys that they should do their duty.', explanation: 'You -> they (the boys).', errorType: 'pronoun' },
    { directSpeech: 'Rama said to the girl, "I know you and your aunt."', context: 'Multiple pronouns', options: ['he knew her and her aunt', 'I knew her and her aunt', 'he knew you and your aunt', 'he knows her and her aunt'], correctAnswer: 'Rama told the girl that he knew her and her aunt.', explanation: 'I -> he (Rama); you/your -> her (the girl).', errorType: 'pronoun' },
    { directSpeech: 'He said to me, "I don\'t believe you."', context: 'Negative statement', options: ['he didn\'t believe me', 'he doesn\'t believe me', 'I didn\'t believe you', 'he hadn\'t believed me'], correctAnswer: 'He told me that he didn\'t believe me.', explanation: 'Proper shifts for both speaker and listener.', errorType: 'pronoun' }
  ]),
  'mod-5': generateSet(5, [
    { directSpeech: 'He said, "I will meet you tomorrow."', context: 'Future time', options: ['the next day', 'tomorrow', 'that day', 'the previous day'], correctAnswer: 'He said that he would meet him the next day.', explanation: 'tomorrow -> the next day.', errorType: 'time_place' },
    { directSpeech: 'She said, "I met him yesterday."', context: 'Past time', options: ['the previous day', 'yesterday', 'that day', 'tomorrow'], correctAnswer: 'She said that she had met him the previous day.', explanation: 'yesterday -> the previous day; met -> had met.', errorType: 'time_place' },
    { directSpeech: 'The teacher said, "I am busy now."', context: 'Current time', options: ['then', 'now', 'today', 'that time'], correctAnswer: 'The teacher said that she was busy then.', explanation: 'now -> then.', errorType: 'time_place' },
    { directSpeech: 'He said, "I met this man two days ago."', context: 'Relative time', options: ['two days before', 'two days ago', 'that day', 'two days earlier'], correctAnswer: 'He said that he had met that man two days before.', explanation: 'ago -> before.', errorType: 'time_place' }
  ]),
  'mod-6': generateSet(6, [
    { directSpeech: 'He said, "I bought this book."', context: 'Demonstrative', options: ['that book', 'this book', 'those books', 'the book'], correctAnswer: 'He said that he had bought that book.', explanation: 'this -> that.', errorType: 'time_place' },
    { directSpeech: 'She said, "These are my notes."', context: 'Plural demonstrative', options: ['those were', 'these were', 'those are', 'that was'], correctAnswer: 'She said that those were her notes.', explanation: 'these -> those.', errorType: 'time_place' },
    { directSpeech: 'He said, "Come here at once."', context: 'Place shift', options: ['to go there', 'to come here', 'to come there', 'to go here'], correctAnswer: 'He told him to go there at once.', explanation: 'come -> go; here -> there.', errorType: 'time_place' },
    { directSpeech: 'She said, "I live here."', context: 'Place shift', options: ['lived there', 'lived here', 'lives there', 'had lived here'], correctAnswer: 'She said that she lived there.', explanation: 'here -> there.', errorType: 'time_place' }
  ]),
  'mod-7': generateSet(7, [
    { directSpeech: 'He said, "I will finish it tonight."', context: 'Will shift', options: ['would finish it that night', 'will finish it tonight', 'would finish it tonight', 'should finish it that night'], correctAnswer: 'He said that he would finish it that night.', explanation: 'will -> would; tonight -> that night.', errorType: 'tense' },
    { directSpeech: 'She said, "I can swim very fast."', context: 'Can shift', options: ['could swim', 'can swim', 'might swim', 'should swim'], correctAnswer: 'She said that she could swim very fast.', explanation: 'can -> could.', errorType: 'tense' },
    { directSpeech: 'He said, "It may rain tomorrow."', context: 'May shift', options: ['might rain the next day', 'may rain tomorrow', 'might rain tomorrow', 'could rain the next day'], correctAnswer: 'He said that it might rain the next day.', explanation: 'may -> might; tomorrow -> next day.', errorType: 'tense' },
    { directSpeech: 'He said, "I could not find my keys."', context: 'Already past modal', options: ['could not find', 'cannot find', 'could not found', 'had not could find'], correctAnswer: 'He said that he could not find his keys.', explanation: 'could is already past form, so it stays could.', errorType: 'no_change' }
  ]),
  'mod-8': generateSet(8, [
    { directSpeech: 'The servant says, "Tea is ready."', context: 'Present reporting', options: ['is ready', 'was ready', 'has been ready', 'were ready'], correctAnswer: 'The servant says that tea is ready.', explanation: 'Reporting verb "says" is present tense, so no tense change happens.', errorType: 'no_change' },
    { directSpeech: 'He says, "I am glad to be here."', context: 'Present reporting', options: ['he is glad', 'he was glad', 'I am glad', 'he is glad (told)'], correctAnswer: 'He says that he is glad to be here this evening.', explanation: 'No backshift needed.', errorType: 'no_change' },
    { directSpeech: 'The teacher will say, "That boy was dull."', context: 'Future reporting', options: ['the boy was dull', 'the boy had been dull', 'the boy is dull', 'the boy would be dull'], correctAnswer: 'The teacher will say that the boy was dull.', explanation: 'Future reporting verb "will say" also blocks backshift.', errorType: 'no_change' },
    { directSpeech: 'She tells me, "I have finished."', context: 'Present reporting', options: ['she has finished', 'she had finished', 'I have finished', 'she finished'], correctAnswer: 'She tells me that she has finished her homework.', explanation: 'have finished stays has finished (present perfect).', errorType: 'no_change' }
  ]),
  'mod-9': generateSet(9, [
    { directSpeech: 'The teacher said, "The sun rises in the east."', context: 'Scientific Fact', options: ['rises', 'rose', 'had risen', 'rising'], correctAnswer: 'The teacher said that the sun rises in the east.', explanation: 'Universal truths keep present tense even with past reporting verbs.', errorType: 'no_change' },
    { directSpeech: 'He said, "Two and two make four."', context: 'Math Fact', options: ['make', 'made', 'makes', 'had made'], correctAnswer: 'He said that two and two make four.', explanation: 'Mathematical truths do not change.', errorType: 'no_change' },
    { directSpeech: 'Sita said, "Virtue is its own reward."', context: 'Moral Truth', options: ['is', 'was', 'had been', 'be'], correctAnswer: 'Sita said that virtue is its own reward.', explanation: 'Moral sayings remain in present tense.', errorType: 'no_change' },
    { directSpeech: 'He said, "She always wakes up early."', context: 'Habitual Fact', options: ['wakes', 'woke', 'had woken', 'waking'], correctAnswer: 'He said that she always wakes up early.', explanation: 'Habitual actions keep their tense.', errorType: 'no_change' }
  ])
};
