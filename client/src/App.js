import React, { useEffect, useState } from "react";
import "./style/style.css";
import HomePage from "./components/HomePage/HomePage";
import BlogsPage from "./components/Blogs/BlogsPage";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LogInPage from "./components/UserLogIn/LogInPage";
import BlogEntryForm from "./components/Blogs/BlogEntryForm";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [blogsArray, setBlogsArray] = useState([]);

  useEffect(() => {
    fetch("/blogs")
      .then((res) => res.json())
      .then(setBlogsArray);
  }, []);

  console.log(blogsArray);

  // useEffect(() => {
  //   fetch("/auth").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => setCurrentUser(user));
  //     }
  //   });
  // }, []);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser(""));
  }

  function handleLogIn(username) {
    setCurrentUser(username);
  }

  // if (!currentUser) return <LogInPage handleLogIn={handleLogIn} />;

  return (
    <div className="App">
      {/* <p className="logout" onClick={handleLogout}>
        Log Out
      </p> */}
      <NavBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LogInPage />
        </Route>
        <Route exact path="/blogs">
          <BlogsPage setBlogsArray={setBlogsArray} blogsArray={blogsArray}/>
        </Route>
        <Route exact path="/new_blog">
          <BlogEntryForm setBlogsArray={setBlogsArray}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
