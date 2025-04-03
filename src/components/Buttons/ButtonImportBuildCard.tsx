import React, { useRef } from "react";

interface ButtonImportBuildCardProps {
  onImport: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const ButtonImportBuildCard: React.FC<ButtonImportBuildCardProps> = ({
  onImport,
  className = "",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <button className={`btn-import-build-card ${className}`} onClick={handleClick}>
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={onImport}
      />
      <i className="bi bi-box-arrow-down"></i>
    </button>
  );
};

export default ButtonImportBuildCard;
