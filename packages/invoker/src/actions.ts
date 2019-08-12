import Neon from "@cityofzion/neon-js";
import NeoReactAPI from "@neo-react/api";
import {
  CLOSE_INVOKER,
  CONNECT_WALLET,
  DISCONNECT_WALLET,
  OPEN_INVOKER,
  ADD_PENDING_TX,
  ConnectedWallet,
  InvokeScript,
  ConnectWalletAction,
  DisconnectWalletAction,
  CloseInvokerAction,
  OpenInvokerAction,
  AddPendingTxAction,
  ReturnTx,
} from "./types";

export const openInvoker = (script?: InvokeScript, wallet?: ConnectedWallet): OpenInvokerAction => {
  return {
    type: OPEN_INVOKER,
    payload: {
      script: script,
      wallet: wallet,
    },
  };
};

export const closeInvoker = (): CloseInvokerAction => {
  return {
    type: CLOSE_INVOKER,
  };
};

export const connectWallet = (
  wallet: ConnectedWallet,
  useLocalStorage?: boolean,
): ConnectWalletAction => {
  if (useLocalStorage) {
    NeoReactAPI.localStorage.setConnectedWallet(wallet);
  }
  return {
    type: CONNECT_WALLET,
    payload: {
      wallet,
    },
  };
};

export const disconnectWallet = (useLocalStorage?: boolean): DisconnectWalletAction => {
  if (useLocalStorage) {
    NeoReactAPI.localStorage.removeConnectedWallet();
  }
  return {
    type: DISCONNECT_WALLET,
  };
};

export const addPendingTx = (tx: ReturnTx): AddPendingTxAction => {
  return {
    type: ADD_PENDING_TX,
    payload: {
      tx: tx,
    },
  };
};

export const submitInvoke = async (
  wallet: ConnectedWallet,
  script: InvokeScript,
  networkFee: number,
): Promise<ReturnTx> => {
  try {
    return await NeoReactAPI.providers[wallet.provider].invokeContract({
      wallet,
      script,
      networkFee,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getPrivateKey = async (encryptedKey: string, password: string) => {
  try {
    const account = await Neon.create.account(encryptedKey).decrypt(password);
    return account.privateKey;
  } catch (e) {
    throw new Error(e.message);
  }
};
