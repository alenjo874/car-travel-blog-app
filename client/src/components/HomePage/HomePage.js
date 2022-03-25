import React from "react";
import Porsche from "../../style/images/Porsche.jpg";
import { motion } from "framer-motion/dist/framer-motion";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-background">
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="home-blurb"
        >
          <p>Tell Us Your Story</p>
          <em>Connect and Share stories with car enthusiasts</em>
          <button>Get Started</button>
        </motion.div>
        <div>
          <img src={Porsche} alt="gtr background" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
