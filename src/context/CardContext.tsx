'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
} from 'react';
import { Pizza } from '@/data/type';

// Définir le type pour une pizza dans le panier
type CartPizza = Pizza & {
  selectedSize: keyof Pizza['price']; // Correspond à 'grande' | 'petite'
  quantity: number;
};

// Définir le type pour le contexte du panier
type CartContextType = {
  selectedPizzas: CartPizza[];
  total: number;
  // eslint-disable-next-line no-unused-vars
  addPizza: (pizza: CartPizza) => void;
  // eslint-disable-next-line no-unused-vars
  removePizza: (slug: string, selectedSize: keyof Pizza['price']) => void;
  resetCart: () => void;
};

// Initialiser le contexte
const CartContext = createContext<CartContextType | null>(null);

// Fournisseur du contexte
export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedPizzas, setSelectedPizzas] = useState<CartPizza[]>([]);

  // Calcul optimisé du total
  const total = useMemo(() => {
    return selectedPizzas.reduce(
      (sum, pizza) => sum + pizza.price[pizza.selectedSize] * pizza.quantity,
      0
    );
  }, [selectedPizzas]);

  // Ajouter une pizza au panier
  const addPizza = (pizza: CartPizza) => {
    setSelectedPizzas((prev) => {
      const index = prev.findIndex(
        (p) => p.slug === pizza.slug && p.selectedSize === pizza.selectedSize
      );

      if (index !== -1) {
        // Si la pizza existe, incrémente la quantité
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + 1,
        };
        return updated;
      } else {
        // Sinon, ajoute la pizza avec une quantité initiale de 1
        return [...prev, { ...pizza, quantity: 1 }];
      }
    });
  };

  // Retirer une pizza du panier
  const removePizza = (slug: string, selectedSize: keyof Pizza['price']) => {
    if (!['petite', 'grande'].includes(selectedSize)) {
      return;
    }

    setSelectedPizzas((prev) => {
      const index = prev.findIndex(
        (pizza) => pizza.slug === slug && pizza.selectedSize === selectedSize
      );

      if (index !== -1) {
        const pizzaToRemove = prev[index];

        if (pizzaToRemove.quantity > 1) {
          const updated = [...prev];
          updated[index] = {
            ...pizzaToRemove,
            quantity: pizzaToRemove.quantity - 1,
          };
          return updated;
        } else {
          const updated = [...prev];
          updated.splice(index, 1);
          return updated;
        }
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
      value={{
        selectedPizzas,
        total,
        addPizza,
        removePizza,
        resetCart,
      }}
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
