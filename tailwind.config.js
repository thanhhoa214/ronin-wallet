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
          300: '#5B9FF2',
          400: '#3589EF',
          500: '#1273EA',
          600: '#0E59B6',
          700: '#0A4082',
          800: '#06264E',
          900: '#020D1A',
        },
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
