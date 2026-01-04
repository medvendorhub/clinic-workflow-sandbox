import React from 'react';

interface SafetyBannerProps {
    message: string;
    className?: string;
}

export const SafetyBanner: React.FC<SafetyBannerProps> = ({ message, className = '' }) => {
    return (
        <div className={`safety-banner ${className}`}>
            <span>{message}</span>
        </div>
    );
};
