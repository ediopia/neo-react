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
const fa_1 = require("react-icons/fa");
const PasswordInput = ({ value, onChange, onKeyDown, isLoading }) => {
    const [showPassword, setVisible] = react_1.useState(false);
    return (react_1.default.createElement("div", { className: "control has-icons-right" },
        react_1.default.createElement("input", { onKeyDown: e => {
                if (e.keyCode === 13 && !isLoading) {
                    onKeyDown();
                }
            }, className: "input", type: showPassword ? "text" : "password", placeholder: "Password", value: value, onChange: e => onChange(e.target.value) }),
        react_1.default.createElement("span", { onClick: () => setVisible(!showPassword), className: "icon is-right", style: { pointerEvents: "auto", zIndex: 0 } }, showPassword ? react_1.default.createElement(fa_1.FaEyeSlash, null) : react_1.default.createElement(fa_1.FaEye, null))));
};
exports.default = PasswordInput;
//# sourceMappingURL=index.js.map