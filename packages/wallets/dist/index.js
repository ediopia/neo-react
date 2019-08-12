"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const routes_1 = require("./routes");
const Wallets = (props) => {
    let initialEntries = ["/"];
    if (props.wallet && props.wallet.provider === "LOCAL" && !props.wallet.privateKey) {
        initialEntries = ["/imports"];
    }
    return (react_1.default.createElement(react_router_dom_1.MemoryRouter, { initialEntries: initialEntries },
        react_1.default.createElement("div", null, routes_1.routes.map((route) => {
            return (react_1.default.createElement(react_router_dom_1.Route, { key: route.path, path: route.path, exact: route.exact, render: () => {
                    const Content = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("" + route.component))));
                    return (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null) },
                        react_1.default.createElement(Content, Object.assign({}, props))));
                } }));
        }))));
};
exports.default = Wallets;
//# sourceMappingURL=index.js.map