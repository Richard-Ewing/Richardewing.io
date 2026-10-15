"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CANONICAL_CONCEPTS, ConceptNode } from "@/app/lib/concept-corpus";
import { ConceptCard } from "@/components/editorial/ConceptCard";

export function ConceptExplorer() {
  const [activeSlug, setActiveSlug] = useState<string>("product-management");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string>("ALL");

  const conceptMap = useMemo(() => {
    const map = new Map<string, ConceptNode>();
    CANONICAL_CONCEPTS.forEach((c) => map.set(c.slug, c));
    return map;
  }, []);

  const domains = useMemo(() => {
    const set = new Set<string>();
    CANONICAL_CONCEPTS.forEach((c) => set.add(c.domain));
    return ["ALL", ...Array.from(set)];
  }, []);

  const filteredConcepts = useMemo(() => {
    return CANONICAL_CONCEPTS.filter((c) => {
      const matchesDomain =
        selectedDomain === "ALL" || c.domain === selectedDomain;
      const matchesQuery =
        searchQuery.trim() === "" ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.domain.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDomain && matchesQuery;
    });
  }, [selectedDomain, searchQuery]);

  const activeConcept = conceptMap.get(activeSlug) || CANONICAL_CONCEPTS[0];

  const relatedNodes = useMemo(() => {
    if (!activeConcept?.relatedConceptSlugs) return [];
    return activeConcept.relatedConceptSlugs
      .map((rel) => ({
        concept: conceptMap.get(rel.slug),
        relationship: rel.relationship,
      }))
      .filter((r) => r.concept !== undefined) as {
      concept: ConceptNode;
      relationship: string;
    }[];
  }, [activeConcept, conceptMap]);

  return (
    <div className="space-y-12">
      {/* Search and Domain Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search concepts, frameworks, formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[var(--line)] bg-[#faf8f2] text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--forest)] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-[var(--muted)] hover:text-[var(--ink)]"
              >
                Clear
              </button>
            )}
          </div>
          <span className="text-xs font-mono text-[var(--muted)]">
            Showing {filteredConcepts.length} of {CANONICAL_CONCEPTS.length} concepts
          </span>
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDomain(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                selectedDomain === d
                  ? "bg-[var(--forest)] text-[#f7f5ed] shadow-sm"
                  : "bg-[#faf8f2] text-[#4a5850] border border-[var(--line)] hover:border-[var(--forest)]"
              }`}
            >
              {d === "ALL" ? "All Domains" : d}
            </button>
          ))}
        </div>
      </div>

      {/* Active Concept Spotlight Card */}
      {activeConcept && (
        <div className="border border-[var(--forest)] rounded-xl p-8 bg-[#faf8f2] shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[rgba(30,51,39,0.08)] text-[var(--forest)] text-xs font-mono font-semibold">
                {activeConcept.domain}
              </span>
              <span className="px-2.5 py-1 rounded bg-[rgba(208,154,85,0.15)] text-[#8c6023] text-xs font-mono font-semibold">
                {activeConcept.category === "Richard Ewing Canon (Original Framework)"
                  ? "Original Canon"
                  : "Industry Discovery"}
              </span>
            </div>

            {activeConcept.connectedTool && (
              <Link
                href={activeConcept.connectedTool.url}
                className="button button-gold text-xs !py-1.5 !min-h-0"
              >
                Launch {activeConcept.connectedTool.name} ↗
              </Link>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-serif font-medium text-[var(--ink)] mb-3">
              {activeConcept.title}
            </h2>
            <p className="text-base text-[#3d4942] leading-relaxed max-w-4xl">
              {activeConcept.definition}
            </p>
          </div>

          {/* Relationship Network */}
          {relatedNodes.length > 0 && (
            <div className="pt-4 border-t border-[var(--line)] space-y-3">
              <span className="text-xs font-mono text-[var(--gold)] uppercase tracking-wider block">
                Connected Causal Relationships
              </span>
              <div className="flex flex-wrap gap-2">
                {relatedNodes.map(({ concept, relationship }) => (
                  <button
                    key={concept.slug}
                    onClick={() => setActiveSlug(concept.slug)}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--line)] bg-white text-xs hover:border-[var(--forest)] transition"
                  >
                    <span className="text-[var(--forest)] font-medium">
                      {concept.title}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--muted)] group-hover:text-[var(--gold)]">
                      ({relationship.replace(/_/g, " ")})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <Link
              href={`/concepts/${activeConcept.slug}`}
              className="text-xs font-mono font-bold text-[var(--forest)] hover:underline inline-flex items-center gap-1"
            >
              Read full specification & evidence ledger ↗
            </Link>
          </div>
        </div>
      )}

      {/* Concept Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredConcepts.map((concept) => {
          const isSelected = concept.slug === activeSlug;
          return (
            <ConceptCard
              key={concept.slug}
              slug={concept.slug}
              title={concept.title}
              definition={concept.definition}
              domain={concept.domain}
              canonicalQuote={(concept as any).quote}
              evidenceCount={(concept as any).evidence?.length || (concept as any).health?.evidenceCount}
              isSelected={isSelected}
              onClick={() => setActiveSlug(concept.slug)}
            />
          );
        })}
      </div>
    </div>
  );
}
