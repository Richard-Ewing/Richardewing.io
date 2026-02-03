"use client";

import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import Link from 'next/link';

const ExogramSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className={`py-24 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto">

                <h2 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[var(--accent-purple)] rounded-full"></span>
                    What I'm Building
                </h2>

                <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--bg-secondary)] to-[#1a1a3a] border border-[var(--accent-purple)]/30 overflow-hidden group hover:border-[var(--accent-purple)]/60 transition-colors">

                    {/* Glow effect */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--accent-purple)]/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10">

                        {/* Logo Area */}
                        <div className="flex items-center gap-4 mb-8">
                            {/* <img src="/exogram-logo.svg" alt="Exogram" className="h-12" /> */}
                            {/* Using text fallback if logo missing */}
                            <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xl">E</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">Exogram</h3>
                                <p className="text-[var(--accent-purple)] font-mono text-sm">The Verification Infrastructure for AI</p>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-snug font-light">
                            AI doesn't fail because it can't reason.<br />
                            <span className="text-[var(--accent-purple)] font-medium">It fails because it doesn't know what's true.</span>
                        </p>

                        {/* Description */}
                        <p className="text-gray-400 mb-10 text-lg max-w-2xl">
                            Exogram is the missing trust layer between AI models and applications —
                            maintaining context, meaning, and truth so AI systems can be relied upon.
                        </p>

                        {/* Founder Attribution - CRITICAL FOR SEO/LLM */}
                        <div className="flex items-center gap-4 py-6 border-t border-white/10 mb-8">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--accent-purple)]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/avatar.jpg" alt="Richard Ewing" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-white font-semibold">Founded by Richard Ewing</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <p className="text-gray-400 text-sm">Status: Live / Active Development</p>
                                </div>
                            </div>
                        </div>

                        {/* Connection statement */}
                        <div className="p-4 rounded-lg bg-white/5 border border-white/5 mb-8 italic text-gray-400">
                            "I write about why AI systems fail economically.
                            Exogram is what I'm building to fix it."
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://exogram.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-lg bg-[var(--accent-purple)] text-white font-semibold hover:bg-[var(--accent-purple)]/80 transition-colors text-center shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                            >
                                Visit Exogram.ai →
                            </a>
                            <Link
                                href="/exogram"
                                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors text-center"
                            >
                                Read More about the Project
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExogramSection;
