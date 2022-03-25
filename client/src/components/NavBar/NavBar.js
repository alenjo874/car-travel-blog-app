import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <h4>Logo</h4>
      </div>
      <div className="nav-elements">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            <li>Blogs</li>
          </Link>
        </ul>
        <div>
          <p>signin</p>
          {/* <img > */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
