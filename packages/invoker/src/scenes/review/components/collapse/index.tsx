import React from "react";
import Collapsible from "react-collapsible";
import { InvokeScript } from "../../../../types";
import { FaAngleDown } from "react-icons/fa";
interface ReviewInvokeScriptProps {
  script: InvokeScript;
}

const ReviewInvokeScript = ({ script }: ReviewInvokeScriptProps) => {
  return (
    <div>
      <Collapsible
        trigger={
          <div
            className="is-size-6 is-flex has-text-grey-dark is-flex"
            style={{ alignItems: "center" }}
          >
            <span className="icon">
              <FaAngleDown />
            </span>
            <div>Invoke details</div>
          </div>
        }
        lazyRender={true}
      >
        <p style={{ padding: "10px" }} className="content is-small">
          Contract: {script.scriptHash}
          <br />
          Operation: {script.operation}
          <br />
          Args: <br />
          {script.args.map((s, i) => (
            <span key={`arg-${i}`}>
              {s.value}
              <br />
            </span>
          ))}
        </p>
      </Collapsible>
    </div>
  );
};

export default ReviewInvokeScript;
