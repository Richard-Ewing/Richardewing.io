"use client";

import React, { useState } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { Target, ArrowRight, ShieldAlert, Cpu, Layers, DollarSign, CheckCircle2, TrendingUp } from 'lucide-react';

const strategyStages = [
  { step: '01', id: 'stack', title: 'Current AI Stack', desc: 'Active model providers, host infrastructure, API gateways, and token routing.' },
  { step: '02', id: 'inventory', title: 'Model Inventory', desc: 'Catalog of 12 proprietary fine-tunes and vendor frontier models in production.' },
  { step: '03', id: 'costs', title: 'Token & License Costs', desc: '$412,000 annual expenditure across model endpoints and dev seat licenses.' },
  { step: '04', id: 'capabilities', title: 'Capabilities Mapping', desc: 'Assessment of benchmark performance vs context window latency targets.' },
  { step: '05', id: 'risk', title: 'Risk & Egress Audit', desc: 'Zero data exfiltration audit across third-party model inference streams.' },
  { step: '06', id: 'architecture', title: 'Target Architecture', desc: 'Deterministic sidecar architecture for automated prompt caching.' },
  { step: '07', id: 'recommendations', title: 'Capital Recommendations', desc: 'Shift 40% of non-reasoning workloads to lightweight open weights.' },
  { step: '08', id: 'roadmap', title: 'Execution Roadmap', desc: 'Three-stage deployment calendar covering Q3-Q4 capital targets.' },
  { step: '09', id: 'execution', title: 'Active Missions', desc: 'Live execution tracking for model optimization and vendor renegotiations.' },
  { step: '10', id: 'verification', title: 'Verified Outcomes', desc: '$319,500 annual verified savings confirmed via Exogram telemetry.' }
];

export default function AIStrategyWorkspacePage() {
  const [activeStage, setActiveStage] = useState(0);

  const current = strategyStages[activeStage];

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="AI Strategy Workspace"
        subtitle="Persistent strategy execution, model portfolio optimization, and verified capital tracking."
        badge="Product 1 • Strategy OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Pipeline Stage Tracker */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm mb-8">
          <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider block mb-4">
            Executable AI Strategy Lifecycle
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {strategyStages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeStage === idx
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold block ${activeStage === idx ? 'text-cyan-400' : 'text-zinc-500'}`}>
                  {stage.step}
                </span>
                <span className="text-xs font-grotesk font-bold block mt-1 line-clamp-1">
                  {stage.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-zinc-900 text-white rounded-2xl p-8 border border-zinc-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                  Stage {current.step} of 10
                </span>
                <h2 className="text-2xl font-grotesk font-bold text-white mt-1">{current.title}</h2>
              </div>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono">
                Active Strategy Node
              </span>
            </div>

            <p className="text-sm text-zinc-300 font-mono leading-relaxed">
              {current.desc}
            </p>

            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 space-y-4">
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                Operational Telemetry & Inputs
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500 block">Primary Model Gateway</span>
                  <span className="text-white font-bold block mt-1">Exogram Local Proxy v2.4</span>
                </div>
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500 block">Monthly Token Volume</span>
                  <span className="text-emerald-400 font-bold block mt-1">1.42B Tokens / mo</span>
                </div>
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500 block">Average Latency</span>
                  <span className="text-white font-bold block mt-1">180ms TTFT</span>
                </div>
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500 block">Annual OpEx Target</span>
                  <span className="text-cyan-400 font-bold block mt-1">$275,000 / yr</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-white rounded-lg text-xs font-mono cursor-pointer"
              >
                &larr; Previous Stage
              </button>
              <button
                disabled={activeStage === strategyStages.length - 1}
                onClick={() => setActiveStage(prev => Math.min(strategyStages.length - 1, prev + 1))}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-40 text-white font-bold rounded-lg text-xs font-mono cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                Next Stage <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Strategy Summary & Living Deliverables */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-grotesk font-bold text-zinc-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-600" /> Strategy KPI Targets
              </h3>
              
              <div className="space-y-4 font-mono text-xs">
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-zinc-500 block">Verified Annual Savings</span>
                  <span className="text-xl font-bold text-emerald-700 mt-1 block">$319,500</span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">34% reduction vs baseline</span>
                </div>

                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-zinc-500 block">Model Diversification</span>
                  <span className="text-xl font-bold text-cyan-700 mt-1 block">60% Frontier / 40% Open</span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Prevents single vendor lock-in</span>
                </div>

                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-zinc-500 block">Strategy Artifact</span>
                  <span className="text-xs font-bold text-zinc-900 mt-1 block">FY26 Executive AI Strategy Roadmap</span>
                  <a href="/workspace/board" className="text-cyan-700 font-bold hover:underline block mt-1">
                    View Board Deck Artifact &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-emerald-800 font-grotesk font-bold text-sm mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verification Status
              </div>
              <p className="text-xs font-mono text-emerald-900 leading-relaxed">
                Strategy node targets are synchronized with the Exogram telemetry ledger. All budget shifts are tracked in real time.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
