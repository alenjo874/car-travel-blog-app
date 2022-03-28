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
  blog_teaser,
}) {
  function handleShowBlog() {
    changeShowBlogState(id);
  }

  return (
    <div className="blog-card-container">
      <div className="blog-card-teaser">
        <span>
          <h5 onClick={handleShowBlog}>{title}</h5>
          <p onClick={handleShowBlog}>{blog_teaser}...</p>
          <p>
            Author: <b>{user.name}</b>
          </p>
          <div>
            <button onClick={handleShowBlog}>Read More</button>
          </div>
        </span>
      </div>
      <div className="blog-thumbnail">
        <img
          src={thumbnail}
          alt="blog thumbnail"
          onClick={handleShowBlog}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default BlogCard;
