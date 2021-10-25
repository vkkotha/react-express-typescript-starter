# React-Express-Typescript-Starter

A starter project for React/Express client/server project with Typescript.
Uses Typescript for both client and server side programming.

## Features
- Both React Client and Express Server code in same project.
- [eslint](https://eslint.org) on both Client and Server with different linting rules.
- Sensible industry recommended eslint rules with few overrides.
- [prettier](https://prettier.io) for Code formatting
- [jest](https://jestjs.io) and [@testing-library](https://testing-library.com/docs/) for Unit testing React app.
- [webpack](https://webpack.js.org) for Client side app bundling.
- Hashed application resource files generation for React app.
- Template based index.html file generation and html pretty output.
- npm scripts to lint, test, start server in dev mode.
- npm scripts to watch for client/server changes for linting, webpack generation.
- npm script to run client only tests.
- npm scripts to build for production with optimized resource generation.
- npm script to start production server.
- Client app generation to public folder, so other static assets can be used with app.
- Client app served with Express along with Server side Apis.
- Configured to used Typescript as primary language for both Client app and Server side coding.
- Environment specific config options for Server side app using npm [config](https://www.npmjs.com/package/config) module.
- Express server app accesslogs with [morgan](https://www.npmjs.com/package/morgan)
- Sensible minimal .gitingore, .eslintignore files.

## Usage
- Clone the repository.
- Open shell prompt and run
```shell script
$ npm install
$ npm run watch
```
- Open second shell prompt and run
```shell script
$ npm run start:dev
```
- Click on the Printed url from server logs to goto app. [http://localhost:300](http://localhost:3000) by default.
- Run run on a different port either change config/default.json or run
```shell script
$ PORT=3001 npm run start:dev
```
## Building project
- To build for development run
```shell script
$ npm run build:dev
```
This generates development version of following files
```
- build/server/*
- client/public/index.html
- client/public/app/*
```
- To build for production or in CI/CD use
```shell script
$ npm run build
```

## Using in your own project
- Search and Replace 'react-express-typescript-starter' with your own project name.
- Update Readme.md to you project needs.
- Checkin to your own repository.

## TODO
- Unit testing framework for Server side app.
- e2e testing framework with [cypress](https://www.cypress.io).
- mock test examples on both client and server.
- Add DB Connectivity on server.
- DB dev setup framework.
- DB Upgrade framework.
- CI/CD scripts using github actions.
- Deploy to K8 Cluster with helm charts.
- Deployment with Server config based on environment.
- Configuration Secrets management.
- Add React samples with Redux Store, Effects, Sagas
- React sample which can interact with backend api.
- Security framework integration for authentication.
- User/Role framework.
- Feature flagging framework.
- Navigation & Routing.
- Error handling.
- Sample for data Grids/Forms.
- Responsive React app.
- Setting up with [React Native](https://reactnative.dev/) framework.
- Deploy Client app on mobile devices. 

## License
[MIT License](https://github.com/vkkotha/react-express-typescript-starter/blob/master/LICENSE).