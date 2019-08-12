import { ReactNode } from "react";
import { ConnectedWallet, Nep2 } from "./types";
export interface WalletsProps {
    wallet?: ConnectedWallet;
    savedWallets?: Nep2[];
    onConnected: (account: ConnectedWallet) => void;
}
export interface WalletsRoute {
    path: string;
    component: ReactNode;
    exact?: boolean;
}
declare const Wallets: (props: WalletsProps) => JSX.Element;
export default Wallets;
//# sourceMappingURL=index.d.ts.map