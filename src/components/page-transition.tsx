'use client';

import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='min-h-full'>
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
