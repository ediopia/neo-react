import React from "react";
import LocalWalletComponent from "@neo-react/local-wallet";
import { WalletsProps } from "../../index";
import { Link } from "react-router-dom";

const LocalWallet = (props: WalletsProps) => {
  return (
    <>
      <Link to="/" className="button is-small is-light">
        Back to menu
      </Link>
      <hr />
      <LocalWalletComponent {...props} />
    </>
  );
};

export default LocalWallet;
