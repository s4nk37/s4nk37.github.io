import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const email = "s4nk37@zohomail.in";

    const handleCopy = async (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (err) {
            console.error("Failed to copy email: ", err);
        }
    };

    return (
        <section id="contact" className="section" style={{ textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-title-block center">
                        <h2 className="section-title">
                            Let's Connect
                        </h2>
                        <div className="section-title-underline" />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '580px',
                        margin: '0 auto var(--spacing-lg)',
                        fontSize: '1rem',
                        lineHeight: '1.7'
                    }}
                >
                    I am always open to discussing new mobile projects, creative ideas, or engineering opportunities. Feel free to reach out!
                </motion.p>

                {/* Email Card with 1-Click Copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.65rem',
                        marginBottom: '2rem'
                    }}
                >
                    <div
                        onClick={handleCopy}
                        className="contact-email-card"
                        role="button"
                        tabIndex={0}
                        aria-label="Copy email address to clipboard"
                        title="Click to copy email"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleCopy(e);
                            }
                        }}
                    >
                        <div className="contact-email-icon">
                            <Mail size={18} />
                        </div>
                        <span className="contact-email-text">{email}</span>
                        <div className="contact-copy-action">
                            {copied ? (
                                <span className="contact-copy-badge copied">
                                    <Check size={13} /> Copied!
                                </span>
                            ) : (
                                <span className="contact-copy-badge">
                                    <Copy size={13} /> Copy
                                </span>
                            )}
                        </div>
                    </div>

                    <AnimatePresence>
                        {copied && (
                            <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -4, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="contact-toast"
                            >
                                <Check size={14} color="#4ade80" />
                                <span>Email copied to clipboard!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div>
                    <motion.a
                        href={`mailto:${email}`}
                        className="btn btn-primary"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <Send size={16} /> Say Hello
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
