import type { Metadata } from 'next';
import Link from 'next/link';
import PartnerContactForm from '@/app/components/client/PartnerContactForm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Partner with Richard: Newsletter & Speaking | Richard Ewing',
    description: 'Sponsor or collaborate with Richard Ewing on AI advisory, speaking, or newsletter placements. Connect directly with technology leaders.',
    alternates: {
        canonical: 'https://www.richardewing.io/partner',
    },
    openGraph: {
        title: 'Partner with Richard: Newsletter & Speaking | Richard Ewing',
        description: 'Sponsor or collaborate with Richard Ewing on AI advisory, speaking, or newsletter placements. Connect directly with technology leaders.',
        url: 'https://www.richardewing.io/partner',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Partner with Richard: Newsletter & Speaking | Richard Ewing',
        description: 'Sponsor or collaborate with Richard Ewing on AI advisory, speaking, or newsletter placements. Connect directly with technology leaders.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

const audienceSegments = [
    "Product Managers & Product Leaders",
    "Software Engineers & AI Practitioners",
    "Founders & Enterprise Executives",
    "Technology & Product Leadership (CTOs, VPs & Directors)"
];

export default function PartnerPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://www.richardewing.io/partner#webpage',
                'url': 'https://www.richardewing.io/partner',
                'name': 'Partner with Richard Ewing: Newsletter, Sponsored Creator Posts & Speaking',
                'description': 'Sponsor or collaborate with Richard Ewing on AI advisory, speaking, or newsletter placements. Verified reach of 11,141+ LinkedIn followers and 1,366 newsletter subscribers.',
                'breadcrumb': {
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.richardewing.io' },
                        { '@type': 'ListItem', 'position': 2, 'name': 'Partnerships & Speaking', 'item': 'https://www.richardewing.io/partner' }
                    ]
                }
            },
            {
                '@type': 'Person',
                '@id': 'https://www.richardewing.io/#person',
                'name': 'Richard Ewing',
                'jobTitle': 'AI Economist & Founder',
                'worksFor': { '@type': 'Organization', 'name': 'Exogram', 'url': 'https://exogram.ai' },
                'url': 'https://www.richardewing.io',
                'sameAs': [
                    'https://www.linkedin.com/in/richard-ewing-mba',
                    'https://www.passionfroot.me/richard-ewing'
                ],
                'knowsAbout': [
                    'AI Economics',
                    'R&D Capital Allocation',
                    'Technical Debt Quantification',
                    'Product Debt Index',
                    'AI Agent Governance',
                    'Developer Advocacy',
                    'Enterprise Software Architecture'
                ]
            },
            {
                '@type': 'OfferCatalog',
                '@id': 'https://www.richardewing.io/partner#catalog',
                'name': 'Richard Ewing Creator & Advisory Partnerships',
                'itemListElement': [
                    {
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Service',
                            'name': 'Sponsored LinkedIn Creator Posts',
                            'description': 'Native sponsored posts and carousel deep-dives reaching 11,141+ technology leaders across Amazon, Microsoft, Meta, Google, and AWS.'
                        }
                    },
                    {
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Service',
                            'name': 'The AI Economist Newsletter Sponsorship',
                            'description': 'Dedicated column placement in The AI Economist newsletter column with 1,366 verified executive and technical subscribers.'
                        }
                    },
                    {
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Service',
                            'name': 'Keynote Speaking & Panel Moderation',
                            'description': 'Executive keynote talks and moderation on engineering economics, R&D capital allocation, and technical insolvency.'
                        }
                    },
                    {
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Service',
                            'name': 'Product & Developer Tool Technical Reviews',
                            'description': 'System-level technical audits and written evaluations of developer platforms, AI tools, and runtime infrastructure.'
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="page-container max-w-4xl mx-auto">
                
                {/* Breadcrumb */}
                <div className="mb-10 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Executive</span><span>/</span><span className="text-cyan-900 font-extrabold">Partnerships & Speaking</span>
                </div>

                {/* Section 1: Introduction and Lived Experience */}
                <section className="mb-16 border-b border-zinc-400 pb-16">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Systemic reach for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">engineering economics.</span>
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-3xl">
                        While auditing R&D spend for private equity portfolios, I noticed that the hardest part of building technical partnerships is cutting through marketing noise. Real collaboration requires aligning on verified system architectures and predictable economic incentives.
                    </p>
                </section>

                {/* Section 2: Audience & Metrics */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Audience Profile & Reach</h2>
                    <p className="text-sm text-zinc-900 leading-relaxed font-semibold mb-6">
                        Rather than chasing traditional influence or surface-level views, this platform focuses on high-intent engagement from product managers, engineers, founders, and technology/product leadership who actively govern technology systems and allocate engineering capital.
                    </p>

                    <div className="bg-white border border-zinc-300 rounded-3xl p-8 mb-8 shadow-sm">
                        <h3 className="text-base font-bold text-zinc-950 mb-4 font-mono uppercase tracking-wide">Primary Audience Composition</h3>
                        <ul className="space-y-3">
                            {audienceSegments.map((segment, index) => (
                                <li key={index} className="flex items-center gap-3 text-sm font-semibold text-zinc-900">
                                    <span className="text-emerald-600 font-bold">✓</span>
                                    {segment}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">LinkedIn Reach</div>
                                <div className="text-2xl font-bold text-zinc-950 mb-2">11,141 Followers</div>
                            </div>
                            <p className="text-[10px] text-zinc-500 font-semibold mt-4 leading-normal">
                                Source: LinkedIn Analytics, August 2026. Verified network of engineering directors, staff architects, and tech executives (+49% YoY).
                            </p>
                        </div>

                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">Newsletter Column</div>
                                <div className="text-2xl font-bold text-zinc-950 mb-2">1,366 Subscribers</div>
                            </div>
                            <p className="text-[10px] text-zinc-500 font-semibold mt-4 leading-normal">
                                Source: LinkedIn Newsletter Dashboard, August 2026. Professional readers subscribed to The AI Economist column.
                            </p>
                        </div>

                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">AI SEARCH AUTHORITY</div>
                                <div className="text-2xl font-bold text-zinc-950 mb-2">778 Citations</div>
                            </div>
                            <p className="text-[10px] text-zinc-500 font-semibold mt-4 leading-normal">
                                Source: Bing Webmaster AI Performance, 3-month rolling. Content cited as primary source in AI-generated answers across enterprise technology topics.
                            </p>
                        </div>
                    </div>

                    {/* ========================================================================= */}
                    {/* CHANNEL 1: LINKEDIN CREATOR ACCOUNT & SPONSORED POSTS (11,141 FOLLOWERS)   */}
                    {/* ========================================================================= */}
                    <div className="bg-white border border-zinc-300 rounded-3xl p-8 mb-8 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-200">
                            <div>
                                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-1">
                                    Channel 1 — LinkedIn Creator Network
                                </div>
                                <h3 className="text-xl font-bold font-grotesk text-zinc-950">
                                    Sponsored Posts & Creator Reach (11,141 Followers)
                                </h3>
                            </div>
                            <span className="text-[11px] font-mono font-semibold px-3 py-1 bg-blue-50 text-blue-800 rounded-full border border-blue-200 self-start md:self-auto">
                                Personal LinkedIn Analytics (Past 365 Days)
                            </span>
                        </div>

                        {/* Performance Banner Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                                <div className="text-xs font-mono text-zinc-500 font-semibold mb-1">Total Followers</div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">11,141</div>
                                <div className="text-[10px] text-emerald-600 font-mono font-bold mt-1">+49% vs prior year</div>
                            </div>
                            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                                <div className="text-xs font-mono text-zinc-500 font-semibold mb-1">Content Impressions</div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">47,800</div>
                                <div className="text-[10px] text-zinc-500 font-mono font-bold mt-1">Past 365 Days</div>
                            </div>
                            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                                <div className="text-xs font-mono text-zinc-500 font-semibold mb-1">Members Reached</div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">20,931</div>
                                <div className="text-[10px] text-zinc-500 font-mono font-bold mt-1">Unique Professionals</div>
                            </div>
                            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                                <div className="text-xs font-mono text-zinc-500 font-semibold mb-1">Social Engagements</div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">752</div>
                                <div className="text-[10px] text-zinc-500 font-mono font-bold mt-1">Reactions, Comments, Shares</div>
                            </div>
                        </div>

                        {/* Top Highlights Banner */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-2xl">
                                <div className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider mb-1">Senior Decision-Makers</div>
                                <div className="text-2xl font-bold font-grotesk text-blue-950">67%</div>
                                <p className="text-[11px] text-blue-800 font-medium mt-1">Senior (42%), Director (11%), Manager (7%), CXO (5%), VP (5%), Owner (4%), Partner (2%)</p>
                            </div>
                            <div className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-2xl">
                                <div className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider mb-1">Enterprise & Mid-Market</div>
                                <div className="text-2xl font-bold font-grotesk text-emerald-950">36%+</div>
                                <p className="text-[11px] text-emerald-800 font-medium mt-1">10,001+ employees (25%), 1,001–5,000 employees (11%)</p>
                            </div>
                            <div className="bg-purple-50/70 border border-purple-100 p-4 rounded-2xl">
                                <div className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider mb-1">Primary Tech Sectors</div>
                                <div className="text-2xl font-bold font-grotesk text-purple-950">42%</div>
                                <p className="text-[11px] text-purple-800 font-medium mt-1">IT Services (15%), Tech & Internet (14%), Software Dev (13%)</p>
                            </div>
                        </div>

                        {/* Creator Demographics 2-Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            
                            {/* Column 1: Seniority & Company Size */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-3">
                                        Follower Seniority Breakdown
                                    </h4>
                                    <div className="space-y-2.5">
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Senior Practitioners & Architects</span>
                                                <span className="font-mono text-blue-700 font-bold">42%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '42%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Directors</span>
                                                <span className="font-mono text-blue-700 font-bold">11%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '11%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Managers</span>
                                                <span className="font-mono text-blue-700 font-bold">7%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '7%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>CXO Executives</span>
                                                <span className="font-mono text-blue-700 font-bold">5%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '5%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Vice Presidents (VPs)</span>
                                                <span className="font-mono text-blue-700 font-bold">5%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '5%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Owners & Founders</span>
                                                <span className="font-mono text-blue-700 font-bold">4%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '4%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Equity Partners</span>
                                                <span className="font-mono text-blue-700 font-bold">2%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '2%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-3">
                                        Company Size
                                    </h4>
                                    <div className="space-y-2.5">
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>10,001+ Employees (Enterprise)</span>
                                                <span className="font-mono text-emerald-700 font-bold">25%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '25%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>1,001–5,000 Employees</span>
                                                <span className="font-mono text-emerald-700 font-bold">11%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '11%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>51–200 Employees</span>
                                                <span className="font-mono text-emerald-700 font-bold">9%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '9%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>11–50 Employees</span>
                                                <span className="font-mono text-emerald-700 font-bold">9%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '9%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Metro Locations & Industries */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-3">
                                        Top Metro Locations
                                    </h4>
                                    <div className="space-y-2.5">
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Greater Seattle Area</span>
                                                <span className="font-mono text-amber-700 font-bold">25%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-amber-600 rounded-full" style={{ width: '25%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>San Francisco Bay Area</span>
                                                <span className="font-mono text-amber-700 font-bold">8%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-amber-600 rounded-full" style={{ width: '8%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>New York City Metro</span>
                                                <span className="font-mono text-amber-700 font-bold">5%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-amber-600 rounded-full" style={{ width: '5%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Los Angeles Metro</span>
                                                <span className="font-mono text-amber-700 font-bold">3%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-amber-600 rounded-full" style={{ width: '3%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Dallas-Fort Worth / Austin / DC Metro</span>
                                                <span className="font-mono text-amber-700 font-bold">6%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-amber-600 rounded-full" style={{ width: '6%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-3">
                                        Primary Industries
                                    </h4>
                                    <div className="space-y-2.5">
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>IT Services & Consulting</span>
                                                <span className="font-mono text-purple-700 font-bold">15%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-purple-600 rounded-full" style={{ width: '15%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Technology, Info & Internet</span>
                                                <span className="font-mono text-purple-700 font-bold">14%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-purple-600 rounded-full" style={{ width: '14%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Software Development</span>
                                                <span className="font-mono text-purple-700 font-bold">13%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-purple-600 rounded-full" style={{ width: '13%' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                                <span>Staffing & Recruiting</span>
                                                <span className="font-mono text-purple-700 font-bold">11%</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-purple-600 rounded-full" style={{ width: '11%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Enterprise Companies Represented */}
                        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                            <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-3">
                                Top Represented Enterprise Companies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Amazon <span className="text-blue-600 font-mono font-extrabold ml-1">2%</span>
                                </span>
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Microsoft <span className="text-blue-600 font-mono font-extrabold ml-1">2%</span>
                                </span>
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Google <span className="text-blue-600 font-mono font-extrabold ml-1">1%</span>
                                </span>
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Amazon Web Services (AWS) <span className="text-blue-600 font-mono font-extrabold ml-1">1%</span>
                                </span>
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Meta <span className="text-blue-600 font-mono font-extrabold ml-1">1%</span>
                                </span>
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Robert Half <span className="text-blue-600 font-mono font-extrabold ml-1">1%</span>
                                </span>
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Salesforce <span className="text-blue-600 font-mono font-extrabold ml-1">&lt;1%</span>
                                </span>
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Boeing <span className="text-blue-600 font-mono font-extrabold ml-1">&lt;1%</span>
                                </span>
                                <span className="px-3.5 py-1.5 bg-white border border-zinc-300 rounded-xl text-xs font-bold text-zinc-900 shadow-2xs">
                                    Upwork <span className="text-blue-600 font-mono font-extrabold ml-1">&lt;1%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ========================================================================= */}
                    {/* CHANNEL 2: THE AI ECONOMIST NEWSLETTER COLUMN (1,366 SUBSCRIBERS)         */}
                    {/* ========================================================================= */}
                    <div className="bg-white border border-zinc-300 rounded-3xl p-8 mb-8 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-200">
                            <div>
                                <div className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest mb-1">
                                    Channel 2 — LinkedIn Newsletter Column
                                </div>
                                <h3 className="text-xl font-bold font-grotesk text-zinc-950">
                                    The AI Economist Newsletter (1,366 Subscribers)
                                </h3>
                            </div>
                            <span className="text-[11px] font-mono font-semibold px-3 py-1 bg-indigo-50 text-indigo-800 rounded-full border border-indigo-200 self-start md:self-auto">
                                LinkedIn Newsletter Dashboard (Past 365 Days)
                            </span>
                        </div>

                        {/* Top Demographics Progress Bars */}
                        <div className="mb-8">
                            <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider mb-4">
                                Newsletter Subscriber Demographics
                            </h4>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                        <span>Product Managers & Product Leaders</span>
                                        <span className="font-mono text-indigo-700 font-bold">7%</span>
                                    </div>
                                    <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: '7%' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                        <span>Recruiters & Talent Acquisition Specialists</span>
                                        <span className="font-mono text-indigo-700 font-bold">6%</span>
                                    </div>
                                    <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: '6%' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                        <span>Founders & Co-Founders</span>
                                        <span className="font-mono text-indigo-700 font-bold">4%</span>
                                    </div>
                                    <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: '4%' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                        <span>Technical Recruiters</span>
                                        <span className="font-mono text-indigo-700 font-bold">3%</span>
                                    </div>
                                    <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: '3%' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
                                        <span>Directors of Product Management</span>
                                        <span className="font-mono text-indigo-700 font-bold">2%</span>
                                    </div>
                                    <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: '2%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Annual Metrics 4-grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-200">
                            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                                <div className="text-xs font-mono text-zinc-500 font-semibold mb-1">Article Views</div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">7,962</div>
                                <div className="text-[10px] text-emerald-600 font-mono font-bold mt-1">Past 365 Days</div>
                            </div>
                            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                                <div className="text-xs font-mono text-zinc-500 font-semibold mb-1">Impressions</div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">11,733</div>
                                <div className="text-[10px] text-emerald-600 font-mono font-bold mt-1">Past 365 Days</div>
                            </div>
                            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                                <div className="text-xs font-mono text-zinc-500 font-semibold mb-1">Engagements</div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">151</div>
                                <div className="text-[10px] text-emerald-600 font-mono font-bold mt-1">Past 365 Days</div>
                            </div>
                            <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                                <div className="text-xs font-mono text-zinc-500 font-semibold mb-1">New Subscribers</div>
                                <div className="text-xl font-bold font-grotesk text-zinc-950">+619</div>
                                <div className="text-[10px] text-emerald-600 font-mono font-bold mt-1">Past 365 Days</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Sponsorship Opportunities */}
                <section className="mb-16 border-t border-zinc-300 pt-12">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-8">Engagement Formats</h2>
                    
                    <div className="space-y-6">
                        
                        {/* Format 1 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm border-l-4 border-l-blue-600">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Sponsored LinkedIn Creator Posts</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Co-author or sponsor native LinkedIn posts and carousel deep-dives reaching a verified network of 11,141+ technology leaders, software engineers, and enterprise executives across Amazon, Microsoft, Meta, and AWS.
                            </p>
                            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded text-xs font-mono font-semibold text-blue-700">
                                Format: Native Posts & Carousel Collaborations (11,141+ Followers)
                            </span>
                        </div>

                        {/* Format 2 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm border-l-4 border-l-indigo-600">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Newsletter Placements</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Place your product or tool directly in front of active decision makers in *The AI Economist*. Every sponsorship includes a dedicated slot analyzing a specific system challenge and how your platform addresses that constraint.
                            </p>
                            <span className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-200 rounded text-xs font-mono font-semibold text-indigo-700">
                                Format: Dedicated Column Placement (1,366 Subscribers)
                            </span>
                        </div>

                        {/* Format 2 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Webinars</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Collaborate on technical, systems-oriented webinars. We map out real architectural patterns, analyze operational failures, and walk through engineering economics calculations for technical audiences.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Joint Virtual Broadcast
                            </span>
                        </div>

                        {/* Format 3 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Speaking</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Book keynote talks or panel moderation focused on the economics of engineering. Topics include R&D capital allocation, the risk of technical insolvency, and architectural control layers for production AI systems.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Keynotes & Panel Moderation
                            </span>
                        </div>

                        {/* Format 4 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Product Reviews</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Receive a rigorous, system-level review of your developer tool or AI infrastructure platform. The evaluation focuses on real utility, API latency behavior, and unit economics constraints.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Technical Audits & Written Analysis
                            </span>
                        </div>

                        {/* Format 5 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Advisory Engagements</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Establish structured engagements for private equity due diligence or fractional advisory. We audit engineering pipelines, detect capital bleed, and formulate governance policies for executive teams.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Retainers & Strategic Diagnostics
                            </span>
                        </div>

                    </div>

                    {/* Passionfroot Booking */}
                    <div className="mt-8 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                        <div className="md:flex items-center justify-between gap-8">
                            <div className="mb-6 md:mb-0">
                                <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest mb-2">
                                    Instant Booking
                                </div>
                                <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-2">
                                    Book directly through Passionfroot
                                </h3>
                                <p className="text-zinc-700 text-sm max-w-lg leading-relaxed font-semibold">
                                    Browse available sponsorship slots, speaking formats, and collaboration options. Select a package, pay securely, and coordinate logistics in one place.
                                </p>
                            </div>
                            <a
                                href="https://www.passionfroot.me/richard-ewing"
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-bold rounded-xl transition-all whitespace-nowrap text-sm shadow-sm"
                            >
                                View Passionfroot Storefront
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Section 4: Contact Form */}
                <section className="mb-16 border-t border-zinc-300 pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-4">Initiate a Partnership</h2>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-6">
                                If your organization builds tools that reduce technical debt or optimize engineering efficiency, we should coordinate.
                            </p>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-6">
                                To ensure alignment, every sponsorship slot or speaking engagement is selected based on real architectural utility. We do not participate in generic marketing promotion.
                            </p>
                            <div className="bg-zinc-100 border border-zinc-300 rounded-2xl p-6">
                                <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">Direct Coordination</h4>
                                <p className="text-xs text-zinc-700 leading-relaxed font-semibold mb-3">
                                    Inquiries can also be sent directly to <a href="mailto:richardewing@exogram.ai" className="text-indigo-600 hover:underline">richardewing@exogram.ai</a> with the subject line "Partnership Inquiry".
                                </p>
                                <p className="text-xs text-zinc-700 leading-relaxed font-semibold">
                                    Or browse and book available slots on <a href="https://www.passionfroot.me/richard-ewing" target="_blank" rel="noopener" className="text-indigo-600 hover:underline">Passionfroot</a>.
                                </p>
                            </div>
                        </div>
                        <div>
                            <PartnerContactForm />
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
