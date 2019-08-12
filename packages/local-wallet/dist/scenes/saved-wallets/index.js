"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const neon_js_1 = __importDefault(require("@cityofzion/neon-js"));
const formik_1 = require("formik");
const form_1 = __importDefault(require("./components/form"));
const Yup = __importStar(require("yup"));
const react_toastify_1 = require("react-toastify");
const ValidateSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
});
const SavedWallets = formik_1.withFormik({
    mapPropsToValues: (props) => {
        return {
            encryptedKey: props.savedWallets && props.savedWallets.length > 0
                ? props.savedWallets[0].encryptedKey
                : "",
            password: "",
        };
    },
    validationSchema: ValidateSchema,
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
exports.default = SavedWallets;
//# sourceMappingURL=index.js.map