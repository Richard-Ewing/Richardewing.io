import React from 'react';
import { notFound } from 'next/navigation';
import { failures, getFailureBySlug } from '@/lib/content/failures';
import { FailureHero } from '@/components/failures/FailureHero';
import { SymptomGrid } from '@/components/failures/SymptomGrid';
import { TelemetrySignals } from '@/components/failures/TelemetrySignals';
import { EconomicImpact } from '@/components/failures/EconomicImpact';
import { RemediationBlock } from '@/components/failures/RemediationBlock';

interface FailurePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all known failures
export function generateStaticParams() {
  return failures.map((failure) => ({
    slug: failure.slug,
  }));
}

// Generate dynamic metadata for SEO dominance
export function generateMetadata({ params }: FailurePageProps) {
  const failure = getFailureBySlug(params.slug);
  
  if (!failure) {
    return {
      title: 'Failure Not Found',
    };
  }

  return {
    title: `${failure.title} | Exogram Failure Database`,
    description: failure.description,
    openGraph: {
      title: `${failure.title} - Operational Failure Mode`,
      description: failure.description,
      type: 'article',
    }
  };
}

export default function FailureModePage({ params }: FailurePageProps) {
  const failure = getFailureBySlug(params.slug);

  if (!failure) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pt-20">
      <FailureHero 
        title={failure.title}
        subtitle={failure.subtitle}
        description={failure.description}
      />
      
      <SymptomGrid 
        symptoms={failure.symptoms}
        causes={failure.causes}
      />

      <TelemetrySignals 
        signals={failure.telemetrySignals}
      />

      <EconomicImpact 
        title={failure.economicImpact.title}
        description={failure.economicImpact.description}
        marginCompression={failure.economicImpact.marginCompression}
      />

      {/* Operational Patterns Block */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#111827] mb-8 flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Operational Resolution Patterns
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <ul className="space-y-4">
              {failure.operationalPatterns.map((pattern, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{pattern}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RemediationBlock 
        governanceResponse={failure.governanceResponse}
        exogramMapping={failure.exogramMapping}
        assets={failure.remediationAssets}
      />
    </article>
  );
}
