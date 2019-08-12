"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const BackupKeys = (props) => {
    const [isAgreed, setAgreement] = react_1.useState(false);
    const { account, onConnected } = props;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "notification is-info" }, "You must save and backup the keys. If you lose them, you lose access to your assets."),
        react_1.default.createElement("div", { className: "content", style: { wordBreak: "break-all" } },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    "Password: ",
                    account.password),
                react_1.default.createElement("li", null,
                    "Wallet address: ",
                    account.address),
                react_1.default.createElement("li", null,
                    "Encrypted key: ",
                    account.encryptedKey),
                react_1.default.createElement("li", null,
                    "Private key: ",
                    account.privateKey))),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("label", { className: "checkbox" },
            react_1.default.createElement("input", { type: "checkbox", checked: isAgreed, onChange: () => setAgreement(!isAgreed) }),
            "\u00A0\u00A0I have saved the keys"),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("button", { disabled: !isAgreed, className: "button is-link", onClick: () => onConnected({
                provider: "LOCAL",
                address: account.address,
                encryptedKey: account.encryptedKey,
                privateKey: account.privateKey,
            }) }, "Open wallet")));
};
exports.default = BackupKeys;
//# sourceMappingURL=backup.js.map