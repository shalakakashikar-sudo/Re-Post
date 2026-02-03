import { LearnTopic } from './types';
import { quizImperatives } from './quiz_imperatives';

export const imperativeTopics: LearnTopic[] = [
  {
    id: 'mod-15',
    moduleId: 15,
    category: 'Imperatives',
    title: 'Positive Commands',
    shortTitle: 'Commands',
    exitSkill: 'Convert direct orders using to-infinitives.',
    icon: '💂',
    description: 'Orders and instructions use reporting verbs like "ordered", "commanded", or "told" followed by "to + verb".',
    why: 'Imperatives don\'t use the connector "that". They use the "to-infinitive" to connect the instruction.',
    directExample: 'He said to the servant, "Leave at once."',
    indirectExample: 'He ordered the servant to leave at once.',
    waffleTip: 'said to → ordered + to + verb.',
    wittyRemark: 'No "that" bridge here! Use the "to" shortcut!',
    infographic: {
      header: 'Positive Order Manual',
      rows: [
        { label: 'Verb Choice', value: 'ordered / commanded / told / charged' },
        { label: 'Connector', value: 'Change quotes to "to"' },
        { label: 'Verb Form', value: 'to + V1 (base form)' },
        { label: 'Example', value: '"Go!" → to go' }
      ]
    },
    quiz: quizImperatives['mod-15']
  },
  {
    id: 'mod-16',
    moduleId: 16,
    category: 'Imperatives',
    title: 'Requests (Please/Kindly)',
    shortTitle: 'Requests',
    exitSkill: 'Convert polite requests and remove redundant words.',
    icon: '🙏',
    description: 'When you see "Please" or "Kindly", use "requested" or "implored". Remove "Please" from the indirect sentence.',
    why: 'The reporting verb "requested" already shows the politeness, so the word "please" is no longer needed.',
    directExample: 'He said, "Please give me a glass of water."',
    indirectExample: 'He requested me to give him a glass of water.',
    waffleTip: 'Please = Requested. Don\'t keep both!',
    wittyRemark: 'Drop the "Please", the verb "Requested" is doing all the heavy lifting!',
    infographic: {
      header: 'Polite Request Route',
      rows: [
        { label: 'Verb Choice', value: 'requested / begged / implored / entreated' },
        { label: 'Action', value: 'REMOVE "please" / "kindly"' },
        { label: 'Connector', value: 'to + V1' },
        { label: 'Example', value: '"Please wait" → requested to wait' }
      ]
    },
    quiz: quizImperatives['mod-16']
  },
  {
    id: 'mod-17',
    moduleId: 17,
    category: 'Imperatives',
    title: 'Negative Commands',
    shortTitle: 'Negative Orders',
    exitSkill: 'Convert "Don\'t" to "not to" or use "forbade".',
    icon: '🚫',
    description: 'Negative commands use "not to" + verb. Alternatively, use the reporting verb "forbade" (which already means "ordered not to").',
    why: 'You must place "not" before the "to-infinitive" to negate the action correctly.',
    directExample: 'He said, "Do not make a noise."',
    indirectExample: 'He asked them not to make a noise.',
    waffleTip: 'Don\'t → not to. Never say "to not"!',
    wittyRemark: 'Put "Not" in its place! Right before "to"!',
    infographic: {
      header: 'Negation Stop Sign',
      rows: [
        { label: 'Standard', value: 'ordered / told + not to' },
        { label: 'Alternative', value: 'forbade / prohibited + to (No "not")' },
        { label: 'Warning', value: 'Never use "not" with "forbade"' },
        { label: 'Example', value: '"Don\'t go" → forbade to go / ordered not to go' }
      ]
    },
    quiz: quizImperatives['mod-17']
  },
  {
    id: 'mod-18',
    moduleId: 18,
    category: 'Imperatives',
    title: 'Advice & Warnings',
    shortTitle: 'Advice',
    exitSkill: 'Choose reporting verbs based on the tone of instruction.',
    icon: '💡',
    description: 'Identify if the instruction is helpful (advised) or a safety alert (warned).',
    why: 'Using a specific reporting verb conveys the exact feeling and context of the speaker.',
    directExample: 'The doctor said, "Do not eat spicy food."',
    indirectExample: 'The doctor advised the patient not to eat spicy food.',
    waffleTip: 'Tone is key! Advised, Warned, or Urged.',
    wittyRemark: 'Listen to the tone to pick the right verb!',
    infographic: {
      header: 'The Tone Compass',
      rows: [
        { label: 'Helpful info', value: 'advised / suggested' },
        { label: 'Danger / Alarm', value: 'warned / cautioned' },
        { label: 'Moral duty', value: 'exhorted / urged' },
        { label: 'Structure', value: 'to / not to + V1' }
      ]
    },
    quiz: quizImperatives['mod-18']
  },
  {
    id: 'mod-19',
    moduleId: 19,
    category: 'Imperatives',
    title: 'Suggestions (Let\'s)',
    shortTitle: 'Suggestions',
    exitSkill: 'Convert "Let\'s" using suggested that + they should.',
    icon: '🤝',
    description: '"Let\'s" indicates a collective proposal. Use "suggested that they should" or "suggested + V-ing".',
    why: '"Let\'s" implies "you and I", so the report needs to reflect a joint future action.',
    directExample: 'He said, "Let\'s go for a walk."',
    indirectExample: 'He suggested that they should go for a walk.',
    waffleTip: 'Let\'s = Suggested that... should.',
    wittyRemark: 'Let\'s do it! We suggest that we should!',
    infographic: {
      header: 'The Suggestion Loop',
      rows: [
        { label: 'Verb Choice', value: 'suggested / proposed' },
        { label: 'Structure A', value: 'that + they/we + should + V1' },
        { label: 'Structure B', value: 'suggested + V-ing (e.g., suggested going)' },
        { label: 'Let us (Alone)', value: 'If no "s", use "to let"' }
      ]
    },
    quiz: quizImperatives['mod-19']
  }
];
