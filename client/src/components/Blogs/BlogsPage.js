import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogCard from "./BlogCard";

function BlogsPage() {
  const [blogsArray, setBlogsArray] = useState([]);

  useEffect(() => {
    fetch("/blogs")
      .then((res) => res.json())
      .then(setBlogsArray);
  }, []);

  const displayBlogCard = blogsArray.map((blog) => {
    return <BlogCard key={uuidv4()} {...blog} />;
  });

  return <div>{displayBlogCard}</div>;
}

export default BlogsPage;
