'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { saveDiagnosticSession } from '@/lib/storage/session';
import SlackScorecardExport from '@/components/SlackScorecardExport';
import { MetricPanel, ChartPanel, AccordionItem } from '@/components/editorial';

interface EngineComparison {
  id: string;
  name: string;
  billingUnit: string;
  monthlyPlatformUsd: number;
  monthlyOpsOverheadUsd: number;
  monthlyFailureReworkUsd: number;
  monthlyTotalUsd: number;
  annualTotalUsd: number;
  notes: string;
}

export default function AutomationCostCalculatorContent() {
  const [monthlyRuns, setMonthlyRuns] = useState<number>(25000);
  const [stepsPerRun, setStepsPerRun] = useState<number>(8);
  const [llmCallsPerRun, setLlmCallsPerRun] = useState<number>(2);
  const [retiredSaasSeats, setRetiredSaasSeats] = useState<number>(12);
  const [avgSeatCostUsd, setAvgSeatCostUsd] = useState<number>(65);
  const [opsHourlyCostUsd, setOpsHourlyCostUsd] = useState<number>(75);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const runsParam = params.get('runs') ?? params.get('monthlyRuns');
    const stepsParam = params.get('steps') ?? params.get('stepsPerRun');
    const llmParam = params.get('llm') ?? params.get('llmCalls');
    const seatsParam = params.get('seats') ?? params.get('retiredSaasSeats');
    if (runsParam && Number.isFinite(Number(runsParam)) && Number(runsParam) >= 1000) {
      setMonthlyRuns(Math.min(250000, Number(runsParam)));
    }
    if (stepsParam && Number.isFinite(Number(stepsParam)) && Number(stepsParam) >= 2) {
      setStepsPerRun(Math.min(25, Number(stepsParam)));
    }
    if (llmParam && Number.isFinite(Number(llmParam)) && Number(llmParam) >= 0) {
      setLlmCallsPerRun(Math.min(10, Number(llmParam)));
    }
    if (seatsParam && Number.isFinite(Number(seatsParam)) && Number(seatsParam) >= 0) {
      setRetiredSaasSeats(Math.min(100, Number(seatsParam)));
    }
  }, []);

  const model = useMemo(() => {
    const totalBillableSteps = monthlyRuns * stepsPerRun;
    // Blended cached Flash/Sonnet workflow token cost (~$0.0028 per LLM step)
    const monthlyLlmTokenUsd = Math.round(monthlyRuns * llmCallsPerRun * 0.0028);

    // 1. Zapier Team: tiered per-task pricing (~$0.0075 to $0.013 per step-task at scale)
    const zapierBase =
      totalBillableSteps <= 2000
        ? 69
        : totalBillableSteps <= 50000
        ? 103 + ((totalBillableSteps - 2000) / 1000) * 11.5
        : 655 + ((totalBillableSteps - 50000) / 1000) * 7.8;
    const zapierPlatformUsd = Math.round(zapierBase) + monthlyLlmTokenUsd;
    // Un-typed webhook silent drop / schema drift ~1.8% of runs requiring 4 min manual clerk fix
    const zapierReworkUsd = Math.round(monthlyRuns * 0.018 * (4 / 60) * opsHourlyCostUsd);

    // 2. Make Teams: ~10,000 ops = $29, ~100k = $188, ~$1.55 per 1k ops above
    const makePlatformRaw =
      totalBillableSteps <= 10000
        ? 29
        : 29 + ((totalBillableSteps - 10000) / 1000) * 1.65;
    const makePlatformUsd = Math.round(makePlatformRaw) + monthlyLlmTokenUsd;
    const makeOpsOverheadUsd = Math.round(1.5 * opsHourlyCostUsd);
    const makeReworkUsd = Math.round(monthlyRuns * 0.015 * (4 / 60) * opsHourlyCostUsd);

    // 3. Self-Hosted n8n (VPS + Postgres + Queue Worker): flat infra, billed per workflow not per step, + 3 hrs/mo maintenance
    const n8nInfraUsd = monthlyRuns <= 100000 ? 48 : 110;
    const n8nPlatformUsd = n8nInfraUsd + monthlyLlmTokenUsd;
    const n8nOpsOverheadUsd = Math.round(3 * opsHourlyCostUsd);
    const n8nReworkUsd = Math.round(monthlyRuns * 0.008 * (4 / 60) * opsHourlyCostUsd);

    // 4. Deterministic Cloudflare Workers + Queues + Schema Gate
    const workersInfraUsd = monthlyRuns <= 250000 ? 15 : 35;
    const workersPlatformUsd = workersInfraUsd + monthlyLlmTokenUsd;
    const workersOpsOverheadUsd = Math.round(1 * opsHourlyCostUsd);
    const workersReworkUsd = Math.round(monthlyRuns * 0.002 * (4 / 60) * opsHourlyCostUsd);

    const engines: EngineComparison[] = [
      {
        id: 'zapier',
        name: 'Zapier (Per-Task Step Metering)',
        billingUnit: `${totalBillableSteps.toLocaleString()} billable tasks/mo`,
        monthlyPlatformUsd: zapierPlatformUsd,
        monthlyOpsOverheadUsd: Math.round(1 * opsHourlyCostUsd),
        monthlyFailureReworkUsd: zapierReworkUsd,
        monthlyTotalUsd: zapierPlatformUsd + Math.round(1 * opsHourlyCostUsd) + zapierReworkUsd,
        annualTotalUsd:
          (zapierPlatformUsd + Math.round(1 * opsHourlyCostUsd) + zapierReworkUsd) * 12,
        notes: 'Every filter, formatter, and loop iteration counts as a paid task.',
      },
      {
        id: 'make',
        name: 'Make Teams (Per-Operation Metering)',
        billingUnit: `${totalBillableSteps.toLocaleString()} operations/mo`,
        monthlyPlatformUsd: makePlatformUsd,
        monthlyOpsOverheadUsd: makeOpsOverheadUsd,
        monthlyFailureReworkUsd: makeReworkUsd,
        monthlyTotalUsd: makePlatformUsd + makeOpsOverheadUsd + makeReworkUsd,
        annualTotalUsd: (makePlatformUsd + makeOpsOverheadUsd + makeReworkUsd) * 12,
        notes: 'Lower per-step rate, yet JSON schema drift still triggers manual retry triage.',
      },
      {
        id: 'n8n-self-hosted',
        name: 'Self-Hosted n8n (Docker + Postgres Queue)',
        billingUnit: `${monthlyRuns.toLocaleString()} full executions/mo`,
        monthlyPlatformUsd: n8nPlatformUsd,
        monthlyOpsOverheadUsd: n8nOpsOverheadUsd,
        monthlyFailureReworkUsd: n8nReworkUsd,
        monthlyTotalUsd: n8nPlatformUsd + n8nOpsOverheadUsd + n8nReworkUsd,
        annualTotalUsd: (n8nPlatformUsd + n8nOpsOverheadUsd + n8nReworkUsd) * 12,
        notes: 'Zero per-step tax; requires server patching, backups, and webhook retry alerts.',
      },
      {
        id: 'cloudflare-workers',
        name: 'Governed Cloudflare Workers + Queues',
        billingUnit: `${monthlyRuns.toLocaleString()} typed edge runs/mo`,
        monthlyPlatformUsd: workersPlatformUsd,
        monthlyOpsOverheadUsd: workersOpsOverheadUsd,
        monthlyFailureReworkUsd: workersReworkUsd,
        monthlyTotalUsd: workersPlatformUsd + workersOpsOverheadUsd + workersReworkUsd,
        annualTotalUsd:
          (workersPlatformUsd + workersOpsOverheadUsd + workersReworkUsd) * 12,
        notes: 'Strict TypeScript schema validation, dead-letter queues, and near-zero step cost.',
      },
    ];

    const monthlySaasRetiredSavings = retiredSaasSeats * avgSeatCostUsd;
    const annualSaasRetiredSavings = monthlySaasRetiredSavings * 12;

    const annualAutomationDelta = engines[0].annualTotalUsd - engines[3].annualTotalUsd;
    const totalAnnualNetBenefit = annualAutomationDelta + annualSaasRetiredSavings;
    const equivalentFteReclaimed = Math.max(
      1,
      Math.round(((monthlyRuns * 3) / 60 / 160) * 10) / 10
    );

    return {
      totalBillableSteps,
      monthlyLlmTokenUsd,
      engines,
      monthlySaasRetiredSavings,
      annualSaasRetiredSavings,
      annualAutomationDelta,
      totalAnnualNetBenefit,
      equivalentFteReclaimed,
    };
  }, [
    monthlyRuns,
    stepsPerRun,
    llmCallsPerRun,
    retiredSaasSeats,
    avgSeatCostUsd,
    opsHourlyCostUsd,
  ]);

  useEffect(() => {
    saveDiagnosticSession('automation-cost-calculator', {
      runs: monthlyRuns,
      steps: stepsPerRun,
      seats: retiredSaasSeats,
      fte: Math.ceil(model.equivalentFteReclaimed),
      annualSavingsUsd: model.totalAnnualNetBenefit,
      primaryMetricValue: `$${model.totalAnnualNetBenefit.toLocaleString()}/yr Saved`,
      statusLabel: 'CONSOLIDATION READY',
    });
  }, [monthlyRuns, stepsPerRun, retiredSaasSeats, model]);

  return (
    <div className="max-w-5xl mx-auto px-6 space-y-8">
      {/* Input Sliders & Controls */}
      <div className="rounded-3xl border border-[#24332b]/15 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#24332b]/10 pb-5">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              Interactive Operations FinOps Model
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#162e26] mt-1">
              Configure Your Department Workflow &amp; Seat Inputs
            </h2>
          </div>

          <SlackScorecardExport
            toolName="Workflow Automation & SaaS Cost Model"
            toolSlug="automation-cost-calculator"
            primaryMetricLabel="Annual Net OpEx Saved"
            primaryMetricValue={`$${model.totalAnnualNetBenefit.toLocaleString()}/yr`}
            statusLabel="CONSOLIDATION READY"
            metrics={[
              {
                label: 'Billable Step Tasks/Mo',
                value: model.totalBillableSteps.toLocaleString(),
              },
              {
                label: 'Zapier Annual TCO',
                value: `$${model.engines[0].annualTotalUsd.toLocaleString()}/yr`,
              },
              {
                label: 'Governed Workers Annual TCO',
                value: `$${model.engines[3].annualTotalUsd.toLocaleString()}/yr`,
              },
              {
                label: 'Retired SaaS License Savings',
                value: `$${model.annualSaasRetiredSavings.toLocaleString()}/yr`,
              },
            ]}
            queryParams={{
              runs: monthlyRuns,
              steps: stepsPerRun,
              llm: llmCallsPerRun,
              seats: retiredSaasSeats,
            }}
            canonicalUrl="https://www.richardewing.io/tools/automation-cost-calculator"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-[#162e26]">
              <label htmlFor="monthly-runs">Workflow Runs / Month</label>
              <span>{monthlyRuns.toLocaleString()}</span>
            </div>
            <input
              id="monthly-runs"
              type="range"
              min={1000}
              max={250000}
              step={1000}
              value={monthlyRuns}
              onChange={(e) => setMonthlyRuns(Number(e.target.value))}
              className="w-full accent-[#162e26]"
            />
            <p className="text-xs text-[#66716a]">
              Inbound tickets, CRM leads, invoices, or onboarding triggers.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-[#162e26]">
              <label htmlFor="steps-per-run">Steps / Filters per Workflow</label>
              <span>{stepsPerRun} steps</span>
            </div>
            <input
              id="steps-per-run"
              type="range"
              min={2}
              max={25}
              step={1}
              value={stepsPerRun}
              onChange={(e) => setStepsPerRun(Number(e.target.value))}
              className="w-full accent-[#162e26]"
            />
            <p className="text-xs text-[#66716a]">
              Equals {model.totalBillableSteps.toLocaleString()} metered tasks/mo on Zapier/Make.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-[#162e26]">
              <label htmlFor="llm-calls">LLM Extraction Calls / Run</label>
              <span>{llmCallsPerRun} calls</span>
            </div>
            <input
              id="llm-calls"
              type="range"
              min={0}
              max={10}
              step={1}
              value={llmCallsPerRun}
              onChange={(e) => setLlmCallsPerRun(Number(e.target.value))}
              className="w-full accent-[#162e26]"
            />
            <p className="text-xs text-[#66716a]">
              Est. cached token spend: ${model.monthlyLlmTokenUsd.toLocaleString()}/mo across all engines.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-[#162e26]">
              <label htmlFor="retired-seats">Redundant SaaS Seats Retired</label>
              <span>{retiredSaasSeats} seats</span>
            </div>
            <input
              id="retired-seats"
              type="range"
              min={0}
              max={100}
              step={1}
              value={retiredSaasSeats}
              onChange={(e) => setRetiredSaasSeats(Number(e.target.value))}
              className="w-full accent-[#162e26]"
            />
            <p className="text-xs text-[#66716a]">
              Point-tool licenses replaced by direct CRM/Slack/DB automation.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-[#162e26]">
              <label htmlFor="seat-cost">Avg Monthly SaaS License ($)</label>
              <span>${avgSeatCostUsd}/seat</span>
            </div>
            <input
              id="seat-cost"
              type="range"
              min={15}
              max={250}
              step={5}
              value={avgSeatCostUsd}
              onChange={(e) => setAvgSeatCostUsd(Number(e.target.value))}
              className="w-full accent-[#162e26]"
            />
            <p className="text-xs text-[#66716a]">
              Saves ${model.monthlySaasRetiredSavings.toLocaleString()}/mo in recurring software fees.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold text-[#162e26]">
              <label htmlFor="ops-rate">Loaded Ops / Support Hourly ($)</label>
              <span>${opsHourlyCostUsd}/hr</span>
            </div>
            <input
              id="ops-rate"
              type="range"
              min={30}
              max={150}
              step={5}
              value={opsHourlyCostUsd}
              onChange={(e) => setOpsHourlyCostUsd(Number(e.target.value))}
              className="w-full accent-[#162e26]"
            />
            <p className="text-xs text-[#66716a]">
              Used to price broken-webhook triage and server upkeep.
            </p>
          </div>
        </div>
      </div>

      {/* Centralized Executive Summary MetricPanels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <MetricPanel
          variant="forest"
          label="Total Annual Net Savings"
          value={`$${model.totalAnnualNetBenefit.toLocaleString()}`}
          trend="Per Year"
          trendDirection="up"
          subtext={`Switching off per-step task tax + retiring ${retiredSaasSeats} overlapping SaaS seats.`}
        />
        <MetricPanel
          variant="white"
          label="Automation Platform Savings"
          value={`$${model.annualAutomationDelta.toLocaleString()}/yr`}
          trend="Step-Tax Delta"
          trendDirection="up"
          subtext={`Zapier TCO ($${model.engines[0].annualTotalUsd.toLocaleString()}) vs Governed Workers ($${model.engines[3].annualTotalUsd.toLocaleString()}).`}
        />
        <MetricPanel
          variant="paper"
          label="Reclaimed Team Capacity"
          value={`${model.equivalentFteReclaimed} FTE`}
          trend="Ops & Support"
          trendDirection="neutral"
          subtext="Equivalent manual copy-paste bandwidth freed across Support & Ops."
        />
      </div>

      {/* 4-Way Comparison Table inside Centralized ChartPanel */}
      <ChartPanel
        variant="white"
        title="Side-by-Side Total Cost of Ownership (Including Exception Rework)"
        subtitle="Most comparison blogs ignore the payroll cost of a Product Ops Lead fixing silent webhook failures when an API field changes. Both platform bills and human remediation are included below."
        sourceNote="Modeled across 2026 Zapier Team, Make Teams, self-hosted n8n Docker+Queue, and Cloudflare Workers rate cards."
      >
        <div className="space-y-5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[#24332b]/15 font-mono text-[11px] uppercase tracking-wider text-[#66716a]">
                  <th className="py-3 pr-4">Architecture</th>
                  <th className="py-3 px-3 text-right">Infra + LLM / Mo</th>
                  <th className="py-3 px-3 text-right">Ops Upkeep / Mo</th>
                  <th className="py-3 px-3 text-right">Error Triage / Mo</th>
                  <th className="py-3 px-3 text-right">Total / Mo</th>
                  <th className="py-3 pl-3 text-right">Annual TCO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#24332b]/10">
                {model.engines.map((eng, idx) => (
                  <tr
                    key={eng.id}
                    className={idx === 3 ? 'bg-emerald-50/60' : 'hover:bg-[#FAF9F6]'}
                  >
                    <td className="py-4 pr-4">
                      <div className="font-bold text-[#162e26] flex items-center gap-2">
                        {eng.name}
                        {idx === 3 && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#162e26] text-white">
                            <ShieldCheck className="w-3 h-3" /> Lowest TCO
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-mono text-[#66716a] mt-0.5">
                        {eng.billingUnit}
                      </div>
                      <div className="text-xs text-[#4a5850] mt-1">{eng.notes}</div>
                    </td>
                    <td className="py-4 px-3 text-right font-mono text-[#1e2924]">
                      ${eng.monthlyPlatformUsd.toLocaleString()}
                    </td>
                    <td className="py-4 px-3 text-right font-mono text-[#4a5850]">
                      ${eng.monthlyOpsOverheadUsd.toLocaleString()}
                    </td>
                    <td className="py-4 px-3 text-right font-mono text-[#9f3a24]">
                      ${eng.monthlyFailureReworkUsd.toLocaleString()}
                    </td>
                    <td className="py-4 px-3 text-right font-mono font-semibold text-[#162e26]">
                      ${eng.monthlyTotalUsd.toLocaleString()}
                    </td>
                    <td className="py-4 pl-3 text-right font-mono font-bold text-[#162e26]">
                      ${eng.annualTotalUsd.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl bg-[#FAF9F6] border border-[#24332b]/12 p-4 flex items-start gap-3 text-xs text-[#4a5850]">
            <AlertCircle className="w-4 h-4 text-[#b77a35] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#162e26]">Operator Rule of Thumb:</strong> Keep low-volume prototypes (&lt;2,000 runs/mo) in Zapier or Make so non-technical managers can iterate fast. Once a workflow crosses 15,000 runs/mo or touches customer billing/PII, migrate it into self-hosted n8n or typed Cloudflare Workers with dead-letter queues.
            </p>
          </div>
        </div>
      </ChartPanel>

      {/* Centralized Operator FAQ */}
      <div className="space-y-3 pt-2">
        <AccordionItem
          tag="FINOPS"
          question="Why do Zapier and Make bills jump 10x when AI classification steps are added?"
          answer="Step-metered platforms bill every internal filter, JSON parser, router branch, and loop item as a separate task. An 8-step CRM enrichment workflow running 25,000 times per month consumes 200,000 metered tasks before paying a cent for OpenAI or Anthropic tokens."
        />
        <AccordionItem
          tag="OPS"
          question="When does self-hosted n8n beat Cloudflare Workers, and vice versa?"
          answer="Self-hosted n8n is ideal when Operations Leads and Revenue Ops Managers need visual node editing across 50+ SaaS connectors without per-step overages. Governed Cloudflare Workers with Queues win on mission-critical billing, webhook, and customer-onboarding pipelines where strict TypeScript schemas and zero server maintenance matter most."
        />
      </div>
    </div>
  );
}
