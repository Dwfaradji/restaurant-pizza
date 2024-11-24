'use client';
import React, { Suspense, useState } from 'react';
import PizzasList from '@/components/PizzasList';
import { cardCream, cardTomate } from '@/data/pizzas';
import { useParams } from 'next/navigation';
import ButtonFilter from '@/components/ButtonFilter';

const Page = () => {
  const { slug } = useParams(); // Récupérer les paramètres dynamiques
  const allPizzas = [...cardTomate, ...cardCream];
  const btnName = { btn1: 'Toutes', btn2: 'Tomate', btn3: 'Crème fraîche' };
  const [filter, setFilter] = useState<string>(slug?.toString() || 'toutes');
  const nameFilter = {
    name1: 'toutes',
    name2: 'tomate',
    name3: 'creme-fraiche',
  };
  return (
    <div>
      <Suspense fallback={<div>Chargement des pizzas...</div>}>
        <div className="w-full bg-gray-50 py-8 px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Commandez vos pizzas
          </h2>
          <ButtonFilter
            btnName={btnName}
            filter={filter}
            setFilter={setFilter}
            filterName={nameFilter}
          />
          <PizzasList
            allPizzas={allPizzas}
            filter={filter}
            filterName={nameFilter}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
