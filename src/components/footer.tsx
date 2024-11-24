import React from 'react';
import Link from 'next/link';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-20 text-gray-400">
      <div className="container mx-auto px-6">
        {/* Section supérieure */}
        <div className="mb-8 flex justify-around gap-8 md:grid-cols-3">
          {/* Horaires */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              <ClockIcon className="mr-2 inline-block size-5 text-orange-500" />
              {"Horaires d'ouverture"}
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lundi :</span>
                <span>12h - 22h</span>
              </li>
              <li className="flex justify-between">
                <span>Mardi :</span>
                <span>12h - 22h</span>
              </li>
              <li className="flex justify-between">
                <span>Mercredi :</span>
                <span>12h - 22h</span>
              </li>
              <li className="flex justify-between">
                <span>Jeudi :</span>
                <span>12h - 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Vendredi :</span>
                <span>12h - 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi :</span>
                <span>12h - 23h</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche :</span>
                <span className="text-red-500">Fermé</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Contactez-nous
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <PhoneIcon className="size-6 text-orange-500" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-4">
                <EnvelopeIcon className="size-6 text-orange-500" />
                <span>contact@pizzeria-delizia.com</span>
              </li>
              <li className="flex items-center gap-4">
                <MapPinIcon className="size-6 text-orange-500" />
                <span>123 Rue des Délices, Paris</span>
              </li>
            </ul>
          </div>
        </div>
        {/* À propos */}
        <div className={'flex flex-col items-center justify-center'}>
          <h2 className="mb-4 text-2xl font-bold text-white">
            Pizzeria Delizia
          </h2>
          <p className="text-gray-400">
            Nous vous proposons des pizzas artisanales réalisées avec des
            ingrédients frais, pour des moments gourmands et chaleureux.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Conçu avec{' '}
            <HeartIcon className="inline-block size-5 text-red-500" />
            {`par l'équipe Delizia.`}
          </p>
        </div>
        {/* Section inférieure */}
        <div className="mt-6 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          {/* Liens secondaires */}
          <div className="flex gap-6">
            <Link
              href="#"
              className="flex items-center transition-colors hover:text-orange-500"
            >
              Mentions légales{' '}
              <ArrowTopRightOnSquareIcon className="ml-1 size-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center transition-colors hover:text-orange-500"
            >
              Politique de confidentialité{' '}
              <ArrowTopRightOnSquareIcon className="ml-1 size-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center transition-colors hover:text-orange-500"
            >
              Contactez-nous{' '}
              <ArrowTopRightOnSquareIcon className="ml-1 size-4" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-sm text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} Pizzeria Delizia. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
