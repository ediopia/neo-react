"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const api_1 = __importDefault(require("@neo-react/api"));
const fa_1 = require("react-icons/fa");
class ConnectWithPlugin extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            account: undefined,
            isLoading: true,
            errorMsg: "",
        };
        this.onStart = (account) => {
            this.props.onConnected(account);
        };
    }
    componentDidMount() {
        let { match } = this.props;
        const { params } = match;
        const provider = params.plugin;
        api_1.default.providers[provider]
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
    render() {
        const { account, isLoading, errorMsg } = this.state;
        return (react_1.default.createElement("div", null,
            !account ? (react_1.default.createElement("div", null,
                react_1.default.createElement("button", { className: "button is-light is-small", onClick: () => this.props.history.goBack() },
                    react_1.default.createElement(fa_1.FaAngleLeft, null),
                    "Back to menu"),
                react_1.default.createElement("hr", null))) : (false),
            react_1.default.createElement("div", { className: "has-text-centered is-flex", style: {
                    justifyContent: "center",
                    alignItems: "center",
                } }, isLoading ? (react_1.default.createElement("div", null, "Connecting..")) : errorMsg ? (react_1.default.createElement("div", null,
                react_1.default.createElement(fa_1.FaExclamationCircle, { className: "has-text-danger is-size-1" }),
                react_1.default.createElement("br", null),
                errorMsg)) : (react_1.default.createElement("div", null,
                react_1.default.createElement(fa_1.FaPlug, { className: "has-text-info is-size-1" }),
                react_1.default.createElement("br", null),
                `Great, we've connected!`,
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                react_1.default.createElement("button", { onClick: () => {
                        if (account) {
                            // @ts-ignore
                            this.onStart(account);
                        }
                    }, className: "button is-small is-link" }, "Start"))))));
    }
}
exports.default = react_router_dom_1.withRouter(ConnectWithPlugin);
//# sourceMappingURL=index.js.map