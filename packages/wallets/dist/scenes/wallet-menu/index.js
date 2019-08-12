"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const routes_1 = require("../../routes");
const react_router_dom_1 = require("react-router-dom");
const AppMenu = () => {
    return (react_1.default.createElement("div", { className: "columns is-multiline" }, routes_1.menuRoutes.map((route) => {
        return (react_1.default.createElement("div", { key: route.path, className: "column is-4" },
            react_1.default.createElement(react_router_dom_1.Link, { className: "button is-fullwidth", to: route.path }, route.label)));
    })));
};
exports.default = AppMenu;
//# sourceMappingURL=index.js.map