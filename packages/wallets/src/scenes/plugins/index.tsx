import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ConnectedWallet } from "../../types";
import { WalletsProps } from "../../index";
import FTW from "@neo-react/api";
import { FaAngleLeft, FaExclamationCircle, FaPlug } from "react-icons/fa";

interface MatchParams {
  plugin: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ConnectWithPluginProps extends RouteComponentProps<MatchParams> {}

class ConnectWithPlugin extends Component<WalletsProps & ConnectWithPluginProps> {
  state = {
    account: undefined,
    isLoading: true,
    errorMsg: "",
  };

  componentDidMount(): void {
    let { match } = this.props;
    const { params } = match;
    const provider = params.plugin;
    FTW.providers[provider]
      .getAccount()
      .then(account => {
        this.setState({
          account,
          isLoading: false,
        });
      })
      .catch(e => {
        this.setState({
          errorMsg: e.message,
          isLoading: false,
        });
      });
  }

  onStart = (account: ConnectedWallet) => {
    this.props.onConnected(account);
  };

  render() {
    const { account, isLoading, errorMsg } = this.state;

    return (
      <div>
        {!account ? (
          <div>
            <button
              className="button is-light is-small"
              onClick={() => this.props.history.goBack()}
            >
              <FaAngleLeft />
              Back to menu
            </button>
            <hr />
          </div>
        ) : (
          false
        )}
        <div
          className="has-text-centered is-flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading ? (
            <div>Connecting..</div>
          ) : errorMsg ? (
            <div>
              <FaExclamationCircle className="has-text-danger is-size-1" />
              <br />
              {errorMsg}
            </div>
          ) : (
            <div>
              <FaPlug className="has-text-info is-size-1" />
              <br />
              {`Great, we've connected!`}
              <br />
              <br />
              <button
                onClick={() => {
                  if (account) {
                    // @ts-ignore
                    this.onStart(account);
                  }
                }}
                className="button is-small is-link"
              >
                Start
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ConnectWithPlugin);
