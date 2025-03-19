import { Item } from "../types/Item";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="p-2 border rounded-lg shadow-md bg-gray-800 text-white">
      <img src={item.imageUrl} alt={item.name} className="w-full h-auto" />
    </div>
  );
};

export default ItemCard;
