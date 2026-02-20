import { LearnTopic, QuizQuestion, TopicCategory, ErrorType } from './types';
import { introContent } from './content_intro';
import { foundationTopics } from './content_foundations';
import { statementTopics } from './content_statements';
import { questionTopics } from './content_questions';
import { imperativeTopics } from './content_imperatives';
import { exclamationTopics } from './content_exclamations';
import { advancedTopics } from './content_advanced';
import { masteryTopics } from './content_mastery';

// Utility to generate a quiz for a module if specific questions aren't provided
const generatePlaceholderQuiz = (moduleId: number, category: string): QuizQuestion[] => {
  return [
    {
      id: `q-${moduleId}-1`,
      category: category,
      directSpeech: 'He said, "I am working."',
      context: 'Standard backshift check',
      options: ['He said that he was working.', 'He said that he is working.', 'He told that he was working.', 'He says that he was working.'],
      correctAnswer: 'He said that he was working.',
      explanation: 'In past reporting, "am" becomes "was" and "I" becomes "he".',
      errorType: 'tense'
    }
  ];
};

const moduleDefinitions: Record<number, Partial<LearnTopic>> = {};

// Register structured content
moduleDefinitions[0] = introContent;
foundationTopics.forEach(t => { moduleDefinitions[t.moduleId] = t; });
statementTopics.forEach(t => { moduleDefinitions[t.moduleId] = t; });
questionTopics.forEach(t => { moduleDefinitions[t.moduleId] = t; });
imperativeTopics.forEach(t => { moduleDefinitions[t.moduleId] = t; });
exclamationTopics.forEach(t => { moduleDefinitions[t.moduleId] = t; });
advancedTopics.forEach(t => { moduleDefinitions[t.moduleId] = t; });
masteryTopics.forEach(t => { moduleDefinitions[t.moduleId] = t; });

const fullCurriculum: LearnTopic[] = [];

// Loop starts from 0 to include the Intro module
for (let i = 0; i <= 30; i++) {
  const def = moduleDefinitions[i] || {};
  const cat: TopicCategory = 
    i <= 2 ? 'Foundations' : 
    i <= 9 ? 'Statements' : 
    i <= 14 ? 'Questions' : 
    i <= 19 ? 'Imperatives' : 
    i <= 22 ? 'Exclamations' : 
    i <= 26 ? 'Advanced' : 'Mastery';

  fullCurriculum.push({
    id: def.id || `mod-${i}`,
    moduleId: i,
    category: cat,
    title: def.title || `Level ${i}: Topic`,
    shortTitle: def.shortTitle || `Lvl ${i}`,
    exitSkill: def.exitSkill || `Mastery of Level ${i} logic.`,
    icon: def.icon || '📘',
    description: def.description || `Study of ${cat} rules.`,
    why: def.why || "To maintain precision in reporting.",
    directExample: def.directExample || 'He said, "I am here."',
    indirectExample: def.indirectExample || 'He said that he was there.',
    waffleTip: def.waffleTip || 'Check the TRPT pillars!',
    wittyRemark: def.wittyRemark || 'Grammar is essential!',
    isReversal: def.isReversal,
    infographics: def.infographics || [{
      header: 'Transformation Table',
      rows: [
        { label: 'Tense', value: 'Shift back one step.' },
        { label: 'Pronoun', value: 'Align with speaker.' }
      ]
    }],
    quiz: def.quiz || generatePlaceholderQuiz(i, cat)
  });
}

export const ALL_LEARN_TOPICS = fullCurriculum;
export const MASTER_QUIZ_QUESTIONS = ALL_LEARN_TOPICS.flatMap(t => t.quiz);