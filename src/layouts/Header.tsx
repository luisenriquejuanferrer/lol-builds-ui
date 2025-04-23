const Header: React.FC = () => {
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="header-title">
            <i className="bi bi-lightning-charge-fill" />
            <h1>Quickset</h1>
          </div>
          <div className="header-nav">
            <h1>Home</h1>
            <h1>Make a Build...</h1>
            <h1>About</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
