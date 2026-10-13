import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata: Metadata = {
    title: 'FAQ  -  AI Advisory, Exogram & Frameworks',
    description: 'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform. Clear answers for engineering executives.',
    alternates: { canonical: 'https://www.richardewing.io/faq' },
    keywords: ['AI economist FAQ', 'richard ewing FAQ', 'advisory FAQ', 'exogram FAQ', 'technical debt FAQ'],
    openGraph: {
        title: 'FAQ  -  AI Advisory, Exogram & Frameworks | Richard Ewing',
        description: 'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform.',
        url: 'https://www.richardewing.io/faq',
        siteName: 'Richard Ewing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ  -  AI Advisory, Exogram & Frameworks | Richard Ewing',
        description: 'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const faqs = [
    {
        category: 'Product & AI Economist Engagements',
        question: 'What are the 3 Buying Paths for working with Richard Ewing?',
        answer: 'We organize engagements into 3 clear paths: Path A (Fix & Scale an Existing Product P&L) starts with Free Diagnostic Calculators ($0), the Product & AI Economist Operating Kit + Live Workspace ($29 / $79), a 60-minute 1-on-1 P&L Tear-Down ($450), and a 2-Week Turnaround Sprint ($2,500). Path B (Build a New 0-to-1 AI Product) is a 21-Day 0-to-1 AI Product Build Sprint ($7,500) delivering deployed software on Next.js and Cloudflare Edge. Path C covers Executive Leadership & Diligence: Fractional CPO / Product Economist ($10,000/mo), PE & M&A Product Due Diligence ($15,000), and Sponsored Benchmark Research ($2,500+).'
    },
    {
        category: 'Product & AI Economist Engagements',
        question: 'How do you measure technical debt and Zombie Features in financial terms?',
        answer: 'We deploy the Product Debt Index (PDI), Revenue Per Engineer (APER), and AI Unit Economics Benchmark (AUEB) to convert feature bloat, maintenance load, and token burn into direct dollar liabilities and recoverable EBITDA.'
    },
    {
        category: 'Product & AI Economist Engagements',
        question: 'Who is Richard Ewing and what is his background?',
        answer: 'Richard Ewing is a Product & AI Economist, executive product leader (CPO / VP of Product), and Founder of Exogram.ai (enterprise AI governance) and CareerWin.ai (career intelligence). He scaled his product portfolio from $0 to $25M ARR at Tyler Technologies (S&P 500), turned around a $20M P&L (+200% YoY), cut $5M in annualized product waste, and holds an MBA in Finance and a BS in Computer Science.'
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
        answer: 'CareerWin.ai is the individual career intelligence branch of the Product & AI Economics ecosystem. It provides role benchmarks, leveling intelligence, and compensation strategy for product leaders, engineers, and executives.'
    }
];

export default function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <BreadcrumbSchema items={[
                { name: 'FAQ', url: 'https://www.richardewing.io/faq' }
            ]} />
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-16 border-b border-zinc-400 pb-12 text-center">
                    <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-3">
                        Clear Answers &amp; Deterministic Data
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-zinc-900 font-semibold max-w-2xl mx-auto leading-relaxed">
                        Common questions about Product &amp; AI Economics advisory services, the $29 Operating Kit + Live Workspace, Exogram runtime governance, and CareerWin career intelligence.
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
                    <h2 className="text-2xl font-grotesk font-bold mb-4">Have a specific Product P&amp;L or AI Margin question?</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-sm font-medium mb-8">
                        Book a 60-minute 1-on-1 P&amp;L &amp; AI Tear-Down with Richard Ewing ($450) or start with the $29 Operating Kit + Live Browser Workspace.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/services#gut_check"
                            className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-zinc-950 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-amber-400 transition-colors"
                        >
                            Book 60-Min Tear-Down ($450) &rarr;
                        </Link>
                        <Link 
                            href="/toolkit"
                            className="inline-flex items-center justify-center px-8 py-4 bg-zinc-800 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-700 transition-colors"
                        >
                            Get $29 Operating Kit &rarr;
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
