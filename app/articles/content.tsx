'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { articles, frameworks } from '../lib/data';
import { NewsletterSignup } from '../components/NewsletterSignup';

export default function ArticlesPage() {
    const [filter, setFilter] = useState("All");
    const filters = ["All", "CIO.com", "Built In", "Mind the Product", "HackerNoon"];

    // Mapping source names from data.ts to filter names if they differ
    // In data.ts: "Foundry", "The Canon", "Built In", "Mind the Product", "HackerNoon"
    // "Foundry" maps to "CIO.com" for display in filters usually, but let's keep it simple
    // The spec asks for "BY PUBLICATION" section, so filters might be less emphasized or moved.

    // Spec Structure:
    // 1. Hero "The Canonical Hub"
    // 2. Featured Article
    // 3. Frameworks Grid
    // 4. Recent Articles
    // 5. Newsletter Signup
    // 6. By Publication
    // 7. Browse by Theme (we don't have theme data explicitly in data.ts yet, so we'll simulate or skip for now)

    const featuredArticle = {
        title: "The AI Product Business Test",
        publication: "Built In",
        date: "Jan 2026",
        badge: "Editor's Pick",
        description: "Before writing code, validate the unit economics of your AI feature. This editor's pick from Built In explores why most AI products fail on margin contribution, not technical feasibility.",
        url: "https://builtin.com/articles/ai-product-business-test"
    };

    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Knowledge</span><span>/</span><span className="text-cyan-400 font-bold">Canonical Hub</span>
            </div>

            <ScrollReveal>
                <div className="mb-12 border-b border-white/10 pb-12">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                        The Canonical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">Hub.</span>
                    </h1>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        Every framework, definition, and article I've published. <br />
                        <span className="text-white">This is the source material. Cite it.</span>
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {['Frameworks', 'Publications'].map(link => (
                            <a href={`#${link.toLowerCase()}`} key={link} className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors">
                                [{link}]
                            </a>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Featured Article */}
            <ScrollReveal delay={100}>
                <div className="mb-20">
                    <h3 className="font-mono text-xs text-purple-400 uppercase tracking-widest mb-4">Featured</h3>
                    <div className="card-featured p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-purple-500/20 text-purple-300 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl border-l border-b border-purple-500/30">
                            Editor's Pick
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                                <span className="text-white">Built In</span>
                                <span>•</span>
                                <span>Jan 2026</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-grotesk group-hover:text-purple-400 transition-colors">
                                The Death of the Syntax Interview
                            </h2>

                            <p className="text-lg text-zinc-300 mb-8 max-w-2xl">
                                AI can generate code. The scarce skill is catching what AI gets wrong. This article introduces the Audit Interview—a new protocol for hiring engineers in the age of LLMs.
                            </p>

                            <a href="#" className="inline-flex items-center gap-2 text-purple-400font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
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
                        <h2 className="text-2xl font-bold text-white mb-2 font-grotesk">Frameworks I've Coined</h2>
                        <p className="text-zinc-400 text-sm">Canonical definitions. Cite these.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {frameworks.map((fw, i) => (
                            <Link
                                key={fw.slug}
                                href={`/articles/frameworks/${fw.slug}`}
                                className="group block h-full"
                            >
                                <div className="card h-full p-6 hover:border-cyan-500/50 transition-all flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-grotesk">
                                        {fw.name}
                                    </h3>
                                    <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-3">
                                        {fw.definition}
                                    </p>
                                    <div className="text-xs font-bold uppercase tracking-widest text-cyan-500 group-hover:text-cyan-300 flex items-center gap-2">
                                        Definition <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Recent Articles */}
            <ScrollReveal delay={300}>
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 font-grotesk">Recent Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {articles.slice(0, 4).map((article, i) => (
                            <Link
                                key={article.slug}
                                href={article.externalUrl || '#'}
                                target={article.externalUrl ? "_blank" : undefined}
                                rel={article.externalUrl ? "noopener noreferrer" : undefined}
                                className="group block"
                            >
                                <GlowCard className="p-6 h-full flex flex-col justify-between hover:bg-white/5 transition-colors" glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">{article.source}</span>
                                            </div>
                                            <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">{article.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-grotesk">{article.title}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">{article.description}</p>
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                                        Read
                                    </div>
                                </GlowCard>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button className="px-6 py-3 border border-white/10 rounded-lg text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/30 transition-all">
                            View All Articles
                        </button>
                    </div>
                </div>
            </ScrollReveal>

            {/* Newsletter CTA */}
            <ScrollReveal delay={400}>
                <div className="mb-20">
                    <NewsletterSignup variant="full" />
                </div>
            </ScrollReveal>

            {/* By Publication */}
            <ScrollReveal delay={500}>
                <div id="publications" className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-8 font-grotesk">By Publication</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'CIO.com', count: '12 articles', logo: '/logos/cio-logo.svg', url: 'https://www.cio.com/author/richard-ewing/' },
                            { name: 'Built In', count: '8 articles', logo: '/logos/builtin-logo.svg', url: 'https://builtin.com/authors/richard-ewing' },
                            { name: 'Mind the Product', count: '4 articles', logo: '/logos/mindtheproduct-logo.svg', url: 'https://www.mindtheproduct.com/author/richard-ewing/' },
                            { name: 'HackerNoon', count: '6 articles', logo: '/logos/hackernoon-logo.svg', url: 'https://hackernoon.com/u/richardewing' }
                        ].map((pub) => (
                            <a
                                key={pub.name}
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors group"
                            >
                                <Image src={pub.logo} alt={pub.name} width={100} height={30} className="h-6 w-auto mb-4 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all" />
                                <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                                    {pub.count}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

        </div>
    );
}
