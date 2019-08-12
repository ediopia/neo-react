# `@neo-react/wallets`

>This package helps to handle NEO wallets and its keys for NEO dApp development.

## Features

- Connect with O3 wallet.
- Connect with NOS client.
- Local wallet that provides encrypting and decrypting with wallet keys.

## Usage

```typescript
import React from 'react';
import ReactNeoWallets from '@neo-react/wallets';

interface WalletProps {
  provider: string;
  address: string;
  encryptedKey?: string;
  privateKey?: string;
}

const walletsInLocalStorage = [
  {
    encryptedKey: '6PYRj8SFUkDXm8vBunXkvVGAAan6HF3iDfKT4wcQMkpGkDHsVG8cbD9eSi',
    address: 'AVKEWZxPog7j5gqfMoLhgox9HK44tWUG2J',
  },
  {
    encryptedKey: '6PYPUoZGMsGjWuqxekVcXrpzMdtks7VTSUZDoEpHLitjB2AnpWeLbpk2Dp',
    address: 'AeRhK6NDmGiNTz8yAAJe3o4ecaqztFL12B',
  },
];

const WalletModal = () => {
  return (
    <ReactNeoWallets
      savedWallets={walletsInLocalStorage}
      onConnected={(wallet: WalletProps) => {
        /* Handle connected wallet */
      }}
    />
  );
};
```
