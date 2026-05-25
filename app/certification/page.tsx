import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Governance Certification | Prove Your Expertise',
    description: 'Earn the AI Governance Maturity certification. Demonstrate mastery of AI economics, risk frameworks, and enterprise audit methodology.',
    keywords: ['AI governance certification', 'runtime governance maturity', 'AI governance assessment', 'agentic engineering certification', 'MCP governance certified', 'AI governance training', 'runtime maturity model'],
    openGraph: {
        title: 'Runtime Governance Maturity — Certification & Assessment',
        description: 'Institutional credentials for deterministic agentic engineering. 5-level maturity model with certification tracks.',
    },
    alternates: { canonical: 'https://www.richardewing.io/certification' },
};

const maturityLevels = [
    {
        level: 1, name: 'Ad Hoc', color: 'border-rose-200 bg-rose-50',
        textColor: 'text-rose-800',
        description: 'No governance infrastructure. Agents run unrestricted. Failures discovered after damage.',
        capabilities: ['No system prompts or policies', 'No cost limits', 'No file access restrictions', 'No audit trail'],
        assessment: 'Zero governance. All 15 failure modes are uncontained.',
    },
    {
        level: 2, name: 'Reactive', color: 'border-orange-200 bg-orange-50',
        textColor: 'text-orange-800',
        description: 'System prompts exist but are text-based suggestions. Bypassed under context pressure.',
        capabilities: ['CLAUDE.md / .cursorrules deployed', 'Manual code review', 'No automated enforcement', 'Basic retry awareness'],
        assessment: 'Text-based governance only. 12+ failure modes uncontained.',
    },
    {
        level: 3, name: 'Structured', color: 'border-yellow-200 bg-yellow-50',
        textColor: 'text-yellow-800',
        description: 'YAML policies and some middleware. Automated enforcement exists but is not comprehensive.',
        capabilities: ['Policy-as-code (YAML)', 'Some automated gates', 'Basic cost limits', 'Partial audit trail'],
        assessment: 'Partial governance. 6-8 failure modes contained.',
    },
    {
        level: 4, name: 'Governed', color: 'border-emerald-200 bg-emerald-50',
        textColor: 'text-emerald-800',
        description: 'Full 4-layer runtime governance. Deterministic enforcement with telemetry across Identity, Skill, Tool, and Environment.',
        capabilities: ['4-layer governance deployed', 'Automated enforcement on all layers', 'Financial circuit breakers', 'Full audit trail with rollback'],
        assessment: 'Comprehensive governance. All 15 failure modes contained.',
    },
    {
        level: 5, name: 'Institutional', color: 'border-cyan-200 bg-cyan-50',
        textColor: 'text-cyan-800',
        description: 'Self-healing governance with adaptive thresholds, automatic remediation, cross-team telemetry, and organizational learning.',
        capabilities: ['Adaptive threshold tuning', 'Automatic remediation policies', 'Cross-team governance telemetry', 'Governance evolution pipeline'],
        assessment: 'Institutional governance. Self-improving containment infrastructure.',
    },
];

const certificationTracks = [
    {
        name: 'Runtime Governance Practitioner',
        level: 'Level 3',
        description: 'Deploy and configure governance skills across all 4 architectural layers.',
        prereqs: ['Deploy 3+ governance modules', 'Configure policy.yaml', 'Pass YAML policy audit'],
        modules: ['context-rot-prevention', 'retry-inflation-control', 'runtime-governance'],
        color: 'border-yellow-200 bg-yellow-50',
    },
    {
        name: 'Runtime Governance Architect',
        level: 'Level 4',
        description: 'Design complete governance architectures for multi-agent environments.',
        prereqs: ['Deploy all 15 governance modules', 'Configure middleware.ts', 'Design custom policies', 'Pass architecture review'],
        modules: ['Full 15-system deployment', 'Custom middleware development', 'Telemetry configuration'],
        color: 'border-emerald-200 bg-emerald-50',
    },
    {
        name: 'MCP Governance Certified',
        level: 'Specialist',
        description: 'Secure MCP deployments with capability manifests, file guards, and supply chain verification.',
        prereqs: ['Deploy MCP Governance module', 'Configure capability manifests', 'Implement file guards', 'Pass security review'],
        modules: ['mcp-governance', 'tool-permission-governance', 'autonomous-execution-safety'],
        color: 'border-rose-200 bg-rose-50',
    },
    {
        name: 'Bounded Cognition Certified',
        level: 'Specialist',
        description: 'Manage agent context windows, prevent context rot, and optimize token economics.',
        prereqs: ['Deploy context governance stack', 'Configure checkpoint rotation', 'Implement cost monitoring', 'Pass economics audit'],
        modules: ['context-rot-prevention', 'context-window-compression', 'ai-cost-containment', 'retry-inflation-control'],
        color: 'border-blue-200 bg-blue-50',
    },
];

export default function CertificationPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-amber-200 bg-amber-50 text-amber-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Shield size={14} /> Maturity Assessment
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Runtime Governance Maturity
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
                        Assess your organization&apos;s AI governance posture. Identify gaps. Deploy containment.
                        Certify your capability to govern agentic systems deterministically.
                    </p>
                </div>

                {/* Maturity Levels */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">The 5-Level Maturity Model</h2>
                    <p className="text-[#4A4A4A] mb-8">Most engineering organizations are at Level 1 or 2. The infrastructure on this platform enables immediate elevation to Level 4.</p>
                    <div className="space-y-4">
                        {maturityLevels.map((lvl) => (
                            <div key={lvl.level} className={`rounded-xl border p-6 ${lvl.color}`}>
                                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                                    <div>
                                        <span className={`text-xs font-mono font-bold uppercase tracking-widest ${lvl.textColor}`}>Level {lvl.level}</span>
                                        <h3 className={`text-xl font-grotesk font-bold ${lvl.textColor}`}>{lvl.name}</h3>
                                    </div>
                                </div>
                                <p className={`text-sm mb-3 ${lvl.textColor}`}>{lvl.description}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {lvl.capabilities.map((c, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/60 rounded text-xs font-mono">{c}</span>
                                    ))}
                                </div>
                                <div className="pt-3 border-t border-black/10">
                                    <span className={`text-xs font-bold ${lvl.textColor}`}>Assessment: {lvl.assessment}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certification Tracks */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Certification Tracks</h2>
                    <p className="text-[#4A4A4A] mb-8">Institutional credentials that map directly to the runtime governance ontology. Each track requires demonstrated deployment and configuration competency.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certificationTracks.map((track, i) => (
                            <div key={i} className={`rounded-xl border p-6 ${track.color}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">{track.level}</span>
                                </div>
                                <h3 className="text-lg font-grotesk font-bold text-[#1A1A1A] mb-2">{track.name}</h3>
                                <p className="text-sm text-[#4A4A4A] mb-4">{track.description}</p>
                                <div className="mb-3">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Prerequisites</span>
                                    <ul className="mt-1 space-y-1">
                                        {track.prereqs.map((p, j) => (
                                            <li key={j} className="flex items-center gap-2 text-xs text-[#3A3A3A]">
                                                <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" /> {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Self-Assessment Quick Start */}
                <section className="mb-16">
                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 shadow-sm">
                        <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">Quick Self-Assessment</h2>
                        <p className="text-[#4A4A4A] mb-6">Answer these 5 questions to estimate your current governance maturity level.</p>
                        <div className="space-y-4">
                            {[
                                { q: 'Do your AI agents have written operational policies (CLAUDE.md, policy.yaml)?', l1: 'No → Level 1', l2: 'Yes → Level 2+' },
                                { q: 'Are those policies enforced by middleware (not just text)?', l1: 'Text only → Level 2', l2: 'Middleware → Level 3+' },
                                { q: 'Do you have automated cost caps, retry limits, and file guards?', l1: 'No → Level 2', l2: 'Yes → Level 3+' },
                                { q: 'Is governance deployed across all 4 layers (Identity, Skill, Tool, Environment)?', l1: 'Partial → Level 3', l2: 'Complete → Level 4' },
                                { q: 'Does your governance infrastructure self-adapt and improve?', l1: 'Manual → Level 4', l2: 'Adaptive → Level 5' },
                            ].map((item, i) => (
                                <div key={i} className="border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                                    <p className="text-sm font-bold text-[#1A1A1A] mb-2">{i + 1}. {item.q}</p>
                                    <div className="flex gap-4 text-xs">
                                        <span className="text-rose-600">{item.l1}</span>
                                        <span className="text-emerald-600">{item.l2}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cross-links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <Link href="/executive-briefing" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-5 shadow-sm hover:border-violet-200 transition-colors group">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-600">Executive</span>
                        <h3 className="text-sm font-bold text-[#1A1A1A] mt-1 group-hover:text-violet-700">Board-Ready Briefing →</h3>
                    </Link>
                    <Link href="/runtime-failure-index" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-5 shadow-sm hover:border-rose-200 transition-colors group">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-600">Intelligence</span>
                        <h3 className="text-sm font-bold text-[#1A1A1A] mt-1 group-hover:text-rose-700">Runtime Failure Index →</h3>
                    </Link>
                    <Link href="/telemetry" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-5 shadow-sm hover:border-emerald-200 transition-colors group">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">Metrics</span>
                        <h3 className="text-sm font-bold text-[#1A1A1A] mt-1 group-hover:text-emerald-700">Governance Telemetry →</h3>
                    </Link>
                </div>

                {/* CTA */}
                <div className="p-10 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm text-center">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">Start Building Governance Maturity</h2>
                    <p className="text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
                        Each governance module moves you one level up the maturity model.
                        Deploy any module. Measure the delta. Build toward institutional governance.
                    </p>
                    <Link href="/skills" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors inline-block">
                        View All 15 Runtime Modules →
                    </Link>
                </div>

                <div className="sr-only" aria-hidden="true">
                    AI governance certification, runtime governance maturity model, agentic engineering certification, MCP governance certified, bounded cognition certified, runtime governance architect, AI governance assessment, governance maturity levels, deterministic governance training
                </div>

                <div className="mt-8 text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Infrastructure Catalog</Link>
                </div>
            
                    <AdvisoryCTA variant="educational" />
                </div>
        </main>
    );
}
