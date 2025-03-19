import { Item } from '../types/Item';

export async function fetchItems(): Promise<Record<string, Item>> {
  const response = await fetch('http://localhost:8080/api/lol/items', {
    credentials: 'include', // Incluye las credenciales en la solicitud
  });
  if (!response.ok) {
    throw new Error('Error al cargar items');
  }
  const data = await response.json();
  return data;
}