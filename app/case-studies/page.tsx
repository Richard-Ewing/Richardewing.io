import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Economics Case Studies & R&D Audits',
    description: 'Dollar-denominated post-mortems of AI spend recovery, API cost collapse prevention, and PE pre-close technical due diligence.',
    alternates: { canonical: 'https://www.richardewing.io/case-studies' },
    openGraph: {
        title: 'AI Economics Case Studies & R&D Audits | Richard Ewing',
        description: 'Dollar-denominated post-mortems of AI spend recovery, API cost collapse prevention, and PE pre-close technical due diligence.',
        url: 'https://www.richardewing.io/case-studies',
        siteName: 'Richard Ewing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Economics Case Studies & R&D Audits | Richard Ewing',
        description: 'Dollar-denominated post-mortems of AI spend recovery, API cost collapse prevention, and PE pre-close technical due diligence.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const caseStudies = [
    {
        id: 'fintech-spend-recovery',
        badge: 'Series C FinTech',
        title: '$840K Hidden AI Spend Recovery & Feature Deprecation',
        metric: '$840,000',
        metricLabel: 'Annual OpEx Recovered',
        problem: 'A Series C payments platform allocated 73% of engineering sprint capacity to maintaining legacy features while AI infrastructure costs scaled 4x faster than user growth.',
        diagnosis: 'Deployed the Product Debt Index (PDI) audit. Identified 31 negative-carry features generating context rot and consuming $70,000 monthly in dead token traffic.',
        action: 'Depreciated 31 legacy routes, restricted non-deterministic LLM calls to gated XML contracts, and redirected engineering resources to core margin-generating workflows.',
        result: 'PDI dropped from 78 to 34. $840,000 in recurring OpEx redirected to revenue-generating features over 12 months.',
        tags: ['PDI Audit', 'Spend Recovery', 'R&D Allocation'],
    },
    {
        id: 'saas-cost-collapse',
        badge: 'B2B SaaS',
        title: 'API Cost Collapse & Deterministic Routing Installation',
        metric: '79.5%',
        metricLabel: 'Monthly Token Cost Reduction',
        problem: 'A B2B analytics vendor experienced token bill expansion from $3,100/mo to $14,200/mo due to exponential retry loops and unstructured prompt bloat.',
        diagnosis: 'Utilized AI Unit Economics Benchmark (AUEB) to isolate context rot and recursive agent loops failing silently during JSON parsing.',
        action: 'Installed Exogram runtime cost-caps and deterministic schema validation at the API gateway layer, enforcing strict context XML boundaries.',
        result: 'Monthly API spend dropped from $14,200 to $2,900 with zero reduction in accuracy and zero latency impact.',
        tags: ['Exogram Governance', 'AUEB Benchmark', 'Cost Cap'],
    },
    {
        id: 'pe-due-diligence',
        badge: 'PE Portfolio Acquisition',
        title: 'Pre-Close Technical Due Diligence & Purchase Price Realignment',
        metric: '50x ROI',
        metricLabel: 'On Audit Investment',
        problem: 'A private equity sponsor evaluating a $42M B2B platform required verification of claimed R&D capital efficiency prior to deal sign-off.',
        diagnosis: 'Conducted an executive R&D Capital Audit, discovering $4.2M in uncapitalized infrastructure debt, vendor lock-in risk, and missing evaluation pipelines.',
        action: 'Delivered board-ready audit report quantifying the debt liability and structuring a deterministic remediation roadmap.',
        result: 'Sponsor successfully renegotiated deal valuation downward by $375,000, achieving a 50x ROI on audit cost ($7,500).',
        tags: ['PE Due Diligence', 'R&D Capital Audit', 'Valuation Protection'],
    },
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-3">
                        Empirical Proof & Financial Mechanics
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Enterprise AI Case Studies
                    </h1>
                    <p className="text-xl text-zinc-900 font-medium leading-relaxed">
                        Deterministic post-mortems examining R&D capital misallocation, API token explosion, and pre-close technical due diligence across enterprise environments.
                    </p>
                </div>

                {/* Grid of Case Studies */}
                <div className="space-y-12 mb-20">
                    {caseStudies.map((cs) => (
                        <div 
                            key={cs.id} 
                            id={cs.id}
                            className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12"
                        >
                            {/* Metric Side */}
                            <div className="lg:w-1/3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 pb-8 lg:pb-0 lg:pr-8">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-mono font-bold rounded-md uppercase tracking-wider mb-6">
                                        {cs.badge}
                                    </span>
                                    <div className="text-4xl sm:text-5xl font-grotesk font-extrabold text-zinc-950 mb-2">
                                        {cs.metric}
                                    </div>
                                    <div className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest mb-8">
                                        {cs.metricLabel}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cs.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-mono bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Narrative Arc Side */}
                            <div className="lg:w-2/3 space-y-6">
                                <h2 className="text-2xl font-grotesk font-bold text-zinc-950">
                                    {cs.title}
                                </h2>
                                
                                <div className="space-y-4 text-sm font-medium text-zinc-900">
                                    <div>
                                        <span className="font-mono font-bold text-xs uppercase tracking-wider text-rose-900 block mb-1">
                                            The Operational Problem
                                        </span>
                                        <p className="leading-relaxed text-zinc-800">{cs.problem}</p>
                                    </div>

                                    <div>
                                        <span className="font-mono font-bold text-xs uppercase tracking-wider text-amber-900 block mb-1">
                                            The Diagnostic Method
                                        </span>
                                        <p className="leading-relaxed text-zinc-800">{cs.diagnosis}</p>
                                    </div>

                                    <div>
                                        <span className="font-mono font-bold text-xs uppercase tracking-wider text-cyan-900 block mb-1">
                                            Remediation & Architecture
                                        </span>
                                        <p className="leading-relaxed text-zinc-800">{cs.action}</p>
                                    </div>

                                    <div>
                                        <span className="font-mono font-bold text-xs uppercase tracking-wider text-emerald-900 block mb-1">
                                            Financial Result & Impact
                                        </span>
                                        <p className="leading-relaxed text-zinc-950 font-semibold">{cs.result}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Secondary Deep-Dive Post-Mortems Section */}
                <div className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3 block">
                            Runtime Incident Files
                        </span>
                        <h3 className="text-2xl font-grotesk font-bold mb-4">
                            Looking for Technical Runtime Incident Audits?
                        </h3>
                        <p className="text-zinc-300 text-sm font-medium leading-relaxed mb-8">
                            Access our repository of incident breakdowns detailing prompt injection mechanics, context contamination vectors, and token queue starvation patterns.
                        </p>
                        <Link 
                            href="/case-studies/runtime-incidents"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors"
                        >
                            View Technical Runtime Incidents &rarr;
                        </Link>
                    </div>
                </div>

                {/* Engagement CTA */}
                <div className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
                    <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">
                        Audit Your R&D Capital & AI Spend
                    </h2>
                    <p className="text-zinc-700 text-base max-w-xl mx-auto mb-8 font-medium">
                        Schedule a $450 Rapid Diagnostic Gut-Check or a full $7,500 R&D Capital Audit to quantify technical debt and protect gross margins.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/services"
                            className="w-full sm:w-auto px-8 py-4 bg-zinc-950 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors"
                        >
                            Schedule $450 Gut-Check &rarr;
                        </Link>
                        <Link 
                            href="/roi"
                            className="w-full sm:w-auto px-8 py-4 bg-zinc-100 text-zinc-900 border border-zinc-300 text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors"
                        >
                            Calculate Your AI Waste &rarr;
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
