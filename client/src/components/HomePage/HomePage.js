import React from "react";
// import GTR from "../../style/images/GTR.jpg";
import Porsche from "../../style/images/Porsche.jpg";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-background">
        <div className="home-blurb">
          <p>Tell Us Your Story</p>
          <em>Connect and Share stories with car enthusiasts</em>
          <button>Get Started</button>
        </div>
        <div>
          <img src={Porsche} alt="gtr background" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
