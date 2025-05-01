import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="header-title">
            <i className="bi bi-lightning-charge-fill" onClick={() => navigate("/")}/>
            <h1 onClick={() => navigate("/")}>Quickset</h1>
          </div>
          <div className="header-nav">
            <h1 onClick={() => navigate("/")}>Home</h1>
            <h1 onClick={() => navigate("/make-a-build")}>Make a Build...</h1>
            <h1 onClick={() => navigate("/about")}>About</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
