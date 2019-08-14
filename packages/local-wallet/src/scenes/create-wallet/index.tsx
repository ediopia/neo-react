import React from "react";
import Neon from "@cityofzion/neon-js";
import { withFormik } from "formik";
import Form from "./components/form";
import * as Yup from "yup";
import { ConnectedWallet } from "../../types";
export interface Props {
  onConnected: (account: ConnectedWallet) => void;
}

export interface CreateWalletStates {
  password: string;
  account: any;
}

const ValidateSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
});

const CreateWallet = withFormik<Props, CreateWalletStates>({
  mapPropsToValues: () => {
    return {
      password: "",
      account: null,
    };
  },
  validationSchema: ValidateSchema,
  handleSubmit: (values: CreateWalletStates, { setFieldValue, setSubmitting, setStatus }) => {
    const account = Neon.create.account("");
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
        setStatus({
          error: e.message,
        });
      });
  },
})(Form);

export default CreateWallet;
