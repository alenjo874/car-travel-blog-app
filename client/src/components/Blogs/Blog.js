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
    setEditBlog((prev) => !prev);
  }

  function handleNewTitle(e) {}

  const editBlogForm = (
    <form>
      <label>Title</label>
      <input value={title}></input>
      <label>Entry</label>
      <textarea value={blog_entry}></textarea>
    </form>
  );

  const editBtn = <button onClick={handleEditBlog}>Edit</button>;
  const cancelEditBtn = <button onClick={handleEditBlog}>Cancel</button>;
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
        {editBlog ? cancelEditBtn : editBtn}
      </div>
      <button onClick={changeBackToBlogDispaly}>Back</button>
      <div className="blog-edit-form-container">
        {editBlog ? editBlogForm : null}
      </div>
    </div>
  );
}

export default Blog;
