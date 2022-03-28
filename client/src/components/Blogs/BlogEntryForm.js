import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import GTR from "../../style/images/GTR.jpg";
import Bloggers from "../../style/images/UndrawBlog.png";

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

      setTitle("")
      setThumbnail("")
      setBlogEntry("")
  }

  return (
    <div className="new-blog-container">
      {/* <div className="blog-page-intro">
        <div className="blog-intro-banner">
          <img src={GTR} alt="GTR open road" />
        </div>
      </div> */}

      <div class="custom-shape-divider-top-1648484410">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="form-about">
        <span>
          <p>Getting Started</p>
        </span>
        <div className="undraw-blog">
          <img src={Bloggers} />
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
