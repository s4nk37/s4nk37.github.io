import React from 'react';

interface BentoGridProps {
    className?: string;
    children: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
    return (
        <div
            className={`bento-grid ${className || ''}`}
        >
            {children}
        </div>
    );
};

interface BentoItemProps {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const BentoItem: React.FC<BentoItemProps> = ({
    className,
    title,
    description,
    header,
    icon,
    children,
    onClick
}) => {
    return (
        <div
            className={`bento-item glass ${className || ''}`}
            onClick={onClick}
        >
            {header}
            <div className="bento-item-content">
                {icon}
                <div className="bento-item-title">
                    {title}
                </div>
                <div className="bento-item-description">
                    {description}
                </div>
                {children}
            </div>
        </div>
    );
};
