import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Runtime Architecture Diagrams | Governance Visual Library | Richard Ewing',
    description: 'Visual architecture library for agentic runtime governance. Mermaid diagrams mapping runtime compilation, bounded cognition, retry inflation, MCP containment, and orchestration collapse patterns.',
    keywords: ['runtime architecture diagrams', 'AI agent governance diagrams', 'bounded cognition diagram', 'retry inflation flow', 'MCP containment architecture', 'orchestration collapse pattern'],
    openGraph: {
        title: 'Runtime Architecture Diagrams — Governance Visual Library',
        description: '10 architectural diagrams mapping the failure modes and governance containment patterns for AI coding agents.',
    },
    alternates: { canonical: 'https://richardewing.io/diagrams' },
};

const diagrams = [
    {
        id: 1,
        title: 'Runtime Compilation Pipeline',
        description: 'How Exogram compiles Identity + Skill + Tool + Environment into a constrained execution payload. This is the core compilation sequence that converts governance policy into deterministic runtime behavior.',
        skill: 'Runtime Governance',
        skillSlug: 'runtime-governance',
        color: 'cyan',
        mermaid: `graph LR
    A[Trigger Detection] --> B[Skill Resolution]
    B --> C[Tool Authorization]
    C --> D[Context Assembly]
    D --> E[Runtime Compilation]
    E --> F[Constrained Execution]
    F --> G[State Mutation]
    
    subgraph Identity
        A
    end
    subgraph Skill
        B
    end
    subgraph Tool
        C
    end
    subgraph Environment
        D
        G
    end
    subgraph Runtime
        E
        F
    end`,
    },
    {
        id: 2,
        title: 'Bounded Cognition Engine',
        description: 'How context window utilization is monitored and compressed to prevent semantic contamination. When utilization exceeds 65%, checkpoint rotation activates. At 85%, mandatory semantic reset fires.',
        skill: 'Context Rot Prevention',
        skillSlug: 'context-rot-prevention',
        color: 'blue',
        mermaid: `graph TD
    A[Session Start] --> B{Context Utilization}
    B -->|< 65%| C[Normal Execution]
    B -->|65-85%| D[WARNING: Checkpoint Rotation]
    B -->|> 85%| E[CRITICAL: Semantic Reset]
    C --> F{Patch Chain Depth}
    F -->|< 3| C
    F -->|>= 3| G[HALT: Recursive Patch Detected]
    D --> H[Prune Stale Context]
    H --> I[Preserve Architecture State]
    I --> C
    E --> J[Emergency Context Purge]
    J --> K[Reload Core Instructions]
    K --> C`,
    },
    {
        id: 3,
        title: 'Retry Inflation Cascade',
        description: 'The exponential cost escalation when an agent enters a retry loop. Each retry consumes more tokens as the context fills with failed attempts, creating a compounding burn that can reach $1,100+ in a single session.',
        skill: 'Retry Inflation Control',
        skillSlug: 'retry-inflation-control',
        color: 'rose',
        mermaid: `graph TD
    A[Initial Task] --> B[First Attempt Fails]
    B --> C[Retry 1: Context +15%]
    C --> D[Retry 2: Context +30%]
    D --> E[Retry 3: Context +50%]
    E --> F[Context Window Full]
    F --> G[Agent Restarts Session]
    G --> H[Lost All Progress]
    H --> I[Retry Loop Restarts]
    I --> J["Cost: $25 → $50 → $150 → $500+"]
    
    B -.->|With Governance| K[Retry Burn Engine]
    K --> L[Halt at Retry 3]
    L --> M[Human Escalation]
    M --> N["Cost Contained: $25"]`,
    },
    {
        id: 4,
        title: 'MCP Containment Architecture',
        description: 'How Model Context Protocol tool access is governed. Without containment, MCP servers have unrestricted access to file systems, credentials, and external endpoints. The governance layer enforces capability manifests, context isolation, and supply chain verification.',
        skill: 'MCP Governance',
        skillSlug: 'mcp-governance',
        color: 'red',
        mermaid: `graph TD
    A[MCP Tool Request] --> B{Capability Manifest Check}
    B -->|Not in Manifest| C[BLOCK: Unregistered Tool]
    B -->|In Manifest| D{Context Isolation Check}
    D -->|Sensitive Files| E[BLOCK: Protected Path]
    D -->|Safe Scope| F{Supply Chain Verification}
    F -->|Unknown Server| G[BLOCK: Unverified Server]
    F -->|Verified| H[Execute with Audit Trail]
    H --> I[Log Tool Invocation]
    
    subgraph Blocked Actions
        C
        E
        G
    end`,
    },
    {
        id: 5,
        title: 'Environment Isolation Model',
        description: 'How agent execution environments are sandboxed. Each agent session receives a constrained environment slice — not the entire file system. Write permissions are scoped, destructive commands require approval, and sensitive paths are masked.',
        skill: 'Autonomous Execution Safety',
        skillSlug: 'autonomous-execution-safety',
        color: 'emerald',
        mermaid: `graph TD
    A[Agent Session Start] --> B[Load Environment Manifest]
    B --> C[Scope File Access]
    C --> D{Write Request}
    D -->|Allowed Path| E[Execute Write]
    D -->|Restricted Path| F[Request Approval]
    D -->|Blocked Path| G[DENY]
    F -->|Approved| E
    F -->|Denied| G
    E --> H[Audit Trail Entry]
    
    subgraph Allowed
        E
        H
    end
    subgraph Gated
        F
    end
    subgraph Blocked
        G
    end`,
    },
    {
        id: 6,
        title: 'Rollback Topology',
        description: 'How governance systems create rollback points before every agent mutation. If an execution violates policy or produces unexpected results, the system can revert to the last known-good state automatically.',
        skill: 'Repository Drift Prevention',
        skillSlug: 'repository-drift-prevention',
        color: 'amber',
        mermaid: `graph LR
    A[Pre-Execution Snapshot] --> B[Agent Executes]
    B --> C{Validation Check}
    C -->|Pass| D[Commit Changes]
    C -->|Fail| E[Automatic Rollback]
    E --> F[Restore Snapshot]
    F --> G[Log Failure Reason]
    G --> H[Human Review]
    D --> I[Update Known-Good State]
    I --> J[Next Execution Cycle]`,
    },
    {
        id: 7,
        title: 'Orchestration Collapse Pattern',
        description: 'How multi-agent workflows degrade into infinite loops, agreement cascades, and recursive deadlocks. Without governance, agents agree with each other indefinitely without performing actual work, burning compute at scale.',
        skill: 'Orchestration Entropy',
        skillSlug: 'orchestration-entropy',
        color: 'purple',
        mermaid: `graph TD
    A[Orchestrator Assigns Task] --> B[Agent 1 Responds]
    B --> C[Agent 2 Validates]
    C --> D[Agent 3 Confirms]
    D --> E{Agreement Loop Detection}
    E -->|No Tool Invocations| F[HALT: Agreement Loop]
    E -->|Actual Work Done| G[Continue Workflow]
    
    B --> H{Turn Limit Check}
    H -->|> 10 turns| I[HALT: Turn Limit]
    H -->|< 10 turns| C
    
    F --> J[Escalate to Human]
    I --> J`,
    },
    {
        id: 8,
        title: 'Tool Permission Chain',
        description: 'The authorization flow for every tool invocation. Each command must pass through a permission chain: is the tool registered? Is the scope valid? Is the action destructive? Does it require approval? Only authorized, scoped, non-destructive commands execute automatically.',
        skill: 'Tool Permission Governance',
        skillSlug: 'tool-permission-governance',
        color: 'zinc',
        mermaid: `graph TD
    A[Tool Invocation] --> B{Registered in Manifest?}
    B -->|No| C[BLOCK]
    B -->|Yes| D{Scope Valid?}
    D -->|Out of Scope| C
    D -->|In Scope| E{Destructive?}
    E -->|Yes| F{Human Approval?}
    F -->|Denied| C
    F -->|Approved| G[Execute + Audit]
    E -->|No| G
    G --> H[Log Result]`,
    },
    {
        id: 9,
        title: 'Context Poisoning Flow',
        description: 'How stale assumptions, failed attempts, and correction history accumulate in the context window until they crowd out valid architectural state. This is the root cause of "Claude getting worse over time" — the context literally poisons itself.',
        skill: 'Context Window Compression',
        skillSlug: 'context-window-compression',
        color: 'orange',
        mermaid: `graph TD
    A["Session Start: 100% Clean Context"] --> B["Hour 1: Architecture + Task"]
    B --> C["Hour 2: + Failed Attempts"]
    C --> D["Hour 3: + Corrections + Patches"]
    D --> E["Hour 4: Context Full"]
    E --> F["Original Instructions Lost"]
    F --> G["Agent Contradicts Own Architecture"]
    G --> H["Recursive Patch Loop"]
    H --> I["Session Abandoned"]
    
    C -.->|With Governance| J["Checkpoint: Prune Failed Attempts"]
    J --> K["Architecture State Preserved"]
    K --> L["Clean Continuation"]`,
    },
    {
        id: 10,
        title: 'Verification Cascade',
        description: 'The human review bottleneck created when AI generation volume exceeds review capacity. Without governance, engineers begin rubber-stamping PRs, allowing bugs to reach production. The governance layer throttles generation and routes low-confidence outputs to deep review.',
        skill: 'Verification Burden Collapse',
        skillSlug: 'verification-burden-collapse',
        color: 'teal',
        mermaid: `graph TD
    A[AI Generates Code] --> B{Confidence Score}
    B -->|High > 90%| C[Auto-Approve + Log]
    B -->|Medium 70-90%| D[Standard Review]
    B -->|Low < 70%| E[Deep Review Required]
    
    D --> F{Queue Depth}
    F -->|< 8 PRs| D
    F -->|> 8 PRs| G[Throttle AI Generation]
    G --> H[Alert: Review Capacity Exceeded]
    
    E --> I{Review Timer}
    I -->|< 2 min| J[FLAG: Rubber Stamp Detected]
    I -->|> 5 min| K[Legitimate Review]`,
    },
];

const colorMap: Record<string, { bg: string; border: string; text: string; accent: string }> = {
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', accent: 'bg-cyan-100' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', accent: 'bg-blue-100' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', accent: 'bg-rose-100' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', accent: 'bg-red-100' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', accent: 'bg-emerald-100' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', accent: 'bg-amber-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', accent: 'bg-purple-100' },
    zinc: { bg: 'bg-zinc-50', border: 'border-zinc-200', text: 'text-zinc-700', accent: 'bg-zinc-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', accent: 'bg-orange-100' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', accent: 'bg-teal-100' },
};

export default function DiagramsPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 font-mono text-sm tracking-widest font-bold uppercase">
                        Visual Architecture Library
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Runtime Governance Diagrams
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
                        10 architectural diagrams mapping the failure modes, containment patterns, and governance flows
                        for deterministic agentic execution. Each diagram maps to a deployable governance module.
                    </p>
                </div>

                <div className="space-y-10">
                    {diagrams.map((d) => {
                        const c = colorMap[d.color] || colorMap.cyan;
                        return (
                            <div key={d.id} className={`bg-white rounded-2xl border ${c.border} shadow-sm overflow-hidden`}>
                                <div className={`${c.bg} p-6 border-b ${c.border}`}>
                                    <div className="flex items-start justify-between gap-4 flex-wrap">
                                        <div>
                                            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${c.text}`}>
                                                Diagram {d.id} of 10
                                            </span>
                                            <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mt-1">{d.title}</h2>
                                        </div>
                                        <Link
                                            href={`/skills/${d.skillSlug}`}
                                            className={`px-3 py-1.5 ${c.accent} rounded-full text-xs font-mono font-bold uppercase tracking-widest ${c.text} hover:opacity-80 transition-opacity`}
                                        >
                                            {d.skill} →
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-[#4A4A4A] leading-relaxed mb-6">{d.description}</p>
                                    <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 overflow-x-auto">
                                        <pre className="text-sm text-[#3A3A3A] font-mono whitespace-pre leading-relaxed">{d.mermaid}</pre>
                                    </div>
                                    <p className="text-xs text-zinc-500 mt-3 italic">
                                        Copy the Mermaid code above into any Mermaid renderer (mermaid.live, GitHub, Notion) to visualize.
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-16 p-10 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm text-center">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">Deploy the Governance Behind These Diagrams</h2>
                    <p className="text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
                        Each diagram maps to a deployable runtime infrastructure module with TypeScript middleware,
                        YAML policy manifests, and operational tooling.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                            View All 15 Runtime Modules →
                        </Link>
                        <Link href="/runtime-architecture" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                            Read the Architecture Doctrine
                        </Link>
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    runtime architecture diagrams, AI governance visual library, bounded cognition diagram, retry inflation flow, MCP containment diagram, orchestration collapse, context poisoning flow, verification cascade, tool permission chain, rollback topology, environment isolation, runtime compilation pipeline
                </div>

                <div className="mt-8 text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">
                        ← Return to Infrastructure Catalog
                    </Link>
                </div>
            </div>
        </main>
    );
}
