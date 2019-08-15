import { u, wallet, api } from "@cityofzion/neon-js";

export const getRpcEndpoint = async (network: string = "MainNet") => {
  const provider = new api.neoscan.instance("MainNet");
  return await provider
    .getRPCEndpoint()
    .then(endpoint => {
      return endpoint;
    })
    .catch(e => {
      return "http://node.ftwcoin.io:10332";
    });
};

interface InvokeScriptArgs {
  type: string;
  value: any;
}
export const convertScriptToParams = (args: InvokeScriptArgs[]) => {
  return args.map(arg => {
    const { type, value } = arg;
    switch (type) {
      case "String":
        return u.str2hexstring(value);
      case "Address":
        return u.reverseHex(wallet.getScriptHashFromAddress(value));
      case "ByteArray":
        return value;
      case "Integer":
        return value;
    }
  });
};

/**
 * @desc Converts num into signed integer.
 */
export const convertIntToHexstring = (num: number): string => {
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
  return u.reverseHex(u.num2hexstring(num, size));
};
