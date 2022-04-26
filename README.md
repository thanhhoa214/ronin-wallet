# Ronin-wallet Front-end & API

## Hosting
- Deployed: https://ronin-challenge.netlify.app/
- API: Have a deployment issue

## Technologies

### FE App
- [Angular](https://angular.io/) (v13+)
- [ng-zorro](https://ng.ant.design/) for utilizing beautiful, on-the-fly and rich UI library.
- [TailwindCSS](https://tailwindcss.com/) for quickly customizing through utility-first classes.
- [NGXS](https://www.ngxs.io/) for state management.
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for enhancing productivity and maintainability.
- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) Visualize size of webpack output files with an interactive zoomable treemap for help investigate to reduce the initial bundle size

### API App
- [Express](https://expressjs.com/)

## General Folder Structure

Architecture strategy [Module as library](https://nx.dev/structure/library-types#library-types) and [Single Component Angular Module](https://github.com/angular/angular/discussions/43784) to gain lots of advantages:

- Inherit effective module-based architecture from Angular official recommendation
- Separate concerns between kinds of things, reduces dependent relations between modules
- Prevents heavy-based on old shared module strategy
- Prevents from uncountable meaningless folder
- Prevents too much-nested component
- Enhance awareness and scalability
- Utilize tree-shaking and lazy-load module

```
📦  root
 ┣ 📃 nx.json - Configurations for entire repo
 ┣ 📂 libs - Contains all libs
 ┣ 📂 apps - Contains all applications
 ┃ ┣ 📂 ronin-wallet-e2e - E2E Testing project for ronin-wallet (not implemented)
 ┃ ┣ 📂 ronin-wallet-api - Simple API for ronin-wallet
 ┃ ┣ 📂 ronin-wallet     - FE Application (web + extension)
 ┃ ┃ ┣ 📜 project.json - Configuration file for Angular app aka angular.json in normal initialization using `ng new`
 ┃ ┃ ┣ 📂 src
 ┃ ┃ ┃ ┣ 📂 environments
 ┃ ┃ ┃ ┣ 📂 assets - Contains static files (fonts, icons, images, translations, ...)
 ┃ ┃ ┃ ┣ 📂 custom - Contains library custom & theming SCSS
 ┃ ┃ ┃ ┃ ┣ 📂 ng-zorro - Contains override styles for ng-zorro components
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 theme.less - Theming for ng-zorro by less variables (Currently ng-zorro-antd only permits configs through less variables)
 ┃ ┃ ┃ ┃ ┣ 📂 ronin - Contains reset, custom styles for the app
 ┃ ┃ ┃ ┣ 📜 styles.scss - global styles of the app
 ┃ ┃ ┃ ┣ 📂 app
 ┃ ┃ ┃ ┃ ┣ 📂 data-access - Contains API & data stuff (services, models, ...)
 ┃ ┃ ┃ ┃ ┣ 📂 ui - Contains the shared dump components which being reused
 ┃ ┃ ┃ ┃ ┣ 📂 util - Contains the shared utilities (functions, directives, pipes, services, interceptors, ...)
 ┃ ┃ ┃ ┃ ┣ 📂 modules - Contains all feature modules (auth, product, category, ...)
 ┃ ┃ ┃ ┃ ┃ ┣ 📂 base - (technical important modules:  library-custom modules, state management root module, ...)
 ┃ ┃ ┃ ┃ ┃ ┣ 📂 auth
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 feature (pages in module)
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 login
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 login.component.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 login.component.scss
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 login.component.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 login.module.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 util (specific utils for modules: guards, services, validators, ...)
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 routes.ts - Includes all routes for modules
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 ui (dialog, dump or small constructive components for used in feature)
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 data-access (store - state management for auth)
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 api.service.ts (optional - will be auto-sync over Swagger when apply to well-construct backed API)
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 actions.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 state.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 state.model.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📃 data-access.module.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂 product, category, and business-logical modules
```

## Installation

Run `npm i` for installing all dependencies for development or bundle your app

## Development server

Run `npm start` for a FE server at `http://localhost:4200/` and a API server at `http://localhost:3333/`. Both the apps will automatically reload if you change any of the source files.

## Build

The build artifacts will be stored in the `dist/apps` directory.
- FE app: `npm run build:ronin-wallet`
- FE app as a Chrome extension: `npm run build:ronin-wallet:extension`
- API app: `npm run build:ronin-wallet-api`
