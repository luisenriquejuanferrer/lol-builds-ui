const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-title">
            <p>
              <i className="bi bi-lightning-charge-fill" />
              Quickset
            </p>
            <p>
              A personal project by Luis Enrique Juan Ferrer for creating and
              managing League of Legends builds
            </p>
          </div>
          <div className="footer-legal">
            <p>
              Quickset isn't endorsed by Riot Games and doesn't reflect the
              views or opinions of Riot Games or anyone officially involved in
              producing or managing Riot Games properties. Riot Games and all
              associated properties are trademarks or registered trademarks of
              Riot Games, Inc.
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            {" "}
            © {new Date().getFullYear()} Luis Enrique Juan Ferrer. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
