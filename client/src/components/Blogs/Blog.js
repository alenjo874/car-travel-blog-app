import React, { useState } from "react";

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
  const [editBlog, setEditBlog] = useState(false);

  function handleEditBlog() {
    setEditBlog(true);
  }

 function handleNewTitle(e) {

 }

  return (
    <div className="user-blog-container">
      <div className="user-blog-thumbnail">
        <img src={thumbnail} alt="thumbnail for blog" />
      </div>
      <div>
        <div>
          <p>{user.name}</p>
          <p>{create_date}</p>
          {editBlog ? (
            <input placeholder="title" value={title} onChange={handleNewTitle}></input>
          ) : (
            <h3>{title}</h3>
          )}
        </div>
        <div>{blog_entry}</div>
      </div>
      <div>
        <p>{like}</p>
        <button>+</button>
        <button onClick={handleEditBlog}>Edit</button>
      </div>

      <button onClick={changeBackToBlogDispaly}>Back</button>
    </div>
  );
}

export default Blog;
