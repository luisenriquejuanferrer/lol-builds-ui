import React, { useState } from "react";
import ItemGrid from "../components/ItemGrid";
import ChampionGrid from "../components/ChampionGrid";
import ItemFilters from "../components/ItemFilters";
import ButtonAddBuildCard from "../components/buttons/ButtonAddBuildCard";
import BuildCard from "../components/BuildCard";
import { Item } from "../types/Item";
import { Champion } from "../types/Champion";
import ButtonImportBuildCard from "../components/buttons/ButtonImportBuildCard";

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
    id: number; // Identificador único para cada BuildCard
    items: string[]; // Estado inicial de los ítems en la BuildCard
  }

  const [buildCards, setBuildCards] = useState<BuildCardData[]>([]); // Lista de BuildCards
  const [activeGrid, setActiveGrid] = useState<"champions" | "items">(
    "champions"
  ); // Estado para el grid activo

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
      id: Date.now(), // Usamos un timestamp como identificador único
      items: Array(6).fill(""), // Estado inicial de los ítems en la BuildCard
    };
    setBuildCards((prevBuildCards) => [...prevBuildCards, newBuildCard]);
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
          <ButtonImportBuildCard onClick={handleAddBuildCard} />
        </div>
        {buildCards.map((buildCard) => (
          <BuildCard
            key={buildCard.id}
            id={buildCard.id}
            initialItems={buildCard.items}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
