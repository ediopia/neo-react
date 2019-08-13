import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Wallets from "../dist";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Render Wallets", () => {
  const { queryByLabelText, getByLabelText } = render(<Wallets />);
});
