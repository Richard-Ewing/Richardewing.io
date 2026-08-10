import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';

export const metadata: Metadata = {
    title: 'The AI Economist Newsletter & Briefings Archive',
    description: 'Monthly strategic analysis on AI unit economics, R&D capital governance, technical debt remediation, and margin engineering for technology leaders.',
    alternates: { canonical: 'https://www.richardewing.io/newsletter' },
    openGraph: {
        title: 'The AI Economist Newsletter & Briefings Archive | Richard Ewing',
        description: 'Monthly strategic analysis on AI unit economics, R&D capital governance, technical debt remediation, and margin engineering for technology leaders.',
        url: 'https://www.richardewing.io/newsletter',
        siteName: 'Richard Ewing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The AI Economist Newsletter & Briefings Archive | Richard Ewing',
        description: 'Monthly strategic analysis on AI unit economics, R&D capital governance, technical debt remediation, and margin engineering for technology leaders.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const briefingArchive = [
    {
        issue: 'Issue #24',
        date: 'July 2026',
        title: 'Why Non-Deterministic Retries Are Erasing 30% of SaaS Gross Margins',
        summary: 'An empirical analysis of token loop accumulation, unhandled JSON parsing failures, and how gateway cost-caps protect operating leverage.',
        link: '/articles',
    },
    {
        issue: 'Issue #23',
        date: 'June 2026',
        title: 'The Product Debt Index: Quantifying Technical Insolvency',
        summary: 'How to calculate your organization’s Technical Insolvency Date based on code complexity, context rot rates, and sprint misallocation.',
        link: '/articles',
    },
    {
        issue: 'Issue #22',
        date: 'May 2026',
        title: 'Pre-Close R&D Capital Due Diligence in Private Equity',
        summary: 'A financial playbook for PE operating partners evaluating software acquisitions and uncovering hidden technical liabilities pre-close.',
        link: '/articles',
    },
    {
        issue: 'Issue #21',
        date: 'April 2026',
        title: 'Context Rot: The Hidden Decay Rate of LLM Reasoning',
        summary: 'Why agent performance degrades non-linearly past 12 conversation turns, and how XML boundary architecture restores deterministic execution.',
        link: '/articles',
    },
];

export default function NewsletterPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-3">
                        Monthly Strategic Intelligence
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        The AI Economist Newsletter
                    </h1>
                    <p className="text-xl text-zinc-900 font-medium leading-relaxed mb-8">
                        Join 1,366+ CTOs, CFOs, and PE operating partners receiving monthly empirical breakdowns of AI unit economics, R&D spend recovery, and governance.
                    </p>
                    
                    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl border border-zinc-300 shadow-sm">
                        <LeadMagnetCTA variant="compact" />
                    </div>
                </div>

                {/* Archive List */}
                <div className="mb-16">
                    <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest mb-8">
                        Briefings Archive & Past Issues
                    </h2>

                    <div className="space-y-6">
                        {briefingArchive.map((item, idx) => (
                            <div key={idx} className="bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
                                <div className="space-y-2 max-w-2xl">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono font-bold text-amber-900 uppercase bg-amber-100 px-2.5 py-1 rounded">
                                            {item.issue}
                                        </span>
                                        <span className="text-xs font-mono text-zinc-700">
                                            {item.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-grotesk font-bold text-zinc-950">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-zinc-800 font-medium leading-relaxed">
                                        {item.summary}
                                    </p>
                                </div>

                                <Link 
                                    href={item.link}
                                    className="px-5 py-2.5 bg-zinc-100 text-zinc-900 font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap"
                                >
                                    Read Issue &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscriptions Footer CTA */}
                <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center">
                    <h2 className="text-3xl font-grotesk font-bold mb-4">Never Miss a Monthly Briefing</h2>
                    <p className="text-zinc-400 max-w-lg mx-auto text-sm font-medium mb-8">
                        No fluff, no marketing hype. Just empirical data, architectural diagrams, and financial models delivered once per month.
                    </p>
                    <div className="max-w-md mx-auto">
                        <LeadMagnetCTA variant="compact" />
                    </div>
                </div>

            </div>
        </main>
    );
}
