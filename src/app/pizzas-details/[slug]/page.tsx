'use client';

import { Pizza, allPizzas } from '@/data/pizzas';
import Image from 'next/image';
import PizzaSuggestions from '@/components/pizzaSuggestion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CardContext';
import { useParams } from 'next/navigation';
import { PlusCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import CalorieProgress from '@/components/CalorieProgress';

export default function PizzaDetails() {
  // States
  const [updatePrice, setUpdatePrice] = useState<number>(0);
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const [selectedSize, setSelectedSize] = useState<'petite' | 'grande'>(
    'petite'
  );

  // Params et contexte
  const { slug } = useParams();
  const { addPizza } = useCart();

  // Récupération des données de la pizza
  useEffect(() => {
    if (!slug) return;
    const foundPizza = allPizzas.find((p) => p.slug === slug) || null;
    setPizza(foundPizza);
  }, [slug]);

  // Met à jour le prix selon la taille sélectionnée
  useEffect(() => {
    if (pizza) setUpdatePrice(pizza.price[selectedSize]);
  }, [pizza, selectedSize]);

  // Gestion du changement de taille
  const handleSizeChange = (size: 'petite' | 'grande') => {
    setSelectedSize(size);
  };

  // Ajout de la pizza au panier
  const handleAddPizza = () => {
    if (pizza) {
      addPizza({
        ...pizza,
        selectedSize,
        quantity: 0,
      });
    }
  };

  const maxCalories = 2000; // Exemple : objectif quotidien

  // Affichage d'un message d'erreur si la pizza est introuvable
  if (!pizza) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-500 to-orange-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Pizza introuvable</h1>
        <p className="text-lg opacity-90">
          {"La pizza que vous recherchez est introuvable ou n'existe plus."}
        </p>
        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
        >
          Retour au menu
        </Link>
      </div>
    );
  }

  // traitement du texte qui peut contenir des espaces et des tirets et des accents pour la route
  const url = () => {
    if (pizza.base === 'Crème fraîche') {
      return 'creme-fraiche';
    }
    if (pizza.base === 'Tomate') {
      return 'tomate';
    }
    return 'toutes';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10">
      {/* Carte principale */}
      <div className="container mx-auto max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
        {/* Image */}
        <Image
          src={pizza.image}
          alt={pizza.title}
          width={800}
          height={400}
          className="w-full h-80 object-cover"
          priority
        />
        <div className="p-8 md:flex md:justify-between md:items-start space-y-8 md:space-y-0">
          {/* Informations principales */}
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              {pizza.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {pizza.description}
            </p>

            {/* Ingrédients */}
            <div className="mb-6">
              <strong className="block text-gray-800 font-semibold text-lg mb-2">
                Ingrédients :
              </strong>
              <p className="text-gray-600">{pizza.ingredients}</p>
            </div>

            <div className=" gap-4 mb-6">
              <p className="text-lg hidden">
                <strong className="text-gray-800 font-semibold">
                  Dimensions :
                </strong>{' '}
                {pizza.dimensions}
              </p>

              <p className="text-lg text-gray-600">
                <strong className="text-gray-800 font-semibold">Base :</strong>{' '}
                {pizza.base}
              </p>
            </div>

            {/* Sélection de la taille */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleSizeChange('petite')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition ${
                  selectedSize === 'petite'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Petite
              </button>
              <button
                onClick={() => handleSizeChange('grande')}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition ${
                  selectedSize === 'grande'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Grande
              </button>
              <p className="text-lg font-semibold text-gray-800 ">
                Prix :{' '}
                <span className="text-orange-500 font-bold">
                  {updatePrice}€
                </span>
              </p>
            </div>
          </div>

          {/* Options disponibles */}
          <div className="md:w-1/3 flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              Options Disponibles
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-base">
              <li>
                <strong>Crust :</strong> {pizza.options.crust.join(', ')}
              </li>
              <li>
                <strong>Extras :</strong>{' '}
                {pizza.options.extraToppings.join(', ')}
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-orange-600 my-4">
              Infos nutritionnelles
            </h2>
            <CalorieProgress
              calories={pizza.nutrition.calories}
              maxCalories={maxCalories}
            />
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="px-8 py-6 bg-gray-50 flex justify-between items-center">
          <Link
            href={`/pizzas-list/${url()}`}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition-transform"
          >
            <ArrowLeftCircleIcon className="w-5 h-5" />
            Retour
          </Link>
          <button
            onClick={handleAddPizza}
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform"
          >
            <PlusCircleIcon className="w-5 h-5" />
            Ajouter
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <PizzaSuggestions base={pizza.base} />
    </div>
  );
}
