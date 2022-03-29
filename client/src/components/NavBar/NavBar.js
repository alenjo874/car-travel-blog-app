import React from "react";
import { Link } from "react-router-dom";

function NavBar({blogsArray}) {
  return (
    <div className="navbar-container">
      <div>
        <h4>Logo</h4>
      </div>
      <div className="nav-elements">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/blogs">
            <li>Blogs</li>
          </Link>
        </ul>
        <div>
          <Link to="/profile">
            <p>Profile</p>
            {/* <img > */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
