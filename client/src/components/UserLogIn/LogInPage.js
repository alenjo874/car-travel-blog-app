import React from "react";
import GTR from "../../style/images/GTR.jpg";
import LogInForm from "./LogInForm";

function LogInPage() {
  return (
    <div className="login-page-container">
      <div>
        <img src={GTR} alt="GTR" />
      </div>
      <LogInForm />
    </div>
  );
}

export default LogInPage;
