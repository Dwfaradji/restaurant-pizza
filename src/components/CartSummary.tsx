"use client";

import {useState} from "react";
import {useCart} from "@/context/CardContext";
import {ChevronDownIcon, ChevronUpIcon,ShoppingCartIcon} from "@heroicons/react/24/solid";

export default function CartSummary() {
    const {selectedPizzas, total, resetCart, removePizza} = useCart();
    const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture

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
        (acc: GroupedPizza[], pizza: { slug: string; title: string; price: number }) => {
            const existing = acc.find((item) => item.slug === pizza.slug);
            if (existing) {
                existing.quantity += 1;
                existing.totalPrice += pizza.price;
            } else {
                acc.push({...pizza, quantity: 1, totalPrice: pizza.price});
            }
            return acc;
        },
        [] // Initialiser correctement le tableau
    );

    return (
        <div className="fixed bottom-0 left-0  z-50">
            {/* Résumé du panier (toujours visible) */}
            <div
                className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
            >


                <div className="flex items-center justify-between">
                    <span className="font-semibold mr-1">
                        {!isOpen ?
                        <ShoppingCartIcon className="h-5 w-5 ml-2"/>
                        :
                            <span className="font-semibold mr-1"> Panier</span>
                        } </span>
                    <div className={`${isOpen ? "hidden" : "block"} `}>
                       <span className="font-semibold"> = </span>
                       <span className="font-semibold">{total}€</span>
                    </div>
                    {isOpen ? (


                        <ChevronDownIcon className="h-5 w-5 ml-2"/>
                    ) : (
                        <ChevronUpIcon className="h-5 w-5 ml-2"/>
                    )}
                </div>


            </div>

            {/* Dropdown - contenu détaillé du panier */}
            {isOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-lg p-4 w-80">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Détails du Panier</h3>
                    {groupedPizzas.length > 0 ? (
                        <>
                            <ul className="text-sm text-gray-600 mb-2">
                                {groupedPizzas.map((pizza) => (
                                    <li
                                        key={pizza.slug}
                                        className="mb-2 flex justify-between items-center"
                                    >
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
            )}
        </div>
    );
}
