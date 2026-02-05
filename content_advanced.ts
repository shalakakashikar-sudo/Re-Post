import { LearnTopic } from './types';
import { quizAdvanced } from './quiz_advanced';

export const advancedTopics: LearnTopic[] = [
  {
    id: 'mod-23',
    moduleId: 23,
    category: 'Advanced',
    title: 'Conditional Sentences',
    shortTitle: 'Conditionals',
    exitSkill: 'Convert If-clauses accurately across all three technical types.',
    icon: '🖇️',
    description: 'Conditional sentences have a special structure. Type 1 shifts back, Type 2 maintains subjunctive "were", and Type 3 stays in past perfect.',
    why: 'Type 2 "were" stays "were" because it is a mood (imaginary), not just a tense. Type 3 is already at the end of the timeline!',
    directExample: 'He said, "If it rains, I will not go."',
    indirectExample: 'He said that if it rained, he would not go.',
    waffleTip: 'Type 1: Shift back. Type 2: "Were" stays "Were". Type 3: No change, squeak!',
    wittyRemark: 'Imaginary situations have their own rules in the post office!',
    infographics: [{
      header: 'Conditional Type Rules',
      rows: [
        { label: 'Type 1 (Possible)', value: 'rains → rained | will → would' },
        { label: 'Type 2 (Imaginary)', value: '"were" stays "were" | "would" stays "would"' },
        { label: 'Type 3 (Past Unreal)', value: 'Already Past Perfect → NO change' },
        { label: 'Key Note', value: 'Check which "If" type it is before stamping!' }
      ]
    }],
    quiz: quizAdvanced['mod-23']
  },
  {
    id: 'mod-24',
    moduleId: 24,
    category: 'Advanced',
    title: 'Mixed Sentences',
    shortTitle: 'Mixed Types',
    exitSkill: 'Convert sentences that combine two or more sentence types using logical connectors.',
    icon: '🌀',
    description: 'A quote may combine a Command + Statement or a Question + Question. Break them apart and identify each separately.',
    why: 'A report is a smooth narrative. We use connectors like "and", "but", or "adding that" to bridge different moods.',
    directExample: 'He said, "Be quiet and listen to my words."',
    indirectExample: 'He urged them to be quiet and listen to his words.',
    waffleTip: 'Identify each clause separately (SQCEM), then join them with connectors!',
    wittyRemark: 'It\'s a grammar smoothie! Blend all the rules together!',
    infographics: [{
      header: 'The Mixed Strategy',
      rows: [
        { label: 'Step 1', value: 'Break the quote into logical parts' },
        { label: 'Step 2', value: 'Identify the SQCEM type for each part' },
        { label: 'Step 3', value: 'Apply the correct rule for each part' },
        { label: 'Step 4', value: 'Join with: "and", "but", "and asked", "adding that"' }
      ]
    }],
    quiz: quizAdvanced['mod-24']
  },
  {
    id: 'mod-25',
    moduleId: 25,
    category: 'Advanced',
    title: 'Quoted Speech within Speech',
    shortTitle: 'Nested Quotes',
    exitSkill: 'Flatten multiple layers of reporting into one smooth indirect sentence.',
    icon: '📦',
    description: 'When someone reports what a third person said, and those words are a quote. Flatten both layers into one smooth sentence.',
    why: 'Indirect speech must be a continuous report without internal quotation marks.',
    directExample: 'He said, "My teacher told me, \'Work hard.\'"',
    indirectExample: 'He said that his teacher had told him to work hard.',
    waffleTip: 'Flatten! Flatten! Flatten! Squeak! Never leave quotes inside quotes.',
    wittyRemark: 'A box within a box! Unpack them both for delivery!',
    infographics: [{
      header: 'Flattening Rules',
      rows: [
        { label: 'The Goal', value: 'Zero quotation marks in the final report' },
        { label: 'The Verb', value: 'Inner "said" usually shifts to "had told/said"' },
        { label: 'Inner Command', value: 'Convert to "to + V1"' },
        { label: 'Inner Question', value: 'Convert to "if / whether"' }
      ]
    }],
    quiz: quizAdvanced['mod-25']
  },
  {
    id: 'mod-26',
    moduleId: 26,
    category: 'Advanced',
    title: 'Parenthetical Clauses',
    shortTitle: 'Split Clauses',
    exitSkill: 'Reconstruct sentences where the reporting clause is split or at the end.',
    icon: '✂️',
    description: 'In stories, "he said" often splits the sentence. In reports, the reporting clause MUST move to the very front.',
    why: 'The reporting structure requires the Speaker + Reporting Verb to introduce the message.',
    directExample: '"I am," he said, "very tired."',
    indirectExample: 'He said that he was very tired.',
    waffleTip: 'Rearrange before you Re-Post! Always put "He said" at the start.',
    wittyRemark: 'Cut and paste! The messenger always leads!',
    infographics: [{
      header: 'Reordering Logic',
      rows: [
        { label: 'Split Type', value: '"Part 1," said he, "Part 2."' },
        { label: 'End Type', value: '"Message," said Gopal.' },
        { label: 'Action', value: 'Move "He said / Gopal said" to the absolute front' },
        { label: 'Connector', value: 'Join the split parts into one smooth "that" clause' }
      ]
    }],
    quiz: quizAdvanced['mod-26']
  }
];