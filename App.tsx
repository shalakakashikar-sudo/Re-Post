
import React, { useState, useEffect } from 'react';
import { Section, ErrorType, LearnTopic, QuizQuestion, TopicCategory, WaffleMood } from './types';
import Layout from './components/Layout';
import Waffle from './components/Waffle';
import { WAFFLE_DIALOGUE } from './constants';
import { ALL_LEARN_TOPICS, MASTER_QUIZ_QUESTIONS } from './data';

const shuffle = <T,>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const prepareQuiz = (questions: QuizQuestion[]): QuizQuestion[] => {
  return shuffle(questions).map(q => ({
    ...q,
    options: shuffle(q.options)
  }));
};

const App: React.FC = () => {
  const [section, setSection] = useState<Section>('home');
  const [selectedTopic, setSelectedTopic] = useState<LearnTopic | null>(null);
  const [moduleQuizCount, setModuleQuizCount] = useState<number>(5);
  
  const [quizConfig, setQuizConfig] = useState({
    count: 10,
    categories: ['Foundations', 'Statements', 'Questions', 'Imperatives', 'Exclamations', 'Advanced', 'Mastery'] as TopicCategory[]
  });

  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showReview, setShowReview] = useState(false);

  const [quizState, setQuizState] = useState({
    currentIndex: 0,
    score: 0,
    finished: false,
    feedback: null as string | null,
    isCorrect: null as boolean | null,
    mood: 'idle' as WaffleMood
  });

  useEffect(() => {
    if (section === 'home') {
      const introTimer = setTimeout(() => {
        setQuizState(prev => ({ 
          ...prev, 
          feedback: "Squeak! I'm Waffle the Post-Hamster! Ready to master Direct and Indirect speech together?", 
          mood: 'excited' 
        }));
        // Doubled home intro feedback duration from 20 to 40 seconds
        setTimeout(() => {
          setQuizState(prev => ({ ...prev, feedback: null, mood: 'idle' }));
        }, 40000);
      }, 1000);
      return () => clearTimeout(introTimer);
    }
  }, [section]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [section, selectedTopic, quizState.currentIndex, quizState.finished, showReview]);

  const resetQuizState = () => {
    setQuizQuestions([]);
    setUserAnswers({});
    setShowReview(false);
    setQuizState({ 
      currentIndex: 0, 
      score: 0, 
      finished: false, 
      feedback: null, 
      isCorrect: null, 
      mood: 'idle'
    });
  };

  const handleStartCustomQuiz = () => {
    const filtered = MASTER_QUIZ_QUESTIONS.filter(q => {
      const parentTopic = ALL_LEARN_TOPICS.find(t => t.quiz.some(tq => tq.id === q.id));
      return parentTopic && quizConfig.categories.includes(parentTopic.category);
    });
    const sourcePool = filtered.length > 0 ? filtered : MASTER_QUIZ_QUESTIONS;
    const prepared = prepareQuiz(sourcePool).slice(0, quizConfig.count);
    setQuizQuestions(prepared);
    setUserAnswers({});
    setShowReview(false);
    setQuizState({ currentIndex: 0, score: 0, finished: false, feedback: null, isCorrect: null, mood: 'idle' });
    setSection('master-delivery');
  };

  const handleStartTopicQuiz = (topic: LearnTopic, count: number) => {
    if (topic.moduleId === 30) {
      setSection('quiz-setup');
      return;
    }
    
    // Sourcing logic: if requested count > module questions, pull from same category pool
    let questionPool = [...topic.quiz];
    if (count > questionPool.length) {
      const extraPool = MASTER_QUIZ_QUESTIONS.filter(q => {
        const qTopic = ALL_LEARN_TOPICS.find(t => t.quiz.some(tq => tq.id === q.id));
        return qTopic && qTopic.category === topic.category && !questionPool.some(existing => existing.id === q.id);
      });
      questionPool = [...questionPool, ...shuffle(extraPool)];
    }

    const prepared = prepareQuiz(questionPool).slice(0, count);
    setQuizQuestions(prepared);
    setUserAnswers({});
    setShowReview(false);
    setQuizState({ currentIndex: 0, score: 0, finished: false, feedback: null, isCorrect: null, mood: 'idle' });
    setSection('practice');
  };

  const getWaffleFeedback = (isCorrect: boolean, errorType: ErrorType) => {
    if (isCorrect) return WAFFLE_DIALOGUE.correct[Math.floor(Math.random() * WAFFLE_DIALOGUE.correct.length)];
    return (WAFFLE_DIALOGUE.errors[errorType] || WAFFLE_DIALOGUE.incorrect)[0];
  };

  const handleAnswer = (option: string) => {
    if (userAnswers[quizState.currentIndex]) return;
    const question = quizQuestions[quizState.currentIndex];
    const isCorrect = option === question.correctAnswer;
    const mood: WaffleMood = isCorrect ? 'star-eyes' : 'confused';
    setUserAnswers(prev => ({ ...prev, [quizState.currentIndex]: option }));
    setQuizState(prev => ({ 
      ...prev, 
      score: isCorrect ? prev.score + 1 : prev.score, 
      isCorrect, 
      feedback: getWaffleFeedback(isCorrect, question.errorType), 
      mood 
    }));
  };

  const handleNext = () => {
    if (quizState.currentIndex + 1 < quizQuestions.length) {
      setQuizState(prev => ({ ...prev, currentIndex: prev.currentIndex + 1, feedback: null, isCorrect: null, mood: 'idle' }));
    } else {
      setQuizState(prev => ({ ...prev, finished: true }));
    }
  };

  const handlePrev = () => {
    if (quizState.currentIndex > 0) {
      setQuizState(prev => ({ ...prev, currentIndex: prev.currentIndex - 1, feedback: null, isCorrect: null, mood: 'idle' }));
    }
  };

  const handleWaffleClick = () => {
    if (section === 'learn' && selectedTopic) {
      setQuizState(prev => ({ ...prev, feedback: selectedTopic.wittyRemark, mood: 'wink' }));
    } else {
      const general = WAFFLE_DIALOGUE.witty_remarks[Math.floor(Math.random() * WAFFLE_DIALOGUE.witty_remarks.length)];
      const moods: WaffleMood[] = ['cool', 'happy', 'excited', 'love'];
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setQuizState(prev => ({ ...prev, feedback: general, mood: randomMood }));
    }
    // Doubled click feedback duration from 16 to 32 seconds
    setTimeout(() => {
      setQuizState(prev => ({ ...prev, feedback: null, mood: 'idle' }));
    }, 32000);
  };

  const handleExitQuiz = () => {
    if (section === 'practice' && selectedTopic) setSection('learn');
    else if (section === 'module-quiz-setup' && selectedTopic) setSection('learn');
    else setSection('quiz-setup');
  };

  const categories: TopicCategory[] = ['Foundations', 'Statements', 'Questions', 'Imperatives', 'Exclamations', 'Advanced', 'Mastery'];

  return (
    <Layout activeSection={section} setSection={(s) => { setSection(s); setSelectedTopic(null); resetQuizState(); }}>
      {section === 'home' && (
        <div className="flex flex-col items-center justify-center animate-fadeIn py-8 min-h-[calc(100vh-140px)]">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-2">
                <h2 className="text-6xl md:text-8xl font-black text-red-600 tracking-tighter leading-none">Re-Post!</h2>
                <p className="text-lg md:text-2xl text-blue-900 font-extrabold italic bg-white/50 inline-block px-4 py-1 rounded-full shadow-sm">"Don’t just Quote it, Re-Post it!"</p>
              </div>
              <p className="text-gray-600 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                Join <span className="text-red-600 font-black">Waffle the Post-Hamster</span> on a 30-module journey to master Direct & Indirect speech with absolute clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={() => setSection('learn')} className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-red-700 transition-all text-xl uppercase tracking-wider">Start Route</button>
                <button onClick={() => setSection('quiz-setup')} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-all text-xl uppercase tracking-wider">Grand Delivery Exam</button>
              </div>
            </div>
            <div className="flex justify-center">
              <Waffle dialogue={quizState.feedback} mood={quizState.mood} onClick={handleWaffleClick} size="lg" />
            </div>
          </div>
        </div>
      )}

      {section === 'quiz-setup' && (
        <div className="max-w-2xl mx-auto animate-fadeIn space-y-8 py-4">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border-4 border-blue-50 text-center relative overflow-hidden">
            <button onClick={() => setSection('home')} className="absolute top-6 right-8 text-xs font-black text-gray-300 hover:text-red-600 uppercase tracking-widest transition-colors">Back to Home</button>
            <h2 className="text-4xl font-black text-blue-900 mb-2">Grand Delivery Setup</h2>
            <p className="text-gray-500 font-medium mb-10">Prepare your final route, Post-Hamster!</p>
            <div className="space-y-8 text-left">
              <div>
                <label className="text-xs font-black text-red-600 uppercase tracking-widest block mb-4">Total Deliveries</label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {[5, 10, 20, 30, 40, 50].map(n => (
                    <button key={n} onClick={() => setQuizConfig(prev => ({ ...prev, count: n }))} className={`py-4 rounded-2xl font-black transition-all border-2 ${quizConfig.count === n ? 'bg-red-600 text-white border-red-600 shadow-lg' : 'bg-white border-gray-100 text-gray-400 hover:border-red-200'}`}>{n}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-black text-red-600 uppercase tracking-widest block mb-4">Select Districts</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {categories.map(cat => (
                    <button key={cat} onClick={() => setQuizConfig(prev => ({ ...prev, categories: prev.categories.includes(cat) ? prev.categories.filter(c => c !== cat) : [...prev.categories, cat] }))} className={`px-5 py-4 rounded-2xl font-bold text-sm text-left border-2 transition-all flex items-center justify-between ${quizConfig.categories.includes(cat) ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm' : 'bg-white border-gray-100 text-gray-400 hover:border-blue-100'}`}>{cat}{quizConfig.categories.includes(cat) && <span className="text-blue-600 font-black text-xl">✓</span>}</button>
                  ))}
                </div>
              </div>
            </div>
            <button disabled={quizConfig.categories.length === 0} onClick={handleStartCustomQuiz} className="w-full bg-red-600 text-white py-6 rounded-[2rem] font-black shadow-xl hover:bg-red-700 transition-all text-2xl uppercase tracking-widest border-b-8 border-red-800 active:translate-y-1 active:border-b-4 mt-12 disabled:opacity-50">Start Grand Exam</button>
          </div>
          <div className="flex justify-center"><Waffle dialogue="Squeak! The final mixed route is the toughest!" mood="excited" size="md" /></div>
        </div>
      )}

      {section === 'module-quiz-setup' && selectedTopic && (
        <div className="max-w-xl mx-auto animate-fadeIn space-y-8 py-4">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border-4 border-red-50 text-center relative overflow-hidden">
            <button onClick={() => setSection('learn')} className="absolute top-6 right-8 text-xs font-black text-gray-300 hover:text-red-600 uppercase tracking-widest transition-colors">Cancel</button>
            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm border-2 border-red-100">
              {selectedTopic.icon}
            </div>
            <h2 className="text-3xl font-black text-blue-900 mb-2">Practice Setup</h2>
            <p className="text-gray-500 font-bold mb-8 uppercase tracking-widest text-[10px]">Module {selectedTopic.moduleId}: {selectedTopic.shortTitle}</p>
            
            <div className="space-y-8 text-left">
              <div>
                <label className="text-xs font-black text-red-600 uppercase tracking-widest block mb-4">Choose Number of Questions</label>
                <div className="grid grid-cols-4 gap-3">
                  {[5, 10, 15, 20].map(n => (
                    <button 
                      key={n} 
                      onClick={() => setModuleQuizCount(n)} 
                      className={`py-4 rounded-2xl font-black transition-all border-2 ${moduleQuizCount === n ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-white border-gray-100 text-gray-400 hover:border-blue-200'}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50/50 p-6 rounded-3xl border-2 border-blue-100">
                <p className="text-xs font-bold text-blue-900 leading-relaxed italic">
                  "If we need more than 4 questions, I'll pull extra parcels from other {selectedTopic.category} modules to keep you sharp! Squeak!"
                </p>
              </div>
            </div>

            <button 
              onClick={() => handleStartTopicQuiz(selectedTopic, moduleQuizCount)} 
              className="w-full bg-red-600 text-white py-6 rounded-3xl font-black shadow-xl hover:bg-red-700 transition-all text-xl uppercase tracking-widest border-b-8 border-red-800 active:translate-y-1 active:border-b-4 mt-10"
            >
              Start Practice
            </button>
          </div>
          <div className="flex justify-center"><Waffle mood="happy" size="md" /></div>
        </div>
      )}

      {section === 'learn' && !selectedTopic && (
        <div className="space-y-8 animate-fadeIn py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] border-4 border-blue-50 shadow-xl">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-black text-blue-900 mb-2">Study Roadmap</h2>
              <p className="text-gray-500 font-bold max-w-sm">30 Modules to absolute clarity.</p>
            </div>
            <Waffle dialogue="Pick your destination!" mood="thinking" size="sm" />
          </div>
          {categories.map(cat => {
            const catTopics = ALL_LEARN_TOPICS.filter(t => t.category === cat);
            if (catTopics.length === 0) return null;
            return (
              <div key={cat} className="space-y-6">
                <div className="flex items-center gap-6"><h3 className="text-xs font-black text-blue-900 uppercase tracking-[0.4em] px-4 py-2 bg-blue-50 rounded-xl">{cat}</h3><div className="h-0.5 flex-grow bg-blue-50"></div></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catTopics.map((topic) => (
                    <button key={topic.id} onClick={() => setSelectedTopic(topic)} className="bg-white p-6 rounded-3xl shadow-sm border-2 border-gray-100 hover:border-red-600 transition-all hover:shadow-2xl hover:-translate-y-1 group text-left flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4"><div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">{topic.icon}</div><div><div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Mod {topic.moduleId}</div><h4 className="text-lg font-black text-gray-800 leading-tight">{topic.shortTitle}</h4></div></div>
                      <p className="text-gray-500 text-xs font-bold line-clamp-2 mb-4">{topic.description}</p>
                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between"><span className="text-blue-600 text-[9px] font-black uppercase">Skill: {topic.exitSkill.slice(0, 15)}...</span><span className="text-red-600 font-black">→</span></div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {section === 'learn' && selectedTopic && (
        <div className="space-y-8 animate-fadeIn py-4 pb-20">
          <div className="flex items-center justify-between bg-white p-6 rounded-[2rem] border-4 border-blue-50 shadow-xl sticky top-20 z-40">
            <div className="flex items-center gap-6"><button onClick={() => setSelectedTopic(null)} className="bg-gray-100 w-12 h-12 rounded-2xl hover:bg-gray-200 transition-all flex items-center justify-center font-black text-xl text-blue-900">←</button><div><p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">Module {selectedTopic.moduleId}</p><h2 className="text-2xl font-black text-blue-900">{selectedTopic.title}</h2></div></div>
            <div className="text-3xl">{selectedTopic.icon}</div>
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border-2 border-orange-100 relative overflow-hidden"><div className="absolute top-0 left-0 w-24 h-24 bg-orange-50 rounded-full -translate-x-12 -translate-y-12"></div><h3 className="text-[10px] font-black text-orange-400 uppercase tracking-[0.3em] mb-4 relative z-10">Postal Goal</h3><p className="text-2xl text-gray-800 font-extrabold leading-tight mb-8 relative z-10">{selectedTopic.description}</p><div className="p-6 bg-blue-50/50 rounded-2xl border-2 border-blue-100 relative z-10"><p className="text-base text-blue-900 font-black italic">Rule: {selectedTopic.why}</p></div></div>
              <div className="postal-border border-[6px] p-1 rounded-[3rem] bg-white shadow-2xl overflow-hidden"><div className="bg-white p-10 space-y-10"><div><p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] text-center">The Direct Quote</p><div className="bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-gray-200 font-typewriter italic text-2xl text-gray-700 shadow-inner text-center">"{selectedTopic.directExample}"</div></div><div className="flex justify-center -my-8 relative z-20"><div className="bg-red-600 text-white px-8 py-3 rounded-full text-xs font-black shadow-xl uppercase tracking-[0.4em] transform -rotate-1">Transformation Route</div></div><div><p className="text-[10px] text-green-500 font-black uppercase tracking-[0.4em] text-center">The Indirect Re-Post</p><div className="bg-green-50 p-8 rounded-2xl border-2 border-green-100 font-typewriter text-2xl text-green-900 shadow-inner text-center">{selectedTopic.indirectExample}</div></div></div></div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="flex justify-center"><Waffle dialogue={selectedTopic.waffleTip} mood="happy" size="md" /></div>
              {selectedTopic.infographic && (
                <div className="bg-white border-4 border-blue-50 p-8 rounded-[2.5rem] shadow-xl animate-scaleIn"><h4 className="font-black text-blue-900 text-center text-xs mb-6 border-b border-blue-50 pb-4 uppercase tracking-widest">{selectedTopic.infographic.header}</h4><div className="space-y-5">{selectedTopic.infographic.rows.map((row, idx) => (<div key={idx} className="flex flex-col"><span className="font-black text-red-500 text-[10px] uppercase tracking-widest opacity-60 mb-2">{row.label}</span><span className="bg-orange-50/50 px-5 py-4 rounded-2xl font-bold text-orange-950 text-sm border-2 border-orange-100 shadow-sm">{row.value}</span></div>))}</div></div>
              )}
              <button onClick={() => setSection('module-quiz-setup')} className="w-full bg-red-600 text-white py-6 rounded-[2rem] font-black shadow-2xl hover:bg-red-700 transition-all text-xl uppercase tracking-widest border-b-8 border-red-800">
                {selectedTopic.moduleId === 30 ? "Sync Grand Exam" : "Take Practice Quiz"}
              </button>
            </div>
          </div>
        </div>
      )}

      {(section === 'practice' || section === 'master-delivery') && (
        <div className="animate-fadeIn max-w-4xl mx-auto space-y-12 py-4 pb-12">
          {!quizState.finished ? (
            <div className="space-y-10">
              <div className="flex justify-between items-center bg-white p-8 rounded-[2.5rem] border-4 border-blue-50 shadow-xl">
                <div className="flex-grow"><div className="flex justify-between items-center mb-4"><h3 className="text-blue-900 font-black uppercase text-[10px] tracking-[0.4em]">Sorting Route</h3><button onClick={handleExitQuiz} className="text-[10px] font-black text-red-400 hover:text-red-600 uppercase tracking-widest">Exit Delivery</button></div><div className="flex gap-2">{quizQuestions.map((_, i) => (<div key={i} className={`h-3 rounded-full transition-all duration-500 ${userAnswers[i] ? (userAnswers[i] === quizQuestions[i].correctAnswer ? 'bg-green-500 w-6' : 'bg-red-500 w-6') : i === quizState.currentIndex ? 'bg-blue-600 w-16' : 'bg-gray-100 w-6'}`} />))}</div></div>
                <div className="text-right pl-8 shrink-0"><span className="text-5xl font-black text-blue-900/10 leading-none">{quizState.currentIndex + 1}</span></div>
              </div>
              <div className="grid lg:grid-cols-3 gap-10 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border-4 border-blue-50 relative overflow-hidden min-h-[400px]">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-red-50 rounded-full translate-x-24 -translate-y-24 opacity-50"></div>
                    <div className="relative z-10 space-y-10">
                      <div><p className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-4">Direct Label:</p><div className="p-8 bg-gray-50/80 rounded-[2.5rem] border-4 border-dashed border-gray-200 shadow-inner"><p className="text-3xl font-typewriter italic text-gray-800 leading-tight">"{quizQuestions[quizState.currentIndex]?.directSpeech}"</p></div>{quizQuestions[quizState.currentIndex]?.context && (<p className="text-xs text-blue-900 font-bold italic mt-4 opacity-70">Hint: {quizQuestions[quizState.currentIndex].context}</p>)}</div>
                      <div className="grid gap-4">{quizQuestions[quizState.currentIndex]?.options.map((opt, i) => { const hasAnswered = !!userAnswers[quizState.currentIndex]; const isCorrectChoice = opt === quizQuestions[quizState.currentIndex].correctAnswer; const isUserChoice = userAnswers[quizState.currentIndex] === opt; return (<button key={i} disabled={hasAnswered} onClick={() => handleAnswer(opt)} className={`group p-6 rounded-3xl border-2 transition-all duration-300 font-bold text-base text-left flex items-center gap-6 ${hasAnswered ? isUserChoice ? isCorrectChoice ? 'bg-green-50 border-green-500 text-green-900 ring-4 ring-green-100' : 'bg-red-50 border-red-500 text-red-900 ring-4 ring-red-100' : isCorrectChoice ? 'bg-green-50 border-green-500' : 'opacity-40 grayscale scale-95' : 'bg-white border-gray-100 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-1'}`}><span className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center font-black transition-all ${hasAnswered && isCorrectChoice ? 'bg-green-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>{String.fromCharCode(65 + i)}</span><span className="leading-tight">{opt}</span></button>); })}</div>
                      {userAnswers[quizState.currentIndex] && (<div className="mt-8 p-8 bg-blue-50 rounded-[2.5rem] border-4 border-blue-100 animate-fadeIn"><p className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Postal Logic:</p><p className="text-base text-blue-900 font-black leading-relaxed">{quizQuestions[quizState.currentIndex]?.explanation}</p></div>)}
                    </div>
                  </div>
                  <div className="flex justify-between gap-4"><button onClick={handlePrev} disabled={quizState.currentIndex === 0} className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black border-4 border-blue-50 shadow-xl hover:bg-blue-50 disabled:opacity-30 transition-all uppercase tracking-widest text-sm">← Previous</button><button onClick={handleNext} disabled={!userAnswers[quizState.currentIndex]} className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-red-700 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all uppercase tracking-widest text-sm">{quizState.currentIndex + 1 === quizQuestions.length ? 'Finish Exam →' : 'Next Step →'}</button></div>
                </div>
                <div className="space-y-8 sticky top-24"><Waffle dialogue={quizState.feedback || "Sort accurately!"} mood={quizState.mood} size="md" /><div className="bg-white p-6 rounded-[2rem] border-4 border-blue-50 shadow-lg text-center space-y-2"><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Question Info</p><div className="text-sm font-bold text-blue-900 bg-blue-50/50 py-2 rounded-xl">Area: {quizQuestions[quizState.currentIndex]?.category}</div></div></div>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              {!showReview ? (
                <div className="bg-white p-14 rounded-[4rem] shadow-3xl text-center space-y-12 animate-scaleIn border-8 border-blue-50 max-w-2xl mx-auto">
                  <div className="space-y-4"><h2 className="text-5xl font-black text-gray-900 tracking-tight">Exam Complete!</h2><p className="text-gray-500 font-bold text-lg">Every message has been sorted and stamped.</p></div>
                  <div className="flex gap-8 justify-center"><div className="bg-blue-50 p-10 rounded-[3rem] flex-1 shadow-inner border-4 border-blue-100"><p className="text-xs font-black uppercase text-blue-400 mb-2 tracking-[0.3em]">Accuracy</p><p className="text-6xl font-black text-blue-900">{Math.round((quizState.score / quizQuestions.length) * 100)}%</p></div><div className="bg-orange-50 p-10 rounded-[3rem] flex-1 shadow-inner border-4 border-orange-100"><p className="text-xs font-black uppercase text-orange-400 mb-2 tracking-[0.3em]">Score</p><p className="text-6xl font-black text-orange-900">{quizState.score}/{quizQuestions.length}</p></div></div>
                  <div className="flex justify-center"><Waffle dialogue={quizState.score === quizQuestions.length ? "Absolute Mastery! Every letter reached its home! Squeak!" : "Great effort, Post-Hamster!"} mood={quizState.score > (quizQuestions.length / 2) ? 'star-eyes' : 'thinking'} size="md" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><button onClick={() => setShowReview(true)} className="bg-blue-600 text-white py-6 rounded-3xl font-black shadow-xl hover:bg-blue-700 transition-all text-xl uppercase tracking-widest">Review Manifest</button><button onClick={() => { if (selectedTopic) handleStartTopicQuiz(selectedTopic, moduleQuizCount); else handleStartCustomQuiz(); }} className="bg-orange-500 text-white py-6 rounded-3xl font-black shadow-xl hover:bg-orange-600 transition-all text-xl uppercase tracking-widest">Retake Exam</button><button onClick={() => { setSection('home'); resetQuizState(); }} className="md:col-span-2 bg-red-600 text-white py-6 rounded-3xl font-black shadow-xl hover:bg-red-700 transition-all text-xl uppercase tracking-widest border-b-8 border-red-800">Return Home</button></div>
                </div>
              ) : (
                <div className="space-y-8 animate-fadeIn">
                   <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-4 border-blue-50 flex items-center justify-between sticky top-20 z-[300]"><h2 className="text-3xl font-black text-blue-900 tracking-tight">Review Manifest</h2><button onClick={() => setShowReview(false)} className="bg-gray-100 text-red-600 px-8 py-4 rounded-2xl font-black text-sm hover:bg-red-50 transition-all shadow-sm">CLOSE REVIEW</button></div>
                   <div className="space-y-6">{quizQuestions.map((q, idx) => { const isCorrect = userAnswers[idx] === q.correctAnswer; return (<div key={idx} className={`bg-white p-10 rounded-[3rem] border-4 transition-all hover:shadow-2xl ${isCorrect ? 'border-green-100' : 'border-red-100'}`}><div className="flex items-center justify-between mb-8"><span className="text-xs font-black uppercase text-gray-400 tracking-[0.3em]">Delivery #{idx + 1}</span><span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{isCorrect ? 'SUCCESS' : 'MISROUTED'}</span></div><div className="bg-gray-50 p-8 rounded-3xl border-2 border-dashed border-gray-200 mb-8"><p className="font-typewriter italic text-2xl text-gray-800 text-center">"{q.directSpeech}"</p></div><div className="grid md:grid-cols-2 gap-6 mb-8"><div className={`p-6 rounded-2xl border-4 ${isCorrect ? 'border-green-500 bg-green-50/50' : 'border-red-500 bg-red-50/50'}`}><p className="text-[10px] font-black uppercase opacity-60 mb-2">Your Label:</p><p className="font-bold text-base">{userAnswers[idx] || 'No answer'}</p></div>{!isCorrect && (<div className="p-6 rounded-2xl border-4 border-green-500 bg-green-50/50"><p className="text-[10px] font-black uppercase opacity-60 mb-2">Correct Label:</p><p className="font-bold text-base">{q.correctAnswer}</p></div>)}</div><div className="p-8 bg-blue-50/50 rounded-[2rem] border-2 border-blue-100"><p className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Postal Reasoning:</p><p className="text-base font-black text-gray-700 leading-relaxed">{q.explanation}</p></div></div>); })}</div>
                   <div className="flex justify-center py-12"><button onClick={() => setShowReview(false)} className="bg-red-600 text-white px-16 py-6 rounded-3xl font-black shadow-2xl hover:bg-red-700 hover:scale-105 transition-all uppercase tracking-widest text-xl">Done with Manifest</button></div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default App;
