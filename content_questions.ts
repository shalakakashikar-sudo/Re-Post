
import { LearnTopic } from './types';
import { quizQuestions } from './quiz_questions';

export const questionTopics: LearnTopic[] = [
  {
    id: 'mod-10',
    moduleId: 10,
    category: 'Questions',
    title: 'Yes/No Questions (Simple)',
    shortTitle: 'Yes/No Simple',
    exitSkill: 'Convert simple yes/no questions by flipping word order and using the if/whether connector.',
    icon: '❓',
    description: 'How to identify: It starts with a helping verb: is, are, was, were, do, does, did, have, has, had. These questions only expect a "Yes" or "No" answer.',
    why: 'The word order flips from question order to statement order because the reporter is making a statement about an inquiry.',
    directExample: 'He said to me, "Do you know the way?"',
    indirectExample: 'He asked me if I knew the way.',
    waffleTip: 'Helping verb moves AFTER the subject. This is critical!',
    wittyRemark: 'HV + Sub → Sub + HV. Flip it and stamp it!',
    infographics: [{
      header: 'Yes/No Question Logic',
      rows: [
        { label: 'Reporting Verb', value: '"said / said to" becomes "asked"' },
        { label: 'Connector', value: 'Add "if" or "whether" (Never use "that")' },
        { label: 'Order Flip', value: 'Helping Verb + Sub → Sub + Helping Verb' },
        { label: 'Punctuation', value: 'Question mark (?) becomes Full stop (.)' }
      ]
    }],
    quiz: quizQuestions['mod-10']
  },
  {
    id: 'mod-11',
    moduleId: 11,
    category: 'Questions',
    title: 'Yes/No Questions with Modals',
    shortTitle: 'Yes/No Modals',
    exitSkill: 'Convert modal-based yes/no questions while applying backshift rules.',
    icon: '💬',
    description: 'Interrogative sentences containing modal helping verbs. These work like simple yes/no questions but require the modal to backshift.',
    why: 'Modals follow the same past-shift rules as other verbs when reporting from a later time.',
    directExample: 'He said to me, "Can you help me?"',
    indirectExample: 'He asked me if I could help him.',
    waffleTip: 'Present modals (will, shall, can, may) change. Past modals stay!',
    wittyRemark: 'Can → Could, but Would stays Would!',
    infographics: [{
      header: 'Modal Question Rules',
      rows: [
        { label: 'Can you...?', value: 'asked if he/I COULD...' },
        { label: 'Will they...?', value: 'asked if they WOULD...' },
        { label: 'Shall I...?', value: 'asked if he SHOULD...' },
        { label: 'May I...?', value: 'asked if he MIGHT...' }
      ]
    }],
    quiz: quizQuestions['mod-11']
  },
  {
    id: 'mod-12',
    moduleId: 12,
    category: 'Questions',
    title: 'Wh-Questions (Subject as Answer)',
    shortTitle: 'Wh-Subject',
    exitSkill: 'Identify Wh-subject questions and convert without word order flips.',
    icon: '🧐',
    description: 'Questions where the Wh-word (Who, What) IS the subject of the sentence. If you remove the Wh-word, no other subject remains.',
    why: 'If the Wh-word is the subject, the order is already statement-like (Subject + Verb), so no flip is needed.',
    directExample: 'The teacher said, "Who broke the window?"',
    indirectExample: 'The teacher asked who had broken the window.',
    waffleTip: 'Cover the Wh-word. No subject left? No flip needed!',
    wittyRemark: 'When the Wh-word is the boss, it stays put!',
    infographics: [{
      header: 'Wh-Subject Pattern',
      rows: [
        { label: 'Identification', value: 'Wh-word IS the subject (no other person/thing doing action)' },
        { label: 'Connector', value: 'The Wh-word itself (No "if", "whether", or "that")' },
        { label: 'No Flip', value: 'Keep the original Subject + Verb structure' },
        { label: 'Example', value: 'Who broke...? → asked who had broken...' }
      ]
    }],
    quiz: quizQuestions['mod-12']
  },
  {
    id: 'mod-13',
    moduleId: 13,
    category: 'Questions',
    title: 'Wh-Questions (Object/Swap)',
    shortTitle: 'Wh-Swap',
    exitSkill: 'Identify Wh-words that are not subjects and apply the word order flip.',
    icon: '🔀',
    description: 'Wh-questions where Wh is NOT the subject (Where, When, Why, How). If you remove the Wh-word, another subject is present.',
    why: 'Because another subject exists, we must swap it with the helping verb to form a reported statement.',
    directExample: 'She said to me, "What are you doing?"',
    indirectExample: 'She asked me what I was doing.',
    waffleTip: 'Visual Trick: Wh-word + HV + Sub → Wh-word + Sub + HV.',
    wittyRemark: 'The big swap! Sub and HV change places!',
    infographics: [{
      header: 'The Wh-Order Flip',
      rows: [
        { label: 'Pattern', value: 'Wh + Helping Verb + Subject → Wh + Subject + HV' },
        { label: 'Connector', value: 'The Wh-word itself' },
        { label: 'Verb Change', value: '"said to" → "asked" or "wondered"' },
        { label: 'Example', value: 'Where are you...? → where I was...' }
      ]
    }],
    quiz: quizQuestions['mod-13']
  },
  {
    id: 'mod-14',
    moduleId: 14,
    category: 'Questions',
    title: 'Embedded & Polite Questions',
    shortTitle: 'Polite Ask',
    exitSkill: 'Convert polite and internal questions while maintaining statement word order.',
    icon: '🤵',
    description: 'Questions hidden inside polite requests or self-reflection (e.g., "Could you tell me...?", "Am I doing...?").',
    why: 'Polite inquiries are often already in indirect style. The word order is usually already correct for reporting.',
    directExample: 'She said, "Could you tell me where the library is?"',
    indirectExample: 'She asked if I could tell her where the library was.',
    waffleTip: '"Tell me what you want" is already in statement order!',
    wittyRemark: 'Polite parcels are already pre-sorted!',
    infographics: [{
      header: 'Embedded Rules',
      rows: [
        { label: 'Polite Offer', value: 'Would you like...? → asked if he would like...' },
        { label: 'Internal', value: 'Am I right? → wondered if he was right' },
        { label: 'Structure', value: 'Usually Subject + Verb order is already present' },
        { label: 'Note', value: 'Use "wondered" for thoughts instead of "asked"' }
      ]
    }],
    quiz: quizQuestions['mod-14']
  }
];
