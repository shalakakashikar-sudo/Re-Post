import { LearnTopic } from './types';
import { quizQuestions } from './quiz_questions';

export const questionTopics: LearnTopic[] = [
  {
    id: 'mod-10',
    moduleId: 10,
    category: 'Questions',
    title: 'Yes/No Questions (Simple)',
    shortTitle: 'Yes/No Questions',
    exitSkill: 'Convert HV-start questions using if/whether and statement order.',
    icon: '❓',
    description: 'Yes/No questions start with Helping Verbs (is, are, do, have). Use "asked" and the connector "if" or "whether".',
    why: 'Question word order (HV + Subject) must flip to statement order (Subject + HV) because the question mark is removed.',
    directExample: 'He said to me, "Do you know the way?"',
    indirectExample: 'He asked me if I knew the way.',
    waffleTip: 'Check the Word Order Flip! No "?" in indirect speech.',
    wittyRemark: 'Squeak! Flip the Helping Verb switch!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'Yes/No Questions Route',
      rows: [
        { label: 'Reporting Verb', value: 'said to → asked / inquired / wondered' },
        { label: 'Connector', value: 'Remove quotes, add "if" or "whether"' },
        { label: 'Word Order', value: 'Flip: (HV + Sub) → (Sub + HV)' },
        { label: 'Helping Verbs', value: 'Do / Does / Did are removed in statement order' }
      ]
    }],
    quiz: quizQuestions['mod-10']
  },
  {
    id: 'mod-11',
    moduleId: 11,
    category: 'Questions',
    title: 'Yes/No Questions with Modals',
    shortTitle: 'Modal Questions',
    exitSkill: 'Convert modal-based questions with backshifts.',
    icon: '🔧',
    description: 'Follow the Yes/No flip rule but also apply modal backshifts (will → would, can → could).',
    why: 'Modals also follow the time-distance rule.',
    directExample: 'She said to me, "Can you help me?"',
    indirectExample: 'She asked me if I could help her.',
    waffleTip: 'Will → Would, Can → Could, Shall → Should, May → Might.',
    wittyRemark: 'A modal question is just a Yes/No question in a fancy hat!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'Modal Questions Flip',
      rows: [
        { label: 'Can you', value: 'if I could' },
        { label: 'Will they', value: 'if they would' },
        { label: 'May I', value: 'if I might' },
        { label: 'Must we', value: 'if we had to' }
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
    exitSkill: 'Convert Wh-questions where the Wh-word is the boss.',
    icon: '👤',
    description: 'If the Wh-word is the subject of the sentence, NO word order flip is needed.',
    why: 'Since the Wh-word is already the subject, the sentence is already in a statement-like order.',
    directExample: 'He said, "Who broke the window?"',
    indirectExample: 'He asked who had broken the window.',
    waffleTip: 'Wh-Subject? No Flip! Just Tense Shift.',
    wittyRemark: 'When the Wh-word is the boss, it stays in place!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'The Boss Wh-Rule',
      rows: [
        { label: 'Condition', value: 'Wh-word (Who/What) is the Subject' },
        { label: 'Connector', value: 'The Wh-word itself (No "if")' },
        { label: 'Word Order', value: 'NO FLIP (Stay as S + V)' },
        { label: 'Example', value: 'Who ate? → who had eaten' }
      ]
    }],
    quiz: quizQuestions['mod-12']
  },
  {
    id: 'mod-13',
    moduleId: 13,
    category: 'Questions',
    title: 'Wh-Questions (Object/Adverb as Answer)',
    shortTitle: 'Wh-Swap',
    exitSkill: 'Convert standard Wh-questions with a word order swap.',
    icon: '🔀',
    description: 'If the Wh-word is not the subject, swap the Subject and Helping Verb.',
    why: 'In standard questions, the verb comes first. In indirect speech, the subject must come first.',
    directExample: 'She said to me, "What are you doing?"',
    indirectExample: 'She asked me what I was doing.',
    waffleTip: 'Swap the Subject and HV after the Wh-word!',
    wittyRemark: 'Flip it like a pancake after the Wh-word!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'The Wh-Swap Map',
      rows: [
        { label: 'Direct', value: 'Wh + HV + Sub' },
        { label: 'Indirect', value: 'Wh + Sub + HV' },
        { label: 'Where are they', value: 'where they were' },
        { label: 'How is he', value: 'how he was' }
      ]
    }],
    quiz: quizQuestions['mod-13']
  },
  {
    id: 'mod-14',
    moduleId: 14,
    category: 'Questions',
    title: 'Embedded & Polite Questions',
    shortTitle: 'Polite Questions',
    exitSkill: 'Handle soft, indirect-style direct questions.',
    icon: '🤵',
    description: 'Questions inside polite requests often already use statement word order.',
    why: 'Polite inquiries like "Could you tell me..." are already softer and closer to indirect structure.',
    directExample: 'He said, "Would you like some coffee?"',
    indirectExample: 'He asked if I would like some coffee.',
    waffleTip: 'Polite words (Could/Would) often stay as the main verb.',
    wittyRemark: 'Polite questions are already halfway there!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'Polite & Soft Inquiries',
      rows: [
        { label: 'Intro', value: 'Use "asked / wondered / wanted to know"' },
        { label: 'If/Whether', value: 'Used for polite choice questions' },
        { label: 'Order', value: 'Keep statement style throughout' },
        { label: 'Example', value: '"Can you...?" → if I could' }
      ]
    }],
    quiz: quizQuestions['mod-14']
  }
];