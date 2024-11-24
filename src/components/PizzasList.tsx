import React from 'react';
import PizzaCard from '@/components/PizzaCard';
import { Pizza } from '@/data/pizzas';

interface PizzasListProps {
  allPizzas: Pizza[];
  filter: string;
  filterName: { name1: string; name2: string; name3: string };
}

export default function PizzasList({
  allPizzas,
  filter,
  filterName,
}: PizzasListProps) {
  const { name2, name3 } = filterName;
  // Filtrage des pizzas
  const filteredPizzas = allPizzas.filter((pizza: { base: string }) => {
    if (filter === name2) return pizza.base === 'Tomate';
    if (filter === name3) return pizza.base === 'Crème fraîche';
    return true; // Afficher toutes les pizzas
  });

  return (
    <div className="w-full bg-gray-50 px-4 py-8">
      {/* Affichage des pizzas filtrées */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPizzas.map((pizza) => (
          <PizzaCard key={pizza.slug} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
