import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

function BlogCard({
  id,
  title,
  blog_entry,
  thumbnail,
  like,
  user,
  changeShowBlogState,
}) {
  function handleShowBlog() {
    changeShowBlogState(id);
  }

  return (
    <div className="blog-card-container">
      <div className="blog-card-teaser">
        <span>
          <h5 onClick={handleShowBlog}>{title}</h5>
          <p onClick={handleShowBlog}>{blog_entry}</p>
          <p>
            Author: <b>{user.name}</b>
          </p>
        </span>
        <div>
          <button>Read More</button>
        </div>
      </div>
      <motion.div
        className="blog-thumbnail"
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <img
          src={thumbnail}
          alt="blog thumbnail"
          onClick={handleShowBlog}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

export default BlogCard;
