import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'APER Calculator FAQ | Richard Ewing',
    description: 'Frequently asked questions about the Adjusted Productivity to Engineering Ratio (APER) — how to benchmark engineering team efficiency and interpret reve...',
    keywords: ['APER calculator', 'engineering efficiency', 'revenue per engineer', 'engineering productivity metrics'],
    alternates: { canonical: 'https://www.richardewing.io/tools/aper/faq' },
    openGraph: { title: 'APER Calculator FAQ', description: 'How to benchmark engineering efficiency with APER.', url: 'https://www.richardewing.io/tools/aper/faq', type: 'article' },
};

const faqs = [
    { q: 'What is APER?', a: 'APER (Adjusted Productivity to Engineering Ratio) is a framework for measuring engineering team efficiency by comparing revenue output to engineering investment. Unlike raw revenue-per-engineer, APER adjusts for company stage, industry, team composition, and technology complexity to produce an apples-to-apples benchmark.', color: 'cyan' },
    { q: 'How is APER different from revenue per engineer?', a: 'Raw revenue per engineer can be misleading. A company with 10 engineers and $10M ARR ($1M/engineer) appears efficient, but if 8 of those engineers are contractors, the adjusted figure changes dramatically. APER normalizes for team composition (FTE vs contractors), company stage (seed vs growth vs enterprise), industry vertical, and technology complexity.', color: 'violet' },
    { q: 'What is a good APER score?', a: 'APER benchmarks vary by stage. For seed-stage startups: $150-300K/engineer is healthy. For growth-stage: $300-600K/engineer. For enterprise: $500K-1.2M/engineer. Elite companies like Stripe achieve $3.2M/engineer, but this reflects their unique market position and should not be used as a universal benchmark.', color: 'emerald' },
    { q: 'How do I calculate APER for my team?', a: 'Use our free APER Calculator. You input: Annual Recurring Revenue (ARR), total engineering headcount (FTEs), contractor equivalents, company stage, and primary technology vertical. The calculator produces your raw and adjusted APER scores with industry benchmarks.', color: 'amber' },
    { q: 'Can APER be used to justify hiring decisions?', a: 'Yes. APER trends are powerful for hiring ROI analysis. If your APER is declining quarter-over-quarter despite growing revenue, it indicates each marginal engineer is producing less incremental value — a signal to optimize before adding headcount. Rising APER with stable headcount indicates improving efficiency.', color: 'rose' },
    { q: 'How does APER relate to DORA metrics?', a: 'APER measures economic output (revenue per engineering unit), while DORA measures delivery performance (how fast and reliably you ship). They are complementary. High DORA scores with low APER may indicate you are shipping efficiently but working on the wrong things. High APER with low DORA may indicate good product-market fit but delivery bottlenecks.', color: 'cyan' },
    { q: 'Is the APER Calculator free?', a: 'Yes. The APER Calculator is completely free with no account required. It provides instant benchmarking against industry standards and actionable recommendations for improving engineering efficiency.', color: 'violet' },
    { q: 'What industries does APER benchmark against?', a: 'APER benchmarks cover SaaS, fintech, healthtech, e-commerce, enterprise software, developer tools, edtech, and infrastructure/platform companies. Each vertical has distinct efficiency profiles based on typical engineering team sizes and revenue models.', color: 'emerald' },
];

const colorStyles: Record<string, string> = {
    cyan: 'border-cyan-500/20 bg-cyan-500/5', violet: 'border-violet-500/20 bg-violet-500/5',
    emerald: 'border-emerald-500/20 bg-emerald-500/5', amber: 'border-amber-500/20 bg-amber-500/5',
    rose: 'border-rose-500/20 bg-rose-500/5',
};

export default function AperFaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.richardewing.io/tools' },
            { '@type': 'ListItem', position: 3, name: 'APER Calculator', item: 'https://www.richardewing.io/tools/aper' },
            { '@type': 'ListItem', position: 4, name: 'FAQ', item: 'https://www.richardewing.io/tools/aper/faq' },
        ],
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/tools" className="hover:text-cyan-400">Tools</Link><span>/</span>
                        <Link href="/tools/aper" className="hover:text-cyan-400">APER</Link><span>/</span>
                        <span className="text-cyan-400 font-bold">FAQ</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        APER{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">FAQ</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Everything you need to know about measuring engineering team efficiency with APER.</p>
                    <div className="space-y-6 mb-16">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorStyles[faq.color]}`}>
                                <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">{faq.q}</h2>
                                <p className="text-zinc-950 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Try the APER Calculator</h2>
                        <p className="text-zinc-950 mb-6">Benchmark your engineering efficiency in under 5 minutes. No account required.</p>
                        <Link href="/tools/aper" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Launch APER Calculator &rarr;</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
