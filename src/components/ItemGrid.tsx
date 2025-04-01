import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../services/ItemService";
import { Item } from "../types/Item";

interface Filters {
  [key: string]: boolean;
}

interface ItemGridProps {
  filters: Filters;
  onDragStart: (item: Item) => void;
}

const ItemGrid: React.FC<ItemGridProps> = ({ filters, onDragStart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">(""); // Estado para el orden de filtrado

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
        <div className="item-grid-search">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Item Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="item-grid-filter">
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "asc" | "desc" | "")
            }
          >
            <option value="">Filter</option>
            <option value="asc">Gold Down</option>
            <option value="desc">Gold Up</option>
          </select>
        </div>
      </div>

      <div
        className={`item-grid ${sortedItems.length === 0 ? "no-items" : ""}`}
      >
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <div
              key={item.id}
              className="item-card"
              draggable
              onDragStart={() => onDragStart(item)}
              title={item.name}
            >
              <img src={item.image} alt={item.name} />
              <h2>{item.totalGold}</h2>
            </div>
          ))
        ) : (
          <p>No hay items con esos filtros</p>
        )}
      </div>
    </div>
  );
};

export default ItemGrid;
