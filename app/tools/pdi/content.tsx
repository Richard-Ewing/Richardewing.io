'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import NumberTicker from '../../components/magicui/number-ticker';
import { BorderBeam } from '../../components/magicui/border-beam';
import { Target, Users, Cpu, DollarSign, Mail, ArrowRight, TrendingUp, AlertTriangle, Lock } from 'lucide-react';
import { NewsletterForm } from '../../components/newsletter-form';
import ToolGate from '../../components/tool-gate';

// Simple Pie Chart component (no external dependency)
const PieChart = ({ data }: { data: { name: string; value: number; color: string }[] }) => {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    let currentAngle = 0;

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            {data.map((slice, i) => {
                const angle = (slice.value / total) * 360;
                const startAngle = currentAngle;
                currentAngle += angle;

                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (currentAngle - 90) * Math.PI / 180;

                const x1 = 50 + 35 * Math.cos(startRad);
                const y1 = 50 + 35 * Math.sin(startRad);
                const x2 = 50 + 35 * Math.cos(endRad);
                const y2 = 50 + 35 * Math.sin(endRad);

                const largeArc = angle > 180 ? 1 : 0;

                return (
                    <path
                        key={i}
                        d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={slice.color}
                        className="transition-all duration-500"
                    />
                );
            })}
            <circle cx="50" cy="50" r="20" fill="#050505" />
        </svg>
    );
};

// --- PERSONA TYPES ---
type Persona = 'Founder' | 'CPO' | 'VP Eng' | 'CFO';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Founder', label: 'Founder/CEO', icon: Target },
    { id: 'CPO', label: 'CPO/Product', icon: Users },
    { id: 'VP Eng', label: 'VP Engineering', icon: Cpu },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

interface Results {
    score: number;
    metrics: {
        growth: number;
        retention: number;
        maintenance: number;
    };
    financials: {
        waste: number;
        wastePerSprint: number;
        debtReductionROI: number;
    };
    categorized?: Array<{
        ticket: string;
        category: string;
        reasoning: string;
    }>;
    debtVelocity: number; // tickets per sprint going to debt
    burnDownWeeks: number; // estimated weeks to clear if dedicated
    ticketCount: number;
    qpep_roadmap?: Array<{
        month: number;
        focus: string;
        action_items: string[];
    }>;
}

export default function PDITool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');

    // Progressive Disclosure State
    const [step, setStep] = useState(1);

    // Inputs
    const [tickets, setTickets] = useState('');
    const [teamSize, setTeamSize] = useState(20);
    const [salary, setSalary] = useState(240000);
    const [roadmapHorizon, setRoadmapHorizon] = useState('Q4');
    const [sprintLength, setSprintLength] = useState('2');
    const [avgTicketAge, setAvgTicketAge] = useState('30');
    
    // UI States
    const [loading, setLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [results, setResults] = useState<Results | null>(null);
    const [showGate, setShowGate] = useState(false);
    const [showPaywall, setShowPaywall] = useState(false);

    // Email capture


    const analyze = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tickets: tickets.split('\n').filter(t => t.trim()) })
            });

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            const total = data.total;
            const maint = data.categories.maintenance;
            const growth = data.categories.growth;
            const retention = data.categories.retention;

            // PDI Score = 100 - Maintenance %
            const score = Math.round(100 - ((maint / total) * 100));

            // Enhanced calculations
            const teamNum = teamSize || 1;
            const salaryNum = salary || 0;
            const sprintWeeks = parseInt(sprintLength) || 2;
            const sprintsPerYear = 52 / sprintWeeks;
            const waste = teamNum * salaryNum * (maint / total);
            const wastePerSprint = waste / sprintsPerYear;
            const debtTickets = maint;
            const ticketsPerSprint = total / sprintsPerYear;
            const debtVelocity = Math.round((maint / total) * ticketsPerSprint);
            // If we dedicated the team to debt reduction, how long to clear?
            const burnDownWeeks = Math.ceil(maint / (teamNum * 0.5)); // ~0.5 tickets per engineer per sprint
            // ROI: cost of 1 sprint of dedicated debt reduction vs annual savings
            const sprintCost = (teamNum * salaryNum) / sprintsPerYear;
            const debtReductionROI = waste / sprintCost;

            setResults({
                score,
                metrics: {
                    growth: Math.round((growth / total) * 100),
                    retention: Math.round((retention / total) * 100),
                    maintenance: Math.round((maint / total) * 100),
                },
                financials: {
                    waste,
                    wastePerSprint,
                    debtReductionROI,
                },
                categorized: data.categorized,
                debtVelocity,
                burnDownWeeks,
                ticketCount: total,
                qpep_roadmap: data.qpep_roadmap,
            });
        } catch (error: any) {
            console.error(error);
            alert(`Audit failed: ${error.message || "Unknown error"}`);
        }
        finally { setLoading(false); }
    };

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(0);
    };

    // Persona-specific insights
    const getPersonaInsight = (results: Results): { headline: string; detail: string; action: string } => {
        const score = results.score;
        const waste = results.financials.waste;
        const maintenance = results.metrics.maintenance;

        switch (persona) {
            case 'Founder':
                if (score < 50) return {
                    headline: `⚠️ You're burning ${formatMoney(waste)}/year on janitorial work.`,
                    detail: `With ${maintenance}% of capacity in maintenance, you're paying senior engineer salaries for junior-level work. This is capital leakage that affects your runway and valuation.`,
                    action: 'Schedule a product rationalization session before your next funding round.'
                };
                return {
                    headline: 'Your roadmap is investor-ready.',
                    detail: `${results.metrics.growth}% growth focus signals healthy capital allocation. Your engineering spend is creating enterprise value.`,
                    action: 'Document this as proof of operational discipline for investors.'
                };

            case 'CPO':
                if (score < 60) return {
                    headline: `Your roadmap credibility is at ${score}%.`,
                    detail: `When ${maintenance}% of engineering is in maintenance mode, your feature commitments become unreliable. The board sees this as execution risk.`,
                    action: 'Map the debt hotspots and create a burn-down plan.'
                };
                return {
                    headline: 'Your roadmap is execution-ready.',
                    detail: `With ${results.metrics.growth}% growth allocation, you have the capacity to hit your commitments.`,
                    action: 'Focus on protecting this allocation from scope creep.'
                };

            case 'VP Eng':
                const seniorHours = waste / (salary / 2080); // Approximate hours wasted
                if (score < 50) return {
                    headline: `${Math.round(seniorHours).toLocaleString()} hours/year of senior IC time is wasted.`,
                    detail: `Your team is doing ${maintenance}% maintenance work. This is the #1 cause of senior engineer attrition—they didn't sign up to be janitors.`,
                    action: 'Identify the debt clusters and make a case for dedicated reduction sprints.'
                };
                return {
                    headline: 'Your team is in high-leverage mode.',
                    detail: `At ${score}% efficiency, your engineers are working on value-creating activities. Protect this.`,
                    action: 'Maintain discipline on new feature scope to prevent regression.'
                };

            case 'CFO':
                const roi = (100 - maintenance) / 100;
                if (score < 50) return {
                    headline: `Engineering ROI: ${(roi * 100).toFixed(0)} cents per dollar.`,
                    detail: `For every $1 spent on engineering, ${(maintenance).toFixed(0)} cents is going to maintenance with no return. Annual waste: ${formatMoney(waste)}.`,
                    action: 'Model the impact of a debt reduction investment vs. continued drag.'
                };
                return {
                    headline: `Engineering ROI: ${(roi * 100).toFixed(0)} cents per dollar.`,
                    detail: `This is within healthy bounds for a growth-stage company. Continue monitoring quarterly.`,
                    action: 'Set up quarterly PDI tracking as a financial KPI.'
                };

            default:
                return { headline: '', detail: '', action: '' };
        }
    };

    const handleSaveAndExport = async () => {
        if (!results) return;
        setIsSaving(true);
        try {
            // 1. Save to Supabase via API
            const saveRes = await fetch('/api/tools/pdi/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    score: results.score,
                    financial_waste: results.financials.waste,
                    inputs: { teamSize, salary, sprintLength, avgTicketAge, roadmapHorizon, tickets: tickets.substring(0, 1000) }
                })
            });

            if (!saveRes.ok) {
                const errData = await saveRes.json().catch(() => ({}));
                if (saveRes.status === 402) {
                    setShowPaywall(true);
                    return; // Abort export
                }
                throw new Error(errData.error || `Vault connection failed (${saveRes.status})`);
            }

            // 2. Generate PDF Artifact
            const element = document.getElementById('pdi-results-artifact');
            if (element) {
                // toPng handles modern CSS natively without crashing on oklab/oklch colors.
                const imgData = await toPng(element, { 
                    pixelRatio: 2, 
                    backgroundColor: '#050505'
                });
                
                // Get element dimensions for precise PDF scaling
                const { offsetWidth, offsetHeight } = element;
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'px',
                    format: [offsetWidth, offsetHeight]
                });
                pdf.addImage(imgData, 'PNG', 0, 0, offsetWidth, offsetHeight);
                pdf.save(`Product_Debt_Index_${new Date().toISOString().split('T')[0]}.pdf`);
            }
        } catch (error: any) {
            console.error('Export Error:', error);
            alert(`Failed to export report: ${error?.message || error}`);
        } finally {
            setIsSaving(false);
        }
    };

    const COLORS = { growth: '#22d3ee', retention: '#8b5cf6', maintenance: '#dc2626' };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            <ToolCelebration show={!!results} toolName="PDI" />
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">PDI Engine</span>
            </div>

            {!results ? (
                /* --- INPUT STATE --- */
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-red-400 uppercase tracking-widest">PDI 2.0 | AI Forensic Engine</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Quantify the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Hidden Debt.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                            AI-powered forensic audit for engineering insolvency. Paste your backlog and see where your capital is bleeding.
                        </p>

                        {/* PERSONA SELECTOR */}
                        <div className="mb-8">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">I am a...</div>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAS.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => setPersona(p.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id
                                            ? 'bg-red-500/10 border-red-500 text-red-400'
                                            : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/30'
                                            }`}
                                    >
                                        <p.icon size={14} />
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* PROGRESSIVE DISCLOSURE WIZARD */}
                        <div className="space-y-6">
                            
                            {/* STEP 1: ORGANIZATIONAL SCALE */}
                            {step === 1 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold font-mono text-sm border border-cyan-500/30">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Organizational Scale</h3>
                                            <p className="text-sm text-zinc-500">Define the size and cost of your engineering machine.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                                    Engineering Team Size
                                                    <span className="w-4 h-4 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-[10px] cursor-help" title="Total number of ICs, EMs, and QA who touch the codebase.">?</span>
                                                </label>
                                                <div className="text-3xl font-bold text-white font-mono">{teamSize}</div>
                                            </div>
                                            <input 
                                                title="Engineering Team Size"
                                                aria-label="Engineering Team Size"
                                                type="range" min="1" max="500" value={teamSize} 
                                                onChange={e => setTeamSize(parseInt(e.target.value))}
                                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" 
                                            />
                                            <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-2">
                                                <span>1 (Startup)</span>
                                                <span>{teamSize > 120 ? 'Enterprise (>120)' : teamSize > 40 ? 'Scale-up (40-120)' : 'Growth (1-40)'}</span>
                                                <span>500 (Enterprise)</span>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-mono text-violet-400 uppercase tracking-widest flex items-center gap-2">
                                                    Average Fully-Loaded Salary
                                                    <span className="w-4 h-4 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-[10px] cursor-help" title="Base salary + benefits, taxes, software licenses, and overhead. Usually 120-140% of base.">?</span>
                                                </label>
                                                <div className="text-3xl font-bold text-white font-mono">${(salary / 1000).toFixed(0)}k</div>
                                            </div>
                                            <input 
                                                title="Average Fully-Loaded Salary"
                                                aria-label="Average Fully-Loaded Salary"
                                                type="range" min="60000" max="450000" step="5000" value={salary} 
                                                onChange={e => setSalary(parseInt(e.target.value))}
                                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-500" 
                                            />
                                        </div>
                                    </div>

                                    <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2">
                                        Next: R&D Cadence <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            )}

                            {/* STEP 2: CADENCE & HORIZON */}
                            {step === 2 && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold font-mono text-sm border border-violet-500/30">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">R&D Cadence</h3>
                                            <p className="text-sm text-zinc-500">How you plan and measure velocity.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div>
                                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 block">Sprint Length</label>
                                            <select title="Sprint Length" aria-label="Sprint Length" value={sprintLength} onChange={e => setSprintLength(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono focus:border-violet-500 focus:outline-none transition-colors">
                                                <option value="1">1 Week</option>
                                                <option value="2">2 Weeks</option>
                                                <option value="3">3 Weeks</option>
                                                <option value="4">4 Weeks</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 block">Ticket Age (Days)</label>
                                            <input title="Average Ticket Age" aria-label="Average Ticket Age" placeholder="e.g. 30" type="number" value={avgTicketAge} onChange={e => setAvgTicketAge(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono focus:border-violet-500 focus:outline-none transition-colors" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 block">Horizon</label>
                                            <select title="Roadmap Horizon" aria-label="Roadmap Horizon" value={roadmapHorizon} onChange={e => setRoadmapHorizon(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono focus:border-violet-500 focus:outline-none transition-colors">
                                                <option value="Q1">Q1 (This Quarter)</option>
                                                <option value="H1">H1 (6 Months)</option>
                                                <option value="FY">FY (Full Year)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="w-1/3 py-4 bg-zinc-900 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-all">
                                            Back
                                        </button>
                                        <button onClick={() => setStep(3)} className="w-2/3 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-violet-400 transition-all flex items-center justify-center gap-2">
                                            Next: Inject Evidence <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: EVIDENCE INJECTION */}
                            {step === 3 && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold font-mono text-sm border border-red-500/30">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Backlog Evidence</h3>
                                            <p className="text-sm text-zinc-500">Paste your recent Jira tickets, PRs, or tasks.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            value={tickets}
                                            onChange={e => setTickets(e.target.value)}
                                            className="w-full h-48 sm:h-64 bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-zinc-700 resize-none"
                                            placeholder="Paste Jira tickets, PRs, or task descriptions here (one per line)...

Example:
Fix login page race condition
Refactor payment microservice
Add enterprise SSO tier
Optimize dashboard database query
Migrate from Heroku to AWS"
                                        />
                                        <p className="text-xs text-zinc-600 mt-2 font-mono">Our LLM classifier will categorize these into Growth, Retention, or Maintenance to calculate your capital leakage.</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(2)} className="w-1/3 py-4 bg-zinc-900 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-all">
                                            Back
                                        </button>
                                        <div className="w-2/3">
                                            <ShineBorder borderColor="rgba(220, 38, 38, 0.6)" duration={2}>
                                                <button
                                                    onClick={() => setShowGate(true)}
                                                    disabled={loading || !tickets.trim()}
                                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                                >
                                                    {loading ? (
                                                        <>
                                                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                            ANALYZING...
                                                        </>
                                                    ) : (
                                                        "RUN FORENSIC AUDIT →"
                                                    )}
                                                </button>
                                            </ShineBorder>
                                        </div>
                                    </div>

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="the Product Debt Index" onUnlock={() => { setShowGate(false); analyze(); }}>
                                                <></>
                                            </ToolGate>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            ) : (
                /* --- RESULTS STATE --- */
                <div id="pdi-results-artifact" className="bg-[#050505] p-2 sm:p-6 rounded-3xl">
                    <ScrollReveal>
                        {/* Score Header */}
                        <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-white/10">
                            <BorderBeam size={300} duration={12} delay={9} borderWidth={1.5} />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                <div>
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Capital Efficiency Score</div>
                                    <div className={`text-7xl sm:text-9xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r ${results.score < 50 ? 'from-red-500 to-orange-600' : 'from-cyan-400 to-blue-500'}`}>
                                        <NumberTicker value={results.score} />
                                    </div>
                                    <div className="mt-4">
                                        {results.score < 50 ? (
                                            <span className="px-3 py-1.5 rounded-full bg-red-900/30 text-red-400 border border-red-900/50 text-xs font-bold uppercase tracking-widest">
                                                ⚠ INSOLVENT
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1.5 rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-900/50 text-xs font-bold uppercase tracking-widest">
                                                ✓ HIGH LEVERAGE
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
                                        Based on your backlog, <strong className="text-white">{results.metrics.maintenance}% of your capacity</strong> is consumed by non-accretive work.
                                        You are burning <span className="text-red-500 font-bold font-mono">${(results.financials.waste / 1000000).toFixed(1)}M</span> annually on maintenance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* PERSONA-SPECIFIC INSIGHT */}
                    <ScrollReveal delay={50}>
                        <div className="capsule-container rounded-2xl p-6 mb-6 border-l-4 border-red-500">
                            <div className="flex items-center gap-2 mb-3 text-zinc-500">
                                <Target size={14} />
                                <span className="text-[10px] font-mono uppercase tracking-widest">Insight for {persona}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{getPersonaInsight(results).headline}</h3>
                            <p className="text-zinc-400 leading-relaxed mb-3">{getPersonaInsight(results).detail}</p>
                            <p className="text-cyan-400 font-semibold">{getPersonaInsight(results).action}</p>
                        </div>
                    </ScrollReveal>

                    {/* Metrics Grid */}
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <GlowCard className="p-6" glowColor="danger">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Annual Waste</div>
                                <div className="text-3xl sm:text-4xl font-bold text-red-500">${(results.financials.waste / 1000000).toFixed(2)}M</div>
                                <p className="text-xs text-red-400/60 mt-2">Capital deployed to zero-ROI tasks.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Growth Focus</div>
                                <div className="text-3xl sm:text-4xl font-bold text-cyan-400">{results.metrics.growth}%</div>
                                <p className="text-xs text-cyan-400/60 mt-2">New feature development.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Retention Work</div>
                                <div className="text-3xl sm:text-4xl font-bold text-purple-400">{results.metrics.retention}%</div>
                                <p className="text-xs text-purple-400/60 mt-2">Customer satisfaction & churn prevention.</p>
                            </GlowCard>
                        </div>
                    </ScrollReveal>

                    {/* Enhanced Metrics */}
                    <ScrollReveal delay={150}>
                        <div className="capsule-container rounded-2xl p-6 mb-6">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Debt Dynamics</div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-black/30 rounded-xl p-4">
                                    <div className="text-xs text-zinc-500 mb-1">Waste per Sprint</div>
                                    <div className="text-xl font-bold text-red-400">{formatMoney(results.financials.wastePerSprint)}</div>
                                </div>
                                <div className="bg-black/30 rounded-xl p-4">
                                    <div className="text-xs text-zinc-500 mb-1">Debt Velocity</div>
                                    <div className="text-xl font-bold text-orange-400">{results.debtVelocity} tickets/sprint</div>
                                </div>
                                <div className="bg-black/30 rounded-xl p-4">
                                    <div className="text-xs text-zinc-500 mb-1">Clear Backlog In</div>
                                    <div className="text-xl font-bold text-yellow-400">{results.burnDownWeeks} weeks</div>
                                    <div className="text-[10px] text-zinc-600">if dedicated</div>
                                </div>
                                <div className="bg-black/30 rounded-xl p-4">
                                    <div className="text-xs text-zinc-500 mb-1">Debt Reduction ROI</div>
                                    <div className="text-xl font-bold text-emerald-400">{results.financials.debtReductionROI.toFixed(1)}x</div>
                                    <div className="text-[10px] text-zinc-600">per sprint invested</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Breakdown Chart */}
                    <ScrollReveal delay={150}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Backlog Composition</div>
                                <div className="w-48 h-48 mx-auto">
                                    <PieChart data={[
                                        { name: 'Growth', value: results.metrics.growth, color: COLORS.growth },
                                        { name: 'Retention', value: results.metrics.retention, color: COLORS.retention },
                                        { name: 'Maintenance', value: results.metrics.maintenance, color: COLORS.maintenance },
                                    ]} />
                                </div>
                                <div className="flex justify-center gap-6 mt-6">
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-cyan-400" /><span className="text-xs text-zinc-400">Growth</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-purple-500" /><span className="text-xs text-zinc-400">Retention</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-red-600" /><span className="text-xs text-zinc-400">Maintenance</span></div>
                                </div>
                            </GlowCard>

                            {/* EXECUTIVE SUMMARY + EMAIL */}
                            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className={`w-3 h-3 rounded-full animate-pulse ${results.score < 50 ? 'bg-red-500' : 'bg-cyan-400'}`} />
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Executive Summary</span>
                                </div>

                                <ul className="space-y-2 text-zinc-400 text-sm mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-0.5">•</span>
                                        <span>PDI of <strong className="text-white">{results.score}</strong> means {100 - results.score}% of capacity is non-value-creating.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-0.5">•</span>
                                        <span>Annual maintenance waste: <strong className="text-red-400">{formatMoney(results.financials.waste)}</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-0.5">•</span>
                                        <span>Growth allocation: <strong className="text-cyan-400">{results.metrics.growth}%</strong> of backlog.</span>
                                    </li>
                                </ul>

                                <div className="space-y-3">
                                    <div className="text-sm text-white font-semibold mb-2">Get the full debt burn-down plan:</div>
                                    <NewsletterForm
                                        buttonText="Get Debt Analysis"
                                        extraData={{
                                            tool: 'PDI',
                                            persona,
                                            score: results.score
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Ticket Breakdown */}
                    {results.categorized && results.categorized.length > 0 && (
                        <ScrollReveal delay={200}>
                            <GlowCard className="p-6 mb-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">AI Categorization Results</div>
                                <div className="max-h-64 overflow-y-auto space-y-2">
                                    {results.categorized.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${item.category === 'growth' ? 'bg-cyan-500/20 text-cyan-400' :
                                                item.category === 'retention' ? 'bg-purple-500/20 text-purple-400' :
                                                    'bg-red-500/20 text-red-400'
                                                }`}>
                                                {item.category}
                                            </span>
                                            <div className="flex-1">
                                                <p className="text-sm text-white">{item.ticket}</p>
                                                <p className="text-xs text-zinc-500 mt-1">{item.reasoning}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlowCard>
                        </ScrollReveal>
                    )}

                    {/* Q-PEP ROADMAP */}
                    {results.qpep_roadmap && results.qpep_roadmap.length > 0 && (
                        <ScrollReveal delay={225}>
                            <h3 className="text-xl font-bold text-white mb-4 mt-8 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                Quarterly Product Execution Plan (Q-PEP)
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {results.qpep_roadmap.map((plan, i) => (
                                    <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
                                        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-3 border-b border-white/5 pb-2">
                                            Month {plan.month}
                                        </div>
                                        <h4 className="font-bold text-white mb-4 text-sm">{plan.focus}</h4>
                                        <ul className="space-y-3">
                                            {plan.action_items.map((action, j) => (
                                                <li key={j} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                                                    <span className="text-cyan-500 mt-1 border border-cyan-500/30 rounded text-[8px] px-1 font-mono shrink-0">EXEC</span>
                                                    <span>{action}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Action Footer */}
                    <ScrollReveal delay={250}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/10" data-html2canvas-ignore>
                            <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← Run New Audit</button>
                            <button onClick={handleSaveAndExport} disabled={isSaving} className={`px-10 py-4 font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 ${results.score < 50
                                ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] disabled:bg-red-800'
                                : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.3)] disabled:bg-cyan-700'
                                }`}>
                                {isSaving ? (
                                    <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> GENERATING REPORT...</>
                                ) : '💾 SAVE TO VAULT & EXPORT PDF'}
                            </button>
                            <Link href="/system" className="text-zinc-500 text-sm hover:text-white">Explore All Tools →</Link>
                        </div>
                    </ScrollReveal>

                    {/* Social Proof */}
                    <ScrollReveal delay={300}>
                        <div className="text-center pt-8 pb-4">
                            <p className="text-xs text-zinc-600 mb-3">Trusted by product leaders at</p>
                            <div className="flex items-center justify-center gap-8 text-zinc-600 font-mono text-xs">
                                <span>Stripe</span>
                                <span>Figma</span>
                                <span>Linear</span>
                                <span>Notion</span>
                                <span>Vercel</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            )
            }

            {/* AUTHORITY CONTENT: PDI */}
            <div className="max-w-4xl mx-auto mt-32 mb-24 space-y-16 px-6">
                <div className="prose prose-invert prose-lg max-w-none">
                    <h2 className="text-4xl font-bold text-white mb-8">Why Standard Technical Debt Calculators Fail</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Most engineering metrics are vanity signals. Counting &quot;cyclomatic complexity&quot; or &quot;TODO comments&quot; does not tell a CFO whether to approve a budget. The <strong>Product Debt Index™ (PDI)</strong> is different. It is a forensic accounting tool that converts &quot;bad code&quot; into &quot;wasted salary dollars.&quot;
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        When your PDI drops below 50, you have crossed the <strong>Insolvency Threshold</strong>. You are no longer a software company; you are a digital nursing home. You are paying senior engineer salaries to change bedpans (maintenance) instead of building skyscrapers (growth).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">The &quot;Compound Interest&quot; of Bad Code</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Technical debt is financial debt with variable interest rates. A &quot;quick hack&quot; to ship a feature for Q3 earnings is a loan taken out against Q4 velocity. If you do not pay down the principal (refactoring), the interest payments (maintenance work) will eventually consume 100% of your available capacity. This calculator quantifies that interest payment in real-time.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-red-500 mb-4">CapEx vs. OpEx Trap</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Private Equity firms love this metric. They use it to detect if an engineering team is capitalizing expenses (claiming maintenance work as &quot;R&amp;D&quot;) to inflate EBITDA. The PDI exposes the truth: are you building assets, or just servicing liabilities?
                        </p>
                    </div>
                </div>
            </div>

            {/* MONETIZATION ENGINE: PAYWALL MODAL */}
            {showPaywall && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" data-html2canvas-ignore>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-md w-full p-8 relative shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                        {/* Lighting Fx */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                                <Lock className="w-5 h-5 text-red-400" />
                            </div>
                            
                            <h3 className="text-3xl font-bold text-white mb-2 font-grotesk tracking-tight">Limit Reached.</h3>
                            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                                You have consumed your allocation of 3 free diagnostic audits. Unlock the Full Library to save unlimited board-ready PDF reports directly to your Vault.
                            </p>
                            
                            <div className="space-y-3">
                                <Link 
                                    href="/api/buy/full_curriculum" 
                                    onClick={() => setShowPaywall(false)}
                                    className="flex items-center justify-center w-full py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
                                >
                                    Unlock Library for $199
                                </Link>
                                <button 
                                    onClick={() => setShowPaywall(false)} 
                                    className="flex items-center justify-center w-full py-3 bg-transparent hover:bg-white/5 text-zinc-400 font-bold uppercase tracking-widest text-xs rounded-xl transition-all"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}
