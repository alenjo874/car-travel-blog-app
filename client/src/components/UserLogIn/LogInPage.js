import React from "react";
import OverheadRoad from "../../style/images/OverheadRoad.jpg";
import LogInForm from "./LogInForm";

function LogInPage({ handleLogIn }) {
  return (
    <div className="login-page-container">
      <div>
        <img src={OverheadRoad} alt="BMW" />
      </div>
      <LogInForm handleLogIn={handleLogIn} />
    </div>
  );
}

export default LogInPage;
