"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const backup_1 = __importDefault(require("./backup"));
const password_input_1 = __importDefault(require("../../../components/password-input"));
exports.default = (props) => {
    const { onConnected, touched, errors, isSubmitting, values, setFieldValue, submitForm } = props;
    const { account } = values;
    if (account) {
        return react_1.default.createElement(backup_1.default, { onConnected: onConnected, account: values.account });
    }
    else {
        return (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement("div", { className: "field" },
                react_1.default.createElement("div", { className: "label" }, "Password for new wallet"),
                react_1.default.createElement(password_input_1.default, { onKeyDown: submitForm, onChange: val => setFieldValue("password", val), value: values.password }),
                errors.password && touched.password && (react_1.default.createElement("div", { className: "help is-danger" }, errors.password))),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("button", { className: `button is-link ${isSubmitting ? "is-loading" : ""}` }, "Create")));
    }
};
//# sourceMappingURL=form.js.map