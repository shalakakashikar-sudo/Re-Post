import { LearnTopic } from './types';
import { quizExclamations } from './quiz_exclamations';

export const exclamationTopics: LearnTopic[] = [
  {
    id: 'mod-20',
    moduleId: 20,
    category: 'Exclamations',
    title: 'Joy & Sorrow',
    shortTitle: 'Emotions',
    exitSkill: 'Map interjections to "exclaimed with joy/sorrow".',
    icon: '🎉',
    description: 'Interjections like "Hurrah" or "Alas" are removed. Their feeling is moved into the reporting verb.',
    why: 'In indirect speech, we describe the feeling rather than repeating the sound effects.',
    directExample: 'The boy said, "Hurrah! We won!"',
    indirectExample: 'The boy exclaimed with joy that they had won.',
    waffleTip: 'Hurrah = Joy, Alas = Sorrow, Bravo = Praise.',
    wittyRemark: 'Squeak! Swap the sounds for feelings!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'The Postal Interjection Map',
      rows: [
        { label: 'Hurrah! / Ha!', value: 'exclaimed with joy / delight' },
        { label: 'Alas! / Oh!', value: 'exclaimed with sorrow / grief' },
        { label: 'Bravo!', value: 'applauded / praised / exclaimed with applause' },
        { label: 'Phoo! / Ugh!', value: 'exclaimed with contempt / disgust' },
        { label: 'What! / How!', value: 'exclaimed with surprise / wonder' }
      ]
    }],
    quiz: quizExclamations['mod-20']
  },
  {
    id: 'mod-21',
    moduleId: 21,
    category: 'Exclamations',
    title: 'Surprise & Wonder',
    shortTitle: 'Surprise',
    exitSkill: 'Convert exclamatory "What/How" to intensifying "very/great".',
    icon: '😲',
    description: 'Exclamations starting with "What" or "How" indicate intensity. Remove the Wh-word and use "very" or "great".',
    why: 'The Wh-word acts as a volume knob. In reports, we just say "it was very loud" instead of asking "how loud it was".',
    directExample: 'He said, "What a lovely rose!"',
    indirectExample: 'He exclaimed that it was a very lovely rose.',
    waffleTip: 'What/How → Very/Great. No Question Mark!',
    wittyRemark: 'Turn the volume up with "Very"!',
    // Wrap infographic in an array and rename to infographics
    infographics: [{
      header: 'Intensity Scaling Table',
      rows: [
        { label: 'What a + Noun', value: 'shifts to → a great + Noun' },
        { label: 'What a + Adj + Noun', value: 'shifts to → a very + Adj + Noun' },
        { label: 'How + Adjective', value: 'shifts to → very + Adjective' },
        { label: 'Punctuation', value: 'Always remove [ ! ] and use a period [ . ]' }
      ]
    }],
    quiz: quizExclamations['mod-21']
  }
];