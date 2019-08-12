import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { RouteProps } from "../../types";
interface MenuProps extends RouteComponentProps {
    routes: RouteProps[];
}
declare const _default: React.ComponentClass<Pick<MenuProps, "routes">, any> & import("react-router").WithRouterStatics<({ routes, location }: MenuProps) => JSX.Element>;
export default _default;
//# sourceMappingURL=index.d.ts.map