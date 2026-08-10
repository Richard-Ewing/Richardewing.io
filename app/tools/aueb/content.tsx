'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingDown, TrendingUp, AlertTriangle, DollarSign, Lock, Activity, Zap, Flame, Users, Target, Mail, ArrowRight, Cpu, Skull, Building2 } from 'lucide-react';
import Link from 'next/link';
import { NewsletterForm } from '../../components/newsletter-form';
import ToolGate from '../../components/tool-gate';
import ToolCelebration from '../../components/ToolCelebration';
import ToolPayGate from '../../components/ToolPayGate';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { QPEPRemediation } from '../../components/QPEPRemediation';
import { VaultUpsell } from '../../components/VaultUpsell';
import { ToolGateCTA } from '../../components/ToolGateCTA';
import progressStyles from '../../styles/progress.module.css';
import { trackDiagnosticEvent } from '@/lib/telemetry/events';
import { saveDiagnosticSession, loadDiagnosticSession } from '@/lib/storage/session';
import { ExecutiveSummary } from '@/components/reports/ExecutiveSummary';
import { ExogramRecommendations } from '@/components/reports/ExogramRecommendations';
import { BenchmarkComparison } from '@/components/reports/BenchmarkComparison';
import { DiagnosticProgression } from '@/components/reports/DiagnosticProgression';
import { LongitudinalHistory } from '@/components/reports/LongitudinalHistory';
import { DiagnosticBridge } from '../../components/DiagnosticBridge';
import AdvisoryCTA from '../../components/AdvisoryCTA';
import { calculateAuebScore, AuebScoreMetrics, FeatureData, ApiCost, ModelData } from '@/lib/diagnostics/auebScoring';
import { getAuebPersonaInsight } from '@/lib/diagnostics/auebInterpretations';
import { Persona, formatMoney } from '@/lib/diagnostics/interpretations';

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
        if (value >= 70) return '#22c55e'; // Green
        if (value >= 50) return '#eab308'; // Yellow
        if (value >= 30) return '#f97316'; // Orange
        return '#dc2626'; // Red
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
                    <div className="text-4xl font-bold text-zinc-950 tracking-tighter">{value.toFixed(0)}%</div>
                </div>
            </div>
        </div>
    );
};

// Types are now imported

export default function AUEBTool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');
    const [step, setStep] = useState(1);
    const [isSaving, setIsSaving] = useState(false);
    const [showPaywall, setShowPaywall] = useState(false);

    // Basic Inputs
    const [price, setPrice] = useState('29');
    const [queries, setQueries] = useState('150');
    const [costPerQuery, setCostPerQuery] = useState('0.025');
    const [users, setUsers] = useState('5000');

    // Enhanced Inputs
    const [monetizationStrategy, setMonetizationStrategy] = useState<'bundled' | 'premium'>('bundled');
    const [premiumCharge, setPremiumCharge] = useState('10');
    const [growthRate, setGrowthRate] = useState('15');
    const [cachingEnabled, setCachingEnabled] = useState(false);
    const [features, setFeatures] = useState<FeatureData[]>([
        { name: 'AI Chat', queriesPercent: 40 },
        { name: 'AI Search', queriesPercent: 30 },
        { name: 'AI Summary', queriesPercent: 20 },
        { name: 'AI Insights', queriesPercent: 10 },
    ]);

    // Infrastructure Costs
    const [hostingCostPerUser, setHostingCostPerUser] = useState('0.50');
    const [thirdPartyApis, setThirdPartyApis] = useState<ApiCost[]>([
        { name: 'Stripe Payments', costPerUser: 0.30, enabled: true },
        { name: 'Twilio SMS', costPerUser: 0.15, enabled: false },
        { name: 'SendGrid Email', costPerUser: 0.05, enabled: true },
        { name: 'AWS S3 Storage', costPerUser: 0.20, enabled: true },
    ]);

    const [results, setResults] = useState<AuebScoreMetrics | null>(null);
    const [loading, setLoading] = useState(false);
    const [showGate, setShowGate] = useState(false);

    useEffect(() => {
        trackDiagnosticEvent('diagnostic_started', 'aueb');
        const saved = loadDiagnosticSession('aueb');
        if (saved) setResults(saved);
    }, []);



    const handleSaveToVault = async (): Promise<boolean> => {
        setIsSaving(true);
        try {
            const priceNum = parseFloat(price) || 0;
            const queriesNum = parseFloat(queries) || 0;
            const costNum = parseFloat(costPerQuery) || 0;
            const usersNum = parseFloat(users) || 0;
            const growthRateNum = parseFloat(growthRate) || 15;
            const hostingNum = parseFloat(hostingCostPerUser) || 0;

            const premiumNum = parseFloat(premiumCharge) || 0;

            const payload = {
                run_data: { price: priceNum, queries: queriesNum, costPerQuery: costNum, users: usersNum, growthRate: growthRateNum, cachingEnabled, features, hostingCostPerUser: hostingNum, thirdPartyApis, monetizationStrategy, premiumCharge: premiumNum },
                output_metrics: results
            };
            const res = await fetch('/api/tools/aueb/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            
            if (res.status === 402 && data.error === 'PAYMENT_REQUIRED') {
                setShowPaywall(true);
                return false;
            }
            if (!res.ok) throw new Error(data?.message || 'Failed to save');

            if (data.qpep_roadmap) {
                setResults((prev: any) => prev ? { ...prev, qpep_roadmap: data.qpep_roadmap } : null);
            }

            // Small delay to let React render the Q-PEP roadmap into the DOM
            await new Promise(r => setTimeout(r, 800));
            return true;

        } catch (error: any) {
            console.error(error);
            alert(`Export failed: ${error.message || "Unknown error"}`);
            return false;
        } finally {
            setIsSaving(false);
        }
    };

    const calculate = () => {
        setLoading(true);
        setTimeout(() => {
            const priceNum = parseFloat(price) || 0;
            const queriesNum = parseFloat(queries) || 0;
            const costNum = parseFloat(costPerQuery) || 0;
            const usersNum = parseFloat(users) || 0;
            const growthRateNum = parseFloat(growthRate) || 15;
            const hostingNum = parseFloat(hostingCostPerUser) || 0;
            const premiumNum = parseFloat(premiumCharge) || 0;

            const metrics = calculateAuebScore({
                price: priceNum,
                queries: queriesNum,
                costPerQuery: costNum,
                users: usersNum,
                growthRate: growthRateNum,
                hostingCostPerUser: hostingNum,
                premiumCharge: premiumNum,
                monetizationStrategy,
                cachingEnabled,
                features,
                thirdPartyApis
            });

            setResults(metrics);
            saveDiagnosticSession('aueb', metrics);
            trackDiagnosticEvent('diagnostic_completed', 'aueb', { score: metrics.grossMargin, waste: metrics.monthlyCost });
            setLoading(false);

            // Silently persist to Supabase for longitudinal tracking
            fetch('/api/tools/runs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tool_id: 'aueb',
                    run_data: { 
                        price: priceNum, queries: queriesNum, costPerQuery: costNum, users: usersNum, 
                        growthRate: growthRateNum, cachingEnabled, features, hostingCostPerUser: hostingNum, thirdPartyApis, monetizationStrategy, premiumCharge: premiumNum 
                    },
                    output_metrics: metrics
                })
            }).catch(console.error);
        }, 800);
    };

    // Persona-specific insights imported from interpretations



    return (
        <div className="min-h-screen bg-white text-zinc-950 font-bold selection:bg-cyan-500/30 font-sans">
            <ToolCelebration show={!!results} toolName="AUEB" />
            {/* MONETIZATION ENGINE: PAYWALL MODAL */}
            {showPaywall && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm" data-html2canvas-ignore>
                    <div className="bg-white border border-zinc-400 rounded-3xl max-w-md w-full p-8 relative shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200 shrink-0">
                        {/* Lighting Fx */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                                <Lock className="w-5 h-5 text-red-900 font-extrabold font-semibold" />
                            </div>
                            
                            <h3 className="text-3xl font-bold text-zinc-950 mb-2 font-grotesk tracking-tight">Limit Reached.</h3>
                            <p className="text-zinc-900 text-sm font-semibold mb-8 leading-relaxed">
                                You have consumed your allocation of 3 free diagnostic audits. Unlock the Full Library to save unlimited board-ready PDF reports directly to your Vault.
                            </p>
                            
                            <div className="space-y-3">
                                <a 
                                    href="/api/buy/tools_library_unlock" 
                                    onClick={() => setShowPaywall(false)}
                                    className="flex items-center justify-center w-full py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest text-xs font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
                                >
                                    Unlock Library for $199
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
                        <span className="font-bold tracking-tight text-lg">AUEB™ <span className="text-zinc-950 font-bold font-normal">| AI Margin Audit</span></span>
                    </div>
                    <Link href="/services" className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-900 hover:text-zinc-900 transition-colors uppercase tracking-widest">
                        <Lock size={12} />
                        Get Expert Help
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
                                    Are You Scaling<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Into Bankruptcy?</span>
                                </h1>
                                <p className="text-xl text-zinc-900">Calculate your AI margin collapse point before investors do.</p>
                            </div>

                            {/* PERSONA SELECTOR */}
                            <div className="mb-8">
                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3">I am a...</div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { id: 'Founder', label: 'Founder/CEO', icon: Target },
                                        { id: 'CPO', label: 'CPO/Product', icon: Users },
                                        { id: 'VP Eng', label: 'VP Engineering', icon: Cpu },
                                        { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
                                    ].map((p: any) => (
                                        <button
                                            key={p.id}
                                            onClick={() => setPersona(p.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id
                                                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-900 font-extrabold font-semibold'
                                                : 'bg-white/80 border-zinc-400 text-zinc-900 hover:border-white/30'
                                                }`}
                                        >
                                            <p.icon size={14} />
                                            {p.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

<div className="bg-white/40 p-8 rounded-3xl border border-zinc-400 backdrop-blur-sm shadow-2xl space-y-8 relative overflow-hidden shrink-0">
                                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-200">
                                    <div className={`h-full bg-cyan-500 transition-all duration-500 ${progressStyles[`w_${Math.round((step / 3) * 100)}`]}`} />
                                </div>
                                
                                {step === 1 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                                        <div>
                                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">Unit Economics</div>
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                                <div className="md:col-span-2">
                                                    <label className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">AI Monetization Strategy</label>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => setMonetizationStrategy('bundled')} className={`flex-1 px-4 py-3 rounded-xl border transition-all ${monetizationStrategy === 'bundled' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-900 font-extrabold font-semibold' : 'bg-white/50 border-zinc-400 text-zinc-900'}`}>Bundled (Free)</button>
                                                        <button onClick={() => setMonetizationStrategy('premium')} className={`flex-1 px-4 py-3 rounded-xl border transition-all ${monetizationStrategy === 'premium' ? 'bg-purple-500/10 border-purple-500 text-purple-900 font-extrabold font-semibold' : 'bg-white/50 border-zinc-400 text-zinc-900'}`}>Premium Add-on</button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="price" className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Base Price/Mo</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">$</span>
                                                        <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-cyan-500 focus:outline-none" />
                                                    </div>
                                                </div>
                                                {monetizationStrategy === 'premium' ? (
                                                    <div>
                                                        <label htmlFor="premium" className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">AI Add-on Price</label>
                                                        <div className="relative">
                                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-900 font-bold">$</span>
                                                            <input id="premium" type="number" value={premiumCharge} onChange={(e) => setPremiumCharge(e.target.value)} className="w-full bg-white/50 border border-purple-500/30 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-purple-500 focus:outline-none" />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <label htmlFor="users" className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Active Users</label>
                                                        <input id="users" type="number" value={users} onChange={(e) => setUsers(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-cyan-500 focus:outline-none" />
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                                {monetizationStrategy === 'premium' && (
                                                    <div>
                                                        <label htmlFor="users" className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Active Users</label>
                                                        <input id="users" type="number" value={users} onChange={(e) => setUsers(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-cyan-500 focus:outline-none" />
                                                    </div>
                                                )}
                                                <div>
                                                    <label htmlFor="queries" className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">AI Queries/User/Mo</label>
                                                    <input id="queries" type="number" value={queries} onChange={(e) => setQueries(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-cyan-500 focus:outline-none" />
                                                </div>
                                                <div>
                                                    <label htmlFor="cost" className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Cost/Query</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">$</span>
                                                        <input id="cost" type="number" step="0.001" value={costPerQuery} onChange={(e) => setCostPerQuery(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-cyan-500 focus:outline-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => setStep(2)} className="w-full mt-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest rounded-xl transition-all">Next: Optimization →</button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                                        <div>
                                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">Growth & Optimization</div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label htmlFor="growth" className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Monthly Growth Rate</label>
                                                    <div className="relative">
                                                        <input id="growth" type="number" value={growthRate} onChange={(e) => setGrowthRate(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-cyan-500 focus:outline-none" />
                                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-900">%</span>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Caching Strategy</label>
                                                    <button
                                                        onClick={() => setCachingEnabled(!cachingEnabled)}
                                                        className={`w-full px-4 py-3 rounded-xl border transition-all flex items-center justify-between ${cachingEnabled
                                                            ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-900 font-extrabold font-semibold'
                                                            : 'bg-white/50 border-zinc-400 text-zinc-950 font-bold'
                                                            }`}
                                                    >
                                                        <span>{cachingEnabled ? 'Semantic caching enabled' : 'No caching implemented'}</span>
                                                        <span className="text-xs font-bold font-mono">{cachingEnabled ? '~40% savings' : 'Click to toggle'}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-6 border-t border-zinc-400">
                                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">AI Feature Mix (% of queries)</div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {features.map((f, i) => (
                                                    <div key={i}>
                                                        <label className="text-sm font-semibold font-medium text-zinc-950 mb-1 block">{f.name}</label>
                                                        <div className="relative">
                                                            <input
                                                                type="number"
                                                                title={f.name}
                                                                aria-label={`Enter percentage for ${f.name}`}
                                                                value={f.queriesPercent}
                                                                onChange={(e) => {
                                                                    const newFeatures = [...features];
                                                                    newFeatures[i].queriesPercent = parseInt(e.target.value) || 0;
                                                                    setFeatures(newFeatures);
                                                                }}
                                                                className="w-full bg-white/50 border border-zinc-400 rounded-lg px-3 py-2 text-zinc-950 font-mono text-sm font-semibold focus:border-cyan-500 focus:outline-none"
                                                            />
                                                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-950 font-bold text-xs">%</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            <button onClick={() => setStep(1)} className="px-6 py-4 bg-zinc-200 hover:bg-zinc-700 text-zinc-950 rounded-xl transition-all">← Back</button>
                                            <button onClick={() => setStep(3)} className="flex-1 py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest rounded-xl transition-all">Next: Infrastructure →</button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                                        <div>
                                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">Infrastructure Costs (Monthly Per User)</div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="hosting" className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Hosting & Compute</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">$</span>
                                                        <input id="hosting" type="number" step="0.01" value={hostingCostPerUser} onChange={(e) => setHostingCostPerUser(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-cyan-500 focus:outline-none" />
                                                    </div>
                                                    <p className="text-xs font-bold font-medium text-zinc-950 font-bold mt-1">AWS/GCP/Vercel per user allocation</p>
                                                </div>
                                                <div>
                                                    <label className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Third-Party APIs</label>
                                                    <div className="space-y-2">
                                                        {thirdPartyApis.map((api, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={() => {
                                                                    const newApis = [...thirdPartyApis];
                                                                    newApis[i].enabled = !newApis[i].enabled;
                                                                    setThirdPartyApis(newApis);
                                                                }}
                                                                className={`w-full px-3 py-2 rounded-lg border text-left flex items-center justify-between transition-all text-sm font-semibold ${api.enabled
                                                                    ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-900 font-extrabold font-semibold'
                                                                    : 'bg-zinc-100 border-zinc-400 text-zinc-900'
                                                                    }`}
                                                            >
                                                                <span>{api.name}</span>
                                                                <span className="font-mono text-xs">${api.costPerUser.toFixed(2)}/user</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            <button onClick={() => setStep(2)} className="px-6 py-4 bg-zinc-200 hover:bg-zinc-700 text-zinc-950 rounded-xl transition-all">← Back</button>
                                            <button onClick={() => calculate()} disabled={loading} className="flex-1 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-zinc-950 font-semibold font-bold uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                                                {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Calculating Collapse Point...</> : 'Calculate My Collapse Point →'}
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
                                <div className="flex flex-col items-start bg-white/60 border border-zinc-400 rounded-2xl p-6 mb-8 backdrop-blur-md">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-zinc-950 mb-1">Board-Ready Deliverable Generated</h2>
                                        <p className="text-sm font-semibold text-zinc-900 font-medium">Export this assessment to a verified Executive PDF.</p>
                                    </div>
                                    <div className="w-full">
                                        <ToolGate toolName="Executive PDF Export" toolSlug="aueb" mappedCurriculumId="21-1">
                                            <ExportToPDFButton 
                                                targetId="aueb-pdf-export-zone" 
                                                fileName={`AUEB_Assessment_${persona}.pdf`} 
                                                onBeforeExport={handleSaveToVault} 
                                            />
                                        </ToolGate>
                                    </div>
                                </div>

                                {/* -------- PDF CAPTURE ZONE START -------- */}
                                <div id="aueb-pdf-export-zone" className="space-y-8 bg-white p-2 sm:p-4 rounded-3xl">

                                {/* GAUGE HERO */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="capsule-container rounded-2xl sm:rounded-[2rem] p-8 text-center mb-8"
                                >
                                    <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-8">GROSS MARGIN HEALTH</div>
                                    <GaugeChart value={results.grossMargin} />
                                    <div className={`mt-12 text-4xl font-bold tracking-tight ${results.grossMargin >= 70 ? 'text-emerald-900 font-extrabold font-semibold' : results.grossMargin >= 50 ? 'text-yellow-900 font-extrabold font-semibold' : results.grossMargin >= 30 ? 'text-orange-500' : 'text-red-900 font-extrabold'}`}>
                                        {results.grossMargin >= 70 ? 'SUSTAINABLE' : results.grossMargin >= 50 ? 'VIABLE BUT TIGHT' : results.grossMargin >= 30 ? 'RISK ZONE' : 'INSOLVENT'}
                                    </div>
                                    {results.grossMargin < 30 && (
                                        <div className="mt-6 text-red-900 font-extrabold font-semibold text-sm font-semibold max-w-xl mx-auto bg-red-50/30 p-4 rounded-lg border border-red-900/50">
                                            CRITICAL: Your unit economics are upside down. You are paying users to use your product.
                                        </div>
                                    )}
                                </motion.div>

                                {/* PERSONA-SPECIFIC INSIGHT */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                                >
                                    <BentoCard title={`Insight for ${persona}`} icon={Target} className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-zinc-900">{getAuebPersonaInsight(persona, results).headline}</h3>
                                            <p className="text-zinc-900 leading-relaxed">{getAuebPersonaInsight(persona, results).detail}</p>
                                            <p className="text-cyan-900 font-extrabold font-semibold">{getAuebPersonaInsight(persona, results).action}</p>
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* METRICS GRID */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                    className="grid grid-cols-1 md:grid-cols-4 gap-6"
                                >
                                    <BentoCard title="Monthly Revenue" icon={DollarSign}>
                                        <div className="text-3xl font-bold text-cyan-900 font-extrabold font-semibold"><NumberTicker value={results.monthlyRevenue} prefix="$" /></div>
                                    </BentoCard>
                                    <BentoCard title="Monthly AI Costs" icon={Flame} className="border-red-500/20">
                                        <div className="text-3xl font-bold text-red-900 font-extrabold"><NumberTicker value={results.monthlyCost} prefix="$" /></div>
                                    </BentoCard>
                                    <BentoCard title="Monthly Profit" icon={TrendingDown}>
                                        <div className={`text-3xl font-bold ${results.monthlyProfit >= 0 ? 'text-emerald-900 font-extrabold font-semibold' : 'text-red-900 font-extrabold'}`}>
                                            <NumberTicker value={results.monthlyProfit} prefix="$" />
                                        </div>
                                    </BentoCard>
                                    <BentoCard title="Months to 50% COGS" icon={AlertTriangle} className="border-yellow-500/20">
                                        <div className="text-3xl font-bold text-yellow-900 font-extrabold font-semibold">{results.monthsToCollapse}</div>
                                        <div className="text-zinc-950 text-xs font-bold mt-2">At {growthRate}% monthly growth</div>
                                    </BentoCard>
                                </motion.div>

                                {/* EXECUTIVE SUMMARY & EXOGRAM INTEGRATION */}
                                <div className="mt-8 mb-8 space-y-8">
                                    <ExecutiveSummary 
                                        tool="AI Unit Economics Benchmark" 
                                        persona={persona} 
                                        isAtRisk={results.grossMargin < 50}
                                        extraData={{ margin: results.grossMargin }}
                                        freeChildren={
                                            <>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-rose-900 font-extrabold font-semibold mt-1">•</span>
                                                    <span>Gross margin of <strong className="text-zinc-900">{results.grossMargin.toFixed(0)}%</strong> is {results.grossMargin >= 70 ? 'healthy' : 'at risk'}.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-rose-900 font-extrabold font-semibold mt-1">•</span>
                                                    <span>Insolvency point: <strong className="text-zinc-900">{results.insolvencyPoint} queries/user</strong> before margin collapse.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-rose-900 font-extrabold font-semibold mt-1">•</span>
                                                    <span>Months to 50% COGS: <strong className="text-zinc-900">{results.monthsToCollapse} months</strong>.</span>
                                                </li>
                                            </>
                                        }
                                        gatedChildren={
                                            <div className="space-y-6">
                                                <BenchmarkComparison tool="aueb" userScore={results.grossMargin} />
                                                <LongitudinalHistory tool="aueb" scoreKey="grossMargin" />
                                                <ExogramRecommendations score={results.grossMargin} maintenance={results.monthlyRevenue > 0 ? (results.monthlyCost / results.monthlyRevenue * 100) : 100} />
                                                <AdvisoryCTA variant="tool-result" />
                                            </div>
                                        }
                                    />
                                </div>

                                {/* Advisory Upsell */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border border-purple-500/20 rounded-2xl">
                                  <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <span className="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold font-mono text-purple-600 uppercase tracking-wider mb-1">Want an Expert to Run This?</p>
                                      <h4 className="text-lg font-bold text-zinc-950 mb-2">Get unit economics that survive a board meeting</h4>
                                      <p className="text-sm text-zinc-600 mb-4">This benchmark gives you the ratio. A $5,000 AI Cost Governance engagement models your collapse point and builds the margin protection plan.</p>
                                      <div className="flex flex-wrap gap-3">
                                        <a href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-zinc-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Book Advisory Session →</a>
                                        <a href="/api/buy/gut_check" className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-500/30 text-purple-700 text-sm font-bold rounded-lg hover:bg-purple-50 transition-colors">$450 Gut-Check Call →</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* COST FORENSICS */}

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                                >
                                    <BentoCard title="Cost Forensics" icon={Activity} className="border-red-500/20">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-1">LLM Costs</div>
                                                <div className="text-2xl font-bold text-red-500">{formatMoney(results.llmCost)}/mo</div>
                                                <div className="text-sm font-semibold font-medium text-zinc-950 mt-1">{((results.llmCost / results.totalInfraCost) * 100).toFixed(0)}% of infra</div>
                                            </div>
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-xs font-bold font-mono text-orange-900 font-extrabold font-semibold uppercase tracking-widest mb-1">Third-Party APIs</div>
                                                <div className="text-2xl font-bold text-orange-500">{formatMoney(results.apiCost)}/mo</div>
                                                <div className="text-sm font-semibold font-medium text-zinc-950 mt-1">{((results.apiCost / results.totalInfraCost) * 100).toFixed(0)}% of infra</div>
                                            </div>
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-xs font-bold font-mono text-yellow-900 font-extrabold font-semibold uppercase tracking-widest mb-1">Hosting & Compute</div>
                                                <div className="text-2xl font-bold text-yellow-500">{formatMoney(results.hostingCost)}/mo</div>
                                                <div className="text-sm font-semibold font-medium text-zinc-950 mt-1">{((results.hostingCost / results.totalInfraCost) * 100).toFixed(0)}% of infra</div>
                                            </div>
                                        </div>
                                        <div className="h-4 bg-zinc-200 rounded-full overflow-hidden flex">
                                            <div className={`h-full bg-red-500 ${progressStyles[`w_${Math.round((results.llmCost / results.totalInfraCost) * 100) || 0}`]}`} />
                                            <div className={`h-full bg-orange-500 ${progressStyles[`w_${Math.round((results.apiCost / results.totalInfraCost) * 100) || 0}`]}`} />
                                            <div className={`h-full bg-yellow-500 ${progressStyles[`w_${Math.round((results.hostingCost / results.totalInfraCost) * 100) || 0}`]}`} />
                                        </div>
                                        <div className="flex justify-between text-xs font-bold text-zinc-950 mt-2">
                                            <span>Total Infrastructure: <span className="text-zinc-950 font-bold">{formatMoney(results.totalInfraCost)}/mo</span></span>
                                            <span>Per User: <span className="text-zinc-950 font-bold">{formatMoney(results.costPerUser)}</span></span>
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* MODEL COMPARISON TABLE */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                >
                                    <BentoCard title="Model Arbitrage" icon={Zap} className="col-span-full">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="border-b border-zinc-400 text-zinc-950 font-mono text-xs font-bold uppercase">
                                                        <th className="text-left py-3">Model</th>
                                                        <th className="text-right py-3">Cost/User</th>
                                                        <th className="text-right py-3">Margin</th>
                                                        <th className="text-right py-3">Monthly Savings</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {results.models.map((model: ModelData, i: number) => {
                                                        const savings = ((model.margin - results.grossMargin) / 100) * results.monthlyRevenue;
                                                        return (
                                                            <tr key={i} className="border-b border-zinc-400/50 hover:bg-zinc-200/30">
                                                                <td className="py-3 font-semibold text-zinc-900">{model.model}</td>
                                                                <td className="py-3 text-right text-zinc-950 font-bold">{formatMoney(model.costPerUser)}</td>
                                                                <td className={`py-3 text-right font-bold ${model.margin >= 60 ? 'text-emerald-900 font-extrabold font-semibold' : 'text-red-500'}`}>{model.margin.toFixed(1)}%</td>
                                                                <td className="py-3 text-right text-emerald-900 font-extrabold font-semibold">{savings > 0 ? `+${formatMoney(savings)}` : '-'}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* Corporate Solvency Matrix (Margin Collapse Horizon) */}
                                {results.monthsToCollapse < 36 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                                    >
                                        <div className="capsule-container rounded-2xl p-6 mb-6 border border-red-500/30">
                                            <div className="flex items-center gap-2 mb-4">
                                                <TrendingDown className="w-4 h-4 text-red-500 animate-pulse" />
                                                <div className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">Corporate Solvency Matrix (Margin Collapse Horizon)</div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-400 relative overflow-hidden shrink-0">
                                                    <div className="absolute top-0 right-0 p-3 opacity-10"><Skull className="w-16 h-16 text-zinc-900" /></div>
                                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-2">Insolvency Point</div>
                                                    <div className="text-3xl font-bold text-red-500">Month {results.monthsToCollapse}</div>
                                                    <div className="text-xs font-bold text-zinc-900 font-bold/60 mt-2 mt-auto">Point where scaling users destroys company margins completely.</div>
                                                </div>
                                                <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-400 relative overflow-hidden shrink-0">
                                                    <div className="absolute top-0 right-0 p-3 opacity-10"><Building2 className="w-16 h-16 text-zinc-900" /></div>
                                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-2">Current Gross Margin</div>
                                                    <div className="text-3xl font-bold text-orange-900 font-extrabold font-semibold">{results.grossMargin.toFixed(0)}%</div>
                                                    <div className="text-xs font-bold text-zinc-900 font-bold/60 mt-2 mt-auto">Falling below benchmark limits venture capital scaling viability.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* GROWTH CHART */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                >
                                    <BentoCard title="12-Month Runway Projection" icon={Activity}>
                                        <div className="h-64 w-full mt-4">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={results.growthData}>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                                    <XAxis dataKey="month" stroke="#666" fontSize={12} />
                                                    <YAxis stroke="#666" fontSize={12} tickFormatter={(val) => `$${val}k`} />
                                                    <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} formatter={(val) => val !== undefined ? `$${Number(val).toFixed(0)}k` : ''} />
                                                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.2} />
                                                    <Area type="monotone" dataKey="cost" stackId="2" stroke="#dc2626" fill="#dc2626" fillOpacity={0.2} />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* EXECUTIVE SUMMARY + EMAIL CAPTURE */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                >
                                    <div className="bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50/60 rounded-2xl p-8 border border-zinc-400">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-3 h-3 rounded-full animate-pulse ${results.grossMargin < 50 ? 'bg-red-500' : 'bg-cyan-400'}`} />
                                            <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">Executive Summary</span>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-zinc-950 mb-4">📊 Board-Ready Insights</h3>
                                                <ul className="space-y-3 text-zinc-950 font-bold">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-cyan-900 font-extrabold font-semibold mt-1">•</span>
                                                        <span>Gross margin of <strong className="text-zinc-900">{results.grossMargin.toFixed(0)}%</strong> is {results.grossMargin >= 60 ? 'sustainable' : results.grossMargin >= 40 ? 'concerning' : 'critical'} for AI-native products.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-cyan-900 font-extrabold font-semibold mt-1">•</span>
                                                        <span>At <strong className="text-zinc-900">{growthRate}% monthly growth</strong>, AI costs will exceed 50% of revenue in <strong className="text-yellow-900 font-extrabold font-semibold">{results.monthsToCollapse} months</strong>.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-cyan-900 font-extrabold font-semibold mt-1">•</span>
                                                        <span>Switching to <strong className="text-zinc-900">{results.models[0]?.model}</strong> could save <strong className="text-emerald-900 font-extrabold font-semibold">{formatMoney(((results.models[0]?.margin || 0) - results.grossMargin) / 100 * results.monthlyRevenue)}/month</strong>.</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="border-l border-zinc-400 pl-8">
                                                <div className="mb-4">
                                                    <h3 className="text-xl font-bold text-zinc-950 mb-2">Detailed Financial Matrix</h3>
                                                    <p className="text-zinc-900 text-sm">Deploy the Vault Curriculum to execute immediate margin recovery strategies.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* ACTION FOOTER */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                    className="pt-8"
                                >
                                    <DiagnosticProgression currentTool="aueb" score={results.grossMargin} />

                                    <VaultUpsell 
                                        urgencyLevel={results.grossMargin < 50 ? 'critical' : 'growth'}
                                        recommendedTracks={[
                                            { id: 'TRACK-04', title: 'AI Unit Economics & Margin Collapse', desc: 'Identify AI insolvency triggers and restructure inference costs.' },
                                            { id: 'TRACK-08', title: 'Caching & Deterministic Fallbacks', desc: 'Implement semantic routing to avoid the LLM token tax.' }
                                        ]} 
                                    />
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
                                        <button onClick={() => setResults(null)} className="text-zinc-950 text-sm font-semibold hover:text-zinc-900 underline underline-offset-4">← Run New Analysis</button>
                                    </div>
                                </motion.div>

                                {/* SOCIAL PROOF */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="text-center pt-8"
                                >
                                    <p className="text-xs font-bold text-zinc-900 font-bold mb-3">Trusted by product leaders at</p>
                                    <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-950 font-bold font-mono text-xs">
                                        <span>Stripe</span>
                                        <span>Figma</span>
                                        <span>Linear</span>
                                        <span>Notion</span>
                                        <span>Vercel</span>
                                    </div>
                                </motion.div>

                                {/* Q-PEP ROADMAP - GANTT CHART */}
                                {results.qpep_roadmap && results.qpep_roadmap.length > 0 && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                                    >
                                        <h3 className="text-xl font-bold text-zinc-950 mb-4 mt-8 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full border border-cyan-400 bg-cyan-400/50 animate-pulse" />
                                            Quarterly Margin Execution Plan (Q-PEP)
                                        </h3>
                                        <div className="bg-zinc-50 border border-zinc-400 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden shrink-0">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500"></div>
                                            
                                            {/* MONTH 1 CRITICAL DEPENDENCY INJECTION */}
                                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-8">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <AlertTriangle size={16} className="text-cyan-900 font-extrabold font-semibold" />
                                                    <span className="text-xs font-bold text-cyan-900 font-extrabold font-semibold uppercase tracking-widest">Phase 1 Critical Path Dependency</span>
                                                </div>
                                                <p className="text-zinc-950 text-sm font-semibold leading-relaxed">
                                                    <strong>Execution mapped below is non-linear.</strong> Phase 1 architecture decisions compound geometrically. Delaying Month 1 deliverables will irreversibly bind your infrastructure to legacy OpEx margins. Month 1 execution is the only variable that guarantees Month 3 solvency.
                                                </p>
                                            </div>

                                            <h4 className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest mb-6 border-b border-zinc-400 pb-4">Execution Gantt Chart (90-Day Burn Down)</h4>
                                            
                                            <div className="space-y-6 md:space-y-8">
                                                {results.qpep_roadmap.map((plan: any, i: number) => (
                                                    <div key={i} className="relative md:pl-6 pl-4">
                                                        {/* Timeline dot */}
                                                        <div className={`absolute left-[-0.3rem] md:left-[-1.3rem] top-2 w-3 h-3 rounded-full border-2 border-[#0f1115] z-10 ${i === 0 ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse' : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]'}`}></div>
                                                        
                                                        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                                            <div className={`px-3 py-1 rounded-md text-xs font-bold font-medium uppercase font-mono tracking-widest shrink-0 inline-block w-fit ${i === 0 ? 'bg-cyan-500/20 text-cyan-900 font-extrabold font-semibold border border-cyan-500/30' : 'bg-white/5 text-zinc-950 font-bold'}`}>
                                                                Month {plan.month} {i === 0 && ' - CRITICAL'}
                                                            </div>
                                                            <div className="font-bold text-zinc-950 text-base leading-tight md:leading-normal">{plan.focus}</div>
                                                        </div>
                                                        
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                            {plan.action_items.map((action: string, j: number) => {
                                                                // Visual length variations to simulate Gantt chart task durations
                                                                const widths = ["w-full", "w-[90%]", "w-[95%]"];
                                                                const width = widths[j % widths.length];
                                                                // Progressive colors down the months
                                                                const colorClasses = [
                                                                    "from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-cyan-900 font-extrabold",
                                                                    "from-blue-500/20 to-indigo-500/20 border-blue-500/50 text-blue-900 font-extrabold",
                                                                    "from-indigo-500/20 to-violet-500/20 border-indigo-500/50 text-indigo-900 font-extrabold"
                                                                ];
                                                                const color = colorClasses[i % colorClasses.length];
                                                                
                                                                return (
                                                                    <div key={j} className={`${width} bg-gradient-to-r ${color} border-l-2 p-3 rounded-r-md min-h-[70px] flex items-center transition-all hover:brightness-125 hover:translate-x-1 duration-300 shadow-sm`}>
                                                                        <span className="text-xs font-bold leading-relaxed">{action}</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                                {/* Vertical Timeline line */}
                                                <div className="absolute left-[0.15rem] md:left-[-0.95rem] top-4 bottom-4 w-px bg-white/10 z-0 hidden md:block"></div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* 3-STEP BOARD REMEDIATION PLAYBOOK */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                >
                                    <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border border-zinc-400 bg-zinc-50 text-left">
                                        <h3 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                            3-Step Inference Optimization Roadmap
                                        </h3>
                                        <p className="text-zinc-900 text-sm font-semibold mb-8">Execute this operational sequence immediately to arrest AI margin collapse and secure unit economic profitability.</p>

                                        <div className="space-y-4">
                                            {/* Step 1 */}
                                            <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-rose-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                                <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/20">
                                                    <span className="text-rose-400 font-bold font-mono">01</span>
                                                </div>
                                                <div className="relative z-10 w-full">
                                                    <h4 className="text-zinc-950 font-bold mb-2">Deploy Semantic Caching Architecture</h4>
                                                    <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">You are paying frontier-model token prices over and over for duplicate queries. Stop treating repetitive intent as novel computation.</p>
                                                    <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                        <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-rose-400 uppercase tracking-widest font-bold">
                                                            <Zap size={10} /> Execution Directive
                                                        </div>
                                                        <p className="text-sm font-semibold font-medium text-zinc-950">Implement a Redis-backed Vector database layer to intercept and cache semantically similar prompts. Instantly deflect 30-40% of queries away from paid API endpoints.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-amber-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                                                <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/20">
                                                    <span className="text-amber-400 font-bold font-mono">02</span>
                                                </div>
                                                <div className="relative z-10 w-full">
                                                    <h4 className="text-zinc-950 font-bold mb-2">Build a Sovereign Intent Router</h4>
                                                    <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">You are using GPT-4-class intelligence to run simple extraction tasks. This is like using a supercomputer to operate a calculator.</p>
                                                    <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                        <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-amber-400 uppercase tracking-widest font-bold">
                                                            <Zap size={10} /> Execution Directive
                                                        </div>
                                                        <p className="text-sm font-semibold font-medium text-zinc-950">Deploy a fast, cheap intent classifier (e.g., Llama 3 8B) to triage incoming requests. Route basic summarization tasks to low-cost models, reserving frontier capabilities exclusively for high-reasoning tasks.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-cyan-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                                <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                                                    <span className="text-cyan-900 font-extrabold font-semibold font-bold font-mono">03</span>
                                                </div>
                                                <div className="relative z-10 w-full">
                                                    <h4 className="text-zinc-950 font-bold mb-2">Productize Token Limitations</h4>
                                                    <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">Unlimited queries uncap your liability. Generative AI fundamentally reintroduces COGS into SaaS, and your pricing tiers must reflect that.</p>
                                                    <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                        <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                                            <Zap size={10} /> Execution Directive
                                                        </div>
                                                        <p className="text-sm font-semibold font-medium text-zinc-950">Enforce strict rate limits on base-tier accounts. Force users hitting the P90 percentile of compute consumption into high-margin enterprise tiers to offset their infrastructure drain.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>

                                {/* Q-PEP Remediation Block — captured into PDF */}
                                <QPEPRemediation toolId="AUEB" metrics={results!} />


                                </div>
                                {/* -------- PDF CAPTURE ZONE END -------- */}

                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </main>

            {/* MONETIZATION & LEAD CAPTURE */}
            <div className="max-w-4xl mx-auto px-6">
                <ToolGateCTA toolName="AI Unit Economics Matrix" />
            </div>

            {/* BRIDGE: DIAGNOSTIC -> FRAMEWORK & EXOGRAM */}
            <div className="max-w-4xl mx-auto px-6">
                <DiagnosticBridge 
                    diagnosticName="AI Unit Economics Benchmark"
                    frameworkSlug="synthetic-cogs"
                    frameworkName="Synthetic COGS"
                    frameworkDescription="The AUEB exposes your Synthetic COGS. Generative AI fundamentally reintroduces variable cost of goods sold into software. If you don't track the compute cost per query, your margins will collapse as you scale."
                    exogramRisk="Margin Collapse"
                    exogramDescription="Stop subsidizing LLM providers with your VC funding. Exogram enforces dynamic cost routing and intent classification, ensuring high-compute models are only triggered when the ROI justifies the inference cost."
                />
            </div>
        </div>
    );
}