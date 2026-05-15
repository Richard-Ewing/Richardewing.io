import React from 'react';

const PAIN_SIGNALS = [
  "\"Claude starts patching its own patches.\"",
  "\"The session gets worse over time.\"",
  "\"Retries explode after enough edits.\"",
  "\"The repo understanding completely drifts.\"",
  "\"We spend more time verifying than generating.\""
];

export default function EcosystemPainSignals() {
  return (
    <div className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">What Engineering Teams Are Actually Experiencing</h2>
        <div className="w-24 h-1 bg-red-500 mx-auto rounded"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {PAIN_SIGNALS.map((signal, idx) => (
          <div 
            key={idx} 
            className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.08)] shadow-sm px-6 py-4 rounded-lg transform transition-transform hover:-translate-y-1 hover:shadow-md max-w-sm"
          >
            <p className="text-[#3A3A3A] font-medium text-lg italic tracking-wide">
              {signal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
