import { useState } from "react";
import { Champion } from "../types/Champion";

interface BuildCardProps {
  id: number;
  initialItems: string[];
}

const BuildCard: React.FC<BuildCardProps> = ({ id, initialItems }) => {
  const [buildItems, setBuildItems] = useState<string[]>(initialItems);
  const [trinketItem, setTrinketItem] = useState<string>("");
  const [buildChampion, setBuildChampion] = useState<string>("");
  const [buildChampionId, setBuildChampionId] = useState<string>("");

  const handleChampionDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const championId = event.dataTransfer.getData("championId");

    if (!championId) return;

    setBuildChampion(
      `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${championId}.png`
    );

    setBuildChampionId(`${championId}`);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("itemId");
    const newBuildItems = [...buildItems];

    if (!itemId) return;

    newBuildItems[
      index
    ] = `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${itemId}.png`;
    setBuildItems(newBuildItems);
  };

  const handleTrinketDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("itemId");
    if (!itemId) return;

    setTrinketItem(
      `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${itemId}.png`
    );
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleSlotClick = (index: number) => {
    const newBuildItems = [...buildItems];
    newBuildItems[index] = ""; // Elimina el ítem del slot
    setBuildItems(newBuildItems);
  };

  const handleTrinketClick = () => {
    setTrinketItem(""); // Elimina el ítem del trinket
  };

  const handleChampionClick = () => {
    setBuildChampion("");
    setBuildChampionId("");
  };

  return (
    <div className="build-card-container">
      <div className="build-card-header">
        <p>Empty Build</p>
        <button>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button>
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <div className="build-card">
        <div
          className="build-champion"
          onDrop={handleChampionDrop}
          onDragOver={handleDragOver}
          onClick={handleChampionClick}
        >
          <div className="build-champion-slot">
            {buildChampion && <img src={buildChampion} alt={buildChampion} />}
          </div>
          <h2>{buildChampionId || "Champion"}</h2>
        </div>
        <div className="build-items-grid">
          {buildItems.map((item, index) => (
            <div
              className="build-items-slot"
              key={index}
              onDrop={(event) => handleDrop(event, index)}
              onDragOver={handleDragOver}
              onClick={() => handleSlotClick(index)}
            >
              {item && <img src={item} alt={`Item ${index + 1}`} />}
            </div>
          ))}
        </div>
        <div
          className="build-items-trinket"
          key={7}
          onDrop={handleTrinketDrop}
          onDragOver={handleDragOver}
          onClick={handleTrinketClick}
        >
          {trinketItem && <img src={trinketItem} alt="Trinket Item" />}
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
