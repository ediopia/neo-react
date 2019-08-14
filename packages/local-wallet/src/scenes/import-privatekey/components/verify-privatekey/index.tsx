import React, { useState } from "react";
import Neon from "@cityofzion/neon-js";
import DisplayError from "../../../../components/display-error";

interface VerifyPrivateKeyProps {
  onVerify: (privateKey: string) => void;
}

const VerifyPrivateKey = ({ onVerify }: VerifyPrivateKeyProps) => {
  const [privateKey, setPrivateKey] = useState("");
  const [error, setError] = useState();
  const verifyPrivatekey = () => {
    if (privateKey) {
      if (Neon.is.privateKey(privateKey) || Neon.is.wif(privateKey)) {
        onVerify(privateKey);
      } else {
        setError("Please check your private key. It it not a valid type.");
      }
    }
  };

  return (
    <>
      <div className="field">
        <label htmlFor="privatekey" className="label">
          Private key
        </label>
        <input
          id="privatekey"
          className="input"
          placeholder="Private Key"
          value={privateKey}
          onChange={e => setPrivateKey(e.target.value)}
          onKeyDown={e => {
            if (e.keyCode === 13 && privateKey) {
              verifyPrivatekey();
            }
          }}
        />
      </div>
      {error ? <DisplayError message={error} onClose={() => setError(undefined)} /> : false}
      <button onClick={verifyPrivatekey} disabled={!privateKey} className={`button is-link`}>
        Verify your private key
      </button>
    </>
  );
};

export default VerifyPrivateKey;
