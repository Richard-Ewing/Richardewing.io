'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, DollarSign, Lock, Activity, Users, Target, Code, Database, BrainCircuit, ShieldOff, Zap } from 'lucide-react';
import Link from 'next/link';
import ToolCelebration from '../../components/ToolCelebration';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';
import { VaultUpsell } from '../../components/VaultUpsell';
import styles from './styles.module.css';

const NumberTicker = ({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        const start = 0;
        const end = value;
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOut;
            setDisplay(current);

            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [value]);

    return <span className="tabular-nums">{prefix}{display.toLocaleString('en-US', { maximumFractionDigits: suffix === '%' ? 1 : 0 })}{suffix}</span>;
};

const BentoCard = ({ children, title, icon: Icon, className = '' }: { children: React.ReactNode; title: string; icon?: React.ComponentType<{ size?: number }>; className?: string }) => (
    <div className={`relative overflow-hidden rounded-2xl border border-zinc-400 bg-white/60 p-6 backdrop-blur-md ${className}`}>
        <div className="flex items-center gap-2 mb-4 text-zinc-900">
            {Icon && <Icon size={14} />}
            <span className="text-xs font-bold font-medium font-mono uppercase tracking-widest">{title}</span>
        </div>
        {children}
    </div>
);

// Improved Gauge Chart
const GaugeChart = ({ value }: { value: number }) => {
    const percentage = Math.min(100, Math.max(0, value));
    const rotation = (percentage / 100) * 180 - 90;

    const getColor = () => {
        if (value >= 80) return '#dc2626'; // High Risk (Red)
        if (value >= 50) return '#f97316'; // Medium Risk (Orange)
        if (value >= 30) return '#eab308'; // Low Risk (Yellow)
        return '#22c55e'; // Safe (Green)
    };

    return (
        <div className="relative w-full max-w-[280px] mx-auto aspect-[2/1]">
            <div className="absolute inset-0 flex items-end justify-center">
                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                    {/* Track */}
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#27272a" strokeWidth="12" strokeLinecap="round" />
                    {/* Fill */}
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke={getColor()} strokeWidth="12" strokeLinecap="round" strokeDasharray={`${percentage * 2.51} 251`} className="transition-all duration-1000 ease-out" />
                    {/* Needle */}
                    <g transform={`rotate(${rotation} 100 100)`} className="transition-transform duration-1000 ease-out">
                        <line x1="100" y1="100" x2="100" y2="35" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="100" cy="100" r="6" fill="#fff" />
                    </g>
                </svg>
                <div className="absolute bottom-0 text-center translate-y-8">
                    <div className="text-4xl font-bold text-zinc-950 tracking-tighter">{value.toFixed(0)}</div>
                </div>
            </div>
        </div>
    );
};

// --- PERSONA TYPES ---
type RiskProfile = 'Venture Capital' | 'Private Equity' | 'Strategic Acquirer';

const PROFILES: { id: RiskProfile; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Private Equity', label: 'Private Equity (Buyout)', icon: Target },
    { id: 'Venture Capital', label: 'Venture Capital (Growth)', icon: Activity },
    { id: 'Strategic Acquirer', label: 'Strategic Acquirer (M&A)', icon: Users },
];

interface DueDiligenceResults {
    riskScore: number;
    valuationImpairment: number;
    techDebtRecoveryCost: number;
    securityRefactorCost: number;
    annualInfraWaste: number;
    engineeringEfficiency: number;
    redFlags: string[];
    threatVectors: { name: string; severity: number; details: string; color: string; icon: React.ComponentType<{size?: number; className?: string}> }[];
    qpepRoadmap: any;
}

export default function DueDiligenceTool() {
    const [profile, setProfile] = useState<RiskProfile>('Private Equity');
    const [step, setStep] = useState(1);
    const [isSaving, setIsSaving] = useState(false);
    const [showPaywall, setShowPaywall] = useState(false);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<DueDiligenceResults | null>(null);

    // Form Inputs
    const [arr, setArr] = useState('10000000');
    const [engineers, setEngineers] = useState('45');
    const [codebaseAge, setCodebaseAge] = useState('5');
    const [cloudSpend, setCloudSpend] = useState('65000');
    
    // Checkboxes
    const [hasCompliance, setHasCompliance] = useState(false);
    const [hasOffshore, setHasOffshore] = useState(false);
    const [heavyAiDependency, setHeavyAiDependency] = useState(false);
    const [monolith, setMonolith] = useState(true);

    const handleSaveAndExport = async () => {
        setIsSaving(true);
        try {
            // Check paywall
            const res = await fetch('/api/tools/pdi/save', { // Using PDI endpoint as general paygate dummy check for now
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ run_data: { tool: 'due-diligence' } })
            });
            const data = await res.json();
            
            if (res.status === 402 && data.error === 'PAYMENT_REQUIRED') {
                setShowPaywall(true);
                return;
            }

            const element = document.getElementById('dd-pdf-export-zone');
            if (!element) return;
            const dataUrl = await toPng(element, { quality: 1.0, backgroundColor: '#050505', pixelRatio: 2 });
            const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: [element.offsetWidth, element.offsetHeight] });
            pdf.addImage(dataUrl, 'PNG', 0, 0, element.offsetWidth, element.offsetHeight);
            pdf.save(`Engineering_Due_Diligence_${profile}.pdf`);
        } catch (error: any) {
            console.error(error);
            alert(`Export failed: ${error.message || "Unknown error"}`);
        } finally {
            setIsSaving(false);
        }
    };

    const calculate = () => {
        setLoading(true);
        setTimeout(() => {
            const arrNum = parseFloat(arr) || 0;
            const engNum = parseFloat(engineers) || 0;
            const ageNum = parseFloat(codebaseAge) || 0;
            const cloudNum = parseFloat(cloudSpend) || 0;

            let baseScore = 20;
            const redFlags: string[] = [];

            // Headcount efficiency check ($250k ARR per engineer is median)
            const arrPerEng = engNum > 0 ? arrNum / engNum : 0;
            let engEfficiency = 100;
            if (arrPerEng < 150000) {
                baseScore += 25;
                redFlags.push('Severe Engineering Bloat (Low Revenue per Headcount)');
                engEfficiency = 40;
            } else if (arrPerEng < 250000) {
                baseScore += 10;
                engEfficiency = 70;
            }

            // Architecture check
            if (monolith && ageNum >= 5) {
                baseScore += 20;
                redFlags.push('Legacy Monolith requires extraction roadmap');
            }
            if (hasOffshore && !hasCompliance) {
                baseScore += 15;
                redFlags.push('Offshore engineering with poor compliance controls (High DPIA Risk)');
            }

            // Cloud spend waste (Assume 4% of ARR is standard SaaS cloud cost)
            const annualCloud = cloudNum * 12;
            let infraWaste = 0;
            if (annualCloud > arrNum * 0.08) {
                infraWaste = annualCloud - (arrNum * 0.04);
                baseScore += 15;
                redFlags.push(`Cloud spend is highly inefficient ($${(infraWaste/1000000).toFixed(2)}M annual waste estimated)`);
            }

            // AI Risk
            if (heavyAiDependency) {
                baseScore += 15;
                redFlags.push('Heavy AI dependency creates undocumented third-party API exposure');
            }

            const finalRiskScore = Math.min(100, Math.max(0, baseScore));
            
            // Valuation impairment is heavily tied to the risk score and ARR
            const valuationImpairment = (finalRiskScore / 100) * (arrNum * 0.5); // Example heuristic: a 100% risk score impairs 0.5x ARR from the multiple
            
            // Recovery costs
            const techDebtRecoveryCost = engNum * 15000 * (ageNum / 5); // Example: $15k per engineer per 5 years of tech debt
            const securityRefactorCost = hasCompliance ? 50000 : 250000;

            const threatVectors = [
                {
                    name: 'Technical Debt',
                    severity: Math.min(100, ageNum * 10 + (monolith ? 30 : 0)),
                    details: monolith ? 'Monolithic legacy core identified.' : 'Microservice orchestration tax.',
                    color: 'bg-yellow-500',
                    icon: Database
                },
                {
                    name: 'Cloud Inefficiency',
                    severity: Math.min(100, (annualCloud / Math.max(1, arrNum)) * 1000),
                    details: infraWaste > 0 ? 'Excessive cloud OPEX drag.' : 'Optimized infrastructure.',
                    color: infraWaste > 0 ? 'bg-red-500' : 'bg-emerald-500',
                    icon: Activity
                },
                {
                    name: 'Security & Compliance',
                    severity: hasCompliance ? 20 : 85,
                    details: !hasCompliance ? 'Missing SOC2/ISO controls.' : 'Baseline compliance established.',
                    color: !hasCompliance ? 'bg-red-500' : 'bg-emerald-500',
                    icon: ShieldOff
                },
                {
                    name: 'AI Supply Chain Risk',
                    severity: heavyAiDependency ? 90 : 30,
                    details: heavyAiDependency ? 'Critical data leakage/LLM lock-in.' : 'Low AI supply chain exposure.',
                    color: heavyAiDependency ? 'bg-red-500' : 'bg-emerald-500',
                    icon: BrainCircuit
                }
            ];

            const generatedQpepRoadmap = [
                {
                    month: 1,
                    focus: "Triage & Containment",
                    actionItems: [
                        redFlags.length > 0 ? "Execute Emergency Red Flag Remediation" : "Establish baseline observability metrics",
                        infraWaste > 0 ? "Freeze non-essential cloud provisioning immediately" : "Lock down IAM and RBAC roles across environments",
                        "Audit top 20% of engineering salary allocation vs output"
                    ]
                },
                {
                    month: 2,
                    focus: "Structural Restructuring",
                    actionItems: [
                        monolith ? "Begin bounded context extraction (Strangler Fig)" : "Optimize distributed service transaction latencies",
                        hasCompliance ? "Automate compliance evidence collection" : "Perform rigorous gap analysis for SOC2 readiness",
                        heavyAiDependency ? "Air-gap sensitive tenant data from public LLM APIs" : "Audit core proprietary IP boundaries & licenses"
                    ]
                },
                {
                    month: 3,
                    focus: "Valuation Accretion",
                    actionItems: [
                        "Enforce strict 70/20/10 (Feature/Debt/R&D) capacity allocation",
                        engEfficiency < 50 ? "Execute targeted restructuring for low-leverage headcount" : "Scale high-leverage engineering squads",
                        "Present clean Technical Diligence Posture to Board"
                    ]
                }
            ];

            const payload: DueDiligenceResults = {
                riskScore: finalRiskScore,
                valuationImpairment,
                techDebtRecoveryCost,
                securityRefactorCost,
                annualInfraWaste: infraWaste,
                engineeringEfficiency: engEfficiency,
                redFlags,
                threatVectors: threatVectors.sort((a,b) => b.severity - a.severity),
                qpepRoadmap: generatedQpepRoadmap
            };

            setResults(payload);
            setLoading(false);
            
            // Record the tool run telemetry
            fetch('/api/tools/runs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tool_id: 'DUE-DILIGENCE',
                    run_data: { arr: arrNum, engineers: engNum, codebaseAge: ageNum, cloudSpend: cloudNum, hasCompliance, hasOffshore, heavyAiDependency, monolith, profile },
                    output_metrics: payload
                })
            }).catch(console.error);

        }, 1200);
    };

    const getRiskStatus = (score: number) => {
        if (score >= 80) return { text: 'CRITICAL RISK', color: 'text-red-900 font-extrabold', sub: 'Do not acquire without heavy impairment.' };
        if (score >= 50) return { text: 'HIGH RISK', color: 'text-orange-500', sub: 'Significant tech debt. Mandate holdbacks.' };
        if (score >= 30) return { text: 'MODERATE', color: 'text-yellow-900 font-extrabold font-semibold', sub: 'Standard integration friction expected.' };
        return { text: 'CLEAN BILL OF HEALTH', color: 'text-emerald-900 font-extrabold font-semibold', sub: 'Strong engineering fundamentals.' };
    };

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(2);
    };

    return (
        <div className="min-h-screen bg-white text-zinc-950 font-bold selection:bg-cyan-500/30 font-sans">
            <ToolCelebration show={!!results} toolName="Due Diligence Diagnostics" />
            
            {/* MONETIZATION ENGINE: PAYWALL MODAL ($999 TIER) */}
            {showPaywall && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm" data-html2canvas-ignore>
                    <div className="bg-white border border-zinc-400 rounded-3xl max-w-md w-full p-8 relative shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                                <Lock className="w-5 h-5 text-red-900 font-extrabold font-semibold" />
                            </div>
                            
                            <h3 className="text-3xl font-bold text-zinc-950 mb-2 font-grotesk tracking-tight">Enterprise Scanner Locked.</h3>
                            <p className="text-zinc-900 text-sm font-semibold mb-6 leading-relaxed">
                                This is a professional-grade M&A execution tool. Full access requires the Private Equity Intelligence Tier. 
                            </p>
                            
                            <div className="bg-white/5 border border-zinc-400 rounded-xl p-4 mb-6">
                                <div className="text-sm font-semibold font-bold text-zinc-950 mb-2 text-center">Private Equity Pass</div>
                                <div className="text-3xl font-bold text-cyan-900 font-extrabold font-semibold text-center mb-4">$999<span className="text-sm font-semibold text-zinc-950 font-normal">/yr</span></div>
                                <ul className="text-xs font-bold font-medium text-zinc-900 space-y-2 font-mono uppercase tracking-widest">
                                    <li className="flex items-center gap-2">• Unlimited M&A PDF Exports</li>
                                    <li className="flex items-center gap-2">• Q-PEP Remediation Roadmaps</li>
                                    <li className="flex items-center gap-2">• CISO Dashboard Access</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <a href="/api/buy/pe_intelligence_tier" className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-zinc-950 font-semibold font-bold uppercase tracking-widest text-xs font-bold rounded-xl transition-all shadow-lg">
                                    Upgrade to PE Tier
                                </a>
                                <button 
                                    onClick={() => setShowPaywall(false)} 
                                    className="flex items-center justify-center w-full py-3 bg-transparent hover:bg-white/5 text-zinc-900 font-bold uppercase tracking-widest text-xs font-bold rounded-xl transition-all"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* HEADER */}
            <nav className="border-b border-zinc-400 bg-white/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#dc2626]" />
                        <span className="font-bold tracking-tight text-lg">M&A DILIGENCE <span className="text-zinc-950 font-bold font-normal">| Enterprise Scanner</span></span>
                    </div>
                    <Link href="/advisory" className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-900 hover:text-zinc-900 transition-colors uppercase tracking-widest">
                        <ShieldAlert size={12} />
                        Request Deep Audit
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <AnimatePresence mode="wait">
                    {!results ? (
                        /* --- INPUT STATE --- */
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-950 mb-6">
                                    Calculate Acquisition <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Impairment Risk</span>
                                </h1>
                                <p className="text-xl text-zinc-900">Scan acquisition targets for critical technical debt, security vectors, and engineering bloat before you write the check.</p>
                            </div>

                            {/* PERSONA SELECTOR */}
                            <div className="mb-8">
                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3">Firm Type</div>
                                <div className="flex flex-wrap gap-2">
                                    {PROFILES.map(p => (
                                        <button
                                            key={p.id}
                                            onClick={() => setProfile(p.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${profile === p.id
                                                ? 'bg-red-500/10 border-red-500 text-red-900 font-extrabold font-semibold'
                                                : 'bg-white/80 border-zinc-400 text-zinc-900 hover:border-white/30'
                                                }`}
                                        >
                                            <p.icon size={14} />
                                            {p.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/40 p-8 rounded-3xl border border-zinc-400 backdrop-blur-sm shadow-2xl space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-200">
                                    <div className={`h-full bg-red-600 transition-all duration-500 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`} />
                                </div>
                                
                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                                        <div>
                                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">Financial & Team Baseline</div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Target ARR</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">$</span>
                                                        <input type="number" title="Target ARR" aria-label="Target ARR" value={arr} onChange={(e) => setArr(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-red-500 focus:outline-none" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Monthly Cloud Spend</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">$</span>
                                                        <input type="number" title="Monthly Cloud Spend" aria-label="Monthly Cloud Spend" value={cloudSpend} onChange={(e) => setCloudSpend(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-red-500 focus:outline-none" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Total Engineering Headcount</label>
                                                    <input type="number" title="Total Engineering Headcount" aria-label="Total Engineering Headcount" value={engineers} onChange={(e) => setEngineers(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-red-500 focus:outline-none" />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Codebase Age (Years)</label>
                                                    <input type="number" title="Codebase Age (Years)" aria-label="Codebase Age (Years)" value={codebaseAge} onChange={(e) => setCodebaseAge(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-red-500 focus:outline-none" />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => setStep(2)} className="w-full mt-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest rounded-xl transition-all">Next: Technical Posture →</button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                                        <div>
                                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">Architecture & Compliance</div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                
                                                {/* Checkboxes */}
                                                <button onClick={() => setMonolith(!monolith)} className={`text-left p-4 rounded-xl border transition-all ${monolith ? 'bg-orange-500/10 border-orange-500/50 text-orange-900 font-extrabold font-semibold' : 'bg-white/50 border-zinc-400 text-zinc-950 font-bold'}`}>
                                                    <div className="font-bold mb-1 flex items-center gap-2"><Code size={16}/> Monolithic Architecture</div>
                                                    <div className="text-xs font-bold opacity-70">App is primarily a single large codebase rather than isolated services.</div>
                                                </button>
                                                
                                                <button onClick={() => setHeavyAiDependency(!heavyAiDependency)} className={`text-left p-4 rounded-xl border transition-all ${heavyAiDependency ? 'bg-red-500/10 border-red-500/50 text-red-900 font-extrabold font-semibold' : 'bg-white/50 border-zinc-400 text-zinc-950 font-bold'}`}>
                                                    <div className="font-bold mb-1 flex items-center gap-2"><BrainCircuit size={16}/> Heavy AI Dependency</div>
                                                    <div className="text-xs font-bold opacity-70">Core product loops rely entirely on 3rd-party LLM APIs (OpenAI/Anthropic).</div>
                                                </button>

                                                <button onClick={() => setHasCompliance(!hasCompliance)} className={`text-left p-4 rounded-xl border transition-all ${hasCompliance ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-900 font-extrabold font-semibold' : 'bg-white/50 border-zinc-400 text-zinc-950 font-bold'}`}>
                                                    <div className="font-bold mb-1 flex items-center gap-2"><ShieldAlert size={16}/> SOC2 / ISO Compliant</div>
                                                    <div className="text-xs font-bold opacity-70">Firm has independently audited active compliance certificates.</div>
                                                </button>

                                                <button onClick={() => setHasOffshore(!hasOffshore)} className={`text-left p-4 rounded-xl border transition-all ${hasOffshore ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-500' : 'bg-white/50 border-zinc-400 text-zinc-950 font-bold'}`}>
                                                    <div className="font-bold mb-1 flex items-center gap-2"><Users size={16}/> Offshore Engineering</div>
                                                    <div className="text-xs font-bold opacity-70">Significant portion of engineering execution is outsourced or offshore.</div>
                                                </button>

                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            <button onClick={() => setStep(1)} className="px-6 py-4 bg-zinc-200 hover:bg-zinc-700 text-zinc-950 rounded-xl transition-all">← Back</button>
                                            <button onClick={() => calculate()} disabled={loading} className="flex-1 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-zinc-950 font-semibold font-bold uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                                                {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Analyzing Target...</> : 'Generate Threat Matrix →'}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        /* --- RESULTS STATE --- */
                        <>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 relative">

                                {/* ACTION HEADER & PDF EXPORT */}
                                <div className="flex flex-col sm:flex-row items-center justify-between bg-white/60 border border-red-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                                    <div>
                                        <h2 className="text-xl font-bold text-zinc-950 mb-1">M&A Acquisition Diagnostic Complete</h2>
                                        <p className="text-sm font-semibold text-zinc-900 font-medium">Export this assessment to a verified Executive PDF for board review.</p>
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <button 
                                            onClick={handleSaveAndExport} 
                                            disabled={isSaving}
                                            className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest text-xs font-bold rounded-xl transition-all shadow-lg flex items-center gap-2"
                                        >
                                            {isSaving ? 'Exporting...' : 'Export Due Diligence PDF'}
                                        </button>
                                    </div>
                                </div>

                                {/* -------- PDF CAPTURE ZONE START -------- */}
                                <div id="dd-pdf-export-zone" className="space-y-8 bg-white p-2 sm:p-4 rounded-3xl">

                                {/* GAUGE HERO */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="capsule-container border-red-900/40 rounded-2xl sm:rounded-[2rem] p-8 text-center mb-8"
                                >
                                    <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-8">TARGET RISK SCORE (1-100)</div>
                                    <GaugeChart value={results.riskScore} />
                                    <div className={`mt-12 text-4xl font-bold tracking-tight ${getRiskStatus(results.riskScore).color}`}>
                                        {getRiskStatus(results.riskScore).text}
                                    </div>
                                    <div className="mt-2 text-zinc-900 text-sm font-semibold font-mono tracking-widest uppercase">
                                        {getRiskStatus(results.riskScore).sub}
                                    </div>
                                </motion.div>

                                {/* METRICS GRID */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                >
                                    <BentoCard title="Valuation Impairment Risk" icon={DollarSign} className="border-red-500/30">
                                        <div className="text-4xl font-bold text-red-500"><NumberTicker value={results.valuationImpairment} prefix="$" /></div>
                                        <div className="text-sm font-semibold font-medium text-zinc-950 mt-2 font-mono">Suggested Holdback Delta</div>
                                    </BentoCard>
                                    <BentoCard title="Tech Debt Recovery Cost" icon={Code} className="border-orange-500/20">
                                        <div className="text-3xl font-bold text-orange-900 font-extrabold font-semibold"><NumberTicker value={results.techDebtRecoveryCost} prefix="$" /></div>
                                        <div className="text-sm font-semibold font-medium text-zinc-950 mt-2 font-mono">Immediate CapEx required post-close</div>
                                    </BentoCard>
                                    <BentoCard title="Annual Cloud Waste" icon={Activity} className="border-zinc-500/20">
                                        <div className="text-3xl font-bold text-zinc-900"><NumberTicker value={results.annualInfraWaste} prefix="$" /></div>
                                        <div className="text-sm font-semibold font-medium text-zinc-950 mt-2 font-mono">Inefficient OPEX identifiable</div>
                                    </BentoCard>
                                </motion.div>

                                {/* RED FLAGS */}
                                {results.redFlags.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                                    >
                                        <BentoCard title="Critical Deal Red Flags" icon={ShieldAlert} className="border-red-500/40 bg-red-50/20">
                                            <ul className="space-y-3">
                                                {results.redFlags.map((flag, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                                        <span className="text-red-900 font-extrabold font-semibold">{flag}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </BentoCard>
                                    </motion.div>
                                )}

                                {/* THREAT VECTORS */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                >
                                    <BentoCard title="Strategic Threat Vectors" icon={Target} className="col-span-full">
                                        <div className="space-y-6 mt-4">
                                            {results.threatVectors.map((tv, i) => (
                                                <div key={i} className="flex gap-4 items-center">
                                                    <div className="w-12 h-12 bg-white/50 border border-zinc-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                                        <tv.icon size={20} className="text-zinc-950 font-bold"/>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between mb-1">
                                                            <div className="font-bold text-zinc-900">{tv.name}</div>
                                                            <div className="text-xs font-bold font-mono text-zinc-900">{tv.severity}% Severity</div>
                                                        </div>
                                                        <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden mb-1">
                                                            <div id={`tv-progress-${tv.name.replace(/[^a-zA-Z0-9-]/g, '-')}-${i}`} className={`h-full ${tv.color}`} style={{ width: `${tv.severity}%` }} />
                                                        </div>
                                                        <div className="text-xs font-bold text-zinc-900 font-bold">{tv.details}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* GANTT CHART ROADMAP */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                                >
                                    <div className="bg-zinc-50 border border-zinc-400 rounded-2xl p-6 md:p-8 mt-8 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 via-orange-500 to-cyan-500"></div>
                                        <h4 className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest mb-6 border-b border-zinc-400 pb-4">Post-Acquisition Integration Gantt Chart</h4>
                                        
                                        <div className="space-y-6 md:space-y-8">
                                            {results.qpepRoadmap.map((plan: any, i: number) => (
                                                <div key={i} className="relative md:pl-6 pl-4">
                                                    {/* Timeline dot */}
                                                    <div className="absolute left-[-0.3rem] md:left-[-1.3rem] top-2 w-3 h-3 rounded-full border-2 border-[#0f1115] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10"></div>
                                                    
                                                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                                        <div className="bg-white/5 px-3 py-1 rounded-md text-xs font-bold font-medium uppercase font-mono tracking-widest text-zinc-900 shrink-0 inline-block w-fit">
                                                            Month {plan.month}
                                                        </div>
                                                        <div className="font-bold text-zinc-950 text-base leading-tight md:leading-normal">{plan.focus}</div>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                        {plan.actionItems.map((action: string, j: number) => {
                                                            const widths = ["w-full", "w-[90%]", "w-[95%]"];
                                                            const width = widths[j % widths.length];
                                                            const colorClasses = [
                                                                "from-red-500/20 to-orange-500/20 border-orange-500/50 text-orange-900 font-extrabold",
                                                                "from-orange-500/20 to-yellow-500/20 border-yellow-500/50 text-yellow-900 font-extrabold",
                                                                "from-blue-500/20 to-cyan-500/20 border-cyan-500/50 text-cyan-900 font-extrabold"
                                                            ];
                                                            const color = colorClasses[i % colorClasses.length];
                                                            
                                                            return (
                                                                <div key={j} className={`${width} bg-gradient-to-r ${color} border-l-2 p-3 rounded-r-md min-h-[70px] flex flex-col justify-center transition-all hover:brightness-125 hover:translate-x-1 duration-300 shadow-sm relative overflow-hidden group`}>
                                                                    {plan.month === 1 && (
                                                                        <div className="absolute top-0 right-0 bg-red-500/20 text-red-900 font-extrabold font-semibold text-[8px] font-mono px-2 py-0.5 rounded-bl-md uppercase tracking-widest border-b border-l border-red-500/30 group-hover:bg-red-500/40 transition-colors">
                                                                            Critical Path Dependency
                                                                        </div>
                                                                    )}
                                                                    <span className={`text-xs font-bold leading-relaxed relative z-10 ${plan.month === 1 ? 'mt-2' : ''}`}>{action}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="absolute left-[0.15rem] md:left-[-0.95rem] top-4 bottom-4 w-px bg-white/10 z-0 hidden md:block"></div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* 3-STEP BOARD REMEDIATION PLAYBOOK */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                >
                                    <div className="capsule-container rounded-2xl p-6 sm:p-8 mt-8 border border-zinc-400 bg-zinc-50">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                            3-Step Board Remediation Playbook
                                        </h3>
                                        <p className="text-zinc-900 text-sm font-semibold mb-8">Execute this operational surgery immediately to neutralize the ${formatMoney(results.valuationImpairment)} valuation impairment.</p>

                                        <div className="space-y-4">
                                            {/* Step 1 */}
                                            <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-rose-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                                <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/20">
                                                    <span className="text-rose-400 font-bold font-mono">01</span>
                                                </div>
                                                <div className="relative z-10 w-full">
                                                    <h4 className="text-zinc-950 font-bold mb-2">Hostile Valuation Holdback</h4>
                                                    <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">The target's technical entropy poses an existential threat to post-close EBITDA. Do not acquire these liabilities at face value.</p>
                                                    <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                        <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-rose-400 uppercase tracking-widest font-bold">
                                                            <Zap size={10} /> Execution Directive
                                                        </div>
                                                        <p className="text-sm font-semibold font-medium text-zinc-950">Contractually isolate the exact ${formatMoney(results.valuationImpairment)} impairment value into an escrow hold-back account, contingent upon the target proving architectural viability post-migration.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-amber-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                                                <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/20">
                                                    <span className="text-amber-400 font-bold font-mono">02</span>
                                                </div>
                                                <div className="relative z-10 w-full">
                                                    <h4 className="text-zinc-950 font-bold mb-2">Workforce Rightsizing & Neutralization</h4>
                                                    <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">ARR per head is deeply misaligned with modern SaaS benchmarks. The engineering org is heavily bloated creating gross margin drag.</p>
                                                    <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                        <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-amber-400 uppercase tracking-widest font-bold">
                                                            <Zap size={10} /> Execution Directive
                                                        </div>
                                                        <p className="text-sm font-semibold font-medium text-zinc-950">Implement aggressive up-or-out performance tracking on Day 1. Terminate the lowest 20% of legacy contributors immediately and backfill capacity with AI-augmented workflows.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-cyan-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                                <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                                                    <span className="text-cyan-900 font-extrabold font-semibold font-bold font-mono">03</span>
                                                </div>
                                                <div className="relative z-10 w-full">
                                                    <h4 className="text-zinc-950 font-bold mb-2">Immediate EBITDA Leakage Stoppage</h4>
                                                    <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">You are acquiring ${formatMoney(results.annualInfraWaste)}/yr in structural cloud infrastructure waste that should be dropping to the bottom line.</p>
                                                    <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                        <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                                            <Zap size={10} /> Execution Directive
                                                        </div>
                                                        <p className="text-sm font-semibold font-medium text-zinc-950">Mandate immediate AWS/GCP instance rightsizing and aggressive reserved instance purchasing. Halt all new cloud provisioning without explicit PE/Board VP-level approval.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>

                                </div>
                                {/* -------- PDF CAPTURE ZONE END -------- */}

                                <div className="mt-8">
                                    <VaultUpsell 
                                        urgencyLevel={results.riskScore >= 60 ? 'critical' : 'growth'}
                                        recommendedTracks={[
                                            { id: 'TRACK-05', title: 'Technical Debt & Valuation Impact', desc: 'Prevent catastrophic enterprise value destruction via post-acquisition legacy drag.' },
                                            { id: 'TRACK-04', title: 'AI Unit Economics & Margin Collapse', desc: 'Structure aggressive reorganizations to salvage impaired acquisitions.' }
                                        ]} 
                                    />
                                    
                                    <div className="flex justify-center mt-8 mb-8">
                                        <button onClick={() => { setResults(null); setStep(1); }} className="text-zinc-950 font-mono text-xs font-bold tracking-widest hover:text-zinc-900 uppercase transition-colors">
                                            ← Run New Due Diligence
                                        </button>
                                    </div>
                                </div>

                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}