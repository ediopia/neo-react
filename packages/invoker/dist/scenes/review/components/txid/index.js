"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const clipboard_button_1 = __importDefault(require("./clipboard-button"));
const DisplayTxid = ({ txid, onClose }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "has-text-centered", style: { marginBottom: "24px" } },
                react_1.default.createElement(fa_1.FaCheck, { className: "has-text-success is-size-1" }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("p", null, "Your transaction has been sent")),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("div", { className: "content" },
                react_1.default.createElement("div", { className: "is-flex", style: { alignItems: "center" } },
                    react_1.default.createElement("h6", { className: "title is-6 is-marginless", style: { marginRight: "5px" } }, "Transaction id"),
                    react_1.default.createElement(clipboard_button_1.default, { value: txid })),
                react_1.default.createElement("p", null, txid)),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("button", { type: "button", onClick: () => onClose(), className: "button" }, "Close"))));
};
exports.default = DisplayTxid;
//# sourceMappingURL=index.js.map