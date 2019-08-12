import React, { ReactNode, Suspense } from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { routes } from "./routes";
import { ConnectedWallet, Nep2 } from "./types";

export interface WalletsProps {
  wallet?: ConnectedWallet;
  savedWallets?: Nep2[];
  onConnected: (account: ConnectedWallet) => void;
}

export interface WalletsRoute {
  path: string;
  component: ReactNode;
  exact?: boolean;
}

const Wallets = (props: WalletsProps) => {
  let initialEntries = ["/"];
  if (props.wallet && props.wallet.provider === "LOCAL" && !props.wallet.privateKey) {
    initialEntries = ["/imports"];
  }
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <div>
        {routes.map((route: WalletsRoute) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
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

export default Wallets;
