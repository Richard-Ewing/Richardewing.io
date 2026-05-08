"use client";

import Link from 'next/link';
import NumberTicker from '@/components/magicui/number-ticker';
import WordRotate from '@/components/magicui/word-rotate';
import { AsSeenIn } from '@/components/AsSeenIn';

const Hero = () => {
    return (
        <section className="min-h-[70vh] flex items-center justify-center py-12">
            <div className="page-container text-center">

                {/* Eyebrow pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-semibold text-zinc-950">Board-Level AI Governance & R&D Oversight</span>
                </div>

                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight flex flex-col items-center">
                    <span>I cure the CTO Agent Delusion.</span>
                    <span className="flex flex-wrap justify-center gap-x-3 mt-2 text-3xl md:text-4xl lg:text-5xl">
                        I build deterministic systems to
                    </span>
                    <span className="flex flex-wrap justify-center gap-x-3 text-3xl md:text-4xl lg:text-5xl">
                        protect your margins from
                        <WordRotate
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 font-extrabold"
                            words={["AI feature bloat.", "probabilistic code.", "the Turing tax.", "vibe-coding debt."]}
                        />
                    </span>
                </div>

                {/* Credibility line */}
                <p className="text-zinc-950 mb-6 text-lg">
                    Richard Ewing, The AI Economist · Operator of The AI Economist · Founder of <a href="/exogram" className="text-purple-900 font-extrabold hover:text-purple-500 transition">Exogram</a>
                </p>

                {/* As Seen In */}
                <AsSeenIn />

                {/* Path selector - 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">

                    <Link href="/advisory" className="card text-left hover:border-purple-300 group block">
                        <div className="text-2xl mb-3">📊</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-purple-900 font-extrabold">Get an Audit</h3>
                        <p className="text-sm font-semibold text-zinc-900 font-medium">Diagnose my R&D economics</p>
                    </Link>

                    <Link href="/doctrine" className="card text-left hover:border-indigo-300 group block">
                        <div className="text-2xl mb-3">📖</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-indigo-900 font-extrabold">Learn the Framework</h3>
                        <p className="text-sm font-semibold text-zinc-900 font-medium">Read the doctrine</p>
                    </Link>

                    <Link href="/exogram" className="card text-left hover:border-purple-300 group block">
                        <div className="text-2xl mb-3">🔧</div>
                        <h3 className="font-semibold text-zinc-900 mb-2 group-hover:text-purple-900 font-extrabold">See What I Build</h3>
                        <p className="text-sm font-semibold text-zinc-900 font-medium">Explore Exogram</p>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default Hero;
