export interface ConnectedWallet {
    provider: string;
    address: string;
    encryptedKey?: string;
    privateKey?: string;
}
export interface WalletInLocalStorage {
    address: string;
    encryptedKey: string;
}
export declare const LocalWallet: {
    getConnectedWallet: () => ConnectedWallet;
    setConnectedWallet: (wallet: ConnectedWallet) => void;
    getPrivateKey: (encryptedKey: string, password: string) => Promise<string>;
    removeConnectedWallet: () => void;
    getLocalWalletList: () => WalletInLocalStorage[];
};
//# sourceMappingURL=index.d.ts.map