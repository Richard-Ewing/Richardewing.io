import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export default function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm relative overflow-hidden flex flex-col h-full">
      {/* Gradient accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-500 to-indigo-600"></div>
      
      {/* Decorative quote mark */}
      <div className="absolute top-6 right-6 text-zinc-100 font-serif text-8xl leading-none select-none z-0">
        &quot;
      </div>
      
      <div className="relative z-10 flex-grow">
        <p className="text-zinc-800 font-medium text-lg leading-relaxed mb-6 italic">
          "{quote}"
        </p>
      </div>
      
      <div className="relative z-10 mt-auto pt-6 border-t border-zinc-100">
        <p className="font-bold text-zinc-950 font-grotesk">{name}</p>
        <p className="text-xs text-zinc-600 font-medium mt-1">{title}</p>
        <p className="text-xs font-bold font-mono text-zinc-500 uppercase tracking-widest mt-1">{company}</p>
      </div>
    </div>
  );
}
