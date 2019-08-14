import React from "react";
import { Form as FormikForm, FormikProps } from "formik";
import { Nep2States } from "../index";
import PasswordInput from "../../../components/password-input";
import DisplayError from "../../../components/display-error";

const ImportNep2 = (props: FormikProps<Nep2States>) => {
  const {
    touched,
    errors,
    isSubmitting,
    values,
    setFieldValue,
    submitForm,
    status,
    setStatus,
  } = props;
  const { encryptedKey, password } = values;
  const isValidSubmit = encryptedKey && password;
  return (
    <FormikForm>
      <div className="field">
        <div className="label">Encrypted key</div>
        <input
          className="input"
          placeholder="Encrypted key"
          value={encryptedKey}
          onChange={e => setFieldValue("encryptedKey", e.target.value)}
        />
        {errors.encryptedKey && touched.encryptedKey && (
          <div className="help is-danger">{errors.encryptedKey}</div>
        )}
      </div>

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

export default ImportNep2;
