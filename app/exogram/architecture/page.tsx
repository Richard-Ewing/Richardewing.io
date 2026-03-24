import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Exogram Architecture — AI Verification Infrastructure | Deep Dive',
    description: 'Deep dive into Exogram\'s verification architecture: Schema Integrity Engine, Boundary Control Protocol, Threat Prevention Layer, and the MCP integration layer.',
    alternates: { canonical: 'https://www.richardewing.io/exogram/architecture' },
};

const layers = [
    {
        name: 'Schema Integrity Engine',
        tag: 'Layer 1',
        color: 'cyan',
        description: 'Validates that every AI output conforms to predefined structural contracts. Catches hallucinated fields, missing required data, and type mismatches before they reach your application.',
        features: [
            'JSON Schema validation with custom AI-aware extensions',
            'Recursive nested object verification',
            'Dynamic schema inference from historical outputs',
            'Real-time validation at <5ms latency',
            'Schema drift detection and alerting',
        ],
        metrics: [
            { label: 'Validation Speed', value: '<5ms' },
            { label: 'Schema Support', value: 'JSON, Protocol Buffers, Avro' },
            { label: 'False Positive Rate', value: '<0.1%' },
        ],
    },
    {
        name: 'Boundary Control Protocol',
        tag: 'Layer 2',
        color: 'purple',
        description: 'Enforces operational boundaries on AI behavior. Prevents scope creep, unauthorized actions, and ensures AI systems operate within their defined mandate.',
        features: [
            'Action admissibility verification (EAAP protocol)',
            'Scope boundary enforcement for agents',
            'Permission-based tool access control',
            'Budget and rate limiting per session',
            'Audit trail for every boundary decision',
        ],
        metrics: [
            { label: 'Decision Latency', value: '<10ms' },
            { label: 'Protocol', value: 'EAAP v1.0 (open RFC)' },
            { label: 'MCP Compatible', value: '✓' },
        ],
    },
    {
        name: 'Threat Prevention Layer',
        tag: 'Layer 3',
        color: 'red',
        description: 'Detects and blocks adversarial inputs, prompt injections, and data exfiltration attempts. The immune system for AI applications.',
        features: [
            'Prompt injection detection (99.2% accuracy)',
            'Data exfiltration prevention',
            'PII detection and masking',
            'Adversarial input classification',
            'Jailbreak attempt blocking',
        ],
        metrics: [
            { label: 'Detection Rate', value: '99.2%' },
            { label: 'PII Categories', value: '23 types' },
            { label: 'Update Frequency', value: 'Daily' },
        ],
    },
    {
        name: 'Memory Integrity System',
        tag: 'Layer 4',
        color: 'emerald',
        description: 'Ensures AI systems maintain consistent, verified memory across sessions. Prevents "memory hallucinations" where AI systems fabricate or corrupt stored context.',
        features: [
            'Cryptographic memory verification',
            'Cross-session consistency checks',
            'Conflict detection and resolution',
            'Source attribution for every memory entry',
            'Memory decay and freshness scoring',
        ],
        metrics: [
            { label: 'Integrity Guarantee', value: 'Cryptographic' },
            { label: 'Conflict Resolution', value: 'Automated' },
            { label: 'Storage', value: 'Encrypted at rest' },
        ],
    },
];

export default function ExogramArchitecturePage() {
    return (
        <main className="pt-24 pb-20">
            <div className="page-container max-w-5xl mx-auto">
                <div className="text-xs text-zinc-500 mb-8">
                    <Link href="/exogram" className="hover:text-white transition-colors">Exogram</Link>
                    <span className="mx-2">→</span>
                    <span className="text-zinc-400">Architecture</span>
                </div>

                <section className="text-center mb-16">
                    <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">Technical Deep Dive</p>
                    <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-white mb-6">
                        Verification <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Architecture.</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Four verification layers that sit between your AI models and your application.
                        Each layer operates independently and can be adopted incrementally.
                    </p>
                </section>

                {/* Architecture Stack */}
                <div className="space-y-8 mb-16">
                    {layers.map((layer, i) => (
                        <section key={layer.name} className={`rounded-2xl border border-${layer.color}-500/20 bg-${layer.color}-500/5 p-8`}>
                            <div className="flex items-center gap-4 mb-6">
                                <span className={`text-xs font-mono text-${layer.color}-400 px-2 py-1 rounded-full border border-${layer.color}-500/30 bg-${layer.color}-500/10`}>{layer.tag}</span>
                                <h2 className="text-2xl font-grotesk font-bold text-white">{layer.name}</h2>
                            </div>
                            <p className="text-zinc-400 mb-6 max-w-3xl">{layer.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Capabilities</h3>
                                    <ul className="space-y-2">
                                        {layer.features.map(f => (
                                            <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                                                <span className={`text-${layer.color}-400 mt-0.5`}>→</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Performance</h3>
                                    <div className="space-y-3">
                                        {layer.metrics.map(m => (
                                            <div key={m.label} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5">
                                                <span className="text-xs text-zinc-500">{m.label}</span>
                                                <span className="text-sm font-mono text-white">{m.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {i < layers.length - 1 && (
                                <div className="flex justify-center mt-6">
                                    <span className="text-zinc-700 text-2xl">↓</span>
                                </div>
                            )}
                        </section>
                    ))}
                </div>

                {/* Integration */}
                <section className="text-center mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Integration</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-8">Exogram integrates via MCP (Model Context Protocol), REST API, or SDK. Drop it into your existing AI pipeline with zero architecture changes.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {[
                            { method: 'MCP Server', desc: 'Native protocol integration for Claude and compatible AI agents', badge: 'Recommended' },
                            { method: 'REST API', desc: 'Standard HTTP endpoints for any programming language or framework', badge: 'Universal' },
                            { method: 'Python SDK', desc: 'pip install exogram — type-safe client with async support', badge: 'Coming Soon' },
                        ].map(m => (
                            <div key={m.method} className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">{m.badge}</span>
                                <h3 className="text-white font-bold mt-2 mb-2">{m.method}</h3>
                                <p className="text-xs text-zinc-500">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="flex justify-center gap-4">
                    <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-colors text-sm">
                        Visit Exogram.ai →
                    </a>
                    <Link href="/exogram/use-cases" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                        View Use Cases →
                    </Link>
                </div>
            </div>
        </main>
    );
}
