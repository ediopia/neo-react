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
const network_fee_1 = __importStar(require("./components/network-fee"));
const actions_1 = require("../../actions");
const collapse_1 = __importDefault(require("./components/collapse"));
const txid_1 = __importDefault(require("./components/txid"));
const ReviewInvoke = ({ wallet, script, onSubmit }) => {
    const { transfer, scriptHash, operation } = script;
    const [values, setValues] = react_1.useState({
        tx: undefined,
        networkFee: network_fee_1.networkFees[0],
        isSubmitting: false,
        error: undefined,
    });
    const handleSubmit = () => {
        setValues(Object.assign({}, values, { isSubmitting: true }));
        actions_1.submitInvoke(wallet, script, values.networkFee)
            .then(tx => {
            setValues(Object.assign({}, values, { tx }));
        })
            .catch(e => {
            setValues(Object.assign({}, values, { isSubmitting: false }));
        });
    };
    if (values.tx) {
        // @ts-ignore
        return react_1.default.createElement(txid_1.default, { txid: values.tx.txid, onClose: () => onSubmit(values.tx) });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(network_fee_1.default, { value: values.networkFee, setValue: val => setValues(Object.assign({}, values, { networkFee: val })) }),
        react_1.default.createElement("hr", null),
        react_1.default.createElement(collapse_1.default, { script: script }),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("button", { className: values.isSubmitting ? "button is-primary is-loading" : "button is-primary", onClick: handleSubmit }, "Confirm")));
};
exports.default = ReviewInvoke;
//# sourceMappingURL=index.js.map