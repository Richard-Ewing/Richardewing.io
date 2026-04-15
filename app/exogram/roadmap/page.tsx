import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Exogram Roadmap — AI Verification Infrastructure Roadmap',
    description: 'The Exogram product roadmap: what we\'ve built, what we\'re building, and where AI verification is headed.',
    alternates: { canonical: 'https://www.richardewing.io/exogram/roadmap' },
};

const phases = [
    {
        status: 'complete' as const, label: 'Shipped', quarter: 'Q4 2025', title: 'Foundation',
        sectionClass: 'rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8',
        badgeClass: 'text-xs font-medium font-mono text-emerald-800 font-semibold px-2 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 uppercase tracking-widest',
        dotClass: 'hidden md:flex absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-emerald-500 bg-emerald-500/20 items-center justify-center',
        items: [
            'Schema Integrity Engine v1.0 — JSON output validation',
            'MCP Server integration for Claude ecosystem',
            'REST API for universal integration',
            'EAAP Protocol RFC published on GitHub',
            'Basic threat detection (prompt injection, PII)',
            'Encrypted memory storage with source attribution',
            'Audit logging infrastructure',
        ],
    },
    {
        status: 'current' as const, label: 'In Progress', quarter: 'Q1 2026', title: 'Enterprise Readiness',
        sectionClass: 'rounded-2xl border border-purple-500/20 bg-purple-500/5 p-8',
        badgeClass: 'text-xs font-medium font-mono text-purple-800 font-semibold px-2 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 uppercase tracking-widest',
        dotClass: 'hidden md:flex absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-purple-500 bg-purple-500/50 items-center justify-center',
        items: [
            'Schema Integrity v2.0 — multi-format support (Protocol Buffers, Avro)',
            'Boundary Control Protocol — agent action admissibility',
            'Advanced threat prevention — adversarial input classification',
            'SOC 2 Type 1 certification preparation',
            'Self-hosted deployment option',
            'Dashboard for verification analytics',
            'Webhook integrations for alerting',
        ],
    },
    {
        status: 'planned' as const, label: 'Planned', quarter: 'Q2 2026', title: 'Multi-Model & Scale',
        sectionClass: 'rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8',
        badgeClass: 'text-xs font-medium font-mono text-cyan-800 font-semibold px-2 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 uppercase tracking-widest',
        dotClass: 'hidden md:flex absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-cyan-500 bg-cyan-500/20 items-center justify-center',
        items: [
            'Multi-model verification — validate outputs across GPT, Claude, Gemini, Llama',
            'Federated verification for multi-agent systems',
            'Streaming output verification (validate tokens as they arrive)',
            'Python SDK (pip install exogram)',
            'TypeScript/JavaScript SDK',
            'Compliance reporting modules (HIPAA, SOX, GDPR)',
            'Verification-as-a-Service API (managed cloud)',
        ],
    },
    {
        status: 'future' as const, label: 'Future', quarter: 'Q3-Q4 2026', title: 'Intelligence Layer',
        sectionClass: 'rounded-2xl border border-zinc-500/20 bg-zinc-500/5 p-8',
        badgeClass: 'text-xs font-medium font-mono text-zinc-900 px-2 py-1 rounded-full border border-zinc-500/30 bg-zinc-500/10 uppercase tracking-widest',
        dotClass: 'hidden md:flex absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-zinc-500 bg-zinc-500/20 items-center justify-center',
        items: [
            'Predictive verification — flag likely hallucinations before generation completes',
            'Cross-session memory consistency across organizations',
            'Industry-specific verification modules (healthcare, finance, legal)',
            'Verification marketplace — community-contributed schemas and rules',
            'On-device verification for edge AI',
            'Formal verification proofs for safety-critical applications',
        ],
    },
];

export default function ExogramRoadmapPage() {
    return (
        <main className="pt-24 pb-20">
            <div className="page-container max-w-4xl mx-auto">
                <div className="text-xs text-zinc-950 mb-8">
                    <Link href="/exogram" className="hover:text-zinc-900 transition-colors">Exogram</Link>
                    <span className="mx-2">→</span>
                    <span className="text-zinc-800">Roadmap</span>
                </div>

                <section className="text-center mb-16">
                    <p className="text-xs font-mono text-purple-800 font-semibold uppercase tracking-widest mb-4">Product Direction</p>
                    <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Roadmap.</span>
                    </h1>
                    <p className="text-lg text-zinc-900 max-w-2xl mx-auto">
                        Where AI verification is going. Built in public, driven by real-world enterprise needs.
                    </p>
                </section>

                <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-purple-500 to-zinc-800 hidden md:block" />

                    <div className="space-y-12">
                        {phases.map(phase => (
                            <section key={phase.quarter} className="relative md:pl-16">
                                <div className={phase.dotClass}>
                                    {phase.status === 'complete' && <span className="text-emerald-800 font-semibold text-xs">✓</span>}
                                    {phase.status === 'current' && <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />}
                                </div>

                                <div className={phase.sectionClass}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={phase.badgeClass}>{phase.label}</span>
                                        <span className="text-xs text-zinc-900 font-bold font-mono">{phase.quarter}</span>
                                    </div>
                                    <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">{phase.title}</h2>
                                    <ul className="space-y-2">
                                        {phase.items.map(item => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-zinc-900 font-medium">
                                                <span className={phase.status === 'complete' ? 'text-emerald-800 font-semibold mt-0.5' : 'text-zinc-950 mt-0.5'}>{phase.status === 'complete' ? '✓' : '→'}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

                <section className="mt-16 text-center">
                    <div className="card p-8 border-purple-500/20">
                        <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">Shape the Roadmap</h3>
                        <p className="text-zinc-900 text-sm mb-6">Exogram&apos;s roadmap is shaped by real enterprise needs. If you&apos;re deploying AI at scale, your requirements drive our priorities.</p>
                        <div className="flex justify-center gap-4">
                            <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-600 text-zinc-950 font-semibold font-bold rounded-lg hover:bg-purple-500 transition-colors text-sm">
                                Visit Exogram.ai →
                            </a>
                            <Link href="/advisory" className="px-6 py-3 bg-white/5 border border-zinc-400 text-zinc-950 font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                                Discuss Integration →
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
