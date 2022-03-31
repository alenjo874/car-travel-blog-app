import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function NavBar({ blogsArray }) {
  const [showHamNav, setShowHamNav] = useState(false);
  function handleShowHam() {
    setShowHamNav(true);
  }

  function handleHideHam() {
    setShowHamNav(false);
  }

  const navHam = (
    <motion.div
      className="ham-elements-container"
      initial={{ y: "-10%", opacity: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.25,
          type: "show",
          ease: "easeIn",
        },
      }}
      exit={{
        y: "-10%",
        opacity: 0,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      <ul>
        <Link to="/">
          <li onClick={handleHideHam}>Home</li>
        </Link>
        <Link to="/blogs">
          <li onClick={handleHideHam}>Blogs</li>
        </Link>
        <Link to="/profile">
          <li onClick={handleHideHam}>Profile</li>
        </Link>
      </ul>
    </motion.div>
  );

  const triBarButton = (
    <motion.button className="nav-hamburger-btn" onClick={handleShowHam}>
      <FontAwesomeIcon icon={faBars} />
    </motion.button>
  );

  const xButton = (
    <motion.button className="nav-hamburger-btn" onClick={handleHideHam}>
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
        <div className="nav-hamburger-container">
          {showHamNav ? xButton : triBarButton}
        </div>
      </div>
      <AnimatePresence>{showHamNav ? navHam : null}</AnimatePresence>
    </div>
  );
}

export default NavBar;
