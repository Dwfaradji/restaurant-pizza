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
    <footer className="bg-gray-900 text-gray-400 py-20">
      <div className="container mx-auto px-6">
        {/* Section supérieure */}
        <div className="flex justify-around md:grid-cols-3 gap-8 mb-8">
          {/* Horaires */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              <ClockIcon className="inline-block w-5 h-5 text-orange-500 mr-2" />
              Horaires d'ouverture
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
            <h3 className="text-white text-lg font-bold mb-4">
              Contactez-nous
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-orange-500" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-4">
                <EnvelopeIcon className="w-6 h-6 text-orange-500" />
                <span>contact@pizzeria-delizia.com</span>
              </li>
              <li className="flex items-center gap-4">
                <MapPinIcon className="w-6 h-6 text-orange-500" />
                <span>123 Rue des Délices, Paris</span>
              </li>
            </ul>
          </div>
        </div>
        {/* À propos */}
        <div className={'flex flex-col justify-center items-center '}>
          <h2 className="text-white text-2xl font-bold mb-4">
            Pizzeria Delizia
          </h2>
          <p className="text-gray-400">
            Nous vous proposons des pizzas artisanales réalisées avec des
            ingrédients frais, pour des moments gourmands et chaleureux.
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            Conçu avec{' '}
            <HeartIcon className="inline-block w-5 h-5 text-red-500" /> par
            l'équipe Delizia.
          </p>
        </div>
        {/* Section inférieure */}
        <div className="border-t border-gray-700 pt-8 mt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Liens secondaires */}
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-orange-500 transition-colors flex items-center"
            >
              Mentions légales{' '}
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="#"
              className="hover:text-orange-500 transition-colors flex items-center"
            >
              Politique de confidentialité{' '}
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="#"
              className="hover:text-orange-500 transition-colors flex items-center"
            >
              Contactez-nous{' '}
              <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Pizzeria Delizia. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
