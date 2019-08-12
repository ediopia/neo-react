import React, { useState } from "react";
import { ConnectedWallet, InvokeScript, ReturnTx } from "../../types";
import NetworkFee, { networkFees } from "./components/network-fee";
import { submitInvoke } from "../../actions";
import ReviewInvokeScript from "./components/collapse";
import DisplayTxid from "./components/txid";

interface InvokeModalProps {
  wallet: ConnectedWallet;
  script: InvokeScript;
  onSubmit: (tx: ReturnTx) => void;
}

interface State {
  tx?: ReturnTx;
  networkFee: number;
  isSubmitting: boolean;
  error?: string;
}

const ReviewInvoke = ({ wallet, script, onSubmit }: InvokeModalProps) => {
  const { transfer, scriptHash, operation } = script;

  const [values, setValues] = useState<State>({
    tx: undefined,
    networkFee: networkFees[0],
    isSubmitting: false,
    error: undefined,
  });

  const handleSubmit = () => {
    setValues({
      ...values,
      isSubmitting: true,
    });

    submitInvoke(wallet as ConnectedWallet, script as InvokeScript, values.networkFee)
      .then(tx => {
        setValues({ ...values, tx });
      })
      .catch(e => {
        setValues({
          ...values,
          isSubmitting: false,
        });
      });
  };
  if (values.tx) {
    // @ts-ignore
    return <DisplayTxid txid={values.tx.txid} onClose={() => onSubmit(values.tx)} />;
  }
  return (
    <>
      <NetworkFee
        value={values.networkFee}
        setValue={val => setValues({ ...values, networkFee: val })}
      />
      <hr />
      <ReviewInvokeScript script={script} />
      <hr />
      <button
        className={values.isSubmitting ? "button is-primary is-loading" : "button is-primary"}
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </>
  );
};

export default ReviewInvoke;
