'use client';

import { allPizzas } from '@/data/pizzas';
import Image from 'next/image';
import PizzaSuggestions from '@/components/pizzaSuggestion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CardContext';
import { useParams } from 'next/navigation';
import { PlusCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import CalorieProgress from '@/components/CalorieProgress';
import { Pizza } from '@/data/type';

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
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 text-white">
        <h1 className="mb-4 text-5xl font-extrabold">Pizza introuvable</h1>
        <p className="text-lg opacity-90">
          {"La pizza que vous recherchez est introuvable ou n'existe plus."}
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-red-600 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
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
      <div className="container mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
        {/* Image */}
        <Image
          src={pizza.image}
          alt={pizza.title}
          width={800}
          height={400}
          className="h-80 w-full object-cover"
          priority
        />
        <div className="space-y-8 p-8 md:flex md:items-start md:justify-between md:space-y-0">
          {/* Informations principales */}
          <div className="md:w-2/3">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-800 md:text-5xl">
              {pizza.title}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              {pizza.description}
            </p>

            {/* Ingrédients */}
            <div className="mb-6">
              <strong className="mb-2 block text-lg font-semibold text-gray-800">
                Ingrédients :
              </strong>
              <p className="text-gray-600">{pizza.ingredients}</p>
            </div>

            <div className="mb-6 gap-4">
              <p className="hidden text-lg">
                <strong className="font-semibold text-gray-800">
                  Dimensions :
                </strong>{' '}
                {pizza.dimensions}
              </p>

              <p className="text-lg text-gray-600">
                <strong className="font-semibold text-gray-800">Base :</strong>{' '}
                {pizza.base}
              </p>
            </div>

            {/* Sélection de la taille */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleSizeChange('petite')}
                className={`rounded-lg px-5 py-2 text-sm font-bold transition ${
                  selectedSize === 'petite'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Petite
              </button>
              <button
                onClick={() => handleSizeChange('grande')}
                className={`rounded-lg px-5 py-2 text-sm font-bold transition ${
                  selectedSize === 'grande'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Grande
              </button>
              <p className="text-lg font-semibold text-gray-800">
                Prix :{' '}
                <span className="font-bold text-orange-500">
                  {updatePrice}€
                </span>
              </p>
            </div>
          </div>

          {/* Options disponibles */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-100 p-6 shadow-lg md:w-1/3">
            <h2 className="mb-4 text-2xl font-semibold text-orange-600">
              Options Disponibles
            </h2>
            <ul className="list-inside list-disc space-y-3 text-base text-gray-700">
              <li>
                <strong>Crust :</strong> {pizza.options.crust.join(', ')}
              </li>
              <li>
                <strong>Extras :</strong>{' '}
                {pizza.options.extraToppings.join(', ')}
              </li>
            </ul>
            <h2 className="my-4 text-2xl font-semibold text-orange-600">
              Infos nutritionnelles
            </h2>
            <CalorieProgress
              calories={pizza.nutrition.calories}
              maxCalories={maxCalories}
            />
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex items-center justify-between bg-gray-50 px-8 py-6">
          <Link
            href={`/pizzas-list/${url()}`}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-red-600"
          >
            <ArrowLeftCircleIcon className="size-5" />
            Retour
          </Link>
          <button
            onClick={handleAddPizza}
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-600"
          >
            <PlusCircleIcon className="size-5" />
            Ajouter
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <PizzaSuggestions base={pizza.base} />
    </div>
  );
}
