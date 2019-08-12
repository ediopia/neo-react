import React, { useState } from "react";
import ImportNep2 from "../import-nep2";
import { ConnectedWallet } from "../../types";
import { toast } from "react-toastify";

interface ImportFileProps {
  onConnected: (account: ConnectedWallet) => void;
}

const ImportFile = (props: ImportFileProps) => {
  const { onConnected } = props;
  const [encryptedKey, setEncryptedKey] = useState("");
  const [address, setAddress] = useState("");
  const handleImportKeyfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const jsonObj = JSON.parse(event.target.result);
        if (jsonObj.key) {
          setEncryptedKey(jsonObj.key);
          setAddress(jsonObj.address);
        }
        // TODO::Need to make better importing system
        if (jsonObj.accounts && jsonObj.accounts.length > 0) {
          setEncryptedKey(jsonObj.accounts[0].key);
          setAddress(jsonObj.accounts[0].address);
        }
      };
      if (e.target.files) {
        if (e.target.files.length > 0) {
          reader.readAsText(e.target.files[0]);
        }
      }
      return false;
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <>
      {encryptedKey ? (
        <ImportNep2
          onConnected={onConnected}
          wallet={{
            provider: "LOCAL",
            encryptedKey,
            address,
          }}
        />
      ) : (
        <div className="file">
          <label className="file-label">
            <input
              onChange={handleImportKeyfile}
              className="file-input"
              type="file"
              name="resume"
              accept=".json,application/json"
            />
            <span className="file-cta button is-light">
              <span className="file-label">Select wallet file</span>
            </span>
          </label>
        </div>
      )}
    </>
  );
};

export default ImportFile;
