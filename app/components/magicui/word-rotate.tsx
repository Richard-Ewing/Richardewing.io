
'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function WordRotate({
    words,
    duration = 2500,
    className,
    containerClassName, // Added containerClassName
}: {
    words: string[];
    duration?: number;
    className?: string; // Applied to the text (h1)
    containerClassName?: string; // Applied to the wrapper (div)
}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);
        return () => clearInterval(interval);
    }, [words, duration]);

    return (
        <div className={`overflow-hidden py-2 ${containerClassName || ''}`}>
            <AnimatePresence mode="wait">
                <motion.h1
                    key={words[index]}
                    className={className}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {words[index]}
                </motion.h1>
            </AnimatePresence>
        </div>
    );
}
