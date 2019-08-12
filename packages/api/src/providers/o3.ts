import o3dapi from "o3-dapi-core";
import o3dapiNeo from "o3-dapi-neo";
import { InvokeContract, ProviderMethods } from "./index";
o3dapi.initPlugins([o3dapiNeo]);

const invokeContract = async ({ script, networkFee }: InvokeContract) => {
  try {
    script.fee = networkFee;
    script.network = "MainNet";
    return await o3dapi.NEO.invoke(script);
  } catch (e) {
    throw new Error(e.description);
  }
};

const getAccount = async () => {
  try {
    // @ts-ignore
    const account = await o3dapi.NEO.getAccount();
    const { address } = account;
    return {
      provider: "O3",
      address,
    };
  } catch (e) {
    throw new Error(e.description ? e.description : e.type);
  }
};

export const O3: ProviderMethods = {
  invokeContract,
  getAccount,
};
