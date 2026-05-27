"use client";

import React from 'react';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import Image from 'next/image';
import BlurIn from '@/components/magicui/blur-in';
import { BorderBeam } from '@/components/magicui/border-beam';
import Meteors from '@/components/magicui/meteors';
import { InteractiveExogramSim } from '../components/visualizations/InteractiveExogramSim';


export default function ExogramPage() {
    return (
        <main className="pt-20">
            <div className="page-container">

                {/* Hero */}
                <section className="section-lg text-center relative overflow-hidden">
                    <Meteors count={20} />

                    <div className="relative z-10">
                        {/* Logo */}
                        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center relative">
                            { }
                            <Image src="/images/exogram/logo-main.png" alt="Exogram Logo" fill className="object-contain" sizes="96px" />
                        </div>

                        <BlurIn word="Exogram" className="text-4xl md:text-5xl font-bold text-zinc-950 mb-4" />
                        <p className="text-xl text-purple-900 font-extrabold font-semibold mb-4">
                            Persistent Infrastructure for Autonomous Intelligence
                        </p>
                        <p className="text-zinc-900 max-w-2xl mx-auto mb-4">
                            Frontier models are miracles of cognition. Exogram does not replace model intelligence. It preserves operational continuity, governance, and trust across it.
                        </p>
                        <p className="text-lg text-zinc-950 font-bold max-w-xl mx-auto mb-8">
                            We are building the SSL certificate for agentic execution.
                        </p>

                        {/* Hero Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto items-center mt-8 mb-12">
                            <div className="flex justify-center md:justify-end w-full">
                                <div className="inline-flex items-center gap-3 px-5 h-[52px] w-[260px] rounded-xl bg-white/5 border border-zinc-400 hover:bg-white/10 transition-colors">
                                    { }
                                    <Image src="/assets/headshot.jpg" alt="Richard Ewing" width={32} height={32} className="rounded-full object-cover grayscale opacity-80" />
                                    <div className="text-left flex-1">
                                        <p className="text-zinc-950 font-semibold text-xs font-bold leading-tight">Founded by Richard Ewing</p>
                                        <p className="text-zinc-950 text-xs font-bold font-medium leading-tight">AI Economist</p>
                                    </div>
                                    <div className="pl-3 border-l border-zinc-400 h-6 flex items-center">
                                        <span className="text-green-500 text-xs font-bold font-medium font-mono tracking-wider">LIVE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-start w-full">
                                <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden inline-flex items-center justify-between px-5 h-[52px] w-[260px] rounded-xl bg-purple-600/10 text-zinc-950 font-semibold hover:bg-purple-600/20 transition-all group border border-transparent">
                                    <span className="font-semibold text-sm font-semibold z-10">Visit Exogram.ai</span>
                                    <span className="group-hover:translate-x-1 transition-transform z-10">→</span>
                                    <BorderBeam size={60} duration={4} delay={2} borderWidth={1.5} colorFrom="#A855F7" colorTo="#00D4FF" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="py-12 border-b border-zinc-200 bg-white">
                    <div className="max-w-3xl mx-auto text-center px-4">
                        <p className="text-[11px] font-bold font-mono text-zinc-900 font-medium uppercase tracking-[0.2em] mb-6">The Mission</p>
                        <p className="text-2xl md:text-3xl font-bold text-zinc-950 leading-relaxed">
                            To make autonomous intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">persistent and verifiable.</span>
                        </p>
                    </div>
                </section>

                {/* Ecosystem Presence */}
                <section className="py-10 border-b border-zinc-200 bg-white">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <p className="text-[11px] font-bold font-mono text-zinc-900 font-medium uppercase tracking-[0.2em] mb-6">Ecosystem Presence</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                            <a href="https://www.producthunt.com/products/exogram-ai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-exogram-ai" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity block">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img alt="Exogram.ai - The zero-trust verification layer for enterprise AI | Product Hunt" width="220" height="48" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1142627&theme=light" className="w-[220px] h-auto" />
                            </a>
                            <a href="https://theresanaiforthat.com/ai/exogram/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity block">
                                <div className="flex items-center gap-3 px-5 py-2.5 rounded-lg border border-zinc-300 bg-zinc-50 hover:bg-zinc-100 transition-colors h-[48px]">
                                    <span className="text-xl opacity-80">🤖</span>
                                    <div className="text-left flex flex-col justify-center">
                                        <span className="text-[9px] font-bold text-zinc-800 uppercase tracking-widest leading-none mb-1">Featured On</span>
                                        <span className="text-sm font-bold text-zinc-900 leading-none">There&apos;s An AI For That</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* The Core Insight */}
                <section className="section bg-zinc-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="font-mono text-xs font-bold text-cyan-900 font-extrabold font-semibold uppercase tracking-[0.2em] mb-4 text-center">The Core Insight</div>
                        <h2 className="text-3xl font-bold text-zinc-950 mb-8 text-center">The Core Vulnerability</h2>
                        <div className="text-zinc-900 text-lg leading-relaxed space-y-6 max-w-3xl mx-auto px-6 sm:px-8 border-l-4 border-purple-500 py-2">
                            <p className="text-xl text-zinc-950 font-bold border-b border-zinc-300 pb-4 mb-6">
                                The intelligence of the models improves constantly, but the continuity of the context never does.
                            </p>
                            <p>
                                We are entering a world where users live across multiple language models, autonomous agents, and execution environments. Yet every AI product still starts from zero.
                            </p>
                            <p>
                                Today, operational context is trapped inside vendor silos. Every new tool or agent requires the user to repeatedly reconstruct their identity, goals, constraints, workflows, and operational boundaries. The user is forced to adapt themselves to the AI system because the systems are fundamentally incapable of adapting to persistent human context.
                            </p>
                            <p>
                                The industry currently treats context as a user convenience. <span className="font-bold text-zinc-950">That is a critical miscalculation.</span> Models are incredible cognition engines, but reasoning is not infrastructure. As agents move from being passive chatbots to persistent, autonomous operators, passive memory ceases to be sufficient. It must become foundational, verifiable infrastructure.
                            </p>
                            <p>
                                What the industry calls &quot;memory&quot; is fundamentally inadequate for autonomous systems. Autonomous execution requires an <span className="font-bold text-zinc-950">auditable ledger</span>. If a system forgets its constraints, loses its operational history, or drops its permission boundaries as it moves between environments, it stops being reliable infrastructure. It becomes an operational hazard.
                            </p>
                            <p className="text-xl text-zinc-950 font-bold border-t border-zinc-300 pt-4 mt-6">
                                Probabilistic systems cannot scale into the autonomous era safely without a deterministic, auditable record of state.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Four-Layer Substrate */}
                <section className="section bg-white border-y border-zinc-200">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2 block">Architecture</span>
                            <h2 className="text-3xl font-bold text-zinc-950 mb-4">The Four-Layer Substrate</h2>
                            <p className="text-zinc-700 max-w-2xl mx-auto">
                                Exogram is a comprehensive infrastructure stack designed to sit beneath the models and govern autonomous execution.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-zinc-950 font-bold">Layer I: Persistent Context</h3>
                                    <span className="text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-cyan-500/30">State Graph</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                    The foundational baseline that maintains identity, goals, and operational state across completely different models and platforms. Exogram unifies disconnected memory silos into a single, portable, and persistent state graph.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-zinc-950 font-bold">Layer II: Dynamic Governance</h3>
                                    <span className="text-xs font-bold font-medium font-mono text-purple-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-purple-500/30">Policy Engine</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                    The policy layer that defines the rigid operational boundaries, permission rules, and execution constraints for any given agent. Translates human intent into deterministic operational boundaries.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-zinc-950 font-bold">Layer III: Deterministic Admissibility</h3>
                                    <span className="text-xs font-bold font-medium font-mono text-red-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-red-500/30">Execution Gateway</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                    The runtime execution bouncer. Instead of asking if a probabilistic model <em>can</em> perform an action, this layer deterministically evaluates whether the execution <em>should</em> be allowed to occur at all, intercepting out-of-bounds actions before they hit your infrastructure.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-zinc-950 font-bold">Layer IV: The Auditable Ledger</h3>
                                    <span className="text-xs font-bold font-medium font-mono text-emerald-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-emerald-500/30">Memory v2</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                    An append-only, verifiable history of every action, context shift, and governance decision. It provides execution traceability, transforming passive AI memory into enterprise-grade accountability.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Execution Loop */}
                <section className="section bg-[#F5F0EB]">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2 block">Execution Interception</span>
                            <h2 className="text-3xl font-bold text-zinc-950 mb-4">The Execution Loop</h2>
                            <p className="text-zinc-700 max-w-2xl mx-auto">
                                Exogram intercepts the standard AI execution loop to inject persistence and deterministic trust.
                            </p>
                        </div>
                        <div className="space-y-6 max-w-2xl mx-auto">
                            {/* Standard Flow */}
                            <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
                                <h3 className="text-sm font-bold text-rose-800 mb-3 uppercase tracking-widest font-mono">Standard Flow — High Risk, Zero Memory</h3>
                                <div className="flex items-center gap-2 flex-wrap font-mono text-sm text-rose-900">
                                    <span className="px-3 py-1.5 bg-white rounded border border-rose-200">Prompt</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-rose-200">Model</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-rose-200">Execution</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-rose-200">Result</span>
                                </div>
                            </div>
                            {/* Exogram Flow */}
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                                <h3 className="text-sm font-bold text-emerald-800 mb-3 uppercase tracking-widest font-mono">Exogram Flow — Trusted, Continuous, Verifiable</h3>
                                <div className="flex items-center gap-2 flex-wrap font-mono text-sm text-emerald-900">
                                    <span className="px-3 py-1.5 bg-white rounded border border-emerald-200">Prompt</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-purple-100 rounded border-2 border-purple-400 font-bold text-purple-900">State Injection</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-emerald-200">Model</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-purple-100 rounded border-2 border-purple-400 font-bold text-purple-900">Admissibility Gateway</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-purple-100 rounded border-2 border-purple-400 font-bold text-purple-900">Ledger Log</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-emerald-200">Execution</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-emerald-200">Result</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Schema — Admissibility Request */}
                <section className="section bg-zinc-100">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2 block">Technical Preview</span>
                            <h2 className="text-3xl font-bold text-zinc-950 mb-4">The Admissibility Request</h2>
                            <p className="text-zinc-700 max-w-2xl mx-auto">
                                When an agent attempts to execute an action, it must pass through the Exogram Admissibility Gateway.
                            </p>
                        </div>
                        <div className="bg-white border border-zinc-300 rounded-xl p-6 font-mono text-xs leading-relaxed overflow-x-auto max-w-2xl mx-auto shadow-sm">
                            <pre className="text-zinc-800 whitespace-pre-wrap">{`{
  "execution_request": {
    "agent_id": "agt_8f72c91a",
    "target_system": "aws_production_db",
    "action": "DROP_TABLE",
    "context_hash": "a1b2c3d4e5f6...",
    "exogram_admissibility": {
      "policy_check": "FAILED",
      "reason": "VIOLATES_DYNAMIC_GOVERNANCE_RULE_04:
                NO_DESTRUCTIVE_ACTIONS_IN_PROD",
      "action_permitted": false
    }
  }
}`}</pre>
                        </div>
                    </div>
                </section>

                {/* Exogram Simulation Layer */}
                <section className="section bg-white border border-zinc-200 py-16 relative overflow-hidden border-y border-zinc-200">
                    <div className="max-w-5xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-zinc-950 font-semibold mb-2">Admissibility in Action</h2>
                            <p className="text-zinc-900 font-medium font-medium">Intercepting probabilistic execution before it reaches production environments.</p>
                        </div>
                        <InteractiveExogramSim />
                    </div>
                </section>

                {/* Why This Matters Now */}
                <section className="section bg-white border-y border-zinc-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                    <div className="max-w-3xl mx-auto px-4 md:px-0">
                        <h2 className="text-3xl font-bold text-zinc-950 mb-4">Why This Matters Now</h2>
                        <p className="text-zinc-600 mb-12 uppercase tracking-widest text-xs font-bold font-mono">The Exogram Paradigm</p>
                        
                        <div className="prose prose-lg prose-zinc max-w-none text-zinc-800 space-y-8 font-medium">
                            <div>
                                <p className="text-xl text-zinc-950 font-semibold mb-6">
                                    As frontier models proliferate and capability converges, the strategic value shifts increasingly toward <span className="text-purple-900">persistent operational infrastructure sitting beneath the model layer.</span>
                                </p>
                                <p>
                                    We are giving autonomous intelligence the keys to the car without building the brakes. Today humans repeatedly adapt themselves to disconnected AI systems. Eventually, autonomous systems will adapt themselves to persistent, auditable human context.
                                </p>
                            </div>

                            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl my-8">
                                <p className="text-lg font-semibold text-zinc-950 mb-4">
                                    The future requires a persistent intelligence substrate where:
                                </p>
                                <ul className="space-y-3 text-zinc-800">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                                        <span><strong>Context</strong> survives entirely independently of the underlying model</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                                        <span><strong>Governance</strong> defines rigid operational boundaries for any given agent</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                                        <span><strong>Identity</strong> persists across completely different models and platforms</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                                        <span><strong>The Auditable Ledger</strong> provides enterprise-grade accountability for every action</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 bg-purple-50 border border-purple-200 rounded-xl my-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
                                <p className="font-bold text-purple-950 text-xl mb-6 relative z-10">
                                    Instead of fragmented intelligence silos competing over temporary context windows, autonomous systems gain persistent operational continuity across environments.
                                </p>
                                <p className="text-purple-900 font-bold tracking-wide uppercase text-sm relative z-10">
                                    Today humans repeatedly adapt themselves to disconnected AI systems. Eventually AI systems will adapt themselves to persistent, auditable human context.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open RFCs */}
                <section className="section bg-zinc-100">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2 block">Building in Public</span>
                            <h2 className="text-3xl font-bold text-zinc-950 mb-4">Open Requests for Comment</h2>
                            <p className="text-zinc-700 max-w-2xl mx-auto">
                                We are building an open standard. Below are the active RFCs regarding the Exogram Protocol.
                            </p>
                        </div>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-mono font-bold text-cyan-800 px-2 py-0.5 bg-white rounded border border-cyan-300">RFC-01</span>
                                    <h3 className="text-sm font-bold text-zinc-950">The Persistent Context Schema (EXO-STATE)</h3>
                                </div>
                                <p className="text-sm text-zinc-700 mb-2"><strong>Goal:</strong> Define a universal JSON schema for human-to-agent context that can be injected into any orchestration layer, regardless of whether the model is OpenAI, Anthropic, or an open-source local model.</p>
                                <p className="text-sm text-zinc-600"><strong>Core Challenge:</strong> Normalizing context injection so it consumes the minimal amount of tokens while maintaining 100% operational fidelity across environments.</p>
                            </div>
                            <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-mono font-bold text-purple-800 px-2 py-0.5 bg-white rounded border border-purple-300">RFC-02</span>
                                    <h3 className="text-sm font-bold text-zinc-950">Deterministic Admissibility Gateway</h3>
                                </div>
                                <p className="text-sm text-zinc-700 mb-2"><strong>Goal:</strong> Establish an execution gateway that processes go/no-go decisions at sub-runtime latencies.</p>
                                <p className="text-sm text-zinc-600"><strong>Core Challenge:</strong> If the admissibility check takes too long, autonomous loops break down. Probabilistic LLM-as-a-judge approaches are too slow and unreliable. This RFC proposes moving governance checks to deterministic policy engines — fast, binary rules — to safely gate API and tool calls natively.</p>
                            </div>
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-mono font-bold text-emerald-800 px-2 py-0.5 bg-white rounded border border-emerald-300">RFC-03</span>
                                    <h3 className="text-sm font-bold text-zinc-950">The Auditable Ledger Format</h3>
                                </div>
                                <p className="text-sm text-zinc-700 mb-2"><strong>Goal:</strong> Create a verifiable, append-only standard for logging AI execution history.</p>
                                <p className="text-sm text-zinc-600"><strong>Core Challenge:</strong> Standard AI logs just show input (prompt) and output (response). The Exogram ledger must capture <em>State Hash</em> + <em>Active Governance Policy</em> + <em>Attempted Action</em> + <em>Approval/Denial Code</em>. This RFC designs the exact data structure required for an enterprise compliance team to trace exactly <em>why</em> an agent took an action.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Stack — simplified position view */}
                <section className="section bg-white border-y border-zinc-200 pt-0">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-8">The Stack</h2>
                        <p className="text-xl text-zinc-950 font-bold mb-12">Exogram is the persistent intelligence substrate beneath the model layer.</p>
                        <div className="space-y-4 max-w-md mx-auto">
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-zinc-400 text-left">
                                <span className="text-zinc-950 text-sm">Layer 1</span>
                                <span className="text-zinc-950 ml-4">COMPUTE</span>
                                <span className="text-zinc-950 ml-4">→ GPUs, infrastructure</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-zinc-400 text-left">
                                <span className="text-zinc-950 text-sm">Layer 2</span>
                                <span className="text-zinc-950 ml-4">MODELS</span>
                                <span className="text-zinc-950 ml-4">→ OpenAI, Anthropic, etc.</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-purple-600/20 border-2 border-purple-500 text-left">
                                <span className="text-purple-900 font-extrabold font-semibold text-sm">Layer 3</span>
                                <span className="text-zinc-950 ml-4 font-bold">PERSISTENCE & TRUST</span>
                                <span className="text-purple-900 font-extrabold font-semibold ml-4">→ EXOGRAM</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-zinc-400 text-left">
                                <span className="text-zinc-950 text-sm">Layer 4</span>
                                <span className="text-zinc-950 ml-4">APPLICATIONS</span>
                                <span className="text-zinc-950 ml-4">→ Agents, Copilots, SaaS</span>
                            </div>
                        </div>

                        <div className="mt-16 mb-4">
                            <p className="text-xl md:text-2xl text-zinc-950 font-bold leading-relaxed max-w-3xl mx-auto">
                                Frontier models are miracles of cognition. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">Exogram preserves operational continuity, governance, and trust across them.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Subpage Navigation */}
                <section className="section">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-8 text-center">Explore Exogram</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/exogram/architecture" className="group p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40 transition-all">
                                <span className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest">Deep Dive</span>
                                <h3 className="text-xl font-bold text-zinc-950 mt-2 mb-2 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors">Architecture</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">4 substrate layers, execution schemas, and integration methods.</p>
                            </Link>
                            <Link href="/exogram/use-cases" className="group p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 transition-all">
                                <span className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest">Industry</span>
                                <h3 className="text-xl font-bold text-zinc-950 mt-2 mb-2 group-hover:text-purple-900 font-extrabold font-semibold transition-colors">Use Cases</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">Healthcare, fintech, legal, and enterprise autonomous AI governance.</p>
                            </Link>
                            <Link href="/exogram/roadmap" className="group p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 transition-all">
                                <span className="text-xs font-bold font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest">Direction</span>
                                <h3 className="text-xl font-bold text-zinc-950 mt-2 mb-2 group-hover:text-emerald-900 font-extrabold font-semibold transition-colors">Roadmap</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">What&apos;s shipped, in progress, and planned for Q2-Q4 2026.</p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Connection */}
                <section className="section">
                    <div className="max-w-3xl mx-auto">
                        <div className="card p-10 flex flex-col items-center text-center space-y-8">
                            <p className="text-xl md:text-2xl text-zinc-950 leading-relaxed max-w-2xl">
                                &quot;I write about why AI systems fail economically through my AI Economist work.<br />
                                <span className="text-purple-900 font-extrabold font-semibold">Exogram is the persistent intelligence substrate I&apos;m building to fix it.&quot;</span>
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-zinc-400 pt-8 mt-4 items-center">
                                <div className="flex items-center justify-center md:justify-end gap-4 h-12">
                                    { }
                                    <Image src="/assets/headshot.jpg" alt="Richard Ewing" width={48} height={48} className="rounded-full object-cover shadow-sm" />
                                    <div className="text-left flex flex-col justify-center h-full">
                                        <p className="text-zinc-950 font-semibold leading-none mb-1">Founded by Richard Ewing</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-zinc-950 font-bold text-xs font-bold leading-none">AI Economist</p>
                                            <span className="text-emerald-500 text-xs font-bold font-medium uppercase font-mono tracking-wider px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 leading-none flex items-center h-4">Live</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center md:justify-start h-12">
                                    <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-2.5 rounded-lg bg-purple-600 text-zinc-950 font-semibold hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] h-10">
                                        Visit Exogram.ai →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            
                    <AdvisoryCTA variant="industry" />
                </div>
        </main>
    );
}
