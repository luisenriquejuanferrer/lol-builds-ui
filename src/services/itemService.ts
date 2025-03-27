import axios from "axios";
import { Item } from "../types/Item";

export async function fetchItems(): Promise<Record<string, Item>> {
  try {
    const response = await axios.get("http://localhost:8080/api/lol/items");
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar items");
  }
}
