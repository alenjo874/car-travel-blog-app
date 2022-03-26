import React, { useState } from "react";

function LogInForm({ handleLogIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp(e) {
    e.preventDefault();
    const user = {
      name: username,
      password: password,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    setUsername("");
    setPassword("");
  }

  function handleSignIn(e) {
    e.preventDefault();
    const user = {
      name: username,
      password: password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    handleLogIn(username);
    setUsername("");
    setPassword("");
  }

  return (
    <div className="login-form-container">
      <form>
        <label>Sign In</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Email"
        ></input>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        <button onClick={handleSignUp}>SIGN UP</button>
        <button onClick={handleSignIn}>LOGIN</button>
      </form>
    </div>
  );
}

export default LogInForm;
