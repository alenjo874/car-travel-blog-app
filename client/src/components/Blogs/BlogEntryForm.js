import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import GTR from "../../style/images/GTR.jpg";

function BlogEntryForm({ setBlogsArray }) {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [blogEntry, setBlogEntry] = useState("");

  function submitNewBlog(e) {
    e.preventDefault();
    const newBlogObj = {
      title: title,
      blog_entry: blogEntry,
      thumbnail: thumbnail,
      user_id: 19,
    };

    fetch("/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlogObj),
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogsArray((prev) => [...prev, data]);
      });
  }

  return (
    <div className="new-blog-container">
      <div className="blog-page-intro">
        <div className="blog-intro-banner">
          <img src={GTR} alt="GTR open road" />
        </div>
      </div>

      <motion.form
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        onSubmit={submitNewBlog}
      >
        <label>Blog Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Thumbnail</label>
        <input
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        ></input>
        <label>Blog Entry</label>
        <textarea
          value={blogEntry}
          onChange={(e) => setBlogEntry(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </motion.form>
    </div>
  );
}

export default BlogEntryForm;
