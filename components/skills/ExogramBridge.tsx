import React from 'react';
import GovernanceDiagram from './GovernanceDiagram';
import Link from 'next/link';

export default function ExogramBridge() {
  return (
    <div className="card bg-[#1A1A1A] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden mt-20">
      {/* Dark background inside light theme site to create emphasis / contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] z-0"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#7C3AED] opacity-10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Frameworks Identify the Instability. <br/>
          <span className="text-[#0891B2]">Exogram Enforces the Runtime Governance.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg p-6">
            <h3 className="text-[#6B6B6B] font-mono text-sm uppercase tracking-widest font-bold mb-4">The Skills</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300"><span className="text-[#0891B2] mr-3 font-bold">✓</span> Diagnose</li>
              <li className="flex items-center text-gray-300"><span className="text-[#0891B2] mr-3 font-bold">✓</span> Explain</li>
              <li className="flex items-center text-gray-300"><span className="text-[#0891B2] mr-3 font-bold">✓</span> Operationalize</li>
            </ul>
          </div>
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(124,58,237,0.3)] rounded-lg p-6 shadow-[0_0_15px_rgba(124,58,237,0.15)] relative overflow-hidden">
             {/* Subtle Exogram branding stripe */}
             <div className="absolute top-0 left-0 w-1 h-full bg-[#7C3AED]"></div>
             
            <h3 className="text-[#7C3AED] font-mono text-sm uppercase tracking-widest font-bold mb-4">Exogram</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300"><span className="text-[#7C3AED] mr-3 font-bold">●</span> Enforces</li>
              <li className="flex items-center text-gray-300"><span className="text-[#7C3AED] mr-3 font-bold">●</span> Intercepts</li>
              <li className="flex items-center text-gray-300"><span className="text-[#7C3AED] mr-3 font-bold">●</span> Governs</li>
              <li className="flex items-center text-gray-300"><span className="text-[#7C3AED] mr-3 font-bold">●</span> Contains</li>
              <li className="flex items-center text-gray-300"><span className="text-[#7C3AED] mr-3 font-bold">●</span> Validates</li>
              <li className="flex items-center text-white font-semibold"><span className="text-red-500 mr-3 font-bold">■</span> Blocks unsafe execution</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <GovernanceDiagram type="exogram-bridge" />
        </div>

        <Link 
          href="/exogram" 
          className="inline-block px-10 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all"
        >
          Explore Exogram Runtime Enforcement
        </Link>
      </div>
    </div>
  );
}
