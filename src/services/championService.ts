import axios from "axios";
import { Champion } from "../types/Champion";

export async function fetchChampions(): Promise<Record<string, Champion>> {
  try {
    const response = await axios.get("http://localhost:8080/lolbuilds/champions/loadFromDatabase");
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los campeones");
  }
}
