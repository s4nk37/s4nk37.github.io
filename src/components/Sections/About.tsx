import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiDart, SiTypescript, SiPython, SiFastapi, SiFirebase, SiMobx, SiSocketdotio
} from 'react-icons/si';
import { Globe } from 'lucide-react';

const FlutterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 256 317" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="3.952%" y1="26.993%" x2="75.897%" y2="52.919%" id="flutterGradient">
                <stop stopColor="#000000" offset="0%"></stop>
                <stop stopColor="#000000" stopOpacity="0" offset="100%"></stop>
            </linearGradient>
        </defs>
        <polygon fill="#47C5FB" points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"></polygon>
        <polygon fill="#47C5FB" points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"></polygon>
        <polygon fill="#00569E" points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"></polygon>
        <polygon fill="#00B5F8" points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"></polygon>
        <polygon fillOpacity="0.85" fill="url(#flutterGradient)" points="121.132827 279.531454 161.692896 266.072227 165.721875 234.941308"></polygon>
    </svg>
);

const About: React.FC = () => {
    const skills = [
        { name: "Flutter", icon: <FlutterIcon /> },
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
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                            Technical <span className="gradient-text">Skills</span>
                        </h3>
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
