import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../UI/ThemeToggle';

interface NavbarProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        >
            <div className="navbar-container">
                <a href="#" className="nav-logo gradient-text" style={{
                    opacity: isScrolled ? 1 : 0,
                    pointerEvents: isScrolled ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease'
                }}>
                    Home
                </a>

                {/* Desktop Menu */}
                <div className="nav-desktop-menu">
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {link.name}
                                <span className="nav-link-indicator"></span>
                            </a>
                        ))}
                    </div>
                    <div className="nav-actions">
                        <a
                            href="https://s4nk37.medium.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Medium"
                            style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                        </a>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="nav-mobile-header">
                    <div className="nav-mobile-actions">
                        <a
                            href="https://s4nk37.medium.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Medium"
                            style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                        </a>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu-overlay glass"
                        style={{ backgroundColor: 'var(--bg-color)' }}
                    >
                        <div className="mobile-menu-content">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="mobile-nav-link"
                                    style={{ color: 'var(--text-primary)' }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
