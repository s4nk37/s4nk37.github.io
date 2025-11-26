import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiTypescript, SiPython, SiFastapi, SiFirebase, SiMobx, SiSocketdotio,
    SiGit, SiPostman
} from 'react-icons/si';
import { Smartphone, Layout, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };



    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="section-title-block">
                        <h2 className="section-title">
                            Technical Skills
                        </h2>
                        <div className="section-title-underline" />
                    </div>

                    <div className="spotlight-grid">
                        <SpotlightCard>
                            <div className="skill-category-header">
                                <div className="skill-category-icon">
                                    <Smartphone size={20} />
                                </div>
                                <h3 className="skill-category-title">Mobile Stack</h3>
                            </div>
                            <div className="skill-list">
                                <SkillPill icon={<img src="/icons/flutter.svg" alt="Flutter" width="16" height="16" />} name="Flutter" />
                                <SkillPill icon={<SiReact color="#61DAFB" size={16} />} name="React Native" />
                                <SkillPill icon={<img src="/icons/dart.svg" alt="Dart" width="16" height="16" />} name="Dart" />
                            </div>
                        </SpotlightCard>

                        <SpotlightCard>
                            <div className="skill-category-header">
                                <div className="skill-category-icon">
                                    <Layout size={20} />
                                </div>
                                <h3 className="skill-category-title">Web & Backend</h3>
                            </div>
                            <div className="skill-list">
                                <SkillPill icon={<SiTypescript color="#3178C6" size={16} />} name="TypeScript" />
                                <SkillPill icon={<SiReact color="#61DAFB" size={16} />} name="React" />
                                <SkillPill icon={<SiPython color="#3776AB" size={16} />} name="Python" />
                                <SkillPill icon={<SiFastapi color="#009688" size={16} />} name="FastAPI" />
                            </div>
                        </SpotlightCard>

                        <SpotlightCard>
                            <div className="skill-category-header">
                                <div className="skill-category-icon">
                                    <Terminal size={20} />
                                </div>
                                <h3 className="skill-category-title">Tools & Cloud</h3>
                            </div>
                            <div className="skill-list">
                                <SkillPill icon={<SiFirebase color="#FFCA28" size={16} />} name="Firebase" />
                                <SkillPill icon={<SiGit color="#F05032" size={16} />} name="Git" />
                                <SkillPill icon={<SiPostman color="#FF6C37" size={16} />} name="Postman" />
                                <SkillPill icon={<SiMobx color="#FF9955" size={16} />} name="MobX" />
                                <SkillPill icon={<SiSocketdotio size={16} />} name="Socket.io" />
                            </div>
                        </SpotlightCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`spotlight-card ${className}`}
            style={{
                '--mouse-x': `${position.x}px`,
                '--mouse-y': `${position.y}px`,
                '--spotlight-opacity': opacity,
            } as React.CSSProperties}
        >
            <div className="spotlight-glow" />
            <div className="spotlight-content">{children}</div>
        </div>
    );
};

const SkillPill: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
    <div className="skill-pill">
        {icon}
        <span>{name}</span>
    </div>
);

export default Skills;
