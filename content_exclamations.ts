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
    infographic: {
      header: 'Emotion Map',
      rows: [
        { label: 'Hurrah! / Ha!', value: 'exclaimed with joy / delight' },
        { label: 'Alas! / Oh!', value: 'exclaimed with sorrow / grief' },
        { label: 'Bravo!', value: 'applauded / praised / exclaimed with applause' },
        { label: 'Phoo! / Ugh!', value: 'exclaimed with contempt / disgust' }
      ]
    },
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
    infographic: {
      header: 'Wonder Transformation',
      rows: [
        { label: 'What a ...!', value: 'exclaimed that it was a very / great ...' },
        { label: 'How ...!', value: 'exclaimed that it was very ...' },
        { label: 'Nouns', value: 'What a fool! → a great fool' },
        { label: 'Adjectives', value: 'How nice! → very nice' }
      ]
    },
    quiz: quizExclamations['mod-21']
  },
  {
    id: 'mod-22',
    moduleId: 22,
    category: 'Exclamations',
    title: 'Greetings & Wishes',
    shortTitle: 'Greetings',
    exitSkill: 'Use "wished" or "bade" for social expressions.',
    icon: '👋',
    description: 'Social greetings and goodbyes use specific verbs like "wished", "baded", or "greeted".',
    why: 'Social conventions don\'t fit the "that" connector pattern well.',
    directExample: 'She said to me, "Good morning!"',
    indirectExample: 'She wished me good morning.',
    waffleTip: 'Good Morning = Wished. Good Bye = Bade farewell.',
    wittyRemark: 'Be a polite postman! Use the right greeting verb!',
    infographic: {
      header: 'Postal Greeting Protocol',
      rows: [
        { label: 'Good Morning / Evening', value: 'wished' },
        { label: 'Good Night / Bye', value: 'bade' },
        { label: 'Happy Birthday', value: 'wished' },
        { label: 'Thank you', value: 'thanked' },
        { label: 'Sorry', value: 'apologized' }
      ]
    },
    quiz: quizExclamations['mod-22']
  }
];
