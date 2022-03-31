import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogCard from "./BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion/dist/framer-motion";
import Blog from "./Blog";
import Road from "../../style/images/Road.jpg";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

function BlogsPage({ blogsArray, setBlogsArray }) {
  const [showBlog, setShowBlog] = useState(false);
  const [clickedBlog, setClickedBlog] = useState("");
  const [searchBlog, setSearchBlog] = useState("");
  const [editBlog, setEditBlog] = useState(false);
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
        "X-RapidAPI-Key": "6c5c904991msh1c71df644d278c1p173e5cjsndc2a28f5c4ca",
      },
    };
    fetch(
      "https://free-news.p.rapidapi.com/v1/search?q=Car%20Car&lang=en",
      options
    )
      .then((response) => response.json())
      .then((response) => setNewsArray(response.articles));
  }, []);

  const displayNewsCard = newsArray.map((news) => {
    return <NewsCard key={uuidv4()} {...news} />;
  });

  const blogIdArray = blogsArray.map((blog) => blog.id);

  function changeShowBlogState(id) {
    setShowBlog(true);
    setEditBlog(false);
    setClickedBlog(id);
    setSearchBlog("");
  }

  function showNextBlogPage() {
    setEditBlog(false);
    setClickedBlog((prev) => {
      if (blogsArray[blogsArray.length - 1].id === prev) {
        return prev;
      } else {
        return blogsArray[blogIdArray.indexOf(prev) + 1].id;
      }
    });
  }

  function changeBackToBlogDispaly() {
    setEditBlog(false);
    if (blogsArray[0].id === clickedBlog) {
      setShowBlog(false);
    } else {
      setClickedBlog((prev) => {
        return blogsArray[blogIdArray.indexOf(prev) - 1].id;
      });
    }
  }

  function showRelatedBlog(id) {
    window.scrollTo(0, 0);
    setEditBlog(false);
    setClickedBlog(id);
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
    setEditBlog(false);
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
          Connecting Through Conversation
        </motion.h2>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
        >
          <button onClick={handleExploreBlogs}>Explore</button>
          <Link to="/new_blog">
            <button>Write Blog</button>
          </Link>
        </motion.div>
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
        <div className="blog-body-container">
          {showBlog ? null : (
            <div className="blogs-page-forms">{searchBlogForm}</div>
          )}

          <motion.div
            className="blog-news-container"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeIn" }}
          >
            <div className="blog-display">
              {showBlog ? (
                <Blog
                  editBlog={editBlog}
                  setEditBlog={setEditBlog}
                  {...clickedBlogObj}
                  handleBlogUpdate={handleBlogUpdate}
                  handleDeleteBlog={handleDeleteBlog}
                  changeBackToBlogDispaly={changeBackToBlogDispaly}
                  showNextBlogPage={showNextBlogPage}
                  blogsArray={blogsArray}
                  showRelatedBlog={showRelatedBlog}
                />
              ) : (
                displayBlogCard
              )}
            </div>

            {showBlog ? null : (
              <div className="news-container">
                <p className="news-title">Related News</p> {displayNewsCard}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
