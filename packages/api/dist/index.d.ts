declare const NeoReactAPI: {
    localStorage: {
        getConnectedWallet: () => import("./local-storage").ConnectedWallet;
        setConnectedWallet: (wallet: import("./local-storage").ConnectedWallet) => void;
        getPrivateKey: (encryptedKey: string, password: string) => Promise<string>;
        removeConnectedWallet: () => void;
        getLocalWalletList: () => import("./local-storage").WalletInLocalStorage[];
    };
    providers: {
        [key: string]: import("./providers").ProviderMethods;
    };
};
export default NeoReactAPI;
//# sourceMappingURL=index.d.ts.map