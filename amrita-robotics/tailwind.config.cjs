/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'dark', // or 'media' or 'class'
  content: [
    './src/**/*.{html,svelte,js,ts}', // Svelte files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/postcss'), // Tailwind PostCSS plugin
    require('daisyui'),              // Add DaisyUI plugin
  ],
  daisyui: {
    themes: ["light", "dark"],        // Optional: choose your themes
  },
};

