'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { frameworks } from '../lib/data';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export default function FrameworksPage() {
    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <span>Operations</span><span>/</span><span className="text-cyan-900 font-extrabold">Frameworks</span>
            </div>

            <ScrollReveal>
                <div className="mb-12 border-b border-zinc-400 pb-12">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">Frameworks.</span>
                    </h1>
                    <p className="text-lg text-zinc-900 leading-relaxed max-w-2xl font-semibold">
                        The definitive axioms of enterprise AI economics, technical debt governance, and operational logic. <br />
                        <span className="text-zinc-950">Used by Fortune 500 boards and Private Equity operating partners.</span>
                    </p>
                </div>
            </ScrollReveal>

            {/* Frameworks List */}
            <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {frameworks.map((fw, i) => (
                        <Link
                            key={fw.slug}
                            href={`/articles/frameworks/${fw.slug}`}
                            className="group block h-full"
                        >
                            <div className="card h-full p-6 hover:border-cyan-500/50 transition-all flex flex-col bg-white">
                                <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-cyan-900 transition-colors font-grotesk">
                                    {fw.name}
                                </h3>
                                <p className="text-sm font-semibold text-zinc-900 mb-6 flex-grow line-clamp-3">
                                    {fw.definition}
                                </p>
                                <div className="text-xs font-bold uppercase tracking-widest text-cyan-900 flex items-center gap-2">
                                    Read Axiom <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
                <div className="bg-white border border-zinc-200 p-8 md:p-12 rounded-2xl text-zinc-950 font-semibold mb-20 border border-zinc-200">
                    <h2 className="text-2xl font-bold font-grotesk mb-4 text-cyan-900">Implement The Frameworks</h2>
                    <p className="text-zinc-800 max-w-2xl mb-8 leading-relaxed">
                        These frameworks are the theoretical foundation. To operationalize them within your own enterprise architecture, access our suite of diagnostic tools.
                    </p>
                    <Link 
                        href="/tools"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-cyan-50 transition-colors"
                    >
                        Access Diagnostics <span className="text-lg">→</span>
                    </Link>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
                <section className="mb-20">
                    <div className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                        <div className="space-y-1">
                            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                                Related Intel
                            </span>
                            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                                Supporting Research
                            </h2>
                        </div>

                        <div className="space-y-3 pt-2">
                            {RESEARCH_CORPUS.filter(art => art.domain === 'AI Economics' || art.domain === 'AI Governance').slice(0, 6).map((art) => (
                                <div key={art.id} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                                            <span className="text-cyan-900 uppercase">{art.publisher}</span>
                                            {art.date && <span className="text-zinc-500">• {art.date}</span>}
                                        </div>
                                        <h3 className="text-sm font-bold text-zinc-950">
                                            {art.title}
                                        </h3>
                                    </div>
                                    <a
                                        href={art.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 bg-cyan-900 text-white text-xs font-mono font-bold rounded-xl whitespace-nowrap self-start sm:self-center hover:bg-cyan-800"
                                    >
                                        Read Work ↗
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
