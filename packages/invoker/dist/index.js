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
const reducer_1 = require("./reducer");
const actions_1 = require("./actions");
const connect_1 = __importDefault(require("./components/connect"));
exports.Connect = connect_1.default;
const scenes_1 = __importDefault(require("./scenes"));
const api_1 = __importDefault(require("@neo-react/api"));
const InvokerContext = react_1.createContext({});
exports.InvokerContext = InvokerContext;
const ContextComponent = ({ children, useLocalStorage }) => {
    const initialState = {
        isInvokerActive: false,
        wallet: useLocalStorage ? api_1.default.localStorage.getConnectedWallet() : undefined,
        script: undefined,
        pendingTxidList: [],
    };
    const [state, dispatch] = react_1.useReducer(reducer_1.reducer, initialState);
    return (react_1.default.createElement(InvokerContext.Provider, { value: {
            state: Object.assign({}, state),
            dispatch: {
                openInvoker: (script) => {
                    dispatch(actions_1.openInvoker(script));
                },
                closeInvoker: () => dispatch(actions_1.closeInvoker()),
                connectWallet: (wallet) => dispatch(actions_1.connectWallet(wallet, useLocalStorage)),
                disconnectWallet: () => dispatch(actions_1.disconnectWallet(useLocalStorage)),
                addPendingTx: tx => dispatch(actions_1.addPendingTx(tx)),
            },
        } },
        children,
        react_1.default.createElement(scenes_1.default, null)));
};
exports.default = ContextComponent;
//# sourceMappingURL=index.js.map