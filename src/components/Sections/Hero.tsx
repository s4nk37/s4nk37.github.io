import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 'var(--spacing-xl)'
        }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: 'clamp(1.5rem, 5vw, 2rem)',
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
                        fontSize: 'clamp(3rem, 10vw, 6rem)',
                        lineHeight: '1.1',
                        marginBottom: 'var(--spacing-md)',
                        letterSpacing: '-0.02em'
                    }}
                >
                    Mobile Application <br />
                    <span className="gradient-text">Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto var(--spacing-lg)'
                    }}
                >
                    Building scalable, high-quality apps with clean architecture and seamless user experiences. Based in Surat, Gujarat, India.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                >
                    <a href="#projects" className="btn btn-primary">
                        View Work <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Contact Me <Mail size={18} style={{ marginLeft: '0.5rem' }} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
