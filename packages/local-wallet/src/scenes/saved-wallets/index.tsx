import React from "react";
import Neon from "@cityofzion/neon-js";
import { withFormik } from "formik";
import Form from "./components/form";
import * as Yup from "yup";
import { Nep2States } from "../import-nep2";
import { LocalWalletProps } from "../../types";

const ValidateSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
});

const SavedWallets = withFormik<LocalWalletProps, Nep2States>({
  mapPropsToValues: (props: any) => {
    return {
      encryptedKey:
        props.savedWallets && props.savedWallets.length > 0
          ? props.savedWallets[0].encryptedKey
          : "",
      password: "",
    };
  },
  validationSchema: ValidateSchema,
  handleSubmit: (values: Nep2States, { props, setSubmitting, setStatus }) => {
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
        setStatus({ error: e.message });
      });
  },
})(Form);

export default SavedWallets;
