import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="intro-section">
        <div className="intro-section-container">
          <h1>Your shortcut to dominate the Rift</h1>
          <h2>
            A simple and efficient tool to create, export and import custom
            builds for League of Legends.
          </h2>
          <button>
            Get started
            <i className="bi bi-arrow-right" />
          </button>
        </div>
      </section>

      <section className="features-section">
        <div className="features-section-title">
          <h2>Simplify your gaming experience</h2>
          <p>
            Quickset offers you the essential tools to optimize your builds
            without complications
          </p>
          <div className="features-section-options">
            <div className="features-section-text">
              <i className="bi bi-lightning-charge" />
              <h3>Intuitive Creation</h3>
              <p>
                Clear and simple interface to create custom builds with all the
                items in the game.
              </p>
            </div>
            <div className="features-section-text">
              <i className="bi bi-download" />
              <h3>Quick Export</h3>
              <p>
                Export your builds in a game-compatible format to use them
                immediately.
              </p>
            </div>
            <div className="features-section-text">
              <i className="bi bi-upload" />
              <h3>Simple Import</h3>
              <p>
                Import previously created builds to modify them or use them
                directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tutorial-section">
        <div className="tutorial-section-title">
          <h2>How it works</h2>
          <p>
            Three simple steps to optimize your League of Legends experience
          </p>
          <div className="tutorial-section-options">
            <div className="tutorial-section-text">
              <i className="bi bi-1-circle-fill" />
              <h3>Select your champion</h3>
              <p>
                Choose the champion for which you want to create a custom build.
              </p>
            </div>
            <div className="tutorial-section-text">
              <i className="bi bi-2-circle-fill" />
              <h3>Configure your items</h3>
              <p>Add the items that best suit your playstyle and strategy.</p>
            </div>
            <div className="tutorial-section-text">
              <i className="bi bi-3-circle-fill" />
              <h3>Export or save</h3>
              <p>
                Export your build to use it in the game or save it for future
                modifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="interface-section">
        <div className="interface-section-title">
          <h2>Intuitive and efficient interface</h2>
          <p>Designed so you can create builds quickly without distractions</p>
          <div className="interface-section-options">
            <div className="interface-section-image">
              <img src="/public/localhost_5173.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section-title">
          <h2>Ready to optimize your builds?</h2>
          <p>Start creating custom builds to dominate the Summoner's Rift</p>
          <div className="cta-section-options">
            <button>
              Get started now
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
