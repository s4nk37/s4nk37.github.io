import React, { Suspense } from 'react';
import { calculateExperience } from '../Utils/experience';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Briefcase } from 'lucide-react';

const MobileAnimation = React.lazy(() => import('../Visuals/MobileAnimation'));

const Hero: React.FC = () => {
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--spacing-xl)'
        }}>
            <div className="container hero-content">
                <div className="hero-text">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontSize: 'clamp(1.1rem, 5vw, 1.5rem)',
                            color: 'var(--primary-color)',
                            marginBottom: 'var(--spacing-sm)',
                            fontWeight: '500',
                            fontFamily: 'var(--font-mono)'
                        }}
                    >
                        Hello, I'm Sanket Patel
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(1.8rem, 8vw, 4.5rem)',
                            lineHeight: '1.1',
                            marginBottom: 'var(--spacing-md)',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Software <br className="hide-on-mobile" />
                        Engineer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            marginBottom: 'var(--spacing-sm)'
                        }}
                    >
                        Building scalable, high-quality mobile apps with clean architecture and seamless user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="hero-meta"
                    >
                        <div className="hero-meta-item">
                            <MapPin size={16} color="var(--primary-color)" />
                            <span>Surat, Gujarat, India</span>
                        </div>
                        <span className="hero-meta-separator">|</span>
                        <div className="hero-meta-item">
                            <Briefcase size={16} color="var(--primary-color)" />
                            <span>{calculateExperience()} Years Exp.</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me <Mail size={18} style={{ marginLeft: '0.5rem' }} />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-visual"
                >
                    <Suspense fallback={<div style={{ height: '400px' }} />}>
                        <MobileAnimation />
                    </Suspense>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
