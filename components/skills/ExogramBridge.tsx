import React from 'react';
import GovernanceDiagram from './GovernanceDiagram';
import Link from 'next/link';

export default function ExogramBridge() {
  return (
    <div className="card bg-white border border-[rgba(0,0,0,0.08)] rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden mt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/40 to-cyan-50/40 z-0"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-violet-200 opacity-20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
          Frameworks Identify the Instability. <br/>
          <span className="text-violet-700">Exogram Enforces the Runtime Governance.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6">
            <h3 className="text-zinc-500 font-mono text-sm uppercase tracking-widest font-bold mb-4">The Skills</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-[#3A3A3A]"><span className="text-cyan-700 mr-3 font-bold">✓</span> Diagnose</li>
              <li className="flex items-center text-[#3A3A3A]"><span className="text-cyan-700 mr-3 font-bold">✓</span> Explain</li>
              <li className="flex items-center text-[#3A3A3A]"><span className="text-cyan-700 mr-3 font-bold">✓</span> Operationalize</li>
            </ul>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-lg p-6 shadow-sm relative overflow-hidden">
             {/* Subtle Exogram branding stripe */}
             <div className="absolute top-0 left-0 w-1 h-full bg-violet-600"></div>
             
            <h3 className="text-violet-700 font-mono text-sm uppercase tracking-widest font-bold mb-4">Exogram</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-[#3A3A3A]"><span className="text-violet-600 mr-3 font-bold">●</span> Enforces</li>
              <li className="flex items-center text-[#3A3A3A]"><span className="text-violet-600 mr-3 font-bold">●</span> Intercepts</li>
              <li className="flex items-center text-[#3A3A3A]"><span className="text-violet-600 mr-3 font-bold">●</span> Governs</li>
              <li className="flex items-center text-[#3A3A3A]"><span className="text-violet-600 mr-3 font-bold">●</span> Contains</li>
              <li className="flex items-center text-[#3A3A3A]"><span className="text-violet-600 mr-3 font-bold">●</span> Validates</li>
              <li className="flex items-center text-[#1A1A1A] font-semibold"><span className="text-rose-600 mr-3 font-bold">■</span> Blocks unsafe execution</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <GovernanceDiagram type="exogram-bridge" />
        </div>

        <Link 
          href="/exogram" 
          className="inline-block px-10 py-4 bg-violet-700 hover:bg-violet-800 text-white font-bold rounded shadow-sm hover:shadow-md transition-all"
        >
          Explore Exogram Runtime Enforcement
        </Link>
      </div>
    </div>
  );
}
