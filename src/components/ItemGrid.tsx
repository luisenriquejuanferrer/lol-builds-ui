import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '../services/itemService';
import { Item } from '../types/Item';

function ItemGrid() {
  const { data: itemsMap, isLoading, error } = useQuery<Record<string, Item>, Error>({
    queryKey: ['items'],
    queryFn: fetchItems
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar items</p>;

  const items = itemsMap ? Object.values(itemsMap) : [];

  return (
    <div className="item-grid">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.name} />
          <h2>{item.totalGold}</h2>
        </div>
      ))}
    </div>
  );
}

export default ItemGrid;