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
const CreateWallet = formik_1.withFormik({
    mapPropsToValues: () => {
        return {
            password: "",
            account: null,
        };
    },
    validationSchema: ValidateSchema,
    handleSubmit: (values, { setFieldValue, setSubmitting }) => {
        const account = neon_js_1.default.create.account("");
        account
            .encrypt(values.password)
            .then(account => {
            setSubmitting(false);
            setFieldValue("account", {
                address: account.address,
                encryptedKey: account.encrypted,
                privateKey: account.privateKey,
                password: values.password,
            });
        })
            .catch(e => {
            setSubmitting(false);
            react_toastify_1.toast.error(e.message);
            // setStatus({
            //   errorMsg: e.message,
            // });
        });
    },
})(form_1.default);
exports.default = CreateWallet;
//# sourceMappingURL=index.js.map