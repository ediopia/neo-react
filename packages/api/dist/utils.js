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
const neon_js_1 = require("@cityofzion/neon-js");
exports.getRpcEndpoint = (network = 'MainNet') => __awaiter(this, void 0, void 0, function* () {
    const provider = new neon_js_1.api.neoscan.instance('MainNet');
    return yield provider
        .getRPCEndpoint()
        .then(endpoint => {
        return endpoint;
    })
        .catch(e => {
        return 'http://node.ftwcoin.io:10332';
    });
});
exports.convertScriptToParams = (args) => {
    return args.map(arg => {
        const { type, value } = arg;
        switch (type) {
            case 'String':
                return neon_js_1.u.str2hexstring(value);
            case 'Address':
                return neon_js_1.u.reverseHex(neon_js_1.wallet.getScriptHashFromAddress(value));
            case 'ByteArray':
                return value;
            case 'Integer':
                return value;
        }
    });
};
/**
 * @desc Converts num into signed integer.
 */
exports.convertIntToHexstring = (num) => {
    let size = 8;
    if (num < 2147483648) {
        size = 4;
    }
    if (num < 32768) {
        size = 2;
    }
    if (num < 128) {
        size = 1;
    }
    return neon_js_1.u.reverseHex(neon_js_1.u.num2hexstring(num, size));
};
//# sourceMappingURL=utils.js.map