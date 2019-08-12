# `@neo-react/invoker`

> React component that helps submitting a new transaction in order to invoke smart contracts.

## Features

- Using react context that allows easy state management and dispatch actions.
- Support multiple wallets.
- Support local storage (optional).

## Usage

```
import React from "react";
import NeoInvoker, { from "@neo-react/invoker";

const MyDapp = () => {
  return (
    <NeoInvoker useLocalStorage={true}>
        <SubComponent />
    </NeoInvoker>
  )
}
```
Then
```
import React, { useContext } from "react";
import { InvokerContext } from "@neo-react/invoker";

const Play = () => {
  const { state, dispatch } = useContext(InvokerContext);
  return (
    <RenderState
      {...state}
    />
  );
};
export default Play;
```
