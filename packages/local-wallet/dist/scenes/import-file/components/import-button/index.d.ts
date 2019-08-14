/// <reference types="react" />
interface WalletProps {
    encryptedKey: string;
    address: string;
}
interface ImportButtonProps {
    onImport: (wallets: WalletProps[]) => void;
}
declare const ImportButton: ({ onImport }: ImportButtonProps) => JSX.Element;
export default ImportButton;
//# sourceMappingURL=index.d.ts.map