import React, { useState } from 'react';
import Image from 'next/image';
import { Pizza } from '@/data/pizzas';
import Link from 'next/link';
import { useCart } from '@/context/CardContext';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard = ({ pizza }: PizzaCardProps) => {
  // États pour stocker la taille sélectionnée et son prix
  const [selectedSize, setSelectedSize] = useState<'petite' | 'grande'>(
    'petite'
  );
  const [updatePrice, setUpdatePrice] = useState<number>(pizza.price.petite);

  const { addPizza } = useCart(); // Accéder à la fonction d'ajout au panier

  // Gérer le changement de taille
  const handleSizeChange = (size: 'petite' | 'grande') => {
    setSelectedSize(size);
    setUpdatePrice(pizza.price[size]); // Met à jour le prix affiché
  };

  // Ajouter une pizza au panier avec la taille sélectionnée
  const handleAddPizza = () => {
    addPizza({
      ...pizza, // Toutes les données de la pizza
      selectedSize,
      quantity: 1,
    });
  };

  return (
    <div className="relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl">
      <Link key={pizza.slug} href={`/pizzas-details/${pizza.slug}`}>
        <Image
          src={pizza.image}
          alt={pizza.title}
          width={300}
          height={200}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{pizza.title}</h3>
          <p className="truncate text-sm text-gray-600">{pizza.description}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between px-4 py-2">
        {/* Boutons pour changer de taille */}
        <div className="flex space-x-2">
          <button
            onClick={() => handleSizeChange('petite')}
            className={`rounded-lg px-4 py-2 font-bold ${
              selectedSize === 'petite'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Petite
          </button>
          <button
            onClick={() => handleSizeChange('grande')}
            className={`rounded-lg px-4 py-2 font-bold ${
              selectedSize === 'grande'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Grande
          </button>
        </div>
        {/* Afficher le prix en fonction de la taille sélectionnée */}
        <p className="text-lg font-semibold text-gray-800">
          Prix : {updatePrice}€
        </p>

        {/* Bouton pour ajouter au panier */}
        <button
          onClick={handleAddPizza}
          className="absolute right-0 top-0 rounded-lg bg-green-500 px-6 py-2 font-bold text-white transition-colors hover:bg-green-600"
        >
          <PlusCircleIcon className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
