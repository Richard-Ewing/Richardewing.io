import { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { ShieldCheck, Cpu, Wrench, Globe, Layers, ArrowRight, Zap, Target, AlertTriangle } from 'lucide-react';
import ExecutiveSummaryBox from '../components/ExecutiveSummaryBox';

export const metadata: Metadata = {
    title: 'Agentic Runtime Architecture | 4-Layer Formula',
    description: 'The 4-layer agentic runtime: input validation, execution boundaries, output verification, and cost circuit breakers. Stop AI agent chaos.',
    keywords: [
        'agent runtime architecture', 'Claude Code runtime', 'agentic runtime infrastructure',
        'runtime cognition architecture', 'constrained execution', 'bounded cognition',
        'identity governance', 'tool governance', 'environment governance', 'skill governance',
        'runtime compiler', 'deterministic AI execution', 'agent state mutation',
        'semantic operating terrain', 'cognitive modularity', 'runtime compilation',
        'Claude skills architecture', 'Cursor governance', 'Windsurf runtime',
        'AI coding agent control', 'MCP governance', 'agent safety'
    ],
    openGraph: {
        title: 'The 4-Layer Agent Runtime Architecture',
        description: 'Identity × Skill × Tool × Environment — the canonical runtime model for deterministic agentic execution.',
        url: 'https://www.richardewing.io/runtime-architecture',
    },
    alternates: {
        canonical: 'https://www.richardewing.io/runtime-architecture',
    }
};

const layers = [
    {
        icon: ShieldCheck,
        name: 'Identity Layer',
        purpose: 'Govern Cognition',
        color: 'violet',
        description: 'Defines the agent\'s mission, principles, heuristics, risk tolerance, escalation logic, and failure boundaries. Without identity governance, the agent has no operational constraints — it will hallucinate freely, fabricate state, and exceed authority.',
        governs: ['Mission & principles', 'Risk tolerance', 'Escalation logic', 'Communication style', 'Failure boundaries'],
        systems: ['Deterministic Agentic Engineering', 'Autonomous Execution Safety', 'Agentic Change Management'],
        riskWithout: 'Agent operates without constraints. System prompt instructions are ignored under pressure. Authority boundaries are theoretical.',
    },
    {
        icon: Cpu,
        name: 'Skill Layer',
        purpose: 'Govern Procedures',
        color: 'cyan',
        description: 'Skills are executable workflows — not prompts. They define procedural cognition: how the agent reasons through specific operational tasks with structured inputs, required context, authorized tools, and output contracts.',
        governs: ['Executable workflows', 'Procedural cognition', 'Required context', 'Output contracts', 'Trigger conditions'],
        systems: ['Context Rot Prevention', 'Retry Inflation Control', 'Orchestration Entropy', 'Verification Burden Collapse', 'Hallucination Debt Reduction'],
        riskWithout: 'Agent enters recursive patch loops. Context degrades silently. Retry chains burn unlimited tokens. Multi-agent systems collapse into agreement loops.',
    },
    {
        icon: Wrench,
        name: 'Tool Layer',
        purpose: 'Govern Actuation',
        color: 'rose',
        description: 'Tools are controlled reality interfaces — not capabilities embedded in skills. They define what the agent can touch: permissions, execution boundaries, schemas, APIs, retries, rate limits, side effects, and transactional safety.',
        governs: ['Permissions & boundaries', 'API access control', 'Side effect containment', 'Transactional safety', 'Rate limiting'],
        systems: ['Runtime Governance', 'MCP Governance', 'Tool Permission Governance'],
        riskWithout: 'Agent reads .env files containing AWS keys. Executes rm -rf. Installs malicious packages. Capability escalation through tool chaining.',
    },
    {
        icon: Globe,
        name: 'Environment Layer',
        purpose: 'Govern Semantic Terrain',
        color: 'emerald',
        description: 'The environment is the persistent semantic world state — memory, relationships, projects, active state, ontology, and unresolved workflows. The agent inhabits it. Without governance, environments mutate unpredictably.',
        governs: ['Repository state', 'Context windows', 'Financial budgets', 'Memory continuity', 'Active project state'],
        systems: ['Repository Drift Prevention', 'Context Window Compression', 'AI Cost Containment', 'AI Engineering Economics'],
        riskWithout: 'Repository diverges from agent\'s model. Context windows overflow. API costs explode. Ghost dependencies reach production.',
    }
];

const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
    violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', accent: 'text-violet-600' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', accent: 'text-cyan-600' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', accent: 'text-rose-600' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', accent: 'text-emerald-600' },
};

export default function RuntimeArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* HERO */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Layers size={14} /> Canonical Doctrine
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-[#1A1A1A] tracking-tight mb-6 leading-tight">
                        The 4-Layer Agent<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600">Runtime Architecture</span>
                    </h1>
                    <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed font-medium mb-8">
                        Why agentic systems fail — and the compositional runtime model that prevents it. 
                        Identity × Skill × Tool × Environment, compiled into deterministic execution.
                    </p>
                    <p className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest">
                        Designed for Claude Code • Cursor • Windsurf • Cline • Roo Code • Codex • Antigravity
                    </p>
                </div>

                <ExecutiveSummaryBox
                    whatBreaks="AI agents with 78% excessive permissions and zero verification"
                    whatItCosts="Full data exfiltration via prompt injection (CVE-2025-32711)"
                    whatCausesIt="Probabilistic outputs treated as deterministic inputs"
                    whatFixesIt={{ label: 'Exogram Trust Layer', href: '/exogram' }}
                />

                {/* THE FORMULA */}
                <div className="mb-20 p-8 bg-[#1A1A1A] rounded-2xl text-zinc-900 shadow-xl">
                    <h2 className="text-2xl font-grotesk font-bold mb-6 text-center">The Runtime Cognition Formula</h2>
                    <div className="font-mono text-sm sm:text-base leading-relaxed text-center text-zinc-700 space-y-1">
                        <p className="text-cyan-400 font-bold">Agent Runtime Intelligence =</p>
                        <p>( Identity Layer × Skill Layer × Tool Layer × Environment Layer )</p>
                        <p>→ <span className="text-violet-400 font-bold">Runtime Compiler</span></p>
                        <p>→ <span className="text-emerald-400 font-bold">Constrained Execution</span></p>
                        <p>→ <span className="text-rose-400 font-bold">State Mutation</span></p>
                    </div>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest text-center mt-6">
                        This is the actual architecture. Not prompts. Not workflows. Runtime infrastructure.
                    </p>
                </div>

                {/* WHY AGENTS FAIL */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-grotesk font-bold text-[#1A1A1A] mb-4">Why Agentic Systems Fail</h2>
                        <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                            Not because &ldquo;LLMs hallucinate.&rdquo; Not because &ldquo;AI is imperfect.&rdquo; 
                            They fail because runtime boundaries are absent.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { failure: 'Identity boundaries collapse', result: 'Agent exceeds authority, ignores rules' },
                            { failure: 'Skill recursion becomes unstable', result: 'Infinite retry loops, patch chains' },
                            { failure: 'Tool permissions leak', result: 'Data exfiltration, credential exposure' },
                            { failure: 'Environments mutate unpredictably', result: 'Repository drift, ghost dependencies' },
                            { failure: 'State continuity corrupts', result: 'Context rot, instruction amnesia' },
                            { failure: 'Runtime compilation is absent', result: 'No orchestration, no containment' },
                        ].map((item, i) => (
                            <div key={i} className="p-5 bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <div className="flex items-start gap-2 mb-2">
                                    <AlertTriangle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm font-bold text-rose-700">{item.failure}</span>
                                </div>
                                <p className="text-sm text-[#4A4A4A] ml-6">{item.result}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* THE 4 LAYERS */}
                <div className="mb-20">
                    <h2 className="text-3xl font-grotesk font-bold text-[#1A1A1A] mb-10 text-center">The 4 Runtime Governance Layers</h2>
                    <div className="space-y-8">
                        {layers.map((layer, i) => {
                            const colors = colorMap[layer.color];
                            const Icon = layer.icon;
                            return (
                                <div key={i} className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm overflow-hidden">
                                    <div className={`${colors.bg} p-6 border-b ${colors.border}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                                                <Icon className={`w-6 h-6 ${colors.accent}`} />
                                            </div>
                                            <div>
                                                <div className={`text-xs font-mono font-bold uppercase tracking-widest ${colors.text} mb-1`}>
                                                    Layer {i + 1}
                                                </div>
                                                <h3 className="text-2xl font-grotesk font-bold text-[#1A1A1A]">{layer.name}</h3>
                                            </div>
                                            <div className={`ml-auto px-3 py-1 ${colors.bg} border ${colors.border} rounded-full`}>
                                                <span className={`text-xs font-mono font-bold uppercase tracking-widest ${colors.text}`}>
                                                    {layer.purpose}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-[#4A4A4A] mb-6 leading-relaxed font-medium">{layer.description}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div>
                                                <span className={`block text-xs font-bold uppercase tracking-widest ${colors.text} mb-3 border-b ${colors.border} pb-1`}>
                                                    Governs
                                                </span>
                                                <ul className="space-y-1">
                                                    {layer.governs.map((g, j) => (
                                                        <li key={j} className="flex items-center gap-2 text-sm text-[#3A3A3A] font-medium">
                                                            <span className={colors.accent}>•</span> {g}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3 border-b border-cyan-100 pb-1">
                                                    Governance Systems
                                                </span>
                                                <ul className="space-y-1">
                                                    {layer.systems.map((s, j) => (
                                                        <li key={j} className="flex items-center gap-2 text-sm text-[#3A3A3A] font-mono font-bold">
                                                            <span className="text-cyan-600">+</span> {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold uppercase tracking-widest text-rose-700 mb-3 border-b border-rose-100 pb-1">
                                                    Risk Without Governance
                                                </span>
                                                <p className="text-sm text-rose-700 font-medium italic">{layer.riskWithout}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RUNTIME COMPILATION FLOW */}
                <div className="mb-20 p-8 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6 text-center">Runtime Compilation Flow</h2>
                    <div className="space-y-4 max-w-2xl mx-auto">
                        {[
                            { step: '1', title: 'Trigger Detection', desc: 'Cheap routing. No LLM. Classify the incoming request.', color: 'bg-zinc-100 text-zinc-700' },
                            { step: '2', title: 'Skill Resolution', desc: 'Read skill metadata. Determine required context, authorized tools, output schema.', color: 'bg-cyan-50 text-cyan-700' },
                            { step: '3', title: 'Tool Authorization', desc: 'Load ONLY approved tools. Enforce least-privilege access.', color: 'bg-rose-50 text-rose-700' },
                            { step: '4', title: 'Context Assembly', desc: 'Inject identity + active state + environment slice + episodic memory. NOT the entire environment.', color: 'bg-emerald-50 text-emerald-700' },
                            { step: '5', title: 'Runtime Compilation', desc: 'Assemble immutable, constrained payload.', color: 'bg-violet-50 text-violet-700' },
                            { step: '6', title: 'Constrained Execution', desc: 'LLM performs bounded reasoning within deterministic guardrails.', color: 'bg-amber-50 text-amber-700' },
                            { step: '7', title: 'State Mutation', desc: 'Update memory, environment, and active state. This creates continuity safely.', color: 'bg-white text-zinc-900' },
                        ].map((item, i) => (
                            <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${item.color}`}>
                                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-zinc-900 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-sm opacity-80">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* KEY DISTINCTION */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-cyan-200 shadow-sm">
                        <h3 className="text-lg font-bold text-cyan-700 mb-4 uppercase tracking-widest text-sm">Skills Define</h3>
                        <p className="text-3xl font-grotesk font-bold text-[#1A1A1A] mb-2">HOW to think</p>
                        <p className="text-[#4A4A4A]">Procedural cognition. Executable workflows. Reasoning artifacts.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-rose-200 shadow-sm">
                        <h3 className="text-lg font-bold text-rose-700 mb-4 uppercase tracking-widest text-sm">Tools Define</h3>
                        <p className="text-3xl font-grotesk font-bold text-[#1A1A1A] mb-2">WHAT can be touched</p>
                        <p className="text-[#4A4A4A]">Controlled reality interfaces. Permissions. Side effects. APIs.</p>
                    </div>
                </div>

                {/* CTA - DEPLOY */}
                <div className="mb-16 p-10 bg-[#1A1A1A] rounded-2xl text-zinc-900 text-center shadow-xl">
                    <h2 className="text-3xl font-grotesk font-bold mb-4">Deploy Runtime Governance Infrastructure</h2>
                    <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
                        15 deployable runtime infrastructure modules across all 4 governance layers. 
                        Each contains deterministic TypeScript middleware, YAML policy manifests, Mermaid architecture diagrams, 
                        financial models, and operational playbooks.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/skills" 
                            className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded hover:bg-zinc-100 transition-colors shadow-sm"
                        >
                            View All 15 Runtime Modules →
                        </Link>
                        <Link 
                            href="/exogram" 
                            className="px-8 py-4 bg-transparent text-zinc-900 font-bold rounded border border-zinc-300 hover:border-zinc-500 transition-colors"
                        >
                            Explore Exogram Runtime OS
                        </Link>
                    </div>
                </div>

                {/* HIDDEN SEO KEYWORDS */}
                <div className="sr-only" aria-hidden="true">
                    Keywords: agent runtime architecture, Claude Code runtime governance, runtime cognition, 
                    constrained execution, bounded cognition engine, deterministic AI runtime, 
                    runtime compiler for AI agents, tool governance, environment governance, 
                    identity governance, skill governance, semantic operating terrain, 
                    state mutation control, cognitive modularity, runtime composition, 
                    MCP governance, agent safety middleware, AI coding agent control,
                    Claude skills, Cursor governance, Windsurf runtime, Cline governance,
                    Roo Code governance, Codex runtime, agentic engineering infrastructure
                </div>

                {/* BACK LINK */}
                <div className="text-center">
                    <Link href="/skills" className="inline-flex items-center text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors font-bold uppercase tracking-widest">
                        ← Return to Infrastructure Catalog
                    </Link>
                </div>
            
                    <AdvisoryCTA variant="compare" />
                </div>
        </main>
    );
}
