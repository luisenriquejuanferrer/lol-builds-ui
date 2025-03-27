import { useState } from "react";

interface ButtonAddBuildCardProps {
  onClick: () => void;
}

const ButtonAddBuildCard: React.FC<ButtonAddBuildCardProps> = ({ onClick }) => {
  return (
    <div>
      <button className="btn-add-build-card" onClick={onClick}>
        <i className="bi bi-plus-circle"></i>
      </button>
    </div>
  );
};

export default ButtonAddBuildCard;
