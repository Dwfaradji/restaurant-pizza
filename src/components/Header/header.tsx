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
    <header className="flex w-full items-center justify-between p-1">
      <Logo />
      {/* Bouton Hamburger */}
      <button
        className="z-50 inline-block sm:hidden"
        onClick={toggleMenu}
        aria-label="Hamburger Menu"
      >
        <div className="ease w-6 cursor-pointer transition-all duration-300">
          <div className="relative">
            <span
              className={cx(
                'ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light',
                click
                  ? 'translate-y-0 rotate-[-45deg]'
                  : 'translate-y-[6px] rotate-0'
              )}
            ></span>
            <span
              className={cx(
                'ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light',
                click ? 'opacity-0' : 'opacity-100'
              )}
            ></span>
            <span
              className={cx(
                'ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light',
                click
                  ? 'translate-y-0 rotate-[45deg]'
                  : 'translate-y-[-6px] rotate-0'
              )}
            ></span>
          </div>
        </div>
      </button>
      {/* Navigation Mobile */}
      <nav
        className={cx(
          'ease fixed right-1/2 top-4 z-50 flex w-max translate-x-1/2 items-center rounded-full border border-solid border-dark bg-light/80 px-6 py-3 font-medium capitalize backdrop-blur-sm transition-all duration-300 sm:hidden sm:px-8',
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
      s{/* Navigation Desktop */}
      <nav className="fixed right-1/2 top-6 z-50 hidden w-max translate-x-1/2 items-center rounded-full border border-solid border-dark bg-light/30 px-8 py-3 font-medium capitalize backdrop-blur-xl sm:flex">
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
