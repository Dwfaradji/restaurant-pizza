'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cardTomate, cardCream, Pizza } from '@/data/pizzas';
import Link from 'next/link'; // Permet de rendre les cartes cliquables

export default function PizzaSuggestions({ base }: { base: string }) {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  // Filtrer les pizzas similaires selon la base
  useEffect(() => {
    if (base === 'Tomate') {
      setPizzas(cardTomate);
    } else if (base === 'Crème fraîche') {
      setPizzas(cardCream);
    } else {
      setPizzas([]);
    }
  }, [base]);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-orange-50 via-white to-yellow-50 py-6">
      <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
        Suggestions de pizzas à la {base}
      </h2>
      <div className="relative w-full overflow-hidden">
        {/* Animation avec duplication des éléments */}
        <div className="flex items-center gap-6 whitespace-nowrap">
          {pizzas.concat(pizzas).map((pizza, index) => (
            <Link
              key={`${pizza.slug}-${index}`}
              href={`/pizzas-details/${pizza.slug}`} // Lien vers les détails de la pizza
              className="mx-3 w-72 shrink-0 overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <Image
                src={pizza.image}
                alt={pizza.title}
                width={300}
                height={200}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {pizza.title}
                </h3>
                <p className="truncate text-sm text-gray-600">
                  {pizza.description}
                </p>
                <p className="mt-2 text-sm font-semibold text-orange-500">
                  {pizza.price.petite}€
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
