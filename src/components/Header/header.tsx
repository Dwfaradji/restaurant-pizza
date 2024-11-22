'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from '../Icons';
import siteMetadata from '@/utils/siteMetaData';
import { useThemeSwitch } from '@/Hooks/useThemeSwitch';
import { cx } from '@/utils';

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
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      {/* Bouton Hamburger */}
      <button
        className="inline-block sm:hidden z-50"
        onClick={toggleMenu}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className={cx(
                'absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200',
                click
                  ? 'rotate-[-45deg] translate-y-0'
                  : 'rotate-0 translate-y-[6px]'
              )}
            ></span>
            <span
              className={cx(
                'absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200',
                click ? 'opacity-0' : 'opacity-100'
              )}
            ></span>
            <span
              className={cx(
                'absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200',
                click
                  ? 'rotate-[45deg] translate-y-0'
                  : 'rotate-0 translate-y-[-6px]'
              )}
            ></span>
          </div>
        </div>
      </button>

      {/* Navigation Mobile */}
      <nav
        className={cx(
          'w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center flex sm:hidden fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300',
          click ? 'top-6' : '-top-20'
        )}
      >
        <Link href="/" className="mr-2">
          Accueil
        </Link>
        <Link href="/pizzas-list" className="mx-2">
          Carte
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
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
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center hidden sm:flex fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2">
          Accueil
        </Link>
        <Link href="/pizzas-list" className="mx-2">
          Carte
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
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

      {/* Réseaux Sociaux */}
      <div className="hidden sm:flex items-center">
        {[
          {
            href: siteMetadata.linkedin,
            label: 'LinkedIn',
            icon: LinkedinIcon,
          },
          { href: siteMetadata.twitter, label: 'Twitter', icon: TwitterIcon },
          { href: siteMetadata.github, label: 'GitHub', icon: GithubIcon },
          {
            href: siteMetadata.dribbble,
            label: 'Dribbble',
            icon: DribbbleIcon,
          },
        ].map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            rel="noopener noreferrer"
            className="inline-block w-6 h-6 mr-4"
            aria-label={`Reach out to me via ${label}`}
            target="_blank"
          >
            <Icon className="hover:scale-125 transition-all ease duration-200" />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
