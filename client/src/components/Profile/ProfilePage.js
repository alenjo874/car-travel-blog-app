import React from "react";

function ProfilePage({ setCurrentUser, currentUser }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser(""));
  }

  return (
    <div className="profile-container">
      <div className="pro-head">
        <h2>Welcome {currentUser.name}</h2>
        <p>Update Profile</p>
      </div>
      <div className="pro-body">
        <form>
          <label>Profile Picture</label>
          <input></input>
          <label>Account Name</label>
          <input></input>
          <label>Password</label>
          <input></input>
          <label>Interests</label>
          <input></input>
          <label>About</label>
          <input></input>
          <button>Update</button>
        </form>
      </div>
      <div className="pro-footer">
        <button className="logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
