'use client';

import { useState } from 'react';

import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';

const articles = [
    {
        slug: "technical-insolvency-date",
        title: "The Technical Insolvency Date",
        description: "The exact quarter when maintenance costs mathematically consume 100% of engineering capacity.",
        date: "Jan 2026",
        readTime: "4 min read",
        source: "The Canon"
    },
    {
        slug: "innovation-tax",
        title: "The Innovation Tax",
        description: "Why 80% of your R&D budget is actually just keeping the lights on.",
        date: "Dec 2025",
        readTime: "6 min read",
        source: "Foundry"
    },
    {
        slug: "cost-of-predictivity",
        title: "The Cost of Predictivity",
        description: "As AI correctness increases, cost scales exponentially. The hidden unit economics of LLMs.",
        date: "Nov 2025",
        readTime: "5 min read",
        source: "Built In"
    },
    {
        slug: "feature-bloat-calculus",
        title: "Feature Bloat Calculus",
        description: "A framework for calculating the negative carry of unused features.",
        date: "Oct 2025",
        readTime: "4 min read",
        source: "Mind the Product"
    },
    {
        slug: "hacker-noon-ai",
        title: "AI Hallucinations as Technical Debt",
        description: "Treating probabilistic outputs as a liability class in your balance sheet.",
        date: "Sep 2025",
        readTime: "7 min read",
        source: "HackerNoon"
    }
];

export default function ArticlesPage() {
    const [filter, setFilter] = useState("All");
    const filters = ["All", "The Canon", "Foundry", "Built In", "Mind the Product", "HackerNoon"];

    const filteredArticles = filter === "All"
        ? articles
        : articles.filter(article => article.source === filter);

    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Knowledge</span><span>/</span><span className="text-cyan-400 font-bold">Canonical Hub</span>
            </div>

            <ScrollReveal>
                <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                    The Canonical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">Hub.</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
                    Core doctrine and economic frameworks. This is the source code for the Governance Conversion Engine.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${filter === f
                                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                                : 'bg-white/5 border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredArticles.map((article, i) => (
                        <Link key={article.slug} href={`/articles/${article.slug}`} className="group block h-full">
                            <GlowCard className="p-8 h-full flex flex-col justify-between hover:bg-white/5 transition-colors" glowColor={i % 2 === 0 ? "cyan" : "cobalt"}>
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{article.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                                            <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest border border-cyan-500/20 px-1.5 py-0.5 rounded">{article.source}</span>
                                        </div>
                                        <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">{article.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-grotesk">{article.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{article.description}</p>
                                </div>
                                <div className="mt-6 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    Read Article <span>→</span>
                                </div>
                            </GlowCard>
                        </Link>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
                <div className="mt-16 p-8 border border-white/10 rounded-2xl bg-white/[0.02] text-center">
                    <h3 className="text-white font-bold mb-2 font-grotesk">Subscribe for Updates</h3>
                    <p className="text-zinc-400 text-sm mb-6">Get notified when new frameworks are published.</p>
                    <Link href="/briefings" className="inline-block px-6 py-3 bg-white text-black font-bold uppercase text-xs rounded hover:bg-cyan-400 transition-colors">
                        Go to Briefings
                    </Link>
                </div>
            </ScrollReveal>
        </div>
    );
}
