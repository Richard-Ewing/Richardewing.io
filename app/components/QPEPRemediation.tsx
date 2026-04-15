'use client';

/**
 * Q-PEP™ Remediation Block
 * Qualitative-Profitability Efficiency Protocol
 * 
 * This component renders INSIDE the pdf-export-zone so it is automatically
 * captured into the board-ready PDF export. It dynamically generates
 * prescriptive remediation advice based on the tool's calculated output metrics.
 * 
 * This is the core differentiator between a $395 calculator and a $10,000 advisory asset.
 */

interface RemediationItem {
    phase: string;
    title: string;
    prescription: string;
    urgency: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'MONITOR';
    asc_reference?: string;
}

interface QPEPRemediationProps {
    toolId: 'APER' | 'AUEB' | 'EV-SE';
    metrics: Record<string, any>;
}

function getUrgencyColor(urgency: string) {
    switch (urgency) {
        case 'CRITICAL': return { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-800 font-semibold', dot: 'bg-red-500' };
        case 'HIGH': return { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-800 font-semibold', dot: 'bg-orange-500' };
        case 'MODERATE': return { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-800 font-semibold', dot: 'bg-yellow-500' };
        default: return { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-800 font-semibold', dot: 'bg-emerald-500' };
    }
}

function generateAPERRemediation(metrics: Record<string, any>): RemediationItem[] {
    const items: RemediationItem[] = [];
    const aper = metrics.aper || 0;
    const coordinationTax = metrics.coordinationTax || 0;
    const engineers = metrics.engineers || 0;
    const optimalHeadcount = metrics.optimalHeadcount || 0;
    const headcountDelta = engineers - optimalHeadcount;
    const productivityIndex = metrics.productivityIndex || 0;

    if (aper < 300000) {
        items.push({
            phase: 'PHASE 1',
            title: 'Immediate Workforce Right-Sizing',
            prescription: `Your APER of $${(aper/1000).toFixed(0)}K/engineer is in the critical zone (<$300K). You are carrying approximately ${Math.max(0, headcountDelta)} engineers above optimal capacity. Initiate a targeted RIF or redeployment within 30 days. Each month of delay costs approximately $${((headcountDelta * (metrics.costPerEng || 150000)) / 12 / 1000).toFixed(0)}K in pure overhead burn.`,
            urgency: 'CRITICAL',
            asc_reference: 'ASC 420 — Exit/Disposal Cost Obligations'
        });
    } else if (aper < 500000) {
        items.push({
            phase: 'PHASE 1',
            title: 'Hiring Freeze & Efficiency Audit',
            prescription: `Your APER of $${(aper/1000).toFixed(0)}K/engineer is functional but below elite ($500K+). Freeze all new engineering hires until ARR grows ${((500000 * engineers - aper * engineers) / 1000000).toFixed(1)}M. Redirect hiring budget to tooling and automation investments.`,
            urgency: 'HIGH'
        });
    }

    if (coordinationTax > 25) {
        items.push({
            phase: 'PHASE 2',
            title: 'Coordination Tax Elimination',
            prescription: `Your coordination overhead of ${coordinationTax.toFixed(0)}% exceeds the 25% threshold. Each engineer loses ~${(coordinationTax * 40 / 100).toFixed(1)} hrs/week to meetings and context switching. Mandate: (1) Cancel all recurring meetings with >5 attendees, (2) Implement async-first communication protocol, (3) Restructure into autonomous 2-pizza teams with clear ownership boundaries.`,
            urgency: coordinationTax > 35 ? 'CRITICAL' : 'HIGH'
        });
    }

    if (productivityIndex < 50) {
        items.push({
            phase: 'PHASE 3',
            title: 'Productivity Index Recovery',
            prescription: `Your Productivity Index of ${productivityIndex}/100 indicates systemic execution drag. Prescribe: (1) Increase average tenure by implementing 18-month retention bonuses, (2) Reduce hiring velocity — each new hire creates a 3-month productivity deficit costing $${((metrics.newHireRampCost || 0) / 1000).toFixed(0)}K, (3) Audit sprint completion rate and eliminate scope creep from product management.`,
            urgency: 'HIGH',
            asc_reference: 'ASC 350-40 — Internal-Use Software Capitalization'
        });
    }

    if (headcountDelta <= 0) {
        items.push({
            phase: 'PHASE 3',
            title: 'Scale Readiness Certification',
            prescription: `Your team is ${Math.abs(headcountDelta)} engineers below optimal capacity, indicating room to scale. Before hiring, ensure: (1) Per-engineer APER stays above $400K after new additions, (2) Onboarding runway is <60 days to full productivity, (3) New hires are allocated to the team composition gap in your current breakdown.`,
            urgency: 'MONITOR'
        });
    }

    if (items.length === 0) {
        items.push({
            phase: 'ASSESSMENT',
            title: 'Elite Efficiency Confirmed',
            prescription: `Your organization is operating at elite efficiency with an APER of $${(aper/1000).toFixed(0)}K/engineer and a coordination tax of ${coordinationTax.toFixed(0)}%. Maintain current discipline, monitor quarterly, and scale cautiously.`,
            urgency: 'MONITOR'
        });
    }

    return items;
}

function generateAUEBRemediation(metrics: Record<string, any>): RemediationItem[] {
    const items: RemediationItem[] = [];
    const grossMargin = metrics.grossMargin || 0;
    const monthsToCollapse = metrics.monthsToCollapse || 36;
    const costPerUser = metrics.costPerUser || 0;
    const profitPerUser = metrics.profitPerUser || 0;
    const llmCost = metrics.llmCost || 0;
    const totalInfraCost = metrics.totalInfraCost || 0;

    if (grossMargin < 40) {
        items.push({
            phase: 'PHASE 1',
            title: 'Margin Collapse Emergency Protocol',
            prescription: `Gross margin of ${grossMargin.toFixed(1)}% is below SaaS viability threshold (40%). At current trajectory, you will reach insolvency in ${monthsToCollapse} months. Immediate actions: (1) Implement aggressive semantic caching to reduce LLM query volume by 30-50%, (2) Evaluate model tier-gating — reserve GPT-4 class models for premium users only, (3) Shift 60%+ of queries to fine-tuned smaller models (Llama 3, Mistral).`,
            urgency: 'CRITICAL',
            asc_reference: 'ASC 330 — Inventory (Cost Allocation)'
        });
    } else if (grossMargin < 60) {
        items.push({
            phase: 'PHASE 1',
            title: 'Margin Optimization Required',
            prescription: `Gross margin of ${grossMargin.toFixed(1)}% is below the 60% target for healthy AI SaaS. Prescribe: (1) Audit feature-level cost allocation — identify the 20% of features consuming 80% of LLM cost, (2) Implement usage-based pricing tiers above free-plan thresholds, (3) Negotiate volume discounts with your LLM provider.`,
            urgency: 'HIGH'
        });
    }

    if (llmCost / totalInfraCost > 0.7) {
        items.push({
            phase: 'PHASE 2',
            title: 'LLM Cost Concentration Risk',
            prescription: `LLM costs represent ${((llmCost / totalInfraCost) * 100).toFixed(0)}% of total infrastructure — critical vendor concentration. Remediation: (1) Deploy a model router that dynamically selects the cheapest model capable of handling each query complexity tier, (2) Build an embedding-based cache layer to serve repeated semantic queries without LLM invocation, (3) Pre-compute high-frequency query responses during off-peak hours.`,
            urgency: llmCost / totalInfraCost > 0.85 ? 'CRITICAL' : 'HIGH'
        });
    }

    if (profitPerUser < 0) {
        items.push({
            phase: 'PHASE 3',
            title: 'Negative Unit Economics Reversal',
            prescription: `You are losing $${Math.abs(profitPerUser).toFixed(2)} per user per month. Each new customer accelerates your burn. Immediate mandate: (1) Raise price by minimum ${Math.ceil(Math.abs(profitPerUser) / (metrics.price || 1) * 100)}% or reduce per-user cost, (2) Gate high-cost features behind premium tiers, (3) Implement hard query caps per pricing tier.`,
            urgency: 'CRITICAL'
        });
    }

    if (items.length === 0) {
        items.push({
            phase: 'ASSESSMENT',
            title: 'Healthy AI Economics Confirmed',
            prescription: `Your AI unit economics are sound with a ${grossMargin.toFixed(0)}% gross margin and $${profitPerUser.toFixed(2)}/user profit. Continue monitoring LLM cost trends quarterly and maintain pricing discipline.`,
            urgency: 'MONITOR'
        });
    }

    return items;
}

function generateEVSERemediation(metrics: Record<string, any>): RemediationItem[] {
    const items: RemediationItem[] = [];
    const wealthGap = metrics.wealthGap || 0;
    const adjustedConfidence = metrics.adjustedConfidence || 0;
    const biggestRiskFactor = metrics.biggestRiskFactor || 'Unknown';
    const biggestRiskCost = metrics.biggestRiskCost || 0;
    const perfectValue = metrics.perfectValue || 0;

    if (wealthGap > perfectValue * 0.3) {
        items.push({
            phase: 'PHASE 1',
            title: 'Valuation Destruction Containment',
            prescription: `You are leaving $${(wealthGap / 1000000).toFixed(1)}M on the table due to execution risk, representing ${((wealthGap / perfectValue) * 100).toFixed(0)}% of your theoretical valuation ceiling. Your largest risk vector is "${biggestRiskFactor}", costing $${(biggestRiskCost / 1000000).toFixed(1)}M. Immediate mandate: (1) Assign a dedicated risk owner to "${biggestRiskFactor}" with 30-day KPIs, (2) Ring-fence 15% of engineering capacity for risk reduction, (3) Report risk metrics to board monthly.`,
            urgency: 'CRITICAL'
        });
    }

    if (adjustedConfidence < 50) {
        items.push({
            phase: 'PHASE 2',
            title: 'Execution Confidence Recovery',
            prescription: `Adjusted execution confidence of ${adjustedConfidence.toFixed(0)}% signals high deal risk to potential acquirers or investors. Sub-50% scores typically result in 20-40% valuation haircuts at term sheet. Prescribe: (1) Demonstrate 3 consecutive quarters of predictable delivery (ship-on-time rate >85%), (2) Eliminate scope creep via strict product council governance, (3) Document and de-risk key-person dependencies immediately.`,
            urgency: 'CRITICAL',
            asc_reference: 'ASC 820 — Fair Value Measurement'
        });
    } else if (adjustedConfidence < 70) {
        items.push({
            phase: 'PHASE 2',
            title: 'Execution Confidence Hardening',
            prescription: `Adjusted execution confidence of ${adjustedConfidence.toFixed(0)}% is in the caution zone. Target >75% before initiating fundraise conversations. Focus areas: (1) Reduce your highest-weighted risk factor ("${biggestRiskFactor}") by 30% within one quarter, (2) Standardize delivery cadence to bi-weekly releases, (3) Build executive dashboards that demonstrate velocity stability to investors.`,
            urgency: 'HIGH'
        });
    }

    items.push({
        phase: 'PHASE 3',
        title: 'Pre-Transaction Positioning',
        prescription: `To close the gap between your risk-adjusted value ($${((metrics.riskedValue || 0) / 1000000).toFixed(1)}M) and theoretical ceiling ($${(perfectValue / 1000000).toFixed(1)}M), execute the Strangler Fig pattern on legacy systems, implement continuous compliance monitoring, and ensure all IP is properly documented under ASC 350-40 capitalization guidelines.`,
        urgency: wealthGap > perfectValue * 0.2 ? 'HIGH' : 'MODERATE',
        asc_reference: 'ASC 350-40 — Internal-Use Software'
    });

    return items;
}

export function QPEPRemediation({ toolId, metrics }: QPEPRemediationProps) {
    let items: RemediationItem[] = [];

    switch (toolId) {
        case 'APER': items = generateAPERRemediation(metrics); break;
        case 'AUEB': items = generateAUEBRemediation(metrics); break;
        case 'EV-SE': items = generateEVSERemediation(metrics); break;
    }

    if (items.length === 0) return null;

    return (
        <section className="mt-8 bg-gradient-to-br from-zinc-50/80 via-zinc-100 to-transparent border border-zinc-400 rounded-3xl p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-cobalt rounded-full animate-pulse shadow-[0_0_10px_rgba(45,112,253,0.6)]" />
                <span className="font-mono text-xs font-medium text-cobalt uppercase tracking-[0.2em]">Q-PEP™ Remediation Protocol</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-1 tracking-tight">Prescriptive Action Plan</h3>
            <p className="text-xs text-zinc-950 mb-6">Qualitative-Profitability Efficiency Protocol — Generated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            {/* Remediation Items */}
            <div className="space-y-4">
                {items.map((item, i) => {
                    const colors = getUrgencyColor(item.urgency);
                    return (
                        <div key={i} className={`${colors.bg} border ${colors.border} rounded-2xl p-5`}>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs font-medium text-zinc-950 tracking-widest">{item.phase}</span>
                                    <span className="text-zinc-900">|</span>
                                    <span className={`font-mono text-xs font-medium ${colors.text} tracking-widest font-bold`}>{item.urgency}</span>
                                </div>
                                {item.asc_reference && (
                                    <span className="font-mono text-[9px] text-zinc-800 bg-zinc-200/60 px-2 py-1 rounded-md">{item.asc_reference}</span>
                                )}
                            </div>
                            <h4 className="text-sm font-bold text-zinc-950 mb-2">{item.title}</h4>
                            <p className="text-xs text-zinc-900 font-bold leading-relaxed">{item.prescription}</p>
                        </div>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-zinc-400 flex items-center justify-between">
                <p className="text-xs font-medium text-zinc-800 font-mono">CONFIDENTIAL — For Internal Executive Distribution Only</p>
                <p className="text-xs font-medium text-zinc-800 font-mono">RichardEwing.io/advisory</p>
            </div>
        </section>
    );
}
