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
const api_1 = __importDefault(require("@neo-react/api"));
const types_1 = require("./types");
exports.openInvoker = (script, wallet) => {
    return {
        type: types_1.OPEN_INVOKER,
        payload: {
            script: script,
            wallet: wallet,
        },
    };
};
exports.closeInvoker = () => {
    return {
        type: types_1.CLOSE_INVOKER,
    };
};
exports.connectWallet = (wallet, useLocalStorage) => {
    if (useLocalStorage) {
        api_1.default.localStorage.setConnectedWallet(wallet);
    }
    return {
        type: types_1.CONNECT_WALLET,
        payload: {
            wallet,
        },
    };
};
exports.disconnectWallet = (useLocalStorage) => {
    if (useLocalStorage) {
        api_1.default.localStorage.removeConnectedWallet();
    }
    return {
        type: types_1.DISCONNECT_WALLET,
    };
};
exports.addPendingTx = (tx) => {
    return {
        type: types_1.ADD_PENDING_TX,
        payload: {
            tx: tx,
        },
    };
};
exports.submitInvoke = (wallet, script, networkFee) => __awaiter(this, void 0, void 0, function* () {
    try {
        return yield api_1.default.providers[wallet.provider].invokeContract({
            wallet,
            script,
            networkFee,
        });
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.getPrivateKey = (encryptedKey, password) => __awaiter(this, void 0, void 0, function* () {
    try {
        const account = yield neon_js_1.default.create.account(encryptedKey).decrypt(password);
        return account.privateKey;
    }
    catch (e) {
        throw new Error(e.message);
    }
});
//# sourceMappingURL=actions.js.map