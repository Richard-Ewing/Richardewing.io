'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Download,
    CheckCircle,
    Clock,
    DollarSign,
    TrendingUp,
    AlertTriangle,
    ArrowRight,
    Sparkles,
    Brain,
    Zap,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    FileText,
    Loader2,
} from 'lucide-react';
import jsPDF from 'jspdf';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RoadmapAction {
    title: string;
    description: string;
    tool: string;
    tool_url: string;
    estimated_roi: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    monthly_cost: string;
    time_to_implement: string;
    hours_saved_weekly: number;
}

interface RoadmapPhase {
    name: string;
    timeline: string;
    actions: RoadmapAction[];
}

interface RoadmapData {
    executive_summary: string;
    estimated_weekly_hours_saved: number;
    estimated_monthly_roi: number;
    phases: RoadmapPhase[];
    total_monthly_tool_cost: string;
    key_risks: string[];
    next_steps: string[];
}

interface BusinessProfile {
    name?: string;
    industry?: string;
    [key: string]: unknown;
}

interface Props {
    roadmap: RoadmapData;
    businessProfile: BusinessProfile;
    sessionId: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const difficultyConfig = {
    Easy: { color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200', icon: '🟢' },
    Medium: { color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200', icon: '🟡' },
    Hard: { color: 'text-rose-700', bg: 'bg-rose-50 border-rose-200', icon: '🔴' },
};

const phaseColors = [
    { gradient: 'from-cyan-500/10 to-blue-500/10', border: 'border-cyan-500/30', accent: 'text-cyan-700', badge: 'bg-cyan-50 border-cyan-200 text-cyan-700' },
    { gradient: 'from-violet-500/10 to-purple-500/10', border: 'border-violet-500/30', accent: 'text-violet-700', badge: 'bg-violet-50 border-violet-200 text-violet-700' },
    { gradient: 'from-amber-500/10 to-orange-500/10', border: 'border-amber-500/30', accent: 'text-amber-700', badge: 'bg-amber-50 border-amber-200 text-amber-700' },
    { gradient: 'from-emerald-500/10 to-green-500/10', border: 'border-emerald-500/30', accent: 'text-emerald-700', badge: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function AdvisorRoadmap({ roadmap, businessProfile, sessionId }: Props) {
    const [expandedPhase, setExpandedPhase] = useState<number | null>(0);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const roadmapRef = useRef<HTMLDivElement>(null);

    const totalActions = roadmap.phases?.reduce(
        (acc, p) => acc + (p.actions?.length || 0),
        0
    ) || 0;

    // PDF generation using jsPDF
    const generatePDF = async () => {
        setIsGeneratingPdf(true);
        try {
            const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
            const pageWidth = doc.internal.pageSize.getWidth();
            const margin = 20;
            const contentWidth = pageWidth - margin * 2;
            let y = 20;

            const addPage = () => {
                doc.addPage();
                y = 20;
            };

            const checkPageBreak = (needed: number) => {
                if (y + needed > 270) addPage();
            };

            // Title
            doc.setFontSize(24);
            doc.setFont('helvetica', 'bold');
            doc.text('AI Integration Roadmap', margin, y);
            y += 10;

            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(100, 100, 100);
            doc.text(`Prepared for: ${businessProfile.name || 'Your Business'}`, margin, y);
            y += 6;
            doc.text(`Industry: ${businessProfile.industry || 'General'}`, margin, y);
            y += 6;
            doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`, margin, y);
            y += 6;
            doc.text(`Session: ${sessionId.slice(0, 8)}`, margin, y);
            y += 12;

            // Executive Summary
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text('Executive Summary', margin, y);
            y += 8;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            const summaryLines = doc.splitTextToSize(roadmap.executive_summary, contentWidth);
            doc.text(summaryLines, margin, y);
            y += summaryLines.length * 5 + 8;

            // Key Metrics
            checkPageBreak(25);
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text('Key Metrics', margin, y);
            y += 8;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(`• Estimated Weekly Hours Saved: ${roadmap.estimated_weekly_hours_saved} hours`, margin, y); y += 6;
            doc.text(`• Estimated Monthly ROI: $${roadmap.estimated_monthly_roi?.toLocaleString() || '0'}`, margin, y); y += 6;
            doc.text(`• Total Monthly Tool Cost: ${roadmap.total_monthly_tool_cost}`, margin, y); y += 6;
            doc.text(`• Total Action Items: ${totalActions}`, margin, y); y += 12;

            // Phases
            for (const phase of roadmap.phases || []) {
                checkPageBreak(30);
                doc.setFontSize(14);
                doc.setFont('helvetica', 'bold');
                doc.text(`${phase.name} (${phase.timeline})`, margin, y);
                y += 8;

                for (const action of phase.actions || []) {
                    checkPageBreak(35);

                    doc.setFontSize(11);
                    doc.setFont('helvetica', 'bold');
                    doc.text(`• ${action.title}`, margin + 4, y);
                    y += 6;

                    doc.setFontSize(9);
                    doc.setFont('helvetica', 'normal');
                    const descLines = doc.splitTextToSize(action.description, contentWidth - 10);
                    doc.text(descLines, margin + 8, y);
                    y += descLines.length * 4 + 2;

                    doc.setTextColor(80, 80, 80);
                    doc.text(`Tool: ${action.tool} | Cost: ${action.monthly_cost} | ROI: ${action.estimated_roi}`, margin + 8, y);
                    y += 4;
                    doc.text(`Difficulty: ${action.difficulty} | Time to Implement: ${action.time_to_implement} | Hours Saved/Week: ${action.hours_saved_weekly}`, margin + 8, y);
                    doc.setTextColor(0, 0, 0);
                    y += 8;
                }
                y += 4;
            }

            // Key Risks
            if (roadmap.key_risks?.length) {
                checkPageBreak(20 + roadmap.key_risks.length * 6);
                doc.setFontSize(14);
                doc.setFont('helvetica', 'bold');
                doc.text('Key Risks', margin, y);
                y += 8;

                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');
                for (const risk of roadmap.key_risks) {
                    const riskLines = doc.splitTextToSize(`⚠️  ${risk}`, contentWidth);
                    doc.text(riskLines, margin, y);
                    y += riskLines.length * 5 + 2;
                }
                y += 6;
            }

            // Next Steps
            if (roadmap.next_steps?.length) {
                checkPageBreak(20 + roadmap.next_steps.length * 6);
                doc.setFontSize(14);
                doc.setFont('helvetica', 'bold');
                doc.text('Next Steps', margin, y);
                y += 8;

                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');
                for (let i = 0; i < roadmap.next_steps.length; i++) {
                    const stepLines = doc.splitTextToSize(`${i + 1}. ${roadmap.next_steps[i]}`, contentWidth);
                    doc.text(stepLines, margin, y);
                    y += stepLines.length * 5 + 2;
                }
            }

            // Footer
            checkPageBreak(15);
            y += 10;
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text('Generated by Richard Ewing AI Integration Advisor | www.richardewing.io/ai-integration/advisor', margin, y);
            doc.text('Powered by Exogram AI Governance + Google Gemini', margin, y + 4);

            // Save
            const filename = `AI-Integration-Roadmap-${businessProfile.name?.replace(/\s+/g, '-') || 'Business'}-${new Date().toISOString().slice(0, 10)}.pdf`;
            doc.save(filename);
        } catch (error) {
            console.error('PDF generation error:', error);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    return (
        <div ref={roadmapRef} className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-mono text-xs tracking-widest font-bold uppercase">
                    <Sparkles size={12} /> Roadmap Generated
                </div>
                <h2 className="text-3xl font-grotesk font-bold text-[#1A1A1A] mb-2">
                    Your AI Integration Roadmap
                </h2>
                <p className="text-zinc-500 max-w-xl mx-auto text-sm">
                    {businessProfile.name ? `Personalized for ${businessProfile.name}` : 'Your personalized AI integration plan'}{' '}
                    {businessProfile.industry ? `in ${businessProfile.industry}` : ''}
                </p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            >
                <div className="bg-white rounded-2xl border border-zinc-200 p-4 text-center shadow-sm">
                    <Clock className="w-5 h-5 text-cyan-600 mx-auto mb-1.5" />
                    <div className="text-2xl font-bold text-[#1A1A1A]">{roadmap.estimated_weekly_hours_saved || 0}</div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Hours Saved/Week</div>
                </div>
                <div className="bg-white rounded-2xl border border-zinc-200 p-4 text-center shadow-sm">
                    <DollarSign className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
                    <div className="text-2xl font-bold text-[#1A1A1A]">${(roadmap.estimated_monthly_roi || 0).toLocaleString()}</div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Monthly ROI</div>
                </div>
                <div className="bg-white rounded-2xl border border-zinc-200 p-4 text-center shadow-sm">
                    <TrendingUp className="w-5 h-5 text-violet-600 mx-auto mb-1.5" />
                    <div className="text-2xl font-bold text-[#1A1A1A]">{totalActions}</div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Action Items</div>
                </div>
                <div className="bg-white rounded-2xl border border-zinc-200 p-4 text-center shadow-sm">
                    <Zap className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
                    <div className="text-2xl font-bold text-[#1A1A1A]">{roadmap.total_monthly_tool_cost || '$0'}</div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Tool Cost/Month</div>
                </div>
            </motion.div>

            {/* Executive Summary */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-2xl border border-cyan-500/20 p-6 shadow-sm"
            >
                <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-[#1A1A1A] mb-2 text-sm uppercase tracking-wider font-mono">Executive Summary</h3>
                        <p className="text-sm text-zinc-700 leading-relaxed">{roadmap.executive_summary}</p>
                    </div>
                </div>
            </motion.div>

            {/* Phases */}
            <div className="space-y-4">
                {(roadmap.phases || []).map((phase, phaseIndex) => {
                    const colors = phaseColors[phaseIndex % phaseColors.length];
                    const isExpanded = expandedPhase === phaseIndex;

                    return (
                        <motion.div
                            key={phaseIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + phaseIndex * 0.1 }}
                            className={`bg-gradient-to-br ${colors.gradient} rounded-2xl border ${colors.border} shadow-sm overflow-hidden`}
                        >
                            {/* Phase Header */}
                            <button
                                onClick={() => setExpandedPhase(isExpanded ? null : phaseIndex)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/30 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`px-2.5 py-1 rounded-lg border text-xs font-bold font-mono ${colors.badge}`}>
                                        {phase.timeline}
                                    </span>
                                    <h3 className="font-bold text-[#1A1A1A] text-lg">{phase.name}</h3>
                                    <span className="text-xs text-zinc-500 font-mono">{phase.actions?.length || 0} actions</span>
                                </div>
                                {isExpanded ? <ChevronUp className="w-5 h-5 text-zinc-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
                            </button>

                            {/* Phase Actions */}
                            {isExpanded && (
                                <div className="px-5 pb-5 space-y-3">
                                    {(phase.actions || []).map((action, actionIndex) => {
                                        const diffConfig = difficultyConfig[action.difficulty] || difficultyConfig.Medium;

                                        return (
                                            <div key={actionIndex} className="bg-white/80 rounded-xl border border-zinc-200 p-4">
                                                <div className="flex items-start justify-between gap-3 mb-2">
                                                    <h4 className="font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-zinc-300 flex-shrink-0" />
                                                        {action.title}
                                                    </h4>
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono border ${diffConfig.bg} ${diffConfig.color}`}>
                                                        {diffConfig.icon} {action.difficulty}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-zinc-600 mb-3 ml-6 leading-relaxed">{action.description}</p>
                                                <div className="ml-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
                                                    <div className="text-xs">
                                                        <span className="text-zinc-400 font-mono uppercase text-[9px] block">Tool</span>
                                                        {action.tool_url ? (
                                                            <a href={action.tool_url} target="_blank" rel="noopener noreferrer" className="font-bold text-cyan-700 hover:underline flex items-center gap-1">
                                                                {action.tool} <ExternalLink className="w-2.5 h-2.5" />
                                                            </a>
                                                        ) : (
                                                            <span className="font-bold text-zinc-800">{action.tool}</span>
                                                        )}
                                                    </div>
                                                    <div className="text-xs">
                                                        <span className="text-zinc-400 font-mono uppercase text-[9px] block">Cost</span>
                                                        <span className="font-bold text-zinc-800">{action.monthly_cost}</span>
                                                    </div>
                                                    <div className="text-xs">
                                                        <span className="text-zinc-400 font-mono uppercase text-[9px] block">ROI</span>
                                                        <span className="font-bold text-emerald-700">{action.estimated_roi}</span>
                                                    </div>
                                                    <div className="text-xs">
                                                        <span className="text-zinc-400 font-mono uppercase text-[9px] block">Time</span>
                                                        <span className="font-bold text-zinc-800">{action.time_to_implement}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Key Risks */}
            {roadmap.key_risks?.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-rose-50 rounded-2xl border border-rose-200 p-5"
                >
                    <h3 className="font-bold text-rose-800 text-sm uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Key Risks to Monitor
                    </h3>
                    <ul className="space-y-2">
                        {roadmap.key_risks.map((risk, i) => (
                            <li key={i} className="text-xs text-rose-700 flex items-start gap-2">
                                <span className="text-rose-400 mt-0.5">•</span> {risk}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Next Steps */}
            {roadmap.next_steps?.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-emerald-50 rounded-2xl border border-emerald-200 p-5"
                >
                    <h3 className="font-bold text-emerald-800 text-sm uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" /> Your Next Steps
                    </h3>
                    <ol className="space-y-2">
                        {roadmap.next_steps.map((step, i) => (
                            <li key={i} className="text-xs text-emerald-700 flex items-start gap-2">
                                <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-[10px] font-bold flex-shrink-0">{i + 1}</span>
                                {step}
                            </li>
                        ))}
                    </ol>
                </motion.div>
            )}

            {/* Actions Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
            >
                <button
                    onClick={generatePDF}
                    disabled={isGeneratingPdf}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white font-bold rounded-xl text-sm hover:bg-zinc-800 transition-colors disabled:opacity-60"
                >
                    {isGeneratingPdf ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Generating PDF...</>
                    ) : (
                        <><Download className="w-4 h-4" /> Download PDF Report</>
                    )}
                </button>
                <a
                    href="/ai-integration/advisor"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 text-zinc-700 font-bold rounded-xl text-sm hover:bg-zinc-50 transition-colors"
                >
                    <FileText className="w-4 h-4" /> Start New Consultation
                </a>
            </motion.div>

            {/* Attribution */}
            <div className="text-center py-4">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    Powered by Richard Ewing AI Integration Advisory · Exogram Governance · Google Gemini
                </p>
            </div>
        </div>
    );
}
