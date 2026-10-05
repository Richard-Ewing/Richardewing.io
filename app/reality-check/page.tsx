import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import LivingRealityCheck from '../components/LivingRealityCheck';
import ProofRail from '../components/ProofRail';

export const metadata: Metadata = {
    title: 'The AI Reality Check | Richard Ewing',
    description: 'Calculate your hidden AI babysitting tax and test real numbers against marketing hype in under 60 seconds.',
    alternates: { canonical: 'https://www.richardewing.io/reality-check' },
    openGraph: {
        title: 'The AI Reality Check | Richard Ewing',
        description: 'Test real numbers against the marketing hype. Calculate hidden babysitting costs and boardroom truths.',
        url: 'https://www.richardewing.io/reality-check',
        type: 'website',
    },
};

export default function RealityCheckPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'The AI Reality Check Instrument',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
        url: 'https://www.richardewing.io/reality-check',
        author: {
            '@type': 'Person',
            name: 'Richard Ewing',
            jobTitle: 'AI Economist & Systems Architect',
            url: 'https://www.richardewing.io',
        },
        description: 'Interactive diagnostic tool calculating the hidden engineering babysitting tax and comparing vendor claims with operational reality.',
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] text-zinc-900 pt-28 pb-24 relative overflow-hidden">
            {/* JSON-LD Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Ambient Background Gradient Lights (Neon Cyan & Royal Purple brand flares) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-purple-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Hero Header in Richard's signature editorial typography */}
                <div className="text-center max-w-3xl mx-auto mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                        <span>Zero Sales Fluff · 100% Operational Truth</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 font-grotesk tracking-tight leading-tight">
                        What AI Actually Does to Your Company When{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-700">
                            Nobody Is Looking
                        </span>
                    </h1>

                    <p className="mt-4 text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
                        The vendor demo promised a ten-times leap in engineering velocity. Your actual team got thousands of lines of plausible boilerplate, burnt-out senior developers playing cleanup crew, and an unexpected cloud invoice at month-end.
                    </p>
                </div>

                {/* The Flagship Living Interactive Component */}
                <LivingRealityCheck />

                {/* Lived Experience Editorial: The 3 Uncomfortable Realities */}
                <div className="mt-20 max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                            The Lived Experience Field Notes
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-grotesk mt-1">
                            Three Things Nobody Tells You in the Pitch Deck
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Note 1: Cyan Identity Accent */}
                        <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 hover:border-cyan-400 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider block mb-2">
                                01 · Code Is A Liability
                            </span>
                            <h3 className="text-base font-bold text-zinc-950 mb-2 font-grotesk">
                                More code is never more value
                            </h3>
                            <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                                Every line of code your company deploys has to be secured, upgraded, tested, and explained when an outage hits at 2 AM. Autocomplete makes writing code effortless. But it makes understanding systems twice as hard.
                            </p>
                        </div>

                        {/* Note 2: Magenta / Rose Accent */}
                        <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 hover:border-pink-400 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs font-mono font-bold text-pink-700 uppercase tracking-wider block mb-2">
                                02 · The Babysitting Tax
                            </span>
                            <h3 className="text-base font-bold text-zinc-950 mb-2 font-grotesk">
                                Seniors become unpaid proofreaders
                            </h3>
                            <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                                When junior developers generate massive pull requests using autocomplete, senior engineers spend sixteen hours a week doing damage control. You are paying senior salaries to do line-by-line spellchecking.
                            </p>
                        </div>

                        {/* Note 3: Royal Purple Accent */}
                        <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 hover:border-purple-400 shadow-sm hover:shadow-md transition-all">
                            <span className="text-xs font-mono font-bold text-purple-800 uppercase tracking-wider block mb-2">
                                03 · The Ghost Town Seats
                            </span>
                            <h3 className="text-base font-bold text-zinc-950 mb-2 font-grotesk">
                                Paid tools with zero active users
                            </h3>
                            <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                                In almost every audit, forty percent of enterprise AI licenses have zero keystrokes in thirty days. Teams sign annual commitments out of FOMO, and the licenses sit completely abandoned while the invoice auto-renews.
                            </p>
                        </div>
                    </div>

                    {/* Commercial Bridge / Advisory Box */}
                    <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white border border-purple-500/30 text-center relative overflow-hidden shadow-2xl">
                        <div className="max-w-2xl mx-auto space-y-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">
                                How Richard Works With Companies
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-grotesk">
                                Get an Objective Outside Audit Before You Spend Another Dollar
                            </h3>
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                No sales agendas. No software vendor kickbacks. Just an experienced operator inspecting your repos, team habits, and invoices to tell you what is working, what is bleeding cash, and what you should cancel tomorrow morning.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Link
                                    href="/services"
                                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>Book a $450 Gut-Check Session</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs tracking-wider transition-all cursor-pointer"
                                >
                                    View Full $7,500 Audit Scope
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Proof Rail Component */}
            <div className="mt-20">
                <ProofRail />
            </div>
        </main>
    );
}
