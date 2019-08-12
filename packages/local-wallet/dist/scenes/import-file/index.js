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
const import_nep2_1 = __importDefault(require("../import-nep2"));
const react_toastify_1 = require("react-toastify");
const ImportFile = (props) => {
    const { onConnected } = props;
    const [encryptedKey, setEncryptedKey] = react_1.useState("");
    const [address, setAddress] = react_1.useState("");
    const handleImportKeyfile = (e) => {
        try {
            const reader = new FileReader();
            reader.onload = (event) => {
                const jsonObj = JSON.parse(event.target.result);
                if (jsonObj.key) {
                    setEncryptedKey(jsonObj.key);
                    setAddress(jsonObj.address);
                }
                // TODO::Need to make better importing system
                if (jsonObj.accounts && jsonObj.accounts.length > 0) {
                    setEncryptedKey(jsonObj.accounts[0].key);
                    setAddress(jsonObj.accounts[0].address);
                }
            };
            if (e.target.files) {
                if (e.target.files.length > 0) {
                    reader.readAsText(e.target.files[0]);
                }
            }
            return false;
        }
        catch (e) {
            react_toastify_1.toast.error(e.message);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, encryptedKey ? (react_1.default.createElement(import_nep2_1.default, { onConnected: onConnected, wallet: {
            provider: "LOCAL",
            encryptedKey,
            address,
        } })) : (react_1.default.createElement("div", { className: "file" },
        react_1.default.createElement("label", { className: "file-label" },
            react_1.default.createElement("input", { onChange: handleImportKeyfile, className: "file-input", type: "file", name: "resume", accept: ".json,application/json" }),
            react_1.default.createElement("span", { className: "file-cta button is-light" },
                react_1.default.createElement("span", { className: "file-label" }, "Select wallet file")))))));
};
exports.default = ImportFile;
//# sourceMappingURL=index.js.map