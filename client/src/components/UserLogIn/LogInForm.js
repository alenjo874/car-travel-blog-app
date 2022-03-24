import React, { useState } from "react";

function LogInForm() {
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

  return (
    <div>
      <form className="sign-up-form">
        <label>Sign Up</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleSignUp}>SIGN UP</button>
        <button>LOGIN</button>
      </form>
    </div>
  );
}

export default LogInForm;
