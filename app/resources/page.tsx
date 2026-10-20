import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Economics Resources & Tools Hub',
    description: 'Complete library of diagnostic calculators, prompt architectures, execution blueprints, and research papers. Practical tools for engineering leaders.',
    alternates: { canonical: 'https://www.richardewing.io/resources' },
    openGraph: {
        title: 'Resources Hub | Richard Ewing',
        description: 'Access free tools, a technology glossary, curriculum tracks, deep-dive articles, and strategic frameworks for engineering economics.',
        url: 'https://www.richardewing.io/resources',
        type: 'website',
    },
};

const resourceSections = [
    {
        title: 'Diagnostic Tools & Calculators',
        description: 'Quantify engineering ROI, AI unit economics, and team productivity with transparent calculators.',
        items: [
            { name: 'The AI Reality Check (Interactive)', description: 'Audit the delta between AI sales claims and production telemetry', href: '/reality-check' },
            { name: 'Product Debt Index (PDI)', description: 'Calculate your technical debt in dollar terms', href: '/tools/pdi' },
            { name: 'Enterprise Value Scenario Engine (EV-SE)', description: 'Model how metrics changes impact enterprise valuation', href: '/tools/ev-se' },
            { name: 'AI Unit Economics Benchmark (AUEB)', description: 'Calculate the true cost of AI features', href: '/tools/aueb' },
            { name: 'Revenue Per Engineer (APER)', description: 'Benchmark your engineering productivity', href: '/tools/aper' },
        ],
    },
    {
        title: 'Research & Publications',
        description: 'Peer-reviewed articles, canonical concepts, and empirical field studies.',
        items: [
            { name: 'Publications Catalog (174+ Works)', description: 'Full catalog across CIO.com, Built In, Beehiiv, and LinkedIn', href: '/research/publications' },
            { name: 'Canonical Concepts (140+ Frameworks)', description: 'The intellectual operating system of Richard Ewing research', href: '/concepts' },
            { name: 'The AI Economist Newsletter', description: 'Weekly executive briefings on AI unit economics and governance', href: '/newsletter' },
            { name: 'Production AI Governance Framework', description: 'The 5-tier isometric stack for pricing and governing AI', href: '/framework' },
        ],
    },
    {
        title: 'Executive Lexicon & Glossaries',
        description: 'Plain-English definitions for technology leaders and board members.',
        items: [
            { name: 'The Complete Glossary (400+ Terms)', description: 'Master the lexicon of product economics and AI governance', href: '/glossary' },
            { name: 'Technical Insolvency Date', description: 'When maintenance consumes 100% of engineering capacity', href: '/technical-insolvency-date' },
            { name: 'ROAI Framework', description: 'A practical approach to measuring return on AI investment', href: '/roai-framework' },
            { name: 'Security & Trust Principles', description: 'Security principles, trust boundaries, and responsible AI', href: '/security-trust' },
        ],
    },
    {
        title: 'Commercial Kits & Advisory',
        description: 'Practical worksheets, sprint scopes, and embedded leadership paths.',
        items: [
            { name: 'The $29 Operating Kit', description: '5 working P&L spreadsheets, board deck templates, and workspace access', href: '/operating-kit' },
            { name: 'Pricing & Sprints Directory', description: 'Transparent engagement options from 48-hour teardowns to 21-day builds', href: '/pricing-sprints' },
            { name: 'Executive Advisory Tracks', description: 'Strategic advisory for CEOs, CFOs, and product leaders', href: '/advisory' },
            { name: 'Speaking & Keynotes', description: 'Keynotes and workshops on AI economics and engineering productivity', href: '/speaking' },
        ],
    },
];

export default function ResourcesPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'AI Economics Resources & Tools Hub | Richard Ewing',
        description: 'Complete library of diagnostic calculators, prompt architectures, and research papers.',
        url: 'https://www.richardewing.io/resources',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Hero Section */}
            <section className="inner-hero">
                <div className="inner-art" />
                <div className="inner-copy">
                    <p className="eyebrow">
                        <i /> Operating Knowledge · Resources Hub
                    </p>
                    <h1>Everything you need to fix your AI economics.</h1>
                    <p className="inner-lede">
                        A curated directory of diagnostic tools, research papers, executive frameworks,
                        and commercial playbooks designed to help leaders make disciplined technology decisions.
                    </p>
                    <div className="actions">
                        <Link className="button button-gold" href="/reality-check">
                            Run the Reality Check ↗
                        </Link>
                        <Link className="button button-outline" href="/research/publications">
                            Browse Publications ↗
                        </Link>
                    </div>
                </div>

                <aside className="inner-aside glass">
                    <span>RESOURCE PRINCIPLE</span>
                    <strong>Tools over rhetoric. Math over hype.</strong>
                    <p>
                        Every resource in this library is designed for direct operational utility:
                        tested in production software environments and verified against real P&amp;L outcomes.
                    </p>
                </aside>
            </section>

            {/* Resource Sections */}
            <section className="section">
                <div className="space-y-16 max-w-5xl mx-auto">
                    {resourceSections.map((section) => (
                        <div key={section.title} className="space-y-6">
                            <div className="border-b border-[var(--line)] pb-4">
                                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--ink)]">
                                    {section.title}
                                </h2>
                                <p className="text-xs text-[var(--muted)] mt-1">
                                    {section.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="p-5 rounded-xl border border-[var(--line)] bg-[#FAF8F3] hover:border-[var(--forest)] hover:shadow-sm transition flex flex-col justify-between group"
                                    >
                                        <div className="space-y-1.5">
                                            <div className="font-serif font-semibold text-base text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors">
                                                {item.name}
                                            </div>
                                            <p className="text-xs text-[var(--muted)] leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                        <span className="text-[11px] font-mono text-[var(--gold)] mt-3 block">
                                            Explore ↗
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Closing CTA */}
            <section className="closing-cta">
                <p className="eyebrow">Next Step</p>
                <h2>Need tailored guidance for your organization?</h2>
                <p>
                    Book a focused 1-on-1 P&amp;L teardown or explore an embedded advisory engagement.
                </p>
                <div className="actions center">
                    <Link className="button button-gold" href="/reality-check">
                        Run the free Reality Check ↗
                    </Link>
                    <Link className="button button-ghost-light" href="/pricing-sprints">
                        View Sprints &amp; Pricing ↗
                    </Link>
                </div>
            </section>
        </>
    );
}
