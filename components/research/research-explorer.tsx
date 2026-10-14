"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CorpusArticle } from "@/app/lib/research-corpus";

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
      <div className="route-grid">
        {displayed.map((art, idx) => (
          <a
            key={art.id || art.url || idx}
            href={art.url}
            target="_blank"
            rel="noopener noreferrer"
            className="route-card reveal group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--gold)] mb-3">
                <span>{art.publisher}</span>
                <span>{art.date || "Published"}</span>
              </div>
              <h3 className="font-serif text-xl font-medium leading-snug group-hover:text-[var(--forest)] transition-colors mb-2">
                {art.title}
              </h3>
              <p className="text-xs text-[var(--muted)] line-clamp-3 leading-relaxed mb-4">
                {art.thesis}
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[var(--line)] text-xs font-semibold text-[var(--forest)]">
              <span>Read on {art.publisher}</span>
              <span className="text-[var(--gold)] group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </div>
          </a>
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
