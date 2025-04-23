import React from "react";

interface SortDropdownBarProps {
  value: "asc" | "desc" | "";
  onChange: (value: "asc" | "desc" | "") => void;
  options: { value: "asc" | "desc" | ""; label: string }[];
}

const SortDropdownBar: React.FC<SortDropdownBarProps> = ({ value, onChange, options }) => {
  return (
    <div className="item-grid-filter">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as "asc" | "desc" | "")}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdownBar;