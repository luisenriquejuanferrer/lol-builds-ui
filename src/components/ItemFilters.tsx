import React, { useState } from "react";

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

const filterNames: { [key in keyof Filters]: string } = {
  AbilityHaste: "Ability Haste",
  //Active: "Active",
  Armor: "Armor",
  ArmorPenetration: "Armor Penetration",
  AttackSpeed: "Attack Speed",
  //Aura: "Aura",
  Boots: "Boots",
  Consumable: "Consumable",
  CooldownReduction: "Cooldown Reduction",
  CriticalStrike: "Critical Strike",
  Damage: "Attack Damage",
  //GoldPer: "Gold Per",
  Health: "Health",
  HealthRegen: "Health Regeneration",
  //Jungle: "Jungle",
  //Lane: "Lane",
  LifeSteal: "Life Steal",
  MagicPenetration: "Magic Penetration",
  MagicResist: "Magic Resistance",
  Mana: "Mana",
  ManaRegen: "Mana Regeneration",
  NonbootsMovement: "Non-boots Movement",
  OnHit: "On-Hit Effects",
  //Slow: "Slow",
  //SpellBlock: "Spell Block",
  SpellDamage: "Ability Power",
  SpellVamp: "Vamp",
  //Stealth: "Stealth",
  Tenacity: "Tenacity",
  Trinket: "Trinket",
  //Vision: "Vision",
};

interface ItemFiltersProps {
  filters: Filters;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ItemFilters: React.FC<ItemFiltersProps> = ({
  filters,
  onCheckboxChange,
}) => {
  return (
    <div className="item-filters">
      {Object.keys(filters).map((filter) => (
        <div key={filter} className="checkbox-container">
          <input
            type="checkbox"
            name={filter}
            checked={filters[filter as keyof Filters]}
            onChange={onCheckboxChange}
          />
          <label htmlFor={filter}>{filterNames[filter as keyof Filters]}</label>
        </div>
      ))}
    </div>
  );
};

export default ItemFilters;
