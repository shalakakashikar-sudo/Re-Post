import { LearnTopic } from './types';

export const tenseContent: LearnTopic = {
  id: 'tense-backshift',
  moduleId: 10,
  category: 'Statements',
  title: 'The Tense Stamp Route',
  shortTitle: 'Tense Backshift',
  exitSkill: 'Apply tense backshift rules.',
  icon: '⏰',
  description: 'When we report the past, the verbs move one step back in time.',
  why: 'The original "now" is now the "past" when the message is finally delivered.',
  directExample: 'He said, "I write letters."',
  indirectExample: 'He said that he wrote letters.',
  // Fix: Renamed visualMetaphor to wittyRemark to match LearnTopic interface
  wittyRemark: 'Updating the Tense Stamp on a parcel.',
  waffleTip: 'Present Simple becomes Past Simple. Past Simple becomes Past Perfect!',
  // Wrap infographic in an array and rename to infographics
  infographics: [{
    header: 'Stamp Transformation Table',
    rows: [
      { label: 'is / am / are', value: 'was / were' },
      { label: 'writes / write', value: 'wrote' },
      { label: 'is writing', value: 'was writing' },
      { label: 'wrote / has written', value: 'had written' },
      { label: 'will / can', value: 'would / could' }
    ]
  }],
  quiz: [
    {
      id: 't1',
      category: 'Statement',
      directSpeech: 'He said, "I do not like this movie."',
      context: '(Reported later that week)',
      options: [
        'He said that he does not like that movie.',
        'He said that he did not like that movie.',
        'He said that he did not like this movie.',
        'He told that he did not like that movie.'
      ],
      correctAnswer: 'He said that he did not like that movie.',
      explanation: '"Do not" shifts to "did not" and "this" shifts to "that".',
      errorType: 'tense'
    }
  ]
};