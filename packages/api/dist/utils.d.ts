export declare const getRpcEndpoint: (network?: string) => Promise<string>;
interface InvokeScriptArgs {
    type: string;
    value: any;
}
export declare const convertScriptToParams: (args: InvokeScriptArgs[]) => any[];
/**
 * @desc Converts num into signed integer.
 */
export declare const convertIntToHexstring: (num: number) => string;
export {};
//# sourceMappingURL=utils.d.ts.map