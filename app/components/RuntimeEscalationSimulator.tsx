"use client";

/**
 * RuntimeEscalationSimulator — Interactive visualization of AI failure cascades
 * 
 * Shows how a single governance gap (context drift) escalates through:
 * Context Drift → Retry Inflation → Verification Collapse → Margin Compression → Runtime Intervention
 * 
 * Each stage shows: token burn, latency, confidence, cost
 * Auto-plays on scroll, with manual stage controls.
 * 
 * This is the "operationally undeniable" component — makes visitors FEEL the danger.
 * 
 * Grounded in real practitioner data:
 * - Reddit: retry loops burning $47K overnight
 * - HN: coding agents running 47 retries per task
 * - Enterprise: 78% of agents over-privileged
 */

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AlertTriangle, TrendingUp, ShieldOff, DollarSign, Shield, ChevronRight } from 'lucide-react';

interface Stage {
    id: number;
    name: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    borderColor: string;
    metrics: {
        tokens: string;
        latency: string;
        confidence: string;
        costPerRequest: string;
    };
    description: string;
    trigger: string;
}

const stages: Stage[] = [
    {
        id: 0,
        name: 'Nominal',
        icon: <Shield className="w-5 h-5" />,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-500',
        borderColor: 'border-emerald-500/30',
        metrics: { tokens: '2,400', latency: '340ms', confidence: '94%', costPerRequest: '$0.003' },
        description: 'System operating normally. Single inference pass, direct response.',
        trigger: 'Agent completes task on first attempt',
    },
    {
        id: 1,
        name: 'Context Drift',
        icon: <AlertTriangle className="w-5 h-5" />,
        color: 'text-amber-500',
        bgColor: 'bg-amber-500',
        borderColor: 'border-amber-500/30',
        metrics: { tokens: '8,200', latency: '1.2s', confidence: '81%', costPerRequest: '$0.012' },
        description: 'Agent loses track of prior context. Starts re-reading files, re-inferring state. Token count triples.',
        trigger: 'Session exceeds 40K tokens or 15 minutes',
    },
    {
        id: 2,
        name: 'Retry Inflation',
        icon: <TrendingUp className="w-5 h-5" />,
        color: 'text-orange-500',
        bgColor: 'bg-orange-500',
        borderColor: 'border-orange-500/30',
        metrics: { tokens: '34,800', latency: '4.7s', confidence: '62%', costPerRequest: '$0.048' },
        description: 'Agent retries failed operations. Each retry sends full context + error trace. 12 retries before failing.',
        trigger: 'First failed action triggers retry cascade',
    },
    {
        id: 3,
        name: 'Verification Collapse',
        icon: <ShieldOff className="w-5 h-5" />,
        color: 'text-rose-500',
        bgColor: 'bg-rose-500',
        borderColor: 'border-rose-500/30',
        metrics: { tokens: '127,000', latency: '18s', confidence: '34%', costPerRequest: '$0.19' },
        description: 'Agent cannot verify its own output. Hallucinates fixes. Rewrites unrelated files. Confidence plummets.',
        trigger: 'Retry count exceeds budget, no rollback policy',
    },
    {
        id: 4,
        name: 'Margin Collapse',
        icon: <DollarSign className="w-5 h-5" />,
        color: 'text-red-500',
        bgColor: 'bg-red-500',
        borderColor: 'border-red-500/30',
        metrics: { tokens: '412,000', latency: '47s', confidence: '12%', costPerRequest: '$0.62' },
        description: 'Cost per operation exceeds revenue per user. Feature becomes a liability. 200x cost inflation from nominal.',
        trigger: 'No cost ceiling, no admissibility gate, no kill switch',
    },
];

function MetricBar({ label, value, percentage, color }: { label: string; value: string; percentage: number; color: string }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between items-baseline">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{label}</span>
                <span className="text-sm font-bold text-zinc-100 font-mono">{value}</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${color}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}

export default function RuntimeEscalationSimulator() {
    const [activeStage, setActiveStage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Auto-play when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    setIsAutoPlaying(true);
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [isVisible]);

    // Auto-advance through stages
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setActiveStage(prev => {
                if (prev >= stages.length - 1) {
                    setIsAutoPlaying(false);
                    return prev;
                }
                return prev + 1;
            });
        }, 2200);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const stage = stages[activeStage];
    const tokenPct = Math.min(100, (activeStage / 4) * 100);
    const latencyPct = Math.min(100, (activeStage / 4) * 100);
    const confidencePct = 100 - (activeStage / 4) * 82;
    const costPct = Math.min(100, (activeStage / 4) * 100);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-zinc-950 text-white">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono uppercase tracking-wider mb-4">
                        Runtime Failure Simulation
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        How a Single Governance Gap{' '}
                        <span className="text-rose-400">Destroys Margins</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-sm">
                        Watch an uncontained AI agent escalate from nominal operation to margin collapse.
                        Each stage is preventable with deterministic governance.
                    </p>
                </div>

                {/* Stage Timeline */}
                <div className="flex items-center justify-between mb-10 overflow-x-auto pb-2">
                    {stages.map((s, i) => (
                        <button
                            key={s.id}
                            onClick={() => { setActiveStage(i); setIsAutoPlaying(false); }}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm font-medium whitespace-nowrap ${
                                i === activeStage
                                    ? `${s.color} bg-white/10 border border-white/10`
                                    : i < activeStage
                                    ? `${s.color} opacity-60`
                                    : 'text-zinc-400'
                            }`}
                        >
                            {s.icon}
                            <span className="hidden sm:inline">{s.name}</span>
                            {i < stages.length - 1 && (
                                <ChevronRight className="w-4 h-4 text-zinc-500 ml-1" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Main Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Left: Stage detail */}
                    <div className={`rounded-2xl border ${stage.borderColor} bg-white/5 p-8 transition-all duration-500`}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-lg ${stage.bgColor}/20 flex items-center justify-center ${stage.color}`}>
                                {stage.icon}
                            </div>
                            <div>
                                <h3 className={`text-lg font-bold ${stage.color}`}>
                                    Stage {stage.id}: {stage.name}
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">
                                    {stage.trigger}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                            {stage.description}
                        </p>

                        {/* Stage-specific metric cards */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg bg-white/5 p-3 text-center">
                                <p className="text-xs text-zinc-500 font-mono uppercase">Tokens</p>
                                <p className={`text-lg font-bold font-mono ${stage.color}`}>{stage.metrics.tokens}</p>
                            </div>
                            <div className="rounded-lg bg-white/5 p-3 text-center">
                                <p className="text-xs text-zinc-500 font-mono uppercase">Latency</p>
                                <p className={`text-lg font-bold font-mono ${stage.color}`}>{stage.metrics.latency}</p>
                            </div>
                            <div className="rounded-lg bg-white/5 p-3 text-center">
                                <p className="text-xs text-zinc-500 font-mono uppercase">Confidence</p>
                                <p className={`text-lg font-bold font-mono ${stage.color}`}>{stage.metrics.confidence}</p>
                            </div>
                            <div className="rounded-lg bg-white/5 p-3 text-center">
                                <p className="text-xs text-zinc-500 font-mono uppercase">Cost/Req</p>
                                <p className={`text-lg font-bold font-mono ${stage.color}`}>{stage.metrics.costPerRequest}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Metric bars + escalation */}
                    <div className="space-y-6">
                        <MetricBar label="Token Burn" value={stage.metrics.tokens} percentage={tokenPct} color="bg-amber-500" />
                        <MetricBar label="Latency" value={stage.metrics.latency} percentage={latencyPct} color="bg-orange-500" />
                        <MetricBar label="Confidence" value={stage.metrics.confidence} percentage={confidencePct} color="bg-emerald-500" />
                        <MetricBar label="Cost / Request" value={stage.metrics.costPerRequest} percentage={costPct} color="bg-rose-500" />

                        {/* Cost multiplier callout */}
                        <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 mt-4">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider">Cost Multiplier vs. Nominal</span>
                                <span className="text-2xl font-bold text-rose-400 font-mono">
                                    {activeStage === 0 ? '1×' : activeStage === 1 ? '4×' : activeStage === 2 ? '16×' : activeStage === 3 ? '63×' : '207×'}
                                </span>
                            </div>
                            <p className="text-xs text-zinc-500">
                                {activeStage === 4
                                    ? 'Without governance: every $100 of nominal compute becomes $20,700.'
                                    : activeStage === 0
                                    ? 'Baseline: deterministic governance keeps costs at nominal.'
                                    : 'Escalating. Each stage compounds the previous.'}
                            </p>
                        </div>

                        {/* Governance interception */}
                        <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
                            <p className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-2">Governance Interception Point</p>
                            <p className="text-sm text-zinc-300">
                                {activeStage <= 1
                                    ? 'Admissibility gate blocks unapproved operations. Context budget enforced.'
                                    : activeStage === 2
                                    ? 'Retry budget caps retries at 3. State integrity hash triggers rollback.'
                                    : activeStage === 3
                                    ? 'Kill switch activated. Agent suspended. Audit trail preserved.'
                                    : 'Without governance, this escalation runs to completion every time.'}
                            </p>
                            <Link
                                href="/exogram/architecture"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-violet-300 mt-2 transition-colors"
                            >
                                See the Exogram interception architecture →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-zinc-500 text-sm mb-4">
                        This escalation runs on every uncontained AI agent, every session, every day.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/diagnose"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                        >
                            Diagnose Your Risk Exposure →
                        </Link>
                        <Link
                            href="/runtime-failure-index"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 font-bold text-sm hover:border-violet-500 hover:text-white transition-all"
                        >
                            Browse the Failure Database
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
