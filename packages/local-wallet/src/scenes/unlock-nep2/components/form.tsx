import React from "react";
import { Form as FormikForm, FormikProps } from "formik";
import { Nep2States } from "../index";
import PasswordInput from "../../../components/password-input";
import DisplayError from "../../../components/display-error";

const Form = (props: FormikProps<Nep2States>) => {
  const { touched, errors, isSubmitting, values, setFieldValue, submitForm, status, setStatus } = props;
  const { encryptedKey, password } = values;
  const isValidSubmit = encryptedKey && password;
  return (
    <FormikForm>
      <h5 className="title is-6">Unlock your wallet</h5>
      <p className="content is-small" style={{ wordBreak: "break-all" }}>
        <strong>Address</strong>
        <br />
        {values.address}
        <br />
        <strong>Encrypted key</strong>
        <br /> {values.encryptedKey}
      </p>
      <hr />
      <div className="field">
        <div className="label">Password</div>
        <PasswordInput
          isLoading={isSubmitting}
          onKeyDown={() => (isValidSubmit ? submitForm() : false)}
          onChange={val => setFieldValue("password", val)}
          value={password}
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
        type="submit"
        disabled={!isValidSubmit}
        className={`button is-link ${isSubmitting ? "is-loading" : ""}`}
      >
        Open wallet
      </button>
    </FormikForm>
  );
};

export default Form;
