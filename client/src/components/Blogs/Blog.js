import React, { useState, useEffect } from "react";
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
  handleDeleteBlog,
  showNextBlogPage,
  blogsArray,
}) {
  const [editBlog, setEditBlog] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newBlogEntry, setNewBlogEntry] = useState(blog_entry);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleEditBlog() {
    setEditBlog((prev) => !prev);
  }

  function submitEditBlog(e) {
    e.preventDefault();
    handleBlogUpdate(id, newTitle, newBlogEntry);
    setEditBlog(false);
  }

  function deleteBlog(e) {
    e.preventDefault();
    fetch(`/blogs/${id}`, {
      method: "DELETE",
    });
    handleDeleteBlog(id);
  }

  const editBlogForm = (
    <motion.form
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
      <button onClick={submitEditBlog}>Submit</button>
      <button onClick={deleteBlog}>Delete Blog</button>
    </motion.form>
  );

  const editBtn = <button onClick={handleEditBlog}>Edit</button>;
  const cancelEditBtn = <button onClick={handleEditBlog}>Cancel</button>;
  const displayUserCategories = user.category.split(" ").map((category) => {
    return <p>{category}</p>;
  });

  const blogPageNumber = blogsArray.map((blog) => blog.id).indexOf(id);

  return (
    <div className="user-blog-container">
      <div className="user-blog-columns">
        <div className="blog-col left">
          <div className="user-blog-head-btn">
            <button onClick={changeBackToBlogDispaly}>Back</button>
            <p>
              {blogPageNumber + 1} of {blogsArray.length}
            </p>
            <button onClick={showNextBlogPage}>Next</button>
          </div>
          <div className="user-blog-thumbnail">
            <h3>{title}</h3>
            <img src={thumbnail} alt="thumbnail for blog" />
          </div>
          <div className="user-blog-entry">
            <div>
              <p className="created-date">Created At: {create_date}</p>
            </div>
            <div>
              <p> {blog_entry}</p>
            </div>
          </div>

          <div>{editBlog ? cancelEditBtn : editBtn}</div>
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
