import {
  ADD_PENDING_TX,
  CLOSE_INVOKER,
  CONNECT_WALLET,
  DISCONNECT_WALLET,
  InvokeActionTypes,
  InvokerContextState,
  OPEN_INVOKER,
} from "./types";

export const reducer = (
  state: InvokerContextState,
  action: InvokeActionTypes,
): InvokerContextState => {
  switch (action.type) {
    case OPEN_INVOKER:
      return {
        ...state,
        isInvokerActive: true,
        script: action.payload.script,
      };
    case CLOSE_INVOKER:
      return {
        ...state,
        isInvokerActive: false,
        script: undefined,
      };

    case CONNECT_WALLET:
      return {
        ...state,
        wallet: action.payload.wallet,
      };
    case DISCONNECT_WALLET:
      return {
        ...state,
        wallet: undefined,
      };

    case ADD_PENDING_TX:
      return {
        ...state,
        pendingTxidList: [...state.pendingTxidList, action.payload.tx],
      };

    default:
      return state;
  }
};
