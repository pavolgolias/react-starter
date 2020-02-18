# React Starter

[![Master CI Status](https://github.com/Kamahl19/react-starter/workflows/CI/badge.svg?branch=master)](https://github.com/Kamahl19/react-starter/actions?query=workflow%3ACI+branch%3Amaster)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0bece35d-bed0-49ae-8236-08d67acd4031/deploy-status)](https://app.netlify.com/sites/react-starter-ts/deploys)

## What’s Inside?

- [TypeScript](https://www.typescriptlang.org/) - a typed superset of JavaScript
- [create-react-app](https://facebook.github.io/create-react-app/) - create React apps with no build configuration
- [Ant.Design](https://ant.design/) - a UI library
- [Storybook](https://storybook.js.org/) - a development environment for UI components with [a11y](https://github.com/storybookjs/storybook/tree/master/addons/a11y), [actions](https://github.com/storybookjs/storybook/tree/master/addons/actions), [knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs), [viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport) and [router](https://github.com/gvaldambrini/storybook-router) addons
- [JWT](https://jwt.io/) Authorization - including all the common features such as Sign-up, Login, Logout, Forgotten password, Email verification
- [axios](https://github.com/axios/axios) - promise based HTTP client
- [i18next](https://www.i18next.com/) - an internationalization framework
  - [i18next scanner](https://github.com/i18next/i18next-scanner) - scans the code, extracts translation keys/values and produces i18n resource file
- [LESS](http://lesscss.org/) - dynamic stylesheet language
- [redux](https://redux.js.org/) - a state container
  - [redux-saga](https://github.com/redux-saga/redux-saga) - a side effect model for Redux apps
  - [reselect](https://github.com/reduxjs/reselect) - selector library for Redux
  - [redux-persist](https://github.com/rt2zz/redux-persist) - persist and rehydrate a Redux store
  - [redux-logger](https://github.com/LogRocket/redux-logger) - logger for Redux
  - [redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper) - a HOC for handling Authentication and Authorization
  - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) - DevTools extension for browser
  - [redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant) - detects mutations in Redux store
  - [typesafe-actions](https://github.com/piotrwitek/typesafe-actions) - action creators with type-free code
- [react-router](https://reacttraining.com/react-router/web/guides/quick-start) - declarative routing
  - [connected-react-router](https://github.com/supasate/connected-react-router) - Redux binding for React Router
  - [oaf-react-router](https://github.com/oaf-project/oaf-react-router) - an accessible wrapper for React Router to set proper scroll position & focus
- [prettier](https://prettier.io/) - opinionated code formatter
- [ESLint](https://eslint.org/) - pluggable linting utility
- [husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) - run ESLint & Prettier before commiting new code
- [CI/CD](https://github.com/features/actions) - Github Actions to run integration tests on each PR & Master branch and Netlify to deploy each PR & Master branch automatically
- [source-map-explorer](https://github.com/danvk/source-map-explorer) - analyze and debug space usage through source maps
- [dotenv](https://github.com/motdotla/dotenv) - loads environment variables from an `.env` file
- [react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md) - polyfill for IE11 and stable browsers defined with `browserslist`
- our own self-contained libraries that will soon be released as a separate npm packages:
  - [admin-layout](src/packages/admin-layout/README.md) - simple Admin Layout component
  - [array-helpers](src/packages/array-helpers/README.md) - immutable Array modifiers for redux reducers
  - [react-google-translate-fix](src/packages/react-google-translate-fix/README.md) - fixes [React & Chrome Translate bug](https://github.com/facebook/react/issues/11538)
  - [spinner](src/packages/spinner/README.md) - management of Spinners for async calls

## Start app

To run app locally, run `yarn start` in app root directory. `react-scripts` will start web server in the development mode at `http://localhost:3000` (or first next free port).

All the Auth functionality such as Sign-up, Login, Reset password etc. requires a backend app. You can either write your own or use the [Node API Starter](https://github.com/Kamahl19/node-api-starter) which works with `React Starter` out of the box.

## Build app

To build the app for production, run `yarn build` in app root directory. Your app is then ready to be deployed! See the [create-react-app Deployment docs](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Test app

Run `yarn test` to launch the test runner in the interactive watch mode. See [create-react-app Tests docs](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Project structure

```
-| .github/: GitHub workflows for CI/CD
-| public/: Public assets
-| src/
 |--| app/: Main application (framework) files.
 |--| common/: Base components, services, utils, rules, enums etc. used in the whole app.
 |--| features/: Features bundled into separate modules including containers, components, ducks, apis etc.
 |--| packages/: Our own self-contained libraries that will soon be released as a separate npm packages
 |--| index.tsx: application entry file
-| storybook/: Storybook configuration and addons.
```

## Prettier

This project uses [Prettier](https://prettier.io/), an opinionated code formatter. In order to format code manually, run `yarn format` in app root directory. All the code is also formatted automatically on `pre-commit` hook. There is also `yarn format-check` for CI purposes to check if code is formatted properly.

## ESLint

Project comes with ESLint configured. It helps you prevent common errors.

There are multiple ways how to run ESLint.

- CLI: `yarn lint`
- in browser console while developing (after running `yarn start`)
- it runs automatically on `pre-commit` hook
- in IDE if supported (Visual Studio Code supports reports)

## Storybook

We suggest developing components in isolation. For this reason, project comes with [Storybook](https://storybook.js.org/) pre-configured.

To run separated development environment, run `yarn storybook` which will start dedicated web server at `http://localhost:9009`.

To build static storybook, run `yarn storybook:build`. This creates a static webpage which you can deploy and showcase your components to others.

More information about supported features can be found in [Storybook's Github repository](https://github.com/storybooks/storybook)

## i18n

Running `yarn extract-translations` will update alphabetically sorted JSON files with key-translations pairs. It will use default messages for keys without explicit translations.

## Analysing production JS bundle

Project comes with the `source-map-explorer` which analyzes the production JS bundle. To use it just run `yarn build` and then `yarn analyze`.

## Updating dependencies

Project comes with the default [Renovate](https://renovatebot.com) config `renovate.json`. It takes care of automated dependency updates and it's free for open-source projects. More about how to [configure here](https://renovatebot.com/docs).

## CI/CD

This project is using [GitHub's Actions](https://github.com/features/actions) to run [integration tests](.github/workflows/CI.yml) on each PR and Master branch. It includes running eslint, prettier, tests and building the app. PR becomes mergable only if it passes. We also show badge on top of `README.md` to show Master branch status. If you don't use GitHub you can remove the `.github` folder, otherwise follow these steps to configure your GitHub repository:

1. Go to Settings -> Branches -> Add rule
   - Apply to your master branch
   - Require status checks to pass before merging
   - Select build checks being run in CI.yml
2. Update path to your repository (eg. `Kamahl19/react-starter`) and name of the branch for CI badge in `README.md`

This project is using [Netlify](https://www.netlify.com/) to deploy each PR and Master branch automatically. If you don't use Netlify you can remove the `netlify.toml` file, otherwise follow these steps to setup Netlify:

1. Follow [Netlify's instructions](https://docs.netlify.com/)
2. Update Netlify status badge in `README.md` according to [these instructions](https://docs.netlify.com/monitor-sites/status-badges/)

## More Docs & Guides

This project is built on top of `create-react-app` with many [more usefull guides](https://facebook.github.io/create-react-app/docs/getting-started).

## License

This is open source software [licensed as MIT](https://github.com/Kamahl19/react-starter/blob/master/LICENSE).

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
</a>
