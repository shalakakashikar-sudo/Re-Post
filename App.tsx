
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Section, LearnTopic, QuizQuestion, WaffleMood, TopicCategory } from './types';
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

const CATEGORY_METADATA: Record<TopicCategory, { description: string, icon: string }> = {
  'Foundations': { description: 'Sentence types, TRPT framework, and basic shifts.', icon: '🏗️' },
  'Statements': { description: 'Converting declarations with full backshift rules.', icon: '✉️' },
  'Questions': { description: 'Handling inquiries with if/whether and Wh-words.', icon: '❓' },
  'Imperatives': { description: 'Converting orders, requests, and advice.', icon: '❗' },
  'Exclamations': { description: 'Mapping emotions to descriptive reporting verbs.', icon: '🎉' },
  'Advanced': { description: 'Conditionals, mixed sentences, and layered reporting.', icon: '🖇️' },
  'Mastery': { description: 'Expert reverse conversion and error diagnosis.', icon: '🏆' }
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

  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [section, selectedTopic]);

  const groupedTopics = useMemo(() => {
    const groups: Partial<Record<TopicCategory, LearnTopic[]>> = {};
    ALL_LEARN_TOPICS.forEach(topic => {
      if (!groups[topic.category]) groups[topic.category] = [];
      groups[topic.category]!.push(topic);
    });
    return groups;
  }, []);

  const resetQuiz = (msg = "Ready for sorting? Squeak!") => {
    setUserAnswers({});
    setQuizState({
      currentIndex: 0,
      score: 0,
      finished: false,
      feedback: msg,
      mood: 'excited'
    });
  };

  const handleStartTopicQuiz = (topic: LearnTopic) => {
    if (!topic.quiz || topic.quiz.length === 0) return;
    setQuizQuestions(shuffle(topic.quiz).slice(0, 10));
    resetQuiz(`Level ${topic.moduleId} Challenge!`);
    setSection('practice');
  };

  const handleStartGrandExam = () => {
    if (!MASTER_QUIZ_QUESTIONS.length) return;
    setQuizQuestions(shuffle(MASTER_QUIZ_QUESTIONS).slice(0, 20));
    resetQuiz("Grand Certification: 20 Questions!");
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
      feedback: isCorrect ? "Correct! Rule applied perfectly." : "Error! Re-check the TRPT pillars.",
      mood: isCorrect ? 'star-eyes' : 'confused'
    }));
  };

  const handleNext = () => {
    if (quizState.currentIndex + 1 < quizQuestions.length) {
      setQuizState(prev => ({ ...prev, currentIndex: prev.currentIndex + 1, feedback: null, mood: 'idle' }));
    } else {
      setQuizState(prev => ({ ...prev, finished: true }));
    }
  };

  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center animate-fadeIn py-8 min-h-[70vh]">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left space-y-6">
                <div className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full font-black text-xs tracking-widest uppercase mb-2 animate-bounce">Grammar Path Ready</div>
                <h2 className="text-8xl md:text-9xl font-black text-blue-900 tracking-tighter leading-[0.8] mb-4">Re-Post!</h2>
                <p className="text-2xl md:text-4xl text-red-600 font-extrabold italic mb-6">"Don’t just Quote it, Re-Post it!"</p>
                <p className="text-gray-600 text-xl font-medium max-w-lg leading-relaxed">
                  Join <span className="text-orange-600 font-black underline decoration-wavy">Waffle the Post-Hamster</span> on a 30-level journey to master Direct and Indirect Speech.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button onClick={() => setSection('learn')} className="bg-red-600 text-white px-10 py-5 rounded-[2.5rem] font-black shadow-2xl hover:bg-red-700 transition-all text-xl uppercase tracking-widest border-b-8 border-red-900 active:translate-y-2 active:border-b-0">Start Training</button>
                  <button onClick={handleStartGrandExam} className="bg-blue-600 text-white px-10 py-5 rounded-[2.5rem] font-black shadow-2xl hover:bg-blue-700 transition-all text-xl uppercase tracking-widest border-b-8 border-blue-900 active:translate-y-2 active:border-b-0">Grand Exam</button>
                </div>
              </div>
              <div className="flex justify-center">
                <Waffle dialogue="Squeak! Time to deliver some grammar!" mood="excited" size="lg" />
              </div>
            </div>
          </div>
        );

      case 'quiz-setup':
        return (
          <div className="animate-fadeIn max-w-5xl mx-auto space-y-12 py-10">
            <div className="bg-white p-10 rounded-[4rem] border-4 border-dashed border-blue-100 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-postal-stripes"></div>
              <h2 className="text-5xl font-black text-blue-900 uppercase tracking-tighter mb-4">The Sorting Station</h2>
              <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">Choose your delivery method! Master a level or take the final certification.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div onClick={() => setSection('learn')} className="group bg-white p-10 rounded-[3.5rem] shadow-xl border-4 border-transparent hover:border-red-500 transition-all cursor-pointer transform hover:-translate-y-2">
                <div className="text-7xl mb-6 bg-red-50 w-24 h-24 rounded-3xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-3xl font-black text-blue-900 mb-4 uppercase tracking-tighter">Level Practice</h3>
                <p className="text-gray-600 font-medium mb-8 leading-relaxed">Master specific rules like Tense backshift, Pronouns, or Questions one level at a time.</p>
                <div className="bg-red-600 text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest text-sm border-b-4 border-red-900">Choose Module</div>
              </div>
              <div onClick={handleStartGrandExam} className="group bg-white p-10 rounded-[3.5rem] shadow-xl border-4 border-transparent hover:border-blue-500 transition-all cursor-pointer transform hover:-translate-y-2">
                <div className="text-7xl mb-6 bg-blue-50 w-24 h-24 rounded-3xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-3xl font-black text-blue-900 mb-4 uppercase tracking-tighter">Grand Exam</h3>
                <p className="text-gray-600 font-medium mb-8 leading-relaxed">The ultimate certification. 20 random parcels from across all 30 levels of the curriculum.</p>
                <div className="bg-blue-600 text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest text-sm border-b-4 border-blue-900">Begin Exam</div>
              </div>
            </div>
          </div>
        );

      case 'learn':
        if (selectedTopic) {
          return (
            <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-20">
              <div className="flex items-center justify-between bg-white p-6 rounded-[3rem] border-4 border-blue-50 shadow-xl sticky top-20 z-40">
                <button onClick={() => setSelectedTopic(null)} className="bg-gray-100 px-6 py-2 rounded-full text-blue-900 font-black hover:bg-gray-200 text-sm uppercase">← Roadmap</button>
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
                   <button onClick={() => handleStartTopicQuiz(selectedTopic)} className="w-full bg-red-600 text-white py-6 rounded-[2.5rem] font-black shadow-2xl hover:bg-red-700 text-xl tracking-widest border-b-8 border-red-900 active:translate-y-2 transition-all uppercase">Start Level Test</button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-12 animate-fadeIn pb-20">
            <div className="bg-white p-8 rounded-[3.5rem] border-4 border-blue-50 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 border-dashed">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-black text-blue-900 tracking-tight">Learning Roadmap</h2>
                <p className="text-red-500 font-black uppercase tracking-[0.3em] text-xs mt-2">Specialised 30-Level Curriculum</p>
              </div>
              <Waffle dialogue="Squeak! Every level makes you a better postman!" mood="thinking" size="sm" />
            </div>
            <div className="space-y-20">
              {(Object.keys(CATEGORY_METADATA) as TopicCategory[]).map(category => {
                const topics = groupedTopics[category];
                if (!topics) return null;
                const meta = CATEGORY_METADATA[category];
                return (
                  <section key={category} className="space-y-8 animate-fadeIn">
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b-8 border-blue-50 pb-6 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-4">
                          <span className="text-5xl bg-white w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl border-2 border-blue-50">{meta.icon}</span>
                          <h3 className="text-5xl font-black text-blue-900 uppercase tracking-tighter">{category}</h3>
                        </div>
                        <div className="bg-blue-50/50 p-6 rounded-[2rem] border-l-8 border-blue-500 mt-4 max-w-4xl">
                          <p className="text-blue-900 font-bold italic text-xl leading-tight">{meta.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                      {topics.map(topic => (
                        <button key={topic.id} onClick={() => setSelectedTopic(topic)} className="group bg-white p-6 rounded-[2.5rem] shadow-lg border-2 border-transparent hover:border-red-500 hover:shadow-2xl transition-all text-left flex flex-col items-center text-center transform hover:-translate-y-2">
                          <div className="text-4xl mb-4 bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center shadow-inner">{topic.icon}</div>
                          <div className="space-y-1">
                             <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Level {topic.moduleId}</span>
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
        if (quizQuestions.length === 0) return <div>No questions loaded.</div>;
        if (quizState.finished) {
          return (
            <div className="bg-white p-12 rounded-[5rem] shadow-3xl text-center space-y-10 animate-scaleIn border-[16px] border-blue-50 max-w-3xl mx-auto py-16">
              <h2 className="text-7xl font-black text-blue-900 leading-none">Job Done!</h2>
              <div className="bg-blue-50 p-10 rounded-[3.5rem] border-4 border-blue-100 max-w-sm mx-auto">
                <p className="text-xs font-black uppercase text-blue-400 mb-2 tracking-widest">Accuracy Score</p>
                <p className="text-7xl font-black text-blue-900">{Math.round((quizState.score / quizQuestions.length) * 100)}%</p>
              </div>
              <Waffle dialogue="Squeak! Return home to view your next mission!" mood="happy" size="md" />
              <button onClick={() => setSection('home')} className="w-full bg-red-600 text-white py-6 rounded-[3rem] font-black shadow-2xl hover:bg-red-700 text-2xl uppercase">Return Home</button>
            </div>
          );
        }
        const currentQ = quizQuestions[quizState.currentIndex];
        return (
          <div className="animate-fadeIn max-w-5xl mx-auto space-y-8 pb-20">
            <div className="grid lg:grid-cols-4 gap-8 py-4">
              <div className="lg:col-span-3 space-y-8">
                <div className="bg-white p-10 rounded-[4rem] shadow-3xl border-4 border-blue-50 relative min-h-[500px] flex flex-col justify-center">
                  <div className="absolute top-8 left-10 flex items-center gap-4">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg">{quizState.currentIndex + 1}</span>
                    <span className="text-gray-400 font-black uppercase text-xs tracking-[0.3em]">{section === 'master-delivery' ? 'Exam Parcel' : 'Level Challenge'}</span>
                  </div>
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] text-center">Transform this speech:</p>
                      <div className="p-8 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border-4 border-dashed border-gray-200 font-typewriter italic text-3xl text-center leading-tight shadow-sm">"{currentQ.directSpeech}"</div>
                    </div>
                    <div className="grid gap-4">
                      {currentQ.options.map((opt, i) => {
                        const isAnswered = !!userAnswers[quizState.currentIndex];
                        const isCorrect = opt === currentQ.correctAnswer;
                        const isSelected = userAnswers[quizState.currentIndex] === opt;
                        return (
                          <button key={i} disabled={isAnswered} onClick={() => handleAnswer(opt)} className={`p-6 rounded-[2rem] border-4 text-left font-black text-lg transition-all flex items-center gap-6 ${isAnswered ? (isCorrect ? 'bg-green-100 border-green-500 text-green-900' : isSelected ? 'bg-red-100 border-red-500 text-red-900' : 'opacity-40 grayscale blur-[1px]') : 'bg-white border-gray-100 hover:border-blue-500 hover:-translate-y-1'}`}>
                            <span className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 ${isAnswered && isCorrect ? 'bg-green-600 text-white' : 'bg-blue-50 text-blue-600'}`}>{String.fromCharCode(65 + i)}</span>
                            <span className="leading-tight">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white p-6 rounded-[3rem] shadow-2xl border-4 border-blue-50">
                   <div className="flex gap-2 items-center px-4 overflow-x-auto max-w-full pb-2">
                     {quizQuestions.map((_, i) => (
                       <div key={i} className={`h-3 rounded-full transition-all shrink-0 ${userAnswers[i] ? (userAnswers[i] === quizQuestions[i].correctAnswer ? 'bg-green-500 w-3' : 'bg-red-500 w-3') : (i === quizState.currentIndex ? 'bg-blue-600 w-12' : 'bg-gray-100 w-3')}`} />
                     ))}
                   </div>
                   <button onClick={handleNext} disabled={!userAnswers[quizState.currentIndex]} className="px-10 py-4 bg-red-600 text-white rounded-[2rem] font-black shadow-2xl hover:bg-red-700 disabled:opacity-50 transition-all uppercase tracking-[0.2em] whitespace-nowrap">Next Question →</button>
                </div>
              </div>
              <div className="space-y-8">
                <Waffle dialogue={quizState.feedback || "Apply the TRPT rules!"} mood={quizState.mood} />
                {userAnswers[quizState.currentIndex] && (
                  <div className="bg-white p-8 rounded-[3rem] border-4 border-blue-50 shadow-2xl animate-fadeIn space-y-4">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-b-2 border-blue-50 pb-2">Waffle's Explanation</p>
                    <p className="text-lg font-bold text-gray-700 leading-relaxed italic">"{currentQ.explanation}"</p>
                  </div>
                )}
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
      <div ref={contentRef} />
      {renderContent()}
    </Layout>
  );
};

export default App;
