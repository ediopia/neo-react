import React, { Suspense } from "react";
import { MemoryRouter, Route } from "react-router";
import { filterRoutes } from "./routes";
import Menu from "./components/menu";
import { LocalWalletProps, RouteProps } from "./types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LocalWallet = (props: LocalWalletProps) => {
  const { savedWallets } = props;
  const routes = filterRoutes(!!(savedWallets && savedWallets.length));
  return (
    <MemoryRouter initialEntries={[routes[0].path]}>
      <ToastContainer />
      <div style={{ minHeight: "300px" }}>
        <Menu routes={routes} />
        {routes.map((route: RouteProps) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              render={() => {
                const Content = React.lazy(() => import("" + route.component));
                return (
                  <Suspense fallback={<div />}>
                    <Content {...props} />
                  </Suspense>
                );
              }}
            />
          );
        })}
      </div>
    </MemoryRouter>
  );
};
export default LocalWallet;
