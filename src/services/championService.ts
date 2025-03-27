import axios from 'axios';
import { Champion } from '../types/Champion';

export async function fetchItems(): Promise<Record<string, Champion>> {
  try {
    const response = await axios.get('http://localhost:8080/api/lol/champions');
    return response.data;
  } catch (error) {
    throw new Error('Error al cargar los campeones');
  }
}