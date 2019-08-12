import React, { ReactElement, ReactNode } from "react";
import { InvokerProviderValues } from "./types";
import Connect from "./components/connect";
export interface InvokerProps {
    children: ReactElement | ReactNode;
    useLocalStorage?: boolean;
}
declare const InvokerContext: React.Context<InvokerProviderValues>;
declare const ContextComponent: ({ children, useLocalStorage }: InvokerProps) => JSX.Element;
export { InvokerContext, Connect };
export default ContextComponent;
//# sourceMappingURL=index.d.ts.map