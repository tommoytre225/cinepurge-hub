import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF006E',
        secondary: '#FB5607',
        dark: '#0A0E27',
        surface: '#141829',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
};

export default config;
