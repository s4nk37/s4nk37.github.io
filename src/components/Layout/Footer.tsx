import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '4rem',
            textAlign: 'center'
        }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    © {new Date().getFullYear()} Sanket. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
