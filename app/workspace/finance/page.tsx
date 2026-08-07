"use client";

import React, { useState } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { DollarSign, TrendingUp, PieChart, ArrowDownRight, CheckCircle2, Sliders, AlertTriangle } from 'lucide-react';

const mockDepartments = [
  { name: 'Engineering & R&D', allocated: 1200000, actual: 1058000, variance: 142000, status: 'Favorable' },
  { name: 'Data Infrastructure', allocated: 450000, actual: 420000, variance: 30000, status: 'Favorable' },
  { name: 'Product Management', allocated: 320000, actual: 315000, variance: 5000, status: 'On Target' },
  { name: 'Executive Advisory', allocated: 150000, actual: 148000, variance: 2000, status: 'On Target' }
];

export default function BudgetFinanceWorkspacePage() {
  const [tokenDiscountSlider, setTokenDiscountSlider] = useState(35);

  const projectedSavings = Math.round(1200000 * (tokenDiscountSlider / 100) * 0.7);

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Budget & Finance Workspace"
        subtitle="Department capital allocations, real-time variance analysis, tradeoff scenario modeling, and approval execution."
        badge="Product 7 • Budget OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Budget KPI Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Total Approved Budget</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">$2,120,000</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">FY26 R&D & AI allocation</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">YTD Budget Variance</span>
            <h3 className="text-3xl font-grotesk font-bold text-emerald-700 mt-2">+$179,000</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Favorable variance vs plan</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-violet-700 font-bold uppercase">AI Token OpEx Run-Rate</span>
            <h3 className="text-3xl font-grotesk font-bold text-violet-700 mt-2">$28,500 / mo</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Controlled via Exogram</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-amber-700 font-bold uppercase">Pending Tradeoff Requests</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">2 Pending</h3>
            <p className="text-xs font-mono text-zinc-500 mt-1">Awaiting CFO sign-off</p>
          </div>
        </div>

        {/* Department Budget Breakdown & Scenario Tradeoff Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Department Breakdown</span>
                <h2 className="text-xl font-grotesk font-bold text-zinc-900">Departmental Capital Allocations</h2>
              </div>
            </div>

            <div className="space-y-4">
              {mockDepartments.map(dept => (
                <div key={dept.name} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="font-bold text-zinc-900 text-sm">{dept.name}</span>
                    <div className="text-zinc-500 mt-0.5">
                      Allocated: <span className="text-zinc-900 font-bold">${dept.allocated.toLocaleString()}</span> • Actual: <span className="text-zinc-900 font-bold">${dept.actual.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-emerald-700 block">${dept.variance.toLocaleString()} Favorable</span>
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
              <h3 className="text-xl font-grotesk font-bold text-white mt-1">Token Saver Impact Model</h3>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <label className="flex justify-between text-zinc-300">
                <span>Model Caching Efficiency Target:</span>
                <span className="text-cyan-400 font-bold">{tokenDiscountSlider}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="60"
                value={tokenDiscountSlider}
                onChange={e => setTokenDiscountSlider(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2 font-mono text-xs">
              <span className="text-zinc-400 block">Projected Annual Capital Saved:</span>
              <h4 className="text-2xl font-bold text-emerald-400">${projectedSavings.toLocaleString()} / yr</h4>
              <p className="text-[11px] text-zinc-400 mt-1">
                Reallocated directly to high-margin engineering headcount.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
