import React from "react";
import Neon from "@cityofzion/neon-js";
import { withFormik, FormikErrors } from "formik";
import Form from "./components/form";
import { ConnectedWallet } from "../../types";
import { toast } from "react-toastify";

export interface Nep2States {
  encryptedKey: string;
  address: string;
  password: string;
}

interface UnlockNep2Props {
  wallet: {
    encryptedKey: string;
    address: string;
  };
  onConnected: (account: ConnectedWallet) => void;
}

const UnlockNep2 = withFormik<UnlockNep2Props, Nep2States>({
  mapPropsToValues: props => {
    return {
      address: props.wallet.address,
      encryptedKey: props.wallet.encryptedKey,
      password: "",
    };
  },
  validate: (values: Nep2States) => {
    let errors: FormikErrors<any> = {};
    if (!values.encryptedKey) {
      errors.encryptedKey = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!Neon.is.encryptedKey(values.encryptedKey)) {
      errors.encryptedKey = "It is not valid encrypted key format";
    }
    return errors;
  },
  handleSubmit: (values: Nep2States, { props, setSubmitting }) => {
    const account = Neon.create.account(values.encryptedKey);
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
        toast.error(e.message);
      });
  },
})(Form);

export default UnlockNep2;
