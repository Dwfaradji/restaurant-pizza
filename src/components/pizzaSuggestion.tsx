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
    <div className="w-full bg-gradient-to-r from-orange-50 via-white to-yellow-50 py-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Suggestions de pizzas à la {base}
      </h2>
      <div className="relative w-full overflow-hidden">
        {/* Animation avec duplication des éléments */}
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          {pizzas.concat(pizzas).map((pizza, index) => (
            <Link
              key={`${pizza.slug}-${index}`}
              href={`/pizzas-list/${pizza.slug}`} // Lien vers les détails de la pizza
              className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden w-72 mx-3"
            >
              <Image
                src={pizza.image}
                alt={pizza.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {pizza.title}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  {pizza.description}
                </p>
                <p className="text-sm font-semibold text-orange-500 mt-2">
                  {pizza.price}€
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
