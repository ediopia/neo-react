import { RouteProps } from "./types";

export const localWalletRoutes: RouteProps[] = [
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

export const filterRoutes = (hasSavedWallets: boolean) => {
  return localWalletRoutes.filter(route => {
    return !(route.path === "/saved-wallets" && !hasSavedWallets);
  });
};
