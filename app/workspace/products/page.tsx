"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../../../lib/workspace/customerWorkspace';
import { Download, ArrowRight } from 'lucide-react';

export default function ProductEconomicsWorkspacePage() {
  const [workspace, setWorkspace] = useState<CustomerOrganizationWorkspace | null>(null);

  useEffect(() => {
    const sync = () => setWorkspace({ ...CustomerWorkspaceStore.getWorkspace() });
    sync();
    window.addEventListener('re-workspace-updated', sync);
    return () => window.removeEventListener('re-workspace-updated', sync);
  }, []);

  if (!workspace) return null;

  const totalArrUSD = workspace.annualArrUSD;
  const totalEngPayrollUSD = workspace.engineeringHeadcount * 185000;
  const annualAiSpendUSD = workspace.monthlyAiSpendUSD * 12;
  const zombieCarryUSD = Math.round(totalEngPayrollUSD * (workspace.zombieFeaturePct / 100));
  const coreProductArr = Math.round(totalArrUSD * 0.72);
  const coreProductCop = Math.round(totalEngPayrollUSD * 0.45 + annualAiSpendUSD * 0.4);
  const coreMarginPct = coreProductArr > 0 ? Math.max(0, Math.round(((coreProductArr - coreProductCop) / coreProductArr) * 1000) / 10) : 0;

  const aiGrowthArr = Math.round(totalArrUSD * 0.28);
  const aiGrowthCop = Math.round(totalEngPayrollUSD * (Math.max(10, 55 - workspace.zombieFeaturePct) / 100) + annualAiSpendUSD * 0.6);
  const aiMarginPct = aiGrowthArr > 0 ? Math.max(0, Math.round(((aiGrowthArr - aiGrowthCop) / aiGrowthArr) * 1000) / 10) : 0;

  const weightedMarginPct = totalArrUSD > 0
    ? Math.max(0, Math.round(((totalArrUSD - (coreProductCop + aiGrowthCop + zombieCarryUSD)) / totalArrUSD) * 1000) / 10)
    : 0;

  const portfolioProducts = [
    {
      id: 'prod_01',
      name: `${workspace.organizationName} - Core Platform`,
      type: 'B2B Core Product (72% ARR)',
      arrUSD: coreProductArr,
      copUSD: coreProductCop,
      marginPct: coreMarginPct,
      pdiScore: Math.max(8, Math.round(workspace.zombieFeaturePct * 0.5)),
      roiMultiplier: `${coreProductCop > 0 ? (coreProductArr / coreProductCop).toFixed(1) : '0.0'}x`,
      lifecycleStage: 'Core Cash Cow & NDR Defense'
    },
    {
      id: 'prod_02',
      name: `${workspace.organizationName} - AI & Expansion Tier`,
      type: 'AI Growth Line (28% ARR)',
      arrUSD: aiGrowthArr,
      copUSD: aiGrowthCop,
      marginPct: aiMarginPct,
      pdiScore: Math.max(12, Math.round(workspace.zombieFeaturePct * 0.7)),
      roiMultiplier: `${aiGrowthCop > 0 ? (aiGrowthArr / aiGrowthCop).toFixed(1) : '0.0'}x`,
      lifecycleStage: 'Scaling (Guardrail Token COGS)'
    },
    {
      id: 'prod_03',
      name: 'Bottom-Quartile Zombie Features & Legacy Modules',
      type: `Zombie Carry (${workspace.zombieFeaturePct}% Eng Load)`,
      arrUSD: 0,
      copUSD: zombieCarryUSD,
      marginPct: 0,
      pdiScore: Math.min(95, workspace.zombieFeaturePct * 2 + 15),
      roiMultiplier: '0.0x',
      lifecycleStage: 'Targeted 30-Day Sunset & Deprecation'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Product Economics Workspace"
        subtitle="Portfolio economics, feature-level unit cost analysis, technical debt scoring, and sunset roadmaps."
        badge="Module 02 Live • Product Portfolio OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Product Economics KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Portfolio Annual Revenue</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">${totalArrUSD.toLocaleString()}</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Synced with {workspace.organizationName}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Net Portfolio Margin</span>
            <h3 className="text-3xl font-grotesk font-bold text-emerald-700 mt-2">{weightedMarginPct}%</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Post R&amp;D &amp; ${annualAiSpendUSD.toLocaleString()}/yr AI spend</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-amber-700 font-bold uppercase">Zombie Feature Load</span>
            <h3 className="text-3xl font-grotesk font-bold text-amber-700 mt-2">{workspace.zombieFeaturePct}% Capacity</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">${zombieCarryUSD.toLocaleString()}/yr maintenance drag</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-violet-700 font-bold uppercase">Recoverable 50% Sunset</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">${Math.round(zombieCarryUSD * 0.5).toLocaleString()}</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Reallocated to core roadmap</p>
          </div>
        </div>

        {/* Product Portfolio Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl font-grotesk font-bold text-zinc-900">Product Line Financial Breakdown ({workspace.organizationName})</h2>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/downloads/Product_and_AI_Economist_Operating_Kit/02_Zombie_Feature_Kill_List_and_Capacity_Matrix.xlsx"
                download
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono font-bold inline-flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download Zombie Kill-List (.XLSX)
              </a>
              <Link
                href="/tools/pdi"
                className="px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 text-cyan-900 text-xs font-mono font-bold inline-flex items-center gap-1.5 transition-colors"
              >
                Open PDI Calculator <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioProducts.map(p => (
              <div key={p.id} className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                      {p.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-700">{p.roiMultiplier} ROI</span>
                  </div>

                  <h3 className="text-lg font-grotesk font-bold text-zinc-900">{p.name}</h3>

                  <div className="mt-4 space-y-2 text-xs font-mono">
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                      <span className="text-zinc-500">Annual Revenue:</span>
                      <span className="font-bold text-zinc-900">${p.arrUSD.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                      <span className="text-zinc-500">Cost of Product (CoP):</span>
                      <span className="font-bold text-zinc-900">${p.copUSD.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                      <span className="text-zinc-500">Contribution Margin:</span>
                      <span className="font-bold text-emerald-700">{p.marginPct}%</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                      <span className="text-zinc-500">Product Debt Index:</span>
                      <span className="font-bold text-amber-700">{p.pdiScore} / 100</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 text-xs font-mono">
                  <span className="text-zinc-500 block text-[10px]">Lifecycle Disposition</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">{p.lifecycleStage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
