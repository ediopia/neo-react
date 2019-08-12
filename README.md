# Neo-React 👋

> React components and libraries that helps dApps to interact with NEO blockchain <br/>
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Overview
This project aims to be useful react components and library to make NEO dApp development easier.

## Included packages

- **@neo-react/invoker**
  - React application that helps submitting a new transaction in order to invoke smart contracts.
  - Built as `esm`
  - Uses the `@neo-react/wallets` package (also inside monorepo).

- **@neo-react/wallets**
  - React application that helps to handle NEO wallets and its keys for NEO dApp development.
  - Built as `esm`
  - Uses the `@neo-react/local-wallet` package (also inside monorepo).

- **@neo-react/local-wallet**
  - React application that helps to handle encrypting and decrypting NEO wallet keys.
  - Built as `esm`
  
- **@neo-react/api**
  - Library that provides useful methods to develop NEO dApp.
  - Built as `esm`
  
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

