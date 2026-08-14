"use client";

import React, { useState } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { Presentation, Download, FileText, CheckCircle2, ArrowRight, Layers, Users, Shield } from 'lucide-react';

const boardPhases = [
  { step: '01', id: 'meeting', name: 'Board Meeting' },
  { step: '02', id: 'agenda', name: 'Agenda & Topics' },
  { step: '03', id: 'slides', name: 'Deck Slides (11)' },
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

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Board Workspace"
        subtitle="End-to-end board meeting lifecycle, verified deck compilation, director Q&A, and vote governance."
        badge="Product 6 • Board OS"
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
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Compiled Board Deliverable</span>
                <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mt-1">Q3 2026 Board Executive Deck</h2>
              </div>
              <a
                href="https://richardewing.io/exports/boarddeck_dp_board_001.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-mono font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Export PDF Deck
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                Slide Structure & Evidence Index (11 Slides)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-cyan-700 font-bold">Slide 1-2: Executive Summary</span>
                  <p className="text-zinc-600 text-[11px] mt-1">$319.5k verified token savings & R&D capital efficiency.</p>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-cyan-700 font-bold">Slide 3-5: AI Unit Economics</span>
                  <p className="text-zinc-600 text-[11px] mt-1">Token cost per active user & model margin analysis.</p>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-cyan-700 font-bold">Slide 6-8: Governance & Security</span>
                  <p className="text-zinc-600 text-[11px] mt-1">Zero code egress policy verification & shadow AI scan.</p>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-cyan-700 font-bold">Slide 9-11: FY27 Capital Roadmap</span>
                  <p className="text-zinc-600 text-[11px] mt-1">Proposed R&D budget allocation and key milestones.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-zinc-900 text-white rounded-xl border border-zinc-800 space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Living Artifact Synchronization
              </div>
              <p className="text-zinc-300 leading-relaxed">
                This deck is tied to live telemetry. Any changes in budget variance or model savings automatically update the underlying slide data without manual re-compilation.
              </p>
            </div>
          </div>

          {/* Director Q&A & Action Items */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-grotesk font-bold text-zinc-900 mb-4">Director Q&A Prep</h3>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="font-bold text-zinc-900 block">Q: How do we prevent model vendor lock-in?</span>
                  <p className="text-zinc-600 text-[11px] mt-1">A: Model-agnostic sidecar proxies route requests across 3 providers dynamically.</p>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="font-bold text-zinc-900 block">Q: What is the payback period on Exogram?</span>
                  <p className="text-zinc-600 text-[11px] mt-1">A: 60 days based on verified $319,500 annual OpEx reduction.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
