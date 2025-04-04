import React, { useState } from "react";
import BuildCard from "../components/BuildCard";
import ChampionGrid from "../components/ChampionGrid";
import ItemFilters from "../components/ItemFilters";
import ItemGrid from "../components/ItemGrid";
import ButtonAddBuildCard from "../components/buttons/ButtonAddBuildCard";
import ButtonImportBuildCard from "../components/buttons/ButtonImportBuildCard";
import { Champion } from "../types/Champion";
import { Item } from "../types/Item";
import CosmicBackground from "../CosmicBackground";

interface Filters {
  [key: string]: boolean;
  AbilityHaste: boolean;
  //Active: boolean;
  Armor: boolean;
  ArmorPenetration: boolean;
  AttackSpeed: boolean;
  //Aura: boolean;
  Boots: boolean;
  Consumable: boolean;
  CooldownReduction: boolean;
  CriticalStrike: boolean;
  Damage: boolean;
  //GoldPer: boolean;
  Health: boolean;
  HealthRegen: boolean;
  //Jungle: boolean;
  //Lane: boolean;
  LifeSteal: boolean;
  MagicPenetration: boolean;
  MagicResist: boolean;
  Mana: boolean;
  ManaRegen: boolean;
  NonbootsMovement: boolean;
  OnHit: boolean;
  //Slow: boolean;
  //SpellBlock: boolean;
  SpellDamage: boolean;
  SpellVamp: boolean;
  //Stealth: boolean;
  Tenacity: boolean;
  Trinket: boolean;
  //Vision: boolean;
}

// Se puede cambiar el orden de los filtros modificando el orden aquí
const HomePage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    Damage: false,
    AbilityHaste: false,
    SpellDamage: false,
    //Active: false,
    Armor: false,
    ArmorPenetration: false,
    AttackSpeed: false,
    //Aura: false,
    Boots: false,
    Consumable: false,
    CooldownReduction: false,
    CriticalStrike: false,
    //GoldPer: false,
    Health: false,
    HealthRegen: false,
    //Jungle: false,
    //Lane: false,
    LifeSteal: false,
    MagicPenetration: false,
    MagicResist: false,
    Mana: false,
    ManaRegen: false,
    NonbootsMovement: false,
    OnHit: false,
    //Slow: false,
    //SpellBlock: false,
    //Stealth: false,
    Tenacity: false,
    Trinket: false,
    //Vision: false,
    SpellVamp: false,
  });

  interface BuildCardData {
    id: number;
    buildChampionId: string; // Identificador único para cada BuildCard
    initialItems: string[];
    trinketItem: string; // Estado inicial de los ítems en la BuildCard
  }

  const [buildCards, setBuildCards] = useState<BuildCardData[]>([]);
  const [activeGrid, setActiveGrid] = useState<"champions" | "items">(
    "champions"
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleItemDragStart = (item: Item) => {
    event.dataTransfer.setData("itemId", item.id);
  };

  const handleChampionDragStart = (champion: Champion) => {
    event.dataTransfer.setData("championId", champion.id);
  };

  const handleAddBuildCard = () => {
    const newBuildCard: BuildCardData = {
      id: Date.now(), // Genera un ID único basado en el timestamp actual
      buildChampionId: "", // Inicializa sin un campeón
      initialItems: Array(6).fill(""), // Inicializa con 6 slots vacíos
      trinketItem: "", // Inicializa sin un trinket
    };

    setBuildCards((prevBuildCards) => [...prevBuildCards, newBuildCard]);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      console.log("No se ha podido importar");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);

        // Validar la estructura del JSON
        if (
          typeof json.buildChampionId !== "string" || // Verifica que sea un string, incluso si es ""
          !Array.isArray(json.buildItems) || // Verifica que sea un array
          typeof json.trinketItem !== "string"
        ) {
          console.error("El archivo JSON no tiene la estructura correcta.");
          return;
        }

        // Procesar el JSON para asegurarse de que las URLs sean correctas
        const newBuildCard: BuildCardData = {
          id: Date.now(),
          initialItems: json.buildItems.map(
            (item: string) =>
              item
                ? `https://ddragon.leagueoflegends.com/cdn/15.6.1/img/item/${item}.png`
                : "" // Si el slot está vacío, lo dejamos como una cadena vacía
          ),
          buildChampionId: json.buildChampionId
            ? `https://ddragon.leagueoflegends.com/cdn/15.6.1/img/champion/${json.buildChampionId}.png`
            : "", // Si no hay campeón, dejamos el slot vacío
          trinketItem: json.trinketItem
            ? `https://ddragon.leagueoflegends.com/cdn/15.6.1/img/item/${json.trinketItem}.png`
            : "", // Si no hay trinket, dejamos el slot vacío
        };

        setBuildCards((prevBuildCards) => [...prevBuildCards, newBuildCard]);
      } catch (error) {
        console.error("Error al importar el archivo JSON:", error);
      }
    };
    reader.readAsText(file);
    console.log("Se ha importado correctamente.");
  };

  return (
    <div className="flex-container">
      <ItemFilters filters={filters} onCheckboxChange={handleCheckboxChange} />
      <div className="sticky">
        <div className="btns-champions-items">
          <button
            className="btn-champions"
            onClick={() => setActiveGrid("champions")} // Cambia el grid activo a "champions"
          >
            <i className="bi bi-plus-circle"></i>
            Champions
          </button>
          <button
            className="btn-items"
            onClick={() => setActiveGrid("items")} // Cambia el grid activo a "items"
          >
            <i className="bi bi-plus-circle"></i>
            Items
          </button>
        </div>
        <div>
          <div
            style={{ display: activeGrid === "champions" ? "block" : "none" }}
          >
            <ChampionGrid onDragStart={handleChampionDragStart} />
          </div>
          <div style={{ display: activeGrid === "items" ? "block" : "none" }}>
            <ItemGrid filters={filters} onDragStart={handleItemDragStart} />
          </div>
        </div>
      </div>
      <div className="build-card-section">
        <div className="btns-add-import-build-card">
          <ButtonAddBuildCard onClick={handleAddBuildCard} />
          <ButtonImportBuildCard onImport={handleImport} />
        </div>
        {buildCards.map((buildCard) => (
          <BuildCard
            key={buildCard.id}
            id={buildCard.id}
            buildChampionId={buildCard.buildChampionId}
            initialItems={buildCard.initialItems}
            trinketItem={buildCard.trinketItem}
            onDelete={(id) =>
              setBuildCards((prevBuildCards) =>
                prevBuildCards.filter((card) => card.id !== id)
              )
            }
          />
        ))}
      </div>
      <CosmicBackground />
    </div>
  );
};

export default HomePage;
