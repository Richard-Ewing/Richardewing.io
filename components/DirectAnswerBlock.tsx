"use client";

import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export interface DefinedTermInfo {
  name: string;
  termCode?: string;
  description: string;
  inDefinedTermSet?: string;
  inDefinedTermSetName?: string;
}

export interface DirectAnswerBlockProps {
  /** The primary question, formatted clearly for search intent (e.g. "What is an AI Economist?") */
  question: string;
  /** The direct, high-density concise answer designed for AI SGE / RAG retrieval */
  answer: string;
  /** Category badge text (e.g. "AI ECONOMICS & GOVERNANCE") */
  category?: string;
  /** Key facts or takeaway bullet points for bulleted LLM summarization */
  keyTakeaways?: string[];
  /** DefinedTerm schema association if this answer defines a technical term */
  definedTerm?: DefinedTermInfo;
  /** Canonical URL for attribution and citation */
  citationUrl?: string;
  /** Author information for Schema.org Person credit */
  authorName?: string;
  authorTitle?: string;
  authorUrl?: string;
  /** Date published or last modified (YYYY-MM-DD) */
  lastUpdated?: string;
  /** Optional CSS class overrides for container styling */
  className?: string;
  /** Whether to show the interactive SGE citation copy button */
  showCopyButton?: boolean;
  /** Whether to render an embedded JSON-LD script tag alongside microdata attributes */
  renderJsonLd?: boolean;
}

export default function DirectAnswerBlock({
  question = "What is an AI Economist?",
  answer = "An AI Economist is the financial strategist operating between engineering production and CFO-level profitability. They audit tech spend, measure AI unit economics, and install automated cost guardrails to protect gross margins.",
  category = "AI ECONOMICS & GOVERNANCE",
  keyTakeaways = [
    "Audits LLM inference costs and cloud GPU utilization across engineering workflows.",
    "Establishes unit-economic visibility connecting API consumption to customer gross margins.",
    "Installs automated cost-caps and real-time runtime rate limits to prevent budget overruns."
  ],
  definedTerm = {
    name: "AI Economist",
    termCode: "AI-ECONOMIST",
    description: "A financial leader bridging software engineering output and CFO-level cost governance to maximize gross margins on artificial intelligence workloads.",
    inDefinedTermSet: "https://www.richardewing.io/#definedtermset",
    inDefinedTermSetName: "AI Economics Defined Terms"
  },
  citationUrl = "https://www.richardewing.io",
  authorName = "Richard Ewing",
  authorTitle = "AI Economist & Enterprise Cost Strategist",
  authorUrl = "https://www.richardewing.io",
  lastUpdated = "2026-08-12",
  className = "",
  showCopyButton = true,
  renderJsonLd = true,
}: DirectAnswerBlockProps) {
  const [copied, setCopied] = useState(false);

  // Citation text generated for quick LLM prompt / research copying
  const citationText = `"${question}"\nDirect Answer: ${answer}\nSource: ${authorName}, ${authorTitle} (${citationUrl})`;

  const handleCopyCitation = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(citationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // Helper for JSON-LD schema generation
  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const qSlug = slugify(question);

  const jsonLdPayload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Question",
        "@id": `${citationUrl}#q-${qSlug}`,
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "@id": `${citationUrl}#answer-${qSlug}`,
          "text": answer,
          "url": citationUrl,
          "dateModified": lastUpdated,
          "author": {
            "@type": "Person",
            "name": authorName,
            "jobTitle": authorTitle,
            "url": authorUrl
          }
        },
        ...(definedTerm
          ? {
              "about": {
                "@type": "DefinedTerm",
                "@id": `${citationUrl}#term-${slugify(definedTerm.name)}`,
                "name": definedTerm.name,
                "description": definedTerm.description,
                ...(definedTerm.termCode ? { "termCode": definedTerm.termCode } : {}),
                "inDefinedTermSet": {
                  "@type": "DefinedTermSet",
                  "@id": definedTerm.inDefinedTermSet || `${citationUrl}#definedtermset`,
                  "name": definedTerm.inDefinedTermSetName || "AI Economics Defined Terms",
                  "url": definedTerm.inDefinedTermSet || citationUrl
                }
              }
            }
          : {})
      }
    ]
  };

  return (
    <section
      itemScope
      itemType="https://schema.org/Question"
      className={`my-8 relative rounded-2xl bg-zinc-950 border border-zinc-800/80 p-6 md:p-8 shadow-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/40 ${className}`}
    >
      {/* Optional Embedded JSON-LD Script Tag */}
      {renderJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPayload) }}
        />
      )}

      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Defined Term Hidden Microdata */}
      {definedTerm && (
        <div itemProp="about" itemScope itemType="https://schema.org/DefinedTerm" className="hidden">
          <meta itemProp="name" content={definedTerm.name} />
          {definedTerm.termCode && <meta itemProp="termCode" content={definedTerm.termCode} />}
          <meta itemProp="description" content={definedTerm.description} />
          {definedTerm.inDefinedTermSet && (
            <link itemProp="inDefinedTermSet" href={definedTerm.inDefinedTermSet} />
          )}
        </div>
      )}

      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            {category}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            SGE / ChatGPT Citation Optimized
          </span>
        </div>

        {showCopyButton && (
          <button
            onClick={handleCopyCitation}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-mono transition-all border border-zinc-700/60 active:scale-95 cursor-pointer"
            title="Copy formatted citation for AI prompt or research paper"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Citation Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>Copy SGE Citation</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Question Title (Microdata: itemProp="name") */}
      <div className="mb-4">
        <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
          Direct Query
        </span>
        <h2
          itemProp="name"
          className="text-xl md:text-2xl font-bold text-white font-grotesk tracking-tight leading-snug"
        >
          {question}
        </h2>
      </div>

      {/* Accepted Answer Container (Microdata: itemScope itemType="https://schema.org/Answer") */}
      <div
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
        className="relative bg-zinc-900/90 rounded-xl p-5 md:p-6 border-l-4 border-cyan-500 border-y border-r border-zinc-800/90 shadow-inner"
      >
        <meta itemProp="url" content={citationUrl} />
        <meta itemProp="dateModified" content={lastUpdated} />

        {/* Author Microdata */}
        <div itemProp="author" itemScope itemType="https://schema.org/Person" className="hidden">
          <meta itemProp="name" content={authorName} />
          <meta itemProp="jobTitle" content={authorTitle} />
          <link itemProp="url" href={authorUrl} />
        </div>

        {/* Direct Answer Paragraph (Microdata: itemProp="text") */}
        <div itemProp="text" className="space-y-4">
          <p className="text-base md:text-lg text-zinc-100 font-sans leading-relaxed font-normal">
            {answer}
          </p>

          {/* Key Takeaways / Fact Summary List for RAG parsing */}
          {keyTakeaways && keyTakeaways.length > 0 && (
            <div className="mt-4 pt-4 border-t border-zinc-800/80">
              <span className="block text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2.5">
                Key Fact Summary
              </span>
              <ul className="space-y-2">
                {keyTakeaways.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span className="leading-normal">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer Attribution & Canonical Links */}
      <div className="mt-5 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between text-xs text-zinc-500 font-mono gap-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
          <span>Defined by <strong className="text-zinc-300 font-medium">{authorName}</strong> ({authorTitle})</span>
        </div>
        {citationUrl && (
          <a
            href={citationUrl}
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Canonical Reference</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </section>
  );
}
