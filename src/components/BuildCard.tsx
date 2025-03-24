import { useState } from "react";
import "../style.css";

function BuildCard() {
  return (
    <div className="build-card-container">
      <p>Item build 01</p>
      <div className="build-card">
        <div className="build-champion">
          <img src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aatrox.png" alt="Aatrox" />
          <h2>Aatrox</h2>
        </div>
        <div className="build-items-grid">
            <img
              src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1001.png"
              alt="Boots"
            />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1001.png"
              alt="Boots"
            />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1001.png"
              alt="Boots"
            />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1001.png"
              alt="Boots"
            />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1001.png"
              alt="Boots"
            />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/1001.png"
              alt="Boots"
            />
          </div>
        <div className="build-items-trinket">
          <img src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/3340.png" alt="Trinket" />
        </div>
      </div>
    </div>
  );
}

export default BuildCard;
