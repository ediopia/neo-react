import React from "react";

interface DisplayErrorProps {
  message: string;
  onClose: () => void;
}

const DisplayError = ({ message, onClose }: DisplayErrorProps) => {
  return (
    <div className="notification is-danger">
      <button onClick={onClose} className="delete" />
      {message}
    </div>
  );
};

export default DisplayError;
