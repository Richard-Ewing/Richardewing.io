import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Guides — Definitive Playbooks for Engineering Leaders | Richard Ewing',
    description: 'Free and premium guides for CTOs, VPs of Engineering, and Product Economists. From R&D audits to AI cost optimization — the playbooks used in $7,500 engagements.',
    keywords: ['engineering leadership guides', 'CTO playbook', 'R&D audit guide', 'technical debt guide', 'AI economics guide'],
    alternates: { canonical: 'https://www.richardewing.io/guides' },
};

const guides = [
    {
        slug: 'technical-debt',
        title: 'The Complete Guide to Technical Debt',
        subtitle: 'From Definition to Dollars — The Definitive Resource',
        description: 'The step-by-step methodology behind $7,500 diagnostic engagements. Learn how to classify debt, quantify it in financial terms, present findings that get CEO-level budget approval, and systematically remediate.',
        badge: 'Most Popular',
        badgeColor: 'cyan',
        topics: ['PDI Framework', 'Innovation Tax', 'Board Reporting', 'Remediation Roadmaps', 'Technical Insolvency Detection'],
        readTime: '45 min',
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'APER Calculator', href: '/tools/aper' }],
        free: true,
        terms: '50+ terms',
    },
    {
        slug: 'ai-economics',
        title: 'The AI Economics Handbook',
        subtitle: 'Building Profitable AI Features at Scale',
        description: 'How to build AI features that make money, not just demos. Covers model routing, cost optimization, per-feature P&L, the Cost of Predictivity, and when to build vs. buy vs. API.',
        badge: 'New',
        badgeColor: 'violet',
        topics: ['AI COGS Analysis', 'Model Routing', 'Token Economics', 'Fine-Tuning ROI', 'Hallucination Costs', 'AI Feature P&L'],
        readTime: '50 min',
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }],
        free: true,
        terms: '40+ terms',
    },
    {
        slug: 'engineering-efficiency',
        title: 'Engineering Efficiency Blueprint',
        subtitle: 'Measuring, Benchmarking, and Optimizing',
        description: 'How elite engineering organizations measure efficiency. Covers APER, DORA, Feature Velocity, Build vs. Buy economics, and the team topology decisions that 10x output.',
        badge: 'For CTOs',
        badgeColor: 'emerald',
        topics: ['APER Benchmarking', 'DORA Metrics', 'Team Topology', 'Build vs Buy', 'Engineering ROI', 'Budget Optimization'],
        readTime: '35 min',
        tools: [{ name: 'APER Calculator', href: '/tools/aper' }, { name: 'EV-SE Calculator', href: '/tools/ev-se' }],
        free: true,
        terms: '30+ terms',
    },
    {
        slug: 'pe-due-diligence',
        title: 'PE Technology Due Diligence Guide',
        subtitle: 'What Private Equity Firms Look For',
        description: 'The insider guide to what PE due diligence teams evaluate in technology organizations. Learn what they find, what devalues companies, and how to prepare before they arrive.',
        badge: 'Premium',
        badgeColor: 'amber',
        topics: ['Pre-Diligence Preparation', 'Red Flags', 'Valuation Impact', 'Team Assessment', 'Architecture Review', 'Integration Planning'],
        readTime: '55 min',
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'Audit Interview', href: '/tools/audit-interview' }],
        free: false,
        terms: '60+ terms',
    },
    {
        slug: 'saas-metrics',
        title: 'SaaS Metrics Masterclass',
        subtitle: 'From ARR to Engineering ROI',
        description: 'Connect engineering investment to business outcomes. Bridge the gap between engineering metrics and SaaS financial metrics — making your engineering investment legible to the board.',
        badge: 'Premium',
        badgeColor: 'amber',
        topics: ['Rule of 40', 'Net Revenue Retention', 'CAC Payback', 'Engineering ROI', 'Unit Economics', 'Board Reporting'],
        readTime: '40 min',
        tools: [{ name: 'APER Calculator', href: '/tools/aper' }, { name: 'EV-SE Calculator', href: '/tools/ev-se' }],
        free: false,
        terms: '35+ terms',
    },
];

const badgeStyles: Record<string, string> = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export default function GuidesPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Free &amp; Premium Playbooks</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                            Engineering Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Guides</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            The definitive playbooks for CTOs, VPs of Engineering, and Product Economists. 
                            The same frameworks used in <Link href="/advisory" className="text-cyan-400 hover:underline">$7,500 diagnostic engagements</Link>.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">{guides.length}</div>
                            <div className="text-xs text-zinc-500">Guides</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">{guides.filter(g => g.free).length}</div>
                            <div className="text-xs text-zinc-500">Free Guides</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">225+</div>
                            <div className="text-xs text-zinc-500">Min. of Content</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">5</div>
                            <div className="text-xs text-zinc-500">Free Tools</div>
                        </div>
                    </div>

                    {/* Guide Cards */}
                    <div className="space-y-6 mb-16">
                        {guides.map((guide) => (
                            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block group">
                                <div className="card p-6 sm:p-8 hover:border-cyan-500/30 transition-all">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeStyles[guide.badgeColor]}`}>
                                                    {guide.badge}
                                                </span>
                                                {!guide.free && (
                                                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">🔒 Premium</span>
                                                )}
                                                <span className="text-[10px] text-zinc-600">{guide.readTime} read</span>
                                                <span className="text-[10px] text-zinc-600">{guide.terms} linked</span>
                                            </div>
                                            <h2 className="text-xl font-grotesk font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                {guide.title}
                                            </h2>
                                            <p className="text-sm text-zinc-500 font-mono mb-3">{guide.subtitle}</p>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{guide.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {guide.topics.map((topic) => (
                                                    <span key={topic} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-zinc-500">
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {guide.tools.map((tool) => (
                                                    <span key={tool.name} className="text-[10px] text-cyan-400">
                                                        🛠️ Uses {tool.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                                                <span className="text-zinc-500 group-hover:text-cyan-400 transition-colors">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Cross-Links */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-12">
                        <Link href="/glossary" className="card p-5 text-center hover:border-cyan-500/20 transition-all group">
                            <div className="text-2xl mb-2">📚</div>
                            <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">Glossary</div>
                            <div className="text-[10px] text-zinc-500">420+ terms with rich content</div>
                        </Link>
                        <Link href="/curriculum/tracks" className="card p-5 text-center hover:border-violet-500/20 transition-all group">
                            <div className="text-2xl mb-2">🎓</div>
                            <div className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">Curriculum</div>
                            <div className="text-[10px] text-zinc-500">24 modules, 80+ lessons</div>
                        </Link>
                        <Link href="/comparisons" className="card p-5 text-center hover:border-emerald-500/20 transition-all group">
                            <div className="text-2xl mb-2">⚔️</div>
                            <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Comparisons</div>
                            <div className="text-[10px] text-zinc-500">Head-to-head framework analysis</div>
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="card p-8 text-center border-violet-500/20 mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Want Personalized Guidance?</h2>
                        <p className="text-zinc-400 mb-6 max-w-lg mx-auto">These guides cover the frameworks. A live engagement applies them to your specific organization.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://buy.stripe.com/eVqbIU1My8Dw01f7W02B204" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-opacity">
                                Book Strategy Session →
                            </a>
                            <Link href="/curriculum/tracks" className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all">
                                Full Curriculum →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
