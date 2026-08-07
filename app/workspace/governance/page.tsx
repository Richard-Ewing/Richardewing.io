"use client";

import React, { useState } from 'react';
import WorkspaceHeader from '../../../components/workspace/WorkspaceHeader';
import { ShieldCheck, AlertTriangle, FileText, CheckCircle2, Download, Lock, Shield, RefreshCw } from 'lucide-react';

const governanceSteps = [
  { step: '01', title: 'AI Inventory', count: '14 Services', status: 'Audited' },
  { step: '02', title: 'Policies', count: '6 Active', status: 'Enforced' },
  { step: '03', title: 'Controls', count: '28 Controls', status: 'Active' },
  { step: '04', title: 'Violations', count: '0 Critical', status: 'Clean' },
  { step: '05', title: 'Evidence', count: '1,420 Hashes', status: 'Immutable' },
  { step: '06', title: 'Remediation', count: '2 Resolved', status: 'Complete' },
  { step: '07', title: 'Verification', count: '100% Pass', status: 'Verified' },
  { step: '08', title: 'Audit Package', count: 'Q3 Certified', status: 'Ready' }
];

const mockPolicies = [
  {
    id: 'pol_01',
    name: 'Zero Outbound Code Egress',
    category: 'Data Protection',
    enforcement: 'Deterministic Blocking',
    violations24h: 0,
    status: 'Compliant'
  },
  {
    id: 'pol_02',
    name: 'Prompt Injection Sidecar Filtering',
    category: 'Security',
    enforcement: 'Sanitization Proxy',
    violations24h: 3,
    status: 'Active Remediation'
  },
  {
    id: 'pol_03',
    name: 'Model Token Budget Ceiling',
    category: 'Cost Control',
    enforcement: 'Rate Limiting',
    violations24h: 0,
    status: 'Compliant'
  }
];

export default function GovernanceWorkspacePage() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <div className="min-h-screen bg-zinc-50 pt-20 pb-16">
      <WorkspaceHeader
        title="AI Governance Workspace"
        subtitle="Policy lifecycles, deterministic controls, violation feeds, and certified audit evidence."
        badge="Product 2 • Governance OS"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Step Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
          {governanceSteps.map((item, idx) => (
            <button
              key={item.title}
              onClick={() => setSelectedStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                selectedStep === idx
                  ? 'bg-zinc-900 text-white border-zinc-900 shadow-lg'
                  : 'bg-white border-zinc-200 text-zinc-800 hover:border-zinc-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold ${selectedStep === idx ? 'text-cyan-400' : 'text-zinc-500'}`}>
                  {item.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="font-grotesk font-bold text-xs mt-2">{item.title}</h3>
              <p className={`text-[10px] font-mono mt-1 ${selectedStep === idx ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {item.count}
              </p>
            </button>
          ))}
        </div>

        {/* Active Policy & Audit Package Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-700 font-bold uppercase">
                  Active Enforcement Matrix
                </span>
                <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mt-1">Enterprise AI Policy Controls</h2>
              </div>
              <button className="px-3.5 py-1.5 bg-zinc-900 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer">
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400" /> Run Full Policy Scan
              </button>
            </div>

            <div className="space-y-4">
              {mockPolicies.map(policy => (
                <div key={policy.id} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-zinc-900">{policy.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 text-zinc-700">
                        {policy.category}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-zinc-500">
                      Enforcement Mechanism: <span className="text-zinc-800 font-bold">{policy.enforcement}</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-700 block">{policy.status}</span>
                    <span className="text-[10px] font-mono text-zinc-500 block">{policy.violations24h} Violations (24h)</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900 text-white p-6 rounded-xl border border-zinc-800 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Lock className="w-4 h-4" /> Exogram Cryptographic Evidence Ledger
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Every inference request is validated against policy hash chains. Audit logs are preserved in immutable storage for SOC2 and ISO 42001 verification.
              </p>
            </div>
          </div>

          {/* Downloadable Audit Package Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-2xl p-8 border border-zinc-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Certified Deliverable</span>
                <h3 className="text-2xl font-grotesk font-bold text-white mt-1">Q3 Certified Audit Package</h3>
                <p className="text-xs font-mono text-zinc-400 mt-2 leading-relaxed">
                  Includes complete control verification reports, shadow AI scanning logs, model inventory proofs, and CISO sign-off memo.
                </p>
              </div>

              <div className="space-y-2 font-mono text-xs text-zinc-300 border-t border-zinc-800 pt-4">
                <div className="flex justify-between">
                  <span>Policy Compliance:</span>
                  <span className="text-emerald-400 font-bold">100% Verified</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Format:</span>
                  <span className="text-white">PDF + JSON Evidence</span>
                </div>
                <div className="flex justify-between">
                  <span>Certificate ID:</span>
                  <span className="text-cyan-400 font-bold">EX-GOV-2026-Q3</span>
                </div>
              </div>
            </div>

            <a
              href="https://richardewing.io/exports/riskregister_dp_board_001.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 py-3 px-4 bg-cyan-600 hover:bg-cyan-700 text-zinc-950 font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download Certified Audit Package
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
