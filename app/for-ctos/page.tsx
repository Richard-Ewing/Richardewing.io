import type { Metadata } from 'next';
import Link from 'next/link';
import TechnicalInsolvencySimulator from '@/app/components/TechnicalInsolvencySimulator';

export const metadata: Metadata = {
    title: 'AI Economics Toolkit for CTOs',
    description: 'Actionable frameworks for engineering executives to defend gross margins, audit R&D yield, and eliminate tech debt.',
    keywords: ['CTO tools', 'engineering benchmarks', 'technical debt calculator CTO', 'CTO advisory', 'engineering productivity metrics', 'R&D capital efficiency CTO'],
    alternates: { canonical: 'https://www.richardewing.io/for-ctos' },
    openGraph: { title: 'For CTOs  -  Engineering Economics Toolkit', description: 'Free tools and benchmarks for engineering leaders.', url: 'https://www.richardewing.io/for-ctos', type: 'website' },
};

const tools = [
    { name: 'Autonomous Agent Readiness (AARI)', description: 'Audit repository architecture and type strictness before enabling Claude Code or Antigravity.', href: '/tools/aari', icon: '🤖', color: 'cyan' },
    { name: 'Subprime Code Risk Auditor', description: 'Quantify the financial refactor liability and maintenance drag of un-governed vibe coding.', href: '/tools/subprime-code-auditor', icon: '⚖️', color: 'rose' },
    { name: 'AI Code Review Bottleneck', description: 'Calculate senior engineer payroll waste and cycle time inflation from synthetic PR floods.', href: '/tools/code-review-bottleneck-calc', icon: '⚡', color: 'teal' },
    { name: 'MCP Security Auditor', description: 'Audit Model Context Protocol connections against OWASP MCP Top 10 and STDIO RCE risks.', href: '/tools/mcp-security-auditor', icon: '🛡️', color: 'rose' },
    { name: 'SLM Break-Even Calculator', description: 'Model the exact monthly query volume where self-hosting quantized SLMs beats frontier model APIs.', href: '/tools/slm-break-even', icon: '💻', color: 'violet' },
    { name: 'Product Debt Index (PDI)', description: 'Calculate your Technical Insolvency Date. Know when maintenance load will exceed capacity.', href: '/tools/pdi', icon: '🔬', color: 'rose' },
    { name: 'APER Calculator', description: 'Measure Annualized Productive Engineering Revenue. Benchmark against industry.', href: '/tools/aper', icon: '📈', color: 'cyan' },
    { name: 'AUEB Calculator', description: 'Model AI Unit Economics. Find the margin collapse point before you ship.', href: '/tools/aueb', icon: '🤖', color: 'violet' },
    { name: 'Audit Interview', description: 'AI-powered engineering assessment. Score candidates across 5 grading levels.', href: '/tools/audit-interview', icon: '🎯', color: 'amber' },
];

const colorMap: Record<string, string> = {
    rose: 'border-rose-500/20 bg-rose-500/5 hover:border-rose-500/40',
    cyan: 'border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40',
    violet: 'border-violet-500/20 bg-violet-500/5 hover:border-violet-500/40',
    emerald: 'border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40',
    amber: 'border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40',
    teal: 'border-teal-500/20 bg-teal-500/5 hover:border-teal-500/40',
};

const frameworks = [
    { name: 'Technical Insolvency Date', description: 'When maintenance load exceeds total engineering capacity', href: '/glossary/technical-insolvency-date' },
    { name: 'Innovation Tax', description: 'Percentage of R&D spent on maintenance vs. innovation', href: '/glossary/innovation-tax' },
    { name: 'Cost of Predictivity', description: 'The true variable cost of AI features per prediction', href: '/glossary/cost-of-predictivity' },
    { name: 'EAAP Protocol', description: 'Action Admissibility Protocol for governing AI agents', href: '/glossary/eaap-protocol' },
    { name: 'Orchestration Debt', description: 'The hidden debt of multi-agent AI systems', href: '/glossary/orchestration-debt' },
    { name: 'AI COGS', description: 'Cost of Goods Sold for AI features  -  the margin killer', href: '/glossary/ai-cogs' },
];

export default function ForCTOsPage() {
    const schema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: 'For CTOs  -  Engineering Economics Toolkit',
        description: 'Free tools and benchmarks for engineering leaders.',
        url: 'https://www.richardewing.io/for-ctos',
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-bold font-mono text-rose-500 uppercase tracking-widest mb-4">For CTOs & VPs of Engineering</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            Stop Guessing.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-400">Start Measuring.</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto mb-8">
                            6 free tools + 400+ glossary definitions + proprietary frameworks. Everything a CTO needs to quantify engineering economics and communicate with boards in financial language.
                        </p>

                        {/* Interactive Insolvency Simulator */}
                        <TechnicalInsolvencySimulator />
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/tools" className="px-8 py-4 rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Explore All Tools →</Link>
                            <Link href="/glossary" className="px-8 py-4 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5 transition-colors">Browse 400+ Definitions →</Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8">Free Engineering Tools</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                        {tools.map((tool, i) => (
                            <Link key={i} href={tool.href} className={`rounded-2xl border p-6 transition-colors ${colorMap[tool.color]}`}>
                                <span className="text-2xl mb-3 block">{tool.icon}</span>
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">{tool.name}</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">{tool.description}</p>
                            </Link>
                        ))}
                    </div>

                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8">Proprietary Frameworks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                        {frameworks.map((fw, i) => (
                            <Link key={i} href={fw.href} className="flex items-center gap-4 rounded-xl border border-zinc-400 p-5 hover:border-rose-500/30 transition-colors group">
                                <div>
                                    <div className="text-zinc-950 font-bold group-hover:text-rose-400 transition-colors">{fw.name}</div>
                                    <div className="text-sm font-semibold text-zinc-900 font-medium">{fw.description}</div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Need a Full R&D Audit?</h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto">Free tools give you directional insight. An R&D Capital Audit gives you the full picture: dollar-denominated debt, insolvency timeline, and a prioritized remediation roadmap.</p>
                        <Link href="/services" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 text-zinc-950 font-semibold text-lg font-bold hover:opacity-90 transition-opacity">Book R&D Capital Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
