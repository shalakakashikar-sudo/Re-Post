
import React, { useState, useEffect } from 'react';
import { WAFFLE_SVG, WAFFLE_DIALOGUE } from '../constants';
import { WaffleMood } from '../types';

interface WaffleProps {
  dialogue?: string;
  mood?: WaffleMood;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * 🐹 WAFFLE: THE POST-HAMSTER
 * Mascot for SmarTest & Re-Post!
 * Expertise: Delivering messages through time and space.
 * Strategy: TRPT Mantra & SQCEM Trick.
 */
const Waffle: React.FC<WaffleProps> = ({ dialogue: externalDialogue, mood = 'idle', onClick, size = 'md' }) => {
  const [animationClass, setAnimationClass] = useState('');
  const [internalDialogue, setInternalDialogue] = useState<string | null>(null);
  const [internalMood, setInternalMood] = useState<WaffleMood>(mood);

  // Cuteness scaling: From 'Snack-sized' to 'Mega-Fluff'
  const sizeClasses = {
    sm: 'w-20 h-20 md:w-24 md:h-24',
    md: 'w-28 h-28 md:w-36 md:h-36',
    lg: 'w-40 h-40 md:w-56 md:h-56'
  };

  useEffect(() => {
    setInternalMood(mood);
    // Animation Logic: Matching the mood to the move!
    switch (mood) {
      case 'happy': setAnimationClass('animate-subtleBounce'); break;
      case 'confused': setAnimationClass('animate-pulse scale-95'); break; 
      case 'thinking': setAnimationClass('animate-pulse opacity-90'); break; // Deep in a Backshift...
      case 'excited': setAnimationClass('animate-subtleBounce scale-110'); break;
      case 'star-eyes': setAnimationClass('animate-pulse brightness-110'); break;
      case 'wink': setAnimationClass('hover:rotate-12 transition-transform'); break;
      case 'love': setAnimationClass('animate-pulse'); break;
      default: setAnimationClass('animate-none');
    }
  }, [mood]);

  const handleWaffleClick = () => {
    if (onClick) {
      onClick(); // Let the parent handle the "crunchy" details
    } else {
      // Waffle's Brain: A library of 30-Module Wisdom
      const guideRemarks = [
        "Check your TRPT checklist: Tense, Verb, Pronoun, Time!",
        "Reporting from the past? Step that tense BACK! 🔙",
        "Near words become Far! 'This' becomes 'That', just like my seeds!",
        "Universal Truths don't change. The sun rises, and I stay cute.",
        "said to → told. Don't leave the 'to' behind, it's heavy!",
        "Is it SQCEM? Statement, Question, Command, Exclamation, or Mixed?",
        "Wh- Questions don't need 'that'. The Wh-word is the bridge!"
      ];
      
      const randomRemark = guideRemarks[Math.floor(Math.random() * guideRemarks.length)];
      const moods: WaffleMood[] = ['wink', 'cool', 'star-eyes', 'excited', 'happy'];
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      
      setInternalDialogue(randomRemark);
      setInternalMood(randomMood);
      
      // ⏳ Visibility duration kept at 32 seconds as requested by "DO NOT MAKE ANY OTHER CHANGES" aside from cuteness
      setTimeout(() => {
        setInternalDialogue(null);
        setInternalMood(mood);
      }, 32000);
    }
  };

  const displayDialogue = externalDialogue || internalDialogue;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 max-w-full group select-none">
      {/* THE HAMSTER HOUSING UNIT */}
      <div 
        className={`relative cursor-pointer transform hover:scale-110 active:scale-90 transition-all duration-300 shrink-0 ${animationClass}`}
        onClick={handleWaffleClick}
      >
        {/* The 'Butter Glow': A soft halo for extra warmth */}
        <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl group-hover:bg-orange-400/30 transition-colors"></div>
        
        {/* Floating Sparkles/Hearts for extra cuteness */}
        {(internalMood === 'star-eyes' || internalMood === 'happy') && (
          <div className="absolute -top-4 -right-2 text-xl animate-pulse select-none z-20">✨</div>
        )}
        {internalMood === 'love' && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl animate-bounce select-none z-20">💖</div>
        )}

        {/* Waffle himself (Re-delivered via SVG) */}
        {WAFFLE_SVG(`${sizeClasses[size]} drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]`, internalMood)}
        
        {/* Tiny Mood Overlays (The SQCEM of Emoji) */}
        {internalMood === 'confused' && (
          <div className="absolute -top-1 -right-1 bg-white rounded-full p-1.5 border-2 border-orange-400 shadow-lg animate-bounce z-10">
            <span className="text-xs">❓</span>
          </div>
        )}
        {internalMood === 'star-eyes' && (
          <div className="absolute -top-1 -left-1 bg-yellow-50 rounded-full p-1.5 border-2 border-yellow-400 shadow-lg animate-spin-slow z-10">
            <span className="text-xs">✨</span>
          </div>
        )}
      </div>

      {/* THE RE-POST! BUBBLE */}
      {displayDialogue && (
        <div className="relative animate-fadeIn max-w-[280px] md:max-w-xs">
          <div className="bg-[#fffdfa] p-5 rounded-[2.2rem] border-[3px] border-[#ede7f6] shadow-[0_15px_35px_rgba(0,0,0,0.1)] relative z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping"></span>
              <p className="text-[#8d6e63] font-black text-[9px] uppercase tracking-[0.2em] opacity-70">
                Waffle the Post-Hamster:
              </p>
            </div>
            <p className="text-[#3e2723] font-bold text-sm md:text-base italic leading-snug">
              "{displayDialogue}"
            </p>
          </div>
          
          {/* Bubble Tail: Points to Waffle regardless of screen size */}
          <div className="absolute w-6 h-6 bg-[#fffdfa] border-l-[3px] border-b-[3px] border-[#ede7f6] 
            left-1/2 -top-3 -translate-x-1/2 rotate-[135deg] 
            md:left-[-12px] md:top-1/2 md:-translate-y-1/2 md:rotate-45 md:border-b-0 md:border-r-0 md:border-l-[3px] md:border-b-[3px] z-0"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Waffle;
