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
const react_router_1 = require("react-router");
const routes_1 = require("./routes");
const menu_1 = __importDefault(require("./components/menu"));
// import { ToastContainer } from "react-toastify";
require("~react-toastify/dist/ReactToastify.css");
const unlock_nep2_1 = __importDefault(require("./scenes/unlock-nep2"));
const LocalWallet = (props) => {
    const { savedWallets, wallet } = props;
    const routes = routes_1.filterRoutes(!!(savedWallets && savedWallets.length));
    return (react_1.default.createElement(react_router_1.MemoryRouter, { initialEntries: [routes[0].path] }, wallet && wallet.provider === "LOCAL" && !wallet.privateKey ? (
    // @ts-ignore
    react_1.default.createElement(unlock_nep2_1.default, Object.assign({}, props))) : (react_1.default.createElement("div", { style: { minHeight: "300px" } },
        react_1.default.createElement(menu_1.default, { routes: routes }),
        routes.map((route) => {
            return (react_1.default.createElement(react_router_1.Route, { key: route.path, path: route.path, render: () => {
                    const Content = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("" + route.component))));
                    return (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null) },
                        react_1.default.createElement(Content, Object.assign({}, props))));
                } }));
        })))));
};
exports.default = LocalWallet;
//# sourceMappingURL=index.js.map