"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const backup_1 = __importDefault(require("../create-wallet/components/backup"));
const verify_privatekey_1 = __importDefault(require("./components/verify-privatekey"));
const encrypt_privatekey_1 = __importDefault(require("./components/encrypt-privatekey"));
const ImportPrivatekey = (props) => {
    const [privateKey, setPrivateKey] = react_1.useState("");
    const [wallet, setWallet] = react_1.useState(undefined);
    if (wallet) {
        return (
        // @ts-ignore
        react_1.default.createElement(backup_1.default, Object.assign({}, props, { account: wallet })));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, privateKey ? (
    // @ts-ignore
    react_1.default.createElement(encrypt_privatekey_1.default, { privateKey: privateKey, onEncrypt: wallet => setWallet(wallet) })) : (react_1.default.createElement(verify_privatekey_1.default, { onVerify: privateKey => setPrivateKey(privateKey) }))));
};
exports.default = ImportPrivatekey;
//# sourceMappingURL=index.js.map