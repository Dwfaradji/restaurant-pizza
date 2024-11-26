'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import imagesHeader from '@/images/pexels-nano-erdozain-120534369-29021737.jpg';
import CategoryCard from '../components/CategoryCard';
import About from '../components/About';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-orange-100 font-sans dark:bg-dark dark:text-light">
      {/* Hero Section */}
      <header className="relative">
        <div className="container mx-auto px-6 py-20 text-center md:text-left">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-extrabold leading-tight text-orange-600 md:text-7xl">
                La pizza, <br />
                {"c'est notre passion."}
              </h1>
              <p className="mt-6 text-lg font-light text-gray-700 md:text-xl">
                Découvrez une expérience culinaire unique, avec des ingrédients
                frais et un savoir-faire artisanal.
              </p>
              <Link
                href="/pizzas-list/toutes"
                className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
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
                className="mt-10 h-auto w-full rounded-xl object-cover shadow-2xl md:mt-0"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Section des catégories */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
            Nos spécialités
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Découvrez nos pizzas par catégorie. Chaque bouchée est une explosion
            de saveurs !
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Carte Tomate */}
            <CategoryCard
              href="/pizzas-list/"
              image="/images/category-tomate-premium.jpg"
              title="Base Tomate"
              description="Des pizzas authentiques à la tomate fraîche."
              base="tomate"
            />
            <CategoryCard
              href="/pizzas-list/"
              image="/images/category-creme-premium.jpg"
              title="Base Crème"
              description="Des créations gourmandes et onctueuses."
              base="creme-fraiche"
            />
            <CategoryCard
              href="/pizzas-list/"
              image="/images/category-all-premium.jpg"
              title="Toutes les Pizzas"
              description="Explorez toute notre gamme."
              base="toutes"
            />
          </div>
        </div>
      </section>

      {/* CTA de commande */}
      <section className="bg-gray-800 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Prêts à commander votre pizza ?
          </h2>
          <p className="mt-4 text-lg font-light">
            {
              "Passez votre commande maintenant et profitez d'une expérience unique."
            }
          </p>
          <Link
            href={'tel:06060606'}
            className="mt-6 inline-block rounded-full bg-orange-500 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
          >
            Appeler maintenant
          </Link>
        </div>
      </section>
      <About />
    </div>
  );
}
