import { LearnTopic } from './types';
import { quizExclamations } from './quiz_exclamations';

export const exclamationTopics: LearnTopic[] = [
  {
    id: 'mod-20',
    moduleId: 20,
    category: 'Exclamations',
    title: 'Exclamations of Joy & Sorrow',
    shortTitle: 'Joy & Sorrow',
    exitSkill: 'Convert emotions based on interjections like Hurrah and Alas.',
    icon: '🎉',
    description: 'Interjections (Hurrah!, Alas!) are removed and their meaning is captured in the reporting phrase (exclaimed with joy/sorrow).',
    why: 'In indirect speech, the exclamation point (!) must become a full stop (.) and the emotion is described by the verb.',
    directExample: 'The boys said, "Hurrah! We have won the match."',
    indirectExample: 'The boys exclaimed with joy that they had won the match.',
    waffleTip: 'Memory Aid: Hurrah = Happy. Alas = Sad. Simple, squeak!',
    wittyRemark: 'Swap the sounds for descriptive feelings!',
    infographics: [{
      header: 'The Emotion Mapping',
      rows: [
        { label: 'Hurrah! / Aha!', value: 'exclaimed with joy / happiness' },
        { label: 'Alas! / Ah!', value: 'exclaimed with sorrow / grief' },
        { label: 'Rule 1', value: 'Remove the interjection word' },
        { label: 'Rule 2', value: 'Add "that" connector' }
      ]
    }],
    quiz: quizExclamations['mod-20']
  },
  {
    id: 'mod-21',
    moduleId: 21,
    category: 'Exclamations',
    title: 'Surprise, Wonder & Approval',
    shortTitle: 'Wonder & Bravo',
    exitSkill: 'Convert exclamatory "What/How" to intensifying "very" and "Bravo" to "applauded".',
    icon: '😲',
    description: 'Exclamations showing amazement or praise. Special intensity words like "very" are added to replace "What a" or "How".',
    why: 'The words "What" and "How" lose their question-like appearance and turn into descriptors of intensity.',
    directExample: 'He said, "What a terrible storm it is!"',
    indirectExample: 'He exclaimed that it was a very terrible storm.',
    waffleTip: 'Memory Aid: "What/How = Very". Keep the intensity alive!',
    wittyRemark: 'Turn up the volume of the report with a "Very"!',
    infographics: [{
      header: 'Surprise & Approval Rules',
      rows: [
        { label: 'What...! / How...!', value: 'exclaimed with surprise / wonder' },
        { label: 'Bravo!', value: 'applauded ... saying that' },
        { label: 'Intensity', value: 'Add "very" to the reported clause' },
        { label: 'Example', value: '"How clever!" → exclaimed she was very clever' }
      ]
    }],
    quiz: quizExclamations['mod-21']
  },
  {
    id: 'mod-22',
    moduleId: 22,
    category: 'Exclamations',
    title: 'Greetings, Wishes & Prayers',
    shortTitle: 'Social Wishes',
    exitSkill: 'Convert social greetings and prayers using specialized verbs like wished, bade, and prayed.',
    icon: '🙏',
    description: 'Social and spiritual expressions don\'t follow the standard "exclaimed + that" pattern. They use specific social verbs.',
    why: 'Greetings like "Good morning" are actions of wishing, so the reporting verb reflects that social act.',
    directExample: 'She said to me, "May God bless you!"',
    indirectExample: 'She prayed that God might bless me.',
    waffleTip: 'Good morning = wished. Good bye = bade. May God... = prayed.',
    wittyRemark: 'Postal social etiquette: Stamp with the right wish!',
    infographics: [{
      header: 'Social & Prayer Map',
      rows: [
        { label: 'Morning/Evening', value: 'wished ... good morning/evening' },
        { label: 'Good bye', value: 'bade ... good-bye / farewell' },
        { label: 'May God...', value: 'prayed that God MIGHT...' },
        { label: 'Modals', value: 'May → Might' }
      ]
    }],
    quiz: quizExclamations['mod-22']
  }
];