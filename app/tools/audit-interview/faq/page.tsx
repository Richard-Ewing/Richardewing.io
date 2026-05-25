import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Audit Interview FAQ | Hiring Protocol | Ewing',
    description: 'How the Audit Interview tests senior engineering judgment instead of memorized syntax. Methodology, scoring rubric, and assessment tracks.',
    keywords: ['audit interview tool', 'AI technical interview', 'engineering assessment', 'judgment-based interview'],
    alternates: { canonical: 'https://www.richardewing.io/tools/audit-interview/faq' },
    openGraph: { title: 'Audit Interview FAQ', description: 'AI-powered engineering assessment that tests judgment.', url: 'https://www.richardewing.io/tools/audit-interview/faq', type: 'article' },
};

const faqs = [
    { q: 'What is the Audit Interview tool?', a: 'The Audit Interview is an AI-powered technical assessment tool that evaluates engineering candidates on judgment, decision-making, and engineering economics understanding — not just coding syntax. It presents real-world scenarios (architecture decisions, technical debt tradeoffs, build vs buy) and evaluates the candidate\u0027s reasoning quality.', color: 'cyan' },
    { q: 'How is the Audit Interview different from LeetCode?', a: 'Traditional coding interviews (LeetCode, HackerRank) test algorithm knowledge and syntax recall. The Audit Interview tests what actually matters in senior engineering roles: architectural judgment, tradeoff analysis, stakeholder communication, and economic reasoning. Research shows traditional interviews have a 50% false negative rate for senior candidates.', color: 'violet' },
    { q: 'What scenarios does the Audit Interview cover?', a: 'The Audit Interview covers: technical debt assessment and prioritization, build vs buy decision analysis, architecture scaling decisions, team and process optimization, cost-benefit analysis for technology investments, and incident response and post-mortem analysis. Each scenario is calibrated to the declared seniority level.', color: 'emerald' },
    { q: 'How is the assessment scored?', a: 'Candidates are scored across multiple dimensions: Technical Depth (understanding of concepts), Economic Reasoning (ability to translate technical decisions into business impact), Communication (clarity and structure of responses), and Judgment Quality (ability to identify tradeoffs and make defensible decisions). An overall composite score is provided with detailed per-dimension feedback.', color: 'amber' },
    { q: 'Can I use the Audit Interview for my hiring process?', a: 'Yes. The Audit Interview is designed to complement your existing hiring pipeline. Use it as a screening step (before live interviews) or as a parallel assessment (alongside traditional coding interviews) to reduce false negatives and identify candidates with strong engineering judgment.', color: 'rose' },
    { q: 'Is the Audit Interview free?', a: 'The basic Audit Interview assessment is available for free. Premium features (custom scenario design, committee review mode, detailed analytics, and ATS integration) are available for organizations with high-volume hiring needs.', color: 'cyan' },
    { q: 'How does the AI assessment work?', a: 'The Audit Interview uses advanced AI (powered by Gemini) to evaluate candidate responses in real-time. The AI acts as multiple expert reviewers (a CTO, a Staff Engineer, and a AI Economist), providing multi-perspective evaluation. Each response is scored against calibrated rubrics developed from thousands of real engineering leader assessments.', color: 'violet' },
    { q: 'What seniority levels does it support?', a: 'The Audit Interview supports Mid-level (3-5 years), Senior (5-8 years), Staff/Principal (8+ years), and Engineering Manager/Director levels. Scenarios and scoring rubrics are calibrated for each level, so a mid-level candidate is evaluated against mid-level expectations, not staff-level benchmarks.', color: 'emerald' },
];

const colorStyles: Record<string, string> = {
    cyan: 'border-cyan-500/20 bg-cyan-500/5', violet: 'border-violet-500/20 bg-violet-500/5',
    emerald: 'border-emerald-500/20 bg-emerald-500/5', amber: 'border-amber-500/20 bg-amber-500/5',
    rose: 'border-rose-500/20 bg-rose-500/5',
};

export default function AuditInterviewFaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.richardewing.io/tools' },
            { '@type': 'ListItem', position: 3, name: 'Audit Interview', item: 'https://www.richardewing.io/tools/audit-interview' },
            { '@type': 'ListItem', position: 4, name: 'FAQ', item: 'https://www.richardewing.io/tools/audit-interview/faq' },
        ],
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/tools" className="hover:text-cyan-900 font-extrabold font-semibold">Tools</Link><span>/</span>
                        <Link href="/tools/audit-interview" className="hover:text-cyan-900 font-extrabold font-semibold">Audit Interview</Link><span>/</span>
                        <span className="text-cyan-900 font-extrabold font-semibold font-bold">FAQ</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Audit Interview{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">FAQ</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Everything you need to know about AI-powered engineering assessment that tests judgment, not just syntax.</p>
                    <div className="space-y-6 mb-16">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorStyles[faq.color]}`}>
                                <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">{faq.q}</h2>
                                <p className="text-zinc-950 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Try the Audit Interview</h2>
                        <p className="text-zinc-950 mb-6">Test your engineering judgment with our AI-powered assessment. Free to try.</p>
                        <Link href="/tools/audit-interview" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Start Audit Interview &rarr;</Link>
                    </div>
                </div>
            
                    <AdvisoryCTA variant="tool-result" />
                </div>
        </main>
    );
}
