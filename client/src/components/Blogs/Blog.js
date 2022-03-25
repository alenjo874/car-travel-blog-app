import React from "react";

function Blog({
  id,
  title,
  blog_entry,
  thumbnail,
  like,
  changeBackToBlogDispaly,
  user,
  create_date,
}) {
  return (
    <div className="user-blog-container">
      <div className="user-blog-thumbnail">
        <img src={thumbnail} alt="thumbnail for blog" />
      </div>
      <div>
        <div>
          <p>{user.name}</p>
          <p>{create_date}</p>
          <h3>{title}</h3>
        </div>
        <div>{blog_entry}</div>
      </div>

      <div>
        <p>{like}</p>
        <button>+</button>
      </div>

      <button onClick={changeBackToBlogDispaly}>Back</button>
    </div>
  );
}

export default Blog;
