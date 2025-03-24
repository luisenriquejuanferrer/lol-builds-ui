import React, { useState } from "react";
import ItemGrid from "../components/ItemGrid";
import ItemFilters from "../components/ItemFilters";
import EmptyBuildCard from "../components/EmptyBuildCard";
import BuildCard from "../components/BuildCard";
import "../style.css";

interface Filters {
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

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <div className="flex-container">
      <ItemFilters filters={filters} onCheckboxChange={handleCheckboxChange} />
      <ItemGrid filters={filters} />
      <div>
        <EmptyBuildCard />
        <BuildCard />
      </div>
    </div>
  );
};

export default HomePage;
