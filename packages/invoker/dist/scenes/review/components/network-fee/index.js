"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
exports.networkFees = [0, 0.0001];
const NetworkFee = ({ value, setValue }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h6", { className: "title is-6" }, "Network fee"),
        react_1.default.createElement("div", { className: "buttons has-addons" }, exports.networkFees.map(fee => {
            let label = "";
            switch (fee) {
                case 0:
                    label = "Free";
                    break;
                case 0.0001:
                    label = "0.0001 GAS";
                    break;
            }
            return (react_1.default.createElement("button", { type: "button", key: label, onClick: () => setValue(fee), className: fee === value ? "button is-active is-primary is-small" : "button is-small" }, `${label}`));
        }))));
};
exports.default = NetworkFee;
//# sourceMappingURL=index.js.map