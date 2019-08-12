export interface LocalWalletProps {
  wallet?: ConnectedWallet;
  savedWallets?: Nep2[];
  onConnected: (wallet: ConnectedWallet) => void;
}

export interface RouteProps {
  label: string;
  path: string;
  component: string;
}

export interface Nep2 {
  encryptedKey: string;
  address: string;
}

export interface ConnectedWallet {
  provider: string;
  address: string;
  encryptedKey?: string;
  privateKey?: string;
}
