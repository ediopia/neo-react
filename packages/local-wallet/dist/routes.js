"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localWalletRoutes = [
    {
        label: "Saved wallets",
        path: "/saved-wallets",
        component: "./scenes/saved-wallets",
    },
    {
        label: "Passphrase",
        path: "/import-nep2",
        component: "./scenes/import-nep2",
    },
    {
        label: "Wallet file",
        path: "/import-file",
        component: "./scenes/import-file",
    },
    {
        label: "Private key",
        path: "/privatekey",
        component: "./scenes/import-privatekey",
    },
    {
        label: "New wallet",
        path: "/create",
        component: "./scenes/create-wallet",
    },
];
exports.filterRoutes = (hasSavedWallets) => {
    return exports.localWalletRoutes.filter(route => {
        return !(route.path === "/saved-wallets" && !hasSavedWallets);
    });
};
//# sourceMappingURL=routes.js.map