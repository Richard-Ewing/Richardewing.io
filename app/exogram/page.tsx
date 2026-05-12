"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurIn from '@/components/magicui/blur-in';
import { BorderBeam } from '@/components/magicui/border-beam';
import Meteors from '@/components/magicui/meteors';

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
                            The Verification Infrastructure for AI
                        </p>
                        <p className="text-zinc-900 max-w-2xl mx-auto mb-8">
                            AI systems generate language. Exogram maintains reality. A verification layer that sits between AI models and your application, ensuring every output is structurally valid, operationally safe, and auditably correct.
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

                {/* Exogram */}
                <section className="section bg-zinc-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="font-mono text-xs font-bold text-cyan-900 font-extrabold font-semibold uppercase tracking-[0.2em] mb-4 text-center">Exogram</div>
                        <h2 className="text-3xl font-bold text-zinc-950 mb-8 text-center">The Deterministic Control Plane for the AGI Era</h2>
                        <div className="text-zinc-900 text-lg leading-relaxed space-y-6 max-w-3xl mx-auto px-6 sm:px-8 border-l-4 border-purple-500 py-2">
                            <p>
                                <span className="font-bold text-zinc-950">Everyone is trying to build autonomous agents, and eventually AGI, on top of a fundamentally broken architecture.</span>
                            </p>
                            <p>
                                Standard large language models are nothing more than stochastic text predictors. They guess the next word. They do not possess memory, they do not retain context, they cannot infer meaning, and most importantly, they have zero capacity for accountability.
                            </p>
                            <p>
                                You cannot build an autonomous AI being on a foundation that hallucinates and forgets. As we move from basic chat wrappers to autonomous systems taking actions in the real world, admissibility and accountability become existential requirements.
                            </p>
                            <p className="text-xl text-zinc-950 font-bold border-t border-b border-zinc-300 py-4 my-6">
                                <span className="text-purple-900 font-extrabold font-semibold">Exogram AI is built for this future.</span> We are the deterministic control plane for the AGI era.
                            </p>
                            <p>
                                We capture immediate market value today by providing Layers 1 and 2. We fix the baseline LLM flaws by injecting persistent memory and structured inference. This makes today&apos;s AI actually usable.
                            </p>
                            <p>
                                But true autonomy relies on Layers 3 and 4. These are the strict admissibility, accountability, and cryptographic guardrails. When AI transitions from software tools to autonomous entities operating within enterprise and government infrastructure, they will require an immutable trust ledger to verify every action. <span className="font-bold text-zinc-950">Exogram is that ledger. We are building the regulatory and operational baseline that makes AGI safe to deploy.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why I Built Exogram */}
                <section className="section bg-white border-y border-zinc-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                    <div className="max-w-3xl mx-auto px-4 md:px-0">
                        <h2 className="text-3xl font-bold text-zinc-950 mb-4">Why I Built Exogram</h2>
                        <p className="text-zinc-600 mb-12 uppercase tracking-widest text-xs font-bold font-mono">A Note from the Founder</p>
                        
                        <div className="prose prose-lg prose-zinc max-w-none text-zinc-800 space-y-8 font-medium">
                            <div>
                                <p className="text-xl text-zinc-950 font-semibold mb-6">
                                    I did not build Exogram because I wanted to launch another AI product. <br/>
                                    <span className="text-purple-900">I built it because I kept colliding with the same systemic failures while trying to use AI systems to build real software.</span>
                                </p>
                                <p>
                                    At first, I was deeply optimistic about agent-based development environments and autonomous coding systems. Like many developers and operators, I immediately saw the promise: faster iteration, accelerated engineering, AI-assisted workflows, and autonomous execution.
                                </p>
                                <p>
                                    I started heavily using tools like Cursor and later moved deeper into increasingly autonomous AI workflows and agentic systems. At first, the experience felt almost magical. The systems could scaffold code, reason through problems, generate architecture suggestions, repair bugs, and move through development tasks at a pace that felt fundamentally different from traditional software tooling.
                                </p>
                            </div>

                            <div className="pl-6 border-l-4 border-red-500 bg-red-50/50 p-6 rounded-r-xl my-10 shadow-sm">
                                <h3 className="text-xl font-bold text-red-950 mb-4">But after the novelty wore off, another pattern started emerging. The systems were unstable.</h3>
                                <p className="mb-4 text-red-950 font-semibold">Not unstable in a theoretical sense. Operationally unstable. The models would:</p>
                                <ul className="space-y-2 mb-6 text-sm font-semibold text-red-900 font-mono">
                                    <li>• lose context mid-workflow</li>
                                    <li>• forget previous architectural decisions</li>
                                    <li>• recreate bugs they had already fixed</li>
                                    <li>• generate contradictory implementations</li>
                                    <li>• drift away from original instructions</li>
                                    <li>• loop recursively through the same repair cycles</li>
                                    <li>• introduce new errors while &quot;fixing&quot; old ones</li>
                                </ul>
                                <p className="font-semibold text-red-950">
                                    And every one of those failures had a real cost attached to it: more tokens, more compute, more debugging, more wasted engineering time, and more operational uncertainty.
                                </p>
                            </div>

                            <div>
                                <p>
                                    I started realizing I was not just dealing with hallucinations. <span className="font-bold text-zinc-950">I was dealing with probabilistic systems being treated as reliable execution infrastructure.</span>
                                </p>
                                <p>
                                    That distinction completely changed how I viewed the industry. The problem was not that the AI occasionally produced incorrect text. The problem was that autonomous systems were increasingly being trusted with operational authority despite having no deterministic governance structure underneath them.
                                </p>
                                <p>
                                    Then the industry rapidly accelerated into AI agents. That was the moment the problem stopped looking like a tooling inconvenience and started looking like a serious infrastructure failure.
                                </p>
                            </div>

                            <div className="bg-zinc-950 text-zinc-100 p-8 rounded-2xl shadow-xl my-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
                                <h3 className="text-xl font-bold text-white mb-4">These systems were no longer confined to chat interfaces.</h3>
                                <p className="text-zinc-300 mb-6 leading-relaxed">Now they were modifying production code, executing workflows, invoking APIs, interacting with enterprise systems, touching databases, and performing autonomous operations. And yet almost the entire ecosystem was still operating without meaningful runtime governance.</p>
                                
                                <p className="text-zinc-300 mb-6 leading-relaxed">The dominant industry answer became &quot;guardrails.&quot; But the more I studied the problem, the more obvious it became that most so-called guardrails were still fundamentally probabilistic systems supervising other probabilistic systems.</p>
                                
                                <p className="text-xl text-cyan-400 font-bold border-l-2 border-cyan-400 pl-4 py-1 tracking-tight">
                                    That is not deterministic governance.<br/>That is stacked uncertainty.
                                </p>
                            </div>

                            <div>
                                <p>
                                    The industry was attempting to scale autonomous execution without building admissibility infrastructure first. That realization became the foundation for Exogram.
                                </p>
                                <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl my-8">
                                    <p className="text-lg font-semibold text-zinc-950 mb-4">
                                        I stopped thinking about the problem as:
                                    </p>
                                    <p className="text-lg italic text-zinc-600 mb-6 pl-4 border-l-2 border-zinc-300">
                                        &quot;How do we make AI smarter?&quot;
                                    </p>
                                    <p className="text-lg font-semibold text-zinc-950 mb-4">
                                        And started thinking about it as:
                                    </p>
                                    <p className="text-lg font-bold text-purple-900 pl-4 border-l-2 border-purple-500">
                                        &quot;How do we determine whether autonomous execution should be allowed at all?&quot;
                                    </p>
                                </div>
                                <p>
                                    That is a completely different problem. Exogram was built to sit directly between AI inference and operational execution. Not as another assistant. Not as another wrapper. Not as another orchestration layer.
                                </p>
                                <p className="font-bold text-zinc-950 text-xl mt-6">
                                    But as runtime governance infrastructure.
                                </p>
                                <p className="mt-4 leading-relaxed">
                                    A deterministic operational control layer capable of evaluating whether autonomous actions are admissible before they are allowed to interact with enterprise infrastructure. That means runtime policy evaluation, bounded execution, operational boundary enforcement, contextual state verification, immutable auditability, permit or deny execution controls, and deterministic governance before runtime actions occur.
                                </p>
                            </div>

                            <div className="p-8 bg-purple-50 border border-purple-200 rounded-xl my-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
                                <p className="font-bold text-purple-950 text-xl mb-6 relative z-10">
                                    The goal was never to eliminate intelligence. The goal was to constrain probabilistic execution within deterministic operational boundaries.
                                </p>
                                <p className="text-purple-900 mb-6 leading-relaxed relative z-10">
                                    Because once AI systems begin operating autonomously inside enterprise environments, the conversation changes entirely. Hallucinations are no longer just inconvenient outputs. They become infrastructure risk, security risk, financial risk, compliance risk, and operational risk.
                                </p>
                                <p className="text-purple-900 font-bold tracking-wide uppercase text-sm relative z-10">
                                    That is the gap Exogram was built to address.
                                </p>
                            </div>

                            <div>
                                <p>
                                    And I believe this problem becomes exponentially more important as the industry moves deeper into autonomous agents, multi-agent systems, AI-operated workflows, and machine-driven enterprise execution.
                                </p>
                                <p>
                                    Most companies today are still focused on making autonomous systems more capable. Far fewer are asking whether those systems should be trusted with execution authority in the first place. I believe that eventually becomes one of the defining infrastructure questions of enterprise AI.
                                </p>
                                <div className="mt-12 pt-8 border-t border-zinc-200">
                                    <p className="text-xl font-bold text-zinc-950 mb-6 leading-relaxed">
                                        Because enterprises do not actually need more probabilistic systems operating with unchecked authority. They need governed execution, deterministic operational control, and bounded autonomy.
                                    </p>
                                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                                        That is why I built Exogram.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Stack */}
                <section className="section bg-zinc-100 pt-0">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-8">The Stack</h2>
                        <p className="text-xl text-zinc-950 font-bold mb-12">Exogram is the missing layer in the AI stack.</p>
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
                                <span className="text-zinc-950 ml-4 font-bold">VERIFICATION</span>
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
                                LLMs generate language. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">Exogram maintains reality.</span>
                            </p>
                            <p className="text-lg md:text-xl text-zinc-950 font-bold mt-4 leading-relaxed max-w-3xl mx-auto">
                                Together, they enable intelligence that remembers, reasons, and can be trusted.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4-Layer Architecture Overview */}
                <section className="section">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-4 text-center">Verification Architecture</h2>
                        <p className="text-zinc-900 text-center mb-12 max-w-xl mx-auto">Four independent verification layers. Adopt incrementally. Each one reduces AI risk measurably.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { name: 'Schema Integrity Engine', desc: 'Validates every AI output against structural contracts. Catches hallucinated fields, missing data, and type mismatches in <5ms.', metric: '<5ms validation', cardClass: 'p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5', badgeClass: 'text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-cyan-500/30' },
                                { name: 'Boundary Control Protocol', desc: 'Enforces operational scope for AI agents using the EAAP protocol. Prevents unauthorized actions and scope creep.', metric: 'EAAP v1.0', cardClass: 'p-6 rounded-xl border border-purple-500/20 bg-purple-500/5', badgeClass: 'text-xs font-bold font-medium font-mono text-purple-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-purple-500/30' },
                                { name: 'Threat Prevention Layer', desc: 'Detects prompt injections, data exfiltration, PII leaks, and adversarial inputs with 99.2% accuracy.', metric: '99.2% detection', cardClass: 'p-6 rounded-xl border border-red-500/20 bg-red-500/5', badgeClass: 'text-xs font-bold font-medium font-mono text-red-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-red-500/30' },
                                { name: 'Memory Integrity System', desc: 'Cryptographic verification of AI memory. Prevents memory hallucinations and maintains cross-session consistency.', metric: 'Encrypted', cardClass: 'p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5', badgeClass: 'text-xs font-bold font-medium font-mono text-emerald-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-emerald-500/30' },
                            ].map(layer => (
                                <div key={layer.name} className={layer.cardClass}>
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-zinc-950 font-bold">{layer.name}</h3>
                                        <span className={layer.badgeClass}>{layer.metric}</span>
                                    </div>
                                    <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">{layer.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/exogram/architecture" className="text-sm font-semibold text-zinc-900 font-medium hover:text-purple-900 font-extrabold font-semibold transition-colors">
                                Deep dive into the architecture →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Industry Use Cases Preview */}
                <section className="section bg-zinc-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-4">Built for Every Industry Deploying AI</h2>
                        <p className="text-zinc-900 mb-10 max-w-xl mx-auto">Healthcare, finance, legal, and enterprise teams trust Exogram to verify AI outputs before they reach users.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { icon: '🏥', label: 'Healthcare', stat: '99.8% accuracy' },
                                { icon: '🏦', label: 'Financial Services', stat: '100% audit trail' },
                                { icon: '⚖️', label: 'Legal', stat: 'Zero hallucinated citations' },
                                { icon: '🤖', label: 'AI Agents', stat: '100% action verification' },
                                { icon: '🛒', label: 'E-Commerce', stat: '40% fewer tickets' },
                                { icon: '📚', label: 'Education', stat: '98% factual accuracy' },
                            ].map(uc => (
                                <div key={uc.label} className="p-5 rounded-xl bg-white/[0.03] border border-zinc-400 text-center">
                                    <span className="text-3xl block mb-2">{uc.icon}</span>
                                    <p className="text-sm font-semibold text-zinc-950 font-semibold mb-1">{uc.label}</p>
                                    <p className="text-[11px] text-purple-900 font-extrabold font-semibold font-mono">{uc.stat}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link href="/exogram/use-cases" className="text-sm font-semibold text-zinc-900 font-medium hover:text-purple-900 font-extrabold font-semibold transition-colors">
                                See all use cases →
                            </Link>
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
                                <p className="text-sm font-semibold text-zinc-900 font-medium">4 verification layers, performance specs, and integration methods.</p>
                            </Link>
                            <Link href="/exogram/use-cases" className="group p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 transition-all">
                                <span className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest">Industry</span>
                                <h3 className="text-xl font-bold text-zinc-950 mt-2 mb-2 group-hover:text-purple-900 font-extrabold font-semibold transition-colors">Use Cases</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">Healthcare, fintech, legal, and enterprise AI verification.</p>
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
                                <span className="text-purple-900 font-extrabold font-semibold">Exogram is what I&apos;m building to fix it.&quot;</span>
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

            </div>
        </main>
    );
}
