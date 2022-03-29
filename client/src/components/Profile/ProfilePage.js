import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ForestOverhead from "../../style/images/ForestOverhead.jpg";

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

  const updateProfileForm = (
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
  );

  const profileIntroBanner = (
    <div className="blog-page-intro">
      <span className="intro-overlay">
        <motion.h2
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          Welcome {currentUser.name} 
        </motion.h2>
      </span>
      <div className="blog-intro-banner">
        <img src={ForestOverhead} loading="lazy" alt="open road" />
      </div>
    </div>
  );

  return (
    <div className="profile-container">
      <div className="pro-head">{profileIntroBanner}</div>
      <motion.div className="pro-body">
        <p>Profile Information</p> {updateProfileForm}
      </motion.div>
      <AnimatePresence>
        {formUpdated ? (
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
              <p>Edit Successful</p>
              <button onClick={hideConfirmation}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </motion.div>
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
