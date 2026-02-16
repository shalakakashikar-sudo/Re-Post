
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

  // Rich, high-contrast kawaii palette
  const colors = {
    fur: '#c28c54',       // Deep honey brown
    furDark: '#8d6e63',   // Outline brown
    furLight: '#fffcf5',  // Bright cream patches
    jacket: '#305d9e',    // Professional deep postal blue
    jacketDark: '#1a3b6e', // Navy outlines/shadows
    bag: '#795548',       // Leather satchel
    badge: '#f1c40f',     // Golden badge
    nose: '#ff9ff3',      // Soft pink
    blush: '#ff9eb5',     // Rosy cheeks
    eyeBase: '#1d1d1d'    // Midnight black for eyes
  };

  return (
    <svg viewBox="0 0 220 240" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      {/* 1. Ground Shadow (Softer) */}
      <ellipse cx="110" cy="225" rx="60" ry="8" fill="#000" opacity="0.08" />
      
      {/* 2. Feet - Tiny nubbins */}
      <ellipse cx="92" cy="218" rx="8" ry="5" fill={colors.furLight} stroke={colors.furDark} strokeWidth="1" />
      <ellipse cx="128" cy="218" rx="8" ry="5" fill={colors.furLight} stroke={colors.furDark} strokeWidth="1" />

      {/* 3. Main Kawaii Pear Body */}
      <path 
        d="M65,130 Q50,215 110,215 Q170,215 155,130 Q145,85 110,85 Q75,85 65,130" 
        fill={colors.fur} 
        stroke={colors.furDark} 
        strokeWidth="0.5"
      />
      {/* Tummy Patch - Softer heart-ish shape */}
      <path 
        d="M110,140 Q135,140 145,175 Q145,210 110,210 Q75,210 75,175 Q85,140 110,140" 
        fill={colors.furLight} 
      />

      {/* 4. Uniform Jacket - Rounded and cute */}
      <path 
        d="M62,140 Q55,200 110,215 Q165,200 158,140 L155,125 Q110,135 65,125 Z" 
        fill={colors.jacket} 
        stroke={colors.jacketDark} 
        strokeWidth="1.5"
      />
      
      {/* Inner Shirt/Tie Area */}
      <path d="M110,130 L100,150 L110,170 L120,150 Z" fill="#fff" />
      <path d="M110,150 L107,160 L110,170 L113,160 Z" fill={colors.jacketDark} />
      <circle cx="110,153" r="2.5" fill={colors.jacketDark} />

      {/* Kawaii Gold Buttons */}
      <circle cx="104" cy="188" r="3.5" fill={colors.badge} stroke="#bf9000" strokeWidth="0.5" />
      <circle cx="116" cy="188" r="3.5" fill={colors.badge} stroke="#bf9000" strokeWidth="0.5" />

      {/* 5. Messenger Bag */}
      <g transform="rotate(-5, 110, 150)">
        <path d="M65,120 L160,190" stroke="#4e342e" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.8" />
        <rect x="148" y="178" width="45" height="34" rx="7" fill={colors.bag} stroke="#3e2723" strokeWidth="1.5" />
        <circle cx="178" cy="195" r="2.5" fill={colors.badge} /> 
      </g>

      {/* 6. Paws - Softer and rounder */}
      <ellipse cx="65" cy="158" rx="9" ry="14" fill={colors.fur} transform="rotate(10, 65, 158)" stroke={colors.furDark} strokeWidth="0.5" />
      <ellipse cx="155" cy="158" rx="9" ry="14" fill={colors.fur} transform="rotate(-10, 155, 158)" stroke={colors.furDark} strokeWidth="0.5" />

      {/* 7. Head - Perfectly round and big */}
      <circle cx="110" cy="88" r="66" fill={colors.fur} stroke={colors.furDark} strokeWidth="0.5" />
      
      {/* Face Light Patch - The "Mask" area */}
      <path d="M65,115 Q110,145 155,115 Q165,85 110,75 Q55,85 65,115" fill={colors.furLight} />

      {/* Ears - Positioned for maximum cuteness */}
      <circle cx="55" cy="48" r="18" fill={colors.fur} stroke={colors.furDark} strokeWidth="0.5" />
      <circle cx="55" cy="48" r="10" fill="#ffb7c5" />
      <circle cx="165" cy="48" r="18" fill={colors.fur} stroke={colors.furDark} strokeWidth="0.5" />
      <circle cx="165" cy="48" r="10" fill="#ffb7c5" />
      
      {/* Postal Hat - Softer peak */}
      <path d="M65,58 Q110,18 155,58 L160,78 Q110,68 60,78 Z" fill={colors.jacket} stroke={colors.jacketDark} strokeWidth="1.5" />
      <path d="M60,73 Q110,88 160,73 L164,80 Q110,95 56,80 Z" fill={colors.jacketDark} /> 
      <path d="M110,50 L103,58 L110,68 L117,58 Z" fill={colors.badge} stroke="#bf9000" strokeWidth="1" />

      {/* Glowing Cheeks + Kawaii Blush Lines */}
      <g opacity="0.7">
        <circle cx="70" cy="120" r="18" fill={colors.blush}>
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="120" r="18" fill={colors.blush}>
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Blush Lines */}
        <line x1="62" y1="118" x2="66" y2="124" stroke="#ff80ab" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="68" y1="118" x2="72" y2="124" stroke="#ff80ab" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="148" y1="118" x2="152" y2="124" stroke="#ff80ab" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="154" y1="118" x2="158" y2="124" stroke="#ff80ab" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* 8. Super Kawaii Glassy Eyes */}
      <g transform={(isThinking || isConfused) ? 'translate(0, -2)' : ''}>
        {isStar ? (
          <>
            <text x="80" y="112" fontSize="38" textAnchor="middle">⭐</text>
            <text x="140" y="112" fontSize="38" textAnchor="middle">⭐</text>
          </>
        ) : isLove ? (
          <>
            <text x="80" y="112" fontSize="38" textAnchor="middle">❤️</text>
            <text x="140" y="112" fontSize="38" textAnchor="middle">❤️</text>
          </>
        ) : isWink ? (
          <>
            <circle cx="85" cy="105" r="16" fill={colors.eyeBase} />
            <circle cx="78" cy="97" r="7" fill="#fff" />
            <circle cx="92" cy="112" r="3" fill="#fff" opacity="0.8" />
            <path d="M130,110 Q145,95 160,110" stroke={colors.eyeBase} strokeWidth="8" fill="none" strokeLinecap="round" />
          </>
        ) : isCool ? (
          <rect x="70" y="98" width="80" height="18" fill={colors.eyeBase} rx="9" />
        ) : isExcited ? (
          <>
            <path d="M75,115 Q85,90 95,115" stroke={colors.eyeBase} strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M125,115 Q135,90 145,115" stroke={colors.eyeBase} strokeWidth="9" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* The Signature "Puppy" Eye Logic */}
            <circle cx="82" cy="105" r="17" fill={colors.eyeBase} />
            <circle cx="138" cy="105" r="17" fill={colors.eyeBase} />
            
            {/* Highlights - Larger and glossier */}
            <circle cx="76" cy="96" r="8" fill="#fff" />
            <circle cx="132" cy="96" r="8" fill="#fff" />
            <circle cx="90" cy="112" r="3.5" fill="#fff" opacity="0.8" />
            <circle cx="146" cy="112" r="3.5" fill="#fff" opacity="0.8" />
            
            {/* Shimmer effects */}
            <circle cx="82" cy="105" r="12" fill="#fff" opacity="0.04" />
            <circle cx="138" cy="105" r="12" fill="#fff" opacity="0.04" />
          </>
        )}
      </g>
      
      {/* 9. Tiny Pink Nose */}
      <ellipse cx="110" cy="122" rx="6" ry="4" fill={colors.nose} stroke={colors.furDark} strokeWidth="0.5" />
      
      {/* 10. Simple "3" Mouth - The ultimate Kawaii touch */}
      <g transform="translate(110, 138)">
        {isHappy ? (
           <path d="M-8,-2 Q0,8 8,-2" stroke="#4e342e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        ) : isSurprised ? (
          <circle cx="0" cy="2" r="7" fill="#4e342e" />
        ) : (
          <path d="M-6,-2 Q-3,2 0,-2 Q3,2 6,-2" stroke="#4e342e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}
      </g>
    </svg>
  );
};

export const WAFFLE_DIALOGUE = {
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
