"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../../../lib/workspace/customerWorkspace';
import { Download, ArrowRight } from 'lucide-react';

export default function BudgetFinanceWorkspacePage() {
  const [workspace, setWorkspace] = useState<CustomerOrganizationWorkspace | null>(null);
  const [tokenDiscountSlider, setTokenDiscountSlider] = useState(38);

  useEffect(() => {
    const sync = () => setWorkspace({ ...CustomerWorkspaceStore.getWorkspace() });
    sync();
    window.addEventListener('re-workspace-updated', sync);
    return () => window.removeEventListener('re-workspace-updated', sync);
  }, []);

  if (!workspace) return null;

  const engPayrollUSD = workspace.engineeringHeadcount * 185000;
  const annualAiSpendUSD = workspace.monthlyAiSpendUSD * 12;
  const zombieCarryUSD = Math.round(engPayrollUSD * (workspace.zombieFeaturePct / 100));
  const totalRdBudgetUSD = engPayrollUSD + annualAiSpendUSD;
  const aiTokenSavingsUSD = Math.round(annualAiSpendUSD * (tokenDiscountSlider / 100));
  const zombieRecoveryUSD = Math.round(zombieCarryUSD * 0.5);
  const projectedSavings = aiTokenSavingsUSD + zombieRecoveryUSD;

  const departments = [
    {
      name: 'Core Engineering & Feature Delivery',
      allocated: Math.round(engPayrollUSD * (1 - workspace.zombieFeaturePct / 100)),
      actual: Math.round(engPayrollUSD * (1 - workspace.zombieFeaturePct / 100) * 0.96),
      variance: Math.round(engPayrollUSD * (1 - workspace.zombieFeaturePct / 100) * 0.04),
      status: 'Healthy Velocity'
    },
    {
      name: `Zombie Feature Maintenance (${workspace.zombieFeaturePct}% Load)`,
      allocated: zombieCarryUSD,
      actual: zombieCarryUSD,
      variance: zombieRecoveryUSD,
      status: '50% Sunset Target'
    },
    {
      name: 'AI / LLM Token & Cloud Inference OpEx',
      allocated: annualAiSpendUSD,
      actual: Math.round(annualAiSpendUSD * (1 - tokenDiscountSlider / 100)),
      variance: aiTokenSavingsUSD,
      status: `${tokenDiscountSlider}% Routing Savings`
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Budget & Finance Workspace"
        subtitle="Department capital allocations, real-time variance analysis, tradeoff scenario modeling, and approval execution."
        badge="Module 01 Live • CFO & Margin OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Budget KPI Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Total R&amp;D + AI Budget</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">${totalRdBudgetUSD.toLocaleString()}</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">{workspace.engineeringHeadcount} FTEs + AI OpEx</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Recoverable EBITDA</span>
            <h3 className="text-3xl font-grotesk font-bold text-emerald-700 mt-2">+${projectedSavings.toLocaleString()}</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Annualized P&amp;L recovery</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-violet-700 font-bold uppercase">AI Token OpEx Run-Rate</span>
            <h3 className="text-3xl font-grotesk font-bold text-violet-700 mt-2">${workspace.monthlyAiSpendUSD.toLocaleString()} / mo</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">${annualAiSpendUSD.toLocaleString()} annualized</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-amber-700 font-bold uppercase">R&amp;D % of ARR</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">
              {workspace.annualArrUSD > 0 ? `${Math.round((totalRdBudgetUSD / workspace.annualArrUSD) * 100)}%` : 'N/A'}
            </h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Against ${workspace.annualArrUSD.toLocaleString()} ARR</p>
          </div>
        </div>

        {/* Department Budget Breakdown & Scenario Tradeoff Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Department Breakdown ({workspace.organizationName})</span>
                <h2 className="text-xl font-grotesk font-bold text-zinc-900">R&amp;D &amp; AI Capital Allocations</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="/downloads/Product_and_AI_Economist_Operating_Kit/01_AI_Feature_Pricing_and_Margin_Stress_Tester.xlsx"
                  download
                  className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Margin Stress-Tester (.XLSX)
                </a>
                <Link
                  href="/tools/aueb"
                  className="px-3.5 py-2 rounded-xl bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 text-cyan-900 text-xs font-mono font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  AUEB Calculator <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {departments.map(dept => (
                <div key={dept.name} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="font-bold text-zinc-900 text-sm">{dept.name}</span>
                    <div className="text-zinc-500 mt-0.5">
                      Current Run-Rate: <span className="text-zinc-900 font-bold">${dept.allocated.toLocaleString()}</span> &bull; Post-Optimization: <span className="text-zinc-900 font-bold">${dept.actual.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-emerald-700 block">+${dept.variance.toLocaleString()} Recoverable</span>
                    <span className="text-[10px] text-zinc-500">{dept.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tradeoff Simulator */}
          <div className="bg-zinc-900 text-white rounded-2xl p-6 border border-zinc-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Capital Simulator</span>
              <h3 className="text-xl font-grotesk font-bold text-white mt-1">AI Caching &amp; Zombie Sunset Model</h3>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <label className="flex justify-between text-zinc-300">
                <span>AI Caching &amp; SLM Routing Target:</span>
                <span className="text-cyan-400 font-bold">{tokenDiscountSlider}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="65"
                value={tokenDiscountSlider}
                onChange={e => setTokenDiscountSlider(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2 font-mono text-xs">
              <span className="text-zinc-400 block">Projected Annual Capital Saved:</span>
              <h4 className="text-2xl font-bold text-emerald-400">${projectedSavings.toLocaleString()} / yr</h4>
              <p className="text-[11px] text-zinc-400 mt-1">
                Includes ${aiTokenSavingsUSD.toLocaleString()}/yr AI token reduction + ${zombieRecoveryUSD.toLocaleString()}/yr from sunsetting 50% of Zombie Features.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
