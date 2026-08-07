"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import WorkspaceHeader from '../../components/workspace/WorkspaceHeader';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../../lib/workspace/customerWorkspace';
import { workspaceLinks } from '../../components/workspace/WorkspaceNav';
import { LayoutDashboard, Target, ShieldCheck, Building2, Code2, BarChart3, Presentation, DollarSign, Inbox, Database, Search, ArrowRight, Download, FileText } from 'lucide-react';

export default function CustomerWorkspacePage() {
  const [workspace, setWorkspace] = useState<CustomerOrganizationWorkspace | null>(null);

  useEffect(() => {
    setWorkspace(CustomerWorkspaceStore.getWorkspace());
  }, []);

  if (!workspace) return null;

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title={workspace.organizationName}
        subtitle="Persistent Organizational Memory • Sovereign AI Operating System"
        badge="Executive OS Central"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Verified Cumulative Savings</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">${workspace.cumulativeSavingsUSD.toLocaleString()}</h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">14 Interventions Verified</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Decision Accuracy Rate</span>
            <h3 className="text-3xl font-grotesk font-bold text-cyan-700 mt-2">{workspace.decisionAccuracyPct}%</h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">Calibrated via Exogram Ledger</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-violet-700 font-bold uppercase">Active Executive Missions</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{workspace.activeMissionsCount}</h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">In Execution & Monitoring</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <span className="text-xs font-mono text-amber-700 font-bold uppercase">Board Deck Repository</span>
            <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{workspace.historicalBoardDecksCount} Decks</h3>
            <p className="text-xs text-zinc-500 mt-1 font-mono">Historical Executive Memory</p>
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
              <a href="https://richardewing.io/exports/boarddeck_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-cyan-700 font-bold flex items-center justify-between">
                Download Board Deck <Download className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-violet-700 font-bold uppercase">ExecutiveMemo</span>
                <h4 className="font-bold text-zinc-900 text-sm mt-1">Token Saver Sidecar Architecture Review</h4>
                <span className="text-[10px] font-mono text-zinc-500 block mt-1">CFO Briefing • Zero Code Egress Verified</span>
              </div>
              <a href="https://richardewing.io/exports/executivememo_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-violet-700 font-bold flex items-center justify-between">
                Download Executive Memo <Download className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">RiskRegister</span>
                <h4 className="font-bold text-zinc-900 text-sm mt-1">Shadow AI & Context Rot Audit</h4>
                <span className="text-[10px] font-mono text-zinc-500 block mt-1">CISO Audit • 14 Repos Cleaned</span>
              </div>
              <a href="https://richardewing.io/exports/riskregister_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-emerald-700 font-bold flex items-center justify-between">
                Download Risk Register <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
