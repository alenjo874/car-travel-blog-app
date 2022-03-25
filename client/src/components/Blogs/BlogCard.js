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
    <div className="blog-card-container" onClick={handleShowBlog}>
      <div className="blog-card-teaser">
        <span>
          <h5>{title}</h5>
          <p>{blog_entry}</p>
        </span>
      </div>
      <div className="blog-thumbnail">
        <img src={thumbnail} alt="blog thumbnail" />
      </div>
    </div>
  );
}

export default BlogCard;
