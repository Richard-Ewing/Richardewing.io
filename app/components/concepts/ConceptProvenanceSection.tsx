import React from 'react';
import Link from 'next/link';
import type { ConceptNode } from '@/app/lib/concept-corpus';

interface ConceptProvenanceSectionProps {
  concept: ConceptNode;
}

export default function ConceptProvenanceSection({ concept }: ConceptProvenanceSectionProps) {
  const telemetry = concept.telemetry;
  const humanSummary = telemetry?.humanEvidenceSummary;
  const humanSignals = telemetry?.humanSignals || [];
  const machineSummary = telemetry?.machineDiscoverabilitySummary;
  const machineSignals = telemetry?.machineSignals || [];
  const timeline = telemetry?.evolutionTimeline || concept.evolutionTimeline || [];

  return (
    <div className="space-y-8">
      {/* SECTION 1 & 2: ORIGIN & INTERNAL CORPUS DUAL GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Box 1: Origin & Genesis */}
        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                01 • Origin &amp; Genesis
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-200">
                Provenance Record
              </span>
            </div>
            <h3 className="text-xl font-bold font-grotesk text-zinc-950">
              Canonical Specification Origin
            </h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
              {telemetry?.origin?.genesisThesis || concept.positionStatement || concept.definition}
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-200 grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl">
              <span className="text-[10px] text-zinc-500 block font-bold uppercase">First Introduced</span>
              <span className="font-bold text-zinc-950">{telemetry?.origin?.firstIntroducedDate || concept.firstIntroduced}</span>
            </div>
            <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl">
              <span className="text-[10px] text-zinc-500 block font-bold uppercase">Primary Venue</span>
              <span className="font-bold text-cyan-950 truncate block">
                {telemetry?.origin?.primaryVenue || concept.provenanceTimeline?.[0]?.publisher || 'Research Canon'}
              </span>
            </div>
          </div>
        </div>

        {/* Box 2: Internal Research Corpus */}
        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">
                02 • Internal Research Corpus
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                richardewing.io
              </span>
            </div>
            <h3 className="text-xl font-bold font-grotesk text-zinc-950">
              Corpus Interconnections
            </h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
              Richard Ewing artifacts developed around this canonical framework, including publications, execution tools, and diagnostic models.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-200 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">
            <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl">
              <span className="text-[10px] text-zinc-500 block font-bold uppercase">Articles</span>
              <span className="text-base font-black text-cyan-900">
                {telemetry?.internalCorpus?.publicationsCount || concept.canonicalReadingOrder?.length || 1}
              </span>
            </div>
            <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl">
              <span className="text-[10px] text-zinc-500 block font-bold uppercase">Tools</span>
              <span className="text-base font-black text-emerald-900">
                {telemetry?.internalCorpus?.diagnosticToolsCount || (concept.executableTool ? 1 : 0)}
              </span>
            </div>
            <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl">
              <span className="text-[10px] text-zinc-500 block font-bold uppercase">Specs</span>
              <span className="text-base font-black text-amber-900">
                {telemetry?.internalCorpus?.frameworksCount || 1}
              </span>
            </div>
            <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl">
              <span className="text-[10px] text-zinc-500 block font-bold uppercase">Chapters</span>
              <span className="text-base font-black text-indigo-900">
                {telemetry?.internalCorpus?.bookChaptersCount || 1}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3A: HUMAN EXTERNAL EVIDENCE */}
      <section className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
              03A • Verified Human External Evidence
            </span>
            {humanSummary && humanSummary.uniqueDomainsCount > 0 ? (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-900 text-white shadow-sm">
                {humanSummary.independentAuthorsCount} authors • {humanSummary.independentOrganizationsCount} organizations • {humanSummary.uniqueDomainsCount} domains
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-zinc-100 text-zinc-600 border border-zinc-200">
                Audit Status: Baseline
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
            External Adoption &amp; Peer Citations
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 font-medium max-w-3xl">
            Documented instances where independent researchers, engineering teams, and publications have cited, implemented, or referenced this concept outside Richard Ewing’s ecosystem.
          </p>
        </div>

        {humanSignals.length > 0 ? (
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center text-xs">
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl">
                <span className="text-[10px] text-zinc-500 block font-bold uppercase">Formal Citations</span>
                <span className="text-lg font-black text-cyan-900">{humanSummary?.formalCitationsCount || 0}</span>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl">
                <span className="text-[10px] text-zinc-500 block font-bold uppercase">Implementations</span>
                <span className="text-lg font-black text-emerald-900">{humanSummary?.implementationsCount || 0}</span>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl">
                <span className="text-[10px] text-zinc-500 block font-bold uppercase">Derivatives</span>
                <span className="text-lg font-black text-amber-900">{humanSummary?.derivativesCount || 0}</span>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl">
                <span className="text-[10px] text-zinc-500 block font-bold uppercase">Unique Domains</span>
                <span className="text-lg font-black text-indigo-900">{humanSummary?.uniqueDomainsCount || 0}</span>
              </div>
            </div>

            <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden bg-zinc-50">
              {humanSignals.map((signal) => (
                <div key={signal.id} className="p-4 sm:p-5 space-y-2 hover:bg-zinc-100/80 transition">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-100 text-cyan-950 border border-cyan-300">
                        [{signal.signalType}]
                      </span>
                      <span className="font-bold text-zinc-950">
                        {signal.sourceAuthor ? `${signal.sourceAuthor} • ` : ''}{signal.sourceOrganization || signal.sourceDomain}
                      </span>
                    </div>
                    <span className="text-zinc-500 text-[11px]">{signal.dateObserved}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-800 italic font-medium leading-relaxed pl-2 border-l-2 border-cyan-700">
                    &ldquo;{signal.contextExcerpt}&rdquo;
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-500">
                      Channel: {signal.sourceType.replace(/_/g, ' ')}
                    </span>
                    {signal.provenance.type === 'PUBLIC_URL' && (
                      <a
                        href={signal.provenance.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-900 hover:underline font-bold inline-flex items-center gap-1"
                      >
                        Inspect Citation Target ↗
                      </a>
                    )}
                    {signal.provenance.type === 'CODEBASE_OR_SPEC' && (
                      <a
                        href={signal.provenance.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-900 hover:underline font-bold inline-flex items-center gap-1"
                      >
                        Inspect Codebase ({signal.provenance.commitHashOrRelease || 'Repo'}) ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl text-center space-y-1">
            <p className="text-sm font-mono font-bold text-zinc-700">
              External Evidence: No independently verified references recorded yet.
            </p>
            <p className="text-xs text-zinc-500 font-medium">
              This concept is part of Richard Ewing’s original baseline canon. External citations and implementations are added only upon rigorous empirical verification.
            </p>
          </div>
        )}
      </section>

      {/* SECTION 3B: MACHINE DISCOVERABILITY (AI RETRIEVAL STUDY) */}
      {machineSignals.length > 0 && (
        <section className="bg-gradient-to-r from-zinc-950 via-cyan-950 to-zinc-950 text-white border-2 border-cyan-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                03B • Machine Discoverability &amp; AEO Telemetry
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-400 text-zinc-950">
                AI Retrieval Study
              </span>
            </div>
            <h2 className="text-2xl font-bold font-grotesk text-white">
              Answer Engine Retrieval &amp; Attribution
            </h2>
            <p className="text-xs sm:text-sm text-zinc-200 font-medium max-w-3xl">
              Empirical study measuring how frontier LLMs and AI answer engines (Perplexity, ChatGPT Search, Gemini, Claude) retrieve and attribute this concept when answering industry queries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center text-xs">
            <div className="bg-white/10 border border-white/20 p-3 rounded-2xl">
              <span className="text-[10px] text-zinc-300 block font-bold uppercase">Evaluations Run</span>
              <span className="text-lg font-black text-cyan-300">{machineSummary?.totalEvaluations || machineSignals.length}</span>
            </div>
            <div className="bg-white/10 border border-white/20 p-3 rounded-2xl">
              <span className="text-[10px] text-zinc-300 block font-bold uppercase">Search Hits</span>
              <span className="text-lg font-black text-emerald-300">{machineSummary?.retrievalHitsCount || 0}</span>
            </div>
            <div className="bg-white/10 border border-white/20 p-3 rounded-2xl">
              <span className="text-[10px] text-zinc-300 block font-bold uppercase">Explicit Sourced</span>
              <span className="text-lg font-black text-amber-300">{machineSummary?.explicitCitationsCount || 0}</span>
            </div>
            <div className="bg-white/10 border border-white/20 p-3 rounded-2xl">
              <span className="text-[10px] text-zinc-300 block font-bold uppercase">Coiner Attributed</span>
              <span className="text-lg font-black text-rose-300">{machineSummary?.coinerAttributionsCount || 0}</span>
            </div>
          </div>

          <div className="space-y-3">
            {machineSignals.map((aiSig) => (
              <div key={aiSig.id} className="bg-white/5 border border-cyan-800/60 rounded-2xl p-4 sm:p-5 space-y-2 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-300 text-zinc-950">
                      [{aiSig.discoverabilityType}]
                    </span>
                    <span className="font-bold text-white">{aiSig.engine} ({aiSig.modelIdentifier})</span>
                  </div>
                  <span className="text-zinc-400 text-[11px]">{aiSig.dateEvaluated}</span>
                </div>
                <div className="text-cyan-200 font-mono text-[11px]">
                  Query Class: &ldquo;{aiSig.queryClass}&rdquo;
                </div>
                {aiSig.provenance.type === 'AI_STUDY_LOG' && (
                  <p className="text-zinc-200 leading-relaxed font-medium pl-3 border-l-2 border-cyan-400">
                    &ldquo;{aiSig.provenance.responseExcerpt}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: RESEARCH EVOLUTION TIMELINE */}
      {timeline.length > 0 && (
        <section className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
              04 • Research Evolution &amp; Chronology
            </span>
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
              The History of the Idea
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 font-medium">
              Chronological narrative tracing the concept from first observed friction through internal tooling to external ecosystem emergence.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-800 space-y-8 pt-2">
            {timeline.map((step, idx) => (
              <div key={idx} className="relative space-y-1">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-900 border-2 border-white ring-2 ring-cyan-700" />
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="font-bold text-cyan-900">{step.date}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-700 border border-zinc-200 uppercase">
                    {step.phase.replace(/_/g, ' ')}
                  </span>
                </div>
                <h3 className="text-base font-bold font-grotesk text-zinc-950">
                  {step.headline}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
                  {step.summary}
                </p>
                {step.linkedArtifactUrl && (
                  <div className="pt-1">
                    <Link
                      href={step.linkedArtifactUrl}
                      className="text-xs font-mono font-bold text-cyan-900 hover:underline inline-flex items-center gap-1"
                    >
                      View Milestone Artifact →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
