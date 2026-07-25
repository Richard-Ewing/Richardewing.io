import type { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
    title: {
        absolute: 'FAQ — AI Advisory, Exogram & Frameworks | Richard Ewing'
    },
    description: 'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform.',
    alternates: { canonical: 'https://www.richardewing.io/faq' },
    keywords: ['AI economist FAQ', 'richard ewing FAQ', 'advisory FAQ', 'exogram FAQ', 'technical debt FAQ'],
};

const faqs = [
    {
        category: 'Advisory Services',
        questions: [
            { q: 'What does an AI Economist do?', a: 'An AI Economist treats product and technology decisions as economic decisions. I audit R&D spend, surface capital risks, and identify hidden technical debt in B2B SaaS environments. I translate between engineering and the C-Suite — quantifying the financial impact of technical decisions.' },
            { q: 'How does the Diagnostic engagement work?', a: 'The $2,500 Diagnostic includes a PDI audit, AUEB assessment, APER diagnostic, a 1-hour strategy call, and a written executive summary. It typically takes 2-3 weeks and produces a quantified assessment of your engineering economics.' },
            { q: 'What is the difference between Fractional CTO and Board Advisor?', a: 'The Fractional CTO retainer ($10,000/month) provides dedicated hands-on advisory: architecture reviews, cost-cap setups, team coaching, and board prep. The Board Advisor tier provides portfolio-level oversight: M&A due diligence, multi-company benchmarking, and AI governance framework implementation.' },
            { q: 'Do you work with startups or only enterprises?', a: 'Both. Startups benefit from the Diagnostic to identify problems early. Growth-stage companies benefit from Fractional CTO support. Enterprise and PE/VC portfolios benefit from Board Advisory.' },
        ],
    },
    {
        category: 'Frameworks & Tools',
        questions: [
            { q: 'What is the Technical Insolvency Date?', a: 'The exact quarter when maintenance costs mathematically consume 100% of engineering capacity, freezing all innovation. The PDI tool calculates this. Most companies don\'t know their Technical Insolvency Date until it\'s too late.' },
            { q: 'Are the diagnostic tools free?', a: 'Yes. The PDI, EV-SE, AUEB, APER, and Audit Interview tools are completely free to use. They require an email for access — you\'ll be added to the newsletter but can unsubscribe anytime.' },
            { q: 'What is the Cost of Predictivity?', a: 'The exponential cost curve of AI accuracy improvements. Going from 80% to 95% accuracy often costs 10x more. This hidden inflation can turn profitable AI features into margin-negative liabilities.' },
            { q: 'How is Product Debt different from Technical Debt?', a: 'Technical debt is code quality problems. Product debt is the accumulated cost of building features that don\'t generate sufficient value. Product debt includes zombie features, misaligned roadmaps, and engineering capital misallocation.' },
        ],
    },
    {
        category: 'Exogram',
        questions: [
            { q: 'What is Exogram?', a: 'Exogram is the execution control plane for autonomous AI agents — IAM for the agentic AI era. It sits between AI models and the actions they take, ensuring agents operate within defined truth, constraints, and governance boundaries.' },
            { q: 'How is Exogram different from guardrails?', a: 'Guardrails are probabilistic — they try to catch bad outputs after generation. Exogram\'s constraint engine is deterministic — impossible actions are filtered before execution. It\'s the difference between a suggestion and a law.' },
            { q: 'Who needs Exogram?', a: 'Any organization deploying AI agents that take autonomous actions — especially in regulated industries (finance, healthcare, legal) where AI decisions create liability exposure.' },
        ],
    },
    {
        category: 'Content & Glossary',
        questions: [
            { q: 'Where should I start?', a: 'Start with the Production AI Governance Framework or the $450 Gut-Check diagnostic. If you want to understand the worldview, read the essays on CIO.com or Built In.' },
            { q: 'How often is content published?', a: 'Articles are published weekly. The newsletter goes out twice a month with original research, diagnostic case studies, and framework updates.' },
        ],
    },
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-12 border-b border-zinc-300 pb-8">
                    <div className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-3">
                        Knowledge Base
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-zinc-800 leading-relaxed font-semibold max-w-2xl">
                        Common questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform.
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-12">
                    {faqs.map((cat, idx) => (
                        <div key={idx} className="bg-white border border-zinc-300 rounded-2xl p-6 sm:p-8 shadow-sm">
                            <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 border-b border-zinc-200 pb-3">
                                {cat.category}
                            </h2>
                            <div className="space-y-4">
                                {cat.questions.map((q, qIdx) => (
                                    <FAQItem key={qIdx} question={q.q} answer={q.a} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center">
                    <h2 className="text-3xl font-grotesk font-bold mb-4">Have a specific question?</h2>
                    <p className="text-zinc-400 max-w-lg mx-auto mb-8 text-sm font-medium">
                        Schedule a $450 Gut-Check Evaluation to discuss your specific infrastructure, AI costs, and engineering velocity.
                    </p>
                    <Link href="/services" className="inline-block px-8 py-4 bg-white text-zinc-950 font-bold font-mono text-xs uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors">
                        Book Diagnostic Session →
                    </Link>
                </div>

            </div>
        </main>
    );
}
