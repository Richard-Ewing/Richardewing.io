import React from 'react';

const ASSETS = [
  "Governance Policies",
  "YAML Runtime Manifests",
  "TypeScript Middleware",
  "Rollback Systems",
  "Escalation Matrices",
  "Architecture Templates",
  "Operational Checklists",
  "Repository Governance",
  "Runtime Enforcement Flows",
  "Governance Diagrams"
];

export default function AssetGrid() {
  return (
    <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.1)] rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden">
      {/* Subtle Terminal Background Detail */}
      <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[80px] leading-none select-none text-[#1A1A1A]">
        {'{ }'}
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
          Every Governance System Includes <span className="text-[#0891B2]">Deployable Operational Infrastructure</span>
        </h3>
        
        <p className="text-[#6B6B6B] mb-8 font-medium max-w-2xl">
          These are not abstract PDFs. Every governance system is an implementation-ready toolkit designed to be deployed directly into your enterprise AI environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
          {ASSETS.map((asset, idx) => (
            <div key={idx} className="flex items-center group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(8,145,178,0.1)] border border-[rgba(8,145,178,0.3)] flex items-center justify-center mr-3 group-hover:bg-[#0891B2] transition-colors">
                <svg className="w-3.5 h-3.5 text-[#0891B2] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#1A1A1A] font-mono font-medium text-sm md:text-base group-hover:text-[#0891B2] transition-colors">
                {asset}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
