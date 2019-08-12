import React from "react";
interface Props {
  value: number;
  setValue: (value: number) => void;
}
export const networkFees: number[] = [0, 0.0001];

const NetworkFee = ({ value, setValue }: Props) => {
  return (
    <>
      <h6 className="title is-6">Network fee</h6>
      <div className="buttons has-addons">
        {networkFees.map(fee => {
          let label = "";

          switch (fee) {
            case 0:
              label = "Free";
              break;
            case 0.0001:
              label = "0.0001 GAS";
              break;
          }

          return (
            <button
              type="button"
              key={label}
              onClick={() => setValue(fee)}
              className={fee === value ? "button is-active is-primary is-small" : "button is-small"}
            >
              {`${label}`}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default NetworkFee;
