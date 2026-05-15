import React from 'react';

interface FailureCardProps {
  title: string;
  definition: string;
  symptoms: string[];
  economicImpact: string;
  governanceImpact: string;
}

export default function FailureCard({ title, definition, symptoms, economicImpact, governanceImpact }: FailureCardProps) {
  return (
    <div className="card border-l-4 border-l-red-500 hover:border-l-red-600 transition-all flex flex-col h-full bg-[#FFFFFF] shadow-sm hover:shadow-md">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
        <p className="text-[#3A3A3A] font-medium leading-relaxed">{definition}</p>
      </div>
      
      <div className="mb-4 flex-grow">
        <h4 className="text-sm font-bold text-[#6B6B6B] uppercase tracking-wider mb-2">Operational Symptoms</h4>
        <ul className="space-y-2">
          {symptoms.map((symptom, idx) => (
            <li key={idx} className="flex items-start text-[#4A4A4A] text-sm">
              <span className="text-red-500 mr-2 mt-0.5">•</span>
              {symptom}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-[#F5F0EB] rounded p-3 mt-auto border border-[rgba(0,0,0,0.05)]">
        <div className="mb-2">
          <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">Economic Consequence</span>
          <span className="text-sm text-[#1A1A1A] font-mono">{economicImpact}</span>
        </div>
        <div>
          <span className="text-xs font-bold text-[#6B6B6B] uppercase tracking-wider block mb-1">Governance Impact</span>
          <span className="text-sm text-[#1A1A1A] font-mono">{governanceImpact}</span>
        </div>
      </div>
    </div>
  );
}
