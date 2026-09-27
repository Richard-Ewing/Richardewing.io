'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Crosshair, 
  Cpu, 
  Briefcase, 
  Activity, 
  AlertTriangle, 
  Database, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Zap, 
  DownloadCloud, 
  FileText, 
  FileCheck, 
  Lock, 
  Sparkles,
  DollarSign
} from 'lucide-react';
import { BorderBeam } from '../../components/magicui/border-beam';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import NumberTicker from '../../components/magicui/number-ticker';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { loadDiagnosticSession } from '@/lib/storage/session';
import ExecutiveBoardDeckModal from '@/app/components/ExecutiveBoardDeckModal';
import EnterpriseSOWModal from '@/app/components/EnterpriseSOWModal';

export default function BoardRoom() {
    const { user, isLoaded } = useUser();
    const [runs, setRuns] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showBoardModal, setShowBoardModal] = useState(false);
    const [showSowModal, setShowSowModal] = useState(false);

    const [localSessions, setLocalSessions] = useState<{
        pdi: any;
        aueb: any;
        aper: any;
        agentRouter: any;
    }>({ pdi: null, aueb: null, aper: null, agentRouter: null });

    useEffect(() => {
        // Load local browser diagnostics from session storage
        const pdiData = loadDiagnosticSession('pdi');
        const auebData = loadDiagnosticSession('aueb');
        const aperData = loadDiagnosticSession('aper');
        const routerData = loadDiagnosticSession('agent-router');

        setLocalSessions({
            pdi: pdiData,
            aueb: auebData,
            aper: aperData,
            agentRouter: routerData
        });

        if (user) {
            fetch('/api/tools/runs')
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setRuns(data);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch runs:", err);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [user]);

    // Format currency helper
    const formatCurrency = (val: number) => {
        if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
        if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
        return `$${val.toFixed(0)}`;
    };

    // Calculate aggregated metrics from local sessions and cloud runs
    const pdiScore = localSessions.pdi?.score ?? 48;
    const pdiWaste = localSessions.pdi?.financials?.waste ?? 1450000;
    const auebMargin = localSessions.aueb?.grossMargin ?? 41.5;
    const auebMonthlyCost = localSessions.aueb?.monthlyCost ?? 24500;
    const aperMultiple = localSessions.aper?.multiplier ?? 2.1;
    const aperTotalCost = localSessions.aper?.totalEngCost ?? 4200000;
    const aperCoordinationTax = localSessions.aper?.coordinationTax ?? 22.5;
    const agentRouterCost = localSessions.agentRouter?.monthlyCost ?? 18400;

    // Total Capital Bleed Calculation
    const totalCapitalBleed = pdiWaste + (auebMonthlyCost * 12) + (aperTotalCost * (aperCoordinationTax / 100)) + (agentRouterCost * 12);
    
    // Composite Solvency Score (0-100)
    const compositeScore = Math.max(10, Math.min(95, Math.round(
        (0.40 * pdiScore) + (0.35 * auebMargin) + (0.25 * Math.min(100, aperMultiple * 20))
    )));

    const insolvencyHorizon = localSessions.aueb?.monthsToCollapse 
        ? (localSessions.aueb.monthsToCollapse <= 12 ? 'Q3 2027' : 'Q1 2028')
        : 'Q3 2027';

    const hasLocalData = !!(localSessions.pdi || localSessions.aueb || localSessions.aper || localSessions.agentRouter);

    return (
        <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-900 font-extrabold">
            {/* Grid Background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#f4f4f510_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f510_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Navigation Bar */}
            <nav className="border-b border-red-500/20 bg-white/70 backdrop-blur-xl sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                        <span className="font-bold tracking-widest text-sm font-semibold text-zinc-950 uppercase font-mono">
                            Capital Exposure War Room <span className="text-zinc-500 font-normal">| ALL DEPARTMENTS</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowBoardModal(true)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition shadow"
                        >
                            <FileText className="w-3.5 h-3.5 text-cyan-400" />
                            Board Deck Slip
                        </button>
                        <button
                            onClick={() => setShowSowModal(true)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-rose-500 transition shadow"
                        >
                            <FileCheck className="w-3.5 h-3.5" />
                            Formal SOW Proposal
                        </button>
                        <ExportToPDFButton targetId="board-room-matrix" fileName={`Enterprise_Threat_Matrix.pdf`} />
                    </div>
                </div>
            </nav>

            {/* Unauthenticated Session Banner */}
            {!user && (
                <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-2.5 text-xs text-zinc-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>
                            {hasLocalData 
                                ? 'Displaying active browser diagnostic session. Sign in to sync across executive devices and persist to company vault.' 
                                : 'Displaying benchmark enterprise portfolio baseline. Complete diagnostics (PDI, AUEB, APER) to calibrate to your exact numbers.'}
                        </span>
                    </div>
                    <Link href="/sign-in" className="font-bold text-zinc-900 hover:text-blue-600 uppercase font-mono tracking-wider">
                        Sign In to Persist &rarr;
                    </Link>
                </div>
            )}

            <main id="board-room-matrix" className="max-w-7xl mx-auto px-6 py-12 relative z-10 space-y-12">
                
                {/* GLOBAL THREAT MAP (CEO/BOARD) */}
                <ScrollReveal>
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Crosshair className="text-rose-500" />
                            <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tighter">
                                Consolidated Capital Exposure Matrix
                            </h2>
                        </div>
                        <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest hidden sm:block">
                            Fiscal Health: {compositeScore < 50 ? 'Critical Insolvency Alert' : 'Sub-Optimal Carry'}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <GlowCard className="p-6 bg-rose-50 border border-rose-200 rounded-2xl relative overflow-hidden group">
                            <BorderBeam size={100} duration={8} delay={0} colorFrom="#f43f5e" colorTo="#be123c" />
                            <div className="text-xs font-bold font-medium font-mono text-rose-500 uppercase tracking-widest mb-4">
                                Total Annual Capital Bleed
                            </div>
                            <div className="text-4xl font-black text-zinc-900">
                                {formatCurrency(totalCapitalBleed)}
                            </div>
                            <div className="mt-4 text-xs font-bold text-zinc-600 font-mono tracking-widest">
                                PDI Waste + Token COGS + Coordination Tax
                            </div>
                        </GlowCard>
                        
                        <GlowCard className="p-6 bg-cyan-50 border border-cyan-200 rounded-2xl relative overflow-hidden">
                            <BorderBeam size={100} duration={10} delay={2} colorFrom="#06b6d4" colorTo="#0284c7" />
                            <div className="text-xs font-bold font-medium font-mono text-cyan-500 uppercase tracking-widest mb-4">
                                Blended Insolvency Horizon
                            </div>
                            <div className="text-4xl font-black text-zinc-900">
                                {insolvencyHorizon}
                            </div>
                            <div className="mt-4 text-xs font-bold text-zinc-600 font-mono tracking-widest">
                                100% R&amp;D maintenance lock date
                            </div>
                        </GlowCard>

                        <GlowCard className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl relative overflow-hidden">
                            <BorderBeam size={100} duration={9} delay={4} colorFrom="#10b981" colorTo="#047857" />
                            <div className="text-xs font-bold font-medium font-mono text-emerald-500 uppercase tracking-widest mb-4">
                                AI Feature Gross Margin
                            </div>
                            <div className="text-4xl font-black text-zinc-900">
                                {auebMargin.toFixed(1)}%
                            </div>
                            <div className="mt-4 text-xs font-bold text-zinc-600 font-mono tracking-widest">
                                Net of multi-agent token billing
                            </div>
                        </GlowCard>

                        <GlowCard className="p-6 bg-purple-50 border border-purple-200 rounded-2xl relative overflow-hidden">
                            <BorderBeam size={100} duration={12} delay={6} colorFrom="#a855f7" colorTo="#7e22ce" />
                            <div className="text-xs font-bold font-medium font-mono text-purple-500 uppercase tracking-widest mb-4">
                                Composite Solvency Health
                            </div>
                            <div className="text-4xl font-black text-zinc-900">
                                {compositeScore} <span className="text-lg font-normal text-zinc-500">/ 100</span>
                            </div>
                            <div className="mt-4 text-xs font-bold text-zinc-600 font-mono tracking-widest">
                                Blended R&amp;D capitalization index
                            </div>
                        </GlowCard>
                    </div>
                </ScrollReveal>

                {/* DEPARTMENTAL PANELS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* ENGINEERING (CTO / VP ENG) */}
                    <ScrollReveal delay={100}>
                        <div className="bg-white/60 border border-zinc-400 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors shrink-0">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <Cpu className="text-blue-500 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-950 uppercase tracking-tight">Engineering &amp; Architecture</h3>
                                    <p className="text-xs font-bold font-mono text-blue-900 uppercase tracking-widest">VP of Engineering / CTO Desk</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-white/80 border border-zinc-400 rounded-xl border-l-2 border-l-blue-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold font-bold text-zinc-900">Product Debt Index (PDI)</span>
                                        <span className="text-xl font-black text-zinc-900">{pdiScore} / 100</span>
                                    </div>
                                    <p className="text-sm font-semibold font-medium text-zinc-950 leading-relaxed font-mono">
                                        Annual maintenance debt waste: <strong className="text-rose-600">{formatCurrency(pdiWaste)}</strong>. Non-value work currently consumes {100 - pdiScore}% of backlog bandwidth.
                                    </p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/pdi" className="text-xs font-bold font-medium uppercase tracking-widest text-blue-900 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                                            Recalibrate PDI &rarr;
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-5 bg-white/80 border border-zinc-400 rounded-xl border-l-2 border-l-purple-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold font-bold text-zinc-900">Agent Router &amp; FinOps Overrun</span>
                                        <span className="text-xl font-black text-zinc-900">{formatCurrency(agentRouterCost * 12)} / yr</span>
                                    </div>
                                    <p className="text-sm font-semibold font-medium text-zinc-950 leading-relaxed font-mono">
                                        Frontier model context compounding across autonomous multi-agent hops without edge semantic classification.
                                    </p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/agent-router" className="text-xs font-bold font-medium uppercase tracking-widest text-purple-900 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                                            Simulate Swarm Topology &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* FINANCE (CFO / CONTROLLER) */}
                    <ScrollReveal delay={200}>
                        <div className="bg-white/60 border border-zinc-400 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-colors shrink-0">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <Activity className="text-emerald-500 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-950 uppercase tracking-tight">Finance &amp; Unit Economics</h3>
                                    <p className="text-xs font-bold font-mono text-emerald-900 uppercase tracking-widest">CFO / Director of Finance</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-white/80 border border-zinc-400 rounded-xl border-l-2 border-l-emerald-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold font-bold text-zinc-900">AI Unit Economics Benchmark (AUEB)</span>
                                        <span className="text-xl font-black text-zinc-950 text-right">{auebMargin.toFixed(1)}% Margin</span>
                                    </div>
                                    <p className="text-sm font-semibold font-medium text-zinc-950 leading-relaxed font-mono">
                                        Direct API spend of <strong className="text-rose-600">{formatCurrency(auebMonthlyCost)}/mo</strong> threatens subscription profitability as usage scales.
                                    </p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/aueb" className="text-xs font-bold font-medium uppercase tracking-widest text-emerald-900 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                                            Recalibrate AUEB &rarr;
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-5 bg-white/80 border border-zinc-400 rounded-xl border-l-2 border-l-cyan-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold font-bold text-zinc-900">Revenue Multiple (APER)</span>
                                        <span className="text-xl font-black text-zinc-900">{aperMultiple.toFixed(2)}x Multiple</span>
                                    </div>
                                    <p className="text-sm font-semibold font-medium text-zinc-950 leading-relaxed font-mono">
                                        Coordination tax drains <strong className="text-rose-600">{aperCoordinationTax.toFixed(1)}%</strong> of engineering payroll into alignment and review friction.
                                    </p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/aper" className="text-xs font-bold font-medium uppercase tracking-widest text-cyan-900 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                                            Recalibrate APER &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* SECURITY & GOVERNANCE (CISO / INFRA) */}
                    <ScrollReveal delay={300}>
                        <div className="bg-white/60 border border-zinc-400 rounded-3xl p-8 relative overflow-hidden group hover:border-amber-500/30 transition-colors shrink-0">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <ShieldAlert className="text-amber-500 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-950 uppercase tracking-tight">Security &amp; Shadow AI</h3>
                                    <p className="text-xs font-bold font-mono text-amber-500 uppercase tracking-widest">CISO / Infosec Desk</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-white/80 border border-zinc-400 rounded-xl border-l-2 border-l-amber-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold font-bold text-zinc-900">Model Context Protocol (MCP) Audit</span>
                                        <span className="text-xl font-black text-zinc-950 text-right">Active Assessment</span>
                                    </div>
                                    <p className="text-sm font-semibold font-medium text-zinc-950 leading-relaxed font-mono">
                                        Evaluates prompt injection vulnerability, dynamic schema poisoning, and un-sandboxed STDIO transport risks.
                                    </p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/mcp-security-auditor" className="text-xs font-bold font-medium uppercase tracking-widest text-amber-500 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                                            Run MCP Security Audit &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* PRIVATE EQUITY & M&A DUE DILIGENCE */}
                    <ScrollReveal delay={400}>
                        <div className="bg-white/60 border border-zinc-400 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-500/50 transition-colors h-full shrink-0">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-zinc-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <Briefcase className="text-zinc-950 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-950 uppercase tracking-tight">M&amp;A Due Diligence</h3>
                                    <p className="text-xs font-bold font-mono text-zinc-900 uppercase tracking-widest">Private Equity &amp; Deal Teams</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-white/80 border border-zinc-400 rounded-xl border-l-2 border-l-zinc-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold font-bold text-zinc-900">Technical Debt Diligence</span>
                                        <span className="text-xl font-black text-zinc-950 text-right">Investment Ready</span>
                                    </div>
                                    <p className="text-sm font-semibold font-medium text-zinc-950 leading-relaxed font-mono">
                                        Forensic code audit converting hidden tech debt into deal valuation discount currency before close.
                                    </p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/due-diligence" className="text-xs font-bold font-medium uppercase tracking-widest text-zinc-950 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                                            Run M&amp;A Diligence &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>

                {/* Advisory CTA */}
                <div className="page-container max-w-4xl mx-auto">
                    <AdvisoryCTA variant="tool-result" />
                </div>
            </main>

            {/* Consolidated Executive Board Deck Modal */}
            <ExecutiveBoardDeckModal
                isOpen={showBoardModal}
                onClose={() => setShowBoardModal(false)}
                toolName="Consolidated Enterprise Capital Exposure Audit"
                toolSlug="board-room"
                score={compositeScore}
                scoreLabel={compositeScore < 50 ? 'Critical Insolvency Exposure' : 'Sub-Optimal R&D Capitalization'}
                metrics={[
                    { label: 'Total Annual Capital Bleed', value: formatCurrency(totalCapitalBleed), isNegative: true, subtext: 'PDI + AI COGS + Coordination Tax' },
                    { label: 'Blended Insolvency Horizon', value: insolvencyHorizon, subtext: '100% capacity lock date' },
                    { label: 'Product Debt Index Score', value: `${pdiScore} / 100`, isNegative: pdiScore < 50 },
                    { label: 'Net AI Feature Margin', value: `${auebMargin.toFixed(1)}%`, isNegative: auebMargin < 50 },
                    { label: 'Revenue Multiple (APER)', value: `${aperMultiple.toFixed(2)}x` },
                    { label: 'Coordination Tax Load', value: `${aperCoordinationTax.toFixed(1)}%`, isNegative: true }
                ]}
                executiveSummary={[
                    `The consolidated enterprise audit reveals an aggregate annual capital bleed of ${formatCurrency(totalCapitalBleed)} across engineering debt, AI inference fees, and organizational coordination tax.`,
                    `Compounding maintenance interest and un-gated AI API consumption mathematically project a blended Technical Insolvency Horizon of ${insolvencyHorizon}.`,
                    `Deploying the Sovereign Runtime Architecture and CapEx quarantine protocol reclaims an estimated 20% to 35% of lost R&D velocity within 90 days.`
                ]}
                remediationPlaybook={[
                    {
                        step: '01',
                        title: 'CapEx Quarantine & Debt Cap',
                        directive: 'Freeze net-new feature additions on any software domain operating above 35% maintenance allocation.',
                        actionItem: 'Institute the Win Locker gate: zero pull request approvals until the debt ratio decreases by 15%.'
                    },
                    {
                        step: '02',
                        title: 'Deploy Intent Router & Caching Proxy',
                        directive: 'Intercept repetitive prompt embeddings at >= 0.92 cosine similarity to deflect 40% to 60% of baseline queries.',
                        actionItem: 'Triage queries between local 8B open weights models and external frontier APIs to protect gross margin.'
                    },
                    {
                        step: '03',
                        title: 'Institute Pre-Commit Schema Assertion',
                        directive: 'Block raw AI-generated pull request boilerplate before it reaches human code review queues.',
                        actionItem: 'Enforce deterministic verification gates and token budget circuit breakers across all agent loops.'
                    }
                ]}
                remediationTrack={{
                    trackNumber: 3,
                    title: 'R&D Capital Management & Executive Reporting',
                    href: '/vault/curriculum/tracks/track-03'
                }}
                blueprint={{
                    title: 'Sovereign Agent Gateway & Capital Governance Blueprint',
                    href: '/vault/blueprints'
                }}
                roleContext="CEO"
            />

            {/* Formal Statement of Work Proposal Modal */}
            <EnterpriseSOWModal
                isOpen={showSowModal}
                onClose={() => setShowSowModal(false)}
                clientName="Executive Board of Directors"
                annualWaste={totalCapitalBleed}
                pdiScore={pdiScore}
                grossMargin={Math.round(auebMargin)}
                arrPerEngineer={Math.round(aperTotalCost / 20)}
                insolvencyHorizon={insolvencyHorizon}
                recommendedRemediation={[
                    'Freeze feature delivery on quarantined modules operating above 35% maintenance allocation.',
                    'Deploy semantic intent router to deflect 40% to 60% of baseline LLM inference queries.',
                    'Institute pre-commit schema assertion gates to eliminate AI pull request review bottlenecks.'
                ]}
            />
        </div>
    );
}
