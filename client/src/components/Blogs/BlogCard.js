import React from "react";

function BlogCard({ id, title, blog_entry, thumbnail, like }) {
  return (
    <div className="blog-card-container">
      <div className="blog-card-teaser">
        <span>
          <h5>{title}</h5>
          <p>{blog_entry}</p>
        </span>
        <div className="blog-thumbnail">
          <img src={thumbnail} alt="blog thumbnail" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
