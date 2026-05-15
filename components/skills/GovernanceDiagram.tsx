import React from 'react';

interface GovernanceDiagramProps {
  type: 'hero-flow' | 'exogram-bridge';
}

export default function GovernanceDiagram({ type }: GovernanceDiagramProps) {
  if (type === 'hero-flow') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Uncontrolled Flow */}
        <div className="card bg-[#FFFFFF] border-t-4 border-t-red-500 flex flex-col items-center p-6 sm:p-8">
          <h3 className="text-[#1A1A1A] font-bold text-lg mb-6 uppercase tracking-wider">Uncontrolled Execution</h3>
          
          <div className="w-full flex flex-col items-center space-y-2">
            <FlowBox text="Prompt" type="neutral" />
            <Arrow color="red" />
            <FlowBox text="Execution Request" type="neutral" />
            <Arrow color="red" />
            <FlowBox text="Retry Inflation" type="danger" />
            <Arrow color="red" />
            <FlowBox text="Hallucination Drift" type="danger" />
            <Arrow color="red" />
            <FlowBox text="Repository Corruption" type="danger" />
            <Arrow color="red" />
            <FlowBox text="Operational Collapse" type="critical" />
          </div>
        </div>

        {/* Deterministic Flow */}
        <div className="card bg-[#FFFFFF] border-t-4 border-t-[#0891B2] flex flex-col items-center p-6 sm:p-8">
          <h3 className="text-[#1A1A1A] font-bold text-lg mb-6 uppercase tracking-wider">Deterministic Governance</h3>
          
          <div className="w-full flex flex-col items-center space-y-2">
            <FlowBox text="Prompt" type="neutral" />
            <Arrow color="cyan" />
            <FlowBox text="Execution Request" type="neutral" />
            <Arrow color="cyan" />
            <FlowBox text="Admissibility Validation" type="governance" />
            <Arrow color="cyan" />
            <FlowBox text="Runtime Enforcement" type="governance" />
            <Arrow color="cyan" />
            <FlowBox text="Rollback Layer" type="governance" />
            <Arrow color="cyan" />
            <FlowBox text="Verified Execution" type="success" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'exogram-bridge') {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
        <FlowBox text="Operational Failure" type="danger" className="w-full md:w-auto" />
        <RightArrow />
        <FlowBox text="Governance Framework" type="neutral" className="w-full md:w-auto" />
        <RightArrow />
        <FlowBox text="Runtime Enforcement" type="exogram" className="w-full md:w-auto" />
        <RightArrow />
        <FlowBox text="Deterministic Execution" type="success" className="w-full md:w-auto" />
      </div>
    );
  }

  return null;
}

// Subcomponents for the diagram
function FlowBox({ text, type, className = "" }: { text: string, type: 'neutral' | 'danger' | 'critical' | 'governance' | 'success' | 'exogram', className?: string }) {
  let style = "bg-white text-[#1A1A1A] border-[rgba(0,0,0,0.1)]"; // neutral
  
  if (type === 'danger') style = "bg-[#FEF2F2] text-red-700 border-red-200";
  if (type === 'critical') style = "bg-red-600 text-white border-red-700 font-bold";
  if (type === 'governance') style = "bg-[#F0F9FF] text-[#0369A1] border-[#BAE6FD]";
  if (type === 'success') style = "bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold";
  if (type === 'exogram') style = "bg-[rgba(124,58,237,0.1)] text-[#D8B4FE] border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.2)]";

  return (
    <div className={`w-full max-w-[280px] text-center px-4 py-3 rounded border shadow-sm font-mono text-sm tracking-wide transition-all ${style} ${className}`}>
      {text}
    </div>
  );
}

function Arrow({ color }: { color: 'red' | 'cyan' }) {
  const strokeColor = color === 'red' ? '#EF4444' : '#0891B2';
  return (
    <svg className="w-6 h-6 my-1 opacity-70" fill="none" stroke={strokeColor} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg className="w-6 h-6 text-gray-500 transform rotate-90 md:rotate-0 hidden md:block opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
