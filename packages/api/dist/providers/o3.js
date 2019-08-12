"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const o3_dapi_core_1 = __importDefault(require("o3-dapi-core"));
const o3_dapi_neo_1 = __importDefault(require("o3-dapi-neo"));
o3_dapi_core_1.default.initPlugins([o3_dapi_neo_1.default]);
const invokeContract = ({ script, networkFee }) => __awaiter(this, void 0, void 0, function* () {
    try {
        script.fee = networkFee;
        script.network = "MainNet";
        return yield o3_dapi_core_1.default.NEO.invoke(script);
    }
    catch (e) {
        throw new Error(e.description);
    }
});
const getAccount = () => __awaiter(this, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const account = yield o3_dapi_core_1.default.NEO.getAccount();
        const { address } = account;
        return {
            provider: "O3",
            address,
        };
    }
    catch (e) {
        throw new Error(e.description ? e.description : e.type);
    }
});
exports.O3 = {
    invokeContract,
    getAccount,
};
//# sourceMappingURL=o3.js.map