import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function LogInForm({ handleLogIn, setUsersArray }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [acctCreated, setAcctCreated] = useState(false);

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
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAcctCreated(true);
        }
        setUsersArray((prev) => [...prev, data]);
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

  function handleDemoLogin(e) {
    e.preventDefault();
    const demoAdmin = {
      name: "Demo Admin",
      password: 123,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(demoAdmin),
    });
    handleLogIn("Demo Admin");
  }

  function hideAcctConfirm() {
    setAcctCreated(false);
  }

  return (
    <div className="login-form-container">
      <form>
        <label>Sign In</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        ></input>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="on"
          type="password"
        ></input>
        <button onClick={handleSignUp}>SIGN UP</button>
        <button onClick={handleSignIn}>LOGIN</button>
        <button onClick={handleDemoLogin}>DEMO ADMIN LOGIN</button>
      </form>
      <AnimatePresence>
        {acctCreated ? (
          <div className="update-pro-popup">
            <motion.div
              className="submit-confirm"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.25,
                  type: "show",
                  ease: "easeIn",
                },
              }}
              exit={{
                y: "10%",
                opacity: 0,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
            >
              <p>Account Created</p>
              <button onClick={hideAcctConfirm}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default LogInForm;
