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
// @ts-ignore
const react_clipboard_js_1 = __importDefault(require("react-clipboard.js"));
const ClipboardButton = ({ value }) => {
    const [isCopied, setCopy] = react_1.useState(false);
    return (react_1.default.createElement(react_clipboard_js_1.default, { onClick: () => setCopy(true), className: "button is-light is-small", "data-clipboard-text": value }, isCopied ? `Copied` : `Copy`));
};
exports.default = ClipboardButton;
//# sourceMappingURL=index.js.map