import React, { useState } from "react";
// @ts-ignore
import Clipboard from "react-clipboard.js";

interface ClipboardButtonProps {
  value: string;
}

const ClipboardButton = ({ value }: ClipboardButtonProps) => {
  const [isCopied, setCopy] = useState(false);
  return (
    <Clipboard
      onClick={() => setCopy(true)}
      className={"button is-light is-small"}
      data-clipboard-text={value}
    >
      {isCopied ? `Copied` : `Copy`}
    </Clipboard>
  );
};

export default ClipboardButton;
