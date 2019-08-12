"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Menu = ({ routes, location }) => {
    return (react_1.default.createElement("div", { className: "tabs is-boxed is-small" },
        react_1.default.createElement("ul", null, routes.map(route => {
            return (react_1.default.createElement("li", { className: location.pathname === route.path ? "is-active" : "", key: route.path },
                react_1.default.createElement(react_router_dom_1.NavLink, { exact: true, activeClassName: "is-active", to: `${route.path}` }, route.label)));
        }))));
};
exports.default = react_router_dom_1.withRouter(Menu);
//# sourceMappingURL=index.js.map