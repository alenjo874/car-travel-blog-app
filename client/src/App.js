import React, { useEffect, useState } from "react";
import "./style/style.css";
import HomePage from "./components/HomePage/HomePage";
import BlogsPage from "./components/Blogs/BlogsPage";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LogInPage from "./components/UserLogIn/LogInPage";
import BlogEntryForm from "./components/Blogs/BlogEntryForm";
import ProfilePage from "./components/Profile/ProfilePage";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [blogsArray, setBlogsArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);


  useEffect(() => {
    fetch("/blogs")
      .then((res) => res.json())
      .then(setBlogsArray);
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then(setUsersArray);
  }, []);

  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  function handleLogIn(username) {
    const userObj = usersArray.find((user) => user.name === username);

    setCurrentUser(userObj);
  }

  if (!currentUser)
    return (
      <LogInPage handleLogIn={handleLogIn} setUsersArray={setUsersArray} />
    );

  return (
    <div className="App">
      <NavBar blogsArray={blogsArray} {...currentUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setUsersArray={setUsersArray}
            usersArray={usersArray}
            setBlogsArray={setBlogsArray}
            blogsArray={blogsArray}
          />
        </Route>
        <Route exact path="/blogs">
          <BlogsPage setBlogsArray={setBlogsArray} blogsArray={blogsArray} />
        </Route>
        <Route exact path="/new_blog">
          <BlogEntryForm
            setBlogsArray={setBlogsArray}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
