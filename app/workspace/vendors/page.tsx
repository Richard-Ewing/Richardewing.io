"use client";

import React, { useState } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { Building2, DollarSign, Users, RefreshCcw, FileText, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';

const vendorPipeline = [
  { step: '01', id: 'vendor', title: 'Vendor Profile' },
  { step: '02', id: 'discovery', title: 'Discovery & Shadow Scan' },
  { step: '03', id: 'contract', title: 'Current Contract' },
  { step: '04', id: 'usage', title: 'Telemetry & Seat Usage' },
  { step: '05', id: 'licenses', title: 'License Audit' },
  { step: '06', id: 'costs', title: 'Cost Analysis' },
  { step: '07', id: 'alternatives', title: 'Vendor Alternatives' },
  { step: '08', id: 'negotiation', title: 'Negotiation Strategy' },
  { step: '09', id: 'approval', title: 'Approval Workflow' },
  { step: '10', id: 'renewal', title: 'Renewal Execution' },
  { step: '11', id: 'verification', title: 'Post-Renewal Verification' }
];

const mockVendors = [
  {
    id: 'v_01',
    name: 'Cursor Enterprise',
    category: 'Developer AI',
    annualCost: 185000,
    seatsAllocated: 450,
    seatsActive: 390,
    idlePct: 13.3,
    renewalDate: '2026-11-15',
    status: 'Negotiation In Flight',
    recommendation: 'Downgrade 60 unutilized seats to save $24,600/yr.'
  },
  {
    id: 'v_02',
    name: 'Anthropic Claude Enterprise',
    category: 'LLM Provider',
    annualCost: 240000,
    seatsAllocated: 200,
    seatsActive: 195,
    idlePct: 2.5,
    renewalDate: '2027-01-30',
    status: 'Optimal Usage',
    recommendation: 'Deploy Token Saver sidecars to lower per-request token overhead.'
  },
  {
    id: 'v_03',
    name: 'OpenAI Enterprise API',
    category: 'API Provider',
    annualCost: 310000,
    seatsAllocated: 1000,
    seatsActive: 820,
    idlePct: 18.0,
    renewalDate: '2026-09-30',
    status: 'Renewal Audit Required',
    recommendation: 'Consolidate workspace API keys under central rate-limiting proxy.'
  }
];

export default function VendorWorkspacePage() {
  const [activeStep, setActiveStep] = useState(2); // Current Contract default

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="Vendor Workspace"
        subtitle="End-to-end software & AI vendor lifecycle management, usage audits, and renewal negotiations."
        badge="Product 3 • Vendor OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Vendor Pipeline Bar */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm mb-8 overflow-x-auto">
          <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider block mb-4">
            Vendor Lifecycle Pipeline
          </span>
          
          <div className="flex items-center gap-2 min-w-max">
            {vendorPipeline.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveStep(idx)}
                className={`px-3 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-zinc-900 text-white border-zinc-900 font-bold shadow'
                    : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                <span className="text-cyan-500 font-bold mr-1.5">{item.step}</span>
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Vendor Inventory Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-grotesk font-bold text-zinc-900">Active AI Vendor Portfolio</h2>
            <span className="text-xs font-mono text-zinc-500">3 Major Contracts Managed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockVendors.map(vendor => (
              <div key={vendor.id} className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                      {vendor.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-700">{vendor.status}</span>
                  </div>

                  <h3 className="text-lg font-grotesk font-bold text-zinc-900">{vendor.name}</h3>
                  
                  <div className="mt-4 space-y-2 text-xs font-mono">
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                      <span className="text-zinc-500">Annual Contract:</span>
                      <span className="font-bold text-zinc-900">${vendor.annualCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                      <span className="text-zinc-500">Seat Utilization:</span>
                      <span className="font-bold text-zinc-900">{vendor.seatsActive} / {vendor.seatsAllocated} ({vendor.idlePct}% idle)</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-1">
                      <span className="text-zinc-500">Renewal Date:</span>
                      <span className="font-bold text-zinc-900">{vendor.renewalDate}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs font-mono space-y-1">
                  <span className="text-amber-800 font-bold block">Recommendation</span>
                  <p className="text-amber-900 text-[11px] leading-relaxed">{vendor.recommendation}</p>
                </div>

                <button className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-white font-mono text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5">
                  Execute Renewal Workflow <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
