"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neon_js_1 = __importDefault(require("@cityofzion/neon-js"));
const formik_1 = require("formik");
const form_1 = __importDefault(require("./components/form"));
const react_toastify_1 = require("react-toastify");
const UnlockNep2 = formik_1.withFormik({
    mapPropsToValues: props => {
        return {
            address: props.wallet.address,
            encryptedKey: props.wallet.encryptedKey,
            password: "",
        };
    },
    validate: (values) => {
        let errors = {};
        if (!values.encryptedKey) {
            errors.encryptedKey = "Required";
        }
        if (!values.password) {
            errors.password = "Required";
        }
        if (!neon_js_1.default.is.encryptedKey(values.encryptedKey)) {
            errors.encryptedKey = "It is not valid encrypted key format";
        }
        return errors;
    },
    handleSubmit: (values, { props, setSubmitting }) => {
        const account = neon_js_1.default.create.account(values.encryptedKey);
        account
            .decrypt(values.password)
            .then(account => {
            setSubmitting(false);
            props.onConnected({
                provider: "LOCAL",
                address: account.address,
                privateKey: account.privateKey,
                encryptedKey: account.encrypted,
            });
        })
            .catch(e => {
            setSubmitting(false);
            react_toastify_1.toast.error(e.message);
        });
    },
})(form_1.default);
exports.default = UnlockNep2;
//# sourceMappingURL=index.js.map