import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    isCurrent?: boolean;
}

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            company: "Algorizz Technologies Pvt Ltd",
            role: "Software Engineer",
            period: "Dec 2025 - Present",
            location: "Remote, Bengaluru",
            isCurrent: true
        },
        {
            company: "LesGo Global Pvt Ltd",
            role: "Software Development Engineer I",
            period: "Jan 2024 - Feb 2025",
            location: "Remote, Bengaluru"
        },
        {
            company: "Tecocraft Infusion Pvt Ltd",
            role: "Jr. Flutter Developer",
            period: "Aug 2023 - Nov 2023",
            location: "Surat, Gujarat"
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
                    gap: '1rem',
                    position: 'relative'
                }}>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="experience-card"
                        >
                            <div className="experience-header">
                                {/* Left Side: Role & Company */}
                                <div className="experience-role-group">
                                    <div>
                                        <div className="experience-role-title">
                                            <h3 className="experience-role">{exp.role}</h3>
                                            {exp.isCurrent && (
                                                <span className="experience-current-badge">
                                                    <span className="experience-pulse-dot" /> Present
                                                </span>
                                            )}
                                        </div>
                                        <p className="experience-company">{exp.company}</p>
                                    </div>
                                </div>

                                {/* Right Side: Date and Location */}
                                <div className="experience-meta">
                                    <div className="experience-meta-item">
                                        <Calendar size={14} color="var(--primary-color)" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="experience-meta-item">
                                        <MapPin size={14} color="var(--primary-color)" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
