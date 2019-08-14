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
const display_error_1 = __importDefault(require("../../../../components/display-error"));
const ImportButton = ({ onImport }) => {
    const [error, setError] = react_1.useState();
    const handleImportKeyfile = (e) => {
        if (e.target.files && e.target.files.length) {
            try {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const jsonObj = JSON.parse(event.target.result);
                    if (jsonObj.accounts && jsonObj.accounts.length) {
                        const wallets = jsonObj.accounts.map((acc) => {
                            return {
                                address: acc.address,
                                encryptedKey: acc.key,
                            };
                        });
                        onImport(wallets);
                    }
                    else {
                        setError("Cannot find account in the file");
                    }
                };
                reader.readAsText(e.target.files[0]);
                return false;
            }
            catch (e) {
                setError(e.message);
            }
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        error ? react_1.default.createElement(display_error_1.default, { message: error, onClose: () => setError(undefined) }) : false,
        react_1.default.createElement("div", { className: "file" },
            react_1.default.createElement("label", { className: "file-label" },
                react_1.default.createElement("input", { onChange: handleImportKeyfile, className: "file-input", type: "file", name: "resume", accept: ".json,application/json" }),
                react_1.default.createElement("span", { className: "file-cta button is-light" },
                    react_1.default.createElement("span", { className: "file-label" }, "Select wallet file"))))));
};
exports.default = ImportButton;
//# sourceMappingURL=index.js.map