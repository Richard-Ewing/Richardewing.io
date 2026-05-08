import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Advisory Pricing | Richard Ewing — AI Economist',
    description: 'Transparent pricing for technology advisory, fractional CTO, and board-level AI governance services. From diagnostic audits to ongoing advisory.',
    keywords: ['advisory pricing', 'fractional CTO cost', 'technology advisory', 'CTO advisory pricing', 'Richard Ewing pricing', 'AI economist'],
    alternates: { canonical: 'https://www.richardewing.io/pricing' },
    openGraph: { title: 'Advisory Pricing | Richard Ewing', description: 'Transparent pricing for technology advisory services.', url: 'https://www.richardewing.io/pricing', type: 'website' },
};

const tiers = [
    {
        name: 'Diagnostic',
        price: '$2,500',
        period: 'one-time',
        description: 'Quantify your engineering ROI with data-driven analysis',
        features: [
            'Product Debt Index (PDI) audit of your codebase',
            'AI Unit Economics Benchmark (AUEB) assessment',
            'Revenue Per Engineer (APER) diagnostic',
            '1-hour strategy call with findings presentation',
            'Written executive summary with recommendations',
            'Benchmark comparison against industry peers',
        ],
        cta: 'Book Diagnostic',
        href: '/api/buy/insolvency_diagnostic',
        highlight: false,
        badge: null,
        external: true,
    },
    {
        name: 'Fractional CTO',
        price: '$7,500',
        period: '/month',
        description: 'Senior technology leadership at a fraction of the cost',
        features: [
            'Everything in Diagnostic, ongoing',
            '10 hours/week of dedicated advisory',
            'Architecture reviews & technical strategy',
            'Engineering team coaching & 1:1s',
            'Board meeting preparation & attendance',
            'Vendor evaluation & technology selection',
            'Due diligence support for investors',
            'Monthly executive dashboard & reporting',
        ],
        cta: 'Start Conversation',
        href: '/api/buy/full_audit',
        highlight: true,
        badge: 'Most Popular',
        external: true,
    },
    {
        name: 'Board Advisor',
        price: '$15,000',
        period: '/month',
        description: 'Board-level technology governance for PE/VC portfolios',
        features: [
            'Everything in Fractional CTO',
            'Board-level technology due diligence',
            'M&A technical assessment & integration planning',
            'Portfolio-wide technology benchmarking',
            'PE/VC deal flow technical evaluation',
            'AI governance framework implementation',
            'Technical Insolvency Date monitoring',
            'Quarterly portfolio technology reviews',
            'Direct board communication & reporting',
        ],
        cta: 'Discuss Engagement',
        href: 'mailto:richardewing@exogram.ai?subject=Board%20Advisor%20Inquiry',
        highlight: false,
        badge: 'Enterprise',
        external: true,
    },
];

const faqs = [
    { q: 'What industries do you work with?', a: 'Primarily B2B SaaS, AI/ML companies, and PE/VC-backed technology portfolios. Industries include fintech, healthtech, edtech, and enterprise software.' },
    { q: 'What is a typical engagement length?', a: 'Diagnostic is a one-time engagement (2-3 weeks). Fractional CTO engagements typically run 6-12 months. Board Advisory is ongoing with quarterly renewal.' },
    { q: 'Can I start with a Diagnostic before committing to advisory?', a: 'Absolutely — most clients start with a Diagnostic to quantify their engineering ROI, then upgrade to ongoing advisory based on the findings.' },
    { q: 'Do you work with early-stage startups?', a: 'Yes, but the engagement model differs. Pre-Series A companies typically start with a Diagnostic. Post-Series A companies benefit most from Fractional CTO engagement.' },
    { q: 'What is the ROI of advisory services?', a: 'Diagnostic clients typically identify 20-40% of engineering spend that can be reallocated to higher-value work. Fractional CTO clients see measurable improvements in DORA metrics within 90 days.' },
    { q: 'How do I get started?', a: 'Book an introductory call through the advisory page. No commitment required — we\'ll discuss your situation and recommend the right engagement model.' },
];

export default function PricingPage() {
    return (
        <main className="pt-24 pb-20">
            <div className="page-container">

                <section className="text-center mb-20">
                    <p className="text-xs font-bold font-mono text-cyan-500 uppercase tracking-widest mb-4">Advisory Services</p>
                    <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Transparent Pricing.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Measurable Results.</span>
                    </h1>
                    <p className="text-lg text-zinc-950 font-bold max-w-2xl mx-auto">
                        Every engagement is designed to deliver quantifiable ROI. No black-box consulting — every recommendation is backed by data from our proprietary diagnostic tools.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative rounded-2xl p-8 flex flex-col ${
                                tier.highlight
                                    ? 'bg-gradient-to-b from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)]'
                                    : 'bg-[var(--bg-secondary)] border border-zinc-400'
                            }`}
                        >
                            {tier.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                                        tier.badge === 'Most Popular'
                                            ? 'bg-cyan-500 text-black'
                                            : 'bg-purple-500/20 text-purple-900 font-extrabold font-semibold border border-purple-500/30'
                                    }`}>
                                        {tier.badge}
                                    </span>
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-zinc-950 mb-2">{tier.name}</h3>
                            <p className="text-zinc-950 font-bold text-sm font-semibold mb-6">{tier.description}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-zinc-900">{tier.price}</span>
                                <span className="text-zinc-950 ml-1">{tier.period}</span>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm font-semibold text-zinc-950">
                                        <span className="text-cyan-500 mt-0.5 flex-shrink-0">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={tier.href}
                                target={tier.href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={tier.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm font-semibold transition-all ${
                                    tier.highlight
                                        ? 'bg-gradient-to-r from-cyan-500 to-cobalt text-zinc-950 font-semibold hover:opacity-90 shadow-lg'
                                        : 'bg-white/5 border border-zinc-400 text-zinc-950 hover:bg-white/10 hover:border-zinc-500'
                                }`}
                            >
                                {tier.cta} →
                            </a>
                        </div>
                    ))}
                </section>

                {/* ROI Section */}
                <section className="max-w-4xl mx-auto mb-20">
                    <div className="card p-10 text-center border-emerald-500/20">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-4">The ROI Promise</h2>
                        <p className="text-zinc-950 font-bold mb-8 max-w-2xl mx-auto">
                            Every advisory engagement uses our proprietary diagnostic tools to deliver quantifiable results — not opinions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-cyan-900 font-extrabold font-semibold mb-2">20-40%</div>
                                <div className="text-sm font-semibold text-zinc-950">Engineering spend reallocation identified</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-900 font-extrabold font-semibold mb-2">90 days</div>
                                <div className="text-sm font-semibold text-zinc-950">To measurable DORA metric improvement</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-900 font-extrabold font-semibold mb-2">10-50x</div>
                                <div className="text-sm font-semibold text-zinc-950">Typical ROI on Diagnostic investment</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="card p-6">
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">{faq.q}</h3>
                                <p className="text-zinc-950 font-bold text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="text-center">
                    <div className="card p-10 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-4">Ready to quantify your engineering ROI?</h2>
                        <p className="text-zinc-950 font-bold mb-6">Book a free introductory call. No commitment — let&apos;s discuss your situation.</p>
                        <Link href="/advisory" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-cobalt text-zinc-950 font-semibold font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                            Book Introductory Call →
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}
