import React from "react";
import Roadtrip from "../../style/images/Roadtrip.jpg";
import LogInForm from "./LogInForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LogInPage({ handleLogIn, setUsersArray }) {
  return (
    <div className="login-page-container">
      <div>
        {/* <img src={Roadtrip} alt="BMW" /> */}
        <LazyLoadImage src={Roadtrip} effect="blur" alt="bmw" />
      </div>
      <LogInForm handleLogIn={handleLogIn} setUsersArray={setUsersArray} />
    </div>
  );
}

export default LogInPage;
