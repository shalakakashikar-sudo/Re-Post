
import React from 'react';
import { WaffleMood } from './types';

export const WAFFLE_SVG = (className?: string, expression: WaffleMood = 'idle') => {
  const isHappy = expression === 'happy' || expression === 'excited' || expression === 'star-eyes' || expression === 'love' || expression === 'cool';
  const isExcited = expression === 'excited';
  const isConfused = expression === 'confused';
  const isThinking = expression === 'thinking';
  const isSurprised = expression === 'surprised';
  const isWink = expression === 'wink';
  const isCool = expression === 'cool';
  const isLove = expression === 'love';
  const isStar = expression === 'star-eyes';

  // Rich palette matching the provided reference image
  const colors = {
    fur: '#C4A484',       // Warm light brown
    furDark: '#8B5A2B',   // Darker brown for outlines
    furLight: '#FFF8F0',  // Creamy off-white patches
    jacket: '#5D77B3',    // Muted postal blue
    jacketDark: '#3D4F7F', // Deeper blue for outlines/tie
    bag: '#967969',       // Brown leather bag
    badge: '#FFD700',     // Golden yellow badge
    nose: '#F08080',      // Soft coral pink
    blush: '#FFB6C1',     // Rosy cheeks
    eyeBase: '#333333'    // Dark grey/black for eyes
  };

  return (
    <svg viewBox="0 0 220 240" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <style>{`
        @keyframes waveLeft {
          0%, 100% { transform: rotate(10deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes waveRight {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(-25deg); }
        }
        @keyframes tapFeet {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.85); }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .animate-wave-left { animation: waveLeft 1.5s ease-in-out infinite; transform-origin: 65px 158px; }
        .animate-wave-right { animation: waveRight 2s ease-in-out infinite; transform-origin: 155px 158px; }
        .animate-tap { animation: tapFeet 0.8s ease-in-out infinite; transform-origin: bottom; }
        .animate-blink { animation: blink 4s infinite; transform-origin: center; }
      `}</style>
      
      {/* 1. Ground Shadow */}
      <ellipse cx="110" cy="225" rx="55" ry="6" fill="#000" opacity="0.05" />
      
      {/* 2. Feet - Tapping Animation */}
      <g className="animate-tap">
        <ellipse cx="95" cy="222" rx="10" ry="6" fill={colors.furLight} stroke={colors.furDark} strokeWidth="1" />
        <ellipse cx="125" cy="222" rx="10" ry="6" fill={colors.furLight} stroke={colors.furDark} strokeWidth="1" />
      </g>

      {/* 3. Main Body */}
      <path 
        d="M70,120 Q55,220 110,220 Q165,220 150,120 Q140,80 110,80 Q80,80 70,120" 
        fill={colors.fur} 
        stroke={colors.furDark} 
        strokeWidth="1.5"
      />
      
      {/* 4. Uniform Jacket */}
      <path 
        d="M68,140 Q60,205 110,220 Q160,205 152,140 L150,125 Q110,135 70,125 Z" 
        fill={colors.jacket} 
        stroke={colors.jacketDark} 
        strokeWidth="1.5"
      />
      
      {/* White Shirt & Tie */}
      <path d="M110,128 L102,145 L110,165 L118,145 Z" fill="#fff" />
      <path d="M110,145 L108,155 L110,165 L112,155 Z" fill={colors.jacketDark} />
      <circle cx="110" cy="150" r="2.5" fill={colors.jacketDark} />

      {/* 5. Paws - Waving Animation */}
      <g className="animate-wave-left">
        <ellipse cx="65" cy="158" rx="10" ry="16" fill={colors.fur} stroke={colors.furDark} strokeWidth="1" />
      </g>
      <g className="animate-wave-right">
        <ellipse cx="155" cy="158" rx="10" ry="16" fill={colors.fur} stroke={colors.furDark} strokeWidth="1" />
      </g>

      {/* 6. Messenger Bag */}
      <g>
        <path d="M70,130 L165,185" stroke="#4e342e" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.9" />
        <rect x="155" y="170" width="42" height="32" rx="6" fill={colors.bag} stroke="#3e2723" strokeWidth="1.5" />
        <circle cx="185" cy="186" r="2" fill={colors.badge} /> 
      </g>

      {/* 7. Head */}
      <circle cx="110" cy="90" r="68" fill={colors.fur} stroke={colors.furDark} strokeWidth="1" />
      
      {/* Cream Face Mask */}
      <path d="M62,110 Q110,145 158,110 Q168,75 110,75 Q52,75 62,110" fill={colors.furLight} />

      {/* Ears */}
      <circle cx="58" cy="45" r="18" fill={colors.fur} stroke={colors.furDark} strokeWidth="1" />
      <circle cx="58" cy="45" r="11" fill="#FFC0CB" />
      <circle cx="162" cy="45" r="18" fill={colors.fur} stroke={colors.furDark} strokeWidth="1" />
      <circle cx="162" cy="45" r="11" fill="#FFC0CB" />
      
      {/* Postal Hat */}
      <path d="M68,55 Q110,15 152,55 L158,75 Q110,65 62,75 Z" fill={colors.jacket} stroke={colors.jacketDark} strokeWidth="1.5" />
      <path d="M62,70 Q110,85 158,70 L162,77 Q110,92 58,77 Z" fill={colors.jacketDark} /> 
      <path d="M110,45 L104,52 L110,62 L116,52 Z" fill={colors.badge} stroke="#bf9000" strokeWidth="1" />

      {/* Blush Cheeks */}
      <circle cx="75" cy="120" r="14" fill={colors.blush} opacity="0.6" />
      <circle cx="145" cy="120" r="14" fill={colors.blush} opacity="0.6" />

      {/* 8. Eyes - Expression Logic */}
      <g className={(isThinking || isConfused) ? '' : 'animate-blink'}>
        {isStar ? (
          <>
            <text x="82" y="115" fontSize="34" textAnchor="middle">⭐</text>
            <text x="138" y="115" fontSize="34" textAnchor="middle">⭐</text>
          </>
        ) : isLove ? (
          <>
            <text x="82" y="115" fontSize="34" textAnchor="middle">❤️</text>
            <text x="138" y="115" fontSize="34" textAnchor="middle">❤️</text>
          </>
        ) : isWink ? (
          <>
            <circle cx="85" cy="108" r="14" fill={colors.eyeBase} />
            <circle cx="78" cy="101" r="5" fill="#fff" />
            <path d="M130,110 Q145,95 160,110" stroke={colors.eyeBase} strokeWidth="6" fill="none" strokeLinecap="round" />
          </>
        ) : isCool ? (
          <rect x="75" y="100" width="70" height="15" fill={colors.eyeBase} rx="7.5" />
        ) : isExcited ? (
          <>
             <path d="M72,112 Q82,90 92,112" stroke={colors.eyeBase} strokeWidth="7" fill="none" strokeLinecap="round" />
             <path d="M128,112 Q138,90 148,112" stroke={colors.eyeBase} strokeWidth="7" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="82" cy="108" r="15" fill={colors.eyeBase} />
            <circle cx="138" cy="108" r="15" fill={colors.eyeBase} />
            <circle cx="77" cy="100" r="7" fill="#fff" />
            <circle cx="133" cy="100" r="7" fill="#fff" />
          </>
        )}
      </g>
      
      {/* 9. Nose */}
      <ellipse cx="110" cy="120" rx="7" ry="4" fill={colors.nose} stroke={colors.furDark} strokeWidth="0.5" />
      
      {/* 10. Mouth - "3" shape */}
      <g transform="translate(110, 134)">
        {isHappy ? (
           <path d="M-8,0 Q0,8 8,0" stroke="#4e342e" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : isSurprised ? (
          <circle cx="0" cy="4" r="6" fill="#4e342e" />
        ) : (
          <path d="M-6,0 Q-3,3 0,0 Q3,3 6,0" stroke="#4e342e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}
      </g>
    </svg>
  );
};

export const WAFFLE_DIALOGUE = {
  // ... (rest of the dialogue object stays the same)
  correct: [
    "Squeak! Package delivered to the right tense!",
    "Correct! My whiskers knew you could do it!",
    "Postal perfection! You're a natural dispatcher!",
    "Stamp it! That's a 1st class answer!",
    "Special Delivery! You've mastered this route!",
    "Your grammar skills are express-speed!",
    "Another letter perfectly re-posted! Excellent!",
    "100% Sorting accuracy! Waffle is proud!",
    "Bingo! That's how we report messages in the past!",
    "Grammar goal reached! Squeak-tastic!",
    "That's the spirit! No delivery is too tough for you!",
    "My hat tips to your excellent sorting skills!",
    "Correct! I'll put a golden stamp on this one.",
    "Whiskers twitching with joy! You got it right!",
    "Perfect dispatch! This message is ready to ship!"
  ],
  incorrect: [
    "Oops! The sorting machine jammed. Try again!",
    "Squeak... not quite. Check the 'Near to Far' map!",
    "Return to sender! Let's double-check the tense stamp.",
    "A minor delivery error! Look at the pronoun label.",
    "Whiskers! That letter got a bit lost. Try once more!",
    "Lost in transit! Re-read the SQCEM guide.",
    "Parcel misplaced! Remember to backshift your verbs.",
    "Wait! That message needs a connector bridge.",
    "Sorting error detected! Is that a question or a statement?",
    "My whiskers say: Try checking the reporting verb!",
    "Ouch, that delivery hit a roadblock! Check the rules.",
    "The address is wrong! Let's relabel that pronoun.",
    "Squeak! The tense travel machine failed. Recalibrate!",
    "Wrong bin! That sentence type belongs elsewhere.",
    "The sorting hat is confused. Try that one again!"
  ],
  errors: {
    tense: [
      "The tense stamp needs to move one step back! 🔙", 
      "Present verbs become past verbs in reports!", 
      "Time travel logic check! Tense must shift with the story.",
      "Is that a backshift? It should move further back!",
      "V1 shifts to V2, and V2 shifts to Had+V3!",
      "The past is calling! Move that verb back one step.",
      "Don't leave the tense in the present! It's yesterday's news."
    ],
    pronoun: [
      "Check the address label (pronoun) needs a change!", 
      "Is that 'I' really a 'He' or 'She' from your view?",
      "The PRO Rule: Pronoun-Reporting Verb-Object alignment!",
      "Don't deliver to the wrong person! Check the pronouns.",
      "Follow the identity shift: Speaker says 'I', you say 'He'!",
      "Who are we talking about? Adjust the person!",
      "The perspective has shifted! Change 'my' to 'his/her'."
    ],
    reporting_verb: [
      "The delivery tone is off! Use 'asked', 'told', or 'ordered'.", 
      "Check the reporting verb stamp! 'Said' is for no-object routes.",
      "Was it a question? You need the 'Asked' stamp!",
      "Told requires a listener! Check if someone is being told.",
      "Use 'Requested' for polite packages with 'Please'!",
      "Match the verb to the mood: Inquiry needs 'asked'!",
      "Don't forget to 'tell' someone if there's a listener."
    ],
    time_place: [
      "The 'Near to Far' rule: 'Here' becomes 'There' on the map! 📍", 
      "'Now' becomes 'Then' when reporting from the past!", 
      "Near words become far words! Tomorrow is 'The next day'.",
      "Check your GPS! 'This' changes to 'That' in a report.",
      "Time shifts forward, so the words must shift back!",
      "Location change! 'Here' doesn't exist in the past report.",
      "The clock moved! Change 'today' to 'that day'."
    ],
    no_change: [
      "Squeak! This fact is a permanent shipment. No tense change!", 
      "Universal truths stay in the present! Gravity doesn't age.",
      "That's an immortal fact. Keep the tense stamp fresh!",
      "Present habits don't backshift if they're still true!",
      "Scientific facts are time-locked. No shifting allowed!",
      "Don't backshift a fact that's still true today!",
      "Moral truths are eternal. Keep them in the present."
    ],
    sentence_type: [
      "Identify before you sort! Use the SQCEM Trick. 🔍", 
      "Is it a question or a statement? Spot the mark!", 
      "Check the SQCEM guide first! Strategy depends on type.",
      "A question mark means you need a different bridge!",
      "Spot the '!' — is it an exclamation or a command?",
      "Sort the sentence type before you apply the stamps.",
      "The punctuation is the key to the right sorting bin!"
    ],
    structure: [
      "The skeleton is wobbly. Check the word order! 🦴", 
      "Statement order only in reports! No question-flips.", 
      "Check the word-order flip! Subject must lead the verb.",
      "Don't add 'that' to a Wh-question bridge!",
      "Yes/No questions need an 'if' or 'whether' bridge.",
      "In reports, the subject always comes before the verb!",
      "Double connectors are forbidden! Only use one bridge."
    ],
    general: [
      "Check your postal manual for this module! 📖", 
      "Review the TRPT mantra before sealing the envelope!", 
      "Concentrate! My whiskers believe in your delivery skills!",
      "Slow down! A careful postman never makes a mistake.",
      "Is there a double connector? Only one bridge allowed!",
      "Accuracy over speed! Check every pillar.",
      "My paws are crossed for you! You can do this."
    ]
  },
  hints: [
    "Look at the speaker. Who are they talking to?",
    "Check the punctuation at the end. Is it a '?' or a '.'?",
    "Think about the distance. Is it 'here' or 'there' now?",
    "Present Simple? Shift it back to Past Simple!",
    "If you see 'please', the reporting verb should be 'requested'!",
    "Wh-word questions don't need 'that'. They are the bridge!",
    "Reverse reversal: Move the tense FORWARD one step!",
    "Universal truth alert! Don't touch the tense.",
    "Count your TRPT pillars: Tense, Reporting Verb, Pronoun, Time!",
    "If it's an order, use the 'To' bridge.",
    "Check if the reporting verb is in the past (said/told).",
    "Is 'I' talking about himself? Then it becomes 'He/She'.",
    "Does it start with 'Do' or 'Are'? You need an 'if' bridge!",
    "Remove those quotation marks—they don't belong here!",
    "Is it a permanent fact? Tense lock active!"
  ],
  witty_remarks: [
    "Squeak! I once re-posted a proverbs module in record time!",
    "A hamster's work is never done... especially grammar work!",
    "Is it time for a sunflower seed break yet? 🌻",
    "Direct speech is loud, indirect speech is proud!",
    "Don't let those quotation marks trip you up!",
    "I've got a pouch full of verbs for every occasion!",
    "Keep those whiskers clean and your tenses backshifted!",
    "Reporting is just storytelling with extra rules!",
    "Ready for another delivery of knowledge?",
    "I'm Waffle, the Post-Hamster, and I approve of this grammar!",
    "My hat is full of hints! Click me anytime.",
    "Grammar is like sorting mail—everything has its place!",
    "Did you know hamsters are great at backshifting?",
    "Keep going! You're almost a Master Postman!",
    "Squeak! The 30 levels are like 30 sunflower seeds—delicious!",
    "My bag is heavy with Indirect Speech knowledge!",
    "Whiskers twitching... I smell a correct answer coming!",
    "I've delivered mail from the Future to the Past!",
    "Direct speech is so last-minute. Reporting is much classier.",
    "Don't worry, even a Master Postman once lost a letter!",
    "I'm not short, I'm just aerodynamically designed for speed!",
    "Who knew grammar could be this fun? Squeak!",
    "My bag has a built-in dictionary. Very handy!",
    "I'm training for the Grammar Olympics. Want to join?",
    "One day I'll deliver a message that never needs backshifting.",
    "Phew! These long sentences are quite the workout.",
    "Did you see my badge? It's for exceptional service!",
    "Reporting is an art form. You're becoming a master!",
    "Keep your eyes on the TRPT prize!",
    "Squeak! I'm feeling extra fluffy today. Must be the correct answers!",
    "Is that a 1st Class answer I see? Squeak!",
    "Wait, let me consult the Great Book of Backshifting...",
    "Sunflower seeds are good, but Correct Reports are better!",
    "I once delivered a message to a King. He used improper tenses. I was shocked!",
    "If words could fly, they'd follow the Indirect Route!",
    "Mastering this is harder than running on a wheel, but more rewarding!"
  ]
};
