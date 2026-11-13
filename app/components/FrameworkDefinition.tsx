import React from 'react';
import Link from 'next/link';
import SocialShare from './SocialShare';
import { FrameworkDiagnosticBridge } from '@/components/seo/FrameworkDiagnosticBridge';

interface Framework {
    slug: string;
    name: string;
    definition: string;
    whyItMatters: string;
    howToCalculate?: string[];
    relatedArticles: {
        title: string;
        publication: string;
        date: string;
        url: string;
    }[];
    relatedTool?: {
        name: string;
        url: string;
    };
}

export default function FrameworkDefinition({ framework }: { framework: Framework }) {
    // JSON-LD schema for the defined term
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "name": framework.name,
        "description": framework.definition,
        "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "AI Economist Framework",
            "url": "https://www.richardewing.io/articles/frameworks"
        },
        "creator": {
            "@type": "Person",
            "name": "Richard Ewing",
            "jobTitle": "AI Economist",
            "url": "https://www.richardewing.io"
        },
        "url": `https://www.richardewing.io/articles/frameworks/${framework.slug}`
    };

    return (
        <main className="pt-16 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto px-6">

                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-xs font-mono font-bold text-[var(--muted,#66716a)] uppercase tracking-widest">
                    <Link href="/articles" className="hover:text-[var(--forest,#29473b)] transition-colors">Canonical Hub</Link>
                    <span>/</span>
                    <span className="text-[var(--forest,#29473b)] truncate">{framework.name}</span>
                </div>

                {/* Header */}
                <header className="mb-10 pb-8 border-b border-[var(--line,rgba(36,51,43,0.16))]">
                    <div className="text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest mb-3">
                        Canonical Framework Specification
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[var(--ink,#1e2924)] mb-4 leading-tight">
                        {framework.name}
                    </h1>
                    <div className="text-sm font-mono text-[var(--muted,#66716a)] mb-6">
                        Authored by <span className="font-semibold text-[var(--ink,#1e2924)]">Richard Ewing</span>, AI Economist &amp; Enterprise R&amp;D Auditor
                    </div>
                    <SocialShare url={`https://www.richardewing.io/articles/frameworks/${framework.slug}`} title={framework.name} />
                </header>

                {/* Definition Box (AEO Featured Snippet Block) */}
                <section className="mb-12">
                    <h2 className="text-xs font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest mb-3">
                        Executive Definition
                    </h2>
                    <div className="p-6 sm:p-8 bg-white border-l-4 border-l-[var(--gold,#b77a35)] border-y border-r border-[var(--line,rgba(36,51,43,0.12))] rounded-r-2xl shadow-sm">
                        {framework.definition.split('\n\n').map((paragraph, idx) => (
                            <p
                                key={idx}
                                className={idx === 0
                                    ? "text-xl sm:text-2xl text-[var(--ink,#1e2924)] leading-relaxed font-serif italic"
                                    : "mt-4 text-base sm:text-lg text-[var(--muted,#66716a)] leading-relaxed font-sans"
                                }
                                itemProp={idx === 0 ? "description" : undefined}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Mathematical Axioms & Dedicated Formula Modules */}
                {framework.slug === 'return-on-ai-investment' && (
                    <section className="mb-12">
                        <div className="p-6 sm:p-8 rounded-2xl border border-[var(--forest,#29473b)] bg-[var(--forest2,#162e26)] text-white shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d8c7a8] bg-white/10 px-3 py-1 rounded border border-white/15">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono text-zinc-300">The ROAI Equation</span>
                            </div>
                            <div className="p-4 bg-black/40 border border-white/10 text-[#d8c7a8] font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-4 text-center">
                                ROAI = (Δ Gross Profit Attributable to AI - Synthetic COGS) / Capital Invested
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans mt-3">
                                <strong className="text-white">The Margin Collapse Law:</strong> Moving AI accuracy from 85% to 95% triggers an exponential 10x compute cost increase. If incremental revenue lift does not outpace Synthetic COGS, every user interaction carries Negative Carry.
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-4">
                                <Link href="/tools/aueb" className="button button-gold">
                                    Run AUEB Benchmark Calculator ↗
                                </Link>
                                <Link href="/schedule?source=return-on-ai-investment" className="button button-outline text-white border-white/30 hover:bg-white/10">
                                    Boardroom R&amp;D Capital Audit ↗
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {framework.slug === 'technical-insolvency-date' && (
                    <section className="mb-12">
                        <div className="p-6 sm:p-8 rounded-2xl border border-rose-900/40 bg-[var(--forest2,#162e26)] text-white shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-300 bg-rose-950/60 px-3 py-1 rounded border border-rose-700/40">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono text-zinc-300">The TID Projection</span>
                            </div>
                            <div className="p-4 bg-black/40 border border-white/10 text-rose-300 font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-4 text-center">
                                TID = Current Quarter + (100% - Current Maintenance %) / QoQ Maintenance Growth Rate
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans mt-3">
                                <strong className="text-white">The Stagnation Threshold:</strong> At the Technical Insolvency Date, maintenance burden consumes 100% of engineering bandwidth. New feature velocity mathematically stops. R&amp;D expenditure converts into pure operational maintenance.
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-4">
                                <Link href="/tools/pdi" className="button button-gold">
                                    Calculate Your Organization&apos;s TID ↗
                                </Link>
                                <Link href="/schedule?source=technical-insolvency-date" className="button button-outline text-white border-white/30 hover:bg-white/10">
                                    Schedule Insolvency Triage ↗
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {framework.slug === 'vibe-coding-debt' && (
                    <section className="mb-12">
                        <div className="p-6 sm:p-8 rounded-2xl border border-amber-900/40 bg-[var(--forest2,#162e26)] text-white shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 bg-amber-950/60 px-3 py-1 rounded border border-amber-700/40">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono text-zinc-300">The Vibe Debt Liability Ratio</span>
                            </div>
                            <div className="p-4 bg-black/40 border border-white/10 text-amber-300 font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-4 text-center">
                                VCD = (Unverified AI Lines of Code × Mean Recovery Time) / Test Coverage %
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans mt-3">
                                <strong className="text-white">The Comprehension Asymmetry:</strong> Accelerating code generation without accelerating code comprehension creates an uninspected liability. When an unverified copilot abstraction fails, recovery duration balloons exponentially.
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-4">
                                <Link href="/tools/pdi" className="button button-gold">
                                    Benchmark Your Vibe Coding Debt (PDI) ↗
                                </Link>
                                <Link href="/schedule?source=vibe-coding-debt" className="button button-outline text-white border-white/30 hover:bg-white/10">
                                    Book 30-Min Architecture Triage ↗
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {framework.slug === 'spec-driven-development' && (
                    <section className="mb-12">
                        <div className="p-6 sm:p-8 rounded-2xl border border-[var(--forest,#29473b)] bg-[var(--forest2,#162e26)] text-white shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d8c7a8] bg-white/10 px-3 py-1 rounded border border-white/15">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono text-zinc-300">The Specification Readiness Equation</span>
                            </div>
                            <div className="p-4 bg-black/40 border border-white/10 text-[#d8c7a8] font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-4 text-center">
                                Agent Rework Cost = Unbounded Files Touched × (1 - Schema Coverage %) × (1 - Deterministic Gate Rate)
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans mt-3">
                                <strong className="text-white">The Blast-Radius Law:</strong> Conversational prompts leave file scope unconstrained. Locking typed schemas, explicit out-of-scope boundaries in AGENTS.md and SPEC.md, and compiler test gates drives multi-file agent drift toward zero before human PR review begins.
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-4">
                                <Link href="/tools/spec-quality-scorecard" className="button button-gold">
                                    Score Your AGENTS.md &amp; SPEC.md ↗
                                </Link>
                                <Link href="/concepts/eval-driven-development" className="button button-outline text-white border-white/30 hover:bg-white/10">
                                    Pair with Eval-Driven Development (EDD) ↗
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {framework.slug === 'shadow-agents' && (
                    <section className="mb-12">
                        <div className="p-6 sm:p-8 rounded-2xl border border-purple-900/40 bg-[var(--forest2,#162e26)] text-white shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300 bg-purple-950/60 px-3 py-1 rounded border border-purple-700/40">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono text-zinc-300">The Autonomous Blast Radius</span>
                            </div>
                            <div className="p-4 bg-black/40 border border-white/10 text-purple-300 font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-4 text-center">
                                Blast Radius = Unsanctioned Agent Count × API Execution Permissions × Average Query Frequency
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans mt-3">
                                <strong className="text-white">The Non-Human Actor Risk:</strong> Unmonitored agents executing with elevated credentials trigger systemic cascading failures and unmonitored API inference loops across enterprise vector databases and production systems.
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-4">
                                <Link href="/reality-check" className="button button-gold">
                                    Run AI Reality Check Diagnostic ↗
                                </Link>
                                <Link href="/schedule?source=shadow-agents" className="button button-outline text-white border-white/30 hover:bg-white/10">
                                    Book Shadow Agent Security Review ↗
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {framework.slug === 'synthetic-cogs' && (
                    <section className="mb-12">
                        <div className="p-6 sm:p-8 rounded-2xl border border-[var(--forest,#29473b)] bg-[var(--forest2,#162e26)] text-white shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#d8c7a8] bg-white/10 px-3 py-1 rounded border border-white/15">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono text-zinc-300">Unit COGS Breakdown</span>
                            </div>
                            <div className="p-4 bg-black/40 border border-white/10 text-[#d8c7a8] font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-4 text-center">
                                Synthetic COGS = Embedding Cost + Vector Search + Prompt Tokens + Completion Tokens + Dynamic Evals
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans mt-3">
                                <strong className="text-white">The Zero-Marginal-Cost Death:</strong> AI SaaS is an extraction business, not pure cloud hosting. Every user query consumes non-zero hardware cycles and API tokens.
                            </p>
                            <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-4">
                                <Link href="/tools/aueb" className="button button-gold">
                                    Benchmark Synthetic COGS ↗
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Why It Matters */}
                <section className="mb-12">
                    <h2 className="text-xs font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest mb-3">
                        Why It Matters
                    </h2>
                    <div className="p-6 sm:p-8 bg-white border border-[var(--line,rgba(36,51,43,0.12))] rounded-2xl shadow-sm">
                        {framework.whyItMatters.split('\n\n').map((paragraph, idx) => (
                            <p
                                key={idx}
                                className={idx === 0
                                    ? "text-[var(--ink,#1e2924)] font-sans text-base sm:text-lg leading-relaxed"
                                    : "mt-4 text-[var(--ink,#1e2924)] font-sans text-base sm:text-lg leading-relaxed"
                                }
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* How to Calculate (if applicable) */}
                {framework.howToCalculate && (
                    <section className="mb-12">
                        <h2 className="text-xs font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest mb-3">
                            How to Calculate
                        </h2>
                        <div className="p-6 sm:p-8 bg-white border border-[var(--line,rgba(36,51,43,0.12))] rounded-2xl shadow-sm">
                            <ol className="space-y-4">
                                {framework.howToCalculate.map((step, i) => (
                                    <li key={i} className="flex gap-4 text-zinc-800 font-sans text-sm sm:text-base">
                                        <span className="font-mono text-xs font-bold bg-[var(--paper2,#ebe7dc)] text-[var(--forest,#29473b)] px-2.5 py-1 rounded h-fit">
                                            {i + 1}
                                        </span>
                                        <span className="leading-relaxed">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>
                )}

                {/* Related Articles */}
                {framework.relatedArticles && framework.relatedArticles.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-xs font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest mb-4">
                            Foundational Articles &amp; Case Evidence
                        </h2>
                        <div className="grid gap-3">
                            {framework.relatedArticles.map((art, i) => (
                                <a
                                    key={i}
                                    href={art.url}
                                    target={art.url.startsWith('http') ? '_blank' : undefined}
                                    rel={art.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="p-5 rounded-xl bg-white border border-[var(--line,rgba(36,51,43,0.12))] hover:border-[var(--forest,#29473b)] transition flex items-center justify-between gap-4 group"
                                >
                                    <div>
                                        <div className="font-serif text-lg font-medium text-[var(--ink,#1e2924)] group-hover:text-[var(--forest,#29473b)] transition-colors mb-1">
                                            &ldquo;{art.title}&rdquo;
                                        </div>
                                        <div className="text-xs font-mono text-zinc-500">
                                            {art.publication} &bull; {art.date}
                                        </div>
                                    </div>
                                    <span className="text-[var(--gold,#b77a35)] group-hover:translate-x-1 transition-transform">
                                        ↗
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>
                )}

                {/* Bidirectional Diagnostic Tool & Advisory Bridge */}
                <FrameworkDiagnosticBridge
                    variant="framework-to-diagnostic"
                    slug={framework.slug}
                    advisorySource={framework.slug}
                    primaryTool={{
                        name: framework.relatedTool?.name || 'Product Debt Index (PDI) Calculator',
                        url: framework.relatedTool?.url || '/tools/pdi',
                        badge: 'Interactive Diagnostic',
                        description: `Quantify risk and model financial impact for ${framework.name}.`
                    }}
                />

                {/* Citation Block */}
                <section className="pb-12">
                    <h2 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
                        Citation &amp; Attribution
                    </h2>
                    <div className="p-5 rounded-xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))]">
                        <p className="text-zinc-600 text-[11px] font-mono mb-2 uppercase tracking-wider">Formal Attribution Standard:</p>
                        <p className="text-[var(--ink,#1e2924)] font-mono text-xs break-all leading-relaxed">
                            Ewing, R. (2026). &ldquo;{framework.name}.&rdquo; richardewing.io.<br />
                            https://www.richardewing.io/articles/frameworks/{framework.slug}
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}
