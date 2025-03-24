import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../services/itemService";
import { Item } from "../types/Item";

interface Filters {
  [key: string]: boolean;
}

interface ItemGridProps {
  filters: Filters;
}

const ItemGrid: React.FC<ItemGridProps> = ({ filters }) => {
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
  const filteredItems =
    activeFilters.length > 0
      ? items.filter((item) =>
          activeFilters.every((filter) => item.tags.includes(filter))
        )
      : items;

  return (
    <div className={`item-grid ${filteredItems.length === 0 ? 'no-items' : ''}`}>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.totalGold}</h2>
          </div>
        ))
      ) : (
        <p>No hay items con esos filtros</p>
      )}
    </div>
  );
};

export default ItemGrid;
