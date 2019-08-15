# `@neo-react/invoker`

> React component that helps submitting a new transaction in order to invoke smart contracts.

## Features

- Using react context that allows easy state management and dispatch actions.
- Support multiple wallets.
- Support local storage (optional).

## Demo
[Click](https://codesandbox.io/s/neo-reactinvoker-mfvx8)

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
Then use context in child components
```
const SubComponent = () => {
  const { state, dispatch } = useContext(InvokerContext);
  /*
    Invoke using states and dispatches using your own way
  */
  return (
    <RenderState
      {...state}
    />
  );
};
```

## Api

| Props | Type | Default | Description |
| --- | --- | --- | --- |
| useLocalStorage | boolean | false | It saves provider, encryptedKey and address key in user's local storage when they connect their wallet.   

## Context

### State

| Key | Description |
| --- | --- |
| wallet | Connected wallet keys |

### Dispatch

| Method | Args| Description |
| --- | --- | --- |
| dispatch.openInvoker() | script: Script | It opens invoke confirmation modal. |
| dispatch.disconnectWallet() | | It remove the connected wallet from its state. |

```
interface Script {
  transfer?: {
    from: string;
    to: string;
    amount: number;
    symbol: string;
  };
  operation: string;
  scriptHash: string;
  fee?: number;
  encodeArgs?: boolean;
  network?: "MainNet" | "TestNet" | "PrivateNet";
  args: InvokeScriptArgs[];
}
```
