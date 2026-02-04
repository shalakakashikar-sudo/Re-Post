import { LearnTopic } from './types';

export const timePlaceContent: LearnTopic = {
  id: 'time-place',
  moduleId: 12,
  category: 'Advanced',
  title: 'The Time & Place Map',
  shortTitle: 'Time & Place',
  exitSkill: 'Convert time and place markers.',
  icon: '📍',
  description: 'Words indicating nearness shift to distance when the message is reported from a new location/time.',
  why: 'The speaker\'s "here" is usually the reporter\'s "there".',
  directExample: 'She said, "I will finish this today."',
  indirectExample: 'She said that she would finish that that day.',
  wittyRemark: 'Updating the Delivery Map.',
  waffleTip: 'Yesterday becomes "the previous day". Now becomes "then"!',
  // Wrap infographic in an array and rename to infographics
  infographics: [{
    header: 'Exhaustive Near-to-Far Table',
    rows: [
      { label: 'Now / Today', value: 'Then / That day' },
      { label: 'Yesterday', value: 'The previous day / The day before' },
      { label: 'Tomorrow', value: 'The next day / The following day' },
      { label: 'Tonight', value: 'That night' },
      { label: 'Last week / year', value: 'The previous week / year' },
      { label: 'Here / This / These', value: 'There / That / Those' },
      { label: 'Ago', value: 'Before' }
    ]
  }],
  quiz: [
    {
      id: 'tp1',
      category: 'Location',
      directSpeech: 'He said, "I live here."',
      context: '(Reported from another city)',
      options: [
        'He said that he lived here.',
        'He said that he lives there.',
        'He said that he lived there.',
        'He says he lives there.'
      ],
      correctAnswer: 'He said that he lived there.',
      explanation: 'When reported from elsewhere, "here" must shift to "there".',
      errorType: 'time_place'
    }
  ]
};