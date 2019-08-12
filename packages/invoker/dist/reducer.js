"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.reducer = (state, action) => {
    switch (action.type) {
        case types_1.OPEN_INVOKER:
            return Object.assign({}, state, { isInvokerActive: true, wallet: action.payload.wallet, script: action.payload.script });
        case types_1.CLOSE_INVOKER:
            return Object.assign({}, state, { isInvokerActive: false, script: undefined });
        case types_1.CONNECT_WALLET:
            return Object.assign({}, state, { wallet: action.payload.wallet });
        case types_1.DISCONNECT_WALLET:
            return Object.assign({}, state, { wallet: undefined });
        case types_1.ADD_PENDING_TX:
            return Object.assign({}, state, { pendingTxidList: [...state.pendingTxidList, action.payload.tx], wallet: undefined });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map