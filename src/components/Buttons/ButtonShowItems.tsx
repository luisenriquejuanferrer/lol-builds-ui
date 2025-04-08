interface ButtonShowItemsProps {
  onClick: () => void;
}
const ButtonShowItems: React.FC<ButtonShowItemsProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className="btn-items"
        onClick={onClick} // Cambia el grid activo a "items"
      >
        <i className="bi bi-plus-circle"></i>
        Items
      </button>
    </div>
  );
};

export default ButtonShowItems;
