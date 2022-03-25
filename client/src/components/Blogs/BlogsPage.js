import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogCard from "./BlogCard";
import BlogSearch from "./BlogSearch";
import Blog from "./Blog";

function BlogsPage() {
  const [blogsArray, setBlogsArray] = useState([]);
  const [showBlog, setShowBlog] = useState(false);
  const [clickedBlog, setClickedBlog] = useState("");

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

  const clickedBlogObj = blogsArray.find((blog) => blog.id === clickedBlog);

  return (
    <div className="blogs-page-container">
      <div className="blogs-page-forms">
        <BlogSearch />
        {newBlogForm}
      </div>
      <div>
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
  );
}

export default BlogsPage;
