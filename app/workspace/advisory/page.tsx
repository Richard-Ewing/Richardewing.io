"use client";

import React, { useState } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { Inbox, CheckSquare, Calendar, PieChart, Presentation, Target, ArrowRight, Clock } from 'lucide-react';

const advisoryCadences = [
  { id: 'morning', title: 'Morning Inbox', count: '3 Priority Items', icon: Inbox },
  { id: 'afternoon', title: 'Afternoon Approvals', count: '2 Pending Sign-offs', icon: CheckSquare },
  { id: 'weekly', title: 'Weekly Planning', count: '5 Sprint Milestones', icon: Calendar },
  { id: 'monthly', title: 'Monthly Budget', count: 'Variance Review', icon: PieChart },
  { id: 'quarterly', title: 'Quarterly Board', count: 'Deck Readiness', icon: Presentation },
  { id: 'yearly', title: 'Yearly Strategy', count: 'Capital Allocation', icon: Target }
];

export default function ExecutiveAdvisoryWorkspacePage() {
  const [activeCadence, setActiveCadence] = useState('morning');

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Executive Advisory Workspace"
        subtitle="Operating cadence hubs for morning priorities, afternoon sign-offs, and recurring executive reviews."
        badge="Product 8 • Advisory OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* Cadence Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {advisoryCadences.map(c => {
            const Icon = c.icon;
            const isActive = activeCadence === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCadence(c.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                    : 'bg-white text-zinc-800 border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-cyan-400' : 'text-zinc-600'}`} />
                <h3 className="font-grotesk font-bold text-sm">{c.title}</h3>
                <p className={`text-[10px] font-mono mt-1 ${isActive ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {c.count}
                </p>
              </button>
            );
          })}
        </div>

        {/* Executive Action Inbox Panel */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Executive Cadence Hub</span>
              <h2 className="text-xl font-grotesk font-bold text-zinc-900 capitalize">
                {activeCadence} Workflow Stream
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-cyan-600" /> Synced to Enterprise Calendar
            </span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
                  Priority Approval
                </span>
                <h4 className="font-bold text-zinc-900 text-sm mt-1">Approve Cursor Enterprise Renewal Term Sheet</h4>
                <p className="text-zinc-500 mt-0.5">Negotiated discount saves $24,600 annually. Requires CTO authorization signature.</p>
              </div>
              <a href="/workspace/vendors" className="px-3 py-1.5 bg-zinc-900 text-white rounded-lg text-xs font-bold hover:bg-zinc-800 transition-colors">
                Review Contract &rarr;
              </a>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-violet-100 text-violet-800">
                  Board Preparation
                </span>
                <h4 className="font-bold text-zinc-900 text-sm mt-1">Review Q3 11-Slide Board Deck</h4>
                <p className="text-zinc-500 mt-0.5">All 14 verified intervention proofs compiled with live telemetry links.</p>
              </div>
              <a href="/workspace/board" className="px-3 py-1.5 bg-zinc-900 text-white rounded-lg text-xs font-bold hover:bg-zinc-800 transition-colors">
                Inspect Deck &rarr;
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
