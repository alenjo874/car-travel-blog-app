import React from "react";

function BlogCard({ id, title, blog_entry, thumbnail, like }) {
  return (
    <div className="blog-card-container">
      <div className="blog-card-body">
        <h5>{title}</h5>
        <p>{blog_entry}</p>
        <div>
          <img src={thumbnail} />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
