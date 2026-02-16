
import React from 'react';
import { WaffleMood } from './types';

export const WAFFLE_SVG = (className?: string, expression: WaffleMood = 'idle') => {
  // Logic for different parts of the face based on mood
  const isHappy = expression === 'happy' || expression === 'love' || expression === 'star-eyes' || expression === 'wink';
  const isExcited = expression === 'excited';
  const isSurprised = expression === 'surprised';
  const isThinking = expression === 'thinking';
  const isConfused = expression === 'confused';
  const isCool = expression === 'cool';
  const isStar = expression === 'star-eyes';
  const isLove = expression === 'love';
  const isWink = expression === 'wink';

  return (
    <svg viewBox="0 0 200 220" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Background Shadow */}
      <ellipse cx="100" cy="205" rx="45" ry="10" fill="rgba(0,0,0,0.1)" />

      {/* Body Fur (Thinner/Elegant Shape) */}
      <path d="M65 120 Q100 100 135 120 L145 195 Q100 210 55 195 Z" fill="#f39c12" /> {/* Main Orange */}
      <path d="M80 140 Q100 130 120 140 L115 190 Q100 200 85 190 Z" fill="#fdfaf0" /> {/* Cream Belly */}

      {/* Postal Uniform Jacket */}
      <path d="M65 125 Q100 105 135 125 L145 190 Q100 205 55 190 Z" fill="#2c3e50" /> {/* Navy Blue */}
      
      {/* Jacket Details */}
      <path d="M85 125 L100 145 L115 125" fill="#1e2b37" opacity="0.5" /> {/* Collar Shadow */}
      <circle cx="100" cy="165" r="3" fill="#f1c40f" /> {/* Button 1 */}
      <circle cx="100" cy="180" r="3" fill="#f1c40f" /> {/* Button 2 */}

      {/* Satchel Bag */}
      <path d="M130 150 L170 165 L165 195 L125 180 Z" fill="#8d6e63" stroke="#5d4037" strokeWidth="1" />
      <path d="M130 150 L170 165 L165 175 L125 160 Z" fill="#a1887f" /> {/* Bag Flap */}
      <path d="M65 135 L130 155" stroke="#5d4037" strokeWidth="5" strokeLinecap="round" opacity="0.7" /> {/* Strap */}

      {/* Hands holding Letter */}
      <g transform="translate(45, 140) rotate(-15)">
        <rect width="35" height="22" rx="2" fill="#fffef0" stroke="#d7ccc8" strokeWidth="0.5" />
        <path d="M0 0 L17.5 11 L35 0" fill="none" stroke="#d7ccc8" strokeWidth="0.5" />
        <circle cx="17.5" cy="6" r="2" fill="#e74c3c" opacity="0.4" /> {/* Wax Seal */}
        <circle cx="-2" cy="12" r="6" fill="#f39c12" /> {/* Paw hold */}
      </g>
      <circle cx="140" cy="165" r="6" fill="#f39c12" /> {/* Other Paw */}

      {/* Head */}
      <circle cx="100" cy="85" r="55" fill="#f39c12" /> {/* Orange Head */}
      <path d="M62 90 Q100 70 138 90 Q142 125 100 132 Q58 125 62 90" fill="#fdfaf0" /> {/* Cream Face */}

      {/* Round Hamster Ears */}
      <circle cx="55" cy="45" r="18" fill="#f39c12" />
      <circle cx="55" cy="45" r="12" fill="#d35400" opacity="0.3" />
      <circle cx="145" cy="45" r="18" fill="#f39c12" />
      <circle cx="145" cy="45" r="12" fill="#d35400" opacity="0.3" />

      {/* Postman Hat */}
      <path d="M55 58 Q100 25 145 58 L150 78 Q100 88 50 78 Z" fill="#2c3e50" /> {/* Navy Hat */}
      <rect x="50" y="75" width="100" height="8" rx="2" fill="#111" /> {/* Visor */}
      <circle cx="100" cy="50" r="8" fill="#f1c40f" stroke="#d4ac0d" strokeWidth="1" /> {/* Gold Badge */}
      <path d="M98 50 L100 47 L102 50 L100 53 Z" fill="#2c3e50" /> {/* Emblem Detail */}

      {/* Face Layer */}
      <g id="expressions">
        {/* Blushing (Kawaii Factor) */}
        {(isHappy || isExcited || isLove || isStar) && (
          <g opacity="0.5">
            <circle cx="75" cy="115" r="8" fill="#ff80ab" />
            <circle cx="125" cy="115" r="8" fill="#ff80ab" />
          </g>
        )}

        {/* Eyes Configuration */}
        <g id="eyes">
          {isCool ? (
            <path d="M65 85 H135 V102 Q100 115 65 102 Z" fill="#111" rx="5" />
          ) : isStar ? (
            <>
              <path d="M78 80 L82 92 L95 92 L84 100 L88 112 L78 105 L68 112 L72 100 L61 92 L74 92 Z" fill="#f1c40f" />
              <path d="M122 80 L126 92 L139 92 L128 100 L132 112 L122 105 L112 112 L116 100 L105 92 L118 92 Z" fill="#f1c40f" />
            </>
          ) : isLove ? (
            <>
              <path d="M78 85 Q78 75 88 75 Q98 75 98 85 Q98 100 78 115 Q58 100 58 85 Q58 75 68 75 Q78 75 78 85" fill="#e91e63" />
              <path d="M122 85 Q122 75 132 75 Q142 75 142 85 Q142 100 122 115 Q102 100 102 85 Q102 75 112 75 Q122 75 122 85" fill="#e91e63" />
            </>
          ) : isWink ? (
            <>
              <circle cx="78" cy="95" r="10" fill="#2d241e" />
              <circle cx="76" cy="92" r="3" fill="#fff" />
              <path d="M112 100 Q122 88 132 100" stroke="#2d241e" strokeWidth="5" fill="none" strokeLinecap="round" />
            </>
          ) : isHappy ? (
            <>
              <path d="M68 100 Q78 85 88 100" stroke="#2d241e" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M112 100 Q122 85 132 100" stroke="#2d241e" strokeWidth="6" fill="none" strokeLinecap="round" />
            </>
          ) : isSurprised ? (
            <>
              <circle cx="78" cy="95" r="12" fill="#2d241e" />
              <circle cx="122" cy="95" r="12" fill="#2d241e" />
              <circle cx="74" cy="91" r="4" fill="#fff" />
              <circle cx="118" cy="91" r="4" fill="#fff" />
            </>
          ) : isThinking ? (
            <>
              <circle cx="78" cy="95" r="10" fill="#2d241e" />
              <circle cx="122" cy="98" r="6" fill="#2d241e" />
              <path d="M70 80 Q80 75 90 82" stroke="#2d241e" strokeWidth="2" fill="none" />
            </>
          ) : isConfused ? (
            <>
              <circle cx="78" cy="100" r="5" fill="#2d241e" />
              <circle cx="122" cy="95" r="11" fill="#2d241e" />
              <path d="M110 80 Q125 75 140 85" stroke="#2d241e" strokeWidth="2" fill="none" />
            </>
          ) : (
            /* IDLE */
            <>
              <circle cx="78" cy="95" r="9" fill="#2d241e" />
              <circle cx="122" cy="95" r="9" fill="#2d241e" />
              <circle cx="75" cy="92" r="3" fill="#fff" />
              <circle cx="119" cy="92" r="3" fill="#fff" />
            </>
          )}
        </g>

        {/* Tiny Pink Nose */}
        <path d="M96 112 Q100 108 104 112 Q100 116 96 112" fill="#ff8a80" />

        {/* Mouth Configuration */}
        <g id="mouth">
          {isSurprised ? (
            <circle cx="100" cy="122" r="7" fill="#2d241e" />
          ) : isExcited ? (
            <path d="M90 118 Q100 135 110 118 Z" fill="#2d241e" />
          ) : isConfused || isThinking ? (
            <path d="M95 125 Q100 128 105 125" stroke="#2d241e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          ) : (
            <path d="M92 120 Q100 128 108 120" stroke="#2d241e" strokeWidth="3" fill="none" strokeLinecap="round" />
          )}
          {/* Kawaii Tooth */}
          {(isHappy || isExcited) && (
            <path d="M98 120 H102 V123 H98 Z" fill="#fff" />
          )}
        </g>
      </g>
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
