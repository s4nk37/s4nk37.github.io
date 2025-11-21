import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const MobileAnimation: React.FC = () => {
    const drawVariants: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.5, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: i * 0.5, duration: 0.01 }
            }
        })
    };

    const strokeColor = "var(--primary-color)";
    const blueprintColor = "var(--text-secondary)";

    return (
        <motion.svg
            viewBox="-120 -20 440 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto', maxWidth: '400px', display: 'block' }}
        >
            {/* iPhone-style Frame */}
            <motion.rect
                x="30" y="10" width="240" height="460" rx="45"
                stroke={strokeColor} strokeWidth="1"
                variants={drawVariants} custom={1} initial="hidden" animate="visible"
            />

            {/* Notch */}
            <motion.rect
                x="110" y="25" width="80" height="20" rx="10"
                stroke={strokeColor} strokeWidth="1.5"
                variants={drawVariants} custom={1.5} initial="hidden" animate="visible"
            />

            {/* Code Block Overlay */}
            <motion.g
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                {/* Glass Background */}
                <rect
                    x="-100" y="100" width="290" height="180" rx="8"
                    fill="var(--bg-color)" fillOpacity="0.9"
                    stroke={strokeColor} strokeWidth="0.5"
                />

                {/* Dart Code */}
                <text x="-80" y="130" fontFamily="monospace" fontSize="10" fill={strokeColor} opacity="0.8">
                    <tspan x="-80" dy="0">Widget build(BuildContext context) {'{'}</tspan>
                    <tspan x="-70" dy="15">return Column(</tspan>
                    <tspan x="-60" dy="15">children: [</tspan>
                    <tspan x="-50" dy="15">Text("Everything is a widget 🧩"),</tspan>
                    <tspan x="-50" dy="15">Text("Even my thoughts 🤔"),</tspan>
                    <tspan x="-50" dy="15">Text("And yes, they also rebuild 🔄"),</tspan>
                    <tspan x="-60" dy="15">],</tspan>
                    <tspan x="-70" dy="15">);</tspan>
                    <tspan x="-80" dy="15">{'}'}</tspan>
                </text>
            </motion.g>

            {/* Dashatars Image */}
            <motion.image
                href="/Dashatars.png"
                x="100" y="310" width="260" height="210"
                preserveAspectRatio="xMidYMid contain"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
            />

            {/* Decorative Elements */}
            <motion.circle
                cx="260" cy="80" r="40"
                stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.2"
                variants={drawVariants} custom={0.5} initial="hidden" animate="visible"
            />
            <motion.path
                d="M-10 400 L100 500"
                stroke={blueprintColor} strokeWidth="0.5" strokeOpacity="0.3"
                variants={drawVariants} custom={0.8} initial="hidden" animate="visible"
            />

        </motion.svg>
    );
};

export default MobileAnimation;
