import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-6xl">{icon}</div>
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-200">{description}</p>
    </div>
  );
};

export default FeatureCard;
