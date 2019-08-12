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
const neon_js_1 = __importDefault(require("@cityofzion/neon-js"));
const react_toastify_1 = require("react-toastify");
const VerifyPrivateKey = ({ onVerify }) => {
    const [privateKey, setPrivateKey] = react_1.useState("");
    const verifyPrivatekey = () => {
        if (privateKey) {
            if (neon_js_1.default.is.privateKey(privateKey) || neon_js_1.default.is.wif(privateKey)) {
                onVerify(privateKey);
            }
            else {
                react_toastify_1.toast.error("Please check your private key. It it not a valid type.");
            }
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("label", { htmlFor: "privatekey", className: "label" }, "Private key"),
            react_1.default.createElement("input", { id: "privatekey", className: "input", placeholder: "Private Key", value: privateKey, onChange: e => setPrivateKey(e.target.value), onKeyDown: e => {
                    if (e.keyCode === 13 && privateKey) {
                        verifyPrivatekey();
                    }
                } })),
        react_1.default.createElement("button", { onClick: verifyPrivatekey, disabled: !privateKey, className: `button is-link` }, "Verify your private key")));
};
exports.default = VerifyPrivateKey;
//# sourceMappingURL=index.js.map