"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const neon_js_1 = __importStar(require("@cityofzion/neon-js"));
const utils_1 = require("../utils");
const invokeContract = ({ wallet, script, networkFee }) => __awaiter(this, void 0, void 0, function* () {
    const provider = new neon_js_1.api.neoscan.instance("MainNet");
    const rpcEndpoint = yield provider.getRPCEndpoint();
    const balance = yield provider.getBalance(wallet.address);
    const account = new neon_js_1.wallet.Account(wallet.privateKey);
    const config = {
        api: provider,
        url: rpcEndpoint,
        account,
        privateKey: wallet.privateKey,
        fees: networkFee,
        override: [
            {
                usage: 240,
                data: neon_js_1.u.reverseHex(neon_js_1.u.str2hexstring("FTW")),
            },
        ],
        balance,
        script: neon_js_1.default.create.script({
            scriptHash: script.scriptHash,
            operation: script.operation,
            args: script.args = utils_1.convertScriptToParams(script.args),
        }),
    };
    const result = yield neon_js_1.default.doInvoke(config);
    console.log(result);
    return {
        txid: "",
        node: rpcEndpoint,
    };
});
const getAccount = () => __awaiter(this, void 0, void 0, function* () {
    return {
        provider: "Local",
        address: "",
    };
});
exports.RPC = {
    invokeContract,
    getAccount,
};
//# sourceMappingURL=rpc.js.map