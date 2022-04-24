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
