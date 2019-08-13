import React from "react";
import { ConnectedWallet } from "../../types";
export interface Nep2States {
    encryptedKey: string;
    address: string;
    password: string;
}
interface UnlockNep2Props {
    wallet: {
        encryptedKey: string;
        address: string;
    };
    onConnected: (account: ConnectedWallet) => void;
}
declare const UnlockNep2: React.ComponentType<UnlockNep2Props>;
export default UnlockNep2;
//# sourceMappingURL=index.d.ts.map