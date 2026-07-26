import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'FAQ — AI Advisory, Exogram & Frameworks',
    description: 'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform.',
    alternates: { canonical: 'https://www.richardewing.io/faq' },
    keywords: ['AI economist FAQ', 'richard ewing FAQ', 'advisory FAQ', 'exogram FAQ', 'technical debt FAQ'],
    openGraph: {
        title: 'FAQ — AI Advisory, Exogram & Frameworks | Richard Ewing',
        description: 'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform.',
        url: 'https://www.richardewing.io/faq',
        siteName: 'Richard Ewing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ — AI Advisory, Exogram & Frameworks | Richard Ewing',
        description: 'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const faqs = [
    {
        category: 'Advisory & Engagements',
        question: 'What is the format of an AI Economics engagement?',
        answer: 'All engagements follow a strict diagnostic progression: (1) Rapid Gut-Check ($450), (2) R&D Capital Audit ($7,500), and (3) Enterprise Retainer ($10,000/mo). We deliver written financial risk models, board-ready executive summaries, and deterministic runtime controls.'
    },
    {
        category: 'Advisory & Engagements',
        question: 'How do you measure technical debt in financial terms?',
        answer: 'We deploy the Product Debt Index (PDI) and AI Provider Efficiency Ratio (A-PER) to convert code-level complexity, context rot rates, and token burn into direct dollar liabilities and gross margin erosion.'
    },
    {
        category: 'Advisory & Engagements',
        question: 'Who is Richard Ewing and what is his background?',
        answer: 'Richard Ewing is an AI Economist and Founder of Exogram (enterprise AI governance) and CareerWin.ai (career intelligence). He holds an MBA in Finance and BS in Computer Science, with experience scaling tech organizations from $0 to $25M ARR.'
    },
    {
        category: 'Exogram & Technical Governance',
        question: 'What is Exogram and how does it prevent AI billing shock?',
        answer: 'Exogram is a deterministic AI governance runtime that enforces policy-as-code at the VPC level. It gates non-deterministic model outputs, caps API token explosion, and prevents prompt injection liabilities before code reaches production.'
    },
    {
        category: 'Exogram & Technical Governance',
        question: 'How does Exogram differ from probabilistic firewalls?',
        answer: 'Third-party API firewalls charge latency and token taxes to probabilistically inspect LLM outputs. Exogram uses hard context XML definitions and root-cause schema enforcement to eliminate non-deterministic failure at the architecture layer.'
    },
    {
        category: 'Ecosystem & Career Intelligence',
        question: 'What is CareerWin.ai and how does it fit into the platform?',
        answer: 'CareerWin.ai is the individual career intelligence branch of the AI Economics ecosystem. It provides role benchmarks, leveling intelligence, and compensation strategy for engineers, architects, and product leaders.'
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-16 border-b border-zinc-400 pb-12 text-center">
                    <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-3">
                        Clear Answers & Deterministic Data
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-zinc-900 font-semibold max-w-2xl mx-auto leading-relaxed">
                        Common questions about AI Economics advisory services, diagnostic tools, Exogram runtime governance, and CareerWin career intelligence.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="space-y-6 mb-16">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm">
                            <div className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-2">
                                {faq.category}
                            </div>
                            <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">
                                {faq.question}
                            </h2>
                            <p className="text-zinc-900 font-semibold leading-relaxed text-sm">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center">
                    <h2 className="text-2xl font-grotesk font-bold mb-4">Have a specific architectural question?</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-sm font-medium mb-8">
                        Book a 30-minute Rapid Diagnostic with Richard Ewing to audit your R&D capital and review governance controls.
                    </p>
                    <Link 
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-zinc-950 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-amber-400 transition-colors"
                    >
                        Schedule $450 Gut-Check Evaluation &rarr;
                    </Link>
                </div>

            </div>
        </main>
    );
}
