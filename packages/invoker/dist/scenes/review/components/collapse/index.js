"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_collapsible_1 = __importDefault(require("react-collapsible"));
const fa_1 = require("react-icons/fa");
const ReviewInvokeScript = ({ script }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_collapsible_1.default, { trigger: react_1.default.createElement("div", { className: "is-size-6 is-flex has-text-grey-dark is-flex", style: { alignItems: "center" } },
                react_1.default.createElement("span", { className: "icon" },
                    react_1.default.createElement(fa_1.FaAngleDown, null)),
                react_1.default.createElement("div", null, "Invoke details")) },
            react_1.default.createElement("p", { style: { padding: "10px" }, className: "content is-small" },
                "Contract: ",
                script.scriptHash,
                react_1.default.createElement("br", null),
                "Operation: ",
                script.operation,
                react_1.default.createElement("br", null),
                "Args: ",
                react_1.default.createElement("br", null),
                script.args.map(s => (react_1.default.createElement("span", { key: s.value },
                    s.value,
                    react_1.default.createElement("br", null))))))));
};
exports.default = ReviewInvokeScript;
//# sourceMappingURL=index.js.map