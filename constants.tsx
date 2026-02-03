
import React from 'react';
import { WaffleMood } from './types';

export const WAFFLE_SVG = (className?: string, expression: WaffleMood = 'idle') => {
  const isHappy = expression === 'happy' || expression === 'excited' || expression === 'star-eyes';
  const isExcited = expression === 'excited';
  const isConfused = expression === 'confused' || expression === 'thinking';
  const isSurprised = expression === 'surprised';
  const isWink = expression === 'wink';
  const isCool = expression === 'cool';
  const isLove = expression === 'love';
  const isStar = expression === 'star-eyes';

  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="100" cy="180" rx="45" ry="12" fill="black" opacity="0.15" />
      
      {/* Body */}
      <ellipse cx="100" cy="120" rx="64" ry="54" fill="#3e2723" />
      <ellipse cx="100" cy="120" rx="60" ry="50" fill="#cc9966" />
      <circle cx="100" cy="110" r="48" fill="#3e2723" />
      <circle cx="100" cy="110" r="45" fill="#cc9966" />
      
      {/* Pouch Area - Small size to fit inner circle */}
      <ellipse cx="100" cy="132" rx="30" ry="18" fill="#fff3e0" stroke="#3e2723" strokeWidth="1" />
      
      {/* Blush Cheeks */}
      <circle cx="72" cy="118" r="9" fill="#ff4081" opacity="0.4" />
      <circle cx="128" cy="118" r="9" fill="#ff4081" opacity="0.4" />

      {/* Ears */}
      <circle cx="60" cy="75" r="18" fill="#3e2723" />
      <circle cx="60" cy="75" r="15" fill="#a1887f" />
      <circle cx="140" cy="75" r="18" fill="#3e2723" />
      <circle cx="140" cy="75" r="15" fill="#a1887f" />
      
      {/* Hat */}
      <rect x="60" y="65" width="80" height="20" fill="#1a237e" rx="4" stroke="#000" strokeWidth="1.5" />
      <path d="M60 65 Q100 35 140 65" fill="#1a237e" stroke="#000" strokeWidth="1.5" />
      {/* Heart Emblem on Hat */}
      <path d="M100 58 Q100 52 104 52 Q108 52 108 58 Q108 62 100 68 Q92 62 92 58 Q92 52 96 52 Q100 52 100 58" fill="#ff1744" stroke="#000" strokeWidth="0.5" />
      <circle cx="100" cy="65" r="4" fill="#ffd600" stroke="#000" strokeWidth="0.8" />
      
      {/* Eyes */}
      {isStar ? (
        <>
          <path d="M65 95 L75 105 L85 95 L75 85 Z" fill="#ffd600" stroke="#000" strokeWidth="1.5" />
          <path d="M115 95 L125 105 L135 95 L125 85 Z" fill="#ffd600" stroke="#000" strokeWidth="1.5" />
        </>
      ) : isLove ? (
        <>
          <path d="M65 100 Q65 85 75 85 Q85 85 85 100 Q85 110 75 120 Q65 110 65 100" fill="#d32f2f" stroke="#000" strokeWidth="1.5" />
          <path d="M115 100 Q115 85 125 85 Q135 85 135 100 Q135 110 125 120 Q115 110 115 100" fill="#d32f2f" stroke="#000" strokeWidth="1.5" />
        </>
      ) : isWink ? (
        <>
          <circle cx="75" cy="100" r="8" fill="#000" />
          <circle cx="72" cy="97" r="2.5" fill="#fff" />
          <path d="M115 100 Q125 90 135 100" stroke="#000" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      ) : isCool ? (
        <rect x="60" y="92" width="80" height="15" fill="#000" rx="3" />
      ) : isExcited ? (
        <>
          <path d="M70 100 Q75 90 80 100" stroke="#000" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M120 100 Q125 90 130 100" stroke="#000" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="75" cy="100" r="8" fill="#000" />
          <circle cx="125" cy="100" r="8" fill="#000" />
          {/* Eye Shine */}
          <circle cx="72" cy="97" r="3" fill="#fff" />
          <circle cx="122" cy="97" r="3" fill="#fff" />
          <circle cx="78" cy="103" r="1.5" fill="#fff" opacity="0.6" />
          <circle cx="128" cy="103" r="1.5" fill="#fff" opacity="0.6" />
        </>
      )}
      
      {/* Nose */}
      <circle cx="100" cy="118" r="6" fill="#ff8a80" stroke="#3e2723" strokeWidth="1.5" />
      
      {/* Mouth */}
      {isHappy ? (
        <path d="M85 130 Q100 150 115 130" stroke="#3e2723" strokeWidth="4" fill="none" strokeLinecap="round" />
      ) : isSurprised ? (
        <circle cx="100" cy="135" r="8" fill="#3e2723" />
      ) : (
        <path d="M90 130 Q100 138 110 130" stroke="#3e2723" strokeWidth="3" fill="none" strokeLinecap="round" />
      )}
    </svg>
  );
};

export const WAFFLE_DIALOGUE = {
  // Correct Answer: The "Post" was delivered successfully!
  correct: [
    "Squeak! Direct to the target!",
    "Correct! This message is perfectly re-posted!",
    "Postal perfection! You've got the knack!",
    "Bravo! My whiskers are twitching with joy!",
    "Stamp it! That's 100% correct!"
  ],
  
  // Incorrect Answer: The sorting machine jammed.
  incorrect: [
    "Oops! This letter got a bit lost. Try again!",
    "Squeak... not quite. Check the tense stamp!",
    "Return to sender! Let's try that one more time.",
    "A minor sorting error! Look at the rules again.",
    "Whiskers! That's not the right route. Try again!"
  ],

  // Specific Error Feedback: This is the "GPS" to get students back on track.
  errors: {
    tense: [
      "The tense stamp needs to move one step back!", 
      "Present verbs become past verbs in reports!", 
      "Check your time travel logic! Tense must shift."
    ],
    pronoun: [
      "Check the PRO Rule! (Pronoun-Reporting Verb-Object)", 
      "The address label (pronoun) needs a change!", 
      "Is that 'I' really a 'He' or 'She'?"
    ],
    reporting_verb: [
      "The delivery tone is off! Use 'asked', 'told', or 'ordered'.", 
      "Check the reporting verb stamp!", 
      "Was it a question? Use 'asked'!"
    ],
    time_place: [
      "The 'Near to Far' rule: 'Here' becomes 'There' on the map!", 
      "'Now' becomes 'Then' in the past!", 
      "Near words become far words!"
    ],
    no_change: [
      "Squeak! This fact is a permanent shipment. No tense change!", 
      "Universal truths stay in the present!", 
      "That's an immortal fact. Keep the tense!"
    ],
    sentence_type: [
      "Identify before you sort! Use the SQCEM Trick.", 
      "Is it a question or a statement? Spot the mark!", 
      "Check the SQCEM guide first!"
    ],
    structure: [
      "The skeleton is wobbly. Check the word order!", 
      "Statement order only in reports! No question-flips.", 
      "Check the word-order flip!"
    ],
    general: [
      "Check your postal manual for this module!", 
      "Review the TRPT mantra!", 
      "Concentrate! My whiskers believe in you!"
    ]
  },

  // Hints: A little nudge without giving the answer.
  hints: [
    "Look at the speaker. Who are they talking to?",
    "Check the punctuation at the end. Is it a '?' or a '.'?",
    "Think about the distance. Is it 'here' or 'there'?",
    "Present Simple? Shift it back to Past Simple!",
    "If you see 'please', the reporting verb should be 'requested'!"
  ],

  // Witty Remarks: Just for personality!
  witty_remarks: [
    "Squeak! I once re-posted a proverbs module in record time!",
    "A hamster's work is never done... especially grammar work!",
    "Is it time for a sunflower seed break yet?",
    "Direct speech is loud, indirect speech is proud!",
    "Don't let those quotation marks trip you up!",
    "I've got a pouch full of verbs for every occasion!",
    "Keep those whiskers clean and your tenses backshifted!",
    "Reporting is just storytelling with extra rules!",
    "Ready for another delivery of knowledge?",
    "I'm Waffle, the Post-Hamster, and I approve of this grammar!"
  ]
};
