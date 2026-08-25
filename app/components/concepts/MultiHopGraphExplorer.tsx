'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CANONICAL_CONCEPTS, ConceptNode } from '@/app/lib/concept-corpus';

interface MultiHopGraphExplorerProps {
  initialSlug: string;
  className?: string;
}

interface GraphHopNode {
  concept: ConceptNode;
  relationship: string;
  direction: 'outgoing' | 'incoming';
  pathFrom: string; // Title of previous node
  hopLevel: 1 | 2 | 3;
}

export default function MultiHopGraphExplorer({ initialSlug, className = '' }: MultiHopGraphExplorerProps) {
  // Current focused node in the interactive explorer
  const [activeSlug, setActiveSlug] = useState<string>(initialSlug);
  // Hop history breadcrumbs for infinite deep walking
  const [historyTrail, setHistoryTrail] = useState<string[]>([initialSlug]);
  // Filter for relationship categories
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'CAUSAL' | 'EXPLANATORY' | 'SYNERGISTIC'>('ALL');

  const conceptMap = useMemo(() => {
    const map = new Map<string, ConceptNode>();
    CANONICAL_CONCEPTS.forEach((c) => map.set(c.slug, c));
    return map;
  }, []);

  const activeConcept = conceptMap.get(activeSlug) || conceptMap.get(initialSlug) || CANONICAL_CONCEPTS[0];

  // Compute 1-Hop direct neighbors (both outgoing and incoming)
  const oneHopNeighbors = useMemo(() => {
    const neighbors: GraphHopNode[] = [];
    const visited = new Set<string>([activeConcept.slug]);

    // 1. Outgoing relations
    if (activeConcept.relatedConceptSlugs) {
      activeConcept.relatedConceptSlugs.forEach((rel) => {
        const target = conceptMap.get(rel.slug);
        if (target && !visited.has(target.slug)) {
          visited.add(target.slug);
          neighbors.push({
            concept: target,
            relationship: rel.relationship || 'related_to',
            direction: 'outgoing',
            pathFrom: activeConcept.title,
            hopLevel: 1,
          });
        }
      });
    }

    // 2. Incoming relations (concepts pointing to activeConcept)
    CANONICAL_CONCEPTS.forEach((other) => {
      if (other.slug !== activeConcept.slug && !visited.has(other.slug)) {
        const matchingRel = other.relatedConceptSlugs?.find((r) => r.slug === activeConcept.slug);
        if (matchingRel) {
          visited.add(other.slug);
          neighbors.push({
            concept: other,
            relationship: matchingRel.relationship || 'referenced_by',
            direction: 'incoming',
            pathFrom: activeConcept.title,
            hopLevel: 1,
          });
        }
      }
    });

    return neighbors;
  }, [activeConcept, conceptMap]);

  // Compute 2-Hop transitive neighborhood (hops from 1-hop neighbors)
  const twoHopNeighbors = useMemo(() => {
    const twoHops: GraphHopNode[] = [];
    const visited = new Set<string>([activeConcept.slug, ...oneHopNeighbors.map((n) => n.concept.slug)]);

    oneHopNeighbors.forEach((hop1) => {
      if (hop1.concept.relatedConceptSlugs) {
        hop1.concept.relatedConceptSlugs.forEach((rel) => {
          const target = conceptMap.get(rel.slug);
          if (target && !visited.has(target.slug)) {
            visited.add(target.slug);
            twoHops.push({
              concept: target,
              relationship: rel.relationship || 'related_to',
              direction: 'outgoing',
              pathFrom: hop1.concept.title,
              hopLevel: 2,
            });
          }
        });
      }
    });

    return twoHops.slice(0, 8); // Top 8 most relevant 2-hop nodes
  }, [activeConcept, oneHopNeighbors, conceptMap]);

  // Compute 3-Hop extended ripple effects (hops from 2-hop neighbors)
  const threeHopNeighbors = useMemo(() => {
    const threeHops: GraphHopNode[] = [];
    const visited = new Set<string>([
      activeConcept.slug,
      ...oneHopNeighbors.map((n) => n.concept.slug),
      ...twoHopNeighbors.map((n) => n.concept.slug),
    ]);

    twoHopNeighbors.forEach((hop2) => {
      if (hop2.concept.relatedConceptSlugs) {
        hop2.concept.relatedConceptSlugs.forEach((rel) => {
          const target = conceptMap.get(rel.slug);
          if (target && !visited.has(target.slug)) {
            visited.add(target.slug);
            threeHops.push({
              concept: target,
              relationship: rel.relationship || 'related_to',
              direction: 'outgoing',
              pathFrom: hop2.concept.title,
              hopLevel: 3,
            });
          }
        });
      }
    });

    return threeHops.slice(0, 6); // Top 6 3-hop nodes
  }, [activeConcept, oneHopNeighbors, twoHopNeighbors, conceptMap]);

  // Filter 1-Hop items based on relationship category
  const filteredOneHops = useMemo(() => {
    if (activeFilter === 'ALL') return oneHopNeighbors;
    if (activeFilter === 'CAUSAL') {
      const causalRels = ['depends_on', 'requires', 'causes', 'predicts', 'derived_from'];
      return oneHopNeighbors.filter((n) => causalRels.includes(n.relationship));
    }
    if (activeFilter === 'EXPLANATORY') {
      const explRels = ['explains', 'measures', 'implements', 'formalizes'];
      return oneHopNeighbors.filter((n) => explRels.includes(n.relationship));
    }
    if (activeFilter === 'SYNERGISTIC') {
      const synRels = ['supports', 'extends', 'correlates_with', 'refines', 'simplifies', 'generalizes'];
      return oneHopNeighbors.filter((n) => synRels.includes(n.relationship));
    }
    return oneHopNeighbors;
  }, [oneHopNeighbors, activeFilter]);

  // Action: Hop to a new node
  const handleHop = (targetSlug: string) => {
    setActiveSlug(targetSlug);
    setHistoryTrail((prev) => [...prev, targetSlug]);
  };

  // Action: Backtrack to a specific history index
  const handleBacktrack = (historyIndex: number) => {
    const targetSlug = historyTrail[historyIndex];
    setActiveSlug(targetSlug);
    setHistoryTrail((prev) => prev.slice(0, historyIndex + 1));
  };

  // Action: Random deep walk across connected edges
  const handleRandomWalk = () => {
    const allAvailable = [...oneHopNeighbors, ...twoHopNeighbors];
    if (allAvailable.length > 0) {
      const randomTarget = allAvailable[Math.floor(Math.random() * allAvailable.length)].concept.slug;
      handleHop(randomTarget);
    } else {
      const allSlugs = CANONICAL_CONCEPTS.map((c) => c.slug).filter((s) => s !== activeConcept.slug);
      const randomSlug = allSlugs[Math.floor(Math.random() * allSlugs.length)];
      handleHop(randomSlug);
    }
  };

  return (
    <section
      className={`bg-zinc-950 text-zinc-100 border-2 border-cyan-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 ${className}`}
    >
      {/* Header & Mode Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500 text-zinc-950 uppercase tracking-widest animate-pulse">
              Infinite Relationship Navigator
            </span>
            <span className="text-xs font-mono text-zinc-400 font-bold">
              118-Node Sovereign Knowledge Graph
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-grotesk text-white tracking-tight">
            Multi-Hop Causal Traversal Engine
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl font-medium">
            Explore how concepts dynamically feed into each other across 1-hop, 2-hop, and 3-hop transitive relationships. Click any node to navigate the causal highway.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleRandomWalk}
            className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-mono font-bold rounded-xl transition shadow-sm flex items-center gap-1.5"
          >
            <span>⚡ Deep Walk</span>
          </button>
          {historyTrail.length > 1 && (
            <button
              onClick={() => handleBacktrack(historyTrail.length - 2)}
              className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono font-bold rounded-xl transition"
            >
              ↩ Back 1 Hop
            </button>
          )}
        </div>
      </div>

      {/* Infinite Hop Breadcrumbs Trail */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 space-y-2">
        <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
          Current Traversal Path ({historyTrail.length} Hops Traveled):
        </span>
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          {historyTrail.map((slug, idx) => {
            const node = conceptMap.get(slug);
            const isLast = idx === historyTrail.length - 1;
            return (
              <React.Fragment key={idx}>
                <button
                  onClick={() => handleBacktrack(idx)}
                  className={`px-3 py-1 rounded-lg transition font-bold ${
                    isLast
                      ? 'bg-cyan-500 text-zinc-950 shadow-md ring-2 ring-cyan-300'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700'
                  }`}
                >
                  {node ? node.title : slug}
                </button>
                {!isLast && <span className="text-zinc-600 font-bold">→</span>}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Focus Node Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeConcept.slug}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-cyan-950/40 border border-cyan-500/40 rounded-2xl p-6 space-y-4 shadow-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-900/80 text-cyan-200 border border-cyan-700">
                {activeConcept.domain}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-700">
                {activeConcept.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                Confidence: {Math.round(activeConcept.health.confidence * 100)}%
              </span>
            </div>

            <Link
              href={`/concepts/${activeConcept.slug}`}
              className="px-4 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 text-xs font-mono font-bold rounded-xl transition shadow-sm flex items-center gap-1"
            >
              Open Full Specification ↗
            </Link>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black font-grotesk text-white">
              {activeConcept.title}
            </h3>
            <p className="text-sm text-zinc-300 mt-2 leading-relaxed font-medium">
              {activeConcept.aeo?.shortDefinition || activeConcept.definition}
            </p>
          </div>

          {activeConcept.executableTool && (
            <div className="bg-zinc-950/80 border border-cyan-800/50 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">
                  Connected Tool:
                </span>
                <span className="font-bold text-white">{activeConcept.executableTool.name}</span>
                <span className="text-[10px] text-zinc-400 font-mono">[{activeConcept.executableTool.type}]</span>
              </div>
              <Link
                href={activeConcept.executableTool.url}
                className="text-cyan-400 hover:underline font-mono font-bold text-[11px]"
              >
                Launch ↗
              </Link>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Relationship Filters */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase mr-1">
          Relationship Filter:
        </span>
        {[
          { id: 'ALL', label: `All Hops (${oneHopNeighbors.length})` },
          { id: 'CAUSAL', label: 'Causal & Dependency' },
          { id: 'EXPLANATORY', label: 'Explanatory & Measurement' },
          { id: 'SYNERGISTIC', label: 'Synergistic & Extension' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id as any)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
              activeFilter === f.id
                ? 'bg-cyan-600 text-white'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 3-Tier Multi-Hop Grid */}
      <div className="space-y-6 pt-2">
        {/* Hop 1: Direct Connections */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              Hop Level 1
            </span>
            <h4 className="text-sm font-bold font-mono text-zinc-200 uppercase tracking-wider">
              Direct Relationships ({filteredOneHops.length})
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredOneHops.map((node, nIdx) => (
              <button
                key={nIdx}
                onClick={() => handleHop(node.concept.slug)}
                className="bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 hover:border-cyan-500/80 rounded-xl p-4 text-left transition-all duration-150 flex flex-col justify-between space-y-2 group shadow-sm"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 uppercase">
                      {node.direction === 'outgoing' ? '→' : '←'} [{node.relationship}]
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {node.concept.domain}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                    {node.concept.title}
                  </h5>
                  <p className="text-xs text-zinc-400 line-clamp-2 font-medium">
                    {node.concept.aeo?.shortDefinition || node.concept.definition}
                  </p>
                </div>
                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-cyan-400 font-bold">
                  <span>Hop into Node</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Hop 2: Transitive Neighborhood */}
        {twoHopNeighbors.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                Hop Level 2
              </span>
              <h4 className="text-sm font-bold font-mono text-zinc-300 uppercase tracking-wider">
                Transitive Neighbors (Connected via Hop 1)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {twoHopNeighbors.map((node, nIdx) => (
                <button
                  key={nIdx}
                  onClick={() => handleHop(node.concept.slug)}
                  className="bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 hover:border-indigo-500/80 rounded-xl p-3.5 text-left transition flex flex-col justify-between space-y-2 group"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-indigo-400 font-bold block">
                      via {node.pathFrom}
                    </span>
                    <h5 className="text-xs font-bold text-zinc-200 group-hover:text-indigo-300 transition line-clamp-1">
                      {node.concept.title}
                    </h5>
                    <p className="text-[11px] text-zinc-400 line-clamp-2">
                      {node.concept.aeo?.oneSentence || node.concept.definition}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 font-bold group-hover:underline">
                    Hop 2 →
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Hop 3: Extended Ripple Effects */}
        {threeHopNeighbors.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                Hop Level 3
              </span>
              <h4 className="text-sm font-bold font-mono text-zinc-400 uppercase tracking-wider">
                Extended Causal Ripple Effects
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {threeHopNeighbors.map((node, nIdx) => (
                <button
                  key={nIdx}
                  onClick={() => handleHop(node.concept.slug)}
                  className="px-3 py-1.5 bg-zinc-900 hover:bg-purple-950/60 border border-zinc-800 hover:border-purple-500/60 rounded-lg text-xs font-mono text-zinc-300 hover:text-purple-200 transition flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-purple-400">⚡</span>
                  <span>{node.concept.title}</span>
                  <span className="text-[10px] text-zinc-500">({node.concept.domain})</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
