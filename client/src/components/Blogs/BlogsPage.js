import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogCard from "./BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion/dist/framer-motion";
import Blog from "./Blog";
import BlogEntryForm from "./BlogEntryForm";
import Road from "../../style/images/Road.jpg";

function BlogsPage({ blogsArray, setBlogsArray }) {
  const [showBlog, setShowBlog] = useState(false);
  const [clickedBlog, setClickedBlog] = useState("");
  const [searchBlog, setSearchBlog] = useState("");

  function changeShowBlogState(id) {
    setShowBlog(true);
    setClickedBlog(id);
  }

  function showNextBlogPage() {
    setClickedBlog((prev) => {
      if (blogsArray[blogsArray.length - 1].id === prev) {
        return prev;
      } else {
        console.log(prev);
        return prev + 1;
      }
    });
  }

  function changeBackToBlogDispaly() {
    if (blogsArray[0].id === clickedBlog) {
      setShowBlog(false);
    } else {
      setClickedBlog((prev) => prev - 1);
    }
  }

  const searchBlogArray = blogsArray.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchBlog.toLowerCase()) ||
      blog.blog_entry.toLowerCase().includes(searchBlog.toLowerCase())
  );

  const displayBlogCard = searchBlogArray.map((blog) => {
    return (
      <BlogCard
        key={uuidv4()}
        {...blog}
        changeShowBlogState={changeShowBlogState}
      />
    );
  });

  function handleSearch(e) {
    e.preventDefault();
  }

  const searchBlogForm = (
    <motion.div
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
      className="search-form-container"
    >
      <form onSubmit={handleSearch} className="search">
        <input
          placeholder="search"
          value={searchBlog}
          className="search-term"
          onChange={(e) => setSearchBlog(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </motion.div>
  );

  const clickedBlogObj = blogsArray.find((blog) => blog.id === clickedBlog);

  function handleBlogUpdate(id, newTitle, newEntry) {
    const editBlogObj = { title: newTitle, blog_entry: newEntry };

    fetch(`blogs/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...editBlogObj }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((newEditBlogObj) => {
        const newEditBlogArray = blogsArray.map((blog) => {
          if (blog.id === newEditBlogObj.id) {
            return { ...blog, ...newEditBlogObj };
          } else {
            return blog;
          }
        });

        setBlogsArray(newEditBlogArray);
      });
  }

  function handleExploreBlogs() {
    setShowBlog(true);
    setClickedBlog(blogsArray[0].id);
  }

  const blogIntroPage = (
    <div className="blog-page-intro">
      <span className="intro-overlay">
        <motion.p
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          Cars & Travel
        </motion.p>
        <motion.h2
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeIn" }}
        >
          Tell your Story Today
        </motion.h2>
        <motion.button
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
          onClick={handleExploreBlogs}
        >
          Explore
        </motion.button>
      </span>
      <div className="blog-intro-banner">
        <img src={Road} loading="lazy" alt="open road" />
      </div>
    </div>
  );

  function handleDeleteBlog(id) {
    setShowBlog(false);
    const deleteBlogsArray = blogsArray.filter((blog) => blog.id !== id);
    setBlogsArray(deleteBlogsArray);
  }

  return (
    <div className="blogs-page-container">
      <div className="blog-banner"></div>
      <div className="blog-list">
        {showBlog ? null : blogIntroPage}
        <div>
          {/* <div className="blogs-page-forms">{searchBlogForm}</div> */}
          <motion.div
            className="blog-display"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
          >
            {showBlog ? (
              <Blog
                {...clickedBlogObj}
                handleBlogUpdate={handleBlogUpdate}
                handleDeleteBlog={handleDeleteBlog}
                changeBackToBlogDispaly={changeBackToBlogDispaly}
                showNextBlogPage={showNextBlogPage}
                blogsArray={blogsArray}
              />
            ) : (
              displayBlogCard
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
