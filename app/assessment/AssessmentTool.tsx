'use client';

import { useState } from 'react';
import Link from 'next/link';
import { QUESTIONS, DIMENSIONS } from './questions';
import { calculateScore, type AssessmentResult } from './scoring';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import { ChevronRight, ChevronLeft, AlertTriangle } from 'lucide-react';

export default function AssessmentTool() {
  const [phase, setPhase] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleStart = () => {
    setPhase('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleOptionSelect = (points: number) => {
    const question = QUESTIONS[currentQuestionIndex];
    setAnswers(prev => ({ ...prev, [question.id]: points }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalResult = calculateScore(answers);
      setResult(finalResult);
      setPhase('results');
      
      // Telemetry
      fetch('/api/tools/runs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool_id: 'ai-economics-assessment',
          score: finalResult.overallScore,
          inputs: { answers, dimensions: finalResult.dimensions }
        })
      }).catch(() => {});
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Intro Phase
  if (phase === 'intro') {
    return (
      <div className="max-w-2xl mx-auto bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm text-center">
        <h2 className="text-3xl font-grotesk font-semibold text-zinc-950 mb-4">
          AI Economics Assessment
        </h2>
        <p className="text-lg text-zinc-600 mb-8">
          Answer 15 questions about your AI infrastructure. Get an immediate AI Economics Score with estimated margin leakage, governance gaps, and recommended next steps.
        </p>
        
        <div className="flex flex-col gap-3 text-left max-w-sm mx-auto mb-8 bg-zinc-50 p-6 rounded-xl border border-zinc-100">
          <div className="flex items-center gap-3 text-zinc-700">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>15 questions across 5 dimensions</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-700">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Takes 3 to 5 minutes</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-700">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Immediate results, no login required</span>
          </div>
        </div>

        <button
          onClick={handleStart}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
        >
          Start Assessment <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // Questions Phase
  if (phase === 'questions') {
    const question = QUESTIONS[currentQuestionIndex];
    const selectedPoints = answers[question.id];
    const hasSelected = selectedPoints !== undefined;
    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
    
    // Find dimension name
    const dimensionName = DIMENSIONS.find(d => d.key === question.dimension)?.name || 'Assessment';

    return (
      <div className="max-w-2xl mx-auto bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
              {dimensionName}
            </span>
            <span className="text-sm font-mono text-zinc-500">
              {currentQuestionIndex + 1} of {QUESTIONS.length}
            </span>
          </div>
          <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8 min-h-[240px]">
          <h3 className="text-2xl font-grotesk font-medium text-zinc-950 mb-6 leading-tight">
            {question.question}
          </h3>
          
          <div className="flex flex-col gap-3">
            {question.options.map((option: any, optIdx: number) => {
              const isSelected = selectedPoints === option.points;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleOptionSelect(option.points)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isSelected 
                      ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500' 
                      : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 bg-white'
                  }`}
                >
                  <span className={`block ${isSelected ? 'text-emerald-900 font-medium' : 'text-zinc-700'}`}>
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t border-zinc-100">
          <button
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentQuestionIndex === 0 
                ? 'text-zinc-300 cursor-not-allowed opacity-0' 
                : 'text-zinc-600 hover:bg-zinc-100 opacity-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          
          <button
            onClick={handleNext}
            disabled={!hasSelected}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-colors ${
              !hasSelected 
                ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed' 
                : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            {currentQuestionIndex === QUESTIONS.length - 1 ? 'See Results' : 'Next'} 
            {currentQuestionIndex === QUESTIONS.length - 1 ? null : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    );
  }

  // Results Phase
  if (phase === 'results' && result) {
    const getScoreColor = (score: number) => {
      if (score >= 80) return 'text-emerald-500';
      if (score >= 60) return 'text-blue-500';
      if (score >= 40) return 'text-amber-500';
      if (score >= 20) return 'text-orange-500';
      return 'text-red-500';
    };

    const getScoreBgColor = (score: number) => {
      if (score >= 80) return 'bg-emerald-500';
      if (score >= 60) return 'bg-blue-500';
      if (score >= 40) return 'bg-amber-500';
      if (score >= 20) return 'bg-orange-500';
      return 'bg-red-500';
    };

    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
        {/* Score Hero */}
        <div className="bg-zinc-950 text-white rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-zinc-400 font-mono text-sm tracking-widest uppercase mb-4">
              Your AI Economics Score
            </h2>
            <div className={`text-7xl md:text-8xl font-grotesk font-bold tracking-tight mb-4 ${getScoreColor(result.overallScore)}`}>
              {result.overallScore}
            </div>
            <div className="text-xl md:text-2xl font-medium text-white mb-2">
              {result.rating}
            </div>
            <p className="text-zinc-400 max-w-lg mx-auto">
              Based on your answers, here is a detailed breakdown of your AI unit economics and infrastructure health.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dimension Breakdown */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-grotesk font-semibold text-zinc-950 mb-6">
              Dimension Breakdown
            </h3>
            <div className="space-y-5">
              {result.dimensions.map((dim) => (
                  <div key={dim.key}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-zinc-700">{dim.name}</span>
                      <span className="font-mono font-bold text-zinc-900">{dim.score}</span>
                    </div>
                    <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`${getScoreBgColor(dim.score)} h-full rounded-full`}
                        style={{ width: `${dim.score}%` }}
                      />
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Margin Leakage & Next Steps */}
          <div className="space-y-6">
            <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-400" />
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">
                    Estimated AI Margin Leakage: {result.leakageRange.min}-{result.leakageRange.max}% of AI spend
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    This represents the percentage of your AI infrastructure spend that is likely wasted through inefficient architecture, redundant API calls, or suboptimal model routing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-grotesk font-semibold text-zinc-950 mb-4">
                Recommended Action
              </h3>
              {result.overallScore < 40 ? (
                <div>
                  <p className="text-sm text-zinc-600 mb-4">Your infrastructure requires immediate review to stop margin leakage.</p>
                  <CheckoutButton productId="gut_check" label="Book a $450 Executive Diagnostic" variant="primary" />
                </div>
              ) : result.overallScore < 60 ? (
                <div>
                  <p className="text-sm text-zinc-600 mb-4">Model routing and cost controls need optimization.</p>
                  <Link href="/tools/aueb" className="block w-full text-center bg-zinc-950 hover:bg-zinc-800 text-white py-2.5 rounded-lg text-sm font-medium">
                    Run the Free AI Unit Economics Benchmark
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-zinc-600 mb-4">Your architecture is solid. Review advanced patterns to optimize further.</p>
                  <Link href="/framework" className="block w-full text-center bg-zinc-950 hover:bg-zinc-800 text-white py-2.5 rounded-lg text-sm font-medium">
                    Explore the Framework
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Top 3 Risks */}
        {result.topRisks && result.topRisks.length > 0 && (
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-grotesk font-semibold text-zinc-950 mb-4">
              Top Priority Areas
            </h3>
            <ul className="space-y-3">
              {result.topRisks.map((risk: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 text-xs font-mono font-bold text-zinc-500 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Executive Report Upsell */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-xl text-white">
          <div className="md:flex items-center justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-grotesk font-semibold mb-2">
                Get the Executive Report
              </h3>
              <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
                Download a detailed PDF with dimension-by-dimension analysis, industry benchmarks, board-ready summary, and personalized remediation priorities.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center md:items-end">
              <div className="text-3xl font-grotesk font-bold mb-3">$97</div>
              <CheckoutButton productId="executive_report" label="Get Executive Report" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
