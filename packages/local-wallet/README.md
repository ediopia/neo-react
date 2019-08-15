# `@neo-react/local-wallet`

> React component that helps to handle encrypting and decrypting NEO wallet keys.

## Demo
[Click](https://codesandbox.io/s/neo-reactlocal-wallet-yfcvd)

## Usage

```typescript
import React from "react";
import LocalWallet from "@neo-react/local-wallet";

interface ConnectedWallet {
  provider: string;
  address: string;
  encryptedKey?: string;
  privateKey?: string;
}

const WalletModal = () => {
  return(
    <LocalWallet 
      onConnected={(connectedWallet: ConnectedWallet) => {
        /* Handle data using your own state manager */
      }} 
    />
  )
}
```

## Api

| Props | Type | Description |
| --- | ---  | --- |
| savedWallets | array | It passes encrypted key list.
| onConnected | func | It returns wallet data after it is connected.

