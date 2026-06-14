import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Lock } from 'lucide-react';
import ExogramBridge from '@/components/ExogramBridge';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why MCP Is a Security Risk | Agent Governance',
    description: 'Model Context Protocol gives AI agents unrestricted tool access. The security implications, attack vectors, and governance controls you need.',
    keywords: ['MCP dangerous', 'MCP security risk', 'Model Context Protocol security', 'MCP credential leak', 'MCP confused deputy', 'MCP tool poisoning', 'MCP over-permissioning', 'Claude Code MCP risk', 'MCP supply chain attack', 'AI agent security', 'MCP governance'],
    openGraph: {
        title: 'Why MCP Is Dangerous — Model Context Protocol Security',
        description: 'Security analysis of MCP risks and the governance infrastructure needed to contain them.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/why-mcp-is-dangerous' },
};

const risks = [
    {
        title: 'Credential Exposure',
        severity: 'CRITICAL',
        desc: 'MCP servers can request file system access and read .env files containing API keys, database credentials, and authentication tokens. No default isolation exists.',
        example: 'Documented: AWS access keys, Stripe API keys, and database credentials exposed to an unverified third-party MCP server in under 60 seconds.',
        color: 'bg-rose-50 border-rose-200',
    },
    {
        title: 'Supply Chain Attacks',
        severity: 'CRITICAL',
        desc: 'MCP servers are installed from npm or GitHub with no capability manifest validation. A malicious server package can silently exfiltrate data or inject code.',
        example: 'Any npm package with an MCP interface can request arbitrary tool access. No registry of verified MCP servers exists.',
        color: 'bg-rose-50 border-rose-200',
    },
    {
        title: 'Context Injection & Tool Poisoning',
        severity: 'HIGH',
        desc: 'MCP tools can inject content into the agent\'s context window through tool poisoning — hiding malicious instructions in tool descriptions or return values. This can override system prompts and bias model behavior.',
        example: 'A tool server returning carefully crafted content can influence the agent\'s subsequent reasoning and code generation. This is the MCP equivalent of prompt injection.',
        color: 'bg-orange-50 border-orange-200',
    },
    {
        title: 'Confused Deputy & Over-Permissioning',
        severity: 'HIGH',
        desc: 'The confused deputy problem: MCP servers perform actions with their own (often elevated) privileges rather than the user\'s. Combined with default over-permissioning, agents get far more access than any task requires.',
        example: 'An MCP server with database access can execute arbitrary queries using its own credentials, bypassing the user\'s permission scope entirely.',
        color: 'bg-orange-50 border-orange-200',
    },
    {
        title: 'Unrestricted File Access',
        severity: 'HIGH',
        desc: 'MCP tools that request filesystem access receive broad permissions. No default file-guard restricts which directories or files can be read or written.',
        example: 'An MCP server with filesystem access can read source code, configuration files, deployment scripts, and CI/CD secrets.',
        color: 'bg-orange-50 border-orange-200',
    },
    {
        title: 'No Audit Trail',
        severity: 'MEDIUM',
        desc: 'MCP tool invocations are not comprehensively logged by default. Organizations cannot track what data was accessed, when, or by which server.',
        example: 'After a credential leak, there may be no audit trail to determine which MCP server accessed which files.',
        color: 'bg-yellow-50 border-yellow-200',
    },
];

const severityColors: Record<string, string> = {
    CRITICAL: 'bg-rose-100 text-rose-700',
    HIGH: 'bg-orange-100 text-orange-700',
    MEDIUM: 'bg-yellow-100 text-yellow-700',
};

export default function WhyMCPIsDangerousPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-red-200 bg-red-50 text-red-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Lock size={14} /> Security Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Why MCP Is Dangerous
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        The Model Context Protocol connects AI agents to external tools.
                        Without governance, it&apos;s an open door to credential exposure, supply chain attacks, and data exfiltration.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">What MCP Is</h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        MCP (Model Context Protocol) is a standard that connects AI coding agents to external tools and data sources — databases, file systems, APIs, search engines, and more. It&apos;s powerful. It&apos;s also ungoverned by default.
                    </p>
                    <p className="text-[#4A4A4A] leading-relaxed">
                        When you connect a Claude Code session to an MCP server, you&apos;re granting that server access to your agent&apos;s execution context. Without capability manifests, context isolation, or supply chain verification, <strong>any MCP server can access anything the agent can access</strong>.
                    </p>
                </div>

                <div className="space-y-4 mb-8">
                    {risks.map((risk, i) => (
                        <div key={i} className={`rounded-2xl border p-6 ${risk.color}`}>
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="text-lg font-grotesk font-bold text-[#1A1A1A]">{risk.title}</h3>
                                <span className={`px-2 py-1 rounded text-xs font-bold ${severityColors[risk.severity]}`}>{risk.severity}</span>
                            </div>
                            <p className="text-sm text-[#3A3A3A] leading-relaxed mb-3">{risk.desc}</p>
                            <div className="p-3 bg-white/60 rounded-lg">
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Real-world example</span>
                                <p className="text-sm text-[#4A4A4A] mt-1">{risk.example}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-emerald-900 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5" /> MCP Governance Containment
                    </h2>
                    <ul className="space-y-3 text-emerald-800 text-sm">
                        <li><strong>Capability Manifests</strong> — every MCP server must declare what it needs access to before connection</li>
                        <li><strong>File Guards</strong> — block access to .env, credentials, and sensitive configuration paths</li>
                        <li><strong>Context Isolation</strong> — MCP tool outputs are sandboxed, preventing context injection</li>
                        <li><strong>Supply Chain Verification</strong> — verify server packages against a trusted registry before installation</li>
                        <li><strong>Audit Trail</strong> — log every MCP tool invocation with timestamp, server ID, and data accessed</li>
                        <li><strong>Scope Restriction</strong> — limit MCP access to project-specific directories only</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/skills/mcp-governance" className="px-8 py-4 bg-[#1A1A1A] text-zinc-900 font-bold rounded hover:bg-zinc-100 transition-colors">
                        Deploy MCP Governance →
                    </Link>
                    <Link href="/case-studies/runtime-incidents" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                        Read the MCP Credential Leak Incident
                    </Link>
                </div>

                <div className="mt-12 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'Should I stop using MCP entirely?', a: 'No. MCP is powerful infrastructure. But it needs governance. The solution is not to avoid MCP — it\'s to govern MCP access the same way you govern API access: with scoping, verification, and audit trails.' },
                            { q: 'What is a confused deputy attack in MCP?', a: 'A confused deputy attack occurs when an MCP server performs actions using its own elevated privileges rather than the user\'s. Without least-privilege enforcement, the server can access databases, APIs, and files that the user never authorized. This is the most common form of MCP over-permissioning.' },
                            { q: 'What is MCP tool poisoning?', a: 'Tool poisoning is when malicious instructions are hidden in MCP tool descriptions or response data. When the AI agent reads these descriptions, the hidden instructions override system prompts and redirect agent behavior — essentially an MCP-specific form of prompt injection.' },
                            { q: 'Does Anthropic provide MCP security?', a: 'Anthropic provides the MCP protocol and some basic permission prompts. But there are no capability manifests, no file guards, no supply chain verification, and no comprehensive audit trails built into the default experience.' },
                            { q: 'How quickly can credentials be exposed?', a: 'In documented incidents, credential exposure happened in under 60 seconds after MCP server connection. The server requested filesystem access, read .env, and the credentials were exposed with no warning.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">
                <AdvisoryCTA variant="compare" />

                <ExogramBridge />

                ← Return to Infrastructure Catalog</Link>
                </div>
            </div>
        </main>
    );
}
