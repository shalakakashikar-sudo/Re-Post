
import { QuizQuestion } from './types';

export const quizImperatives: Record<string, QuizQuestion[]> = {
  'mod-15': [
    { id: '15.1', category: 'Imperatives', directSpeech: 'Command Connector', context: 'Rule', options: ['if / whether', 'to + infinitive', 'that', 'which'], correctAnswer: 'to + infinitive', explanation: 'Imperatives use to-infinitives.', errorType: 'structure' },
    { id: '15.2', category: 'Imperatives', directSpeech: 'Give me your pencil.', context: 'Positive command', options: ['to give him my pencil.', 'to give me his pencil.', 'to give him your pencil.', 'that give him my pencil.'], correctAnswer: 'He asked me to give him my pencil.', explanation: 'me -> him; your -> my.', errorType: 'pronoun' },
    { id: '15.3', category: 'Imperatives', directSpeech: 'Call the first witness.', context: 'Judge command', options: ['said to call', 'asked to call', 'commanded to call', 'told the first witness'], correctAnswer: 'The judge commanded to call the first witness.', explanation: 'Use authoritative reporting verbs.', errorType: 'reporting_verb' },
    { id: '15.4', category: 'Imperatives', directSpeech: 'Wait here until I come back.', context: 'Complex imperative', options: ['wait there until she came back...', 'wait here until she comes...', 'wait there until I come...', 'wait there until she came back (to not)'], correctAnswer: 'She told him to wait there until she came back, and not to speak to anyone.', explanation: 'Here -> there; come -> came.', errorType: 'time_place' }
  ],
  'mod-16': [
    { id: '16.1', category: 'Imperatives', directSpeech: 'please', context: 'Reporting verb choice', options: ['ordered', 'commanded', 'requested', 'warned'], correctAnswer: 'requested', explanation: 'Please implies request.', errorType: 'reporting_verb' },
    { id: '16.2', category: 'Imperatives', directSpeech: 'Please give me a glass of water.', context: 'Basic request', options: ['ordered', 'requested', 'asked', 'told'], correctAnswer: 'He requested me to give him a glass of water.', explanation: 'Use requested + to-infinitive.', errorType: 'reporting_verb' },
    { id: '16.3', category: 'Imperatives', directSpeech: 'Please explain this question to me.', context: 'Polite request', options: ['requested... this question', 'requested... that question', 'told... that question', 'requested... to him'], correctAnswer: 'I requested the teacher to explain that question to me.', explanation: 'this -> that.', errorType: 'time_place' },
    { id: '16.4', category: 'Imperatives', directSpeech: 'Please wait here... don\'t call.', context: 'Mixed request', options: ['requested to wait there... not to call', 'wait here...', 'ordered to wait...', 'wait there till I returned...'], correctAnswer: 'She requested him to wait there till she returned, and not to call anyone.', explanation: 'here -> there; return -> returned.', errorType: 'time_place' }
  ],
  'mod-17': [
    { id: '17.1', category: 'Imperatives', directSpeech: 'Do not / Don\'t', context: 'Negation rule', options: ['becomes "to"', 'becomes "not to"', 'removed completely', 'becomes "if not"'], correctAnswer: 'becomes "not to"', explanation: 'Negatives use not before to.', errorType: 'structure' },
    { id: '17.2', category: 'Imperatives', directSpeech: 'Do not run in the classroom.', context: 'Basic negative', options: ['to not run', 'not to run', 'to run', 'warned to run'], correctAnswer: 'The teacher told them not to run in the classroom.', explanation: 'not to + V1.', errorType: 'structure' },
    { id: '17.3', category: 'Imperatives', directSpeech: 'Do not make a noise.', context: 'Student negative', options: ['asked... not to', 'asked... to not', 'told... not to', 'forbade... not to'], correctAnswer: 'He asked the students not to make a noise.', explanation: 'Standard negative imperative.', errorType: 'structure' },
    { id: '17.4', category: 'Imperatives', directSpeech: 'Don\'t touch... don\'t go.', context: 'Double negative warning', options: ['warned... not to... and not to', 'to not... and to not', 'not to... and told him not to', 'not to... and not going'], correctAnswer: 'The mother warned the child not to touch the hot pan and not to go near the stove.', explanation: 'Parallel structure for both commands.', errorType: 'structure' }
  ],
  'mod-18': [
    { id: '18.1', category: 'Imperatives', directSpeech: 'Work hard.', context: 'Tone choice', options: ['warned', 'forbade', 'advised', 'prohibited'], correctAnswer: 'advised', explanation: 'Helpful guidance = advice.', errorType: 'reporting_verb' },
    { id: '18.2', category: 'Imperatives', directSpeech: 'Do not eat spicy food.', context: 'Doctor advice', options: ['advised... not to', 'warned... not to', 'told... to eat', 'forbade... to eat'], correctAnswer: 'The doctor advised the patient not to eat spicy food.', explanation: 'Medical guidance.', errorType: 'reporting_verb' },
    { id: '18.3', category: 'Imperatives', directSpeech: 'Do not use mobile phones.', context: 'Principal prohibition', options: ['advised', 'warned', 'prohibited from using', 'requested'], correctAnswer: 'The principal prohibited the students from using mobile phones in school.', explanation: 'Prohibit uses from + V-ing.', errorType: 'reporting_verb' },
    { id: '18.4', category: 'Imperatives', directSpeech: 'Never come late again.', context: 'Strict boss tone', options: ['advised', 'requested', 'warned', 'suggested'], correctAnswer: 'The boss warned the employee never to come late again.', explanation: 'Context (angry boss) = warning.', errorType: 'reporting_verb' }
  ],
  'mod-19': [
    { id: '19.1', category: 'Imperatives', directSpeech: 'Let\'s go for a walk.', context: 'Identify type', options: ['command', 'suggestion', 'question', 'warning'], correctAnswer: 'suggestion', explanation: "Let's implies a proposal.", errorType: 'sentence_type' },
    { id: '19.2', category: 'Imperatives', directSpeech: 'Let\'s go for a walk.', context: 'Basic suggestion', options: ['suggested that they should', 'told them to go', 'asked them to go', 'suggested that he should'], correctAnswer: 'He suggested that they should go for a walk.', explanation: "Let's -> suggested that they should.", errorType: 'reporting_verb' },
    { id: '19.3', category: 'Imperatives', directSpeech: 'Let me go.', context: 'Permission request', options: ['suggested', 'shouted to them to let him go', 'asked them to let me go', 'shouted to let him go'], correctAnswer: 'He shouted to them to let him go.', explanation: "Let me (not let's) is a request.", errorType: 'reporting_verb' },
    { id: '19.4', category: 'Imperatives', directSpeech: 'Let\'s celebrate... let him join.', context: 'Mixed suggestion', options: ['suggested... they should... and that he should', 'this victory...', 'told them to...', 'asked him to...'], correctAnswer: 'She suggested that they should celebrate that victory, and that he should join them too.', explanation: 'this -> that; pronoun alignment.', errorType: 'reporting_verb' }
  ]
};
