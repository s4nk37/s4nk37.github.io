import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section" style={{ textAlign: 'center' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: 'var(--spacing-md)'
                    }}
                >
                    Let's <span className="gradient-text">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto var(--spacing-lg)',
                        fontSize: '1.2rem'
                    }}
                >
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}
                >
                    <a href="mailto:s4nk37@zohomail.in" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={18} /> s4nk37@zohomail.in
                    </a>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="https://github.com/s4nk37" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="hover:text-white">GitHub</a>
                        <a href="https://www.linkedin.com/in/s4nk37/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="hover:text-white">LinkedIn</a>
                        <a href="https://x.com/s4nk37" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="hover:text-white">X (Twitter)</a>
                        <a href="https://stackoverflow.com/users/19433434/s4nk37" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="hover:text-white">StackOverflow</a>
                    </div>
                </motion.div>

                <motion.a
                    href="mailto:s4nk37@zohomail.in"
                    className="btn btn-primary"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                >
                    Say Hello
                </motion.a>
            </div>
        </section>
    );
};

export default Contact;
