import React from "react";
import { Champion } from "../types/Champion";

interface ChampionCardProps {
  champion: Champion;
  onDragStart: (champion: Champion) => void;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ champion, onDragStart }) => {
  return (
    <div
      className="champion-card"
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("championId", champion.id);
        event.dataTransfer.setData("championImage", champion.image);
        onDragStart(champion);
      }}
      title={champion.id}
    >
      <img src={champion.image} alt={champion.id} />
      <h2>{champion.id}</h2>
    </div>
  );
};

export default ChampionCard;