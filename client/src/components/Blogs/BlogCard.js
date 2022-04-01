import React, { useState } from "react";

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
  const [imgUrlInvalid, setImgUrlInvalid] = useState(false);

  function handleShowBlog() {
    changeShowBlogState(id);
  }

  function handleImgError() {
    setImgUrlInvalid(true);
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
        {imgUrlInvalid ? null : (
          <img
            src={thumbnail}
            alt="blog thumbnail"
            onClick={handleShowBlog}
            loading="lazy"
            onError={handleImgError}
          />
        )}
      </div>
    </div>
  );
}

export default BlogCard;
