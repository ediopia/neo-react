import React from "react";
import { FaCheck } from "react-icons/fa";
import ClipboardButton from "./clipboard-button";

interface DisplayTxidProps {
  txid: string;
  onClose: () => void;
}

const DisplayTxid = ({ txid, onClose }: DisplayTxidProps) => {
  return (
    <div>
      <div>
        <div className="has-text-centered" style={{ marginBottom: "24px" }}>
          <FaCheck className="has-text-success is-size-1" />
          <br />
          <p>Your transaction has been sent</p>
        </div>
        <hr />
        <div className="content">
          <div className="is-flex" style={{ alignItems: "center" }}>
            <h6 className="title is-6 is-marginless" style={{marginRight: "5px"}}>Transaction id</h6>
            <ClipboardButton value={txid} />
          </div>

          <p>{txid}</p>
        </div>
        <hr />
        <button type="button" onClick={() => onClose()} className="button">
          Close
        </button>
      </div>
    </div>
  );
};

export default DisplayTxid;
