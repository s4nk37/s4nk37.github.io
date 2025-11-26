import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Code, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-title-block">
                    <h2 className="section-title">
                        About Me
                    </h2>
                    <div className="section-title-underline" />
                </div>

                <div className="about-content">
                    {/* Left Side - Headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="about-headline">
                            Building digital experiences with <br />
                            <span className="gradient-text">precision & passion.</span>
                        </h3>
                        <p className="about-text">
                            I'm a Mobile Application Developer with <strong>1.5+ years of experience</strong>, specializing in <strong>Flutter</strong> and <strong>React Native</strong>.
                            I craft scalable, high-performance applications with clean architecture and seamless user experiences.
                        </p>
                        <p className="about-text">
                            Based in <strong>Surat, Gujarat</strong>, I love solving complex problems and turning ideas into reality.
                            My focus is on creating intuitive, user-centric mobile solutions that drive engagement and business growth.
                        </p>
                    </motion.div>

                    {/* Right Side - Stats & Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="stat-grid">
                            <StatCard
                                icon={<Briefcase size={24} />}
                                label="Experience"
                                value="1.5+ Years"
                            />
                            <StatCard
                                icon={<MapPin size={24} />}
                                label="Location"
                                value="Surat, India"
                            />
                            <StatCard
                                icon={<Code size={24} />}
                                label="Expertise"
                                value="Mobile Dev"
                            />
                            <StatCard
                                icon={<GraduationCap size={24} />}
                                label="Education"
                                value="B.Tech IT"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="stat-card">
        <div className="stat-icon">{icon}</div>
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
    </div>
);

export default About;
