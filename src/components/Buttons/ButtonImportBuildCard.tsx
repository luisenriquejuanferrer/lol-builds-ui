interface ButtonImportBuildCardProps {
    onClick: () => void;
  }
  
  const ButtonImportBuildCard: React.FC<ButtonImportBuildCardProps> = ({ onClick }) => {
    return (
      <div>
        <button className="btn-import-build-card" onClick={onClick}>
        <i className="bi bi-box-arrow-down"></i>
        </button>
      </div>
    );
  };
  
  export default ButtonImportBuildCard;
  