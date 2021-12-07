const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#63A5A4',
        secondary: '#EFF7F6',
        ternary: '#F1FAFB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
