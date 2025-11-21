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
            {/* Shimmer Gradient Definition */}
            <defs>
                <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={strokeColor} stopOpacity="0.05" />
                    <stop offset="40%" stopColor={strokeColor} stopOpacity="0.05">
                        <animate attributeName="offset" values="0;0.4;0.8;1" dur="2s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor={strokeColor} stopOpacity="0.12">
                        <animate attributeName="offset" values="0.1;0.5;0.9;1" dur="2s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="60%" stopColor={strokeColor} stopOpacity="0.05">
                        <animate attributeName="offset" values="0.2;0.6;1;1" dur="2s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor={strokeColor} stopOpacity="0.05" />
                </linearGradient>
            </defs>

            {/* iPhone-style Frame */}
            <motion.rect
                x="30" y="10" width="240" height="460" rx="45"
                stroke={strokeColor} strokeWidth="0.5"
                variants={drawVariants} custom={1} initial="hidden" animate="visible"
            />

            {/* Notch */}
            <motion.rect
                x="110" y="25" width="80" height="20" rx="10"
                stroke={strokeColor} strokeWidth="0.5"
                variants={drawVariants} custom={1.5} initial="hidden" animate="visible"
            />

            {/* Shimmer Text Lines - Top of Phone Only */}
            <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
            >
                <rect x="50" y="65" width="180" height="8" rx="4" fill="url(#shimmerGradient)" />

                <rect x="50" y="80" width="140" height="8" rx="4" fill="url(#shimmerGradient)" />

                <rect x="50" y="95" width="100" height="8" rx="4" fill="url(#shimmerGradient)" />
            </motion.g>

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

            {/* Blueprint Background Grid */}
            <g opacity="0.15">
                {/* Horizontal grid lines */}
                <line x1="-100" y1="50" x2="320" y2="50" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="-100" y1="150" x2="320" y2="150" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="-100" y1="250" x2="320" y2="250" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="-100" y1="350" x2="320" y2="350" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="-100" y1="450" x2="320" y2="450" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 4" />

                {/* Vertical grid lines */}
                <line x1="0" y1="-10" x2="0" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="100" y1="-10" x2="100" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="200" y1="-10" x2="200" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 4" />
            </g>

            {/* Blueprint Dimension Lines */}
            <g opacity="0.2">
                {/* Top dimension line */}
                <line x1="25" y1="0" x2="275" y2="0" stroke={blueprintColor} strokeWidth="0.5" />
                <line x1="25" y1="-5" x2="25" y2="5" stroke={blueprintColor} strokeWidth="0.5" />
                <line x1="275" y1="-5" x2="275" y2="5" stroke={blueprintColor} strokeWidth="0.5" />

                {/* Side dimension line */}
                <line x1="285" y1="15" x2="285" y2="465" stroke={blueprintColor} strokeWidth="0.5" />
                <line x1="280" y1="15" x2="290" y2="15" stroke={blueprintColor} strokeWidth="0.5" />
                <line x1="280" y1="465" x2="290" y2="465" stroke={blueprintColor} strokeWidth="0.5" />
            </g>

            {/* Decorative Elements */}
            <motion.circle
                cx="260" cy="80" r="40"
                stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.2"
                variants={drawVariants} custom={0.5} initial="hidden" animate="visible"
            />
            <motion.circle
                cx="-70" cy="300" r="30"
                stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.15"
                variants={drawVariants} custom={0.6} initial="hidden" animate="visible"
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
