import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogCard from "./BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Blog from "./Blog";
import BlogEntryForm from "./BlogEntryForm";

function BlogsPage() {
  const [blogsArray, setBlogsArray] = useState([]);
  const [showBlog, setShowBlog] = useState(false);
  const [clickedBlog, setClickedBlog] = useState("");
  const [searchBlog, setSearchBlog] = useState("");

  useEffect(() => {
    fetch("/blogs")
      .then((res) => res.json())
      .then(setBlogsArray);
  }, []);

  function changeShowBlogState(id) {
    setShowBlog(true);
    setClickedBlog(id);
  }

  function changeBackToBlogDispaly() {
    setShowBlog(false);
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
    <div>
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
    </div>
  );

  const clickedBlogObj = blogsArray.find((blog) => blog.id === clickedBlog);

  return (
    <div className="blogs-page-container">
      <div className="blog-banner"></div>
      <div className="blog-list">
        <div className="blog-display">
          <div className="blogs-page-forms">{searchBlogForm}</div>
          {showBlog ? (
            <Blog
              {...clickedBlogObj}
              changeBackToBlogDispaly={changeBackToBlogDispaly}
            />
          ) : (
            displayBlogCard
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
