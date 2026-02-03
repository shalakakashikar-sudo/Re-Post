
import React, { useState, useEffect, useMemo } from 'react';
import { Section, LearnTopic, QuizQuestion, TopicCategory, WaffleMood } from './types';
import Layout from './components/Layout';
import Waffle from './components/Waffle';
import { ALL_LEARN_TOPICS, MASTER_QUIZ_QUESTIONS } from './data';

const shuffle = <T,>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const App: React.FC = () => {
  const [section, setSection] = useState<Section>('home');
  const [selectedTopic, setSelectedTopic] = useState<LearnTopic | null>(null);
  
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  
  const [quizState, setQuizState] = useState({
    currentIndex: 0,
    score: 0,
    finished: false,
    feedback: null as string | null,
    mood: 'idle' as WaffleMood
  });

  const resetQuiz = () => {
    setUserAnswers({});
    setQuizState({
      currentIndex: 0,
      score: 0,
      finished: false,
      feedback: "Ready to sort some parcels? Squeak!",
      mood: 'excited'
    });
  };

  const handleStartTopicQuiz = (topic: LearnTopic) => {
    const prepared = shuffle(topic.quiz);
    setQuizQuestions(prepared);
    resetQuiz();
    setSection('practice');
  };

  const handleStartGrandExam = () => {
    const prepared = shuffle(MASTER_QUIZ_QUESTIONS).slice(0, 20);
    setQuizQuestions(prepared);
    resetQuiz();
    setSection('master-delivery');
  };

  const handleAnswer = (option: string) => {
    if (userAnswers[quizState.currentIndex]) return;
    
    const currentQ = quizQuestions[quizState.currentIndex];
    const isCorrect = option === currentQ.correctAnswer;
    
    setUserAnswers(prev => ({ ...prev, [quizState.currentIndex]: option }));
    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      feedback: isCorrect ? "Postal Perfection! Straight to the address!" : "Misfed! Check the TRPT stamps again.",
      mood: isCorrect ? 'star-eyes' : 'confused'
    }));
  };

  const handleNext = () => {
    if (quizState.currentIndex + 1 < quizQuestions.length) {
      setQuizState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        feedback: null,
        mood: 'idle'
      }));
    } else {
      setQuizState(prev => ({ ...prev, finished: true }));
    }
  };

  return (
    <Layout activeSection={section} setSection={(s) => { setSection(s); setSelectedTopic(null); }}>
      {section === 'home' && (
        <div className="flex flex-col items-center justify-center animate-fadeIn py-12">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-8">
              <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full font-black text-xs tracking-widest uppercase mb-4">The Official Grammar Post Office</div>
              <h2 className="text-7xl md:text-9xl font-black text-blue-900 tracking-tighter leading-[0.85]">Re-Post!</h2>
              <p className="text-xl md:text-3xl text-red-600 font-extrabold italic">"Don’t just Quote it, Re-Post it!"</p>
              <p className="text-gray-500 text-lg font-medium max-w-md">30 modules. 50 parcels each. Become a Master Postman of Direct & Indirect Speech.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button onClick={() => setSection('learn')} className="bg-red-600 text-white px-10 py-5 rounded-[2rem] font-black shadow-xl hover:bg-red-700 transition-all text-xl uppercase tracking-widest border-b-8 border-red-800 active:translate-y-1">Start Route</button>
                <button onClick={handleStartGrandExam} className="bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black shadow-xl hover:bg-blue-700 transition-all text-xl uppercase tracking-widest border-b-8 border-blue-800 active:translate-y-1">Grand Exam</button>
              </div>
            </div>
            <div className="flex justify-center">
              <Waffle dialogue={quizState.feedback} mood={quizState.mood} size="lg" />
            </div>
          </div>
        </div>
      )}

      {section === 'learn' && !selectedTopic && (
        <div className="space-y-10 animate-fadeIn pb-24">
          <div className="bg-white p-10 rounded-[3rem] border-4 border-blue-50 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-black text-blue-900">Training Roadmap</h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2">Complete all 30 sorting levels</p>
            </div>
            <Waffle mood="thinking" size="sm" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {ALL_LEARN_TOPICS.map(topic => (
              <button key={topic.id} onClick={() => setSelectedTopic(topic)} className="group bg-white p-6 rounded-[2.5rem] shadow-sm border-2 border-gray-100 hover:border-red-600 hover:shadow-2xl transition-all text-left flex flex-col items-center text-center">
                <div className="text-4xl mb-4 bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">{topic.icon}</div>
                <div className="space-y-1">
                   <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">Mod {topic.moduleId}</span>
                   <h4 className="font-black text-blue-900 text-lg leading-tight">{topic.title}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedTopic && section === 'learn' && (
        <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
          <div className="flex items-center justify-between bg-white p-6 rounded-[2.5rem] border-4 border-blue-50 shadow-xl sticky top-20 z-40">
            <button onClick={() => setSelectedTopic(null)} className="bg-gray-100 px-6 py-2 rounded-full text-blue-900 font-black hover:bg-gray-200">← Roadmap</button>
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3"><span className="text-3xl">{selectedTopic.icon}</span> {selectedTopic.title}</h2>
            <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full font-black text-[10px]">MOD {selectedTopic.moduleId}</span>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border-2 border-orange-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100%] opacity-50"></div>
                <h3 className="text-xs font-black text-orange-400 uppercase tracking-widest mb-4">Postal Mission</h3>
                <p className="text-2xl font-bold text-gray-800 leading-tight mb-6">{selectedTopic.description}</p>
                <div className="p-6 bg-blue-50 rounded-[2rem] border-2 border-blue-100 text-blue-900 font-bold italic text-lg">"{selectedTopic.why}"</div>
              </div>
              
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-dashed border-gray-200 text-center space-y-10">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase text-gray-400 font-black tracking-widest">Original Dispatch</p>
                  <div className="text-3xl font-typewriter italic bg-gray-50 p-6 rounded-2xl border border-gray-100">"{selectedTopic.directExample}"</div>
                </div>
                <div className="flex justify-center"><div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-3xl animate-bounce">📦</div></div>
                <div className="space-y-4">
                  <p className="text-[10px] uppercase text-green-400 font-black tracking-widest">The Re-Post</p>
                  <div className="text-3xl font-typewriter text-green-700 bg-green-50 p-6 rounded-2xl border border-green-100">{selectedTopic.indirectExample}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
               <Waffle dialogue={selectedTopic.waffleTip} mood="happy" />
               {selectedTopic.infographic && (
                 <div className="bg-white p-8 rounded-[3rem] border-4 border-blue-50 shadow-lg space-y-6">
                   <h4 className="text-center font-black text-blue-900 text-xl border-b-2 border-blue-50 pb-4">{selectedTopic.infographic.header}</h4>
                   <div className="space-y-4">
                     {selectedTopic.infographic.rows.map((r, i) => (
                       <div key={i} className="flex flex-col gap-1">
                         <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{r.label}</span>
                         <span className="bg-orange-50 p-4 rounded-2xl font-bold text-gray-700 shadow-inner">{r.value}</span>
                       </div>
                     ))}
                   </div>
                 </div>
               )}
               <button onClick={() => handleStartTopicQuiz(selectedTopic)} className="w-full bg-red-600 text-white py-6 rounded-[2.5rem] font-black shadow-2xl hover:bg-red-700 text-xl tracking-widest border-b-[12px] border-red-800 active:translate-y-2 active:border-b-4 transition-all">Deliver 50 Parcels</button>
            </div>
          </div>
        </div>
      )}

      {(section === 'practice' || section === 'master-delivery') && (
        <div className="animate-fadeIn max-w-5xl mx-auto space-y-8">
          {!quizState.finished ? (
            <div className="grid lg:grid-cols-4 gap-8 py-4">
              <div className="lg:col-span-3 space-y-8">
                <div className="bg-white p-12 rounded-[4rem] shadow-3xl border-4 border-blue-50 relative min-h-[500px] flex flex-col justify-center">
                  <div className="absolute top-8 left-12 flex items-center gap-4">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black">{quizState.currentIndex + 1}</span>
                    <span className="text-gray-400 font-black uppercase text-xs tracking-widest">Sorting Item</span>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-widest text-center">Original Message</p>
                      <div className="p-8 bg-gray-50 rounded-[2.5rem] border-4 border-dashed border-gray-200 font-typewriter italic text-4xl text-center leading-tight">
                        "{quizQuestions[quizState.currentIndex]?.directSpeech}"
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {quizQuestions[quizState.currentIndex]?.options.map((opt, i) => {
                        const isAnswered = !!userAnswers[quizState.currentIndex];
                        const isCorrect = opt === quizQuestions[quizState.currentIndex]?.correctAnswer;
                        const isSelected = userAnswers[quizState.currentIndex] === opt;
                        
                        return (
                          <button 
                            key={i} 
                            disabled={isAnswered} 
                            onClick={() => handleAnswer(opt)}
                            className={`p-6 rounded-[2rem] border-4 text-left font-black text-lg transition-all flex items-center gap-6 ${isAnswered ? (isCorrect ? 'bg-green-50 border-green-500 text-green-900' : isSelected ? 'bg-red-50 border-red-500 text-red-900' : 'opacity-30 grayscale') : 'bg-white border-gray-100 hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl'}`}
                          >
                            <span className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl ${isAnswered && isCorrect ? 'bg-green-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                              {String.fromCharCode(65 + i)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white p-6 rounded-[2.5rem] shadow-xl border-4 border-blue-50">
                   <div className="flex gap-2">
                     {quizQuestions.map((_, i) => (
                       <div key={i} className={`h-3 rounded-full transition-all ${userAnswers[i] ? (userAnswers[i] === quizQuestions[i].correctAnswer ? 'bg-green-400 w-3' : 'bg-red-400 w-3') : (i === quizState.currentIndex ? 'bg-blue-600 w-10' : 'bg-gray-100 w-3')}`} />
                     ))}
                   </div>
                   <button onClick={handleNext} disabled={!userAnswers[quizState.currentIndex]} className="px-12 py-5 bg-red-600 text-white rounded-[2rem] font-black shadow-xl hover:bg-red-700 disabled:opacity-50 transition-all uppercase tracking-widest border-b-4 border-red-800">
                     {quizState.currentIndex + 1 === quizQuestions.length ? 'Final Manifest' : 'Next Route →'}
                   </button>
                </div>
              </div>

              <div className="space-y-8">
                <Waffle dialogue={quizState.feedback || "Check the TRPT stamp!"} mood={quizState.mood} />
                {userAnswers[quizState.currentIndex] && (
                  <div className="bg-white p-8 rounded-[3rem] border-4 border-blue-50 shadow-xl animate-fadeIn space-y-4">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-b-2 border-blue-50 pb-2">Postal Logic</p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed italic">"{quizQuestions[quizState.currentIndex]?.explanation}"</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white p-16 rounded-[4rem] shadow-3xl text-center space-y-12 animate-scaleIn border-[16px] border-blue-50 max-w-3xl mx-auto py-24">
              <div className="space-y-4">
                <h2 className="text-7xl font-black text-blue-900 leading-none">Route Complete!</h2>
                <p className="text-gray-400 font-black uppercase tracking-widest">Manifest successfully delivered</p>
              </div>
              
              <div className="flex gap-6 justify-center">
                 <div className="bg-blue-50 p-10 rounded-[3rem] flex-1 border-4 border-blue-100">
                    <p className="text-xs font-black uppercase text-blue-400 mb-2 tracking-widest">Accuracy</p>
                    <p className="text-7xl font-black text-blue-900">{Math.round((quizState.score / quizQuestions.length) * 100)}%</p>
                 </div>
                 <div className="bg-orange-50 p-10 rounded-[3rem] flex-1 border-4 border-orange-100">
                    <p className="text-xs font-black uppercase text-orange-400 mb-2 tracking-widest">Success</p>
                    <p className="text-7xl font-black text-orange-900">{quizState.score}/{quizQuestions.length}</p>
                 </div>
              </div>
              
              <Waffle dialogue={quizState.score === quizQuestions.length ? "Master Postman! Flawless delivery!" : "Good effort! Let's polish those stamps next time."} mood={quizState.score > (quizQuestions.length / 2) ? 'star-eyes' : 'confused'} size="lg" />
              
              <div className="flex gap-4">
                <button onClick={() => setSection('home')} className="flex-1 bg-red-600 text-white py-6 rounded-[2.5rem] font-black shadow-xl hover:bg-red-700 text-2xl tracking-widest border-b-8 border-red-800 uppercase">Back to Office</button>
              </div>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default App;
