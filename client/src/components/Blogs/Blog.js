import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

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
    <motion.form
      onSubmit={submitEditBlog}
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      exit={{ y: -5, opacity: 0 }}
    >
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
    </motion.form>
  );

  const editBtn = <button onClick={handleEditBlog}>Edit</button>;
  const cancelEditBtn = <button onClick={handleEditBlog}>Cancel</button>;
  const displayUserCategories = user.category.split(" ").map((category) => {
    return <p>{category}</p>;
  });

  return (
    <div className="user-blog-container">
      <div className="user-blog-columns">
        <div className="blog-col left">
          <div className="user-blog-thumbnail">
            <h3>{title}</h3>
            <img src={thumbnail} alt="thumbnail for blog" />
          </div>
          <div className="user-blog-entry">
            <div>
              <p className="created-date">Created At: {create_date}</p>
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
            <AnimatePresence>{editBlog ? editBlogForm : null}</AnimatePresence>
          </div>
        </div>
        <div className="blog-col right">
          <div className="user-blog-info">
            <p className="about-head">About the Author</p>
            <div className="user-profile-picture">
              <img src={user.profile_picture} />
            </div>
            <div className="user-category">
            <p className="about-head">Interests</p>
              <span>{displayUserCategories}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
