"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import WorkspaceHeader from '../../components/workspace/WorkspaceHeader';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../../lib/workspace/customerWorkspace';
import { workspaceLinks } from '../../components/workspace/WorkspaceNav';
import {
  ArrowRight,
  Download,
  FileText,
  Save,
  RotateCcw,
  Calculator,
  Printer,
  Trash2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function CustomerWorkspacePage() {
  const [workspace, setWorkspace] = useState<CustomerOrganizationWorkspace | null>(null);
  const [scenarioName, setScenarioName] = useState('');
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  useEffect(() => {
    setWorkspace({ ...CustomerWorkspaceStore.getWorkspace() });
  }, []);

  if (!workspace) return null;

  const aperUSD =
    workspace.engineeringHeadcount > 0
      ? Math.round(workspace.annualArrUSD / workspace.engineeringHeadcount)
      : 0;
  const zombieCarryUSD = Math.round(
    workspace.engineeringHeadcount * 185000 * (workspace.zombieFeaturePct / 100)
  );
  const annualAiSpendUSD = workspace.monthlyAiSpendUSD * 12;

  const handleFieldChange = (
    field: 'organizationName' | 'annualArrUSD' | 'monthlyAiSpendUSD' | 'engineeringHeadcount' | 'zombieFeaturePct',
    value: string | number
  ) => {
    const updated = CustomerWorkspaceStore.updateOrganizationProfile({
      [field]: value,
    });
    setWorkspace({ ...updated });
  };

  const handleSaveScenario = () => {
    const label =
      scenarioName.trim() ||
      `${workspace.organizationName} (${new Date().toLocaleDateString()})`;
    const updated = CustomerWorkspaceStore.saveScenario(label);
    setWorkspace({ ...updated });
    setScenarioName('');
    setSaveMessage('Scenario saved to your browser workspace.');
    setTimeout(() => setSaveMessage(null), 3500);
  };

  const handleDeleteScenario = (id: string) => {
    const updated = CustomerWorkspaceStore.deleteScenario(id);
    setWorkspace({ ...updated });
  };

  const handleReset = () => {
    const reset = CustomerWorkspaceStore.resetWorkspace();
    setWorkspace({ ...reset });
    setSaveMessage('Workspace reset to default enterprise baseline.');
    setTimeout(() => setSaveMessage(null), 3500);
  };

  const handleDownloadBoardReport = () => {
    const markdown = CustomerWorkspaceStore.generateBoardReportMarkdown(workspace);
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeOrg = workspace.organizationName.replace(/[^a-z0-9]+/gi, '_');
    a.href = url;
    a.download = `${safeOrg}_Product_Economist_Board_Briefing.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title={`${workspace.organizationName} • Product Economist Studio`}
        subtitle="Interactive P&L Scenario Studio • Local Browser Persistence • Connected to Your Operating Kit"
        badge="Product & AI Economist OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Interactive Company P&L & AI Scenario Studio */}
        <div className="bg-white rounded-3xl border-2 border-zinc-900 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-violet-700 mb-1">
                <Sparkles className="w-4 h-4" /> Live Browser P&amp;L Calibration Studio
              </div>
              <h2 className="text-2xl font-grotesk font-extrabold text-zinc-950">
                Configure Your Company &amp; Stress-Test Your Product P&amp;L
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-1">
                Plug in your actual numbers below. Your inputs and saved scenarios persist locally in your browser (`localStorage`) - zero server upload required.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleDownloadBoardReport}
                className="px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-violet-700 text-white font-mono text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Export Board Report (.MD)
              </button>
              <button
                onClick={() => typeof window !== 'undefined' && window.print()}
                className="px-3.5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-mono text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" /> Print / PDF
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-2.5 rounded-xl bg-zinc-100 hover:bg-rose-50 hover:text-rose-700 text-zinc-600 font-mono text-xs font-bold transition-colors inline-flex items-center gap-1 cursor-pointer"
                title="Reset to default baseline"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>
          </div>

          {/* Editable Inputs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <label className="block text-[11px] font-mono font-bold uppercase text-zinc-600 mb-1.5">
                Company / Product Name
              </label>
              <input
                type="text"
                value={workspace.organizationName}
                onChange={(e) => handleFieldChange('organizationName', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-sm font-bold text-zinc-950 focus:outline-none focus:border-violet-600"
              />
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <label className="block text-[11px] font-mono font-bold uppercase text-zinc-600 mb-1.5">
                Annual Revenue (ARR $)
              </label>
              <input
                type="number"
                step={250000}
                min={0}
                value={workspace.annualArrUSD}
                onChange={(e) => handleFieldChange('annualArrUSD', Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-sm font-mono font-bold text-zinc-950 focus:outline-none focus:border-violet-600"
              />
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <label className="block text-[11px] font-mono font-bold uppercase text-zinc-600 mb-1.5">
                Engineering Headcount
              </label>
              <input
                type="number"
                step={1}
                min={1}
                value={workspace.engineeringHeadcount}
                onChange={(e) => handleFieldChange('engineeringHeadcount', Math.max(1, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-sm font-mono font-bold text-zinc-950 focus:outline-none focus:border-violet-600"
              />
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <label className="block text-[11px] font-mono font-bold uppercase text-zinc-600 mb-1.5">
                Monthly AI / LLM Spend ($)
              </label>
              <input
                type="number"
                step={1000}
                min={0}
                value={workspace.monthlyAiSpendUSD}
                onChange={(e) => handleFieldChange('monthlyAiSpendUSD', Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-sm font-mono font-bold text-zinc-950 focus:outline-none focus:border-violet-600"
              />
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
              <label className="block text-[11px] font-mono font-bold uppercase text-zinc-600 mb-1.5">
                Zombie Feature Load ({workspace.zombieFeaturePct}%)
              </label>
              <input
                type="range"
                min={5}
                max={75}
                value={workspace.zombieFeaturePct}
                onChange={(e) => handleFieldChange('zombieFeaturePct', Number(e.target.value))}
                className="w-full accent-violet-600 cursor-pointer mt-2"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                <span>5% (Lean)</span>
                <span>75% (Gridlock)</span>
              </div>
            </div>
          </div>

          {/* Save Scenario Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-200">
            <div className="flex flex-1 items-center gap-2 max-w-xl">
              <input
                type="text"
                value={scenarioName}
                onChange={(e) => setScenarioName(e.target.value)}
                placeholder="Name this P&L scenario (e.g., Q4 Zombie Feature Sunset + Token Caching)..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs font-medium text-zinc-900 focus:outline-none focus:border-violet-600"
              />
              <button
                onClick={handleSaveScenario}
                className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-mono text-xs font-bold transition-colors inline-flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" /> Save Scenario
              </button>
            </div>

            {saveMessage && (
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4" /> {saveMessage}
              </div>
            )}
          </div>

          {/* Saved Scenarios List */}
          {workspace.savedScenarios && workspace.savedScenarios.length > 0 && (
            <div className="mt-6 pt-5 border-t border-zinc-200">
              <div className="text-xs font-mono font-bold uppercase text-zinc-500 mb-3">
                Saved Browser Scenarios ({workspace.savedScenarios.length})
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {workspace.savedScenarios.map((scen) => (
                  <div
                    key={scen.id}
                    className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="font-bold text-xs text-zinc-950 font-grotesk">{scen.name}</div>
                      <div className="text-[11px] font-mono text-zinc-600 mt-1">
                        ARR: ${(scen.annualArrUSD / 1000000).toFixed(2)}M • {scen.engineeringHeadcount} Eng • AI: ${(scen.monthlyAiSpendUSD / 1000).toFixed(0)}k/mo
                      </div>
                      <div className="text-[11px] font-mono font-bold text-emerald-700 mt-0.5">
                        Recoverable EBITDA: ${scen.projectedAnnualSavingsUSD.toLocaleString()}/yr
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteScenario(scen.id)}
                      className="text-zinc-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                      title="Delete scenario"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Live Calculated KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Recoverable Annual Savings</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">
              ${workspace.cumulativeSavingsUSD.toLocaleString()}
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">AI Routing + 50% Zombie Reclaim</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Revenue Per Engineer (APER)</span>
            <h3 className="text-3xl font-grotesk font-bold text-cyan-700 mt-2">
              ${aperUSD.toLocaleString()}
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              {aperUSD >= 350000 ? 'Healthy P&L Efficiency' : 'Below $350K Benchmark'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-rose-700 font-bold uppercase">Zombie Feature Carry Cost</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">
              ${zombieCarryUSD.toLocaleString()}/yr
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              {workspace.zombieFeaturePct}% of {workspace.engineeringHeadcount} FTEs ($185K/FTE)
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-violet-700 font-bold uppercase">Annualized AI Token Burn</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">
              ${annualAiSpendUSD.toLocaleString()}/yr
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              Est. 38% Savings via Semantic Cache
            </p>
          </div>
        </div>

        {/* Connected Diagnostic Calculators Strip */}
        <div className="bg-zinc-900 text-white rounded-2xl p-6 border border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-grotesk font-bold">
                Connected Product &amp; AI Economist Diagnostic Calculators
              </h3>
            </div>
            <Link href="/tools" className="text-xs font-mono font-bold text-cyan-400 hover:underline">
              View All Diagnostic Tools &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              href="/tools/aueb"
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-400 transition-colors"
            >
              <div className="text-[10px] font-mono font-bold uppercase text-cyan-400">Module 01 Calculator</div>
              <div className="font-bold text-sm text-white font-grotesk mt-0.5">AI Unit Economics (AUEB) &rarr;</div>
              <div className="text-[11px] text-zinc-400 mt-1">Stress-test token costs vs seat price</div>
            </Link>
            <Link
              href="/tools/pdi"
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-400 transition-colors"
            >
              <div className="text-[10px] font-mono font-bold uppercase text-emerald-400">Module 02 Calculator</div>
              <div className="font-bold text-sm text-white font-grotesk mt-0.5">Product Debt Index (PDI) &rarr;</div>
              <div className="text-[11px] text-zinc-400 mt-1">Quantify backlog bloat in dollars</div>
            </Link>
            <Link
              href="/tools/aper"
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-400 transition-colors"
            >
              <div className="text-[10px] font-mono font-bold uppercase text-violet-400">Module 03 Calculator</div>
              <div className="font-bold text-sm text-white font-grotesk mt-0.5">Revenue Per Engineer (APER) &rarr;</div>
              <div className="text-[11px] text-zinc-400 mt-1">Benchmark R&amp;D headcount ROI</div>
            </Link>
            <Link
              href="/tools/shadow-ai"
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-cyan-400 transition-colors"
            >
              <div className="text-[10px] font-mono font-bold uppercase text-amber-400">Module 04 Calculator</div>
              <div className="font-bold text-sm text-white font-grotesk mt-0.5">Shadow AI Risk Scanner &rarr;</div>
              <div className="text-[11px] text-zinc-400 mt-1">Score unapproved LLM egress risk</div>
            </Link>
          </div>
        </div>

        {/* 10 Operational Workspaces Hub Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-grotesk font-bold text-zinc-900">10 Core Customer Workspaces</h2>
            <span className="text-xs font-mono text-zinc-500">Fully Operational Workflow Software</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workspaceLinks.filter(w => w.name !== 'Organization').map(ws => {
              const Icon = ws.icon;
              return (
                <Link
                  key={ws.href}
                  href={ws.href}
                  className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:border-cyan-500/50 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-600 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                        {ws.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-grotesk font-bold text-zinc-900 group-hover:text-cyan-700 transition-colors">
                      {ws.name} Workspace
                    </h3>

                    <p className="text-xs font-mono text-zinc-500 leading-normal">
                      Full operational workflow for {ws.name.toLowerCase()} execution and governance.
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-cyan-700 font-bold">
                    <span>Enter Workspace</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Stored Executive Deliverables Repository */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
          <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-600" /> Living Deliverable Repository (`ExecutiveArtifact`)
          </h3>
          <p className="text-xs text-zinc-500 font-mono mb-6">Persistent board decks, executive memos, and risk registers consuming living telemetry.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-700 font-bold uppercase">BoardDeck</span>
                <h4 className="font-bold text-zinc-900 text-sm mt-1">Q3 2026 Board Briefing Deck</h4>
                <span className="text-[10px] font-mono text-zinc-500 block mt-1">11 Compiled Slides • Verified $319.5k ROI</span>
              </div>
              <a href="https://www.richardewing.io/exports/boarddeck_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-cyan-700 font-bold flex items-center justify-between">
                Download Board Deck <Download className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-violet-700 font-bold uppercase">ExecutiveMemo</span>
                <h4 className="font-bold text-zinc-900 text-sm mt-1">Token Saver Sidecar Architecture Review</h4>
                <span className="text-[10px] font-mono text-zinc-500 block mt-1">CFO Briefing • Zero Code Egress Verified</span>
              </div>
              <a href="https://www.richardewing.io/exports/executivememo_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-violet-700 font-bold flex items-center justify-between">
                Download Executive Memo <Download className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">RiskRegister</span>
                <h4 className="font-bold text-zinc-900 text-sm mt-1">Shadow AI &amp; Context Rot Audit</h4>
                <span className="text-[10px] font-mono text-zinc-500 block mt-1">CISO Audit • 14 Repos Cleaned</span>
              </div>
              <a href="https://www.richardewing.io/exports/riskregister_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-emerald-700 font-bold flex items-center justify-between">
                Download Risk Register <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

