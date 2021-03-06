import React, { useState } from "react";
import Neon from "@cityofzion/neon-js";
import PasswordInput from "../../../../components/password-input";
import { ConnectedWallet } from "../../../../types";
import DisplayError from "../../../../components/display-error";

interface NewWalletProps extends ConnectedWallet {
  password: string;
}

interface VerifyPrivateKeyProps {
  privateKey: string;
  onEncrypt: (wallet: NewWalletProps) => void;
}

const EncryptPrivateKey = ({ privateKey, onEncrypt }: VerifyPrivateKeyProps) => {
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const encrypt = () => {
    setLoading(true);
    const account = Neon.create.account(privateKey);
    account
      .encrypt(password)
      .then(account => {
        setLoading(false);
        onEncrypt({
          provider: "LOCAL",
          encryptedKey: account.encrypted,
          address: account.address,
          privateKey,
          password,
        });
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="field">
        <div className="label">Password</div>
        <PasswordInput
          value={password}
          onChange={val => setPassword(val)}
          onKeyDown={() => {
            if (password) {
              encrypt();
            }
          }}
        />
      </div>

      <div className="is-size-7 content">
        <ul>
          <li>Password must be at least 6 characters long.</li>
          <li>You will need this password to unlock your wallet.</li>
        </ul>
      </div>
      <hr />
      {error ? <DisplayError message={error} onClose={() => setError(undefined)} /> : false}
      <button
        disabled={!password}
        onClick={encrypt}
        type="button"
        className={`button is-link ${isLoading ? "is-loading" : ""}`}
      >
        Encrypt!
      </button>
    </>
  );
};

export default EncryptPrivateKey;
