import React, { useContext } from "react";
import { ConnectedWallet, InvokeScript } from "../types";
import Review from "./review";
import { InvokerContext } from "../index";
import Wallets from "@neo-react/wallets";

const InvokerComponent = () => {
  const { state, dispatch } = useContext(InvokerContext);
  const { wallet, script, isInvokerActive } = state;
  let isLocalWalletWithoutPrivateKey =
    wallet && Object.keys(wallet).length > 0 && wallet.provider === "LOCAL" && !wallet.privateKey;
  return (
    <div className={isInvokerActive ? "modal is-active" : "modal"}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="modal-background" onClick={dispatch.closeInvoker} />
      <div className="modal-content">
        <div className="box">
          {!wallet ? (
            <Wallets
              onConnected={wallet => {
                dispatch.connectWallet(wallet);
                dispatch.closeInvoker();
              }}
            />
          ) : script ? (
            isLocalWalletWithoutPrivateKey ? (
              <Wallets
                wallet={wallet ? wallet : undefined}
                onConnected={wallet => {
                  dispatch.connectWallet(wallet);
                }}
              />
            ) : (
              <Review
                wallet={state.wallet as ConnectedWallet}
                script={state.script as InvokeScript}
                onSubmit={tx => {
                  dispatch.addPendingTx(tx);
                  dispatch.closeInvoker();
                }}
              />
            )
          ) : null}
        </div>
      </div>
      <button onClick={dispatch.closeInvoker} className="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default InvokerComponent;
