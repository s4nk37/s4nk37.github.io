import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const radius = 18;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const docHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
            
            if (docHeight > 0) {
                const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
                setScrollProgress(progress);
            }

            setIsVisible(scrollTop > 180);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.7, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: 15 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    onClick={scrollToTop}
                    className="scroll-to-top-btn"
                    aria-label="Scroll to top of page"
                    title="Back to top"
                >
                    <svg className="scroll-progress-ring" width="44" height="44" viewBox="0 0 44 44">
                        {/* Background Track Circle */}
                        <circle
                            className="scroll-progress-track"
                            cx="22"
                            cy="22"
                            r={radius}
                        />
                        {/* Dynamic Progress Fill Circle */}
                        <circle
                            className="scroll-progress-indicator"
                            cx="22"
                            cy="22"
                            r={radius}
                            style={{
                                strokeDasharray: circumference,
                                strokeDashoffset: strokeDashoffset
                            }}
                        />
                    </svg>
                    <ArrowUp className="scroll-to-top-icon" size={17} strokeWidth={2.4} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
