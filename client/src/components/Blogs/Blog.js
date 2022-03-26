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
  handleBlogUpdate,
}) {
  const [editBlog, setEditBlog] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newBlogEntry, setNewBlogEntry] = useState(blog_entry);

  function handleEditBlog() {
    setEditBlog((prev) => !prev);
  }

  function submitEditBlog(e) {
    e.preventDefault();
    handleBlogUpdate(id, newTitle, newBlogEntry);
    setEditBlog(false);
  }

  const editBlogForm = (
    <form onSubmit={submitEditBlog}>
      <label>Title</label>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      ></input>
      <label>Entry</label>
      <textarea
        value={newBlogEntry}
        onChange={(e) => setNewBlogEntry(e.target.value)}
      ></textarea>
      <button>Submit</button>
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
