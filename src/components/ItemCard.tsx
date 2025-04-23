import React from "react";
import { Item } from "../types/Item";

interface ItemCardProps {
  item: Item;
  onDragStart: (item: Item) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDragStart }) => {
  return (
    <div
      className="item-card"
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("itemId", item.id.toString());
        event.dataTransfer.setData("itemImage", item.image);
        onDragStart(item);
      }}
      title={item.name}
    >
      <img src={item.image} alt={item.name} />
      <h2>{item.totalGold}</h2>
    </div>
  );
};

export default ItemCard;