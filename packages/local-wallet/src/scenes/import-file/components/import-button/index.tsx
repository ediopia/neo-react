import React, { useState } from "react";
import DisplayError from "../../../../components/display-error";

interface WalletProps {
  encryptedKey: string;
  address: string;
}

interface Nep6 {
  address: string;
  label: string;
  isDefault: boolean;
  lock: boolean;
  key: string;
  contract: {};
  "extra?": boolean;
}

interface ImportButtonProps {
  onImport: (wallets: WalletProps[]) => void;
}

const ImportButton = ({ onImport }: ImportButtonProps) => {
  const [error, setError] = useState();
  const handleImportKeyfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      try {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          const jsonObj = JSON.parse(event.target.result);
          if (jsonObj.accounts && jsonObj.accounts.length) {
            const wallets = jsonObj.accounts.map((acc: Nep6) => {
              return {
                address: acc.address,
                encryptedKey: acc.key,
              };
            });
            onImport(wallets);
          } else {
            setError("Cannot find account in the file");
          }
        };
        reader.readAsText(e.target.files[0]);
        return false;
      } catch (e) {
        setError(e.message);
      }
    }
  };
  return (
    <>
      {error ? <DisplayError message={error} onClose={() => setError(undefined)} /> : false}
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
    </>
  );
};

export default ImportButton;
