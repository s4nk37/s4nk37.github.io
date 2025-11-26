import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fade out after content loads
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 800);

        // Remove from DOM after fade completes
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 1100);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`loader-container ${isFading ? 'fade-out' : ''}`}>
            <div className="loader">
                <div className="loader-circle"></div>
                <div className="loader-circle"></div>
                <div className="loader-circle"></div>
            </div>
        </div>
    );
};

export default Loader;
