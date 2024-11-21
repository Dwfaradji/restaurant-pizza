"use client";

import { useCart } from "@/context/CardContext";

export default function CartSummary() {
    const { selectedPizzas, total, resetCart, removePizza } = useCart();

    // Définir un type pour les pizzas regroupées
    type GroupedPizza = {
        slug: string;
        title: string;
        price: number;
        quantity: number;
        totalPrice: number;
    };

    // Typage explicite de selectedPizzas pour éviter l'erreur "never"
    const groupedPizzas: GroupedPizza[] = (selectedPizzas || []).reduce(
        (acc: GroupedPizza[], pizza: { slug: string; title: string; price: number }) => {
            const existing = acc.find((item) => item.slug === pizza.slug);
            if (existing) {
                existing.quantity += 1;
                existing.totalPrice += pizza.price;
            } else {
                acc.push({ ...pizza, quantity: 1, totalPrice: pizza.price });
            }
            return acc;
        },
        [] // Initialiser correctement le tableau
    );

    return (
        <div className={`${groupedPizzas.length === 0 ? 'hidden' : 'block'} fixed top-0 z-50 right-0 m-4 p-4 bg-white shadow-lg rounded-lg w-80`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Panier</h3>
            {groupedPizzas.length > 0 ? (
                <>
                    <ul className="text-sm text-gray-600 mb-2">
                        {groupedPizzas.map((pizza) => (
                            <li key={pizza.slug} className="mb-2 flex justify-between items-center">
                                <div>
                                    <span className="font-semibold">{pizza.title}</span> - {pizza.price}€
                                    <span className="block text-xs text-gray-500">
                                        Quantité : {pizza.quantity} | Total : {pizza.totalPrice}€
                                    </span>
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
                    <p className="text-gray-800 font-bold mb-4">Total : {total}€</p>
                    <button
                        onClick={resetCart}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                    >
                        Réinitialiser
                    </button>
                </>
            ) : (
                <p className="text-gray-600">Votre panier est vide.</p>
            )}
        </div>
    );
}
