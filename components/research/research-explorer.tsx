"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CorpusArticle } from "@/app/lib/research-corpus";
import { PublicationCard } from "@/components/editorial/PublicationCard";

interface ResearchExplorerProps {
  articles: CorpusArticle[];
  showPublisherFilter?: boolean;
  initialDomain?: string;
  limit?: number;
  title?: string;
  subtitle?: string;
}

const DOMAINS = [
  "All",
  "AI Economics",
  "AI Governance",
  "Software Economics",
  "Engineering Leadership",
  "Product Leadership",
];

const PUBLISHERS = [
  "All",
  "CIO.com",
  "Built In",
  "Mind the Product",
  "HackerNoon",
  "Beehiiv",
  "LinkedIn",
];

export function ResearchExplorer({
  articles,
  showPublisherFilter = true,
  initialDomain = "All",
  limit = 24,
  title = "Research",
  subtitle = "Practical frameworks, data-backed analysis, and hard-won lessons from the front lines of AI.",
}: ResearchExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState(initialDomain);
  const [selectedPublisher, setSelectedPublisher] = useState("All");
  const [visibleCount, setVisibleCount] = useState(limit);

  const filtered = useMemo(() => {
    return articles.filter((art) => {
      const matchesSearch =
        search === "" ||
        art.title.toLowerCase().includes(search.toLowerCase()) ||
        art.thesis.toLowerCase().includes(search.toLowerCase());

      const matchesDomain =
        selectedDomain === "All" || art.domain === selectedDomain;

      const matchesPublisher =
        selectedPublisher === "All" || art.publisher === selectedPublisher;

      return matchesSearch && matchesDomain && matchesPublisher;
    });
  }, [articles, search, selectedDomain, selectedPublisher]);

  const displayed = filtered.slice(0, visibleCount);

  return (
    <div className="research-explorer">
      {/* Header Controls */}
      <div className="mb-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <input
            type="text"
            className="search-input"
            placeholder="Search articles, topics, or frameworks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="text-xs font-mono text-zinc-500">
            Showing {displayed.length} of {filtered.length} works
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="filter-bar">
          {DOMAINS.map((domain) => (
            <button
              key={domain}
              className={`pill-btn ${selectedDomain === domain ? "active" : ""}`}
              onClick={() => setSelectedDomain(domain)}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Publisher Filter Pills */}
        {showPublisherFilter && (
          <div className="flex items-center gap-2 pt-2 border-t border-[var(--line)]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)]">
              Outlets:
            </span>
            <div className="flex flex-wrap gap-2">
              {PUBLISHERS.map((pub) => (
                <button
                  key={pub}
                  className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                    selectedPublisher === pub
                      ? "bg-[var(--forest)] text-white border-[var(--forest)]"
                      : "bg-white/60 border-[var(--line)] text-zinc-700 hover:bg-white"
                  }`}
                  onClick={() => setSelectedPublisher(pub)}
                >
                  {pub}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((art, idx) => (
          <PublicationCard
            key={art.id || art.url || idx}
            title={art.title}
            publisher={art.publisher}
            date={art.date}
            thesis={art.thesis}
            url={art.url}
            domain={art.domain}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filtered.length && (
        <div className="mt-12 text-center">
          <button
            className="button button-outline"
            onClick={() => setVisibleCount((prev) => prev + 24)}
          >
            Load more publications ({filtered.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
