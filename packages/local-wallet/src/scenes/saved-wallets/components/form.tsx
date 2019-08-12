import React from "react";
import { Form as FormikForm, FormikProps } from "formik";
import { Nep2States } from "../../import-nep2";
import { LocalWalletProps } from "../../../types";
import PasswordInput from "../../../components/password-input";

const Form = (props: LocalWalletProps & FormikProps<Nep2States>) => {
  const { savedWallets = [], errors, isSubmitting, values, setFieldValue, submitForm } = props;
  return (
    <FormikForm>
      <div className="field">
        <div className="label">Saved wallets</div>
        <div className="control">
          <div className="select is-fullwidth">
            <select onBlur={e => setFieldValue("encryptedKey", e.target.value)}>
              {savedWallets.map(item => {
                if (item && item.address) {
                  return (
                    <option key={item.address} value={item.encryptedKey}>
                      {item.address}
                    </option>
                  );
                }
                return false;
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="label">Password</div>
        <PasswordInput
          onKeyDown={submitForm}
          value={values.password}
          onChange={val => setFieldValue("password", val)}
        />
      </div>
      <button type="submit" className={`button is-link ${isSubmitting ? "is-loading" : ""}`}>
        Open
      </button>
    </FormikForm>
  );
};

export default Form;
