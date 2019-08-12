export declare const OPEN_INVOKER = "app/invoke/OPEN_INVOKER";
export declare const CLOSE_INVOKER = "app/invoke/CLOSE_INVOKER";
export declare const CONNECT_WALLET = "app/invoke/CONNECT_WALLET";
export declare const DISCONNECT_WALLET = "app/invoke/DISCONNECT_WALLET";
export declare const ADD_PENDING_TX = "app/invoke/ADD_PENDING_TX";
export interface InvokerProviderValues {
    state: InvokerContextState;
    dispatch: {
        openInvoker: (script?: InvokeScript, wallet?: ConnectedWallet) => void;
        closeInvoker: () => void;
        connectWallet: (wallet: ConnectedWallet) => void;
        disconnectWallet: () => void;
        addPendingTx: (tx: ReturnTx) => void;
    };
}
export interface InvokerContextState {
    isInvokerActive: boolean;
    wallet?: ConnectedWallet;
    script?: InvokeScript;
    pendingTxidList: PendingTxid[];
}
export interface ConnectedWallet {
    provider: string;
    address: string;
    encryptedKey?: string;
    privateKey?: string;
}
export interface InvokeScript {
    transfer?: {
        from: string;
        to: string;
        amount: number;
        symbol: string;
    };
    operation: string;
    scriptHash: string;
    fee?: number;
    encodeArgs?: boolean;
    network?: 'MainNet' | 'TestNet' | 'PrivateNet';
    args: InvokeScriptArgs[];
}
export interface ReturnTx {
    txid: string;
    node?: string;
}
export interface PendingTxid {
    txid: string;
    node?: string;
}
export interface InvokeScriptArgs {
    type: string;
    value: string | number;
}
export interface OpenInvokerAction {
    type: typeof OPEN_INVOKER;
    payload: {
        wallet?: ConnectedWallet;
        script?: InvokeScript;
    };
}
export interface CloseInvokerAction {
    type: typeof CLOSE_INVOKER;
}
export interface ConnectWalletAction {
    type: typeof CONNECT_WALLET;
    payload: {
        wallet: ConnectedWallet;
    };
}
export interface DisconnectWalletAction {
    type: typeof DISCONNECT_WALLET;
}
export interface AddPendingTxAction {
    type: typeof ADD_PENDING_TX;
    payload: {
        tx: PendingTxid;
    };
}
export declare type InvokeActionTypes = AddPendingTxAction | OpenInvokerAction | CloseInvokerAction | ConnectWalletAction | DisconnectWalletAction;
declare const _default: {
    CONNECT_WALLET: string;
    DISCONNECT_WALLET: string;
};
export default _default;
//# sourceMappingURL=types.d.ts.map