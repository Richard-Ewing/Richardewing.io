'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  ExternalLink,
  FileText,
  Layers,
} from 'lucide-react';
import {
  sanitizeSafeUrl,
  type ExecutiveActionGateProps,
  type MetricStripProps,
  type PainCostCardProps,
  type ParsedWidgetNode,
  type RoadmapPhaseCardProps,
  type StackReadinessCardProps,
} from '@/lib/sovereign-ui-stream';

interface AdvisorStreamWidgetsProps {
  widgets: ParsedWidgetNode[];
  onOpenRoadmap?: () => void;
}

const SPRING_TRANSITION = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 32,
};

const DIFFICULTY_BADGE: Record<'Easy' | 'Medium' | 'Hard', string> = {
  Easy: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  Medium: 'bg-amber-50 border-amber-200 text-amber-800',
  Hard: 'bg-rose-50 border-rose-200 text-rose-800',
};

function MetricStripView({ props }: { props: MetricStripProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_TRANSITION}
      className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-[#FAF9F6] border border-zinc-200 rounded-xl p-3"
    >
      {props.items.map((item, idx) => (
        <div
          key={`${item.label}-${idx}`}
          className="bg-white border border-zinc-200/80 rounded-lg px-3 py-2.5 shadow-2xs"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            {item.label}
          </div>
          <div className="font-mono text-lg font-bold text-[#1A1A1A] tabular-nums mt-0.5">
            {item.value}
          </div>
          {item.delta ? (
            <div className="font-mono text-[11px] font-semibold text-emerald-700 tabular-nums mt-0.5">
              {item.delta}
            </div>
          ) : null}
        </div>
      ))}
    </motion.div>
  );
}

function PainCostCardView({ props }: { props: PainCostCardProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_TRANSITION}
      className="bg-[#FAF9F6] border border-zinc-200 rounded-xl p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest font-bold text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-md">
          <AlertCircle className="w-3 h-3" />
          Operational Bleed: {props.role}
        </span>
        <div className="flex items-center gap-3 font-mono text-xs font-bold tabular-nums">
          <span className="inline-flex items-center gap-1 text-zinc-800">
            <Clock className="w-3.5 h-3.5 text-cyan-700" />
            {props.weeklyHours} hrs/wk
          </span>
          <span className="inline-flex items-center gap-1 text-rose-700">
            <DollarSign className="w-3.5 h-3.5" />
            ${Math.round(props.monthlyBurnUsd).toLocaleString()}/mo
          </span>
        </div>
      </div>
      <p className="text-xs text-zinc-700 leading-relaxed">{props.fixSummary}</p>
    </motion.div>
  );
}

function StackReadinessCardView({ props }: { props: StackReadinessCardProps }) {
  const clampedScore = Math.min(Math.max(Math.round(props.readinessScore), 1), 10);
  const pct = clampedScore * 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_TRANSITION}
      className="bg-white border border-zinc-200 rounded-xl p-4 shadow-2xs"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-700 flex-shrink-0" />
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#1A1A1A]">
            {props.category}
          </span>
        </div>
        <span className="font-mono text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded tabular-nums">
          Readiness {clampedScore}/10
        </span>
      </div>
      <div className="text-xs font-semibold text-zinc-800 mb-2">
        Active Stack: <span className="font-normal text-zinc-700">{props.currentTools}</span>
      </div>
      <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden mb-2.5">
        <div
          className="h-full bg-cyan-600 rounded-full transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-zinc-700 leading-relaxed">{props.integrationNote}</p>
    </motion.div>
  );
}

function RoadmapPhaseCardView({ props }: { props: RoadmapPhaseCardProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_TRANSITION}
      className="bg-[#FAF9F6] border border-zinc-200 rounded-xl p-4 space-y-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-[#111827] text-white font-mono text-[10px] uppercase tracking-widest font-bold">
            {props.timeline}
          </span>
          <h4 className="font-bold text-sm text-[#1A1A1A]">{props.name}</h4>
        </div>
        <span className="font-mono text-[11px] text-zinc-600 tabular-nums">
          {props.actions.length} {props.actions.length === 1 ? 'action' : 'actions'}
        </span>
      </div>

      <div className="space-y-2.5">
        {props.actions.map((action, idx) => {
          const safeToolHref = action.toolUrl ? sanitizeSafeUrl(action.toolUrl) : null;
          const badgeStyle = DIFFICULTY_BADGE[action.difficulty] || DIFFICULTY_BADGE.Medium;

          return (
            <div
              key={`${action.title}-${idx}`}
              className="bg-white border border-zinc-200 rounded-lg p-3"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-1.5 font-bold text-xs text-[#1A1A1A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{action.title}</span>
                </div>
                <span className={`px-2 py-0.5 rounded border font-mono text-[10px] font-bold ${badgeStyle}`}>
                  {action.difficulty}
                </span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed mb-2">{action.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-zinc-100 font-mono text-[11px] tabular-nums">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-zinc-500">Tool</span>
                  {safeToolHref ? (
                    <a
                      href={safeToolHref}
                      target={safeToolHref.startsWith('http') ? '_blank' : undefined}
                      rel={safeToolHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-bold text-cyan-700 hover:underline inline-flex items-center gap-1"
                    >
                      {action.tool}
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <span className="font-bold text-zinc-800">{action.tool}</span>
                  )}
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-zinc-500">Cost</span>
                  <span className="font-bold text-zinc-800">{action.monthlyCost}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-zinc-500">Impact</span>
                  <span className="font-bold text-emerald-700">{action.estimatedRoi}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-zinc-500">Saved</span>
                  <span className="font-bold text-zinc-800">{action.hoursSavedWeekly} hrs/wk</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function ExecutiveActionGateView({
  props,
  onOpenRoadmap,
}: {
  props: ExecutiveActionGateProps;
  onOpenRoadmap?: () => void;
}) {
  const safeHref = sanitizeSafeUrl(props.ctaHref) || '/schedule?source=ai-advisor';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_TRANSITION}
      className="bg-[#111827] text-white rounded-xl p-4 border border-zinc-800 shadow-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-cyan-300">
            <Activity className="w-3 h-3" />
            Executive Action Gate
            {props.projectedImpact ? ` · ${props.projectedImpact}` : ''}
          </div>
          <p className="text-sm font-bold text-white leading-snug">{props.headline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onOpenRoadmap ? (
            <button
              type="button"
              onClick={onOpenRoadmap}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-800 text-zinc-100 hover:bg-zinc-700 font-mono text-xs font-bold transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              PDF Boardroom View
            </button>
          ) : null}
          <a
            href={safeHref}
            className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-zinc-950 hover:bg-cyan-400 font-mono text-xs font-bold transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            {props.ctaLabel || 'Book Executive Review'}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function AdvisorStreamWidgets({
  widgets,
  onOpenRoadmap,
}: AdvisorStreamWidgetsProps) {
  const renderable = widgets.filter((w) => w.type !== 'AdvisoryBoard');
  if (renderable.length === 0) return null;

  return (
    <div className="mt-3 space-y-2.5">
      {renderable.map((widget) => {
        switch (widget.type) {
          case 'MetricStrip':
            return <MetricStripView key={widget.id} props={widget.props as MetricStripProps} />;
          case 'PainCostCard':
            return <PainCostCardView key={widget.id} props={widget.props as PainCostCardProps} />;
          case 'StackReadinessCard':
            return (
              <StackReadinessCardView
                key={widget.id}
                props={widget.props as StackReadinessCardProps}
              />
            );
          case 'RoadmapPhaseCard':
            return (
              <RoadmapPhaseCardView
                key={widget.id}
                props={widget.props as RoadmapPhaseCardProps}
              />
            );
          case 'ExecutiveActionGate':
            return (
              <ExecutiveActionGateView
                key={widget.id}
                props={widget.props as ExecutiveActionGateProps}
                onOpenRoadmap={onOpenRoadmap}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
