interface ButtonRenameBuildCardProps {
  onClick: () => void;
}

const ButtonRenameBuildCard: React.FC<ButtonRenameBuildCardProps> = ({onClick}) => {
  return (
    <div>
      <button onClick={onClick}>
        <i className="bi bi-pencil-square"></i>
      </button>
    </div>
  );
};

export default ButtonRenameBuildCard;
