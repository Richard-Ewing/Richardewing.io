'use client';

import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';

export default function BookPage() {
    return (
        <div className="max-w-4xl w-full mx-auto relative z-10">
            <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-16">
                    {/* Publisher Badge - Psychology: Authority/credibility through association */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-danger/10 border border-danger/30 px-3 py-1.5 rounded-full">
                            <span className="font-mono text-[10px] text-danger uppercase tracking-widest">O'Reilly Media</span>
                        </div>
                        <span className="text-zinc-500 text-xs">Book Deal in Progress</span>
                    </div>

                    <span className="font-mono text-cobalt text-xs uppercase tracking-widest mb-4 block">Forthcoming Publication</span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">The Product <br />Economist</h1>
                    <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8 pb-8 border-b border-white/10">
                        Financial Fluency, AI Unit Economics, and Capital Allocation for Aspiring Executives.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                        <div>
                            <h3 className="text-white font-bold mb-4 text-lg sm:text-xl">The Premise</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                In every tech company, there is a <span className="text-white font-semibold">"Senior Ceiling."</span> High-performing leaders in Engineering and Product hit a wall. They are elite at shipping code, but illiterate in Capital Allocation.
                            </p>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                They view themselves as "builders," while their CEOs view them as <span className="text-danger font-semibold">"cost centers."</span>
                            </p>
                            <p className="text-white font-bold text-sm leading-relaxed">
                                This book is the manual for crossing that chasm. It argues that the language of the C-Suite is not Python, Jira, or Figma—it is Finance.
                            </p>
                        </div>

                        <GlowCard className="p-6" glowColor="cobalt">
                            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 block">Key Frameworks</span>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-cobalt text-lg shrink-0">•</span>
                                    <span className="text-sm text-zinc-300"><strong className="text-white">The Specialization Trap:</strong> Why you were trained to ignore money.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cobalt text-lg shrink-0">•</span>
                                    <span className="text-sm text-zinc-300"><strong className="text-white">Financial Conway's Law:</strong> Architecture mirrors funding models.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cobalt text-lg shrink-0">•</span>
                                    <span className="text-sm text-zinc-300"><strong className="text-white">The AI Tax:</strong> Modeling the unit economics of GenAI.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cobalt text-lg shrink-0">•</span>
                                    <span className="text-sm text-zinc-300"><strong className="text-white">Q-PEP Protocols:</strong> Governance for measuring R&D yield.</span>
                                </li>
                            </ul>
                        </GlowCard>
                    </div>

                    {/* Waitlist - Psychology: Scarcity + anticipation */}
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Early Access List</span>
                        </div>
                        <p className="text-zinc-400 text-sm mb-4">Be the first to know when the book launches. Early subscribers get exclusive chapter previews.</p>
                        <form name="book-waitlist" method="POST" className="max-w-md">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email@address.com"
                                    required
                                    className="flex-1 bg-black border border-zinc-800 text-white px-4 py-3 rounded-xl focus:border-cobalt outline-none font-mono text-sm transition-colors"
                                />
                                <ShineBorder borderColor="rgba(0, 85, 255, 0.6)" duration={2}>
                                    <button
                                        type="submit"
                                        className="bg-white text-black font-bold uppercase text-xs px-6 py-3 tracking-widest hover:bg-cobalt hover:text-white transition-colors w-full"
                                    >
                                        Join Waitlist
                                    </button>
                                </ShineBorder>
                            </div>
                        </form>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
