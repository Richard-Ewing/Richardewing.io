'use client';

import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            onClick={() => setIsOpen(!isOpen)}
            className="card p-6 bg-white border border-zinc-200 rounded-2xl cursor-pointer shadow-sm hover:border-zinc-300 transition-colors select-none"
        >
            <div className="text-zinc-950 font-bold flex items-center justify-between gap-4">
                <span className="text-base sm:text-lg">{question}</span>
                <motion.span 
                    className="text-cyan-900 font-extrabold text-2xl shrink-0"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    +
                </motion.span>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="text-zinc-900 leading-relaxed font-semibold text-sm">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
