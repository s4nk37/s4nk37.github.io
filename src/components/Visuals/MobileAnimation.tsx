import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import birdAnimation from '../../assets/Flying Bird Animation.json';

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
        <div
            className="mobile-animation-container"
            style={{
                position: "relative",
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
            }}
        >
            <motion.svg
                viewBox="-120 -20 440 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: 'auto', display: 'block' }}
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
                <g opacity="0.25">
                    {/* Horizontal grid lines - denser */}
                    <line x1="-100" y1="20" x2="320" y2="20" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="60" x2="320" y2="60" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="100" x2="320" y2="100" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="140" x2="320" y2="140" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="180" x2="320" y2="180" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="220" x2="320" y2="220" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="260" x2="320" y2="260" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="300" x2="320" y2="300" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="340" x2="320" y2="340" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="380" x2="320" y2="380" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="420" x2="320" y2="420" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="-100" y1="460" x2="320" y2="460" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Vertical grid lines - denser */}
                    <line x1="-20" y1="-10" x2="-20" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="20" y1="-10" x2="20" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="60" y1="-10" x2="60" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="100" y1="-10" x2="100" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="140" y1="-10" x2="140" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="180" y1="-10" x2="180" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="220" y1="-10" x2="220" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
                    <line x1="260" y1="-10" x2="260" y2="490" stroke={blueprintColor} strokeWidth="0.5" strokeDasharray="2 2" />
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

            </motion.svg>
            {/* Bird Animation */}
            <div
                style={{
                    position: "absolute",
                    top: '13%',
                    right: '-24%',
                    width: '55%',
                    // overflow: "hidden",
                    transform: "scaleX(-1)",
                    pointerEvents: "none",
                    zIndex: 10,
                }}
            >
                <DotLottieReact
                    data={birdAnimation}
                    loop
                    autoplay
                    style={
                        { scale: 1.8 }
                    }
                    segment={[0, 103]}
                    speed={0.6}
                />
            </div>
        </div>
    );
};

export default MobileAnimation;
