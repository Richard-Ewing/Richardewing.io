"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    AlertTriangle, 
    ArrowRight, 
    Check, 
    Copy, 
    Flame, 
    Sparkles 
} from 'lucide-react';

type Mode = 'tuesday' | 'calculator' | 'boardroom';

const CLAIMS = [
    {
        id: 'speed',
        short: 'Engineers are 10x faster',
        tag: 'The Velocity Myth',
        vendorSays: 'Your developers will write ten times more code and clear the sprint backlog before lunch.',
        tenthThought: 'More code is not more value. Typing was never the bottleneck; thinking was. Now your team generates 4,000 lines of plausible-looking boilerplate before 11 AM, and your senior engineers spend all afternoon acting like unpaid babysitters trying to figure out why the payment webhook randomly fails.',
        theFix: 'Measure shipped outcomes and customer defect rate, not pull request volume. If pull requests doubled but production releases slowed down, your team is drowning in machine-generated homework.'
    },
    {
        id: 'juniors',
        short: 'We do not need junior hires',
        tag: 'The Talent Trap',
        vendorSays: 'AI handles junior tasks. You can freeze junior hiring and only keep senior architects.',
        tenthThought: 'Senior engineers do not hatch out of an egg at age thirty-two. If you never hire people to learn the craft, who is going to review the AI output in four years? Right now, your juniors are pressing tab on autocomplete lines they do not understand, while your seniors burn out doing line-by-line damage control.',
        theFix: 'Pair junior engineers with senior humans, not just autocomplete prompts. Require developers to explain the logic of every generated block in plain English before it touches production.'
    },
    {
        id: 'agents',
        short: 'Autonomous agents run our ops',
        tag: 'The Autonomy Illusion',
        vendorSays: 'Set up autonomous agents with access to your tools and let them handle customer workflows end-to-end.',
        tenthThought: 'An autonomous agent without strict deterministic guardrails is just an intern with infinite caffeine and your production database credentials. The moment an edge case hits, it does not stop; it loops sixty times, hallucinates a workaround, and bills your credit card $400 for the privilege.',
        theFix: 'Install hard spending caps, strict state machines, and human approval gates on any action that touches real money, customer emails, or database state.'
    },
    {
        id: 'budget',
        short: 'AI will lower software spend',
        tag: 'The Budget Paradox',
        vendorSays: 'AI replaces third-party SaaS seats, slashes contractor costs, and shrinks your R&D budget.',
        tenthThought: 'You did not save money; you just traded a predictable line item for an unpredictable casino ticket. You are paying $30 per seat for tools that half your team stopped using in November, plus a surprise $6,000 cloud bill because a background worker ran a recursive search query over the weekend.',
        theFix: 'Audit unused seats quarterly. Turn off auto-renew on pilot seats with zero activity in thirty days. Treat token usage like manufacturing cost of goods sold, not general software overhead.'
    }
];

export default function LivingRealityCheck() {
    const [activeMode, setActiveMode] = useState<Mode>('tuesday');
    const [scrubberValue, setScrubberValue] = useState<number>(75); // 0 = 100% pitch, 100 = 100% Tuesday
    const [selectedClaim, setSelectedClaim] = useState<string>('speed');
    const [copied, setCopied] = useState<boolean>(false);

    // Calculator state
    const [teamSize, setTeamSize] = useState<number>(10);
    const [avgSalary, setAvgSalary] = useState<number>(165000);
    const [babysitHours, setBabysitHours] = useState<number>(6);
    const [toolSpend, setToolSpend] = useState<number>(3000);

    // Math for Babysitting Tax
    const calc = useMemo(() => {
        const hourlyRate = avgSalary / 2080;
        const weeklyCostPerEng = hourlyRate * babysitHours;
        const monthlyTax = Math.round(weeklyCostPerEng * 4.33 * teamSize);
        const annualTax = monthlyTax * 12;
        const ratio = toolSpend > 0 ? (monthlyTax / toolSpend).toFixed(1) : '0';

        let verdict = '';
        if (monthlyTax > 25000) {
            verdict = 'Your senior engineers are no longer building software. They are running the most expensive spellcheck in corporate history.';
        } else if (monthlyTax > 10000) {
            verdict = 'For every dollar you hand your AI vendor, your payroll burns multiple dollars just keeping the generated code from breaking production.';
        } else {
            verdict = 'Your team has reasonable hygiene, but hidden review friction is still quietly draining engineering momentum every week.';
        }

        return { hourlyRate, monthlyTax, annualTax, ratio, verdict };
    }, [teamSize, avgSalary, babysitHours, toolSpend]);

    const activeClaimData = useMemo(() => {
        return CLAIMS.find(c => c.id === selectedClaim) || CLAIMS[0];
    }, [selectedClaim]);

    const handleCopySummary = () => {
        const text = `AI Reality Check Summary (via richardewing.io)
----------------------------------------
Team Size: ${teamSize} engineers
Monthly Tool Spend: $${toolSpend.toLocaleString()}
Hidden Babysitting Tax: $${calc.monthlyTax.toLocaleString()} / month ($${calc.annualTax.toLocaleString()} / year)
Cleanup Ratio: For every $1 spent on AI tools, ~$${calc.ratio} is spent on human cleanup.
Verdict: ${calc.verdict}
Full interactive breakdown: https://www.richardewing.io/reality-check`;

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto my-8">
            {/* Ambient Brand Refraction (Neon Cyan #00F0FF + Royal Purple #7C3AED + Magenta #EC4899) */}
            <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-purple-600/20 to-pink-500/20 blur-xl opacity-75 pointer-events-none" />
            
            {/* Main Instrument Canvas in Richard's Signature Warm Editorial Aesthetic */}
            <div className="relative rounded-[2rem] bg-white border border-zinc-200/90 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.12),0_1px_3px_rgba(0,0,0,0.05)] p-6 sm:p-8 md:p-10 overflow-hidden text-zinc-900">
                
                {/* Header & Sub-Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                            <span>Living Diagnostic Instrument</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-grotesk font-bold tracking-tight text-zinc-950">
                            The AI Reality Check
                        </h2>
                        <p className="text-sm text-zinc-600 mt-1 max-w-xl font-medium">
                            What actually happens to your team, your code, and your budget when the sales demo ends.
                        </p>
                    </div>

                    {/* Mode Navigation Pills */}
                    <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 border border-zinc-200/80 self-start md:self-auto">
                        <button
                            onClick={() => setActiveMode('tuesday')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                activeMode === 'tuesday'
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/80'
                            }`}
                        >
                            The Pitch vs. Tuesday
                        </button>
                        <button
                            onClick={() => setActiveMode('calculator')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                activeMode === 'calculator'
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/80'
                            }`}
                        >
                            Babysitting Tax
                        </button>
                        <button
                            onClick={() => setActiveMode('boardroom')}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                activeMode === 'boardroom'
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/80'
                            }`}
                        >
                            Boardroom Truths
                        </button>
                    </div>
                </div>

                {/* MODE 1: THE PITCH VS. TUESDAY (Interactive Scrubber) */}
                {activeMode === 'tuesday' && (
                    <motion.div
                        key="mode-tuesday"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="py-6 space-y-6"
                    >
                        {/* Interactive Scrubber Slider */}
                        <div className="p-5 rounded-2xl bg-[#F5F0EB]/60 border border-zinc-200">
                            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-2">
                                <span className={scrubberValue < 40 ? 'text-cyan-800 font-bold' : 'text-zinc-500'}>
                                    01 · The Sales Demo (Honeymoon)
                                </span>
                                <span className={scrubberValue > 60 ? 'text-pink-700 font-bold' : 'text-zinc-500'}>
                                    02 · Actual Tuesday (Month 3)
                                </span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={scrubberValue}
                                onChange={(e) => setScrubberValue(Number(e.target.value))}
                                className="w-full h-2.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-purple-600"
                            />
                            <div className="flex items-center justify-between text-[11px] text-zinc-500 mt-2 font-mono">
                                <span>Slide to reveal the contrast</span>
                                <span className="text-zinc-800 font-bold">
                                    {scrubberValue < 30 ? 'Demo Mode' : scrubberValue > 70 ? 'Tuesday Reality' : 'Transition Zone'}
                                </span>
                            </div>
                        </div>

                        {/* Live Comparison Split Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Left: What the Pitch Promised (Cyan Accent) */}
                            <div className={`p-6 rounded-2xl border transition-all ${
                                scrubberValue < 50 
                                    ? 'bg-cyan-50/70 border-cyan-300 shadow-md ring-1 ring-cyan-400/30' 
                                    : 'bg-zinc-50/60 border-zinc-200 opacity-60'
                            }`}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-900">
                                        What the Sales Deck Promised
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">
                                    "Developers ship 10x faster with zero friction"
                                </h3>
                                <ul className="space-y-2 text-xs text-zinc-700 font-medium">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                                        <span>Backlog sprints cleared in record hours.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                                        <span>Automated code generation removes boilerplate work.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                                        <span>Junior hires produce senior-grade output on day one.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                                        <span>Software engineering costs drop dramatically.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right: What Tuesday Actually Looks Like (Magenta/Rose Accent) */}
                            <div className={`p-6 rounded-2xl border transition-all ${
                                scrubberValue >= 50 
                                    ? 'bg-pink-50/70 border-pink-300 shadow-md ring-1 ring-pink-400/30' 
                                    : 'bg-zinc-50/60 border-zinc-200 opacity-60'
                            }`}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-pink-900">
                                        What Actual Tuesday Looks Like
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">
                                    "Seniors spend 16 hours a week babysitting AI pull requests"
                                </h3>
                                <ul className="space-y-2 text-xs text-zinc-700 font-medium">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                                        <span>Pull request volume is up 40%, but release velocity is flat.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                                        <span>Junior developers accept autocomplete lines they cannot explain.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                                        <span>Senior engineers feel burned out doing line-by-line damage control.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                                        <span>The monthly cloud bill has an unexpected extra zero at the end.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Real-time Dynamic Verdict Box */}
                        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                                <Flame className="w-4 h-4 text-amber-700" />
                            </div>
                            <div className="text-xs leading-relaxed text-zinc-800">
                                <span className="font-bold text-zinc-950 block mb-0.5 font-grotesk">
                                    The 10th-Thought Observation:
                                </span>
                                {scrubberValue < 50 ? (
                                    <span>The pitch is always flawless because demo code doesn't have real customers, edge cases, legacy databases, or billing caps.</span>
                                ) : (
                                    <span>Typing was never what slowed down software development. Understanding requirements, verifying edge cases, and not breaking the payment flow is what takes time. AI makes typing free, which means your team produces twice as much confusion in half the time.</span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* MODE 2: THE BABYSITTING TAX CALCULATOR */}
                {activeMode === 'calculator' && (
                    <motion.div
                        key="mode-calculator"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="py-6 space-y-6"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            
                            {/* Sliders Column (7 cols) */}
                            <div className="lg:col-span-7 space-y-5">
                                
                                {/* Slider 1: Team Size */}
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-800 mb-1.5">
                                        <span>Engineers on Team</span>
                                        <span className="font-mono text-zinc-950 font-bold">{teamSize} developers</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="2"
                                        max="50"
                                        step="1"
                                        value={teamSize}
                                        onChange={(e) => setTeamSize(Number(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                    />
                                    <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                                        <span>2</span>
                                        <span>25</span>
                                        <span>50</span>
                                    </div>
                                </div>

                                {/* Slider 2: Average Salary */}
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-800 mb-1.5">
                                        <span>Average Annual Salary</span>
                                        <span className="font-mono text-zinc-950 font-bold">${avgSalary.toLocaleString()}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100000"
                                        max="250000"
                                        step="5000"
                                        value={avgSalary}
                                        onChange={(e) => setAvgSalary(Number(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                                    />
                                    <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                                        <span>$100,000</span>
                                        <span>$175,000</span>
                                        <span>$250,000</span>
                                    </div>
                                </div>

                                {/* Slider 3: Hours Reviewing / Cleaning AI Code */}
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-800 mb-1.5">
                                        <span>Hours Cleaning/Reviewing AI Output (per eng/week)</span>
                                        <span className="font-mono text-pink-700 font-bold">{babysitHours} hrs / week</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="15"
                                        step="1"
                                        value={babysitHours}
                                        onChange={(e) => setBabysitHours(Number(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                                    />
                                    <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                                        <span>1 hr (tight rules)</span>
                                        <span>7 hrs (typical)</span>
                                        <span>15 hrs (chaos)</span>
                                    </div>
                                </div>

                                {/* Slider 4: Monthly Tool & API Spend */}
                                <div>
                                    <div className="flex justify-between text-xs font-semibold text-zinc-800 mb-1.5">
                                        <span>Monthly AI Seats &amp; API Bill</span>
                                        <span className="font-mono text-zinc-950 font-bold">${toolSpend.toLocaleString()} / mo</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="200"
                                        max="15000"
                                        step="200"
                                        value={toolSpend}
                                        onChange={(e) => setToolSpend(Number(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                                    />
                                    <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                                        <span>$200</span>
                                        <span>$7,500</span>
                                        <span>$15,000</span>
                                    </div>
                                </div>

                            </div>

                            {/* Result Display Box: Obsidian Terminal Slate Centerpiece (5 cols) */}
                            <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950 text-white border border-zinc-800 shadow-xl space-y-4">
                                <div>
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-pink-400 block font-bold">
                                        Hidden Babysitting Tax
                                    </span>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1">
                                        ${calc.monthlyTax.toLocaleString()}
                                        <span className="text-sm font-normal text-zinc-400"> / mo</span>
                                    </div>
                                    <span className="text-xs text-zinc-400 block mt-0.5">
                                        That is ${calc.annualTax.toLocaleString()} every year in payroll spent reviewing synthetic code.
                                    </span>
                                </div>

                                <div className="pt-3 border-t border-zinc-800 space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-zinc-400">The Hangover Ratio:</span>
                                        <span className="font-bold text-amber-300 font-mono">
                                            ${calc.ratio} cleanup for every $1 tool spend
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-zinc-400">Effective Hourly Eng Cost:</span>
                                        <span className="font-bold text-cyan-400 font-mono">
                                            ${Math.round(calc.hourlyRate)} / hr
                                        </span>
                                    </div>
                                </div>

                                <div className="p-3 rounded-xl bg-pink-950/40 border border-pink-500/30 text-xs text-pink-200 leading-snug">
                                    <span className="font-bold block mb-1 font-grotesk text-pink-300">Boardroom Verdict:</span>
                                    {calc.verdict}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}

                {/* MODE 3: BOARDROOM TRUTHS */}
                {activeMode === 'boardroom' && (
                    <motion.div
                        key="mode-boardroom"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="py-6 space-y-6"
                    >
                        {/* Selector Pills */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {CLAIMS.map((claim) => (
                                <button
                                    key={claim.id}
                                    onClick={() => setSelectedClaim(claim.id)}
                                    className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                                        selectedClaim === claim.id
                                            ? 'bg-purple-50 border-purple-500 text-purple-950 shadow-sm ring-2 ring-purple-400/20'
                                            : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                                    }`}
                                >
                                    <span className="text-[10px] font-mono uppercase tracking-wider block opacity-75 mb-1 font-bold">
                                        {claim.tag}
                                    </span>
                                    <span className="font-bold line-clamp-1 font-grotesk">
                                        {claim.short}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Selected Claim Deep Dive Card */}
                        <div className="p-6 rounded-2xl bg-[#F5F0EB]/60 border border-zinc-200 space-y-4">
                            <div>
                                <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wider block mb-1">
                                    What The Vendor Tells The Board
                                </span>
                                <p className="text-sm font-semibold text-zinc-900 italic">
                                    "{activeClaimData.vendorSays}"
                                </p>
                            </div>

                            <div className="pt-3 border-t border-zinc-300/80">
                                <span className="text-xs font-mono font-bold text-pink-700 uppercase tracking-wider block mb-1">
                                    The 10th-Thought Reality on the Ground
                                </span>
                                <p className="text-sm text-zinc-800 leading-relaxed font-medium">
                                    {activeClaimData.tenthThought}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-zinc-300/80 p-4 rounded-xl bg-purple-50 border border-purple-200">
                                <span className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider block mb-1">
                                    What Leadership Should Actually Do
                                </span>
                                <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                                    {activeClaimData.theFix}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Sovereign Action & Export Bar */}
                <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                            onClick={handleCopySummary}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-xs font-bold text-zinc-900 transition-all w-full sm:w-auto cursor-pointer"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 text-emerald-600" />
                                    <span>Copied to Clipboard!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 text-zinc-600" />
                                    <span>Copy Slack Briefing</span>
                                </>
                            )}
                        </button>

                        <Link
                            href="/diagnose"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-300 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-all w-full sm:w-auto"
                        >
                            <span>All 25 Tools</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                        <span className="text-xs text-zinc-500 font-medium hidden lg:inline">
                            Need an objective outside review?
                        </span>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all w-full sm:w-auto"
                        >
                            <span>Book a $450 Gut-Check</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
