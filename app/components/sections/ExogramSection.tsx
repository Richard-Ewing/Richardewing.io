"use client";

import Link from 'next/link';
import Image from 'next/image';

const ExogramSection = () => {
    return (
        <section className="section">
            <div className="page-container">

                <div className="section-header">
                    <h2>What I'm Building</h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="card-featured p-10 flex flex-col items-center text-center space-y-8">

                        {/* Header with logo */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 flex items-center justify-center relative">
                                { }
                                <Image src="/images/exogram/logo-main.png" alt="Exogram Logo" fill className="object-contain" sizes="64px" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-1">Exogram</h3>
                                <p className="text-purple-900 font-extrabold text-sm">The Verification Infrastructure for AI</p>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-zinc-950 font-bold leading-relaxed max-w-2xl">
                            AI doesn't fail because it can't reason.<br />
                            <span className="text-purple-900 font-extrabold">It fails because it doesn't know what's true.</span>
                        </p>

                        {/* Description */}
                        <p className="text-zinc-950 max-w-xl">
                            Exogram is the missing trust layer between AI models and applications —
                            maintaining context, meaning, and truth so AI systems can be relied upon.
                        </p>

                        {/* Founder & CTAs Container - Side by Side on Desktop */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-zinc-400 pt-8 mt-4 items-center">

                            {/* Founder Attribution - Right Aligned on Desktop to kiss the center line */}
                            <div className="flex items-center justify-center md:justify-end gap-4 h-12">
                                { }
                                <Image src="/assets/headshot.jpg" alt="Richard Ewing" width={48} height={48} className="rounded-full object-cover shadow-sm" />
                                <div className="text-left flex flex-col justify-center h-full">
                                    <p className="text-zinc-900 font-semibold leading-none mb-1">Founded by Richard Ewing</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-zinc-950 text-xs font-bold leading-none">Product Economist</p>
                                        <span className="text-emerald-900 font-extrabold text-xs font-bold font-medium uppercase font-mono tracking-wider px-1.5 py-0.5 bg-emerald-50 rounded border border-emerald-200 leading-none flex items-center h-4">Live</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs - Left Aligned on Desktop to kiss the center line */}
                            <div className="flex items-center justify-center md:justify-start h-12">
                                <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-2.5 rounded-lg bg-purple-600 text-zinc-950 font-semibold hover:bg-purple-500 transition-colors shadow-md h-10">
                                    Visit Exogram.ai →
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExogramSection;
