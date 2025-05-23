import { useState, useEffect } from "react";
import ButtonRenameBuildCard from "./buttons/ButtonRenameBuildCard";
import ButtonExportBuildCard from "./buttons/ButtonExportBuildCard";
import ButtonDeleteBuildCard from "./buttons/ButtonDeleteBuildCard";

interface BuildCardProps {
  id: number;
  buildChampionId: string;
  initialItems: string[];
  trinketItem: string;
  onDelete: (id: number) => void;
}

const BuildCard: React.FC<BuildCardProps> = ({
  id,
  buildChampionId,
  initialItems,
  trinketItem,
  onDelete,
}) => {
  // Restaurar el estado desde localStorage o usar valores iniciales
  const [buildItems, setBuildItems] = useState<string[]>(() => {
    const savedBuild = localStorage.getItem(`buildCard-${id}`);
    return savedBuild ? JSON.parse(savedBuild).buildItems : initialItems;
  });

  const [buildChampion, setBuildChampion] = useState<string>(() => {
    const savedBuild = localStorage.getItem(`buildCard-${id}`);
    return savedBuild
      ? JSON.parse(savedBuild).buildChampion
      : buildChampionId.startsWith("http")
      ? buildChampionId
      : buildChampionId
      ? `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${buildChampionId}.png`
      : "";
  });

  const [trinket, setTrinket] = useState<string>(() => {
    const savedBuild = localStorage.getItem(`buildCard-${id}`);
    return savedBuild
      ? JSON.parse(savedBuild).trinket
      : trinketItem.startsWith("http")
      ? trinketItem
      : trinketItem
      ? `https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/${trinketItem}.png`
      : "";
  });
  
  const [buildName, setBuildName] = useState<string>(() => {
    const savedBuild = localStorage.getItem(`buildCard-${id}`);
    return savedBuild ? JSON.parse(savedBuild).buildName : "Empty Build";
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Guardar el estado en localStorage cada vez que cambie
  useEffect(() => {
    const buildData = {
      buildItems,
      buildChampion,
      trinket,
      buildName,
    };
    localStorage.setItem(`buildCard-${id}`, JSON.stringify(buildData));
  }, [buildItems, buildChampion, trinket, buildName, id]);

  const handleEditClick = () => {
    setIsEditing(true); // Activa el modo de edición
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuildName(event.target.value); // Actualiza el nombre de la build
  };

  const handleNameSubmit = () => {
    setIsEditing(false); // Desactiva el modo de edición
  };

  const handleNameBlur = () => {
    setIsEditing(false); // Desactiva el modo de edición al perder el foco
  };

  const handleChampionDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const championId = event.dataTransfer.getData("championId");
    const championImage = event.dataTransfer.getData("championImage");

    if (!championId || !championImage) return;

    setBuildChampion(championImage);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("itemId");
    const itemImage = event.dataTransfer.getData("itemImage");
    const newBuildItems = [...buildItems];

    if (!itemId || !itemImage) return;

    newBuildItems[index] = itemImage;
    setBuildItems(newBuildItems);
  };

  const handleTrinketDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("itemId");
    const itemImage = event.dataTransfer.getData("itemImage");

    if (!itemId || !itemImage) return;

    setTrinket(itemImage);
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
    setTrinket(""); // Elimina el ítem del trinket
  };

  const handleChampionClick = () => {
    setBuildChampion(""); // Elimina el campeón
  };

  const handleExport = () => {
    const buildData = {
      buildChampionId: buildChampion.split("/").pop()?.split(".")[0] || "", // Extrae el ID del campeón
      buildItems: buildItems.map(
        (item) => (item ? item.split("/").pop()?.split(".")[0] : "") // Extrae el ID de cada ítem
      ),
      trinketItem: trinket.split("/").pop()?.split(".")[0] || "", // Extrae el ID del trinket
    };

    const json = JSON.stringify(buildData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `build-${id}.json`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="build-card-container">
      <div className="build-card-header">
        {isEditing ? (
          <input
            type="text"
            value={buildName}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleNameSubmit();
            }}
            autoFocus
          />
        ) : (
          <p onClick={handleEditClick}>{buildName}</p>
        )}
        <ButtonRenameBuildCard onClick={handleEditClick} />
        <ButtonExportBuildCard onClick={handleExport} />
        <ButtonDeleteBuildCard id={id} onClick={onDelete} />
      </div>
      <div className="build-card">
        <div
          className="build-champion"
          onDrop={handleChampionDrop}
          onDragOver={handleDragOver}
          onClick={handleChampionClick}
        >
          <div className="build-champion-slot">
            {buildChampion && <img src={buildChampion} alt="Champion" />}
          </div>
          <h2>{buildChampion.split("/").pop()?.split(".")[0] || "Champion"}</h2>
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
          onDrop={handleTrinketDrop}
          onDragOver={handleDragOver}
          onClick={handleTrinketClick}
        >
          {trinket && <img src={trinket} alt="Trinket Item" />}
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
