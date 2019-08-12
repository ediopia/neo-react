import { convertScriptToParams } from "../utils";
import { InvokeContract, ProviderMethods } from "./index";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NOS: any;
  }
}

const invokeContract = async ({ script }: InvokeContract) => {
  //TODO::Nos doesn't have network fee configuration yet.
  if (window.NOS) {
    try {
      const nos = window.NOS.V1;
      script.args = convertScriptToParams(script.args);
      // remove default encoding option
      script.encodeArgs = false;
      const txid = await nos.invoke(script);
      return {
        txid,
      };
    } catch (e) {
      throw new Error(e.message);
    }
  } else {
    throw new Error("Cannot find NOS client. Open it using NOS browser ");
  }
};

const getAccount = async () => {
  try {
    const nos = window.NOS.V1;
    const address = await nos.getAddress();
    return {
      provider: "NOS",
      address,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

export const NOS: ProviderMethods = {
  invokeContract,
  getAccount,
};
