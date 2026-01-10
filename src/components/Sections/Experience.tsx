import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
    const experiences = [
        {
            company: "Algorizz Technologies Pvt Ltd",
            role: "Software Engineer",
            period: "Dec 2025 - Present",
            location: "Remote, Bengaluru",
            index: "01"
        },
        {
            company: "LesGo Global Pvt Ltd",
            role: "Software Development Engineer I",
            period: "Jan 2024 - Feb 2025",
            location: "Remote, Bengaluru",
            index: "02"
        },
        {
            company: "Tecocraft Infusion Pvt Ltd",
            role: "Jr. Flutter Developer",
            period: "Aug 2023 - Nov 2023",
            location: "Surat, Gujarat",
            index: "03"
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <div className="section-title-block">
                        <h2 className="section-title">
                            Professional Experience
                        </h2>
                        <div className="section-title-underline" />
                    </div>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="glass"
                            style={{
                                padding: '2.5rem',
                                borderRadius: '24px',
                                border: '1px solid var(--border-color)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >

                            {/* Left side - Role and Company */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '2rem',
                                    flexWrap: 'wrap'
                                }}>
                                    <div style={{ minWidth: '260px' }}>
                                        <div style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.9rem',
                                            letterSpacing: '0.4em',
                                            color: 'var(--text-secondary)',
                                            textTransform: 'uppercase',
                                            marginBottom: '0.75rem'
                                        }}>
                                            {exp.index}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.6rem',
                                            fontWeight: 600,
                                            color: 'var(--text-primary)',
                                            marginBottom: '0.5rem',
                                            lineHeight: 1.3
                                        }}>
                                            {exp.role}
                                        </h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            fontWeight: 600,
                                            margin: 0,
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {exp.company}
                                        </p>
                                    </div>

                                    {/* Right side - Date and Location */}
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.75rem',
                                        minWidth: '200px'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.95rem'
                                        }}>
                                            <Calendar size={16} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.95rem'
                                        }}>
                                            <MapPin size={16} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Experience;
