"use client";

import Link from 'next/link';

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
                            <div className="w-16 h-16 flex items-center justify-center">
                                { }
                                <img src="/images/exogram/logo-main.png" alt="Exogram Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Exogram</h3>
                                <p className="text-purple-400 text-sm">The Verification Infrastructure for AI</p>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                            AI doesn't fail because it can't reason.<br />
                            <span className="text-purple-400">It fails because it doesn't know what's true.</span>
                        </p>

                        {/* Description */}
                        <p className="text-gray-400 max-w-xl">
                            Exogram is the missing trust layer between AI models and applications —
                            maintaining context, meaning, and truth so AI systems can be relied upon.
                        </p>

                        {/* Founder & CTAs Container - Side by Side on Desktop */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-white/10 pt-8 mt-4 items-center">

                            {/* Founder Attribution - Right Aligned on Desktop to kiss the center line */}
                            <div className="flex items-center justify-center md:justify-end gap-4 h-12">
                                { }
                                <img src="/assets/headshot.jpg" alt="Richard Ewing" className="w-12 h-12 rounded-full object-cover shadow-sm" />
                                <div className="text-left flex flex-col justify-center h-full">
                                    <p className="text-white font-semibold leading-none mb-1">Founded by Richard Ewing</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-gray-400 text-xs leading-none">Product Economist</p>
                                        <span className="text-emerald-500 text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 leading-none flex items-center h-4">Live</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs - Left Aligned on Desktop to kiss the center line */}
                            <div className="flex items-center justify-center md:justify-start h-12">
                                <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-2.5 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] h-10">
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
