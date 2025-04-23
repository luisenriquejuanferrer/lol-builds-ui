import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchItems } from "../services/itemService";
import { Item } from "../types/Item";
import ItemCard from "../components/ItemCard";
import SortDropdownBar from "./SortDropdownBar";
import SearchBar from "./SearchBar";

interface Filters {
  [key: string]: boolean;
}

interface ItemGridProps {
  filters: Filters;
  onDragStart: (item: Item) => void;
}

const ItemGrid: React.FC<ItemGridProps> = ({ filters }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("asc"); // Estado para el orden de filtrado

  const {
    data: itemsMap,
    isLoading,
    error,
  } = useQuery<Record<string, Item>, Error>({
    queryKey: ["items"],
    queryFn: fetchItems,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar items</p>;

  const items = itemsMap ? Object.values(itemsMap) : [];

  // Verifica si hay algún filtro activo
  const activeFilters = Object.keys(filters).filter(
    (filter) => filters[filter]
  );

  // Filtra los items según los filtros seleccionados, o muestra todos si no hay filtros activos
  const filteredItems = items.filter((item) => {
    const matchesFilters =
      activeFilters.length > 0
        ? activeFilters.every((filter) => item.tags.includes(filter))
        : true;
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilters && matchesSearchTerm;
  });

  // Ordena los items según el orden de filtrado seleccionado
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.totalGold - b.totalGold;
    } else if (sortOrder === "desc") {
      return b.totalGold - a.totalGold;
    }
    return 0;
  });

  return (
    <div className="item-grid-container">
      <div className="item-grid-search-and-filter">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Item Search"
        />
        <SortDropdownBar
          value={sortOrder}
          onChange={setSortOrder}
          options={[
            { value: "desc", label: "Gold Down" },
            { value: "asc", label: "Gold Up" },
          ]}
        />
      </div>
      <div
        className={`item-grid ${sortedItems.length === 0 ? "no-items" : ""}`}
      >
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onDragStart={(draggedItem) => draggedItem}
            />
          ))
        ) : (
          <p>No hay items con esos filtros</p>
        )}
      </div>
    </div>
  );
};

export default ItemGrid;
