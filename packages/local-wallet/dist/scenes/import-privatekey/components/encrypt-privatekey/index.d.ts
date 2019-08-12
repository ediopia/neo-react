/// <reference types="react" />
import { ConnectedWallet } from "../../../../types";
interface NewWalletProps extends ConnectedWallet {
    password: string;
}
interface VerifyPrivateKeyProps {
    privateKey: string;
    onEncrypt: (wallet: NewWalletProps) => void;
}
declare const EncryptPrivateKey: ({ privateKey, onEncrypt }: VerifyPrivateKeyProps) => JSX.Element;
export default EncryptPrivateKey;
//# sourceMappingURL=index.d.ts.map