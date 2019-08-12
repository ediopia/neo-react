import React, { ReactElement, useContext } from "react";
import { InvokerContext } from "../../index";
import { InvokerContextState } from "../../types";

interface MapStateToProps {
  (state: InvokerContextState): any;
}

// connect() is a function that injects Redux-related props into your component.
// You can inject data and callbacks that change that data by dispatching actions.
function Connect(mapStateToProps: MapStateToProps) {
  // It lets us inject component as the last step so people can use it as a decorator.
  // Generally you don't need to worry about it.
  return function(WrappedComponent: ReactElement) {
    // It returns a component
    // @ts-ignore
    const { state } = useContext(InvokerContext);
    const stateToProps = mapStateToProps(state);
    // eslint-disable-next-line react/display-name
    return class extends React.Component {
      render() {
        // @ts-ignore
        return (
          // @ts-ignore
          <WrappedComponent {...this.props} {...stateToProps} />
        );
      }
    };
  };
}

export default Connect;
