import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Product Debt Index FAQ & Strategy Diagnostics | Richard Ewing',
    description: 'Product Debt Index FAQ provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['product debt index', 'PDI calculator', 'technical debt measurement', 'PDI vs DORA', 'PDI score meaning'],
    alternates: { canonical: 'https://www.richardewing.io/tools/pdi/faq' },
    openGraph: { title: 'Product Debt Index (PDI) FAQ', description: 'Everything you need to know about the PDI framework.', url: 'https://www.richardewing.io/tools/pdi/faq', type: 'article' },
};

const faqs = [
    { q: 'What is the Product Debt Index (PDI)?', a: 'The Product Debt Index (PDI) is a quantitative framework that measures the total burden of technical debt across a codebase or product. Unlike simple code quality scores, PDI combines multiple dimensions — code debt, architecture debt, infrastructure debt, test debt, and documentation debt — into a single normalized score (0-100) that translates engineering complexity into financial impact. A PDI of 0 means zero measurable debt; a PDI of 100 indicates critical technical insolvency.', color: 'cyan' },
    { q: 'How is the PDI score calculated?', a: 'PDI is calculated by scoring five debt dimensions on a 0-20 scale: Code Debt (complexity, duplication, code smells), Architecture Debt (coupling, cohesion, dependency cycles), Infrastructure Debt (deployment pipeline age, monitoring gaps), Test Debt (coverage gaps, flaky tests, missing integration tests), and Documentation Debt (stale docs, missing API docs, tribal knowledge). These five scores are summed to produce the composite PDI score (0-100).', color: 'violet' },
    { q: 'What is a good PDI score?', a: 'PDI scores are interpreted as: 0-20 (Excellent) means minimal technical debt with sustainable pace. 21-40 (Healthy) means manageable debt with clear remediation paths. 41-60 (Warning) means debt is impacting velocity and needs attention. 61-80 (Critical) means significant drag on delivery with urgent remediation needed. 81-100 (Insolvency) means technical debt exceeds the team\u0027s capacity to service it while delivering features.', color: 'emerald' },
    { q: 'How does PDI compare to DORA metrics?', a: 'PDI and DORA measure different things. DORA (Deployment Frequency, Lead Time, Change Failure Rate, MTTR) measures delivery performance outcomes. PDI measures the underlying technical debt that causes those outcomes. Think of PDI as a leading indicator and DORA as a lagging indicator. A high PDI score today predicts declining DORA metrics in 3-6 months.', color: 'amber' },
    { q: 'How often should I measure PDI?', a: 'We recommend measuring PDI quarterly for strategic planning and monthly for active remediation sprints. The trend matters more than any single snapshot. A rising PDI indicates debt is accumulating faster than remediation. A falling PDI indicates your team is successfully paying down debt.', color: 'rose' },
    { q: 'Can PDI be used for board reporting?', a: 'Yes. PDI was specifically designed to translate engineering complexity into business language. The Innovation Tax metric (derived from PDI) shows what percentage of engineering capacity is consumed servicing existing debt rather than building new features. This is directly comparable to financial metrics boards already understand.', color: 'cyan' },
    { q: 'Is the PDI Calculator free?', a: 'Yes. The PDI Calculator on richardewing.io is completely free to use. You input your team\u0027s data across the five debt dimensions and receive an instant PDI score with interpretation, benchmarks, and recommendations. No account required.', color: 'violet' },
    { q: 'What is the Innovation Tax?', a: 'The Innovation Tax is the percentage of your engineering team\u0027s time spent maintaining existing systems rather than building new features or improvements. It is derived directly from your PDI score. An Innovation Tax above 40% typically indicates your team is spending more time fighting fires than creating value.', color: 'emerald' },
];

const colorStyles: Record<string, string> = {
    cyan: 'border-cyan-500/20 bg-cyan-500/5',
    violet: 'border-violet-500/20 bg-violet-500/5',
    emerald: 'border-emerald-500/20 bg-emerald-500/5',
    amber: 'border-amber-500/20 bg-amber-500/5',
    rose: 'border-rose-500/20 bg-rose-500/5',
};

export default function PdiFaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
            '@type': 'Question', name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.richardewing.io/tools' },
            { '@type': 'ListItem', position: 3, name: 'PDI Calculator', item: 'https://www.richardewing.io/tools/pdi' },
            { '@type': 'ListItem', position: 4, name: 'FAQ', item: 'https://www.richardewing.io/tools/pdi/faq' },
        ],
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/tools" className="hover:text-cyan-900 font-extrabold font-semibold">Tools</Link>
                        <span>/</span>
                        <Link href="/tools/pdi" className="hover:text-cyan-900 font-extrabold font-semibold">PDI</Link>
                        <span>/</span>
                        <span className="text-cyan-900 font-extrabold font-semibold font-bold">FAQ</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        PDI{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">FAQ</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Everything you need to know about the Product Debt Index — from scoring to board reporting.</p>

                    <div className="space-y-6 mb-16">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorStyles[faq.color]}`}>
                                <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">{faq.q}</h2>
                                <p className="text-zinc-950 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Try the PDI Calculator</h2>
                        <p className="text-zinc-950 mb-6">Get your Product Debt Index score in under 5 minutes. No account required.</p>
                        <Link href="/tools/pdi" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">
                            Launch PDI Calculator &rarr;
                        </Link>
                    </div>
                </div>
            
                    <AdvisoryCTA variant="tool-result" />
                </div>
        </main>
    );
}
