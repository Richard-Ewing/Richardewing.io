import type { Metadata } from 'next';
import Link from 'next/link';
import TechnologyIntegrationDocs from '@/components/partnerships/TechnologyIntegrationDocs';
import BrandAssetsKit from '@/components/partnerships/BrandAssetsKit';

export const metadata: Metadata = {
    title: 'Advisory & Technology Partnerships',
    description: 'Collaborate on enterprise AI governance research, joint diagnostic frameworks, and developer tool integrations with Richard Ewing.',
    keywords: [
        'Richard Ewing partnerships',
        'Supabase integration docs',
        'developer tool partnership',
        'R&D capital audit integration',
        'technology platform partner',
        'brand media kit',
        'Product Debt Index API'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/partnerships',
    },
    openGraph: {
        title: 'Partnerships & Technology Integrations | Richard Ewing',
        description: 'Collaborate on enterprise AI governance research, joint diagnostic frameworks, and developer tool integrations with Richard Ewing.',
        url: 'https://www.richardewing.io/partnerships',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/brand/richard-ewing-logo-dark.svg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Partnerships & Technology Integrations | Richard Ewing',
        description: 'Collaborate on enterprise AI governance research, joint diagnostic frameworks, and developer tool integrations with Richard Ewing.',
        images: ['https://www.richardewing.io/brand/richard-ewing-logo-dark.svg'],
    }
};

const partnerTypes = [
    {
        title: 'Technology Platforms & Developer Tools',
        description: 'Integrate your database, vector engine, or compute runtime into our diagnostic ecosystem. Provide automated PDI telemetry and APER benchmarking to shared customers.',
        benefits: [
            'Standardized REST, PostgreSQL, and MCP integration blueprints',
            'Featured placement in integration directory and docs',
            'Joint technical white papers and architectural webinars',
            'Direct access to enterprise engineering audit pipelines'
        ],
        icon: '⚙️',
        color: 'emerald',
    },
    {
        title: 'Management Consulting Firms',
        description: 'Add R&D Capital Audits to your technology practice. White-label our frameworks for your clients. We provide the methodology; you deliver the engagement.',
        benefits: [
            'White-label PDI and APER tools for your clients',
            'Co-branded case studies and thought leadership',
            'Training for your consultants on audit methodology',
            'Revenue share on referred engagements'
        ],
        icon: '🏢',
        color: 'cyan',
    },
    {
        title: 'PE & VC Firms',
        description: 'Embed R&D Capital Audits into your due diligence process. Get a standing advisory relationship for your portfolio.',
        benefits: [
            'Preferred pricing for portfolio-wide audits',
            'Pre-negotiated retainer for deal flow due diligence',
            'Board-ready deliverables tailored to your LP reporting',
            'Quarterly portfolio health monitoring'
        ],
        icon: '💼',
        color: 'violet',
    },
    {
        title: 'Executive Recruiters',
        description: 'Use the Audit Interview to assess CTO, VP Engineering, and technical leadership candidates. Standardized, bias-reduced evaluation.',
        benefits: [
            'Bulk Audit Interview licenses',
            'Custom assessment tracks for executive roles',
            'Data-driven candidate comparison reports',
            'Reduced mis-hire rates for technical leadership'
        ],
        icon: '🎯',
        color: 'amber',
    },
];

const colorMap: Record<string, string> = {
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    violet: 'border-violet-500/30 bg-violet-500/5',
    amber: 'border-amber-500/30 bg-amber-500/5'
};

const textMap: Record<string, string> = {
    cyan: 'text-cyan-900 font-extrabold',
    emerald: 'text-emerald-900 font-extrabold',
    violet: 'text-violet-800 font-extrabold',
    amber: 'text-amber-800 font-extrabold'
};

export default function PartnershipsPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://www.richardewing.io/partnerships#webpage',
                'url': 'https://www.richardewing.io/partnerships',
                'name': 'Partnerships & Technology Integrations | Richard Ewing',
                'description': 'Collaborate on enterprise AI governance research, joint diagnostic frameworks, and developer tool integrations with Richard Ewing.',
                'breadcrumb': {
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.richardewing.io' },
                        { '@type': 'ListItem', 'position': 2, 'name': 'Partnerships', 'item': 'https://www.richardewing.io/partnerships' }
                    ]
                }
            },
            {
                '@type': 'TechArticle',
                '@id': 'https://www.richardewing.io/partnerships#integration-docs',
                'headline': 'Richard Ewing Platform Technology Integration Documentation',
                'description': 'Technical integration specification explaining how developer tools, databases, and AI runtimes connect with the R&D Capital Audit engine.',
                'author': {
                    '@type': 'Person',
                    'name': 'Richard Ewing',
                    'url': 'https://www.richardewing.io/about'
                },
                'publisher': {
                    '@type': 'Organization',
                    'name': 'Richard Ewing Advisory',
                    'url': 'https://www.richardewing.io'
                }
            }
        ]
    };

    return (
        <main className="pt-28 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <div className="text-xs font-bold font-mono text-emerald-600 uppercase tracking-widest mb-4">
                            Ecosystem &amp; Alliances
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 tracking-tight">
                            Grow With{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                                AI Economics
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-800 max-w-3xl mx-auto leading-relaxed mb-8">
                            Embed R&amp;D Capital Audits into your practice, platform, or portfolio. We collaborate with developer platforms, consulting firms, PE funds, and tool creators to establish predictable engineering economics.
                        </p>

                        {/* Fast Anchor Navigation Jump Bar */}
                        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                            <a
                                href="#partner-models"
                                className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono font-bold transition-colors border border-zinc-200"
                            >
                                ↓ Partner Models
                            </a>
                            <a
                                href="#partner-tiers"
                                className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono font-bold transition-colors border border-zinc-200"
                            >
                                ↓ Licensing Tiers
                            </a>
                            <Link
                                href="/partnerships/integration-docs"
                                className="px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-mono font-bold transition-colors border border-emerald-300 shadow-2xs"
                            >
                                ↗ Integration Docs (Dedicated URL)
                            </Link>
                            <Link
                                href="/integrations/supabase"
                                className="px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-mono font-bold transition-colors border border-emerald-300 shadow-2xs"
                            >
                                ↗ Supabase Guide
                            </Link>
                            <Link
                                href="/brand"
                                className="px-3.5 py-1.5 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 text-xs font-mono font-bold transition-colors border border-cyan-300 shadow-2xs"
                            >
                                ↗ Brand &amp; Media Kit (Dedicated URL)
                            </Link>
                            <a
                                href="#contact"
                                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono font-bold transition-colors"
                            >
                                ↓ Contact
                            </a>
                        </div>
                    </div>

                    {/* Section 1: Partner Models */}
                    <section id="partner-models" className="scroll-mt-24 mb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {partnerTypes.map((pt, i) => (
                                <div key={i} className={`rounded-2xl border p-8 ${colorMap[pt.color]}`}>
                                    <span className="text-3xl mb-4 block">{pt.icon}</span>
                                    <h2 className={`text-xl font-grotesk font-bold mb-3 ${textMap[pt.color]}`}>
                                        {pt.title}
                                    </h2>
                                    <p className="text-zinc-800 mb-5 text-sm leading-relaxed font-medium">
                                        {pt.description}
                                    </p>
                                    <ul className="space-y-2.5">
                                        {pt.benefits.map((b, j) => (
                                            <li key={j} className="text-xs sm:text-sm font-semibold text-zinc-900 flex items-start gap-2">
                                                <span className={textMap[pt.color]}>→</span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 2: Partnership Tiers */}
                    <section id="partner-tiers" className="scroll-mt-24 mb-16">
                        <div className="rounded-3xl border border-zinc-300 bg-zinc-50 p-8 sm:p-10 shadow-sm">
                            <div className="text-center max-w-xl mx-auto mb-10">
                                <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950 mb-3">
                                    Advisory &amp; Licensing Tiers
                                </h2>
                                <p className="text-sm text-zinc-700 font-medium">
                                    Structured engagement tracks for consulting firms, advisory networks, and technical service providers.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {/* Referral Partner */}
                                <div className="rounded-2xl border border-zinc-300 bg-white p-6 flex flex-col justify-between shadow-xs">
                                    <div>
                                        <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">Referral Partner</h3>
                                        <p className="text-sm text-zinc-700 mb-4 font-medium">
                                            Refer enterprise clients for R&amp;D capital audits. Earn standard referral fees on closed engagements.
                                        </p>
                                        <div className="text-3xl font-bold font-grotesk text-zinc-950 mb-1">Free</div>
                                        <div className="text-xs font-mono font-bold text-zinc-500 mb-6">
                                            Revenue share on referred deals
                                        </div>
                                    </div>
                                    <a
                                        href="mailto:richardewing@exogram.ai?subject=Referral%20Partner%20Application"
                                        className="block text-center py-3 rounded-xl border border-zinc-300 hover:border-zinc-500 text-zinc-900 font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-zinc-50 transition-all"
                                    >
                                        Apply for Referral Track →
                                    </a>
                                </div>

                                {/* Licensed Partner */}
                                <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/5 p-6 relative flex flex-col justify-between shadow-sm">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-700 text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-full shadow-xs">
                                        Most Popular
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold font-grotesk text-cyan-950 mb-2">Licensed Partner</h3>
                                        <p className="text-sm text-zinc-700 mb-4 font-medium">
                                            White-label frameworks for your consulting practice. Includes training and co-branded case studies.
                                        </p>
                                        <div className="text-3xl font-bold font-grotesk text-zinc-950 mb-1">
                                            $2,500<span className="text-base text-zinc-600">/mo</span>
                                        </div>
                                        <div className="text-xs font-mono font-bold text-zinc-500 mb-6">
                                            Annual license + quarterly training
                                        </div>
                                    </div>
                                    <a
                                        href="/api/buy/partner_licensed"
                                        className="block text-center py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-emerald-700 hover:from-cyan-800 hover:to-emerald-800 text-white font-grotesk font-bold text-xs uppercase tracking-wider shadow-sm hover:opacity-95 transition-all"
                                    >
                                        Start Licensed Partnership →
                                    </a>
                                </div>

                                {/* Strategic Partner */}
                                <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6 flex flex-col justify-between shadow-xs">
                                    <div>
                                        <h3 className="text-lg font-bold font-grotesk text-emerald-950 mb-2">Strategic Partner</h3>
                                        <p className="text-sm text-zinc-700 mb-4 font-medium">
                                            Deep technical integration, co-marketing webinars, joint go-to-market pipelines, and custom SLAs.
                                        </p>
                                        <div className="text-3xl font-bold font-grotesk text-zinc-950 mb-1">Custom</div>
                                        <div className="text-xs font-mono font-bold text-zinc-500 mb-6">
                                            Tailored partnership agreement
                                        </div>
                                    </div>
                                    <a
                                        href="mailto:richardewing@exogram.ai?subject=Strategic%20Partnership%20Inquiry"
                                        className="block text-center py-3 rounded-xl border border-emerald-600/40 hover:border-emerald-600 text-emerald-900 font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-emerald-50 transition-all"
                                    >
                                        Schedule Strategic Discussion →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Technology Integration Documentation */}
                    <TechnologyIntegrationDocs />

                    {/* Section 4: Brand & Media Kit */}
                    <BrandAssetsKit />

                    {/* Section 5: Direct Contact / Onboarding */}
                    <section id="contact" className="scroll-mt-24 rounded-3xl border border-zinc-300 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-zinc-100 p-8 sm:p-12 text-center shadow-sm">
                        <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-3">
                            Direct Coordination
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 mb-4">
                            Initiate a Partnership
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-800 max-w-xl mx-auto mb-8 leading-relaxed font-medium">
                            Whether you are building developer infrastructure, managing private equity portfolios, or scaling an enterprise advisory practice, we are ready to coordinate.
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="mailto:richardewing@exogram.ai?subject=Technology%20Partnership%20Inquiry"
                                className="inline-block px-8 py-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-grotesk font-bold text-sm shadow-md transition-all"
                            >
                                Contact Engineering Team →
                            </a>
                            <Link
                                href="/services"
                                className="inline-block px-8 py-4 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 font-grotesk font-bold text-sm shadow-xs transition-all"
                            >
                                Explore Advisory Services
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
