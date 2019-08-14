import React, { useState } from "react";
import { ConnectedWallet } from "../../types";
import ImportButton from "./components/import-button";
import SavedWallets from "../saved-wallets";

interface ImportFileProps {
  onConnected: (account: ConnectedWallet) => void;
}

const ImportFile = (props: ImportFileProps) => {
  const { onConnected } = props;
  const [wallets, setWallets] = useState();

  return (
    <>
      {wallets && wallets.length ? (
        <SavedWallets onConnected={onConnected} savedWallets={wallets} />
      ) : (
        <ImportButton onImport={setWallets} />
      )}
    </>
  );
};

export default ImportFile;
