"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DisplayError = ({ message, onClose }) => {
    return (react_1.default.createElement("div", { className: "notification is-danger" },
        react_1.default.createElement("button", { onClick: onClose, className: "delete" }),
        message));
};
exports.default = DisplayError;
//# sourceMappingURL=index.js.map