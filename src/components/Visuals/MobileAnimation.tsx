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
            width="300"
            height="480"
            viewBox="-20 -20 340 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
            {/* Subtle Blueprint/Construction Lines */}
            <motion.line
                x1="-10" y1="10" x2="310" y2="10"
                stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.3"
                variants={drawVariants} custom={0} initial="hidden" animate="visible"
            />
            <motion.line
                x1="-10" y1="470" x2="310" y2="470"
                stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.3"
                variants={drawVariants} custom={0.2} initial="hidden" animate="visible"
            />
            <motion.line
                x1="10" y1="-10" x2="10" y2="490"
                stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.3"
                variants={drawVariants} custom={0.4} initial="hidden" animate="visible"
            />
            <motion.line
                x1="290" y1="-10" x2="290" y2="490"
                stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.3"
                variants={drawVariants} custom={0.6} initial="hidden" animate="visible"
            />

            {/* iPhone-style Frame */}
            <motion.rect
                x="10" y="10" width="280" height="460" rx="45"
                stroke={strokeColor} strokeWidth="3"
                variants={drawVariants} custom={1} initial="hidden" animate="visible"
            />

            {/* Notch / Dynamic Island Area */}
            <motion.rect
                x="100" y="25" width="100" height="25" rx="12.5"
                stroke={strokeColor} strokeWidth="1.5"
                variants={drawVariants} custom={1.5} initial="hidden" animate="visible"
            />

            {/* Flutter Logo (Accurate Linear Geometry) */}
            <motion.g transform="translate(90, 130) scale(0.9)">
                {/* Top Wing */}
                <motion.path
                    d="M45 10 L75 40 L45 70"
                    stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    variants={drawVariants} custom={2.0} initial="hidden" animate="visible"
                />
                {/* Bottom Wing & Triangle */}
                <motion.path
                    d="M45 80 L75 50 L105 80 L75 110 L45 80"
                    stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    variants={drawVariants} custom={2.3} initial="hidden" animate="visible"
                />
                {/* Construction Lines for Logo */}
                <motion.line
                    x1="20" y1="10" x2="120" y2="10"
                    stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" strokeOpacity="0.3"
                    variants={drawVariants} custom={2.1} initial="hidden" animate="visible"
                />
                <motion.line
                    x1="20" y1="110" x2="120" y2="110"
                    stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" strokeOpacity="0.3"
                    variants={drawVariants} custom={2.4} initial="hidden" animate="visible"
                />
            </motion.g>

            {/* React Native Logo (Linear/Outline) */}
            <motion.g transform="translate(90, 280) scale(0.9)">
                <motion.ellipse
                    cx="60" cy="60" rx="55" ry="22" transform="rotate(30 60 60)"
                    stroke={strokeColor} strokeWidth="1.5"
                    variants={drawVariants} custom={3.0} initial="hidden" animate="visible"
                />
                <motion.ellipse
                    cx="60" cy="60" rx="55" ry="22" transform="rotate(-30 60 60)"
                    stroke={strokeColor} strokeWidth="1.5"
                    variants={drawVariants} custom={3.2} initial="hidden" animate="visible"
                />
                <motion.ellipse
                    cx="60" cy="60" rx="55" ry="22" transform="rotate(90 60 60)"
                    stroke={strokeColor} strokeWidth="1.5"
                    variants={drawVariants} custom={3.4} initial="hidden" animate="visible"
                />
                <motion.circle
                    cx="60" cy="60" r="9"
                    stroke={strokeColor} strokeWidth="1.5"
                    variants={drawVariants} custom={3.6} initial="hidden" animate="visible"
                />
                {/* Construction Circle for Logo */}
                <motion.circle
                    cx="60" cy="60" r="65"
                    stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" strokeOpacity="0.3"
                    variants={drawVariants} custom={3.1} initial="hidden" animate="visible"
                />
            </motion.g>

            {/* Connecting Line */}
            <motion.line
                x1="150" y1="220" x2="150" y2="280"
                stroke={strokeColor} strokeWidth="0.5" strokeDasharray="4 4"
                variants={drawVariants} custom={2.8} initial="hidden" animate="visible"
            />

        </motion.svg>
    );
};

export default MobileAnimation;
