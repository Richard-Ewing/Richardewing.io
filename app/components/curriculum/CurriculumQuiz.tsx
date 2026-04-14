'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { Quiz } from '@/lib/curriculum-data';

export default function CurriculumQuiz({ quiz }: { quiz: Quiz }) {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const isCorrect = selectedIdx === quiz.correctIndex;

    return (
        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-6 mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-violet-500/10 text-violet-400 border-b border-l border-violet-500/20 text-[10px] font-mono uppercase tracking-widest rounded-bl-lg flex items-center gap-1">
                <HelpCircle className="w-3 h-3" />
                Knowledge Check
            </div>
            
            <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-6 pr-32">{quiz.question}</h3>
            
            <div className="space-y-3 mb-6">
                {quiz.options.map((option, idx) => {
                    const isSelected = selectedIdx === idx;
                    const isCorrectOption = idx === quiz.correctIndex;
                    
                    let bgClass = "bg-zinc-50 border-zinc-400 hover:bg-white/[0.05]";
                    let textClass = "text-zinc-900";
                    let icon = null;

                    if (hasSubmitted) {
                        if (isCorrectOption) {
                            bgClass = "bg-emerald-500/10 border-emerald-500/30";
                            textClass = "text-emerald-400 font-medium";
                            icon = <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
                        } else if (isSelected) {
                            bgClass = "bg-red-500/10 border-red-500/30";
                            textClass = "text-red-400 font-medium";
                            icon = <XCircle className="w-4 h-4 text-red-400" />;
                        }
                    } else if (isSelected) {
                        bgClass = "bg-cyan-500/10 border-cyan-500/50";
                        textClass = "text-cyan-400 font-medium";
                    }

                    return (
                        <button 
                            key={idx}
                            disabled={hasSubmitted}
                            onClick={() => setSelectedIdx(idx)}
                            className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${bgClass}`}
                        >
                            <div className={`w-5 h-5 rounded-full border shrink-0 mt-0.5 flex items-center justify-center ${isSelected && !hasSubmitted ? 'border-cyan-500 bg-cyan-500/20' : hasSubmitted && isCorrectOption ? 'border-emerald-500 bg-emerald-500/20' : hasSubmitted && isSelected && !isCorrectOption ? 'border-red-500 bg-red-500/20' : 'border-zinc-300'}`}>
                                {isSelected && !hasSubmitted && <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />}
                            </div>
                            <span className={textClass}>{option}</span>
                            <div className="ml-auto shrink-0 mt-0.5">{icon}</div>
                        </button>
                    );
                })}
            </div>

            {!hasSubmitted ? (
                <button 
                    disabled={selectedIdx === null}
                    onClick={() => setHasSubmitted(true)}
                    className="w-full py-3 rounded-lg font-bold text-sm bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    Submit Answer
                </button>
            ) : (
                <div className={`p-4 rounded-lg border flex items-start gap-3 ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                    <div className="shrink-0 mt-0.5">
                        {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
                    </div>
                    <div>
                        <div className={`text-sm font-bold mb-1 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                            {isCorrect ? 'Correct!' : 'Incorrect.'}
                        </div>
                        <p className="text-zinc-950 text-sm leading-relaxed">{quiz.explanation}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
