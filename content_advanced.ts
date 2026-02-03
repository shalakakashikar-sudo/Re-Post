import { LearnTopic } from './types';
import { quizAdvanced } from './quiz_advanced';

export const advancedTopics: LearnTopic[] = [
  {
    id: 'mod-23',
    moduleId: 23,
    category: 'Advanced',
    title: 'Conditional Sentences',
    shortTitle: 'Conditionals',
    exitSkill: 'Convert If-clauses accurately across all types.',
    icon: '🖇️',
    description: 'Conditional sentences have specific backshift rules. Type 2 "were" usually stays "were" to keep the hypothetical mood.',
    why: 'Conditionals represent imaginary or real possibilities; their structure must be preserved to keep the meaning.',
    directExample: 'He said, "If it rains, I will not go."',
    indirectExample: 'He said that if it rained, he would not go.',
    waffleTip: 'Type 1 shifts back. Type 2/3 stays largely the same.',
    wittyRemark: 'The "If" condition travels through time too!',
    infographic: {
      header: 'Conditional Time Map',
      rows: [
        { label: 'Type 1 (Real)', value: 'is/will → was/would (Full Backshift)' },
        { label: 'Type 2 (Hypothetical)', value: 'were/would → stays were/would (No Change)' },
        { label: 'Type 3 (Impossible)', value: 'had been/would have → No Change' },
        { label: 'Subjunctive', value: 'If I were you → If he were him' }
      ]
    },
    quiz: quizAdvanced['mod-23']
  },
  {
    id: 'mod-24',
    moduleId: 24,
    category: 'Advanced',
    title: 'Mixed Sentences',
    shortTitle: 'Mixed',
    exitSkill: 'Convert sentences combining different types in one report.',
    icon: '🌀',
    description: 'A single quote may contain a statement, a question, and a command. Break them apart and connect them with "and".',
    why: 'Mixed sentences require multiple rules to be applied in order.',
    directExample: 'He said, "Be quiet and listen to me."',
    indirectExample: 'He urged them to be quiet and listen to him.',
    waffleTip: 'Convert each clause one by one, then join them.',
    wittyRemark: 'A grammar smoothie! Blend all the rules!',
    infographic: {
      header: 'The Mixed Strategy',
      rows: [
        { label: 'Step 1', value: 'Break quote into logical parts' },
        { label: 'Step 2', value: 'Identify type (SQCEM) for each part' },
        { label: 'Step 3', value: 'Apply rule for each part separately' },
        { label: 'Step 4', value: 'Connect parts with "and / adding that / and asked"' }
      ]
    },
    quiz: quizAdvanced['mod-24']
  },
  {
    id: 'mod-25',
    moduleId: 25,
    category: 'Advanced',
    title: 'Quoted Speech within Speech',
    shortTitle: 'Nested Quotes',
    exitSkill: 'Flatten multiple layers of reporting into one.',
    icon: '📦',
    description: 'If a quote contains another quote, both must be flattened into indirect speech.',
    why: 'Indirect speech should be a smooth single narrative without internal quotation marks.',
    directExample: 'He said, "My teacher told me, \'Work hard.\'"',
    indirectExample: 'He said that his teacher had told him to work hard.',
    waffleTip: 'Quotes inside quotes? Flatten both layers!',
    wittyRemark: 'A box within a box! Unpack them both!',
    infographic: {
      header: 'Nested Level Control',
      rows: [
        { label: 'Direct', value: 'Speaker A says "Speaker B said \'Words\'"' },
        { label: 'Indirect', value: 'Speaker A reported that Speaker B had told...' },
        { label: 'Quotes', value: 'Remove ALL quotation marks' },
        { label: 'Action', value: 'Work from outer layer to inner layer' }
      ]
    },
    quiz: quizAdvanced['mod-25']
  },
  {
    id: 'mod-26',
    moduleId: 26,
    category: 'Advanced',
    title: 'Parenthetical Clauses',
    shortTitle: 'Split Clauses',
    exitSkill: 'Rearrange split reporting clauses for a smooth report.',
    icon: '✂️',
    description: 'In books, "he said" often splits a sentence. In indirect speech, the reporting clause must move to the very front.',
    why: 'Indirect reports always start with the messenger (the reporter).',
    directExample: '"I am," he said, "very tired."',
    indirectExample: 'He said that he was very tired.',
    waffleTip: 'Move the "he said" snippet to the front first!',
    wittyRemark: 'Rearrange before you Re-Post!',
    infographic: {
      header: 'The Reorder Rule',
      rows: [
        { label: 'Direct A', value: '"Go home," said the mother.' },
        { label: 'Direct B', value: '"Wait," he said, "I am coming."' },
        { label: 'Indirect Rule', value: 'Always: (Reporting Clause) + that + (Reported)' },
        { label: 'Result', value: 'He said that he was coming and asked to wait.' }
      ]
    },
    quiz: quizAdvanced['mod-26']
  }
];
