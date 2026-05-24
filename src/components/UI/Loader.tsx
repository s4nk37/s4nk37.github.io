import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Loader.css';

const Loader: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fade out after content loads
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 400);

        // Remove from DOM after fade completes
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 700);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`loader-container ${isFading ? 'fade-out' : ''}`}>
            <DotLottieReact
                src="https://lottie.host/a5448d4b-70d4-4eba-a38b-b61a242f84e9/qL4b6YaBOa.lottie"
                loop
                autoplay
                style={{ width: '300px', height: '300px' }}
            />
        </div>
    );
};

export default Loader;
