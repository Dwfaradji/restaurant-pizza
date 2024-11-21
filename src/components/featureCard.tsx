import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard = ({icon, title, description}: FeatureCardProps) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="text-6xl">{icon}</div>
            <h3 className="text-2xl font-bold mt-4">{title}</h3>
            <p className="text-gray-200 mt-2">{description}</p>
        </div>
    );
};

export default FeatureCard;

