import React from 'react';
import { ArrowDown } from 'lucide-react';

interface CommonFailureCascadesProps {
  cascades: string[];
}

export default function CommonFailureCascades({ cascades }: CommonFailureCascadesProps) {
  if (!cascades || cascades.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Common Failure Cascade
      </h2>
      
      <div className="p-8 bg-indigo-50 border border-indigo-500/20 rounded-2xl shadow-sm">
        <p className="text-zinc-800 font-medium mb-8 max-w-3xl leading-relaxed">
          Operational failures do not exist in isolation. They compound systemically. Deploying this governance system breaks the following deterministic failure chain:
        </p>
        
        <div className="flex flex-col items-center">
          {cascades.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="w-full max-w-md bg-white border border-indigo-200 shadow-sm rounded-lg p-4 text-center">
                <span className="font-mono font-bold text-indigo-900 tracking-wider uppercase text-sm">
                  {step}
                </span>
              </div>
              
              {idx < cascades.length - 1 && (
                <div className="my-2 text-indigo-300">
                  <ArrowDown className="w-6 h-6" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
