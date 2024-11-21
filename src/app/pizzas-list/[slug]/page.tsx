"use client"
import {cardTomate, cardCream, Pizza} from '@/data/pizzas';
import Image from "next/image";
import PizzaSuggestions from "@/components/pizzaSuggestion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useCart} from "@/context/CardContext";
import {useParams} from "next/navigation";

export default function PizzaDetails() {

    const { slug } = useParams (); // Récupère les paramètres dynamiques
    const [pizza, setPizza] = useState<Pizza | null>(null);

    useEffect(() => {
        // Charger la pizza à partir du slug
        const allPizzas = [...cardTomate, ...cardCream];
        const foundPizza  = allPizzas.find((p) => p.slug === slug) as Pizza;
        setPizza(foundPizza );
    }, [slug]);
    const { addPizza } = useCart  (); // Accéder à la fonction d'ajout au panier
    // État pour gérer le panier
    const [selectedPizzas] = useState<Pizza[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    // Calculer le total des pizzas dans le panier
    const total = selectedPizzas.reduce((acc, pizza) => acc + pizza.price, 0);

    if (!pizza) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-500 to-orange-500 text-white">
                <h1 className="text-5xl font-extrabold mb-4">Pizza introuvable</h1>
                <p className="text-lg opacity-90">{"La pizza que vous recherchez est introuvable ou n'existe plus."}</p>
                <Link
                    href="/"
                    className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
                >
                    Retour au menu
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10">
            <div className="container mx-auto max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform">
                {/* Image de la pizza */}
                <Image
                    src={pizza.image}
                    alt={pizza.title}
                    width={800}
                    height={400}
                    className="w-full h-72 object-cover"
                    priority
                />
                <div className="p-8 md:flex md:justify-between">
                    {/* Détails de la pizza */}
                    <div className="md:w-2/3">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">{pizza.title}</h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">{pizza.description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <p>
                                <strong className="text-gray-800 font-semibold">Base :</strong> {pizza.base}
                            </p>
                            <p>
                                <strong className="text-gray-800 font-semibold">Dimensions :</strong> {pizza.dimensions}
                            </p>
                            <p>
                                <strong className="text-gray-800 font-semibold">Calories :</strong> {pizza.nutrition.calories} kcal
                            </p>
                            <p>
                                <strong className="text-gray-800 font-semibold">Prix :</strong> {pizza.price}€
                            </p>
                        </div>
                        <div>
                            <strong className="block text-gray-800 font-semibold mb-2">Ingrédients :</strong>
                            <p className="text-gray-600">{pizza.ingredients}</p>
                        </div>
                    </div>
                    {/* Options de la pizza */}
                    <div className="md:w-1/3 flex flex-col items-center justify-center bg-gradient-to-t from-orange-100 to-yellow-50 rounded-lg p-6 shadow-md">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Options Disponibles</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Crust :</strong> {pizza.options.crust.join(', ')}</li>
                            <li><strong>Extras :</strong> {pizza.options.extraToppings.join(', ')}</li>
                        </ul>
                    </div>
                </div>
                {/* Boutons */}
                <div className="px-8 py-6 bg-gray-50 text-center justify-between flex">
                    <button
                        onClick={() => addPizza(pizza)} // Ajouter la pizza au panier
                        className="inline-block px-8 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform"
                    >
                        Ajouter au panier
                    </button>
                    <Link
                        href="/pizzas-list"
                        className="inline-block px-8 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition-transform"
                    >
                        Retour à la liste
                    </Link>
                </div>
            </div>
            <PizzaSuggestions base={pizza.base}/>

            {/* Pop-up de confirmation */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Pizza ajoutée au panier</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Vous avez ajouté <strong>{pizza.title}</strong> à votre panier.
                        </p>
                        <p className="text-lg text-gray-800 mb-4 font-bold">Total actuel : {total}€</p>
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
