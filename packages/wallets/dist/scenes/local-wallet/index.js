"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const local_wallet_1 = __importDefault(require("@neo-react/local-wallet"));
const react_router_dom_1 = require("react-router-dom");
const LocalWallet = (props) => {
    console.log(props);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "button is-small is-light" }, "Back to menu"),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(local_wallet_1.default, Object.assign({}, props))));
};
exports.default = LocalWallet;
//# sourceMappingURL=index.js.map