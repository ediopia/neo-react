import React, { useState } from "react";
import { ConnectedWallet } from "../../../types";

interface BackupKeysProps {
  account: {
    password: string;
    address: string;
    encryptedKey: string;
    privateKey: string;
  };
  onConnected: (account: ConnectedWallet) => void;
}

const BackupKeys = (props: BackupKeysProps) => {
  const [isAgreed, setAgreement] = useState(false);
  const { account, onConnected } = props;
  return (
    <div>
      <div className="notification is-info">
        You must save and backup the keys. If you lose them, you lose access to your assets.
      </div>
      <div className="content" style={{ wordBreak: "break-all" }}>
        <ul>
          <li>Password: {account.password}</li>
          <li>Wallet address: {account.address}</li>
          <li>Encrypted key: {account.encryptedKey}</li>
          <li>Private key: {account.privateKey}</li>
        </ul>
      </div>
      <hr />
      <label className="checkbox">
        <input type="checkbox" checked={isAgreed} onChange={() => setAgreement(!isAgreed)} />
        &nbsp;&nbsp;I have saved the keys
      </label>
      <hr />
      <button
        disabled={!isAgreed}
        className="button is-link"
        onClick={() =>
          onConnected({
            provider: "LOCAL",
            address: account.address,
            encryptedKey: account.encryptedKey,
            privateKey: account.privateKey,
          })
        }
      >
        Open wallet
      </button>
    </div>
  );
};

export default BackupKeys;
