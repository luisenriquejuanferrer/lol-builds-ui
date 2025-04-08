interface ButtonShowChampionsProps {
  onClick: () => void;
}

const ButtonShowChampions: React.FC<ButtonShowChampionsProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className="btn-champions"
        onClick={onClick} // Cambia el grid activo a "champions"
      >
        <i className="bi bi-plus-circle"></i>
        Champions
      </button>
    </div>
  );
};

export default ButtonShowChampions;
