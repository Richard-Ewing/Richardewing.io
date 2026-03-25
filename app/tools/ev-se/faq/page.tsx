import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'EV/SE Calculator FAQ | Richard Ewing',
    description: 'Frequently asked questions about Enterprise Value per Software Engineer (EV/SE) — how to value engineering teams for M&A, fundraising, and strategic planning.',
    keywords: ['enterprise value per engineer', 'EV/SE calculator', 'engineering team valuation', 'M&A engineering assessment'],
    alternates: { canonical: 'https://www.richardewing.io/tools/ev-se/faq' },
    openGraph: { title: 'EV/SE Calculator FAQ', description: 'How to value engineering teams with EV/SE.', url: 'https://www.richardewing.io/tools/ev-se/faq', type: 'article' },
};

const faqs = [
    { q: 'What is EV/SE?', a: 'Enterprise Value per Software Engineer (EV/SE) measures how much enterprise value each software engineer creates or supports. It is calculated as Enterprise Value divided by total software engineering headcount. This metric is used by PE/VC firms, acquirers, and boards to assess engineering leverage and efficiency.', color: 'cyan' },
    { q: 'How is EV/SE used in M&A?', a: 'EV/SE is a key due diligence metric. A high EV/SE (e.g., above $5M/engineer) indicates the engineering team has high leverage — each engineer supports significant enterprise value. A low EV/SE may indicate overstaffing or that the technology is commoditized. Acquirers use EV/SE to benchmark targets against comparable transactions.', color: 'violet' },
    { q: 'What is a good EV/SE ratio?', a: 'Benchmarks by stage: Pre-revenue startups ($500K-2M/engineer), Seed/Series A ($1-3M/engineer), Growth stage ($2-8M/engineer), Late stage ($5-15M/engineer), Public SaaS ($8-25M/engineer). Top-tier companies like Palantir and Datadog have achieved $15-30M/engineer.', color: 'emerald' },
    { q: 'How does EV/SE relate to fundraising?', a: 'During fundraising, EV/SE helps justify valuation. If industry comparables show $5M/engineer and you have 20 engineers, a $100M valuation is within market norms. If you are asking for $200M ($10M/engineer), you need to demonstrate why your team has above-average leverage through proprietary technology, network effects, or data moats.', color: 'amber' },
    { q: 'Can EV/SE be artificially inflated?', a: 'Yes. Companies can inflate EV/SE by using contractors instead of FTEs (reducing denominator), outsourcing significant engineering (offshore teams not counted), or through inflated valuations (numerator too high). Sophisticated investors normalize for these factors.', color: 'rose' },
    { q: 'How is EV/SE different from revenue per engineer?', a: 'Revenue per engineer measures current productivity. EV/SE measures market-perceived future value creation per engineer. A pre-revenue AI startup might have $0 revenue per engineer but $10M EV/SE because investors value the technology potential. The gap between the two indicates market expectations.', color: 'cyan' },
    { q: 'Is the EV/SE Calculator free?', a: 'Yes. The EV/SE Calculator is completely free with no account required. Input your company valuation, engineering headcount, and stage to receive instant EV/SE benchmarking with industry comparisons and strategic recommendations.', color: 'violet' },
    { q: 'How should boards use EV/SE?', a: 'Boards should track EV/SE quarterly alongside revenue per engineer and PDI. Rising EV/SE with stable headcount indicates the market values your engineering investment. Falling EV/SE with growing headcount may indicate diminishing returns from engineering hiring.', color: 'emerald' },
];

const colorStyles: Record<string, string> = {
    cyan: 'border-cyan-500/20 bg-cyan-500/5', violet: 'border-violet-500/20 bg-violet-500/5',
    emerald: 'border-emerald-500/20 bg-emerald-500/5', amber: 'border-amber-500/20 bg-amber-500/5',
    rose: 'border-rose-500/20 bg-rose-500/5',
};

export default function EvSeFaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.richardewing.io/tools' },
            { '@type': 'ListItem', position: 3, name: 'EV/SE Calculator', item: 'https://www.richardewing.io/tools/ev-se' },
            { '@type': 'ListItem', position: 4, name: 'FAQ', item: 'https://www.richardewing.io/tools/ev-se/faq' },
        ],
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/tools" className="hover:text-cyan-400">Tools</Link><span>/</span>
                        <Link href="/tools/ev-se" className="hover:text-cyan-400">EV/SE</Link><span>/</span>
                        <span className="text-cyan-400 font-bold">FAQ</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        EV/SE{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">FAQ</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">Everything you need to know about valuing engineering teams with Enterprise Value per Software Engineer.</p>
                    <div className="space-y-6 mb-16">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorStyles[faq.color]}`}>
                                <h2 className="text-xl font-grotesk font-bold text-white mb-4">{faq.q}</h2>
                                <p className="text-zinc-300 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Try the EV/SE Calculator</h2>
                        <p className="text-zinc-300 mb-6">Benchmark your engineering team valuation in under 5 minutes. No account required.</p>
                        <Link href="/tools/ev-se" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold hover:opacity-90 transition-opacity">Launch EV/SE Calculator &rarr;</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
