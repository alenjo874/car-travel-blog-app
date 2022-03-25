import React from "react";
import background from "../../style/images/GTR.jpg";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-background">
        <div className="home-blurb">
          <p>Tell Us Your Stories</p>
          <em>Connect and Share through these blogs</em>
          <button>Get Started</button>
        </div>
        <div>
          <img src={background} alt="gtr background image" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
