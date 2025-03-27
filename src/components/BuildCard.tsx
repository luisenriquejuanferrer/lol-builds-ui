import { useState } from "react";

function BuildCard() {
  const [buildItems, setBuildItems] = useState<string[]>(Array(6).fill("")); // Estado para los items de la build

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

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleSlotClick = (index: number) => {
    const newBuildItems = [...buildItems];
    newBuildItems[index] = ""; // Elimina el ítem del slot
    setBuildItems(newBuildItems);
  };

  return (
    <div className="build-card-container">
      <div className="build-card-header">
        <p>Item build 01</p>
        <button>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button>
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <div className="build-card">
        <div className="build-champion">
          <img
            src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kaisa.png"
            alt="Kai'sa"
          />
          <h2>Kai'sa</h2>
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
        <div className="build-items-trinket"></div>
      </div>
    </div>
  );
}

export default BuildCard;
