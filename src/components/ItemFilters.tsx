import { useState } from "react";
import "../style.css"; // Importa el archivo CSS

function ItemFilters() {
  const [filters, setFilters] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
    filter5: false,
    filter6: false,
    filter7: false,
    filter8: false,
    filter9: false,
    filter10: false,
    filter11: false,
    filter12: false,
    filter13: false,
    filter14: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <div className="item-filters">
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter1"
          checked={filters.filter1}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter1">Attack Damage</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter2"
          checked={filters.filter2}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter2">Critical Strike</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter3"
          checked={filters.filter3}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter3">Attack Speed</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter4"
          checked={filters.filter4}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter4">On-Hit Effects</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter5"
          checked={filters.filter5}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter5">Armor Penetration</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter6"
          checked={filters.filter6}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter6">Ability Power</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter7"
          checked={filters.filter7}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter7">Mana & Regeneration</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter8"
          checked={filters.filter8}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter8">Magic Penetration</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter9"
          checked={filters.filter9}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter9">Health & Regeneration</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter10"
          checked={filters.filter10}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter10">Armor</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter11"
          checked={filters.filter11}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter11">Magic Resistance</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter12"
          checked={filters.filter12}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter12">Ability Haste</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter13"
          checked={filters.filter13}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter13">Movement</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="filter14"
          checked={filters.filter14}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="filter14">Life Steal & Vamp</label>
      </div>
    </div>
  );
}

export default ItemFilters;
