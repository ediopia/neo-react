import React, { createContext, ReactElement, ReactNode, useReducer } from "react";
import { reducer } from "./reducer";
import {
  addPendingTx,
  closeInvoker,
  connectWallet,
  disconnectWallet,
  openInvoker,
} from "./actions";
import { InvokerContextState, InvokerProviderValues, ConnectedWallet, InvokeScript } from "./types";
import Connect from "./components/connect";
import Invoker from "./scenes";
import FTW from "@neo-react/api";

export interface InvokerProps {
  children: ReactElement | ReactNode;
  useLocalStorage?: boolean;
}

const InvokerContext = createContext({} as InvokerProviderValues);

const ContextComponent = ({ children, useLocalStorage }: InvokerProps) => {
  const initialState: InvokerContextState = {
    isInvokerActive: false,
    wallet: useLocalStorage ? FTW.localStorage.getConnectedWallet() : undefined,
    script: undefined,
    pendingTxidList: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <InvokerContext.Provider
      value={{
        state: {
          ...state,
        },
        dispatch: {
          openInvoker: (script?: InvokeScript, wallet?: ConnectedWallet) =>
            dispatch(openInvoker(script, wallet ? wallet : state.wallet)),
          closeInvoker: () => dispatch(closeInvoker()),
          connectWallet: (wallet: ConnectedWallet) =>
            dispatch(connectWallet(wallet, useLocalStorage)),
          disconnectWallet: () => dispatch(disconnectWallet(useLocalStorage)),
          addPendingTx: tx => dispatch(addPendingTx(tx)),
        },
      }}
    >
      {children}
      <Invoker />
    </InvokerContext.Provider>
  );
};

export { InvokerContext, Connect };
export default ContextComponent;
