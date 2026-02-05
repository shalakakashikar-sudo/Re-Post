
import { QuizQuestion } from './types';

const generateSet = (mod: number, baseData: Partial<QuizQuestion>[]): QuizQuestion[] => {
  return baseData.map((d, i) => ({
    id: `${mod}.${i + 1}`,
    category: 'Questions',
    directSpeech: d.directSpeech || '',
    context: d.context || '',
    options: d.options || [],
    correctAnswer: d.correctAnswer || '',
    explanation: d.explanation || '',
    errorType: d.errorType || 'general'
  }));
};

export const quizQuestions: Record<string, QuizQuestion[]> = {
  'mod-10': generateSet(10, [
    { directSpeech: 'He said to me, "Do you know the way?"', context: 'Simple Yes/No', options: ['He asked me if I knew the way.', 'He asked me if did I know the way.', 'He asked me that I knew the way.', 'He told me if I knew the way.'], correctAnswer: 'He asked me if I knew the way.', explanation: 'HV+Sub (Do you know) flips to Sub+V (I knew). Connector is "if".', errorType: 'structure' },
    { directSpeech: 'She asked, "Are you coming home with me?"', context: 'Continuous Yes/No', options: ['if I was coming home', 'if was I coming home', 'that I was coming home', 'whether you were coming home'], correctAnswer: 'She asked if I was coming home with her.', explanation: 'Pronoun shift (me -> her) and word order flip.', errorType: 'structure' },
    { directSpeech: 'The teacher said, "Have you finished your homework?"', context: 'Perfect Yes/No', options: ['if we had finished', 'if had we finished', 'that we finished', 'if we have finished'], correctAnswer: 'The teacher asked if we had finished our homework.', explanation: 'have finished -> had finished; order flips.', errorType: 'tense' },
    { directSpeech: 'Mother said to me, "Is everything alright?"', context: 'Basic Yes/No', options: ['asked me if everything was alright', 'asked me if was everything alright', 'told me if everything was', 'asked me that everything was'], correctAnswer: 'Mother asked me if everything was alright.', explanation: 'Simple is -> was shift with order flip.', errorType: 'structure' },
    { directSpeech: 'He said to us, "Will you listen to such a man?"', context: 'Future Yes/No', options: ['asked whether we would listen', 'asked whether will we listen', 'told us that we would', 'asked if we listen'], correctAnswer: 'He asked us whether we would listen to such a man.', explanation: 'will -> would; order flip.', errorType: 'tense' }
  ]),
  'mod-11': [
    { id: '11.1', category: 'Questions', directSpeech: 'He said to me, "Can you help me?"', context: 'Modal Yes/No', options: ['He asked me if I could help him.', 'He asked me if I can help him.', 'He asked me that I could help him.', 'He told me if I could help him.'], correctAnswer: 'He asked me if I could help him.', explanation: 'Can -> Could; order flip; pronoun me -> him.', errorType: 'tense' },
    { id: '11.2', category: 'Questions', directSpeech: 'She said, "Will you come to the party?"', context: 'Future Modal', options: ['She asked if he would come.', 'She asked if would he come.', 'She told that he would come.', 'She asked that he will come.'], correctAnswer: 'She asked if he would come to the party.', explanation: 'Will -> Would; order flip.', errorType: 'tense' },
    { id: '11.3', category: 'Questions', directSpeech: 'He said to me, "Would you like some coffee?"', context: 'Past Form Modal', options: ['He asked if I would like some coffee.', 'He asked if I will like some coffee.', 'He asked if would I like some coffee.', 'He told me that I would like.'], correctAnswer: 'He asked me if I would like some coffee.', explanation: 'Would is already past form, so it stays Would. Only the order flips.', errorType: 'no_change' },
    { id: '11.4', category: 'Questions', directSpeech: 'He asked, "Shall I open the window?"', context: 'Shall shift', options: ['if he should open', 'if he shall open', 'that he should open', 'if should he open'], correctAnswer: 'He asked if he should open the window.', explanation: 'Shall -> Should; order flip.', errorType: 'tense' },
    { id: '11.5', category: 'Questions', directSpeech: 'She said, "May I go home early?"', context: 'May shift', options: ['asked if she might', 'asked if she may', 'told she might', 'asked that she might'], correctAnswer: 'She asked if she might go home early.', explanation: 'May -> Might; order flip.', errorType: 'tense' }
  ],
  'mod-12': [
    { id: '12.1', category: 'Questions', directSpeech: 'The teacher said, "Who broke the window?"', context: 'Wh-Subject', options: ['asked who had broken', 'asked who did break', 'asked who had broken (flip)', 'asked who broke (no shift)'], correctAnswer: 'The teacher asked the students who had broken the window.', explanation: 'Who is the subject. No flip needed. broke -> had broken.', errorType: 'structure' },
    { id: '12.2', category: 'Questions', directSpeech: 'She said, "Who is your best friend?"', context: 'Wh-Subject be-verb', options: ['asked who his best friend was', 'asked who was his best friend', 'asked that who his friend was', 'told who his friend was'], correctAnswer: 'She asked who his best friend was.', explanation: 'Who is subject. Order remains S+V.', errorType: 'structure' },
    { id: '12.3', category: 'Questions', directSpeech: 'He said, "Who wrote this letter?"', context: 'Wh-Subject Past', options: ['asked who had written that letter', 'asked who wrote this letter', 'asked who had written this letter', 'asked that who wrote'], correctAnswer: 'He asked who had written that letter.', explanation: 'Who is subject. No flip. wrote -> had written; this -> that.', errorType: 'time_place' },
    { id: '12.4', category: 'Questions', directSpeech: 'Mother said, "Who ate the cake?"', context: 'Wh-Subject check', options: ['asked who had eaten', 'asked who did eat', 'asked that who had eaten', 'asked who ate'], correctAnswer: 'The mother asked who had eaten the cake.', explanation: 'Subject-Wh questions do not need auxiliary flip.', errorType: 'structure' },
    { id: '12.5', category: 'Questions', directSpeech: 'She said, "What happened yesterday?"', context: 'What-Subject', options: ['asked what had happened the previous day', 'asked what happened yesterday', 'asked what had happened yesterday', 'asked that what had happened'], correctAnswer: 'She asked what had happened the previous day.', explanation: '"What" is the subject. No flip. happened -> had happened; yesterday -> previous day.', errorType: 'time_place' }
  ],
  'mod-13': [
    { id: '13.1', category: 'Questions', directSpeech: 'She said to me, "What are you doing?"', context: 'Wh-Swap (Object)', options: ['asked what I was doing', 'asked what was I doing', 'asked that what I was doing', 'told what I was doing'], correctAnswer: 'She asked me what I was doing.', explanation: 'Wh-Swap: are you doing -> I was doing.', errorType: 'structure' },
    { id: '13.2', category: 'Questions', directSpeech: 'Ben said to me, "When will you return?"', context: 'Wh-Swap Future', options: ['asked when I would return', 'asked when would I return', 'asked when will you return', 'asked that when I would'], correctAnswer: 'Ben asked me when I would return.', explanation: 'Wh-Swap: will you -> I would.', errorType: 'structure' },
    { id: '13.3', category: 'Questions', directSpeech: 'The stranger asked, "Where do you live?"', context: 'Wh-Swap Present', options: ['asked where I lived', 'asked where did I live', 'asked where I live', 'asked that where I lived'], correctAnswer: 'The stranger asked where I lived.', explanation: 'Wh-Swap: do you live -> I lived.', errorType: 'structure' },
    { id: '13.4', category: 'Questions', directSpeech: 'She said to me, "When will you meet us again?"', context: 'Wh-Swap Mixed', options: ['asked when I would meet them again', 'asked when would I meet them', 'asked when will I meet them', 'asked when I would meet us'], correctAnswer: 'She asked me when I would meet them again.', explanation: 'will you -> I would; us -> them.', errorType: 'pronoun' },
    { id: '13.5', category: 'Questions', directSpeech: 'He said, "Why did you leave so early?"', context: 'Wh-Swap Past', options: ['asked why I had left so early', 'asked why did I leave', 'asked why I left', 'asked that why I had left'], correctAnswer: 'He asked why I had left so early.', explanation: 'did you leave -> I had left.', errorType: 'tense' }
  ],
  'mod-14': [
    { id: '14.1', category: 'Questions', directSpeech: 'He said to me, "Would you like to have some coffee?"', context: 'Polite Offer', options: ['asked me if I would like', 'asked me would I like', 'asked that I would like', 'requested to like coffee'], correctAnswer: 'He asked me if I would like to have some coffee.', explanation: 'Treat as yes/no question for conversion.', errorType: 'structure' },
    { id: '14.2', category: 'Questions', directSpeech: 'She said, "Could you tell me where the library is?"', context: 'Polite Request', options: ['asked if I could tell her where it was', 'asked could I tell her where it was', 'asked where was the library', 'asked if I can tell her where it is'], correctAnswer: 'She asked if I could tell her where the library was.', explanation: 'Embedded Wh-word also shifts back (is -> was).', errorType: 'structure' },
    { id: '14.3', category: 'Questions', directSpeech: 'He thought, "Am I doing the right thing?"', context: 'Internal Reflection', options: ['wondered if he was doing', 'asked if was he doing', 'wondered that he was doing', 'thought if he is doing'], correctAnswer: 'He wondered if he was doing the right thing.', explanation: '"Wondered" is the appropriate reporting verb for thoughts.', errorType: 'reporting_verb' },
    { id: '14.4', category: 'Questions', directSpeech: 'The teacher said, "Tell me who did this."', context: 'Embedded Command', options: ['asked to tell him who had done that', 'asked to tell me who did this', 'told to tell him who did that', 'asked that tell him who had done'], correctAnswer: 'The teacher asked me to tell him who had done that.', explanation: 'Command (to tell) + Embedded Wh-Subject (who had done).', errorType: 'structure' },
    { id: '14.5', category: 'Questions', directSpeech: 'She said, "Do you know where he is?"', context: 'Nested Question', options: ['asked if I knew where he was', 'asked if I knew where was he', 'asked that I knew where he was', 'asked if I know where he is'], correctAnswer: 'She asked if I knew where he was.', explanation: 'Both parts shift back.', errorType: 'tense' }
  ]
};
