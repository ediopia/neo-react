import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Invoker from "../src";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Render Invoker", () => {
  const { queryByLabelText, getByLabelText } = render(
    <Invoker>
      <div>Component</div>
    </Invoker>,
  );
});
