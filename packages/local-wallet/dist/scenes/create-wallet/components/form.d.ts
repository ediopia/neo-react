/// <reference types="react" />
import { CreateWalletStates } from "../index";
import { ConnectedWallet } from "../../../types";
interface Props {
    onConnected: (account: ConnectedWallet) => void;
}
declare const _default: (props: Props & import("formik").FormikSharedConfig<{}> & import("formik").FormikState<CreateWalletStates> & import("formik").FormikActions<CreateWalletStates> & import("formik").FormikHandlers & import("formik").FormikComputedProps<CreateWalletStates> & import("formik").FormikRegistration) => JSX.Element;
export default _default;
//# sourceMappingURL=form.d.ts.map