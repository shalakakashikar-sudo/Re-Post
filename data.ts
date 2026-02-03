import { LearnTopic, QuizQuestion } from './types';
import { foundationTopics } from './content_foundations';
import { statementTopics } from './content_statements';
import { questionTopics } from './content_questions';
import { imperativeTopics } from './content_imperatives';
import { exclamationTopics } from './content_exclamations';
import { advancedTopics } from './content_advanced';
import { masteryTopics } from './content_mastery';

// Aggregating all 30 modules from the Categorical Files
export const ALL_LEARN_TOPICS: LearnTopic[] = [
  ...foundationTopics,
  ...statementTopics,
  ...questionTopics,
  ...imperativeTopics,
  ...exclamationTopics,
  ...advancedTopics,
  ...masteryTopics
];

// Combine all quizzes for the Final Challenge
export const MASTER_QUIZ_QUESTIONS: QuizQuestion[] = ALL_LEARN_TOPICS.flatMap(topic => topic.quiz);
