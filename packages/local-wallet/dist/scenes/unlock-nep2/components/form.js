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
    const { touched, errors, isSubmitting, values, setFieldValue, submitForm, status, setStatus } = props;
    const { encryptedKey, password } = values;
    const isValidSubmit = encryptedKey && password;
    return (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement("h5", { className: "title is-6" }, "Unlock your wallet"),
        react_1.default.createElement("p", { className: "content is-small", style: { wordBreak: "break-all" } },
            react_1.default.createElement("strong", null, "Address"),
            react_1.default.createElement("br", null),
            values.address,
            react_1.default.createElement("br", null),
            react_1.default.createElement("strong", null, "Encrypted key"),
            react_1.default.createElement("br", null),
            " ",
            values.encryptedKey),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("div", { className: "field" },
            react_1.default.createElement("div", { className: "label" }, "Password"),
            react_1.default.createElement(password_input_1.default, { isLoading: isSubmitting, onKeyDown: () => (isValidSubmit ? submitForm() : false), onChange: val => setFieldValue("password", val), value: password }),
            errors.password && touched.password && (react_1.default.createElement("div", { className: "help is-danger" }, errors.password))),
        status && status.error ? (react_1.default.createElement(display_error_1.default, { message: status.error, onClose: () => setStatus(undefined) })) : (false),
        react_1.default.createElement("button", { type: "submit", disabled: !isValidSubmit, className: `button is-link ${isSubmitting ? "is-loading" : ""}` }, "Open wallet")));
};
exports.default = Form;
//# sourceMappingURL=form.js.map