import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Unit Economics Benchmark (AUEB) FAQ | Richard Ewing',
    description: 'Frequently asked questions about the AI Unit Economics Benchmark (AUEB) — how to measure AI feature profitability, inference costs, and model ROI.',
    keywords: ['AI unit economics', 'AUEB calculator', 'AI cost analysis', 'inference cost benchmark', 'AI ROI'],
    alternates: { canonical: 'https://www.richardewing.io/tools/aueb/faq' },
    openGraph: { title: 'AUEB FAQ', description: 'How to measure AI feature profitability with AUEB.', url: 'https://www.richardewing.io/tools/aueb/faq', type: 'article' },
};

const faqs = [
    { q: 'What is the AI Unit Economics Benchmark (AUEB)?', a: 'AUEB is a framework for calculating the true unit economics of AI-powered features and products. It goes beyond simple API costs to include inference compute costs, data pipeline costs, model training amortization, monitoring and observability overhead, human-in-the-loop costs, and error correction expenses.', color: 'cyan' },
    { q: 'Why is AUEB important for AI products?', a: 'Most AI products lose money at the feature level because teams only account for API costs (e.g., OpenAI billing) without factoring in the full cost stack. AUEB reveals the true cost per AI interaction, helping teams price correctly, identify cost reduction opportunities, and make informed build-vs-buy decisions.', color: 'violet' },
    { q: 'How do I calculate AI cost per interaction?', a: 'Use our free AUEB Calculator. Input your monthly AI API spend, infrastructure costs, data processing costs, team time allocated to AI, and monthly AI interaction volume. The calculator produces cost-per-interaction, gross margin analysis, and break-even calculations.', color: 'emerald' },
    { q: 'What is a healthy AI gross margin?', a: 'Target AI feature gross margins: above 70% is excellent and sustainable at scale. 50-70% is healthy with room for optimization. 30-50% is a warning sign that needs cost reduction strategy. Below 30% is critical and may mean losing money on every interaction. These benchmarks apply to AI features in production, not research.', color: 'amber' },
    { q: 'How do I reduce AI inference costs?', a: 'Top cost reduction strategies: model distillation (use smaller models for simple tasks), prompt caching (cache repeated prompt patterns), batching (group requests for efficiency), model routing (route easy queries to cheaper models), and response caching (cache identical queries). Typical savings: 30-60% with these optimizations.', color: 'rose' },
    { q: 'Should I build or buy AI capabilities?', a: 'AUEB helps answer this. Calculate your cost-per-interaction using API providers vs estimated self-hosted costs. Factor in team hiring costs, GPU/infrastructure, maintenance burden, iteration speed, and switching costs. Generally, buy first to validate product-market fit, then consider building when monthly spend exceeds $50K-100K.', color: 'cyan' },
    { q: 'Is the AUEB Calculator free?', a: 'Yes. The AUEB Calculator is completely free with no account required. It provides instant AI unit economics analysis with industry benchmarks and cost optimization recommendations.', color: 'violet' },
    { q: 'How does AUEB account for model improvements?', a: 'AUEB includes a model refresh factor that amortizes the cost of periodic model upgrades, fine-tuning, and eval suite maintenance across your interaction volume. This ensures your unit economics reflect the true ongoing investment, not just point-in-time API costs.', color: 'emerald' },
];

const colorStyles: Record<string, string> = {
    cyan: 'border-cyan-500/20 bg-cyan-500/5', violet: 'border-violet-500/20 bg-violet-500/5',
    emerald: 'border-emerald-500/20 bg-emerald-500/5', amber: 'border-amber-500/20 bg-amber-500/5',
    rose: 'border-rose-500/20 bg-rose-500/5',
};

export default function AuebFaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.richardewing.io/tools' },
            { '@type': 'ListItem', position: 3, name: 'AUEB Calculator', item: 'https://www.richardewing.io/tools/aueb' },
            { '@type': 'ListItem', position: 4, name: 'FAQ', item: 'https://www.richardewing.io/tools/aueb/faq' },
        ],
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/tools" className="hover:text-cyan-400">Tools</Link><span>/</span>
                        <Link href="/tools/aueb" className="hover:text-cyan-400">AUEB</Link><span>/</span>
                        <span className="text-cyan-400 font-bold">FAQ</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AUEB{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">FAQ</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Everything you need to know about measuring AI unit economics and feature profitability.</p>
                    <div className="space-y-6 mb-16">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorStyles[faq.color]}`}>
                                <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">{faq.q}</h2>
                                <p className="text-zinc-950 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Try the AUEB Calculator</h2>
                        <p className="text-zinc-950 mb-6">Calculate your AI unit economics in under 5 minutes. No account required.</p>
                        <Link href="/tools/aueb" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold hover:opacity-90 transition-opacity">Launch AUEB Calculator &rarr;</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
