import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, DollarSign, ArrowRight, Lock, Check, X } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Guardrails Platforms Comparison 2026 | Lakera vs Galileo vs Invariant | Richard Ewing',
    description: 'Compare AI guardrails and governance platforms: Lakera Guard (Check Point), Invariant Labs (Snyk), Galileo AI, Zenity, Endor Labs, and GuardionAI. Enterprise pricing, real reviews, and why practitioner-facing governance is missing.',
    keywords: ['AI guardrails comparison', 'Lakera Guard review', 'Galileo AI pricing', 'Invariant Labs review', 'AI governance platform', 'best AI guardrails 2026', 'Lakera vs Galileo', 'AI agent security platform', 'AI guardrails pricing', 'NeMo Guardrails alternative', 'Zenity AI review', 'Endor Labs AI review', 'AI coding governance', 'runtime governance vs guardrails'],
    openGraph: {
        title: 'AI Guardrails Platform Comparison 2026 — Enterprise vs Practitioner Governance',
        description: 'Why enterprise guardrails miss the practitioner layer and how $99 governance modules fill the gap.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/ai-guardrails-platforms' },
};

const platforms = [
    {
        name: 'Lakera Guard',
        status: 'Acquired by Check Point (Nov 2025)',
        focus: 'Prompt injection & jailbreak detection',
        pricing: 'Enterprise quote via Check Point',
        strengths: ['Sub-200ms latency', 'Strong prompt attack detection', 'Threat intelligence database'],
        weaknesses: ['Prompt-level only — no agent action governance', 'Now sales-gated through Check Point procurement', 'No file scope, retry, or cost controls', 'Limited customization reported by users'],
    },
    {
        name: 'Invariant Labs',
        status: 'Acquired by Snyk (June 2025)',
        focus: 'MCP security & tool poisoning detection',
        pricing: 'Integrated into Snyk enterprise subscription',
        strengths: ['MCP-specific threat scanning', 'Trajectory monitoring for agents', 'Deep agentic security research'],
        weaknesses: ['Absorbed into Snyk platform — no standalone product', 'Enterprise-only pricing', 'Security scanning, not runtime enforcement', 'No practitioner tooling for individual developers'],
    },
    {
        name: 'Galileo AI',
        status: 'Independent (Series B)',
        focus: 'Evaluation, observability, and runtime guardrails',
        pricing: 'Enterprise quote-based',
        strengths: ['Eval-to-guardrail lifecycle', 'Hallucination detection', 'Compliance audit trails'],
        weaknesses: ['Quote-gated pricing — inaccessible to teams/individuals', 'Complex platform requiring dedicated security engineering', 'Overkill for coding-specific governance needs', 'No file scope, retry loop, or cost containment'],
    },
    {
        name: 'Zenity',
        status: 'Independent',
        focus: 'Shadow AI discovery and agentic lifecycle protection',
        pricing: 'Enterprise quote-based',
        strengths: ['Shadow AI inventory', 'Behavioral analysis', 'Cross-platform agent discovery'],
        weaknesses: ['Inventory and discovery tool, not enforcement layer', 'Enterprise-only with no practitioner tier', 'No coding-specific governance (context rot, retry loops)', 'High implementation complexity'],
    },
    {
        name: 'Endor Labs',
        status: 'Independent',
        focus: 'Agent visibility and corporate account enforcement',
        pricing: 'Enterprise quote-based',
        strengths: ['Model/agent inventory management', 'Corporate account enforcement', 'MCP integration visibility'],
        weaknesses: ['Visibility tool, not action enforcement', 'No runtime governance for coding agents', 'Enterprise-only deployment', 'Does not address context rot, retry inflation, or file scope'],
    },
];

const comparisonFeatures = [
    { feature: 'Prompt injection defense', enterprise: true, practitioner: false },
    { feature: 'Context rot prevention', enterprise: false, practitioner: true },
    { feature: 'Retry loop detection', enterprise: false, practitioner: true },
    { feature: 'File scope enforcement', enterprise: false, practitioner: true },
    { feature: 'Financial circuit breakers', enterprise: false, practitioner: true },
    { feature: 'Repository drift detection', enterprise: false, practitioner: true },
    { feature: 'Shadow AI discovery', enterprise: true, practitioner: false },
    { feature: 'MCP tool poisoning scan', enterprise: true, practitioner: true },
    { feature: 'Compliance audit trails', enterprise: true, practitioner: false },
    { feature: 'One-time pricing', enterprise: false, practitioner: true },
    { feature: '15-minute deployment', enterprise: false, practitioner: true },
    { feature: 'Works with any AI agent', enterprise: 'partial' as const, practitioner: true },
];

function StatusIcon({ value }: { value: boolean | 'partial' }) {
    if (value === true) return <Check size={16} className="text-emerald-600" />;
    if (value === 'partial') return <span className="text-amber-600 text-xs font-bold">Partial</span>;
    return <X size={16} className="text-rose-400" />;
}

export default function AIGuardrailsPlatformsPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Lock size={14} /> Platform Comparison
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        AI Guardrails Platforms in 2026
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Enterprise guardrails platforms solve prompt injection and shadow AI visibility. They do not solve context rot, retry loops, file scope violations, or cost overruns. That is the practitioner governance layer — and it is what is missing.
                    </p>
                </div>

                {/* The Gap Visual */}
                <div className="my-12 p-8 bg-rose-50 border border-rose-200 rounded-2xl">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="text-rose-600 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="font-grotesk font-bold text-[#1A1A1A] text-lg mb-2">The Practitioner Governance Gap</h3>
                            <p className="text-[#4A4A4A] leading-relaxed">
                                Enterprise platforms (Lakera, Galileo, Zenity) focus on <strong>organizational security posture</strong>: prompt injection, shadow AI, compliance. They are designed for CISOs and security teams. But the daily practitioner failures — context rot, retry inflation, file scope violations, $1,100 token burns — are <strong>not addressed by any enterprise guardrails platform</strong>. That gap is the practitioner governance layer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature Comparison Table */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm overflow-x-auto">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Enterprise Guardrails vs. Practitioner Governance</h2>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-zinc-100">
                                <th className="text-left p-3 text-xs uppercase font-bold text-zinc-700">Capability</th>
                                <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Enterprise Platforms<br /><span className="font-normal text-zinc-400">(Lakera, Galileo, etc.)</span></th>
                                <th className="p-3 text-center text-xs uppercase font-bold text-violet-700">Practitioner Governance<br /><span className="font-normal text-violet-400">($99/module)</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonFeatures.map(f => (
                                <tr key={f.feature} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                                    <td className="p-3 font-medium text-[#3A3A3A]">{f.feature}</td>
                                    <td className="p-3 text-center"><StatusIcon value={f.enterprise} /></td>
                                    <td className="p-3 text-center"><StatusIcon value={f.practitioner} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Platform Cards */}
                <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Platform-by-Platform Analysis</h2>
                <div className="space-y-4 mb-8">
                    {platforms.map((p, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm">
                            <div className="flex items-start justify-between gap-4 mb-1">
                                <h3 className="text-lg font-grotesk font-bold text-[#1A1A1A]">{p.name}</h3>
                                <span className="text-[10px] font-mono text-zinc-500 uppercase whitespace-nowrap">{p.status}</span>
                            </div>
                            <p className="text-xs text-zinc-500 mb-3 font-mono uppercase">{p.focus} · {p.pricing}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Strengths</span>
                                    <ul className="mt-2 space-y-1">
                                        {p.strengths.map((s, j) => (
                                            <li key={j} className="text-sm text-[#3A3A3A] flex items-start gap-2">
                                                <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" /> {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Gaps</span>
                                    <ul className="mt-2 space-y-1">
                                        {p.weaknesses.map((w, j) => (
                                            <li key={j} className="text-sm text-[#3A3A3A] flex items-start gap-2">
                                                <X size={14} className="text-rose-400 mt-0.5 flex-shrink-0" /> {w}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Anchor */}
                <div className="bg-[#1A1A1A] rounded-2xl p-8 mb-8 text-white">
                    <h2 className="text-xl font-grotesk font-bold mb-4 flex items-center gap-2">
                        <DollarSign className="w-5 h-5" /> The Pricing Gap
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="p-4 bg-white/10 rounded-xl text-center">
                            <div className="text-2xl font-bold">$10K+</div>
                            <div className="text-xs text-zinc-400 font-mono uppercase">Enterprise guardrails / year</div>
                            <div className="text-[10px] text-zinc-500 mt-1">Quote-gated, 3-6 month deploy</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl text-center">
                            <div className="text-2xl font-bold">$0</div>
                            <div className="text-xs text-zinc-400 font-mono uppercase">NeMo Guardrails (OSS)</div>
                            <div className="text-[10px] text-zinc-500 mt-1">Prompt-level only, no agent governance</div>
                        </div>
                        <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center">
                            <div className="text-2xl font-bold text-emerald-400">$99</div>
                            <div className="text-xs text-emerald-300 font-mono uppercase">one-time, per module</div>
                            <div className="text-[10px] text-emerald-200 mt-1">Deploy in 15 minutes, any agent</div>
                        </div>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Enterprise guardrails are quote-gated. Open source is prompt-level only. Practitioner governance modules are $99 one-time and deploy in 15 minutes. There is nothing else in the market at this layer.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/skills" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        View All 15 Governance Modules →
                    </Link>
                    <Link href="/compare/ai-coding-agents" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                        Agent Comparison Table
                    </Link>
                </div>

                {/* FAQ */}
                <div className="mt-12 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'Do I need enterprise guardrails AND practitioner governance?', a: 'They solve different problems. Enterprise guardrails (Lakera, Galileo) protect against prompt injection, shadow AI, and compliance violations. Practitioner governance protects against context rot, retry inflation, file scope violations, and cost overruns. For complete protection, you need both layers.' },
                            { q: 'What happened to Lakera and Invariant Labs?', a: 'Lakera was acquired by Check Point in November 2025. Invariant Labs was acquired by Snyk in June 2025. Both are now integrated into larger enterprise security platforms — making them less accessible to individual teams and practitioners.' },
                            { q: 'Is NVIDIA NeMo Guardrails a good alternative?', a: 'NeMo Guardrails is an open-source framework for adding guardrails to LLM applications. It handles conversational safety (topic filtering, output moderation) but does not address coding-specific governance: context rot, retry loops, file scope, or financial circuit breakers.' },
                            { q: 'Why are enterprise guardrails so expensive?', a: 'Enterprise platforms are designed for CISO-level procurement: SOC 2 compliance, VPC deployment, custom SLAs, and dedicated support. This is appropriate for organizational security posture but creates a pricing gap for practitioner-level governance that individual developers and small teams need.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Hub Links */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm">
                    <h2 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">Related Analyses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { title: 'GitHub Copilot Problems 2026', href: '/compare/github-copilot-problems' },
                            { title: 'Cursor Problems 2026', href: '/compare/cursor-problems' },
                            { title: 'Windsurf Problems 2026', href: '/compare/windsurf-problems' },
                            { title: 'Why MCP Is Dangerous', href: '/compare/why-mcp-is-dangerous' },
                            { title: 'Why AI Coding Burns Money', href: '/compare/why-ai-coding-burns-money' },
                            { title: 'Full Agent Comparison', href: '/compare/ai-coding-agents' },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg hover:bg-violet-50 transition-colors text-sm font-bold text-[#1A1A1A]">
                                <ArrowRight size={14} className="text-violet-600" /> {link.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/compare" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Comparisons</Link>
                </div>
            </div>
        </main>
    );
}
