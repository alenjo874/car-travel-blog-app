import React from "react";
import BMW from "../../style/images/BMW.jpg";
import LogInForm from "./LogInForm";

function LogInPage({ handleLogIn }) {
  return (
    <div className="login-page-container">
      <div>
        <img src={BMW} alt="BMW" />
      </div>
      <LogInForm handleLogIn={handleLogIn} />
    </div>
  );
}

export default LogInPage;
