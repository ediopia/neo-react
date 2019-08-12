/// <reference types="react" />
import { ConnectedWallet } from "../../../types";
interface BackupKeysProps {
    account: {
        password: string;
        address: string;
        encryptedKey: string;
        privateKey: string;
    };
    onConnected: (account: ConnectedWallet) => void;
}
declare const BackupKeys: (props: BackupKeysProps) => JSX.Element;
export default BackupKeys;
//# sourceMappingURL=backup.d.ts.map