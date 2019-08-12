import { ConnectedWallet, InvokeScript, ConnectWalletAction, DisconnectWalletAction, CloseInvokerAction, OpenInvokerAction, AddPendingTxAction, ReturnTx } from "./types";
export declare const openInvoker: (script?: InvokeScript | undefined, wallet?: ConnectedWallet | undefined) => OpenInvokerAction;
export declare const closeInvoker: () => CloseInvokerAction;
export declare const connectWallet: (wallet: ConnectedWallet, useLocalStorage?: boolean | undefined) => ConnectWalletAction;
export declare const disconnectWallet: (useLocalStorage?: boolean | undefined) => DisconnectWalletAction;
export declare const addPendingTx: (tx: ReturnTx) => AddPendingTxAction;
export declare const submitInvoke: (wallet: ConnectedWallet, script: InvokeScript, networkFee: number) => Promise<ReturnTx>;
export declare const getPrivateKey: (encryptedKey: string, password: string) => Promise<string>;
//# sourceMappingURL=actions.d.ts.map