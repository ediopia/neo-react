import React from "react";
import { ConnectedWallet } from "../../types";
export interface Props {
    onConnected: (account: ConnectedWallet) => void;
}
export interface CreateWalletStates {
    password: string;
    account: any;
}
declare const CreateWallet: React.ComponentType<Props>;
export default CreateWallet;
//# sourceMappingURL=index.d.ts.map