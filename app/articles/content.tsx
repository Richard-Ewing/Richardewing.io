'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { articles, frameworks } from '../lib/data';
import { NewsletterSignup } from '../components/NewsletterSignup';
import PublicationLedger from '../components/PublicationLedger';

export default function ArticlesPage() {
    // Filter state
    const [selectedPublication, setSelectedPublication] = useState<string | null>(null);

    // Filtered articles logic
    const displayedArticles = selectedPublication
        ? articles.filter(article => {
            // Mapping UI names to data.ts source names if needed
            if (selectedPublication === 'CIO.com' && (article.source === 'CIO.com' || article.source === 'Foundry')) return true;
            if (selectedPublication === 'Built In' && article.source === 'Built In') return true;
            if (selectedPublication === 'Mind the Product' && article.source === 'Mind the Product') return true;
            if (selectedPublication === 'HackerNoon' && article.source === 'HackerNoon') return true;
            return false;
        })
        : articles.slice(0, 4); // Show recent 4 by default if no filter

    const featuredArticle = {
        title: "The AI Product Business Test",
        publication: "Built In",
        date: "Jan 2026",
        badge: "Editor's Pick",
        description: "Before writing code, validate the unit economics of your AI feature. This editor's pick from Built In explores why most AI products fail on margin contribution, not technical feasibility.",
        url: "https://builtin.com/articles/ai-product-business-test"
    };

    const handlePublicationClick = (pubName: string) => {
        if (selectedPublication === pubName) {
            setSelectedPublication(null); // Toggle off
        } else {
            setSelectedPublication(pubName);
        }
        // Scroll to list
        const listElement = document.getElementById('article-list');
        if (listElement) {
            listElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                <span>Knowledge</span><span>/</span><span className="text-cyan-800 font-semibold font-bold">Canonical Hub</span>
            </div>

            <ScrollReveal>
                <div className="mb-12 border-b border-zinc-400 pb-12">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        The Canonical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">Hub.</span>
                    </h1>
                    <p className="text-lg text-zinc-900 leading-relaxed max-w-2xl">
                        Every framework, definition, and article I've published. <br />
                        <span className="text-zinc-900">This is the source material. Cite it.</span>
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {['Frameworks', 'Publications'].map(link => (
                            <a href={`#${link.toLowerCase()}`} key={link} className="text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-cyan-800 font-semibold transition-colors">
                                [{link}]
                            </a>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Featured Article */}
            <ScrollReveal delay={100}>
                <div className="mb-20">
                    <h3 className="font-mono text-xs text-zinc-900 font-bold uppercase tracking-widest mb-4">Featured</h3>
                    <div className="card-featured p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-purple-500/20 text-purple-800 font-semibold px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl border-l border-b border-purple-500/30">
                            Editor's Pick
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-zinc-900 uppercase tracking-widest">
                                <span className="text-zinc-900">{featuredArticle.publication}</span>
                                <span>•</span>
                                <span>{featuredArticle.date}</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 font-grotesk group-hover:text-purple-800 font-semibold transition-colors">
                                {featuredArticle.title}
                            </h2>

                            <p className="text-lg text-zinc-950 mb-8 max-w-2xl">
                                {featuredArticle.description}
                            </p>

                            <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-800 font-semibold font-bold uppercase tracking-widest text-xs hover:text-zinc-900 transition-colors">
                                Read Article <span className="text-lg">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Frameworks Section */}
            <ScrollReveal delay={200}>
                <div id="frameworks" className="mb-20">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-2 font-grotesk">Frameworks I've Coined</h2>
                        <p className="text-zinc-900 text-sm">Canonical definitions. Cite these.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {frameworks.map((fw, i) => (
                            <Link
                                key={fw.slug}
                                href={`/articles/frameworks/${fw.slug}`}
                                className="group block h-full"
                            >
                                <div className="card h-full p-6 hover:border-cyan-500/50 transition-all flex flex-col">
                                    <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-cyan-800 font-semibold transition-colors font-grotesk">
                                        {fw.name}
                                    </h3>
                                    <p className="text-sm text-zinc-900 font-medium mb-6 flex-grow line-clamp-3">
                                        {fw.definition}
                                    </p>
                                    <div className="text-xs font-bold uppercase tracking-widest text-cyan-500 group-hover:text-cyan-800 font-semibold flex items-center gap-2">
                                        Definition <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* By Publication (Filters) */}
            <ScrollReveal delay={300}>
                <div id="publications" className="mb-12">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-8 font-grotesk">Browse By Publication</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'CIO.com', logo: '/logos/cio-logo.svg' },
                            { name: 'Built In', logo: '/logos/builtin-logo.svg' },
                            { name: 'Mind the Product', logo: '/logos/mindtheproduct-logo.svg' },
                            { name: 'HackerNoon', logo: '/logos/hackernoon-logo.svg' }
                        ].map((pub) => (
                            <button
                                key={pub.name}
                                onClick={() => handlePublicationClick(pub.name)}
                                className={`card p-6 flex flex-col items-center justify-center text-center transition-all group relative overflow-hidden w-full ${selectedPublication === pub.name ? 'border-cyan-500 ring-1 ring-cyan-500 bg-cyan-500/10' : 'hover:bg-white/5'}`}
                            >
                                <div className="flex-1 flex items-center justify-center mb-4 w-full">
                                    <Image
                                        src={pub.logo}
                                        alt={pub.name}
                                        width={120}
                                        height={40}
                                        className={`h-6 w-auto object-contain transition-all mx-auto ${selectedPublication === pub.name ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}
                                    />
                                </div>
                                <div className={`text-xs font-mono uppercase tracking-widest transition-colors w-full text-center ${selectedPublication === pub.name ? 'text-cyan-800 font-semibold' : 'text-zinc-950 group-hover:text-zinc-800'}`}>
                                    {selectedPublication === pub.name ? 'Viewing' : 'Filter'}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Recent/Filtered Articles */}
            <ScrollReveal delay={400}>
                <div id="article-list" className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">
                            {selectedPublication ? `Articles in ${selectedPublication}` : 'Recent Articles'}
                        </h2>
                        {selectedPublication && (
                            <button onClick={() => setSelectedPublication(null)} className="text-xs text-zinc-900 font-bold hover:text-red-800 font-semibold uppercase tracking-widest font-bold">
                                Clear Filter ✕
                            </button>
                        )}
                    </div>

                    {displayedArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {displayedArticles.map((article, i) => {
                                const isExternal = article.externalUrl?.startsWith('http');
                                const href = article.externalUrl || `/blog/${article.slug}`;
                                return (
                                <Link
                                    key={article.slug}
                                    href={href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="group block"
                                >
                                    <GlowCard className="p-6 h-full flex flex-col justify-between hover:bg-white/5 transition-colors" glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-mono text-xs font-medium text-zinc-900 uppercase tracking-widest border border-zinc-400 px-2 py-0.5 rounded-full">{article.source}</span>
                                                </div>
                                                <span className="font-mono text-xs text-zinc-900 font-bold uppercase tracking-widest">{article.date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-cyan-800 font-semibold transition-colors font-grotesk">{article.title}</h3>
                                            <p className="text-zinc-950 text-sm leading-relaxed mb-4 line-clamp-2">{article.description}</p>
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-zinc-950 group-hover:text-zinc-900 transition-colors">
                                            Read
                                        </div>
                                    </GlowCard>
                                </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-dashed border-zinc-400 rounded-2xl">
                            <p className="text-zinc-900">No articles found for this filter.</p>
                            <button onClick={() => setSelectedPublication(null)} className="mt-4 text-cyan-800 font-semibold hover:text-cyan-800 font-semibold text-sm">Clear Filters</button>
                        </div>
                    )}

                    {!selectedPublication && (
                        <div className="mt-8 text-center">
                            <button className="px-6 py-3 border border-zinc-400 rounded-lg text-sm font-bold uppercase tracking-widest text-zinc-900 hover:text-zinc-900 hover:border-white/30 transition-all">
                                View Full Archive
                            </button>
                        </div>
                    )}
                </div>
            </ScrollReveal>

            {/* Newsletter CTA */}
            <ScrollReveal delay={500}>
                <div className="mb-20">
                    <NewsletterSignup variant="full" />
                </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
                <PublicationLedger />
            </ScrollReveal>

        </div>
    );
}
