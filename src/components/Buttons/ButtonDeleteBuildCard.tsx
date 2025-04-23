interface ButtonDeleteBuildCardProps {
    id: number;
    onClick: (id: number) => void;
  }
  
  const ButtonDeleteBuildCard: React.FC<ButtonDeleteBuildCardProps> = ({ id, onClick }) => {
    return (
      <div>
        <button onClick={() => onClick(id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    );
  };
  
  export default ButtonDeleteBuildCard;
  