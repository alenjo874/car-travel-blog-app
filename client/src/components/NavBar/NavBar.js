import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function NavBar({ blogsArray }) {
  const [showHamNav, setShowHamNav] = useState(false);

  const navHam = (
    <motion.div className="ham-elements-container">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/blogs">
          <li>Blogs</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </motion.div>
  );

  function handleHamNav() {
    setShowHamNav(true);
  }

  const triBarButton = (
    <motion.button className="nav-hamburger-btn" onClick={handleHamNav}>
      <FontAwesomeIcon icon={faBars} />
    </motion.button>
  );

  const xButton = (
    <motion.button className="nav-hamburger-btn">
      <FontAwesomeIcon icon={faX} />
    </motion.button>
  );

  return (
    <div className="navbar-container">
      <div className="nav-elem-ham">
        <div>
          <h4>Logo</h4>
        </div>
        <div className="nav-elements-container">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/blogs">
              <li>Blogs</li>
            </Link>
            <Link to="/profile">
              <li>Profile</li>
            </Link>
          </ul>
        </div>
        <div className="nav-hamburger-container">{triBarButton}</div>
      </div>
      {showHamNav ? navHam : null}
    </div>
  );
}

export default NavBar;
