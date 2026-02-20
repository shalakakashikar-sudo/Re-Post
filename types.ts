export type Section = 'home' | 'learn' | 'practice' | 'master-delivery' | 'quiz-setup';
export type ErrorType = 'tense' | 'pronoun' | 'time_place' | 'reporting_verb' | 'no_change' | 'sentence_type' | 'structure' | 'general';
export type TopicCategory = 'Foundations' | 'Statements' | 'Questions' | 'Imperatives' | 'Exclamations' | 'Advanced' | 'Mastery';
export type WaffleMood = 'happy' | 'thinking' | 'confused' | 'idle' | 'surprised' | 'excited' | 'wink' | 'cool' | 'love' | 'star-eyes';

export interface QuizQuestion {
  id: string;
  category: string;
  directSpeech: string;
  context: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  errorType: ErrorType;
}

export interface LearnTopic {
  id: string;
  moduleId: number;
  category: TopicCategory;
  title: string;
  shortTitle: string;
  exitSkill: string;
  icon: string;
  description: string;
  why: string;
  directExample: string;
  indirectExample: string;
  waffleTip: string;
  wittyRemark: string;
  isReversal?: boolean;
  infographics?: {
    header: string;
    rows: { label: string; value: string }[];
  }[];
  quiz: QuizQuestion[];
}