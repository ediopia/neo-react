import React from "react";
import { menuRoutes } from "../../routes";
import { Link } from "react-router-dom";

export interface MenuRoute {
  path: string;
  label: string;
}

const AppMenu = () => {
  return (
    <div className="columns is-multiline">
      {menuRoutes.map((route: MenuRoute) => {
        return (
          <div key={route.path} className="column is-4">
            <Link className="button is-fullwidth" to={route.path}>
              {route.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AppMenu;
