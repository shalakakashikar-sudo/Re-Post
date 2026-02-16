
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
 * 🐹 WAFFLE: THE POST-HAMSTER (v2.3 - High Contrast & Stabilized)
 * Mascot for Re-Post! Hub.
 * Expertise: High-fidelity message delivery & Tense Stamp management.
 * Visuals: Exact match to reference drawing, darkened colors, subtle motion.
 */
const Waffle: React.FC<WaffleProps> = ({ dialogue: externalDialogue, mood = 'idle', onClick, size = 'md' }) => {
  const [animationClass, setAnimationClass] = useState('');
  const [internalDialogue, setInternalDialogue] = useState<string | null>(null);
  const [internalMood, setInternalMood] = useState<WaffleMood>(mood);

  const sizeClasses = {
    sm: 'w-24 h-24 md:w-28 md:h-28',
    md: 'w-36 h-36 md:w-48 md:h-48',
    lg: 'w-56 h-56 md:w-72 md:h-72'
  };

  useEffect(() => {
    setInternalMood(mood);
    // STABILIZED ANIMATIONS - Reduced movement magnitude significantly
    switch (mood) {
      case 'happy': setAnimationClass('animate-subtleScale'); break;
      case 'confused': setAnimationClass('opacity-95 saturate-75'); break; 
      case 'thinking': setAnimationClass('animate-breathing opacity-95'); break;
      case 'excited': setAnimationClass('scale-105 transition-all'); break;
      case 'star-eyes': setAnimationClass('brightness-110 saturate-125'); break;
      case 'wink': setAnimationClass('rotate-1 transition-transform'); break;
      case 'love': setAnimationClass('scale-102 transition-transform'); break;
      case 'surprised': setAnimationClass('scale-105 transition-transform'); break;
      case 'cool': setAnimationClass('brightness-105'); break;
      default: setAnimationClass('');
    }
  }, [mood]);

  const handleWaffleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Pick a random witty remark or a helpful hint
      const allRemarks = [
        ...WAFFLE_DIALOGUE.witty_remarks,
        ...WAFFLE_DIALOGUE.hints
      ];
      const randomRemark = allRemarks[Math.floor(Math.random() * allRemarks.length)];
      const moods: WaffleMood[] = ['wink', 'cool', 'star-eyes', 'excited', 'happy', 'love'];
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      
      setInternalDialogue(randomRemark);
      setInternalMood(randomMood);
      
      // Auto-clear dialogue after 12 seconds to keep the UI clean
      setTimeout(() => {
        setInternalDialogue(null);
        setInternalMood(mood);
      }, 12000);
    }
  };

  const displayDialogue = externalDialogue || internalDialogue;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 max-w-full group select-none">
      {/* MASCOT CONTAINER */}
      <style>{`
        @keyframes breathing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes subtleScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-breathing {
          animation: breathing 4s ease-in-out infinite;
        }
        .animate-subtleFloat {
          animation: subtleFloat 5s ease-in-out infinite;
        }
        .animate-subtleScale {
          animation: subtleScale 3s ease-in-out infinite;
        }
      `}</style>
      <div 
        className={`relative cursor-pointer transition-all duration-1000 shrink-0 animate-subtleFloat hover:scale-105 active:scale-95 ${animationClass}`}
        onClick={handleWaffleClick}
      >
        {/* Glow effect for prominence */}
        <div className="absolute inset-0 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-all duration-500"></div>

        {/* Floating Emotes */}
        {(internalMood === 'star-eyes' || internalMood === 'happy' || internalMood === 'excited') && (
          <div className="absolute -top-6 -right-2 text-2xl animate-pulse select-none z-20">✨</div>
        )}
        {internalMood === 'love' && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-3xl animate-pulse select-none z-20">💖</div>
        )}
        {internalMood === 'thinking' && (
          <div className="absolute -top-4 -right-2 text-xl animate-pulse select-none z-20">💡</div>
        )}

        {/* The Re-designed Waffle (SVG) - Precise Drawing Match */}
        {WAFFLE_SVG(`${sizeClasses[size]} drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]`, internalMood)}
        
        {/* Confusion Indicator */}
        {internalMood === 'confused' && (
          <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 border-2 border-blue-600 shadow-xl animate-pulse z-10">
            <span className="text-sm">❓</span>
          </div>
        )}
      </div>

      {/* SPEECH BUBBLE */}
      {displayDialogue && (
        <div className="relative animate-fadeIn max-w-[320px] md:max-w-md">
          <div className="bg-[#fffdfa] p-6 rounded-[2.5rem] border-[4px] border-[#305d9e] shadow-[0_20px_60px_rgba(0,0,0,0.12)] relative z-10">
            <div className="flex items-center gap-2 mb-3 border-b-2 border-gray-50 pb-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></span>
              <p className="text-[#305d9e] font-black text-[11px] uppercase tracking-[0.3em]">
                POSTAL LOG: WAFFLE
              </p>
            </div>
            <p className="text-[#1d1d1d] font-extrabold text-lg md:text-xl italic leading-relaxed font-typewriter">
              "{displayDialogue}"
            </p>
            {/* Postal Stamp Icon */}
            <div className="absolute -bottom-5 -right-5 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-[10px] font-black rotate-[15deg] shadow-xl border-4 border-white select-none">
              <span className="text-center leading-none">1ST CLASS<br/>DISPATCH</span>
            </div>
          </div>
          
          {/* Bubble Tail */}
          <div className="absolute w-8 h-8 bg-[#fffdfa] border-l-[4px] border-b-[4px] border-[#305d9e] 
            left-1/2 -top-4 -translate-x-1/2 rotate-[135deg] 
            md:left-[-16px] md:top-1/2 md:-translate-y-1/2 md:rotate-45 md:border-b-0 md:border-r-0 md:border-l-[4px] md:border-b-[4px] z-0"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Waffle;
