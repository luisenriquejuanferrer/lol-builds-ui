import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="about">
        <div className="about-container">
          <h1>Your shortcut to dominate the Rift</h1>
          <h2>
            A simple and efficient tool to create, export and import custom
            builds for League of Legends.
          </h2>
          <button>Get Started<i className="bi bi-arrow-right"></i></button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
