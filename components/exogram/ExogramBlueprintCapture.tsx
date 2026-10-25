'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, CheckCircle2, Copy, Check, ArrowRight, FileCode2, Terminal } from 'lucide-react';

const FIVE_INVARIANTS = [
    {
        id: 'INV-01',
        title: 'Cryptographic Nonce Idempotency',
        layer: 'Actuation & Tool Layer',
        rule: 'Every external tool execution or database mutation requires a single-use cryptographic nonce tied to the session state hash. Duplicate or retried tool calls with an exhausted nonce are dropped at the edge proxy in 0.02ms.',
        failurePrevented: 'Stops recursive agent retry loops from double-billing customers or corrupting production database rows.',
    },
    {
        id: 'INV-02',
        title: 'Strict JSON/XML Schema Admissibility Gate',
        layer: 'Schema Integrity Layer',
        rule: 'Probabilistic model outputs are never passed directly to downstream APIs. Every payload is parsed against a compiled deterministic schema contract before execution.',
        failurePrevented: 'Eliminates hallucinated SQL parameters, malformed JSON payloads, and type-coercion crashes.',
    },
    {
        id: 'INV-03',
        title: 'Hard Token & Dollar Circuit Breakers',
        layer: 'Environment & FinOps Layer',
        rule: 'Enforce a hard per-session token ceiling and a 3-strike consecutive error cutoff within a 60-second rolling window. When tripped, the proxy halts inference and returns a structured fallback.',
        failurePrevented: 'Prevents overnight $15,000+ runaway multi-agent conversation loops and API denial-of-wallet attacks.',
    },
    {
        id: 'INV-04',
        title: 'Zero-Trust Tool Scope & Path Sandboxing',
        layer: 'Boundary Control Protocol (EAAP)',
        rule: 'Agents operate under least-privilege capability manifests. File system reads, environment variable access, and network egress are restricted to explicitly allowlisted paths and domains.',
        failurePrevented: 'Blocks prompt injection attacks from reading .env credentials or exfiltrating private records via unauthorized webhooks.',
    },
    {
        id: 'INV-05',
        title: 'Decoupled Persistence vs. Execution Authority',
        layer: 'Memory Integrity Layer',
        rule: 'Stored memory, RAG vector chunks, and conversation history are treated as untrusted persistence. Unverified memory cannot trigger privileged tool calls without explicit human or policy-as-code authorization.',
        failurePrevented: 'Neutralizes indirect prompt injections hidden inside retrieved documents, emails, or database records.',
    },
];

const POLICY_MANIFEST_SNIPPET = `# Exogram EAAP v1.0 Runtime Boundary Manifest
version: "1.0"
runtime_gate:
  max_latency_ms: 5
  mode: "enforce_deterministic"
invariants:
  nonce_idempotency:
    enabled: true
    ttl_seconds: 300
  circuit_breaker:
    max_tokens_per_session: 32000
    max_consecutive_retries: 3
    window_seconds: 60
    on_trip: "halt_and_alert"
  tool_admissibility:
    default_policy: "deny_all"
    allowlisted_tools:
      - name: "postgres_read_replica"
        mutating: false
      - name: "stripe_billing_preview"
        mutating: false
        require_human_approval_for_commit: true
  memory_trust_boundary:
    allow_rag_to_trigger_tools: false
    pii_redaction: "strict_airgap"`;

export default function ExogramBlueprintCapture() {
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('CTO / VP Engineering');
    const [submitting, setSubmitting] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [copied, setCopied] = useState(false);

    const handleAccessSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setErrorMsg('Please enter a valid work email address.');
            return;
        }
        setSubmitting(true);
        setErrorMsg('');

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    toolName: 'Exogram Runtime Boundary Blueprint',
                    score: 100,
                    answers: {
                        company: company || 'Not specified',
                        role,
                        asset: 'Deterministic Runtime Boundary Blueprint (5 Invariants)',
                        sourcePage: '/exogram',
                    },
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to register blueprint access.');
            }
            setIsRevealed(true);
        } catch (err) {
            console.error('Blueprint capture error:', err);
            setErrorMsg('Could not process your request right now. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleCopyManifest = () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(POLICY_MANIFEST_SNIPPET);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    return (
        <section className="section border-t border-[var(--line)]" id="runtime-blueprint">
            <div className="max-w-4xl mx-auto">
                <div className="rounded-3xl border-2 border-[#1f3b2c]/30 bg-white p-6 sm:p-10 shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--line)]">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f3b2c] text-white font-mono text-[10px] font-bold uppercase tracking-widest mb-3">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#d8c7a8]" />
                                <span>Enterprise Architecture Specification · EAAP v1.0</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--ink)] tracking-tight">
                                The Deterministic Runtime Boundary Blueprint
                            </h2>
                            <p className="text-sm sm:text-base text-[var(--muted)] mt-1 leading-relaxed">
                                5 non-negotiable runtime invariants and the production YAML policy manifest for CTOs, VPs of Engineering, and Staff Architects deploying autonomous AI agents.
                            </p>
                        </div>
                        <div className="shrink-0 bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-left md:text-right">
                            <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                                Enforcement Overhead
                            </span>
                            <span className="font-serif text-xl font-bold text-[var(--forest)]">
                                &lt; 5ms Line Rate
                            </span>
                        </div>
                    </div>

                    {!isRevealed ? (
                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <h3 className="text-lg font-serif font-bold text-[var(--ink)]">
                                    What is inside the technical blueprint:
                                </h3>
                                <ul className="space-y-3 text-xs sm:text-sm text-[var(--ink)]">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                                        <span><strong>The 5 Execution Invariants:</strong> Exact architectural rules for nonce idempotency, schema admissibility, token circuit breakers, and RAG memory isolation.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                                        <span><strong>Copyable EAAP v1.0 Policy Manifest:</strong> Reference YAML configuration for bounding tool permissions and stopping silent retry spirals.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                                        <span><strong>VPC Deployment Checklist:</strong> How to place a deterministic verification gate in front of OpenAI, Anthropic, and local model endpoints without rewriting agent loops.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="lg:col-span-5 bg-[var(--paper)] border border-[var(--line)] rounded-2xl p-6">
                                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--forest)] mb-4">
                                    <Lock className="w-3.5 h-3.5 text-[var(--gold)]" />
                                    <span>Instant Inline Access</span>
                                </div>
                                <form onSubmit={handleAccessSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink)] mb-1.5">
                                            Work Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="cto@enterprise.com"
                                            className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-950 focus:outline-none focus:border-[var(--forest)]"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink)] mb-1.5">
                                                Role
                                            </label>
                                            <select
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                                className="w-full px-3 py-2.5 bg-white border border-zinc-300 rounded-xl text-xs text-zinc-950 focus:outline-none focus:border-[var(--forest)]"
                                            >
                                                <option value="CTO / VP Engineering">CTO / VP Eng</option>
                                                <option value="Principal / Staff Architect">Staff Architect</option>
                                                <option value="CISO / Security Lead">CISO / Security</option>
                                                <option value="CEO / Founder">CEO / Founder</option>
                                                <option value="CFO / FinOps">CFO / FinOps</option>
                                                <option value="CPO / Product Lead">CPO / Product</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink)] mb-1.5">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                placeholder="Acme Corp"
                                                className="w-full px-3 py-2.5 bg-white border border-zinc-300 rounded-xl text-xs text-zinc-950 focus:outline-none focus:border-[var(--forest)]"
                                            />
                                        </div>
                                    </div>

                                    {errorMsg && (
                                        <p className="text-xs text-red-700 font-medium">{errorMsg}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full py-3 px-4 rounded-xl bg-[var(--forest)] hover:bg-[var(--forest2)] text-white font-mono text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                                    >
                                        {submitting ? 'Opening Blueprint...' : 'Open 5-Invariant Blueprint →'}
                                    </button>
                                    <p className="text-[11px] text-[var(--muted)] text-center">
                                        Opens immediately on this page + emailed for your engineering team.
                                    </p>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-8 space-y-8 animate-in fade-in duration-300">
                            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0" />
                                    <div className="text-xs sm:text-sm text-emerald-950">
                                        <strong>Blueprint Accessed:</strong> The 5 deterministic runtime invariants and YAML policy manifest are now open below.
                                    </div>
                                </div>
                                <Link
                                    href="/schedule?source=exogram"
                                    className="px-4 py-2 rounded-lg bg-emerald-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition whitespace-nowrap"
                                >
                                    Book Boundary Audit ↗
                                </Link>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-serif font-bold text-[var(--ink)] flex items-center gap-2">
                                    <FileCode2 className="w-5 h-5 text-[var(--gold)]" />
                                    <span>The 5 Invariants for Enterprise Agent Deployments</span>
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {FIVE_INVARIANTS.map((inv) => (
                                        <div
                                            key={inv.id}
                                            className="p-5 rounded-2xl bg-[var(--paper)] border border-[var(--line)] space-y-2"
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="text-xs font-mono font-bold text-[var(--forest)] uppercase tracking-wider">
                                                    {inv.id} · {inv.title}
                                                </span>
                                                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white border border-[var(--line)] text-[var(--muted)]">
                                                    {inv.layer}
                                                </span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                                                <strong>Architectural Rule:</strong> {inv.rule}
                                            </p>
                                            <p className="text-xs text-emerald-900 font-medium">
                                                <strong>Production Failure Prevented:</strong> {inv.failurePrevented}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-serif font-bold text-[var(--ink)] flex items-center gap-2">
                                        <Terminal className="w-4 h-4 text-[var(--gold)]" />
                                        <span>Reference Policy-as-Code Manifest (exogram-policy.yaml)</span>
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={handleCopyManifest}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--paper)] hover:bg-[var(--paper2)] border border-[var(--line)] text-xs font-mono font-bold text-[var(--ink)] transition"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-3.5 h-3.5 text-emerald-700" />
                                                <span>Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3.5 h-3.5" />
                                                <span>Copy YAML</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                                <pre className="p-5 rounded-2xl bg-zinc-950 text-zinc-100 font-mono text-xs overflow-x-auto leading-relaxed border border-zinc-800">
                                    <code>{POLICY_MANIFEST_SNIPPET}</code>
                                </pre>
                            </div>

                            <div className="p-6 rounded-2xl bg-[var(--forest2)] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8c7a8]">
                                        Next Step · Custom VPC Topology Review
                                    </span>
                                    <h4 className="text-lg font-serif font-bold text-white">
                                        Need these boundaries wired into your live agent stack?
                                    </h4>
                                    <p className="text-xs text-zinc-300 max-w-xl">
                                        Schedule a 1-on-1 Architectural Boundary Audit with Richard Ewing or request live VPC sandbox credentials.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3 shrink-0">
                                    <Link
                                        href="/schedule?source=exogram"
                                        className="px-4 py-2.5 rounded-xl bg-[#b89249] hover:bg-[#c9a35a] text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition inline-flex items-center gap-1.5"
                                    >
                                        <span>Schedule Boundary Audit</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <Link
                                        href="/exogram/demo"
                                        className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition"
                                    >
                                        Request VPC Sandbox
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
