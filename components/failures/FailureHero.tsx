import React from 'react';

interface FailureHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function FailureHero({ title, subtitle, description }: FailureHeroProps) {
  return (
    <section className="bg-[#111827] text-[#F9FAFB] py-24 px-6 sm:px-12 lg:px-24 border-b border-[#374151]">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-900/50 text-red-400 mb-6 border border-red-800/50">
          Critical Operational Failure
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-serif">
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-red-400 font-medium mb-8">
          {subtitle}
        </h2>
        <p className="text-xl leading-relaxed text-gray-300 max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
}
