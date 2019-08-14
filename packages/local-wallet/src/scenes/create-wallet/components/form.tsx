import React from "react";
import { Form as FormikForm, FormikProps } from "formik";
import BackupKeys from "./backup";
import { CreateWalletStates } from "../index";
import { ConnectedWallet } from "../../../types";
import PasswordInput from "../../../components/password-input";
import DisplayError from "../../../components/display-error";

interface Props {
  onConnected: (account: ConnectedWallet) => void;
}

export default (props: Props & FormikProps<CreateWalletStates>) => {
  const {
    onConnected,
    touched,
    errors,
    isSubmitting,
    values,
    setFieldValue,
    submitForm,
    status,
    setStatus,
  } = props;
  const { account } = values;
  if (account) {
    return <BackupKeys onConnected={onConnected} account={values.account} />;
  } else {
    return (
      <FormikForm>
        <div className="field">
          <div className="label">Password for new wallet</div>
          <PasswordInput
            onKeyDown={() => submitForm}
            onChange={val => setFieldValue("password", val)}
            value={values.password}
          />
          {errors.password && touched.password && (
            <div className="help is-danger">{errors.password}</div>
          )}
        </div>
        {status && status.error ? (
          <DisplayError message={status.error} onClose={() => setStatus(undefined)} />
        ) : (
          false
        )}
        <button
          disabled={!values.password}
          className={`button is-link ${isSubmitting ? "is-loading" : ""}`}
        >
          Create
        </button>
      </FormikForm>
    );
  }
};
