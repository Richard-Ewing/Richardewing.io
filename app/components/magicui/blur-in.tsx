
'use client';

import { motion } from 'framer-motion';

const BlurIn = ({ word, className, delay = 0 }: { word: string, className?: string, delay?: number }) => {
    return (
        <motion.h1
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay }}
            className={className}
        >
            {word}
        </motion.h1>
    );
};

export default BlurIn;
