import { LearnTopic } from './types';

export const introContent: LearnTopic = {
  id: 'core-vision',
  moduleId: 0,
  category: 'Foundations',
  title: 'Introduction to Re-Post!',
  shortTitle: 'The Mission',
  exitSkill: 'Identify the differences between Direct and Indirect speech perspectives.',
  icon: '📮',
  description: 'Welcome to the Post Office! Direct speech repeats actual words; Indirect speech reports the meaning from a new time and place.',
  why: 'In formal writing and exams, we report events without quotation marks by shifting perspective to match the reporter.',
  directExample: 'Ram said, "I will meet you today."',
  indirectExample: 'Ram said that he would meet me that day.',
  wittyRemark: 'Mastering the art of reporting messages!',
  waffleTip: 'Indirect speech NEVER uses quotation marks! Squeak!',
  infographics: [{
    header: 'Core Transformation Elements',
    rows: [
      { label: 'Reporting Clause', value: 'Introduces the speaker (e.g., He said).' },
      { label: 'Reported Clause', value: 'The actual message converted into a statement.' },
      { label: 'Quotation Marks', value: 'Always removed in the indirect form.' },
      { label: 'Connector', value: 'A bridge like "that", "if", or "to" used to join the clauses.' }
    ]
  }],
  quiz: [
    {
      id: 'i1',
      category: 'Foundations',
      directSpeech: 'He said, "I am busy now."',
      context: 'Which of the following is the correct Indirect form?',
      options: ['He said that he is busy now.', 'He said that he was busy then.', 'He told that I am busy now.', 'He said that he was busy now.'],
      correctAnswer: 'He said that he was busy then.',
      explanation: 'Squeak! We need three shifts: Pronoun (I -> he), Tense (am -> was), and Time (now -> then).',
      errorType: 'general'
    },
    {
      id: 'i2',
      category: 'Foundations',
      directSpeech: 'Defining the delivery:',
      context: 'What is the main purpose of "Indirect Speech"?',
      options: ['To repeat the exact sounds someone made.', 'To report the meaning of words from a different time/place.', 'To keep quotation marks safe and sound.', 'To talk to Waffle about sunflower seeds.'],
      correctAnswer: 'To report the meaning of words from a different time/place.',
      explanation: 'Indirect speech is like a postal summary—it carries the meaning even when the original scene is over!',
      errorType: 'sentence_type'
    },
    {
      id: 'i3',
      category: 'Foundations',
      directSpeech: 'Spotting the parts:',
      context: 'In "He said that he was ill," which part is the Reporting Clause?',
      options: ['that he was ill', 'He said', 'was ill', 'He'],
      correctAnswer: 'He said',
      explanation: 'The Reporting Clause tells us WHO spoke. It is the address label on the parcel!',
      errorType: 'structure'
    },
    {
      id: 'i4',
      category: 'Foundations',
      directSpeech: 'Postal Protocol:',
      context: 'When moving from Direct to Indirect, what happens to the quotation marks?',
      options: ['They are changed to brackets.', 'They are moved to the end of the sentence.', 'They are completely removed.', 'They are kept only for special emphasis.'],
      correctAnswer: 'They are completely removed.',
      explanation: 'Once a message is "Re-Posted", it loses its original packaging (the quotation marks)!',
      errorType: 'structure'
    },
    {
      id: 'i5',
      category: 'Foundations',
      directSpeech: 'The Bridge:',
      context: 'Which word acts as a typical connector for reporting basic statements?',
      options: ['if', 'to', 'that', 'what'],
      correctAnswer: 'that',
      explanation: 'For standard statements, "that" is the primary bridge between the speaker and the message.',
      errorType: 'structure'
    },
    {
      id: 'i6',
      category: 'Foundations',
      directSpeech: 'The TRPT Mantra:',
      context: 'What does the first "T" in TRPT stand for?',
      options: ['Time', 'Tense', 'Tone', 'Topic'],
      correctAnswer: 'Tense',
      explanation: 'Tense refers to the "Backshift"—moving the verb one step back in time.',
      errorType: 'general'
    },
    {
      id: 'i7',
      category: 'Foundations',
      directSpeech: 'The TRPT Mantra:',
      context: 'What does the "R" in TRPT stand for?',
      options: ['Reported Speech', 'Reporting Verb', 'Rule', 'Recipient'],
      correctAnswer: 'Reporting Verb',
      explanation: 'Reporting Verb refers to changing "said to" into "told", "asked", etc.',
      errorType: 'general'
    },
    {
      id: 'i8',
      category: 'Foundations',
      directSpeech: 'The TRPT Mantra:',
      context: 'What does the "P" in TRPT stand for?',
      options: ['Punctuation', 'Place', 'Pronoun', 'Past'],
      correctAnswer: 'Pronoun',
      explanation: 'Pronoun refers to shifting "I" or "You" based on the speaker and listener.',
      errorType: 'general'
    },
    {
      id: 'i9',
      category: 'Foundations',
      directSpeech: 'The TRPT Mantra:',
      context: 'What does the final "T" in TRPT stand for?',
      options: ['Tense', 'Timing', 'Time and Place', 'Truth'],
      correctAnswer: 'Time and Place',
      explanation: 'Time and Place refers to shifting "today" to "that day" or "here" to "there".',
      errorType: 'general'
    },
    {
      id: 'i10',
      category: 'Foundations',
      directSpeech: 'The SQCEM Trick:',
      context: 'What is the very first thing you should do before converting a sentence?',
      options: ['Change the tense.', 'Remove the quotes.', 'Identify the sentence type.', 'Check for sunflower seeds.'],
      correctAnswer: 'Identify the sentence type.',
      explanation: 'SQCEM (Statement, Question, Command, Exclamation, Mixed) determines your whole strategy!',
      errorType: 'sentence_type'
    },
    {
      id: 'i11',
      category: 'Foundations',
      directSpeech: 'The Distance Rule:',
      context: 'Why do words like "this" and "here" change to "that" and "there"?',
      options: ['To make the sentence longer.', 'To show distance in time and place from the original speech.', 'Because Waffle prefers far-away places.', 'To follow the "Tense" rule.'],
      correctAnswer: 'To show distance in time and place from the original speech.',
      explanation: 'Reporting happens later, often elsewhere. Nearness words must shift to distance words.',
      errorType: 'time_place'
    },
    {
      id: 'i12',
      category: 'Foundations',
      directSpeech: 'The Question Bridge:',
      context: 'Which connector is used for Yes/No questions instead of "that"?',
      options: ['to', 'if / whether', 'because', 'who'],
      correctAnswer: 'if / whether',
      explanation: 'Yes/No questions use "if" or "whether" to bridge the reporting and reported clauses.',
      errorType: 'structure'
    },
    {
      id: 'i13',
      category: 'Foundations',
      directSpeech: 'The Command Bridge:',
      context: 'What connector is used for reporting orders and requests?',
      options: ['that', 'if', 'to', 'for'],
      correctAnswer: 'to',
      explanation: 'Commands and requests use the "to + infinitive" structure (e.g., to go, to stay).',
      errorType: 'structure'
    },
    {
      id: 'i14',
      category: 'Foundations',
      directSpeech: 'Identification:',
      context: 'Which of these is an "Exclamatory" sentence?',
      options: ['What are you doing?', 'What a lovely surprise!', 'Please leave now.', 'I am going home.'],
      correctAnswer: 'What a lovely surprise!',
      explanation: 'Exclamations show strong emotion and usually end with an exclamation mark.',
      errorType: 'sentence_type'
    },
    {
      id: 'i15',
      category: 'Foundations',
      directSpeech: 'Identification:',
      context: 'Which of these is an "Imperative" sentence?',
      options: ['Did you see it?', 'Hurrah! We won!', 'Close the window immediately.', 'The earth is round.'],
      correctAnswer: 'Close the window immediately.',
      explanation: 'Imperative sentences give orders, requests, or advice.',
      errorType: 'sentence_type'
    },
    {
      id: 'i16',
      category: 'Foundations',
      directSpeech: 'Backshift Logic:',
      context: 'If the reporting verb is "says" (Present), do we change the tense inside?',
      options: ['Yes, always.', 'No, never.', 'Only if Waffle is hungry.', 'Only for questions.'],
      correctAnswer: 'No, never.',
      explanation: 'Tense backshift only happens when the reporting verb is in the PAST (said, told).',
      errorType: 'no_change'
    },
    {
      id: 'i17',
      category: 'Foundations',
      directSpeech: 'Pronoun Logic:',
      context: 'If Ram says "I am busy," and you report it, "I" becomes:',
      options: ['I', 'You', 'He', 'They'],
      correctAnswer: 'He',
      explanation: 'You are reporting what Ram said about himself, so "I" becomes "He".',
      errorType: 'pronoun'
    },
    {
      id: 'i18',
      category: 'Foundations',
      directSpeech: 'Punctuation Shift:',
      context: 'What happens to a question mark (?) in Indirect speech?',
      options: ['It stays at the end.', 'It moves to the start.', 'It becomes a full stop (.).', 'It becomes an exclamation mark (!).'],
      correctAnswer: 'It becomes a full stop (.).',
      explanation: 'All reported sentences become statements, so they must end with a full stop.',
      errorType: 'structure'
    },
    {
      id: 'i19',
      category: 'Foundations',
      directSpeech: 'Reporting Verbs:',
      context: 'When "said to me" is converted, it usually becomes:',
      options: ['said me', 'asked me', 'told me', 'told to me'],
      correctAnswer: 'told me',
      explanation: '"said to" + Object becomes "told" in statements.',
      errorType: 'reporting_verb'
    },
    {
      id: 'i20',
      category: 'Foundations',
      directSpeech: 'Final Check:',
      context: 'Which of these sentences is in "Direct Speech"?',
      options: ['He said that he was happy.', 'He said, "I am happy."', 'He told me he was happy.', 'He was happy, he said.'],
      correctAnswer: 'He said, "I am happy."',
      explanation: 'Direct speech uses quotation marks to show exact words spoken.',
      errorType: 'structure'
    }
  ]
};