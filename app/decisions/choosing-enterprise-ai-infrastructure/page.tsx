import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Server, Shield, Network, LayoutDashboard } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Choosing Enterprise AI Infrastructure Guide',
    description: 'Compare hosted vs self-hosted AI infrastructure, inference hardware options, and cost optimization architectures.',
    alternates: {
        canonical: 'https://www.richardewing.io/decisions/choosing-enterprise-ai-infrastructure',
    },
};

export default function ChoosingEnterpriseAIInfrastructure() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Decisions</span><span>/</span><span className="text-cyan-900 font-extrabold">Enterprise Infrastructure</span>
                </div>
                
                <header className="mb-12 border-b border-zinc-400 pb-12">
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-black text-zinc-950 mb-6 leading-tight">
                        Choosing Enterprise AI Infrastructure: <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700">Governance First</span>
                    </h1>
                    <p className="text-xl text-zinc-900 font-semibold leading-relaxed max-w-3xl">
                        When selecting enterprise AI infrastructure, the debate between hyperscaler APIs (AWS Bedrock, Azure OpenAI) and bare-metal open-source deployment often ignores the actual business requirement: deterministic cost containment and data security.
                    </p>
                </header>

                <div className="prose prose-lg prose-zinc max-w-none prose-h2:font-grotesk prose-h2:text-3xl prose-h2:font-bold prose-h3:font-grotesk prose-h3:text-2xl prose-h3:font-bold prose-strong:text-zinc-950">
                    <h2>The False Dichotomy of Cloud vs. Local</h2>
                    <p>
                        Engineering teams frequently frame infrastructure decisions as a choice between the velocity of managed APIs and the data privacy of self-hosted open-source models. This framing is incomplete.
                    </p>
                    <p>
                        A self-hosted Llama 3 70B instance on an AWS p4d.24xlarge provides maximum data security, but incurs a continuous $30,000+ monthly run rate regardless of utilization. Conversely, managed API endpoints (like Azure OpenAI) scale down to zero, but create catastrophic exposure to traffic spikes and denial-of-wallet attacks if an endpoint is repeatedly triggered by automated systems.
                    </p>
                    <p>
                        The structural solution is not selecting one environment over the other, but building an abstraction layer that routes intent dynamically based on the cost, latency, and privacy requirements of the specific query.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 not-prose">
                        <div className="bg-white border border-zinc-300 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                            <Server className="w-8 h-8 text-cyan-600 mb-4" />
                            <h4 className="font-bold text-zinc-950 mb-2">Hyperscaler Managed APIs</h4>
                            <p className="text-sm font-medium text-zinc-600">Zero idle costs, infinite burst capacity, high unit cost per token. Requires rigorous rate-limiting.</p>
                        </div>
                        <div className="bg-white border border-zinc-300 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                            <Shield className="w-8 h-8 text-blue-600 mb-4" />
                            <h4 className="font-bold text-zinc-950 mb-2">Dedicated Endpoints</h4>
                            <p className="text-sm font-medium text-zinc-600">Predictable hourly costs, strict data isolation, vulnerable to saturation under burst loads.</p>
                        </div>
                        <div className="bg-white border border-zinc-300 rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                            <Network className="w-8 h-8 text-indigo-600 mb-4" />
                            <h4 className="font-bold text-zinc-950 mb-2">Hybrid Routing Layer</h4>
                            <p className="text-sm font-medium text-zinc-600">Base load runs on cheap dedicated instances; bursts overflow to managed APIs. High engineering complexity.</p>
                        </div>
                    </div>

                    <h2>Architecting for Governance</h2>
                    <p>
                        Enterprise AI infrastructure must be evaluated on its ability to enforce organizational policy at the network layer. If a developer can bypass your cost constraints by simply changing a URL in their code, your infrastructure is fundamentally broken.
                    </p>
                    <p>
                        A robust enterprise AI architecture requires:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-zinc-800">
                        <li><strong className="text-zinc-950">A Unified API Gateway:</strong> All LLM requests must pass through a single choke point that enforces identity, rate limits, and budget caps before the request reaches the model provider.</li>
                        <li><strong className="text-zinc-950">Token-Level Budgeting:</strong> The ability to set hard monthly spend limits on a per-team, per-application, or per-user basis. When the budget is exhausted, the infrastructure must gracefully degrade or block requests.</li>
                        <li><strong className="text-zinc-950">PII Redaction:</strong> Middleware that inspects outbound prompts and mathematically guarantees the removal or obfuscation of Protected Health Information (PHI) or Personally Identifiable Information (PII) before transmission to external APIs.</li>
                    </ul>

                    <div className="my-10 bg-zinc-950 text-white rounded-xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <LayoutDashboard className="w-6 h-6 text-cyan-400" />
                            <h4 className="text-xl font-bold font-grotesk m-0">The CFO Dashboard Requirement</h4>
                        </div>
                        <p className="m-0 text-zinc-300 text-sm font-medium leading-relaxed">
                            Infrastructure is only as effective as the visibility it provides. If your CTO cannot generate a report showing exactly how much margin was eroded by the AI summarization feature last Tuesday between 2 PM and 4 PM, you lack the instrumentation required to operate a profitable SaaS company in the generative era.
                        </p>
                    </div>

                    <h2>Conclusion</h2>
                    <p>
                        Do not allow infrastructure decisions to be driven solely by latency benchmarks or model evaluation scores. The most capable model in the world is a liability if it cannot be financially constrained and audited. Choose infrastructure that prioritizes deterministic execution over theoretical capability.
                    </p>
                </div>

                <div className="mt-16 pt-12 border-t border-zinc-300">
                    <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 border border-zinc-300 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950 mb-4">Secure your AI infrastructure</h3>
                            <p className="text-zinc-700 max-w-2xl mx-auto mb-8 font-medium">
                                Book a $2,500 fixed-fee diagnostic. I will audit your infrastructure stack and deliver a board-ready report detailing exactly where your margin is exposed to unpredictable scale.
                            </p>
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold uppercase tracking-widest transition-all"
                            >
                                Book a Diagnostic <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
