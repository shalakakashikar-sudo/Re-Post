
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Section, LearnTopic, QuizQuestion, WaffleMood, TopicCategory, AnswerMode } from './types';
import Layout from './components/Layout';
import Waffle from './components/Waffle';
import { ALL_LEARN_TOPICS, MASTER_QUIZ_QUESTIONS } from './data';

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const CATEGORY_METADATA: Record<string, { description: string, icon: string }> = {
  'Foundations': { description: 'Sentence types and basic shifts.', icon: '🏗️' },
  'Statements': { description: 'Declarations and backshift rules.', icon: '✉️' },
  'Questions': { description: 'Inquiries with if/whether and Wh-words.', icon: '❓' },
  'Imperatives': { description: 'Orders, requests, and advice.', icon: '❗' },
  'Exclamations': { description: 'Emotions and reporting verbs.', icon: '🎉' },
  'Advanced': { description: 'Conditionals and mixed types.', icon: '🖇️' },
  'Mastery': { description: 'Reverse conversion and diagnosis.', icon: '🏆' }
};

const App: React.FC = () => {
  const [section, setSection] = useState<Section>('home');
  const [selectedTopic, setSelectedTopic] = useState<LearnTopic | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [proseInput, setProseInput] = useState('');
  
  const [quizConfig, setQuizConfig] = useState<{
    categories: string[];
    count: number;
    mode: 'global' | 'module';
    answerMode: AnswerMode;
  }>({
    categories: ['All'],
    count: 10,
    mode: 'global',
    answerMode: 'mcq'
  });
  
  const [showConfigOverlay, setShowConfigOverlay] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  
  const [quizState, setQuizState] = useState({
    currentIndex: 0,
    score: 0,
    finished: false,
    feedback: null as string | null,
    mood: 'idle' as WaffleMood
  });

  const questionTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!quizState.finished) setShowReview(false);
  }, [section, selectedTopic, quizState.finished]);

  useEffect(() => {
    if ((section === 'practice' || section === 'master-delivery') && !quizState.finished) {
      setTimeout(() => {
        questionTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [quizState.currentIndex, section, quizState.finished]);

  const normalize = (str: string) => {
    return str
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "") // Remove punctuation
      .replace(/\s{2,}/g, " ") // Normalize double spaces
      .trim()
      .toLowerCase();
  };

  const handleAnswer = (option: string) => {
    if (userAnswers[quizState.currentIndex]) return;
    const currentQ = quizQuestions[quizState.currentIndex];
    
    let isCorrect = false;
    if (quizConfig.answerMode === 'prose') {
      isCorrect = normalize(option) === normalize(currentQ.correctAnswer);
    } else {
      isCorrect = option === currentQ.correctAnswer;
    }
    
    setUserAnswers(prev => ({ ...prev, [quizState.currentIndex]: option }));
    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      feedback: isCorrect ? "Squeak! Correct Re-Post!" : "Oh no! A sorting error!",
      mood: isCorrect ? 'happy' : 'confused'
    }));
  };

  const handleNext = () => {
    if (quizState.currentIndex < quizQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        feedback: null,
        mood: 'thinking'
      }));
      setProseInput('');
    } else {
      setQuizState(prev => ({
        ...prev,
        finished: true,
        mood: 'cool'
      }));
    }
  };

  const handlePrevious = () => {
    if (quizState.currentIndex > 0) {
      setQuizState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex - 1,
        feedback: null,
        mood: 'idle'
      }));
      setProseInput(userAnswers[quizState.currentIndex - 1] || '');
    }
  };

  const getInstructionLabel = (q: QuizQuestion) => {
    if (q.category === 'Foundations') {
       if (q.id.startsWith('1.')) return "Identify the Sentence Type:";
       return "Analyze the Reporting Structure:";
    }
    if (q.category === 'Mastery') {
      if (q.id.startsWith('27.') || q.id.startsWith('28.')) return "Reverse Dispatch (To Direct Speech):";
      if (q.id.startsWith('29.')) return "Spot and Fix the Dispatch Error:";
      return "Final Mastery Challenge:";
    }
    return "Re-Post this message:";
  };

  const groupedTopics = useMemo(() => {
    const groups: Partial<Record<TopicCategory, LearnTopic[]>> = {};
    ALL_LEARN_TOPICS.forEach(topic => {
      if (!groups[topic.category]) groups[topic.category] = [];
      groups[topic.category]!.push(topic);
    });
    return groups;
  }, []);

  const toggleCategory = (cat: string) => {
    setQuizConfig(prev => {
      if (cat === 'All') return { ...prev, categories: ['All'] };
      let newCats = prev.categories.filter(c => c !== 'All');
      if (newCats.includes(cat)) {
        newCats = newCats.filter(c => c !== cat);
        if (newCats.length === 0) newCats = ['All'];
      } else {
        newCats.push(cat);
      }
      return { ...prev, categories: newCats };
    });
  };

  const resetQuiz = (msg: string | null = "Ready for sorting? Squeak!") => {
    setUserAnswers({});
    setShowReview(false);
    setProseInput('');
    setQuizState({
      currentIndex: 0,
      score: 0,
      finished: false,
      feedback: msg,
      mood: 'excited'
    });
  };

  const startQuiz = (questions: QuizQuestion[], count: number) => {
    if (questions.length === 0) {
      alert("No questions found for this selection! Waffle is still writing them.");
      return;
    }
    const finalCount = Math.min(count, questions.length);
    const selected = shuffle(questions).slice(0, finalCount).map(q => ({
      ...q,
      options: shuffle([...q.options]) 
    }));
    setQuizQuestions(selected);
    resetQuiz(null);
    setSection(quizConfig.mode === 'module' ? 'practice' : 'master-delivery');
    setShowConfigOverlay(false);
  };

  const handleGlobalStart = () => {
    let pool = MASTER_QUIZ_QUESTIONS;
    if (!quizConfig.categories.includes('All')) {
      pool = MASTER_QUIZ_QUESTIONS.filter(q => quizConfig.categories.includes(q.category));
    }
    startQuiz(pool, quizConfig.count);
  };

  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center animate-fadeIn py-8 min-h-[70vh]">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left space-y-6">
                <h2 className="text-8xl md:text-9xl font-black text-blue-900 tracking-tighter leading-[0.8] mb-4">Re-Post!</h2>
                <p className="text-2xl md:text-4xl text-red-600 font-extrabold italic mb-6">"Don’t just Quote it, Re-Post it!"</p>
                <p className="text-gray-600 text-xl font-medium max-w-lg leading-relaxed">
                  Join <span className="text-orange-600 font-black underline decoration-wavy">Waffle the Post-Hamster</span> on a 30-level journey to master Direct and Indirect Speech.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button onClick={() => setSection('learn')} className="bg-red-600 text-white px-10 py-5 rounded-[2.5rem] font-black shadow-2xl hover:bg-red-700 transition-all text-xl uppercase tracking-widest border-b-8 border-red-900 active:translate-y-2">Start Training</button>
                  <button onClick={() => setSection('quiz-setup')} className="bg-blue-600 text-white px-10 py-5 rounded-[2.5rem] font-black shadow-2xl hover:bg-blue-700 transition-all text-xl uppercase tracking-widest border-b-8 border-blue-900 active:translate-y-2">Global Quiz</button>
                </div>
              </div>
              <div className="flex justify-center">
                <Waffle dialogue="Squeak! Ready for a special delivery?" mood="excited" size="lg" />
              </div>
            </div>
          </div>
        );

      case 'quiz-setup':
        return (
          <div className="animate-fadeIn max-w-5xl mx-auto space-y-12 py-10">
            <div className="bg-white p-10 rounded-[4rem] border-4 border-dashed border-blue-100 shadow-2xl text-center relative overflow-hidden">
              <h2 className="text-5xl font-black text-blue-900 uppercase tracking-tighter mb-4">The Sorting Station</h2>
              <p className="text-gray-500 text-xl font-medium">Configure your dispatch parameters!</p>
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-4 border-blue-50 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-blue-900 flex items-center gap-3">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">1</span>
                  Select Dispatch Sectors
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <button 
                    onClick={() => toggleCategory('All')}
                    className={`p-6 rounded-[2rem] border-4 transition-all flex flex-col items-center gap-2 ${quizConfig.categories.includes('All') ? 'bg-blue-600 border-blue-900 text-white scale-105 shadow-xl' : 'bg-white border-blue-50 text-blue-900 hover:border-blue-200'}`}
                  >
                    <span className="text-3xl">📮</span>
                    <span className="font-black text-xs uppercase">ALL SECTORS</span>
                  </button>
                  {(Object.keys(CATEGORY_METADATA)).map(cat => (
                    <button 
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={`p-6 rounded-[2rem] border-4 transition-all flex flex-col items-center gap-2 ${quizConfig.categories.includes(cat) ? 'bg-red-600 border-red-900 text-white scale-105 shadow-xl' : 'bg-white border-blue-50 text-blue-900 hover:border-red-200'}`}
                    >
                      <span className="text-3xl">{CATEGORY_METADATA[cat].icon}</span>
                      <span className="font-black text-xs uppercase">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-blue-900 flex items-center gap-3">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">2</span>
                    Mail Volume
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[5, 10, 20, 50, 100].map(n => (
                      <button 
                        key={n}
                        onClick={() => setQuizConfig(prev => ({ ...prev, count: n }))}
                        className={`w-14 h-14 rounded-full border-4 font-black text-lg transition-all ${quizConfig.count === n ? 'bg-blue-600 border-blue-900 text-white scale-110 shadow-lg' : 'bg-white border-blue-50 text-blue-600 hover:border-blue-200'}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-blue-900 flex items-center gap-3">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">3</span>
                    Sorting Method
                  </h3>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setQuizConfig(prev => ({ ...prev, answerMode: 'mcq' }))}
                      className={`flex-1 p-4 rounded-3xl border-4 transition-all flex flex-col items-center gap-2 ${quizConfig.answerMode === 'mcq' ? 'bg-orange-500 border-orange-900 text-white scale-105 shadow-xl' : 'bg-white border-blue-50 text-blue-900 hover:border-blue-200'}`}
                    >
                      <span className="text-2xl">⚡</span>
                      <span className="font-black text-[10px] uppercase">Express Stamp (MCQ)</span>
                    </button>
                    <button 
                      onClick={() => setQuizConfig(prev => ({ ...prev, answerMode: 'prose' }))}
                      className={`flex-1 p-4 rounded-3xl border-4 transition-all flex flex-col items-center gap-2 ${quizConfig.answerMode === 'prose' ? 'bg-purple-600 border-purple-900 text-white scale-105 shadow-xl' : 'bg-white border-blue-50 text-blue-900 hover:border-blue-200'}`}
                    >
                      <span className="text-2xl">✍️</span>
                      <span className="font-black text-[10px] uppercase">Manual Dispatch (Type)</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t-4 border-blue-50 flex flex-col items-center gap-6">
                 <button onClick={handleGlobalStart} className="bg-red-600 text-white px-16 py-6 rounded-[3rem] font-black shadow-3xl hover:bg-red-700 text-2xl uppercase tracking-[0.2em] border-b-8 border-red-900 active:translate-y-2 transition-all">Commence Dispatch →</button>
                 <Waffle dialogue={`Preparing ${quizConfig.count} ${quizConfig.answerMode === 'prose' ? 'prose entries' : 'parcels'}!`} mood="wink" />
              </div>
            </div>
          </div>
        );

      case 'learn':
        if (selectedTopic) {
          const currentIndex = ALL_LEARN_TOPICS.findIndex(t => t.id === selectedTopic.id);
          const nextTopic = ALL_LEARN_TOPICS[currentIndex + 1];
          const prevTopic = ALL_LEARN_TOPICS[currentIndex - 1];
          return (
            <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto pb-20 relative">
              {showConfigOverlay && (
                <div className="fixed inset-0 z-[100] bg-blue-900/40 backdrop-blur-md flex items-center justify-center p-6">
                  <div className="bg-white p-10 rounded-[4rem] shadow-3xl border-8 border-white max-w-md w-full space-y-8 animate-scaleIn text-center">
                    <h3 className="text-3xl font-black text-blue-900 tracking-tighter uppercase">Level {selectedTopic.moduleId} Dispatch</h3>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-gray-400 font-black uppercase text-[10px]">Volume</p>
                        <div className="flex justify-center gap-3">
                          {[5, 10, 20].map(n => (
                            <button key={n} onClick={() => setQuizConfig(p => ({ ...p, count: n }))} className={`w-12 h-12 rounded-full border-2 font-bold ${quizConfig.count === n ? 'bg-red-600 text-white border-red-800' : 'bg-red-50 text-red-600'}`}>{n}</button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-gray-400 font-black uppercase text-[10px]">Method</p>
                        <div className="flex justify-center gap-3">
                          <button onClick={() => setQuizConfig(p => ({ ...p, answerMode: 'mcq' }))} className={`px-4 py-2 rounded-xl font-bold border-2 ${quizConfig.answerMode === 'mcq' ? 'bg-blue-600 text-white border-blue-800' : 'bg-blue-50 text-blue-600'}`}>MCQ</button>
                          <button onClick={() => setQuizConfig(p => ({ ...p, answerMode: 'prose' }))} className={`px-4 py-2 rounded-xl font-bold border-2 ${quizConfig.answerMode === 'prose' ? 'bg-purple-600 text-white border-purple-800' : 'bg-purple-50 text-purple-600'}`}>Type</button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setQuizConfig(p => ({ ...p, mode: 'module' }));
                        startQuiz(selectedTopic.quiz, quizConfig.count);
                      }}
                      className="w-full bg-red-600 text-white py-4 rounded-2xl font-black shadow-lg"
                    >
                      Start Level Test
                    </button>
                    <button onClick={() => setShowConfigOverlay(false)} className="text-gray-400 font-black uppercase text-[10px] tracking-widest">Cancel</button>
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between bg-white p-6 rounded-[3rem] border-4 border-blue-50 shadow-xl sticky top-20 z-40">
                <button onClick={() => setSelectedTopic(null)} className="bg-gray-100 px-6 py-2 rounded-full text-blue-900 font-black hover:bg-gray-200 text-sm uppercase transition-colors">← Roadmap</button>
                <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3"><span className="text-4xl">{selectedTopic.icon}</span> {selectedTopic.title}</h2>
                <div className="bg-red-600 text-white px-4 py-1.5 rounded-full font-black text-[10px] uppercase">Level {selectedTopic.moduleId}</div>
              </div>
              <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-8">
                  <div className="bg-white p-8 rounded-[3rem] shadow-2xl border-2 border-orange-100 relative overflow-hidden min-h-[200px]">
                    <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-4">Educational Context</h3>
                    <p className="text-2xl font-bold text-gray-800 leading-tight mb-6">{selectedTopic.description}</p>
                    <div className="p-6 bg-blue-50 rounded-[2rem] border-2 border-blue-100 text-blue-900 font-bold italic text-lg shadow-inner">"{selectedTopic.why}"</div>
                  </div>
                  <div className="bg-white p-8 rounded-[3rem] shadow-2xl border-4 border-dashed border-gray-200 text-center space-y-8">
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase text-gray-400 font-black tracking-[0.3em]">Direct Speech</p>
                      <div className="text-3xl font-typewriter italic bg-white p-8 rounded-2xl border border-gray-100 shadow-sm leading-tight">"{selectedTopic.directExample}"</div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase text-green-500 font-black tracking-[0.3em]">Indirect Speech</p>
                      <div className="text-3xl font-typewriter text-green-700 bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm leading-tight">{selectedTopic.indirectExample}</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-8">
                   <Waffle dialogue={selectedTopic.waffleTip} mood="happy" />
                   {selectedTopic.infographics?.map((info, idx) => (
                     <div key={idx} className="bg-white p-8 rounded-[3rem] border-4 border-blue-50 shadow-2xl space-y-6">
                       <h4 className="text-center font-black text-blue-900 text-xl border-b-4 border-blue-50 pb-4 uppercase tracking-tighter">{info.header}</h4>
                       <div className="space-y-4">
                         {info.rows.map((r, i) => (
                           <div key={i} className="flex flex-col gap-1.5">
                             <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{r.label}</span>
                             <span className="bg-orange-50 p-4 rounded-2xl font-bold text-gray-800 shadow-inner text-sm border-l-4 border-orange-400">{r.value}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                   ))}
                   <button onClick={() => setShowConfigOverlay(true)} className="w-full bg-red-600 text-white py-6 rounded-[2.5rem] font-black shadow-2xl hover:bg-red-700 text-xl tracking-widest border-b-8 border-red-900 active:translate-y-2 transition-all uppercase">Take Level Exam</button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[4rem] border-4 border-blue-50 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 mt-12 border-dashed">
                {prevTopic ? (
                  <button onClick={() => setSelectedTopic(prevTopic)} className="flex flex-col items-center md:items-start group transition-transform hover:-translate-x-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Previous Level</span>
                    <span className="text-blue-900 font-black text-lg flex items-center gap-2">
                      <span className="text-2xl group-hover:scale-125 transition-transform">←</span> 
                      {prevTopic.moduleId}: {prevTopic.title.split(':')[0]}
                    </span>
                  </button>
                ) : <div className="hidden md:block" />}
                <Waffle dialogue="Squeak! Forwarding your training to the next hub!" mood="wink" size="sm" />
                {nextTopic ? (
                  <button onClick={() => setSelectedTopic(nextTopic)} className="flex flex-col items-center md:items-end group transition-transform hover:translate-x-2">
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Next Level</span>
                    <span className="text-blue-900 font-black text-lg flex items-center gap-2">
                      {nextTopic.moduleId}: {nextTopic.title.split(':')[0]}
                      <span className="text-2xl group-hover:scale-125 transition-transform">→</span>
                    </span>
                  </button>
                ) : (
                  <button onClick={() => setSection('quiz-setup')} className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-blue-700 transition-all shadow-lg">Final Exam 🏆</button>
                )}
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-12 animate-fadeIn pb-20">
            <div className="bg-white p-8 rounded-[3.5rem] border-4 border-blue-50 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 border-dashed">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-black text-blue-900 tracking-tight">Roadmap</h2>
                <p className="text-red-500 font-black uppercase tracking-[0.3em] text-xs mt-2">Specialised 30-Level Curriculum</p>
              </div>
              <Waffle dialogue="Choose a level to Dispatch your training!" mood="thinking" size="sm" />
            </div>
            <div className="space-y-20">
              {(Object.keys(CATEGORY_METADATA)).map(category => {
                const topics = groupedTopics[category as TopicCategory];
                if (!topics) return null;
                const meta = CATEGORY_METADATA[category];
                return (
                  <section key={category} className="space-y-8 animate-fadeIn">
                    <div className="flex items-center gap-4 border-b-8 border-blue-50 pb-6">
                      <span className="text-5xl bg-white w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl border-2 border-blue-50">{meta.icon}</span>
                      <div>
                        <h3 className="text-5xl font-black text-blue-900 uppercase tracking-tighter">{category}</h3>
                        <p className="text-blue-900/60 font-bold italic text-lg">{meta.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                      {topics.map(topic => (
                        <button key={topic.id} onClick={() => setSelectedTopic(topic)} className="group bg-white p-6 rounded-[2.5rem] shadow-lg border-2 border-transparent hover:border-red-500 hover:shadow-2xl transition-all text-left flex flex-col items-center text-center transform hover:-translate-y-2">
                          <div className="text-4xl mb-4 bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center shadow-inner">{topic.icon}</div>
                          <div className="space-y-1">
                             <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Lvl {topic.moduleId}</span>
                             <h4 className="font-black text-blue-900 text-sm leading-tight line-clamp-2 uppercase group-hover:text-red-600 transition-colors">{topic.title}</h4>
                          </div>
                        </button>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        );

      case 'practice':
      case 'master-delivery':
        if (quizQuestions.length === 0) return <div className="text-center py-20 font-black text-blue-900">No questions found.</div>;
        if (quizState.finished) {
          return (
            <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn py-10">
              <div className="bg-white p-12 rounded-[5rem] shadow-3xl text-center space-y-10 border-[16px] border-blue-50">
                <h2 className="text-7xl font-black text-blue-900 leading-none">Job Done!</h2>
                <div className="bg-blue-50 p-10 rounded-[3.5rem] border-4 border-blue-100 max-w-sm mx-auto">
                  <p className="text-xs font-black uppercase text-blue-400 mb-2 tracking-widest">Dispatch Accuracy</p>
                  <p className="text-7xl font-black text-blue-900">{Math.round((quizState.score / quizQuestions.length) * 100)}%</p>
                </div>
                <Waffle dialogue="Squeak! Excellent delivery work!" mood="happy" size="md" />
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => setShowReview(true)} className="flex-1 bg-blue-600 text-white py-6 rounded-[3rem] font-black shadow-xl hover:bg-blue-700 text-2xl uppercase border-b-8 border-blue-900 active:translate-y-1">
                    Review Results
                  </button>
                  <button onClick={() => { setSection('learn'); setShowReview(false); }} className="flex-1 bg-red-600 text-white py-6 rounded-[3rem] font-black shadow-xl hover:bg-red-700 text-2xl uppercase border-b-8 border-red-900 active:translate-y-1">Roadmap</button>
                </div>
              </div>
              {showReview && (
                <div className="space-y-8 animate-fadeIn pt-12 border-t-8 border-blue-50">
                  <h3 className="text-4xl font-black text-blue-900 text-center uppercase tracking-tighter">Full Dispatch Review</h3>
                  <div className="grid gap-8">
                    {quizQuestions.map((q, idx) => {
                      const userAns = userAnswers[idx];
                      const isCorrect = quizConfig.answerMode === 'prose' 
                        ? normalize(userAns || "") === normalize(q.correctAnswer)
                        : userAns === q.correctAnswer;

                      return (
                        <div key={idx} className={`bg-white p-10 rounded-[4rem] border-4 shadow-2xl transition-all ${isCorrect ? 'border-green-200' : 'border-red-200'}`}>
                          <div className="flex items-center gap-4 mb-6">
                             <span className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-md ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>{idx + 1}</span>
                             <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Question {idx + 1} of {quizQuestions.length}</span>
                          </div>
                          <div className="space-y-8">
                            <div>
                               <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Original Package:</p>
                               <div className="p-6 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 font-typewriter italic text-2xl text-gray-700 leading-relaxed">
                                 {q.category === 'Foundations' ? q.directSpeech : `"${q.directSpeech}"`}
                               </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <span className="text-[9px] font-black uppercase text-green-500 tracking-widest">Correct Re-Post:</span>
                                <div className="p-5 bg-green-50 text-green-800 rounded-2xl font-bold text-base border-l-8 border-green-500 shadow-sm">{q.correctAnswer}</div>
                              </div>
                              <div className="space-y-2">
                                <span className="text-[9px] font-black uppercase text-blue-500 tracking-widest">Your Dispatch:</span>
                                <div className={`p-5 rounded-2xl font-bold text-base border-l-8 shadow-sm ${isCorrect ? 'bg-green-50 text-green-800 border-green-500' : 'bg-red-50 text-red-800 border-red-500'}`}>
                                  {userAns || '(No Answer)'}
                                </div>
                              </div>
                            </div>
                            <div className="pt-6 border-t border-gray-100 flex gap-4">
                               <div className="shrink-0 text-3xl">🐹</div>
                               <div className="space-y-1">
                                  <p className="text-[10px] font-black text-blue-900 uppercase tracking-[0.2em]">Waffle's Sorting Manual:</p>
                                  <p className="text-gray-600 font-medium leading-relaxed italic">"{q.explanation}"</p>
                               </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        }
        const currentQ = quizQuestions[quizState.currentIndex];
        const isAnswered = !!userAnswers[quizState.currentIndex];
        return (
          <div className="animate-fadeIn max-w-5xl mx-auto space-y-6 pb-20">
            <div ref={questionTopRef} className="pt-20 -mt-20" />
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <div className="bg-white p-6 md:p-8 rounded-[3rem] shadow-3xl border-4 border-blue-50 relative min-h-[auto] flex flex-col justify-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 -rotate-12 translate-x-6 -translate-y-6 flex items-end justify-start p-4 text-3xl">📬</div>
                  <div className="absolute top-6 left-8 flex items-center gap-4">
                    <span className="bg-blue-600 text-white min-w-[2.5rem] h-8 px-2 rounded-xl flex items-center justify-center font-black text-base shadow-lg tracking-tight">{quizState.currentIndex + 1}</span>
                  </div>
                  <div className="space-y-6 relative z-10 pt-4">
                    <div className="space-y-3">
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] text-center">
                        {getInstructionLabel(currentQ)}
                      </p>
                      <div className="p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border-4 border-dashed border-gray-200 font-typewriter italic text-2xl md:text-3xl text-center leading-tight shadow-sm text-blue-900">
                        {currentQ.category === 'Foundations' ? currentQ.directSpeech : `"${currentQ.directSpeech}"`}
                      </div>
                    </div>

                    {quizConfig.answerMode === 'mcq' ? (
                      <div className="grid gap-3">
                        {currentQ.options.map((opt, i) => {
                          const isCorrect = opt === currentQ.correctAnswer;
                          const isSelected = userAnswers[quizState.currentIndex] === opt;
                          return (
                            <button key={i} disabled={isAnswered} onClick={() => handleAnswer(opt)} className={`p-4 md:p-5 rounded-[1.8rem] border-4 text-left font-black text-base md:text-lg transition-all flex items-center gap-4 ${isAnswered ? (isCorrect ? 'bg-green-100 border-green-500 text-green-900 shadow-inner' : isSelected ? 'bg-red-100 border-red-500 text-red-900' : 'opacity-40 grayscale blur-[1px]') : 'bg-white border-gray-100 hover:border-blue-500 hover:-translate-y-0.5 shadow-md hover:shadow-xl'}`}>
                              <span className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-xl shrink-0 ${isAnswered && isCorrect ? 'bg-green-600 text-white' : 'bg-blue-50 text-blue-600'}`}>{String.fromCharCode(65 + i)}</span>
                              <span className="leading-snug">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="space-y-4">
                         <div className="relative group">
                            <textarea 
                              disabled={isAnswered}
                              value={proseInput}
                              onChange={(e) => setProseInput(e.target.value)}
                              placeholder="Type your re-posted message here..."
                              className={`w-full p-8 md:p-10 min-h-[160px] rounded-[2.5rem] border-4 font-typewriter text-xl md:text-2xl transition-all outline-none resize-none shadow-inner ${isAnswered ? 'bg-gray-50 border-gray-200 text-gray-500' : 'bg-white border-blue-100 focus:border-blue-600 focus:shadow-2xl'}`}
                            />
                            {!isAnswered && (
                               <div className="absolute bottom-6 right-8 flex gap-2">
                                  <button 
                                    onClick={() => handleAnswer(proseInput)}
                                    className="bg-red-600 text-white px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-700 shadow-lg active:scale-95 transition-all"
                                  >
                                    Stamp Dispatch
                                  </button>
                               </div>
                            )}
                         </div>
                         {isAnswered && (
                           <div className="p-6 rounded-[2rem] bg-green-50 border-2 border-green-200 animate-fadeIn">
                             <p className="text-[10px] font-black uppercase text-green-500 tracking-widest mb-2">Expected Dispatch:</p>
                             <p className="font-typewriter text-xl text-green-800">{currentQ.correctAnswer}</p>
                           </div>
                         )}
                      </div>
                    )}
                  </div>
                </div>
                {isAnswered && (
                  <div className="bg-white p-8 md:p-10 rounded-[3rem] border-4 border-blue-50 shadow-2xl animate-fadeIn space-y-4 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                    <div className="flex items-center gap-3">
                       <span className="text-2xl">📖</span>
                       <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em]">Waffle's Sorting Manual</h4>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed italic group-hover:scale-[1.01] transition-transform">
                      "{currentQ.explanation}"
                    </p>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-[2.5rem] shadow-2xl border-4 border-blue-50 gap-4">
                   <div className="flex gap-2 items-center px-4 overflow-x-auto max-w-full pb-1 scrollbar-hide">
                     {quizQuestions.map((_, i) => {
                        const userAns = userAnswers[i];
                        const isAnsweredDot = !!userAns;
                        const isCorrectDot = quizConfig.answerMode === 'mcq' 
                          ? userAns === quizQuestions[i].correctAnswer
                          : normalize(userAns || "") === normalize(quizQuestions[i].correctAnswer);
                        const isCurrent = i === quizState.currentIndex;
                        return (
                          <div 
                            key={i} 
                            className={`h-2 rounded-full transition-all shrink-0 ${isAnsweredDot ? (isCorrectDot ? 'bg-green-500 w-2' : 'bg-red-500 w-2') : (isCurrent ? 'bg-blue-600 w-8' : 'bg-gray-100 w-2')}`} 
                          />
                        );
                     })}
                   </div>
                   <div className="flex gap-3 w-full sm:w-auto">
                     <button 
                        onClick={handlePrevious} 
                        disabled={quizState.currentIndex === 0} 
                        className="flex-1 sm:px-6 py-4 bg-gray-100 text-blue-900 rounded-[2rem] font-black shadow-md hover:bg-gray-200 disabled:opacity-30 transition-all uppercase tracking-widest text-xs border-b-4 border-gray-300 active:translate-y-1"
                      >
                        ← Prev
                      </button>
                     <button 
                        onClick={handleNext} 
                        disabled={!userAnswers[quizState.currentIndex]} 
                        className="flex-[2] sm:px-10 py-4 bg-red-600 text-white rounded-[2rem] font-black shadow-2xl hover:bg-red-700 disabled:opacity-50 transition-all uppercase tracking-[0.2em] border-b-8 border-red-900 active:translate-y-1"
                      >
                        {quizState.currentIndex === quizQuestions.length - 1 ? 'Finish!' : 'Next Mail →'}
                      </button>
                   </div>
                </div>
              </div>
              <div className="space-y-6 sticky top-24 h-fit">
                <Waffle dialogue={quizState.feedback || (isAnswered ? "Reviewing previous dispatch..." : (quizConfig.answerMode === 'prose' ? "Type your answer carefully!" : "Check every TRPT pillar for a safe delivery!"))} mood={quizState.mood} />
                <div className="bg-white p-6 rounded-[2.5rem] border-4 border-blue-50 shadow-xl border-dashed">
                  <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Live Dispatch Stats</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500">Mails Posted:</span>
                      <span className="font-black text-blue-900">{Object.keys(userAnswers).length} / {quizQuestions.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500">Correct Sorts:</span>
                      <span className="font-black text-green-600">{quizState.score}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-500">Sorting Mode:</span>
                      <span className="font-black text-purple-600 text-[10px] uppercase">{quizConfig.answerMode}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Section not found.</div>;
    }
  };
  return (
    <Layout activeSection={section} setSection={(s) => { setSection(s); setSelectedTopic(null); }}>
      <div id="app-top" />
      {renderContent()}
    </Layout>
  );
};

export default App;
