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
const import_button_1 = __importDefault(require("./components/import-button"));
const saved_wallets_1 = __importDefault(require("../saved-wallets"));
const ImportFile = (props) => {
    const { onConnected } = props;
    const [wallets, setWallets] = react_1.useState();
    return (react_1.default.createElement(react_1.default.Fragment, null, wallets && wallets.length ? (react_1.default.createElement(saved_wallets_1.default, { onConnected: onConnected, savedWallets: wallets })) : (react_1.default.createElement(import_button_1.default, { onImport: setWallets }))));
};
exports.default = ImportFile;
//# sourceMappingURL=index.js.map