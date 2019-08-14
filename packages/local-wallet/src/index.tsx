import React, { Suspense } from "react";
import { MemoryRouter, Route } from "react-router";
import { filterRoutes } from "./routes";
import Menu from "./components/menu";
import { LocalWalletProps, RouteProps } from "./types";
import UnlockNep2 from "./scenes/unlock-nep2";

const LocalWallet = (props: LocalWalletProps) => {
  const { savedWallets, wallet } = props;
  const routes = filterRoutes(!!(savedWallets && savedWallets.length));
  return (
    <MemoryRouter initialEntries={[routes[0].path]}>
      {wallet && wallet.provider === "LOCAL" && !wallet.privateKey ? (
        // @ts-ignore
        <UnlockNep2 {...props} />
      ) : (
        <>
          <Menu routes={routes} />
          <div style={{ minHeight: "300px" }}>
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
        </>
      )}
    </MemoryRouter>
  );
};
export default LocalWallet;
