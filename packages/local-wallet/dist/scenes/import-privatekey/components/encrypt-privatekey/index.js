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
const password_input_1 = __importDefault(require("../../../../components/password-input"));
const EncryptPrivateKey = ({ privateKey, onEncrypt }) => {
    const [password, setPassword] = react_1.useState("");
    const [isLoading, setLoading] = react_1.useState(false);
    const encrypt = () => {
        setLoading(true);
        const account = neon_js_1.default.create.account(privateKey);
        account
            .encrypt(password)
            .then(account => {
            setLoading(false);
            onEncrypt({
                provider: "LOCAL",
                encryptedKey: account.encrypted,
                address: account.address,
                privateKey,
                password,
            });
        })
            .catch(error => {
            react_toastify_1.toast.error(error.message);
            setLoading(false);
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("div", { className: "label" }, "Password"),
            react_1.default.createElement(password_input_1.default, { value: password, onChange: val => setPassword(val), onKeyDown: () => {
                    if (password) {
                        encrypt();
                    }
                } })),
        react_1.default.createElement("div", { className: "is-size-7 content" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "Password must be at least 6 characters long."),
                react_1.default.createElement("li", null, "You will need this password to unlock your wallet."))),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("button", { onClick: encrypt, type: "button", className: `button is-link ${isLoading ? "is-loading" : ""}` }, "Encrypt!")));
};
exports.default = EncryptPrivateKey;
//# sourceMappingURL=index.js.map