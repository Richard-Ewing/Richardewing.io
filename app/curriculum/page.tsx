import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import SyllabusPreview from '@/app/components/client/SyllabusPreview';
import { tracks } from '@/app/lib/curriculum-tracks-ui';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
    title: 'Executive AI Curriculum & Strategy Diagnostics | Richard Ewing',
    description: 'Executive AI Curriculum provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum' },
    openGraph: {
        title: 'Executive AI Curriculum | 25 Tracks, 303 Modules | Richard Ewing',
        description: 'Master AI economics through 25 structured authority tracks: financial modeling, governance, M&A diligence, agent economics, and executive strategy. $149/track or $999 all-access.',
        url: 'https://www.richardewing.io/curriculum',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Executive AI Curriculum | 25 Tracks, 303 Modules | Richard Ewing',
        description: 'Master AI economics through 25 structured authority tracks: financial modeling, governance, M&A diligence, agent economics, and executive strategy.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function CurriculumPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-700 mb-6">
                    <span className="text-2xl">🎓</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                    The AI Economics Academy
                </h1>
                <p className="text-lg text-zinc-700 max-w-2xl mx-auto mb-12">
                    25 authority curriculum tracks built from published frameworks in CIO.com and Built In — spanning AI economics, AI agents, leadership, career capital, M&A integration, and executive governance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm text-center">
                        <div className="text-3xl font-grotesk font-bold text-zinc-950">25</div>
                        <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mt-1">Authority Tracks</div>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm text-center">
                        <div className="text-3xl font-grotesk font-bold text-zinc-950">303</div>
                        <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mt-1">Deep Modules</div>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200 shadow-sm text-center">
                        <div className="text-3xl font-grotesk font-bold text-purple-700">$149</div>
                        <div className="text-xs font-mono font-bold text-purple-500 uppercase tracking-widest mt-1">Per Track</div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Link
                        href="/vault/curriculum/tracks"
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-zinc-900 font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                    >
                        Browse All 25 Tracks →
                    </Link>
                    <Link
                        href="/vault"
                        className="px-8 py-4 bg-white border border-zinc-300 text-zinc-800 font-bold rounded-xl hover:border-zinc-400 transition-colors"
                    >
                        Unlock Full Academy — $999
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 text-left">
                    {[
                        { title: 'Engineering Economics Foundations', tracks: '4 tracks', desc: 'R&D capital allocation, unit economics, financial modeling' },
                        { title: 'AI, Cloud & Agent Economics', tracks: '10 tracks', desc: 'AI inference costs, cloud FinOps, agent governance, model arbitrage' },
                        { title: 'Career Capital & Leadership', tracks: '7 tracks', desc: 'CTO training, engineering-to-executive, remote teams, DX economics' },
                        { title: 'Executive & Board Economics', tracks: '8 tracks', desc: 'Board reporting, M&A integration, vendor economics, AI governance' },
                    ].map((cat, i) => (
                        <div key={i} className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                            <div className="text-xs font-mono font-bold text-purple-500 uppercase tracking-widest mb-2">{cat.tracks}</div>
                            <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{cat.title}</h3>
                            <p className="text-sm text-zinc-600">{cat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Syllabus Preview Accordion Section */}
                <section className="mb-20 pt-4">
                    <SyllabusPreview tracks={tracks} />
                </section>

                {/* FAQ Section */}
                <section className="mb-16 border-t border-zinc-300 pt-12 text-left">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            'mainEntity': [
                                {
                                    '@type': 'Question',
                                    'name': 'What is the AI Economics Academy curriculum?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'The academy features 25 tracks and 303 deep modules covering AI economics, unit economics modeling, cloud FinOps, agentic security, M&A due diligence, and remote engineering management.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': 'How much does the curriculum cost?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'Individual authority tracks cost $149 each, or you can purchase all-access to the entire academy for a one-time price of $999.'
                                    }
                                }
                            ]
                        }) }}
                    />
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <FAQItem 
                            question="What is the AI Economics Academy curriculum?" 
                            answer="The academy features 25 tracks and 303 deep modules covering AI economics, unit economics modeling, cloud FinOps, agentic security, M&A due diligence, and remote engineering management."
                        />
                        <FAQItem 
                            question="How much does the curriculum cost?" 
                            answer="Individual authority tracks cost $149 each, or you can purchase all-access to the entire academy for a one-time price of $999."
                        />
                    </div>
                </section>

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
