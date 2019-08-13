import Neon from "@cityofzion/neon-js";
import store from "store";
import operations from "store/plugins/operations";
store.addPlugin(operations);

export interface ConnectedWallet {
  provider: string;
  address: string;
  encryptedKey?: string;
  privateKey?: string;
}

const getConnectedWallet = (): ConnectedWallet => {
  return store.get("CURRENT_WALLET");
};

export interface WalletInLocalStorage {
  address: string;
  encryptedKey: string;
}

const getLocalWalletList = (): WalletInLocalStorage[] => {
  return store.get("SAVED_WALLETS") ? store.get("SAVED_WALLETS") : [];
};

const getPrivateKey = async (encryptedKey: string, password: string) => {
  try {
    const account = await Neon.create.account(encryptedKey).decrypt(password);
    return account.privateKey;
  } catch (e) {
    throw new Error(e.message);
  }
};

const setConnectedWallet = (wallet: ConnectedWallet) => {
  const newWallet = {
    provider: wallet.provider,
    encryptedKey: wallet.encryptedKey,
    address: wallet.address,
  };
  store.set("CURRENT_WALLET", newWallet);

  const savedWallets = getLocalWalletList();
  // Add in savedWalletList in local storage
  let i = 0;
  savedWallets.forEach((item: WalletInLocalStorage) => {
    if (item.encryptedKey === newWallet.encryptedKey) {
      i += 1;
    }
  });
  if (i === 0 && newWallet.address && newWallet.encryptedKey) {
    // @ts-ignore
    store.push("SAVED_WALLETS", newWallet);
  }
};

const removeConnectedWallet = () => {
  store.remove("CURRENT_WALLET");
};

export const LocalWallet = {
  getConnectedWallet,
  setConnectedWallet,
  getPrivateKey,
  removeConnectedWallet,
  getLocalWalletList,
};
