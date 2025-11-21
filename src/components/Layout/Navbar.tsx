import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/50 backdrop-blur-md' : 'py-6 bg-transparent'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                    Sanket<span style={{ color: 'var(--primary-color)' }}>.</span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle (Simple implementation for now) */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ display: 'none', color: 'var(--text-primary)', fontSize: '1.5rem' }}
                >
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
