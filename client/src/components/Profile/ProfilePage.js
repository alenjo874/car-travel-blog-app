import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

function ProfilePage({ setCurrentUser, currentUser }) {
  const [profilePic, setProfilePic] = useState(currentUser.profile_picture);
  const [accountName, setAccountName] = useState(currentUser.name);
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState(currentUser.category);
  const [aboutMe, setAboutMe] = useState(currentUser.about);
  const [formUpdated, setFormUpdated] = useState(false);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(setCurrentUser(""));
  }

  function handleUpdatedProfile(e) {
    e.preventDefault();
    const profileDetailsObj = {
      name: accountName,
      category: interests,
      about: aboutMe,
      profile_picture: profilePic,
    };

    fetch(`users/${currentUser.id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...profileDetailsObj }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setFormUpdated(true);
  }

  function hideConfirmation() {
    setFormUpdated(false);
  }

  return (
    <div className="profile-container">
      <div className="pro-head">
        <h2>Welcome {currentUser.name}</h2>
        <p>Update Profile</p>
      </div>
      <div className="pro-body">
        <form onSubmit={handleUpdatedProfile}>
          <div className="pro-page-pic">
            <img src={currentUser.profile_picture} alt="profile pic" />
          </div>
          <label>Profile Picture</label>
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          ></input>
          <label>Account Name</label>
          <input
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label>Interests</label>
          <input
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="ex. Cars Roadtrips Travel"
          ></input>
          <label>About</label>
          <input
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          ></input>
          <button>Update</button>
        </form>
      </div>
      <AnimatePresence>
        {formUpdated ? (
          <div className="update-pro-popup">
            <div className="submit-confirm">
              <button onClick={hideConfirmation}>Wow</button>
            </div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="pro-footer">
        <button className="logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
