import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./style/style.css";
import LogInForm from "./components/UserLogIn/LogInForm";
import HomePage from "./components/HomePage/HomePage";
import BlogsPage from "./components/Blogs/BlogsPage";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

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
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/blogs">
          <BlogsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
