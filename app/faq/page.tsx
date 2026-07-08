import type { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
    title: 'FAQ & Strategy Diagnostics | Richard Ewing',
    description: 'FAQ provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['AI economist FAQ', 'richard ewing FAQ', 'advisory FAQ', 'exogram FAQ', 'technical debt FAQ'],
};

const faqs = [
    {
        category: 'Advisory Services',
        questions: [
            { q: 'What does a AI Economist do?', a: 'A AI Economist treats product decisions as economic decisions. I audit R&D spend, surface capital risks, and identify hidden technical debt in B2B SaaS environments. I translate between engineering and the C-Suite — quantifying the financial impact of technical decisions.' },
            { q: 'How does the Diagnostic engagement work?', a: 'The $2,500 Diagnostic includes a PDI audit, AUEB assessment, APER diagnostic, a 1-hour strategy call, and a written executive summary. It typically takes 2-3 weeks and produces a quantified assessment of your engineering economics.' },
            { q: 'What is the difference between Fractional CTO and Board Advisor?', a: 'The Fractional CTO tier ($7,500/month) provides 10 hours/week of hands-on advisory: architecture reviews, team coaching, board prep. The Board Advisor tier ($15,000/month) provides portfolio-level oversight: M&A due diligence, multi-company benchmarking, and AI governance framework implementation.' },
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
            { q: 'Can I cite the glossary definitions?', a: 'Yes. The glossary is designed to be the canonical source for AI Economics terminology. Please attribute to richardewing.io.' },
            { q: 'How are the frameworks different from the articles?', a: 'Frameworks are canonical definitions — permanent reference documents. Articles are time-stamped publications in external outlets (Built In, Mind the Product, CIO.com, HackerNoon). The frameworks are cited; the articles are promotional.' },
            { q: 'How do I get the R&D Audit Checklist?', a: 'Subscribe via any form on the site — exit intent popup, newsletter section, or tool gate. You\'ll be redirected immediately to the full 15-question checklist.' },
        ],
    },
];

export default function FaqPage() {
    // FAQPage JSON-LD schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.flatMap(cat => cat.questions.map(q => ({
            '@type': 'Question',
            name: q.q,
            acceptedAnswer: { '@type': 'Answer', text: q.a },
        }))),
    };

    return (
        <div className="max-w-4xl w-full relative z-10 mx-auto">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <span>Help</span><span>/</span><span className="text-cyan-900 font-extrabold font-semibold font-bold">FAQ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">Questions</span>
            </h1>
            <p className="text-lg text-zinc-900 mb-12">Answers about advisory services, frameworks, tools, Exogram, and the glossary.</p>

            {faqs.map((category) => (
                <div key={category.category} className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-3">
                        <span className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-cobalt" />
                        {category.category}
                    </h2>
                    <div className="space-y-4">
                        {category.questions.map((faq) => (
                            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            ))}
 
            {/* CTA */}
            <div className="text-center py-12 border-t border-zinc-400">
                <h2 className="text-2xl font-bold text-zinc-950 mb-4">Still Have Questions?</h2>
                <p className="text-zinc-900 mb-8">Book a free 15-minute call or explore the tools.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/services" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-cyan-400 transition-colors">
                        Book a Call →
                    </Link>
                    <Link href="/tools" className="px-8 py-4 border border-zinc-500 text-zinc-950 font-bold uppercase tracking-widest text-xs font-bold rounded-xl hover:border-cyan-500 transition-all">
                        Explore Free Tools →
                    </Link>
                </div>
            </div>
        </div>
    );
}
