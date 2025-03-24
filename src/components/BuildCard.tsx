import "../style.css";

function BuildCard() {
  return (
    <div className="build-card-container">
      <div className="build-card-header">
        <p>Item build 01</p>
        <button>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button>
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <div className="build-card">
        <div className="build-champion">
          <img></img>
          <h2>Kai'sa</h2>
        </div>
        <div className="build-items-grid">
          <img
            src="https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/1000.png"
            alt=""
          />
          <img
            src="https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/1000.png"
            alt=""
          />
          <img
            src="https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/1000.png"
            alt=""
          />
          <img
            src="https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/1000.png"
            alt=""
          />
          <img
            src="https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/1000.png"
            alt=""
          />
          <img
            src="https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/1000.png"
            alt=""
          />
        </div>
        <div className="build-items-trinket">
          <img
            src="https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/1000.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BuildCard;