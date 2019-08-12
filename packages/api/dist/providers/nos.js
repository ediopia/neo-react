"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const invokeContract = ({ script }) => __awaiter(this, void 0, void 0, function* () {
    //TODO::Nos doesn't have network fee configuration yet.
    if (window.NOS) {
        try {
            const nos = window.NOS.V1;
            script.args = utils_1.convertScriptToParams(script.args);
            // remove default encoding option
            script.encodeArgs = false;
            const txid = yield nos.invoke(script);
            return {
                txid,
            };
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    else {
        throw new Error("Cannot find NOS client. Open it using NOS browser ");
    }
});
const getAccount = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const nos = window.NOS.V1;
        const address = yield nos.getAddress();
        return {
            provider: "NOS",
            address,
        };
    }
    catch (e) {
        throw new Error(e.message);
    }
});
exports.NOS = {
    invokeContract,
    getAccount,
};
//# sourceMappingURL=nos.js.map