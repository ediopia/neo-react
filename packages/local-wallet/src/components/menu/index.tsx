import React from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { RouteProps } from "../../types";

interface MenuProps extends RouteComponentProps {
  routes: RouteProps[];
}

const Menu = ({ routes, location }: MenuProps) => {
  return (
    <div className="tabs is-boxed is-small">
      <ul>
        {routes.map(route => {
          return (
            <li className={location.pathname === route.path ? "is-active" : ""} key={route.path}>
              <NavLink exact activeClassName="is-active" to={`${route.path}`}>
                {route.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
