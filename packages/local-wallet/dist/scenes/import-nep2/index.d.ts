import React from "react";
import { ConnectedWallet } from "../../types";
export interface Nep2States {
    encryptedKey: string;
    password: string;
}
interface ImportNep2Props {
    wallet?: ConnectedWallet;
    onConnected: (account: ConnectedWallet) => void;
}
declare const ImportNep2: React.ComponentType<ImportNep2Props>;
export default ImportNep2;
//# sourceMappingURL=index.d.ts.map