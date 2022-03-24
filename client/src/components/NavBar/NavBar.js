import React from "react";

function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <h4>Logo</h4>
      </div>
      <div className="nav-elements">
        <ul>
          <li>Home</li>
          <li>Blogs</li>
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
