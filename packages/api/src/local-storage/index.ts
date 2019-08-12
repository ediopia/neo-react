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
  if (wallet.privateKey) {
    delete wallet.privateKey;
  }

  store.set("CURRENT_WALLET", wallet);

  const savedWallets = getLocalWalletList();
  // Add in savedWalletList in local storage
  let i = 0;
  savedWallets.forEach((item: WalletInLocalStorage) => {
    if (item.encryptedKey === wallet.encryptedKey) {
      i += 1;
    }
  });
  if (i === 0 && wallet.address && wallet.encryptedKey) {
    // @ts-ignore
    store.push("SAVED_WALLETS", wallet);
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
