import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import LocalWallet from "../dist";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Render Local wallet", () => {
  const { queryByLabelText, getByLabelText } = render(<LocalWallet onConnected={wallet => console.log(wallet)} />);
});
