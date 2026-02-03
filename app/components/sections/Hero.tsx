"use client";

import Link from 'next/link';
import NumberTicker from '@/components/magicui/number-ticker';
import WordRotate from '@/components/magicui/word-rotate';

const Hero = () => {
    return (
        <section className="min-h-[70vh] flex items-center justify-center py-12">
            <div className="page-container text-center">

                {/* Eyebrow pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-sm text-gray-300">Independent R&D Oversight</span>
                </div>

                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex flex-col items-center">
                    <span>I audit engineering spend and</span>
                    <span className="flex flex-wrap justify-center gap-x-3">
                        show the capital risks your
                        <WordRotate
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-extrabold"
                            words={["metrics don't show.", "board won't see.", "CFO can't find.", "team won't tell you."]}
                        />
                    </span>
                </div>

                {/* Credibility line */}
                <p className="text-gray-400 mb-10 text-lg">
                    Richard Ewing, Product Economist · $<NumberTicker value={25} />M ARR scaled · Published in Foundry & Built In
                </p>

                {/* Path selector - 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">

                    <Link href="/advisory" className="card text-left hover:border-purple-500/50 group block">
                        <div className="text-2xl mb-3">📊</div>
                        <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400">Get an Audit</h3>
                        <p className="text-sm text-gray-400">Diagnose my R&D economics</p>
                    </Link>

                    <Link href="/doctrine" className="card text-left hover:border-cyan-500/50 group block">
                        <div className="text-2xl mb-3">📖</div>
                        <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400">Learn the Framework</h3>
                        <p className="text-sm text-gray-400">Read the doctrine</p>
                    </Link>

                    <Link href="/exogram" className="card text-left hover:border-purple-500/50 group block">
                        <div className="text-2xl mb-3">🔧</div>
                        <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400">See What I Build</h3>
                        <p className="text-sm text-gray-400">Explore Exogram</p>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default Hero;
