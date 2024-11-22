import React from 'react';

interface AboutProps {
  title: string;
  description: string;
  icon: string;
}

const About = () => {
  function FeatureCard({ icon, title, description }: AboutProps) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="text-6xl">{icon}</div>
        <h3 className="text-2xl font-bold mt-4">{title}</h3>
        <p className="text-gray-200 mt-2">{description}</p>
      </div>
    );
  }

  return (
    <section className="bg-orange-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Pourquoi choisir Delizia ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon="🍕"
            title="Ingrédients frais"
            description="Nous utilisons uniquement des ingrédients de haute qualité, livrés chaque jour."
          />
          <FeatureCard
            icon="🔥"
            title="Cuisson parfaite"
            description="Nos pizzas sont cuites dans des fours à bois pour un goût authentique."
          />
          <FeatureCard
            icon="⏱️"
            title="Livraison rapide"
            description="Commandez et recevez vos pizzas chaudes en un temps record."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
