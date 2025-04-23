interface ButtonExportBuildCardProps {
    onClick: () => void;
  }
  
  const ButtonExportBuildCard: React.FC<ButtonExportBuildCardProps> = ({ onClick }) => {
    return (
      <div>
        <button onClick={onClick}>
          <i className="bi bi-box-arrow-up-left"></i>
        </button>
      </div>
    );
  };
  
  export default ButtonExportBuildCard;
  