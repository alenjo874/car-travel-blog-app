import React from "react";
import { Link } from "react-router-dom";

function NavBar({ blogsArray }) {
  return (
    <div className="navbar-container">
      <div>
        <h4>Logo</h4>
      </div>
      <div className="nav-elements-container">
        <ul>
          <Link to="/">
            <li className="nav-elements">Home</li>
          </Link>
          <Link to="/blogs">
            <li className="nav-elements">Blogs</li>
          </Link>
          <Link to="/profile">
            <li className="nav-elements">Profile</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
