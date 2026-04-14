import { Metadata } from 'next';
import { Mic, Users, Lightbulb, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Workshops & Speaking | Richard Ewing',
    description: 'Book Richard Ewing for keynotes and workshops on technical debt, AI unit economics, and R&D capital allocation. Published in CIO.com and Built In.',
    keywords: [
        'technical debt keynote speaker', 'AI economics speaker', 'product economics workshop',
        'engineering leadership speaker', 'CTO conference speaker', 'R&D audit workshop',
        'technical debt presentation', 'product management speaker 2026', 'SaaS conference speaker',
        'fractional CPO speaker', 'board education technology', 'engineering economics training',
    ],
    alternates: { canonical: 'https://www.richardewing.io/workshops' },
    openGraph: {
        title: 'Workshops & Speaking | Richard Ewing',
        description: 'Book keynotes and workshops on technical debt, AI economics, and R&D capital allocation.',
        url: 'https://www.richardewing.io/workshops',
        type: 'website',
    },
};

const keynotes = [
    {
        title: 'Technical Debt: The $2 Trillion Problem Nobody\'s Measuring',
        audience: 'Engineering leaders, CTOs, VPs of Engineering, Board members',
        duration: '45-60 min keynote',
        highlights: [
            'Why technical debt is a financial liability, not a backlog item',
            'The Technical Insolvency Date: when maintenance consumes 100% of capacity',
            'Live diagnostic: calculate the audience\'s debt in real-time',
            'The 4 Horsemen of Technical Insolvency',
        ],
    },
    {
        title: 'AI Unit Economics for CFOs: When Your AI Feature Costs Mo...',
        audience: 'CFOs, Finance leaders, AI/ML leaders, Product leaders',
        duration: '45 min keynote',
        highlights: [
            'Cost per useful AI output vs. cost per query — the metric that matters',
            'AI hallucination as economic risk, not just accuracy risk',
            'When to build vs. buy AI capabilities (the $0.001 threshold)',
            'Real case study: 34% AI cost reduction without reducing output quality',
        ],
    },
    {
        title: 'The Subprime Code Crisis: Why Your Next Acquisition Targe...',
        audience: 'PE/VC investors, M&A teams, Board directors, Due diligence teams',
        duration: '30-45 min keynote',
        highlights: [
            'How $1.2M in hidden debt gets reported as "innovation"',
            'Technical due diligence: the questions nobody asks before term sheet',
            'Product Debt Index: a quantitative alternative to vibe-based assessments',
            'Case study: catching a $40M overvaluation before close',
        ],
    },
];

const workshops = [
    {
        title: 'R&D Capital Allocation Masterclass',
        format: 'Half-day workshop (4 hours)',
        participants: '10-30 people',
        desc: 'Hands-on workshop where teams learn to measure their own technical debt, calculate ROI on refactoring, and build the business case that gets funding approved.',
        price: '$8,000',
        productId: 'workshop_rd_masterclass',
    },
    {
        title: 'Board-Ready Technical Reporting',
        format: '2-hour executive session',
        participants: '5-15 people',
        desc: 'Teach your engineering leaders how to present technical metrics in financial language. CTOs learn to communicate with boards; boards learn what to ask their CTOs.',
        price: '$5,000',
        productId: 'workshop_board_reporting',
    },
    {
        title: 'AI Cost Governance Workshop',
        format: 'Half-day workshop (4 hours)',
        participants: '10-25 people',
        desc: 'Map your AI spend, identify collapse points, and build cost governance frameworks that prevent runaway inference costs.',
        price: '$8,000',
        productId: 'workshop_ai_governance',
    },
];

export default function WorkshopsPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <section className="section-lg text-center">
                    <div className="text-xs text-rose-400 uppercase tracking-wide mb-4 font-mono">Speaking & Training</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-950 mb-6 font-grotesk">
                        Workshops &<br />
                        <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">Speaking.</span>
                    </h1>
                    <p className="text-zinc-800 text-lg max-w-2xl mx-auto mb-4">
                        Keynotes that make engineering leaders uncomfortable.
                        Workshops that make them effective.
                    </p>
                    <p className="text-zinc-800 text-sm">
                        Published in CIO.com · Built In · Mind the Product · HackerNoon
                    </p>
                </section>

                <section className="section max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-8 font-grotesk flex items-center gap-3">
                        <Mic className="w-6 h-6 text-rose-400" />
                        Keynote Presentations
                    </h2>
                    <div className="space-y-6">
                        {keynotes.map((k, i) => (
                            <div key={i} className="card p-6 md:p-8 hover:border-rose-500/30 transition-colors">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h3 className="text-xl font-bold text-zinc-900">{k.title}</h3>
                                    <span className="text-xs text-zinc-800 font-mono whitespace-nowrap flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {k.duration}
                                    </span>
                                </div>
                                <p className="text-zinc-950 text-sm mb-4">
                                    <Users className="w-3 h-3 inline mr-1" />
                                    {k.audience}
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {k.highlights.map((h, j) => (
                                        <li key={j} className="flex items-start gap-2 text-zinc-900 text-sm">
                                            <CheckCircle className="w-3 h-3 text-rose-400/50 mt-1 flex-shrink-0" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-8 font-grotesk flex items-center gap-3">
                        <Lightbulb className="w-6 h-6 text-amber-400" />
                        Workshops & Training
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {workshops.map((w, i) => (
                            <div key={i} className="card p-6 flex flex-col">
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">{w.title}</h3>
                                <p className="text-zinc-950 text-xs font-mono mb-1">{w.format} · {w.participants}</p>
                                <p className="text-zinc-900 text-sm mb-4 flex-1">{w.desc}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-zinc-400 mb-4">
                                    <span className="text-xl font-bold text-zinc-900">{w.price}</span>
                                    <span className="text-xs text-zinc-900">+ travel</span>
                                </div>
                                <a
                                    href={`/api/buy/${w.productId}`}
                                    className="block text-center py-3 rounded-lg bg-gradient-to-r from-rose-500 to-purple-500 text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                                >
                                    Book Workshop →
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Keynote Booking */}
                <section className="section max-w-3xl mx-auto text-center">
                    <div className="card p-8 md:p-12 border-rose-500/20 bg-gradient-to-br from-rose-500/5 to-transparent">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-4 font-grotesk">Book a Speaking Engagement</h2>
                        <p className="text-zinc-900 mb-6">
                            Keynote fees start at $5,000. Workshop fees start at $5,000.
                            Travel and accommodations are additional.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="/api/buy/keynote_speaking"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-rose-500 hover:bg-rose-400 text-white font-bold uppercase tracking-widest text-sm rounded-xl transition-all"
                            >
                                Book Keynote — $5,000 <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="mailto:richardewing@exogram.ai?subject=Speaking%20Engagement%20Inquiry"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-zinc-300 text-zinc-950 font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white/5 transition-all"
                            >
                                Custom Inquiry →
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
