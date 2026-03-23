'use client';

import Link from 'next/link';
import { glossaryTerms, glossaryCategories } from './terms';
import { ScrollReveal } from '../components/magicui/scroll-reveal';

export default function GlossaryContent() {
    const termsByCategory = glossaryCategories.map(cat => ({
        category: cat,
        terms: glossaryTerms.filter(t => t.category === cat),
    })).filter(g => g.terms.length > 0);

    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Knowledge</span><span>/</span><span className="text-cyan-400 font-bold">Glossary</span>
            </div>

            <ScrollReveal>
                <div className="mb-12 border-b border-white/10 pb-12">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                        Technology & AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">Glossary.</span>
                    </h1>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        {glossaryTerms.length}+ terms defined with rich explanations, practical FAQs, and links to free diagnostic tools.
                        <br />
                        <span className="text-white">Technical debt, AI economics, SaaS metrics, product management, and engineering leadership — explained.</span>
                    </p>
                </div>
            </ScrollReveal>

            {termsByCategory.map((group, gi) => (
                <ScrollReveal key={group.category} delay={gi * 100}>
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 font-grotesk flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            {group.category}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {group.terms.map(term => (
                                <Link
                                    key={term.slug}
                                    href={`/glossary/${term.slug}`}
                                    className="group block"
                                >
                                    <div className="card p-5 h-full hover:border-cyan-500/50 transition-all">
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-grotesk">
                                            {term.title}
                                        </h3>
                                        <p className="text-sm text-zinc-500 line-clamp-3">
                                            {term.definition.slice(0, 160)}...
                                        </p>
                                        <div className="mt-3 text-xs font-bold uppercase tracking-widest text-cyan-500 group-hover:text-cyan-300">
                                            Read Definition →
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            ))}

            {/* Bottom CTA — currently missing! */}
            <div className="text-center py-16 border-t border-white/10">
                <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Need help applying these concepts?</h2>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                    Our diagnostic tools put these definitions into practice — try one free.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/tools/pdi"
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cobalt rounded-lg text-white font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
                    >
                        Run Free PDI Assessment
                    </Link>
                    <Link
                        href="/advisory"
                        className="px-8 py-4 border border-white/20 rounded-lg text-white font-bold uppercase tracking-widest text-sm hover:border-white/40 transition-colors"
                    >
                        Book Advisory Session →
                    </Link>
                </div>
            </div>
        </div>
    );
}
