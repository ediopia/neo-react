import React, { Component, useState } from "react";
import BackupKeys from "../create-wallet/components/backup";
import VerifyPrivateKey from "./components/verify-privatekey";
import EncryptPrivateKey from "./components/encrypt-privatekey";
import { LocalWalletProps } from "../../types";

const ImportPrivatekey = (props: LocalWalletProps) => {
  const [privateKey, setPrivateKey] = useState("");
  const [wallet, setWallet] = useState(undefined);
  if (wallet) {
    return (
      // @ts-ignore
      <BackupKeys {...props} account={wallet} />
    );
  }
  return (
    <>
      {privateKey ? (
        // @ts-ignore
        <EncryptPrivateKey privateKey={privateKey} onEncrypt={wallet => setWallet(wallet)} />
      ) : (
        <VerifyPrivateKey onVerify={privateKey => setPrivateKey(privateKey)} />
      )}
    </>
  );
};

export default ImportPrivatekey;
