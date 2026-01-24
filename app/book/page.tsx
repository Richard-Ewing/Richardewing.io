'use client';

import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';
import Link from 'next/link';

export default function BookPage() {
    return (
        <div className="max-w-4xl w-full mx-auto relative z-10">
            <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cobalt/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-16 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cobalt/5 via-transparent to-red-500/5 pointer-events-none" />

                    <div className="relative">
                        {/* Publisher Badge - Psychology: Authority through association */}
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <div className="bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-full flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="font-mono text-xs text-red-400 uppercase tracking-widest">O'Reilly Media</span>
                            </div>
                            <span className="text-zinc-500 text-sm">Book Deal in Progress</span>
                        </div>

                        <span className="font-mono text-cobalt text-xs uppercase tracking-widest mb-4 block">Forthcoming Publication</span>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            The Product<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-cyan-400">Economist</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8 pb-8 border-b border-white/10">
                            Financial Fluency, AI Unit Economics, and Capital Allocation for Aspiring Executives.
                            <span className="text-white font-bold"> The playbook for breaking through the Senior Ceiling.</span>
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                            <div>
                                <h3 className="text-white font-bold mb-4 text-lg sm:text-xl flex items-center gap-2">
                                    <span className="w-1 h-6 bg-cobalt rounded-full" />
                                    The Premise
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    In every tech company, there's a <span className="text-white font-semibold">"Senior Ceiling."</span> High-performing leaders in Engineering and Product hit a wall. They're elite at shipping code, but illiterate in Capital Allocation.
                                </p>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    They view themselves as "builders," while their CEOs view them as <span className="text-red-400 font-semibold">"cost centers."</span>
                                </p>
                                <p className="text-white font-bold text-base leading-relaxed">
                                    This book is the manual for crossing that chasm. The language of the C-Suite isn't Python, Jira, or Figma—it's Finance.
                                </p>
                            </div>

                            <GlowCard className="p-6" glowColor="cobalt">
                                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 block">Key Frameworks</span>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 group">
                                        <span className="text-cobalt text-lg shrink-0 group-hover:scale-125 transition">◆</span>
                                        <span className="text-sm text-zinc-300"><strong className="text-white">The Specialization Trap:</strong> Why you were trained to ignore money.</span>
                                    </li>
                                    <li className="flex gap-3 group">
                                        <span className="text-cyan-400 text-lg shrink-0 group-hover:scale-125 transition">◆</span>
                                        <span className="text-sm text-zinc-300"><strong className="text-white">Financial Conway's Law:</strong> Architecture mirrors funding models.</span>
                                    </li>
                                    <li className="flex gap-3 group">
                                        <span className="text-red-400 text-lg shrink-0 group-hover:scale-125 transition">◆</span>
                                        <span className="text-sm text-zinc-300"><strong className="text-white">The AI Tax:</strong> Modeling the unit economics of GenAI.</span>
                                    </li>
                                    <li className="flex gap-3 group">
                                        <span className="text-gold text-lg shrink-0 group-hover:scale-125 transition">◆</span>
                                        <span className="text-sm text-zinc-300"><strong className="text-white">Q-PEP Protocols:</strong> Governance for measuring R&D yield.</span>
                                    </li>
                                </ul>
                            </GlowCard>
                        </div>

                        {/* Waitlist - Psychology: Scarcity + anticipation + exclusivity */}
                        <div className="pt-8 border-t border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Early Access List</span>
                                <span className="text-zinc-600 text-xs">|</span>
                                <span className="text-zinc-500 text-xs">Get exclusive chapter previews</span>
                            </div>
                            <form name="book-waitlist" method="POST" className="max-w-lg">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                        className="flex-1 bg-black/50 border border-zinc-800 text-white px-4 py-3 rounded-xl focus:border-cobalt focus:ring-1 focus:ring-cobalt/50 outline-none font-mono text-sm transition-all placeholder:text-zinc-700"
                                    />
                                    <ShineBorder borderColor="rgba(0, 85, 255, 0.6)" duration={2}>
                                        <button
                                            type="submit"
                                            className="bg-white text-black font-bold uppercase text-xs px-6 py-3 tracking-widest hover:bg-cobalt hover:text-white transition-colors w-full"
                                        >
                                            Join Waitlist →
                                        </button>
                                    </ShineBorder>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Additional Value */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mt-8">
                    <div className="text-center">
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">While You Wait</div>
                        <p className="text-zinc-400 mb-6">Start applying Product Economics principles today.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/doctrine" className="text-sm text-cyan-400 hover:text-white border-b border-cyan-400/30 hover:border-white transition">
                                Read The Doctrine →
                            </Link>
                            <Link href="/tools/pdi" className="text-sm text-red-400 hover:text-white border-b border-red-400/30 hover:border-white transition">
                                Try PDI Tool →
                            </Link>
                            <Link href="/tools/scoring" className="text-sm text-emerald-400 hover:text-white border-b border-emerald-400/30 hover:border-white transition">
                                Try Audit Interview →
                            </Link>
                            <Link href="/advisory" className="text-sm text-gold hover:text-white border-b border-gold/30 hover:border-white transition">
                                Book Advisory →
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
