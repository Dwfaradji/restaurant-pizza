import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Active le mode sombre via une classe
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        dark: '#1b1b1b',
        light: '#fff',
        gray: require('tailwindcss/colors').gray, // Ajoutez cette ligne
      },
    },
  },
  plugins: [],
} satisfies Config;
