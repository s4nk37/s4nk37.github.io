import React from 'react';
import { Github, Linkedin, Twitter, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '2rem',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href="https://github.com/s4nk37"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '8px'
                        }}
                        className="hover:text-white"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <Github size={20} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/s4nk37/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '8px'
                        }}
                        className="hover:text-white"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <Linkedin size={20} /> LinkedIn
                    </a>
                    <a
                        href="https://x.com/s4nk37"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '8px'
                        }}
                        className="hover:text-white"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <Twitter size={20} /> X
                    </a>
                    <a
                        href="https://stackoverflow.com/users/19433434/s4nk37"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            borderRadius: '8px'
                        }}
                        className="hover:text-white"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                    >
                        <Code2 size={20} /> StackOverflow
                    </a>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    marginTop: '2rem'
                }}>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        flexWrap: 'wrap'
                    }}>
                        <span>© {new Date().getFullYear()} Sanket Patel. All rights reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
