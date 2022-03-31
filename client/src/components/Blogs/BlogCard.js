import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function BlogCard({
  id,
  title,
  blog_entry,
  thumbnail,
  like,
  user,
  changeShowBlogState,
  blog_teaser,
}) {
  function handleShowBlog() {
    changeShowBlogState(id);
  }

  return (
    <div className="blog-card-container">
      <div className="blog-card-teaser">
        <span>
          <h5 onClick={handleShowBlog}>{title}</h5>
          <p onClick={handleShowBlog}>{blog_teaser}...</p>
          <p>
            Author: <b>{user.name}</b>
          </p>
          <div>
            <button onClick={handleShowBlog}>Read More</button>
          </div>
        </span>
      </div>
      <div className="blog-thumbnail">
        {/* <img
          src={thumbnail}
          alt="blog thumbnail"
          onClick={handleShowBlog}
          loading="lazy"
        /> */}
        <LazyLoadImage
          src={thumbnail}
          effect="blur"
          onClick={handleShowBlog}
          alt="blog thumbnail"
        />
      </div>
    </div>
  );
}

export default BlogCard;
