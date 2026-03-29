'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Clock, BookOpen } from 'lucide-react';

interface ParsedContent {
    syllabus: string;
    lessons: { title: string, html: string }[];
}

interface ModuleStepperProps {
    parsedContent: ParsedContent;
    children: React.ReactNode; // The Mark Complete button
}

export default function ModuleStepper({ parsedContent, children }: ModuleStepperProps) {
    const [currentStep, setCurrentStep] = useState(0);
    
    // total steps = syllabus (0) + lessons (1..N)
    const totalSteps = 1 + parsedContent.lessons.length;
    const isLastStep = currentStep === totalSteps - 1;

    // Reset scroll when step changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep < totalSteps - 1) setCurrentStep(v => v + 1);
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(v => v - 1);
    };

    const renderProgressBar = () => {
        return (
            <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                        <BookOpen className="w-3 h-3" />
                        {currentStep === 0 ? 'Syllabus Introduction' : `Lesson ${currentStep} of ${totalSteps - 1}`}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-2 py-1 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-500" />
                        2 MIN READ
                    </span>
                </div>
                <div className="w-full flex gap-1 h-2">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => setCurrentStep(i)}
                            className={`flex-1 rounded-full cursor-pointer transition-all duration-300 ${
                                i < currentStep ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' :
                                i === currentStep ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' :
                                'bg-zinc-800 hover:bg-zinc-700'
                            }`}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full pb-20">
            {/* The Top Navigation Bar */}
            {totalSteps > 1 && renderProgressBar()}

            {/* The Active Content Payload */}
            {currentStep === 0 ? (
                <div className="prose prose-invert max-w-none ai-content syllabus-view" dangerouslySetInnerHTML={{ __html: parsedContent.syllabus }} />
            ) : (
                <div className="space-y-8">
                    {/* Render actual lesson */}
                    <div className="prose prose-invert max-w-none ai-content lesson-view" dangerouslySetInnerHTML={{ __html: parsedContent.lessons[currentStep - 1].html }} />
                </div>
            )}

            {/* The Footer Action Dashboard */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-50">
                <button 
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-black border border-white/10 text-white hover:bg-zinc-900"
                >
                    <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                {isLastStep ? (
                    <div className="w-full sm:w-auto">
                        {children}
                    </div>
                ) : (
                    <button 
                        onClick={handleNext}
                        className="w-full sm:w-auto px-10 py-4 rounded-xl bg-cyan-500 text-black font-bold flex items-center justify-center gap-2 transition-all hover:bg-cyan-400 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] uppercase tracking-widest text-sm"
                    >
                        Next Lesson <ChevronRight className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
