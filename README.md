# Neo-React 👋

> React components and libraries that helps dApps to interact with NEO blockchain <br/>
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Overview
This project aims to be useful react components and library to make NEO dApp development easier.

## Included packages
>Built as `esm` and `cjs`
- **@neo-react/invoker**
  - React application that helps submitting a new transaction in order to invoke smart contracts.
  - Uses the `@neo-react/wallets` package (also inside monorepo).
  - [Docs](https://github.com/ediopia/neo-react/tree/master/packages/invoker)
  - [Demo](https://codesandbox.io/s/neo-reactinvoker-mfvx8)

- **@neo-react/wallets**
  - React application that helps to handle NEO wallets and its keys for NEO dApp development.
  - Uses the `@neo-react/local-wallet` package (also inside monorepo).
  - [Docs](https://github.com/ediopia/neo-react/tree/master/packages/wallets)
  - [Demo](https://codesandbox.io/s/neo-reactwallets-8d4hw)

- **@neo-react/local-wallet**
  - React application that helps to handle encrypting and decrypting NEO wallet keys.
  - [Docs](https://github.com/ediopia/neo-react/tree/master/packages/local-wallet)
  - [Demo](https://codesandbox.io/s/neo-reactlocal-wallet-yfcvd)
  
- **@neo-react/api**
  - Library that provides useful methods to develop NEO dApp.
  

## Style
All packages use [Bulma](https://bulma.io/documentation/overview/start/). <br/>
Use [CDN file](https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css) or import css from npm package in your top react component.
  
## Install

```sh
npm i @neo-react/[packages]
```

## Setup to contribute

This repository is a typescript mono-repo using Lerna and Yarn workspaces. Please ensure the following is installed:

- Yarn (a version that support workspaces)
- Node (latest LTS aka v8 at time of writing)

> `lerna` is optional and only required for advanced operations.

```sh
git clone https://github.com/ediopia/neo-react
cd neo-react
yarn
yarn bootstrap
yarn build
```

## Author

👤 **Eddie Jung**

* Github: [@ediopia](https://github.com/ediopia)

## Show your support

Give a ⭐️ if you ❤️ NEO!

