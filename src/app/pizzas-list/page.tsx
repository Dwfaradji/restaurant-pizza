"use client";

import React, { useState, useEffect } from "react";
import { Pizza } from "@/data/pizzas";
import PizzaCard from "@/components/PizzaCard";
import Popup from "@/components/Popup";
import CartSummary from "@/components/CartSummary";
import { cardTomate, cardCream } from "@/data/pizzas";
import { useSearchParams } from "next/navigation";

export default function PizzasList() {
    // Toutes les pizzas regroupées
    const allPizzas = [...cardTomate, ...cardCream];

    // Gestion des paramètres URL pour détecter un filtre initial
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get("base") || "all";

    // État pour le triage
    const [filter, setFilter] = useState<string>(initialFilter);

    // État pour la gestion du panier et de la pop-up
    const [selectedPizzas, setSelectedPizzas] = useState<Pizza[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentPizza, setCurrentPizza] = useState<Pizza | null>(null);

    // Calculer le total du panier
    const total = selectedPizzas.reduce((acc, pizza) => acc + pizza.price, 0);

    // Filtrage des pizzas
    const filteredPizzas = allPizzas.filter((pizza) => {
        if (filter === "Tomate") return pizza.base === "Tomate";
        if (filter === "Crème fraîche") return pizza.base === "Crème fraîche";
        return true; // Afficher toutes les pizzas
    });

    // Gérer le clic sur une pizza pour afficher la pop-up
    const handlePizzaClick = (pizza: Pizza) => {
        setCurrentPizza(pizza);
        setIsPopupOpen(true);
    };

    // Ajouter une pizza au panier
    const addPizzaToOrder = () => {
        if (currentPizza) {
            setSelectedPizzas((prev) => [...prev, currentPizza]);
            setIsPopupOpen(false);
        }
    };

    // Réinitialiser le panier
    const resetOrder = () => {
        setSelectedPizzas([]);
    };

    // Met à jour le filtre initial au chargement
    useEffect(() => {
        setFilter(initialFilter);
    }, [initialFilter]);

    return (
        <div className="w-full bg-gray-50 py-8 px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Commandez vos pizzas
            </h2>

            {/* Boutons de tri */}
            <div className="flex justify-center space-x-4 mb-6">
                <button
                    onClick={() => setFilter("all")}
                    className={`py-2 px-4 rounded-lg shadow ${
                        filter === "all" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                >
                    Toutes
                </button>
                <button
                    onClick={() => setFilter("Tomate")}
                    className={`py-2 px-4 rounded-lg shadow ${
                        filter === "Tomate" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                >
                    Tomate
                </button>
                <button
                    onClick={() => setFilter("Crème fraîche")}
                    className={`py-2 px-4 rounded-lg shadow ${
                        filter === "Crème fraîche" ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                >
                    Crème fraîche
                </button>
            </div>

            {/* Affichage des pizzas filtrées */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPizzas.map((pizza) => (
                    <PizzaCard key={pizza.slug} pizza={pizza} onClick={handlePizzaClick} />
                ))}
            </div>

            {/* Résumé de la commande */}
            <CartSummary selectedPizzas={selectedPizzas} total={total} onReset={resetOrder} />

            {/* Pop-up */}
            {isPopupOpen && currentPizza && (
                <Popup pizza={currentPizza} onClose={() => setIsPopupOpen(false)} onAdd={addPizzaToOrder} />
            )}
        </div>
    );
}
