"use client";

/**
 * GovernanceDashboard — Interactive runtime governance control plane visualization
 * 
 * Shows what Exogram governance looks like in operation:
 * - Live policy evaluation feed
 * - Agent action decisions (ALLOW / MODIFY / ESCALATE / BLOCK)
 * - Runtime metrics (cost/session, confidence, retries, latency)
 * - Intervention log with cryptographic audit trail
 * 
 * Grounded in CIO research:
 * - CIOs want "control plane" dashboards, not post-facto logging
 * - Key pillars: Governance & Risk, Operational Performance, Financial ROI
 * - Must connect technical signals to business outcomes
 * - Need purpose-binding, runtime policy gates, tamper-evident audit
 */

import { useState, useEffect, useRef } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle, Clock, DollarSign, Activity, Lock } from 'lucide-react';

interface PolicyEvent {
    id: string;
    timestamp: string;
    agent: string;
    action: string;
    decision: 'ALLOW' | 'MODIFY' | 'ESCALATE' | 'BLOCK';
    reason: string;
    tokens: number;
    latency: string;
}

const sampleEvents: PolicyEvent[] = [
    { id: 'evt-1a', timestamp: '14:23:07', agent: 'data-analyst-v3', action: 'SELECT * FROM production_users', decision: 'BLOCK', reason: 'Unbounded query on PII table — requires scoped WHERE clause', tokens: 0, latency: '2ms' },
    { id: 'evt-2b', timestamp: '14:23:04', agent: 'code-review-bot', action: 'git push origin main --force', decision: 'BLOCK', reason: 'Force push to protected branch not on allowlist', tokens: 0, latency: '1ms' },
    { id: 'evt-3c', timestamp: '14:22:58', agent: 'support-copilot', action: 'Generate refund recommendation', decision: 'ALLOW', reason: 'Within authorized scope, confidence 94%, under cost ceiling', tokens: 1240, latency: '340ms' },
    { id: 'evt-4d', timestamp: '14:22:51', agent: 'onboarding-agent', action: 'Send welcome email sequence', decision: 'ALLOW', reason: 'Template-based action, deterministic routing, no LLM needed', tokens: 0, latency: '8ms' },
    { id: 'evt-5e', timestamp: '14:22:44', agent: 'research-agent', action: 'Summarize 47-page compliance doc', decision: 'MODIFY', reason: 'Downgraded from Opus to Sonnet — task complexity below frontier threshold', tokens: 3200, latency: '1.2s' },
    { id: 'evt-6f', timestamp: '14:22:38', agent: 'code-review-bot', action: 'Modify auth middleware', decision: 'ESCALATE', reason: 'Security-critical file — requires human approval before execution', tokens: 0, latency: '3ms' },
    { id: 'evt-7g', timestamp: '14:22:31', agent: 'data-analyst-v3', action: 'Generate quarterly revenue report', decision: 'ALLOW', reason: 'Read-only query on analytics schema, scoped to current quarter', tokens: 2100, latency: '890ms' },
    { id: 'evt-8h', timestamp: '14:22:24', agent: 'support-copilot', action: 'Access customer payment history', decision: 'BLOCK', reason: 'PCI-DSS scope violation — agent lacks financial data authorization', tokens: 0, latency: '1ms' },
];

const decisionStyles: Record<string, { bg: string; text: string; icon: React.ReactNode; border: string }> = {
    ALLOW: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', icon: <CheckCircle className="w-4 h-4" />, border: 'border-emerald-500/20' },
    MODIFY: { bg: 'bg-amber-500/10', text: 'text-amber-400', icon: <Activity className="w-4 h-4" />, border: 'border-amber-500/20' },
    ESCALATE: { bg: 'bg-violet-500/10', text: 'text-violet-400', icon: <Clock className="w-4 h-4" />, border: 'border-violet-500/20' },
    BLOCK: { bg: 'bg-rose-500/10', text: 'text-rose-400', icon: <XCircle className="w-4 h-4" />, border: 'border-rose-500/20' },
};

export default function GovernanceDashboard() {
    const [visibleEvents, setVisibleEvents] = useState(3);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [isVisible]);

    // Animate events appearing
    useEffect(() => {
        if (!isVisible) return;
        if (visibleEvents >= sampleEvents.length) return;
        const timer = setTimeout(() => {
            setVisibleEvents(prev => Math.min(prev + 1, sampleEvents.length));
        }, 800);
        return () => clearTimeout(timer);
    }, [isVisible, visibleEvents]);

    // Summary stats
    const blocked = sampleEvents.filter(e => e.decision === 'BLOCK').length;
    const modified = sampleEvents.filter(e => e.decision === 'MODIFY').length;
    const escalated = sampleEvents.filter(e => e.decision === 'ESCALATE').length;
    const allowed = sampleEvents.filter(e => e.decision === 'ALLOW').length;
    const totalTokensSaved = sampleEvents.filter(e => e.decision === 'BLOCK').reduce((acc) => acc + 4200, 0); // avg tokens prevented

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-zinc-950 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-4">
                        <Shield className="w-3 h-3" />
                        Runtime Governance Control Plane
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        What Governance{' '}
                        <span className="text-violet-400">Looks Like in Operation</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-sm">
                        Every agent action is evaluated against deterministic policy gates in real time.
                        Not confidence scores. Not probabilistic filters. Binary policy enforcement.
                    </p>
                </div>

                {/* Summary Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                        <p className="text-2xl font-bold text-emerald-400 font-mono">{allowed}</p>
                        <p className="text-xs text-zinc-500 font-mono uppercase mt-1">Allowed</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                        <p className="text-2xl font-bold text-amber-400 font-mono">{modified}</p>
                        <p className="text-xs text-zinc-500 font-mono uppercase mt-1">Modified</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                        <p className="text-2xl font-bold text-violet-400 font-mono">{escalated}</p>
                        <p className="text-xs text-zinc-500 font-mono uppercase mt-1">Escalated</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                        <p className="text-2xl font-bold text-rose-400 font-mono">{blocked}</p>
                        <p className="text-xs text-zinc-500 font-mono uppercase mt-1">Blocked</p>
                    </div>
                </div>

                {/* Policy Evaluation Feed */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                    {/* Feed header */}
                    <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-800 bg-zinc-900">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Live Policy Evaluation Feed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-3 h-3 text-zinc-600" />
                            <span className="text-xs font-mono text-zinc-600">SHA-256 Verified</span>
                        </div>
                    </div>

                    {/* Events */}
                    <div className="divide-y divide-zinc-800/50">
                        {sampleEvents.slice(0, visibleEvents).map((event, i) => {
                            const style = decisionStyles[event.decision];
                            return (
                                <div
                                    key={event.id}
                                    className={`px-6 py-4 transition-all duration-500 ${i === visibleEvents - 1 && isVisible ? 'animate-pulse' : ''}`}
                                    style={{ animationIterationCount: 1, animationDuration: '1s' }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                                        {/* Decision badge */}
                                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md ${style.bg} ${style.text} border ${style.border} text-xs font-mono font-bold w-fit`}>
                                            {style.icon}
                                            {event.decision}
                                        </div>

                                        {/* Event details */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-mono text-zinc-600">{event.timestamp}</span>
                                                <span className="text-xs font-mono text-zinc-500">{event.agent}</span>
                                            </div>
                                            <p className="text-sm text-zinc-300 font-mono truncate">{event.action}</p>
                                            <p className="text-xs text-zinc-500 mt-1">{event.reason}</p>
                                        </div>

                                        {/* Metrics */}
                                        <div className="flex items-center gap-4 text-xs font-mono text-zinc-600 flex-shrink-0">
                                            {event.tokens > 0 && (
                                                <span className="flex items-center gap-1">
                                                    <DollarSign className="w-3 h-3" />
                                                    {event.tokens.toLocaleString()} tok
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {event.latency}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-900 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                            <span>Avg evaluation latency: <span className="text-zinc-300 font-mono">2.1ms</span></span>
                            <span>Tokens saved by blocking: <span className="text-emerald-400 font-mono">~{totalTokensSaved.toLocaleString()}</span></span>
                        </div>
                        <span className="text-xs font-mono text-zinc-600">
                            <AlertTriangle className="w-3 h-3 inline mr-1" />
                            Every decision is immutably logged
                        </span>
                    </div>
                </div>

                {/* Bottom insight */}
                <div className="mt-8 text-center">
                    <p className="text-zinc-500 text-sm mb-1">
                        This is what deterministic governance looks like at runtime.
                    </p>
                    <p className="text-zinc-400 text-xs">
                        Not confidence scores. Not probabilistic filters. <span className="text-violet-400 font-semibold">Binary policy enforcement in under 3ms.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
