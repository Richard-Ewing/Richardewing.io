'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/app/lib/products';

interface ScorecardCheckoutDrawerProps {
    metricLabel?: string;
    metricValue?: string;
    source?: string;
    sourceTool?: string;
    headline?: string;
    subheadline?: string;
    compact?: boolean;
}

export default function ScorecardCheckoutDrawer({
    metricLabel = 'Identified Annual Opportunity',
    metricValue,
    source,
    sourceTool,
    headline = 'Fix This Math Today: Choose Your Execution Speed',
    subheadline = 'Whether you are a builder stuck at 80%, a Product Manager defending gross margins, or a CFO cutting SaaS bloat, pick the exact speed that fits your timeline.',
    compact = false,
}: ScorecardCheckoutDrawerProps) {
    const resolvedSource = source || sourceTool || 'diagnostic-scorecard';
    const [selectedKit, setSelectedKit] = useState<'29' | '79'>('29');

    const kit29Url = PRODUCTS.premium_guide_29?.paymentLink || 'https://buy.stripe.com/fZudR2aj44ng8xLeko2B21c';
    const kit79Url = PRODUCTS.premium_guide_79?.paymentLink || 'https://buy.stripe.com/6oUdR2ezk2f8aFT9042B21d';
    const gutCheckUrl = PRODUCTS.gut_check?.paymentLink || 'https://buy.stripe.com/eVqbIU1My8Dw01f7W02B204';
    const sprint2500Url = PRODUCTS.insolvency_diagnostic?.paymentLink || 'https://buy.stripe.com/8x25kw62O9HA6pDb8c2B203';
    const sprint7500Url = PRODUCTS.full_audit?.paymentLink || 'https://buy.stripe.com/7sY14g76ScTM7tH2BG2B202';

    if (compact) {
        return (
            <div className="mt-6 pt-5 border-t border-white/15 space-y-3" data-html2canvas-ignore>
                <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8c7a8] font-bold">
                        Zero-Call Instant Execution
                    </span>
                    {metricValue && (
                        <span className="text-[11px] font-mono font-bold text-emerald-300">
                            Target: {metricValue}
                        </span>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-2">
                    <a
                        href={kit29Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[var(--gold)] text-zinc-950 font-sans font-bold text-xs hover:opacity-95 transition"
                    >
                        <span>1. DIY Survival Kit + Workspace</span>
                        <span className="font-mono">$29 ↗</span>
                    </a>
                    <a
                        href={gutCheckUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-bold text-xs transition"
                    >
                        <span>2. Live 60-Min Unstick Session</span>
                        <span className="font-mono text-[#d8c7a8]">$450 ↗</span>
                    </a>
                    <a
                        href={sprint2500Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/15 text-zinc-200 font-sans font-semibold text-xs transition"
                    >
                        <span>3. 14-Day Automation / P&amp;L Sprint</span>
                        <span className="font-mono text-zinc-300">$2,500 ↗</span>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <section
            className="w-full bg-[#FAF8F2] border-2 border-[#1f3b2c]/25 rounded-2xl p-6 sm:p-8 my-8 shadow-md"
            data-html2canvas-ignore
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-300">
                <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1f3b2c] text-white font-mono text-[10px] font-bold uppercase tracking-widest mb-2">
                        <span>Instant Execution Drawer · Zero Discovery Calls Required</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-950 leading-tight">
                        {headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 mt-1">
                        {subheadline}
                    </p>
                </div>
                {metricValue && (
                    <div className="shrink-0 bg-white border border-zinc-300 rounded-xl px-4 py-3 text-left md:text-right">
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-600">
                            {metricLabel}
                        </span>
                        <span className="font-serif text-xl sm:text-2xl font-bold text-[#1f3b2c]">
                            {metricValue}
                        </span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* CARD 1: $29 / $79 DIY KIT */}
                <div className="bg-white border border-zinc-300 rounded-xl p-6 flex flex-col justify-between shadow-xs">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded">
                                Option 1 · Do It Yourself Tonight
                            </span>
                            <span className="font-mono text-xs font-bold text-zinc-600">Instant Access</span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-zinc-950">
                            The Builder, PM &amp; Operator Survival Kit
                        </h4>
                        <p className="text-xs text-zinc-700 leading-relaxed">
                            All 5 editable P&amp;L and AI pricing stress-tester spreadsheets, the <code className="font-mono text-[11px] bg-zinc-100 px-1 rounded">SPEC.md</code> and <code className="font-mono text-[11px] bg-zinc-100 px-1 rounded">AGENTS.md</code> production templates, the Zombie Feature Kill-List Matrix, the 12-Slide CFO Board Deck, the $250K+ Career/Interview Guide, plus live <Link href="/workspace" className="underline font-semibold text-zinc-900">/workspace</Link> access.
                        </p>

                        <div className="pt-2 flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setSelectedKit('29')}
                                className={`flex-1 py-1.5 px-2 rounded border text-xs font-mono font-bold transition ${
                                    selectedKit === '29'
                                        ? 'bg-zinc-900 text-white border-zinc-900'
                                        : 'bg-zinc-50 text-zinc-700 border-zinc-300 hover:bg-zinc-100'
                                }`}
                            >
                                $29 Standard Kit
                            </button>
                            <button
                                type="button"
                                onClick={() => setSelectedKit('79')}
                                className={`flex-1 py-1.5 px-2 rounded border text-xs font-mono font-bold transition ${
                                    selectedKit === '79'
                                        ? 'bg-[#1f3b2c] text-white border-[#1f3b2c]'
                                        : 'bg-zinc-50 text-zinc-700 border-zinc-300 hover:bg-zinc-100'
                                }`}
                            >
                                $79 (+13 Playbooks)
                            </button>
                        </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-zinc-200 space-y-2">
                        <a
                            href={selectedKit === '29' ? kit29Url : kit79Url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
                        >
                            {selectedKit === '29'
                                ? 'Download Survival Kit + Workspace ($29) ↗'
                                : 'Get Complete Kit + 13 Playbooks ($79) ↗'}
                        </a>
                        <Link
                            href="/toolkit"
                            className="block text-center text-[11px] font-mono text-zinc-600 hover:text-zinc-950 underline"
                        >
                            Inspect all 5 spreadsheets &amp; templates →
                        </Link>
                    </div>
                </div>

                {/* CARD 2: $450 LIVE 60-MIN WORKING SESSION */}
                <div className="bg-[#1f3b2c] text-white border-2 border-[#b89249] rounded-xl p-6 flex flex-col justify-between shadow-md relative">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-950 bg-[#d8c7a8] px-2.5 py-0.5 rounded">
                                Option 2 · Fix It Live in 60 Mins
                            </span>
                            <span className="font-mono text-xs font-bold text-[#d8c7a8]">48-Hr Turnaround</span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-white">
                            Live 60-Minute &quot;Unstick My Product, Agent, or Pricing&quot; Session ($450)
                        </h4>
                        <p className="text-xs text-zinc-200 leading-relaxed">
                            Whether your vibe-coded app is stuck at 80% (Supabase RLS, Stripe webhooks, auth), your AI API bill spiked 5x, your pricing model is leaking margin, or your board/interview deck is due Monday: we share screens for 60 minutes and fix it live.
                        </p>
                        <div className="p-2.5 rounded-lg bg-white/10 border border-white/15 text-[11px] text-[#d8c7a8] font-mono">
                            ✓ Includes the full $79 Complete 13-Playbook System &amp; Workspace free.
                        </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-white/15 space-y-2">
                        <a
                            href={gutCheckUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#b89249] hover:bg-[#c9a35a] text-zinc-950 font-bold text-xs uppercase tracking-wider transition shadow-sm"
                        >
                            Book 60-Min 1-on-1 Session ($450) ↗
                        </a>
                        <Link
                            href="/services#gut_check"
                            className="block text-center text-[11px] font-mono text-zinc-300 hover:text-white underline"
                        >
                            See 48-hour session deliverable scope →
                        </Link>
                    </div>
                </div>

                {/* CARD 3: $2,500 SPRINT / $7,500 BUILD */}
                <div className="bg-white border border-zinc-300 rounded-xl p-6 flex flex-col justify-between shadow-xs">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded">
                                Option 3 · Done-For-You Sprints
                            </span>
                            <span className="font-mono text-xs font-bold text-zinc-600">Fixed Scope</span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-zinc-950">
                            14-Day Automation ($2,500) or 21-Day 0-to-1 Build Sprint ($7,500)
                        </h4>
                        <p className="text-xs text-zinc-700 leading-relaxed">
                            <strong>$2,500 (14 Days):</strong> Replace $5,000/mo of bloated SaaS and manual department busywork with governed MCP + n8n workflows and a board-ready P&amp;L turnaround deck.
                            <br />
                            <strong>$7,500 (21 Days):</strong> We build and deploy your live production AI app or interactive AEO calculator funnel on Cloudflare Edge with Supabase, Stripe, and <code className="font-mono text-[11px] bg-zinc-100 px-1 rounded">/llms.txt</code>.
                        </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-zinc-200 space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <a
                                href={sprint2500Url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-[11px] uppercase tracking-wider transition text-center"
                            >
                                14-Day Sprint ($2.5K) ↗
                            </a>
                            <a
                                href={sprint7500Url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl bg-[#1f3b2c] hover:opacity-95 text-white font-bold text-[11px] uppercase tracking-wider transition text-center"
                            >
                                21-Day Build ($7.5K) ↗
                            </a>
                        </div>
                        <Link
                            href={`/schedule?source=${encodeURIComponent(resolvedSource)}${metricValue ? `&leak=${encodeURIComponent(metricValue)}` : ''}`}
                            className="block text-center text-[11px] font-mono text-zinc-700 hover:text-zinc-950 underline pt-1"
                        >
                            Or book a 15-min sprint scope check on Cal.com ↗
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
