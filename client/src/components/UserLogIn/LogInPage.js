import React from "react";
import Roadtrip from "../../style/images/Roadtrip.jpg";
import LogInForm from "./LogInForm";

function LogInPage({ handleLogIn }) {
  return (
    <div className="login-page-container">
      <div>
        <img src={Roadtrip} alt="BMW" />
      </div>
      <LogInForm handleLogIn={handleLogIn} />
    </div>
  );
}

export default LogInPage;
