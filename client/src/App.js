import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LogInForm from "./components/UserLogIn/LogInForm";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);
  console.log(currentUser);
  if (!currentUser) return <LogInForm />;
  return (
    <div className="App">
      <header className="App-header">
        <LogInForm />
      </header>
    </div>
  );
}

export default App;
