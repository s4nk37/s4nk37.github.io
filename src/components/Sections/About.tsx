import React from 'react';
import { motion } from 'framer-motion';
import {
    SiFlutter, SiReact, SiDart, SiTypescript, SiPython, SiFastapi, SiFirebase, SiMobx, SiSocketdotio
} from 'react-icons/si';
import { Globe } from 'lucide-react';

const About: React.FC = () => {
    const skills = [
        { name: "Flutter", icon: <SiFlutter size={20} color="#02569B" /> },
        { name: "React Native", icon: <SiReact size={20} color="#61DAFB" /> },
        { name: "Dart", icon: <SiDart size={20} color="#0175C2" /> },
        { name: "TypeScript", icon: <SiTypescript size={20} color="#3178C6" /> },
        { name: "Python", icon: <SiPython size={20} color="#3776AB" /> },
        { name: "FastAPI", icon: <SiFastapi size={20} color="#009688" /> },
        { name: "Firebase", icon: <SiFirebase size={20} color="#FFCA28" /> },
        { name: "MobX", icon: <SiMobx size={20} color="#FF9955" /> },
        { name: "REST APIs", icon: <Globe size={20} color="#4f46e5" /> },
        { name: "Socket.io", icon: <SiSocketdotio size={20} /> },
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: 'var(--spacing-lg)',
                        textAlign: 'center'
                    }}
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    <motion.div
                        className="glass"
                        style={{ padding: '2rem' }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Mobile Application Developer with 1.5 years of experience in Flutter and React Native, specializing in building scalable, high-quality applications with clean architecture and seamless user experiences.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Skilled in migrating codebases, integrating AI-driven features, and optimizing app performance. Proficient in Firebase, REST APIs, MobX, TypeScript, and Dart.
                        </p>
                    </motion.div>

                    <motion.div
                        id="skills"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-mono)' }}>Technical Skills</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.05, backgroundColor: 'var(--surface-color)' }}
                                    className="skill-card"
                                >
                                    <span>{skill.icon}</span>
                                    {skill.name}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
