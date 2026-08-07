"use client";

import React from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { BarChart3, TrendingUp, DollarSign, AlertCircle, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

const mockProducts = [
  {
    id: 'prod_01',
    name: 'Exogram Enterprise Governance',
    type: 'B2B Core Product',
    arrUSD: 420000,
    copUSD: 85000,
    marginPct: 79.8,
    pdiScore: 12.4, // Product Debt Index
    roiMultiplier: '4.9x',
    lifecycleStage: 'Growth & Expansion'
  },
  {
    id: 'prod_02',
    name: 'CareerWin AI Intelligence',
    type: 'B2C / Prosumer',
    arrUSD: 180000,
    copUSD: 42000,
    marginPct: 76.6,
    pdiScore: 18.2,
    roiMultiplier: '4.2x',
    lifecycleStage: 'Scaling'
  },
  {
    id: 'prod_03',
    name: 'Legacy Batch Parsing Engine',
    type: 'Internal Service',
    arrUSD: 0,
    copUSD: 38000,
    marginPct: 0,
    pdiScore: 68.5,
    roiMultiplier: '0.2x',
    lifecycleStage: 'Targeted Sunset (Q4 2026)'
  }
];

export default function ProductEconomicsWorkspacePage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Product Economics Workspace"
        subtitle="Portfolio economics, feature-level unit cost analysis, technical debt scoring, and sunset roadmaps."
        badge="Product 5 • Product Economics OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Product Economics KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Portfolio Annual Revenue</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">$600,000 ARR</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Gross portfolio revenue</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Weighted Margin</span>
            <h3 className="text-3xl font-grotesk font-bold text-emerald-700 mt-2">78.8%</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Post model token costs</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-amber-700 font-bold uppercase">Average Debt Score (PDI)</span>
            <h3 className="text-3xl font-grotesk font-bold text-amber-700 mt-2">16.3 / 100</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Low technical insolvency risk</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-violet-700 font-bold uppercase">Sunsetting Target</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">1 Service</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Frees $38,000 annual OpEx</p>
          </div>
        </div>

        {/* Product Portfolio Grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-grotesk font-bold text-zinc-900">Product Line Financial Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockProducts.map(p => (
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
                      <span className="text-zinc-500">Gross Margin:</span>
                      <span className="font-bold text-emerald-700">{p.marginPct}%</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                      <span className="text-zinc-500">Product Debt Index:</span>
                      <span className="font-bold text-amber-700">{p.pdiScore}</span>
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
