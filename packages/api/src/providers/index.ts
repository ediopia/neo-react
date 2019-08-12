import { O3 } from "./o3";
import { NOS } from "./nos";
import { RPC } from "./rpc";

export interface ProviderMethods {
  invokeContract: (args: InvokeContract) => Promise<InvokeReturn>;
  getAccount: () => Promise<ConnectedWallet>;
}

export interface ConnectedWallet {
  provider: string;
  address: string;
  encryptedKey?: string;
  privateKey?: string;
}

export interface InvokeContract {
  wallet: ConnectedWallet;
  script: InvokeScript;
  networkFee: number;
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
  network?: "MainNet" | "TestNet" | "PrivateNet";
  args: InvokeScriptArgs[];
}

export interface InvokeReturn {
  txid: string;
  node?: string;
}

export interface InvokeScriptArgs {
  type: string;
  value: string | number;
}

export const Providers: { [key: string]: ProviderMethods } = {
  O3,
  NOS,
  LOCAL: RPC,
};
