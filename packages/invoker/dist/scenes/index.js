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
const review_1 = __importDefault(require("./review"));
const index_1 = require("../index");
const wallets_1 = __importDefault(require("@neo-react/wallets"));
const InvokerComponent = () => {
    const { state, dispatch } = react_1.useContext(index_1.InvokerContext);
    const { wallet, script, isInvokerActive } = state;
    let isLocalWalletWithoutPrivateKey = wallet && Object.keys(wallet).length > 0 && wallet.provider === "LOCAL" && !wallet.privateKey;
    return (react_1.default.createElement("div", { className: isInvokerActive ? "modal is-active" : "modal" },
        react_1.default.createElement("div", { className: "modal-background", onClick: dispatch.closeInvoker }),
        react_1.default.createElement("div", { className: "modal-content" },
            react_1.default.createElement("div", { className: "box" }, !wallet ? (react_1.default.createElement(wallets_1.default, { onConnected: wallet => {
                    dispatch.connectWallet(wallet);
                    dispatch.closeInvoker();
                } })) : script ? (isLocalWalletWithoutPrivateKey ? (react_1.default.createElement(wallets_1.default, { wallet: wallet ? wallet : undefined, onConnected: wallet => {
                    dispatch.connectWallet(wallet);
                } })) : (react_1.default.createElement(review_1.default, { wallet: state.wallet, script: state.script, onSubmit: tx => {
                    dispatch.addPendingTx(tx);
                    dispatch.closeInvoker();
                } }))) : null)),
        react_1.default.createElement("button", { onClick: dispatch.closeInvoker, className: "modal-close is-large", "aria-label": "close" })));
};
exports.default = InvokerComponent;
//# sourceMappingURL=index.js.map