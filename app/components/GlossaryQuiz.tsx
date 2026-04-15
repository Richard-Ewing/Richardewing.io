'use client';

import { useState } from 'react';

interface QuizQuestion {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
}

export default function GlossaryQuiz({ quiz, title }: { quiz: QuizQuestion[]; title: string }) {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    const q = quiz[currentQ];

    const handleSelect = (idx: number) => {
        if (selected !== null) return;
        setSelected(idx);
        setShowExplanation(true);
        if (idx === q.answer) setScore(s => s + 1);
    };

    const handleNext = () => {
        if (currentQ + 1 >= quiz.length) {
            setFinished(true);
        } else {
            setCurrentQ(c => c + 1);
            setSelected(null);
            setShowExplanation(false);
        }
    };

    if (finished) {
        const pct = Math.round((score / quiz.length) * 100);
        return (
            <section className="mb-12 card p-8 border-violet-500/20">
                <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">🧠 Quiz Results: {title}</h2>
                <div className="text-center py-8">
                    <div className="text-5xl font-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mb-2">{pct}%</div>
                    <div className="text-lg text-zinc-950 mb-2">{score} / {quiz.length} correct</div>
                    <div className="text-sm font-semibold text-zinc-900 font-medium">
                        {pct >= 80 ? '🎉 Excellent! You have a strong understanding.' : pct >= 50 ? '👍 Good start! Review the sections above to strengthen your knowledge.' : '📚 Keep learning! Review the definition and how-to-apply sections above.'}
                    </div>
                </div>
                <button onClick={() => { setCurrentQ(0); setSelected(null); setScore(0); setFinished(false); setShowExplanation(false); }} className="w-full px-6 py-3 rounded-lg bg-white/5 border border-zinc-400 text-zinc-950 hover:text-zinc-900 hover:border-violet-500/30 transition-colors text-sm font-semibold font-bold">
                    Retake Quiz
                </button>
            </section>
        );
    }

    return (
        <section className="mb-12 card p-8 border-violet-500/20">
            <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-2">🧠 Test Your Knowledge: {title}</h2>
            <div className="text-xs font-bold font-mono text-zinc-950 font-bold mb-6">Question {currentQ + 1} of {quiz.length}</div>

            <div className="mb-6">
                <h3 className="text-lg font-bold text-zinc-950 mb-4">{q.question}</h3>
                <div className="space-y-2">
                    {q.options.map((opt, idx) => {
                        let cls = 'border-zinc-400 hover:border-violet-500/30';
                        if (selected !== null) {
                            if (idx === q.answer) cls = 'border-emerald-500/50 bg-emerald-500/10';
                            else if (idx === selected) cls = 'border-red-500/50 bg-red-500/10';
                        }
                        return (
                            <button key={idx} onClick={() => handleSelect(idx)} disabled={selected !== null}
                                className={`w-full text-left p-4 rounded-xl border transition-colors ${cls} ${selected === null ? 'cursor-pointer' : 'cursor-default'}`}>
                                <span className="text-xs font-bold font-mono text-zinc-950 font-bold mr-3">{String.fromCharCode(65 + idx)}</span>
                                <span className={`text-sm font-semibold ${selected !== null && idx === q.answer ? 'text-emerald-900 font-extrabold font-semibold' : 'text-zinc-900'}`}>{opt}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {showExplanation && (
                <div className="mb-6 p-4 rounded-xl bg-zinc-50 border border-zinc-400">
                    <div className="text-xs font-bold font-mono text-cyan-500 uppercase tracking-widest mb-2">Explanation</div>
                    <p className="text-sm font-semibold text-zinc-900 font-medium">{q.explanation}</p>
                </div>
            )}

            {selected !== null && (
                <button onClick={handleNext} className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity text-sm">
                    {currentQ + 1 >= quiz.length ? 'See Results' : 'Next Question →'}
                </button>
            )}
        </section>
    );
}
