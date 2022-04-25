const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  prefix: '',
  mode: 'jit',
  content: [
    join(__dirname, 'apps/**/*.{html,ts}'),
    join(__dirname, 'libs/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1273EA',
          50: '#BAD7FA',
          100: '#A7CBF8',
          200: '#81B5F5',
          300: '#8DC9F9',
          400: '#3589EF',
          500: '#1273EA',
          600: '#1C94F4',
          700: '#0A4082',
          800: '#06264E',
          900: '#020D1A',
        },
      },
      fontSize: {
        xxs: '10px',
      },
      backgroundImage: {
        'ronin-gradient': 'linear-gradient(to left, #1c94f4, #1273ea)',
      },
      height: {
        main: 'calc(100vh - 64px)',
      },
      minHeight: {
        main: 'calc(100vh - 64px)',
      },
    },
  },
  variants: {
    extend: {},
  },
};
