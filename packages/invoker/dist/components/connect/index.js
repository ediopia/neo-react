"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const index_1 = require("../../index");
// connect() is a function that injects Redux-related props into your component.
// You can inject data and callbacks that change that data by dispatching actions.
function Connect(mapStateToProps) {
    // It lets us inject component as the last step so people can use it as a decorator.
    // Generally you don't need to worry about it.
    return function (WrappedComponent) {
        // It returns a component
        // @ts-ignore
        const { state } = react_1.useContext(index_1.InvokerContext);
        const stateToProps = mapStateToProps(state);
        // eslint-disable-next-line react/display-name
        return class extends react_1.default.Component {
            render() {
                // @ts-ignore
                return (
                // @ts-ignore
                react_1.default.createElement(WrappedComponent, Object.assign({}, this.props, stateToProps)));
            }
        };
    };
}
exports.default = Connect;
//# sourceMappingURL=index.js.map