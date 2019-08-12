/// <reference types="react" />
import { ConnectedWallet, InvokeScript, ReturnTx } from "../../types";
interface InvokeModalProps {
    wallet: ConnectedWallet;
    script: InvokeScript;
    onSubmit: (tx: ReturnTx) => void;
}
declare const ReviewInvoke: ({ wallet, script, onSubmit }: InvokeModalProps) => JSX.Element;
export default ReviewInvoke;
//# sourceMappingURL=index.d.ts.map