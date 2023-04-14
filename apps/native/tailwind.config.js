const nativewind = require('nativewind/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/**/*.{js,jsx,ts,tsx}',
    `!../../packages/ui/node_modules`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [nativewind],
};
