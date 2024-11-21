"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import imagesHeader from "@/images/pexels-nano-erdozain-120534369-29021737.jpg"
import CategoryCard from "../components/categoryCard";
import About from "../components/about";


export default function Home() {
    return (
        <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-orange-100 min-h-screen font-sans">
            {/* Hero Section */}
            <header className="relative">
                <div className="container mx-auto px-6 py-20 text-center md:text-left">
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/2">
                            <h1 className="text-5xl md:text-7xl font-extrabold text-orange-600 leading-tight">
                                La pizza, <br />
                                {"c'est notre passion."}
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-gray-700 font-light">
                                Découvrez une expérience culinaire unique, avec des ingrédients frais
                                et un savoir-faire artisanal.
                            </p>
                            <Link
                                href="/pizzas-list"
                                className="inline-block mt-8 px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all"
                            >
                                Voir le menu
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src={imagesHeader}
                                alt="Pizza hero"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover rounded-xl shadow-2xl mt-10 md:mt-0"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Section des catégories */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
                        Nos spécialités
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        Découvrez nos pizzas par catégorie. Chaque bouchée est une explosion de
                        saveurs !
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Carte Tomate */}
                        <CategoryCard
                            href="/pizzas-list"
                            image="/images/category-tomate-premium.jpg"
                            title="Base Tomate"
                            description="Des pizzas authentiques à la tomate fraîche."
                            base="Tomate"
                        />
                        <CategoryCard
                            href="/pizzas-list"
                            image="/images/category-creme-premium.jpg"
                            title="Base Crème"
                            description="Des créations gourmandes et onctueuses."
                            base="Crème fraîche"
                        />
                        <CategoryCard
                            href="/pizzas-list"
                            image="/images/category-all-premium.jpg"
                            title="Toutes les Pizzas"
                            description="Explorez toute notre gamme."
                            base="Toutes"
                        />

                    </div>
                </div>
            </section>


            {/* CTA de commande */}
            <section className="bg-gray-800 py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold">Prêts à commander votre pizza ?</h2>
                    <p className="mt-4 text-lg font-light">
                        {"Passez votre commande maintenant et profitez d'une expérience unique."}
                    </p>
                    <Link
                        href={"tel:06060606"}
                        className="inline-block mt-6 px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all"
                    >
                        Appeler maintenant
                    </Link>
                </div>
            </section>
            <About/>
        </div>
    );
}



