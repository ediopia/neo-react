"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const password_input_1 = __importDefault(require("../../../components/password-input"));
const display_error_1 = __importDefault(require("../../../components/display-error"));
const ImportNep2 = (props) => {
    const { touched, errors, isSubmitting, values, setFieldValue, submitForm, status, setStatus, } = props;
    const { encryptedKey, password } = values;
    const isValidSubmit = encryptedKey && password;
    return (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("div", { className: "label" }, "Encrypted key"),
            react_1.default.createElement("input", { className: "input", placeholder: "Encrypted key", value: encryptedKey, onChange: e => setFieldValue("encryptedKey", e.target.value) }),
            errors.encryptedKey && touched.encryptedKey && (react_1.default.createElement("div", { className: "help is-danger" }, errors.encryptedKey))),
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("div", { className: "label" }, "Password"),
            react_1.default.createElement(password_input_1.default, { isLoading: isSubmitting, onKeyDown: () => (isValidSubmit ? submitForm() : false), onChange: val => setFieldValue("password", val), value: password }),
            errors.password && touched.password && (react_1.default.createElement("div", { className: "help is-danger" }, errors.password))),
        status && status.error ? (react_1.default.createElement(display_error_1.default, { message: status.error, onClose: () => setStatus(undefined) })) : (false),
        react_1.default.createElement("button", { type: "submit", disabled: !isValidSubmit, className: `button is-link ${isSubmitting ? "is-loading" : ""}` }, "Open wallet")));
};
exports.default = ImportNep2;
//# sourceMappingURL=form.js.map