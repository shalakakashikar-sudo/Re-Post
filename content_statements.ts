import { LearnTopic } from './types';
import { quizStatements } from './quiz_statements';

export const statementTopics: LearnTopic[] = [
  {
    id: 'mod-3',
    moduleId: 3,
    category: 'Statements',
    title: 'Simple Statements (No Object)',
    shortTitle: 'Basic Statements',
    exitSkill: 'Convert basic statements where no listener is mentioned.',
    icon: '✉️',
    description: 'When no listener is mentioned, the reporting verb "said" remains unchanged.',
    why: 'The connector "that" is added to join the clauses.',
    directExample: 'Rajan said, "I am ill."',
    indirectExample: 'Rajan said that he was ill.',
    waffleTip: 'No object? "said" stays "said".',
    wittyRemark: 'If no one is listening, "said" is just fine!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'The Statement Backshift Guide',
      rows: [
        { label: 'Present Simple', value: 'Goes to → Past Simple (writes → wrote)' },
        { label: 'Present Cont.', value: 'Goes to → Past Continuous (is writing → was writing)' },
        { label: 'Present Perfect', value: 'Goes to → Past Perfect (has written → had written)' },
        { label: 'Past Simple', value: 'Goes to → Past Perfect (wrote → had written)' },
        { label: 'Past Continuous', value: 'Goes to → Past Perfect Cont. (was writing → had been writing)' }
      ]
    }],
    quiz: quizStatements['mod-3']
  },
  {
    id: 'mod-4',
    moduleId: 4,
    category: 'Statements',
    title: 'Statements with Object (said to → told)',
    shortTitle: 'Object Statements',
    exitSkill: 'Apply the PRO Rule: 1st person follows Subject, 2nd follows Object.',
    icon: '👥',
    description: 'When a listener is present, "said to" must change to "told".',
    why: '"Told" is transitive and requires an object (the listener).',
    directExample: 'He said to me, "You are brilliant."',
    indirectExample: 'He told me that I was brilliant.',
    waffleTip: 'PRO Rule: 1st (Subject), 2nd (Object), 3rd (No change).',
    wittyRemark: 'A listener means it\'s time for "told"!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'The Exhaustive PRO Identity Rule',
      rows: [
        { label: '1st Person (I, we, my)', value: 'Follows Subject: shifts to match the Speaker.' },
        { label: '2nd Person (You, your)', value: 'Follows Object: shifts to match the Listener.' },
        { label: '3rd Person (He, she, it)', value: 'No change: identity remains stable.' },
        { label: 'Possessives', value: 'my → his/her; your → my/his/her; our → their.' }
      ]
    }],
    quiz: quizStatements['mod-4']
  }
];