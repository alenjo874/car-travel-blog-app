import React from "react";
import Porsche from "../../style/images/Porsche.jpg";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-background">
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeIn" }}
          className="home-blurb"
        >
          <p>Tell Us Your Story</p>
          <em>Share your passion with other car enthusiasts and travelers</em>
          <Link to="/new_blog">
            <button>Get Started</button>
          </Link>
        </motion.div>
        <div>
          {/* <img src={Porsche} alt="gtr background" /> */}
          <LazyLoadImage src={Porsche} effect="blur" alt="car in rain" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
