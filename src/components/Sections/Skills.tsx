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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
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

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {/* Mobile Stack */}
                        <div className="skill-category">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: '#3b82f6' }}>
                                    <Smartphone size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Mobile Stack</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                                <SkillCard variants={itemVariants} icon={<img src="/icons/flutter.svg" alt="Flutter" width="20" height="20" />} name="Flutter" />
                                <SkillCard variants={itemVariants} icon={<SiReact color="#61DAFB" size={20} />} name="React Native" />
                                <SkillCard variants={itemVariants} icon={<img src="/icons/dart.svg" alt="Dart" width="20" height="20" />} name="Dart" />
                            </div>
                        </div>

                        {/* Web & Backend */}
                        <div className="skill-category">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', color: '#10b981' }}>
                                    <Layout size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Web & Backend</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                                <SkillCard variants={itemVariants} icon={<SiTypescript color="#3178C6" size={20} />} name="TypeScript" />
                                <SkillCard variants={itemVariants} icon={<SiReact color="#61DAFB" size={20} />} name="React" />
                                <SkillCard variants={itemVariants} icon={<SiPython color="#3776AB" size={20} />} name="Python" />
                                <SkillCard variants={itemVariants} icon={<SiFastapi color="#009688" size={20} />} name="FastAPI" />
                            </div>
                        </div>

                        {/* Tools & Cloud */}
                        <div className="skill-category">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '12px', color: '#f59e0b' }}>
                                    <Terminal size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Tools & Cloud</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                                <SkillCard variants={itemVariants} icon={<SiFirebase color="#FFCA28" size={20} />} name="Firebase" />
                                <SkillCard variants={itemVariants} icon={<SiGit color="#F05032" size={20} />} name="Git" />
                                <SkillCard variants={itemVariants} icon={<SiPostman color="#FF6C37" size={20} />} name="Postman" />
                                <SkillCard variants={itemVariants} icon={<SiMobx color="#FF9955" size={20} />} name="MobX" />
                                <SkillCard variants={itemVariants} icon={<SiSocketdotio size={20} />} name="Socket.io" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SkillCard: React.FC<{ icon: React.ReactNode; name: string; variants?: any }> = ({ icon, name, variants }) => (
    <motion.div
        variants={variants}
        whileHover={{ y: -5, borderColor: 'var(--primary-color)' }}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            background: `
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.01'/%3E%3C/svg%3E"),
                var(--surface-color)
            `,
            borderRadius: '12px',
            border: '0.5px solid rgba(0, 0, 0, 0.04)',
            cursor: 'default',
            transition: 'border-color 0.3s ease'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
        </div>
        <span style={{ fontWeight: 500, fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>{name}</span>
    </motion.div>
);

export default Skills;
