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
                                {/* eslint-disable-next-line @next/next/no-img-element */}
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

                        {/* Founder attribution */}
                        <div className="flex items-center justify-center gap-4 py-6 border-y border-white/10 w-full max-w-md">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/headshot.jpg" alt="Richard Ewing" className="w-12 h-12 rounded-full object-cover" />
                            <div className="text-left">
                                <p className="text-white font-semibold">Founded by Richard Ewing</p>
                                <p className="text-gray-400 text-sm">Status: Live / Active Development</p>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
                                Visit Exogram.ai →
                            </a>
                            <Link href="/exogram" className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors">
                                Learn More
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExogramSection;
