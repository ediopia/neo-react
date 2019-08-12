import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ConnectedWallet } from "../../types";
import { WalletsProps } from "../../index";
interface MatchParams {
    plugin: string;
}
interface ConnectWithPluginProps extends RouteComponentProps<MatchParams> {
}
declare class ConnectWithPlugin extends Component<WalletsProps & ConnectWithPluginProps> {
    state: {
        account: undefined;
        isLoading: boolean;
        errorMsg: string;
    };
    componentDidMount(): void;
    onStart: (account: ConnectedWallet) => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<WalletsProps & ConnectWithPluginProps, "wallet" | "savedWallets" | "onConnected">, any> & import("react-router").WithRouterStatics<typeof ConnectWithPlugin>;
export default _default;
//# sourceMappingURL=index.d.ts.map