import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: () => void;
  isLoading?: boolean;
}

const PasswordInput = ({ value, onChange, onKeyDown, isLoading }: PasswordInputProps) => {
  const [showPassword, setVisible] = useState(false);
  return (
    <div className="control has-icons-right">
      <input
        onKeyDown={e => {
          if (e.keyCode === 13 && !isLoading) {
            onKeyDown();
          }
        }}
        className="input"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <span
        onClick={() => setVisible(!showPassword)}
        className="icon is-right"
        style={{ pointerEvents: "auto", zIndex: 0 }}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default PasswordInput;
