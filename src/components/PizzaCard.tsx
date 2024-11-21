// components/PizzaCard.tsx
import React from "react";
import Image from "next/image";
import { Pizza } from "@/data/pizzas";
import Link from "next/link";
import {useCart} from "@/context/CardContext";

interface PizzaCardProps {
    pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
    const { addPizza } = useCart(); // Accéder à la fonction d'ajout au panier
    return (
        <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
            <Link key={pizza.slug} href={`/pizzas-list/${pizza.slug}`}>
                <Image
                    src={pizza.image}
                    alt={pizza.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{pizza.title}</h3>
                    <p className="text-sm text-gray-600 truncate">{pizza.description}</p>
                    <p className="text-sm font-semibold text-orange-500 mt-2">{pizza.price}€</p>
                </div>
            </Link>
            <button
                onClick={() => addPizza(pizza)} // Ajouter la pizza au panier
                className="inline-block px-8 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform"
            >
                Ajouter au panier
            </button>
        </div>
    );
};

export default PizzaCard;
