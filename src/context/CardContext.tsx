'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { Pizza } from '@/data/pizzas';

// Définir le type pour le contexte
type CartContextType = {
  selectedPizzas: Pizza[];
  total: number;
  // eslint-disable-next-line no-unused-vars
  addPizza: (pizza: Pizza) => void;
  // eslint-disable-next-line no-unused-vars
  removePizza: (slug: string) => void;
  resetCart: () => void;
};

// Initialiser le contexte avec un typage correct
const CartContext = createContext<CartContextType | null>(null);

// Fournisseur du contexte
export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedPizzas, setSelectedPizzas] = useState<Pizza[]>([]);

  // Calculer le total
  const total = selectedPizzas.reduce((acc, pizza) => acc + pizza.price, 0);

  // Ajouter une pizza au panier
  const addPizza = (pizza: Pizza) => {
    setSelectedPizzas((prev) => [...prev, pizza]);
  };

  // Retirer une pizza spécifique (une instance)
  const removePizza = (slug: string) => {
    setSelectedPizzas((prev) => {
      const index = prev.findIndex((pizza) => pizza.slug === slug);
      if (index !== -1) {
        const updated = [...prev];
        updated.splice(index, 1);
        return updated;
      }
      return prev;
    });
  };

  // Réinitialiser le panier
  const resetCart = () => {
    setSelectedPizzas([]);
  };

  return (
    <CartContext.Provider
      value={{ selectedPizzas, total, addPizza, removePizza, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
