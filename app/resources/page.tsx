import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Resources Hub | Richard Ewing — Product Economist',
    description: 'Access premium free tools, the massive 2026 enterprise glossary, comprehensive curriculum tracks, deep-dive articles, and strategic frameworks for techn...',
    keywords: ['technology resources', 'CTO tools', 'engineering metrics', 'product management resources', 'Richard Ewing tools', 'free SaaS tools'],
    alternates: { canonical: 'https://www.richardewing.io/resources' },
    openGraph: { title: 'Resources Hub | Richard Ewing', description: 'Access premium free tools, the massive 2026 enterprise glossary, comprehensive curriculum tracks, deep-dive articles, and strategic frameworks for techn...', url: 'https://www.richardewing.io/resources', type: 'website' },
};

const resourceSections = [
    {
        title: 'Free Diagnostic Tools',
        description: 'Quantify engineering ROI, AI unit economics, and team productivity with proprietary calculators.',
        icon: '🔧',
        items: [
            { name: 'Product Debt Index (PDI)', description: 'Calculate your technical debt in dollar terms', href: '/tools/pdi' },
            { name: 'Enterprise Value Scenario Engine (EV-SE)', description: 'Model how metrics changes impact valuation', href: '/tools/ev-se' },
            { name: 'AI Unit Economics Benchmark (AUEB)', description: 'Calculate the true cost of AI features', href: '/tools/aueb' },
            { name: 'Revenue Per Engineer (APER)', description: 'Benchmark your engineering productivity', href: '/tools/aper' },
            { name: 'Audit Interview', description: 'Test verification skills, not code generation', href: '/tools/audit-interview' },
        ],
    },
    {
        title: 'Glossary (400+ Terms)',
        description: 'The most comprehensive technology leadership glossary — from technical debt to AI governance.',
        icon: '📖',
        items: [
            { name: 'Technical Debt & Code Quality', description: '16+ terms on debt measurement & management', href: '/glossary' },
            { name: 'AI & Machine Learning', description: '20+ terms on LLMs, RAG, governance, and agent frameworks', href: '/glossary' },
            { name: 'AI Governance & Verification', description: '14 Exogram-derived terms on AI trust infrastructure', href: '/glossary' },
            { name: 'DevOps & Platform Engineering', description: 'CI/CD, K8s, IaC, SRE, observability, and more', href: '/glossary' },
            { name: 'All 26+ Categories', description: 'Browse the complete glossary', href: '/glossary' },
        ],
    },
    {
        title: 'Learning Curriculum',
        description: 'Structured learning tracks for CTOs, product managers, and investors.',
        icon: '🎓',
        items: [
            { name: 'CTO / Engineering Leader Track', description: 'Architecture, team building, metrics, AI governance', href: '/curriculum' },
            { name: 'Product Manager / CPO Track', description: 'Strategy, analytics, pricing, product-led growth', href: '/curriculum' },
            { name: 'PE / VC / Investor Track', description: 'Due diligence, valuation, metrics, portfolio management', href: '/curriculum' },
        ],
    },
    {
        title: 'AI Training (Anthropic Academy)',
        description: 'Free, self-paced AI courses from Anthropic — curated by Richard Ewing with editorial commentary.',
        icon: '🤖',
        items: [
            { name: 'All 15 Curated Courses', description: 'Full catalog grouped by audience with Richard\'s editorial take', href: '/resources/ai-courses' },
            { name: 'Claude 101', description: 'Learn how to use Claude for everyday work', href: 'https://anthropic.skilljar.com/claude-101' },
            { name: 'Building with Claude API', description: 'Integrate Claude into your applications', href: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api' },
            { name: 'Intro to MCP', description: 'Build MCP servers and clients from scratch', href: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol' },
        ],
    },
    {
        title: 'Articles & Publications',
        description: 'Published insights on product economics, AI, and engineering leadership.',
        icon: '📝',
        items: [
            { name: 'All Articles', description: 'Published in Built In, Mind the Product, CIO.com', href: '/articles' },
            { name: 'Product Economist Doctrine', description: 'The 4-principle framework for engineering capital allocation', href: '/doctrine' },
            { name: 'Manifesto', description: 'Philosophy behind the Product Economist approach', href: '/manifesto' },
            { name: 'Executive Briefings', description: 'Weekly intelligence for technology leaders', href: '/briefings' },
            { name: 'R&D Audit Checklist', description: 'The 15 questions from every $7,500 engagement', href: '/checklist' },
            { name: 'FAQ', description: 'Common questions about advisory, tools, and Exogram', href: '/faq' },
        ],
    },
    {
        title: 'Frameworks & Methodologies',
        description: 'Proprietary frameworks developed from 20+ years of technology leadership.',
        icon: '🏗️',
        items: [
            { name: 'Technical Insolvency Date', description: 'When maintenance consumes 100% of engineering', href: '/glossary/technical-insolvency-date' },
            { name: 'Innovation Tax', description: 'Hidden maintenance masquerading as R&D', href: '/glossary/innovation-tax' },
            { name: 'Cost of Predictivity', description: 'The exponential cost curve of AI accuracy', href: '/glossary/cost-of-predictivity' },
            { name: 'Kill Switch Protocol', description: 'Framework for identifying and removing zombie features', href: '/glossary/kill-switch-protocol' },
            { name: 'AI Liability Gradient', description: 'How liability scales non-linearly with AI autonomy', href: '/glossary/ai-liability-gradient' },
        ],
    },
    {
        title: 'Exogram — AI Verification Platform',
        description: 'The execution control plane for autonomous AI agents. Built by Richard Ewing.',
        icon: '🔮',
        items: [
            { name: 'What is Exogram?', description: 'The verification infrastructure for AI', href: '/exogram' },
            { name: 'Action Admissibility', description: 'Deterministic governance for AI agents', href: '/glossary/action-admissibility' },
            { name: 'Truth Ledger', description: 'Versioned, source-attributed facts for AI', href: '/glossary/truth-ledger' },
            { name: 'Visit Exogram.ai', description: 'The product website', href: 'https://exogram.ai' },
        ],
    },
];

export default function ResourcesPage() {
    return (
        <main className="pt-24 pb-20">
            <div className="page-container">
                <section className="text-center mb-16">
                    <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">Resource Hub</p>
                    <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Everything You Need.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">All Free.</span>
                    </h1>
                    <p className="text-lg text-zinc-800 max-w-2xl mx-auto">
                        Tools, frameworks, and knowledge designed to help technology leaders make better capital allocation decisions.
                    </p>
                </section>

                <div className="space-y-12 max-w-5xl mx-auto">
                    {resourceSections.map((section) => (
                        <section key={section.title} className="card p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="text-3xl">{section.icon}</span>
                                <div>
                                    <h2 className="text-xl font-bold text-zinc-900">{section.title}</h2>
                                    <p className="text-zinc-800 text-sm mt-1">{section.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-zinc-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group"
                                    >
                                        <div>
                                            <div className="font-semibold text-zinc-950 group-hover:text-cyan-400 transition-colors text-sm">{item.name}</div>
                                            <div className="text-xs text-zinc-950 mt-0.5">{item.description}</div>
                                        </div>
                                        <span className="text-gray-600 group-hover:text-cyan-400 transition-colors ml-2">→</span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* CTA */}
                <section className="text-center mt-16">
                    <div className="card p-10 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-4">Need personalized guidance?</h2>
                        <p className="text-zinc-800 mb-6">Our advisory services provide hands-on support tailored to your organization.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/pricing" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cobalt text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-sm">
                                View Pricing →
                            </Link>
                            <Link href="/advisory" className="px-6 py-3 bg-white/5 border border-zinc-400 text-zinc-950 font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                                Book Free Call →
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
