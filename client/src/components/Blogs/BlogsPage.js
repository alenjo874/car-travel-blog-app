import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogCard from "./BlogCard";

import Blog from "./Blog";
// import Mustang from "../../style/images/Mustang.jpg";

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

  const displayBlogCard = blogsArray.map((blog) => {
    return (
      <BlogCard
        key={uuidv4()}
        {...blog}
        changeShowBlogState={changeShowBlogState}
      />
    );
  });

  const newBlogForm = (
    <form>
      <label>New Blog</label>
      <input></input>
    </form>
  );

  function handleSearch(e) {
    e.preventDefault();
    const searchBlogArray = blogsArray.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchBlog.toLowerCase()) ||
        blog.blog_entry.toLowerCase().includes(searchBlog.toLowerCase())
    );
    setBlogsArray(searchBlogArray);
  }

  const searchBlogForm = (
    <div>
      <form onSubmit={handleSearch}>
        <input
          placeholder="search"
          value={searchBlog}
          onChange={(e) => setSearchBlog(e.target.value)}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );

  const clickedBlogObj = blogsArray.find((blog) => blog.id === clickedBlog);

  return (
    <div className="blogs-page-container">
      <div className="blog-banner">
        {/* <img src={Mustang} alt="porsche" /> */}
      </div>
      <div className="blog-list">
        <div className="blogs-page-forms">
          {searchBlogForm}
          {newBlogForm}
        </div>
        <div className="blog-display">
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
