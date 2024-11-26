'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cardTomate, cardCream } from '@/data/pizzas';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Pizza } from '@/data/type';

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
    <div className="my-6 w-full overflow-hidden bg-gradient-to-r from-orange-50 via-white to-yellow-50 py-6">
      <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
        Suggestions de pizzas à la {base}
      </h2>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true} // Permet le grab
        slidesPerView="auto" // Ajuste dynamiquement les slides selon la largeur
        spaceBetween={20} // Espacement entre les slides
        autoplay={{
          delay: 0, // Aucun délai
          disableOnInteraction: false, // Continue après interaction
        }}
        loop={true} // Animation infinie
        speed={2000} // Vitesse du défilement (augmente ou réduit la valeur pour ajuster)
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 carte sur petits écrans
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, // 2 cartes sur tablettes
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // 3 cartes sur écrans moyens
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4, // 4 cartes sur grands écrans
            spaceBetween: 30,
          },
        }}
      >
        {pizzas.concat(pizzas).map((pizza, index) => (
          <SwiperSlide
            key={`${pizza.slug}-${index}`}
            style={{ width: 'auto' }} // Ajuste automatiquement la largeur
          >
            <Link
              href={`/pizzas-details/${pizza.slug}`}
              className="w-72 overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <Image
                src={pizza.image}
                alt={pizza.title}
                width={300}
                height={200}
                className="h-40 w-full rounded-t-lg object-cover"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
