"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const password_input_1 = __importDefault(require("../../../components/password-input"));
const display_error_1 = __importDefault(require("../../../components/display-error"));
const Form = (props) => {
    const { savedWallets = [], errors, isSubmitting, values, setFieldValue, submitForm, status, setStatus, } = props;
    return (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("div", { className: "label" }, "Saved wallets"),
            react_1.default.createElement("div", { className: "control" },
                react_1.default.createElement("div", { className: "select is-fullwidth" },
                    react_1.default.createElement("select", { onBlur: e => setFieldValue("encryptedKey", e.target.value) }, savedWallets.map(item => {
                        if (item && item.address) {
                            return (react_1.default.createElement("option", { key: item.address, value: item.encryptedKey }, item.address));
                        }
                        return false;
                    }))))),
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("div", { className: "label" }, "Password"),
            react_1.default.createElement(password_input_1.default, { onKeyDown: submitForm, value: values.password, onChange: val => setFieldValue("password", val) })),
        status && status.error ? (react_1.default.createElement(display_error_1.default, { message: status.error, onClose: () => setStatus(undefined) })) : (false),
        react_1.default.createElement("button", { disabled: !values.password, type: "submit", className: `button is-link ${isSubmitting ? "is-loading" : ""}` }, "Open")));
};
exports.default = Form;
//# sourceMappingURL=form.js.map