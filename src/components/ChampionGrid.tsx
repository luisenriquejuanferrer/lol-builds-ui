import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchChampions } from "../services/championService";
import { Champion } from "../types/Champion";
import ChampionCard from "./ChampionCard";

interface ChampionGridProps {
  onDragStart: (champion: Champion) => void;
}

const ChampionGrid: React.FC<ChampionGridProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("asc");

  const {
    data: championsMap,
    isLoading,
    error,
  } = useQuery<Record<string, Champion>, Error>({
    queryKey: ["champions"],
    queryFn: fetchChampions,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar campeones</p>;

  const champions = championsMap ? Object.values(championsMap) : [];

  const filteredChampions = champions.filter((champion) => {
    const matchesSearchTerm = champion.id
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSearchTerm;
  });

  const sortedChampions = [...filteredChampions].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.id.localeCompare(b.id);
    } else if (sortOrder === "desc") {
      return b.id.localeCompare(a.id);
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
            placeholder="Champion Search"
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
            <option value="asc">Name Down</option>
            <option value="desc">Name Up</option>
          </select>
        </div>
      </div>

      <div className={`item-grid ${sortedChampions.length === 0 ? "no-items" : ""}`}>
        {sortedChampions.length > 0 ? (
          sortedChampions.map((champion) => (
            <ChampionCard key={champion.id} champion={champion} onDragStart={(draggedChampion) => draggedChampion}/>
          ))
        ) : (
          <p>No existe un campeón con ese nombre.</p>
        )}
      </div>
    </div>
  );
};

export default ChampionGrid;
