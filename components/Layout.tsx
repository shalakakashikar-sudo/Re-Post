
import React from 'react';
import { Section } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: Section;
  setSection: (s: Section) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeSection, setSection }) => {
  return (
    <div className="min-h-screen flex flex-col pb-16 overflow-x-hidden">
      <header className="bg-white border-b-2 border-gray-100 shadow-sm sticky top-0 z-50 bg-postal-stripes">
        <div className="max-w-6xl mx-auto px-4 py-2 md:py-3 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setSection('home')}
          >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-sm">
              <span className="text-xl">📮</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black text-red-600 leading-none tracking-tight">Re-Post!</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Direct & Indirect Speech Hub</p>
            </div>
          </div>

          <nav className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => setSection('home')}
              className={`px-3 md:px-4 py-2 rounded-xl text-[10px] md:text-xs font-black transition-all ${
                activeSection === 'home'
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              HOME
            </button>
            {(['learn', 'quiz-setup'] as Section[]).map((s) => (
              <button
                key={s}
                onClick={() => setSection(s)}
                className={`px-3 md:px-4 py-2 rounded-xl text-[10px] md:text-xs font-black transition-all ${
                  activeSection === s || (s === 'quiz-setup' && (activeSection === 'master-delivery' || activeSection === 'practice'))
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'bg-orange-50 text-red-600 hover:bg-orange-100'
                }`}
              >
                {s === 'quiz-setup' ? 'QUIZ' : s.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-4 md:py-8">
        {children}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-[#2d241e] text-white py-2 z-[100] text-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">
          © Created by Shalaka Kashikar
        </p>
      </footer>
    </div>
  );
};

export default Layout;
