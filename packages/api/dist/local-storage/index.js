"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neon_js_1 = __importDefault(require("@cityofzion/neon-js"));
const store_1 = __importDefault(require("store"));
const operations_1 = __importDefault(require("store/plugins/operations"));
store_1.default.addPlugin(operations_1.default);
const getConnectedWallet = () => {
    return store_1.default.get("CURRENT_WALLET");
};
const getLocalWalletList = () => {
    return store_1.default.get("SAVED_WALLETS") ? store_1.default.get("SAVED_WALLETS") : [];
};
const getPrivateKey = (encryptedKey, password) => __awaiter(this, void 0, void 0, function* () {
    try {
        const account = yield neon_js_1.default.create.account(encryptedKey).decrypt(password);
        return account.privateKey;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
const setConnectedWallet = (wallet) => {
    if (wallet.privateKey) {
        delete wallet.privateKey;
    }
    store_1.default.set("CURRENT_WALLET", wallet);
    const savedWallets = getLocalWalletList();
    // Add in savedWalletList in local storage
    let i = 0;
    savedWallets.forEach((item) => {
        if (item.encryptedKey === wallet.encryptedKey) {
            i += 1;
        }
    });
    if (i === 0 && wallet.address && wallet.encryptedKey) {
        // @ts-ignore
        store_1.default.push("SAVED_WALLETS", wallet);
    }
};
const removeConnectedWallet = () => {
    store_1.default.remove("CURRENT_WALLET");
};
exports.LocalWallet = {
    getConnectedWallet,
    setConnectedWallet,
    getPrivateKey,
    removeConnectedWallet,
    getLocalWalletList,
};
//# sourceMappingURL=index.js.map