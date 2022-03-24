import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <h4>Logo</h4>
      </div>
      <div className="nav-elements">
        <ul>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/blogs" style={{ textDecoration: "none" }}>
            <li>Blogs</li>
          </NavLink>
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
