'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { MoonIcon, SunIcon } from '../Icons';
import { useThemeSwitch } from '@/Hooks/useThemeSwitch';
import { cx } from '@/utils';
import StoreStatus from '@/components/StoreStatus';

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  // Effect qui déclenche le rendu côté client

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Empêche le rendu côté serveur
  }

  const toggleMenu = () => {
    setClick(!click);
  };

  return (
    <header className="flex w-full items-center justify-between bg-black p-1 dark:bg-light">
      <Logo />
      {/* Navigation Mobile */}
      <nav
        className={cx(
          'ease fixed right-1/2 top-4 z-50 flex w-max translate-x-1/2 items-center rounded-full border border-solid border-dark bg-light/80 px-6 py-3 font-medium capitalize text-gray-800 backdrop-blur-sm transition-all duration-300 dark:text-dark sm:hidden sm:px-8',
          click ? 'top-6' : '-top-20'
        )}
      >
        <Link href="/" className="mr-2">
          Accueil
        </Link>
        <Link href="/pizzas-list/toutes" className="mx-2">
          Carte
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'ease ml-2 flex h-6 w-6 items-center justify-center rounded-full p-1',
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          )}
          aria-label="theme-switcher"
        >
          {mode === 'light' ? (
            <MoonIcon className="fill-dark" />
          ) : (
            <SunIcon className="fill-dark" />
          )}
        </button>
      </nav>
      {/* Navigation Desktop */}
      <nav className="fixed right-1/2 top-6 z-50 hidden w-max translate-x-1/2 items-center rounded-full border border-solid border-dark bg-light/65 px-8 py-3 font-medium capitalize text-gray-800 backdrop-blur-xl dark:text-dark sm:flex">
        <Link href="/" className="mr-2">
          Accueil
        </Link>
        <Link href="/pizzas-list/toutes" className="mx-2">
          Carte
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'ease ml-2 flex h-6 w-6 items-center justify-center rounded-full p-1',
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          )}
          aria-label="theme-switcher"
        >
          {mode === 'light' ? (
            <MoonIcon className="fill-dark" />
          ) : (
            <SunIcon className="fill-dark" />
          )}
        </button>
      </nav>
      <div className="flex items-center">
        <StoreStatus />
      </div>
    </header>
  );
};

export default Header;
