'use client';

import React, { useState } from 'react';
import { ShieldAlert, Server, Lock, AlertTriangle, ArrowRight, CheckCircle2, FileText, FileCheck } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';
import MCPSecurityExploitLab from '@/app/components/MCPSecurityExploitLab';
import ExecutiveBoardDeckModal from '@/app/components/ExecutiveBoardDeckModal';
import EnterpriseSOWModal from '@/app/components/EnterpriseSOWModal';

interface AuditQuestion {
    id: string;
    label: string;
    desc: string;
    riskWeight: number;
    category: 'Transport' | 'Tool Integrity' | 'Authorization' | 'Governance';
}

const AUDIT_QUESTIONS: AuditQuestion[] = [
    {
        id: 'raw-stdio',
        label: 'Raw STDIO Process Execution',
        desc: 'MCP servers are executed directly via local child process commands without isolated containerization or network sandboxing.',
        riskWeight: 25,
        category: 'Transport'
    },
    {
        id: 'unpinned-schemas',
        label: 'Dynamic Tool Manifest Mutation (No Pinning)',
        desc: 'Tool schemas are loaded dynamically at runtime without cryptographic hash verification, exposing agents to tool-poisoning rug pulls.',
        riskWeight: 20,
        category: 'Tool Integrity'
    },
    {
        id: 'shadow-mcp',
        label: 'Unmanaged Local MCP Servers (Shadow MCP)',
        desc: 'Developers configure community MCP packages in their local IDEs without central infosec inventory or vulnerability scanning.',
        riskWeight: 20,
        category: 'Governance'
    },
    {
        id: 'missing-hitl',
        label: 'Un-Gated Write Permissions (No HITL Approval)',
        desc: 'Agents can execute irreversible destructive actions (DB drops, file edits, API mutations) without explicit human confirmation gates.',
        riskWeight: 20,
        category: 'Authorization'
    },
    {
        id: 'no-prompt-sanitization',
        label: 'Unfiltered Tool Payloads (Indirect Prompt Injection)',
        desc: 'External data fetched via MCP tools is passed directly into model context without zero-trust XML/JSON boundary sanitization.',
        riskWeight: 15,
        category: 'Transport'
    }
];

export default function MCPAuditorTool() {
    const [showBoardModal, setShowBoardModal] = useState(false);
    const [showSowModal, setShowSowModal] = useState(false);
    const [checkedRisks, setCheckedRisks] = useState<Record<string, boolean>>({
        'raw-stdio': true,
        'unpinned-schemas': true,
        'shadow-mcp': true,
        'missing-hitl': false,
        'no-prompt-sanitization': true
    });

    const toggleRisk = (id: string) => {
        setCheckedRisks(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const totalRiskScore = Object.entries(checkedRisks).reduce((sum, [id, checked]) => {
        if (!checked) return sum;
        const q = AUDIT_QUESTIONS.find(item => item.id === id);
        return sum + (q ? q.riskWeight : 0);
    }, 0);

    let vulnerabilityTier = 'Critical Supply Chain Exposure';
    let tierColor = 'bg-rose-50 text-rose-800 border-rose-200';
    let recommendation = 'Immediate enforcement required: Disable raw STDIO transports and install an isolated MCP security gateway.';

    if (totalRiskScore < 25) {
        vulnerabilityTier = 'Hardened Zero-Trust Architecture';
        tierColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
        recommendation = 'Strong security posture. Ensure monthly manifest hash re-validation and SAST scanning.';
    } else if (totalRiskScore < 60) {
        vulnerabilityTier = 'Improved Lateral Movement Risk';
        tierColor = 'bg-amber-50 text-amber-800 border-amber-200';
        recommendation = 'Pin all tool schemas and restrict unmanaged community MCP servers to read-only environments.';
    }

    return (
        <ToolGate toolName="MCP Security Auditor">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-900 uppercase tracking-widest mb-3">
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                        OWASP MCP Top 10 &bull; Security Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        Model Context Protocol <span className="text-rose-600">Security Auditor</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Over 40 CVEs have emerged from unsanitized STDIO transports, dynamic tool poisoning, and Shadow MCP connections. Audit your infrastructure against the 2026 Zero-Trust MCP Standard.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Checklist */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                Evaluate Enterprise MCP Risk Factors
                            </h2>

                            <div className="space-y-4">
                                {AUDIT_QUESTIONS.map(q => {
                                    const isChecked = checkedRisks[q.id];
                                    return (
                                        <div
                                            key={q.id}
                                            onClick={() => toggleRisk(q.id)}
                                            className={'p-4 rounded-2xl border transition-all cursor-pointer ' + (
                                                isChecked
                                                    ? 'bg-rose-50/40 border-rose-300'
                                                    : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300'
                                            )}
                                        >
                                            <div className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => {}}
                                                    className="mt-1 w-4 h-4 rounded text-rose-600 focus:ring-rose-500 cursor-pointer accent-rose-600"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xs font-bold text-zinc-950 font-grotesk">{q.label}</span>
                                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-200 text-zinc-800 uppercase">
                                                            {q.category} &bull; +{q.riskWeight} pts
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{q.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Risk Output */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">
                                    Total MCP Threat Index
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <div className="text-5xl font-extrabold font-grotesk text-rose-600">{totalRiskScore}</div>
                                    <div className="text-xl font-mono font-bold text-zinc-400">/ 100</div>
                                </div>
                                <div className={'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 border ' + tierColor}>
                                    {vulnerabilityTier}
                                </div>
                            </div>

                            {/* Threat Breakdown */}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-300 space-y-2">
                                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                                    Forensic Remediation Directive
                                </div>
                                <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                                    {recommendation}
                                </p>
                            </div>

                            {/* Commercial Pathway */}
                            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
                                <div className="text-[10px] font-mono text-rose-900 font-bold uppercase tracking-wider">
                                    Exogram Boundary Mitigation
                                </div>
                                <p className="text-xs text-rose-900 leading-relaxed">
                                    Exogram establishes sub-millisecond proxy gateways for all MCP tool calls, enforcing manifest-only whitelists and zero-trust payload sanitization.
                                </p>
                            </div>

                            <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setShowBoardModal(true)}
                                        className="flex-1 py-2 px-3 rounded-xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition shadow flex items-center justify-center gap-1.5"
                                    >
                                        <FileText className="w-3.5 h-3.5 text-rose-400" />
                                        Board Deck Slip
                                    </button>
                                    <button
                                        onClick={() => setShowSowModal(true)}
                                        className="flex-1 py-2 px-3 rounded-xl bg-rose-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-rose-500 transition shadow flex items-center justify-center gap-1.5"
                                    >
                                        <FileCheck className="w-3.5 h-3.5" />
                                        SOW Proposal
                                    </button>
                                </div>
                                <div className="flex items-center justify-between pt-1">
                                    <Link
                                        href="/services"
                                        className="text-xs font-bold text-rose-700 hover:text-rose-900 hover:underline"
                                    >
                                        Book Threat Assessment &rarr;
                                    </Link>
                                    <ExportToPDFButton targetId="mcp-audit" fileName="mcp-security-audit.pdf" />
                                </div>
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs space-y-2">
                            <div className="font-bold text-rose-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Link
                            </div>
                            <p className="text-rose-900 leading-relaxed">
                                Maps to <Link href="/framework/security" className="underline font-bold">Security &amp; Shadow AI</Link> and supports curriculum track <Link href="/vault/curriculum/tracks" className="underline font-bold">Track 21: AI Agent Governance &amp; Trust Infrastructure</Link>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Interactive Exploit Simulation Lab */}
                <div className="mt-12">
                    <MCPSecurityExploitLab />
                </div>

                <div className="mt-12">
                    <DiagnosticCTA />
                </div>

                <ExecutiveBoardDeckModal
                    isOpen={showBoardModal}
                    onClose={() => setShowBoardModal(false)}
                    toolName="MCP Security & Privilege Escalation Audit"
                    toolSlug="mcp-security-auditor"
                    score={Math.max(0, 100 - totalRiskScore)}
                    scoreLabel={totalRiskScore > 50 ? 'Critical Lateral Movement Risk' : 'Zero-Trust Hardened'}
                    metrics={[
                        { label: 'Total Threat Index', value: `${totalRiskScore} / 100`, isNegative: totalRiskScore > 50, subtext: 'OWASP MCP Risk Exposure' },
                        { label: 'Identified Vulnerabilities', value: `${Object.values(checkedRisks).filter(Boolean).length} Active Flags`, isNegative: true },
                        { label: 'Unchecked Permission Blast', value: checkedRisks['missing-hitl'] ? 'High / Unrestricted' : 'Constrained', isNegative: checkedRisks['missing-hitl'] },
                        { label: 'Dynamic Schema Pinning', value: checkedRisks['unpinned-schemas'] ? 'Vulnerable to Rug Pull' : 'Pinned & Hashed', isNegative: checkedRisks['unpinned-schemas'] },
                        { label: 'Subprocess Transport Mode', value: checkedRisks['raw-stdio'] ? 'Raw STDIO (Direct Shell)' : 'Sandboxed Gateway', isNegative: checkedRisks['raw-stdio'] },
                        { label: 'Exogram Admissibility Layer', value: '0.07ms Pre-Commit Gate' }
                    ]}
                    executiveSummary={[
                        `The audit identifies a composite MCP threat index of ${totalRiskScore}/100, categorized as ${vulnerabilityTier}.`,
                        `Current agent environments dispatch tool commands over raw STDIO without isolated process sandboxing or static schema pinning.`,
                        `Autonomous agents operating without deterministic human-in-the-loop gates present immediate privilege escalation and credential exfiltration liability.`
                    ]}
                    remediationPlaybook={[
                        {
                            step: '01',
                            title: 'Isolate MCP Transports via Dedicated Gateway',
                            directive: 'Terminate raw STDIO process execution on host developer laptops and build machines.',
                            actionItem: 'Deploy an isolated network-sandboxed MCP proxy to inspect tool payloads before execution.'
                        },
                        {
                            step: '02',
                            title: 'Enforce Cryptographic Schema Pinning',
                            directive: 'Prohibit dynamic runtime tool list mutations without explicit workspace policy re-hash.',
                            actionItem: 'Pin tool schemas into git-tracked policy manifests and reject unauthorized runtime tool definitions.'
                        },
                        {
                            step: '03',
                            title: 'Deploy Sub-Millisecond Action Admissibility',
                            directive: 'Enforce dual-nonce execution validation on all external context chunks before model tool invocation.',
                            actionItem: 'Deploy Exogram pre-commit gatekeeper to trip circuit breakers upon indirect prompt injection detection.'
                        }
                    ]}
                    remediationTrack={{
                        trackNumber: 21,
                        title: 'AI Agent Governance & Trust Infrastructure',
                        href: '/vault/curriculum/tracks/track-21'
                    }}
                    blueprint={{
                        title: 'Deterministic MCP Execution Gateway & Payload Filter',
                        href: '/vault/blueprints'
                    }}
                    roleContext="CISO"
                />

                <EnterpriseSOWModal
                    isOpen={showSowModal}
                    onClose={() => setShowSowModal(false)}
                    clientName="Enterprise Security Team"
                    annualWaste={totalRiskScore * 18500}
                    pdiScore={Math.max(0, 100 - totalRiskScore)}
                    grossMargin={totalRiskScore > 50 ? 32 : 68}
                    arrPerEngineer={195000}
                    insolvencyHorizon="Q2 2027"
                    recommendedRemediation={[
                        'Deploy sub-millisecond MCP proxy gateway to terminate un-sandboxed STDIO socket connections.',
                        'Institute cryptographic manifest pinning to block dynamic tool injection and permission escalation.',
                        'Enforce dual-signature human confirmation tokens for all database and filesystem mutating tools.'
                    ]}
                />
            </div>
        </ToolGate>
    );
}
