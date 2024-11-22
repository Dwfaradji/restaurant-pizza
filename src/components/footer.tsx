import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6 text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Pizzeria Delizia. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-orange-500">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-orange-500">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-orange-500">
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
