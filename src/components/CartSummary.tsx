'use client';

import { useState } from 'react';
import { useCart } from '@/context/CardContext';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/solid';

export default function CartSummary() {
  const { selectedPizzas, total, resetCart, removePizza } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  // Type pour les pizzas regroupées
  type GroupedPizza = {
    slug: string;
    title: string;
    price: number;
    quantity: number;
    totalPrice: number;
  };

  // Grouper les pizzas pour éviter les doublons
  const groupedPizzas: GroupedPizza[] = (selectedPizzas || []).reduce(
    (acc: GroupedPizza[], pizza) => {
      const existing = acc.find((item) => item.slug === pizza.slug);
      if (existing) {
        existing.quantity += 1;
        existing.totalPrice += pizza.price;
      } else {
        acc.push({ ...pizza, quantity: 1, totalPrice: pizza.price });
      }
      return acc;
    },
    []
  );

  return (
    <div className="fixed bottom-4 left-4 z-50 w-80 max-w-full">
      {/* Résumé du panier */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="cart-dropdown"
        className="flex items-center justify-between w-full bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg"
      >
        <div className="flex items-center">
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          <span className="font-semibold">Panier</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold mr-2">{total}€</span>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </div>
      </button>

      {/* Dropdown du panier */}
      {isOpen && (
        <div
          id="cart-dropdown"
          className="mt-2 bg-white shadow-lg rounded-lg p-4 w-full max-h-96 overflow-y-auto"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Détails du Panier
          </h3>
          {groupedPizzas.length > 0 ? (
            <>
              <ul className="text-sm text-gray-600 mb-4">
                {groupedPizzas.map((pizza) => (
                  <li
                    key={pizza.slug}
                    className="flex justify-between items-center mb-2"
                  >
                    <div>
                      <span className="font-semibold">{pizza.title}</span> -{' '}
                      {pizza.price}€
                      <div className="text-xs text-gray-500">
                        Quantité : {pizza.quantity} | Total : {pizza.totalPrice}
                        €
                      </div>
                    </div>
                    <button
                      onClick={() => removePizza(pizza.slug)}
                      className="text-red-500 text-sm font-bold"
                    >
                      Retirer
                    </button>
                  </li>
                ))}
              </ul>
              <div className="text-gray-800 font-bold mb-4">
                Total : {total}€
              </div>
              <button
                onClick={resetCart}
                className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Réinitialiser
              </button>
            </>
          ) : (
            <p className="text-gray-600">Votre panier est vide.</p>
          )}
        </div>
      )}
    </div>
  );
}
