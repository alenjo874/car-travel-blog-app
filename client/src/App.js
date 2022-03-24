import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./style/style.css";
import LogInForm from "./components/UserLogIn/LogInForm";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  // if (!currentUser) return <LogInForm />;
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
