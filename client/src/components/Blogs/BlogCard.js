import React from "react";

function BlogCard({
  id,
  title,
  blog_entry,
  thumbnail,
  like,
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
        </span>
      </div>
      <div className="blog-thumbnail">
        <img src={thumbnail} alt="blog thumbnail" onClick={handleShowBlog} />
      </div>
    </div>
  );
}

export default BlogCard;
