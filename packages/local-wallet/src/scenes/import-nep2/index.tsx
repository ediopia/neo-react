import React from "react";
import Neon from "@cityofzion/neon-js";
import { withFormik, FormikErrors } from "formik";
import Form from "./components/form";
import { ConnectedWallet } from "../../types";

export interface Nep2States {
  encryptedKey: string;
  password: string;
}

interface ImportNep2Props {
  wallet?: ConnectedWallet;
  onConnected: (account: ConnectedWallet) => void;
}

const ImportNep2 = withFormik<ImportNep2Props, Nep2States>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      encryptedKey: props.wallet && props.wallet.encryptedKey ? props.wallet.encryptedKey : "",
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
  handleSubmit: (values: Nep2States, { props, setSubmitting, setStatus }) => {
    const account = Neon.create.account(values.encryptedKey);
    setStatus(undefined);
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
        setStatus({
          error: e.message,
        });
      });
  },
})(Form);

export default ImportNep2;
