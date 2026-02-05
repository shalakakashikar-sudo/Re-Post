import { LearnTopic } from './types';
import { quizImperatives } from './quiz_imperatives';

export const imperativeTopics: LearnTopic[] = [
  {
    id: 'mod-15',
    moduleId: 15,
    category: 'Imperatives',
    title: 'Positive Commands',
    shortTitle: 'Positive Orders',
    exitSkill: 'Convert direct orders and instructions using to + infinitive.',
    icon: '💂',
    description: 'Direct orders and instructions where the subject "you" is implied. The reporting verb must match the authority of the speaker.',
    why: 'Imperatives use "to + V1" instead of the connector "that". This bridges the reporting verb directly to the action.',
    directExample: 'He said to the servant, "Leave my house at once."',
    indirectExample: 'He ordered the servant to leave his house at once.',
    waffleTip: 'Tone Guide: Neutral (told, asked), Strong (ordered, commanded). Harsh tone? Use ordered!',
    wittyRemark: 'No "that" bridge here! Just hop over with "to", squeak!',
    infographics: [{
      header: 'Command Pattern',
      rows: [
        { label: 'Reporting Verb', value: '"said to" → ordered / told / commanded' },
        { label: 'Verb Shift', value: 'Original verb → to + V1 (to-infinitive)' },
        { label: 'Connector', value: 'NO "that" is used; replaced by "to"' },
        { label: 'Punctuation', value: 'Remove quotes, add full stop' }
      ]
    }],
    quiz: quizImperatives['mod-15']
  },
  {
    id: 'mod-16',
    moduleId: 16,
    category: 'Imperatives',
    title: 'Requests (Please / Polite Tone)',
    shortTitle: 'Polite Requests',
    exitSkill: 'Convert polite commands by using "requested" and removing "please/kindly".',
    icon: '🙏',
    description: 'Instructions containing "please" or "kindly". The reporting verb absorbs the politeness.',
    why: '"Please" disappears because "requested" already carries that meaning. Repeating both is redundant.',
    directExample: 'He said to me, "Please give me a glass of water."',
    indirectExample: 'He requested me to give him a glass of water.',
    waffleTip: 'Memory Aid: Please = Request. If you see "please", think "requested"!',
    wittyRemark: 'Drop the "Please", the verb is doing the heavy lifting now!',
    infographics: [{
      header: 'Polite Request Rules',
      rows: [
        { label: 'Polite Cue', value: '"Please" or "Kindly"' },
        { label: 'Reporting Verb', value: 'requested / begged / implored' },
        { label: 'Action', value: 'REMOVE the word "please" from the report' },
        { label: 'Verb', value: 'to + V1' }
      ]
    }],
    quiz: quizImperatives['mod-16']
  },
  {
    id: 'mod-17',
    moduleId: 17,
    category: 'Imperatives',
    title: 'Negative Commands',
    shortTitle: 'Negative Orders',
    exitSkill: 'Convert "Don\'t" to "not to" or use the verb "forbade".',
    icon: '🚫',
    description: 'Instructions telling someone NOT to do something. "Don\'t" must be handled carefully with "not to".',
    why: 'The negation "not" must come BEFORE the "to" connector. Alternatively, "forbade" means "prohibited", so "not" isn\'t needed.',
    directExample: 'The mother said to the child, "Don\'t touch the hot pan."',
    indirectExample: 'The mother warned the child not to touch the hot pan.',
    waffleTip: 'Don\'t → not to. Never say "to not"! Unless you use "forbade", then omit "not".',
    wittyRemark: 'Put "Not" in its place! Right before the "to"!',
    infographics: [{
      header: 'Negation Logic',
      rows: [
        { label: 'Standard', value: 'ordered / told / asked + not to' },
        { label: 'Warning Tone', value: 'warned + not to' },
        { label: 'Forbidden', value: 'forbade to (NO "not" allowed with forbade!)' },
        { label: 'Example', value: '"Don\'t run" → forbade them to run' }
      ]
    }],
    quiz: quizImperatives['mod-17']
  },
  {
    id: 'mod-18',
    moduleId: 18,
    category: 'Imperatives',
    title: 'Advice, Warning & Prohibition',
    shortTitle: 'Advice & Warn',
    exitSkill: 'Choose the correct reporting verb based on the intent of the instruction.',
    icon: '💡',
    description: 'Instructions that serve as guidance, alarm, or formal bans. The reporting verb tells the whole story.',
    why: 'A report is more accurate when it describes the speaker\'s intention (Advice, Warning, etc.).',
    directExample: 'The coach said to the team, "Practice every day without fail."',
    indirectExample: 'The coach instructed the team to practice every day without fail.',
    waffleTip: 'Read the sentence out loud! Is it a suggestion? A danger alert? A ban?',
    wittyRemark: 'Listen to the tone to pick the right stamp!',
    infographics: [{
      header: 'Tone Compass',
      rows: [
        { label: 'Advice', value: 'advised / suggested' },
        { label: 'Warning', value: 'warned' },
        { label: 'Prohibition', value: 'forbade / prohibited from (V-ing)' },
        { label: 'Instruction', value: 'instructed / taught' }
      ]
    }],
    quiz: quizImperatives['mod-18']
  },
  {
    id: 'mod-19',
    moduleId: 19,
    category: 'Imperatives',
    title: 'Suggestions (Let / Let\'s / Let me)',
    shortTitle: 'Suggestions',
    exitSkill: 'Convert suggestions starting with "Let\'s" vs individual requests starting with "Let me".',
    icon: '🤝',
    description: '"Let\'s" indicates a collective suggestion. "Let me" is usually a personal request.',
    why: '"Let\'s" implies "we should", so we report it using "suggested that they should".',
    directExample: 'He said, "Let\'s celebrate this victory."',
    indirectExample: 'He suggested that they should celebrate that victory.',
    waffleTip: 'Let\'s = Suggestion. Always think "suggested"! Let me = Request to let.',
    wittyRemark: 'Let\'s do it! Squeak! We suggest that we should!',
    infographics: [{
      header: 'The "Let" Mapping',
      rows: [
        { label: '"Let\'s do X"', value: 'suggested that they should do X' },
        { label: '"Let me do X"', value: 'asked / requested to do X' },
        { label: '"Let him do X"', value: 'suggested / allowed that he should do X' },
        { label: 'Alternative', value: 'suggested + V-ing (suggested going)' }
      ]
    }],
    quiz: quizImperatives['mod-19']
  }
];