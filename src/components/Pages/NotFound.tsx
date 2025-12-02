import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import SEO from '../Utils/SEO';

interface NotFoundProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ theme, toggleTheme }) => {
    return (
        <div className="app">
            <SEO
                title="404 - Page Not Found"
                description="The page you are looking for does not exist."
            />
            <Navbar theme={theme} toggleTheme={toggleTheme} simplified={true} />
            <main style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(6rem, 20vw, 12rem)',
                            fontWeight: 'bold',
                            color: 'var(--primary-color)',
                            lineHeight: 1,
                            marginBottom: '1rem',
                            opacity: 0.2
                        }}>
                            404
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                            marginBottom: '1rem'
                        }}>
                            Page Not Found
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '500px',
                            margin: '0 auto 2rem'
                        }}>
                            Oops! The page you're looking for seems to have wandered off.
                            It might have been moved, deleted, or never existed.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/" className="btn btn-primary">
                                <Home size={18} style={{ marginRight: '0.5rem' }} />
                                Go Home
                            </Link>
                            <button onClick={() => window.history.back()} className="btn btn-outline">
                                <ArrowLeft size={18} style={{ marginRight: '0.5rem' }} />
                                Go Back
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
