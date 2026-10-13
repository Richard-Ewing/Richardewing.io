"use client";

import React, { useState, useEffect } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../../../lib/workspace/customerWorkspace';
import { Download, CheckCircle2 } from 'lucide-react';

const boardPhases = [
  { step: '01', id: 'meeting', name: 'Board Meeting' },
  { step: '02', id: 'agenda', name: 'Agenda & Topics' },
  { step: '03', id: 'slides', name: 'Deck Slides (12)' },
  { step: '04', id: 'evidence', name: 'Verified Telemetry' },
  { step: '05', id: 'forecasts', name: 'ROI Forecasts' },
  { step: '06', id: 'questions', name: 'Director Q&A Prep' },
  { step: '07', id: 'notes', name: 'Speaker Notes' },
  { step: '08', id: 'votes', name: 'Formal Votes' },
  { step: '09', id: 'minutes', name: 'Meeting Minutes' },
  { step: '10', id: 'actions', name: 'Action Items' },
  { step: '11', id: 'verification', name: 'Post-Meeting Audit' }
];

export default function BoardWorkspacePage() {
  const [activePhase, setActivePhase] = useState(2); // Slides default
  const [workspace, setWorkspace] = useState<CustomerOrganizationWorkspace | null>(null);

  useEffect(() => {
    const sync = () => setWorkspace({ ...CustomerWorkspaceStore.getWorkspace() });
    sync();
    window.addEventListener('re-workspace-updated', sync);
    return () => window.removeEventListener('re-workspace-updated', sync);
  }, []);

  if (!workspace) return null;

  const aperUSD = workspace.engineeringHeadcount > 0
    ? Math.round(workspace.annualArrUSD / workspace.engineeringHeadcount)
    : 0;
  const zombieCarryUSD = Math.round(workspace.engineeringHeadcount * 185000 * (workspace.zombieFeaturePct / 100));

  const handleExportLiveDeck = () => {
    const markdown = CustomerWorkspaceStore.generateBoardReportMarkdown(workspace);
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${workspace.organizationName.replace(/[^a-zA-Z0-9_-]/g, '_')}_Board_PnL_Briefing.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Board Workspace"
        subtitle="End-to-end board meeting lifecycle, verified deck compilation, director Q&A, and vote governance."
        badge="Module 03 Live • Board Defense OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Board Lifecycle Navigation Bar */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm overflow-x-auto">
          <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider block mb-4">
            Board Meeting Lifecycle Pipeline
          </span>
          <div className="flex items-center gap-2 min-w-max">
            {boardPhases.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`px-3 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                  activePhase === idx
                    ? 'bg-zinc-900 text-white border-zinc-900 font-bold shadow'
                    : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                <span className="text-cyan-400 font-bold mr-1">{phase.step}</span>
                {phase.name}
              </button>
            ))}
          </div>
        </div>

        {/* Board Deck Deliverable Card & Slide Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Compiled Board Deliverable ({workspace.organizationName})</span>
                <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mt-1">12-Slide CFO &amp; Board Defense Deck</h2>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleExportLiveDeck}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Export Live Briefing (.MD)
                </button>
                <a
                  href="/downloads/Product_and_AI_Economist_Operating_Kit/03_12_Slide_CFO_and_Board_Defense_Blueprint.md"
                  download
                  className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> 12-Slide Blueprint
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                Slide Structure &amp; Evidence Index (12 Slides)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-cyan-700 font-bold">Slides 1-3: Executive P&amp;L Bridge</span>
                  <p className="text-zinc-600 text-[11px] mt-1">${workspace.annualArrUSD.toLocaleString()} ARR &bull; ${aperUSD.toLocaleString()} APER &bull; +${workspace.cumulativeSavingsUSD.toLocaleString()}/yr recoverable EBITDA.</p>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-cyan-700 font-bold">Slides 4-6: AI Unit Economics &amp; COGS</span>
                  <p className="text-zinc-600 text-[11px] mt-1">${workspace.monthlyAiSpendUSD.toLocaleString()}/mo token spend stress-tested across P50/P90/P99 cohorts.</p>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-cyan-700 font-bold">Slides 7-9: Zombie Feature Deprecation</span>
                  <p className="text-zinc-600 text-[11px] mt-1">Sunsetting {workspace.zombieFeaturePct}% legacy maintenance drag (${zombieCarryUSD.toLocaleString()}/yr carry).</p>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-cyan-700 font-bold">Slides 10-12: ASC 350-40 &amp; Capital Ask</span>
                  <p className="text-zinc-600 text-[11px] mt-1">CapEx vs OpEx software capitalization schedule &amp; 90-day payback milestones.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-zinc-900 text-white rounded-xl border border-zinc-800 space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Living Artifact Synchronization
              </div>
              <p className="text-zinc-300 leading-relaxed">
                This deck is tied to your local browser workspace for {workspace.organizationName}. Any changes in ARR, headcount, or AI spend in the P&amp;L Studio automatically update your exported board briefing.
              </p>
            </div>
          </div>

          {/* Director Q&A & Action Items */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-grotesk font-bold text-zinc-900 mb-4">Director Q&amp;A Prep ({workspace.organizationName})</h3>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="font-bold text-zinc-900 block">Q: How do we fund the AI roadmap without expanding headcount?</span>
                  <p className="text-zinc-600 text-[11px] mt-1">A: Sunsetting half of our {workspace.zombieFeaturePct}% Zombie Feature load reclaims ${Math.round(zombieCarryUSD * 0.5).toLocaleString()}/yr in existing engineering capacity.</p>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="font-bold text-zinc-900 block">Q: How do we protect gross margin as AI usage scales?</span>
                  <p className="text-zinc-600 text-[11px] mt-1">A: Semantic caching and small-model routing cut our ${(workspace.monthlyAiSpendUSD * 12).toLocaleString()}/yr inference bill by 38% while enforcing P99 usage tier caps.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
